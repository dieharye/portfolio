(this.webpackJsonpmitesh = this.webpackJsonpmitesh || []).push([
  [6],
  {
    14: function (e, n, t) {},
    15: function (e, n, t) {
      e.exports = t(25);
    },
    20: function (e, n, t) {},
    25: function (e, n, t) {
      "use strict";
      t.r(n);
      var o = t(0),
        a = t.n(o),
        i = t(8),
        r = t.n(i),
        c = (t(20), t(14), t(4)),
        l = t(9),
        s = t.n(l),
        d = Object(c.a)(function () {
          return t.e(23).then(t.bind(null, 631));
        }),
        u = Object(c.a)(function () {
          return Promise.all([t.e(14), t.e(25)]).then(t.bind(null, 632));
        }),
        h = s()(function (e) {
          return a.a.createElement(
            "div",
            { className: "App" },
            a.a.createElement(
              "div",
              { className: "container-fluid overflow-particle" },
              a.a.createElement(
                "div",
                {
                  className: "row",
                  style: {
                    background: "#00003f",
                    height: "100vh",
                    overflow: "auto",
                  },
                },
                a.a.createElement(
                  "div",
                  {
                    className: "col-sm-12 col-md-12 col-lg-12 col-xl-3",
                    style:
                      e.windowWidth > 1200
                        ? {
                            borderRight: "1px solid #7ef0ff",
                            background: "#00003f",
                            textAlign: "center",
                          }
                        : { background: "#00003f", textAlign: "center" },
                  },
                  a.a.createElement(d, null)
                ),
                a.a.createElement(
                  "div",
                  {
                    className: "col-sm-12 col-lg-12 col-md-12 col-xl-9",
                    style: { background: "#00003f" },
                  },
                  a.a.createElement(
                    "header",
                    { className: "App-header" },
                    a.a.createElement(u, null)
                  )
                ),
                a.a.createElement(
                  "div",
                  {
                    style:
                      e.windowWidth > 1200
                        ? {
                            position: "absolute",
                            right: 15,
                            marginTop: 10,
                            bottom: 10,
                          }
                        : { display: "none" },
                  },
                  a.a.createElement(
                    "label",
                    null,
                    "Designed and Developed by",
                    a.a.createElement(
                      "span",
                      { style: { fontWeight: "bold" } },
                      " Michael Gordon"
                    )
                  )
                )
              )
            )
          );
        }),
        f = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function g(e, n) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var t = e.installing;
              null != t &&
                (t.onstatechange = function () {
                  "installed" === t.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                        ),
                        n && n.onUpdate && n.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        n && n.onSuccess && n.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      var w = t(3),
        m = t(12),
        p = Object(m.a)();
      w.a.initialize("UA-162840601-2", { debug: !0 }),
        w.a.set({ page: window.location.pathname + window.location.hash }),
        w.a.pageview(window.location.pathname + window.location.hash),
        p.listen(function (e) {
          w.a.set({ page: e.pathname + e.hash }),
            w.a.pageview(e.pathname + e.hash);
        }),
        r.a.render(a.a.createElement(h, null), document.getElementById("root")),
        (function (e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var n = "".concat("", "/service-worker.js");
              f
                ? (!(function (e, n) {
                    fetch(e, { headers: { "Service-Worker": "script" } })
                      .then(function (t) {
                        var o = t.headers.get("content-type");
                        404 === t.status ||
                        (null != o && -1 === o.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : g(e, n);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(n, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
                    );
                  }))
                : g(n, e);
            });
          }
        })();
    },
  },
  [[15, 7, 11]],
]);
