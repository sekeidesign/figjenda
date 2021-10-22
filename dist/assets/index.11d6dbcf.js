const p$1 = function () {
  const o = document.createElement('link').relList
  if (o && o.supports && o.supports('modulepreload')) return
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a)
  new MutationObserver((a) => {
    for (const f of a)
      if (f.type === 'childList')
        for (const c of f.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && s(c)
  }).observe(document, { childList: !0, subtree: !0 })
  function i(a) {
    const f = {}
    return (
      a.integrity && (f.integrity = a.integrity),
      a.referrerpolicy && (f.referrerPolicy = a.referrerpolicy),
      a.crossorigin === 'use-credentials'
        ? (f.credentials = 'include')
        : a.crossorigin === 'anonymous'
        ? (f.credentials = 'omit')
        : (f.credentials = 'same-origin'),
      f
    )
  }
  function s(a) {
    if (a.ep) return
    a.ep = !0
    const f = i(a)
    fetch(a.href, f)
  }
}
p$1()
var react = { exports: {} },
  react_production_min = {}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var getOwnPropertySymbols = Object.getOwnPropertySymbols,
  hasOwnProperty = Object.prototype.hasOwnProperty,
  propIsEnumerable = Object.prototype.propertyIsEnumerable
function toObject(e) {
  if (e == null) throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
function shouldUseNative() {
  try {
    if (!Object.assign) return !1
    var e = new String('abc')
    if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1
    for (var o = {}, i = 0; i < 10; i++) o['_' + String.fromCharCode(i)] = i
    var s = Object.getOwnPropertyNames(o).map(function (f) {
      return o[f]
    })
    if (s.join('') !== '0123456789') return !1
    var a = {}
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function (f) {
        a[f] = f
      }),
      Object.keys(Object.assign({}, a)).join('') === 'abcdefghijklmnopqrst'
    )
  } catch (f) {
    return !1
  }
}
var objectAssign = shouldUseNative()
  ? Object.assign
  : function (e, o) {
      for (var i, s = toObject(e), a, f = 1; f < arguments.length; f++) {
        i = Object(arguments[f])
        for (var c in i) hasOwnProperty.call(i, c) && (s[c] = i[c])
        if (getOwnPropertySymbols) {
          a = getOwnPropertySymbols(i)
          for (var d = 0; d < a.length; d++) propIsEnumerable.call(i, a[d]) && (s[a[d]] = i[a[d]])
        }
      }
      return s
    }
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l = objectAssign,
  n = 60103,
  p = 60106
;(react_production_min.Fragment = 60107),
  (react_production_min.StrictMode = 60108),
  (react_production_min.Profiler = 60114)
var q = 60109,
  r$1 = 60110,
  t = 60112
react_production_min.Suspense = 60113
var u = 60115,
  v = 60116
if (typeof Symbol == 'function' && Symbol.for) {
  var w = Symbol.for
  ;(n = w('react.element')),
    (p = w('react.portal')),
    (react_production_min.Fragment = w('react.fragment')),
    (react_production_min.StrictMode = w('react.strict_mode')),
    (react_production_min.Profiler = w('react.profiler')),
    (q = w('react.provider')),
    (r$1 = w('react.context')),
    (t = w('react.forward_ref')),
    (react_production_min.Suspense = w('react.suspense')),
    (u = w('react.memo')),
    (v = w('react.lazy'))
}
var x = typeof Symbol == 'function' && Symbol.iterator
function y$1(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (x && e[x]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
function z(e) {
  for (
    var o = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, i = 1;
    i < arguments.length;
    i++
  )
    o += '&args[]=' + encodeURIComponent(arguments[i])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    o +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var A = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  B$1 = {}
function C(e, o, i) {
  ;(this.props = e), (this.context = o), (this.refs = B$1), (this.updater = i || A)
}
;(C.prototype.isReactComponent = {}),
  (C.prototype.setState = function (e, o) {
    if (typeof e != 'object' && typeof e != 'function' && e != null) throw Error(z(85))
    this.updater.enqueueSetState(this, e, o, 'setState')
  }),
  (C.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
  })
function D$1() {}
D$1.prototype = C.prototype
function E$1(e, o, i) {
  ;(this.props = e), (this.context = o), (this.refs = B$1), (this.updater = i || A)
}
var F$1 = (E$1.prototype = new D$1())
;(F$1.constructor = E$1), l(F$1, C.prototype), (F$1.isPureReactComponent = !0)
var G$1 = { current: null },
  H$1 = Object.prototype.hasOwnProperty,
  I$1 = { key: !0, ref: !0, __self: !0, __source: !0 }
function J(e, o, i) {
  var s,
    a = {},
    f = null,
    c = null
  if (o != null)
    for (s in (o.ref !== void 0 && (c = o.ref), o.key !== void 0 && (f = '' + o.key), o))
      H$1.call(o, s) && !I$1.hasOwnProperty(s) && (a[s] = o[s])
  var d = arguments.length - 2
  if (d === 1) a.children = i
  else if (1 < d) {
    for (var h = Array(d), j = 0; j < d; j++) h[j] = arguments[j + 2]
    a.children = h
  }
  if (e && e.defaultProps) for (s in ((d = e.defaultProps), d)) a[s] === void 0 && (a[s] = d[s])
  return { $$typeof: n, type: e, key: f, ref: c, props: a, _owner: G$1.current }
}
function K(e, o) {
  return { $$typeof: n, type: e.type, key: o, ref: e.ref, props: e.props, _owner: e._owner }
}
function L(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === n
}
function escape(e) {
  var o = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (i) {
      return o[i]
    })
  )
}
var M$1 = /\/+/g
function N$1(e, o) {
  return typeof e == 'object' && e !== null && e.key != null ? escape('' + e.key) : o.toString(36)
}
function O$1(e, o, i, s, a) {
  var f = typeof e
  ;(f === 'undefined' || f === 'boolean') && (e = null)
  var c = !1
  if (e === null) c = !0
  else
    switch (f) {
      case 'string':
      case 'number':
        c = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case n:
          case p:
            c = !0
        }
    }
  if (c)
    return (
      (c = e),
      (a = a(c)),
      (e = s === '' ? '.' + N$1(c, 0) : s),
      Array.isArray(a)
        ? ((i = ''),
          e != null && (i = e.replace(M$1, '$&/') + '/'),
          O$1(a, o, i, '', function (j) {
            return j
          }))
        : a != null &&
          (L(a) &&
            (a = K(
              a,
              i +
                (!a.key || (c && c.key === a.key) ? '' : ('' + a.key).replace(M$1, '$&/') + '/') +
                e,
            )),
          o.push(a)),
      1
    )
  if (((c = 0), (s = s === '' ? '.' : s + ':'), Array.isArray(e)))
    for (var d = 0; d < e.length; d++) {
      f = e[d]
      var h = s + N$1(f, d)
      c += O$1(f, o, i, h, a)
    }
  else if (((h = y$1(e)), typeof h == 'function'))
    for (e = h.call(e), d = 0; !(f = e.next()).done; )
      (f = f.value), (h = s + N$1(f, d++)), (c += O$1(f, o, i, h, a))
  else if (f === 'object')
    throw (
      ((o = '' + e),
      Error(
        z(31, o === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : o),
      ))
    )
  return c
}
function P$1(e, o, i) {
  if (e == null) return e
  var s = [],
    a = 0
  return (
    O$1(e, s, '', '', function (f) {
      return o.call(i, f, a++)
    }),
    s
  )
}
function Q(e) {
  if (e._status === -1) {
    var o = e._result
    ;(o = o()),
      (e._status = 0),
      (e._result = o),
      o.then(
        function (i) {
          e._status === 0 && ((i = i.default), (e._status = 1), (e._result = i))
        },
        function (i) {
          e._status === 0 && ((e._status = 2), (e._result = i))
        },
      )
  }
  if (e._status === 1) return e._result
  throw e._result
}
var R$1 = { current: null }
function S$1() {
  var e = R$1.current
  if (e === null) throw Error(z(321))
  return e
}
var T$1 = {
  ReactCurrentDispatcher: R$1,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: G$1,
  IsSomeRendererActing: { current: !1 },
  assign: l,
}
;(react_production_min.Children = {
  map: P$1,
  forEach: function (e, o, i) {
    P$1(
      e,
      function () {
        o.apply(this, arguments)
      },
      i,
    )
  },
  count: function (e) {
    var o = 0
    return (
      P$1(e, function () {
        o++
      }),
      o
    )
  },
  toArray: function (e) {
    return (
      P$1(e, function (o) {
        return o
      }) || []
    )
  },
  only: function (e) {
    if (!L(e)) throw Error(z(143))
    return e
  },
}),
  (react_production_min.Component = C),
  (react_production_min.PureComponent = E$1),
  (react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1),
  (react_production_min.cloneElement = function (e, o, i) {
    if (e == null) throw Error(z(267, e))
    var s = l({}, e.props),
      a = e.key,
      f = e.ref,
      c = e._owner
    if (o != null) {
      if (
        (o.ref !== void 0 && ((f = o.ref), (c = G$1.current)),
        o.key !== void 0 && (a = '' + o.key),
        e.type && e.type.defaultProps)
      )
        var d = e.type.defaultProps
      for (h in o)
        H$1.call(o, h) &&
          !I$1.hasOwnProperty(h) &&
          (s[h] = o[h] === void 0 && d !== void 0 ? d[h] : o[h])
    }
    var h = arguments.length - 2
    if (h === 1) s.children = i
    else if (1 < h) {
      d = Array(h)
      for (var j = 0; j < h; j++) d[j] = arguments[j + 2]
      s.children = d
    }
    return { $$typeof: n, type: e.type, key: a, ref: f, props: s, _owner: c }
  }),
  (react_production_min.createContext = function (e, o) {
    return (
      o === void 0 && (o = null),
      (e = {
        $$typeof: r$1,
        _calculateChangedBits: o,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }),
      (e.Provider = { $$typeof: q, _context: e }),
      (e.Consumer = e)
    )
  }),
  (react_production_min.createElement = J),
  (react_production_min.createFactory = function (e) {
    var o = J.bind(null, e)
    return (o.type = e), o
  }),
  (react_production_min.createRef = function () {
    return { current: null }
  }),
  (react_production_min.forwardRef = function (e) {
    return { $$typeof: t, render: e }
  }),
  (react_production_min.isValidElement = L),
  (react_production_min.lazy = function (e) {
    return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: Q }
  }),
  (react_production_min.memo = function (e, o) {
    return { $$typeof: u, type: e, compare: o === void 0 ? null : o }
  }),
  (react_production_min.useCallback = function (e, o) {
    return S$1().useCallback(e, o)
  }),
  (react_production_min.useContext = function (e, o) {
    return S$1().useContext(e, o)
  }),
  (react_production_min.useDebugValue = function () {}),
  (react_production_min.useEffect = function (e, o) {
    return S$1().useEffect(e, o)
  }),
  (react_production_min.useImperativeHandle = function (e, o, i) {
    return S$1().useImperativeHandle(e, o, i)
  }),
  (react_production_min.useLayoutEffect = function (e, o) {
    return S$1().useLayoutEffect(e, o)
  }),
  (react_production_min.useMemo = function (e, o) {
    return S$1().useMemo(e, o)
  }),
  (react_production_min.useReducer = function (e, o, i) {
    return S$1().useReducer(e, o, i)
  }),
  (react_production_min.useRef = function (e) {
    return S$1().useRef(e)
  }),
  (react_production_min.useState = function (e) {
    return S$1().useState(e)
  }),
  (react_production_min.version = '17.0.2'),
  (react.exports = react_production_min)
var React = react.exports,
  reactDom = { exports: {} },
  reactDom_production_min = {},
  scheduler = { exports: {} },
  scheduler_production_min = {}
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  var o, i, s, a
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var f = performance
    e.unstable_now = function () {
      return f.now()
    }
  } else {
    var c = Date,
      d = c.now()
    e.unstable_now = function () {
      return c.now() - d
    }
  }
  if (typeof window == 'undefined' || typeof MessageChannel != 'function') {
    var h = null,
      j = null,
      nn = function () {
        if (h !== null)
          try {
            var tn = e.unstable_now()
            h(!0, tn), (h = null)
          } catch (cn) {
            throw (setTimeout(nn, 0), cn)
          }
      }
    ;(o = function (tn) {
      h !== null ? setTimeout(o, 0, tn) : ((h = tn), setTimeout(nn, 0))
    }),
      (i = function (tn, cn) {
        j = setTimeout(tn, cn)
      }),
      (s = function () {
        clearTimeout(j)
      }),
      (e.unstable_shouldYield = function () {
        return !1
      }),
      (a = e.unstable_forceFrameRate = function () {})
  } else {
    var fn = window.setTimeout,
      _e = window.clearTimeout
    if (typeof console != 'undefined') {
      var rn = window.cancelAnimationFrame
      typeof window.requestAnimationFrame != 'function' &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
        ),
        typeof rn != 'function' &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          )
    }
    var un = !1,
      ln = null,
      _ = -1,
      g = 5,
      k = 0
    ;(e.unstable_shouldYield = function () {
      return e.unstable_now() >= k
    }),
      (a = function () {}),
      (e.unstable_forceFrameRate = function (tn) {
        0 > tn || 125 < tn
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (g = 0 < tn ? Math.floor(1e3 / tn) : 5)
      })
    var $ = new MessageChannel(),
      b = $.port2
    ;($.port1.onmessage = function () {
      if (ln !== null) {
        var tn = e.unstable_now()
        k = tn + g
        try {
          ln(!0, tn) ? b.postMessage(null) : ((un = !1), (ln = null))
        } catch (cn) {
          throw (b.postMessage(null), cn)
        }
      } else un = !1
    }),
      (o = function (tn) {
        ;(ln = tn), un || ((un = !0), b.postMessage(null))
      }),
      (i = function (tn, cn) {
        _ = fn(function () {
          tn(e.unstable_now())
        }, cn)
      }),
      (s = function () {
        _e(_), (_ = -1)
      })
  }
  function an(tn, cn) {
    var pn = tn.length
    tn.push(cn)
    e: for (;;) {
      var mn = (pn - 1) >>> 1,
        yn = tn[mn]
      if (yn !== void 0 && 0 < dn(yn, cn)) (tn[mn] = cn), (tn[pn] = yn), (pn = mn)
      else break e
    }
  }
  function en(tn) {
    return (tn = tn[0]), tn === void 0 ? null : tn
  }
  function sn(tn) {
    var cn = tn[0]
    if (cn !== void 0) {
      var pn = tn.pop()
      if (pn !== cn) {
        tn[0] = pn
        e: for (var mn = 0, yn = tn.length; mn < yn; ) {
          var kn = 2 * (mn + 1) - 1,
            Sn = tn[kn],
            Cn = kn + 1,
            En = tn[Cn]
          if (Sn !== void 0 && 0 > dn(Sn, pn))
            En !== void 0 && 0 > dn(En, Sn)
              ? ((tn[mn] = En), (tn[Cn] = pn), (mn = Cn))
              : ((tn[mn] = Sn), (tn[kn] = pn), (mn = kn))
          else if (En !== void 0 && 0 > dn(En, pn)) (tn[mn] = En), (tn[Cn] = pn), (mn = Cn)
          else break e
        }
      }
      return cn
    }
    return null
  }
  function dn(tn, cn) {
    var pn = tn.sortIndex - cn.sortIndex
    return pn !== 0 ? pn : tn.id - cn.id
  }
  var on = [],
    hn = [],
    Pn = 1,
    gn = null,
    vn = 3,
    xn = !1,
    wn = !1,
    _n = !1
  function Nn(tn) {
    for (var cn = en(hn); cn !== null; ) {
      if (cn.callback === null) sn(hn)
      else if (cn.startTime <= tn) sn(hn), (cn.sortIndex = cn.expirationTime), an(on, cn)
      else break
      cn = en(hn)
    }
  }
  function Tn(tn) {
    if (((_n = !1), Nn(tn), !wn))
      if (en(on) !== null) (wn = !0), o(Ln)
      else {
        var cn = en(hn)
        cn !== null && i(Tn, cn.startTime - tn)
      }
  }
  function Ln(tn, cn) {
    ;(wn = !1), _n && ((_n = !1), s()), (xn = !0)
    var pn = vn
    try {
      for (
        Nn(cn), gn = en(on);
        gn !== null && (!(gn.expirationTime > cn) || (tn && !e.unstable_shouldYield()));

      ) {
        var mn = gn.callback
        if (typeof mn == 'function') {
          ;(gn.callback = null), (vn = gn.priorityLevel)
          var yn = mn(gn.expirationTime <= cn)
          ;(cn = e.unstable_now()),
            typeof yn == 'function' ? (gn.callback = yn) : gn === en(on) && sn(on),
            Nn(cn)
        } else sn(on)
        gn = en(on)
      }
      if (gn !== null) var kn = !0
      else {
        var Sn = en(hn)
        Sn !== null && i(Tn, Sn.startTime - cn), (kn = !1)
      }
      return kn
    } finally {
      ;(gn = null), (vn = pn), (xn = !1)
    }
  }
  var On = a
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (tn) {
      tn.callback = null
    }),
    (e.unstable_continueExecution = function () {
      wn || xn || ((wn = !0), o(Ln))
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return vn
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return en(on)
    }),
    (e.unstable_next = function (tn) {
      switch (vn) {
        case 1:
        case 2:
        case 3:
          var cn = 3
          break
        default:
          cn = vn
      }
      var pn = vn
      vn = cn
      try {
        return tn()
      } finally {
        vn = pn
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = On),
    (e.unstable_runWithPriority = function (tn, cn) {
      switch (tn) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          tn = 3
      }
      var pn = vn
      vn = tn
      try {
        return cn()
      } finally {
        vn = pn
      }
    }),
    (e.unstable_scheduleCallback = function (tn, cn, pn) {
      var mn = e.unstable_now()
      switch (
        (typeof pn == 'object' && pn !== null
          ? ((pn = pn.delay), (pn = typeof pn == 'number' && 0 < pn ? mn + pn : mn))
          : (pn = mn),
        tn)
      ) {
        case 1:
          var yn = -1
          break
        case 2:
          yn = 250
          break
        case 5:
          yn = 1073741823
          break
        case 4:
          yn = 1e4
          break
        default:
          yn = 5e3
      }
      return (
        (yn = pn + yn),
        (tn = {
          id: Pn++,
          callback: cn,
          priorityLevel: tn,
          startTime: pn,
          expirationTime: yn,
          sortIndex: -1,
        }),
        pn > mn
          ? ((tn.sortIndex = pn),
            an(hn, tn),
            en(on) === null && tn === en(hn) && (_n ? s() : (_n = !0), i(Tn, pn - mn)))
          : ((tn.sortIndex = yn), an(on, tn), wn || xn || ((wn = !0), o(Ln))),
        tn
      )
    }),
    (e.unstable_wrapCallback = function (tn) {
      var cn = vn
      return function () {
        var pn = vn
        vn = cn
        try {
          return tn.apply(this, arguments)
        } finally {
          vn = pn
        }
      }
    })
})(scheduler_production_min),
  (scheduler.exports = scheduler_production_min)
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aa = react.exports,
  m = objectAssign,
  r = scheduler.exports
function y(e) {
  for (
    var o = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, i = 1;
    i < arguments.length;
    i++
  )
    o += '&args[]=' + encodeURIComponent(arguments[i])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    o +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
if (!aa) throw Error(y(227))
var ba = new Set(),
  ca = {}
function da(e, o) {
  ea(e, o), ea(e + 'Capture', o)
}
function ea(e, o) {
  for (ca[e] = o, e = 0; e < o.length; e++) ba.add(o[e])
}
var fa = !(
    typeof window == 'undefined' ||
    typeof window.document == 'undefined' ||
    typeof window.document.createElement == 'undefined'
  ),
  ha =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ia = Object.prototype.hasOwnProperty,
  ja = {},
  ka = {}
function la(e) {
  return ia.call(ka, e) ? !0 : ia.call(ja, e) ? !1 : ha.test(e) ? (ka[e] = !0) : ((ja[e] = !0), !1)
}
function ma(e, o, i, s) {
  if (i !== null && i.type === 0) return !1
  switch (typeof o) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return s
        ? !1
        : i !== null
        ? !i.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function na(e, o, i, s) {
  if (o === null || typeof o == 'undefined' || ma(e, o, i, s)) return !0
  if (s) return !1
  if (i !== null)
    switch (i.type) {
      case 3:
        return !o
      case 4:
        return o === !1
      case 5:
        return isNaN(o)
      case 6:
        return isNaN(o) || 1 > o
    }
  return !1
}
function B(e, o, i, s, a, f, c) {
  ;(this.acceptsBooleans = o === 2 || o === 3 || o === 4),
    (this.attributeName = s),
    (this.attributeNamespace = a),
    (this.mustUseProperty = i),
    (this.propertyName = e),
    (this.type = o),
    (this.sanitizeURL = f),
    (this.removeEmptyString = c)
}
var D = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    D[e] = new B(e, 0, !1, e, null, !1, !1)
  }),
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var o = e[0]
    D[o] = new B(o, 1, !1, e[1], null, !1, !1)
  }),
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    D[e] = new B(e, 2, !1, e.toLowerCase(), null, !1, !1)
  }),
  ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
    D[e] = new B(e, 2, !1, e, null, !1, !1)
  }),
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      D[e] = new B(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }),
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    D[e] = new B(e, 3, !0, e, null, !1, !1)
  }),
  ['capture', 'download'].forEach(function (e) {
    D[e] = new B(e, 4, !1, e, null, !1, !1)
  }),
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    D[e] = new B(e, 6, !1, e, null, !1, !1)
  }),
  ['rowSpan', 'start'].forEach(function (e) {
    D[e] = new B(e, 5, !1, e.toLowerCase(), null, !1, !1)
  })
var oa = /[\-:]([a-z])/g
function pa(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var o = e.replace(oa, pa)
    D[o] = new B(o, 1, !1, e, null, !1, !1)
  }),
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var o = e.replace(oa, pa)
      D[o] = new B(o, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
    }),
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var o = e.replace(oa, pa)
    D[o] = new B(o, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
  }),
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    D[e] = new B(e, 1, !1, e.toLowerCase(), null, !1, !1)
  }),
  (D.xlinkHref = new B('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    D[e] = new B(e, 1, !1, e.toLowerCase(), null, !0, !0)
  })
