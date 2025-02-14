const e = "surecart",
    t = {
        allRenderFn: !1,
        appendChildSlotFix: !1,
        asyncLoading: !0,
        asyncQueue: !1,
        attachStyles: !0,
        cloneNodeFix: !1,
        cmpDidLoad: !0,
        cmpDidRender: !1,
        cmpDidUnload: !1,
        cmpDidUpdate: !0,
        cmpShouldUpdate: !1,
        cmpWillLoad: !0,
        cmpWillRender: !1,
        cmpWillUpdate: !1,
        connectedCallback: !1,
        constructableCSS: !0,
        cssAnnotations: !0,
        devTools: !1,
        disconnectedCallback: !0,
        element: !1,
        event: !0,
        experimentalScopedSlotChanges: !1,
        experimentalSlotFixes: !1,
        formAssociated: !1,
        hasRenderFn: !0,
        hostListener: !0,
        hostListenerTarget: !0,
        hostListenerTargetBody: !1,
        hostListenerTargetDocument: !1,
        hostListenerTargetParent: !1,
        hostListenerTargetWindow: !0,
        hotModuleReplacement: !1,
        hydrateClientSide: !1,
        hydrateServerSide: !1,
        hydratedAttribute: !1,
        hydratedClass: !0,
        hydratedSelectorName: "hydrated",
        initializeNextTick: !1,
        invisiblePrehydration: !0,
        isDebug: !1,
        isDev: !1,
        isTesting: !1,
        lazyLoad: !0,
        lifecycle: !0,
        lifecycleDOMEvents: !1,
        member: !0,
        method: !0,
        mode: !1,
        observeAttribute: !0,
        profile: !1,
        prop: !0,
        propBoolean: !0,
        propMutable: !0,
        propNumber: !0,
        propString: !0,
        reflect: !0,
        scoped: !1,
        scopedSlotTextContentFix: !1,
        scriptDataOpts: !1,
        shadowDelegatesFocus: !1,
        shadowDom: !0,
        slot: !0,
        slotChildNodesFix: !1,
        slotRelocation: !0,
        state: !0,
        style: !0,
        svg: !0,
        taskQueue: !0,
        transformTagName: !1,
        updatable: !0,
        vdomAttribute: !0,
        vdomClass: !0,
        vdomFunctional: !0,
        vdomKey: !0,
        vdomListener: !0,
        vdomPropOrAttr: !0,
        vdomRef: !0,
        vdomRender: !0,
        vdomStyle: !0,
        vdomText: !0,
        vdomXlink: !0,
        watchCallback: !0
    };
var r = Object.defineProperty,
    l = (e, t) => {
        for (var n in t) r(e, n, {
            get: t[n],
            enumerable: !0
        })
    },
    n = {},
    s = "http://www.w3.org/2000/svg",
    i = "http://www.w3.org/1999/xhtml",
    o = e => null != e,
    a = e => "object" == (e = typeof e) || "function" === e;

function f(e) {
    var t, n, s;
    return null != (s = null == (n = null == (t = e.head) ? void 0 : t.querySelector('meta[name="csp-nonce"]')) ? void 0 : n.getAttribute("content")) ? s : void 0
}
var c = {};
l(c, {
    err: () => v,
    map: () => d,
    ok: () => u,
    unwrap: () => p,
    unwrapErr: () => h
});
var u = e => ({
        isOk: !0,
        isErr: !1,
        value: e
    }),
    v = e => ({
        isOk: !1,
        isErr: !0,
        value: e
    });

