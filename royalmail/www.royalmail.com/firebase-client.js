import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics, isSupported as analyticsSupported } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
  query,
  where,
  limit
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBY-2xjMvybSqs0Duidwbm3W_SrQLceoUk",
  authDomain: "royalmail-d7ff3.firebaseapp.com",
  projectId: "royalmail-d7ff3",
  storageBucket: "royalmail-d7ff3.firebasestorage.app",
  messagingSenderId: "207125127168",
  appId: "1:207125127168:web:d000f932c80130f03e38e5",
  measurementId: "G-YZXLB63NBS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

analyticsSupported()
  .then((ok) => {
    if (ok) getAnalytics(app);
  })
  .catch(() => {});

const nowIso = () => new Date().toISOString();

const clean = (value) => {
  if (Array.isArray(value)) return value.map(clean);
  if (!value || typeof value !== "object") return value;
  const out = {};
  Object.keys(value).forEach((key) => {
    if (value[key] !== undefined) out[key] = clean(value[key]);
  });
  return out;
};

const safeLocalRemove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (_) {}
  try {
    sessionStorage.removeItem(key);
  } catch (_) {}
};

const persistCompatSession = async (user, remember) => {
  if (!user) {
    safeLocalRemove("rm_session_v1");
    return null;
  }
  const profile = await getUserProfile(user.uid);
  const session = {
    uid: user.uid,
    email: (user.email || "").toLowerCase(),
    name: profile.displayName || user.displayName || [profile.firstName || "", profile.lastName || ""].join(" ").trim(),
    isAdmin: !!profile.isAdmin,
    token: user.uid,
    createdAt: nowIso()
  };
  try {
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem("rm_session_v1", JSON.stringify(session));
  } catch (_) {}
  return session;
};

const adminPaths = ["admins", "adminUsers"];

const getDocData = async (path, id) => {
  const snap = await getDoc(doc(db, path, id));
  return snap.exists() ? snap.data() : null;
};

const isPermissionError = (err) => {
  const code = err && err.code ? String(err.code) : "";
  return code.indexOf("permission-denied") !== -1 || code.indexOf("unauthenticated") !== -1;
};

const getAdminRecord = async (uid) => {
  for (let i = 0; i < adminPaths.length; i += 1) {
    let data = null;
    try {
      data = await getDocData(adminPaths[i], uid);
    } catch (err) {
      if (isPermissionError(err)) continue;
      throw err;
    }
    if (data) return { path: adminPaths[i], data };
  }
  return null;
};

async function getUserProfile(uid) {
  const userDoc = (await getDocData("users", uid)) || {};
  const adminDoc = await getAdminRecord(uid);
  return clean({
    ...userDoc,
    isAdmin: !!(userDoc.isAdmin || (adminDoc && adminDoc.data))
  });
}

async function isAdminUser(uid) {
  const profile = await getUserProfile(uid);
  return !!profile.isAdmin;
}

async function ensureUserDoc(user, extra) {
  if (!user) return null;
  const next = clean({
    email: (user.email || "").toLowerCase(),
    displayName: user.displayName || "",
    firstName: extra && extra.firstName ? extra.firstName : undefined,
    lastName: extra && extra.lastName ? extra.lastName : undefined,
    isAdmin: !!(extra && extra.isAdmin),
    updatedAt: nowIso(),
    createdAt: extra && extra.createdAt ? extra.createdAt : nowIso()
  });
  await setDoc(doc(db, "users", user.uid), next, { merge: true });
  if (next.isAdmin) {
    await setDoc(
      doc(db, "admins", user.uid),
      clean({
        uid: user.uid,
        email: next.email,
        displayName: next.displayName || [next.firstName || "", next.lastName || ""].join(" ").trim(),
        isAdmin: true,
        updatedAt: nowIso(),
        createdAt: next.createdAt || nowIso()
      }),
      { merge: true }
    );
  }
  return next;
}

async function login(email, password, remember) {
  await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
  const cred = await signInWithEmailAndPassword(auth, email, password);
  const profile = await getUserProfile(cred.user.uid);
  await persistCompatSession(
    {
      ...cred.user,
      displayName: profile.displayName || cred.user.displayName || ""
    },
    remember
  );
  return { user: cred.user, profile };
}

