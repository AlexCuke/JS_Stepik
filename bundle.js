"use strict";
(self.webpackChunkuniversal_nurse =
  self.webpackChunkuniversal_nurse || []).push([
  [509],
  {
    85509: (Pt, K, _) => {
      _.d(K, {
        Bs: () => M,
        SX: () => mt,
        ct: () => Ct,
        o0: () => I,
      });
      var e = _(94650),
        j = _(24006),
        x = _(93225),
        v = _(4128),
        E = _(60515),
        Q = _(77579),
        T = _(54004),
        d = _(63900),
        C = _(95698),
        h = _(18505),
        m = _(70262),
        Z = _(39300),
        Y = _(34782),
        J = _(50590),
        G = _(82722),
        O = _(3279),
        W = _(20733),
        p = _(2711),
        $ = _(24280),
        H = _(89653),
        k = _(80529),
        z = _(29495),
        P = _(90293),
        b = _(44726),
        g = _(36895),
        D = _(32428),
        y = _(84464),
        A = _(40865),
        S = _(32643),
        L = _(22819);
      let I = (() => {
        class n {
          constructor(t, i) {
            ((this.configService = t), (this.httpClient = i));
          }
          isEmptyQuery(t, i, c) {
            const a = p.Pj.updateParamsByConfig(t, {
              listName: "unknown",
              queryParams: {},
              initialParams: c ?? {},
            });
            return (0, W.vZ)(a, i);
          }
          loadConfigs(t) {
            return (0, v.D)(
              ...t.map((i) =>
                this.configService.getConfig(i).pipe(
                  (0, T.U)((c) => ({
                    listName: i,
                    config: c,
                  })),
                ),
              ),
            );
          }
          loadTotals(t, i) {
            return (0, v.D)(
              t.reduce(
                (c, { listName: a, config: s }) => ({
                  ...c,
                  [a]: this.getTotalForList(a, (0, b.Xh)(s), i).pipe(
                    (0, T.U)(({ total: o }) => o),
                  ),
                }),
                {},
              ),
            );
          }
          loadFilteredTotals(t, i, c) {
            return (0, v.D)(
              t.reduce(
                (a, { listName: s, config: o, cache: l }) => ({
                  ...a,
                  [s]: this.getTotalForList(s, (0, b.Xh)(o), c, {
                    ...(l?.queryParams ?? {}),
                    ...i,
                  }),
                }),
                {},
              ),
            );
          }
          getTotalForList(t, i, c, a) {
            const s = p.Pj.updateParamsByConfig(i, {
                listName: t,
                queryParams: a ?? {},
                initialParams: this.addSearchIfNeed(c ?? {}),
              }),
              o = p.Pj.updateParamsByConfig(i, {
                listName: t,
                queryParams: {},
                initialParams: this.addSearchIfNeed(c ?? {}),
              });
            return (
              a &&
                !this.isEmptyQuery(i, s, o) &&
                (i.datasource.aggregateTotalByRules.filteredTotal = {
                  type: "dynamic",
                  rules: [],
                }),
              a &&
                "search" in a &&
                a.search &&
                (i.datasource.aggregateTotalByRules.searchTotal = {
                  type: "mixed",
                  rules: ["search"],
                }),
              (i.datasource.aggregateTotalByRules = Object.keys(
                i.datasource.aggregateTotalByRules,
              ).reduce(
                (l, u) =>
                  ["all", "filteredTotal", "searchTotal"].includes(u)
                    ? {
                        ...l,
                        [u]: {
                          ...i.datasource.aggregateTotalByRules[u],
                        },
                      }
                    : l,
                {},
              )),
              this.httpClient
                .post((0, P.w4)(i), {
                  searchParams: {
                    body: JSON.parse(
                      new P.uO(
                        {
                          filter: s,
                          initialFilter: o,
                          sort: void 0,
                          paging: {
                            pageIndex: 0,
                            size: 0,
                          },
                        },
                        i,
                      ).build(),
                    ),
                  },
                })
                .pipe(
                  (0, T.U)((l) => l),
                  (0, T.U)((l) => ({
                    total: (0, P.Zj)(l).all,
                    filteredTotal: (0, P.Zj)(l).filteredTotal,
                    searchTotal: (0, P.Zj)(l).searchTotal,
                  })),
                )
            );
          }
          addSearchIfNeed(t) {
            return {
              ...t,
              search: t.search ?? null,
            };
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.LFG(z.Kd), e.LFG(k.eN));
          }),
          (n.ɵprov = e.Yz7({
            token: n,
            factory: n.ɵfac,
          })),
          n
        );
      })();
      function B(n) {
        const { error: r, ...t } = n;
        return {
          ...t,
        };
      }
      function V(n) {
        return n.lists.reduce(
          (r, t) => ({
            ...r,
            [t.listName]: {
              tabName: t.tabName,
            },
          }),
          {},
        );
      }
      function F(n, r) {
        return Object.keys(n).reduce((t, i) => U(t, i, r), {
          ...n,
        });
      }
      function U(n, r, t) {
        const { failure: i, ...c } = n[r];
        return c.filteredTotal || t
          ? {
              ...n,
              [r]: {
                ...c,
                pending: !0,
              },
            }
          : {
              ...n,
              [r]: c,
            };
      }
      function q(n, r) {
        return Object.keys(r).reduce(
          (t, i) =>
            (function tt(n, r, t) {
              return {
                ...n,
                [t]: {
                  tabName: n[t].tabName,
                  config: r.config ?? n[t].config,
                  ...r,
                },
              };
            })(t, r[i], i),
          {
            ...n,
          },
        );
      }
      function et(n) {
        return Object.keys(n).reduce((r, t) => R(r, t), {
          ...n,
        });
      }
      function R(n, r) {
        const { pending: t, ...i } = n[r];
        return {
          ...n,
          [r]: {
            ...i,
            failure: !0,
          },
        };
      }
      const nt = {
        status: "INITIAL",
        lists: {},
        search: null,
      };
      let M = (() => {
          class n extends $.m1 {
            selectConfig(t) {
              return this.select((i) => ({
                listName: t,
                config: i.lists[t]?.config,
              }));
            }
            constructor(t, i, c) {
              (super(nt),
                (this.scenarioService = t),
                (this.store = i),
                (this.router = c),
                (this.selectState = this.select((a) => a)),
                (this.selectConfigs = this.select((a) =>
                  Object.keys(a.lists ?? {}).reduce(
                    (s, o) =>
                      a.lists[o] && a.lists[o].config
                        ? [
                            ...s,
                            {
                              listName: o,
                              config: a.lists[o].config,
                            },
                          ]
                        : s,
                    [],
                  ),
                ).pipe(
                  (0, d.w)((a) =>
                    (0, v.D)(
                      a.reduce(
                        (s, { listName: o }) => ({
                          ...s,
                          [o]: this.store
                            .select((0, p.I3)(o))
                            .pipe((0, C.q)(1)),
                        }),
                        {},
                      ),
                    ).pipe(
                      (0, T.U)((s) =>
                        a.map((o) => ({
                          ...o,
                          cache: s[o.listName],
                        })),
                      ),
                    ),
                  ),
                )),
                (this.initStart = this.updater((a, s) => ({
                  ...a,
                  status: "PENDING",
                  lists: V(s),
                  initialParams: s.initialParams,
                  search: s.search ?? null,
                }))),
                (this.reloadStart = this.updater((a) => ({
                  ...a,
                  status: "PENDING",
                  lists: F(a.lists, !!a.search),
                }))),
                (this.initSuccess = this.updater(
                  (a, { configs: s, totals: o }) => ({
                    ...B(a),
                    status: "SUCCESS",
                    lists: s.reduce(
                      (l, u) => ({
                        ...l,
                        [u.listName]: {
                          tabName: a.lists[u.listName].tabName,
                          config: u.config,
                          total: o[u.listName],
                        },
                      }),
                      {},
                    ),
                  }),
                )),
                (this.initFailure = this.updater((a, s) => ({
                  ...a,
                  status: "FAILURE",
                  error: s,
                }))),
                (this.filterInAllInit = this.updater((a, s) => ({
                  ...a,
                  lists: F(a.lists, !!s),
                  search: s,
                }))),
                (this.filterInAllSuccess = this.updater((a, s) => ({
                  ...B(a),
                  status: "SUCCESS",
                  lists: q(a.lists, s.items),
                }))),
                (this.filterInAllFailure = this.updater((a, s) => ({
                  ...a,
                  lists: et(a.lists),
                  error: {
                    case: "loadTotals",
                    message: s,
                  },
                }))),
                (this.filterInit = this.updater((a, s) => ({
                  ...a,
                  lists: U(a.lists, s.listName, !0),
                }))),
                (this.filterFailure = this.updater(
                  (a, { listName: s, message: o }) => ({
                    ...a,
                    lists: R(a.lists, s),
                    error: {
                      case: "loadTotals",
                      message: o,
                    },
                  }),
                )),
                (this.init = this.effect((a) =>
                  a.pipe(
                    (0, d.w)((s) =>
                      this.getConfigsFromCache(s.lists).pipe(
                        (0, h.b)((o) =>
                          this.initStart({
                            ...s,
                            search: this.getSearchQueryParam(o, s.lists),
                          }),
                        ),
                        (0, d.w)((o) =>
                          o.length > 0
                            ? this.scenarioService
                                .loadFilteredTotals(
                                  o,
                                  {
                                    search: this.get().search,
                                  },
                                  this.get().initialParams ?? {},
                                )
                                .pipe(
                                  (0, h.b)({
                                    next: (l) =>
                                      this.filterInAllSuccess({
                                        items: this.addCacheConfigToTotals(
                                          l,
                                          o,
                                        ),
                                      }),
                                    error: (l) => this.filterInAllFailure(l),
                                  }),
                                  (0, m.K)((l) => (console.error(l), E.E)),
                                )
                            : this.scenarioService
                                .loadConfigs(s.lists.map((l) => l.listName))
                                .pipe(
                                  (0, h.b)({
                                    next: (l) => {
                                      this.store.dispatch(
                                        (0, p.Zy)({
                                          configs: l,
                                        }),
                                      );
                                    },
                                    error: (l) =>
                                      this.initFailure({
                                        case: "loadConfig",
                                        message: l,
                                      }),
                                  }),
                                  (0, d.w)((l) =>
                                    this.scenarioService
                                      .loadTotals(
                                        l,
                                        this.get().initialParams ?? {},
                                      )
                                      .pipe(
                                        (0, h.b)({
                                          next: (u) =>
                                            this.initSuccess({
                                              totals: u,
                                              configs: l,
                                            }),
                                          error: (u) =>
                                            this.initFailure({
                                              case: "loadTotals",
                                              message: u,
                                            }),
                                        }),
                                      ),
                                  ),
                                  (0, m.K)(() => E.E),
                                ),
                        ),
                      ),
                    ),
                  ),
                )),
                (this.reload = this.effect((a) =>
                  a.pipe(
                    (0, h.b)(() => this.reloadStart()),
                    (0, d.w)(() => this.selectConfigs.pipe((0, C.q)(1))),
                    (0, d.w)((s) =>
                      this.scenarioService
                        .loadFilteredTotals(
                          s,
                          {
                            search: this.get().search,
                          },
                          this.get().initialParams ?? {},
                        )
                        .pipe(
                          (0, h.b)({
                            next: (o) =>
                              this.filterInAllSuccess({
                                items: o,
                              }),
                            error: (o) => this.filterInAllFailure(o),
                          }),
                          (0, m.K)(() => E.E),
                        ),
                    ),
                  ),
                )),
                (this.filterInAll = this.effect((a) =>
                  a.pipe(
                    (0, h.b)((s) => this.filterInAllInit(s.search)),
                    (0, d.w)((s) =>
                      this.selectConfigs.pipe(
                        (0, C.q)(1),
                        (0, d.w)((o) =>
                          this.scenarioService
                            .loadFilteredTotals(
                              o,
                              {
                                search: s.search,
                              },
                              this.get().initialParams ?? {},
                            )
                            .pipe(
                              (0, h.b)({
                                next: (l) =>
                                  this.filterInAllSuccess({
                                    items: l,
                                  }),
                                error: (l) => this.filterInAllFailure(l),
                              }),
                              (0, m.K)(() => E.E),
                            ),
                        ),
                      ),
                    ),
                  ),
                )),
                (this.filter = this.effect((a) =>
                  a.pipe(
                    (0, d.w)((s) =>
                      this.selectConfig(s.listName).pipe(
                        (0, C.q)(1),
                        (0, Z.h)((o) => !(0, W.vZ)(o.cache?.queryParams, s)),
                        (0, h.b)(() => this.filterInit(s)),
                        (0, d.w)((o) =>
                          this.scenarioService
                            .loadFilteredTotals(
                              [o],
                              s.filter,
                              this.get().initialParams ?? {},
                            )
                            .pipe(
                              (0, h.b)({
                                next: (l) =>
                                  this.filterInAllSuccess({
                                    items: l,
                                  }),
                                error: (l) =>
                                  this.filterFailure({
                                    listName: s.listName,
                                    message: l,
                                  }),
                              }),
                              (0, m.K)(() => E.E),
                            ),
                        ),
                      ),
                    ),
                  ),
                )));
            }
            getConfigsFromCache(t) {
              return (0, v.D)(
                t.reduce(
                  (i, { listName: c }) => ({
                    ...i,
                    [c]: this.store.select((0, p.I3)(c)).pipe((0, C.q)(1)),
                  }),
                  {},
                ),
              ).pipe(
                (0, T.U)((i) => {
                  const c = t.map((a) => ({
                    listName: a.listName,
                    config: i[a.listName]?.config?.data,
                    cache: i[a.listName],
                  }));
                  return c.some((a) => !a.config) ? [] : c;
                }),
              );
            }
            addCacheConfigToTotals(t, i) {
              return Object.keys(t).reduce(
                (c, a) => {
                  const s = i.find((o) => o.listName === a);
                  return {
                    ...c,
                    [a]: {
                      ...t[a],
                      config: s?.config,
                    },
                  };
                },
                {
                  ...t,
                },
              );
            }
            getSearchQueryParam(t, i) {
              const c = i.find((s) => this.router.url.includes(s.path));
              return (
                t.find((s) => s.listName === c?.listName)?.cache?.queryParams
                  ?.search ?? null
              );
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.LFG(I), e.LFG(H.yh), e.LFG(O.F0));
            }),
            (n.ɵprov = e.Yz7({
              token: n,
              factory: n.ɵfac,
            })),
            n
          );
        })(),
        w = (() => {
          class n {
            constructor(t) {
              this.store = t;
            }
            init() {
              return this.store.selectState;
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.LFG(M));
            }),
            (n.ɵprov = e.Yz7({
              token: n,
              factory: n.ɵfac,
            })),
            n
          );
        })();
      var f = (() => {
        return (((n = f || (f = {})).INIT = "INIT"), (n.SEARCH = "SEARCH"), f);
        var n;
      })();
      let N = (() => {
          class n {
            constructor(t) {
              this.store = t;
            }
            emit(t, i) {
              switch (t) {
                case f.INIT:
                  this.store.init({
                    lists: i.tabs,
                    initialParams: i.initialParams,
                  });
                  break;
                case f.SEARCH:
                  this.store.filterInAll(i);
                  break;
                default:
                  console.error(
                    "ERROR: TabsWithTotalsControllerService.emit",
                    "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f, \u043b\u0438\u0431\u043e \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430.",
                    t,
                  );
              }
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.LFG(M));
            }),
            (n.ɵprov = e.Yz7({
              token: n,
              factory: n.ɵfac,
            })),
            n
          );
        })(),
        it = (() => {
          class n {
            transform(t, i) {
              return null === t
                ? {
                    status: "PENDING",
                    navigation: [],
                    withGlobalFilter: !1,
                    hint: [],
                  }
                : Object.values(t.lists).every((a) => !(0, b.Yh)(a)) &&
                    "loadTotals" !== t.error?.case
                  ? {
                      status: t.status,
                      navigation: [],
                      withGlobalFilter: !1,
                      hint: [],
                    }
                  : {
                      status: this.getStatus(t),
                      navigation: i.tabs.map(
                        ({ path: a, tabName: s, listName: o }) => ({
                          path: a,
                          title: s,
                          total: this.getBadgeTotal(t, o),
                          filteredTotal: this.getFilteredBadgeTotal(t, o),
                          totalColor: this.getBadgeColor(t, o),
                        }),
                      ),
                      withGlobalFilter: !!t.search,
                      hint: i.tabs
                        .map(({ listName: a }) =>
                          this.getHint(t.lists[a], i.schemaPlural),
                        )
                        .filter((a) => !!a),
                    };
            }
            getHint(t, i) {
              if (t && t.searchTotal && t.searchTotal > 0)
                return {
                  htmlText: `<strong>${
                    i ? (0, b.gY)(t.searchTotal, i) : t.searchTotal
                  }</strong>&nbsp;\u0432 \u0441\u043f\u0438\u0441\u043a\u0435 &ldquo;${t.tabName}&rdquo;`,
                };
            }
            getStatus(t) {
              return "FAILURE" === t.status && "loadTotals" === t.error?.case
                ? "SUCCESS"
                : t.status;
            }
            getBadgeColor(t, i) {
              return t.lists[i].failure || t.error ? "red" : "blue";
            }
            getBadgeTotal(t, i) {
              return "number" == typeof t.lists[i]?.total
                ? String(t.lists[i].total)
                : "PENDING" === t.status
                  ? "load"
                  : "-";
            }
            getFilteredBadgeTotal(t, i) {
              return t.lists[i].pending
                ? "load"
                : "number" == typeof t.lists[i]?.filteredTotal
                  ? String(t.lists[i].filteredTotal)
                  : void 0;
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵpipe = e.Yjl({
              name: "tabsWithTotalsViewData",
              type: n,
              pure: !0,
            })),
            n
          );
        })(),
        at = (() => {
          class n {
            transform(t) {
              return {
                type: "input.rollable-search",
                formGroupField: {
                  field: "search",
                  type: "filter",
                  disabled: !1,
                },
                data: {
                  placeholder: t.searchPlaceholder,
                  width: 400,
                },
              };
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵpipe = e.Yjl({
              name: "tabsWithTotalsSearchWidget",
              type: n,
              pure: !0,
            })),
            n
          );
        })();
      const rt = ["searchControl"];
      function st(n, r) {
        1 & n && (e.ynx(0), e._UZ(1, "lu-preloader", 16), e.BQk());
      }
      function ot(n, r) {
        1 & n && (e.ynx(0), e._uU(1, " - "), e.BQk());
      }
      function lt(n, r) {
        if ((1 & n && (e.ynx(0), e._uU(1), e.BQk()), 2 & n)) {
          const t = e.oxw(3).$implicit;
          (e.xp6(1), e.hij(" ", t.filteredTotal, " "));
        }
      }
      function ct(n, r) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "lu-badge", 15),
            e.ynx(2, 12),
            e.YNc(3, st, 2, 0, "ng-container", 13),
            e.YNc(4, ot, 2, 0, "ng-container", 13),
            e.YNc(5, lt, 2, 1, "ng-container", 14),
            e.BQk(),
            e.qZA(),
            e._uU(6, " / "),
            e.BQk()),
          2 & n)
        ) {
          const t = e.oxw(2).$implicit;
          (e.xp6(2),
            e.Q6J("ngSwitch", t.filteredTotal),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "load"),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "failure"));
        }
      }
      function _t(n, r) {
        1 & n && (e.ynx(0), e._UZ(1, "lu-preloader", 16), e.BQk());
      }
      function ut(n, r) {
        if ((1 & n && (e.ynx(0), e._uU(1), e.BQk()), 2 & n)) {
          const t = e.oxw(2).$implicit;
          (e.xp6(1), e.hij(" ", t.total, " "));
        }
      }
      function dt(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 9),
            e._uU(1),
            e.TgZ(2, "div", 10),
            e.YNc(3, ct, 7, 3, "ng-container", 2),
            e.TgZ(4, "lu-badge", 11),
            e.ynx(5, 12),
            e.YNc(6, _t, 2, 0, "ng-container", 13),
            e.YNc(7, ut, 2, 1, "ng-container", 14),
            e.BQk(),
            e.qZA()()()),
          2 & n)
        ) {
          const t = e.oxw().$implicit,
            i = e.MAs(2);
          (e.xp6(1),
            e.hij(" ", t.title, " "),
            e.xp6(2),
            e.Q6J("ngIf", t.filteredTotal),
            e.xp6(1),
            e.Q6J("color", i.isActive ? "black" : t.totalColor),
            e.xp6(1),
            e.Q6J("ngSwitch", t.total),
            e.xp6(1),
            e.Q6J("ngSwitchCase", "load"));
        }
      }
      const ht = function (n) {
        return [n];
      };
      function gt(n, r) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "lu-tab", 6, 7),
            e.YNc(3, dt, 8, 5, "ng-template", 8),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const t = r.$implicit,
            i = e.MAs(2);
          (e.xp6(1),
            e.Q6J("routerLink", e.VKq(2, ht, t.path))("active", i.isActive));
        }
      }
      function ft(n, r) {
        if ((1 & n && (e.TgZ(0, "li"), e._UZ(1, "span", 23), e.qZA()), 2 & n)) {
          const t = r.$implicit;
          (e.xp6(1), e.Q6J("innerHTML", t.htmlText, e.oJD));
        }
      }
      function Tt(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 21),
            e._uU(1, " \u041d\u0430\u0439\u0434\u0435\u043d\u044b: "),
            e.TgZ(2, "ul"),
            e.YNc(3, ft, 2, 1, "li", 22),
            e.qZA()()),
          2 & n)
        ) {
          const t = e.oxw(2).ngIf;
          (e.xp6(3), e.Q6J("ngForOf", t.hint));
        }
      }
      function pt(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 17),
            e._UZ(1, "dp-rollable-search-control", 18, 19),
            e.ALo(3, "tabsWithTotalsSearchWidget"),
            e.YNc(4, Tt, 4, 1, "ng-template", null, 20, e.W1O),
            e.qZA()),
          2 & n)
        ) {
          const t = e.MAs(5),
            i = e.oxw().ngIf,
            c = e.oxw(2);
          (e.xp6(1),
            e.Q6J("widget", e.lcZ(3, 3, c.params))(
              "formControl",
              c.formControl,
            )("dropdownContent", i.hint.length > 0 ? t : void 0));
        }
      }
      function vt(n, r) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, "div", 3)(2, "lu-tab-group"),
            e.YNc(3, gt, 4, 4, "ng-container", 4),
            e.qZA()(),
            e.YNc(4, pt, 6, 5, "div", 5),
            e.BQk()),
          2 & n)
        ) {
          const t = r.ngIf,
            i = e.oxw(2);
          (e.xp6(3),
            e.Q6J("ngForOf", t.navigation)("ngForTrackBy", i.trackByPatchCount),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              i.params.includeSearch && "SUCCESS" === t.status && i.formControl,
            ));
        }
      }
      function Et(n, r) {
        if (
          (1 & n &&
            (e.TgZ(0, "div", 1),
            e.YNc(1, vt, 5, 3, "ng-container", 2),
            e.ALo(2, "tabsWithTotalsViewData"),
            e.qZA()),
          2 & n)
        ) {
          const t = r.ngIf,
            i = e.oxw();
          (e.xp6(1), e.Q6J("ngIf", e.xi3(2, 1, t, i.params)));
        }
      }
      let Ct = (() => {
          class n {
            constructor(t, i) {
              ((this.controllerService = t),
                (this.modelService = i),
                (this.params = {
                  includeSearch: !1,
                  tabs: [],
                  searchPlaceholder:
                    "\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0424\u0418\u041e \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430",
                }),
                (this.model$ = this.modelService.init().pipe((0, Y.d)(1))),
                (this.destroy$ = new Q.x()),
                this.initFormControl());
            }
            ngOnInit() {
              this.controllerService.emit(f.INIT, this.params);
            }
            ngOnDestroy() {
              (this.destroy$.next(), this.destroy$.complete());
            }
            trackByPatchCount(t, i) {
              return `${i.path}_${i.total}`;
            }
            initSearchEvent(t) {
              t.valueChanges.subscribe((i) => {
                this.controllerService.emit(f.SEARCH, {
                  search: i,
                });
              });
            }
            initFormControl() {
              this.model$
                .pipe(
                  (0, J.P)((t) => "SUCCESS" === t.status),
                  (0, G.R)(this.destroy$),
                )
                .subscribe((t) => {
                  ((this.formControl = new j.NI(t.search)),
                    this.initSearchEvent(this.formControl));
                });
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.Y36(N), e.Y36(w));
            }),
            (n.ɵcmp = e.Xpm({
              type: n,
              selectors: [["dp-tabs-with-totals"]],
              viewQuery: function (t, i) {
                if ((1 & t && e.Gf(rt, 5), 2 & t)) {
                  let c;
                  e.iGM((c = e.CRH())) && (i.searchControl = c.first);
                }
              },
              inputs: {
                params: "params",
              },
              features: [e._Bn([w, N])],
              decls: 2,
              vars: 3,
              consts: [
                ["class", "tabs-and-search", 4, "ngIf"],
                [1, "tabs-and-search"],
                [4, "ngIf"],
                [1, "tabs"],
                [4, "ngFor", "ngForOf", "ngForTrackBy"],
                ["class", "search search__container", 4, "ngIf"],
                ["routerLinkActive", "", 3, "routerLink", "active"],
                ["rla", "routerLinkActive"],
                ["luTabTitle", ""],
                ["lu-text", "", "dpDataTestRole", "tab", 1, "tab-content"],
                ["luTextRight", "", 1, "tab-content-total-info"],
                [
                  "colorType",
                  "light",
                  "size",
                  "small",
                  1,
                  "tab-count-badge",
                  "tab-total",
                  3,
                  "color",
                ],
                [3, "ngSwitch"],
                [4, "ngSwitchCase"],
                [4, "ngSwitchDefault"],
                [
                  "color",
                  "yellow",
                  "size",
                  "small",
                  1,
                  "tab-count-badge",
                  "tab-filtered-total",
                ],
                ["size", "inline-dropdown"],
                [1, "search", "search__container"],
                [3, "widget", "formControl", "dropdownContent"],
                ["searchControl", ""],
                ["hintForSearch", ""],
                ["lu-text", "", 1, "hint"],
                [4, "ngFor", "ngForOf"],
                [3, "innerHTML"],
              ],
              template: function (t, i) {
                (1 & t && (e.YNc(0, Et, 3, 4, "div", 0), e.ALo(1, "async")),
                  2 & t && e.Q6J("ngIf", e.lcZ(1, 1, i.model$)));
              },
              dependencies: [
                g.sg,
                g.O5,
                g.RF,
                g.n9,
                g.ED,
                D.Y0,
                D.hD,
                D.Ld,
                O.rH,
                A.U,
                S.NZ,
                S.YE,
                O.Od,
                y.A,
                L.d,
                x.uE,
                g.Ov,
                it,
                at,
              ],
              styles: [
                "[_nghost-%COMP%]   [data-lu-color-type=light][data-lu-color=blue][_ngcontent-%COMP%]{--lu-badge-text: var(--lu-blue-140) !important}.tabs-and-search[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.tab-content[_ngcontent-%COMP%]{display:flex;align-items:center;height:calc(var(--lu-base-gutter) * 8)}.tab-content-total-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.tab-count-badge[_ngcontent-%COMP%]{position:relative;min-width:calc(var(--lu-base-gutter) * 3.5)!important;align-items:center;justify-content:center;height:20px}.tab-count-badge[_ngcontent-%COMP%]   lu-preloader[_ngcontent-%COMP%]{margin-left:var(--lu-base-gutter)}.tab-count-badge[color=yellow][_ngcontent-%COMP%]{--lu-badge-background: var(--lu-yellow-60)}.hint[_ngcontent-%COMP%]{padding:var(--lu-base-gutter) calc(var(--lu-base-gutter) * 2)}.hint[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:block;list-style-type:disc;margin-block-start:var(--lu-base-gutter);margin-block-end:0;padding-inline-start:calc(var(--lu-base-gutter) * 4);unicode-bidi:isolate}.search[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%}.search__container[_ngcontent-%COMP%]{position:relative}",
              ],
              changeDetection: 0,
            })),
            n
          );
        })(),
        mt = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.oAB({
              type: n,
            })),
            (n.ɵinj = e.cJS({
              providers: [M, I],
              imports: [g.ez, D.Hu, A.w, S.aI, y.T, L.c, x.eR],
            })),
            n
          );
        })();
    },
  },
]);
