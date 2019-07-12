"use strict";

var mtjwxsdk = function (e) {
  "use strict";

  var o,
      t,
      g = { logServerUrl: "https://hmma.baidu.com/mini.gif", maxRequestRetryCount: 5, requestRetryFirstDelay: 1e3, requestRetryMultiple: 4, maxRequestDataLength: 204800, maxUint8: 255, maxUint32: 4294967295, enabledEvents: { app: ["onShow", "onHide", "onError"], page: ["onShow", "onHide"] }, storageKeys: { uuid: "mtj_uuid", userInfo: "mtj_user", shareCount: "mtj_scnt" } },
      d = { type: 1 },
      p = { aso: {} },
      r = function r() {
    return "undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(Math.random() * g.maxUint32);
  },
      a = function a(e, t) {
    return "[object " + t + "]" === {}.toString.call(e);
  },
      n = function n(r) {
    return (a(r, "Object") || a(r, "Array")) && Object.keys(r).forEach(function (e) {
      var t = r[e];a(t, "Object") || a(t, "Array") ? r[e] = n(t) : r[e] = "" + t;
    }), r;
  },
      i = function i(e) {
    return a(e, "String") && /^\d{11}$/.test(e);
  },
      u = function u(e) {
    return a(e, "String") && 28 === e.length;
  },
      c = 0,
      s = function s(r) {
    return new Promise(function (t, n) {
      if (r.data = r.data || {}, r.data.v = "1.8.4", r.data.rqc = ++c, e = r.data, !(JSON.stringify(e).length <= g.maxRequestDataLength)) return c--, n(new Error("invalid data"));var e;r.success = function (e) {
        return t(e);
      }, r.fail = function (e) {
        return n(e);
      }, function t(n) {
        var r = 1 < arguments.length && undefined !== arguments[1] ? arguments[1] : g.requestRetryFirstDelay;return o.request({ url: n.url, data: n.data, header: Object.assign({ "content-type": "application/json" }, n.header), method: n.method || "POST", dataType: n.dataType || "json", success: function success(e) {
            delete n.data.rtc, n.success && n.success(e);
          }, fail: function fail(e) {
            n.data.rtc = (n.data.rtc || 0) + 1, n.data.rtc <= g.maxRequestRetryCount ? setTimeout(function () {
              return t(n, r * g.requestRetryMultiple);
            }, r) : (delete n.data.rtc, n.fail && n.fail(e));
          } });
      }(r);
    });
  },
      f = function f(e, t) {
    var n = a(t, "Object") ? JSON.stringify(t) : "" + t;s({ url: g.logServerUrl, dataType: "string", data: Object.assign({}, d, { et: "error", en: e, ep: { ex: n }, rid: r() }) });
  },
      h = function h(e) {
    e.rid = r(), e.aso = e.aso || {};var t = { url: g.logServerUrl, dataType: "string", data: Object.assign({}, d, e) };s(t).catch(function (e) {
      return f("sendRequest", e);
    });
  },
      y = function y(e) {
    try {
      return o.getStorageSync(e);
    } catch (e) {
      f("getStorageSync", e);
    }
  },
      m = function m(e, t) {
    try {
      o.setStorageSync(e, t);
    } catch (e) {
      f("setStorageSync", e);
    }
  },
      l = function l() {
    return new Promise(function (e) {
      var t = y(g.storageKeys.uuid);if (a(t, "String") && 32 === t.length) return e(t);t = "10000000100040008000100000000000".replace(/[018]/g, function (e) {
        return (e ^ ("undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] : Math.floor(Math.random() * g.maxUint8)) & 15 >> e / 4).toString(16);
      }), m(g.storageKeys.uuid, t), e(t);
    });
  },
      v = function v() {
    return t || (d.sid = r(), d.rqc = 0, t = Promise.all([l(), new Promise(function (t) {
      var e = y(g.storageKeys.userInfo),
          n = a(e, "Object") ? e : {};o.getSetting({ success: function success(e) {
          e.authSetting && e.authSetting["scope.userInfo"] ? o.getUserInfo({ success: function success(e) {
              delete e.userInfo.errMsg, t(Object.assign(n, e.userInfo));
            }, fail: function fail() {
              t(n);
            } }) : t(n);
        }, fail: function fail() {
          t(n);
        } });
    }), new Promise(function (t) {
      o.getSystemInfo({ success: function success(e) {
          delete e.errMsg, t(e);
        }, fail: function fail() {
          t({});
        } });
    }), new Promise(function (t) {
      o.getNetworkType({ success: function success(e) {
          delete e.errMsg, t(e);
        }, fail: function fail() {
          t({});
        } });
    }), g.getLocation ? new Promise(function (t) {
      o.getLocation({ type: "wgs84", success: function success(e) {
          delete e.errMsg, t(e);
        }, fail: function fail() {
          t({});
        } });
    }) : Promise.resolve()]).then(function (e) {
      d.uuid = e[0], p.user = n(e[1]), p.system = n(e[2]), p.network = n(e[3]), e[4] && (p.location = n(e[4])), p.system.platform;
    }));
  },
      j = { onLaunch: function onLaunch() {
      h({ et: "app", en: "launch" });
    }, onShow: function onShow() {
      var t = 0 < arguments.length && undefined !== arguments[0] ? arguments[0] : {};return p.aso.scene = "" + (t.scene || ""), t.referrerInfo && t.referrerInfo.appId ? p.aso.referrerInfo = t.referrerInfo : delete p.aso.referrerInfo, p.aso.path = t.path || "", p.aso.query = Object.keys(t.query || {}).map(function (e) {
        return { key: e, value: t.query[e] };
      }), v().then(function () {
        return e = t.shareTicket, new Promise(function (t) {
          if (!e) return t();o.getShareInfo({ shareTicket: e, success: function success(e) {
              delete e.errMsg, t(e);
            }, fail: function fail() {
              t({});
            } });
        });var e;
      }).then(function (e) {
        e ? p.aso.shareInfo = e : delete p.aso.shareInfo, h(Object.assign({ et: "app", en: "show" }, p));
      }).catch(function (e) {
        f("app.onShow", e);
      });
    }, onHide: function onHide() {
      h({ et: "app", en: "hide" });
    }, onError: function onError(e) {
      var t = a(e, "Object") ? JSON.stringify(n(e)) : "" + e;h({ et: "app", en: "error", ep: { ex: t } });
    } },
      S = function S(e, t) {
    return h({ et: "page", en: e, ep: t });
  },
      w = { onLoad: function onLoad() {
      S("load");
    }, onShow: function onShow() {
      var e = getCurrentPages(),
          t = e[e.length - 1];return d.path = t.route, d.query = Object.keys(t.options).map(function (e) {
        return { key: e, value: t.options[e] };
      }).filter(function (e) {
        return "mtj_qrid" !== e.key && "mtj_lkid" !== e.key && "mtj_shuuid" !== e.key;
      }), v().then(function () {
        h(Object.assign({ et: "page", en: "show" }, p));
      }).catch(function (e) {
        f("page.onShow", e);
      });
    }, onReady: function onReady() {
      S("ready");
    }, onHide: function onHide() {
      S("hide");
    }, onUnload: function onUnload() {
      S("unload");
    }, onPullDownRefresh: function onPullDownRefresh() {
      S("pullDownRefresh");
    }, onReachBottom: function onReachBottom() {
      S("reachBottom");
    }, onPageScroll: function onPageScroll() {
      S("pageScroll");
    }, onTabItemTap: function onTabItemTap(e) {
      S("tabItemTap", e);
    }, onShareAppMessage: function onShareAppMessage(e) {
      var t = 1 < arguments.length && undefined !== arguments[1] ? arguments[1] : {},
          n = y(g.storageKeys.shareCount);n = (Number.isInteger(n) ? n : 0) + 1, m(g.storageKeys.shareCount, n);var r = { cnt: n, from: e.from, path: t.path };if (!r.path) {
        var o = d.query.map(function (e) {
          return e.key + "=" + e.value;
        }).join("&");r.path = d.path + (o ? "?" + o : "");
      }t.title && (r.title = "" + t.title), e.target && (r.target = JSON.stringify(e.target)), h(Object.assign({ et: "share", en: "action", ep: r }, p));var a = p.aso.query.filter(function (e) {
        return "mtj_shuuid" === e.key;
      }),
          i = a[0] ? a[0].value.split("_") : [];d.uuid !== i[i.length - 1] && i.push(d.uuid);var u,
          c,
          s,
          f,
          l = i.slice(Math.max(0, i.length - 3)).join("_");return t.path = (u = r.path, c = "mtj_shuuid", s = l, f = 0 < (u = u.replace(new RegExp(c + "=[^&]*", "g"), "").replace(/(\?|&)&/g, "$1").replace(/(\?|&)$/g, "")).indexOf("?") ? "&" : "?", u + f + c + "=" + encodeURIComponent(s)), t;
    } },
      b = { trackEvent: function trackEvent(e) {
      var t,
          r = 1 < arguments.length && undefined !== arguments[1] ? arguments[1] : {};if (!a(t = e, "String") || !/^[a-z][a-z0-9_]{0,31}$/.test(t)) return Promise.reject(new Error("事件名称不合法"));var n = Object.keys(r).filter(function (e) {
        return a(n = e, "String") && /^[a-z0-9_]{1,32}$/.test(n) && (t = r[e], a(t, "String") || a(t, "Number"));var t, n;
      }).map(function (e) {
        return { key: "" + e, value: "" + r[e], type: a(r[e], "String") ? "string" : "number" };
      });return v().then(function () {
        h(Object.assign({ et: "event", en: "" + e, ep: { data: n } }, p));
      }).catch(function (e) {
        f("trackEvent", e);
      });
    }, setUserInfo: function setUserInfo() {
      var e = 0 < arguments.length && undefined !== arguments[0] ? arguments[0] : {},
          n = e.tel,
          r = e.openId;return v().then(function () {
        var e = y(g.storageKeys.userInfo),
            t = a(e, "Object") ? e : {};return i(n) && (t.tel = p.user.tel = n.substr(n.length - 11)), u(r) && (t.openId = p.user.openId = r), (t.tel || t.openId) && m(g.storageKeys.userInfo, t), a(n, "Undefined") || i(n) ? a(r, "Undefined") || u(r) ? undefined : Promise.reject(new Error("openid不合法")) : Promise.reject(new Error("手机号不合法"));
      }).catch(function (e) {
        f("setUserInfo", e);
      });
    } },
      I = App,
      k = Page,
      O = function O(e, t, n) {
    var r = t[e];t[e] = function (e) {
      n.call(this, e), r && r.call(this, e);
    };
  },
      R = function R(t) {
    g.enabledEvents.app.forEach(function (e) {
      O(e, t, j[e]);
    }), t.mtj = b, I(t);
  },
      q = function q(a) {
    g.enabledEvents.page.forEach(function (e) {
      O(e, a, w[e]);
    }), ["onShareAppMessage"].forEach(function (e) {
      var t, n, r, o;r = w[t = e], o = (n = a)[t], n[t] = function (e) {
        var t = o && o.call(this, e);return r.call(this, e, t);
      };
    }), k(a);
  },
      P = function P() {
    var e, t;e = wx, o = e;try {
      t = require("./mtj-wx-sdk.config.js");
    } catch (e) {
      return undefined;
    }t && t.appKey ? (d.key = t.appKey, g.getLocation = t.getLocation || false, t.hasPlugin ? module.exports = { App: R, Page: q } : (App = R, Page = q)) : console.error("请设置mtj-wx-sdk.config.js文件中的appKey字段");
  };return P(), e.init = P, e;
}({});