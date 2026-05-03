function safeRef(input) {
  var raw = String(input || "").trim();
  if (!raw) return null;
  var upper = raw.toUpperCase();
  if (!/^[A-Z0-9-]{6,40}$/.test(upper)) return null;
  return upper;
}

function hashString(str) {
  var h = 2166136261;
  for (var i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function clamp01(n) {
  if (n < 0) return 0;
  if (n > 1) return 1;
  return n;
}

function getRoute() {
  return [
    { label: "London Mail Centre", lat: 51.5074, lng: -0.1278 },
    { label: "Birmingham Mail Centre", lat: 52.4862, lng: -1.8904 },
    { label: "Manchester Mail Centre", lat: 53.4808, lng: -2.2426 },
    { label: "Leeds Mail Centre", lat: 53.8008, lng: -1.5491 },
    { label: "Newcastle Mail Centre", lat: 54.9783, lng: -1.6174 }
  ];
}

function statusForIndex(i, last) {
  if (i === 0) return "Accepted";
  if (i >= last) return "In transit";
  if (i === last - 1) return "Out for delivery";
  return "In transit";
}

module.exports = function handler(req, res) {
  try {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "no-store, max-age=0");

    var ref = safeRef(req.query && req.query.ref);
    if (!ref) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: "Invalid reference. Use letters/numbers only." }));
      return;
    }

    var route = getRoute();
    var nowMs = Date.now();
    var h = hashString(ref);
    var cycleMs = 12 * 60 * 1000;
    var phase = (nowMs + (h % cycleMs)) % cycleMs;
    var progress = clamp01(phase / cycleMs);

    var segCount = route.length - 1;
    var scaled = progress * segCount;
    var segIndex = Math.min(segCount - 1, Math.max(0, Math.floor(scaled)));
    var segT = scaled - segIndex;
    var from = route[segIndex];
    var to = route[segIndex + 1];

    var current = {
      lat: lerp(from.lat, to.lat, segT),
      lng: lerp(from.lng, to.lng, segT),
      segmentIndex: segIndex,
      segmentT: segT,
      progress: progress
    };

    var revealed = Math.min(route.length, Math.max(1, Math.floor(progress * route.length) + 1));
    var startMs = nowMs - Math.round(progress * cycleMs);
    var events = [];
    for (var i = 0; i < revealed; i++) {
      var tsMs = startMs + Math.round((i / Math.max(1, route.length - 1)) * cycleMs);
      events.push({
        ts: new Date(tsMs).toISOString(),
        status: statusForIndex(i, route.length),
        label: route[i].label,
        lat: route[i].lat,
        lng: route[i].lng
      });
    }

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        ref: ref,
        updatedAt: new Date(nowMs).toISOString(),
        route: route,
        events: events,
        current: current
      })
    );
  } catch (err) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Server error" }));
  }
};