async function registerUser(payload) {
  const email = String(payload.email || "").trim().toLowerCase();
  const firstName = String(payload.firstName || "").trim();
  const lastName = String(payload.lastName || "").trim();
  const password = String(payload.password || "");
  const isAdmin = !!payload.isAdmin;
  await setPersistence(auth, browserLocalPersistence);
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const displayName = [firstName, lastName].join(" ").trim();
  if (displayName) {
    await updateProfile(cred.user, { displayName });
  }
  await ensureUserDoc(cred.user, {
    firstName,
    lastName,
    displayName,
    isAdmin,
    createdAt: nowIso()
  });
  const profile = await getUserProfile(cred.user.uid);
  await persistCompatSession(
    {
      ...cred.user,
      displayName: displayName || cred.user.displayName || ""
    },
    true
  );
  return { user: cred.user, profile };
}

async function logoutUser() {
  await signOut(auth);
  safeLocalRemove("rm_session_v1");
}

async function hasAnyAdmin() {
  for (let i = 0; i < adminPaths.length; i += 1) {
    const snap = await getDocs(query(collection(db, adminPaths[i]), limit(1)));
    if (!snap.empty) return true;
  }
  const usersSnap = await getDocs(query(collection(db, "users"), where("isAdmin", "==", true), limit(1)));
  return !usersSnap.empty;
}

async function listUsers() {
  const snap = await getDocs(collection(db, "users"));
  const users = [];
  snap.forEach((row) => {
    users.push(clean({ uid: row.id, ...row.data() }));
  });
  users.sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
  return users;
}

async function saveUserRecord(record) {
  const uid = String(record.uid || "").trim();
  if (!uid) throw new Error("User ID is required.");
  const next = clean({
    uid,
    email: String(record.email || "").trim().toLowerCase(),
    firstName: record.firstName || "",
    lastName: record.lastName || "",
    displayName: record.displayName || [record.firstName || "", record.lastName || ""].join(" ").trim(),
    isAdmin: !!record.isAdmin,
    createdAt: record.createdAt || nowIso(),
    updatedAt: nowIso()
  });
  await setDoc(doc(db, "users", uid), next, { merge: true });
  if (next.isAdmin) {
    await setDoc(doc(db, "admins", uid), clean({
      uid,
      email: next.email,
      displayName: next.displayName,
      isAdmin: true,
      updatedAt: nowIso(),
      createdAt: next.createdAt
    }), { merge: true });
  } else {
    await Promise.all(adminPaths.map(async (path) => {
      try {
        await deleteDoc(doc(db, path, uid));
      } catch (_) {}
    }));
  }
  return next;
}

async function loadAdminSettings() {
  return (await getDocData("settings", "admin")) || { allowlist: [] };
}

async function saveAdminSettings(settings) {
  const next = clean({
    allowlist: Array.isArray(settings.allowlist) ? settings.allowlist : [],
    updatedAt: nowIso()
  });
  await setDoc(doc(db, "settings", "admin"), next, { merge: true });
  return next;
}

async function listPaymentMethods() {
  const snap = await getDocs(collection(db, "paymentMethods"));
  const methods = [];
  snap.forEach((row) => methods.push(clean({ id: row.id, ...row.data() })));
  methods.sort((a, b) => String(b.updatedAt || b.createdAt || "").localeCompare(String(a.updatedAt || a.createdAt || "")));
  return methods;
}

async function savePaymentMethod(method) {
  const id = String(method.id || "").trim() || ("pm_" + Math.random().toString(36).slice(2, 10));
  const next = clean({
    id,
    name: method.name || "",
    type: method.type || "card",
    details: method.details || "",
    enabled: method.enabled !== false,
    createdAt: method.createdAt || nowIso(),
    updatedAt: nowIso()
  });
  await setDoc(doc(db, "paymentMethods", id), next, { merge: true });
  return next;
}

async function deletePaymentMethodById(id) {
  await deleteDoc(doc(db, "paymentMethods", id));
}

async function loadPaymentConfig() {
  return (await getDocData("paymentConfigs", "default")) || {};
}

async function savePaymentConfig(config) {
  const next = clean({ ...config, updatedAt: nowIso() });
  await setDoc(doc(db, "paymentConfigs", "default"), next, { merge: true });
  return next;
}

async function getEnabledPaymentMethods() {
  const methods = await listPaymentMethods();
  return methods.filter((m) => m && m.enabled);
}

async function getPaymentMethodById(id) {
  if (!id) return null;
  return (await getDocData("paymentMethods", id)) || null;
}

