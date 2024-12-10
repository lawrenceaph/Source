/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@unocss/runtime@0.65.1/uno.global.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict";
(() => {
	var Ha = Object.defineProperty;
	var qa = (e, t) => {
		for (var r in t) Ha(e, r, { get: t[r], enumerable: !0 });
	};
	var _e = "default",
		at = "preflights",
		Ya = "shortcuts",
		Xa = "imports",
		Nn = { [Xa]: -200, [at]: -100, [Ya]: -10, [_e]: 0 };
	var ct = /[\\:]?[\s'"`;{}]+/g;
	function Za(e) {
		return e.split(ct);
	}
	var lt = {
		name: "@unocss/core/extractor-split",
		order: 0,
		extract({ code: e }) {
			return Za(e);
		},
	};
	function V(e = []) {
		return Array.isArray(e) ? e : [e];
	}
	function ee(e) {
		return Array.from(new Set(e));
	}
	function Nr(e, t) {
		return e.reduce(
			(r, n) => (r.findIndex((i) => t(n, i)) === -1 && r.push(n), r),
			[]
		);
	}
	function P(e) {
		return typeof e == "string";
	}
	var Fe = class extends Set {
		_map;
		constructor(t) {
			super(t), (this._map ??= new Map());
		}
		add(t) {
			return (
				(this._map ??= new Map()),
				this._map.set(t, (this._map.get(t) ?? 0) + 1),
				super.add(t)
			);
		}
		delete(t) {
			return this._map.delete(t), super.delete(t);
		}
		clear() {
			this._map.clear(), super.clear();
		}
		getCount(t) {
			return this._map.get(t) ?? 0;
		}
		setCount(t, r) {
			return this._map.set(t, r), super.add(t);
		}
	};
	function ut(e) {
		return e instanceof Fe;
	}
	function fe(e) {
		return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	function se(e) {
		let t = e.length,
			r = -1,
			n,
			o = "",
			i = e.charCodeAt(0);
		for (; ++r < t; ) {
			if (((n = e.charCodeAt(r)), n === 0)) {
				o += "\uFFFD";
				continue;
			}
			if (n === 37) {
				o += "\\%";
				continue;
			}
			if (n === 44) {
				o += "\\,";
				continue;
			}
			if (
				(n >= 1 && n <= 31) ||
				n === 127 ||
				(r === 0 && n >= 48 && n <= 57) ||
				(r === 1 && n >= 48 && n <= 57 && i === 45)
			) {
				o += `\\${n.toString(16)} `;
				continue;
			}
			if (r === 0 && t === 1 && n === 45) {
				o += `\\${e.charAt(r)}`;
				continue;
			}
			if (
				n >= 128 ||
				n === 45 ||
				n === 95 ||
				(n >= 48 && n <= 57) ||
				(n >= 65 && n <= 90) ||
				(n >= 97 && n <= 122)
			) {
				o += e.charAt(r);
				continue;
			}
			o += `\\${e.charAt(r)}`;
		}
		return o;
	}
	var ft = se;
	var Ja = /[\w\u00A0-\uFFFF%-?]/;
	function Dn(e = "") {
		return Ja.test(e);
	}
	function In(e) {
		return typeof e == "function" ? { match: e } : e;
	}
	function Dr(e) {
		return e.length === 3;
	}
	function pt(e) {
		return e != null;
	}
	function Kn() {}
	var dt = class {
			_map = new Map();
			get(t, r) {
				let n = this._map.get(t);
				if (n) return n.get(r);
			}
			getFallback(t, r, n) {
				let o = this._map.get(t);
				return (
					o || ((o = new Map()), this._map.set(t, o)),
					o.has(r) || o.set(r, n),
					o.get(r)
				);
			}
			set(t, r, n) {
				let o = this._map.get(t);
				return o || ((o = new Map()), this._map.set(t, o)), o.set(r, n), this;
			}
			has(t, r) {
				return this._map.get(t)?.has(r);
			}
			delete(t, r) {
				return this._map.get(t)?.delete(r) || !1;
			}
			deleteTop(t) {
				return this._map.delete(t);
			}
			map(t) {
				return Array.from(this._map.entries()).flatMap(([r, n]) =>
					Array.from(n.entries()).map(([o, i]) => t(i, r, o))
				);
			}
		},
		mt = class extends Map {
			getFallback(t, r) {
				let n = this.get(t);
				return n === void 0 ? (this.set(t, r), r) : n;
			}
			map(t) {
				let r = [];
				return (
					this.forEach((n, o) => {
						r.push(t(n, o));
					}),
					r
				);
			}
			flatMap(t) {
				let r = [];
				return (
					this.forEach((n, o) => {
						r.push(...t(n, o));
					}),
					r
				);
			}
		};
	function $e(e) {
		return P(e)
			? e
			: (Array.isArray(e) ? e : Object.entries(e)).filter((t) => t[1] != null);
	}
	function Gn(e) {
		return Array.isArray(e)
			? e.find((t) => !Array.isArray(t) || Array.isArray(t[0]))
				? e.map((t) => $e(t))
				: [e]
			: [$e(e)];
	}
	function Qa(e) {
		return e.filter(([t, r], n) => {
			if (t.startsWith("$$")) return !1;
			for (let o = n - 1; o >= 0; o--)
				if (e[o][0] === t && e[o][1] === r) return !1;
			return !0;
		});
	}
	function Se(e) {
		return e == null
			? ""
			: Qa(e)
					.map(([t, r]) =>
						r != null && typeof r != "function" ? `${t}:${r};` : void 0
					)
					.filter(Boolean)
					.join("");
	}
	function gt(e) {
		return e && typeof e == "object" && !Array.isArray(e);
	}
	function Ir(e, t, r = !1) {
		let n = e,
			o = t;
		if (Array.isArray(o)) return r && Array.isArray(o) ? [...n, ...o] : [...o];
		let i = { ...n };
		return (
			gt(n) &&
				gt(o) &&
				Object.keys(o).forEach((s) => {
					(gt(n[s]) && gt(o[s])) || (Array.isArray(n[s]) && Array.isArray(o[s]))
						? (i[s] = Ir(n[s], o[s], r))
						: Object.assign(i, { [s]: o[s] });
				}),
			i
		);
	}
	function Le(e) {
		let t, r, n;
		if (Array.isArray(e)) {
			for (r = Array.from({ length: (t = e.length) }); t--; )
				r[t] = (n = e[t]) && typeof n == "object" ? Le(n) : n;
			return r;
		}
		if (Object.prototype.toString.call(e) === "[object Object]") {
			r = {};
			for (t in e)
				t === "__proto__"
					? Object.defineProperty(r, t, {
							value: Le(e[t]),
							configurable: !0,
							enumerable: !0,
							writable: !0,
					  })
					: (r[t] = (n = e[t]) && typeof n == "object" ? Le(n) : n);
			return r;
		}
		return e;
	}
	function Hn(e) {
		return P(e[0]);
	}
	function qn(e) {
		return P(e[0]);
	}
	var ht = {};
	function ec(e = ["-", ":"]) {
		let t = e.join("|");
		return (
			ht[t] ||
				(ht[t] = new RegExp(
					`((?:[!@<~\\w+:_-]|\\[&?>?:?\\S*\\])+?)(${t})\\(((?:[~!<>\\w\\s:/\\\\,%#.$?-]|\\[.*?\\])+?)\\)(?!\\s*?=>)`,
					"gm"
				)),
			(ht[t].lastIndex = 0),
			ht[t]
		);
	}
	function tc(e, t = ["-", ":"], r = 5) {
		let n = ec(t),
			o,
			i = e.toString(),
			s = new Set(),
			a = new Map();
		do
			(o = !1),
				(i = i.replace(n, (u, f, p, d, m) => {
					if (!t.includes(p)) return u;
					(o = !0), s.add(f + p);
					let b = m + f.length + p.length + 1,
						x = { length: u.length, items: [] };
					a.set(m, x);
					for (let $ of [...d.matchAll(/\S+/g)]) {
						let j = b + $.index,
							w = a.get(j)?.items;
						w
							? a.delete(j)
							: (w = [{ offset: j, length: $[0].length, className: $[0] }]);
						for (let R of w)
							(R.className =
								R.className === "~"
									? f
									: R.className.replace(/^(!?)(.*)/, `$1${f}${p}$2`)),
								x.items.push(R);
					}
					return "$".repeat(u.length);
				})),
				(r -= 1);
		while (o && r);
		let c;
		if (typeof e == "string") {
			c = "";
			let u = 0;
			for (let [f, p] of a)
				(c += e.slice(u, f)),
					(c += p.items.map((d) => d.className).join(" ")),
					(u = f + p.length);
			c += e.slice(u);
		} else {
			c = e;
			for (let [u, f] of a)
				c.overwrite(u, u + f.length, f.items.map((p) => p.className).join(" "));
		}
		return {
			prefixes: Array.from(s),
			hasChanged: o,
			groupsByOffset: a,
			get expanded() {
				return c.toString();
			},
		};
	}
	function Yn(e, t = ["-", ":"], r = 5) {
		let n = tc(e, t, r);
		return typeof e == "string" ? n.expanded : e;
	}
	var Xn = new Set();
	function Zn(e) {
		Xn.has(e) || (console.warn("[unocss]", e), Xn.add(e));
	}
	function eo(e) {
		return V(e).flatMap((t) => (Array.isArray(t) ? [t] : Object.entries(t)));
	}
	var Jn = "_uno_resolved";
	async function rc(e) {
		let t = typeof e == "function" ? await e() : await e;
		if (Jn in t) return t;
		(t = { ...t }), Object.defineProperty(t, Jn, { value: !0, enumerable: !1 });
		let r = t.shortcuts ? eo(t.shortcuts) : void 0;
		if (((t.shortcuts = r), t.prefix || t.layer)) {
			let n = (o) => {
				o[2] || (o[2] = {});
				let i = o[2];
				i.prefix == null && t.prefix && (i.prefix = V(t.prefix)),
					i.layer == null && t.layer && (i.layer = t.layer);
			};
			r?.forEach(n), t.rules?.forEach(n);
		}
		return t;
	}
	async function to(e) {
		let t = await rc(e);
		if (!t.presets) return [t];
		let r = (
			await Promise.all((t.presets || []).flatMap(V).flatMap(to))
		).flat();
		return [t, ...r];
	}
	function nc(e) {
		if (e.length === 0) return {};
		let t = [],
			r = [],
			n = !1,
			o = [],
			i = [],
			s = [];
		for (let c of e) {
			if (c.pipeline === !1) {
				n = !0;
				break;
			} else
				c.pipeline?.include && t.push(c.pipeline.include),
					c.pipeline?.exclude && r.push(c.pipeline.exclude);
			c.filesystem && o.push(c.filesystem),
				c.inline && i.push(c.inline),
				c.plain && s.push(c.plain);
		}
		let a = {
			pipeline: n ? !1 : { include: ee(Qn(...t)), exclude: ee(Qn(...r)) },
		};
		return (
			o.length && (a.filesystem = ee(o.flat())),
			i.length && (a.inline = ee(i.flat())),
			s.length && (a.plain = ee(s.flat())),
			a
		);
	}
	async function Kr(e = {}, t = {}) {
		let r = Object.assign({}, t, e),
			n = Nr(
				(await Promise.all((r.presets || []).flatMap(V).flatMap(to))).flat(),
				(h, g) => h.name === g.name
			),
			o = [
				...n.filter((h) => h.enforce === "pre"),
				...n.filter((h) => !h.enforce),
				...n.filter((h) => h.enforce === "post"),
			],
			i = [...o, r],
			s = [...i].reverse(),
			a = Object.assign({}, Nn, ...i.map((h) => h.layers));
		function c(h) {
			return ee(i.flatMap((g) => V(g[h] || [])));
		}
		let u = c("extractors"),
			f = s.find((h) => h.extractorDefault !== void 0)?.extractorDefault;
		f === void 0 && (f = lt),
			f && !u.includes(f) && u.unshift(f),
			u.sort((h, g) => (h.order || 0) - (g.order || 0));
		let p = c("rules"),
			d = {},
			m = p.length,
			b = p
				.filter((h) =>
					Hn(h)
						? (V(h[2]?.prefix || "").forEach((v) => {
								d[v + h[0]] = h;
						  }),
						  !1)
						: !0
				)
				.reverse(),
			x = oc(i.map((h) => h.theme)),
			$ = c("extendTheme");
		for (let h of $) x = h(x) || x;
		let j = {
				templates: ee(i.flatMap((h) => V(h.autocomplete?.templates))),
				extractors: i
					.flatMap((h) => V(h.autocomplete?.extractors))
					.sort((h, g) => (h.order || 0) - (g.order || 0)),
				shorthands: ic(i.map((h) => h.autocomplete?.shorthands || {})),
			},
			w = c("separators");
		w.length || (w = [":", "-"]);
		let R = c("content"),
			W = nc(R),
			A = {
				mergeSelectors: !0,
				warn: !0,
				sortLayers: (h) => h,
				...r,
				blocklist: c("blocklist"),
				presets: o,
				envMode: r.envMode || "build",
				shortcutsLayer: r.shortcutsLayer || "shortcuts",
				layers: a,
				theme: x,
				rules: p,
				rulesSize: m,
				rulesDynamic: b,
				rulesStaticMap: d,
				preprocess: c("preprocess"),
				postprocess: c("postprocess"),
				preflights: c("preflights"),
				autocomplete: j,
				variants: c("variants")
					.map(In)
					.sort((h, g) => (h.order || 0) - (g.order || 0)),
				shortcuts: eo(c("shortcuts")).reverse(),
				extractors: u,
				safelist: c("safelist"),
				separators: w,
				details: r.details ?? r.envMode === "dev",
				content: W,
				transformers: Nr(c("transformers"), (h, g) => h.name === g.name),
			};
		for (let h of i) h?.configResolved?.(A);
		return A;
	}
	function oc(e) {
		return e.map((t) => (t ? Le(t) : {})).reduce((t, r) => Ir(t, r), {});
	}
	function ic(e) {
		return e.reduce((t, r) => {
			let n = {};
			for (let o in r) {
				let i = r[o];
				Array.isArray(i) ? (n[o] = `(${i.join("|")})`) : (n[o] = i);
			}
			return { ...t, ...n };
		}, {});
	}
	function Qn(...e) {
		return e.flatMap(sc);
	}
	function sc(e) {
		return Array.isArray(e) ? e : e ? [e] : [];
	}
	var ro = "0.65.1";
	function no() {
		return {
			events: {},
			emit(e, ...t) {
				(this.events[e] || []).forEach((r) => r(...t));
			},
			on(e, t) {
				return (
					(this.events[e] = this.events[e] || []).push(t),
					() => (this.events[e] = (this.events[e] || []).filter((r) => r !== t))
				);
			},
		};
	}
	var pe = {
			shortcutsNoMerge: "$$symbol-shortcut-no-merge",
			variants: "$$symbol-variants",
			parent: "$$symbol-parent",
			selector: "$$symbol-selector",
			layer: "$$symbol-layer",
			sort: "$$symbol-sort",
		},
		Gr = class e {
			constructor(t = {}, r = {}) {
				this.userConfig = t;
				this.defaults = r;
			}
			version = ro;
			_cache = new Map();
			config = void 0;
			blocked = new Set();
			parentOrders = new Map();
			activatedRules = new Set();
			events = no();
			static async create(t = {}, r = {}) {
				let n = new e(t, r);
				return (
					(n.config = await Kr(n.userConfig, n.defaults)),
					n.events.emit("config", n.config),
					n
				);
			}
			async setConfig(t, r) {
				t &&
					(r && (this.defaults = r),
					(this.userConfig = t),
					this.blocked.clear(),
					this.parentOrders.clear(),
					this.activatedRules.clear(),
					this._cache.clear(),
					(this.config = await Kr(t, this.defaults)),
					this.events.emit("config", this.config));
			}
			async applyExtractors(t, r, n = new Set()) {
				let o = {
					original: t,
					code: t,
					id: r,
					extracted: n,
					envMode: this.config.envMode,
				};
				for (let i of this.config.extractors) {
					let s = await i.extract?.(o);
					if (s)
						if (ut(s) && ut(n))
							for (let a of s) n.setCount(a, n.getCount(a) + s.getCount(a));
						else for (let a of s) n.add(a);
				}
				return n;
			}
			makeContext(t, r) {
				let n = {
					rawSelector: t,
					currentSelector: r[1],
					theme: this.config.theme,
					generator: this,
					symbols: pe,
					variantHandlers: r[2],
					constructCSS: (...o) => this.constructCustomCSS(n, ...o),
					variantMatch: r,
				};
				return n;
			}
			async parseToken(t, r) {
				if (this.blocked.has(t)) return;
				let n = `${t}${r ? ` ${r}` : ""}`;
				if (this._cache.has(n)) return this._cache.get(n);
				let o = t;
				for (let c of this.config.preprocess) o = c(t);
				if (this.isBlocked(o)) {
					this.blocked.add(t), this._cache.set(n, null);
					return;
				}
				let i = await this.matchVariants(t, o);
				if (i.every((c) => !c || this.isBlocked(c[1]))) {
					this.blocked.add(t), this._cache.set(n, null);
					return;
				}
				let s = async (c) => {
						let u = this.makeContext(t, [r || c[0], c[1], c[2], c[3]]);
						this.config.details && (u.variants = [...c[3]]);
						let f = await this.expandShortcut(u.currentSelector, u);
						return f
							? await this.stringifyShortcuts(u.variantMatch, u, f[0], f[1])
							: (await this.parseUtil(u.variantMatch, u))
									?.map((d) => this.stringifyUtil(d, u))
									.filter(pt);
					},
					a = (await Promise.all(i.map((c) => s(c)))).flat().filter((c) => !!c);
				if (a?.length) return this._cache.set(n, a), a;
				this._cache.set(n, null);
			}
			async generate(t, r = {}) {
				let {
						id: n,
						scope: o,
						preflights: i = !0,
						safelist: s = !0,
						minify: a = !1,
						extendedInfo: c = !1,
					} = r,
					u = P(t)
						? await this.applyExtractors(t, n, c ? new Fe() : new Set())
						: Array.isArray(t)
						? new Set(t)
						: t;
				if (s) {
					let g = { generator: this, theme: this.config.theme };
					this.config.safelist
						.flatMap((v) => (typeof v == "function" ? v(g) : v))
						.forEach((v) => {
							u.has(v) || u.add(v);
						});
				}
				let f = a
						? ""
						: `
`,
					p = new Set([_e]),
					d = c ? new Map() : new Set(),
					m = new Map(),
					b = {},
					x = Array.from(u).map(async (g) => {
						if (d.has(g)) return;
						let v = await this.parseToken(g);
						if (v != null) {
							d instanceof Map
								? d.set(g, { data: v, count: ut(u) ? u.getCount(g) : -1 })
								: d.add(g);
							for (let C of v) {
								let H = C[3] || "",
									q = C[4]?.layer;
								m.has(H) || m.set(H, []), m.get(H).push(C), q && p.add(q);
							}
						}
					});
				await Promise.all(x),
					await (async () => {
						if (!i) return;
						let g = { generator: this, theme: this.config.theme },
							v = new Set([]);
						this.config.preflights.forEach(({ layer: C = at }) => {
							p.add(C), v.add(C);
						}),
							(b = Object.fromEntries(
								await Promise.all(
									Array.from(v).map(async (C) => {
										let q = (
											await Promise.all(
												this.config.preflights
													.filter((Q) => (Q.layer || at) === C)
													.map(async (Q) => await Q.getCSS(g))
											)
										)
											.filter(Boolean)
											.join(f);
										return [C, q];
									})
								)
							));
					})();
				let $ = this.config.sortLayers(
						Array.from(p).sort(
							(g, v) =>
								(this.config.layers[g] ?? 0) - (this.config.layers[v] ?? 0) ||
								g.localeCompare(v)
						)
					),
					j = {},
					w = this.config.outputToCssLayers,
					R = (g) => {
						let v = g;
						return (
							typeof w == "object" && (v = w.cssLayerName?.(g)),
							v === null ? null : v ?? g
						);
					},
					W = (g = _e) => {
						if (j[g]) return j[g];
						let v = Array.from(m)
							.sort(
								(q, Q) =>
									(this.parentOrders.get(q[0]) ?? 0) -
										(this.parentOrders.get(Q[0]) ?? 0) ||
									q[0]?.localeCompare(Q[0] || "") ||
									0
							)
							.map(([q, Q]) => {
								let S = Q.length,
									z = Q.filter((T) => (T[4]?.layer || _e) === g)
										.sort(
											(T, D) =>
												T[0] - D[0] ||
												(T[4]?.sort || 0) - (D[4]?.sort || 0) ||
												T[5]?.currentSelector?.localeCompare(
													D[5]?.currentSelector ?? ""
												) ||
												T[1]?.localeCompare(D[1] || "") ||
												T[2]?.localeCompare(D[2] || "") ||
												0
										)
										.map(([, T, D, , st, , Wr]) => [
											[[(T && lc(T, o)) ?? "", st?.sort ?? 0]],
											D,
											!!(Wr ?? st?.noMerge),
										]);
								if (!z.length) return;
								let _ = z
									.reverse()
									.map(([T, D, st], Wr) => {
										if (!st && this.config.mergeSelectors)
											for (let ue = Wr + 1; ue < S; ue++) {
												let re = z[ue];
												if (
													re &&
													!re[2] &&
													((T && re[0]) || (T == null && re[0] == null)) &&
													re[1] === D
												)
													return T && re[0] && re[0].push(...T), null;
											}
										let Br = T
											? ee(
													T.sort(
														(ue, re) =>
															ue[1] - re[1] ||
															ue[0]?.localeCompare(re[0] || "") ||
															0
													)
														.map((ue) => ue[0])
														.filter(Boolean)
											  )
											: [];
										return Br.length ? `${Br.join(`,${f}`)}{${D}}` : D;
									})
									.filter(Boolean)
									.reverse()
									.join(f);
								if (!q) return _;
								let L = q.split(" $$ ");
								return `${L.join("{")}{${f}${_}${f}${"}".repeat(L.length)}`;
							})
							.filter(Boolean)
							.join(f);
						i && (v = [b[g], v].filter(Boolean).join(f));
						let C;
						w &&
							v &&
							((C = R(g)), C !== null && (v = `@layer ${C}{${f}${v}${f}}`));
						let H = a
							? ""
							: `/* layer: ${g}${C && C !== g ? `, alias: ${C}` : ""} */${f}`;
						return (j[g] = v ? H + v : "");
					},
					A = (g = $, v) => {
						let C = g.filter((H) => !v?.includes(H));
						return [
							w && C.length > 0
								? `@layer ${C.map(R).filter(pt).join(", ")};`
								: void 0,
							...C.map((H) => W(H) || ""),
						]
							.filter(Boolean)
							.join(f);
					};
				return {
					get css() {
						return A();
					},
					layers: $,
					matched: d,
					getLayers: A,
					getLayer: W,
					setLayer: async (g, v) => {
						let C = await v(W(g));
						return (j[g] = C), C;
					},
				};
			}
			async matchVariants(t, r) {
				let n = { rawSelector: t, theme: this.config.theme, generator: this },
					o = async (i) => {
						let s = !0,
							[, , a, c] = i;
						for (; s; ) {
							s = !1;
							let u = i[1];
							for (let f of this.config.variants) {
								if (!f.multiPass && c.has(f)) continue;
								let p = await f.match(u, n);
								if (p) {
									if (P(p)) {
										if (p === u) continue;
										p = { matcher: p };
									}
									if (Array.isArray(p)) {
										if (!p.length) continue;
										if (p.length === 1) p = p[0];
										else {
											if (f.multiPass)
												throw new Error(
													"multiPass can not be used together with array return variants"
												);
											let d = p.map((m) => {
												let b = m.matcher ?? u,
													x = [m, ...a],
													$ = new Set(c);
												return $.add(f), [i[0], b, x, $];
											});
											return (await Promise.all(d.map((m) => o(m)))).flat();
										}
									}
									(i[1] = p.matcher ?? u), a.unshift(p), c.add(f), (s = !0);
									break;
								}
							}
							if (!s) break;
							if (a.length > 500)
								throw new Error(`Too many variants applied to "${t}"`);
						}
						return [i];
					};
				return await o([t, r || t, [], new Set()]);
			}
			applyVariants(t, r = t[4], n = t[1]) {
				let i = r
						.slice()
						.sort((u, f) => (u.order || 0) - (f.order || 0))
						.reduceRight(
							(u, f) => (p) => {
								let d = f.body?.(p.entries) || p.entries,
									m = Array.isArray(f.parent) ? f.parent : [f.parent, void 0];
								return (f.handle ?? fc)(
									{
										...p,
										entries: d,
										selector: f.selector?.(p.selector, d) || p.selector,
										parent: m[0] || p.parent,
										parentOrder: m[1] || p.parentOrder,
										layer: f.layer || p.layer,
										sort: f.sort || p.sort,
									},
									u
								);
							},
							(u) => u
						)({ prefix: "", selector: uc(n), pseudo: "", entries: t[2] }),
					{ parent: s, parentOrder: a } = i;
				s != null && a != null && this.parentOrders.set(s, a);
				let c = {
					selector: [i.prefix, i.selector, i.pseudo].join(""),
					entries: i.entries,
					parent: s,
					layer: i.layer,
					sort: i.sort,
					noMerge: i.noMerge,
				};
				for (let u of this.config.postprocess) u(c);
				return c;
			}
			constructCustomCSS(t, r, n) {
				let o = $e(r);
				if (P(o)) return o;
				let {
						selector: i,
						entries: s,
						parent: a,
					} = this.applyVariants([
						0,
						n || t.rawSelector,
						o,
						void 0,
						t.variantHandlers,
					]),
					c = `${i}{${Se(s)}}`;
				return a ? `${a}{${c}}` : c;
			}
			async parseUtil(t, r, n = !1, o) {
				let i = P(t) ? await this.matchVariants(t) : [t],
					s = async ([c, u, f]) => {
						this.config.details && (r.rules = r.rules ?? []);
						let p = this.config.rulesStaticMap[u];
						if (p && p[1] && (n || !p[2]?.internal)) {
							r.generator.activatedRules.add(p),
								this.config.details && r.rules.push(p);
							let m = this.config.rules.indexOf(p),
								b = $e(p[1]),
								x = p[2];
							return P(b) ? [[m, b, x]] : [[m, c, b, x, f]];
						}
						r.variantHandlers = f;
						let { rulesDynamic: d } = this.config;
						for (let m of d) {
							let [b, x, $] = m;
							if ($?.internal && !n) continue;
							let j = u;
							if ($?.prefix) {
								let A = V($.prefix);
								if (o) {
									let h = V(o);
									if (!A.some((g) => h.includes(g))) continue;
								} else {
									let h = A.find((g) => u.startsWith(g));
									if (h == null) continue;
									j = u.slice(h.length);
								}
							}
							let w = j.match(b);
							if (!w) continue;
							let R = await x(w, r);
							if (!R) continue;
							if (
								(r.generator.activatedRules.add(m),
								this.config.details && r.rules.push(m),
								typeof R != "string")
							)
								if (Symbol.asyncIterator in R) {
									let A = [];
									for await (let h of R) h && A.push(h);
									R = A;
								} else
									Symbol.iterator in R &&
										!Array.isArray(R) &&
										(R = Array.from(R).filter(pt));
							let W = Gn(R).filter((A) => A.length);
							if (W.length) {
								let A = this.config.rules.indexOf(m);
								return W.map((h) => {
									if (P(h)) return [A, h, $];
									let g = f,
										v = $;
									for (let C of h)
										C[0] === pe.variants
											? (g = [...V(C[1]), ...g])
											: C[0] === pe.parent
											? (g = [{ parent: C[1] }, ...g])
											: C[0] === pe.selector
											? (g = [{ selector: C[1] }, ...g])
											: C[0] === pe.layer
											? (g = [{ layer: C[1] }, ...g])
											: C[0] === pe.sort && (v = { ...v, sort: C[1] });
									return [A, c, h, v, g];
								});
							}
						}
					},
					a = (await Promise.all(i.map((c) => s(c)))).flat().filter((c) => !!c);
				if (a.length) return a;
			}
			stringifyUtil(t, r) {
				if (!t) return;
				if (Dr(t))
					return [
						t[0],
						void 0,
						t[1],
						void 0,
						t[2],
						this.config.details ? r : void 0,
						void 0,
					];
				let {
						selector: n,
						entries: o,
						parent: i,
						layer: s,
						sort: a,
						noMerge: c,
					} = this.applyVariants(t),
					u = Se(o);
				if (!u) return;
				let { layer: f, sort: p, ...d } = t[3] ?? {},
					m = { ...d, layer: s ?? f, sort: a ?? p };
				return [t[0], n, u, i, m, this.config.details ? r : void 0, c];
			}
			async expandShortcut(t, r, n = 5) {
				if (n === 0) return;
				let o = this.config.details
						? (a) => {
								(r.shortcuts = r.shortcuts ?? []), r.shortcuts.push(a);
						  }
						: Kn,
					i,
					s;
				for (let a of this.config.shortcuts) {
					let c = t;
					if (a[2]?.prefix) {
						let f = V(a[2].prefix).find((p) => t.startsWith(p));
						if (f == null) continue;
						c = t.slice(f.length);
					}
					if (qn(a)) {
						if (a[0] === c) {
							(i = i || a[2]), (s = a[1]), o(a);
							break;
						}
					} else {
						let u = c.match(a[0]);
						if ((u && (s = a[1](u, r)), s)) {
							(i = i || a[2]), o(a);
							break;
						}
					}
				}
				if (
					(s &&
						(s = V(s)
							.map((a) => (P(a) ? Yn(a.trim()).split(/\s+/g) : a))
							.flat()),
					!s)
				) {
					let a = P(t) ? await this.matchVariants(t) : [t];
					for (let c of a) {
						let [u, f] = c;
						if (u !== f) {
							let p = await this.expandShortcut(f, r, n - 1);
							p && (s = p[0].map((d) => (P(d) ? u.replace(f, d) : d)));
						}
					}
				}
				if (s)
					return [
						(
							await Promise.all(
								s.map(
									async (a) =>
										(P(a)
											? (
													await this.expandShortcut(a, r, n - 1)
											  )?.[0]
											: void 0) || [a]
								)
							)
						)
							.flat(1)
							.filter((a) => !!a),
						i,
					];
			}
			async stringifyShortcuts(
				t,
				r,
				n,
				o = { layer: this.config.shortcutsLayer }
			) {
				let i = new mt(),
					s = (
						await Promise.all(
							ee(n).map(async (f) => {
								let p = P(f)
									? await this.parseUtil(f, r, !0, o.prefix)
									: [[Number.POSITIVE_INFINITY, "{inline}", $e(f), void 0, []]];
								return (
									!p &&
										this.config.warn &&
										Zn(`unmatched utility "${f}" in shortcut "${t[1]}"`),
									p || []
								);
							})
						)
					)
						.flat(1)
						.filter(Boolean)
						.sort((f, p) => f[0] - p[0]),
					[a, , c] = t,
					u = [];
				for (let f of s) {
					if (Dr(f)) {
						u.push([f[0], void 0, f[1], void 0, f[2], r, void 0]);
						continue;
					}
					let {
						selector: p,
						entries: d,
						parent: m,
						sort: b,
						noMerge: x,
						layer: $,
					} = this.applyVariants(f, [...f[4], ...c], a);
					i.getFallback($ ?? o.layer, new dt())
						.getFallback(p, m, [[], f[0]])[0]
						.push([d, !!(x ?? f[3]?.noMerge), b ?? 0]);
				}
				return u.concat(
					i.flatMap((f, p) =>
						f
							.map(([d, m], b, x) => {
								let $ = (w, R, W) => {
									let A = Math.max(...W.map((g) => g[1])),
										h = W.map((g) => g[0]);
									return (w ? [h.flat(1)] : h).map((g) => {
										let v = Se(g);
										if (v)
											return [
												m,
												b,
												v,
												x,
												{ ...o, noMerge: R, sort: A, layer: p },
												r,
												void 0,
											];
									});
								};
								return [
									[d.filter(([, w]) => w).map(([w, , R]) => [w, R]), !0],
									[d.filter(([, w]) => !w).map(([w, , R]) => [w, R]), !1],
								].map(([w, R]) => [
									...$(
										!1,
										R,
										w.filter(([W]) =>
											W.some((A) => A[0] === pe.shortcutsNoMerge)
										)
									),
									...$(
										!0,
										R,
										w.filter(([W]) =>
											W.every((A) => A[0] !== pe.shortcutsNoMerge)
										)
									),
								]);
							})
							.flat(2)
							.filter(Boolean)
					)
				);
			}
			isBlocked(t) {
				return (
					!t ||
					this.config.blocklist
						.map((r) => (Array.isArray(r) ? r[0] : r))
						.some((r) =>
							typeof r == "function" ? r(t) : P(r) ? r === t : r.test(t)
						)
				);
			}
			getBlocked(t) {
				let r = this.config.blocklist.find((n) => {
					let o = Array.isArray(n) ? n[0] : n;
					return typeof o == "function" ? o(t) : P(o) ? o === t : o.test(t);
				});
				return r ? (Array.isArray(r) ? r : [r, void 0]) : void 0;
			}
		};
	async function io(e, t) {
		return await Gr.create(e, t);
	}
	var so = /\s\$\$\s+/g;
	function cc(e) {
		return so.test(e);
	}
	function lc(e, t) {
		return cc(e) ? e.replace(so, t ? ` ${t} ` : " ") : t ? `${t} ${e}` : e;
	}
	var oo = /^\[(.+?)(~?=)"(.*)"\]$/;
	function uc(e) {
		return oo.test(e)
			? e.replace(oo, (t, r, n, o) => `[${ft(r)}${n}"${ft(o)}"]`)
			: `.${ft(e)}`;
	}
	function fc(e, t) {
		return t(e);
	}
	function pc(e) {
		let t,
			r,
			n = 2166136261;
		for (t = 0, r = e.length; t < r; t++)
			(n ^= e.charCodeAt(t)),
				(n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24));
		return `00000${(n >>> 0).toString(36)}`.slice(-6);
	}
	function ao(e, t, r, n) {
		for (let o of Array.from(e.matchAll(r)))
			if (o != null) {
				let i = o[0],
					s = `${n}${pc(i)}`;
				t.set(s, i), (e = e.replace(i, s));
			}
		return e;
	}
	function co(e, t) {
		for (let [r, n] of t.entries()) e = e.replaceAll(r, n);
		return e;
	}
	var dc = /\/\/#\s*sourceMappingURL=.*\n?/g;
	function lo(e) {
		return e.includes("sourceMappingURL=") ? e.replace(dc, "") : e;
	}
	var mc =
			/(?:[\w&:[\]-]|\[\S{1,64}=\S{1,64}\]){1,64}\[\\?['"]?\S{1,64}?['"]\]\]?[\w:-]{0,64}/g,
		gc =
			/\[(\\\W|[\w-]){1,64}:[^\s:]{0,64}?("\S{1,64}?"|'\S{1,64}?'|`\S{1,64}?`|[^\s:]{1,64}?)[^\s:]{0,64}?\)?\]/g,
		hc = /^\[(?:\\\W|[\w-]){1,64}:['"]?\S{1,64}?['"]?\]$/;
	function bc(e) {
		let t = [];
		for (let o of e.matchAll(gc))
			(o.index !== 0 && !/^[\s'"`]/.test(e[o.index - 1] ?? "")) || t.push(o[0]);
		for (let o of e.matchAll(mc)) t.push(o[0]);
		let r = new Map(),
			n = "@unocss-skip-arbitrary-brackets";
		return (
			(e = ao(e, r, /-\[(?!&.+?;)[^\]]*\]/g, n)),
			e &&
				e.split(ct).forEach((o) => {
					o.includes(n) && (o = co(o, r)), Dn(o) && !hc.test(o) && t.push(o);
				}),
			t
		);
	}
	function uo() {
		return {
			name: "@unocss/extractor-arbitrary-variants",
			order: 0,
			extract({ code: e }) {
				return bc(lo(e));
			},
		};
	}
	function fo(e) {
		if (e.preflight)
			return [
				{
					layer: "preflights",
					getCSS({ theme: t, generator: r }) {
						if (t.preflightBase) {
							let n = Object.entries(t.preflightBase);
							if (e.preflight === "on-demand") {
								let o = new Set(
									Array.from(r.activatedRules)
										.map((i) => i[2]?.custom?.preflightKeys)
										.filter(Boolean)
										.flat()
								);
								n = n.filter(([i]) => o.has(i));
							}
							if (n.length > 0) {
								let o = Se(n);
								return (
									e.variablePrefix !== "un-" &&
										(o = o.replace(/--un-/g, `--${e.variablePrefix}`)),
									V(t.preflightRoot ?? ["*,::before,::after", "::backdrop"])
										.map((s) => `${s}{${o}}`)
										.join("")
								);
							}
						}
					},
				},
			];
	}
	function Ce(e, t, r) {
		if (e === "") return;
		let n = e.length,
			o = 0,
			i = !1,
			s = 0;
		for (let a = 0; a < n; a++)
			switch (e[a]) {
				case t:
					i || ((i = !0), (s = a)), o++;
					break;
				case r:
					if ((--o, o < 0)) return;
					if (o === 0)
						return [e.slice(s, a + 1), e.slice(a + 1), e.slice(0, s)];
					break;
			}
	}
	function de(e, t, r, n) {
		if (e === "" || (P(n) && (n = [n]), n.length === 0)) return;
		let o = e.length,
			i = 0;
		for (let s = 0; s < o; s++)
			switch (e[s]) {
				case t:
					i++;
					break;
				case r:
					if (--i < 0) return;
					break;
				default:
					for (let a of n) {
						let c = a.length;
						if (c && a === e.slice(s, s + c) && i === 0)
							return s === 0 || s === o - c
								? void 0
								: [e.slice(0, s), e.slice(s + c)];
					}
			}
		return [e, ""];
	}
	function xe(e, t, r) {
		r = r ?? 10;
		let n = [],
			o = 0;
		for (; e !== ""; ) {
			if (++o > r) return;
			let i = de(e, "(", ")", t);
			if (!i) return;
			let [s, a] = i;
			n.push(s), (e = a);
		}
		if (n.length > 0) return n;
	}
	var Hr = [
			"hsl",
			"hsla",
			"hwb",
			"lab",
			"lch",
			"oklab",
			"oklch",
			"rgb",
			"rgba",
		],
		po = ["%alpha", "<alpha-value>"],
		xc = new RegExp(po.map((e) => fe(e)).join("|"));
	function Y(e = "") {
		let t = yc(e);
		if (t == null || t === !1) return;
		let { type: r, components: n, alpha: o } = t,
			i = r.toLowerCase();
		if (n.length !== 0 && !(Hr.includes(i) && ![1, 3].includes(n.length)))
			return {
				type: i,
				components: n.map((s) => (typeof s == "string" ? s.trim() : s)),
				alpha: typeof o == "string" ? o.trim() : o,
			};
	}
	function ae(e) {
		let t = e.alpha ?? 1;
		return typeof t == "string" && po.includes(t) ? 1 : t;
	}
	function M(e, t) {
		if (typeof e == "string") return e.replace(xc, `${t ?? 1}`);
		let { components: r } = e,
			{ alpha: n, type: o } = e;
		return (
			(n = t ?? n),
			(o = o.toLowerCase()),
			["hsla", "rgba"].includes(o)
				? `${o}(${r.join(", ")}${n == null ? "" : `, ${n}`})`
				: ((n = n == null ? "" : ` / ${n}`),
				  Hr.includes(o)
						? `${o}(${r.join(" ")}${n})`
						: `color(${o} ${r.join(" ")}${n})`)
		);
	}
	function yc(e) {
		if (!e) return;
		let t = vc(e);
		if (
			t != null ||
			((t = wc(e)), t != null) ||
			((t = kc(e)), t != null) ||
			((t = Sc(e)), t != null) ||
			((t = Cc(e)), t != null)
		)
			return t;
	}
	function vc(e) {
		let [, t] = e.match(/^#([\da-f]+)$/i) || [];
		if (t)
			switch (t.length) {
				case 3:
				case 4:
					let r = Array.from(t, (o) => Number.parseInt(o, 16)).map(
						(o) => (o << 4) | o
					);
					return {
						type: "rgb",
						components: r.slice(0, 3),
						alpha:
							t.length === 3 ? void 0 : Math.round((r[3] / 255) * 100) / 100,
					};
				case 6:
				case 8:
					let n = Number.parseInt(t, 16);
					return {
						type: "rgb",
						components:
							t.length === 6
								? [(n >> 16) & 255, (n >> 8) & 255, n & 255]
								: [(n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255],
						alpha:
							t.length === 6
								? void 0
								: Math.round(((n & 255) / 255) * 100) / 100,
					};
			}
	}
	function wc(e) {
		let t = { rebeccapurple: [102, 51, 153, 1] }[e];
		if (t != null)
			return { type: "rgb", components: t.slice(0, 3), alpha: t[3] };
	}
	function kc(e) {
		let t = e.match(/^(rgb|rgba|hsl|hsla)\((.+)\)$/i);
		if (!t) return;
		let [, r, n] = t,
			o = xe(n, ",", 5);
		if (o) {
			if ([3, 4].includes(o.length))
				return { type: r, components: o.slice(0, 3), alpha: o[3] };
			if (o.length !== 1) return !1;
		}
	}
	var $c = new RegExp(`^(${Hr.join("|")})\\((.+)\\)$`, "i");
	function Sc(e) {
		let t = e.match($c);
		if (!t) return;
		let [, r, n] = t,
			o = mo(`${r} ${n}`);
		if (o) {
			let {
				alpha: i,
				components: [s, ...a],
			} = o;
			return { type: s, components: a, alpha: i };
		}
	}
	function Cc(e) {
		let t = e.match(/^color\((.+)\)$/);
		if (!t) return;
		let r = mo(t[1]);
		if (r) {
			let {
				alpha: n,
				components: [o, ...i],
			} = r;
			return { type: o, components: i, alpha: n };
		}
	}
	function mo(e) {
		let t = xe(e, " ");
		if (!t) return;
		let r = t.length;
		if (t[r - 2] === "/")
			return { components: t.slice(0, r - 2), alpha: t[r - 1] };
		if (
			t[r - 2] != null &&
			(t[r - 2].endsWith("/") || t[r - 1].startsWith("/"))
		) {
			let i = t.splice(r - 2);
			t.push(i.join(" ")), --r;
		}
		let n = xe(t[r - 1], "/", 2);
		if (!n) return;
		if (n.length === 1 || n[n.length - 1] === "") return { components: t };
		let o = n.pop();
		return (t[r - 1] = n.join("/")), { components: t, alpha: o };
	}
	function bt(e) {
		let t = function (n) {
			let o = this.__options?.sequence || [];
			this.__options.sequence = [];
			for (let i of o) {
				let s = e[i](n);
				if (s != null) return s;
			}
		};
		function r(n, o) {
			return (
				n.__options || (n.__options = { sequence: [] }),
				n.__options.sequence.push(o),
				n
			);
		}
		for (let n of Object.keys(e))
			Object.defineProperty(t, n, {
				enumerable: !0,
				configurable: !0,
				get() {
					return r(this, n);
				},
			});
		return t;
	}
	var go = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		xo = new Uint8Array(64),
		Rc = new Uint8Array(128);
	for (let e = 0; e < go.length; e++) {
		let t = go.charCodeAt(e);
		(xo[e] = t), (Rc[t] = e);
	}
	function Ue(e, t, r) {
		let n = t - r;
		n = n < 0 ? (-n << 1) | 1 : n << 1;
		do {
			let o = n & 31;
			(n >>>= 5), n > 0 && (o |= 32), e.write(xo[o]);
		} while (n > 0);
		return t;
	}
	var ho = 1024 * 16,
		bo =
			typeof TextDecoder < "u"
				? new TextDecoder()
				: typeof Buffer < "u"
				? {
						decode(e) {
							return Buffer.from(
								e.buffer,
								e.byteOffset,
								e.byteLength
							).toString();
						},
				  }
				: {
						decode(e) {
							let t = "";
							for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
							return t;
						},
				  },
		qr = class {
			constructor() {
				(this.pos = 0), (this.out = ""), (this.buffer = new Uint8Array(ho));
			}
			write(t) {
				let { buffer: r } = this;
				(r[this.pos++] = t),
					this.pos === ho && ((this.out += bo.decode(r)), (this.pos = 0));
			}
			flush() {
				let { buffer: t, out: r, pos: n } = this;
				return n > 0 ? r + bo.decode(t.subarray(0, n)) : r;
			}
		};
	function yo(e) {
		let t = new qr(),
			r = 0,
			n = 0,
			o = 0,
			i = 0;
		for (let s = 0; s < e.length; s++) {
			let a = e[s];
			if ((s > 0 && t.write(59), a.length === 0)) continue;
			let c = 0;
			for (let u = 0; u < a.length; u++) {
				let f = a[u];
				u > 0 && t.write(44),
					(c = Ue(t, f[0], c)),
					f.length !== 1 &&
						((r = Ue(t, f[1], r)),
						(n = Ue(t, f[2], n)),
						(o = Ue(t, f[3], o)),
						f.length !== 4 && (i = Ue(t, f[4], i)));
			}
		}
		return t.flush();
	}
	var xt = class e {
			constructor(t) {
				this.bits = t instanceof e ? t.bits.slice() : [];
			}
			add(t) {
				this.bits[t >> 5] |= 1 << (t & 31);
			}
			has(t) {
				return !!(this.bits[t >> 5] & (1 << (t & 31)));
			}
		},
		yt = class e {
			constructor(t, r, n) {
				(this.start = t),
					(this.end = r),
					(this.original = n),
					(this.intro = ""),
					(this.outro = ""),
					(this.content = n),
					(this.storeName = !1),
					(this.edited = !1),
					(this.previous = null),
					(this.next = null);
			}
			appendLeft(t) {
				this.outro += t;
			}
			appendRight(t) {
				this.intro = this.intro + t;
			}
			clone() {
				let t = new e(this.start, this.end, this.original);
				return (
					(t.intro = this.intro),
					(t.outro = this.outro),
					(t.content = this.content),
					(t.storeName = this.storeName),
					(t.edited = this.edited),
					t
				);
			}
			contains(t) {
				return this.start < t && t < this.end;
			}
			eachNext(t) {
				let r = this;
				for (; r; ) t(r), (r = r.next);
			}
			eachPrevious(t) {
				let r = this;
				for (; r; ) t(r), (r = r.previous);
			}
			edit(t, r, n) {
				return (
					(this.content = t),
					n || ((this.intro = ""), (this.outro = "")),
					(this.storeName = r),
					(this.edited = !0),
					this
				);
			}
			prependLeft(t) {
				this.outro = t + this.outro;
			}
			prependRight(t) {
				this.intro = t + this.intro;
			}
			reset() {
				(this.intro = ""),
					(this.outro = ""),
					this.edited &&
						((this.content = this.original),
						(this.storeName = !1),
						(this.edited = !1));
			}
			split(t) {
				let r = t - this.start,
					n = this.original.slice(0, r),
					o = this.original.slice(r);
				this.original = n;
				let i = new e(t, this.end, o);
				return (
					(i.outro = this.outro),
					(this.outro = ""),
					(this.end = t),
					this.edited
						? (i.edit("", !1), (this.content = ""))
						: (this.content = n),
					(i.next = this.next),
					i.next && (i.next.previous = i),
					(i.previous = this),
					(this.next = i),
					i
				);
			}
			toString() {
				return this.intro + this.content + this.outro;
			}
			trimEnd(t) {
				if (((this.outro = this.outro.replace(t, "")), this.outro.length))
					return !0;
				let r = this.content.replace(t, "");
				if (r.length)
					return (
						r !== this.content &&
							(this.split(this.start + r.length).edit("", void 0, !0),
							this.edited && this.edit(r, this.storeName, !0)),
						!0
					);
				if (
					(this.edit("", void 0, !0),
					(this.intro = this.intro.replace(t, "")),
					this.intro.length)
				)
					return !0;
			}
			trimStart(t) {
				if (((this.intro = this.intro.replace(t, "")), this.intro.length))
					return !0;
				let r = this.content.replace(t, "");
				if (r.length) {
					if (r !== this.content) {
						let n = this.split(this.end - r.length);
						this.edited && n.edit(r, this.storeName, !0),
							this.edit("", void 0, !0);
					}
					return !0;
				} else if (
					(this.edit("", void 0, !0),
					(this.outro = this.outro.replace(t, "")),
					this.outro.length)
				)
					return !0;
			}
		};
	function Ec() {
		return typeof globalThis < "u" && typeof globalThis.btoa == "function"
			? (e) => globalThis.btoa(unescape(encodeURIComponent(e)))
			: typeof Buffer == "function"
			? (e) => Buffer.from(e, "utf-8").toString("base64")
			: () => {
					throw new Error(
						"Unsupported environment: `window.btoa` or `Buffer` should be supported."
					);
			  };
	}
	var Tc = Ec(),
		Yr = class {
			constructor(t) {
				(this.version = 3),
					(this.file = t.file),
					(this.sources = t.sources),
					(this.sourcesContent = t.sourcesContent),
					(this.names = t.names),
					(this.mappings = yo(t.mappings)),
					typeof t.x_google_ignoreList < "u" &&
						(this.x_google_ignoreList = t.x_google_ignoreList),
					typeof t.debugId < "u" && (this.debugId = t.debugId);
			}
			toString() {
				return JSON.stringify(this);
			}
			toUrl() {
				return (
					"data:application/json;charset=utf-8;base64," + Tc(this.toString())
				);
			}
		};
	function jc(e) {
		let t = e.split(`
`),
			r = t.filter((i) => /^\t+/.test(i)),
			n = t.filter((i) => /^ {2,}/.test(i));
		if (r.length === 0 && n.length === 0) return null;
		if (r.length >= n.length) return "	";
		let o = n.reduce((i, s) => {
			let a = /^ +/.exec(s)[0].length;
			return Math.min(a, i);
		}, 1 / 0);
		return new Array(o + 1).join(" ");
	}
	function zc(e, t) {
		let r = e.split(/[/\\]/),
			n = t.split(/[/\\]/);
		for (r.pop(); r[0] === n[0]; ) r.shift(), n.shift();
		if (r.length) {
			let o = r.length;
			for (; o--; ) r[o] = "..";
		}
		return r.concat(n).join("/");
	}
	var Oc = Object.prototype.toString;
	function Ac(e) {
		return Oc.call(e) === "[object Object]";
	}
	function vo(e) {
		let t = e.split(`
`),
			r = [];
		for (let n = 0, o = 0; n < t.length; n++) r.push(o), (o += t[n].length + 1);
		return function (o) {
			let i = 0,
				s = r.length;
			for (; i < s; ) {
				let u = (i + s) >> 1;
				o < r[u] ? (s = u) : (i = u + 1);
			}
			let a = i - 1,
				c = o - r[a];
			return { line: a, column: c };
		};
	}
	var Vc = /\w/,
		Xr = class {
			constructor(t) {
				(this.hires = t),
					(this.generatedCodeLine = 0),
					(this.generatedCodeColumn = 0),
					(this.raw = []),
					(this.rawSegments = this.raw[this.generatedCodeLine] = []),
					(this.pending = null);
			}
			addEdit(t, r, n, o) {
				if (r.length) {
					let i = r.length - 1,
						s = r.indexOf(
							`
`,
							0
						),
						a = -1;
					for (; s >= 0 && i > s; ) {
						let u = [this.generatedCodeColumn, t, n.line, n.column];
						o >= 0 && u.push(o),
							this.rawSegments.push(u),
							(this.generatedCodeLine += 1),
							(this.raw[this.generatedCodeLine] = this.rawSegments = []),
							(this.generatedCodeColumn = 0),
							(a = s),
							(s = r.indexOf(
								`
`,
								s + 1
							));
					}
					let c = [this.generatedCodeColumn, t, n.line, n.column];
					o >= 0 && c.push(o),
						this.rawSegments.push(c),
						this.advance(r.slice(a + 1));
				} else
					this.pending &&
						(this.rawSegments.push(this.pending), this.advance(r));
				this.pending = null;
			}
			addUneditedChunk(t, r, n, o, i) {
				let s = r.start,
					a = !0,
					c = !1;
				for (; s < r.end; ) {
					if (
						n[s] ===
						`
`
					)
						(o.line += 1),
							(o.column = 0),
							(this.generatedCodeLine += 1),
							(this.raw[this.generatedCodeLine] = this.rawSegments = []),
							(this.generatedCodeColumn = 0),
							(a = !0);
					else {
						if (this.hires || a || i.has(s)) {
							let u = [this.generatedCodeColumn, t, o.line, o.column];
							this.hires === "boundary"
								? Vc.test(n[s])
									? c || (this.rawSegments.push(u), (c = !0))
									: (this.rawSegments.push(u), (c = !1))
								: this.rawSegments.push(u);
						}
						(o.column += 1), (this.generatedCodeColumn += 1), (a = !1);
					}
					s += 1;
				}
				this.pending = null;
			}
			advance(t) {
				if (!t) return;
				let r = t.split(`
`);
				if (r.length > 1) {
					for (let n = 0; n < r.length - 1; n++)
						this.generatedCodeLine++,
							(this.raw[this.generatedCodeLine] = this.rawSegments = []);
					this.generatedCodeColumn = 0;
				}
				this.generatedCodeColumn += r[r.length - 1].length;
			}
		},
		We = `
`,
		Re = { insertLeft: !1, insertRight: !1, storeName: !1 },
		vt = class e {
			constructor(t, r = {}) {
				let n = new yt(0, t.length, t);
				Object.defineProperties(this, {
					original: { writable: !0, value: t },
					outro: { writable: !0, value: "" },
					intro: { writable: !0, value: "" },
					firstChunk: { writable: !0, value: n },
					lastChunk: { writable: !0, value: n },
					lastSearchedChunk: { writable: !0, value: n },
					byStart: { writable: !0, value: {} },
					byEnd: { writable: !0, value: {} },
					filename: { writable: !0, value: r.filename },
					indentExclusionRanges: {
						writable: !0,
						value: r.indentExclusionRanges,
					},
					sourcemapLocations: { writable: !0, value: new xt() },
					storedNames: { writable: !0, value: {} },
					indentStr: { writable: !0, value: void 0 },
					ignoreList: { writable: !0, value: r.ignoreList },
				}),
					(this.byStart[0] = n),
					(this.byEnd[t.length] = n);
			}
			addSourcemapLocation(t) {
				this.sourcemapLocations.add(t);
			}
			append(t) {
				if (typeof t != "string")
					throw new TypeError("outro content must be a string");
				return (this.outro += t), this;
			}
			appendLeft(t, r) {
				if (typeof r != "string")
					throw new TypeError("inserted content must be a string");
				this._split(t);
				let n = this.byEnd[t];
				return n ? n.appendLeft(r) : (this.intro += r), this;
			}
			appendRight(t, r) {
				if (typeof r != "string")
					throw new TypeError("inserted content must be a string");
				this._split(t);
				let n = this.byStart[t];
				return n ? n.appendRight(r) : (this.outro += r), this;
			}
			clone() {
				let t = new e(this.original, { filename: this.filename }),
					r = this.firstChunk,
					n = (t.firstChunk = t.lastSearchedChunk = r.clone());
				for (; r; ) {
					(t.byStart[n.start] = n), (t.byEnd[n.end] = n);
					let o = r.next,
						i = o && o.clone();
					i && ((n.next = i), (i.previous = n), (n = i)), (r = o);
				}
				return (
					(t.lastChunk = n),
					this.indentExclusionRanges &&
						(t.indentExclusionRanges = this.indentExclusionRanges.slice()),
					(t.sourcemapLocations = new xt(this.sourcemapLocations)),
					(t.intro = this.intro),
					(t.outro = this.outro),
					t
				);
			}
			generateDecodedMap(t) {
				t = t || {};
				let r = 0,
					n = Object.keys(this.storedNames),
					o = new Xr(t.hires),
					i = vo(this.original);
				return (
					this.intro && o.advance(this.intro),
					this.firstChunk.eachNext((s) => {
						let a = i(s.start);
						s.intro.length && o.advance(s.intro),
							s.edited
								? o.addEdit(
										r,
										s.content,
										a,
										s.storeName ? n.indexOf(s.original) : -1
								  )
								: o.addUneditedChunk(
										r,
										s,
										this.original,
										a,
										this.sourcemapLocations
								  ),
							s.outro.length && o.advance(s.outro);
					}),
					{
						file: t.file ? t.file.split(/[/\\]/).pop() : void 0,
						sources: [t.source ? zc(t.file || "", t.source) : t.file || ""],
						sourcesContent: t.includeContent ? [this.original] : void 0,
						names: n,
						mappings: o.raw,
						x_google_ignoreList: this.ignoreList ? [r] : void 0,
					}
				);
			}
			generateMap(t) {
				return new Yr(this.generateDecodedMap(t));
			}
			_ensureindentStr() {
				this.indentStr === void 0 && (this.indentStr = jc(this.original));
			}
			_getRawIndentString() {
				return this._ensureindentStr(), this.indentStr;
			}
			getIndentString() {
				return (
					this._ensureindentStr(), this.indentStr === null ? "	" : this.indentStr
				);
			}
			indent(t, r) {
				let n = /^[^\r\n]/gm;
				if (
					(Ac(t) && ((r = t), (t = void 0)),
					t === void 0 && (this._ensureindentStr(), (t = this.indentStr || "	")),
					t === "")
				)
					return this;
				r = r || {};
				let o = {};
				r.exclude &&
					(typeof r.exclude[0] == "number" ? [r.exclude] : r.exclude).forEach(
						(f) => {
							for (let p = f[0]; p < f[1]; p += 1) o[p] = !0;
						}
					);
				let i = r.indentStart !== !1,
					s = (u) => (i ? `${t}${u}` : ((i = !0), u));
				this.intro = this.intro.replace(n, s);
				let a = 0,
					c = this.firstChunk;
				for (; c; ) {
					let u = c.end;
					if (c.edited)
						o[a] ||
							((c.content = c.content.replace(n, s)),
							c.content.length &&
								(i =
									c.content[c.content.length - 1] ===
									`
`));
					else
						for (a = c.start; a < u; ) {
							if (!o[a]) {
								let f = this.original[a];
								f ===
								`
`
									? (i = !0)
									: f !== "\r" &&
									  i &&
									  ((i = !1),
									  a === c.start || (this._splitChunk(c, a), (c = c.next)),
									  c.prependRight(t));
							}
							a += 1;
						}
					(a = c.end), (c = c.next);
				}
				return (this.outro = this.outro.replace(n, s)), this;
			}
			insert() {
				throw new Error(
					"magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
				);
			}
			insertLeft(t, r) {
				return (
					Re.insertLeft ||
						(console.warn(
							"magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
						),
						(Re.insertLeft = !0)),
					this.appendLeft(t, r)
				);
			}
			insertRight(t, r) {
				return (
					Re.insertRight ||
						(console.warn(
							"magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
						),
						(Re.insertRight = !0)),
					this.prependRight(t, r)
				);
			}
			move(t, r, n) {
				if (n >= t && n <= r)
					throw new Error("Cannot move a selection inside itself");
				this._split(t), this._split(r), this._split(n);
				let o = this.byStart[t],
					i = this.byEnd[r],
					s = o.previous,
					a = i.next,
					c = this.byStart[n];
				if (!c && i === this.lastChunk) return this;
				let u = c ? c.previous : this.lastChunk;
				return (
					s && (s.next = a),
					a && (a.previous = s),
					u && (u.next = o),
					c && (c.previous = i),
					o.previous || (this.firstChunk = i.next),
					i.next ||
						((this.lastChunk = o.previous), (this.lastChunk.next = null)),
					(o.previous = u),
					(i.next = c || null),
					u || (this.firstChunk = o),
					c || (this.lastChunk = i),
					this
				);
			}
			overwrite(t, r, n, o) {
				return (
					(o = o || {}),
					this.update(t, r, n, { ...o, overwrite: !o.contentOnly })
				);
			}
			update(t, r, n, o) {
				if (typeof n != "string")
					throw new TypeError("replacement content must be a string");
				if (this.original.length !== 0) {
					for (; t < 0; ) t += this.original.length;
					for (; r < 0; ) r += this.original.length;
				}
				if (r > this.original.length) throw new Error("end is out of bounds");
				if (t === r)
					throw new Error(
						"Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead"
					);
				this._split(t),
					this._split(r),
					o === !0 &&
						(Re.storeName ||
							(console.warn(
								"The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
							),
							(Re.storeName = !0)),
						(o = { storeName: !0 }));
				let i = o !== void 0 ? o.storeName : !1,
					s = o !== void 0 ? o.overwrite : !1;
				if (i) {
					let u = this.original.slice(t, r);
					Object.defineProperty(this.storedNames, u, {
						writable: !0,
						value: !0,
						enumerable: !0,
					});
				}
				let a = this.byStart[t],
					c = this.byEnd[r];
				if (a) {
					let u = a;
					for (; u !== c; ) {
						if (u.next !== this.byStart[u.end])
							throw new Error("Cannot overwrite across a split point");
						(u = u.next), u.edit("", !1);
					}
					a.edit(n, i, !s);
				} else {
					let u = new yt(t, r, "").edit(n, i);
					(c.next = u), (u.previous = c);
				}
				return this;
			}
			prepend(t) {
				if (typeof t != "string")
					throw new TypeError("outro content must be a string");
				return (this.intro = t + this.intro), this;
			}
			prependLeft(t, r) {
				if (typeof r != "string")
					throw new TypeError("inserted content must be a string");
				this._split(t);
				let n = this.byEnd[t];
				return n ? n.prependLeft(r) : (this.intro = r + this.intro), this;
			}
			prependRight(t, r) {
				if (typeof r != "string")
					throw new TypeError("inserted content must be a string");
				this._split(t);
				let n = this.byStart[t];
				return n ? n.prependRight(r) : (this.outro = r + this.outro), this;
			}
			remove(t, r) {
				if (this.original.length !== 0) {
					for (; t < 0; ) t += this.original.length;
					for (; r < 0; ) r += this.original.length;
				}
				if (t === r) return this;
				if (t < 0 || r > this.original.length)
					throw new Error("Character is out of bounds");
				if (t > r) throw new Error("end must be greater than start");
				this._split(t), this._split(r);
				let n = this.byStart[t];
				for (; n; )
					(n.intro = ""),
						(n.outro = ""),
						n.edit(""),
						(n = r > n.end ? this.byStart[n.end] : null);
				return this;
			}
			reset(t, r) {
				if (this.original.length !== 0) {
					for (; t < 0; ) t += this.original.length;
					for (; r < 0; ) r += this.original.length;
				}
				if (t === r) return this;
				if (t < 0 || r > this.original.length)
					throw new Error("Character is out of bounds");
				if (t > r) throw new Error("end must be greater than start");
				this._split(t), this._split(r);
				let n = this.byStart[t];
				for (; n; ) n.reset(), (n = r > n.end ? this.byStart[n.end] : null);
				return this;
			}
			lastChar() {
				if (this.outro.length) return this.outro[this.outro.length - 1];
				let t = this.lastChunk;
				do {
					if (t.outro.length) return t.outro[t.outro.length - 1];
					if (t.content.length) return t.content[t.content.length - 1];
					if (t.intro.length) return t.intro[t.intro.length - 1];
				} while ((t = t.previous));
				return this.intro.length ? this.intro[this.intro.length - 1] : "";
			}
			lastLine() {
				let t = this.outro.lastIndexOf(We);
				if (t !== -1) return this.outro.substr(t + 1);
				let r = this.outro,
					n = this.lastChunk;
				do {
					if (n.outro.length > 0) {
						if (((t = n.outro.lastIndexOf(We)), t !== -1))
							return n.outro.substr(t + 1) + r;
						r = n.outro + r;
					}
					if (n.content.length > 0) {
						if (((t = n.content.lastIndexOf(We)), t !== -1))
							return n.content.substr(t + 1) + r;
						r = n.content + r;
					}
					if (n.intro.length > 0) {
						if (((t = n.intro.lastIndexOf(We)), t !== -1))
							return n.intro.substr(t + 1) + r;
						r = n.intro + r;
					}
				} while ((n = n.previous));
				return (
					(t = this.intro.lastIndexOf(We)),
					t !== -1 ? this.intro.substr(t + 1) + r : this.intro + r
				);
			}
			slice(t = 0, r = this.original.length) {
				if (this.original.length !== 0) {
					for (; t < 0; ) t += this.original.length;
					for (; r < 0; ) r += this.original.length;
				}
				let n = "",
					o = this.firstChunk;
				for (; o && (o.start > t || o.end <= t); ) {
					if (o.start < r && o.end >= r) return n;
					o = o.next;
				}
				if (o && o.edited && o.start !== t)
					throw new Error(
						`Cannot use replaced character ${t} as slice start anchor.`
					);
				let i = o;
				for (; o; ) {
					o.intro && (i !== o || o.start === t) && (n += o.intro);
					let s = o.start < r && o.end >= r;
					if (s && o.edited && o.end !== r)
						throw new Error(
							`Cannot use replaced character ${r} as slice end anchor.`
						);
					let a = i === o ? t - o.start : 0,
						c = s ? o.content.length + r - o.end : o.content.length;
					if (
						((n += o.content.slice(a, c)),
						o.outro && (!s || o.end === r) && (n += o.outro),
						s)
					)
						break;
					o = o.next;
				}
				return n;
			}
			snip(t, r) {
				let n = this.clone();
				return n.remove(0, t), n.remove(r, n.original.length), n;
			}
			_split(t) {
				if (this.byStart[t] || this.byEnd[t]) return;
				let r = this.lastSearchedChunk,
					n = t > r.end;
				for (; r; ) {
					if (r.contains(t)) return this._splitChunk(r, t);
					r = n ? this.byStart[r.end] : this.byEnd[r.start];
				}
			}
			_splitChunk(t, r) {
				if (t.edited && t.content.length) {
					let o = vo(this.original)(r);
					throw new Error(
						`Cannot split a chunk that has already been edited (${o.line}:${o.column} \u2013 "${t.original}")`
					);
				}
				let n = t.split(r);
				return (
					(this.byEnd[r] = t),
					(this.byStart[r] = n),
					(this.byEnd[n.end] = n),
					t === this.lastChunk && (this.lastChunk = n),
					(this.lastSearchedChunk = t),
					!0
				);
			}
			toString() {
				let t = this.intro,
					r = this.firstChunk;
				for (; r; ) (t += r.toString()), (r = r.next);
				return t + this.outro;
			}
			isEmpty() {
				let t = this.firstChunk;
				do
					if (
						(t.intro.length && t.intro.trim()) ||
						(t.content.length && t.content.trim()) ||
						(t.outro.length && t.outro.trim())
					)
						return !1;
				while ((t = t.next));
				return !0;
			}
			length() {
				let t = this.firstChunk,
					r = 0;
				do r += t.intro.length + t.content.length + t.outro.length;
				while ((t = t.next));
				return r;
			}
			trimLines() {
				return this.trim("[\\r\\n]");
			}
			trim(t) {
				return this.trimStart(t).trimEnd(t);
			}
			trimEndAborted(t) {
				let r = new RegExp((t || "\\s") + "+$");
				if (((this.outro = this.outro.replace(r, "")), this.outro.length))
					return !0;
				let n = this.lastChunk;
				do {
					let o = n.end,
						i = n.trimEnd(r);
					if (
						(n.end !== o &&
							(this.lastChunk === n && (this.lastChunk = n.next),
							(this.byEnd[n.end] = n),
							(this.byStart[n.next.start] = n.next),
							(this.byEnd[n.next.end] = n.next)),
						i)
					)
						return !0;
					n = n.previous;
				} while (n);
				return !1;
			}
			trimEnd(t) {
				return this.trimEndAborted(t), this;
			}
			trimStartAborted(t) {
				let r = new RegExp("^" + (t || "\\s") + "+");
				if (((this.intro = this.intro.replace(r, "")), this.intro.length))
					return !0;
				let n = this.firstChunk;
				do {
					let o = n.end,
						i = n.trimStart(r);
					if (
						(n.end !== o &&
							(n === this.lastChunk && (this.lastChunk = n.next),
							(this.byEnd[n.end] = n),
							(this.byStart[n.next.start] = n.next),
							(this.byEnd[n.next.end] = n.next)),
						i)
					)
						return !0;
					n = n.next;
				} while (n);
				return !1;
			}
			trimStart(t) {
				return this.trimStartAborted(t), this;
			}
			hasChanged() {
				return this.original !== this.toString();
			}
			_replaceRegexp(t, r) {
				function n(i, s) {
					return typeof r == "string"
						? r.replace(/\$(\$|&|\d+)/g, (a, c) =>
								c === "$"
									? "$"
									: c === "&"
									? i[0]
									: +c < i.length
									? i[+c]
									: `$${c}`
						  )
						: r(...i, i.index, s, i.groups);
				}
				function o(i, s) {
					let a,
						c = [];
					for (; (a = i.exec(s)); ) c.push(a);
					return c;
				}
				if (t.global)
					o(t, this.original).forEach((s) => {
						if (s.index != null) {
							let a = n(s, this.original);
							a !== s[0] && this.overwrite(s.index, s.index + s[0].length, a);
						}
					});
				else {
					let i = this.original.match(t);
					if (i && i.index != null) {
						let s = n(i, this.original);
						s !== i[0] && this.overwrite(i.index, i.index + i[0].length, s);
					}
				}
				return this;
			}
			_replaceString(t, r) {
				let { original: n } = this,
					o = n.indexOf(t);
				return o !== -1 && this.overwrite(o, o + t.length, r), this;
			}
			replace(t, r) {
				return typeof t == "string"
					? this._replaceString(t, r)
					: this._replaceRegexp(t, r);
			}
			_replaceAllString(t, r) {
				let { original: n } = this,
					o = t.length;
				for (let i = n.indexOf(t); i !== -1; i = n.indexOf(t, i + o))
					n.slice(i, i + o) !== r && this.overwrite(i, i + o, r);
				return this;
			}
			replaceAll(t, r) {
				if (typeof t == "string") return this._replaceAllString(t, r);
				if (!t.global)
					throw new TypeError(
						"MagicString.prototype.replaceAll called with a non-global RegExp argument"
					);
				return this._replaceRegexp(t, r);
			}
		};
	var Pc = /theme\(\s*(['"])?(.*?)\1?\s*\)/g;
	function wo(e) {
		return e.includes("theme(") && e.includes(")");
	}
	function ko(e, t, r = !0) {
		let n = Array.from(e.toString().matchAll(Pc));
		if (!n.length) return e;
		let o = new vt(e);
		for (let i of n) {
			let s = i[2];
			if (!s) throw new Error("theme() expect exact one argument, but got 0");
			let a = Mc(s, t, r);
			a && o.overwrite(i.index, i.index + i[0].length, a);
		}
		return o.toString();
	}
	function Mc(e, t, r = !0) {
		let [n, o] = e.split("/"),
			s = n
				.trim()
				.split(".")
				.reduce((a, c) => a?.[c], t);
		if ((typeof s == "object" && (s = s.DEFAULT), typeof s == "string")) {
			if (o) {
				let a = Y(s);
				a && (s = M(a, o));
			}
			return s;
		} else if (r) throw new Error(`theme of "${e}" did not found`);
	}
	function K(e, t) {
		let r;
		return {
			name: e,
			match(n, o) {
				r ||
					(r = new RegExp(
						`^${fe(e)}(?:${o.generator.config.separators.join("|")})`
					));
				let i = n.match(r);
				if (i)
					return {
						matcher: n.slice(i[0].length),
						handle: (s, a) => a({ ...s, ...t(s) }),
					};
			},
			autocomplete: `${e}:`,
		};
	}
	function G(e, t) {
		let r;
		return {
			name: e,
			match(n, o) {
				r ||
					(r = new RegExp(
						`^${fe(e)}(?:${o.generator.config.separators.join("|")})`
					));
				let i = n.match(r);
				if (i)
					return {
						matcher: n.slice(i[0].length),
						handle: (s, a) =>
							a({ ...s, parent: `${s.parent ? `${s.parent} $$ ` : ""}${t}` }),
					};
			},
			autocomplete: `${e}:`,
		};
	}
	function me(e, t, r) {
		if (t.startsWith(`${e}[`)) {
			let [n, o] = Ce(t.slice(e.length), "[", "]") ?? [];
			if (n && o) {
				for (let i of r) if (o.startsWith(i)) return [n, o.slice(i.length), i];
				return [n, o, ""];
			}
		}
	}
	function I(e, t, r) {
		if (t.startsWith(e)) {
			let n = me(e, t, r);
			if (n) {
				let [o = "", i = n[1]] = I("/", n[1], r) ?? [];
				return [n[0], i, o];
			}
			for (let o of r.filter((i) => i !== "/")) {
				let i = t.indexOf(o, e.length);
				if (i !== -1) {
					let s = t.indexOf("/", e.length),
						a = s === -1 || i <= s;
					return [
						t.slice(e.length, a ? i : s),
						t.slice(i + o.length),
						a ? "" : t.slice(s + 1, i),
					];
				}
			}
		}
	}
	var rn = {};
	qa(rn, {
		auto: () => Lc,
		bracket: () => Ic,
		bracketOfColor: () => Kc,
		bracketOfLength: () => Gc,
		bracketOfPosition: () => Hc,
		cssvar: () => qc,
		degree: () => Xc,
		fraction: () => Dc,
		global: () => Zc,
		number: () => Bc,
		numberWithUnit: () => Fc,
		percent: () => Nc,
		position: () => Qc,
		properties: () => Jc,
		px: () => Wc,
		rem: () => Uc,
		time: () => Yc,
	});
	var N = {
			l: ["-left"],
			r: ["-right"],
			t: ["-top"],
			b: ["-bottom"],
			s: ["-inline-start"],
			e: ["-inline-end"],
			x: ["-left", "-right"],
			y: ["-top", "-bottom"],
			"": [""],
			bs: ["-block-start"],
			be: ["-block-end"],
			is: ["-inline-start"],
			ie: ["-inline-end"],
			block: ["-block-start", "-block-end"],
			inline: ["-inline-start", "-inline-end"],
		},
		Zr = {
			...N,
			s: ["-inset-inline-start"],
			start: ["-inset-inline-start"],
			e: ["-inset-inline-end"],
			end: ["-inset-inline-end"],
			bs: ["-inset-block-start"],
			be: ["-inset-block-end"],
			is: ["-inset-inline-start"],
			ie: ["-inset-inline-end"],
			block: ["-inset-block-start", "-inset-block-end"],
			inline: ["-inset-inline-start", "-inset-inline-end"],
		},
		Jr = {
			l: ["-top-left", "-bottom-left"],
			r: ["-top-right", "-bottom-right"],
			t: ["-top-left", "-top-right"],
			b: ["-bottom-left", "-bottom-right"],
			tl: ["-top-left"],
			lt: ["-top-left"],
			tr: ["-top-right"],
			rt: ["-top-right"],
			bl: ["-bottom-left"],
			lb: ["-bottom-left"],
			br: ["-bottom-right"],
			rb: ["-bottom-right"],
			"": [""],
			bs: ["-start-start", "-start-end"],
			be: ["-end-start", "-end-end"],
			s: ["-end-start", "-start-start"],
			is: ["-end-start", "-start-start"],
			e: ["-start-end", "-end-end"],
			ie: ["-start-end", "-end-end"],
			ss: ["-start-start"],
			"bs-is": ["-start-start"],
			"is-bs": ["-start-start"],
			se: ["-start-end"],
			"bs-ie": ["-start-end"],
			"ie-bs": ["-start-end"],
			es: ["-end-start"],
			"be-is": ["-end-start"],
			"is-be": ["-end-start"],
			ee: ["-end-end"],
			"be-ie": ["-end-end"],
			"ie-be": ["-end-end"],
		},
		So = { x: ["-x"], y: ["-y"], z: ["-z"], "": ["-x", "-y"] },
		Co = ["x", "y", "z"],
		$o = [
			"top",
			"top center",
			"top left",
			"top right",
			"bottom",
			"bottom center",
			"bottom left",
			"bottom right",
			"left",
			"left center",
			"left top",
			"left bottom",
			"right",
			"right center",
			"right top",
			"right bottom",
			"center",
			"center top",
			"center bottom",
			"center left",
			"center right",
			"center center",
		],
		B = Object.assign(
			{},
			...$o.map((e) => ({ [e.replace(/ /, "-")]: e })),
			...$o.map((e) => ({
				[e.replace(/\b(\w)\w+/g, "$1").replace(/ /, "")]: e,
			}))
		),
		k = ["inherit", "initial", "revert", "revert-layer", "unset"],
		Be = /^(calc|clamp|min|max)\s*\((.+)\)(.*)/,
		wt = /^(var)\s*\((.+)\)(.*)/;
	var Ee =
			/^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i,
		Qr = /^(-?\d*(?:\.\d+)?)$/,
		en = /^(px|[sld]?v[wh])$/i,
		tn = {
			px: 1,
			vw: 100,
			vh: 100,
			svw: 100,
			svh: 100,
			dvw: 100,
			dvh: 100,
			lvh: 100,
			lvw: 100,
		},
		kt = /^\[(color|image|length|size|position|quoted|string):/i,
		Ro = /,(?![^()]*\))/g;
	var _c = [
		"color",
		"border-color",
		"background-color",
		"outline-color",
		"text-decoration-color",
		"flex-grow",
		"flex",
		"flex-shrink",
		"caret-color",
		"font",
		"gap",
		"opacity",
		"visibility",
		"z-index",
		"font-weight",
		"zoom",
		"text-shadow",
		"transform",
		"box-shadow",
		"border",
		"background-position",
		"left",
		"right",
		"top",
		"bottom",
		"object-position",
		"max-height",
		"min-height",
		"max-width",
		"min-width",
		"height",
		"width",
		"border-width",
		"margin",
		"padding",
		"outline-width",
		"outline-offset",
		"font-size",
		"line-height",
		"text-indent",
		"vertical-align",
		"border-spacing",
		"letter-spacing",
		"word-spacing",
		"stroke",
		"filter",
		"backdrop-filter",
		"fill",
		"mask",
		"mask-size",
		"mask-border",
		"clip-path",
		"clip",
		"border-radius",
	];
	function X(e) {
		return +e.toFixed(10);
	}
	function Fc(e) {
		let t = e.match(Ee);
		if (!t) return;
		let [, r, n] = t,
			o = Number.parseFloat(r);
		if (n && !Number.isNaN(o)) return `${X(o)}${n}`;
	}
	function Lc(e) {
		if (e === "auto" || e === "a") return "auto";
	}
	function Uc(e) {
		if (!e) return;
		if (en.test(e)) return `${tn[e]}${e}`;
		let t = e.match(Ee);
		if (!t) return;
		let [, r, n] = t,
			o = Number.parseFloat(r);
		if (!Number.isNaN(o))
			return o === 0 ? "0" : n ? `${X(o)}${n}` : `${X(o / 4)}rem`;
	}
	function Wc(e) {
		if (en.test(e)) return `${tn[e]}${e}`;
		let t = e.match(Ee);
		if (!t) return;
		let [, r, n] = t,
			o = Number.parseFloat(r);
		if (!Number.isNaN(o)) return n ? `${X(o)}${n}` : `${X(o)}px`;
	}
	function Bc(e) {
		if (!Qr.test(e)) return;
		let t = Number.parseFloat(e);
		if (!Number.isNaN(t)) return X(t);
	}
	function Nc(e) {
		if ((e.endsWith("%") && (e = e.slice(0, -1)), !Qr.test(e))) return;
		let t = Number.parseFloat(e);
		if (!Number.isNaN(t)) return `${X(t / 100)}`;
	}
	function Dc(e) {
		if (!e) return;
		if (e === "full") return "100%";
		let [t, r] = e.split("/"),
			n = Number.parseFloat(t) / Number.parseFloat(r);
		if (!Number.isNaN(n)) return n === 0 ? "0" : `${X(n * 100)}%`;
	}
	function $t(e, t) {
		if (e && e.startsWith("[") && e.endsWith("]")) {
			let r,
				n,
				o = e.match(kt);
			if (
				(o
					? (t || (n = o[1]), (r = e.slice(o[0].length, -1)))
					: (r = e.slice(1, -1)),
				!r || r === '=""')
			)
				return;
			r.startsWith("--") && (r = `var(${r})`);
			let i = 0;
			for (let s of r)
				if (s === "[") i += 1;
				else if (s === "]" && ((i -= 1), i < 0)) return;
			if (i) return;
			switch (n) {
				case "string":
					return r.replace(/(^|[^\\])_/g, "$1 ").replace(/\\_/g, "_");
				case "quoted":
					return r
						.replace(/(^|[^\\])_/g, "$1 ")
						.replace(/\\_/g, "_")
						.replace(/(["\\])/g, "\\$1")
						.replace(/^(.+)$/, '"$1"');
			}
			return r
				.replace(/(url\(.*?\))/g, (s) => s.replace(/_/g, "\\_"))
				.replace(/(^|[^\\])_/g, "$1 ")
				.replace(/\\_/g, "_")
				.replace(/(?:calc|clamp|max|min)\((.*)/g, (s) => {
					let a = [];
					return s
						.replace(
							/var\((--.+?)[,)]/g,
							(c, u) => (a.push(u), c.replace(u, "--un-calc"))
						)
						.replace(
							/(-?\d*\.?\d(?!-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,
							"$1 $2 "
						)
						.replace(/--un-calc/g, () => a.shift());
				});
		}
	}
	function Ic(e) {
		return $t(e);
	}
	function Kc(e) {
		return $t(e, "color");
	}
	function Gc(e) {
		return $t(e, "length");
	}
	function Hc(e) {
		return $t(e, "position");
	}
	function qc(e) {
		if (/^\$[^\s'"`;{}]/.test(e)) {
			let [t, r] = e.slice(1).split(",");
			return `var(--${se(t)}${r ? `, ${r}` : ""})`;
		}
	}
	function Yc(e) {
		let t = e.match(/^(-?[0-9.]+)(s|ms)?$/i);
		if (!t) return;
		let [, r, n] = t,
			o = Number.parseFloat(r);
		if (!Number.isNaN(o))
			return o === 0 && !n ? "0s" : n ? `${X(o)}${n}` : `${X(o)}ms`;
	}
	function Xc(e) {
		let t = e.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);
		if (!t) return;
		let [, r, n] = t,
			o = Number.parseFloat(r);
		if (!Number.isNaN(o))
			return o === 0 ? "0" : n ? `${X(o)}${n}` : `${X(o)}deg`;
	}
	function Zc(e) {
		if (k.includes(e)) return e;
	}
	function Jc(e) {
		if (e.split(",").every((t) => _c.includes(t))) return e;
	}
	function Qc(e) {
		if (["top", "left", "right", "bottom", "center"].includes(e)) return e;
	}
	var el = bt(rn),
		l = el;
	var Eo = {
			mid: "middle",
			base: "baseline",
			btm: "bottom",
			baseline: "baseline",
			top: "top",
			start: "top",
			middle: "middle",
			bottom: "bottom",
			end: "bottom",
			"text-top": "text-top",
			"text-bottom": "text-bottom",
			sub: "sub",
			super: "super",
			...Object.fromEntries(k.map((e) => [e, e])),
		},
		St = [
			[
				/^(?:vertical|align|v)-([-\w]+%?)$/,
				([, e]) => ({ "vertical-align": Eo[e] ?? l.numberWithUnit(e) }),
				{
					autocomplete: [
						`(vertical|align|v)-(${Object.keys(Eo).join("|")})`,
						"(vertical|align|v)-<percentage>",
					],
				},
			],
		],
		To = ["center", "left", "right", "justify", "start", "end"],
		Ct = [
			...To.map((e) => [`text-${e}`, { "text-align": e }]),
			...[...k, ...To].map((e) => [`text-align-${e}`, { "text-align": e }]),
		];
	var Oo = "$$mini-no-negative";
	function F(e) {
		return ([t, r, n], { theme: o }) => {
			let i =
				o.spacing?.[n || "DEFAULT"] ??
				l.bracket.cssvar.global.auto.fraction.rem(n);
			if (i != null) return N[r].map((s) => [`${e}${s}`, i]);
			if (n?.startsWith("-")) {
				let s = o.spacing?.[n.slice(1)];
				if (s != null) return N[r].map((a) => [`${e}${a}`, `calc(${s} * -1)`]);
			}
		};
	}
	function jo(e, t, r = "colors") {
		let n = e[r],
			o = -1;
		for (let i of t) {
			if (((o += 1), n && typeof n != "string")) {
				let s = t
					.slice(o)
					.join("-")
					.replace(/(-[a-z])/g, (a) => a.slice(1).toUpperCase());
				if (n[s]) return n[s];
				if (n[i]) {
					n = n[i];
					continue;
				}
			}
			return;
		}
		return n;
	}
	function Rt(e, t, r) {
		return jo(e, t, r) || jo(e, t, "colors");
	}
	function on(e, t) {
		let [r, n] = de(e, "[", "]", ["/", ":"]) ?? [];
		if (r != null) {
			let o = (r.match(kt) ?? [])[1];
			if (o == null || o === t) return [r, n];
		}
	}
	function Te(e, t, r) {
		let n = on(e, "color");
		if (!n) return;
		let [o, i] = n,
			s = o.replace(/([a-z])(\d)/g, "$1-$2").split(/-/g),
			[a] = s;
		if (!a) return;
		let c,
			u = l.bracketOfColor(o),
			f = u || o;
		if (l.numberWithUnit(f)) return;
		if (
			(/^#[\da-f]+$/i.test(f)
				? (c = f)
				: /^hex-[\da-fA-F]+$/.test(f)
				? (c = `#${f.slice(4)}`)
				: o.startsWith("$") && (c = l.cssvar(o)),
			(c = c || u),
			!c)
		) {
			let d = Rt(t, [o], r);
			typeof d == "string" && (c = d);
		}
		let p = "DEFAULT";
		if (!c) {
			let d,
				[m] = s.slice(-1);
			/^\d+$/.test(m)
				? ((p = m),
				  (d = Rt(t, s.slice(0, -1), r)),
				  !d || typeof d == "string" ? (c = void 0) : (c = d[p]))
				: ((d = Rt(t, s, r)),
				  !d && s.length <= 2 && (([, p = p] = s), (d = Rt(t, [a], r))),
				  typeof d == "string" ? (c = d) : p && d && (c = d[p]));
		}
		return {
			opacity: i,
			name: a,
			no: p,
			color: c,
			cssColor: Y(c),
			alpha: l.bracket.cssvar.percent(i ?? ""),
		};
	}
	function O(e, t, r, n) {
		return ([, o], { theme: i, generator: s }) => {
			let a = Te(o, i, r);
			if (!a) return;
			let { alpha: c, color: u, cssColor: f } = a,
				d = s.config.envMode === "dev" && u ? ` /* ${u} */` : "",
				m = {};
			if (f)
				if (c != null) m[e] = M(f, c) + d;
				else {
					let b = `--un-${t}-opacity`,
						x = M(f, `var(${b})`);
					x.includes(b) && (m[b] = ae(f)), (m[e] = x + d);
				}
			else if (u)
				if (c != null) m[e] = M(u, c) + d;
				else {
					let b = `--un-${t}-opacity`,
						x = M(u, `var(${b})`);
					x.includes(b) && (m[b] = 1), (m[e] = x + d);
				}
			if (n?.(m) !== !1) return m;
		};
	}
	function je(e, t) {
		let r = [];
		e = V(e);
		for (let n = 0; n < e.length; n++) {
			let o = xe(e[n], " ", 6);
			if (!o || o.length < 3) return e;
			let i = !1,
				s = o.indexOf("inset");
			s !== -1 && (o.splice(s, 1), (i = !0));
			let a = "",
				c = o.at(-1);
			if (Y(o.at(0))) {
				let u = Y(o.shift());
				u && (a = `, ${M(u)}`);
			} else if (Y(c)) {
				let u = Y(o.pop());
				u && (a = `, ${M(u)}`);
			} else c && wt.test(c) && (a = `, ${o.pop()}`);
			r.push(`${i ? "inset " : ""}${o.join(" ")} var(${t}${a})`);
		}
		return r;
	}
	function ze(e, t, r) {
		return e != null && !!Te(e, t, r)?.color;
	}
	var zo = /[a-z]+/gi,
		nn = new WeakMap();
	function ye({ theme: e, generator: t }, r = "breakpoints") {
		let n = t?.userConfig?.theme?.[r] || e[r];
		if (!n) return;
		if (nn.has(e)) return nn.get(e);
		let o = Object.entries(n)
			.sort(
				(i, s) =>
					Number.parseInt(i[1].replace(zo, "")) -
					Number.parseInt(s[1].replace(zo, ""))
			)
			.map(([i, s]) => ({ point: i, size: s }));
		return nn.set(e, o), o;
	}
	function y(e, t) {
		return k.map((r) => [`${e}-${r}`, { [t ?? e]: r }]);
	}
	function Z(e) {
		return e != null && Be.test(e);
	}
	function Ao(e) {
		return (
			e[0] === "[" && e.slice(-1) === "]" && (e = e.slice(1, -1)),
			Be.test(e) || Ee.test(e)
		);
	}
	function Et(e, t, r) {
		let n = t.split(Ro);
		return e || (!e && n.length === 1)
			? So[e].map((o) => [`--un-${r}${o}`, t])
			: n.map((o, i) => [`--un-${r}-${Co[i]}`, o]);
	}
	var Tt = [
		[
			/^outline-(?:width-|size-)?(.+)$/,
			Vo,
			{ autocomplete: "outline-(width|size)-<num>" },
		],
		[/^outline-(?:color-)?(.+)$/, tl, { autocomplete: "outline-$colors" }],
		[
			/^outline-offset-(.+)$/,
			([, e], { theme: t }) => ({
				"outline-offset": t.lineWidth?.[e] ?? l.bracket.cssvar.global.px(e),
			}),
			{ autocomplete: "outline-(offset)-<num>" },
		],
		["outline", { "outline-style": "solid" }],
		...[
			"auto",
			"dashed",
			"dotted",
			"double",
			"hidden",
			"solid",
			"groove",
			"ridge",
			"inset",
			"outset",
			...k,
		].map((e) => [`outline-${e}`, { "outline-style": e }]),
		[
			"outline-none",
			{ outline: "2px solid transparent", "outline-offset": "2px" },
		],
	];
	function Vo([, e], { theme: t }) {
		return {
			"outline-width": t.lineWidth?.[e] ?? l.bracket.cssvar.global.px(e),
		};
	}
	function tl(e, t) {
		return Z(l.bracket(e[1]))
			? Vo(e, t)
			: O("outline-color", "outline-color", "borderColor")(e, t);
	}
	var jt = [
		["appearance-auto", { "-webkit-appearance": "auto", appearance: "auto" }],
		["appearance-none", { "-webkit-appearance": "none", appearance: "none" }],
	];
	function rl(e) {
		return (
			l.properties.auto.global(e) ??
			{ contents: "contents", scroll: "scroll-position" }[e]
		);
	}
	var zt = [[/^will-change-(.+)/, ([, e]) => ({ "will-change": rl(e) })]];
	var ve = [
			"solid",
			"dashed",
			"dotted",
			"double",
			"hidden",
			"none",
			"groove",
			"ridge",
			"inset",
			"outset",
			...k,
		],
		Ot = [
			[
				/^(?:border|b)()(?:-(.+))?$/,
				te,
				{ autocomplete: "(border|b)-<directions>" },
			],
			[/^(?:border|b)-([xy])(?:-(.+))?$/, te],
			[/^(?:border|b)-([rltbse])(?:-(.+))?$/, te],
			[/^(?:border|b)-(block|inline)(?:-(.+))?$/, te],
			[/^(?:border|b)-([bi][se])(?:-(.+))?$/, te],
			[
				/^(?:border|b)-()(?:width|size)-(.+)$/,
				te,
				{ autocomplete: ["(border|b)-<num>", "(border|b)-<directions>-<num>"] },
			],
			[/^(?:border|b)-([xy])-(?:width|size)-(.+)$/, te],
			[/^(?:border|b)-([rltbse])-(?:width|size)-(.+)$/, te],
			[/^(?:border|b)-(block|inline)-(?:width|size)-(.+)$/, te],
			[/^(?:border|b)-([bi][se])-(?:width|size)-(.+)$/, te],
			[
				/^(?:border|b)-()(?:color-)?(.+)$/,
				Ne,
				{
					autocomplete: [
						"(border|b)-$colors",
						"(border|b)-<directions>-$colors",
					],
				},
			],
			[/^(?:border|b)-([xy])-(?:color-)?(.+)$/, Ne],
			[/^(?:border|b)-([rltbse])-(?:color-)?(.+)$/, Ne],
			[/^(?:border|b)-(block|inline)-(?:color-)?(.+)$/, Ne],
			[/^(?:border|b)-([bi][se])-(?:color-)?(.+)$/, Ne],
			[
				/^(?:border|b)-()op(?:acity)?-?(.+)$/,
				De,
				{ autocomplete: "(border|b)-(op|opacity)-<percent>" },
			],
			[/^(?:border|b)-([xy])-op(?:acity)?-?(.+)$/, De],
			[/^(?:border|b)-([rltbse])-op(?:acity)?-?(.+)$/, De],
			[/^(?:border|b)-(block|inline)-op(?:acity)?-?(.+)$/, De],
			[/^(?:border|b)-([bi][se])-op(?:acity)?-?(.+)$/, De],
			[
				/^(?:border-|b-)?(?:rounded|rd)()(?:-(.+))?$/,
				Ie,
				{
					autocomplete: [
						"(border|b)-(rounded|rd)",
						"(border|b)-(rounded|rd)-$borderRadius",
						"(rounded|rd)",
						"(rounded|rd)-$borderRadius",
					],
				},
			],
			[/^(?:border-|b-)?(?:rounded|rd)-([rltbse])(?:-(.+))?$/, Ie],
			[/^(?:border-|b-)?(?:rounded|rd)-([rltb]{2})(?:-(.+))?$/, Ie],
			[/^(?:border-|b-)?(?:rounded|rd)-([bise][se])(?:-(.+))?$/, Ie],
			[/^(?:border-|b-)?(?:rounded|rd)-([bi][se]-[bi][se])(?:-(.+))?$/, Ie],
			[
				/^(?:border|b)-(?:style-)?()(.+)$/,
				Ke,
				{
					autocomplete: [
						"(border|b)-style",
						`(border|b)-(${ve.join("|")})`,
						"(border|b)-<directions>-style",
						`(border|b)-<directions>-(${ve.join("|")})`,
						`(border|b)-<directions>-style-(${ve.join("|")})`,
						`(border|b)-style-(${ve.join("|")})`,
					],
				},
			],
			[/^(?:border|b)-([xy])-(?:style-)?(.+)$/, Ke],
			[/^(?:border|b)-([rltbse])-(?:style-)?(.+)$/, Ke],
			[/^(?:border|b)-(block|inline)-(?:style-)?(.+)$/, Ke],
			[/^(?:border|b)-([bi][se])-(?:style-)?(.+)$/, Ke],
		];
	function Po(e, t, r) {
		if (t != null) return { [`border${r}-color`]: M(e, t) };
		if (r === "") {
			let n = {},
				o = "--un-border-opacity",
				i = M(e, `var(${o})`);
			return (
				i.includes(o) && (n[o] = typeof e == "string" ? 1 : ae(e)),
				(n["border-color"] = i),
				n
			);
		} else {
			let n = {},
				o = "--un-border-opacity",
				i = `--un-border${r}-opacity`,
				s = M(e, `var(${i})`);
			return (
				s.includes(i) &&
					((n[o] = typeof e == "string" ? 1 : ae(e)), (n[i] = `var(${o})`)),
				(n[`border${r}-color`] = s),
				n
			);
		}
	}
	function nl(e) {
		return ([, t], r) => {
			let n = Te(t, r, "borderColor");
			if (!n) return;
			let { alpha: o, color: i, cssColor: s } = n;
			if (s) return Po(s, o, e);
			if (i) return Po(i, o, e);
		};
	}
	function te([, e = "", t], { theme: r }) {
		let n =
			r.lineWidth?.[t || "DEFAULT"] ?? l.bracket.cssvar.global.px(t || "1");
		if (e in N && n != null) return N[e].map((o) => [`border${o}-width`, n]);
	}
	function Ne([, e = "", t], r) {
		if (e in N) {
			if (Z(l.bracket(t))) return te(["", e, t], r);
			if (ze(t, r.theme, "borderColor"))
				return Object.assign({}, ...N[e].map((n) => nl(n)(["", t], r.theme)));
		}
	}
	function De([, e = "", t]) {
		let r = l.bracket.percent.cssvar(t);
		if (e in N && r != null)
			return N[e].map((n) => [`--un-border${n}-opacity`, r]);
	}
	function Ie([, e = "", t], { theme: r }) {
		let n =
			r.borderRadius?.[t || "DEFAULT"] ||
			l.bracket.cssvar.global.fraction.rem(t || "1");
		if (e in Jr && n != null) return Jr[e].map((o) => [`border${o}-radius`, n]);
	}
	function Ke([, e = "", t]) {
		if (ve.includes(t) && e in N)
			return N[e].map((r) => [`border${r}-style`, t]);
	}
	var At = [
			[
				/^op(?:acity)?-?(.+)$/,
				([, e]) => ({ opacity: l.bracket.percent.cssvar(e) }),
			],
		],
		ol = /^\[url\(.+\)\]$/,
		il = /^\[(?:length|size):.+\]$/,
		sl = /^\[position:.+\]$/,
		al = /^\[(?:linear|conic|radial)-gradient\(.+\)\]$/,
		cl = /^\[image:.+\]$/,
		Vt = [
			[
				/^bg-(.+)$/,
				(...e) => {
					let t = e[0][1];
					if (ol.test(t))
						return {
							"--un-url": l.bracket(t),
							"background-image": "var(--un-url)",
						};
					if (il.test(t) && l.bracketOfLength(t) != null)
						return {
							"background-size": l
								.bracketOfLength(t)
								.split(" ")
								.map((r) => l.fraction.auto.px.cssvar(r) ?? r)
								.join(" "),
						};
					if ((Ao(t) || sl.test(t)) && l.bracketOfPosition(t) != null)
						return {
							"background-position": l
								.bracketOfPosition(t)
								.split(" ")
								.map((r) => l.position.fraction.auto.px.cssvar(r) ?? r)
								.join(" "),
						};
					if (al.test(t) || cl.test(t)) {
						let r = l.bracket(t);
						if (r)
							return {
								"background-image":
									(r.startsWith("http") ? `url(${r})` : l.cssvar(r)) ?? r,
							};
					}
					return O("background-color", "bg", "backgroundColor")(...e);
				},
				{ autocomplete: "bg-$colors" },
			],
			[
				/^bg-op(?:acity)?-?(.+)$/,
				([, e]) => ({ "--un-bg-opacity": l.bracket.percent.cssvar(e) }),
				{ autocomplete: "bg-(op|opacity)-<percent>" },
			],
		],
		Pt = [[/^color-scheme-(\w+)$/, ([, e]) => ({ "color-scheme": e })]];
	var Mt = [
		[
			/^@container(?:\/(\w+))?(?:-(normal))?$/,
			([, e, t]) => ({
				"container-type": t ?? "inline-size",
				"container-name": e,
			}),
		],
	];
	var Mo = ["solid", "double", "dotted", "dashed", "wavy", ...k],
		_t = [
			[
				/^(?:decoration-)?(underline|overline|line-through)$/,
				([, e]) => ({ "text-decoration-line": e }),
				{ autocomplete: "decoration-(underline|overline|line-through)" },
			],
			[
				/^(?:underline|decoration)-(?:size-)?(.+)$/,
				_o,
				{ autocomplete: "(underline|decoration)-<num>" },
			],
			[
				/^(?:underline|decoration)-(auto|from-font)$/,
				([, e]) => ({ "text-decoration-thickness": e }),
				{ autocomplete: "(underline|decoration)-(auto|from-font)" },
			],
			[
				/^(?:underline|decoration)-(.+)$/,
				ll,
				{ autocomplete: "(underline|decoration)-$colors" },
			],
			[
				/^(?:underline|decoration)-op(?:acity)?-?(.+)$/,
				([, e]) => ({ "--un-line-opacity": l.bracket.percent.cssvar(e) }),
				{ autocomplete: "(underline|decoration)-(op|opacity)-<percent>" },
			],
			[
				/^(?:underline|decoration)-offset-(.+)$/,
				([, e], { theme: t }) => ({
					"text-underline-offset":
						t.lineWidth?.[e] ?? l.auto.bracket.cssvar.global.px(e),
				}),
				{ autocomplete: "(underline|decoration)-(offset)-<num>" },
			],
			...Mo.map((e) => [`underline-${e}`, { "text-decoration-style": e }]),
			...Mo.map((e) => [`decoration-${e}`, { "text-decoration-style": e }]),
			["no-underline", { "text-decoration": "none" }],
			["decoration-none", { "text-decoration": "none" }],
		];
	function _o([, e], { theme: t }) {
		return {
			"text-decoration-thickness":
				t.lineWidth?.[e] ?? l.bracket.cssvar.global.px(e),
		};
	}
	function ll(e, t) {
		if (Z(l.bracket(e[1]))) return _o(e, t);
		let r = O("text-decoration-color", "line", "borderColor")(e, t);
		if (r)
			return {
				"-webkit-text-decoration-color": r["text-decoration-color"],
				...r,
			};
	}
	var Ft = [
		["flex", { display: "flex" }],
		["inline-flex", { display: "inline-flex" }],
		["flex-inline", { display: "inline-flex" }],
		[
			/^flex-(.*)$/,
			([, e]) => ({
				flex:
					l.bracket(e) != null
						? l
								.bracket(e)
								.split(" ")
								.map((t) => l.cssvar.fraction(t) ?? t)
								.join(" ")
						: l.cssvar.fraction(e),
			}),
		],
		["flex-1", { flex: "1 1 0%" }],
		["flex-auto", { flex: "1 1 auto" }],
		["flex-initial", { flex: "0 1 auto" }],
		["flex-none", { flex: "none" }],
		[
			/^(?:flex-)?shrink(?:-(.*))?$/,
			([, e = ""]) => ({ "flex-shrink": l.bracket.cssvar.number(e) ?? 1 }),
			{ autocomplete: ["flex-shrink-<num>", "shrink-<num>"] },
		],
		[
			/^(?:flex-)?grow(?:-(.*))?$/,
			([, e = ""]) => ({ "flex-grow": l.bracket.cssvar.number(e) ?? 1 }),
			{ autocomplete: ["flex-grow-<num>", "grow-<num>"] },
		],
		[
			/^(?:flex-)?basis-(.+)$/,
			([, e], { theme: t }) => ({
				"flex-basis": t.spacing?.[e] ?? l.bracket.cssvar.auto.fraction.rem(e),
			}),
			{ autocomplete: ["flex-basis-$spacing", "basis-$spacing"] },
		],
		["flex-row", { "flex-direction": "row" }],
		["flex-row-reverse", { "flex-direction": "row-reverse" }],
		["flex-col", { "flex-direction": "column" }],
		["flex-col-reverse", { "flex-direction": "column-reverse" }],
		["flex-wrap", { "flex-wrap": "wrap" }],
		["flex-wrap-reverse", { "flex-wrap": "wrap-reverse" }],
		["flex-nowrap", { "flex-wrap": "nowrap" }],
	];
	var ul = { "": "", x: "column-", y: "row-", col: "column-", row: "row-" };
	function sn([, e = "", t], { theme: r }) {
		let n = r.spacing?.[t] ?? l.bracket.cssvar.global.rem(t);
		if (n != null) return { [`${ul[e]}gap`]: n };
	}
	var Lt = [
		[
			/^(?:flex-|grid-)?gap-?()(.+)$/,
			sn,
			{ autocomplete: ["gap-$spacing", "gap-<num>"] },
		],
		[
			/^(?:flex-|grid-)?gap-([xy])-?(.+)$/,
			sn,
			{ autocomplete: ["gap-(x|y)-$spacing", "gap-(x|y)-<num>"] },
		],
		[
			/^(?:flex-|grid-)?gap-(col|row)-?(.+)$/,
			sn,
			{ autocomplete: ["gap-(col|row)-$spacing", "gap-(col|row)-<num>"] },
		],
	];
	function ne(e) {
		return e.replace("col", "column");
	}
	function an(e) {
		return e[0] === "r" ? "Row" : "Column";
	}
	function fl(e, t, r) {
		let n = t[`gridAuto${an(e)}`]?.[r];
		if (n != null) return n;
		switch (r) {
			case "min":
				return "min-content";
			case "max":
				return "max-content";
			case "fr":
				return "minmax(0,1fr)";
		}
		return l.bracket.cssvar.auto.rem(r);
	}
	var Ut = [
		["grid", { display: "grid" }],
		["inline-grid", { display: "inline-grid" }],
		[
			/^(?:grid-)?(row|col)-(.+)$/,
			([, e, t], { theme: r }) => ({
				[`grid-${ne(e)}`]: r[`grid${an(e)}`]?.[t] ?? l.bracket.cssvar.auto(t),
			}),
		],
		[
			/^(?:grid-)?(row|col)-span-(.+)$/,
			([, e, t]) => {
				if (t === "full") return { [`grid-${ne(e)}`]: "1/-1" };
				let r = l.bracket.number(t);
				if (r != null) return { [`grid-${ne(e)}`]: `span ${r}/span ${r}` };
			},
			{ autocomplete: "(grid-row|grid-col|row|col)-span-<num>" },
		],
		[
			/^(?:grid-)?(row|col)-start-(.+)$/,
			([, e, t]) => ({ [`grid-${ne(e)}-start`]: l.bracket.cssvar(t) ?? t }),
		],
		[
			/^(?:grid-)?(row|col)-end-(.+)$/,
			([, e, t]) => ({ [`grid-${ne(e)}-end`]: l.bracket.cssvar(t) ?? t }),
			{ autocomplete: "(grid-row|grid-col|row|col)-(start|end)-<num>" },
		],
		[
			/^(?:grid-)?auto-(rows|cols)-(.+)$/,
			([, e, t], { theme: r }) => ({ [`grid-auto-${ne(e)}`]: fl(e, r, t) }),
			{ autocomplete: "(grid-auto|auto)-(rows|cols)-<num>" },
		],
		[
			/^(?:grid-auto-flow|auto-flow|grid-flow)-(.+)$/,
			([, e]) => ({ "grid-auto-flow": l.bracket.cssvar(e) }),
		],
		[
			/^(?:grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)$/,
			([, e]) => ({ "grid-auto-flow": ne(e).replace("-", " ") }),
			{
				autocomplete: [
					"(grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)",
				],
			},
		],
		[
			/^(?:grid-)?(rows|cols)-(.+)$/,
			([, e, t], { theme: r }) => ({
				[`grid-template-${ne(e)}`]:
					r[`gridTemplate${an(e)}`]?.[t] ?? l.bracket.cssvar(t),
			}),
		],
		[
			/^(?:grid-)?(rows|cols)-minmax-([\w.-]+)$/,
			([, e, t]) => ({
				[`grid-template-${ne(e)}`]: `repeat(auto-fill,minmax(${t},1fr))`,
			}),
		],
		[
			/^(?:grid-)?(rows|cols)-(\d+)$/,
			([, e, t]) => ({
				[`grid-template-${ne(e)}`]: `repeat(${t},minmax(0,1fr))`,
			}),
			{ autocomplete: "(grid-rows|grid-cols|rows|cols)-<num>" },
		],
		[
			/^grid-area(s)?-(.+)$/,
			([, e, t]) =>
				e != null
					? {
							"grid-template-areas":
								l.cssvar(t) ??
								t
									.split("-")
									.map((r) => `"${l.bracket(r)}"`)
									.join(" "),
					  }
					: { "grid-area": l.bracket.cssvar(t) },
		],
		["grid-rows-none", { "grid-template-rows": "none" }],
		["grid-cols-none", { "grid-template-columns": "none" }],
		["grid-rows-subgrid", { "grid-template-rows": "subgrid" }],
		["grid-cols-subgrid", { "grid-template-columns": "subgrid" }],
	];
	var Wt = ["auto", "hidden", "clip", "visible", "scroll", "overlay", ...k],
		Bt = [
			[
				/^(?:overflow|of)-(.+)$/,
				([, e]) => (Wt.includes(e) ? { overflow: e } : void 0),
				{
					autocomplete: [
						`(overflow|of)-(${Wt.join("|")})`,
						`(overflow|of)-(x|y)-(${Wt.join("|")})`,
					],
				},
			],
			[
				/^(?:overflow|of)-([xy])-(.+)$/,
				([, e, t]) => (Wt.includes(t) ? { [`overflow-${e}`]: t } : void 0),
			],
		];
	var Nt = [
			[
				/^(?:position-|pos-)?(relative|absolute|fixed|sticky)$/,
				([, e]) => ({ position: e }),
				{
					autocomplete: [
						"(position|pos)-<position>",
						"(position|pos)-<globalKeyword>",
						"<position>",
					],
				},
			],
			[
				/^(?:position-|pos-)([-\w]+)$/,
				([, e]) => (k.includes(e) ? { position: e } : void 0),
			],
			[/^(?:position-|pos-)?(static)$/, ([, e]) => ({ position: e })],
		],
		He = [
			["justify-start", { "justify-content": "flex-start" }],
			["justify-end", { "justify-content": "flex-end" }],
			["justify-center", { "justify-content": "center" }],
			["justify-between", { "justify-content": "space-between" }],
			["justify-around", { "justify-content": "space-around" }],
			["justify-evenly", { "justify-content": "space-evenly" }],
			["justify-stretch", { "justify-content": "stretch" }],
			["justify-left", { "justify-content": "left" }],
			["justify-right", { "justify-content": "right" }],
			...y("justify", "justify-content"),
			["justify-items-start", { "justify-items": "start" }],
			["justify-items-end", { "justify-items": "end" }],
			["justify-items-center", { "justify-items": "center" }],
			["justify-items-stretch", { "justify-items": "stretch" }],
			...y("justify-items"),
			["justify-self-auto", { "justify-self": "auto" }],
			["justify-self-start", { "justify-self": "start" }],
			["justify-self-end", { "justify-self": "end" }],
			["justify-self-center", { "justify-self": "center" }],
			["justify-self-stretch", { "justify-self": "stretch" }],
			...y("justify-self"),
		],
		Dt = [
			[/^order-(.+)$/, ([, e]) => ({ order: l.bracket.cssvar.number(e) })],
			["order-first", { order: "-9999" }],
			["order-last", { order: "9999" }],
			["order-none", { order: "0" }],
		],
		qe = [
			["content-center", { "align-content": "center" }],
			["content-start", { "align-content": "flex-start" }],
			["content-end", { "align-content": "flex-end" }],
			["content-between", { "align-content": "space-between" }],
			["content-around", { "align-content": "space-around" }],
			["content-evenly", { "align-content": "space-evenly" }],
			...y("content", "align-content"),
			["items-start", { "align-items": "flex-start" }],
			["items-end", { "align-items": "flex-end" }],
			["items-center", { "align-items": "center" }],
			["items-baseline", { "align-items": "baseline" }],
			["items-stretch", { "align-items": "stretch" }],
			...y("items", "align-items"),
			["self-auto", { "align-self": "auto" }],
			["self-start", { "align-self": "flex-start" }],
			["self-end", { "align-self": "flex-end" }],
			["self-center", { "align-self": "center" }],
			["self-stretch", { "align-self": "stretch" }],
			["self-baseline", { "align-self": "baseline" }],
			...y("self", "align-self"),
		],
		Ye = [
			["place-content-center", { "place-content": "center" }],
			["place-content-start", { "place-content": "start" }],
			["place-content-end", { "place-content": "end" }],
			["place-content-between", { "place-content": "space-between" }],
			["place-content-around", { "place-content": "space-around" }],
			["place-content-evenly", { "place-content": "space-evenly" }],
			["place-content-stretch", { "place-content": "stretch" }],
			...y("place-content"),
			["place-items-start", { "place-items": "start" }],
			["place-items-end", { "place-items": "end" }],
			["place-items-center", { "place-items": "center" }],
			["place-items-stretch", { "place-items": "stretch" }],
			...y("place-items"),
			["place-self-auto", { "place-self": "auto" }],
			["place-self-start", { "place-self": "start" }],
			["place-self-end", { "place-self": "end" }],
			["place-self-center", { "place-self": "center" }],
			["place-self-stretch", { "place-self": "stretch" }],
			...y("place-self"),
		],
		It = [...He, ...qe, ...Ye].flatMap(([e, t]) => [
			[`flex-${e}`, t],
			[`grid-${e}`, t],
		]);
	function cn(e, { theme: t }) {
		return t.spacing?.[e] ?? l.bracket.cssvar.global.auto.fraction.rem(e);
	}
	function Ge([, e, t], r) {
		let n = cn(t, r);
		if (n != null && e in Zr) return Zr[e].map((o) => [o.slice(1), n]);
	}
	var Kt = [
			[
				/^(?:position-|pos-)?inset-(.+)$/,
				([, e], t) => ({ inset: cn(e, t) }),
				{
					autocomplete: [
						"(position|pos)-inset-<directions>-$spacing",
						"(position|pos)-inset-(block|inline)-$spacing",
						"(position|pos)-inset-(bs|be|is|ie)-$spacing",
						"(position|pos)-(top|left|right|bottom)-$spacing",
					],
				},
			],
			[/^(?:position-|pos-)?(start|end)-(.+)$/, Ge],
			[/^(?:position-|pos-)?inset-([xy])-(.+)$/, Ge],
			[/^(?:position-|pos-)?inset-([rltbse])-(.+)$/, Ge],
			[/^(?:position-|pos-)?inset-(block|inline)-(.+)$/, Ge],
			[/^(?:position-|pos-)?inset-([bi][se])-(.+)$/, Ge],
			[
				/^(?:position-|pos-)?(top|left|right|bottom)-(.+)$/,
				([, e, t], r) => ({ [e]: cn(t, r) }),
			],
		],
		Gt = [
			["float-left", { float: "left" }],
			["float-right", { float: "right" }],
			["float-start", { float: "inline-start" }],
			["float-end", { float: "inline-end" }],
			["float-none", { float: "none" }],
			...y("float"),
			["clear-left", { clear: "left" }],
			["clear-right", { clear: "right" }],
			["clear-both", { clear: "both" }],
			["clear-start", { clear: "inline-start" }],
			["clear-end", { clear: "inline-end" }],
			["clear-none", { clear: "none" }],
			...y("clear"),
		],
		Ht = [
			[
				/^(?:position-|pos-)?z([\d.]+)$/,
				([, e]) => ({ "z-index": l.number(e) }),
			],
			[
				/^(?:position-|pos-)?z-(.+)$/,
				([, e], { theme: t }) => ({
					"z-index": t.zIndex?.[e] ?? l.bracket.cssvar.global.auto.number(e),
				}),
				{ autocomplete: "z-<num>" },
			],
		],
		qt = [
			["box-border", { "box-sizing": "border-box" }],
			["box-content", { "box-sizing": "content-box" }],
			...y("box", "box-sizing"),
		];
	var Yt = [
		[
			/^(where|\?)$/,
			(e, { constructCSS: t, generator: r }) => {
				if (r.userConfig.envMode === "dev")
					return `@keyframes __un_qm{0%{box-shadow:inset 4px 4px #ff1e90, inset -4px -4px #ff1e90}100%{box-shadow:inset 8px 8px #3399ff, inset -8px -8px #3399ff}} ${t(
						{ animation: "__un_qm 0.5s ease-in-out alternate infinite" }
					)}`;
			},
		],
	];
	var pl = [
			"auto",
			"default",
			"none",
			"context-menu",
			"help",
			"pointer",
			"progress",
			"wait",
			"cell",
			"crosshair",
			"text",
			"vertical-text",
			"alias",
			"copy",
			"move",
			"no-drop",
			"not-allowed",
			"grab",
			"grabbing",
			"all-scroll",
			"col-resize",
			"row-resize",
			"n-resize",
			"e-resize",
			"s-resize",
			"w-resize",
			"ne-resize",
			"nw-resize",
			"se-resize",
			"sw-resize",
			"ew-resize",
			"ns-resize",
			"nesw-resize",
			"nwse-resize",
			"zoom-in",
			"zoom-out",
		],
		dl = [
			"none",
			"strict",
			"content",
			"size",
			"inline-size",
			"layout",
			"style",
			"paint",
		],
		E = " ",
		Xt = [
			["inline", { display: "inline" }],
			["block", { display: "block" }],
			["inline-block", { display: "inline-block" }],
			["contents", { display: "contents" }],
			["flow-root", { display: "flow-root" }],
			["list-item", { display: "list-item" }],
			["hidden", { display: "none" }],
			[/^display-(.+)$/, ([, e]) => ({ display: l.bracket.cssvar.global(e) })],
		],
		Zt = [
			["visible", { visibility: "visible" }],
			["invisible", { visibility: "hidden" }],
			["backface-visible", { "backface-visibility": "visible" }],
			["backface-hidden", { "backface-visibility": "hidden" }],
			...y("backface", "backface-visibility"),
		],
		Jt = [
			[/^cursor-(.+)$/, ([, e]) => ({ cursor: l.bracket.cssvar.global(e) })],
			...pl.map((e) => [`cursor-${e}`, { cursor: e }]),
		],
		Qt = [
			[
				/^contain-(.*)$/,
				([, e]) =>
					l.bracket(e) != null
						? {
								contain: l
									.bracket(e)
									.split(" ")
									.map((t) => l.cssvar.fraction(t) ?? t)
									.join(" "),
						  }
						: dl.includes(e)
						? { contain: e }
						: void 0,
			],
		],
		er = [
			["pointer-events-auto", { "pointer-events": "auto" }],
			["pointer-events-none", { "pointer-events": "none" }],
			...y("pointer-events"),
		],
		tr = [
			["resize-x", { resize: "horizontal" }],
			["resize-y", { resize: "vertical" }],
			["resize", { resize: "both" }],
			["resize-none", { resize: "none" }],
			...y("resize"),
		],
		rr = [
			["select-auto", { "-webkit-user-select": "auto", "user-select": "auto" }],
			["select-all", { "-webkit-user-select": "all", "user-select": "all" }],
			["select-text", { "-webkit-user-select": "text", "user-select": "text" }],
			["select-none", { "-webkit-user-select": "none", "user-select": "none" }],
			...y("select", "user-select"),
		],
		nr = [
			[
				/^(?:whitespace-|ws-)([-\w]+)$/,
				([, e]) =>
					[
						"normal",
						"nowrap",
						"pre",
						"pre-line",
						"pre-wrap",
						"break-spaces",
						...k,
					].includes(e)
						? { "white-space": e }
						: void 0,
				{
					autocomplete:
						"(whitespace|ws)-(normal|nowrap|pre|pre-line|pre-wrap|break-spaces)",
				},
			],
		],
		or = [
			[
				/^intrinsic-size-(.+)$/,
				([, e]) => ({
					"contain-intrinsic-size": l.bracket.cssvar.global.fraction.rem(e),
				}),
				{ autocomplete: "intrinsic-size-<num>" },
			],
			["content-visibility-visible", { "content-visibility": "visible" }],
			["content-visibility-hidden", { "content-visibility": "hidden" }],
			["content-visibility-auto", { "content-visibility": "auto" }],
			...y("content-visibility"),
		],
		ir = [
			[/^content-(.+)$/, ([, e]) => ({ content: l.bracket.cssvar(e) })],
			["content-empty", { content: '""' }],
			["content-none", { content: "none" }],
		],
		sr = [
			["break-normal", { "overflow-wrap": "normal", "word-break": "normal" }],
			["break-words", { "overflow-wrap": "break-word" }],
			["break-all", { "word-break": "break-all" }],
			["break-keep", { "word-break": "keep-all" }],
			["break-anywhere", { "overflow-wrap": "anywhere" }],
		],
		ar = [
			["text-wrap", { "text-wrap": "wrap" }],
			["text-nowrap", { "text-wrap": "nowrap" }],
			["text-balance", { "text-wrap": "balance" }],
			["text-pretty", { "text-wrap": "pretty" }],
		],
		cr = [
			[
				"truncate",
				{
					overflow: "hidden",
					"text-overflow": "ellipsis",
					"white-space": "nowrap",
				},
			],
			[
				"text-truncate",
				{
					overflow: "hidden",
					"text-overflow": "ellipsis",
					"white-space": "nowrap",
				},
			],
			["text-ellipsis", { "text-overflow": "ellipsis" }],
			["text-clip", { "text-overflow": "clip" }],
		],
		lr = [
			["case-upper", { "text-transform": "uppercase" }],
			["case-lower", { "text-transform": "lowercase" }],
			["case-capital", { "text-transform": "capitalize" }],
			["case-normal", { "text-transform": "none" }],
			...y("case", "text-transform"),
		],
		ur = [
			["italic", { "font-style": "italic" }],
			["not-italic", { "font-style": "normal" }],
			["font-italic", { "font-style": "italic" }],
			["font-not-italic", { "font-style": "normal" }],
			["oblique", { "font-style": "oblique" }],
			["not-oblique", { "font-style": "normal" }],
			["font-oblique", { "font-style": "oblique" }],
			["font-not-oblique", { "font-style": "normal" }],
		],
		fr = [
			[
				"antialiased",
				{
					"-webkit-font-smoothing": "antialiased",
					"-moz-osx-font-smoothing": "grayscale",
				},
			],
			[
				"subpixel-antialiased",
				{ "-webkit-font-smoothing": "auto", "-moz-osx-font-smoothing": "auto" },
			],
		];
	var Xe = {
			"--un-ring-inset": E,
			"--un-ring-offset-width": "0px",
			"--un-ring-offset-color": "#fff",
			"--un-ring-width": "0px",
			"--un-ring-color": "rgb(147 197 253 / 0.5)",
			"--un-shadow": "0 0 rgb(0 0 0 / 0)",
		},
		ml = Object.keys(Xe),
		pr = [
			[
				/^ring(?:-(.+))?$/,
				([, e], { theme: t }) => {
					let r = t.ringWidth?.[e || "DEFAULT"] ?? l.px(e || "1");
					if (r)
						return {
							"--un-ring-width": r,
							"--un-ring-offset-shadow":
								"var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)",
							"--un-ring-shadow":
								"var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color)",
							"box-shadow":
								"var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)",
						};
				},
				{ custom: { preflightKeys: ml }, autocomplete: "ring-$ringWidth" },
			],
			[
				/^ring-(?:width-|size-)(.+)$/,
				Fo,
				{ autocomplete: "ring-(width|size)-$lineWidth" },
			],
			["ring-offset", { "--un-ring-offset-width": "1px" }],
			[
				/^ring-offset-(?:width-|size-)?(.+)$/,
				([, e], { theme: t }) => ({
					"--un-ring-offset-width": t.lineWidth?.[e] ?? l.bracket.cssvar.px(e),
				}),
				{ autocomplete: "ring-offset-(width|size)-$lineWidth" },
			],
			[/^ring-(.+)$/, gl, { autocomplete: "ring-$colors" }],
			[
				/^ring-op(?:acity)?-?(.+)$/,
				([, e]) => ({ "--un-ring-opacity": l.bracket.percent.cssvar(e) }),
				{ autocomplete: "ring-(op|opacity)-<percent>" },
			],
			[
				/^ring-offset-(.+)$/,
				O("--un-ring-offset-color", "ring-offset", "borderColor"),
				{ autocomplete: "ring-offset-$colors" },
			],
			[
				/^ring-offset-op(?:acity)?-?(.+)$/,
				([, e]) => ({
					"--un-ring-offset-opacity": l.bracket.percent.cssvar(e),
				}),
				{ autocomplete: "ring-offset-(op|opacity)-<percent>" },
			],
			["ring-inset", { "--un-ring-inset": "inset" }],
		];
	function Fo([, e], { theme: t }) {
		return { "--un-ring-width": t.ringWidth?.[e] ?? l.bracket.cssvar.px(e) };
	}
	function gl(e, t) {
		return Z(l.bracket(e[1]))
			? Fo(e, t)
			: O("--un-ring-color", "ring", "borderColor")(e, t);
	}
	var Ze = {
			"--un-ring-offset-shadow": "0 0 rgb(0 0 0 / 0)",
			"--un-ring-shadow": "0 0 rgb(0 0 0 / 0)",
			"--un-shadow-inset": E,
			"--un-shadow": "0 0 rgb(0 0 0 / 0)",
		},
		hl = Object.keys(Ze),
		dr = [
			[
				/^shadow(?:-(.+))?$/,
				(e, t) => {
					let [, r] = e,
						{ theme: n } = t,
						o = n.boxShadow?.[r || "DEFAULT"],
						i = r ? l.bracket.cssvar(r) : void 0;
					return (o != null || i != null) && !ze(i, n, "shadowColor")
						? {
								"--un-shadow": je(o || i, "--un-shadow-color").join(","),
								"box-shadow":
									"var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)",
						  }
						: O("--un-shadow-color", "shadow", "shadowColor")(e, t);
				},
				{
					custom: { preflightKeys: hl },
					autocomplete: ["shadow-$colors", "shadow-$boxShadow"],
				},
			],
			[
				/^shadow-op(?:acity)?-?(.+)$/,
				([, e]) => ({ "--un-shadow-opacity": l.bracket.percent.cssvar(e) }),
				{ autocomplete: "shadow-(op|opacity)-<percent>" },
			],
			["shadow-inset", { "--un-shadow-inset": "inset" }],
		];
	var bl = {
		h: "height",
		w: "width",
		inline: "inline-size",
		block: "block-size",
	};
	function we(e, t) {
		return `${e || ""}${bl[t]}`;
	}
	function mr(e, t, r, n) {
		let o = we(e, t).replace(/-(\w)/g, (s, a) => a.toUpperCase()),
			i = r[o]?.[n];
		if (i != null) return i;
		switch (n) {
			case "fit":
			case "max":
			case "min":
				return `${n}-content`;
		}
		return l.bracket.cssvar.global.auto.fraction.rem(n);
	}
	var gr = [
		[
			/^size-(min-|max-)?(.+)$/,
			([, e, t], { theme: r }) => ({
				[we(e, "w")]: mr(e, "w", r, t),
				[we(e, "h")]: mr(e, "h", r, t),
			}),
		],
		[
			/^(?:size-)?(min-|max-)?([wh])-?(.+)$/,
			([, e, t, r], { theme: n }) => ({ [we(e, t)]: mr(e, t, n, r) }),
		],
		[
			/^(?:size-)?(min-|max-)?(block|inline)-(.+)$/,
			([, e, t, r], { theme: n }) => ({ [we(e, t)]: mr(e, t, n, r) }),
			{
				autocomplete: [
					"(w|h)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
					"(block|inline)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
					"(max|min)-(w|h|block|inline)",
					"(max|min)-(w|h|block|inline)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
					"(w|h)-full",
					"(max|min)-(w|h)-full",
				],
			},
		],
		[
			/^(?:size-)?(min-|max-)?(h)-screen-(.+)$/,
			([, e, t, r], n) => ({ [we(e, t)]: Lo(n, r, "verticalBreakpoints") }),
		],
		[
			/^(?:size-)?(min-|max-)?(w)-screen-(.+)$/,
			([, e, t, r], n) => ({ [we(e, t)]: Lo(n, r) }),
			{
				autocomplete: [
					"(w|h)-screen",
					"(min|max)-(w|h)-screen",
					"h-screen-$verticalBreakpoints",
					"(min|max)-h-screen-$verticalBreakpoints",
					"w-screen-$breakpoints",
					"(min|max)-w-screen-$breakpoints",
				],
			},
		],
	];
	function Lo(e, t, r = "breakpoints") {
		let n = ye(e, r);
		if (n) return n.find((o) => o.point === t)?.size;
	}
	function xl(e) {
		if (/^\d+\/\d+$/.test(e)) return e;
		switch (e) {
			case "square":
				return "1/1";
			case "video":
				return "16/9";
		}
		return l.bracket.cssvar.global.auto.number(e);
	}
	var hr = [
		[
			/^(?:size-)?aspect-(?:ratio-)?(.+)$/,
			([, e]) => ({ "aspect-ratio": xl(e) }),
			{
				autocomplete: [
					"aspect-(square|video|ratio)",
					"aspect-ratio-(square|video)",
				],
			},
		],
	];
	var br = [
			[
				/^pa?()-?(.+)$/,
				F("padding"),
				{ autocomplete: ["(m|p)<num>", "(m|p)-<num>"] },
			],
			[/^p-?xy()()$/, F("padding"), { autocomplete: "(m|p)-(xy)" }],
			[/^p-?([xy])(?:-?(.+))?$/, F("padding")],
			[
				/^p-?([rltbse])(?:-?(.+))?$/,
				F("padding"),
				{ autocomplete: "(m|p)<directions>-<num>" },
			],
			[
				/^p-(block|inline)(?:-(.+))?$/,
				F("padding"),
				{ autocomplete: "(m|p)-(block|inline)-<num>" },
			],
			[
				/^p-?([bi][se])(?:-?(.+))?$/,
				F("padding"),
				{ autocomplete: "(m|p)-(bs|be|is|ie)-<num>" },
			],
		],
		xr = [
			[/^ma?()-?(.+)$/, F("margin")],
			[/^m-?xy()()$/, F("margin")],
			[/^m-?([xy])(?:-?(.+))?$/, F("margin")],
			[/^m-?([rltbse])(?:-?(.+))?$/, F("margin")],
			[/^m-(block|inline)(?:-(.+))?$/, F("margin")],
			[/^m-?([bi][se])(?:-?(.+))?$/, F("margin")],
		];
	var yr = [
		[
			/^fill-(.+)$/,
			O("fill", "fill", "backgroundColor"),
			{ autocomplete: "fill-$colors" },
		],
		[
			/^fill-op(?:acity)?-?(.+)$/,
			([, e]) => ({ "--un-fill-opacity": l.bracket.percent.cssvar(e) }),
			{ autocomplete: "fill-(op|opacity)-<percent>" },
		],
		["fill-none", { fill: "none" }],
		[
			/^stroke-(?:width-|size-)?(.+)$/,
			Uo,
			{ autocomplete: ["stroke-width-$lineWidth", "stroke-size-$lineWidth"] },
		],
		[
			/^stroke-dash-(.+)$/,
			([, e]) => ({ "stroke-dasharray": l.bracket.cssvar.number(e) }),
			{ autocomplete: "stroke-dash-<num>" },
		],
		[
			/^stroke-offset-(.+)$/,
			([, e], { theme: t }) => ({
				"stroke-dashoffset":
					t.lineWidth?.[e] ?? l.bracket.cssvar.px.numberWithUnit(e),
			}),
			{ autocomplete: "stroke-offset-$lineWidth" },
		],
		[/^stroke-(.+)$/, yl, { autocomplete: "stroke-$colors" }],
		[
			/^stroke-op(?:acity)?-?(.+)$/,
			([, e]) => ({ "--un-stroke-opacity": l.bracket.percent.cssvar(e) }),
			{ autocomplete: "stroke-(op|opacity)-<percent>" },
		],
		["stroke-cap-square", { "stroke-linecap": "square" }],
		["stroke-cap-round", { "stroke-linecap": "round" }],
		["stroke-cap-auto", { "stroke-linecap": "butt" }],
		["stroke-join-arcs", { "stroke-linejoin": "arcs" }],
		["stroke-join-bevel", { "stroke-linejoin": "bevel" }],
		["stroke-join-clip", { "stroke-linejoin": "miter-clip" }],
		["stroke-join-round", { "stroke-linejoin": "round" }],
		["stroke-join-auto", { "stroke-linejoin": "miter" }],
		["stroke-none", { stroke: "none" }],
	];
	function Uo([, e], { theme: t }) {
		return {
			"stroke-width":
				t.lineWidth?.[e] ?? l.bracket.cssvar.fraction.px.number(e),
		};
	}
	function yl(e, t) {
		return Z(l.bracket(e[1]))
			? Uo(e, t)
			: O("stroke", "stroke", "borderColor")(e, t);
	}
	var vr = ["translate", "rotate", "scale"],
		vl = [
			"translateX(var(--un-translate-x))",
			"translateY(var(--un-translate-y))",
			"rotate(var(--un-rotate))",
			"rotateZ(var(--un-rotate-z))",
			"skewX(var(--un-skew-x))",
			"skewY(var(--un-skew-y))",
			"scaleX(var(--un-scale-x))",
			"scaleY(var(--un-scale-y))",
		].join(" "),
		Oe = [
			"translateX(var(--un-translate-x))",
			"translateY(var(--un-translate-y))",
			"translateZ(var(--un-translate-z))",
			"rotate(var(--un-rotate))",
			"rotateX(var(--un-rotate-x))",
			"rotateY(var(--un-rotate-y))",
			"rotateZ(var(--un-rotate-z))",
			"skewX(var(--un-skew-x))",
			"skewY(var(--un-skew-y))",
			"scaleX(var(--un-scale-x))",
			"scaleY(var(--un-scale-y))",
			"scaleZ(var(--un-scale-z))",
		].join(" "),
		wl = [
			"translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z))",
			"rotate(var(--un-rotate))",
			"rotateX(var(--un-rotate-x))",
			"rotateY(var(--un-rotate-y))",
			"rotateZ(var(--un-rotate-z))",
			"skewX(var(--un-skew-x))",
			"skewY(var(--un-skew-y))",
			"scaleX(var(--un-scale-x))",
			"scaleY(var(--un-scale-y))",
			"scaleZ(var(--un-scale-z))",
		].join(" "),
		Je = {
			"--un-rotate": 0,
			"--un-rotate-x": 0,
			"--un-rotate-y": 0,
			"--un-rotate-z": 0,
			"--un-scale-x": 1,
			"--un-scale-y": 1,
			"--un-scale-z": 1,
			"--un-skew-x": 0,
			"--un-skew-y": 0,
			"--un-translate-x": 0,
			"--un-translate-y": 0,
			"--un-translate-z": 0,
		},
		oe = Object.keys(Je),
		wr = [
			[
				/^(?:transform-)?origin-(.+)$/,
				([, e]) => ({ "transform-origin": B[e] ?? l.bracket.cssvar(e) }),
				{
					autocomplete: [
						`transform-origin-(${Object.keys(B).join("|")})`,
						`origin-(${Object.keys(B).join("|")})`,
					],
				},
			],
			[
				/^(?:transform-)?perspect(?:ive)?-(.+)$/,
				([, e]) => {
					let t = l.bracket.cssvar.px.numberWithUnit(e);
					if (t != null) return { "-webkit-perspective": t, perspective: t };
				},
			],
			[
				/^(?:transform-)?perspect(?:ive)?-origin-(.+)$/,
				([, e]) => {
					let t = l.bracket.cssvar(e) ?? (e.length >= 3 ? B[e] : void 0);
					if (t != null)
						return { "-webkit-perspective-origin": t, "perspective-origin": t };
				},
			],
			[
				/^(?:transform-)?translate-()(.+)$/,
				Wo,
				{ custom: { preflightKeys: oe } },
			],
			[
				/^(?:transform-)?translate-([xyz])-(.+)$/,
				Wo,
				{ custom: { preflightKeys: oe } },
			],
			[/^(?:transform-)?rotate-()(.+)$/, No, { custom: { preflightKeys: oe } }],
			[
				/^(?:transform-)?rotate-([xyz])-(.+)$/,
				No,
				{ custom: { preflightKeys: oe } },
			],
			[/^(?:transform-)?skew-()(.+)$/, Do, { custom: { preflightKeys: oe } }],
			[
				/^(?:transform-)?skew-([xy])-(.+)$/,
				Do,
				{
					custom: { preflightKeys: oe },
					autocomplete: [
						"transform-skew-(x|y)-<percent>",
						"skew-(x|y)-<percent>",
					],
				},
			],
			[/^(?:transform-)?scale-()(.+)$/, Bo, { custom: { preflightKeys: oe } }],
			[
				/^(?:transform-)?scale-([xyz])-(.+)$/,
				Bo,
				{
					custom: { preflightKeys: oe },
					autocomplete: [
						`transform-(${vr.join("|")})-<percent>`,
						`transform-(${vr.join("|")})-(x|y|z)-<percent>`,
						`(${vr.join("|")})-<percent>`,
						`(${vr.join("|")})-(x|y|z)-<percent>`,
					],
				},
			],
			[
				/^(?:transform-)?preserve-3d$/,
				() => ({ "transform-style": "preserve-3d" }),
			],
			[/^(?:transform-)?preserve-flat$/, () => ({ "transform-style": "flat" })],
			["transform", { transform: Oe }, { custom: { preflightKeys: oe } }],
			[
				"transform-cpu",
				{ transform: vl },
				{
					custom: {
						preflightKeys: [
							"--un-translate-x",
							"--un-translate-y",
							"--un-rotate",
							"--un-rotate-z",
							"--un-skew-x",
							"--un-skew-y",
							"--un-scale-x",
							"--un-scale-y",
						],
					},
				},
			],
			["transform-gpu", { transform: wl }, { custom: { preflightKeys: oe } }],
			["transform-none", { transform: "none" }],
			...y("transform"),
		];
	function Wo([, e, t], { theme: r }) {
		let n = r.spacing?.[t] ?? l.bracket.cssvar.fraction.rem(t);
		if (n != null) return [...Et(e, n, "translate"), ["transform", Oe]];
	}
	function Bo([, e, t]) {
		let r = l.bracket.cssvar.fraction.percent(t);
		if (r != null) return [...Et(e, r, "scale"), ["transform", Oe]];
	}
	function No([, e = "", t]) {
		let r = l.bracket.cssvar.degree(t);
		if (r != null)
			return e
				? { "--un-rotate": 0, [`--un-rotate-${e}`]: r, transform: Oe }
				: {
						"--un-rotate-x": 0,
						"--un-rotate-y": 0,
						"--un-rotate-z": 0,
						"--un-rotate": r,
						transform: Oe,
				  };
	}
	function Do([, e, t]) {
		let r = l.bracket.cssvar.degree(t);
		if (r != null) return [...Et(e, r, "skew"), ["transform", Oe]];
	}
	function Io(e, t) {
		let r;
		if (l.cssvar(e) != null) r = l.cssvar(e);
		else {
			e.startsWith("[") && e.endsWith("]") && (e = e.slice(1, -1));
			let n = e
				.split(",")
				.map((o) => t.transitionProperty?.[o] ?? l.properties(o));
			n.every(Boolean) && (r = n.join(","));
		}
		return r;
	}
	var kr = [
		[
			/^transition(?:-(\D+?))?(?:-(\d+))?$/,
			([, e, t], { theme: r }) => {
				if (!e && !t)
					return {
						"transition-property": r.transitionProperty?.DEFAULT,
						"transition-timing-function": r.easing?.DEFAULT,
						"transition-duration": r.duration?.DEFAULT ?? l.time("150"),
					};
				if (e != null) {
					let n = Io(e, r),
						o = r.duration?.[t || "DEFAULT"] ?? l.time(t || "150");
					if (n)
						return {
							"transition-property": n,
							"transition-timing-function": r.easing?.DEFAULT,
							"transition-duration": o,
						};
				} else if (t != null)
					return {
						"transition-property": r.transitionProperty?.DEFAULT,
						"transition-timing-function": r.easing?.DEFAULT,
						"transition-duration": r.duration?.[t] ?? l.time(t),
					};
			},
			{ autocomplete: "transition-$transitionProperty-$duration" },
		],
		[
			/^(?:transition-)?duration-(.+)$/,
			([, e], { theme: t }) => ({
				"transition-duration":
					t.duration?.[e || "DEFAULT"] ?? l.bracket.cssvar.time(e),
			}),
			{ autocomplete: ["transition-duration-$duration", "duration-$duration"] },
		],
		[
			/^(?:transition-)?delay-(.+)$/,
			([, e], { theme: t }) => ({
				"transition-delay":
					t.duration?.[e || "DEFAULT"] ?? l.bracket.cssvar.time(e),
			}),
			{ autocomplete: ["transition-delay-$duration", "delay-$duration"] },
		],
		[
			/^(?:transition-)?ease(?:-(.+))?$/,
			([, e], { theme: t }) => ({
				"transition-timing-function":
					t.easing?.[e || "DEFAULT"] ?? l.bracket.cssvar(e),
			}),
			{
				autocomplete: [
					"transition-ease-(linear|in|out|in-out|DEFAULT)",
					"ease-(linear|in|out|in-out|DEFAULT)",
				],
			},
		],
		[
			/^(?:transition-)?property-(.+)$/,
			([, e], { theme: t }) => {
				let r = l.global(e) || Io(e, t);
				if (r) return { "transition-property": r };
			},
			{
				autocomplete: [
					`transition-property-(${[...k].join("|")})`,
					"transition-property-$transitionProperty",
					"property-$transitionProperty",
				],
			},
		],
		["transition-none", { transition: "none" }],
		...y("transition"),
		["transition-discrete", { "transition-behavior": "allow-discrete" }],
		["transition-normal", { "transition-behavior": "normal" }],
	];
	var $r = [
			[/^text-(.+)$/, $l, { autocomplete: "text-$fontSize" }],
			[
				/^(?:text|font)-size-(.+)$/,
				Ko,
				{ autocomplete: "text-size-$fontSize" },
			],
			[/^text-(?:color-)?(.+)$/, kl, { autocomplete: "text-$colors" }],
			[
				/^(?:color|c)-(.+)$/,
				O("color", "text", "textColor"),
				{ autocomplete: "(color|c)-$colors" },
			],
			[
				/^(?:text|color|c)-(.+)$/,
				([, e]) => (k.includes(e) ? { color: e } : void 0),
				{ autocomplete: `(text|color|c)-(${k.join("|")})` },
			],
			[
				/^(?:text|color|c)-op(?:acity)?-?(.+)$/,
				([, e]) => ({ "--un-text-opacity": l.bracket.percent.cssvar(e) }),
				{ autocomplete: "(text|color|c)-(op|opacity)-<percent>" },
			],
			[
				/^(?:font|fw)-?([^-]+)$/,
				([, e], { theme: t }) => ({
					"font-weight": t.fontWeight?.[e] || l.bracket.global.number(e),
				}),
				{
					autocomplete: [
						"(font|fw)-(100|200|300|400|500|600|700|800|900)",
						"(font|fw)-$fontWeight",
					],
				},
			],
			[
				/^(?:font-)?(?:leading|lh|line-height)-(.+)$/,
				([, e], { theme: t }) => ({ "line-height": ln(e, t, "lineHeight") }),
				{ autocomplete: "(leading|lh|line-height)-$lineHeight" },
			],
			["font-synthesis-weight", { "font-synthesis": "weight" }],
			["font-synthesis-style", { "font-synthesis": "style" }],
			["font-synthesis-small-caps", { "font-synthesis": "small-caps" }],
			["font-synthesis-none", { "font-synthesis": "none" }],
			[
				/^font-synthesis-(.+)$/,
				([, e]) => ({ "font-synthesis": l.bracket.cssvar.global(e) }),
			],
			[
				/^(?:font-)?tracking-(.+)$/,
				([, e], { theme: t }) => ({
					"letter-spacing":
						t.letterSpacing?.[e] || l.bracket.cssvar.global.rem(e),
				}),
				{ autocomplete: "tracking-$letterSpacing" },
			],
			[
				/^(?:font-)?word-spacing-(.+)$/,
				([, e], { theme: t }) => ({
					"word-spacing": t.wordSpacing?.[e] || l.bracket.cssvar.global.rem(e),
				}),
				{ autocomplete: "word-spacing-$wordSpacing" },
			],
			["font-stretch-normal", { "font-stretch": "normal" }],
			["font-stretch-ultra-condensed", { "font-stretch": "ultra-condensed" }],
			["font-stretch-extra-condensed", { "font-stretch": "extra-condensed" }],
			["font-stretch-condensed", { "font-stretch": "condensed" }],
			["font-stretch-semi-condensed", { "font-stretch": "semi-condensed" }],
			["font-stretch-semi-expanded", { "font-stretch": "semi-expanded" }],
			["font-stretch-expanded", { "font-stretch": "expanded" }],
			["font-stretch-extra-expanded", { "font-stretch": "extra-expanded" }],
			["font-stretch-ultra-expanded", { "font-stretch": "ultra-expanded" }],
			[
				/^font-stretch-(.+)$/,
				([, e]) => ({ "font-stretch": l.bracket.cssvar.fraction.global(e) }),
				{ autocomplete: "font-stretch-<percentage>" },
			],
			[
				/^font-(.+)$/,
				([, e], { theme: t }) => ({
					"font-family": t.fontFamily?.[e] || l.bracket.cssvar.global(e),
				}),
				{ autocomplete: "font-$fontFamily" },
			],
		],
		Sr = [
			[
				/^tab(?:-(.+))?$/,
				([, e]) => {
					let t = l.bracket.cssvar.global.number(e || "4");
					if (t != null)
						return { "-moz-tab-size": t, "-o-tab-size": t, "tab-size": t };
				},
			],
		],
		Cr = [
			[
				/^indent(?:-(.+))?$/,
				([, e], { theme: t }) => ({
					"text-indent":
						t.textIndent?.[e || "DEFAULT"] ||
						l.bracket.cssvar.global.fraction.rem(e),
				}),
				{ autocomplete: "indent-$textIndent" },
			],
		],
		Rr = [
			[
				/^text-stroke(?:-(.+))?$/,
				([, e], { theme: t }) => ({
					"-webkit-text-stroke-width":
						t.textStrokeWidth?.[e || "DEFAULT"] || l.bracket.cssvar.px(e),
				}),
				{ autocomplete: "text-stroke-$textStrokeWidth" },
			],
			[
				/^text-stroke-(.+)$/,
				O("-webkit-text-stroke-color", "text-stroke", "borderColor"),
				{ autocomplete: "text-stroke-$colors" },
			],
			[
				/^text-stroke-op(?:acity)?-?(.+)$/,
				([, e]) => ({
					"--un-text-stroke-opacity": l.bracket.percent.cssvar(e),
				}),
				{ autocomplete: "text-stroke-(op|opacity)-<percent>" },
			],
		],
		Er = [
			[
				/^text-shadow(?:-(.+))?$/,
				([, e], { theme: t }) => {
					let r = t.textShadow?.[e || "DEFAULT"];
					return r != null
						? {
								"--un-text-shadow": je(r, "--un-text-shadow-color").join(","),
								"text-shadow": "var(--un-text-shadow)",
						  }
						: { "text-shadow": l.bracket.cssvar.global(e) };
				},
				{ autocomplete: "text-shadow-$textShadow" },
			],
			[
				/^text-shadow-color-(.+)$/,
				O("--un-text-shadow-color", "text-shadow", "shadowColor"),
				{ autocomplete: "text-shadow-color-$colors" },
			],
			[
				/^text-shadow-color-op(?:acity)?-?(.+)$/,
				([, e]) => ({
					"--un-text-shadow-opacity": l.bracket.percent.cssvar(e),
				}),
				{ autocomplete: "text-shadow-color-(op|opacity)-<percent>" },
			],
		];
	function ln(e, t, r) {
		return t[r]?.[e] || l.bracket.cssvar.global.rem(e);
	}
	function Ko([, e], { theme: t }) {
		let n = V(t.fontSize?.[e])?.[0] ?? l.bracket.cssvar.global.rem(e);
		if (n != null) return { "font-size": n };
	}
	function kl(e, t) {
		return Z(l.bracket(e[1]))
			? Ko(e, t)
			: O("color", "text", "textColor")(e, t);
	}
	function $l([, e = "base"], { theme: t }) {
		let r = on(e, "length");
		if (!r) return;
		let [n, o] = r,
			i = V(t.fontSize?.[n]),
			s = o ? ln(o, t, "lineHeight") : void 0;
		if (i?.[0]) {
			let [c, u, f] = i;
			return typeof u == "object"
				? { "font-size": c, ...u }
				: {
						"font-size": c,
						"line-height": s ?? u ?? "1",
						"letter-spacing": f ? ln(f, t, "letterSpacing") : void 0,
				  };
		}
		let a = l.bracketOfLength.rem(n);
		return s && a
			? { "font-size": a, "line-height": s }
			: { "font-size": l.bracketOfLength.rem(e) };
	}
	var Sl = {
			backface: "backface-visibility",
			break: "word-break",
			case: "text-transform",
			content: "align-content",
			fw: "font-weight",
			items: "align-items",
			justify: "justify-content",
			select: "user-select",
			self: "align-self",
			vertical: "vertical-align",
			visible: "visibility",
			whitespace: "white-space",
			ws: "white-space",
		},
		Tr = [
			[
				/^(.+?)-(\$.+)$/,
				([, e, t]) => {
					let r = Sl[e];
					if (r) return { [r]: l.cssvar(t) };
				},
			],
		],
		jr = [
			[
				/^\[(.*)\]$/,
				([e, t]) => {
					if (!t.includes(":")) return;
					let [r, ...n] = t.split(":"),
						o = n.join(":");
					if (!Rl(t) && /^[a-z-]+$/.test(r) && Cl(o)) {
						let i = l.bracket(`[${o}]`);
						if (i) return { [r]: i };
					}
				},
			],
		];
	function Cl(e) {
		let t = 0;
		function r(n) {
			for (; t < e.length; ) if (((t += 1), e[t] === n)) return !0;
			return !1;
		}
		for (t = 0; t < e.length; t++) {
			let n = e[t];
			if ("\"`'".includes(n)) {
				if (!r(n)) return !1;
			} else if (n === "(") {
				if (!r(")")) return !1;
			} else if ("[]{}:".includes(n)) return !1;
		}
		return !0;
	}
	function Rl(e) {
		if (!e.includes("://")) return !1;
		try {
			return new URL(e).host !== "";
		} catch {
			return !1;
		}
	}
	var Go = [
		Tr,
		jr,
		Qt,
		er,
		Zt,
		Nt,
		Kt,
		Ht,
		Dt,
		Ut,
		Gt,
		xr,
		qt,
		Xt,
		hr,
		gr,
		Ft,
		wr,
		Jt,
		rr,
		tr,
		jt,
		Ye,
		qe,
		He,
		Lt,
		It,
		Bt,
		cr,
		nr,
		sr,
		Ot,
		Vt,
		Pt,
		yr,
		br,
		Ct,
		Cr,
		ar,
		St,
		$r,
		lr,
		ur,
		_t,
		fr,
		Sr,
		Rr,
		Er,
		At,
		dr,
		Tt,
		pr,
		kr,
		zt,
		or,
		ir,
		Mt,
		Yt,
	].flat(1);
	var Ho = {
		position: ["relative", "absolute", "fixed", "sticky", "static"],
		globalKeyword: k,
	};
	var un = {
		inherit: "inherit",
		current: "currentColor",
		transparent: "transparent",
		black: "#000",
		white: "#fff",
		rose: {
			50: "#fff1f2",
			100: "#ffe4e6",
			200: "#fecdd3",
			300: "#fda4af",
			400: "#fb7185",
			500: "#f43f5e",
			600: "#e11d48",
			700: "#be123c",
			800: "#9f1239",
			900: "#881337",
			950: "#4c0519",
		},
		pink: {
			50: "#fdf2f8",
			100: "#fce7f3",
			200: "#fbcfe8",
			300: "#f9a8d4",
			400: "#f472b6",
			500: "#ec4899",
			600: "#db2777",
			700: "#be185d",
			800: "#9d174d",
			900: "#831843",
			950: "#500724",
		},
		fuchsia: {
			50: "#fdf4ff",
			100: "#fae8ff",
			200: "#f5d0fe",
			300: "#f0abfc",
			400: "#e879f9",
			500: "#d946ef",
			600: "#c026d3",
			700: "#a21caf",
			800: "#86198f",
			900: "#701a75",
			950: "#4a044e",
		},
		purple: {
			50: "#faf5ff",
			100: "#f3e8ff",
			200: "#e9d5ff",
			300: "#d8b4fe",
			400: "#c084fc",
			500: "#a855f7",
			600: "#9333ea",
			700: "#7e22ce",
			800: "#6b21a8",
			900: "#581c87",
			950: "#3b0764",
		},
		violet: {
			50: "#f5f3ff",
			100: "#ede9fe",
			200: "#ddd6fe",
			300: "#c4b5fd",
			400: "#a78bfa",
			500: "#8b5cf6",
			600: "#7c3aed",
			700: "#6d28d9",
			800: "#5b21b6",
			900: "#4c1d95",
			950: "#2e1065",
		},
		indigo: {
			50: "#eef2ff",
			100: "#e0e7ff",
			200: "#c7d2fe",
			300: "#a5b4fc",
			400: "#818cf8",
			500: "#6366f1",
			600: "#4f46e5",
			700: "#4338ca",
			800: "#3730a3",
			900: "#312e81",
			950: "#1e1b4b",
		},
		blue: {
			50: "#eff6ff",
			100: "#dbeafe",
			200: "#bfdbfe",
			300: "#93c5fd",
			400: "#60a5fa",
			500: "#3b82f6",
			600: "#2563eb",
			700: "#1d4ed8",
			800: "#1e40af",
			900: "#1e3a8a",
			950: "#172554",
		},
		sky: {
			50: "#f0f9ff",
			100: "#e0f2fe",
			200: "#bae6fd",
			300: "#7dd3fc",
			400: "#38bdf8",
			500: "#0ea5e9",
			600: "#0284c7",
			700: "#0369a1",
			800: "#075985",
			900: "#0c4a6e",
			950: "#082f49",
		},
		cyan: {
			50: "#ecfeff",
			100: "#cffafe",
			200: "#a5f3fc",
			300: "#67e8f9",
			400: "#22d3ee",
			500: "#06b6d4",
			600: "#0891b2",
			700: "#0e7490",
			800: "#155e75",
			900: "#164e63",
			950: "#083344",
		},
		teal: {
			50: "#f0fdfa",
			100: "#ccfbf1",
			200: "#99f6e4",
			300: "#5eead4",
			400: "#2dd4bf",
			500: "#14b8a6",
			600: "#0d9488",
			700: "#0f766e",
			800: "#115e59",
			900: "#134e4a",
			950: "#042f2e",
		},
		emerald: {
			50: "#ecfdf5",
			100: "#d1fae5",
			200: "#a7f3d0",
			300: "#6ee7b7",
			400: "#34d399",
			500: "#10b981",
			600: "#059669",
			700: "#047857",
			800: "#065f46",
			900: "#064e3b",
			950: "#022c22",
		},
		green: {
			50: "#f0fdf4",
			100: "#dcfce7",
			200: "#bbf7d0",
			300: "#86efac",
			400: "#4ade80",
			500: "#22c55e",
			600: "#16a34a",
			700: "#15803d",
			800: "#166534",
			900: "#14532d",
			950: "#052e16",
		},
		lime: {
			50: "#f7fee7",
			100: "#ecfccb",
			200: "#d9f99d",
			300: "#bef264",
			400: "#a3e635",
			500: "#84cc16",
			600: "#65a30d",
			700: "#4d7c0f",
			800: "#3f6212",
			900: "#365314",
			950: "#1a2e05",
		},
		yellow: {
			50: "#fefce8",
			100: "#fef9c3",
			200: "#fef08a",
			300: "#fde047",
			400: "#facc15",
			500: "#eab308",
			600: "#ca8a04",
			700: "#a16207",
			800: "#854d0e",
			900: "#713f12",
			950: "#422006",
		},
		amber: {
			50: "#fffbeb",
			100: "#fef3c7",
			200: "#fde68a",
			300: "#fcd34d",
			400: "#fbbf24",
			500: "#f59e0b",
			600: "#d97706",
			700: "#b45309",
			800: "#92400e",
			900: "#78350f",
			950: "#451a03",
		},
		orange: {
			50: "#fff7ed",
			100: "#ffedd5",
			200: "#fed7aa",
			300: "#fdba74",
			400: "#fb923c",
			500: "#f97316",
			600: "#ea580c",
			700: "#c2410c",
			800: "#9a3412",
			900: "#7c2d12",
			950: "#431407",
		},
		red: {
			50: "#fef2f2",
			100: "#fee2e2",
			200: "#fecaca",
			300: "#fca5a5",
			400: "#f87171",
			500: "#ef4444",
			600: "#dc2626",
			700: "#b91c1c",
			800: "#991b1b",
			900: "#7f1d1d",
			950: "#450a0a",
		},
		gray: {
			50: "#f9fafb",
			100: "#f3f4f6",
			200: "#e5e7eb",
			300: "#d1d5db",
			400: "#9ca3af",
			500: "#6b7280",
			600: "#4b5563",
			700: "#374151",
			800: "#1f2937",
			900: "#111827",
			950: "#030712",
		},
		slate: {
			50: "#f8fafc",
			100: "#f1f5f9",
			200: "#e2e8f0",
			300: "#cbd5e1",
			400: "#94a3b8",
			500: "#64748b",
			600: "#475569",
			700: "#334155",
			800: "#1e293b",
			900: "#0f172a",
			950: "#020617",
		},
		zinc: {
			50: "#fafafa",
			100: "#f4f4f5",
			200: "#e4e4e7",
			300: "#d4d4d8",
			400: "#a1a1aa",
			500: "#71717a",
			600: "#52525b",
			700: "#3f3f46",
			800: "#27272a",
			900: "#18181b",
			950: "#09090b",
		},
		neutral: {
			50: "#fafafa",
			100: "#f5f5f5",
			200: "#e5e5e5",
			300: "#d4d4d4",
			400: "#a3a3a3",
			500: "#737373",
			600: "#525252",
			700: "#404040",
			800: "#262626",
			900: "#171717",
			950: "#0a0a0a",
		},
		stone: {
			50: "#fafaf9",
			100: "#f5f5f4",
			200: "#e7e5e4",
			300: "#d6d3d1",
			400: "#a8a29e",
			500: "#78716c",
			600: "#57534e",
			700: "#44403c",
			800: "#292524",
			900: "#1c1917",
			950: "#0c0a09",
		},
		light: {
			50: "#fdfdfd",
			100: "#fcfcfc",
			200: "#fafafa",
			300: "#f8f9fa",
			400: "#f6f6f6",
			500: "#f2f2f2",
			600: "#f1f3f5",
			700: "#e9ecef",
			800: "#dee2e6",
			900: "#dde1e3",
			950: "#d8dcdf",
		},
		dark: {
			50: "#4a4a4a",
			100: "#3c3c3c",
			200: "#323232",
			300: "#2d2d2d",
			400: "#222222",
			500: "#1f1f1f",
			600: "#1c1c1e",
			700: "#1b1b1b",
			800: "#181818",
			900: "#0f0f0f",
			950: "#080808",
		},
		get lightblue() {
			return this.sky;
		},
		get lightBlue() {
			return this.sky;
		},
		get warmgray() {
			return this.stone;
		},
		get warmGray() {
			return this.stone;
		},
		get truegray() {
			return this.neutral;
		},
		get trueGray() {
			return this.neutral;
		},
		get coolgray() {
			return this.gray;
		},
		get coolGray() {
			return this.gray;
		},
		get bluegray() {
			return this.slate;
		},
		get blueGray() {
			return this.slate;
		},
	};
	Object.values(un).forEach((e) => {
		typeof e != "string" &&
			e !== void 0 &&
			((e.DEFAULT = e.DEFAULT || e[400]),
			Object.keys(e).forEach((t) => {
				let r = +t / 100;
				r === Math.round(r) && (e[r] = e[t]);
			}));
	});
	var qo = {
			DEFAULT: "8px",
			0: "0",
			sm: "4px",
			md: "12px",
			lg: "16px",
			xl: "24px",
			"2xl": "40px",
			"3xl": "64px",
		},
		Yo = {
			DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
			sm: "0 1px 1px rgb(0 0 0 / 0.05)",
			md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
			lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
			xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
			"2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
			none: "0 0 rgb(0 0 0 / 0)",
		};
	var Xo = {
			sans: [
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				'"Noto Sans"',
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			].join(","),
			serif: [
				"ui-serif",
				"Georgia",
				"Cambria",
				'"Times New Roman"',
				"Times",
				"serif",
			].join(","),
			mono: [
				"ui-monospace",
				"SFMono-Regular",
				"Menlo",
				"Monaco",
				"Consolas",
				'"Liberation Mono"',
				'"Courier New"',
				"monospace",
			].join(","),
		},
		Zo = {
			xs: ["0.75rem", "1rem"],
			sm: ["0.875rem", "1.25rem"],
			base: ["1rem", "1.5rem"],
			lg: ["1.125rem", "1.75rem"],
			xl: ["1.25rem", "1.75rem"],
			"2xl": ["1.5rem", "2rem"],
			"3xl": ["1.875rem", "2.25rem"],
			"4xl": ["2.25rem", "2.5rem"],
			"5xl": ["3rem", "1"],
			"6xl": ["3.75rem", "1"],
			"7xl": ["4.5rem", "1"],
			"8xl": ["6rem", "1"],
			"9xl": ["8rem", "1"],
		},
		Jo = {
			DEFAULT: "1.5rem",
			xs: "0.5rem",
			sm: "1rem",
			md: "1.5rem",
			lg: "2rem",
			xl: "2.5rem",
			"2xl": "3rem",
			"3xl": "4rem",
		},
		Qo = {
			DEFAULT: "1.5rem",
			none: "0",
			sm: "thin",
			md: "medium",
			lg: "thick",
		},
		ei = {
			DEFAULT: ["0 0 1px rgb(0 0 0 / 0.2)", "0 0 1px rgb(1 0 5 / 0.1)"],
			none: "0 0 rgb(0 0 0 / 0)",
			sm: "1px 1px 3px rgb(36 37 47 / 0.25)",
			md: [
				"0 1px 2px rgb(30 29 39 / 0.19)",
				"1px 2px 4px rgb(54 64 147 / 0.18)",
			],
			lg: ["3px 3px 6px rgb(0 0 0 / 0.26)", "0 0 5px rgb(15 3 86 / 0.22)"],
			xl: [
				"1px 1px 3px rgb(0 0 0 / 0.29)",
				"2px 4px 7px rgb(73 64 125 / 0.35)",
			],
		},
		ti = {
			none: "1",
			tight: "1.25",
			snug: "1.375",
			normal: "1.5",
			relaxed: "1.625",
			loose: "2",
		},
		fn = {
			tighter: "-0.05em",
			tight: "-0.025em",
			normal: "0em",
			wide: "0.025em",
			wider: "0.05em",
			widest: "0.1em",
		},
		ri = {
			thin: "100",
			extralight: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			black: "900",
		},
		ni = fn;
	var pn = {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		oi = { ...pn },
		ii = { DEFAULT: "1px", none: "0" },
		si = {
			DEFAULT: "1rem",
			none: "0",
			xs: "0.75rem",
			sm: "0.875rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "3.75rem",
			"7xl": "4.5rem",
			"8xl": "6rem",
			"9xl": "8rem",
		},
		ai = {
			DEFAULT: "150ms",
			none: "0s",
			75: "75ms",
			100: "100ms",
			150: "150ms",
			200: "200ms",
			300: "300ms",
			500: "500ms",
			700: "700ms",
			1e3: "1000ms",
		},
		ci = {
			DEFAULT: "0.25rem",
			none: "0",
			sm: "0.125rem",
			md: "0.375rem",
			lg: "0.5rem",
			xl: "0.75rem",
			"2xl": "1rem",
			"3xl": "1.5rem",
			full: "9999px",
		},
		li = {
			DEFAULT: [
				"var(--un-shadow-inset) 0 1px 3px 0 rgb(0 0 0 / 0.1)",
				"var(--un-shadow-inset) 0 1px 2px -1px rgb(0 0 0 / 0.1)",
			],
			none: "0 0 rgb(0 0 0 / 0)",
			sm: "var(--un-shadow-inset) 0 1px 2px 0 rgb(0 0 0 / 0.05)",
			md: [
				"var(--un-shadow-inset) 0 4px 6px -1px rgb(0 0 0 / 0.1)",
				"var(--un-shadow-inset) 0 2px 4px -2px rgb(0 0 0 / 0.1)",
			],
			lg: [
				"var(--un-shadow-inset) 0 10px 15px -3px rgb(0 0 0 / 0.1)",
				"var(--un-shadow-inset) 0 4px 6px -4px rgb(0 0 0 / 0.1)",
			],
			xl: [
				"var(--un-shadow-inset) 0 20px 25px -5px rgb(0 0 0 / 0.1)",
				"var(--un-shadow-inset) 0 8px 10px -6px rgb(0 0 0 / 0.1)",
			],
			"2xl": "var(--un-shadow-inset) 0 25px 50px -12px rgb(0 0 0 / 0.25)",
			inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
		},
		ui = { DEFAULT: "3px", none: "0" },
		fi = { auto: "auto" },
		pi = { mouse: "(hover) and (pointer: fine)" };
	var di = { ...Je, ...Ze, ...Xe };
	var Qe = {
			xs: "20rem",
			sm: "24rem",
			md: "28rem",
			lg: "32rem",
			xl: "36rem",
			"2xl": "42rem",
			"3xl": "48rem",
			"4xl": "56rem",
			"5xl": "64rem",
			"6xl": "72rem",
			"7xl": "80rem",
			prose: "65ch",
		},
		dn = { auto: "auto", ...Qe, screen: "100vw" },
		et = { none: "none", ...Qe, screen: "100vw" },
		mn = { auto: "auto", ...Qe, screen: "100vh" },
		tt = { none: "none", ...Qe, screen: "100vh" },
		mi = { ...Qe };
	var gi = {
			DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
			linear: "linear",
			in: "cubic-bezier(0.4, 0, 1, 1)",
			out: "cubic-bezier(0, 0, 0.2, 1)",
			"in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
		},
		hi = {
			none: "none",
			all: "all",
			colors: [
				"color",
				"background-color",
				"border-color",
				"text-decoration-color",
				"fill",
				"stroke",
			].join(","),
			opacity: "opacity",
			shadow: "box-shadow",
			transform: "transform",
			get DEFAULT() {
				return [
					this.colors,
					"opacity",
					"box-shadow",
					"transform",
					"filter",
					"backdrop-filter",
				].join(",");
			},
		};
	var bi = {
		width: dn,
		height: mn,
		maxWidth: et,
		maxHeight: tt,
		minWidth: et,
		minHeight: tt,
		inlineSize: dn,
		blockSize: mn,
		maxInlineSize: et,
		maxBlockSize: tt,
		minInlineSize: et,
		minBlockSize: tt,
		colors: un,
		fontFamily: Xo,
		fontSize: Zo,
		fontWeight: ri,
		breakpoints: pn,
		verticalBreakpoints: oi,
		borderRadius: ci,
		lineHeight: ti,
		letterSpacing: fn,
		wordSpacing: ni,
		boxShadow: li,
		textIndent: Jo,
		textShadow: ei,
		textStrokeWidth: Qo,
		blur: qo,
		dropShadow: Yo,
		easing: gi,
		transitionProperty: hi,
		lineWidth: ii,
		spacing: si,
		duration: ai,
		ringWidth: ui,
		preflightBase: di,
		containers: mi,
		zIndex: fi,
		media: pi,
	};
	var xi = {
		name: "aria",
		match(e, t) {
			let r = I("aria-", e, t.generator.config.separators);
			if (r) {
				let [n, o] = r,
					i = l.bracket(n) ?? t.theme.aria?.[n] ?? "";
				if (i) return { matcher: o, selector: (s) => `${s}[aria-${i}]` };
			}
		},
	};
	function zr(e) {
		return {
			name: `${e}-aria`,
			match(t, r) {
				let n = I(`${e}-aria-`, t, r.generator.config.separators);
				if (n) {
					let [o, i] = n,
						s = l.bracket(o) ?? r.theme.aria?.[o] ?? "";
					if (s) return { matcher: `${e}-[[aria-${s}]]:${i}` };
				}
			},
		};
	}
	var yi = [zr("group"), zr("peer"), zr("parent"), zr("previous")];
	function vi(e) {
		let t = e.match(/^-?\d+\.?\d*/)?.[0] || "",
			r = e.slice(t.length);
		if (r === "px") {
			let n = Number.parseFloat(t) - 0.1;
			return Number.isNaN(n) ? e : `${n}${r}`;
		}
		return `calc(${e} - 0.1px)`;
	}
	var wi = /(max|min)-\[([^\]]*)\]:/;
	function ki() {
		let e = {};
		return {
			name: "breakpoints",
			match(t, r) {
				if (wi.test(t)) {
					let o = t.match(wi);
					return {
						matcher: t.replace(o[0], ""),
						handle: (s, a) =>
							a({
								...s,
								parent: `${s.parent ? `${s.parent} $$ ` : ""}@media (${
									o[1]
								}-width: ${o[2]})`,
							}),
					};
				}
				let n = (ye(r) ?? []).map(({ point: o, size: i }, s) => [o, i, s]);
				for (let [o, i, s] of n) {
					e[o] ||
						(e[o] = new RegExp(
							`^((?:([al]t-|[<~]|max-))?${o}(?:${r.generator.config.separators.join(
								"|"
							)}))`
						));
					let a = t.match(e[o]);
					if (!a) continue;
					let [, c] = a,
						u = t.slice(c.length);
					if (u === "container") continue;
					let f =
							c.startsWith("lt-") || c.startsWith("<") || c.startsWith("max-"),
						p = c.startsWith("at-") || c.startsWith("~"),
						d = 3e3;
					return f
						? ((d -= s + 1),
						  {
								matcher: u,
								handle: (m, b) =>
									b({
										...m,
										parent: `${
											m.parent ? `${m.parent} $$ ` : ""
										}@media (max-width: ${vi(i)})`,
										parentOrder: d,
									}),
						  })
						: ((d += s + 1),
						  p && s < n.length - 1
								? {
										matcher: u,
										handle: (m, b) =>
											b({
												...m,
												parent: `${
													m.parent ? `${m.parent} $$ ` : ""
												}@media (min-width: ${i}) and (max-width: ${vi(
													n[s + 1][1]
												)})`,
												parentOrder: d,
											}),
								  }
								: {
										matcher: u,
										handle: (m, b) =>
											b({
												...m,
												parent: `${
													m.parent ? `${m.parent} $$ ` : ""
												}@media (min-width: ${i})`,
												parentOrder: d,
											}),
								  });
				}
			},
			multiPass: !0,
			autocomplete: "(at-|lt-|max-|)$breakpoints:",
		};
	}
	var $i = [K("*", (e) => ({ selector: `${e.selector} > *` }))];
	function rt(e, t) {
		return {
			name: `combinator:${e}`,
			match(r, n) {
				if (!r.startsWith(e)) return;
				let o = n.generator.config.separators,
					i = me(`${e}-`, r, o);
				if (!i) {
					for (let a of o)
						if (r.startsWith(`${e}${a}`)) {
							i = ["", r.slice(e.length + a.length)];
							break;
						}
					if (!i) return;
				}
				let s = l.bracket(i[0]) ?? "";
				return (
					s === "" && (s = "*"),
					{ matcher: i[1], selector: (a) => `${a}${t}${s}` }
				);
			},
			multiPass: !0,
		};
	}
	var Si = [
		rt("all", " "),
		rt("children", ">"),
		rt("next", "+"),
		rt("sibling", "+"),
		rt("siblings", "~"),
	];
	var Ci = {
		name: "@",
		match(e, t) {
			if (e.startsWith("@container")) return;
			let r = I("@", e, t.generator.config.separators);
			if (r) {
				let [n, o, i] = r,
					s = l.bracket(n),
					a;
				if (
					(s ? (a = l.numberWithUnit(s)) : (a = t.theme.containers?.[n] ?? ""),
					a)
				) {
					let c = 1e3 + Object.keys(t.theme.containers ?? {}).indexOf(n);
					return (
						i && (c += 1e3),
						{
							matcher: o,
							handle: (u, f) =>
								f({
									...u,
									parent: `${u.parent ? `${u.parent} $$ ` : ""}@container${
										i ? ` ${i} ` : " "
									}(min-width: ${a})`,
									parentOrder: c,
								}),
						}
					);
				}
			}
		},
		multiPass: !0,
	};
	function Ri(e = {}) {
		if (e?.dark === "class" || typeof e.dark == "object") {
			let { dark: t = ".dark", light: r = ".light" } =
				typeof e.dark == "string" ? {} : e.dark;
			return [
				K("dark", (n) => ({ prefix: `${t} $$ ${n.prefix}` })),
				K("light", (n) => ({ prefix: `${r} $$ ${n.prefix}` })),
			];
		}
		return [
			G("dark", "@media (prefers-color-scheme: dark)"),
			G("light", "@media (prefers-color-scheme: light)"),
		];
	}
	var Ei = {
		name: "data",
		match(e, t) {
			let r = I("data-", e, t.generator.config.separators);
			if (r) {
				let [n, o] = r,
					i = l.bracket(n) ?? t.theme.data?.[n] ?? "";
				if (i) return { matcher: o, selector: (s) => `${s}[data-${i}]` };
			}
		},
	};
	function Or(e) {
		return {
			name: `${e}-data`,
			match(t, r) {
				let n = I(`${e}-data-`, t, r.generator.config.separators);
				if (n) {
					let [o, i, s] = n,
						a = l.bracket(o) ?? r.theme.data?.[o] ?? "";
					if (a)
						return { matcher: `${e}-[[data-${a}]]${s ? `/${s}` : ""}:${i}` };
				}
			},
		};
	}
	var Ti = [Or("group"), Or("peer"), Or("parent"), Or("previous")];
	var ji = [
		K("rtl", (e) => ({ prefix: `[dir="rtl"] $$ ${e.prefix}` })),
		K("ltr", (e) => ({ prefix: `[dir="ltr"] $$ ${e.prefix}` })),
	];
	function zi() {
		let e;
		return {
			name: "important",
			match(t, r) {
				e ||
					(e = new RegExp(
						`^(important(?:${r.generator.config.separators.join("|")})|!)`
					));
				let n,
					o = t.match(e);
				if (
					(o
						? (n = t.slice(o[0].length))
						: t.endsWith("!") && (n = t.slice(0, -1)),
					n)
				)
					return {
						matcher: n,
						body: (i) => (
							i.forEach((s) => {
								s[1] != null && (s[1] += " !important");
							}),
							i
						),
					};
			},
		};
	}
	var Oi = G("print", "@media print"),
		Ai = {
			name: "media",
			match(e, t) {
				let r = I("media-", e, t.generator.config.separators);
				if (r) {
					let [n, o] = r,
						i = l.bracket(n) ?? "";
					if ((i === "" && (i = t.theme.media?.[n] ?? ""), i))
						return {
							matcher: o,
							handle: (s, a) =>
								a({
									...s,
									parent: `${s.parent ? `${s.parent} $$ ` : ""}@media ${i}`,
								}),
						};
				}
			},
			multiPass: !0,
		};
	var Vi = {
			name: "selector",
			match(e, t) {
				let r = me("selector-", e, t.generator.config.separators);
				if (r) {
					let [n, o] = r,
						i = l.bracket(n);
					if (i) return { matcher: o, selector: () => i };
				}
			},
		},
		Pi = {
			name: "layer",
			match(e, t) {
				let r = I("layer-", e, t.generator.config.separators);
				if (r) {
					let [n, o] = r,
						i = l.bracket(n) ?? n;
					if (i)
						return {
							matcher: o,
							handle: (s, a) =>
								a({
									...s,
									parent: `${s.parent ? `${s.parent} $$ ` : ""}@layer ${i}`,
								}),
						};
				}
			},
		},
		Mi = {
			name: "uno-layer",
			match(e, t) {
				let r = I("uno-layer-", e, t.generator.config.separators);
				if (r) {
					let [n, o] = r,
						i = l.bracket(n) ?? n;
					if (i) return { matcher: o, layer: i };
				}
			},
		},
		_i = {
			name: "scope",
			match(e, t) {
				let r = me("scope-", e, t.generator.config.separators);
				if (r) {
					let [n, o] = r,
						i = l.bracket(n);
					if (i) return { matcher: o, selector: (s) => `${i} $$ ${s}` };
				}
			},
		},
		Fi = {
			name: "variables",
			match(e, t) {
				if (!e.startsWith("[")) return;
				let [r, n] = Ce(e, "[", "]") ?? [];
				if (!(r && n)) return;
				let o;
				for (let a of t.generator.config.separators)
					if (n.startsWith(a)) {
						o = n.slice(a.length);
						break;
					}
				if (o == null) return;
				let i = l.bracket(r) ?? "",
					s = i.startsWith("@");
				if (s || i.includes("&"))
					return {
						matcher: o,
						handle(a, c) {
							let u = s
								? { parent: `${a.parent ? `${a.parent} $$ ` : ""}${i}` }
								: { selector: i.replace(/&/g, a.selector) };
							return c({ ...a, ...u });
						},
					};
			},
			multiPass: !0,
		},
		Li = {
			name: "theme-variables",
			match(e, t) {
				if (wo(e))
					return {
						matcher: e,
						handle(r, n) {
							return n({
								...r,
								entries: JSON.parse(ko(JSON.stringify(r.entries), t.theme)),
							});
						},
					};
			},
		};
	var Ui = /^-?[0-9.]+(?:[a-z]+|%)?$/,
		Wi = /-?[0-9.]+(?:[a-z]+|%)?/,
		El = [/\b(opacity|color|flex|backdrop-filter|^filter|transform)\b/];
	function Tl(e) {
		let t = e.match(Be) || e.match(wt);
		if (t) {
			let [r, n] = de(`(${t[2]})${t[3]}`, "(", ")", " ") ?? [];
			if (r) return `calc(${t[1]}${r} * -1)${n ? ` ${n}` : ""}`;
		}
	}
	var jl = /\b(hue-rotate)\s*(\(.*)/;
	function zl(e) {
		let t = e.match(jl);
		if (t) {
			let [r, n] = de(t[2], "(", ")", " ") ?? [];
			if (r) {
				let o = Ui.test(r.slice(1, -1))
					? r.replace(Wi, (i) => (i.startsWith("-") ? i.slice(1) : `-${i}`))
					: `(calc(${r} * -1))`;
				return `${t[1]}${o}${n ? ` ${n}` : ""}`;
			}
		}
	}
	var Bi = {
		name: "negative",
		match(e) {
			if (e.startsWith("-"))
				return {
					matcher: e.slice(1),
					body: (t) => {
						if (t.find((n) => n[0] === Oo)) return;
						let r = !1;
						return (
							t.forEach((n) => {
								let o = n[1]?.toString();
								if (!o || o === "0" || El.some((a) => a.test(n[0]))) return;
								let i = Tl(o);
								if (i) {
									(n[1] = i), (r = !0);
									return;
								}
								let s = zl(o);
								if (s) {
									(n[1] = s), (r = !0);
									return;
								}
								Ui.test(o) &&
									((n[1] = o.replace(Wi, (a) =>
										a.startsWith("-") ? a.slice(1) : `-${a}`
									)),
									(r = !0));
							}),
							r ? t : []
						);
					},
				};
		},
	};
	var Ae = Object.fromEntries(
			[
				["first-letter", "::first-letter"],
				["first-line", "::first-line"],
				"any-link",
				"link",
				"visited",
				"target",
				["open", "[open]"],
				"default",
				"checked",
				"indeterminate",
				"placeholder-shown",
				"autofill",
				"optional",
				"required",
				"valid",
				"invalid",
				"user-valid",
				"user-invalid",
				"in-range",
				"out-of-range",
				"read-only",
				"read-write",
				"empty",
				"focus-within",
				"hover",
				"focus",
				"focus-visible",
				"active",
				"enabled",
				"disabled",
				"popover-open",
				"root",
				"empty",
				["even-of-type", ":nth-of-type(even)"],
				["even", ":nth-child(even)"],
				["odd-of-type", ":nth-of-type(odd)"],
				["odd", ":nth-child(odd)"],
				"first-of-type",
				["first", ":first-child"],
				"last-of-type",
				["last", ":last-child"],
				"only-child",
				"only-of-type",
				["backdrop-element", "::backdrop"],
				["placeholder", "::placeholder"],
				["before", "::before"],
				["after", "::after"],
				["file", "::file-selector-button"],
			].map((e) => (Array.isArray(e) ? e : [e, `:${e}`]))
		),
		Ki = Object.keys(Ae),
		Ve = Object.fromEntries(
			[["backdrop", "::backdrop"]].map((e) =>
				Array.isArray(e) ? e : [e, `:${e}`]
			)
		),
		Gi = Object.keys(Ve),
		Ol = ["not", "is", "where", "has"],
		Hi = Object.fromEntries([
			["selection", ["::selection", " *::selection"]],
			["marker", ["::marker", " *::marker"]],
		]),
		gn = Object.entries(Ae)
			.filter(([, e]) => !e.startsWith("::"))
			.map(([e]) => e)
			.sort((e, t) => t.length - e.length)
			.join("|"),
		hn = Object.entries(Ve)
			.filter(([, e]) => !e.startsWith("::"))
			.map(([e]) => e)
			.sort((e, t) => t.length - e.length)
			.join("|"),
		ke = Ol.join("|"),
		Ni = Object.keys(Hi)
			.sort((e, t) => t.length - e.length)
			.join("|");
	function Al(e, t, r) {
		let n = new RegExp(`^(${fe(t)}:)(\\S+)${fe(r)}\\1`),
			o,
			i,
			s,
			a,
			c = (p) => {
				let d = me(`${e}-`, p, []);
				if (!d) return;
				let [m, b] = d,
					x = l.bracket(m);
				if (x == null) return;
				let $ = b.split(o, 1)?.[0] ?? "",
					j = `${t}${se($)}`;
				return [
					$,
					p.slice(p.length - (b.length - $.length - 1)),
					x.includes("&") ? x.replace(/&/g, j) : `${j}${x}`,
				];
			},
			u = (p) => {
				let d = p.match(i) || p.match(s);
				if (!d) return;
				let [m, b, x] = d,
					$ = d[3] ?? "",
					j = Ae[x] || Ve[x] || `:${x}`;
				return (
					b && (j = `:${b}(${j})`),
					[$, p.slice(m.length), `${t}${se($)}${j}`, x]
				);
			},
			f = (p) => {
				let d = p.match(a);
				if (!d) return;
				let [m, b, x] = d,
					$ = d[3] ?? "",
					j = `:${b}(${x})`;
				return [$, p.slice(m.length), `${t}${se($)}${j}`];
			};
		return {
			name: `pseudo:${e}`,
			match(p, d) {
				if (
					((o && i && s) ||
						((o = new RegExp(`(?:${d.generator.config.separators.join("|")})`)),
						(i = new RegExp(
							`^${e}-(?:(?:(${ke})-)?(${gn}))(?:(/\\w+))?(?:${d.generator.config.separators.join(
								"|"
							)})`
						)),
						(s = new RegExp(
							`^${e}-(?:(?:(${ke})-)?(${hn}))(?:(/\\w+))?(?:${d.generator.config.separators
								.filter((w) => w !== "-")
								.join("|")})`
						)),
						(a = new RegExp(
							`^${e}-(?:(${ke})-)?\\[(.+)\\](?:(/\\w+))?(?:${d.generator.config.separators
								.filter((w) => w !== "-")
								.join("|")})`
						))),
					!p.startsWith(e))
				)
					return;
				let m = c(p) || u(p) || f(p);
				if (!m) return;
				let [b, x, $, j = ""] = m;
				return {
					matcher: x,
					handle: (w, R) =>
						R({
							...w,
							prefix: `${$}${r}${w.prefix}`.replace(n, "$1$2:"),
							sort: Ki.indexOf(j) ?? Gi.indexOf(j),
						}),
				};
			},
			multiPass: !0,
		};
	}
	var Vl = [
			"::-webkit-resizer",
			"::-webkit-scrollbar",
			"::-webkit-scrollbar-button",
			"::-webkit-scrollbar-corner",
			"::-webkit-scrollbar-thumb",
			"::-webkit-scrollbar-track",
			"::-webkit-scrollbar-track-piece",
			"::file-selector-button",
		],
		Di = Object.entries(Ae)
			.map(([e]) => e)
			.sort((e, t) => t.length - e.length)
			.join("|"),
		Ii = Object.entries(Ve)
			.map(([e]) => e)
			.sort((e, t) => t.length - e.length)
			.join("|");
	function qi() {
		let e, t, r;
		return [
			{
				name: "pseudo",
				match(n, o) {
					(e && t) ||
						((e = new RegExp(
							`^(${Di})(?:${o.generator.config.separators.join("|")})`
						)),
						(t = new RegExp(
							`^(${Ii})(?:${o.generator.config.separators
								.filter((s) => s !== "-")
								.join("|")})`
						)));
					let i = n.match(e) || n.match(t);
					if (i) {
						let s = Ae[i[1]] || Ve[i[1]] || `:${i[1]}`,
							a = Ki.indexOf(i[1]);
						return (
							a === -1 && (a = Gi.indexOf(i[1])),
							a === -1 && (a = void 0),
							{
								matcher: n.slice(i[0].length),
								handle: (c, u) => {
									let f =
										s.includes("::") && !Vl.includes(s)
											? { pseudo: `${c.pseudo}${s}` }
											: { selector: `${c.selector}${s}` };
									return u({ ...c, ...f, sort: a, noMerge: !0 });
								},
							}
						);
					}
				},
				multiPass: !0,
				autocomplete: `(${Di}|${Ii}):`,
			},
			{
				name: "pseudo:multi",
				match(n, o) {
					r ||
						(r = new RegExp(
							`^(${Ni})(?:${o.generator.config.separators.join("|")})`
						));
					let i = n.match(r);
					if (i)
						return Hi[i[1]].map((a) => ({
							matcher: n.slice(i[0].length),
							handle: (c, u) => u({ ...c, pseudo: `${c.pseudo}${a}` }),
						}));
				},
				multiPass: !1,
				autocomplete: `(${Ni}):`,
			},
		];
	}
	function Yi() {
		let e, t, r;
		return {
			match(n, o) {
				(e && t) ||
					((e = new RegExp(
						`^(${ke})-(${gn})(?:${o.generator.config.separators.join("|")})`
					)),
					(t = new RegExp(
						`^(${ke})-(${hn})(?:${o.generator.config.separators
							.filter((s) => s !== "-")
							.join("|")})`
					)),
					(r = new RegExp(
						`^(${ke})-(\\[.+\\])(?:${o.generator.config.separators
							.filter((s) => s !== "-")
							.join("|")})`
					)));
				let i = n.match(e) || n.match(t) || n.match(r);
				if (i) {
					let s = i[1],
						c = Ce(i[2], "[", "]")
							? l.bracket(i[2])
							: Ae[i[2]] || Ve[i[2]] || `:${i[2]}`;
					return {
						matcher: n.slice(i[0].length),
						selector: (u) => `${u}:${s}(${c})`,
					};
				}
			},
			multiPass: !0,
			autocomplete: `(${ke})-(${gn}|${hn}):`,
		};
	}
	function Xi(e = {}) {
		let t = !!e?.attributifyPseudo,
			r = e?.prefix ?? "";
		r = (Array.isArray(r) ? r : [r]).filter(Boolean)[0] ?? "";
		let n = (o, i) => Al(o, t ? `[${r}${o}=""]` : `.${r}${o}`, i);
		return [
			n("group", " "),
			n("peer", "~"),
			n("parent", ">"),
			n("previous", "+"),
			n("group-aria", " "),
			n("peer-aria", "~"),
			n("parent-aria", ">"),
			n("previous-aria", "+"),
		];
	}
	var Pl = /(part-\[(.+)\]:)(.+)/,
		Zi = {
			match(e) {
				let t = e.match(Pl);
				if (t) {
					let r = `part(${t[2]})`;
					return {
						matcher: e.slice(t[1].length),
						selector: (n) => `${n}::${r}`,
					};
				}
			},
			multiPass: !0,
		};
	var Ji = {
		name: "starting",
		match(e) {
			if (e.startsWith("starting:"))
				return {
					matcher: e.slice(9),
					handle: (t, r) => r({ ...t, parent: "@starting-style" }),
				};
		},
	};
	var Qi = {
		name: "supports",
		match(e, t) {
			let r = I("supports-", e, t.generator.config.separators);
			if (r) {
				let [n, o] = r,
					i = l.bracket(n) ?? "";
				if ((i === "" && (i = t.theme.supports?.[n] ?? ""), i))
					return {
						matcher: o,
						handle: (s, a) =>
							a({
								...s,
								parent: `${s.parent ? `${s.parent} $$ ` : ""}@supports ${i}`,
							}),
					};
			}
		},
		multiPass: !0,
	};
	function Ar(e) {
		return [
			xi,
			Ei,
			Pi,
			Vi,
			Mi,
			Bi,
			Ji,
			zi(),
			Qi,
			Oi,
			Ai,
			ki(),
			...Si,
			...qi(),
			Yi(),
			...Xi(e),
			Zi,
			...Ri(e),
			...ji,
			_i,
			...$i,
			Ci,
			Fi,
			...Ti,
			...yi,
			Li,
		];
	}
	var bn = (e = {}) => (
			(e.dark = e.dark ?? "class"),
			(e.attributifyPseudo = e.attributifyPseudo ?? !1),
			(e.preflight = e.preflight ?? !0),
			(e.variablePrefix = e.variablePrefix ?? "un-"),
			{
				name: "@unocss/preset-mini",
				theme: bi,
				rules: Go,
				variants: Ar(e),
				options: e,
				prefix: e.prefix,
				postprocess: Ml(e.variablePrefix),
				preflights: fo(e),
				extractorDefault: e.arbitraryVariants === !1 ? void 0 : uo(),
				autocomplete: { shorthands: Ho },
			}
		),
		es = bn;
	function Ml(e) {
		if (e !== "un-")
			return (t) => {
				t.entries.forEach((r) => {
					(r[0] = r[0].replace(/^--un-/, `--${e}`)),
						typeof r[1] == "string" &&
							(r[1] = r[1].replace(/var\(--un-/g, `var(--${e}`));
				});
			};
	}
	function ts(e) {
		if (e == null || e === !1) return [];
		let t = (r) =>
			r.startsWith(":is(") && r.endsWith(")")
				? r
				: r.includes("::")
				? r.replace(/(.*?)((?:\s\*)?::.*)/, ":is($1)$2")
				: `:is(${r})`;
		return [
			e === !0
				? (r) => {
						r.entries.forEach((n) => {
							n[1] != null &&
								!String(n[1]).endsWith("!important") &&
								(n[1] += " !important");
						});
				  }
				: (r) => {
						r.selector.startsWith(e) || (r.selector = `${e} ${t(r.selector)}`);
				  },
		];
	}
	function rs(e) {
		return [...V(es(e).postprocess), ...ts(e.important)];
	}
	var ns = [
		[
			/^(?:animate-)?keyframes-(.+)$/,
			([, e], { theme: t }) => {
				let r = t.animation?.keyframes?.[e];
				if (r) return [`@keyframes ${e}${r}`, { animation: e }];
			},
			{
				autocomplete: [
					"animate-keyframes-$animation.keyframes",
					"keyframes-$animation.keyframes",
				],
			},
		],
		[
			/^animate-(.+)$/,
			([, e], { theme: t }) => {
				let r = t.animation?.keyframes?.[e];
				if (r) {
					let n = t.animation?.durations?.[e] ?? "1s",
						o = t.animation?.timingFns?.[e] ?? "linear",
						i = t.animation?.counts?.[e] ?? 1,
						s = t.animation?.properties?.[e];
					return [
						`@keyframes ${e}${r}`,
						{ animation: `${e} ${n} ${o} ${i}`, ...s },
					];
				}
				return { animation: l.bracket.cssvar(e) };
			},
			{ autocomplete: "animate-$animation.keyframes" },
		],
		[
			/^animate-name-(.+)/,
			([, e]) => ({ "animation-name": l.bracket.cssvar(e) ?? e }),
		],
		[
			/^animate-duration-(.+)$/,
			([, e], { theme: t }) => ({
				"animation-duration":
					t.duration?.[e || "DEFAULT"] ?? l.bracket.cssvar.time(e),
			}),
			{ autocomplete: ["animate-duration", "animate-duration-$duration"] },
		],
		[
			/^animate-delay-(.+)$/,
			([, e], { theme: t }) => ({
				"animation-delay":
					t.duration?.[e || "DEFAULT"] ?? l.bracket.cssvar.time(e),
			}),
			{ autocomplete: ["animate-delay", "animate-delay-$duration"] },
		],
		[
			/^animate-ease(?:-(.+))?$/,
			([, e], { theme: t }) => ({
				"animation-timing-function":
					t.easing?.[e || "DEFAULT"] ?? l.bracket.cssvar(e),
			}),
			{ autocomplete: ["animate-ease", "animate-ease-$easing"] },
		],
		[
			/^animate-(fill-mode-|fill-|mode-)?(.+)$/,
			([, e, t]) =>
				["none", "forwards", "backwards", "both", e ? k : []].includes(t)
					? { "animation-fill-mode": t }
					: void 0,
			{
				autocomplete: [
					"animate-(fill|mode|fill-mode)",
					"animate-(fill|mode|fill-mode)-(none|forwards|backwards|both|inherit|initial|revert|revert-layer|unset)",
					"animate-(none|forwards|backwards|both|inherit|initial|revert|revert-layer|unset)",
				],
			},
		],
		[
			/^animate-(direction-)?(.+)$/,
			([, e, t]) =>
				[
					"normal",
					"reverse",
					"alternate",
					"alternate-reverse",
					e ? k : [],
				].includes(t)
					? { "animation-direction": t }
					: void 0,
			{
				autocomplete: [
					"animate-direction",
					"animate-direction-(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|revert-layer|unset)",
					"animate-(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|revert-layer|unset)",
				],
			},
		],
		[
			/^animate-(?:iteration-count-|iteration-|count-)(.+)$/,
			([, e]) => ({
				"animation-iteration-count":
					l.bracket.cssvar(e) ?? e.replace(/-/g, ","),
			}),
			{
				autocomplete: [
					"animate-(iteration|count|iteration-count)",
					"animate-(iteration|count|iteration-count)-<num>",
				],
			},
		],
		[
			/^animate-(play-state-|play-|state-)?(.+)$/,
			([, e, t]) =>
				["paused", "running", e ? k : []].includes(t)
					? { "animation-play-state": t }
					: void 0,
			{
				autocomplete: [
					"animate-(play|state|play-state)",
					"animate-(play|state|play-state)-(paused|running|inherit|initial|revert|revert-layer|unset)",
					"animate-(paused|running|inherit|initial|revert|revert-layer|unset)",
				],
			},
		],
		["animate-none", { animation: "none" }],
		...y("animate", "animation"),
	];
	function os(e) {
		return e ? M(e, 0) : "rgb(255 255 255 / 0)";
	}
	function _l(e, t, r, n) {
		return t
			? n != null
				? M(t, n)
				: M(t, `var(--un-${e}-opacity, ${ae(t)})`)
			: M(r, n);
	}
	function xn() {
		return ([, e, t], { theme: r }) => {
			let n = Te(t, r, "backgroundColor");
			if (!n) return;
			let { alpha: o, color: i, cssColor: s } = n;
			if (!i) return;
			let a = _l(e, s, i, o);
			switch (e) {
				case "from":
					return {
						"--un-gradient-from-position": "0%",
						"--un-gradient-from": `${a} var(--un-gradient-from-position)`,
						"--un-gradient-to-position": "100%",
						"--un-gradient-to": `${os(s)} var(--un-gradient-to-position)`,
						"--un-gradient-stops":
							"var(--un-gradient-from), var(--un-gradient-to)",
					};
				case "via":
					return {
						"--un-gradient-via-position": "50%",
						"--un-gradient-to": os(s),
						"--un-gradient-stops": `var(--un-gradient-from), ${a} var(--un-gradient-via-position), var(--un-gradient-to)`,
					};
				case "to":
					return {
						"--un-gradient-to-position": "100%",
						"--un-gradient-to": `${a} var(--un-gradient-to-position)`,
					};
			}
		};
	}
	function Fl() {
		return ([, e, t]) => ({
			[`--un-gradient-${e}-position`]: `${
				Number(l.bracket.cssvar.percent(t)) * 100
			}%`,
		});
	}
	var is = [
		[
			/^bg-gradient-(.+)$/,
			([, e]) => ({ "--un-gradient": l.bracket(e) }),
			{
				autocomplete: [
					"bg-gradient",
					"bg-gradient-(from|to|via)",
					"bg-gradient-(from|to|via)-$colors",
					"bg-gradient-(from|to|via)-(op|opacity)",
					"bg-gradient-(from|to|via)-(op|opacity)-<percent>",
				],
			},
		],
		[
			/^(?:bg-gradient-)?stops-(\[.+\])$/,
			([, e]) => ({ "--un-gradient-stops": l.bracket(e) }),
		],
		[/^(?:bg-gradient-)?(from)-(.+)$/, xn()],
		[/^(?:bg-gradient-)?(via)-(.+)$/, xn()],
		[/^(?:bg-gradient-)?(to)-(.+)$/, xn()],
		[
			/^(?:bg-gradient-)?(from|via|to)-op(?:acity)?-?(.+)$/,
			([, e, t]) => ({ [`--un-${e}-opacity`]: l.bracket.percent(t) }),
		],
		[/^(from|via|to)-([\d.]+)%$/, Fl()],
		[
			/^bg-gradient-((?:repeating-)?(?:linear|radial|conic))$/,
			([, e]) => ({
				"background-image": `${e}-gradient(var(--un-gradient, var(--un-gradient-stops, rgb(255 255 255 / 0))))`,
			}),
			{
				autocomplete: [
					"bg-gradient-repeating",
					"bg-gradient-(linear|radial|conic)",
					"bg-gradient-repeating-(linear|radial|conic)",
				],
			},
		],
		[
			/^bg-gradient-to-([rltb]{1,2})$/,
			([, e]) => {
				if (e in B)
					return {
						"--un-gradient-shape": `to ${B[e]} in oklch`,
						"--un-gradient":
							"var(--un-gradient-shape), var(--un-gradient-stops)",
						"background-image": "linear-gradient(var(--un-gradient))",
					};
			},
			{
				autocomplete: `bg-gradient-to-(${Object.keys(B)
					.filter(
						(e) =>
							e.length <= 2 && Array.from(e).every((t) => "rltb".includes(t))
					)
					.join("|")})`,
			},
		],
		[
			/^(?:bg-gradient-)?shape-(.+)$/,
			([, e]) => {
				let t = e in B ? `to ${B[e]}` : l.bracket(e);
				if (t != null)
					return {
						"--un-gradient-shape": `${t} in oklch`,
						"--un-gradient":
							"var(--un-gradient-shape), var(--un-gradient-stops)",
					};
			},
			{
				autocomplete: [
					"bg-gradient-shape",
					`bg-gradient-shape-(${Object.keys(B).join("|")})`,
					`shape-(${Object.keys(B).join("|")})`,
				],
			},
		],
		["bg-none", { "background-image": "none" }],
		["box-decoration-slice", { "box-decoration-break": "slice" }],
		["box-decoration-clone", { "box-decoration-break": "clone" }],
		...y("box-decoration", "box-decoration-break"),
		["bg-auto", { "background-size": "auto" }],
		["bg-cover", { "background-size": "cover" }],
		["bg-contain", { "background-size": "contain" }],
		["bg-fixed", { "background-attachment": "fixed" }],
		["bg-local", { "background-attachment": "local" }],
		["bg-scroll", { "background-attachment": "scroll" }],
		[
			"bg-clip-border",
			{
				"-webkit-background-clip": "border-box",
				"background-clip": "border-box",
			},
		],
		[
			"bg-clip-content",
			{
				"-webkit-background-clip": "content-box",
				"background-clip": "content-box",
			},
		],
		[
			"bg-clip-padding",
			{
				"-webkit-background-clip": "padding-box",
				"background-clip": "padding-box",
			},
		],
		[
			"bg-clip-text",
			{ "-webkit-background-clip": "text", "background-clip": "text" },
		],
		...k.map((e) => [
			`bg-clip-${e}`,
			{ "-webkit-background-clip": e, "background-clip": e },
		]),
		[/^bg-([-\w]{3,})$/, ([, e]) => ({ "background-position": B[e] })],
		["bg-repeat", { "background-repeat": "repeat" }],
		["bg-no-repeat", { "background-repeat": "no-repeat" }],
		["bg-repeat-x", { "background-repeat": "repeat-x" }],
		["bg-repeat-y", { "background-repeat": "repeat-y" }],
		["bg-repeat-round", { "background-repeat": "round" }],
		["bg-repeat-space", { "background-repeat": "space" }],
		...y("bg-repeat", "background-repeat"),
		["bg-origin-border", { "background-origin": "border-box" }],
		["bg-origin-padding", { "background-origin": "padding-box" }],
		["bg-origin-content", { "background-origin": "content-box" }],
		...y("bg-origin", "background-origin"),
	];
	var yn = {
			disc: "disc",
			circle: "circle",
			square: "square",
			decimal: "decimal",
			"zero-decimal": "decimal-leading-zero",
			greek: "lower-greek",
			roman: "lower-roman",
			"upper-roman": "upper-roman",
			alpha: "lower-alpha",
			"upper-alpha": "upper-alpha",
			latin: "lower-latin",
			"upper-latin": "upper-latin",
		},
		ss = [
			[
				/^list-(.+?)(?:-(outside|inside))?$/,
				([, e, t]) => {
					let r = yn[e];
					if (r)
						return t
							? { "list-style-position": t, "list-style-type": r }
							: { "list-style-type": r };
				},
				{
					autocomplete: [
						`list-(${Object.keys(yn).join("|")})`,
						`list-(${Object.keys(yn).join("|")})-(outside|inside)`,
					],
				},
			],
			["list-outside", { "list-style-position": "outside" }],
			["list-inside", { "list-style-position": "inside" }],
			["list-none", { "list-style-type": "none" }],
			[
				/^list-image-(.+)$/,
				([, e]) => {
					if (/^\[url\(.+\)\]$/.test(e))
						return { "list-style-image": l.bracket(e) };
				},
			],
			["list-image-none", { "list-style-image": "none" }],
			...y("list", "list-style-type"),
		],
		as = [
			[
				/^accent-(.+)$/,
				O("accent-color", "accent", "accentColor"),
				{ autocomplete: "accent-$colors" },
			],
			[
				/^accent-op(?:acity)?-?(.+)$/,
				([, e]) => ({ "--un-accent-opacity": l.bracket.percent(e) }),
				{
					autocomplete: [
						"accent-(op|opacity)",
						"accent-(op|opacity)-<percent>",
					],
				},
			],
		],
		cs = [
			[
				/^caret-(.+)$/,
				O("caret-color", "caret", "textColor"),
				{ autocomplete: "caret-$colors" },
			],
			[
				/^caret-op(?:acity)?-?(.+)$/,
				([, e]) => ({ "--un-caret-opacity": l.bracket.percent(e) }),
				{
					autocomplete: ["caret-(op|opacity)", "caret-(op|opacity)-<percent>"],
				},
			],
		],
		ls = [
			["image-render-auto", { "image-rendering": "auto" }],
			["image-render-edge", { "image-rendering": "crisp-edges" }],
			[
				"image-render-pixel",
				[
					["-ms-interpolation-mode", "nearest-neighbor"],
					["image-rendering", "-webkit-optimize-contrast"],
					["image-rendering", "-moz-crisp-edges"],
					["image-rendering", "-o-pixelated"],
					["image-rendering", "pixelated"],
				],
			],
		],
		us = [
			["overscroll-auto", { "overscroll-behavior": "auto" }],
			["overscroll-contain", { "overscroll-behavior": "contain" }],
			["overscroll-none", { "overscroll-behavior": "none" }],
			...y("overscroll", "overscroll-behavior"),
			["overscroll-x-auto", { "overscroll-behavior-x": "auto" }],
			["overscroll-x-contain", { "overscroll-behavior-x": "contain" }],
			["overscroll-x-none", { "overscroll-behavior-x": "none" }],
			...y("overscroll-x", "overscroll-behavior-x"),
			["overscroll-y-auto", { "overscroll-behavior-y": "auto" }],
			["overscroll-y-contain", { "overscroll-behavior-y": "contain" }],
			["overscroll-y-none", { "overscroll-behavior-y": "none" }],
			...y("overscroll-y", "overscroll-behavior-y"),
		],
		fs = [
			["scroll-auto", { "scroll-behavior": "auto" }],
			["scroll-smooth", { "scroll-behavior": "smooth" }],
			...y("scroll", "scroll-behavior"),
		];
	var ps = [
		[
			/^columns-(.+)$/,
			([, e]) => ({ columns: l.bracket.global.number.auto.numberWithUnit(e) }),
			{ autocomplete: "columns-<num>" },
		],
		["break-before-auto", { "break-before": "auto" }],
		["break-before-avoid", { "break-before": "avoid" }],
		["break-before-all", { "break-before": "all" }],
		["break-before-avoid-page", { "break-before": "avoid-page" }],
		["break-before-page", { "break-before": "page" }],
		["break-before-left", { "break-before": "left" }],
		["break-before-right", { "break-before": "right" }],
		["break-before-column", { "break-before": "column" }],
		...y("break-before"),
		["break-inside-auto", { "break-inside": "auto" }],
		["break-inside-avoid", { "break-inside": "avoid" }],
		["break-inside-avoid-page", { "break-inside": "avoid-page" }],
		["break-inside-avoid-column", { "break-inside": "avoid-column" }],
		...y("break-inside"),
		["break-after-auto", { "break-after": "auto" }],
		["break-after-avoid", { "break-after": "avoid" }],
		["break-after-all", { "break-after": "all" }],
		["break-after-avoid-page", { "break-after": "avoid-page" }],
		["break-after-page", { "break-after": "page" }],
		["break-after-left", { "break-after": "left" }],
		["break-after-right", { "break-after": "right" }],
		["break-after-column", { "break-after": "column" }],
		...y("break-after"),
	];
	var Ll = /@media \(min-width: (.+)\)/,
		ds = [
			[
				/^__container$/,
				(e, t) => {
					let { theme: r, variantHandlers: n } = t,
						o = r.container?.padding,
						i;
					P(o) ? (i = o) : (i = o?.DEFAULT);
					let s = r.container?.maxWidth,
						a;
					for (let u of n) {
						let f = u.handle?.({}, (p) => p)?.parent;
						if (P(f)) {
							let p = f.match(Ll)?.[1];
							if (p) {
								let m = (ye(t) ?? []).find((b) => b.size === p)?.point;
								s ? m && (a = s?.[m]) : (a = p),
									m && !P(o) && (i = o?.[m] ?? i);
							}
						}
					}
					let c = { "max-width": a };
					return (
						n.length || (c.width = "100%"),
						r.container?.center &&
							((c["margin-left"] = "auto"), (c["margin-right"] = "auto")),
						o && ((c["padding-left"] = i), (c["padding-right"] = i)),
						c
					);
				},
				{ internal: !0 },
			],
		],
		ms = [
			[
				/^(?:(\w+)[:-])?container$/,
				([, e], t) => {
					let r = (ye(t) ?? []).map((o) => o.point);
					if (e) {
						if (!r.includes(e)) return;
						r = r.slice(r.indexOf(e));
					}
					let n = r.map((o) => `${o}:__container`);
					return e || n.unshift("__container"), n;
				},
			],
		];
	var gs = [
		[
			/^divide-?([xy])$/,
			Vr,
			{
				autocomplete: [
					"divide-(x|y|block|inline)",
					"divide-(x|y|block|inline)-reverse",
					"divide-(x|y|block|inline)-$lineWidth",
				],
			},
		],
		[/^divide-?([xy])-?(.+)$/, Vr],
		[
			/^divide-?([xy])-reverse$/,
			([, e]) => ({ [`--un-divide-${e}-reverse`]: 1 }),
		],
		[/^divide-(block|inline)$/, Vr],
		[/^divide-(block|inline)-(.+)$/, Vr],
		[
			/^divide-(block|inline)-reverse$/,
			([, e]) => ({ [`--un-divide-${e}-reverse`]: 1 }),
		],
		[
			/^divide-(.+)$/,
			O("border-color", "divide", "borderColor"),
			{ autocomplete: "divide-$colors" },
		],
		[
			/^divide-op(?:acity)?-?(.+)$/,
			([, e]) => ({ "--un-divide-opacity": l.bracket.percent(e) }),
			{
				autocomplete: ["divide-(op|opacity)", "divide-(op|opacity)-<percent>"],
			},
		],
		...ve.map((e) => [`divide-${e}`, { "border-style": e }]),
	];
	function Vr([, e, t], { theme: r }) {
		let n = r.lineWidth?.[t || "DEFAULT"] ?? l.bracket.cssvar.px(t || "1");
		if (n != null) {
			n === "0" && (n = "0px");
			let o = N[e].map((i) => {
				let s = `border${i}-width`,
					a =
						i.endsWith("right") || i.endsWith("bottom")
							? `calc(${n} * var(--un-divide-${e}-reverse))`
							: `calc(${n} * calc(1 - var(--un-divide-${e}-reverse)))`;
				return [s, a];
			});
			if (o) return [[`--un-divide-${e}-reverse`, 0], ...o];
		}
	}
	var wn = {
			"--un-blur": E,
			"--un-brightness": E,
			"--un-contrast": E,
			"--un-drop-shadow": E,
			"--un-grayscale": E,
			"--un-hue-rotate": E,
			"--un-invert": E,
			"--un-saturate": E,
			"--un-sepia": E,
		},
		bs = Object.keys(wn),
		hs = { preflightKeys: bs },
		Pr =
			"var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)",
		kn = {
			"--un-backdrop-blur": E,
			"--un-backdrop-brightness": E,
			"--un-backdrop-contrast": E,
			"--un-backdrop-grayscale": E,
			"--un-backdrop-hue-rotate": E,
			"--un-backdrop-invert": E,
			"--un-backdrop-opacity": E,
			"--un-backdrop-saturate": E,
			"--un-backdrop-sepia": E,
		},
		xs = Object.keys(kn),
		Ul = { preflightKeys: xs },
		Mr =
			"var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)",
		ce = { preflightKeys: [...bs, ...xs] };
	function vn(e) {
		let t = l.bracket.cssvar(e || "");
		if (
			t != null ||
			((t = e ? l.percent(e) : "1"), t != null && Number.parseFloat(t) <= 1)
		)
			return t;
	}
	function le(e, t) {
		return ([, r, n], { theme: o }) => {
			let i = t(n, o) ?? (n === "none" ? "0" : "");
			if (i !== "")
				return r
					? {
							[`--un-${r}${e}`]: `${e}(${i})`,
							"-webkit-backdrop-filter": Mr,
							"backdrop-filter": Mr,
					  }
					: { [`--un-${e}`]: `${e}(${i})`, filter: Pr };
		};
	}
	function Wl([, e], { theme: t }) {
		let r = t.dropShadow?.[e || "DEFAULT"];
		if (r != null)
			return {
				"--un-drop-shadow": `drop-shadow(${je(r, "--un-drop-shadow-color").join(
					") drop-shadow("
				)})`,
				filter: Pr,
			};
		if (((r = l.bracket.cssvar(e)), r != null))
			return { "--un-drop-shadow": `drop-shadow(${r})`, filter: Pr };
	}
	var ys = [
		[
			/^(?:(backdrop-)|filter-)?blur(?:-(.+))?$/,
			le("blur", (e, t) => t.blur?.[e || "DEFAULT"] || l.bracket.cssvar.px(e)),
			{
				custom: ce,
				autocomplete: [
					"(backdrop|filter)-blur-$blur",
					"blur-$blur",
					"filter-blur",
				],
			},
		],
		[
			/^(?:(backdrop-)|filter-)?brightness-(.+)$/,
			le("brightness", (e) => l.bracket.cssvar.percent(e)),
			{
				custom: ce,
				autocomplete: [
					"(backdrop|filter)-brightness-<percent>",
					"brightness-<percent>",
				],
			},
		],
		[
			/^(?:(backdrop-)|filter-)?contrast-(.+)$/,
			le("contrast", (e) => l.bracket.cssvar.percent(e)),
			{
				custom: ce,
				autocomplete: [
					"(backdrop|filter)-contrast-<percent>",
					"contrast-<percent>",
				],
			},
		],
		[
			/^(?:filter-)?drop-shadow(?:-(.+))?$/,
			Wl,
			{
				custom: hs,
				autocomplete: [
					"filter-drop",
					"filter-drop-shadow",
					"filter-drop-shadow-color",
					"drop-shadow",
					"drop-shadow-color",
					"filter-drop-shadow-$dropShadow",
					"drop-shadow-$dropShadow",
					"filter-drop-shadow-color-$colors",
					"drop-shadow-color-$colors",
					"filter-drop-shadow-color-(op|opacity)",
					"drop-shadow-color-(op|opacity)",
					"filter-drop-shadow-color-(op|opacity)-<percent>",
					"drop-shadow-color-(op|opacity)-<percent>",
				],
			},
		],
		[
			/^(?:filter-)?drop-shadow-color-(.+)$/,
			O("--un-drop-shadow-color", "drop-shadow", "shadowColor"),
		],
		[
			/^(?:filter-)?drop-shadow-color-op(?:acity)?-?(.+)$/,
			([, e]) => ({ "--un-drop-shadow-opacity": l.bracket.percent(e) }),
		],
		[
			/^(?:(backdrop-)|filter-)?grayscale(?:-(.+))?$/,
			le("grayscale", vn),
			{
				custom: ce,
				autocomplete: [
					"(backdrop|filter)-grayscale",
					"(backdrop|filter)-grayscale-<percent>",
					"grayscale-<percent>",
				],
			},
		],
		[
			/^(?:(backdrop-)|filter-)?hue-rotate-(.+)$/,
			le("hue-rotate", (e) => l.bracket.cssvar.degree(e)),
			{ custom: ce },
		],
		[
			/^(?:(backdrop-)|filter-)?invert(?:-(.+))?$/,
			le("invert", vn),
			{
				custom: ce,
				autocomplete: [
					"(backdrop|filter)-invert",
					"(backdrop|filter)-invert-<percent>",
					"invert-<percent>",
				],
			},
		],
		[
			/^(backdrop-)op(?:acity)?-(.+)$/,
			le("opacity", (e) => l.bracket.cssvar.percent(e)),
			{
				custom: ce,
				autocomplete: [
					"backdrop-(op|opacity)",
					"backdrop-(op|opacity)-<percent>",
				],
			},
		],
		[
			/^(?:(backdrop-)|filter-)?saturate-(.+)$/,
			le("saturate", (e) => l.bracket.cssvar.percent(e)),
			{
				custom: ce,
				autocomplete: [
					"(backdrop|filter)-saturate",
					"(backdrop|filter)-saturate-<percent>",
					"saturate-<percent>",
				],
			},
		],
		[
			/^(?:(backdrop-)|filter-)?sepia(?:-(.+))?$/,
			le("sepia", vn),
			{
				custom: ce,
				autocomplete: [
					"(backdrop|filter)-sepia",
					"(backdrop|filter)-sepia-<percent>",
					"sepia-<percent>",
				],
			},
		],
		["filter", { filter: Pr }, { custom: hs }],
		[
			"backdrop-filter",
			{ "-webkit-backdrop-filter": Mr, "backdrop-filter": Mr },
			{ custom: Ul },
		],
		["filter-none", { filter: "none" }],
		[
			"backdrop-filter-none",
			{ "-webkit-backdrop-filter": "none", "backdrop-filter": "none" },
		],
		...k.map((e) => [`filter-${e}`, { filter: e }]),
		...k.map((e) => [
			`backdrop-filter-${e}`,
			{ "-webkit-backdrop-filter": e, "backdrop-filter": e },
		]),
	];
	var vs = [
		[
			/^line-clamp-(\d+)$/,
			([, e]) => ({
				overflow: "hidden",
				display: "-webkit-box",
				"-webkit-box-orient": "vertical",
				"-webkit-line-clamp": e,
				"line-clamp": e,
			}),
			{ autocomplete: ["line-clamp", "line-clamp-<num>"] },
		],
		...["none", ...k].map((e) => [
			`line-clamp-${e}`,
			{
				overflow: "visible",
				display: "block",
				"-webkit-box-orient": "horizontal",
				"-webkit-line-clamp": e,
				"line-clamp": e,
			},
		]),
	];
	var ws = [
		[
			/^\$ placeholder-(.+)$/,
			O("color", "placeholder", "accentColor"),
			{ autocomplete: "placeholder-$colors" },
		],
		[
			/^\$ placeholder-op(?:acity)?-?(.+)$/,
			([, e]) => ({ "--un-placeholder-opacity": l.bracket.percent(e) }),
			{
				autocomplete: [
					"placeholder-(op|opacity)",
					"placeholder-(op|opacity)-<percent>",
				],
			},
		],
	];
	var $n = { "--un-scroll-snap-strictness": "proximity" },
		ks = { preflightKeys: Object.keys($n) },
		$s = [
			[
				/^snap-(x|y)$/,
				([, e]) => ({
					"scroll-snap-type": `${e} var(--un-scroll-snap-strictness)`,
				}),
				{ custom: ks, autocomplete: "snap-(x|y|both)" },
			],
			[
				/^snap-both$/,
				() => ({ "scroll-snap-type": "both var(--un-scroll-snap-strictness)" }),
				{ custom: ks },
			],
			["snap-mandatory", { "--un-scroll-snap-strictness": "mandatory" }],
			["snap-proximity", { "--un-scroll-snap-strictness": "proximity" }],
			["snap-none", { "scroll-snap-type": "none" }],
			["snap-start", { "scroll-snap-align": "start" }],
			["snap-end", { "scroll-snap-align": "end" }],
			["snap-center", { "scroll-snap-align": "center" }],
			["snap-align-none", { "scroll-snap-align": "none" }],
			["snap-normal", { "scroll-snap-stop": "normal" }],
			["snap-always", { "scroll-snap-stop": "always" }],
			[
				/^scroll-ma?()-?(.+)$/,
				F("scroll-margin"),
				{
					autocomplete: [
						"scroll-(m|p|ma|pa|block|inline)",
						"scroll-(m|p|ma|pa|block|inline)-$spacing",
						"scroll-(m|p|ma|pa|block|inline)-(x|y|r|l|t|b|bs|be|is|ie)",
						"scroll-(m|p|ma|pa|block|inline)-(x|y|r|l|t|b|bs|be|is|ie)-$spacing",
					],
				},
			],
			[/^scroll-m-?([xy])-?(.+)$/, F("scroll-margin")],
			[/^scroll-m-?([rltb])-?(.+)$/, F("scroll-margin")],
			[/^scroll-m-(block|inline)-(.+)$/, F("scroll-margin")],
			[/^scroll-m-?([bi][se])-?(.+)$/, F("scroll-margin")],
			[/^scroll-pa?()-?(.+)$/, F("scroll-padding")],
			[/^scroll-p-?([xy])-?(.+)$/, F("scroll-padding")],
			[/^scroll-p-?([rltb])-?(.+)$/, F("scroll-padding")],
			[/^scroll-p-(block|inline)-(.+)$/, F("scroll-padding")],
			[/^scroll-p-?([bi][se])-?(.+)$/, F("scroll-padding")],
		];
	var Cs = [
		[
			/^space-([xy])-(.+)$/,
			Ss,
			{
				autocomplete: [
					"space-(x|y|block|inline)",
					"space-(x|y|block|inline)-reverse",
					"space-(x|y|block|inline)-$spacing",
				],
			},
		],
		[/^space-([xy])-reverse$/, ([, e]) => ({ [`--un-space-${e}-reverse`]: 1 })],
		[/^space-(block|inline)-(.+)$/, Ss],
		[
			/^space-(block|inline)-reverse$/,
			([, e]) => ({ [`--un-space-${e}-reverse`]: 1 }),
		],
	];
	function Ss([, e, t], { theme: r }) {
		let n =
			r.spacing?.[t || "DEFAULT"] ??
			l.bracket.cssvar.auto.fraction.rem(t || "1");
		if (n != null) {
			n === "0" && (n = "0px");
			let o = N[e].map((i) => {
				let s = `margin${i}`,
					a =
						i.endsWith("right") || i.endsWith("bottom")
							? `calc(${n} * var(--un-space-${e}-reverse))`
							: `calc(${n} * calc(1 - var(--un-space-${e}-reverse)))`;
				return [s, a];
			});
			if (o) return [[`--un-space-${e}-reverse`, 0], ...o];
		}
	}
	var Rs = [
			["uppercase", { "text-transform": "uppercase" }],
			["lowercase", { "text-transform": "lowercase" }],
			["capitalize", { "text-transform": "capitalize" }],
			["normal-case", { "text-transform": "none" }],
		],
		Es = [
			...["manual", "auto", "none", ...k].map((e) => [
				`hyphens-${e}`,
				{ "-webkit-hyphens": e, "-ms-hyphens": e, hyphens: e },
			]),
		],
		Ts = [
			["write-vertical-right", { "writing-mode": "vertical-rl" }],
			["write-vertical-left", { "writing-mode": "vertical-lr" }],
			["write-normal", { "writing-mode": "horizontal-tb" }],
			...y("write", "writing-mode"),
		],
		js = [
			["write-orient-mixed", { "text-orientation": "mixed" }],
			["write-orient-sideways", { "text-orientation": "sideways" }],
			["write-orient-upright", { "text-orientation": "upright" }],
			...y("write-orient", "text-orientation"),
		],
		zs = [
			[
				"sr-only",
				{
					position: "absolute",
					width: "1px",
					height: "1px",
					padding: "0",
					margin: "-1px",
					overflow: "hidden",
					clip: "rect(0,0,0,0)",
					"white-space": "nowrap",
					"border-width": 0,
				},
			],
			[
				"not-sr-only",
				{
					position: "static",
					width: "auto",
					height: "auto",
					padding: "0",
					margin: "0",
					overflow: "visible",
					clip: "auto",
					"white-space": "normal",
				},
			],
		],
		Os = [
			["isolate", { isolation: "isolate" }],
			["isolate-auto", { isolation: "auto" }],
			["isolation-auto", { isolation: "auto" }],
		],
		As = [
			["object-cover", { "object-fit": "cover" }],
			["object-contain", { "object-fit": "contain" }],
			["object-fill", { "object-fit": "fill" }],
			["object-scale-down", { "object-fit": "scale-down" }],
			["object-none", { "object-fit": "none" }],
			[
				/^object-(.+)$/,
				([, e]) => {
					if (B[e]) return { "object-position": B[e] };
					if (l.bracketOfPosition(e) != null)
						return {
							"object-position": l
								.bracketOfPosition(e)
								.split(" ")
								.map((t) => l.position.fraction.auto.px.cssvar(t) ?? t)
								.join(" "),
						};
				},
				{ autocomplete: `object-(${Object.keys(B).join("|")})` },
			],
		],
		Vs = [
			["bg-blend-multiply", { "background-blend-mode": "multiply" }],
			["bg-blend-screen", { "background-blend-mode": "screen" }],
			["bg-blend-overlay", { "background-blend-mode": "overlay" }],
			["bg-blend-darken", { "background-blend-mode": "darken" }],
			["bg-blend-lighten", { "background-blend-mode": "lighten" }],
			["bg-blend-color-dodge", { "background-blend-mode": "color-dodge" }],
			["bg-blend-color-burn", { "background-blend-mode": "color-burn" }],
			["bg-blend-hard-light", { "background-blend-mode": "hard-light" }],
			["bg-blend-soft-light", { "background-blend-mode": "soft-light" }],
			["bg-blend-difference", { "background-blend-mode": "difference" }],
			["bg-blend-exclusion", { "background-blend-mode": "exclusion" }],
			["bg-blend-hue", { "background-blend-mode": "hue" }],
			["bg-blend-saturation", { "background-blend-mode": "saturation" }],
			["bg-blend-color", { "background-blend-mode": "color" }],
			["bg-blend-luminosity", { "background-blend-mode": "luminosity" }],
			["bg-blend-normal", { "background-blend-mode": "normal" }],
			...y("bg-blend", "background-blend"),
		],
		Ps = [
			["mix-blend-multiply", { "mix-blend-mode": "multiply" }],
			["mix-blend-screen", { "mix-blend-mode": "screen" }],
			["mix-blend-overlay", { "mix-blend-mode": "overlay" }],
			["mix-blend-darken", { "mix-blend-mode": "darken" }],
			["mix-blend-lighten", { "mix-blend-mode": "lighten" }],
			["mix-blend-color-dodge", { "mix-blend-mode": "color-dodge" }],
			["mix-blend-color-burn", { "mix-blend-mode": "color-burn" }],
			["mix-blend-hard-light", { "mix-blend-mode": "hard-light" }],
			["mix-blend-soft-light", { "mix-blend-mode": "soft-light" }],
			["mix-blend-difference", { "mix-blend-mode": "difference" }],
			["mix-blend-exclusion", { "mix-blend-mode": "exclusion" }],
			["mix-blend-hue", { "mix-blend-mode": "hue" }],
			["mix-blend-saturation", { "mix-blend-mode": "saturation" }],
			["mix-blend-color", { "mix-blend-mode": "color" }],
			["mix-blend-luminosity", { "mix-blend-mode": "luminosity" }],
			["mix-blend-plus-lighter", { "mix-blend-mode": "plus-lighter" }],
			["mix-blend-normal", { "mix-blend-mode": "normal" }],
			...y("mix-blend"),
		],
		Ms = [
			["min-h-dvh", { "min-height": "100dvh" }],
			["min-h-svh", { "min-height": "100svh" }],
			["min-h-lvh", { "min-height": "100lvh" }],
			["h-dvh", { height: "100dvh" }],
			["h-svh", { height: "100svh" }],
			["h-lvh", { height: "100lvh" }],
			["max-h-dvh", { "max-height": "100dvh" }],
			["max-h-svh", { "max-height": "100svh" }],
			["max-h-lvh", { "max-height": "100lvh" }],
		];
	var Sn = { "--un-border-spacing-x": 0, "--un-border-spacing-y": 0 },
		_s = { preflightKeys: Object.keys(Sn) },
		Fs = "var(--un-border-spacing-x) var(--un-border-spacing-y)",
		Ls = [
			["inline-table", { display: "inline-table" }],
			["table", { display: "table" }],
			["table-caption", { display: "table-caption" }],
			["table-cell", { display: "table-cell" }],
			["table-column", { display: "table-column" }],
			["table-column-group", { display: "table-column-group" }],
			["table-footer-group", { display: "table-footer-group" }],
			["table-header-group", { display: "table-header-group" }],
			["table-row", { display: "table-row" }],
			["table-row-group", { display: "table-row-group" }],
			["border-collapse", { "border-collapse": "collapse" }],
			["border-separate", { "border-collapse": "separate" }],
			[
				/^border-spacing-(.+)$/,
				([, e], { theme: t }) => {
					let r =
						t.spacing?.[e] ?? l.bracket.cssvar.global.auto.fraction.rem(e);
					if (r != null)
						return {
							"--un-border-spacing-x": r,
							"--un-border-spacing-y": r,
							"border-spacing": Fs,
						};
				},
				{
					custom: _s,
					autocomplete: ["border-spacing", "border-spacing-$spacing"],
				},
			],
			[
				/^border-spacing-([xy])-(.+)$/,
				([, e, t], { theme: r }) => {
					let n =
						r.spacing?.[t] ?? l.bracket.cssvar.global.auto.fraction.rem(t);
					if (n != null)
						return { [`--un-border-spacing-${e}`]: n, "border-spacing": Fs };
				},
				{
					custom: _s,
					autocomplete: [
						"border-spacing-(x|y)",
						"border-spacing-(x|y)-$spacing",
					],
				},
			],
			["caption-top", { "caption-side": "top" }],
			["caption-bottom", { "caption-side": "bottom" }],
			["table-auto", { "table-layout": "auto" }],
			["table-fixed", { "table-layout": "fixed" }],
			["table-empty-cells-visible", { "empty-cells": "show" }],
			["table-empty-cells-hidden", { "empty-cells": "hide" }],
		];
	var En = { "--un-pan-x": E, "--un-pan-y": E, "--un-pinch-zoom": E },
		Cn = { preflightKeys: Object.keys(En) },
		Rn = "var(--un-pan-x) var(--un-pan-y) var(--un-pinch-zoom)",
		Us = [
			[
				/^touch-pan-(x|left|right)$/,
				([, e]) => ({ "--un-pan-x": `pan-${e}`, "touch-action": Rn }),
				{
					custom: Cn,
					autocomplete: ["touch-pan", "touch-pan-(x|left|right|y|up|down)"],
				},
			],
			[
				/^touch-pan-(y|up|down)$/,
				([, e]) => ({ "--un-pan-y": `pan-${e}`, "touch-action": Rn }),
				{ custom: Cn },
			],
			[
				"touch-pinch-zoom",
				{ "--un-pinch-zoom": "pinch-zoom", "touch-action": Rn },
				{ custom: Cn },
			],
			["touch-auto", { "touch-action": "auto" }],
			["touch-manipulation", { "touch-action": "manipulation" }],
			["touch-none", { "touch-action": "none" }],
			...y("touch", "touch-action"),
		];
	var Tn = {
			"--un-ordinal": E,
			"--un-slashed-zero": E,
			"--un-numeric-figure": E,
			"--un-numeric-spacing": E,
			"--un-numeric-fraction": E,
		},
		ge = { preflightKeys: Object.keys(Tn) };
	function he(e) {
		return {
			...e,
			"font-variant-numeric":
				"var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)",
		};
	}
	var Ws = [
		[
			/^ordinal$/,
			() => he({ "--un-ordinal": "ordinal" }),
			{ custom: ge, autocomplete: "ordinal" },
		],
		[
			/^slashed-zero$/,
			() => he({ "--un-slashed-zero": "slashed-zero" }),
			{ custom: ge, autocomplete: "slashed-zero" },
		],
		[
			/^lining-nums$/,
			() => he({ "--un-numeric-figure": "lining-nums" }),
			{ custom: ge, autocomplete: "lining-nums" },
		],
		[
			/^oldstyle-nums$/,
			() => he({ "--un-numeric-figure": "oldstyle-nums" }),
			{ custom: ge, autocomplete: "oldstyle-nums" },
		],
		[
			/^proportional-nums$/,
			() => he({ "--un-numeric-spacing": "proportional-nums" }),
			{ custom: ge, autocomplete: "proportional-nums" },
		],
		[
			/^tabular-nums$/,
			() => he({ "--un-numeric-spacing": "tabular-nums" }),
			{ custom: ge, autocomplete: "tabular-nums" },
		],
		[
			/^diagonal-fractions$/,
			() => he({ "--un-numeric-fraction": "diagonal-fractions" }),
			{ custom: ge, autocomplete: "diagonal-fractions" },
		],
		[
			/^stacked-fractions$/,
			() => he({ "--un-numeric-fraction": "stacked-fractions" }),
			{ custom: ge, autocomplete: "stacked-fractions" },
		],
		["normal-nums", { "font-variant-numeric": "normal" }],
	];
	var Bl = {
			"bg-blend": "background-blend-mode",
			"bg-clip": "-webkit-background-clip",
			"bg-gradient": "linear-gradient",
			"bg-image": "background-image",
			"bg-origin": "background-origin",
			"bg-position": "background-position",
			"bg-repeat": "background-repeat",
			"bg-size": "background-size",
			"mix-blend": "mix-blend-mode",
			object: "object-fit",
			"object-position": "object-position",
			write: "writing-mode",
			"write-orient": "text-orientation",
		},
		Bs = [
			[
				/^(.+?)-(\$.+)$/,
				([, e, t]) => {
					let r = Bl[e];
					if (r) return { [r]: l.cssvar(t) };
				},
			],
		];
	var Ns = [
		[/^view-transition-([\w-]+)$/, ([, e]) => ({ "view-transition-name": e })],
	];
	var Ds = [
		Tr,
		Bs,
		jr,
		ds,
		Qt,
		zs,
		er,
		Zt,
		Nt,
		Kt,
		vs,
		Os,
		Ht,
		Dt,
		Ut,
		Gt,
		xr,
		qt,
		Xt,
		hr,
		gr,
		Ft,
		Ls,
		wr,
		ns,
		Jt,
		Us,
		rr,
		tr,
		$s,
		ss,
		jt,
		ps,
		Ye,
		qe,
		He,
		Lt,
		It,
		Cs,
		gs,
		Bt,
		us,
		fs,
		cr,
		nr,
		sr,
		Ot,
		Vt,
		is,
		Pt,
		yr,
		As,
		br,
		Ct,
		Cr,
		ar,
		St,
		$r,
		lr,
		Rs,
		ur,
		Ws,
		_t,
		fr,
		Sr,
		Rr,
		Er,
		Es,
		Ts,
		js,
		cs,
		as,
		At,
		Vs,
		Ps,
		dr,
		Tt,
		pr,
		ls,
		ys,
		kr,
		zt,
		or,
		ir,
		ws,
		Mt,
		Ns,
		Ms,
		Yt,
	].flat(1);
	var Is = [...ms];
	var jn = {
		inherit: "inherit",
		current: "currentColor",
		transparent: "transparent",
		black: "#000",
		white: "#fff",
		rose: {
			50: "#fff1f2",
			100: "#ffe4e6",
			200: "#fecdd3",
			300: "#fda4af",
			400: "#fb7185",
			500: "#f43f5e",
			600: "#e11d48",
			700: "#be123c",
			800: "#9f1239",
			900: "#881337",
			950: "#4c0519",
		},
		pink: {
			50: "#fdf2f8",
			100: "#fce7f3",
			200: "#fbcfe8",
			300: "#f9a8d4",
			400: "#f472b6",
			500: "#ec4899",
			600: "#db2777",
			700: "#be185d",
			800: "#9d174d",
			900: "#831843",
			950: "#500724",
		},
		fuchsia: {
			50: "#fdf4ff",
			100: "#fae8ff",
			200: "#f5d0fe",
			300: "#f0abfc",
			400: "#e879f9",
			500: "#d946ef",
			600: "#c026d3",
			700: "#a21caf",
			800: "#86198f",
			900: "#701a75",
			950: "#4a044e",
		},
		purple: {
			50: "#faf5ff",
			100: "#f3e8ff",
			200: "#e9d5ff",
			300: "#d8b4fe",
			400: "#c084fc",
			500: "#a855f7",
			600: "#9333ea",
			700: "#7e22ce",
			800: "#6b21a8",
			900: "#581c87",
			950: "#3b0764",
		},
		violet: {
			50: "#f5f3ff",
			100: "#ede9fe",
			200: "#ddd6fe",
			300: "#c4b5fd",
			400: "#a78bfa",
			500: "#8b5cf6",
			600: "#7c3aed",
			700: "#6d28d9",
			800: "#5b21b6",
			900: "#4c1d95",
			950: "#2e1065",
		},
		indigo: {
			50: "#eef2ff",
			100: "#e0e7ff",
			200: "#c7d2fe",
			300: "#a5b4fc",
			400: "#818cf8",
			500: "#6366f1",
			600: "#4f46e5",
			700: "#4338ca",
			800: "#3730a3",
			900: "#312e81",
			950: "#1e1b4b",
		},
		blue: {
			50: "#eff6ff",
			100: "#dbeafe",
			200: "#bfdbfe",
			300: "#93c5fd",
			400: "#60a5fa",
			500: "#3b82f6",
			600: "#2563eb",
			700: "#1d4ed8",
			800: "#1e40af",
			900: "#1e3a8a",
			950: "#172554",
		},
		sky: {
			50: "#f0f9ff",
			100: "#e0f2fe",
			200: "#bae6fd",
			300: "#7dd3fc",
			400: "#38bdf8",
			500: "#0ea5e9",
			600: "#0284c7",
			700: "#0369a1",
			800: "#075985",
			900: "#0c4a6e",
			950: "#082f49",
		},
		cyan: {
			50: "#ecfeff",
			100: "#cffafe",
			200: "#a5f3fc",
			300: "#67e8f9",
			400: "#22d3ee",
			500: "#06b6d4",
			600: "#0891b2",
			700: "#0e7490",
			800: "#155e75",
			900: "#164e63",
			950: "#083344",
		},
		teal: {
			50: "#f0fdfa",
			100: "#ccfbf1",
			200: "#99f6e4",
			300: "#5eead4",
			400: "#2dd4bf",
			500: "#14b8a6",
			600: "#0d9488",
			700: "#0f766e",
			800: "#115e59",
			900: "#134e4a",
			950: "#042f2e",
		},
		emerald: {
			50: "#ecfdf5",
			100: "#d1fae5",
			200: "#a7f3d0",
			300: "#6ee7b7",
			400: "#34d399",
			500: "#10b981",
			600: "#059669",
			700: "#047857",
			800: "#065f46",
			900: "#064e3b",
			950: "#022c22",
		},
		green: {
			50: "#f0fdf4",
			100: "#dcfce7",
			200: "#bbf7d0",
			300: "#86efac",
			400: "#4ade80",
			500: "#22c55e",
			600: "#16a34a",
			700: "#15803d",
			800: "#166534",
			900: "#14532d",
			950: "#052e16",
		},
		lime: {
			50: "#f7fee7",
			100: "#ecfccb",
			200: "#d9f99d",
			300: "#bef264",
			400: "#a3e635",
			500: "#84cc16",
			600: "#65a30d",
			700: "#4d7c0f",
			800: "#3f6212",
			900: "#365314",
			950: "#1a2e05",
		},
		yellow: {
			50: "#fefce8",
			100: "#fef9c3",
			200: "#fef08a",
			300: "#fde047",
			400: "#facc15",
			500: "#eab308",
			600: "#ca8a04",
			700: "#a16207",
			800: "#854d0e",
			900: "#713f12",
			950: "#422006",
		},
		amber: {
			50: "#fffbeb",
			100: "#fef3c7",
			200: "#fde68a",
			300: "#fcd34d",
			400: "#fbbf24",
			500: "#f59e0b",
			600: "#d97706",
			700: "#b45309",
			800: "#92400e",
			900: "#78350f",
			950: "#451a03",
		},
		orange: {
			50: "#fff7ed",
			100: "#ffedd5",
			200: "#fed7aa",
			300: "#fdba74",
			400: "#fb923c",
			500: "#f97316",
			600: "#ea580c",
			700: "#c2410c",
			800: "#9a3412",
			900: "#7c2d12",
			950: "#431407",
		},
		red: {
			50: "#fef2f2",
			100: "#fee2e2",
			200: "#fecaca",
			300: "#fca5a5",
			400: "#f87171",
			500: "#ef4444",
			600: "#dc2626",
			700: "#b91c1c",
			800: "#991b1b",
			900: "#7f1d1d",
			950: "#450a0a",
		},
		gray: {
			50: "#f9fafb",
			100: "#f3f4f6",
			200: "#e5e7eb",
			300: "#d1d5db",
			400: "#9ca3af",
			500: "#6b7280",
			600: "#4b5563",
			700: "#374151",
			800: "#1f2937",
			900: "#111827",
			950: "#030712",
		},
		slate: {
			50: "#f8fafc",
			100: "#f1f5f9",
			200: "#e2e8f0",
			300: "#cbd5e1",
			400: "#94a3b8",
			500: "#64748b",
			600: "#475569",
			700: "#334155",
			800: "#1e293b",
			900: "#0f172a",
			950: "#020617",
		},
		zinc: {
			50: "#fafafa",
			100: "#f4f4f5",
			200: "#e4e4e7",
			300: "#d4d4d8",
			400: "#a1a1aa",
			500: "#71717a",
			600: "#52525b",
			700: "#3f3f46",
			800: "#27272a",
			900: "#18181b",
			950: "#09090b",
		},
		neutral: {
			50: "#fafafa",
			100: "#f5f5f5",
			200: "#e5e5e5",
			300: "#d4d4d4",
			400: "#a3a3a3",
			500: "#737373",
			600: "#525252",
			700: "#404040",
			800: "#262626",
			900: "#171717",
			950: "#0a0a0a",
		},
		stone: {
			50: "#fafaf9",
			100: "#f5f5f4",
			200: "#e7e5e4",
			300: "#d6d3d1",
			400: "#a8a29e",
			500: "#78716c",
			600: "#57534e",
			700: "#44403c",
			800: "#292524",
			900: "#1c1917",
			950: "#0c0a09",
		},
		light: {
			50: "#fdfdfd",
			100: "#fcfcfc",
			200: "#fafafa",
			300: "#f8f9fa",
			400: "#f6f6f6",
			500: "#f2f2f2",
			600: "#f1f3f5",
			700: "#e9ecef",
			800: "#dee2e6",
			900: "#dde1e3",
			950: "#d8dcdf",
		},
		dark: {
			50: "#4a4a4a",
			100: "#3c3c3c",
			200: "#323232",
			300: "#2d2d2d",
			400: "#222222",
			500: "#1f1f1f",
			600: "#1c1c1e",
			700: "#1b1b1b",
			800: "#181818",
			900: "#0f0f0f",
			950: "#080808",
		},
		get lightblue() {
			return this.sky;
		},
		get lightBlue() {
			return this.sky;
		},
		get warmgray() {
			return this.stone;
		},
		get warmGray() {
			return this.stone;
		},
		get truegray() {
			return this.neutral;
		},
		get trueGray() {
			return this.neutral;
		},
		get coolgray() {
			return this.gray;
		},
		get coolGray() {
			return this.gray;
		},
		get bluegray() {
			return this.slate;
		},
		get blueGray() {
			return this.slate;
		},
	};
	Object.values(jn).forEach((e) => {
		typeof e != "string" &&
			e !== void 0 &&
			((e.DEFAULT = e.DEFAULT || e[400]),
			Object.keys(e).forEach((t) => {
				let r = +t / 100;
				r === Math.round(r) && (e[r] = e[t]);
			}));
	});
	var Nl = {
			l: ["-left"],
			r: ["-right"],
			t: ["-top"],
			b: ["-bottom"],
			s: ["-inline-start"],
			e: ["-inline-end"],
			x: ["-left", "-right"],
			y: ["-top", "-bottom"],
			"": [""],
			bs: ["-block-start"],
			be: ["-block-end"],
			is: ["-inline-start"],
			ie: ["-inline-end"],
			block: ["-block-start", "-block-end"],
			inline: ["-inline-start", "-inline-end"],
		},
		z0 = {
			...Nl,
			s: ["-inset-inline-start"],
			start: ["-inset-inline-start"],
			e: ["-inset-inline-end"],
			end: ["-inset-inline-end"],
			bs: ["-inset-block-start"],
			be: ["-inset-block-end"],
			is: ["-inset-inline-start"],
			ie: ["-inset-inline-end"],
			block: ["-inset-block-start", "-inset-block-end"],
			inline: ["-inset-inline-start", "-inset-inline-end"],
		};
	var Dl = { x: ["-x"], y: ["-y"], z: ["-z"], "": ["-x", "-y"] },
		Il = ["x", "y", "z"],
		Ks = [
			"top",
			"top center",
			"top left",
			"top right",
			"bottom",
			"bottom center",
			"bottom left",
			"bottom right",
			"left",
			"left center",
			"left top",
			"left bottom",
			"right",
			"right center",
			"right top",
			"right bottom",
			"center",
			"center top",
			"center bottom",
			"center left",
			"center right",
			"center center",
		],
		nt = Object.assign(
			{},
			...Ks.map((e) => ({ [e.replace(/ /, "-")]: e })),
			...Ks.map((e) => ({
				[e.replace(/\b(\w)\w+/g, "$1").replace(/ /, "")]: e,
			}))
		),
		zn = ["inherit", "initial", "revert", "revert-layer", "unset"],
		Kl = /^(calc|clamp|min|max)\s*\((.+)\)(.*)/;
	var On =
			/^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i,
		Hs = /^(-?\d*(?:\.\d+)?)$/,
		qs = /^(px|[sld]?v[wh])$/i,
		Ys = {
			px: 1,
			vw: 100,
			vh: 100,
			svw: 100,
			svh: 100,
			dvw: 100,
			dvh: 100,
			lvh: 100,
			lvw: 100,
		},
		Xs = /^\[(color|image|length|size|position|quoted|string):/i,
		Gl = /,(?![^()]*\))/g,
		Hl = [
			"color",
			"border-color",
			"background-color",
			"outline-color",
			"text-decoration-color",
			"flex-grow",
			"flex",
			"flex-shrink",
			"caret-color",
			"font",
			"gap",
			"opacity",
			"visibility",
			"z-index",
			"font-weight",
			"zoom",
			"text-shadow",
			"transform",
			"box-shadow",
			"border",
			"background-position",
			"left",
			"right",
			"top",
			"bottom",
			"object-position",
			"max-height",
			"min-height",
			"max-width",
			"min-width",
			"height",
			"width",
			"border-width",
			"margin",
			"padding",
			"outline-width",
			"outline-offset",
			"font-size",
			"line-height",
			"text-indent",
			"vertical-align",
			"border-spacing",
			"letter-spacing",
			"word-spacing",
			"stroke",
			"filter",
			"backdrop-filter",
			"fill",
			"mask",
			"mask-size",
			"mask-border",
			"clip-path",
			"clip",
			"border-radius",
		];
	function J(e) {
		return +e.toFixed(10);
	}
	function ql(e) {
		let t = e.match(On);
		if (!t) return;
		let [, r, n] = t,
			o = Number.parseFloat(r);
		if (n && !Number.isNaN(o)) return `${J(o)}${n}`;
	}
	function Yl(e) {
		if (e === "auto" || e === "a") return "auto";
	}
	function Xl(e) {
		if (!e) return;
		if (qs.test(e)) return `${Ys[e]}${e}`;
		let t = e.match(On);
		if (!t) return;
		let [, r, n] = t,
			o = Number.parseFloat(r);
		if (!Number.isNaN(o))
			return o === 0 ? "0" : n ? `${J(o)}${n}` : `${J(o / 4)}rem`;
	}
	function Zl(e) {
		if (qs.test(e)) return `${Ys[e]}${e}`;
		let t = e.match(On);
		if (!t) return;
		let [, r, n] = t,
			o = Number.parseFloat(r);
		if (!Number.isNaN(o)) return n ? `${J(o)}${n}` : `${J(o)}px`;
	}
	function Jl(e) {
		if (!Hs.test(e)) return;
		let t = Number.parseFloat(e);
		if (!Number.isNaN(t)) return J(t);
	}
	function Ql(e) {
		if ((e.endsWith("%") && (e = e.slice(0, -1)), !Hs.test(e))) return;
		let t = Number.parseFloat(e);
		if (!Number.isNaN(t)) return `${J(t / 100)}`;
	}
	function eu(e) {
		if (!e) return;
		if (e === "full") return "100%";
		let [t, r] = e.split("/"),
			n = Number.parseFloat(t) / Number.parseFloat(r);
		if (!Number.isNaN(n)) return n === 0 ? "0" : `${J(n * 100)}%`;
	}
	function Fr(e, t) {
		if (e && e.startsWith("[") && e.endsWith("]")) {
			let r,
				n,
				o = e.match(Xs);
			if (
				(o
					? (t || (n = o[1]), (r = e.slice(o[0].length, -1)))
					: (r = e.slice(1, -1)),
				!r || r === '=""')
			)
				return;
			r.startsWith("--") && (r = `var(${r})`);
			let i = 0;
			for (let s of r)
				if (s === "[") i += 1;
				else if (s === "]" && ((i -= 1), i < 0)) return;
			if (i) return;
			switch (n) {
				case "string":
					return r.replace(/(^|[^\\])_/g, "$1 ").replace(/\\_/g, "_");
				case "quoted":
					return r
						.replace(/(^|[^\\])_/g, "$1 ")
						.replace(/\\_/g, "_")
						.replace(/(["\\])/g, "\\$1")
						.replace(/^(.+)$/, '"$1"');
			}
			return r
				.replace(/(url\(.*?\))/g, (s) => s.replace(/_/g, "\\_"))
				.replace(/(^|[^\\])_/g, "$1 ")
				.replace(/\\_/g, "_")
				.replace(/(?:calc|clamp|max|min)\((.*)/g, (s) => {
					let a = [];
					return s
						.replace(
							/var\((--.+?)[,)]/g,
							(c, u) => (a.push(u), c.replace(u, "--un-calc"))
						)
						.replace(
							/(-?\d*\.?\d(?!-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,
							"$1 $2 "
						)
						.replace(/--un-calc/g, () => a.shift());
				});
		}
	}
	function tu(e) {
		return Fr(e);
	}
	function ru(e) {
		return Fr(e, "color");
	}
	function nu(e) {
		return Fr(e, "length");
	}
	function ou(e) {
		return Fr(e, "position");
	}
	function iu(e) {
		if (/^\$[^\s'"`;{}]/.test(e)) {
			let [t, r] = e.slice(1).split(",");
			return `var(--${se(t)}${r ? `, ${r}` : ""})`;
		}
	}
	function su(e) {
		let t = e.match(/^(-?[0-9.]+)(s|ms)?$/i);
		if (!t) return;
		let [, r, n] = t,
			o = Number.parseFloat(r);
		if (!Number.isNaN(o))
			return o === 0 && !n ? "0s" : n ? `${J(o)}${n}` : `${J(o)}ms`;
	}
	function au(e) {
		let t = e.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);
		if (!t) return;
		let [, r, n] = t,
			o = Number.parseFloat(r);
		if (!Number.isNaN(o))
			return o === 0 ? "0" : n ? `${J(o)}${n}` : `${J(o)}deg`;
	}
	function cu(e) {
		if (zn.includes(e)) return e;
	}
	function lu(e) {
		if (e.split(",").every((t) => Hl.includes(t))) return e;
	}
	function uu(e) {
		if (["top", "left", "right", "bottom", "center"].includes(e)) return e;
	}
	var fu = {
			__proto__: null,
			auto: Yl,
			bracket: tu,
			bracketOfColor: ru,
			bracketOfLength: nu,
			bracketOfPosition: ou,
			cssvar: iu,
			degree: au,
			fraction: eu,
			global: cu,
			number: Jl,
			numberWithUnit: ql,
			percent: Ql,
			position: uu,
			properties: lu,
			px: Zl,
			rem: Xl,
			time: su,
		},
		pu = bt(fu),
		U = pu;
	function Gs(e, t, r = "colors") {
		let n = e[r],
			o = -1;
		for (let i of t) {
			if (((o += 1), n && typeof n != "string")) {
				let s = t
					.slice(o)
					.join("-")
					.replace(/(-[a-z])/g, (a) => a.slice(1).toUpperCase());
				if (n[s]) return n[s];
				if (n[i]) {
					n = n[i];
					continue;
				}
			}
			return;
		}
		return n;
	}
	function _r(e, t, r) {
		return Gs(e, t, r) || Gs(e, t, "colors");
	}
	function du(e, t) {
		let [r, n] = de(e, "[", "]", ["/", ":"]) ?? [];
		if (r != null) {
			let o = (r.match(Xs) ?? [])[1];
			if (o == null || o === t) return [r, n];
		}
	}
	function mu(e, t, r) {
		let n = du(e, "color");
		if (!n) return;
		let [o, i] = n,
			s = o.replace(/([a-z])(\d)/g, "$1-$2").split(/-/g),
			[a] = s;
		if (!a) return;
		let c,
			u = U.bracketOfColor(o),
			f = u || o;
		if (U.numberWithUnit(f)) return;
		if (
			(/^#[\da-f]+$/i.test(f)
				? (c = f)
				: /^hex-[\da-fA-F]+$/.test(f)
				? (c = `#${f.slice(4)}`)
				: o.startsWith("$") && (c = U.cssvar(o)),
			(c = c || u),
			!c)
		) {
			let d = _r(t, [o], r);
			typeof d == "string" && (c = d);
		}
		let p = "DEFAULT";
		if (!c) {
			let d,
				[m] = s.slice(-1);
			/^\d+$/.test(m)
				? ((p = m),
				  (d = _r(t, s.slice(0, -1), r)),
				  !d || typeof d == "string" ? (c = void 0) : (c = d[p]))
				: ((d = _r(t, s, r)),
				  !d && s.length <= 2 && (([, p = p] = s), (d = _r(t, [a], r))),
				  typeof d == "string" ? (c = d) : p && d && (c = d[p]));
		}
		return {
			opacity: i,
			name: a,
			no: p,
			color: c,
			cssColor: Y(c),
			alpha: U.bracket.cssvar.percent(i ?? ""),
		};
	}
	function An(e, t, r, n) {
		return ([, o], { theme: i, generator: s }) => {
			let a = mu(o, i, r);
			if (!a) return;
			let { alpha: c, color: u, cssColor: f } = a,
				d = s.config.envMode === "dev" && u ? ` /* ${u} */` : "",
				m = {};
			if (f)
				if (c != null) m[e] = M(f, c) + d;
				else {
					let b = `--un-${t}-opacity`,
						x = M(f, `var(${b})`);
					x.includes(b) && (m[b] = ae(f)), (m[e] = x + d);
				}
			else if (u)
				if (c != null) m[e] = M(u, c) + d;
				else {
					let b = `--un-${t}-opacity`,
						x = M(u, `var(${b})`);
					x.includes(b) && (m[b] = 1), (m[e] = x + d);
				}
			if (n?.(m) !== !1) return m;
		};
	}
	function be(e, t) {
		return zn.map((r) => [`${e}-${r}`, { [t ?? e]: r }]);
	}
	function Zs(e) {
		return e != null && Kl.test(e);
	}
	function Lr(e, t, r) {
		let n = t.split(Gl);
		return e || (!e && n.length === 1)
			? Dl[e].map((o) => [`--un-${r}${o}`, t])
			: n.map((o, i) => [`--un-${r}-${Il[i]}`, o]);
	}
	var gu = [
		"auto",
		"default",
		"none",
		"context-menu",
		"help",
		"pointer",
		"progress",
		"wait",
		"cell",
		"crosshair",
		"text",
		"vertical-text",
		"alias",
		"copy",
		"move",
		"no-drop",
		"not-allowed",
		"grab",
		"grabbing",
		"all-scroll",
		"col-resize",
		"row-resize",
		"n-resize",
		"e-resize",
		"s-resize",
		"w-resize",
		"ne-resize",
		"nw-resize",
		"se-resize",
		"sw-resize",
		"ew-resize",
		"ns-resize",
		"nesw-resize",
		"nwse-resize",
		"zoom-in",
		"zoom-out",
	];
	var ra = " ";
	var M0 = [
			["visible", { visibility: "visible" }],
			["invisible", { visibility: "hidden" }],
			["backface-visible", { "backface-visibility": "visible" }],
			["backface-hidden", { "backface-visibility": "hidden" }],
			...be("backface", "backface-visibility"),
		],
		_0 = [
			[/^cursor-(.+)$/, ([, e]) => ({ cursor: U.bracket.cssvar.global(e) })],
			...gu.map((e) => [`cursor-${e}`, { cursor: e }]),
		];
	var F0 = [
			["pointer-events-auto", { "pointer-events": "auto" }],
			["pointer-events-none", { "pointer-events": "none" }],
			...be("pointer-events"),
		],
		L0 = [
			["resize-x", { resize: "horizontal" }],
			["resize-y", { resize: "vertical" }],
			["resize", { resize: "both" }],
			["resize-none", { resize: "none" }],
			...be("resize"),
		],
		U0 = [
			["select-auto", { "-webkit-user-select": "auto", "user-select": "auto" }],
			["select-all", { "-webkit-user-select": "all", "user-select": "all" }],
			["select-text", { "-webkit-user-select": "text", "user-select": "text" }],
			["select-none", { "-webkit-user-select": "none", "user-select": "none" }],
			...be("select", "user-select"),
		];
	var W0 = [
		[
			/^intrinsic-size-(.+)$/,
			([, e]) => ({
				"contain-intrinsic-size": U.bracket.cssvar.global.fraction.rem(e),
			}),
			{ autocomplete: "intrinsic-size-<num>" },
		],
		["content-visibility-visible", { "content-visibility": "visible" }],
		["content-visibility-hidden", { "content-visibility": "hidden" }],
		["content-visibility-auto", { "content-visibility": "auto" }],
		...be("content-visibility"),
	];
	var B0 = [
		["case-upper", { "text-transform": "uppercase" }],
		["case-lower", { "text-transform": "lowercase" }],
		["case-capital", { "text-transform": "capitalize" }],
		["case-normal", { "text-transform": "none" }],
		...be("case", "text-transform"),
	];
	var Vn = {
			"--un-ring-inset": ra,
			"--un-ring-offset-width": "0px",
			"--un-ring-offset-color": "#fff",
			"--un-ring-width": "0px",
			"--un-ring-color": "rgb(147 197 253 / 0.5)",
			"--un-shadow": "0 0 rgb(0 0 0 / 0)",
		},
		hu = Object.keys(Vn),
		N0 = [
			[
				/^ring(?:-(.+))?$/,
				([, e], { theme: t }) => {
					let r = t.ringWidth?.[e || "DEFAULT"] ?? U.px(e || "1");
					if (r)
						return {
							"--un-ring-width": r,
							"--un-ring-offset-shadow":
								"var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)",
							"--un-ring-shadow":
								"var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color)",
							"box-shadow":
								"var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)",
						};
				},
				{ custom: { preflightKeys: hu }, autocomplete: "ring-$ringWidth" },
			],
			[
				/^ring-(?:width-|size-)(.+)$/,
				na,
				{ autocomplete: "ring-(width|size)-$lineWidth" },
			],
			["ring-offset", { "--un-ring-offset-width": "1px" }],
			[
				/^ring-offset-(?:width-|size-)?(.+)$/,
				([, e], { theme: t }) => ({
					"--un-ring-offset-width": t.lineWidth?.[e] ?? U.bracket.cssvar.px(e),
				}),
				{ autocomplete: "ring-offset-(width|size)-$lineWidth" },
			],
			[/^ring-(.+)$/, bu, { autocomplete: "ring-$colors" }],
			[
				/^ring-op(?:acity)?-?(.+)$/,
				([, e]) => ({ "--un-ring-opacity": U.bracket.percent.cssvar(e) }),
				{ autocomplete: "ring-(op|opacity)-<percent>" },
			],
			[
				/^ring-offset-(.+)$/,
				An("--un-ring-offset-color", "ring-offset", "borderColor"),
				{ autocomplete: "ring-offset-$colors" },
			],
			[
				/^ring-offset-op(?:acity)?-?(.+)$/,
				([, e]) => ({
					"--un-ring-offset-opacity": U.bracket.percent.cssvar(e),
				}),
				{ autocomplete: "ring-offset-(op|opacity)-<percent>" },
			],
			["ring-inset", { "--un-ring-inset": "inset" }],
		];
	function na([, e], { theme: t }) {
		return { "--un-ring-width": t.ringWidth?.[e] ?? U.bracket.cssvar.px(e) };
	}
	function bu(e, t) {
		return Zs(U.bracket(e[1]))
			? na(e, t)
			: An("--un-ring-color", "ring", "borderColor")(e, t);
	}
	var Pn = {
			"--un-ring-offset-shadow": "0 0 rgb(0 0 0 / 0)",
			"--un-ring-shadow": "0 0 rgb(0 0 0 / 0)",
			"--un-shadow-inset": ra,
			"--un-shadow": "0 0 rgb(0 0 0 / 0)",
		},
		D0 = Object.keys(Pn);
	var Ur = ["translate", "rotate", "scale"],
		xu = [
			"translateX(var(--un-translate-x))",
			"translateY(var(--un-translate-y))",
			"rotate(var(--un-rotate))",
			"rotateZ(var(--un-rotate-z))",
			"skewX(var(--un-skew-x))",
			"skewY(var(--un-skew-y))",
			"scaleX(var(--un-scale-x))",
			"scaleY(var(--un-scale-y))",
		].join(" "),
		Pe = [
			"translateX(var(--un-translate-x))",
			"translateY(var(--un-translate-y))",
			"translateZ(var(--un-translate-z))",
			"rotate(var(--un-rotate))",
			"rotateX(var(--un-rotate-x))",
			"rotateY(var(--un-rotate-y))",
			"rotateZ(var(--un-rotate-z))",
			"skewX(var(--un-skew-x))",
			"skewY(var(--un-skew-y))",
			"scaleX(var(--un-scale-x))",
			"scaleY(var(--un-scale-y))",
			"scaleZ(var(--un-scale-z))",
		].join(" "),
		yu = [
			"translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z))",
			"rotate(var(--un-rotate))",
			"rotateX(var(--un-rotate-x))",
			"rotateY(var(--un-rotate-y))",
			"rotateZ(var(--un-rotate-z))",
			"skewX(var(--un-skew-x))",
			"skewY(var(--un-skew-y))",
			"scaleX(var(--un-scale-x))",
			"scaleY(var(--un-scale-y))",
			"scaleZ(var(--un-scale-z))",
		].join(" "),
		Mn = {
			"--un-rotate": 0,
			"--un-rotate-x": 0,
			"--un-rotate-y": 0,
			"--un-rotate-z": 0,
			"--un-scale-x": 1,
			"--un-scale-y": 1,
			"--un-scale-z": 1,
			"--un-skew-x": 0,
			"--un-skew-y": 0,
			"--un-translate-x": 0,
			"--un-translate-y": 0,
			"--un-translate-z": 0,
		},
		ie = Object.keys(Mn),
		I0 = [
			[
				/^(?:transform-)?origin-(.+)$/,
				([, e]) => ({ "transform-origin": nt[e] ?? U.bracket.cssvar(e) }),
				{
					autocomplete: [
						`transform-origin-(${Object.keys(nt).join("|")})`,
						`origin-(${Object.keys(nt).join("|")})`,
					],
				},
			],
			[
				/^(?:transform-)?perspect(?:ive)?-(.+)$/,
				([, e]) => {
					let t = U.bracket.cssvar.px.numberWithUnit(e);
					if (t != null) return { "-webkit-perspective": t, perspective: t };
				},
			],
			[
				/^(?:transform-)?perspect(?:ive)?-origin-(.+)$/,
				([, e]) => {
					let t = U.bracket.cssvar(e) ?? (e.length >= 3 ? nt[e] : void 0);
					if (t != null)
						return { "-webkit-perspective-origin": t, "perspective-origin": t };
				},
			],
			[
				/^(?:transform-)?translate-()(.+)$/,
				Js,
				{ custom: { preflightKeys: ie } },
			],
			[
				/^(?:transform-)?translate-([xyz])-(.+)$/,
				Js,
				{ custom: { preflightKeys: ie } },
			],
			[/^(?:transform-)?rotate-()(.+)$/, ea, { custom: { preflightKeys: ie } }],
			[
				/^(?:transform-)?rotate-([xyz])-(.+)$/,
				ea,
				{ custom: { preflightKeys: ie } },
			],
			[/^(?:transform-)?skew-()(.+)$/, ta, { custom: { preflightKeys: ie } }],
			[
				/^(?:transform-)?skew-([xy])-(.+)$/,
				ta,
				{
					custom: { preflightKeys: ie },
					autocomplete: [
						"transform-skew-(x|y)-<percent>",
						"skew-(x|y)-<percent>",
					],
				},
			],
			[/^(?:transform-)?scale-()(.+)$/, Qs, { custom: { preflightKeys: ie } }],
			[
				/^(?:transform-)?scale-([xyz])-(.+)$/,
				Qs,
				{
					custom: { preflightKeys: ie },
					autocomplete: [
						`transform-(${Ur.join("|")})-<percent>`,
						`transform-(${Ur.join("|")})-(x|y|z)-<percent>`,
						`(${Ur.join("|")})-<percent>`,
						`(${Ur.join("|")})-(x|y|z)-<percent>`,
					],
				},
			],
			[
				/^(?:transform-)?preserve-3d$/,
				() => ({ "transform-style": "preserve-3d" }),
			],
			[/^(?:transform-)?preserve-flat$/, () => ({ "transform-style": "flat" })],
			["transform", { transform: Pe }, { custom: { preflightKeys: ie } }],
			[
				"transform-cpu",
				{ transform: xu },
				{
					custom: {
						preflightKeys: [
							"--un-translate-x",
							"--un-translate-y",
							"--un-rotate",
							"--un-rotate-z",
							"--un-skew-x",
							"--un-skew-y",
							"--un-scale-x",
							"--un-scale-y",
						],
					},
				},
			],
			["transform-gpu", { transform: yu }, { custom: { preflightKeys: ie } }],
			["transform-none", { transform: "none" }],
			...be("transform"),
		];
	function Js([, e, t], { theme: r }) {
		let n = r.spacing?.[t] ?? U.bracket.cssvar.fraction.rem(t);
		if (n != null) return [...Lr(e, n, "translate"), ["transform", Pe]];
	}
	function Qs([, e, t]) {
		let r = U.bracket.cssvar.fraction.percent(t);
		if (r != null) return [...Lr(e, r, "scale"), ["transform", Pe]];
	}
	function ea([, e = "", t]) {
		let r = U.bracket.cssvar.degree(t);
		if (r != null)
			return e
				? { "--un-rotate": 0, [`--un-rotate-${e}`]: r, transform: Pe }
				: {
						"--un-rotate-x": 0,
						"--un-rotate-y": 0,
						"--un-rotate-z": 0,
						"--un-rotate": r,
						transform: Pe,
				  };
	}
	function ta([, e, t]) {
		let r = U.bracket.cssvar.degree(t);
		if (r != null) return [...Lr(e, r, "skew"), ["transform", Pe]];
	}
	var oa = {
			DEFAULT: "8px",
			0: "0",
			sm: "4px",
			md: "12px",
			lg: "16px",
			xl: "24px",
			"2xl": "40px",
			"3xl": "64px",
		},
		ia = {
			DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
			sm: "0 1px 1px rgb(0 0 0 / 0.05)",
			md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
			lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
			xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
			"2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
			none: "0 0 rgb(0 0 0 / 0)",
		},
		sa = {
			sans: [
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				'"Noto Sans"',
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			].join(","),
			serif: [
				"ui-serif",
				"Georgia",
				"Cambria",
				'"Times New Roman"',
				"Times",
				"serif",
			].join(","),
			mono: [
				"ui-monospace",
				"SFMono-Regular",
				"Menlo",
				"Monaco",
				"Consolas",
				'"Liberation Mono"',
				'"Courier New"',
				"monospace",
			].join(","),
		},
		aa = {
			xs: ["0.75rem", "1rem"],
			sm: ["0.875rem", "1.25rem"],
			base: ["1rem", "1.5rem"],
			lg: ["1.125rem", "1.75rem"],
			xl: ["1.25rem", "1.75rem"],
			"2xl": ["1.5rem", "2rem"],
			"3xl": ["1.875rem", "2.25rem"],
			"4xl": ["2.25rem", "2.5rem"],
			"5xl": ["3rem", "1"],
			"6xl": ["3.75rem", "1"],
			"7xl": ["4.5rem", "1"],
			"8xl": ["6rem", "1"],
			"9xl": ["8rem", "1"],
		},
		ca = {
			DEFAULT: "1.5rem",
			xs: "0.5rem",
			sm: "1rem",
			md: "1.5rem",
			lg: "2rem",
			xl: "2.5rem",
			"2xl": "3rem",
			"3xl": "4rem",
		},
		la = {
			DEFAULT: "1.5rem",
			none: "0",
			sm: "thin",
			md: "medium",
			lg: "thick",
		},
		ua = {
			DEFAULT: ["0 0 1px rgb(0 0 0 / 0.2)", "0 0 1px rgb(1 0 5 / 0.1)"],
			none: "0 0 rgb(0 0 0 / 0)",
			sm: "1px 1px 3px rgb(36 37 47 / 0.25)",
			md: [
				"0 1px 2px rgb(30 29 39 / 0.19)",
				"1px 2px 4px rgb(54 64 147 / 0.18)",
			],
			lg: ["3px 3px 6px rgb(0 0 0 / 0.26)", "0 0 5px rgb(15 3 86 / 0.22)"],
			xl: [
				"1px 1px 3px rgb(0 0 0 / 0.29)",
				"2px 4px 7px rgb(73 64 125 / 0.35)",
			],
		},
		fa = {
			none: "1",
			tight: "1.25",
			snug: "1.375",
			normal: "1.5",
			relaxed: "1.625",
			loose: "2",
		},
		Ln = {
			tighter: "-0.05em",
			tight: "-0.025em",
			normal: "0em",
			wide: "0.025em",
			wider: "0.05em",
			widest: "0.1em",
		},
		pa = {
			thin: "100",
			extralight: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			black: "900",
		},
		da = Ln,
		Un = {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		ma = { ...Un },
		ga = { DEFAULT: "1px", none: "0" },
		ha = {
			DEFAULT: "1rem",
			none: "0",
			xs: "0.75rem",
			sm: "0.875rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "3.75rem",
			"7xl": "4.5rem",
			"8xl": "6rem",
			"9xl": "8rem",
		},
		ba = {
			DEFAULT: "150ms",
			none: "0s",
			75: "75ms",
			100: "100ms",
			150: "150ms",
			200: "200ms",
			300: "300ms",
			500: "500ms",
			700: "700ms",
			1e3: "1000ms",
		},
		xa = {
			DEFAULT: "0.25rem",
			none: "0",
			sm: "0.125rem",
			md: "0.375rem",
			lg: "0.5rem",
			xl: "0.75rem",
			"2xl": "1rem",
			"3xl": "1.5rem",
			full: "9999px",
		},
		ya = {
			DEFAULT: [
				"var(--un-shadow-inset) 0 1px 3px 0 rgb(0 0 0 / 0.1)",
				"var(--un-shadow-inset) 0 1px 2px -1px rgb(0 0 0 / 0.1)",
			],
			none: "0 0 rgb(0 0 0 / 0)",
			sm: "var(--un-shadow-inset) 0 1px 2px 0 rgb(0 0 0 / 0.05)",
			md: [
				"var(--un-shadow-inset) 0 4px 6px -1px rgb(0 0 0 / 0.1)",
				"var(--un-shadow-inset) 0 2px 4px -2px rgb(0 0 0 / 0.1)",
			],
			lg: [
				"var(--un-shadow-inset) 0 10px 15px -3px rgb(0 0 0 / 0.1)",
				"var(--un-shadow-inset) 0 4px 6px -4px rgb(0 0 0 / 0.1)",
			],
			xl: [
				"var(--un-shadow-inset) 0 20px 25px -5px rgb(0 0 0 / 0.1)",
				"var(--un-shadow-inset) 0 8px 10px -6px rgb(0 0 0 / 0.1)",
			],
			"2xl": "var(--un-shadow-inset) 0 25px 50px -12px rgb(0 0 0 / 0.25)",
			inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
		},
		va = { DEFAULT: "3px", none: "0" },
		wa = { auto: "auto" },
		ka = { mouse: "(hover) and (pointer: fine)" },
		$a = { ...Mn, ...Pn, ...Vn },
		Me = {
			xs: "20rem",
			sm: "24rem",
			md: "28rem",
			lg: "32rem",
			xl: "36rem",
			"2xl": "42rem",
			"3xl": "48rem",
			"4xl": "56rem",
			"5xl": "64rem",
			"6xl": "72rem",
			"7xl": "80rem",
			prose: "65ch",
		},
		_n = { auto: "auto", ...Me, screen: "100vw" },
		ot = { none: "none", ...Me, screen: "100vw" },
		Fn = { auto: "auto", ...Me, screen: "100vh" },
		it = { none: "none", ...Me, screen: "100vh" },
		Sa = { ...Me },
		vu = {
			DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
			linear: "linear",
			in: "cubic-bezier(0.4, 0, 1, 1)",
			out: "cubic-bezier(0, 0, 0.2, 1)",
			"in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
		},
		wu = {
			none: "none",
			all: "all",
			colors: [
				"color",
				"background-color",
				"border-color",
				"text-decoration-color",
				"fill",
				"stroke",
			].join(","),
			opacity: "opacity",
			shadow: "box-shadow",
			transform: "transform",
			get DEFAULT() {
				return [
					this.colors,
					"opacity",
					"box-shadow",
					"transform",
					"filter",
					"backdrop-filter",
				].join(",");
			},
		},
		Wn = {
			width: _n,
			height: Fn,
			maxWidth: ot,
			maxHeight: it,
			minWidth: ot,
			minHeight: it,
			inlineSize: _n,
			blockSize: Fn,
			maxInlineSize: ot,
			maxBlockSize: it,
			minInlineSize: ot,
			minBlockSize: it,
			colors: jn,
			fontFamily: sa,
			fontSize: aa,
			fontWeight: pa,
			breakpoints: Un,
			verticalBreakpoints: ma,
			borderRadius: xa,
			lineHeight: fa,
			letterSpacing: Ln,
			wordSpacing: da,
			boxShadow: ya,
			textIndent: ca,
			textShadow: ua,
			textStrokeWidth: la,
			blur: oa,
			dropShadow: ia,
			easing: vu,
			transitionProperty: wu,
			lineWidth: ga,
			spacing: ha,
			duration: ba,
			ringWidth: va,
			preflightBase: $a,
			containers: Sa,
			zIndex: wa,
			media: ka,
		};
	var Ca = {
		...Wn,
		aria: {
			busy: 'busy="true"',
			checked: 'checked="true"',
			disabled: 'disabled="true"',
			expanded: 'expanded="true"',
			hidden: 'hidden="true"',
			pressed: 'pressed="true"',
			readonly: 'readonly="true"',
			required: 'required="true"',
			selected: 'selected="true"',
		},
		animation: {
			keyframes: {
				pulse: "{0%, 100% {opacity:1} 50% {opacity:.5}}",
				bounce:
					"{0%, 100% {transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)} 50% {transform:translateY(0);animation-timing-function:cubic-bezier(0,0,0.2,1)}}",
				spin: "{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
				ping: "{0%{transform:scale(1);opacity:1}75%,100%{transform:scale(2);opacity:0}}",
				"bounce-alt":
					"{from,20%,53%,80%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);transform:translate3d(0,0,0)}40%,43%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}",
				flash: "{from,50%,to{opacity:1}25%,75%{opacity:0}}",
				"pulse-alt":
					"{from{transform:scale3d(1,1,1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scale3d(1,1,1)}}",
				"rubber-band":
					"{from{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,0.75,1)}40%{transform:scale3d(0.75,1.25,1)}50%{transform:scale3d(1.15,0.85,1)}65%{transform:scale3d(0.95,1.05,1)}75%{transform:scale3d(1.05,0.95,1)}to{transform:scale3d(1,1,1)}}",
				"shake-x":
					"{from,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}",
				"shake-y":
					"{from,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(0,-10px,0)}20%,40%,60%,80%{transform:translate3d(0,10px,0)}}",
				"head-shake":
					"{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}",
				swing:
					"{20%{transform:rotate3d(0,0,1,15deg)}40%{transform:rotate3d(0,0,1,-10deg)}60%{transform:rotate3d(0,0,1,5deg)}80%{transform:rotate3d(0,0,1,-5deg)}to{transform:rotate3d(0,0,1,0deg)}}",
				tada: "{from{transform:scale3d(1,1,1)}10%,20%{transform:scale3d(0.9,0.9,0.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}to{transform:scale3d(1,1,1)}}",
				wobble:
					"{from{transform:translate3d(0,0,0)}15%{transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}to{transform:translate3d(0,0,0)}}",
				jello:
					"{from,11.1%,to{transform:translate3d(0,0,0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg)skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-0.78125deg) skewY(-0.78125deg)}77.7%{transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{transform:skewX(-0.1953125deg) skewY(-0.1953125deg)}}",
				"heart-beat":
					"{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}",
				hinge:
					"{0%{transform-origin:top left;animation-timing-function:ease-in-out}20%,60%{transform:rotate3d(0,0,1,80deg);transform-origin:top left;animation-timing-function:ease-in-out}40%,80%{transform:rotate3d(0,0,1,60deg);transform-origin:top left;animation-timing-function:ease-in-out}to{transform:translate3d(0,700px,0);opacity:0}}",
				"jack-in-the-box":
					"{from{opacity:0;transform-origin:center bottom;transform:scale(0.1) rotate(30deg)}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{transform:scale(1)}}",
				"light-speed-in-left":
					"{from{opacity:0;transform:translate3d(-100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{transform:skewX(-5deg)}to{transform:translate3d(0,0,0)}}",
				"light-speed-in-right":
					"{from{opacity:0;transform:translate3d(100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{transform:skewX(-5deg)}to{transform:translate3d(0,0,0)}}",
				"light-speed-out-left":
					"{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0) skewX(30deg)}}",
				"light-speed-out-right":
					"{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) skewX(30deg)}}",
				flip: "{from{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);animation-timing-function:ease-out}40%{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);animation-timing-function:ease-in}to{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);animation-timing-function:ease-in}}",
				"flip-in-x":
					"{from{transform:perspective(400px) rotate3d(1,0,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(1,0,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{transform:perspective(400px)}}",
				"flip-in-y":
					"{from{transform:perspective(400px) rotate3d(0,1,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(0,1,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(0,1,0,-5deg)}to{transform:perspective(400px)}}",
				"flip-out-x":
					"{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}",
				"flip-out-y":
					"{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}to{transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}",
				"rotate-in":
					"{from{transform-origin:center;transform:rotate3d(0,0,1,-200deg);opacity:0}to{transform-origin:center;transform:translate3d(0,0,0);opacity:1}}",
				"rotate-in-down-left":
					"{from{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}to{transform-origin:left bottom;transform:translate3d(0,0,0);opacity:1}}",
				"rotate-in-down-right":
					"{from{transform-origin:right bottom;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}",
				"rotate-in-up-left":
					"{from{transform-origin:left top;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:left top;transform:translate3d(0,0,0);opacity:1}}",
				"rotate-in-up-right":
					"{from{transform-origin:right bottom;transform:rotate3d(0,0,1,-90deg);opacity:0}to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}",
				"rotate-out":
					"{from{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate3d(0,0,1,200deg);opacity:0}}",
				"rotate-out-down-left":
					"{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}}",
				"rotate-out-down-right":
					"{from{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}",
				"rotate-out-up-left":
					"{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}",
				"rotate-out-up-right":
					"{from{transform-origin:right bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,90deg);opacity:0}}",
				"roll-in":
					"{from{opacity:0;transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"roll-out":
					"{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}",
				"zoom-in":
					"{from{opacity:0;transform:scale3d(0.3,0.3,0.3)}50%{opacity:1}}",
				"zoom-in-down":
					"{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
				"zoom-in-left":
					"{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
				"zoom-in-right":
					"{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
				"zoom-in-up":
					"{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
				"zoom-out":
					"{from{opacity:1}50%{opacity:0;transform:scale3d(0.3,0.3,0.3)}to{opacity:0}}",
				"zoom-out-down":
					"{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}to{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
				"zoom-out-left":
					"{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(0.1) translate3d(-2000px,0,0);transform-origin:left center}}",
				"zoom-out-right":
					"{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(0.1) translate3d(2000px,0,0);transform-origin:right center}}",
				"zoom-out-up":
					"{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}to{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
				"bounce-in":
					"{from,20%,40%,60%,80%,to{animation-timing-function:ease-in-out}0%{opacity:0;transform:scale3d(0.3,0.3,0.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(0.9,0.9,0.9)}60%{transform:scale3d(1.03,1.03,1.03);opacity:1}80%{transform:scale3d(0.97,0.97,0.97)}to{opacity:1;transform:scale3d(1,1,1)}}",
				"bounce-in-down":
					"{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:translate3d(0,0,0)}}",
				"bounce-in-left":
					"{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:translate3d(0,0,0)}}",
				"bounce-in-right":
					"{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:translate3d(0,0,0)}}",
				"bounce-in-up":
					"{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translate3d(0,0,0)}}",
				"bounce-out":
					"{20%{transform:scale3d(0.9,0.9,0.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(0.3,0.3,0.3)}}",
				"bounce-out-down":
					"{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}",
				"bounce-out-left":
					"{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}",
				"bounce-out-right":
					"{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}",
				"bounce-out-up":
					"{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}",
				"slide-in-down":
					"{from{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
				"slide-in-left":
					"{from{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
				"slide-in-right":
					"{from{transform:translate3d(100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
				"slide-in-up":
					"{from{transform:translate3d(0,100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
				"slide-out-down":
					"{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}",
				"slide-out-left":
					"{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}",
				"slide-out-right":
					"{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}",
				"slide-out-up":
					"{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}",
				"fade-in": "{from{opacity:0}to{opacity:1}}",
				"fade-in-down":
					"{from{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"fade-in-down-big":
					"{from{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"fade-in-left":
					"{from{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"fade-in-left-big":
					"{from{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"fade-in-right":
					"{from{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"fade-in-right-big":
					"{from{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"fade-in-up":
					"{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"fade-in-up-big":
					"{from{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"fade-in-top-left":
					"{from{opacity:0;transform:translate3d(-100%,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"fade-in-top-right":
					"{from{opacity:0;transform:translate3d(100%,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"fade-in-bottom-left":
					"{from{opacity:0;transform:translate3d(-100%,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"fade-in-bottom-right":
					"{from{opacity:0;transform:translate3d(100%,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
				"fade-out": "{from{opacity:1}to{opacity:0}}",
				"fade-out-down":
					"{from{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}",
				"fade-out-down-big":
					"{from{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}",
				"fade-out-left":
					"{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}",
				"fade-out-left-big":
					"{from{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}",
				"fade-out-right":
					"{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}",
				"fade-out-right-big":
					"{from{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}",
				"fade-out-up":
					"{from{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}",
				"fade-out-up-big":
					"{from{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}",
				"fade-out-top-left":
					"{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(-100%,-100%,0)}}",
				"fade-out-top-right":
					"{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(100%,-100%,0)}}",
				"fade-out-bottom-left":
					"{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(-100%,100%,0)}}",
				"fade-out-bottom-right":
					"{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(100%,100%,0)}}",
				"back-in-up":
					"{0%{opacity:0.7;transform:translateY(1200px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
				"back-in-down":
					"{0%{opacity:0.7;transform:translateY(-1200px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
				"back-in-right":
					"{0%{opacity:0.7;transform:translateX(2000px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
				"back-in-left":
					"{0%{opacity:0.7;transform:translateX(-2000px) scale(0.7)}80%{opacity:0.7;transform:translateX(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
				"back-out-up":
					"{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateY(-700px) scale(0.7)}}",
				"back-out-down":
					"{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateY(700px) scale(0.7)}}",
				"back-out-right":
					"{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateX(2000px) scale(0.7)}}",
				"back-out-left":
					"{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateX(-2000px) scale(0.7)}100%{opacity:0.7;transform:translateY(-700px) scale(0.7)}}",
			},
			durations: {
				pulse: "2s",
				"heart-beat": "1.3s",
				"bounce-in": "0.75s",
				"bounce-out": "0.75s",
				"flip-out-x": "0.75s",
				"flip-out-y": "0.75s",
				hinge: "2s",
			},
			timingFns: {
				pulse: "cubic-bezier(0.4,0,.6,1)",
				ping: "cubic-bezier(0,0,.2,1)",
				"head-shake": "ease-in-out",
				"heart-beat": "ease-in-out",
				"pulse-alt": "ease-in-out",
				"light-speed-in-left": "ease-out",
				"light-speed-in-right": "ease-out",
				"light-speed-out-left": "ease-in",
				"light-speed-out-right": "ease-in",
			},
			properties: {
				"bounce-alt": { "transform-origin": "center bottom" },
				jello: { "transform-origin": "center" },
				swing: { "transform-origin": "top center" },
				flip: { "backface-visibility": "visible" },
				"flip-in-x": { "backface-visibility": "visible !important" },
				"flip-in-y": { "backface-visibility": "visible !important" },
				"flip-out-x": { "backface-visibility": "visible !important" },
				"flip-out-y": { "backface-visibility": "visible !important" },
				"rotate-in": { "transform-origin": "center" },
				"rotate-in-down-left": { "transform-origin": "left bottom" },
				"rotate-in-down-right": { "transform-origin": "right bottom" },
				"rotate-in-up-left": { "transform-origin": "left bottom" },
				"rotate-in-up-right": { "transform-origin": "right bottom" },
				"rotate-out": { "transform-origin": "center" },
				"rotate-out-down-left": { "transform-origin": "left bottom" },
				"rotate-out-down-right": { "transform-origin": "right bottom" },
				"rotate-out-up-left": { "transform-origin": "left bottom" },
				"rotate-out-up-right": { "transform-origin": "right bottom" },
				hinge: { "transform-origin": "top left" },
				"zoom-out-down": { "transform-origin": "center bottom" },
				"zoom-out-left": { "transform-origin": "left center" },
				"zoom-out-right": { "transform-origin": "right center" },
				"zoom-out-up": { "transform-origin": "center bottom" },
			},
			counts: {
				spin: "infinite",
				ping: "infinite",
				pulse: "infinite",
				"pulse-alt": "infinite",
				bounce: "infinite",
				"bounce-alt": "infinite",
			},
			category: {
				pulse: "Attention Seekers",
				bounce: "Attention Seekers",
				spin: "Attention Seekers",
				ping: "Attention Seekers",
				"bounce-alt": "Attention Seekers",
				flash: "Attention Seekers",
				"pulse-alt": "Attention Seekers",
				"rubber-band": "Attention Seekers",
				"shake-x": "Attention Seekers",
				"shake-y": "Attention Seekers",
				"head-shake": "Attention Seekers",
				swing: "Attention Seekers",
				tada: "Attention Seekers",
				wobble: "Attention Seekers",
				jello: "Attention Seekers",
				"heart-beat": "Attention Seekers",
				hinge: "Specials",
				"jack-in-the-box": "Specials",
				"light-speed-in-left": "Lightspeed",
				"light-speed-in-right": "Lightspeed",
				"light-speed-out-left": "Lightspeed",
				"light-speed-out-right": "Lightspeed",
				flip: "Flippers",
				"flip-in-x": "Flippers",
				"flip-in-y": "Flippers",
				"flip-out-x": "Flippers",
				"flip-out-y": "Flippers",
				"rotate-in": "Rotating Entrances",
				"rotate-in-down-left": "Rotating Entrances",
				"rotate-in-down-right": "Rotating Entrances",
				"rotate-in-up-left": "Rotating Entrances",
				"rotate-in-up-right": "Rotating Entrances",
				"rotate-out": "Rotating Exits",
				"rotate-out-down-left": "Rotating Exits",
				"rotate-out-down-right": "Rotating Exits",
				"rotate-out-up-left": "Rotating Exits",
				"rotate-out-up-right": "Rotating Exits",
				"roll-in": "Specials",
				"roll-out": "Specials",
				"zoom-in": "Zooming Entrances",
				"zoom-in-down": "Zooming Entrances",
				"zoom-in-left": "Zooming Entrances",
				"zoom-in-right": "Zooming Entrances",
				"zoom-in-up": "Zooming Entrances",
				"zoom-out": "Zooming Exits",
				"zoom-out-down": "Zooming Exits",
				"zoom-out-left": "Zooming Exits",
				"zoom-out-right": "Zooming Exits",
				"zoom-out-up": "Zooming Exits",
				"bounce-in": "Bouncing Entrances",
				"bounce-in-down": "Bouncing Entrances",
				"bounce-in-left": "Bouncing Entrances",
				"bounce-in-right": "Bouncing Entrances",
				"bounce-in-up": "Bouncing Entrances",
				"bounce-out": "Bouncing Exits",
				"bounce-out-down": "Bouncing Exits",
				"bounce-out-left": "Bouncing Exits",
				"bounce-out-right": "Bouncing Exits",
				"bounce-out-up": "Bouncing Exits",
				"slide-in-down": "Sliding Entrances",
				"slide-in-left": "Sliding Entrances",
				"slide-in-right": "Sliding Entrances",
				"slide-in-up": "Sliding Entrances",
				"slide-out-down": "Sliding Exits",
				"slide-out-left": "Sliding Exits",
				"slide-out-right": "Sliding Exits",
				"slide-out-up": "Sliding Exits",
				"fade-in": "Fading Entrances",
				"fade-in-down": "Fading Entrances",
				"fade-in-down-big": "Fading Entrances",
				"fade-in-left": "Fading Entrances",
				"fade-in-left-big": "Fading Entrances",
				"fade-in-right": "Fading Entrances",
				"fade-in-right-big": "Fading Entrances",
				"fade-in-up": "Fading Entrances",
				"fade-in-up-big": "Fading Entrances",
				"fade-in-top-left": "Fading Entrances",
				"fade-in-top-right": "Fading Entrances",
				"fade-in-bottom-left": "Fading Entrances",
				"fade-in-bottom-right": "Fading Entrances",
				"fade-out": "Fading Exits",
				"fade-out-down": "Fading Exits",
				"fade-out-down-big": "Fading Exits",
				"fade-out-left": "Fading Exits",
				"fade-out-left-big": "Fading Exits",
				"fade-out-right": "Fading Exits",
				"fade-out-right-big": "Fading Exits",
				"fade-out-up": "Fading Exits",
				"fade-out-up-big": "Fading Exits",
				"fade-out-top-left": "Fading Exits",
				"fade-out-top-right": "Fading Exits",
				"fade-out-bottom-left": "Fading Exits",
				"fade-out-bottom-right": "Fading Exits",
				"back-in-up": "Back Entrances",
				"back-in-down": "Back Entrances",
				"back-in-right": "Back Entrances",
				"back-in-left": "Back Entrances",
				"back-out-up": "Back Exits",
				"back-out-down": "Back Exits",
				"back-out-right": "Back Exits",
				"back-out-left": "Back Exits",
			},
		},
		media: {
			portrait: "(orientation: portrait)",
			landscape: "(orientation: landscape)",
			os_dark: "(prefers-color-scheme: dark)",
			os_light: "(prefers-color-scheme: light)",
			motion_ok: "(prefers-reduced-motion: no-preference)",
			motion_not_ok: "(prefers-reduced-motion: reduce)",
			high_contrast: "(prefers-contrast: high)",
			low_contrast: "(prefers-contrast: low)",
			opacity_ok: "(prefers-reduced-transparency: no-preference)",
			opacity_not_ok: "(prefers-reduced-transparency: reduce)",
			use_data_ok: "(prefers-reduced-data: no-preference)",
			use_data_not_ok: "(prefers-reduced-data: reduce)",
			touch: "(hover: none) and (pointer: coarse)",
			stylus: "(hover: none) and (pointer: fine)",
			pointer: "(hover) and (pointer: coarse)",
			mouse: "(hover) and (pointer: fine)",
			hd_color: "(dynamic-range: high)",
		},
		supports: { grid: "(display: grid)" },
		preflightBase: {
			...Je,
			...En,
			...$n,
			...Tn,
			...Sn,
			...Ze,
			...Xe,
			...wn,
			...kn,
		},
	};
	var Ra = [K("svg", (e) => ({ selector: `${e.selector} svg` }))];
	var Ea = [
		K(".dark", (e) => ({ prefix: `.dark $$ ${e.prefix}` })),
		K(".light", (e) => ({ prefix: `.light $$ ${e.prefix}` })),
		G("@dark", "@media (prefers-color-scheme: dark)"),
		G("@light", "@media (prefers-color-scheme: light)"),
	];
	var Ta = [
			G("contrast-more", "@media (prefers-contrast: more)"),
			G("contrast-less", "@media (prefers-contrast: less)"),
		],
		ja = [
			G("motion-reduce", "@media (prefers-reduced-motion: reduce)"),
			G("motion-safe", "@media (prefers-reduced-motion: no-preference)"),
		],
		za = [
			G("landscape", "@media (orientation: landscape)"),
			G("portrait", "@media (orientation: portrait)"),
		];
	var Oa = (e) => {
			if (!e.startsWith("_") && (/space-[xy]-.+$/.test(e) || /divide-/.test(e)))
				return {
					matcher: e,
					selector: (t) => {
						let r = ">:not([hidden])~:not([hidden])";
						return t.includes(r) ? t : `${t}${r}`;
					},
				};
		},
		Aa = [
			K("@hover", (e) => ({
				parent: `${
					e.parent ? `${e.parent} $$ ` : ""
				}@media (hover: hover) and (pointer: fine)`,
				selector: `${e.selector || ""}:hover`,
			})),
		];
	var Va = (e, { theme: t }) => {
		let r = e.match(/^(.*)\b(placeholder-)(.+)$/);
		if (r) {
			let [, n = "", o, i] = r;
			if (ze(i, t, "accentColor") || ku(i))
				return { matcher: `${n}placeholder-$ ${o}${i}` };
		}
	};
	function ku(e) {
		let t = e.match(/^op(?:acity)?-?(.+)$/);
		return t && t[1] != null ? l.bracket.percent(t[1]) != null : !1;
	}
	function Pa(e) {
		return [Va, Oa, ...Ar(e), ...Ta, ...za, ...ja, ...Ra, ...Ea, ...Aa];
	}
	var Ma = (e = {}) => (
		(e.important = e.important ?? !1),
		{
			...bn(e),
			name: "@unocss/preset-wind",
			theme: Ca,
			rules: Ds,
			shortcuts: Is,
			variants: Pa(e),
			postprocess: rs(e),
		}
	);
	function _a(e, t, r) {
		return `calc(${t} + (${e} - ${t}) * ${r} / 100)`;
	}
	function Fa(e, t, r) {
		let n = [e, t],
			o = [];
		for (let s = 0; s < 2; s++) {
			let a = typeof n[s] == "string" ? Y(n[s]) : n[s];
			if (!a || !["rgb", "rgba"].includes(a.type)) return;
			o.push(a);
		}
		let i = [];
		for (let s = 0; s < 3; s++)
			i.push(_a(o[0].components[s], o[1].components[s], r));
		return {
			type: "rgb",
			components: i,
			alpha: _a(o[0].alpha ?? 1, o[1].alpha ?? 1, r),
		};
	}
	function La(e, t) {
		return Fa("#fff", e, t);
	}
	function Ua(e, t) {
		return Fa("#000", e, t);
	}
	function $u(e, t) {
		let r = Number.parseFloat(`${t}`);
		if (!Number.isNaN(r)) return r > 0 ? Ua(e, t) : La(e, -r);
	}
	var Su = { tint: La, shade: Ua, shift: $u };
	function Wa() {
		let e;
		return {
			name: "mix",
			match(t, r) {
				e ||
					(e = new RegExp(
						`^mix-(tint|shade|shift)-(-?\\d{1,3})(?:${r.generator.config.separators.join(
							"|"
						)})`
					));
				let n = t.match(e);
				if (n)
					return {
						matcher: t.slice(n[0].length),
						body: (o) => (
							o.forEach((i) => {
								if (i[1]) {
									let s = Y(`${i[1]}`);
									if (s) {
										let a = Su[n[1]](s, n[2]);
										a && (i[1] = M(a));
									}
								}
							}),
							o
						),
					};
			},
		};
	}
	var Cu = (e = {}) => {
			let t = Ma(e);
			return {
				...t,
				name: "@unocss/preset-uno",
				variants: [...t.variants, Wa()],
			};
		},
		Ba = Cu;
	function Ru(e) {
		return e.replace(/-(\w)/g, (t, r) => (r ? r.toUpperCase() : ""));
	}
	function Na(e) {
		return e.charAt(0).toUpperCase() + e.slice(1);
	}
	function Da(e) {
		return e.replace(/(?:^|\B)([A-Z])/g, "-$1").toLowerCase();
	}
	var Ia = ["Webkit", "Moz", "ms"];
	function Ka(e) {
		let t = {};
		function r(n) {
			let o = t[n];
			if (o) return o;
			let i = Ru(n);
			if (i !== "filter" && i in e) return (t[n] = Da(i));
			i = Na(i);
			for (let s = 0; s < Ia.length; s++) {
				let a = `${Ia[s]}${i}`;
				if (a in e) return (t[n] = Da(Na(a)));
			}
			return n;
		}
		return ({ entries: n }) =>
			n.forEach((o) => {
				o[0].startsWith("--") || (o[0] = r(o[0]));
			});
	}
	function Ga(e) {
		return e.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<");
	}
	async function Bn(e = {}) {
		if (typeof window > "u") {
			console.warn(
				"@unocss/runtime been used in non-browser environment, skipped."
			);
			return;
		}
		let t = window,
			r = window.document,
			n = () => r.documentElement,
			o = t.__unocss || {},
			i = Object.assign({}, e, o.runtime),
			s = i.defaults || {},
			a = i.cloakAttribute ?? "un-cloak";
		i.autoPrefix &&
			(s.postprocess = V(s.postprocess)).unshift(
				Ka(r.createElement("div").style)
			),
			i.configResolved?.(o, s);
		let c = await io(o, s),
			u = (S) => (i.inject ? i.inject(S) : n().prepend(S)),
			f = () => (i.rootElement ? i.rootElement() : r.body),
			p = new Map(),
			d = !0,
			m = new Set(),
			b,
			x,
			$ = [],
			j = () =>
				new Promise((S) => {
					$.push(S),
						x != null && clearTimeout(x),
						(x = setTimeout(
							() =>
								W().then(() => {
									let z = $;
									($ = []), z.forEach((_) => _());
								}),
							0
						));
				});
		function w(S, z = !1) {
			if (S.nodeType !== 1) return;
			let _ = S;
			_.hasAttribute(a) && _.removeAttribute(a),
				z &&
					_.querySelectorAll(`[${a}]`).forEach((L) => {
						L.removeAttribute(a);
					});
		}
		function R(S, z) {
			let _ = p.get(S);
			if (!_)
				if (
					((_ = r.createElement("style")),
					_.setAttribute("data-unocss-runtime-layer", S),
					p.set(S, _),
					z == null)
				)
					u(_);
				else {
					let L = R(z),
						T = L.parentNode;
					T ? T.insertBefore(_, L.nextSibling) : u(_);
				}
			return _;
		}
		async function W() {
			let S = [...m],
				z = await c.generate(S);
			return (
				z.layers.reduce(
					(L, T) => ((R(T, L).innerHTML = z.getLayer(T) ?? ""), T),
					void 0
				),
				S.filter((L) => !z.matched.has(L)).forEach((L) => m.delete(L)),
				{ ...z, getStyleElement: (L) => p.get(L), getStyleElements: () => p }
			);
		}
		async function A(S) {
			let z = m.size;
			await c.applyExtractors(S, void 0, m), z !== m.size && (await j());
		}
		async function h(S = f()) {
			let z = S && S.outerHTML;
			z && (await A(`${z} ${Ga(z)}`), w(n()), w(S, !0));
		}
		let g = new MutationObserver((S) => {
				d ||
					S.forEach(async (z) => {
						if (z.target.nodeType !== 1) return;
						let _ = z.target;
						for (let L of p) if (_ === L[1]) return;
						if (z.type === "childList")
							z.addedNodes.forEach(async (L) => {
								if (L.nodeType !== 1) return;
								let T = L;
								(b && !b(T)) || (await A(T.outerHTML), w(T));
							});
						else {
							if (b && !b(_)) return;
							if (z.attributeName !== a) {
								let L = Array.from(_.attributes)
										.map((D) => (D.value ? `${D.name}="${D.value}"` : D.name))
										.join(" "),
									T = `<${_.tagName.toLowerCase()} ${L}>`;
								await A(T);
							}
							w(_);
						}
					});
			}),
			v = !1;
		function C() {
			if (v) return;
			let S = i.observer?.target ? i.observer.target() : f();
			S &&
				(g.observe(S, {
					childList: !0,
					subtree: !0,
					attributes: !0,
					attributeFilter: i.observer?.attributeFilter,
				}),
				(v = !0));
		}
		function H() {
			i.bypassDefined && Eu(c.blocked), h(), C();
		}
		function q() {
			r.readyState === "loading"
				? t.addEventListener("DOMContentLoaded", H)
				: H();
		}
		let Q =
			(t.__unocss_runtime =
			t.__unocss_runtime =
				{
					version: c.version,
					uno: c,
					async extract(S) {
						P(S) || (S.forEach((z) => m.add(z)), (S = "")), await A(S);
					},
					extractAll: h,
					inspect(S) {
						b = S;
					},
					toggleObserver(S) {
						S === void 0 ? (d = !d) : (d = !!S), !v && !d && q();
					},
					update: W,
					presets: t.__unocss_runtime?.presets ?? {},
				});
		i.ready?.(Q) !== !1 && ((d = !1), q());
	}
	function Eu(e = new Set()) {
		for (let t = 0; t < document.styleSheets.length; t++) {
			let r = document.styleSheets[t],
				n;
			try {
				if (((n = r.cssRules || r.rules), !n)) continue;
				Array.from(n)
					.flatMap((o) => o.selectorText?.split(/,/g) || [])
					.forEach((o) => {
						o &&
							((o = o.trim()), o.startsWith(".") && (o = o.slice(1)), e.add(o));
					});
			} catch {
				continue;
			}
		}
		return e;
	}
	Bn({ defaults: { presets: [Ba()] } });
})();