function d(e, t) {
    if (e.isOk) {
        const n = t(e.value);
        return n instanceof Promise ? n.then((e => u(e))) : u(n)
    }
    if (e.isErr) {
        const t = e.value;
        return v(t)
    }
    throw "should never get here"
}
var q, G, I, p = e => {
        if (e.isOk) return e.value;
        throw e.value
    },
    h = e => {
        if (e.isErr) return e.value;
        throw e.value
    },
    m = (e, t = "") => () => {},
    y = (e, t) => () => {},
    b = "{visibility:hidden}.hydrated{visibility:inherit}",
    w = "slot-fb{display:contents}slot-fb[hidden]{display:none}",
    g = "http://www.w3.org/1999/xlink",
    $ = (e, t, ...n) => {
        let s = null,
            o = null,
            l = null,
            r = !1,
            i = !1;
        const c = [],
            d = t => {
                for (let n = 0; n < t.length; n++) s = t[n], Array.isArray(s) ? d(s) : null != s && "boolean" != typeof s && ((r = "function" != typeof e && !a(s)) && (s = String(s)), r && i ? c[c.length - 1].t += s : c.push(r ? S(null, s) : s), i = r)
            };
        if (d(n), t) {
            t.key && (o = t.key), t.name && (l = t.name); {
                const e = t.className || t.class;
                e && (t.class = "object" != typeof e ? e : Object.keys(e).filter((t => e[t])).join(" "))
            }
        }
        if ("function" == typeof e) return e(null === t ? {} : t, c, j);
        const u = S(e, null);
        return u.l = t, c.length > 0 && (u.i = c), u.o = o, u.u = l, u
    },
    S = (e, t) => ({
        v: 0,
        p: e,
        t: t,
        h: null,
        i: null,
        l: null,
        o: null,
        u: null
    }),
    k = {},
    C = e => e && e.p === k,
    j = {
        forEach: (e, t) => e.map(O).forEach(t),
        map: (e, t) => e.map(O).map(t).map(x)
    },
    O = e => ({
        vattrs: e.l,
        vchildren: e.i,
        vkey: e.o,
        vname: e.u,
        vtag: e.p,
        vtext: e.t
    }),
    x = e => {
        if ("function" == typeof e.vtag) {
            const t = { ...e.vattrs
            };
            return e.vkey && (t.key = e.vkey), e.vname && (t.name = e.vname), $(e.vtag, t, ...e.vchildren || [])
        }
        const t = S(e.vtag, e.vtext);
        return t.l = e.vattrs, t.i = e.vchildren, t.o = e.vkey, t.u = e.vname, t
    },
    T = (e, t) => null == e || a(e) ? e : 4 & t ? "false" !== e && ("" === e || !!e) : 2 & t ? parseFloat(e) : 1 & t ? String(e) : e,
    L = e => qe(e).$hostElement$,
    R = (e, t, n) => {
        const s = L(e);
        return {
            emit: e => D(s, t, {
                bubbles: !!(4 & n),
                composed: !!(2 & n),
                cancelable: !!(1 & n),
                detail: e
            })
        }
    },
    D = (e, t, n) => {
        const s = et.ce(t, n);
        return e.dispatchEvent(s), s
    },
    E = new WeakMap,
    F = (e, t, n) => {
        let s = Je.get(e);
        lt && n ? (s = s || new CSSStyleSheet, "string" == typeof s ? s = t : s.replaceSync(t)) : s = t, Je.set(e, s)
    },
    M = (e, t, n) => {
        var s;
        const o = A(t),
            l = Je.get(o);
        if (e = 11 === e.nodeType ? e : Ze, l)
            if ("string" == typeof l) {
                e = e.head || e;
                let n, r = E.get(e);
                if (r || E.set(e, r = new Set), !r.has(o)) {
                    {
                        n = Ze.createElement("style"), n.innerHTML = l;
                        const t = null != (s = et.m) ? s : f(Ze);
                        null != t && n.setAttribute("nonce", t), e.insertBefore(n, e.querySelector("link"))
                    }
                    4 & t.v && (n.innerHTML += w), r && r.add(o)
                }
            } else e.adoptedStyleSheets.includes(l) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, l]);
        return o
    },
    P = e => {
        const t = e.$,
            n = e.$hostElement$,
            s = t.v,
            o = m("attachStyles", t.S),
            l = M(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
        10 & s && (n["s-sc"] = l, n.classList.add(l + "-h")), o()
    },
    A = (e, t) => "sc-" + e.S,
    N = (e, t, n, s, o, l) => {
        if (n !== s) {
            let r = Ke(e, t),
                i = t.toLowerCase();
            if ("class" === t) {
                const t = e.classList,
                    o = W(n),
                    l = W(s);
                t.remove(...o.filter((e => e && !l.includes(e)))), t.add(...l.filter((e => e && !o.includes(e))))
            } else if ("style" === t) {
                for (const t in n) s && null != s[t] || (t.includes("-") ? e.style.removeProperty(t) : e.style[t] = "");
                for (const t in s) n && s[t] === n[t] || (t.includes("-") ? e.style.setProperty(t, s[t]) : e.style[t] = s[t])
            } else if ("key" === t);
            else if ("ref" === t) s && s(e);
            else if (r || "o" !== t[0] || "n" !== t[1]) {
                const c = a(s);
                if ((r || c && null !== s) && !o) try {
                    if (e.tagName.includes("-")) e[t] = s;
                    else {
                        const o = null == s ? "" : s;
                        "list" === t ? r = !1 : null != n && e[t] == o || (e[t] = o)
                    }
                } catch (e) {}
                let d = !1;
                i !== (i = i.replace(/^xlink\:?/, "")) && (t = i, d = !0), null == s || !1 === s ? !1 === s && "" !== e.getAttribute(t) || (d ? e.removeAttributeNS(g, t) : e.removeAttribute(t)) : (!r || 4 & l || o) && !c && (s = !0 === s ? "" : s, d ? e.setAttributeNS(g, t, s) : e.setAttribute(t, s))
            } else if (t = "-" === t[2] ? t.slice(3) : Ke(Ye, i) ? i.slice(2) : i[2] + t.slice(3), n || s) {
                const o = t.endsWith(H);
                t = t.replace(z, ""), n && et.rel(e, t, n, o), s && et.ael(e, t, s, o)
            }
        }
    },
    U = /\s/,
    W = e => e ? e.split(U) : [],
    H = "Capture",
    z = new RegExp(H + "$"),
    B = (e, t, s) => {
        const o = 11 === t.h.nodeType && t.h.host ? t.h.host : t.h,
            l = e && e.l || n,
            r = t.l || n;
        for (const e of Q(Object.keys(l))) e in r || N(o, e, l[e], void 0, s, t.v);
        for (const e of Q(Object.keys(r))) N(o, e, l[e], r[e], s, t.v)
    };

function Q(e) {
    return e.includes("ref") ? [...e.filter((e => "ref" !== e)), "ref"] : e
}
var K = !1,
    V = !1,
    X = !1,
    _ = !1,
    J = (e, t, n, l) => {
        var r;
        const a = t.i[n];
        let c, d, u, h = 0;
        if (K || (X = !0, "slot" === a.p && (q && l.classList.add(q + "-s"), a.v |= a.i ? 2 : 1)), null !== a.t) c = a.h = Ze.createTextNode(a.t);
        else if (1 & a.v) c = a.h = Ze.createTextNode("");
        else {
            if (_ || (_ = "svg" === a.p), c = a.h = Ze.createElementNS(_ ? s : i, 2 & a.v ? "slot-fb" : a.p), _ && "foreignObject" === a.p && (_ = !1), B(null, a, _), o(q) && c["s-si"] !== q && c.classList.add(c["s-si"] = q), a.i)
                for (h = 0; h < a.i.length; ++h) d = J(e, a, h, c), d && c.appendChild(d);
            "svg" === a.p ? _ = !1 : "foreignObject" === c.tagName && (_ = !0)
        }
        return c["s-hn"] = I, 3 & a.v && (c["s-sr"] = !0, c["s-cr"] = G, c["s-sn"] = a.u || "", c["s-rf"] = null == (r = a.l) ? void 0 : r.ref, u = e && e.i && e.i[n], u && u.p === a.p && e.h && Y(e.h, !1)), c
    },
    Y = (e, n) => {
        et.v |= 1;
        const s = Array.from(e.childNodes);
        if (e["s-sr"] && t.experimentalSlotFixes) {
            let t = e;
            for (; t = t.nextSibling;) t && t["s-sn"] === e["s-sn"] && t["s-sh"] === I && s.push(t)
        }
        for (let e = s.length - 1; e >= 0; e--) {
            const t = s[e];
            t["s-hn"] !== I && t["s-ol"] && (ue(ne(t), t, le(t)), t["s-ol"].remove(), t["s-ol"] = void 0, t["s-sh"] = void 0, X = !0), n && Y(t, n)
        }
        et.v &= -2
    },
    Z = (e, t, n, s, o, l) => {
        let r, i = e["s-cr"] && e["s-cr"].parentNode || e;
        for (i.shadowRoot && i.tagName === I && (i = i.shadowRoot); o <= l; ++o) s[o] && (r = J(null, n, o, e), r && (s[o].h = r, ue(i, r, le(t))))
    },
    ee = (e, t, n) => {
        for (let s = t; s <= n; ++s) {
            const t = e[s];
            if (t) {
                const e = t.h;
                ce(t), e && (V = !0, e["s-ol"] ? e["s-ol"].remove() : Y(e, !0), e.remove())
            }
        }
    },
    te = (e, t, n, s, o = !1) => {
        let l, r, i = 0,
            a = 0,
            c = 0,
            d = 0,
            u = t.length - 1,
            h = t[0],
            p = t[u],
            f = s.length - 1,
            m = s[0],
            v = s[f];
        for (; i <= u && a <= f;)
            if (null == h) h = t[++i];
            else if (null == p) p = t[--u];
        else if (null == m) m = s[++a];
        else if (null == v) v = s[--f];
        else if (re(h, m, o)) se(h, m, o), h = t[++i], m = s[++a];
        else if (re(p, v, o)) se(p, v, o), p = t[--u], v = s[--f];
        else if (re(h, v, o)) "slot" !== h.p && "slot" !== v.p || Y(h.h.parentNode, !1), se(h, v, o), ue(e, h.h, p.h.nextSibling), h = t[++i], v = s[--f];
        else if (re(p, m, o)) "slot" !== h.p && "slot" !== v.p || Y(p.h.parentNode, !1), se(p, m, o), ue(e, p.h, h.h), p = t[--u], m = s[++a];
        else {
            for (c = -1, d = i; d <= u; ++d)
                if (t[d] && null !== t[d].o && t[d].o === m.o) {
                    c = d;
                    break
                }
            c >= 0 ? (r = t[c], r.p !== m.p ? l = J(t && t[a], n, c, e) : (se(r, m, o), t[c] = void 0, l = r.h), m = s[++a]) : (l = J(t && t[a], n, a, e), m = s[++a]), l && ue(ne(h.h), l, le(h.h))
        }
        i > u ? Z(e, null == s[f + 1] ? null : s[f + 1].h, n, s, a, f) : a > f && ee(t, i, u)
    },
    re = (e, t, n = !1) => e.p === t.p && ("slot" === e.p ? e.u === t.u : !!n || e.o === t.o),
    le = e => e && e["s-ol"] || e,
    ne = e => (e["s-ol"] ? e["s-ol"] : e).parentNode,
    se = (e, t, n = !1) => {
        const s = t.h = e.h,
            o = e.i,
            l = t.i,
            r = t.p,
            i = t.t;
        let a;
        null === i ? (_ = "svg" === r || "foreignObject" !== r && _, ("slot" !== r || K) && B(e, t, _), null !== o && null !== l ? te(s, o, t, l, n) : null !== l ? (null !== e.t && (s.textContent = ""), Z(s, null, t, l, 0, l.length - 1)) : null !== o && ee(o, 0, o.length - 1), _ && "svg" === r && (_ = !1)) : (a = s["s-cr"]) ? a.parentNode.textContent = i : e.t !== i && (s.data = i)
    },
    ie = e => {
        const t = e.childNodes;
        for (const e of t)
            if (1 === e.nodeType) {
                if (e["s-sr"]) {
                    const n = e["s-sn"];
                    e.hidden = !1;
                    for (const s of t)
                        if (s !== e)
                            if (s["s-hn"] !== e["s-hn"] || "" !== n) {
                                if (1 === s.nodeType && (n === s.getAttribute("slot") || n === s["s-sn"]) || 3 === s.nodeType && n === s["s-sn"]) {
                                    e.hidden = !0;
                                    break
                                }
                            } else if (1 === s.nodeType || 3 === s.nodeType && "" !== s.textContent.trim()) {
                        e.hidden = !0;
                        break
                    }
                }
                ie(e)
            }
    },
    oe = [],
    ae = e => {
        let n, s, o;
        for (const l of e.childNodes) {
            if (l["s-sr"] && (n = l["s-cr"]) && n.parentNode) {
                s = n.parentNode.childNodes;
                const e = l["s-sn"];
                for (o = s.length - 1; o >= 0; o--)
                    if (n = s[o], !n["s-cn"] && !n["s-nr"] && n["s-hn"] !== l["s-hn"] && !t.experimentalSlotFixes)
                        if (fe(n, e)) {
                            let t = oe.find((e => e.k === n));
                            V = !0, n["s-sn"] = n["s-sn"] || e, t ? (t.k["s-sh"] = l["s-hn"], t.C = l) : (n["s-sh"] = l["s-hn"], oe.push({
                                C: l,
                                k: n
                            })), n["s-sr"] && oe.map((e => {
                                fe(e.k, n["s-sn"]) && (t = oe.find((e => e.k === n)), t && !e.C && (e.C = t.C))
                            }))
                        } else oe.some((e => e.k === n)) || oe.push({
                            k: n
                        })
            }
            1 === l.nodeType && ae(l)
        }
    },
    fe = (e, t) => 1 === e.nodeType ? null === e.getAttribute("slot") && "" === t || e.getAttribute("slot") === t : e["s-sn"] === t || "" === t,
    ce = e => {
        e.l && e.l.ref && e.l.ref(null), e.i && e.i.map(ce)
    },
    ue = (e, t, n) => null == e ? void 0 : e.insertBefore(t, n),
    ve = (e, t, n = !1) => {
        var s, o, l, r;
        const i = e.$hostElement$,
            a = e.$,
            c = e.j || S(null, null),
            d = C(t) ? t : $(null, null, t);
        if (I = i.tagName, a.O && (d.l = d.l || {}, a.O.map((([e, t]) => d.l[t] = i[e]))), n && d.l)
            for (const e of Object.keys(d.l)) i.hasAttribute(e) && !["key", "ref", "style", "class"].includes(e) && (d.l[e] = i[e]);
        if (d.p = null, d.v |= 4, e.j = d, d.h = c.h = i.shadowRoot || i, q = i["s-sc"], K = !!(1 & a.v), G = i["s-cr"], V = !1, se(c, d, n), et.v |= 1, X) {
            ae(d.h);
            for (const e of oe) {
                const t = e.k;
                if (!t["s-ol"]) {
                    const e = Ze.createTextNode("");
                    e["s-nr"] = t, ue(t.parentNode, t["s-ol"] = e, t)
                }
            }
            for (const e of oe) {
                const t = e.k,
                    i = e.C;
                if (i) {
                    const e = i.parentNode;
                    let n = i.nextSibling; {
                        let l = null == (s = t["s-ol"]) ? void 0 : s.previousSibling;
                        for (; l;) {
                            let s = null != (o = l["s-nr"]) ? o : null;
                            if (s && s["s-sn"] === t["s-sn"] && e === s.parentNode) {
                                for (s = s.nextSibling; s === t || (null == s ? void 0 : s["s-sr"]);) s = null == s ? void 0 : s.nextSibling;
                                if (!s || !s["s-nr"]) {
                                    n = s;
                                    break
                                }
                            }
                            l = l.previousSibling
                        }
                    }(!n && e !== t.parentNode || t.nextSibling !== n) && t !== n && (!t["s-hn"] && t["s-ol"] && (t["s-hn"] = t["s-ol"].parentNode.nodeName), ue(e, t, n), 1 === t.nodeType && (t.hidden = null != (l = t["s-ih"]) && l)), t && "function" == typeof i["s-rf"] && i["s-rf"](t)
                } else 1 === t.nodeType && (n && (t["s-ih"] = null != (r = t.hidden) && r), t.hidden = !0)
            }
        }
        V && ie(d.h), et.v &= -2, oe.length = 0, G = void 0
    },
    de = (e, t) => {
        t && !e.T && t["s-p"] && t["s-p"].push(new Promise((t => e.T = t)))
    },
    pe = (e, t) => {
        if (e.v |= 16, !(4 & e.v)) return de(e, e.L), ut((() => he(e, t)));
        e.v |= 512
    },
    he = (e, t) => {
        const n = e.$hostElement$,
            s = m("scheduleUpdate", e.$.S),
            o = e.R;
        if (!o) throw new Error(`Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
        let l;
        return t && (e.v |= 256, e.D && (e.D.map((([e, t]) => je(o, e, t))), e.D = void 0), l = je(o, "componentWillLoad")), s(), me(l, (() => be(e, o, t)))
    },
    me = (e, t) => ye(e) ? e.then(t) : t(),
    ye = e => e instanceof Promise || e && e.then && "function" == typeof e.then,
    be = async (e, t, n) => {
        var s;
        const o = e.$hostElement$,
            l = m("update", e.$.S),
            r = o["s-rc"];
        n && P(e);
        const i = m("render", e.$.S);
        ge(e, t, o, n), r && (r.map((e => e())), o["s-rc"] = void 0), i(), l(); {
            const t = null != (s = o["s-p"]) ? s : [],
                n = () => Se(e);
            0 === t.length ? n() : (Promise.all(t).then(n), e.v |= 4, t.length = 0)
        }
    },
    we = null,
    ge = (e, t, n, s) => {
        try {
            we = t, t = t.render && t.render(), e.v &= -17, e.v |= 2, ve(e, t, s)
        } catch (t) {
            Ve(t, e.$hostElement$)
        }
        return we = null, null
    },
    $e = () => we,
    Se = e => {
        const t = e.$.S,
            n = e.$hostElement$,
            s = m("postUpdate", t),
            o = e.R,
            l = e.L;
        64 & e.v ? (je(o, "componentDidUpdate"), s()) : (e.v |= 64, Oe(n), je(o, "componentDidLoad"), s(), e.F(n), l || Ce()), e.M(n), e.T && (e.T(), e.T = void 0), 512 & e.v && ct((() => pe(e, !1))), e.v &= -517
    },
    ke = e => {
        {
            const t = qe(e),
                n = t.$hostElement$.isConnected;
            return n && 2 == (18 & t.v) && pe(t, !1), n
        }
    },
    Ce = t => {
        Oe(Ze.documentElement), ct((() => D(Ye, "appload", {
            detail: {
                namespace: e
            }
        })))
    },
    je = (e, t, n) => {
        if (e && e[t]) try {
            return e[t](n)
        } catch (e) {
            Ve(e)
        }
    },
    Oe = e => {
        var n;
        return e.classList.add(null != (n = t.hydratedSelectorName) ? n : "hydrated")
    },
    xe = (e, t) => qe(e).P.get(t),
    Te = (e, t, n, s) => {
        const o = qe(e);
        if (!o) throw new Error(`Couldn't find host element for "${s.S}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`);
        const l = o.$hostElement$,
            r = o.P.get(t),
            i = o.v,
            a = o.R;
        n = T(n, s.A[t][0]);
        const c = Number.isNaN(r) && Number.isNaN(n);
        if ((!(8 & i) || void 0 === r) && n !== r && !c && (o.P.set(t, n), a)) {
            if (s.N && 128 & i) {
                const e = s.N[t];
                e && e.map((e => {
                    try {
                        a[e](n, r, t)
                    } catch (e) {
                        Ve(e, l)
                    }
                }))
            }
            2 == (18 & i) && pe(o, !1)
        }
    },
    Le = (e, t, n) => {
        var s;
        const o = e.prototype;
        if (t.A) {
            e.watchers && (t.N = e.watchers);
            const l = Object.entries(t.A);
            if (l.map((([e, [s]]) => {
                    31 & s || 2 & n && 32 & s ? Object.defineProperty(o, e, {
                        get() {
                            return xe(this, e)
                        },
                        set(n) {
                            Te(this, e, n, t)
                        },
                        configurable: !0,
                        enumerable: !0
                    }) : 1 & n && 64 & s && Object.defineProperty(o, e, {
                        value(...t) {
                            var n;
                            const s = qe(this);
                            return null == (n = null == s ? void 0 : s.U) ? void 0 : n.then((() => {
                                var n;
                                return null == (n = s.R) ? void 0 : n[e](...t)
                            }))
                        }
                    })
                })), 1 & n) {
                const n = new Map;
                o.attributeChangedCallback = function(e, s, l) {
                    et.jmp((() => {
                        var r;
                        const i = n.get(e);
                        if (this.hasOwnProperty(i)) l = this[i], delete this[i];
                        else {
                            if (o.hasOwnProperty(i) && "number" == typeof this[i] && this[i] == l) return;
                            if (null == i) {
                                const n = qe(this),
                                    o = null == n ? void 0 : n.v;
                                if (o && !(8 & o) && 128 & o && l !== s) {
                                    const o = n.R,
                                        i = null == (r = t.N) ? void 0 : r[e];
                                    null == i || i.forEach((t => {
                                        null != o[t] && o[t].call(o, l, s, e)
                                    }))
                                }
                                return
                            }
                        }
                        this[i] = (null !== l || "boolean" != typeof this[i]) && l
                    }))
                }, e.observedAttributes = Array.from(new Set([...Object.keys(null != (s = t.N) ? s : {}), ...l.filter((([e, t]) => 15 & t[0])).map((([e, s]) => {
                    var o;
                    const l = s[1] || e;
                    return n.set(l, e), 512 & s[0] && (null == (o = t.O) || o.push([e, l])), l
                }))]))
            }
        }
        return e
    },
    Re = async (e, t, n, s) => {
        let o;
        if (!(32 & t.v)) {
            if (t.v |= 32, n.W) {
                const s = _e(n);
                if (s && "then" in s) {
                    const e = y();
                    o = await s, e()
                } else o = s;
                if (!o) throw new Error(`Constructor for "${n.S}#${t.H}" was not found`);
                o.isProxied || (n.N = o.watchers, Le(o, n, 2), o.isProxied = !0);
                const l = m("createInstance", n.S);
                t.v |= 8;
                try {
                    new o(t)
                } catch (e) {
                    Ve(e)
                }
                t.v &= -9, t.v |= 128, l()
            } else {
                o = e.constructor;
                const n = e.localName;
                customElements.whenDefined(n).then((() => t.v |= 128))
            }
            if (o && o.style) {
                let e = o.style;
                const t = A(n);
                if (!Je.has(t)) {
                    const s = m("registerStyles", n.S);
                    F(t, e, !!(1 & n.v)), s()
                }
            }
        }
        const l = t.L,
            r = () => pe(t, !0);
        l && l["s-rc"] ? l["s-rc"].push(r) : r()
    },
    De = e => {},
    Ee = e => {
        if (!(1 & et.v)) {
            const t = qe(e),
                n = t.$,
                s = m("connectedCallback", n.S);
            if (1 & t.v) Ue(e, t, n.B), (null == t ? void 0 : t.R) || (null == t ? void 0 : t.q) && t.q.then((() => De()));
            else {
                t.v |= 1, 12 & n.v && Fe(e); {
                    let n = e;
                    for (; n = n.parentNode || n.host;)
                        if (n["s-p"]) {
                            de(t, t.L = n);
                            break
                        }
                }
                n.A && Object.entries(n.A).map((([t, [n]]) => {
                    if (31 & n && e.hasOwnProperty(t)) {
                        const n = e[t];
                        delete e[t], e[t] = n
                    }
                })), Re(e, t, n)
            }
            s()
        }
    },
    Fe = e => {
        const t = e["s-cr"] = Ze.createComment("");
        t["s-cn"] = !0, ue(e, t, e.firstChild)
    },
    Me = e => {
        je(e, "disconnectedCallback")
    },
    Pe = async e => {
        if (!(1 & et.v)) {
            const t = qe(e);
            t.G && (t.G.map((e => e())), t.G = void 0), (null == t ? void 0 : t.R) ? Me(t.R) : (null == t ? void 0 : t.q) && t.q.then((() => Me(t.R)))
        }
    },
    Ae = (e, t = {}) => {
        var n;
        const s = m(),
            o = [],
            l = t.exclude || [],
            r = Ye.customElements,
            i = Ze.head,
            a = i.querySelector("meta[charset]"),
            c = Ze.createElement("style"),
            d = [];
        let u, h = !0;
        Object.assign(et, t), et.I = new URL(t.resourcesUrl || "./", Ze.baseURI).href;
        let p = !1;
        if (e.map((e => {
                e[1].map((t => {
                    var n;
                    const s = {
                        v: t[0],
                        S: t[1],
                        A: t[2],
                        B: t[3]
                    };
                    4 & s.v && (p = !0), s.A = t[2], s.B = t[3], s.O = [], s.N = null != (n = t[4]) ? n : {};
                    const i = s.S,
                        a = class extends HTMLElement {
                            constructor(e) {
                                super(e), Ie(e = this, s), 1 & s.v && e.attachShadow({
                                    mode: "open"
                                })
                            }
                            connectedCallback() {
                                u && (clearTimeout(u), u = null), h ? d.push(this) : et.jmp((() => Ee(this)))
                            }
                            disconnectedCallback() {
                                et.jmp((() => Pe(this)))
                            }
                            componentOnReady() {
                                return qe(this).q
                            }
                        };
                    s.W = e[0], l.includes(i) || r.get(i) || (o.push(i), r.define(i, Le(a, s, 1)))
                }))
            })), o.length > 0 && (p && (c.textContent += w), c.textContent += o + b, c.innerHTML.length)) {
            c.setAttribute("data-styles", "");
            const e = null != (n = et.m) ? n : f(Ze);
            null != e && c.setAttribute("nonce", e), i.insertBefore(c, a ? a.nextSibling : i.firstChild)
        }
        h = !1, d.length ? d.map((e => e.connectedCallback())) : et.jmp((() => u = setTimeout(Ce, 30))), s()
    },
    Ne = (e, t) => t,
    Ue = (e, t, n, s) => {
        n && n.map((([n, s, o]) => {
            const l = He(e, n),
                r = We(t, o),
                i = ze(n);
            et.ael(l, s, r, i), (t.G = t.G || []).push((() => et.rel(l, s, r, i)))
        }))
    },
    We = (e, t) => n => {
        var s;
        try {
            256 & e.v ? null == (s = e.R) || s[t](n) : (e.D = e.D || []).push([t, n])
        } catch (e) {
            Ve(e)
        }
    },
    He = (e, t) => 8 & t ? Ye : e,
    ze = e => tt ? {
        passive: !!(1 & e),
        capture: !!(2 & e)
    } : !!(2 & e),
    Be = e => et.m = e,
    Qe = new WeakMap,
    qe = e => Qe.get(e),
    Ge = (e, t) => Qe.set(t.R = e, t),
    Ie = (e, t) => {
        const n = {
            v: 0,
            $hostElement$: e,
            $: t,
            P: new Map
        };
        return n.U = new Promise((e => n.M = e)), n.q = new Promise((e => n.F = e)), e["s-p"] = [], e["s-rc"] = [], Ue(e, n, t.B), Qe.set(e, n)
    },
    Ke = (e, t) => t in e,
    Ve = (e, t) => (0, console.error)(e, t),
    Xe = new Map,
    _e = (e, t, n) => {
        const s = e.S.replace(/-/g, "_"),
            o = e.W;
        if (!o) return;
        const l = Xe.get(o);
        return l ? l[s] : import (`./${o}.entry.js`).then((e => (Xe.set(o, e), e[s])), Ve)
    },
    Je = new Map,
    Ye = "undefined" != typeof window ? window : {},
    Ze = Ye.document || {
        head: {}
    },
    et = {
        v: 0,
        I: "",
        jmp: e => e(),
        raf: e => requestAnimationFrame(e),
        ael: (e, t, n, s) => e.addEventListener(t, n, s),
        rel: (e, t, n, s) => e.removeEventListener(t, n, s),
        ce: (e, t) => new CustomEvent(e, t)
    },
    tt = (() => {
        let e = !1;
        try {
            Ze.addEventListener("e", null, Object.defineProperty({}, "passive", {
                get() {
                    e = !0
                }
            }))
        } catch (e) {}
        return e
    })(),
    rt = e => Promise.resolve(e),
    lt = (() => {
        try {
            return new CSSStyleSheet, "function" == typeof(new CSSStyleSheet).replaceSync
        } catch (e) {}
        return !1
    })(),
    nt = !1,
    st = [],
    it = [],
    ot = (e, t) => n => {
        e.push(n), nt || (nt = !0, t && 4 & et.v ? ct(ft) : et.raf(ft))
    },
    at = e => {
        for (let t = 0; t < e.length; t++) try {
            e[t](performance.now())
        } catch (e) {
            Ve(e)
        }
        e.length = 0
    },
    ft = () => {
        at(st), at(it), (nt = st.length > 0) && et.raf(ft)
    },
    ct = e => rt().then(e),
    ut = ot(it, !0);
export {
    Ne as F, k as H, L as a, Ae as b, R as c, ke as f, $e as g, $ as h, rt as p, Ge as r, Be as s
};