function qa(e, o, i, s) {
  var a = D.hasOwnProperty(o) ? D[o] : null,
    f =
      a !== null
        ? a.type === 0
        : s
        ? !1
        : !(!(2 < o.length) || (o[0] !== 'o' && o[0] !== 'O') || (o[1] !== 'n' && o[1] !== 'N'))
  f ||
    (na(o, i, a, s) && (i = null),
    s || a === null
      ? la(o) && (i === null ? e.removeAttribute(o) : e.setAttribute(o, '' + i))
      : a.mustUseProperty
      ? (e[a.propertyName] = i === null ? (a.type === 3 ? !1 : '') : i)
      : ((o = a.attributeName),
        (s = a.attributeNamespace),
        i === null
          ? e.removeAttribute(o)
          : ((a = a.type),
            (i = a === 3 || (a === 4 && i === !0) ? '' : '' + i),
            s ? e.setAttributeNS(s, o, i) : e.setAttribute(o, i))))
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sa = 60103,
  ta = 60106,
  ua = 60107,
  wa = 60108,
  xa = 60114,
  ya = 60109,
  za = 60110,
  Aa = 60112,
  Ba = 60113,
  Ca = 60120,
  Da = 60115,
  Ea = 60116,
  Fa = 60121,
  Ga = 60128,
  Ha = 60129,
  Ia = 60130,
  Ja = 60131
if (typeof Symbol == 'function' && Symbol.for) {
  var E = Symbol.for
  ;(sa = E('react.element')),
    (ta = E('react.portal')),
    (ua = E('react.fragment')),
    (wa = E('react.strict_mode')),
    (xa = E('react.profiler')),
    (ya = E('react.provider')),
    (za = E('react.context')),
    (Aa = E('react.forward_ref')),
    (Ba = E('react.suspense')),
    (Ca = E('react.suspense_list')),
    (Da = E('react.memo')),
    (Ea = E('react.lazy')),
    (Fa = E('react.block')),
    E('react.scope'),
    (Ga = E('react.opaque.id')),
    (Ha = E('react.debug_trace_mode')),
    (Ia = E('react.offscreen')),
    (Ja = E('react.legacy_hidden'))
}
var Ka = typeof Symbol == 'function' && Symbol.iterator
function La(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ka && e[Ka]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Ma
function Na(e) {
  if (Ma === void 0)
    try {
      throw Error()
    } catch (i) {
      var o = i.stack.trim().match(/\n( *(at )?)/)
      Ma = (o && o[1]) || ''
    }
  return (
    `
` +
    Ma +
    e
  )
}
var Oa = !1
function Pa(e, o) {
  if (!e || Oa) return ''
  Oa = !0
  var i = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (o)
      if (
        ((o = function () {
          throw Error()
        }),
        Object.defineProperty(o.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(o, [])
        } catch (h) {
          var s = h
        }
        Reflect.construct(e, [], o)
      } else {
        try {
          o.call()
        } catch (h) {
          s = h
        }
        e.call(o.prototype)
      }
    else {
      try {
        throw Error()
      } catch (h) {
        s = h
      }
      e()
    }
  } catch (h) {
    if (h && s && typeof h.stack == 'string') {
      for (
        var a = h.stack.split(`
`),
          f = s.stack.split(`
`),
          c = a.length - 1,
          d = f.length - 1;
        1 <= c && 0 <= d && a[c] !== f[d];

      )
        d--
      for (; 1 <= c && 0 <= d; c--, d--)
        if (a[c] !== f[d]) {
          if (c !== 1 || d !== 1)
            do
              if ((c--, d--, 0 > d || a[c] !== f[d]))
                return (
                  `
` + a[c].replace(' at new ', ' at ')
                )
            while (1 <= c && 0 <= d)
          break
        }
    }
  } finally {
    ;(Oa = !1), (Error.prepareStackTrace = i)
  }
  return (e = e ? e.displayName || e.name : '') ? Na(e) : ''
}
function Qa(e) {
  switch (e.tag) {
    case 5:
      return Na(e.type)
    case 16:
      return Na('Lazy')
    case 13:
      return Na('Suspense')
    case 19:
      return Na('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Pa(e.type, !1)), e
    case 11:
      return (e = Pa(e.type.render, !1)), e
    case 22:
      return (e = Pa(e.type._render, !1)), e
    case 1:
      return (e = Pa(e.type, !0)), e
    default:
      return ''
  }
}
function Ra(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case ua:
      return 'Fragment'
    case ta:
      return 'Portal'
    case xa:
      return 'Profiler'
    case wa:
      return 'StrictMode'
    case Ba:
      return 'Suspense'
    case Ca:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case za:
        return (e.displayName || 'Context') + '.Consumer'
      case ya:
        return (e._context.displayName || 'Context') + '.Provider'
      case Aa:
        var o = e.render
        return (
          (o = o.displayName || o.name || ''),
          e.displayName || (o !== '' ? 'ForwardRef(' + o + ')' : 'ForwardRef')
        )
      case Da:
        return Ra(e.type)
      case Fa:
        return Ra(e._render)
      case Ea:
        ;(o = e._payload), (e = e._init)
        try {
          return Ra(e(o))
        } catch (i) {}
    }
  return null
}
function Sa(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'object':
    case 'string':
    case 'undefined':
      return e
    default:
      return ''
  }
}
function Ta(e) {
  var o = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (o === 'checkbox' || o === 'radio')
}
function Ua(e) {
  var o = Ta(e) ? 'checked' : 'value',
    i = Object.getOwnPropertyDescriptor(e.constructor.prototype, o),
    s = '' + e[o]
  if (
    !e.hasOwnProperty(o) &&
    typeof i != 'undefined' &&
    typeof i.get == 'function' &&
    typeof i.set == 'function'
  ) {
    var a = i.get,
      f = i.set
    return (
      Object.defineProperty(e, o, {
        configurable: !0,
        get: function () {
          return a.call(this)
        },
        set: function (c) {
          ;(s = '' + c), f.call(this, c)
        },
      }),
      Object.defineProperty(e, o, { enumerable: i.enumerable }),
      {
        getValue: function () {
          return s
        },
        setValue: function (c) {
          s = '' + c
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[o]
        },
      }
    )
  }
}
function Va(e) {
  e._valueTracker || (e._valueTracker = Ua(e))
}
function Wa(e) {
  if (!e) return !1
  var o = e._valueTracker
  if (!o) return !0
  var i = o.getValue(),
    s = ''
  return (
    e && (s = Ta(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = s),
    e !== i ? (o.setValue(e), !0) : !1
  )
}
function Xa(e) {
  if (((e = e || (typeof document != 'undefined' ? document : void 0)), typeof e == 'undefined'))
    return null
  try {
    return e.activeElement || e.body
  } catch (o) {
    return e.body
  }
}
function Ya(e, o) {
  var i = o.checked
  return m({}, o, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: i ?? e._wrapperState.initialChecked,
  })
}
function Za(e, o) {
  var i = o.defaultValue == null ? '' : o.defaultValue,
    s = o.checked != null ? o.checked : o.defaultChecked
  ;(i = Sa(o.value != null ? o.value : i)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: i,
      controlled: o.type === 'checkbox' || o.type === 'radio' ? o.checked != null : o.value != null,
    })
}
function $a(e, o) {
  ;(o = o.checked), o != null && qa(e, 'checked', o, !1)
}
function ab(e, o) {
  $a(e, o)
  var i = Sa(o.value),
    s = o.type
  if (i != null)
    s === 'number'
      ? ((i === 0 && e.value === '') || e.value != i) && (e.value = '' + i)
      : e.value !== '' + i && (e.value = '' + i)
  else if (s === 'submit' || s === 'reset') {
    e.removeAttribute('value')
    return
  }
  o.hasOwnProperty('value')
    ? bb(e, o.type, i)
    : o.hasOwnProperty('defaultValue') && bb(e, o.type, Sa(o.defaultValue)),
    o.checked == null && o.defaultChecked != null && (e.defaultChecked = !!o.defaultChecked)
}
function cb(e, o, i) {
  if (o.hasOwnProperty('value') || o.hasOwnProperty('defaultValue')) {
    var s = o.type
    if (!((s !== 'submit' && s !== 'reset') || (o.value !== void 0 && o.value !== null))) return
    ;(o = '' + e._wrapperState.initialValue),
      i || o === e.value || (e.value = o),
      (e.defaultValue = o)
  }
  ;(i = e.name),
    i !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    i !== '' && (e.name = i)
}
function bb(e, o, i) {
  ;(o !== 'number' || Xa(e.ownerDocument) !== e) &&
    (i == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + i && (e.defaultValue = '' + i))
}
function db(e) {
  var o = ''
  return (
    aa.Children.forEach(e, function (i) {
      i != null && (o += i)
    }),
    o
  )
}
function eb(e, o) {
  return (e = m({ children: void 0 }, o)), (o = db(o.children)) && (e.children = o), e
}
function fb(e, o, i, s) {
  if (((e = e.options), o)) {
    o = {}
    for (var a = 0; a < i.length; a++) o['$' + i[a]] = !0
    for (i = 0; i < e.length; i++)
      (a = o.hasOwnProperty('$' + e[i].value)),
        e[i].selected !== a && (e[i].selected = a),
        a && s && (e[i].defaultSelected = !0)
  } else {
    for (i = '' + Sa(i), o = null, a = 0; a < e.length; a++) {
      if (e[a].value === i) {
        ;(e[a].selected = !0), s && (e[a].defaultSelected = !0)
        return
      }
      o !== null || e[a].disabled || (o = e[a])
    }
    o !== null && (o.selected = !0)
  }
}
function gb(e, o) {
  if (o.dangerouslySetInnerHTML != null) throw Error(y(91))
  return m({}, o, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function hb(e, o) {
  var i = o.value
  if (i == null) {
    if (((i = o.children), (o = o.defaultValue), i != null)) {
      if (o != null) throw Error(y(92))
      if (Array.isArray(i)) {
        if (!(1 >= i.length)) throw Error(y(93))
        i = i[0]
      }
      o = i
    }
    o == null && (o = ''), (i = o)
  }
  e._wrapperState = { initialValue: Sa(i) }
}
function ib(e, o) {
  var i = Sa(o.value),
    s = Sa(o.defaultValue)
  i != null &&
    ((i = '' + i),
    i !== e.value && (e.value = i),
    o.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
    s != null && (e.defaultValue = '' + s)
}
function jb(e) {
  var o = e.textContent
  o === e._wrapperState.initialValue && o !== '' && o !== null && (e.value = o)
}
var kb = {
  html: 'http://www.w3.org/1999/xhtml',
  mathml: 'http://www.w3.org/1998/Math/MathML',
  svg: 'http://www.w3.org/2000/svg',
}
function lb(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function mb(e, o) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? lb(o)
    : e === 'http://www.w3.org/2000/svg' && o === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var nb,
  ob = (function (e) {
    return typeof MSApp != 'undefined' && MSApp.execUnsafeLocalFunction
      ? function (o, i, s, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(o, i, s, a)
          })
        }
      : e
  })(function (e, o) {
    if (e.namespaceURI !== kb.svg || 'innerHTML' in e) e.innerHTML = o
    else {
      for (
        nb = nb || document.createElement('div'),
          nb.innerHTML = '<svg>' + o.valueOf().toString() + '</svg>',
          o = nb.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; o.firstChild; ) e.appendChild(o.firstChild)
    }
  })
function pb(e, o) {
  if (o) {
    var i = e.firstChild
    if (i && i === e.lastChild && i.nodeType === 3) {
      i.nodeValue = o
      return
    }
  }
  e.textContent = o
}
var qb = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  rb = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(qb).forEach(function (e) {
  rb.forEach(function (o) {
    ;(o = o + e.charAt(0).toUpperCase() + e.substring(1)), (qb[o] = qb[e])
  })
})
function sb(e, o, i) {
  return o == null || typeof o == 'boolean' || o === ''
    ? ''
    : i || typeof o != 'number' || o === 0 || (qb.hasOwnProperty(e) && qb[e])
    ? ('' + o).trim()
    : o + 'px'
}
function tb(e, o) {
  e = e.style
  for (var i in o)
    if (o.hasOwnProperty(i)) {
      var s = i.indexOf('--') === 0,
        a = sb(i, o[i], s)
      i === 'float' && (i = 'cssFloat'), s ? e.setProperty(i, a) : (e[i] = a)
    }
}
var ub = m(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function vb(e, o) {
  if (o) {
    if (ub[e] && (o.children != null || o.dangerouslySetInnerHTML != null)) throw Error(y(137, e))
    if (o.dangerouslySetInnerHTML != null) {
      if (o.children != null) throw Error(y(60))
      if (!(typeof o.dangerouslySetInnerHTML == 'object' && '__html' in o.dangerouslySetInnerHTML))
        throw Error(y(61))
    }
    if (o.style != null && typeof o.style != 'object') throw Error(y(62))
  }
}
function wb(e, o) {
  if (e.indexOf('-') === -1) return typeof o.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
function xb(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var yb = null,
  zb = null,
  Ab = null
function Bb(e) {
  if ((e = Cb(e))) {
    if (typeof yb != 'function') throw Error(y(280))
    var o = e.stateNode
    o && ((o = Db(o)), yb(e.stateNode, e.type, o))
  }
}
function Eb(e) {
  zb ? (Ab ? Ab.push(e) : (Ab = [e])) : (zb = e)
}
function Fb() {
  if (zb) {
    var e = zb,
      o = Ab
    if (((Ab = zb = null), Bb(e), o)) for (e = 0; e < o.length; e++) Bb(o[e])
  }
}
function Gb(e, o) {
  return e(o)
}
function Hb(e, o, i, s, a) {
  return e(o, i, s, a)
}
function Ib() {}
var Jb = Gb,
  Kb = !1,
  Lb = !1
function Mb() {
  ;(zb !== null || Ab !== null) && (Ib(), Fb())
}
function Nb(e, o, i) {
  if (Lb) return e(o, i)
  Lb = !0
  try {
    return Jb(e, o, i)
  } finally {
    ;(Lb = !1), Mb()
  }
}
function Ob(e, o) {
  var i = e.stateNode
  if (i === null) return null
  var s = Db(i)
  if (s === null) return null
  i = s[o]
  e: switch (o) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(s = !s.disabled) ||
        ((e = e.type),
        (s = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !s)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (i && typeof i != 'function') throw Error(y(231, o, typeof i))
  return i
}
var Pb = !1
if (fa)
  try {
    var Qb = {}
    Object.defineProperty(Qb, 'passive', {
      get: function () {
        Pb = !0
      },
    }),
      window.addEventListener('test', Qb, Qb),
      window.removeEventListener('test', Qb, Qb)
  } catch (e) {
    Pb = !1
  }
function Rb(e, o, i, s, a, f, c, d, h) {
  var j = Array.prototype.slice.call(arguments, 3)
  try {
    o.apply(i, j)
  } catch (nn) {
    this.onError(nn)
  }
}
var Sb = !1,
  Tb = null,
  Ub = !1,
  Vb = null,
  Wb = {
    onError: function (e) {
      ;(Sb = !0), (Tb = e)
    },
  }
function Xb(e, o, i, s, a, f, c, d, h) {
  ;(Sb = !1), (Tb = null), Rb.apply(Wb, arguments)
}
function Yb(e, o, i, s, a, f, c, d, h) {
  if ((Xb.apply(this, arguments), Sb)) {
    if (Sb) {
      var j = Tb
      ;(Sb = !1), (Tb = null)
    } else throw Error(y(198))
    Ub || ((Ub = !0), (Vb = j))
  }
}
function Zb(e) {
  var o = e,
    i = e
  if (e.alternate) for (; o.return; ) o = o.return
  else {
    e = o
    do (o = e), (o.flags & 1026) != 0 && (i = o.return), (e = o.return)
    while (e)
  }
  return o.tag === 3 ? i : null
}
function $b(e) {
  if (e.tag === 13) {
    var o = e.memoizedState
    if ((o === null && ((e = e.alternate), e !== null && (o = e.memoizedState)), o !== null))
      return o.dehydrated
  }
  return null
}
function ac(e) {
  if (Zb(e) !== e) throw Error(y(188))
}
function bc(e) {
  var o = e.alternate
  if (!o) {
    if (((o = Zb(e)), o === null)) throw Error(y(188))
    return o !== e ? null : e
  }
  for (var i = e, s = o; ; ) {
    var a = i.return
    if (a === null) break
    var f = a.alternate
    if (f === null) {
      if (((s = a.return), s !== null)) {
        i = s
        continue
      }
      break
    }
    if (a.child === f.child) {
      for (f = a.child; f; ) {
        if (f === i) return ac(a), e
        if (f === s) return ac(a), o
        f = f.sibling
      }
      throw Error(y(188))
    }
    if (i.return !== s.return) (i = a), (s = f)
    else {
      for (var c = !1, d = a.child; d; ) {
        if (d === i) {
          ;(c = !0), (i = a), (s = f)
          break
        }
        if (d === s) {
          ;(c = !0), (s = a), (i = f)
          break
        }
        d = d.sibling
      }
      if (!c) {
        for (d = f.child; d; ) {
          if (d === i) {
            ;(c = !0), (i = f), (s = a)
            break
          }
          if (d === s) {
            ;(c = !0), (s = f), (i = a)
            break
          }
          d = d.sibling
        }
        if (!c) throw Error(y(189))
      }
    }
    if (i.alternate !== s) throw Error(y(190))
  }
  if (i.tag !== 3) throw Error(y(188))
  return i.stateNode.current === i ? e : o
}
function cc(e) {
  if (((e = bc(e)), !e)) return null
  for (var o = e; ; ) {
    if (o.tag === 5 || o.tag === 6) return o
    if (o.child) (o.child.return = o), (o = o.child)
    else {
      if (o === e) break
      for (; !o.sibling; ) {
        if (!o.return || o.return === e) return null
        o = o.return
      }
      ;(o.sibling.return = o.return), (o = o.sibling)
    }
  }
  return null
}
function dc(e, o) {
  for (var i = e.alternate; o !== null; ) {
    if (o === e || o === i) return !0
    o = o.return
  }
  return !1
}
var ec,
  fc,
  gc,
  hc,
  ic = !1,
  jc = [],
  kc = null,
  lc = null,
  mc = null,
  nc = new Map(),
  oc = new Map(),
  pc = [],
  qc =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function rc(e, o, i, s, a) {
  return {
    blockedOn: e,
    domEventName: o,
    eventSystemFlags: i | 16,
    nativeEvent: a,
    targetContainers: [s],
  }
}
function sc(e, o) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      kc = null
      break
    case 'dragenter':
    case 'dragleave':
      lc = null
      break
    case 'mouseover':
    case 'mouseout':
      mc = null
      break
    case 'pointerover':
    case 'pointerout':
      nc.delete(o.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      oc.delete(o.pointerId)
  }
}
function tc(e, o, i, s, a, f) {
  return e === null || e.nativeEvent !== f
    ? ((e = rc(o, i, s, a, f)), o !== null && ((o = Cb(o)), o !== null && fc(o)), e)
    : ((e.eventSystemFlags |= s),
      (o = e.targetContainers),
      a !== null && o.indexOf(a) === -1 && o.push(a),
      e)
}
function uc(e, o, i, s, a) {
  switch (o) {
    case 'focusin':
      return (kc = tc(kc, e, o, i, s, a)), !0
    case 'dragenter':
      return (lc = tc(lc, e, o, i, s, a)), !0
    case 'mouseover':
      return (mc = tc(mc, e, o, i, s, a)), !0
    case 'pointerover':
      var f = a.pointerId
      return nc.set(f, tc(nc.get(f) || null, e, o, i, s, a)), !0
    case 'gotpointercapture':
      return (f = a.pointerId), oc.set(f, tc(oc.get(f) || null, e, o, i, s, a)), !0
  }
  return !1
}
function vc(e) {
  var o = wc(e.target)
  if (o !== null) {
    var i = Zb(o)
    if (i !== null) {
      if (((o = i.tag), o === 13)) {
        if (((o = $b(i)), o !== null)) {
          ;(e.blockedOn = o),
            hc(e.lanePriority, function () {
              r.unstable_runWithPriority(e.priority, function () {
                gc(i)
              })
            })
          return
        }
      } else if (o === 3 && i.stateNode.hydrate) {
        e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function xc(e) {
  if (e.blockedOn !== null) return !1
  for (var o = e.targetContainers; 0 < o.length; ) {
    var i = yc(e.domEventName, e.eventSystemFlags, o[0], e.nativeEvent)
    if (i !== null) return (o = Cb(i)), o !== null && fc(o), (e.blockedOn = i), !1
    o.shift()
  }
  return !0
}
function zc(e, o, i) {
  xc(e) && i.delete(o)
}
function Ac() {
  for (ic = !1; 0 < jc.length; ) {
    var e = jc[0]
    if (e.blockedOn !== null) {
      ;(e = Cb(e.blockedOn)), e !== null && ec(e)
      break
    }
    for (var o = e.targetContainers; 0 < o.length; ) {
      var i = yc(e.domEventName, e.eventSystemFlags, o[0], e.nativeEvent)
      if (i !== null) {
        e.blockedOn = i
        break
      }
      o.shift()
    }
    e.blockedOn === null && jc.shift()
  }
  kc !== null && xc(kc) && (kc = null),
    lc !== null && xc(lc) && (lc = null),
    mc !== null && xc(mc) && (mc = null),
    nc.forEach(zc),
    oc.forEach(zc)
}
function Bc(e, o) {
  e.blockedOn === o &&
    ((e.blockedOn = null),
    ic || ((ic = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)))
}
function Cc(e) {
  function o(a) {
    return Bc(a, e)
  }
  if (0 < jc.length) {
    Bc(jc[0], e)
    for (var i = 1; i < jc.length; i++) {
      var s = jc[i]
      s.blockedOn === e && (s.blockedOn = null)
    }
  }
  for (
    kc !== null && Bc(kc, e),
      lc !== null && Bc(lc, e),
      mc !== null && Bc(mc, e),
      nc.forEach(o),
      oc.forEach(o),
      i = 0;
    i < pc.length;
    i++
  )
    (s = pc[i]), s.blockedOn === e && (s.blockedOn = null)
  for (; 0 < pc.length && ((i = pc[0]), i.blockedOn === null); )
    vc(i), i.blockedOn === null && pc.shift()
}
function Dc(e, o) {
  var i = {}
  return (
    (i[e.toLowerCase()] = o.toLowerCase()),
    (i['Webkit' + e] = 'webkit' + o),
    (i['Moz' + e] = 'moz' + o),
    i
  )
}
var Ec = {
    animationend: Dc('Animation', 'AnimationEnd'),
    animationiteration: Dc('Animation', 'AnimationIteration'),
    animationstart: Dc('Animation', 'AnimationStart'),
    transitionend: Dc('Transition', 'TransitionEnd'),
  },
  Fc = {},
  Gc = {}
fa &&
  ((Gc = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ec.animationend.animation,
    delete Ec.animationiteration.animation,
    delete Ec.animationstart.animation),
  'TransitionEvent' in window || delete Ec.transitionend.transition)
function Hc(e) {
  if (Fc[e]) return Fc[e]
  if (!Ec[e]) return e
  var o = Ec[e],
    i
  for (i in o) if (o.hasOwnProperty(i) && i in Gc) return (Fc[e] = o[i])
  return e
}
var Ic = Hc('animationend'),
  Jc = Hc('animationiteration'),
  Kc = Hc('animationstart'),
  Lc = Hc('transitionend'),
  Mc = new Map(),
  Nc = new Map(),
  Oc = [
    'abort',
    'abort',
    Ic,
    'animationEnd',
    Jc,
    'animationIteration',
    Kc,
    'animationStart',
    'canplay',
    'canPlay',
    'canplaythrough',
    'canPlayThrough',
    'durationchange',
    'durationChange',
    'emptied',
    'emptied',
    'encrypted',
    'encrypted',
    'ended',
    'ended',
    'error',
    'error',
    'gotpointercapture',
    'gotPointerCapture',
    'load',
    'load',
    'loadeddata',
    'loadedData',
    'loadedmetadata',
    'loadedMetadata',
    'loadstart',
    'loadStart',
    'lostpointercapture',
    'lostPointerCapture',
    'playing',
    'playing',
    'progress',
    'progress',
    'seeking',
    'seeking',
    'stalled',
    'stalled',
    'suspend',
    'suspend',
    'timeupdate',
    'timeUpdate',
    Lc,
    'transitionEnd',
    'waiting',
    'waiting',
  ]
function Pc(e, o) {
  for (var i = 0; i < e.length; i += 2) {
    var s = e[i],
      a = e[i + 1]
    ;(a = 'on' + (a[0].toUpperCase() + a.slice(1))), Nc.set(s, o), Mc.set(s, a), da(a, [s])
  }
}
var Qc = r.unstable_now
Qc()
var F = 8
function Rc(e) {
  if ((1 & e) != 0) return (F = 15), 1
  if ((2 & e) != 0) return (F = 14), 2
  if ((4 & e) != 0) return (F = 13), 4
  var o = 24 & e
  return o !== 0
    ? ((F = 12), o)
    : (e & 32) != 0
    ? ((F = 11), 32)
    : ((o = 192 & e),
      o !== 0
        ? ((F = 10), o)
        : (e & 256) != 0
        ? ((F = 9), 256)
        : ((o = 3584 & e),
          o !== 0
            ? ((F = 8), o)
            : (e & 4096) != 0
            ? ((F = 7), 4096)
            : ((o = 4186112 & e),
              o !== 0
                ? ((F = 6), o)
                : ((o = 62914560 & e),
                  o !== 0
                    ? ((F = 5), o)
                    : e & 67108864
                    ? ((F = 4), 67108864)
                    : (e & 134217728) != 0
                    ? ((F = 3), 134217728)
                    : ((o = 805306368 & e),
                      o !== 0
                        ? ((F = 2), o)
                        : (1073741824 & e) != 0
                        ? ((F = 1), 1073741824)
                        : ((F = 8), e))))))
}
function Sc(e) {
  switch (e) {
    case 99:
      return 15
    case 98:
      return 10
    case 97:
    case 96:
      return 8
    case 95:
      return 2
    default:
      return 0
  }
}
function Tc(e) {
  switch (e) {
    case 15:
    case 14:
      return 99
    case 13:
    case 12:
    case 11:
    case 10:
      return 98
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97
    case 3:
    case 2:
    case 1:
      return 95
    case 0:
      return 90
    default:
      throw Error(y(358, e))
  }
}
function Uc(e, o) {
  var i = e.pendingLanes
  if (i === 0) return (F = 0)
  var s = 0,
    a = 0,
    f = e.expiredLanes,
    c = e.suspendedLanes,
    d = e.pingedLanes
  if (f !== 0) (s = f), (a = F = 15)
  else if (((f = i & 134217727), f !== 0)) {
    var h = f & ~c
    h !== 0 ? ((s = Rc(h)), (a = F)) : ((d &= f), d !== 0 && ((s = Rc(d)), (a = F)))
  } else (f = i & ~c), f !== 0 ? ((s = Rc(f)), (a = F)) : d !== 0 && ((s = Rc(d)), (a = F))
  if (s === 0) return 0
  if (
    ((s = 31 - Vc(s)),
    (s = i & (((0 > s ? 0 : 1 << s) << 1) - 1)),
    o !== 0 && o !== s && (o & c) == 0)
  ) {
    if ((Rc(o), a <= F)) return o
    F = a
  }
  if (((o = e.entangledLanes), o !== 0))
    for (e = e.entanglements, o &= s; 0 < o; )
      (i = 31 - Vc(o)), (a = 1 << i), (s |= e[i]), (o &= ~a)
  return s
}
function Wc(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Xc(e, o) {
  switch (e) {
    case 15:
      return 1
    case 14:
      return 2
    case 12:
      return (e = Yc(24 & ~o)), e === 0 ? Xc(10, o) : e
    case 10:
      return (e = Yc(192 & ~o)), e === 0 ? Xc(8, o) : e
    case 8:
      return (e = Yc(3584 & ~o)), e === 0 && ((e = Yc(4186112 & ~o)), e === 0 && (e = 512)), e
    case 2:
      return (o = Yc(805306368 & ~o)), o === 0 && (o = 268435456), o
  }
  throw Error(y(358, e))
}
function Yc(e) {
  return e & -e
}
function Zc(e) {
  for (var o = [], i = 0; 31 > i; i++) o.push(e)
  return o
}
function $c(e, o, i) {
  e.pendingLanes |= o
  var s = o - 1
  ;(e.suspendedLanes &= s), (e.pingedLanes &= s), (e = e.eventTimes), (o = 31 - Vc(o)), (e[o] = i)
}
var Vc = Math.clz32 ? Math.clz32 : ad,
  bd = Math.log,
  cd = Math.LN2
function ad(e) {
  return e === 0 ? 32 : (31 - ((bd(e) / cd) | 0)) | 0
}
var dd = r.unstable_UserBlockingPriority,
  ed = r.unstable_runWithPriority,
  fd = !0
function gd(e, o, i, s) {
  Kb || Ib()
  var a = hd,
    f = Kb
  Kb = !0
  try {
    Hb(a, e, o, i, s)
  } finally {
    ;(Kb = f) || Mb()
  }
}
function id(e, o, i, s) {
  ed(dd, hd.bind(null, e, o, i, s))
}
function hd(e, o, i, s) {
  if (fd) {
    var a
    if ((a = (o & 4) == 0) && 0 < jc.length && -1 < qc.indexOf(e))
      (e = rc(null, e, o, i, s)), jc.push(e)
    else {
      var f = yc(e, o, i, s)
      if (f === null) a && sc(e, s)
      else {
        if (a) {
          if (-1 < qc.indexOf(e)) {
            ;(e = rc(f, e, o, i, s)), jc.push(e)
            return
          }
          if (uc(f, e, o, i, s)) return
          sc(e, s)
        }
        jd(e, o, s, null, i)
      }
    }
  }
}
function yc(e, o, i, s) {
  var a = xb(s)
  if (((a = wc(a)), a !== null)) {
    var f = Zb(a)
    if (f === null) a = null
    else {
      var c = f.tag
      if (c === 13) {
        if (((a = $b(f)), a !== null)) return a
        a = null
      } else if (c === 3) {
        if (f.stateNode.hydrate) return f.tag === 3 ? f.stateNode.containerInfo : null
        a = null
      } else f !== a && (a = null)
    }
  }
  return jd(e, o, s, a, i), null
}
var kd = null,
  ld = null,
  md = null
function nd() {
  if (md) return md
  var e,
    o = ld,
    i = o.length,
    s,
    a = 'value' in kd ? kd.value : kd.textContent,
    f = a.length
  for (e = 0; e < i && o[e] === a[e]; e++);
  var c = i - e
  for (s = 1; s <= c && o[i - s] === a[f - s]; s++);
  return (md = a.slice(e, 1 < s ? 1 - s : void 0))
}
function od(e) {
  var o = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && o === 13 && (e = 13)) : (e = o),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function pd() {
  return !0
}
function qd() {
  return !1
}
function rd(e) {
  function o(i, s, a, f, c) {
    ;(this._reactName = i),
      (this._targetInst = a),
      (this.type = s),
      (this.nativeEvent = f),
      (this.target = c),
      (this.currentTarget = null)
    for (var d in e) e.hasOwnProperty(d) && ((i = e[d]), (this[d] = i ? i(f) : f[d]))
    return (
      (this.isDefaultPrevented = (
        f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
      )
        ? pd
        : qd),
      (this.isPropagationStopped = qd),
      this
    )
  }
  return (
    m(o.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var i = this.nativeEvent
        i &&
          (i.preventDefault
            ? i.preventDefault()
            : typeof i.returnValue != 'unknown' && (i.returnValue = !1),
          (this.isDefaultPrevented = pd))
      },
      stopPropagation: function () {
        var i = this.nativeEvent
        i &&
          (i.stopPropagation
            ? i.stopPropagation()
            : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
          (this.isPropagationStopped = pd))
      },
      persist: function () {},
      isPersistent: pd,
    }),
    o
  )
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  td = rd(sd),
  ud = m({}, sd, { view: 0, detail: 0 }),
  vd = rd(ud),
  wd,
  xd,
  yd,
  Ad = m({}, ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== yd &&
            (yd && e.type === 'mousemove'
              ? ((wd = e.screenX - yd.screenX), (xd = e.screenY - yd.screenY))
              : (xd = wd = 0),
            (yd = e)),
          wd)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : xd
    },
  }),
  Bd = rd(Ad),
  Cd = m({}, Ad, { dataTransfer: 0 }),
  Dd = rd(Cd),
  Ed = m({}, ud, { relatedTarget: 0 }),
  Fd = rd(Ed),
  Gd = m({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hd = rd(Gd),
  Id = m({}, sd, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Jd = rd(Id),
  Kd = m({}, sd, { data: 0 }),
  Ld = rd(Kd),
  Md = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Nd = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Od = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Pd(e) {
  var o = this.nativeEvent
  return o.getModifierState ? o.getModifierState(e) : (e = Od[e]) ? !!o[e] : !1
}
function zd() {
  return Pd
}
var Qd = m({}, ud, {
    key: function (e) {
      if (e.key) {
        var o = Md[e.key] || e.key
        if (o !== 'Unidentified') return o
      }
      return e.type === 'keypress'
        ? ((e = od(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Nd[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function (e) {
      return e.type === 'keypress' ? od(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? od(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  Rd = rd(Qd),
  Sd = m({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Td = rd(Sd),
  Ud = m({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd,
  }),
  Vd = rd(Ud),
  Wd = m({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xd = rd(Wd),
  Yd = m({}, Ad, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zd = rd(Yd),
  $d = [9, 13, 27, 32],
  ae = fa && 'CompositionEvent' in window,
  be = null
fa && 'documentMode' in document && (be = document.documentMode)
var ce = fa && 'TextEvent' in window && !be,
  de = fa && (!ae || (be && 8 < be && 11 >= be)),
  ee = String.fromCharCode(32),
  fe = !1
function ge(e, o) {
  switch (e) {
    case 'keyup':
      return $d.indexOf(o.keyCode) !== -1
    case 'keydown':
      return o.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function he(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var ie = !1
function je(e, o) {
  switch (e) {
    case 'compositionend':
      return he(o)
    case 'keypress':
      return o.which !== 32 ? null : ((fe = !0), ee)
    case 'textInput':
      return (e = o.data), e === ee && fe ? null : e
    default:
      return null
  }
}
function ke(e, o) {
  if (ie)
    return e === 'compositionend' || (!ae && ge(e, o))
      ? ((e = nd()), (md = ld = kd = null), (ie = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(o.ctrlKey || o.altKey || o.metaKey) || (o.ctrlKey && o.altKey)) {
        if (o.char && 1 < o.char.length) return o.char
        if (o.which) return String.fromCharCode(o.which)
      }
      return null
    case 'compositionend':
      return de && o.locale !== 'ko' ? null : o.data
    default:
      return null
  }
}
var le = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function me(e) {
  var o = e && e.nodeName && e.nodeName.toLowerCase()
  return o === 'input' ? !!le[e.type] : o === 'textarea'
}
function ne(e, o, i, s) {
  Eb(s),
    (o = oe(o, 'onChange')),
    0 < o.length &&
      ((i = new td('onChange', 'change', null, i, s)), e.push({ event: i, listeners: o }))
}
var pe = null,
  qe = null
function re(e) {
  se(e, 0)
}
function te(e) {
  var o = ue(e)
  if (Wa(o)) return e
}
function ve(e, o) {
  if (e === 'change') return o
}
var we = !1
if (fa) {
  var xe
  if (fa) {
    var ye = 'oninput' in document
    if (!ye) {
      var ze = document.createElement('div')
      ze.setAttribute('oninput', 'return;'), (ye = typeof ze.oninput == 'function')
    }
    xe = ye
  } else xe = !1
  we = xe && (!document.documentMode || 9 < document.documentMode)
}
function Ae() {
  pe && (pe.detachEvent('onpropertychange', Be), (qe = pe = null))
}
function Be(e) {
  if (e.propertyName === 'value' && te(qe)) {
    var o = []
    if ((ne(o, qe, e, xb(e)), (e = re), Kb)) e(o)
    else {
      Kb = !0
      try {
        Gb(e, o)
      } finally {
        ;(Kb = !1), Mb()
      }
    }
  }
}
function Ce(e, o, i) {
  e === 'focusin'
    ? (Ae(), (pe = o), (qe = i), pe.attachEvent('onpropertychange', Be))
    : e === 'focusout' && Ae()
}
function De(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return te(qe)
}
function Ee(e, o) {
  if (e === 'click') return te(o)
}
function Fe(e, o) {
  if (e === 'input' || e === 'change') return te(o)
}
function Ge(e, o) {
  return (e === o && (e !== 0 || 1 / e == 1 / o)) || (e !== e && o !== o)
}
var He = typeof Object.is == 'function' ? Object.is : Ge,
  Ie = Object.prototype.hasOwnProperty
function Je(e, o) {
  if (He(e, o)) return !0
  if (typeof e != 'object' || e === null || typeof o != 'object' || o === null) return !1
  var i = Object.keys(e),
    s = Object.keys(o)
  if (i.length !== s.length) return !1
  for (s = 0; s < i.length; s++) if (!Ie.call(o, i[s]) || !He(e[i[s]], o[i[s]])) return !1
  return !0
}
function Ke(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Le(e, o) {
  var i = Ke(e)
  e = 0
  for (var s; i; ) {
    if (i.nodeType === 3) {
      if (((s = e + i.textContent.length), e <= o && s >= o)) return { node: i, offset: o - e }
      e = s
    }
    e: {
      for (; i; ) {
        if (i.nextSibling) {
          i = i.nextSibling
          break e
        }
        i = i.parentNode
      }
      i = void 0
    }
    i = Ke(i)
  }
}
function Me(e, o) {
  return e && o
    ? e === o
      ? !0
      : e && e.nodeType === 3
      ? !1
      : o && o.nodeType === 3
      ? Me(e, o.parentNode)
      : 'contains' in e
      ? e.contains(o)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(o) & 16)
      : !1
    : !1
}
function Ne() {
  for (var e = window, o = Xa(); o instanceof e.HTMLIFrameElement; ) {
    try {
      var i = typeof o.contentWindow.location.href == 'string'
    } catch (s) {
      i = !1
    }
    if (i) e = o.contentWindow
    else break
    o = Xa(e.document)
  }
  return o
}
function Oe(e) {
  var o = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    o &&
    ((o === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      o === 'textarea' ||
      e.contentEditable === 'true')
  )
}
var Pe = fa && 'documentMode' in document && 11 >= document.documentMode,
  Qe = null,
  Re = null,
  Se = null,
  Te = !1
function Ue(e, o, i) {
  var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument
  Te ||
    Qe == null ||
    Qe !== Xa(s) ||
    ((s = Qe),
    'selectionStart' in s && Oe(s)
      ? (s = { start: s.selectionStart, end: s.selectionEnd })
      : ((s = ((s.ownerDocument && s.ownerDocument.defaultView) || window).getSelection()),
        (s = {
          anchorNode: s.anchorNode,
          anchorOffset: s.anchorOffset,
          focusNode: s.focusNode,
          focusOffset: s.focusOffset,
        })),
    (Se && Je(Se, s)) ||
      ((Se = s),
      (s = oe(Re, 'onSelect')),
      0 < s.length &&
        ((o = new td('onSelect', 'select', null, o, i)),
        e.push({ event: o, listeners: s }),
        (o.target = Qe))))
}
Pc(
  'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
    ' ',
  ),
  0,
),
  Pc(
    'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
      ' ',
    ),
    1,
  ),
  Pc(Oc, 2)
for (
  var Ve =
      'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
        ' ',
      ),
    We = 0;
  We < Ve.length;
  We++
)
  Nc.set(Ve[We], 0)
ea('onMouseEnter', ['mouseout', 'mouseover']),
  ea('onMouseLeave', ['mouseout', 'mouseover']),
  ea('onPointerEnter', ['pointerout', 'pointerover']),
  ea('onPointerLeave', ['pointerout', 'pointerover']),
  da('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
  da(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' ',
    ),
  ),
  da('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
  da('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
  da('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
  da(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
  )
var Xe =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Ye = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Xe))
function Ze(e, o, i) {
  var s = e.type || 'unknown-event'
  ;(e.currentTarget = i), Yb(s, o, void 0, e), (e.currentTarget = null)
}
function se(e, o) {
  o = (o & 4) != 0
  for (var i = 0; i < e.length; i++) {
    var s = e[i],
      a = s.event
    s = s.listeners
    e: {
      var f = void 0
      if (o)
        for (var c = s.length - 1; 0 <= c; c--) {
          var d = s[c],
            h = d.instance,
            j = d.currentTarget
          if (((d = d.listener), h !== f && a.isPropagationStopped())) break e
          Ze(a, d, j), (f = h)
        }
      else
        for (c = 0; c < s.length; c++) {
          if (
            ((d = s[c]),
            (h = d.instance),
            (j = d.currentTarget),
            (d = d.listener),
            h !== f && a.isPropagationStopped())
          )
            break e
          Ze(a, d, j), (f = h)
        }
    }
  }
  if (Ub) throw ((e = Vb), (Ub = !1), (Vb = null), e)
}
function G(e, o) {
  var i = $e(o),
    s = e + '__bubble'
  i.has(s) || (af(o, e, 2, !1), i.add(s))
}
var bf = '_reactListening' + Math.random().toString(36).slice(2)
function cf(e) {
  e[bf] ||
    ((e[bf] = !0),
    ba.forEach(function (o) {
      Ye.has(o) || df(o, !1, e, null), df(o, !0, e, null)
    }))
}
function df(e, o, i, s) {
  var a = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    f = i
  if (
    (e === 'selectionchange' && i.nodeType !== 9 && (f = i.ownerDocument),
    s !== null && !o && Ye.has(e))
  ) {
    if (e !== 'scroll') return
    ;(a |= 2), (f = s)
  }
  var c = $e(f),
    d = e + '__' + (o ? 'capture' : 'bubble')
  c.has(d) || (o && (a |= 4), af(f, e, a, o), c.add(d))
}
function af(e, o, i, s) {
  var a = Nc.get(o)
  switch (a === void 0 ? 2 : a) {
    case 0:
      a = gd
      break
    case 1:
      a = id
      break
    default:
      a = hd
  }
  ;(i = a.bind(null, o, i, e)),
    (a = void 0),
    !Pb || (o !== 'touchstart' && o !== 'touchmove' && o !== 'wheel') || (a = !0),
    s
      ? a !== void 0
        ? e.addEventListener(o, i, { capture: !0, passive: a })
        : e.addEventListener(o, i, !0)
      : a !== void 0
      ? e.addEventListener(o, i, { passive: a })
      : e.addEventListener(o, i, !1)
}
function jd(e, o, i, s, a) {
  var f = s
  if ((o & 1) == 0 && (o & 2) == 0 && s !== null)
    e: for (;;) {
      if (s === null) return
      var c = s.tag
      if (c === 3 || c === 4) {
        var d = s.stateNode.containerInfo
        if (d === a || (d.nodeType === 8 && d.parentNode === a)) break
        if (c === 4)
          for (c = s.return; c !== null; ) {
            var h = c.tag
            if (
              (h === 3 || h === 4) &&
              ((h = c.stateNode.containerInfo), h === a || (h.nodeType === 8 && h.parentNode === a))
            )
              return
            c = c.return
          }
        for (; d !== null; ) {
          if (((c = wc(d)), c === null)) return
          if (((h = c.tag), h === 5 || h === 6)) {
            s = f = c
            continue e
          }
          d = d.parentNode
        }
      }
      s = s.return
    }
  Nb(function () {
    var j = f,
      nn = xb(i),
      fn = []
    e: {
      var _e = Mc.get(e)
      if (_e !== void 0) {
        var rn = td,
          un = e
        switch (e) {
          case 'keypress':
            if (od(i) === 0) break e
          case 'keydown':
          case 'keyup':
            rn = Rd
            break
          case 'focusin':
            ;(un = 'focus'), (rn = Fd)
            break
          case 'focusout':
            ;(un = 'blur'), (rn = Fd)
            break
          case 'beforeblur':
          case 'afterblur':
            rn = Fd
            break
          case 'click':
            if (i.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            rn = Bd
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            rn = Dd
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            rn = Vd
            break
          case Ic:
          case Jc:
          case Kc:
            rn = Hd
            break
          case Lc:
            rn = Xd
            break
          case 'scroll':
            rn = vd
            break
          case 'wheel':
            rn = Zd
            break
          case 'copy':
          case 'cut':
          case 'paste':
            rn = Jd
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            rn = Td
        }
        var ln = (o & 4) != 0,
          _ = !ln && e === 'scroll',
          g = ln ? (_e !== null ? _e + 'Capture' : null) : _e
        ln = []
        for (var k = j, $; k !== null; ) {
          $ = k
          var b = $.stateNode
          if (
            ($.tag === 5 &&
              b !== null &&
              (($ = b), g !== null && ((b = Ob(k, g)), b != null && ln.push(ef(k, b, $)))),
            _)
          )
            break
          k = k.return
        }
        0 < ln.length && ((_e = new rn(_e, un, null, i, nn)), fn.push({ event: _e, listeners: ln }))
      }
    }
    if ((o & 7) == 0) {
      e: {
        if (
          ((_e = e === 'mouseover' || e === 'pointerover'),
          (rn = e === 'mouseout' || e === 'pointerout'),
          _e && (o & 16) == 0 && (un = i.relatedTarget || i.fromElement) && (wc(un) || un[ff]))
        )
          break e
        if (
          (rn || _e) &&
          ((_e =
            nn.window === nn
              ? nn
              : (_e = nn.ownerDocument)
              ? _e.defaultView || _e.parentWindow
              : window),
          rn
            ? ((un = i.relatedTarget || i.toElement),
              (rn = j),
              (un = un ? wc(un) : null),
              un !== null &&
                ((_ = Zb(un)), un !== _ || (un.tag !== 5 && un.tag !== 6)) &&
                (un = null))
            : ((rn = null), (un = j)),
          rn !== un)
        ) {
          if (
            ((ln = Bd),
            (b = 'onMouseLeave'),
            (g = 'onMouseEnter'),
            (k = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((ln = Td), (b = 'onPointerLeave'), (g = 'onPointerEnter'), (k = 'pointer')),
            (_ = rn == null ? _e : ue(rn)),
            ($ = un == null ? _e : ue(un)),
            (_e = new ln(b, k + 'leave', rn, i, nn)),
            (_e.target = _),
            (_e.relatedTarget = $),
            (b = null),
            wc(nn) === j &&
              ((ln = new ln(g, k + 'enter', un, i, nn)),
              (ln.target = $),
              (ln.relatedTarget = _),
              (b = ln)),
            (_ = b),
            rn && un)
          )
            n: {
              for (ln = rn, g = un, k = 0, $ = ln; $; $ = gf($)) k++
              for ($ = 0, b = g; b; b = gf(b)) $++
              for (; 0 < k - $; ) (ln = gf(ln)), k--
              for (; 0 < $ - k; ) (g = gf(g)), $--
              for (; k--; ) {
                if (ln === g || (g !== null && ln === g.alternate)) break n
                ;(ln = gf(ln)), (g = gf(g))
              }
              ln = null
            }
          else ln = null
          rn !== null && hf(fn, _e, rn, ln, !1), un !== null && _ !== null && hf(fn, _, un, ln, !0)
        }
      }
      e: {
        if (
          ((_e = j ? ue(j) : window),
          (rn = _e.nodeName && _e.nodeName.toLowerCase()),
          rn === 'select' || (rn === 'input' && _e.type === 'file'))
        )
          var an = ve
        else if (me(_e))
          if (we) an = Fe
          else {
            an = De
            var en = Ce
          }
        else
          (rn = _e.nodeName) &&
            rn.toLowerCase() === 'input' &&
            (_e.type === 'checkbox' || _e.type === 'radio') &&
            (an = Ee)
        if (an && (an = an(e, j))) {
          ne(fn, an, i, nn)
          break e
        }
        en && en(e, _e, j),
          e === 'focusout' &&
            (en = _e._wrapperState) &&
            en.controlled &&
            _e.type === 'number' &&
            bb(_e, 'number', _e.value)
      }
      switch (((en = j ? ue(j) : window), e)) {
        case 'focusin':
          ;(me(en) || en.contentEditable === 'true') && ((Qe = en), (Re = j), (Se = null))
          break
        case 'focusout':
          Se = Re = Qe = null
          break
        case 'mousedown':
          Te = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Te = !1), Ue(fn, i, nn)
          break
        case 'selectionchange':
          if (Pe) break
        case 'keydown':
        case 'keyup':
          Ue(fn, i, nn)
      }
      var sn
      if (ae)
        e: {
          switch (e) {
            case 'compositionstart':
              var dn = 'onCompositionStart'
              break e
            case 'compositionend':
              dn = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              dn = 'onCompositionUpdate'
              break e
          }
          dn = void 0
        }
      else
        ie
          ? ge(e, i) && (dn = 'onCompositionEnd')
          : e === 'keydown' && i.keyCode === 229 && (dn = 'onCompositionStart')
      dn &&
        (de &&
          i.locale !== 'ko' &&
          (ie || dn !== 'onCompositionStart'
            ? dn === 'onCompositionEnd' && ie && (sn = nd())
            : ((kd = nn), (ld = 'value' in kd ? kd.value : kd.textContent), (ie = !0))),
        (en = oe(j, dn)),
        0 < en.length &&
          ((dn = new Ld(dn, e, null, i, nn)),
          fn.push({ event: dn, listeners: en }),
          sn ? (dn.data = sn) : ((sn = he(i)), sn !== null && (dn.data = sn)))),
        (sn = ce ? je(e, i) : ke(e, i)) &&
          ((j = oe(j, 'onBeforeInput')),
          0 < j.length &&
            ((nn = new Ld('onBeforeInput', 'beforeinput', null, i, nn)),
            fn.push({ event: nn, listeners: j }),
            (nn.data = sn)))
    }
    se(fn, o)
  })
}
function ef(e, o, i) {
  return { instance: e, listener: o, currentTarget: i }
}
function oe(e, o) {
  for (var i = o + 'Capture', s = []; e !== null; ) {
    var a = e,
      f = a.stateNode
    a.tag === 5 &&
      f !== null &&
      ((a = f),
      (f = Ob(e, i)),
      f != null && s.unshift(ef(e, f, a)),
      (f = Ob(e, o)),
      f != null && s.push(ef(e, f, a))),
      (e = e.return)
  }
  return s
}
function gf(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function hf(e, o, i, s, a) {
  for (var f = o._reactName, c = []; i !== null && i !== s; ) {
    var d = i,
      h = d.alternate,
      j = d.stateNode
    if (h !== null && h === s) break
    d.tag === 5 &&
      j !== null &&
      ((d = j),
      a
        ? ((h = Ob(i, f)), h != null && c.unshift(ef(i, h, d)))
        : a || ((h = Ob(i, f)), h != null && c.push(ef(i, h, d)))),
      (i = i.return)
  }
  c.length !== 0 && e.push({ event: o, listeners: c })
}
function jf() {}
var kf = null,
  lf = null
function mf(e, o) {
  switch (e) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!o.autoFocus
  }
  return !1
}
function nf(e, o) {
  return (
    e === 'textarea' ||
    e === 'option' ||
    e === 'noscript' ||
    typeof o.children == 'string' ||
    typeof o.children == 'number' ||
    (typeof o.dangerouslySetInnerHTML == 'object' &&
      o.dangerouslySetInnerHTML !== null &&
      o.dangerouslySetInnerHTML.__html != null)
  )
}
var of = typeof setTimeout == 'function' ? setTimeout : void 0,
  pf = typeof clearTimeout == 'function' ? clearTimeout : void 0
function qf(e) {
  e.nodeType === 1
    ? (e.textContent = '')
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ''))
}
function rf(e) {
  for (; e != null; e = e.nextSibling) {
    var o = e.nodeType
    if (o === 1 || o === 3) break
  }
  return e
}
function sf(e) {
  e = e.previousSibling
  for (var o = 0; e; ) {
    if (e.nodeType === 8) {
      var i = e.data
      if (i === '$' || i === '$!' || i === '$?') {
        if (o === 0) return e
        o--
      } else i === '/$' && o++
    }
    e = e.previousSibling
  }
  return null
}
var tf = 0
function uf(e) {
  return { $$typeof: Ga, toString: e, valueOf: e }
}
var vf = Math.random().toString(36).slice(2),
  wf = '__reactFiber$' + vf,
  xf = '__reactProps$' + vf,
  ff = '__reactContainer$' + vf,
  yf = '__reactEvents$' + vf
function wc(e) {
  var o = e[wf]
  if (o) return o
  for (var i = e.parentNode; i; ) {
    if ((o = i[ff] || i[wf])) {
      if (((i = o.alternate), o.child !== null || (i !== null && i.child !== null)))
        for (e = sf(e); e !== null; ) {
          if ((i = e[wf])) return i
          e = sf(e)
        }
      return o
    }
    ;(e = i), (i = e.parentNode)
  }
  return null
}
function Cb(e) {
  return (
    (e = e[wf] || e[ff]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function ue(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(y(33))
}
function Db(e) {
  return e[xf] || null
}
function $e(e) {
  var o = e[yf]
  return o === void 0 && (o = e[yf] = new Set()), o
}
var zf = [],
  Af = -1
function Bf(e) {
  return { current: e }
}
function H(e) {
  0 > Af || ((e.current = zf[Af]), (zf[Af] = null), Af--)
}
function I(e, o) {
  Af++, (zf[Af] = e.current), (e.current = o)
}
var Cf = {},
  M = Bf(Cf),
  N = Bf(!1),
  Df = Cf
function Ef(e, o) {
  var i = e.type.contextTypes
  if (!i) return Cf
  var s = e.stateNode
  if (s && s.__reactInternalMemoizedUnmaskedChildContext === o)
    return s.__reactInternalMemoizedMaskedChildContext
  var a = {},
    f
  for (f in i) a[f] = o[f]
  return (
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  )
}
function Ff(e) {
  return (e = e.childContextTypes), e != null
}
function Gf() {
  H(N), H(M)
}
function Hf(e, o, i) {
  if (M.current !== Cf) throw Error(y(168))
  I(M, o), I(N, i)
}
function If(e, o, i) {
  var s = e.stateNode
  if (((e = o.childContextTypes), typeof s.getChildContext != 'function')) return i
  s = s.getChildContext()
  for (var a in s) if (!(a in e)) throw Error(y(108, Ra(o) || 'Unknown', a))
  return m({}, i, s)
}
function Jf(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Cf),
    (Df = M.current),
    I(M, e),
    I(N, N.current),
    !0
  )
}
function Kf(e, o, i) {
  var s = e.stateNode
  if (!s) throw Error(y(169))
  i
    ? ((e = If(e, o, Df)), (s.__reactInternalMemoizedMergedChildContext = e), H(N), H(M), I(M, e))
    : H(N),
    I(N, i)
}
var Lf = null,
  Mf = null,
  Nf = r.unstable_runWithPriority,
  Of = r.unstable_scheduleCallback,
  Pf = r.unstable_cancelCallback,
  Qf = r.unstable_shouldYield,
  Rf = r.unstable_requestPaint,
  Sf = r.unstable_now,
  Tf = r.unstable_getCurrentPriorityLevel,
  Uf = r.unstable_ImmediatePriority,
  Vf = r.unstable_UserBlockingPriority,
  Wf = r.unstable_NormalPriority,
  Xf = r.unstable_LowPriority,
  Yf = r.unstable_IdlePriority,
  Zf = {},
  $f = Rf !== void 0 ? Rf : function () {},
  ag = null,
  bg = null,
  cg = !1,
  dg = Sf(),
  O =
    1e4 > dg
      ? Sf
      : function () {
          return Sf() - dg
        }
function eg() {
  switch (Tf()) {
    case Uf:
      return 99
    case Vf:
      return 98
    case Wf:
      return 97
    case Xf:
      return 96
    case Yf:
      return 95
    default:
      throw Error(y(332))
  }
}
function fg(e) {
  switch (e) {
    case 99:
      return Uf
    case 98:
      return Vf
    case 97:
      return Wf
    case 96:
      return Xf
    case 95:
      return Yf
    default:
      throw Error(y(332))
  }
}
function gg(e, o) {
  return (e = fg(e)), Nf(e, o)
}
function hg(e, o, i) {
  return (e = fg(e)), Of(e, o, i)
}
function ig() {
  if (bg !== null) {
    var e = bg
    ;(bg = null), Pf(e)
  }
  jg()
}
function jg() {
  if (!cg && ag !== null) {
    cg = !0
    var e = 0
    try {
      var o = ag
      gg(99, function () {
        for (; e < o.length; e++) {
          var i = o[e]
          do i = i(!0)
          while (i !== null)
        }
      }),
        (ag = null)
    } catch (i) {
      throw (ag !== null && (ag = ag.slice(e + 1)), Of(Uf, ig), i)
    } finally {
      cg = !1
    }
  }
}
var kg = ra.ReactCurrentBatchConfig
function lg(e, o) {
  if (e && e.defaultProps) {
    ;(o = m({}, o)), (e = e.defaultProps)
    for (var i in e) o[i] === void 0 && (o[i] = e[i])
    return o
  }
  return o
}
var mg = Bf(null),
  ng = null,
  og = null,
  pg = null
function qg() {
  pg = og = ng = null
}
function rg(e) {
  var o = mg.current
  H(mg), (e.type._context._currentValue = o)
}
function sg(e, o) {
  for (; e !== null; ) {
    var i = e.alternate
    if ((e.childLanes & o) === o) {
      if (i === null || (i.childLanes & o) === o) break
      i.childLanes |= o
    } else (e.childLanes |= o), i !== null && (i.childLanes |= o)
    e = e.return
  }
}
function tg(e, o) {
  ;(ng = e),
    (pg = og = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & o) != 0 && (ug = !0), (e.firstContext = null))
}
function vg(e, o) {
  if (pg !== e && o !== !1 && o !== 0)
    if (
      ((typeof o != 'number' || o === 1073741823) && ((pg = e), (o = 1073741823)),
      (o = { context: e, observedBits: o, next: null }),
      og === null)
    ) {
      if (ng === null) throw Error(y(308))
      ;(og = o), (ng.dependencies = { lanes: 0, firstContext: o, responders: null })
    } else og = og.next = o
  return e._currentValue
}
var wg = !1
function xg(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  }
}
function yg(e, o) {
  ;(e = e.updateQueue),
    o.updateQueue === e &&
      (o.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function zg(e, o) {
  return { eventTime: e, lane: o, tag: 0, payload: null, callback: null, next: null }
}
function Ag(e, o) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared
    var i = e.pending
    i === null ? (o.next = o) : ((o.next = i.next), (i.next = o)), (e.pending = o)
  }
}
function Bg(e, o) {
  var i = e.updateQueue,
    s = e.alternate
  if (s !== null && ((s = s.updateQueue), i === s)) {
    var a = null,
      f = null
    if (((i = i.firstBaseUpdate), i !== null)) {
      do {
        var c = {
          eventTime: i.eventTime,
          lane: i.lane,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }
        f === null ? (a = f = c) : (f = f.next = c), (i = i.next)
      } while (i !== null)
      f === null ? (a = f = o) : (f = f.next = o)
    } else a = f = o
    ;(i = {
      baseState: s.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: f,
      shared: s.shared,
      effects: s.effects,
    }),
      (e.updateQueue = i)
    return
  }
  ;(e = i.lastBaseUpdate),
    e === null ? (i.firstBaseUpdate = o) : (e.next = o),
    (i.lastBaseUpdate = o)
}
function Cg(e, o, i, s) {
  var a = e.updateQueue
  wg = !1
  var f = a.firstBaseUpdate,
    c = a.lastBaseUpdate,
    d = a.shared.pending
  if (d !== null) {
    a.shared.pending = null
    var h = d,
      j = h.next
    ;(h.next = null), c === null ? (f = j) : (c.next = j), (c = h)
    var nn = e.alternate
    if (nn !== null) {
      nn = nn.updateQueue
      var fn = nn.lastBaseUpdate
      fn !== c && (fn === null ? (nn.firstBaseUpdate = j) : (fn.next = j), (nn.lastBaseUpdate = h))
    }
  }
  if (f !== null) {
    ;(fn = a.baseState), (c = 0), (nn = j = h = null)
    do {
      d = f.lane
      var _e = f.eventTime
      if ((s & d) === d) {
        nn !== null &&
          (nn = nn.next =
            {
              eventTime: _e,
              lane: 0,
              tag: f.tag,
              payload: f.payload,
              callback: f.callback,
              next: null,
            })
        e: {
          var rn = e,
            un = f
          switch (((d = o), (_e = i), un.tag)) {
            case 1:
              if (((rn = un.payload), typeof rn == 'function')) {
                fn = rn.call(_e, fn, d)
                break e
              }
              fn = rn
              break e
            case 3:
              rn.flags = (rn.flags & -4097) | 64
            case 0:
              if (
                ((rn = un.payload),
                (d = typeof rn == 'function' ? rn.call(_e, fn, d) : rn),
                d == null)
              )
                break e
              fn = m({}, fn, d)
              break e
            case 2:
              wg = !0
          }
        }
        f.callback !== null &&
          ((e.flags |= 32), (d = a.effects), d === null ? (a.effects = [f]) : d.push(f))
      } else
        (_e = {
          eventTime: _e,
          lane: d,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null,
        }),
          nn === null ? ((j = nn = _e), (h = fn)) : (nn = nn.next = _e),
          (c |= d)
      if (((f = f.next), f === null)) {
        if (((d = a.shared.pending), d === null)) break
        ;(f = d.next), (d.next = null), (a.lastBaseUpdate = d), (a.shared.pending = null)
      }
    } while (1)
    nn === null && (h = fn),
      (a.baseState = h),
      (a.firstBaseUpdate = j),
      (a.lastBaseUpdate = nn),
      (Dg |= c),
      (e.lanes = c),
      (e.memoizedState = fn)
  }
}
function Eg(e, o, i) {
  if (((e = o.effects), (o.effects = null), e !== null))
    for (o = 0; o < e.length; o++) {
      var s = e[o],
        a = s.callback
      if (a !== null) {
        if (((s.callback = null), (s = i), typeof a != 'function')) throw Error(y(191, a))
        a.call(s)
      }
    }
}
var Fg = new aa.Component().refs
function Gg(e, o, i, s) {
  ;(o = e.memoizedState),
    (i = i(s, o)),
    (i = i == null ? o : m({}, o, i)),
    (e.memoizedState = i),
    e.lanes === 0 && (e.updateQueue.baseState = i)
}
var Kg = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Zb(e) === e : !1
  },
  enqueueSetState: function (e, o, i) {
    e = e._reactInternals
    var s = Hg(),
      a = Ig(e),
      f = zg(s, a)
    ;(f.payload = o), i != null && (f.callback = i), Ag(e, f), Jg(e, a, s)
  },
  enqueueReplaceState: function (e, o, i) {
    e = e._reactInternals
    var s = Hg(),
      a = Ig(e),
      f = zg(s, a)
    ;(f.tag = 1), (f.payload = o), i != null && (f.callback = i), Ag(e, f), Jg(e, a, s)
  },
  enqueueForceUpdate: function (e, o) {
    e = e._reactInternals
    var i = Hg(),
      s = Ig(e),
      a = zg(i, s)
    ;(a.tag = 2), o != null && (a.callback = o), Ag(e, a), Jg(e, s, i)
  },
}
function Lg(e, o, i, s, a, f, c) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(s, f, c)
      : o.prototype && o.prototype.isPureReactComponent
      ? !Je(i, s) || !Je(a, f)
      : !0
  )
}
function Mg(e, o, i) {
  var s = !1,
    a = Cf,
    f = o.contextType
  return (
    typeof f == 'object' && f !== null
      ? (f = vg(f))
      : ((a = Ff(o) ? Df : M.current), (s = o.contextTypes), (f = (s = s != null) ? Ef(e, a) : Cf)),
    (o = new o(i, f)),
    (e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
    (o.updater = Kg),
    (e.stateNode = o),
    (o._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = f)),
    o
  )
}
function Ng(e, o, i, s) {
  ;(e = o.state),
    typeof o.componentWillReceiveProps == 'function' && o.componentWillReceiveProps(i, s),
    typeof o.UNSAFE_componentWillReceiveProps == 'function' &&
      o.UNSAFE_componentWillReceiveProps(i, s),
    o.state !== e && Kg.enqueueReplaceState(o, o.state, null)
}
function Og(e, o, i, s) {
  var a = e.stateNode
  ;(a.props = i), (a.state = e.memoizedState), (a.refs = Fg), xg(e)
  var f = o.contextType
  typeof f == 'object' && f !== null
    ? (a.context = vg(f))
    : ((f = Ff(o) ? Df : M.current), (a.context = Ef(e, f))),
    Cg(e, i, a, s),
    (a.state = e.memoizedState),
    (f = o.getDerivedStateFromProps),
    typeof f == 'function' && (Gg(e, o, f, i), (a.state = e.memoizedState)),
    typeof o.getDerivedStateFromProps == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function' ||
      (typeof a.UNSAFE_componentWillMount != 'function' &&
        typeof a.componentWillMount != 'function') ||
      ((o = a.state),
      typeof a.componentWillMount == 'function' && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount(),
      o !== a.state && Kg.enqueueReplaceState(a, a.state, null),
      Cg(e, i, a, s),
      (a.state = e.memoizedState)),
    typeof a.componentDidMount == 'function' && (e.flags |= 4)
}
var Pg = Array.isArray
function Qg(e, o, i) {
  if (((e = i.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (i._owner) {
      if (((i = i._owner), i)) {
        if (i.tag !== 1) throw Error(y(309))
        var s = i.stateNode
      }
      if (!s) throw Error(y(147, e))
      var a = '' + e
      return o !== null && o.ref !== null && typeof o.ref == 'function' && o.ref._stringRef === a
        ? o.ref
        : ((o = function (f) {
            var c = s.refs
            c === Fg && (c = s.refs = {}), f === null ? delete c[a] : (c[a] = f)
          }),
          (o._stringRef = a),
          o)
    }
    if (typeof e != 'string') throw Error(y(284))
    if (!i._owner) throw Error(y(290, e))
  }
  return e
}
function Rg(e, o) {
  if (e.type !== 'textarea')
    throw Error(
      y(
        31,
        Object.prototype.toString.call(o) === '[object Object]'
          ? 'object with keys {' + Object.keys(o).join(', ') + '}'
          : o,
      ),
    )
}
function Sg(e) {
  function o(_, g) {
    if (e) {
      var k = _.lastEffect
      k !== null ? ((k.nextEffect = g), (_.lastEffect = g)) : (_.firstEffect = _.lastEffect = g),
        (g.nextEffect = null),
        (g.flags = 8)
    }
  }
  function i(_, g) {
    if (!e) return null
    for (; g !== null; ) o(_, g), (g = g.sibling)
    return null
  }
  function s(_, g) {
    for (_ = new Map(); g !== null; )
      g.key !== null ? _.set(g.key, g) : _.set(g.index, g), (g = g.sibling)
    return _
  }
  function a(_, g) {
    return (_ = Tg(_, g)), (_.index = 0), (_.sibling = null), _
  }
  function f(_, g, k) {
    return (
      (_.index = k),
      e
        ? ((k = _.alternate),
          k !== null ? ((k = k.index), k < g ? ((_.flags = 2), g) : k) : ((_.flags = 2), g))
        : g
    )
  }
  function c(_) {
    return e && _.alternate === null && (_.flags = 2), _
  }
  function d(_, g, k, $) {
    return g === null || g.tag !== 6
      ? ((g = Ug(k, _.mode, $)), (g.return = _), g)
      : ((g = a(g, k)), (g.return = _), g)
  }
  function h(_, g, k, $) {
    return g !== null && g.elementType === k.type
      ? (($ = a(g, k.props)), ($.ref = Qg(_, g, k)), ($.return = _), $)
      : (($ = Vg(k.type, k.key, k.props, null, _.mode, $)),
        ($.ref = Qg(_, g, k)),
        ($.return = _),
        $)
  }
  function j(_, g, k, $) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== k.containerInfo ||
      g.stateNode.implementation !== k.implementation
      ? ((g = Wg(k, _.mode, $)), (g.return = _), g)
      : ((g = a(g, k.children || [])), (g.return = _), g)
  }
  function nn(_, g, k, $, b) {
    return g === null || g.tag !== 7
      ? ((g = Xg(k, _.mode, $, b)), (g.return = _), g)
      : ((g = a(g, k)), (g.return = _), g)
  }
  function fn(_, g, k) {
    if (typeof g == 'string' || typeof g == 'number')
      return (g = Ug('' + g, _.mode, k)), (g.return = _), g
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case sa:
          return (
            (k = Vg(g.type, g.key, g.props, null, _.mode, k)),
            (k.ref = Qg(_, null, g)),
            (k.return = _),
            k
          )
        case ta:
          return (g = Wg(g, _.mode, k)), (g.return = _), g
      }
      if (Pg(g) || La(g)) return (g = Xg(g, _.mode, k, null)), (g.return = _), g
      Rg(_, g)
    }
    return null
  }
  function _e(_, g, k, $) {
    var b = g !== null ? g.key : null
    if (typeof k == 'string' || typeof k == 'number') return b !== null ? null : d(_, g, '' + k, $)
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case sa:
          return k.key === b
            ? k.type === ua
              ? nn(_, g, k.props.children, $, b)
              : h(_, g, k, $)
            : null
        case ta:
          return k.key === b ? j(_, g, k, $) : null
      }
      if (Pg(k) || La(k)) return b !== null ? null : nn(_, g, k, $, null)
      Rg(_, k)
    }
    return null
  }
  function rn(_, g, k, $, b) {
    if (typeof $ == 'string' || typeof $ == 'number')
      return (_ = _.get(k) || null), d(g, _, '' + $, b)
    if (typeof $ == 'object' && $ !== null) {
      switch ($.$$typeof) {
        case sa:
          return (
            (_ = _.get($.key === null ? k : $.key) || null),
            $.type === ua ? nn(g, _, $.props.children, b, $.key) : h(g, _, $, b)
          )
        case ta:
          return (_ = _.get($.key === null ? k : $.key) || null), j(g, _, $, b)
      }
      if (Pg($) || La($)) return (_ = _.get(k) || null), nn(g, _, $, b, null)
      Rg(g, $)
    }
    return null
  }
  function un(_, g, k, $) {
    for (
      var b = null, an = null, en = g, sn = (g = 0), dn = null;
      en !== null && sn < k.length;
      sn++
    ) {
      en.index > sn ? ((dn = en), (en = null)) : (dn = en.sibling)
      var on = _e(_, en, k[sn], $)
      if (on === null) {
        en === null && (en = dn)
        break
      }
      e && en && on.alternate === null && o(_, en),
        (g = f(on, g, sn)),
        an === null ? (b = on) : (an.sibling = on),
        (an = on),
        (en = dn)
    }
    if (sn === k.length) return i(_, en), b
    if (en === null) {
      for (; sn < k.length; sn++)
        (en = fn(_, k[sn], $)),
          en !== null && ((g = f(en, g, sn)), an === null ? (b = en) : (an.sibling = en), (an = en))
      return b
    }
    for (en = s(_, en); sn < k.length; sn++)
      (dn = rn(en, _, sn, k[sn], $)),
        dn !== null &&
          (e && dn.alternate !== null && en.delete(dn.key === null ? sn : dn.key),
          (g = f(dn, g, sn)),
          an === null ? (b = dn) : (an.sibling = dn),
          (an = dn))
    return (
      e &&
        en.forEach(function (hn) {
          return o(_, hn)
        }),
      b
    )
  }
  function ln(_, g, k, $) {
    var b = La(k)
    if (typeof b != 'function') throw Error(y(150))
    if (((k = b.call(k)), k == null)) throw Error(y(151))
    for (
      var an = (b = null), en = g, sn = (g = 0), dn = null, on = k.next();
      en !== null && !on.done;
      sn++, on = k.next()
    ) {
      en.index > sn ? ((dn = en), (en = null)) : (dn = en.sibling)
      var hn = _e(_, en, on.value, $)
      if (hn === null) {
        en === null && (en = dn)
        break
      }
      e && en && hn.alternate === null && o(_, en),
        (g = f(hn, g, sn)),
        an === null ? (b = hn) : (an.sibling = hn),
        (an = hn),
        (en = dn)
    }
    if (on.done) return i(_, en), b
    if (en === null) {
      for (; !on.done; sn++, on = k.next())
        (on = fn(_, on.value, $)),
          on !== null && ((g = f(on, g, sn)), an === null ? (b = on) : (an.sibling = on), (an = on))
      return b
    }
    for (en = s(_, en); !on.done; sn++, on = k.next())
      (on = rn(en, _, sn, on.value, $)),
        on !== null &&
          (e && on.alternate !== null && en.delete(on.key === null ? sn : on.key),
          (g = f(on, g, sn)),
          an === null ? (b = on) : (an.sibling = on),
          (an = on))
    return (
      e &&
        en.forEach(function (Pn) {
          return o(_, Pn)
        }),
      b
    )
  }
  return function (_, g, k, $) {
    var b = typeof k == 'object' && k !== null && k.type === ua && k.key === null
    b && (k = k.props.children)
    var an = typeof k == 'object' && k !== null
    if (an)
      switch (k.$$typeof) {
        case sa:
          e: {
            for (an = k.key, b = g; b !== null; ) {
              if (b.key === an) {
                switch (b.tag) {
                  case 7:
                    if (k.type === ua) {
                      i(_, b.sibling), (g = a(b, k.props.children)), (g.return = _), (_ = g)
                      break e
                    }
                    break
                  default:
                    if (b.elementType === k.type) {
                      i(_, b.sibling),
                        (g = a(b, k.props)),
                        (g.ref = Qg(_, b, k)),
                        (g.return = _),
                        (_ = g)
                      break e
                    }
                }
                i(_, b)
                break
              } else o(_, b)
              b = b.sibling
            }
            k.type === ua
              ? ((g = Xg(k.props.children, _.mode, $, k.key)), (g.return = _), (_ = g))
              : (($ = Vg(k.type, k.key, k.props, null, _.mode, $)),
                ($.ref = Qg(_, g, k)),
                ($.return = _),
                (_ = $))
          }
          return c(_)
        case ta:
          e: {
            for (b = k.key; g !== null; ) {
              if (g.key === b)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === k.containerInfo &&
                  g.stateNode.implementation === k.implementation
                ) {
                  i(_, g.sibling), (g = a(g, k.children || [])), (g.return = _), (_ = g)
                  break e
                } else {
                  i(_, g)
                  break
                }
              else o(_, g)
              g = g.sibling
            }
            ;(g = Wg(k, _.mode, $)), (g.return = _), (_ = g)
          }
          return c(_)
      }
    if (typeof k == 'string' || typeof k == 'number')
      return (
        (k = '' + k),
        g !== null && g.tag === 6
          ? (i(_, g.sibling), (g = a(g, k)), (g.return = _), (_ = g))
          : (i(_, g), (g = Ug(k, _.mode, $)), (g.return = _), (_ = g)),
        c(_)
      )
    if (Pg(k)) return un(_, g, k, $)
    if (La(k)) return ln(_, g, k, $)
    if ((an && Rg(_, k), typeof k == 'undefined' && !b))
      switch (_.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(_.type) || 'Component'))
      }
    return i(_, g)
  }
}
var Yg = Sg(!0),
  Zg = Sg(!1),
  $g = {},
  ah = Bf($g),
  bh = Bf($g),
  ch = Bf($g)
function dh(e) {
  if (e === $g) throw Error(y(174))
  return e
}
function eh(e, o) {
  switch ((I(ch, o), I(bh, e), I(ah, $g), (e = o.nodeType), e)) {
    case 9:
    case 11:
      o = (o = o.documentElement) ? o.namespaceURI : mb(null, '')
      break
    default:
      ;(e = e === 8 ? o.parentNode : o),
        (o = e.namespaceURI || null),
        (e = e.tagName),
        (o = mb(o, e))
  }
  H(ah), I(ah, o)
}
function fh() {
  H(ah), H(bh), H(ch)
}
function gh(e) {
  dh(ch.current)
  var o = dh(ah.current),
    i = mb(o, e.type)
  o !== i && (I(bh, e), I(ah, i))
}
function hh(e) {
  bh.current === e && (H(ah), H(bh))
}
var P = Bf(0)
function ih(e) {
  for (var o = e; o !== null; ) {
    if (o.tag === 13) {
      var i = o.memoizedState
      if (i !== null && ((i = i.dehydrated), i === null || i.data === '$?' || i.data === '$!'))
        return o
    } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
      if ((o.flags & 64) != 0) return o
    } else if (o.child !== null) {
      ;(o.child.return = o), (o = o.child)
      continue
    }
    if (o === e) break
    for (; o.sibling === null; ) {
      if (o.return === null || o.return === e) return null
      o = o.return
    }
    ;(o.sibling.return = o.return), (o = o.sibling)
  }
  return null
}
var jh = null,
  kh = null,
  lh = !1
function mh(e, o) {
  var i = nh(5, null, null, 0)
  ;(i.elementType = 'DELETED'),
    (i.type = 'DELETED'),
    (i.stateNode = o),
    (i.return = e),
    (i.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = i), (e.lastEffect = i))
      : (e.firstEffect = e.lastEffect = i)
}
function oh(e, o) {
  switch (e.tag) {
    case 5:
      var i = e.type
      return (
        (o = o.nodeType !== 1 || i.toLowerCase() !== o.nodeName.toLowerCase() ? null : o),
        o !== null ? ((e.stateNode = o), !0) : !1
      )
    case 6:
      return (
        (o = e.pendingProps === '' || o.nodeType !== 3 ? null : o),
        o !== null ? ((e.stateNode = o), !0) : !1
      )
    case 13:
      return !1
    default:
      return !1
  }
}
function ph(e) {
  if (lh) {
    var o = kh
    if (o) {
      var i = o
      if (!oh(e, o)) {
        if (((o = rf(i.nextSibling)), !o || !oh(e, o))) {
          ;(e.flags = (e.flags & -1025) | 2), (lh = !1), (jh = e)
          return
        }
        mh(jh, i)
      }
      ;(jh = e), (kh = rf(o.firstChild))
    } else (e.flags = (e.flags & -1025) | 2), (lh = !1), (jh = e)
  }
}
function qh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  jh = e
}
function rh(e) {
  if (e !== jh) return !1
  if (!lh) return qh(e), (lh = !0), !1
  var o = e.type
  if (e.tag !== 5 || (o !== 'head' && o !== 'body' && !nf(o, e.memoizedProps)))
    for (o = kh; o; ) mh(e, o), (o = rf(o.nextSibling))
  if ((qh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(y(317))
    e: {
      for (e = e.nextSibling, o = 0; e; ) {
        if (e.nodeType === 8) {
          var i = e.data
          if (i === '/$') {
            if (o === 0) {
              kh = rf(e.nextSibling)
              break e
            }
            o--
          } else (i !== '$' && i !== '$!' && i !== '$?') || o++
        }
        e = e.nextSibling
      }
      kh = null
    }
  } else kh = jh ? rf(e.stateNode.nextSibling) : null
  return !0
}
function sh() {
  ;(kh = jh = null), (lh = !1)
}
var th = []
function uh() {
  for (var e = 0; e < th.length; e++) th[e]._workInProgressVersionPrimary = null
  th.length = 0
}
var vh = ra.ReactCurrentDispatcher,
  wh = ra.ReactCurrentBatchConfig,
  xh = 0,
  R = null,
  S = null,
  T = null,
  yh = !1,
  zh = !1
function Ah() {
  throw Error(y(321))
}
function Bh(e, o) {
  if (o === null) return !1
  for (var i = 0; i < o.length && i < e.length; i++) if (!He(e[i], o[i])) return !1
  return !0
}
function Ch(e, o, i, s, a, f) {
  if (
    ((xh = f),
    (R = o),
    (o.memoizedState = null),
    (o.updateQueue = null),
    (o.lanes = 0),
    (vh.current = e === null || e.memoizedState === null ? Dh : Eh),
    (e = i(s, a)),
    zh)
  ) {
    f = 0
    do {
      if (((zh = !1), !(25 > f))) throw Error(y(301))
      ;(f += 1), (T = S = null), (o.updateQueue = null), (vh.current = Fh), (e = i(s, a))
    } while (zh)
  }
  if (
    ((vh.current = Gh),
    (o = S !== null && S.next !== null),
    (xh = 0),
    (T = S = R = null),
    (yh = !1),
    o)
  )
    throw Error(y(300))
  return e
}
function Hh() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return T === null ? (R.memoizedState = T = e) : (T = T.next = e), T
}
function Ih() {
  if (S === null) {
    var e = R.alternate
    e = e !== null ? e.memoizedState : null
  } else e = S.next
  var o = T === null ? R.memoizedState : T.next
  if (o !== null) (T = o), (S = e)
  else {
    if (e === null) throw Error(y(310))
    ;(S = e),
      (e = {
        memoizedState: S.memoizedState,
        baseState: S.baseState,
        baseQueue: S.baseQueue,
        queue: S.queue,
        next: null,
      }),
      T === null ? (R.memoizedState = T = e) : (T = T.next = e)
  }
  return T
}
function Jh(e, o) {
  return typeof o == 'function' ? o(e) : o
}
function Kh(e) {
  var o = Ih(),
    i = o.queue
  if (i === null) throw Error(y(311))
  i.lastRenderedReducer = e
  var s = S,
    a = s.baseQueue,
    f = i.pending
  if (f !== null) {
    if (a !== null) {
      var c = a.next
      ;(a.next = f.next), (f.next = c)
    }
    ;(s.baseQueue = a = f), (i.pending = null)
  }
  if (a !== null) {
    ;(a = a.next), (s = s.baseState)
    var d = (c = f = null),
      h = a
    do {
      var j = h.lane
      if ((xh & j) === j)
        d !== null &&
          (d = d.next =
            {
              lane: 0,
              action: h.action,
              eagerReducer: h.eagerReducer,
              eagerState: h.eagerState,
              next: null,
            }),
          (s = h.eagerReducer === e ? h.eagerState : e(s, h.action))
      else {
        var nn = {
          lane: j,
          action: h.action,
          eagerReducer: h.eagerReducer,
          eagerState: h.eagerState,
          next: null,
        }
        d === null ? ((c = d = nn), (f = s)) : (d = d.next = nn), (R.lanes |= j), (Dg |= j)
      }
      h = h.next
    } while (h !== null && h !== a)
    d === null ? (f = s) : (d.next = c),
      He(s, o.memoizedState) || (ug = !0),
      (o.memoizedState = s),
      (o.baseState = f),
      (o.baseQueue = d),
      (i.lastRenderedState = s)
  }
  return [o.memoizedState, i.dispatch]
}
function Lh(e) {
  var o = Ih(),
    i = o.queue
  if (i === null) throw Error(y(311))
  i.lastRenderedReducer = e
  var s = i.dispatch,
    a = i.pending,
    f = o.memoizedState
  if (a !== null) {
    i.pending = null
    var c = (a = a.next)
    do (f = e(f, c.action)), (c = c.next)
    while (c !== a)
    He(f, o.memoizedState) || (ug = !0),
      (o.memoizedState = f),
      o.baseQueue === null && (o.baseState = f),
      (i.lastRenderedState = f)
  }
  return [f, s]
}
function Mh(e, o, i) {
  var s = o._getVersion
  s = s(o._source)
  var a = o._workInProgressVersionPrimary
  if (
    (a !== null
      ? (e = a === s)
      : ((e = e.mutableReadLanes),
        (e = (xh & e) === e) && ((o._workInProgressVersionPrimary = s), th.push(o))),
    e)
  )
    return i(o._source)
  throw (th.push(o), Error(y(350)))
}
function Nh(e, o, i, s) {
  var a = U
  if (a === null) throw Error(y(349))
  var f = o._getVersion,
    c = f(o._source),
    d = vh.current,
    h = d.useState(function () {
      return Mh(a, o, i)
    }),
    j = h[1],
    nn = h[0]
  h = T
  var fn = e.memoizedState,
    _e = fn.refs,
    rn = _e.getSnapshot,
    un = fn.source
  fn = fn.subscribe
  var ln = R
  return (
    (e.memoizedState = { refs: _e, source: o, subscribe: s }),
    d.useEffect(
      function () {
        ;(_e.getSnapshot = i), (_e.setSnapshot = j)
        var _ = f(o._source)
        if (!He(c, _)) {
          ;(_ = i(o._source)),
            He(nn, _) || (j(_), (_ = Ig(ln)), (a.mutableReadLanes |= _ & a.pendingLanes)),
            (_ = a.mutableReadLanes),
            (a.entangledLanes |= _)
          for (var g = a.entanglements, k = _; 0 < k; ) {
            var $ = 31 - Vc(k),
              b = 1 << $
            ;(g[$] |= _), (k &= ~b)
          }
        }
      },
      [i, o, s],
    ),
    d.useEffect(
      function () {
        return s(o._source, function () {
          var _ = _e.getSnapshot,
            g = _e.setSnapshot
          try {
            g(_(o._source))
            var k = Ig(ln)
            a.mutableReadLanes |= k & a.pendingLanes
          } catch ($) {
            g(function () {
              throw $
            })
          }
        })
      },
      [o, s],
    ),
    (He(rn, i) && He(un, o) && He(fn, s)) ||
      ((e = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: nn }),
      (e.dispatch = j = Oh.bind(null, R, e)),
      (h.queue = e),
      (h.baseQueue = null),
      (nn = Mh(a, o, i)),
      (h.memoizedState = h.baseState = nn)),
    nn
  )
}
function Ph(e, o, i) {
  var s = Ih()
  return Nh(s, e, o, i)
}
function Qh(e) {
  var o = Hh()
  return (
    typeof e == 'function' && (e = e()),
    (o.memoizedState = o.baseState = e),
    (e = o.queue =
      { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: e }),
    (e = e.dispatch = Oh.bind(null, R, e)),
    [o.memoizedState, e]
  )
}
function Rh(e, o, i, s) {
  return (
    (e = { tag: e, create: o, destroy: i, deps: s, next: null }),
    (o = R.updateQueue),
    o === null
      ? ((o = { lastEffect: null }), (R.updateQueue = o), (o.lastEffect = e.next = e))
      : ((i = o.lastEffect),
        i === null
          ? (o.lastEffect = e.next = e)
          : ((s = i.next), (i.next = e), (e.next = s), (o.lastEffect = e))),
    e
  )
}
function Sh(e) {
  var o = Hh()
  return (e = { current: e }), (o.memoizedState = e)
}
function Th() {
  return Ih().memoizedState
}
function Uh(e, o, i, s) {
  var a = Hh()
  ;(R.flags |= e), (a.memoizedState = Rh(1 | o, i, void 0, s === void 0 ? null : s))
}
function Vh(e, o, i, s) {
  var a = Ih()
  s = s === void 0 ? null : s
  var f = void 0
  if (S !== null) {
    var c = S.memoizedState
    if (((f = c.destroy), s !== null && Bh(s, c.deps))) {
      Rh(o, i, f, s)
      return
    }
  }
  ;(R.flags |= e), (a.memoizedState = Rh(1 | o, i, f, s))
}
function Wh(e, o) {
  return Uh(516, 4, e, o)
}
function Xh(e, o) {
  return Vh(516, 4, e, o)
}
function Yh(e, o) {
  return Vh(4, 2, e, o)
}
function Zh(e, o) {
  if (typeof o == 'function')
    return (
      (e = e()),
      o(e),
      function () {
        o(null)
      }
    )
  if (o != null)
    return (
      (e = e()),
      (o.current = e),
      function () {
        o.current = null
      }
    )
}
function $h(e, o, i) {
  return (i = i != null ? i.concat([e]) : null), Vh(4, 2, Zh.bind(null, o, e), i)
}
function ai() {}
function bi(e, o) {
  var i = Ih()
  o = o === void 0 ? null : o
  var s = i.memoizedState
  return s !== null && o !== null && Bh(o, s[1]) ? s[0] : ((i.memoizedState = [e, o]), e)
}
function ci(e, o) {
  var i = Ih()
  o = o === void 0 ? null : o
  var s = i.memoizedState
  return s !== null && o !== null && Bh(o, s[1]) ? s[0] : ((e = e()), (i.memoizedState = [e, o]), e)
}
function di(e, o) {
  var i = eg()
  gg(98 > i ? 98 : i, function () {
    e(!0)
  }),
    gg(97 < i ? 97 : i, function () {
      var s = wh.transition
      wh.transition = 1
      try {
        e(!1), o()
      } finally {
        wh.transition = s
      }
    })
}
function Oh(e, o, i) {
  var s = Hg(),
    a = Ig(e),
    f = { lane: a, action: i, eagerReducer: null, eagerState: null, next: null },
    c = o.pending
  if (
    (c === null ? (f.next = f) : ((f.next = c.next), (c.next = f)),
    (o.pending = f),
    (c = e.alternate),
    e === R || (c !== null && c === R))
  )
    zh = yh = !0
  else {
    if (e.lanes === 0 && (c === null || c.lanes === 0) && ((c = o.lastRenderedReducer), c !== null))
      try {
        var d = o.lastRenderedState,
          h = c(d, i)
        if (((f.eagerReducer = c), (f.eagerState = h), He(h, d))) return
      } catch (j) {
      } finally {
      }
    Jg(e, a, s)
  }
}
var Gh = {
    readContext: vg,
    useCallback: Ah,
    useContext: Ah,
    useEffect: Ah,
    useImperativeHandle: Ah,
    useLayoutEffect: Ah,
    useMemo: Ah,
    useReducer: Ah,
    useRef: Ah,
    useState: Ah,
    useDebugValue: Ah,
    useDeferredValue: Ah,
    useTransition: Ah,
    useMutableSource: Ah,
    useOpaqueIdentifier: Ah,
    unstable_isNewReconciler: !1,
  },
  Dh = {
    readContext: vg,
    useCallback: function (e, o) {
      return (Hh().memoizedState = [e, o === void 0 ? null : o]), e
    },
    useContext: vg,
    useEffect: Wh,
    useImperativeHandle: function (e, o, i) {
      return (i = i != null ? i.concat([e]) : null), Uh(4, 2, Zh.bind(null, o, e), i)
    },
    useLayoutEffect: function (e, o) {
      return Uh(4, 2, e, o)
    },
    useMemo: function (e, o) {
      var i = Hh()
      return (o = o === void 0 ? null : o), (e = e()), (i.memoizedState = [e, o]), e
    },
    useReducer: function (e, o, i) {
      var s = Hh()
      return (
        (o = i !== void 0 ? i(o) : o),
        (s.memoizedState = s.baseState = o),
        (e = s.queue =
          { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: o }),
        (e = e.dispatch = Oh.bind(null, R, e)),
        [s.memoizedState, e]
      )
    },
    useRef: Sh,
    useState: Qh,
    useDebugValue: ai,
    useDeferredValue: function (e) {
      var o = Qh(e),
        i = o[0],
        s = o[1]
      return (
        Wh(
          function () {
            var a = wh.transition
            wh.transition = 1
            try {
              s(e)
            } finally {
              wh.transition = a
            }
          },
          [e],
        ),
        i
      )
    },
    useTransition: function () {
      var e = Qh(!1),
        o = e[0]
      return (e = di.bind(null, e[1])), Sh(e), [e, o]
    },
    useMutableSource: function (e, o, i) {
      var s = Hh()
      return (
        (s.memoizedState = {
          refs: { getSnapshot: o, setSnapshot: null },
          source: e,
          subscribe: i,
        }),
        Nh(s, e, o, i)
      )
    },
    useOpaqueIdentifier: function () {
      if (lh) {
        var e = !1,
          o = uf(function () {
            throw (e || ((e = !0), i('r:' + (tf++).toString(36))), Error(y(355)))
          }),
          i = Qh(o)[1]
        return (
          (R.mode & 2) == 0 &&
            ((R.flags |= 516),
            Rh(
              5,
              function () {
                i('r:' + (tf++).toString(36))
              },
              void 0,
              null,
            )),
          o
        )
      }
      return (o = 'r:' + (tf++).toString(36)), Qh(o), o
    },
    unstable_isNewReconciler: !1,
  },
  Eh = {
    readContext: vg,
    useCallback: bi,
    useContext: vg,
    useEffect: Xh,
    useImperativeHandle: $h,
    useLayoutEffect: Yh,
    useMemo: ci,
    useReducer: Kh,
    useRef: Th,
    useState: function () {
      return Kh(Jh)
    },
    useDebugValue: ai,
    useDeferredValue: function (e) {
      var o = Kh(Jh),
        i = o[0],
        s = o[1]
      return (
        Xh(
          function () {
            var a = wh.transition
            wh.transition = 1
            try {
              s(e)
            } finally {
              wh.transition = a
            }
          },
          [e],
        ),
        i
      )
    },
    useTransition: function () {
      var e = Kh(Jh)[0]
      return [Th().current, e]
    },
    useMutableSource: Ph,
    useOpaqueIdentifier: function () {
      return Kh(Jh)[0]
    },
    unstable_isNewReconciler: !1,
  },
  Fh = {
    readContext: vg,
    useCallback: bi,
    useContext: vg,
    useEffect: Xh,
    useImperativeHandle: $h,
    useLayoutEffect: Yh,
    useMemo: ci,
    useReducer: Lh,
    useRef: Th,
    useState: function () {
      return Lh(Jh)
    },
    useDebugValue: ai,
    useDeferredValue: function (e) {
      var o = Lh(Jh),
        i = o[0],
        s = o[1]
      return (
        Xh(
          function () {
            var a = wh.transition
            wh.transition = 1
            try {
              s(e)
            } finally {
              wh.transition = a
            }
          },
          [e],
        ),
        i
      )
    },
    useTransition: function () {
      var e = Lh(Jh)[0]
      return [Th().current, e]
    },
    useMutableSource: Ph,
    useOpaqueIdentifier: function () {
      return Lh(Jh)[0]
    },
    unstable_isNewReconciler: !1,
  },
  ei = ra.ReactCurrentOwner,
  ug = !1
function fi(e, o, i, s) {
  o.child = e === null ? Zg(o, null, i, s) : Yg(o, e.child, i, s)
}
function gi(e, o, i, s, a) {
  i = i.render
  var f = o.ref
  return (
    tg(o, a),
    (s = Ch(e, o, i, s, f, a)),
    e !== null && !ug
      ? ((o.updateQueue = e.updateQueue), (o.flags &= -517), (e.lanes &= ~a), hi(e, o, a))
      : ((o.flags |= 1), fi(e, o, s, a), o.child)
  )
}
function ii(e, o, i, s, a, f) {
  if (e === null) {
    var c = i.type
    return typeof c == 'function' &&
      !ji(c) &&
      c.defaultProps === void 0 &&
      i.compare === null &&
      i.defaultProps === void 0
      ? ((o.tag = 15), (o.type = c), ki(e, o, c, s, a, f))
      : ((e = Vg(i.type, null, s, o, o.mode, f)), (e.ref = o.ref), (e.return = o), (o.child = e))
  }
  return (
    (c = e.child),
    (a & f) == 0 &&
    ((a = c.memoizedProps), (i = i.compare), (i = i !== null ? i : Je), i(a, s) && e.ref === o.ref)
      ? hi(e, o, f)
      : ((o.flags |= 1), (e = Tg(c, s)), (e.ref = o.ref), (e.return = o), (o.child = e))
  )
}
function ki(e, o, i, s, a, f) {
  if (e !== null && Je(e.memoizedProps, s) && e.ref === o.ref)
    if (((ug = !1), (f & a) != 0)) (e.flags & 16384) != 0 && (ug = !0)
    else return (o.lanes = e.lanes), hi(e, o, f)
  return li(e, o, i, s, f)
}
function mi(e, o, i) {
  var s = o.pendingProps,
    a = s.children,
    f = e !== null ? e.memoizedState : null
  if (s.mode === 'hidden' || s.mode === 'unstable-defer-without-hiding')
    if ((o.mode & 4) == 0) (o.memoizedState = { baseLanes: 0 }), ni(o, i)
    else if ((i & 1073741824) != 0)
      (o.memoizedState = { baseLanes: 0 }), ni(o, f !== null ? f.baseLanes : i)
    else
      return (
        (e = f !== null ? f.baseLanes | i : i),
        (o.lanes = o.childLanes = 1073741824),
        (o.memoizedState = { baseLanes: e }),
        ni(o, e),
        null
      )
  else f !== null ? ((s = f.baseLanes | i), (o.memoizedState = null)) : (s = i), ni(o, s)
  return fi(e, o, a, i), o.child
}
function oi(e, o) {
  var i = o.ref
  ;((e === null && i !== null) || (e !== null && e.ref !== i)) && (o.flags |= 128)
}
function li(e, o, i, s, a) {
  var f = Ff(i) ? Df : M.current
  return (
    (f = Ef(o, f)),
    tg(o, a),
    (i = Ch(e, o, i, s, f, a)),
    e !== null && !ug
      ? ((o.updateQueue = e.updateQueue), (o.flags &= -517), (e.lanes &= ~a), hi(e, o, a))
      : ((o.flags |= 1), fi(e, o, i, a), o.child)
  )
}
function pi(e, o, i, s, a) {
  if (Ff(i)) {
    var f = !0
    Jf(o)
  } else f = !1
  if ((tg(o, a), o.stateNode === null))
    e !== null && ((e.alternate = null), (o.alternate = null), (o.flags |= 2)),
      Mg(o, i, s),
      Og(o, i, s, a),
      (s = !0)
  else if (e === null) {
    var c = o.stateNode,
      d = o.memoizedProps
    c.props = d
    var h = c.context,
      j = i.contextType
    typeof j == 'object' && j !== null
      ? (j = vg(j))
      : ((j = Ff(i) ? Df : M.current), (j = Ef(o, j)))
    var nn = i.getDerivedStateFromProps,
      fn = typeof nn == 'function' || typeof c.getSnapshotBeforeUpdate == 'function'
    fn ||
      (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof c.componentWillReceiveProps != 'function') ||
      ((d !== s || h !== j) && Ng(o, c, s, j)),
      (wg = !1)
    var _e = o.memoizedState
    ;(c.state = _e),
      Cg(o, s, c, a),
      (h = o.memoizedState),
      d !== s || _e !== h || N.current || wg
        ? (typeof nn == 'function' && (Gg(o, i, nn, s), (h = o.memoizedState)),
          (d = wg || Lg(o, i, d, s, _e, h, j))
            ? (fn ||
                (typeof c.UNSAFE_componentWillMount != 'function' &&
                  typeof c.componentWillMount != 'function') ||
                (typeof c.componentWillMount == 'function' && c.componentWillMount(),
                typeof c.UNSAFE_componentWillMount == 'function' && c.UNSAFE_componentWillMount()),
              typeof c.componentDidMount == 'function' && (o.flags |= 4))
            : (typeof c.componentDidMount == 'function' && (o.flags |= 4),
              (o.memoizedProps = s),
              (o.memoizedState = h)),
          (c.props = s),
          (c.state = h),
          (c.context = j),
          (s = d))
        : (typeof c.componentDidMount == 'function' && (o.flags |= 4), (s = !1))
  } else {
    ;(c = o.stateNode),
      yg(e, o),
      (d = o.memoizedProps),
      (j = o.type === o.elementType ? d : lg(o.type, d)),
      (c.props = j),
      (fn = o.pendingProps),
      (_e = c.context),
      (h = i.contextType),
      typeof h == 'object' && h !== null
        ? (h = vg(h))
        : ((h = Ff(i) ? Df : M.current), (h = Ef(o, h)))
    var rn = i.getDerivedStateFromProps
    ;(nn = typeof rn == 'function' || typeof c.getSnapshotBeforeUpdate == 'function') ||
      (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof c.componentWillReceiveProps != 'function') ||
      ((d !== fn || _e !== h) && Ng(o, c, s, h)),
      (wg = !1),
      (_e = o.memoizedState),
      (c.state = _e),
      Cg(o, s, c, a)
    var un = o.memoizedState
    d !== fn || _e !== un || N.current || wg
      ? (typeof rn == 'function' && (Gg(o, i, rn, s), (un = o.memoizedState)),
        (j = wg || Lg(o, i, j, s, _e, un, h))
          ? (nn ||
              (typeof c.UNSAFE_componentWillUpdate != 'function' &&
                typeof c.componentWillUpdate != 'function') ||
              (typeof c.componentWillUpdate == 'function' && c.componentWillUpdate(s, un, h),
              typeof c.UNSAFE_componentWillUpdate == 'function' &&
                c.UNSAFE_componentWillUpdate(s, un, h)),
            typeof c.componentDidUpdate == 'function' && (o.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == 'function' && (o.flags |= 256))
          : (typeof c.componentDidUpdate != 'function' ||
              (d === e.memoizedProps && _e === e.memoizedState) ||
              (o.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != 'function' ||
              (d === e.memoizedProps && _e === e.memoizedState) ||
              (o.flags |= 256),
            (o.memoizedProps = s),
            (o.memoizedState = un)),
        (c.props = s),
        (c.state = un),
        (c.context = h),
        (s = j))
      : (typeof c.componentDidUpdate != 'function' ||
          (d === e.memoizedProps && _e === e.memoizedState) ||
          (o.flags |= 4),
        typeof c.getSnapshotBeforeUpdate != 'function' ||
          (d === e.memoizedProps && _e === e.memoizedState) ||
          (o.flags |= 256),
        (s = !1))
  }
  return qi(e, o, i, s, f, a)
}
function qi(e, o, i, s, a, f) {
  oi(e, o)
  var c = (o.flags & 64) != 0
  if (!s && !c) return a && Kf(o, i, !1), hi(e, o, f)
  ;(s = o.stateNode), (ei.current = o)
  var d = c && typeof i.getDerivedStateFromError != 'function' ? null : s.render()
  return (
    (o.flags |= 1),
    e !== null && c
      ? ((o.child = Yg(o, e.child, null, f)), (o.child = Yg(o, null, d, f)))
      : fi(e, o, d, f),
    (o.memoizedState = s.state),
    a && Kf(o, i, !0),
    o.child
  )
}
function ri(e) {
  var o = e.stateNode
  o.pendingContext
    ? Hf(e, o.pendingContext, o.pendingContext !== o.context)
    : o.context && Hf(e, o.context, !1),
    eh(e, o.containerInfo)
}
var si = { dehydrated: null, retryLane: 0 }
function ti(e, o, i) {
  var s = o.pendingProps,
    a = P.current,
    f = !1,
    c
  return (
    (c = (o.flags & 64) != 0) || (c = e !== null && e.memoizedState === null ? !1 : (a & 2) != 0),
    c
      ? ((f = !0), (o.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        s.fallback === void 0 ||
        s.unstable_avoidThisFallback === !0 ||
        (a |= 1),
    I(P, a & 1),
    e === null
      ? (s.fallback !== void 0 && ph(o),
        (e = s.children),
        (a = s.fallback),
        f
          ? ((e = ui(o, e, a, i)),
            (o.child.memoizedState = { baseLanes: i }),
            (o.memoizedState = si),
            e)
          : typeof s.unstable_expectedLoadTime == 'number'
          ? ((e = ui(o, e, a, i)),
            (o.child.memoizedState = { baseLanes: i }),
            (o.memoizedState = si),
            (o.lanes = 33554432),
            e)
          : ((i = vi({ mode: 'visible', children: e }, o.mode, i, null)),
            (i.return = o),
            (o.child = i)))
      : e.memoizedState !== null
      ? f
        ? ((s = wi(e, o, s.children, s.fallback, i)),
          (f = o.child),
          (a = e.child.memoizedState),
          (f.memoizedState = a === null ? { baseLanes: i } : { baseLanes: a.baseLanes | i }),
          (f.childLanes = e.childLanes & ~i),
          (o.memoizedState = si),
          s)
        : ((i = xi(e, o, s.children, i)), (o.memoizedState = null), i)
      : f
      ? ((s = wi(e, o, s.children, s.fallback, i)),
        (f = o.child),
        (a = e.child.memoizedState),
        (f.memoizedState = a === null ? { baseLanes: i } : { baseLanes: a.baseLanes | i }),
        (f.childLanes = e.childLanes & ~i),
        (o.memoizedState = si),
        s)
      : ((i = xi(e, o, s.children, i)), (o.memoizedState = null), i)
  )
}
function ui(e, o, i, s) {
  var a = e.mode,
    f = e.child
  return (
    (o = { mode: 'hidden', children: o }),
    (a & 2) == 0 && f !== null
      ? ((f.childLanes = 0), (f.pendingProps = o))
      : (f = vi(o, a, 0, null)),
    (i = Xg(i, a, s, null)),
    (f.return = e),
    (i.return = e),
    (f.sibling = i),
    (e.child = f),
    i
  )
}
function xi(e, o, i, s) {
  var a = e.child
  return (
    (e = a.sibling),
    (i = Tg(a, { mode: 'visible', children: i })),
    (o.mode & 2) == 0 && (i.lanes = s),
    (i.return = o),
    (i.sibling = null),
    e !== null && ((e.nextEffect = null), (e.flags = 8), (o.firstEffect = o.lastEffect = e)),
    (o.child = i)
  )
}
function wi(e, o, i, s, a) {
  var f = o.mode,
    c = e.child
  e = c.sibling
  var d = { mode: 'hidden', children: i }
  return (
    (f & 2) == 0 && o.child !== c
      ? ((i = o.child),
        (i.childLanes = 0),
        (i.pendingProps = d),
        (c = i.lastEffect),
        c !== null
          ? ((o.firstEffect = i.firstEffect), (o.lastEffect = c), (c.nextEffect = null))
          : (o.firstEffect = o.lastEffect = null))
      : (i = Tg(c, d)),
    e !== null ? (s = Tg(e, s)) : ((s = Xg(s, f, a, null)), (s.flags |= 2)),
    (s.return = o),
    (i.return = o),
    (i.sibling = s),
    (o.child = i),
    s
  )
}
function yi(e, o) {
  e.lanes |= o
  var i = e.alternate
  i !== null && (i.lanes |= o), sg(e.return, o)
}
function zi(e, o, i, s, a, f) {
  var c = e.memoizedState
  c === null
    ? (e.memoizedState = {
        isBackwards: o,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: i,
        tailMode: a,
        lastEffect: f,
      })
    : ((c.isBackwards = o),
      (c.rendering = null),
      (c.renderingStartTime = 0),
      (c.last = s),
      (c.tail = i),
      (c.tailMode = a),
      (c.lastEffect = f))
}
function Ai(e, o, i) {
  var s = o.pendingProps,
    a = s.revealOrder,
    f = s.tail
  if ((fi(e, o, s.children, i), (s = P.current), (s & 2) != 0)) (s = (s & 1) | 2), (o.flags |= 64)
  else {
    if (e !== null && (e.flags & 64) != 0)
      e: for (e = o.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yi(e, i)
        else if (e.tag === 19) yi(e, i)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === o) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === o) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    s &= 1
  }
  if ((I(P, s), (o.mode & 2) == 0)) o.memoizedState = null
  else
    switch (a) {
      case 'forwards':
        for (i = o.child, a = null; i !== null; )
          (e = i.alternate), e !== null && ih(e) === null && (a = i), (i = i.sibling)
        ;(i = a),
          i === null ? ((a = o.child), (o.child = null)) : ((a = i.sibling), (i.sibling = null)),
          zi(o, !1, a, i, f, o.lastEffect)
        break
      case 'backwards':
        for (i = null, a = o.child, o.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && ih(e) === null)) {
            o.child = a
            break
          }
          ;(e = a.sibling), (a.sibling = i), (i = a), (a = e)
        }
        zi(o, !0, i, null, f, o.lastEffect)
        break
      case 'together':
        zi(o, !1, null, null, void 0, o.lastEffect)
        break
      default:
        o.memoizedState = null
    }
  return o.child
}
function hi(e, o, i) {
  if ((e !== null && (o.dependencies = e.dependencies), (Dg |= o.lanes), (i & o.childLanes) != 0)) {
    if (e !== null && o.child !== e.child) throw Error(y(153))
    if (o.child !== null) {
      for (e = o.child, i = Tg(e, e.pendingProps), o.child = i, i.return = o; e.sibling !== null; )
        (e = e.sibling), (i = i.sibling = Tg(e, e.pendingProps)), (i.return = o)
      i.sibling = null
    }
    return o.child
  }
  return null
}
var Bi, Ci, Di, Ei
;(Bi = function (e, o) {
  for (var i = o.child; i !== null; ) {
    if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode)
    else if (i.tag !== 4 && i.child !== null) {
      ;(i.child.return = i), (i = i.child)
      continue
    }
    if (i === o) break
    for (; i.sibling === null; ) {
      if (i.return === null || i.return === o) return
      i = i.return
    }
    ;(i.sibling.return = i.return), (i = i.sibling)
  }
}),
  (Ci = function () {}),
  (Di = function (e, o, i, s) {
    var a = e.memoizedProps
    if (a !== s) {
      ;(e = o.stateNode), dh(ah.current)
      var f = null
      switch (i) {
        case 'input':
          ;(a = Ya(e, a)), (s = Ya(e, s)), (f = [])
          break
        case 'option':
          ;(a = eb(e, a)), (s = eb(e, s)), (f = [])
          break
        case 'select':
          ;(a = m({}, a, { value: void 0 })), (s = m({}, s, { value: void 0 })), (f = [])
          break
        case 'textarea':
          ;(a = gb(e, a)), (s = gb(e, s)), (f = [])
          break
        default:
          typeof a.onClick != 'function' && typeof s.onClick == 'function' && (e.onclick = jf)
      }
      vb(i, s)
      var c
      i = null
      for (j in a)
        if (!s.hasOwnProperty(j) && a.hasOwnProperty(j) && a[j] != null)
          if (j === 'style') {
            var d = a[j]
            for (c in d) d.hasOwnProperty(c) && (i || (i = {}), (i[c] = ''))
          } else
            j !== 'dangerouslySetInnerHTML' &&
              j !== 'children' &&
              j !== 'suppressContentEditableWarning' &&
              j !== 'suppressHydrationWarning' &&
              j !== 'autoFocus' &&
              (ca.hasOwnProperty(j) ? f || (f = []) : (f = f || []).push(j, null))
      for (j in s) {
        var h = s[j]
        if (
          ((d = a != null ? a[j] : void 0),
          s.hasOwnProperty(j) && h !== d && (h != null || d != null))
        )
          if (j === 'style')
            if (d) {
              for (c in d)
                !d.hasOwnProperty(c) || (h && h.hasOwnProperty(c)) || (i || (i = {}), (i[c] = ''))
              for (c in h) h.hasOwnProperty(c) && d[c] !== h[c] && (i || (i = {}), (i[c] = h[c]))
            } else i || (f || (f = []), f.push(j, i)), (i = h)
          else
            j === 'dangerouslySetInnerHTML'
              ? ((h = h ? h.__html : void 0),
                (d = d ? d.__html : void 0),
                h != null && d !== h && (f = f || []).push(j, h))
              : j === 'children'
              ? (typeof h != 'string' && typeof h != 'number') || (f = f || []).push(j, '' + h)
              : j !== 'suppressContentEditableWarning' &&
                j !== 'suppressHydrationWarning' &&
                (ca.hasOwnProperty(j)
                  ? (h != null && j === 'onScroll' && G('scroll', e), f || d === h || (f = []))
                  : typeof h == 'object' && h !== null && h.$$typeof === Ga
                  ? h.toString()
                  : (f = f || []).push(j, h))
      }
      i && (f = f || []).push('style', i)
      var j = f
      ;(o.updateQueue = j) && (o.flags |= 4)
    }
  }),
  (Ei = function (e, o, i, s) {
    i !== s && (o.flags |= 4)
  })
function Fi(e, o) {
  if (!lh)
    switch (e.tailMode) {
      case 'hidden':
        o = e.tail
        for (var i = null; o !== null; ) o.alternate !== null && (i = o), (o = o.sibling)
        i === null ? (e.tail = null) : (i.sibling = null)
        break
      case 'collapsed':
        i = e.tail
        for (var s = null; i !== null; ) i.alternate !== null && (s = i), (i = i.sibling)
        s === null
          ? o || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (s.sibling = null)
    }
}
function Gi(e, o, i) {
  var s = o.pendingProps
  switch (o.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null
    case 1:
      return Ff(o.type) && Gf(), null
    case 3:
      return (
        fh(),
        H(N),
        H(M),
        uh(),
        (s = o.stateNode),
        s.pendingContext && ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (rh(o) ? (o.flags |= 4) : s.hydrate || (o.flags |= 256)),
        Ci(o),
        null
      )
    case 5:
      hh(o)
      var a = dh(ch.current)
      if (((i = o.type), e !== null && o.stateNode != null))
        Di(e, o, i, s, a), e.ref !== o.ref && (o.flags |= 128)
      else {
        if (!s) {
          if (o.stateNode === null) throw Error(y(166))
          return null
        }
        if (((e = dh(ah.current)), rh(o))) {
          ;(s = o.stateNode), (i = o.type)
          var f = o.memoizedProps
          switch (((s[wf] = o), (s[xf] = f), i)) {
            case 'dialog':
              G('cancel', s), G('close', s)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              G('load', s)
              break
            case 'video':
            case 'audio':
              for (e = 0; e < Xe.length; e++) G(Xe[e], s)
              break
            case 'source':
              G('error', s)
              break
            case 'img':
            case 'image':
            case 'link':
              G('error', s), G('load', s)
              break
            case 'details':
              G('toggle', s)
              break
            case 'input':
              Za(s, f), G('invalid', s)
              break
            case 'select':
              ;(s._wrapperState = { wasMultiple: !!f.multiple }), G('invalid', s)
              break
            case 'textarea':
              hb(s, f), G('invalid', s)
          }
          vb(i, f), (e = null)
          for (var c in f)
            f.hasOwnProperty(c) &&
              ((a = f[c]),
              c === 'children'
                ? typeof a == 'string'
                  ? s.textContent !== a && (e = ['children', a])
                  : typeof a == 'number' && s.textContent !== '' + a && (e = ['children', '' + a])
                : ca.hasOwnProperty(c) && a != null && c === 'onScroll' && G('scroll', s))
          switch (i) {
            case 'input':
              Va(s), cb(s, f, !0)
              break
            case 'textarea':
              Va(s), jb(s)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof f.onClick == 'function' && (s.onclick = jf)
          }
          ;(s = e), (o.updateQueue = s), s !== null && (o.flags |= 4)
        } else {
          switch (
            ((c = a.nodeType === 9 ? a : a.ownerDocument),
            e === kb.html && (e = lb(i)),
            e === kb.html
              ? i === 'script'
                ? ((e = c.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof s.is == 'string'
                ? (e = c.createElement(i, { is: s.is }))
                : ((e = c.createElement(i)),
                  i === 'select' &&
                    ((c = e), s.multiple ? (c.multiple = !0) : s.size && (c.size = s.size)))
              : (e = c.createElementNS(e, i)),
            (e[wf] = o),
            (e[xf] = s),
            Bi(e, o, !1, !1),
            (o.stateNode = e),
            (c = wb(i, s)),
            i)
          ) {
            case 'dialog':
              G('cancel', e), G('close', e), (a = s)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              G('load', e), (a = s)
              break
            case 'video':
            case 'audio':
              for (a = 0; a < Xe.length; a++) G(Xe[a], e)
              a = s
              break
            case 'source':
              G('error', e), (a = s)
              break
            case 'img':
            case 'image':
            case 'link':
              G('error', e), G('load', e), (a = s)
              break
            case 'details':
              G('toggle', e), (a = s)
              break
            case 'input':
              Za(e, s), (a = Ya(e, s)), G('invalid', e)
              break
            case 'option':
              a = eb(e, s)
              break
            case 'select':
              ;(e._wrapperState = { wasMultiple: !!s.multiple }),
                (a = m({}, s, { value: void 0 })),
                G('invalid', e)
              break
            case 'textarea':
              hb(e, s), (a = gb(e, s)), G('invalid', e)
              break
            default:
              a = s
          }
          vb(i, a)
          var d = a
          for (f in d)
            if (d.hasOwnProperty(f)) {
              var h = d[f]
              f === 'style'
                ? tb(e, h)
                : f === 'dangerouslySetInnerHTML'
                ? ((h = h ? h.__html : void 0), h != null && ob(e, h))
                : f === 'children'
                ? typeof h == 'string'
                  ? (i !== 'textarea' || h !== '') && pb(e, h)
                  : typeof h == 'number' && pb(e, '' + h)
                : f !== 'suppressContentEditableWarning' &&
                  f !== 'suppressHydrationWarning' &&
                  f !== 'autoFocus' &&
                  (ca.hasOwnProperty(f)
                    ? h != null && f === 'onScroll' && G('scroll', e)
                    : h != null && qa(e, f, h, c))
            }
          switch (i) {
            case 'input':
              Va(e), cb(e, s, !1)
              break
            case 'textarea':
              Va(e), jb(e)
              break
            case 'option':
              s.value != null && e.setAttribute('value', '' + Sa(s.value))
              break
            case 'select':
              ;(e.multiple = !!s.multiple),
                (f = s.value),
                f != null
                  ? fb(e, !!s.multiple, f, !1)
                  : s.defaultValue != null && fb(e, !!s.multiple, s.defaultValue, !0)
              break
            default:
              typeof a.onClick == 'function' && (e.onclick = jf)
          }
          mf(i, s) && (o.flags |= 4)
        }
        o.ref !== null && (o.flags |= 128)
      }
      return null
    case 6:
      if (e && o.stateNode != null) Ei(e, o, e.memoizedProps, s)
      else {
        if (typeof s != 'string' && o.stateNode === null) throw Error(y(166))
        ;(i = dh(ch.current)),
          dh(ah.current),
          rh(o)
            ? ((s = o.stateNode),
              (i = o.memoizedProps),
              (s[wf] = o),
              s.nodeValue !== i && (o.flags |= 4))
            : ((s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s)),
              (s[wf] = o),
              (o.stateNode = s))
      }
      return null
    case 13:
      return (
        H(P),
        (s = o.memoizedState),
        (o.flags & 64) != 0
          ? ((o.lanes = i), o)
          : ((s = s !== null),
            (i = !1),
            e === null
              ? o.memoizedProps.fallback !== void 0 && rh(o)
              : (i = e.memoizedState !== null),
            s &&
              !i &&
              (o.mode & 2) != 0 &&
              ((e === null && o.memoizedProps.unstable_avoidThisFallback !== !0) ||
              (P.current & 1) != 0
                ? V === 0 && (V = 3)
                : ((V === 0 || V === 3) && (V = 4),
                  U === null || ((Dg & 134217727) == 0 && (Hi & 134217727) == 0) || Ii(U, W))),
            (s || i) && (o.flags |= 4),
            null)
      )
    case 4:
      return fh(), Ci(o), e === null && cf(o.stateNode.containerInfo), null
    case 10:
      return rg(o), null
    case 17:
      return Ff(o.type) && Gf(), null
    case 19:
      if ((H(P), (s = o.memoizedState), s === null)) return null
      if (((f = (o.flags & 64) != 0), (c = s.rendering), c === null))
        if (f) Fi(s, !1)
        else {
          if (V !== 0 || (e !== null && (e.flags & 64) != 0))
            for (e = o.child; e !== null; ) {
              if (((c = ih(e)), c !== null)) {
                for (
                  o.flags |= 64,
                    Fi(s, !1),
                    f = c.updateQueue,
                    f !== null && ((o.updateQueue = f), (o.flags |= 4)),
                    s.lastEffect === null && (o.firstEffect = null),
                    o.lastEffect = s.lastEffect,
                    s = i,
                    i = o.child;
                  i !== null;

                )
                  (f = i),
                    (e = s),
                    (f.flags &= 2),
                    (f.nextEffect = null),
                    (f.firstEffect = null),
                    (f.lastEffect = null),
                    (c = f.alternate),
                    c === null
                      ? ((f.childLanes = 0),
                        (f.lanes = e),
                        (f.child = null),
                        (f.memoizedProps = null),
                        (f.memoizedState = null),
                        (f.updateQueue = null),
                        (f.dependencies = null),
                        (f.stateNode = null))
                      : ((f.childLanes = c.childLanes),
                        (f.lanes = c.lanes),
                        (f.child = c.child),
                        (f.memoizedProps = c.memoizedProps),
                        (f.memoizedState = c.memoizedState),
                        (f.updateQueue = c.updateQueue),
                        (f.type = c.type),
                        (e = c.dependencies),
                        (f.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (i = i.sibling)
                return I(P, (P.current & 1) | 2), o.child
              }
              e = e.sibling
            }
          s.tail !== null &&
            O() > Ji &&
            ((o.flags |= 64), (f = !0), Fi(s, !1), (o.lanes = 33554432))
        }
      else {
        if (!f)
          if (((e = ih(c)), e !== null)) {
            if (
              ((o.flags |= 64),
              (f = !0),
              (i = e.updateQueue),
              i !== null && ((o.updateQueue = i), (o.flags |= 4)),
              Fi(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !c.alternate && !lh)
            )
              return (o = o.lastEffect = s.lastEffect), o !== null && (o.nextEffect = null), null
          } else
            2 * O() - s.renderingStartTime > Ji &&
              i !== 1073741824 &&
              ((o.flags |= 64), (f = !0), Fi(s, !1), (o.lanes = 33554432))
        s.isBackwards
          ? ((c.sibling = o.child), (o.child = c))
          : ((i = s.last), i !== null ? (i.sibling = c) : (o.child = c), (s.last = c))
      }
      return s.tail !== null
        ? ((i = s.tail),
          (s.rendering = i),
          (s.tail = i.sibling),
          (s.lastEffect = o.lastEffect),
          (s.renderingStartTime = O()),
          (i.sibling = null),
          (o = P.current),
          I(P, f ? (o & 1) | 2 : o & 1),
          i)
        : null
    case 23:
    case 24:
      return (
        Ki(),
        e !== null &&
          (e.memoizedState !== null) != (o.memoizedState !== null) &&
          s.mode !== 'unstable-defer-without-hiding' &&
          (o.flags |= 4),
        null
      )
  }
  throw Error(y(156, o.tag))
}
function Li(e) {
  switch (e.tag) {
    case 1:
      Ff(e.type) && Gf()
      var o = e.flags
      return o & 4096 ? ((e.flags = (o & -4097) | 64), e) : null
    case 3:
      if ((fh(), H(N), H(M), uh(), (o = e.flags), (o & 64) != 0)) throw Error(y(285))
      return (e.flags = (o & -4097) | 64), e
    case 5:
      return hh(e), null
    case 13:
      return H(P), (o = e.flags), o & 4096 ? ((e.flags = (o & -4097) | 64), e) : null
    case 19:
      return H(P), null
    case 4:
      return fh(), null
    case 10:
      return rg(e), null
    case 23:
    case 24:
      return Ki(), null
    default:
      return null
  }
}
function Mi(e, o) {
  try {
    var i = '',
      s = o
    do (i += Qa(s)), (s = s.return)
    while (s)
    var a = i
  } catch (f) {
    a =
      `
Error generating stack: ` +
      f.message +
      `
` +
      f.stack
  }
  return { value: e, source: o, stack: a }
}
function Ni(e, o) {
  try {
    console.error(o.value)
  } catch (i) {
    setTimeout(function () {
      throw i
    })
  }
}
var Oi = typeof WeakMap == 'function' ? WeakMap : Map
function Pi(e, o, i) {
  ;(i = zg(-1, i)), (i.tag = 3), (i.payload = { element: null })
  var s = o.value
  return (
    (i.callback = function () {
      Qi || ((Qi = !0), (Ri = s)), Ni(e, o)
    }),
    i
  )
}
function Si(e, o, i) {
  ;(i = zg(-1, i)), (i.tag = 3)
  var s = e.type.getDerivedStateFromError
  if (typeof s == 'function') {
    var a = o.value
    i.payload = function () {
      return Ni(e, o), s(a)
    }
  }
  var f = e.stateNode
  return (
    f !== null &&
      typeof f.componentDidCatch == 'function' &&
      (i.callback = function () {
        typeof s != 'function' && (Ti === null ? (Ti = new Set([this])) : Ti.add(this), Ni(e, o))
        var c = o.stack
        this.componentDidCatch(o.value, { componentStack: c !== null ? c : '' })
      }),
    i
  )
}
var Ui = typeof WeakSet == 'function' ? WeakSet : Set
function Vi(e) {
  var o = e.ref
  if (o !== null)
    if (typeof o == 'function')
      try {
        o(null)
      } catch (i) {
        Wi(e, i)
      }
    else o.current = null
}
function Xi(e, o) {
  switch (o.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return
    case 1:
      if (o.flags & 256 && e !== null) {
        var i = e.memoizedProps,
          s = e.memoizedState
        ;(e = o.stateNode),
          (o = e.getSnapshotBeforeUpdate(o.elementType === o.type ? i : lg(o.type, i), s)),
          (e.__reactInternalSnapshotBeforeUpdate = o)
      }
      return
    case 3:
      o.flags & 256 && qf(o.stateNode.containerInfo)
      return
    case 5:
    case 6:
    case 4:
    case 17:
      return
  }
  throw Error(y(163))
}
function Yi(e, o, i) {
  switch (i.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (((o = i.updateQueue), (o = o !== null ? o.lastEffect : null), o !== null)) {
        e = o = o.next
        do {
          if ((e.tag & 3) == 3) {
            var s = e.create
            e.destroy = s()
          }
          e = e.next
        } while (e !== o)
      }
      if (((o = i.updateQueue), (o = o !== null ? o.lastEffect : null), o !== null)) {
        e = o = o.next
        do {
          var a = e
          ;(s = a.next), (a = a.tag), (a & 4) != 0 && (a & 1) != 0 && (Zi(i, e), $i(i, e)), (e = s)
        } while (e !== o)
      }
      return
    case 1:
      ;(e = i.stateNode),
        i.flags & 4 &&
          (o === null
            ? e.componentDidMount()
            : ((s = i.elementType === i.type ? o.memoizedProps : lg(i.type, o.memoizedProps)),
              e.componentDidUpdate(s, o.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
        (o = i.updateQueue),
        o !== null && Eg(i, o, e)
      return
    case 3:
      if (((o = i.updateQueue), o !== null)) {
        if (((e = null), i.child !== null))
          switch (i.child.tag) {
            case 5:
              e = i.child.stateNode
              break
            case 1:
              e = i.child.stateNode
          }
        Eg(i, o, e)
      }
      return
    case 5:
      ;(e = i.stateNode), o === null && i.flags & 4 && mf(i.type, i.memoizedProps) && e.focus()
      return
    case 6:
      return
    case 4:
      return
    case 12:
      return
    case 13:
      i.memoizedState === null &&
        ((i = i.alternate),
        i !== null &&
          ((i = i.memoizedState), i !== null && ((i = i.dehydrated), i !== null && Cc(i))))
      return
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return
  }
  throw Error(y(163))
}
function aj(e, o) {
  for (var i = e; ; ) {
    if (i.tag === 5) {
      var s = i.stateNode
      if (o)
        (s = s.style),
          typeof s.setProperty == 'function'
            ? s.setProperty('display', 'none', 'important')
            : (s.display = 'none')
      else {
        s = i.stateNode
        var a = i.memoizedProps.style
        ;(a = a != null && a.hasOwnProperty('display') ? a.display : null),
          (s.style.display = sb('display', a))
      }
    } else if (i.tag === 6) i.stateNode.nodeValue = o ? '' : i.memoizedProps
    else if (
      ((i.tag !== 23 && i.tag !== 24) || i.memoizedState === null || i === e) &&
      i.child !== null
    ) {
      ;(i.child.return = i), (i = i.child)
      continue
    }
    if (i === e) break
    for (; i.sibling === null; ) {
      if (i.return === null || i.return === e) return
      i = i.return
    }
    ;(i.sibling.return = i.return), (i = i.sibling)
  }
}
function bj(e, o) {
  if (Mf && typeof Mf.onCommitFiberUnmount == 'function')
    try {
      Mf.onCommitFiberUnmount(Lf, o)
    } catch (f) {}
  switch (o.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (((e = o.updateQueue), e !== null && ((e = e.lastEffect), e !== null))) {
        var i = (e = e.next)
        do {
          var s = i,
            a = s.destroy
          if (((s = s.tag), a !== void 0))
            if ((s & 4) != 0) Zi(o, i)
            else {
              s = o
              try {
                a()
              } catch (f) {
                Wi(s, f)
              }
            }
          i = i.next
        } while (i !== e)
      }
      break
    case 1:
      if ((Vi(o), (e = o.stateNode), typeof e.componentWillUnmount == 'function'))
        try {
          ;(e.props = o.memoizedProps), (e.state = o.memoizedState), e.componentWillUnmount()
        } catch (f) {
          Wi(o, f)
        }
      break
    case 5:
      Vi(o)
      break
    case 4:
      cj(e, o)
  }
}
function dj(e) {
  ;(e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null)
}
function ej(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function fj(e) {
  e: {
    for (var o = e.return; o !== null; ) {
      if (ej(o)) break e
      o = o.return
    }
    throw Error(y(160))
  }
  var i = o
  switch (((o = i.stateNode), i.tag)) {
    case 5:
      var s = !1
      break
    case 3:
      ;(o = o.containerInfo), (s = !0)
      break
    case 4:
      ;(o = o.containerInfo), (s = !0)
      break
    default:
      throw Error(y(161))
  }
  i.flags & 16 && (pb(o, ''), (i.flags &= -17))
  e: n: for (i = e; ; ) {
    for (; i.sibling === null; ) {
      if (i.return === null || ej(i.return)) {
        i = null
        break e
      }
      i = i.return
    }
    for (i.sibling.return = i.return, i = i.sibling; i.tag !== 5 && i.tag !== 6 && i.tag !== 18; ) {
      if (i.flags & 2 || i.child === null || i.tag === 4) continue n
      ;(i.child.return = i), (i = i.child)
    }
    if (!(i.flags & 2)) {
      i = i.stateNode
      break e
    }
  }
  s ? gj(e, i, o) : hj(e, i, o)
}
function gj(e, o, i) {
  var s = e.tag,
    a = s === 5 || s === 6
  if (a)
    (e = a ? e.stateNode : e.stateNode.instance),
      o
        ? i.nodeType === 8
          ? i.parentNode.insertBefore(e, o)
          : i.insertBefore(e, o)
        : (i.nodeType === 8
            ? ((o = i.parentNode), o.insertBefore(e, i))
            : ((o = i), o.appendChild(e)),
          (i = i._reactRootContainer),
          i != null || o.onclick !== null || (o.onclick = jf))
  else if (s !== 4 && ((e = e.child), e !== null))
    for (gj(e, o, i), e = e.sibling; e !== null; ) gj(e, o, i), (e = e.sibling)
}
function hj(e, o, i) {
  var s = e.tag,
    a = s === 5 || s === 6
  if (a) (e = a ? e.stateNode : e.stateNode.instance), o ? i.insertBefore(e, o) : i.appendChild(e)
  else if (s !== 4 && ((e = e.child), e !== null))
    for (hj(e, o, i), e = e.sibling; e !== null; ) hj(e, o, i), (e = e.sibling)
}
function cj(e, o) {
  for (var i = o, s = !1, a, f; ; ) {
    if (!s) {
      s = i.return
      e: for (;;) {
        if (s === null) throw Error(y(160))
        switch (((a = s.stateNode), s.tag)) {
          case 5:
            f = !1
            break e
          case 3:
            ;(a = a.containerInfo), (f = !0)
            break e
          case 4:
            ;(a = a.containerInfo), (f = !0)
            break e
        }
        s = s.return
      }
      s = !0
    }
    if (i.tag === 5 || i.tag === 6) {
      e: for (var c = e, d = i, h = d; ; )
        if ((bj(c, h), h.child !== null && h.tag !== 4)) (h.child.return = h), (h = h.child)
        else {
          if (h === d) break e
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === d) break e
            h = h.return
          }
          ;(h.sibling.return = h.return), (h = h.sibling)
        }
      f
        ? ((c = a),
          (d = i.stateNode),
          c.nodeType === 8 ? c.parentNode.removeChild(d) : c.removeChild(d))
        : a.removeChild(i.stateNode)
    } else if (i.tag === 4) {
      if (i.child !== null) {
        ;(a = i.stateNode.containerInfo), (f = !0), (i.child.return = i), (i = i.child)
        continue
      }
    } else if ((bj(e, i), i.child !== null)) {
      ;(i.child.return = i), (i = i.child)
      continue
    }
    if (i === o) break
    for (; i.sibling === null; ) {
      if (i.return === null || i.return === o) return
      ;(i = i.return), i.tag === 4 && (s = !1)
    }
    ;(i.sibling.return = i.return), (i = i.sibling)
  }
}
function ij(e, o) {
  switch (o.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var i = o.updateQueue
      if (((i = i !== null ? i.lastEffect : null), i !== null)) {
        var s = (i = i.next)
        do
          (s.tag & 3) == 3 && ((e = s.destroy), (s.destroy = void 0), e !== void 0 && e()),
            (s = s.next)
        while (s !== i)
      }
      return
    case 1:
      return
    case 5:
      if (((i = o.stateNode), i != null)) {
        s = o.memoizedProps
        var a = e !== null ? e.memoizedProps : s
        e = o.type
        var f = o.updateQueue
        if (((o.updateQueue = null), f !== null)) {
          for (
            i[xf] = s,
              e === 'input' && s.type === 'radio' && s.name != null && $a(i, s),
              wb(e, a),
              o = wb(e, s),
              a = 0;
            a < f.length;
            a += 2
          ) {
            var c = f[a],
              d = f[a + 1]
            c === 'style'
              ? tb(i, d)
              : c === 'dangerouslySetInnerHTML'
              ? ob(i, d)
              : c === 'children'
              ? pb(i, d)
              : qa(i, c, d, o)
          }
          switch (e) {
            case 'input':
              ab(i, s)
              break
            case 'textarea':
              ib(i, s)
              break
            case 'select':
              ;(e = i._wrapperState.wasMultiple),
                (i._wrapperState.wasMultiple = !!s.multiple),
                (f = s.value),
                f != null
                  ? fb(i, !!s.multiple, f, !1)
                  : e !== !!s.multiple &&
                    (s.defaultValue != null
                      ? fb(i, !!s.multiple, s.defaultValue, !0)
                      : fb(i, !!s.multiple, s.multiple ? [] : '', !1))
          }
        }
      }
      return
    case 6:
      if (o.stateNode === null) throw Error(y(162))
      o.stateNode.nodeValue = o.memoizedProps
      return
    case 3:
      ;(i = o.stateNode), i.hydrate && ((i.hydrate = !1), Cc(i.containerInfo))
      return
    case 12:
      return
    case 13:
      o.memoizedState !== null && ((jj = O()), aj(o.child, !0)), kj(o)
      return
    case 19:
      kj(o)
      return
    case 17:
      return
    case 23:
    case 24:
      aj(o, o.memoizedState !== null)
      return
  }
  throw Error(y(163))
}
function kj(e) {
  var o = e.updateQueue
  if (o !== null) {
    e.updateQueue = null
    var i = e.stateNode
    i === null && (i = e.stateNode = new Ui()),
      o.forEach(function (s) {
        var a = lj.bind(null, e, s)
        i.has(s) || (i.add(s), s.then(a, a))
      })
  }
}
function mj(e, o) {
  return e !== null && ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((o = o.memoizedState), o !== null && o.dehydrated === null)
    : !1
}
var nj = Math.ceil,
  oj = ra.ReactCurrentDispatcher,
  pj = ra.ReactCurrentOwner,
  X = 0,
  U = null,
  Y = null,
  W = 0,
  qj = 0,
  rj = Bf(0),
  V = 0,
  sj = null,
  tj = 0,
  Dg = 0,
  Hi = 0,
  uj = 0,
  vj = null,
  jj = 0,
  Ji = 1 / 0
function wj() {
  Ji = O() + 500
}
var Z = null,
  Qi = !1,
  Ri = null,
  Ti = null,
  xj = !1,
  yj = null,
  zj = 90,
  Aj = [],
  Bj = [],
  Cj = null,
  Dj = 0,
  Ej = null,
  Fj = -1,
  Gj = 0,
  Hj = 0,
  Ij = null,
  Jj = !1
function Hg() {
  return (X & 48) != 0 ? O() : Fj !== -1 ? Fj : (Fj = O())
}
function Ig(e) {
  if (((e = e.mode), (e & 2) == 0)) return 1
  if ((e & 4) == 0) return eg() === 99 ? 1 : 2
  if ((Gj === 0 && (Gj = tj), kg.transition !== 0)) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0), (e = Gj)
    var o = 4186112 & ~Hj
    return (o &= -o), o === 0 && ((e = 4186112 & ~e), (o = e & -e), o === 0 && (o = 8192)), o
  }
  return (e = eg()), (X & 4) != 0 && e === 98 ? (e = Xc(12, Gj)) : ((e = Sc(e)), (e = Xc(e, Gj))), e
}
function Jg(e, o, i) {
  if (50 < Dj) throw ((Dj = 0), (Ej = null), Error(y(185)))
  if (((e = Kj(e, o)), e === null)) return null
  $c(e, o, i), e === U && ((Hi |= o), V === 4 && Ii(e, W))
  var s = eg()
  o === 1
    ? (X & 8) != 0 && (X & 48) == 0
      ? Lj(e)
      : (Mj(e, i), X === 0 && (wj(), ig()))
    : ((X & 4) == 0 || (s !== 98 && s !== 99) || (Cj === null ? (Cj = new Set([e])) : Cj.add(e)),
      Mj(e, i)),
    (vj = e)
}
function Kj(e, o) {
  e.lanes |= o
  var i = e.alternate
  for (i !== null && (i.lanes |= o), i = e, e = e.return; e !== null; )
    (e.childLanes |= o),
      (i = e.alternate),
      i !== null && (i.childLanes |= o),
      (i = e),
      (e = e.return)
  return i.tag === 3 ? i.stateNode : null
}
function Mj(e, o) {
  for (
    var i = e.callbackNode,
      s = e.suspendedLanes,
      a = e.pingedLanes,
      f = e.expirationTimes,
      c = e.pendingLanes;
    0 < c;

  ) {
    var d = 31 - Vc(c),
      h = 1 << d,
      j = f[d]
    if (j === -1) {
      if ((h & s) == 0 || (h & a) != 0) {
        ;(j = o), Rc(h)
        var nn = F
        f[d] = 10 <= nn ? j + 250 : 6 <= nn ? j + 5e3 : -1
      }
    } else j <= o && (e.expiredLanes |= h)
    c &= ~h
  }
  if (((s = Uc(e, e === U ? W : 0)), (o = F), s === 0))
    i !== null && (i !== Zf && Pf(i), (e.callbackNode = null), (e.callbackPriority = 0))
  else {
    if (i !== null) {
      if (e.callbackPriority === o) return
      i !== Zf && Pf(i)
    }
    o === 15
      ? ((i = Lj.bind(null, e)),
        ag === null ? ((ag = [i]), (bg = Of(Uf, jg))) : ag.push(i),
        (i = Zf))
      : o === 14
      ? (i = hg(99, Lj.bind(null, e)))
      : ((i = Tc(o)), (i = hg(i, Nj.bind(null, e)))),
      (e.callbackPriority = o),
      (e.callbackNode = i)
  }
}
function Nj(e) {
  if (((Fj = -1), (Hj = Gj = 0), (X & 48) != 0)) throw Error(y(327))
  var o = e.callbackNode
  if (Oj() && e.callbackNode !== o) return null
  var i = Uc(e, e === U ? W : 0)
  if (i === 0) return null
  var s = i,
    a = X
  X |= 16
  var f = Pj()
  ;(U !== e || W !== s) && (wj(), Qj(e, s))
  do
    try {
      Rj()
      break
    } catch (d) {
      Sj(e, d)
    }
  while (1)
  if (
    (qg(),
    (oj.current = f),
    (X = a),
    Y !== null ? (s = 0) : ((U = null), (W = 0), (s = V)),
    (tj & Hi) != 0)
  )
    Qj(e, 0)
  else if (s !== 0) {
    if (
      (s === 2 &&
        ((X |= 64),
        e.hydrate && ((e.hydrate = !1), qf(e.containerInfo)),
        (i = Wc(e)),
        i !== 0 && (s = Tj(e, i))),
      s === 1)
    )
      throw ((o = sj), Qj(e, 0), Ii(e, i), Mj(e, O()), o)
    switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = i), s)) {
      case 0:
      case 1:
        throw Error(y(345))
      case 2:
        Uj(e)
        break
      case 3:
        if ((Ii(e, i), (i & 62914560) === i && ((s = jj + 500 - O()), 10 < s))) {
          if (Uc(e, 0) !== 0) break
          if (((a = e.suspendedLanes), (a & i) !== i)) {
            Hg(), (e.pingedLanes |= e.suspendedLanes & a)
            break
          }
          e.timeoutHandle = of(Uj.bind(null, e), s)
          break
        }
        Uj(e)
        break
      case 4:
        if ((Ii(e, i), (i & 4186112) === i)) break
        for (s = e.eventTimes, a = -1; 0 < i; ) {
          var c = 31 - Vc(i)
          ;(f = 1 << c), (c = s[c]), c > a && (a = c), (i &= ~f)
        }
        if (
          ((i = a),
          (i = O() - i),
          (i =
            (120 > i
              ? 120
              : 480 > i
              ? 480
              : 1080 > i
              ? 1080
              : 1920 > i
              ? 1920
              : 3e3 > i
              ? 3e3
              : 4320 > i
              ? 4320
              : 1960 * nj(i / 1960)) - i),
          10 < i)
        ) {
          e.timeoutHandle = of(Uj.bind(null, e), i)
          break
        }
        Uj(e)
        break
      case 5:
        Uj(e)
        break
      default:
        throw Error(y(329))
    }
  }
  return Mj(e, O()), e.callbackNode === o ? Nj.bind(null, e) : null
}
function Ii(e, o) {
  for (
    o &= ~uj, o &= ~Hi, e.suspendedLanes |= o, e.pingedLanes &= ~o, e = e.expirationTimes;
    0 < o;

  ) {
    var i = 31 - Vc(o),
      s = 1 << i
    ;(e[i] = -1), (o &= ~s)
  }
}
function Lj(e) {
  if ((X & 48) != 0) throw Error(y(327))
  if ((Oj(), e === U && (e.expiredLanes & W) != 0)) {
    var o = W,
      i = Tj(e, o)
    ;(tj & Hi) != 0 && ((o = Uc(e, o)), (i = Tj(e, o)))
  } else (o = Uc(e, 0)), (i = Tj(e, o))
  if (
    (e.tag !== 0 &&
      i === 2 &&
      ((X |= 64),
      e.hydrate && ((e.hydrate = !1), qf(e.containerInfo)),
      (o = Wc(e)),
      o !== 0 && (i = Tj(e, o))),
    i === 1)
  )
    throw ((i = sj), Qj(e, 0), Ii(e, o), Mj(e, O()), i)
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = o), Uj(e), Mj(e, O()), null
}
function Vj() {
  if (Cj !== null) {
    var e = Cj
    ;(Cj = null),
      e.forEach(function (o) {
        ;(o.expiredLanes |= 24 & o.pendingLanes), Mj(o, O())
      })
  }
  ig()
}
function Wj(e, o) {
  var i = X
  X |= 1
  try {
    return e(o)
  } finally {
    ;(X = i), X === 0 && (wj(), ig())
  }
}
function Xj(e, o) {
  var i = X
  ;(X &= -2), (X |= 8)
  try {
    return e(o)
  } finally {
    ;(X = i), X === 0 && (wj(), ig())
  }
}
function ni(e, o) {
  I(rj, qj), (qj |= o), (tj |= o)
}
function Ki() {
  ;(qj = rj.current), H(rj)
}
function Qj(e, o) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var i = e.timeoutHandle
  if ((i !== -1 && ((e.timeoutHandle = -1), pf(i)), Y !== null))
    for (i = Y.return; i !== null; ) {
      var s = i
      switch (s.tag) {
        case 1:
          ;(s = s.type.childContextTypes), s != null && Gf()
          break
        case 3:
          fh(), H(N), H(M), uh()
          break
        case 5:
          hh(s)
          break
        case 4:
          fh()
          break
        case 13:
          H(P)
          break
        case 19:
          H(P)
          break
        case 10:
          rg(s)
          break
        case 23:
        case 24:
          Ki()
      }
      i = i.return
    }
  ;(U = e), (Y = Tg(e.current, null)), (W = qj = tj = o), (V = 0), (sj = null), (uj = Hi = Dg = 0)
}
function Sj(e, o) {
  do {
    var i = Y
    try {
      if ((qg(), (vh.current = Gh), yh)) {
        for (var s = R.memoizedState; s !== null; ) {
          var a = s.queue
          a !== null && (a.pending = null), (s = s.next)
        }
        yh = !1
      }
      if (
        ((xh = 0),
        (T = S = R = null),
        (zh = !1),
        (pj.current = null),
        i === null || i.return === null)
      ) {
        ;(V = 1), (sj = o), (Y = null)
        break
      }
      e: {
        var f = e,
          c = i.return,
          d = i,
          h = o
        if (
          ((o = W),
          (d.flags |= 2048),
          (d.firstEffect = d.lastEffect = null),
          h !== null && typeof h == 'object' && typeof h.then == 'function')
        ) {
          var j = h
          if ((d.mode & 2) == 0) {
            var nn = d.alternate
            nn
              ? ((d.updateQueue = nn.updateQueue),
                (d.memoizedState = nn.memoizedState),
                (d.lanes = nn.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null))
          }
          var fn = (P.current & 1) != 0,
            _e = c
          do {
            var rn
            if ((rn = _e.tag === 13)) {
              var un = _e.memoizedState
              if (un !== null) rn = un.dehydrated !== null
              else {
                var ln = _e.memoizedProps
                rn = ln.fallback === void 0 ? !1 : ln.unstable_avoidThisFallback !== !0 ? !0 : !fn
              }
            }
            if (rn) {
              var _ = _e.updateQueue
              if (_ === null) {
                var g = new Set()
                g.add(j), (_e.updateQueue = g)
              } else _.add(j)
              if ((_e.mode & 2) == 0) {
                if (((_e.flags |= 64), (d.flags |= 16384), (d.flags &= -2981), d.tag === 1))
                  if (d.alternate === null) d.tag = 17
                  else {
                    var k = zg(-1, 1)
                    ;(k.tag = 2), Ag(d, k)
                  }
                d.lanes |= 1
                break e
              }
              ;(h = void 0), (d = o)
              var $ = f.pingCache
              if (
                ($ === null
                  ? (($ = f.pingCache = new Oi()), (h = new Set()), $.set(j, h))
                  : ((h = $.get(j)), h === void 0 && ((h = new Set()), $.set(j, h))),
                !h.has(d))
              ) {
                h.add(d)
                var b = Yj.bind(null, f, j, d)
                j.then(b, b)
              }
              ;(_e.flags |= 4096), (_e.lanes = o)
              break e
            }
            _e = _e.return
          } while (_e !== null)
          h = Error(
            (Ra(d.type) || 'A React component') +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`,
          )
        }
        V !== 5 && (V = 2), (h = Mi(h, d)), (_e = c)
        do {
          switch (_e.tag) {
            case 3:
              ;(f = h), (_e.flags |= 4096), (o &= -o), (_e.lanes |= o)
              var an = Pi(_e, f, o)
              Bg(_e, an)
              break e
            case 1:
              f = h
              var en = _e.type,
                sn = _e.stateNode
              if (
                (_e.flags & 64) == 0 &&
                (typeof en.getDerivedStateFromError == 'function' ||
                  (sn !== null &&
                    typeof sn.componentDidCatch == 'function' &&
                    (Ti === null || !Ti.has(sn))))
              ) {
                ;(_e.flags |= 4096), (o &= -o), (_e.lanes |= o)
                var dn = Si(_e, f, o)
                Bg(_e, dn)
                break e
              }
          }
          _e = _e.return
        } while (_e !== null)
      }
      Zj(i)
    } catch (on) {
      ;(o = on), Y === i && i !== null && (Y = i = i.return)
      continue
    }
    break
  } while (1)
}
function Pj() {
  var e = oj.current
  return (oj.current = Gh), e === null ? Gh : e
}
function Tj(e, o) {
  var i = X
  X |= 16
  var s = Pj()
  ;(U === e && W === o) || Qj(e, o)
  do
    try {
      ak()
      break
    } catch (a) {
      Sj(e, a)
    }
  while (1)
  if ((qg(), (X = i), (oj.current = s), Y !== null)) throw Error(y(261))
  return (U = null), (W = 0), V
}
function ak() {
  for (; Y !== null; ) bk(Y)
}
function Rj() {
  for (; Y !== null && !Qf(); ) bk(Y)
}
function bk(e) {
  var o = ck(e.alternate, e, qj)
  ;(e.memoizedProps = e.pendingProps), o === null ? Zj(e) : (Y = o), (pj.current = null)
}
function Zj(e) {
  var o = e
  do {
    var i = o.alternate
    if (((e = o.return), (o.flags & 2048) == 0)) {
      if (((i = Gi(i, o, qj)), i !== null)) {
        Y = i
        return
      }
      if (
        ((i = o),
        (i.tag !== 24 && i.tag !== 23) ||
          i.memoizedState === null ||
          (qj & 1073741824) != 0 ||
          (i.mode & 4) == 0)
      ) {
        for (var s = 0, a = i.child; a !== null; ) (s |= a.lanes | a.childLanes), (a = a.sibling)
        i.childLanes = s
      }
      e !== null &&
        (e.flags & 2048) == 0 &&
        (e.firstEffect === null && (e.firstEffect = o.firstEffect),
        o.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = o.firstEffect),
          (e.lastEffect = o.lastEffect)),
        1 < o.flags &&
          (e.lastEffect !== null ? (e.lastEffect.nextEffect = o) : (e.firstEffect = o),
          (e.lastEffect = o)))
    } else {
      if (((i = Li(o)), i !== null)) {
        ;(i.flags &= 2047), (Y = i)
        return
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048))
    }
    if (((o = o.sibling), o !== null)) {
      Y = o
      return
    }
    Y = o = e
  } while (o !== null)
  V === 0 && (V = 5)
}
function Uj(e) {
  var o = eg()
  return gg(99, dk.bind(null, e, o)), null
}
function dk(e, o) {
  do Oj()
  while (yj !== null)
  if ((X & 48) != 0) throw Error(y(327))
  var i = e.finishedWork
  if (i === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current)) throw Error(y(177))
  e.callbackNode = null
  var s = i.lanes | i.childLanes,
    a = s,
    f = e.pendingLanes & ~a
  ;(e.pendingLanes = a),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= a),
    (e.mutableReadLanes &= a),
    (e.entangledLanes &= a),
    (a = e.entanglements)
  for (var c = e.eventTimes, d = e.expirationTimes; 0 < f; ) {
    var h = 31 - Vc(f),
      j = 1 << h
    ;(a[h] = 0), (c[h] = -1), (d[h] = -1), (f &= ~j)
  }
  if (
    (Cj !== null && (s & 24) == 0 && Cj.has(e) && Cj.delete(e),
    e === U && ((Y = U = null), (W = 0)),
    1 < i.flags
      ? i.lastEffect !== null
        ? ((i.lastEffect.nextEffect = i), (s = i.firstEffect))
        : (s = i)
      : (s = i.firstEffect),
    s !== null)
  ) {
    if (((a = X), (X |= 32), (pj.current = null), (kf = fd), (c = Ne()), Oe(c))) {
      if ('selectionStart' in c) d = { start: c.selectionStart, end: c.selectionEnd }
      else
        e: if (
          ((d = ((d = c.ownerDocument) && d.defaultView) || window),
          (j = d.getSelection && d.getSelection()) && j.rangeCount !== 0)
        ) {
          ;(d = j.anchorNode), (f = j.anchorOffset), (h = j.focusNode), (j = j.focusOffset)
          try {
            d.nodeType, h.nodeType
          } catch (on) {
            d = null
            break e
          }
          var nn = 0,
            fn = -1,
            _e = -1,
            rn = 0,
            un = 0,
            ln = c,
            _ = null
          n: for (;;) {
            for (
              var g;
              ln !== d || (f !== 0 && ln.nodeType !== 3) || (fn = nn + f),
                ln !== h || (j !== 0 && ln.nodeType !== 3) || (_e = nn + j),
                ln.nodeType === 3 && (nn += ln.nodeValue.length),
                (g = ln.firstChild) !== null;

            )
              (_ = ln), (ln = g)
            for (;;) {
              if (ln === c) break n
              if (
                (_ === d && ++rn === f && (fn = nn),
                _ === h && ++un === j && (_e = nn),
                (g = ln.nextSibling) !== null)
              )
                break
              ;(ln = _), (_ = ln.parentNode)
            }
            ln = g
          }
          d = fn === -1 || _e === -1 ? null : { start: fn, end: _e }
        } else d = null
      d = d || { start: 0, end: 0 }
    } else d = null
    ;(lf = { focusedElem: c, selectionRange: d }), (fd = !1), (Ij = null), (Jj = !1), (Z = s)
    do
      try {
        ek()
      } catch (on) {
        if (Z === null) throw Error(y(330))
        Wi(Z, on), (Z = Z.nextEffect)
      }
    while (Z !== null)
    ;(Ij = null), (Z = s)
    do
      try {
        for (c = e; Z !== null; ) {
          var k = Z.flags
          if ((k & 16 && pb(Z.stateNode, ''), k & 128)) {
            var $ = Z.alternate
            if ($ !== null) {
              var b = $.ref
              b !== null && (typeof b == 'function' ? b(null) : (b.current = null))
            }
          }
          switch (k & 1038) {
            case 2:
              fj(Z), (Z.flags &= -3)
              break
            case 6:
              fj(Z), (Z.flags &= -3), ij(Z.alternate, Z)
              break
            case 1024:
              Z.flags &= -1025
              break
            case 1028:
              ;(Z.flags &= -1025), ij(Z.alternate, Z)
              break
            case 4:
              ij(Z.alternate, Z)
              break
            case 8:
              ;(d = Z), cj(c, d)
              var an = d.alternate
              dj(d), an !== null && dj(an)
          }
          Z = Z.nextEffect
        }
      } catch (on) {
        if (Z === null) throw Error(y(330))
        Wi(Z, on), (Z = Z.nextEffect)
      }
    while (Z !== null)
    if (
      ((b = lf),
      ($ = Ne()),
      (k = b.focusedElem),
      (c = b.selectionRange),
      $ !== k && k && k.ownerDocument && Me(k.ownerDocument.documentElement, k))
    ) {
      for (
        c !== null &&
          Oe(k) &&
          (($ = c.start),
          (b = c.end),
          b === void 0 && (b = $),
          ('selectionStart' in k)
            ? ((k.selectionStart = $), (k.selectionEnd = Math.min(b, k.value.length)))
            : ((b = (($ = k.ownerDocument || document) && $.defaultView) || window),
              b.getSelection &&
                ((b = b.getSelection()),
                (d = k.textContent.length),
                (an = Math.min(c.start, d)),
                (c = c.end === void 0 ? an : Math.min(c.end, d)),
                !b.extend && an > c && ((d = c), (c = an), (an = d)),
                (d = Le(k, an)),
                (f = Le(k, c)),
                d &&
                  f &&
                  (b.rangeCount !== 1 ||
                    b.anchorNode !== d.node ||
                    b.anchorOffset !== d.offset ||
                    b.focusNode !== f.node ||
                    b.focusOffset !== f.offset) &&
                  (($ = $.createRange()),
                  $.setStart(d.node, d.offset),
                  b.removeAllRanges(),
                  an > c
                    ? (b.addRange($), b.extend(f.node, f.offset))
                    : ($.setEnd(f.node, f.offset), b.addRange($)))))),
          $ = [],
          b = k;
        (b = b.parentNode);

      )
        b.nodeType === 1 && $.push({ element: b, left: b.scrollLeft, top: b.scrollTop })
      for (typeof k.focus == 'function' && k.focus(), k = 0; k < $.length; k++)
        (b = $[k]), (b.element.scrollLeft = b.left), (b.element.scrollTop = b.top)
    }
    ;(fd = !!kf), (lf = kf = null), (e.current = i), (Z = s)
    do
      try {
        for (k = e; Z !== null; ) {
          var en = Z.flags
          if ((en & 36 && Yi(k, Z.alternate, Z), en & 128)) {
            $ = void 0
            var sn = Z.ref
            if (sn !== null) {
              var dn = Z.stateNode
              switch (Z.tag) {
                case 5:
                  $ = dn
                  break
                default:
                  $ = dn
              }
              typeof sn == 'function' ? sn($) : (sn.current = $)
            }
          }
          Z = Z.nextEffect
        }
      } catch (on) {
        if (Z === null) throw Error(y(330))
        Wi(Z, on), (Z = Z.nextEffect)
      }
    while (Z !== null)
    ;(Z = null), $f(), (X = a)
  } else e.current = i
  if (xj) (xj = !1), (yj = e), (zj = o)
  else
    for (Z = s; Z !== null; )
      (o = Z.nextEffect),
        (Z.nextEffect = null),
        Z.flags & 8 && ((en = Z), (en.sibling = null), (en.stateNode = null)),
        (Z = o)
  if (
    ((s = e.pendingLanes),
    s === 0 && (Ti = null),
    s === 1 ? (e === Ej ? Dj++ : ((Dj = 0), (Ej = e))) : (Dj = 0),
    (i = i.stateNode),
    Mf && typeof Mf.onCommitFiberRoot == 'function')
  )
    try {
      Mf.onCommitFiberRoot(Lf, i, void 0, (i.current.flags & 64) == 64)
    } catch (on) {}
  if ((Mj(e, O()), Qi)) throw ((Qi = !1), (e = Ri), (Ri = null), e)
  return (X & 8) != 0 || ig(), null
}
function ek() {
  for (; Z !== null; ) {
    var e = Z.alternate
    Jj ||
      Ij === null ||
      ((Z.flags & 8) != 0
        ? dc(Z, Ij) && (Jj = !0)
        : Z.tag === 13 && mj(e, Z) && dc(Z, Ij) && (Jj = !0))
    var o = Z.flags
    ;(o & 256) != 0 && Xi(e, Z),
      (o & 512) == 0 ||
        xj ||
        ((xj = !0),
        hg(97, function () {
          return Oj(), null
        })),
      (Z = Z.nextEffect)
  }
}
function Oj() {
  if (zj !== 90) {
    var e = 97 < zj ? 97 : zj
    return (zj = 90), gg(e, fk)
  }
  return !1
}
function $i(e, o) {
  Aj.push(o, e),
    xj ||
      ((xj = !0),
      hg(97, function () {
        return Oj(), null
      }))
}
function Zi(e, o) {
  Bj.push(o, e),
    xj ||
      ((xj = !0),
      hg(97, function () {
        return Oj(), null
      }))
}
function fk() {
  if (yj === null) return !1
  var e = yj
  if (((yj = null), (X & 48) != 0)) throw Error(y(331))
  var o = X
  X |= 32
  var i = Bj
  Bj = []
  for (var s = 0; s < i.length; s += 2) {
    var a = i[s],
      f = i[s + 1],
      c = a.destroy
    if (((a.destroy = void 0), typeof c == 'function'))
      try {
        c()
      } catch (h) {
        if (f === null) throw Error(y(330))
        Wi(f, h)
      }
  }
  for (i = Aj, Aj = [], s = 0; s < i.length; s += 2) {
    ;(a = i[s]), (f = i[s + 1])
    try {
      var d = a.create
      a.destroy = d()
    } catch (h) {
      if (f === null) throw Error(y(330))
      Wi(f, h)
    }
  }
  for (d = e.current.firstEffect; d !== null; )
    (e = d.nextEffect),
      (d.nextEffect = null),
      d.flags & 8 && ((d.sibling = null), (d.stateNode = null)),
      (d = e)
  return (X = o), ig(), !0
}
function gk(e, o, i) {
  ;(o = Mi(i, o)),
    (o = Pi(e, o, 1)),
    Ag(e, o),
    (o = Hg()),
    (e = Kj(e, 1)),
    e !== null && ($c(e, 1, o), Mj(e, o))
}
function Wi(e, o) {
  if (e.tag === 3) gk(e, e, o)
  else
    for (var i = e.return; i !== null; ) {
      if (i.tag === 3) {
        gk(i, e, o)
        break
      } else if (i.tag === 1) {
        var s = i.stateNode
        if (
          typeof i.type.getDerivedStateFromError == 'function' ||
          (typeof s.componentDidCatch == 'function' && (Ti === null || !Ti.has(s)))
        ) {
          e = Mi(o, e)
          var a = Si(i, e, 1)
          if ((Ag(i, a), (a = Hg()), (i = Kj(i, 1)), i !== null)) $c(i, 1, a), Mj(i, a)
          else if (typeof s.componentDidCatch == 'function' && (Ti === null || !Ti.has(s)))
            try {
              s.componentDidCatch(o, e)
            } catch (f) {}
          break
        }
      }
      i = i.return
    }
}
function Yj(e, o, i) {
  var s = e.pingCache
  s !== null && s.delete(o),
    (o = Hg()),
    (e.pingedLanes |= e.suspendedLanes & i),
    U === e &&
      (W & i) === i &&
      (V === 4 || (V === 3 && (W & 62914560) === W && 500 > O() - jj) ? Qj(e, 0) : (uj |= i)),
    Mj(e, o)
}
function lj(e, o) {
  var i = e.stateNode
  i !== null && i.delete(o),
    (o = 0),
    o === 0 &&
      ((o = e.mode),
      (o & 2) == 0
        ? (o = 1)
        : (o & 4) == 0
        ? (o = eg() === 99 ? 1 : 2)
        : (Gj === 0 && (Gj = tj), (o = Yc(62914560 & ~Gj)), o === 0 && (o = 4194304))),
    (i = Hg()),
    (e = Kj(e, o)),
    e !== null && ($c(e, o, i), Mj(e, i))
}
var ck
ck = function (e, o, i) {
  var s = o.lanes
  if (e !== null)
    if (e.memoizedProps !== o.pendingProps || N.current) ug = !0
    else if ((i & s) != 0) ug = (e.flags & 16384) != 0
    else {
      switch (((ug = !1), o.tag)) {
        case 3:
          ri(o), sh()
          break
        case 5:
          gh(o)
          break
        case 1:
          Ff(o.type) && Jf(o)
          break
        case 4:
          eh(o, o.stateNode.containerInfo)
          break
        case 10:
          s = o.memoizedProps.value
          var a = o.type._context
          I(mg, a._currentValue), (a._currentValue = s)
          break
        case 13:
          if (o.memoizedState !== null)
            return (i & o.child.childLanes) != 0
              ? ti(e, o, i)
              : (I(P, P.current & 1), (o = hi(e, o, i)), o !== null ? o.sibling : null)
          I(P, P.current & 1)
          break
        case 19:
          if (((s = (i & o.childLanes) != 0), (e.flags & 64) != 0)) {
            if (s) return Ai(e, o, i)
            o.flags |= 64
          }
          if (
            ((a = o.memoizedState),
            a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
            I(P, P.current),
            s)
          )
            break
          return null
        case 23:
        case 24:
          return (o.lanes = 0), mi(e, o, i)
      }
      return hi(e, o, i)
    }
  else ug = !1
  switch (((o.lanes = 0), o.tag)) {
    case 2:
      if (
        ((s = o.type),
        e !== null && ((e.alternate = null), (o.alternate = null), (o.flags |= 2)),
        (e = o.pendingProps),
        (a = Ef(o, M.current)),
        tg(o, i),
        (a = Ch(null, o, s, e, a, i)),
        (o.flags |= 1),
        typeof a == 'object' &&
          a !== null &&
          typeof a.render == 'function' &&
          a.$$typeof === void 0)
      ) {
        if (((o.tag = 1), (o.memoizedState = null), (o.updateQueue = null), Ff(s))) {
          var f = !0
          Jf(o)
        } else f = !1
        ;(o.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null), xg(o)
        var c = s.getDerivedStateFromProps
        typeof c == 'function' && Gg(o, s, c, e),
          (a.updater = Kg),
          (o.stateNode = a),
          (a._reactInternals = o),
          Og(o, s, e, i),
          (o = qi(null, o, s, !0, f, i))
      } else (o.tag = 0), fi(null, o, a, i), (o = o.child)
      return o
    case 16:
      a = o.elementType
      e: {
        switch (
          (e !== null && ((e.alternate = null), (o.alternate = null), (o.flags |= 2)),
          (e = o.pendingProps),
          (f = a._init),
          (a = f(a._payload)),
          (o.type = a),
          (f = o.tag = hk(a)),
          (e = lg(a, e)),
          f)
        ) {
          case 0:
            o = li(null, o, a, e, i)
            break e
          case 1:
            o = pi(null, o, a, e, i)
            break e
          case 11:
            o = gi(null, o, a, e, i)
            break e
          case 14:
            o = ii(null, o, a, lg(a.type, e), s, i)
            break e
        }
        throw Error(y(306, a, ''))
      }
      return o
    case 0:
      return (
        (s = o.type),
        (a = o.pendingProps),
        (a = o.elementType === s ? a : lg(s, a)),
        li(e, o, s, a, i)
      )
    case 1:
      return (
        (s = o.type),
        (a = o.pendingProps),
        (a = o.elementType === s ? a : lg(s, a)),
        pi(e, o, s, a, i)
      )
    case 3:
      if ((ri(o), (s = o.updateQueue), e === null || s === null)) throw Error(y(282))
      if (
        ((s = o.pendingProps),
        (a = o.memoizedState),
        (a = a !== null ? a.element : null),
        yg(e, o),
        Cg(o, s, null, i),
        (s = o.memoizedState.element),
        s === a)
      )
        sh(), (o = hi(e, o, i))
      else {
        if (
          ((a = o.stateNode),
          (f = a.hydrate) &&
            ((kh = rf(o.stateNode.containerInfo.firstChild)), (jh = o), (f = lh = !0)),
          f)
        ) {
          if (((e = a.mutableSourceEagerHydrationData), e != null))
            for (a = 0; a < e.length; a += 2)
              (f = e[a]), (f._workInProgressVersionPrimary = e[a + 1]), th.push(f)
          for (i = Zg(o, null, s, i), o.child = i; i; )
            (i.flags = (i.flags & -3) | 1024), (i = i.sibling)
        } else fi(e, o, s, i), sh()
        o = o.child
      }
      return o
    case 5:
      return (
        gh(o),
        e === null && ph(o),
        (s = o.type),
        (a = o.pendingProps),
        (f = e !== null ? e.memoizedProps : null),
        (c = a.children),
        nf(s, a) ? (c = null) : f !== null && nf(s, f) && (o.flags |= 16),
        oi(e, o),
        fi(e, o, c, i),
        o.child
      )
    case 6:
      return e === null && ph(o), null
    case 13:
      return ti(e, o, i)
    case 4:
      return (
        eh(o, o.stateNode.containerInfo),
        (s = o.pendingProps),
        e === null ? (o.child = Yg(o, null, s, i)) : fi(e, o, s, i),
        o.child
      )
    case 11:
      return (
        (s = o.type),
        (a = o.pendingProps),
        (a = o.elementType === s ? a : lg(s, a)),
        gi(e, o, s, a, i)
      )
    case 7:
      return fi(e, o, o.pendingProps, i), o.child
    case 8:
      return fi(e, o, o.pendingProps.children, i), o.child
    case 12:
      return fi(e, o, o.pendingProps.children, i), o.child
    case 10:
      e: {
        ;(s = o.type._context), (a = o.pendingProps), (c = o.memoizedProps), (f = a.value)
        var d = o.type._context
        if ((I(mg, d._currentValue), (d._currentValue = f), c !== null))
          if (
            ((d = c.value),
            (f = He(d, f)
              ? 0
              : (typeof s._calculateChangedBits == 'function'
                  ? s._calculateChangedBits(d, f)
                  : 1073741823) | 0),
            f === 0)
          ) {
            if (c.children === a.children && !N.current) {
              o = hi(e, o, i)
              break e
            }
          } else
            for (d = o.child, d !== null && (d.return = o); d !== null; ) {
              var h = d.dependencies
              if (h !== null) {
                c = d.child
                for (var j = h.firstContext; j !== null; ) {
                  if (j.context === s && (j.observedBits & f) != 0) {
                    d.tag === 1 && ((j = zg(-1, i & -i)), (j.tag = 2), Ag(d, j)),
                      (d.lanes |= i),
                      (j = d.alternate),
                      j !== null && (j.lanes |= i),
                      sg(d.return, i),
                      (h.lanes |= i)
                    break
                  }
                  j = j.next
                }
              } else c = d.tag === 10 && d.type === o.type ? null : d.child
              if (c !== null) c.return = d
              else
                for (c = d; c !== null; ) {
                  if (c === o) {
                    c = null
                    break
                  }
                  if (((d = c.sibling), d !== null)) {
                    ;(d.return = c.return), (c = d)
                    break
                  }
                  c = c.return
                }
              d = c
            }
        fi(e, o, a.children, i), (o = o.child)
      }
      return o
    case 9:
      return (
        (a = o.type),
        (f = o.pendingProps),
        (s = f.children),
        tg(o, i),
        (a = vg(a, f.unstable_observedBits)),
        (s = s(a)),
        (o.flags |= 1),
        fi(e, o, s, i),
        o.child
      )
    case 14:
      return (a = o.type), (f = lg(a, o.pendingProps)), (f = lg(a.type, f)), ii(e, o, a, f, s, i)
    case 15:
      return ki(e, o, o.type, o.pendingProps, s, i)
    case 17:
      return (
        (s = o.type),
        (a = o.pendingProps),
        (a = o.elementType === s ? a : lg(s, a)),
        e !== null && ((e.alternate = null), (o.alternate = null), (o.flags |= 2)),
        (o.tag = 1),
        Ff(s) ? ((e = !0), Jf(o)) : (e = !1),
        tg(o, i),
        Mg(o, s, a),
        Og(o, s, a, i),
        qi(null, o, s, !0, e, i)
      )
    case 19:
      return Ai(e, o, i)
    case 23:
      return mi(e, o, i)
    case 24:
      return mi(e, o, i)
  }
  throw Error(y(156, o.tag))
}
function ik(e, o, i, s) {
  ;(this.tag = e),
    (this.key = i),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = o),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = s),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function nh(e, o, i, s) {
  return new ik(e, o, i, s)
}
function ji(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function hk(e) {
  if (typeof e == 'function') return ji(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Aa)) return 11
    if (e === Da) return 14
  }
  return 2
}
function Tg(e, o) {
  var i = e.alternate
  return (
    i === null
      ? ((i = nh(e.tag, o, e.key, e.mode)),
        (i.elementType = e.elementType),
        (i.type = e.type),
        (i.stateNode = e.stateNode),
        (i.alternate = e),
        (e.alternate = i))
      : ((i.pendingProps = o),
        (i.type = e.type),
        (i.flags = 0),
        (i.nextEffect = null),
        (i.firstEffect = null),
        (i.lastEffect = null)),
    (i.childLanes = e.childLanes),
    (i.lanes = e.lanes),
    (i.child = e.child),
    (i.memoizedProps = e.memoizedProps),
    (i.memoizedState = e.memoizedState),
    (i.updateQueue = e.updateQueue),
    (o = e.dependencies),
    (i.dependencies = o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
    (i.sibling = e.sibling),
    (i.index = e.index),
    (i.ref = e.ref),
    i
  )
}
function Vg(e, o, i, s, a, f) {
  var c = 2
  if (((s = e), typeof e == 'function')) ji(e) && (c = 1)
  else if (typeof e == 'string') c = 5
  else
    e: switch (e) {
      case ua:
        return Xg(i.children, a, f, o)
      case Ha:
        ;(c = 8), (a |= 16)
        break
      case wa:
        ;(c = 8), (a |= 1)
        break
      case xa:
        return (e = nh(12, i, o, a | 8)), (e.elementType = xa), (e.type = xa), (e.lanes = f), e
      case Ba:
        return (e = nh(13, i, o, a)), (e.type = Ba), (e.elementType = Ba), (e.lanes = f), e
      case Ca:
        return (e = nh(19, i, o, a)), (e.elementType = Ca), (e.lanes = f), e
      case Ia:
        return vi(i, a, f, o)
      case Ja:
        return (e = nh(24, i, o, a)), (e.elementType = Ja), (e.lanes = f), e
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case ya:
              c = 10
              break e
            case za:
              c = 9
              break e
            case Aa:
              c = 11
              break e
            case Da:
              c = 14
              break e
            case Ea:
              ;(c = 16), (s = null)
              break e
            case Fa:
              c = 22
              break e
          }
        throw Error(y(130, e == null ? e : typeof e, ''))
    }
  return (o = nh(c, i, o, a)), (o.elementType = e), (o.type = s), (o.lanes = f), o
}
function Xg(e, o, i, s) {
  return (e = nh(7, e, s, o)), (e.lanes = i), e
}
function vi(e, o, i, s) {
  return (e = nh(23, e, s, o)), (e.elementType = Ia), (e.lanes = i), e
}
function Ug(e, o, i) {
  return (e = nh(6, e, null, o)), (e.lanes = i), e
}
function Wg(e, o, i) {
  return (
    (o = nh(4, e.children !== null ? e.children : [], e.key, o)),
    (o.lanes = i),
    (o.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    o
  )
}
function jk(e, o, i) {
  ;(this.tag = o),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = i),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zc(0)),
    (this.expirationTimes = Zc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zc(0)),
    (this.mutableSourceEagerHydrationData = null)
}
function kk(e, o, i) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: ta,
    key: s == null ? null : '' + s,
    children: e,
    containerInfo: o,
    implementation: i,
  }
}
function lk(e, o, i, s) {
  var a = o.current,
    f = Hg(),
    c = Ig(a)
  e: if (i) {
    i = i._reactInternals
    n: {
      if (Zb(i) !== i || i.tag !== 1) throw Error(y(170))
      var d = i
      do {
        switch (d.tag) {
          case 3:
            d = d.stateNode.context
            break n
          case 1:
            if (Ff(d.type)) {
              d = d.stateNode.__reactInternalMemoizedMergedChildContext
              break n
            }
        }
        d = d.return
      } while (d !== null)
      throw Error(y(171))
    }
    if (i.tag === 1) {
      var h = i.type
      if (Ff(h)) {
        i = If(i, h, d)
        break e
      }
    }
    i = d
  } else i = Cf
  return (
    o.context === null ? (o.context = i) : (o.pendingContext = i),
    (o = zg(f, c)),
    (o.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (o.callback = s),
    Ag(a, o),
    Jg(a, c, f),
    c
  )
}
function mk(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function nk(e, o) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var i = e.retryLane
    e.retryLane = i !== 0 && i < o ? i : o
  }
}
function ok(e, o) {
  nk(e, o), (e = e.alternate) && nk(e, o)
}
function pk() {
  return null
}
function qk(e, o, i) {
  var s = (i != null && i.hydrationOptions != null && i.hydrationOptions.mutableSources) || null
  if (
    ((i = new jk(e, o, i != null && i.hydrate === !0)),
    (o = nh(3, null, null, o === 2 ? 7 : o === 1 ? 3 : 0)),
    (i.current = o),
    (o.stateNode = i),
    xg(o),
    (e[ff] = i.current),
    cf(e.nodeType === 8 ? e.parentNode : e),
    s)
  )
    for (e = 0; e < s.length; e++) {
      o = s[e]
      var a = o._getVersion
      ;(a = a(o._source)),
        i.mutableSourceEagerHydrationData == null
          ? (i.mutableSourceEagerHydrationData = [o, a])
          : i.mutableSourceEagerHydrationData.push(o, a)
    }
  this._internalRoot = i
}
;(qk.prototype.render = function (e) {
  lk(e, this._internalRoot, null, null)
}),
  (qk.prototype.unmount = function () {
    var e = this._internalRoot,
      o = e.containerInfo
    lk(null, e, null, function () {
      o[ff] = null
    })
  })
function rk(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function sk(e, o) {
  if (
    (o ||
      ((o = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (o = !(!o || o.nodeType !== 1 || !o.hasAttribute('data-reactroot')))),
    !o)
  )
    for (var i; (i = e.lastChild); ) e.removeChild(i)
  return new qk(e, 0, o ? { hydrate: !0 } : void 0)
}
function tk(e, o, i, s, a) {
  var f = i._reactRootContainer
  if (f) {
    var c = f._internalRoot
    if (typeof a == 'function') {
      var d = a
      a = function () {
        var j = mk(c)
        d.call(j)
      }
    }
    lk(o, c, e, a)
  } else {
    if (((f = i._reactRootContainer = sk(i, s)), (c = f._internalRoot), typeof a == 'function')) {
      var h = a
      a = function () {
        var j = mk(c)
        h.call(j)
      }
    }
    Xj(function () {
      lk(o, c, e, a)
    })
  }
  return mk(c)
}
;(ec = function (e) {
  if (e.tag === 13) {
    var o = Hg()
    Jg(e, 4, o), ok(e, 4)
  }
}),
  (fc = function (e) {
    if (e.tag === 13) {
      var o = Hg()
      Jg(e, 67108864, o), ok(e, 67108864)
    }
  }),
  (gc = function (e) {
    if (e.tag === 13) {
      var o = Hg(),
        i = Ig(e)
      Jg(e, i, o), ok(e, i)
    }
  }),
  (hc = function (e, o) {
    return o()
  }),
  (yb = function (e, o, i) {
    switch (o) {
      case 'input':
        if ((ab(e, i), (o = i.name), i.type === 'radio' && o != null)) {
          for (i = e; i.parentNode; ) i = i.parentNode
          for (
            i = i.querySelectorAll('input[name=' + JSON.stringify('' + o) + '][type="radio"]'),
              o = 0;
            o < i.length;
            o++
          ) {
            var s = i[o]
            if (s !== e && s.form === e.form) {
              var a = Db(s)
              if (!a) throw Error(y(90))
              Wa(s), ab(s, a)
            }
          }
        }
        break
      case 'textarea':
        ib(e, i)
        break
      case 'select':
        ;(o = i.value), o != null && fb(e, !!i.multiple, o, !1)
    }
  }),
  (Gb = Wj),
  (Hb = function (e, o, i, s, a) {
    var f = X
    X |= 4
    try {
      return gg(98, e.bind(null, o, i, s, a))
    } finally {
      ;(X = f), X === 0 && (wj(), ig())
    }
  }),
  (Ib = function () {
    ;(X & 49) == 0 && (Vj(), Oj())
  }),
  (Jb = function (e, o) {
    var i = X
    X |= 2
    try {
      return e(o)
    } finally {
      ;(X = i), X === 0 && (wj(), ig())
    }
  })
function uk(e, o) {
  var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!rk(o)) throw Error(y(200))
  return kk(e, o, null, i)
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: !1 }] },
  wk = {
    findFiberByHostInstance: wc,
    bundleType: 0,
    version: '17.0.2',
    rendererPackageName: 'react-dom',
  },
  xk = {
    bundleType: wk.bundleType,
    version: wk.version,
    rendererPackageName: wk.rendererPackageName,
    rendererConfig: wk.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ra.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = cc(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: wk.findFiberByHostInstance || pk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != 'undefined') {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      ;(Lf = yk.inject(xk)), (Mf = yk)
    } catch (e) {}
}
;(reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk),
  (reactDom_production_min.createPortal = uk),
  (reactDom_production_min.findDOMNode = function (e) {
    if (e == null) return null
    if (e.nodeType === 1) return e
    var o = e._reactInternals
    if (o === void 0)
      throw typeof e.render == 'function' ? Error(y(188)) : Error(y(268, Object.keys(e)))
    return (e = cc(o)), (e = e === null ? null : e.stateNode), e
  }),
  (reactDom_production_min.flushSync = function (e, o) {
    var i = X
    if ((i & 48) != 0) return e(o)
    X |= 1
    try {
      if (e) return gg(99, e.bind(null, o))
    } finally {
      ;(X = i), ig()
    }
  }),
  (reactDom_production_min.hydrate = function (e, o, i) {
    if (!rk(o)) throw Error(y(200))
    return tk(null, e, o, !0, i)
  }),
  (reactDom_production_min.render = function (e, o, i) {
    if (!rk(o)) throw Error(y(200))
    return tk(null, e, o, !1, i)
  }),
  (reactDom_production_min.unmountComponentAtNode = function (e) {
    if (!rk(e)) throw Error(y(40))
    return e._reactRootContainer
      ? (Xj(function () {
          tk(null, null, e, !1, function () {
            ;(e._reactRootContainer = null), (e[ff] = null)
          })
        }),
        !0)
      : !1
  }),
  (reactDom_production_min.unstable_batchedUpdates = Wj),
  (reactDom_production_min.unstable_createPortal = function (e, o) {
    return uk(e, o, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null)
  }),
  (reactDom_production_min.unstable_renderSubtreeIntoContainer = function (e, o, i, s) {
    if (!rk(i)) throw Error(y(200))
    if (e == null || e._reactInternals === void 0) throw Error(y(38))
    return tk(e, o, i, !1, s)
  }),
  (reactDom_production_min.version = '17.0.2')
function checkDCE() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)
    } catch (e) {
      console.error(e)
    }
}
checkDCE(), (reactDom.exports = reactDom_production_min)
var ReactDOM = reactDom.exports,
  index = `body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`,
  App$1 = `.App {
  padding: 20px;
}
`
function App() {
  return (
    react.exports.useEffect(() => {
      typeof parent !== void 0 && parent?.postMessage?.({ pluginMessage: 'hello' }, '*')
    }, []),
    React.createElement(
      'div',
      { className: 'App' },
      React.createElement('h1', null, 'Hello'),
      React.createElement(
        'button',
        {
          onClick: () => {
            parent?.postMessage?.({ pluginMessage: 'close' }, '*')
          },
        },
        'Close',
      ),
    )
  )
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'))