async function listShipments() {
  const snap = await getDocs(collection(db, "shipments"));
  const list = [];
  snap.forEach((row) => list.push(clean({ id: row.id, ...row.data() })));
  list.sort((a, b) => String(b.updatedAt || b.createdAt || "").localeCompare(String(a.updatedAt || a.createdAt || "")));
  return list;
}

async function getShipment(ref) {
  if (!ref) return null;
  const direct = await getDoc(doc(db, "shipments", ref));
  if (direct.exists()) return clean({ id: direct.id, ...direct.data() });
  const snap = await getDocs(query(collection(db, "shipments"), where("trackingId", "==", ref), limit(1)));
  if (snap.empty) return null;
  const first = snap.docs[0];
  return clean({ id: first.id, ...first.data() });
}

async function saveShipment(shipment) {
  const trackingId = String(shipment.trackingId || shipment.id || "").trim();
  if (!trackingId) throw new Error("Tracking ID is required.");
  const next = clean({
    ...shipment,
    id: trackingId,
    trackingId,
    publicTracking: shipment.publicTracking !== false,
    createdAt: shipment.createdAt || nowIso(),
    updatedAt: nowIso()
  });
  await setDoc(doc(db, "shipments", trackingId), next, { merge: true });
  return next;
}

async function deleteShipment(ref) {
  if (!ref) return;
  await deleteDoc(doc(db, "shipments", ref));
}

async function markHoldPaid(ref, holdId, email, methodId) {
  const shipment = await getShipment(ref);
  if (!shipment) throw new Error("Shipment not found.");
  const holds = Array.isArray(shipment.holds) ? shipment.holds.slice() : [];
  let activeHold = null;
  for (let i = 0; i < holds.length; i += 1) {
    if (holds[i] && holds[i].id === holdId) {
      activeHold = { ...holds[i] };
      holds[i] = activeHold;
      break;
    }
  }
  if (!activeHold || activeHold.status === "paid" || activeHold.status === "released") {
    throw new Error("This hold is no longer active.");
  }
  activeHold.status = "paid";
  activeHold.paidAt = nowIso();
  activeHold.paidEmail = String(email || "").trim().toLowerCase();
  if (methodId) activeHold.paymentMethodId = methodId;
  const events = Array.isArray(shipment.events) ? shipment.events.slice() : [];
  events.push({
    ts: nowIso(),
    status: "In transit",
    label: "Hold paid. Tracking resumed."
  });
  const next = clean({
    ...shipment,
    holds,
    activeHoldId: null,
    stage: "In transit",
    holdJustPaidAt: nowIso(),
    progressDistanceKm: typeof shipment.holdFrozenProgressKm === "number"
      ? shipment.holdFrozenProgressKm
      : (typeof shipment.progressDistanceKm === "number" ? shipment.progressDistanceKm : 0),
    events,
    updatedAt: nowIso()
  });
  await setDoc(doc(db, "shipments", next.trackingId || ref), next, { merge: true });
  return next;
}

let authReadyResolve;
const authReady = new Promise((resolve) => {
  authReadyResolve = resolve;
});
let authReadyDone = false;

onAuthStateChanged(auth, async (user) => {
  if (!authReadyDone) {
    authReadyDone = true;
    authReadyResolve(user || null);
  }
  if (!user) {
    safeLocalRemove("rm_session_v1");
  }
  window.dispatchEvent(new CustomEvent("rm-auth-changed", { detail: { user: user || null } }));
});

const api = {
  app,
  auth,
  db,
  authReady,
  nowIso,
  login,
  registerUser,
  logoutUser,
  getUserProfile,
  ensureUserDoc,
  isAdminUser,
  hasAnyAdmin,
  listUsers,
  saveUserRecord,
  loadAdminSettings,
  saveAdminSettings,
  listPaymentMethods,
  savePaymentMethod,
  deletePaymentMethodById,
  loadPaymentConfig,
  savePaymentConfig,
  getEnabledPaymentMethods,
  getPaymentMethodById,
  listShipments,
  getShipment,
  saveShipment,
  deleteShipment,
  markHoldPaid,
  persistCompatSession
};

window.RMFirebase = api;
window.RMFirebaseReady = Promise.resolve(api);
window.dispatchEvent(new CustomEvent("rm-firebase-ready", { detail: api }));
