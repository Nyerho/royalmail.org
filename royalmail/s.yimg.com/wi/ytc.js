(function () {
  var root = typeof window !== "undefined" ? window : this;
  root.YAHOO = root.YAHOO || {};
  root.YAHOO.ywa = root.YAHOO.ywa || {};
  root.YAHOO.ywa.I13N = root.YAHOO.ywa.I13N || {};
  if (typeof root.YAHOO.ywa.I13N.fireBeacon !== "function") {
    root.YAHOO.ywa.I13N.fireBeacon = function () {};
  }
})();
