import * as React from 'react';
import React__default, { useCallback, useRef, useState, useContext, useMemo, useEffect, useReducer, useLayoutEffect, createContext, forwardRef, useImperativeHandle } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import ReactDOM from 'react-dom';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$1H =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$1i = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$1h = fails$1i;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$1h(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$1g = fails$1i;

var functionBindNative = !fails$1g(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$4 = functionBindNative;

var call$C = Function.prototype.call;

var functionCall = NATIVE_BIND$4 ? call$C.bind(call$C) : function () {
  return call$C.apply(call$C, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable$2 = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$9 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$9 && !$propertyIsEnumerable$2.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$9(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$2;

var createPropertyDescriptor$c = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$4 = Function.prototype;
var bind$e = FunctionPrototype$4.bind;
var call$B = FunctionPrototype$4.call;
var uncurryThis$1d = NATIVE_BIND$3 && bind$e.bind(call$B, call$B);

var functionUncurryThis = NATIVE_BIND$3 ? function (fn) {
  return fn && uncurryThis$1d(fn);
} : function (fn) {
  return fn && function () {
    return call$B.apply(fn, arguments);
  };
};

var uncurryThis$1c = functionUncurryThis;

var toString$x = uncurryThis$1c({}.toString);
var stringSlice$g = uncurryThis$1c(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$g(toString$x(it), 8, -1);
};

var global$1G = global$1H;
var uncurryThis$1b = functionUncurryThis;
var fails$1f = fails$1i;
var classof$k = classofRaw$1;

var Object$6 = global$1G.Object;
var split$3 = uncurryThis$1b(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$1f(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$6('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$k(it) == 'String' ? split$3(it, '') : Object$6(it);
} : Object$6;

var global$1F = global$1H;

var TypeError$v = global$1F.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$i = function (it) {
  if (it == undefined) throw TypeError$v("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$4 = indexedObject;
var requireObjectCoercible$h = requireObjectCoercible$i;

var toIndexedObject$f = function (it) {
  return IndexedObject$4(requireObjectCoercible$h(it));
};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$y = function (argument) {
  return typeof argument == 'function';
};

var isCallable$x = isCallable$y;

var isObject$z = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$x(it);
};

var global$1E = global$1H;
var isCallable$w = isCallable$y;

var aFunction = function (argument) {
  return isCallable$w(argument) ? argument : undefined;
};

var getBuiltIn$n = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$1E[namespace]) : global$1E[namespace] && global$1E[namespace][method];
};

var uncurryThis$1a = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$1a({}.isPrototypeOf);

var getBuiltIn$m = getBuiltIn$n;

var engineUserAgent = getBuiltIn$m('navigator', 'userAgent') || '';

var global$1D = global$1H;
var userAgent$7 = engineUserAgent;

var process$5 = global$1D.process;
var Deno$1 = global$1D.Deno;
var versions$1 = process$5 && process$5.versions || Deno$1 && Deno$1.version;
var v8 = versions$1 && versions$1.v8;
var match, version$2;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version$2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version$2 && userAgent$7) {
  match = userAgent$7.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$7.match(/Chrome\/(\d+)/);
    if (match) version$2 = +match[1];
  }
}

var engineV8Version = version$2;

/* eslint-disable es-x/no-symbol -- required for testing */

var V8_VERSION$3 = engineV8Version;
var fails$1e = fails$1i;

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$1e(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
});

/* eslint-disable es-x/no-symbol -- required for testing */

var NATIVE_SYMBOL$6 = nativeSymbol;

var useSymbolAsUid = NATIVE_SYMBOL$6
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$1C = global$1H;
var getBuiltIn$l = getBuiltIn$n;
var isCallable$v = isCallable$y;
var isPrototypeOf$b = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Object$5 = global$1C.Object;

var isSymbol$7 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$l('Symbol');
  return isCallable$v($Symbol) && isPrototypeOf$b($Symbol.prototype, Object$5(it));
};

var global$1B = global$1H;

var String$7 = global$1B.String;

var tryToString$6 = function (argument) {
  try {
    return String$7(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$1A = global$1H;
var isCallable$u = isCallable$y;
var tryToString$5 = tryToString$6;

var TypeError$u = global$1A.TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$i = function (argument) {
  if (isCallable$u(argument)) return argument;
  throw TypeError$u(tryToString$5(argument) + ' is not a function');
};

var aCallable$h = aCallable$i;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$9 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$h(func);
};

var global$1z = global$1H;
var call$A = functionCall;
var isCallable$t = isCallable$y;
var isObject$y = isObject$z;

var TypeError$t = global$1z.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$2 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$t(fn = input.toString) && !isObject$y(val = call$A(fn, input))) return val;
  if (isCallable$t(fn = input.valueOf) && !isObject$y(val = call$A(fn, input))) return val;
  if (pref !== 'string' && isCallable$t(fn = input.toString) && !isObject$y(val = call$A(fn, input))) return val;
  throw TypeError$t("Can't convert object to primitive value");
};

var shared$7 = {exports: {}};

var isPure = false;

var global$1y = global$1H;

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty$h = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty$h(global$1y, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$1y[key] = value;
  } return value;
};

var global$1x = global$1H;
var setGlobal$2 = setGlobal$3;

var SHARED = '__core-js_shared__';
var store$3 = global$1x[SHARED] || setGlobal$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$7.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.22.5',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var global$1w = global$1H;
var requireObjectCoercible$g = requireObjectCoercible$i;

var Object$4 = global$1w.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$q = function (argument) {
  return Object$4(requireObjectCoercible$g(argument));
};

var uncurryThis$19 = functionUncurryThis;
var toObject$p = toObject$q;

var hasOwnProperty$1 = uncurryThis$19({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$1(toObject$p(it), key);
};

var uncurryThis$18 = functionUncurryThis;

var id$2 = 0;
var postfix = Math.random();
var toString$w = uncurryThis$18(1.0.toString);

var uid$6 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$w(++id$2 + postfix, 36);
};

var global$1v = global$1H;
var shared$6 = shared$7.exports;
var hasOwn$w = hasOwnProperty_1;
var uid$5 = uid$6;
var NATIVE_SYMBOL$5 = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore$1 = shared$6('wks');
var Symbol$3 = global$1v.Symbol;
var symbolFor = Symbol$3 && Symbol$3['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$5;

var wellKnownSymbol$z = function (name) {
  if (!hasOwn$w(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$5 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL$5 && hasOwn$w(Symbol$3, name)) {
      WellKnownSymbolsStore$1[name] = Symbol$3[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore$1[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore$1[name];
};

var global$1u = global$1H;
var call$z = functionCall;
var isObject$x = isObject$z;
var isSymbol$6 = isSymbol$7;
var getMethod$8 = getMethod$9;
var ordinaryToPrimitive$1 = ordinaryToPrimitive$2;
var wellKnownSymbol$y = wellKnownSymbol$z;

var TypeError$s = global$1u.TypeError;
var TO_PRIMITIVE$1 = wellKnownSymbol$y('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$3 = function (input, pref) {
  if (!isObject$x(input) || isSymbol$6(input)) return input;
  var exoticToPrim = getMethod$8(input, TO_PRIMITIVE$1);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$z(exoticToPrim, input, pref);
    if (!isObject$x(result) || isSymbol$6(result)) return result;
    throw TypeError$s("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive$1(input, pref);
};

var toPrimitive$2 = toPrimitive$3;
var isSymbol$5 = isSymbol$7;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$8 = function (argument) {
  var key = toPrimitive$2(argument, 'string');
  return isSymbol$5(key) ? key : key + '';
};

var global$1t = global$1H;
var isObject$w = isObject$z;

var document$3 = global$1t.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$w(document$3) && isObject$w(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$D = descriptors;
var fails$1d = fails$1i;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$D && !fails$1d(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$C = descriptors;
var call$y = functionCall;
var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
var createPropertyDescriptor$b = createPropertyDescriptor$c;
var toIndexedObject$e = toIndexedObject$f;
var toPropertyKey$7 = toPropertyKey$8;
var hasOwn$v = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$C ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$e(O);
  P = toPropertyKey$7(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$2(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$v(O, P)) return createPropertyDescriptor$b(!call$y(propertyIsEnumerableModule$2.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$B = descriptors;
var fails$1c = fails$1i;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$B && fails$1c(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$1s = global$1H;
var isObject$v = isObject$z;

var String$6 = global$1s.String;
var TypeError$r = global$1s.TypeError;

// `Assert: Type(argument) is Object`
var anObject$C = function (argument) {
  if (isObject$v(argument)) return argument;
  throw TypeError$r(String$6(argument) + ' is not an object');
};

var global$1r = global$1H;
var DESCRIPTORS$A = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$B = anObject$C;
var toPropertyKey$6 = toPropertyKey$8;

var TypeError$q = global$1r.TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty$1 = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$A ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$B(O);
  P = toPropertyKey$6(P);
  anObject$B(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject$B(O);
  P = toPropertyKey$6(P);
  anObject$B(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$q('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$z = descriptors;
var definePropertyModule$c = objectDefineProperty;
var createPropertyDescriptor$a = createPropertyDescriptor$c;

var createNonEnumerableProperty$f = DESCRIPTORS$z ? function (object, key, value) {
  return definePropertyModule$c.f(object, key, createPropertyDescriptor$a(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$4 = {exports: {}};

var DESCRIPTORS$y = descriptors;
var hasOwn$u = hasOwnProperty_1;

var FunctionPrototype$3 = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$y && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$u(FunctionPrototype$3, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$y || (DESCRIPTORS$y && getDescriptor(FunctionPrototype$3, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$17 = functionUncurryThis;
var isCallable$s = isCallable$y;
var store$1 = sharedStore;

var functionToString$1 = uncurryThis$17(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$s(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString$1(it);
  };
}

var inspectSource$4 = store$1.inspectSource;

var global$1q = global$1H;
var isCallable$r = isCallable$y;
var inspectSource$3 = inspectSource$4;

var WeakMap$2 = global$1q.WeakMap;

var nativeWeakMap = isCallable$r(WeakMap$2) && /native code/.test(inspectSource$3(WeakMap$2));

var shared$5 = shared$7.exports;
var uid$4 = uid$6;

var keys$3 = shared$5('keys');

var sharedKey$4 = function (key) {
  return keys$3[key] || (keys$3[key] = uid$4(key));
};

var hiddenKeys$6 = {};

var NATIVE_WEAK_MAP$1 = nativeWeakMap;
var global$1p = global$1H;
var uncurryThis$16 = functionUncurryThis;
var isObject$u = isObject$z;
var createNonEnumerableProperty$e = createNonEnumerableProperty$f;
var hasOwn$t = hasOwnProperty_1;
var shared$4 = sharedStore;
var sharedKey$3 = sharedKey$4;
var hiddenKeys$5 = hiddenKeys$6;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$p = global$1p.TypeError;
var WeakMap$1 = global$1p.WeakMap;
var set$3, get$2, has$3;

var enforce = function (it) {
  return has$3(it) ? get$2(it) : set$3(it, {});
};

var getterFor$1 = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$u(it) || (state = get$2(it)).type !== TYPE) {
      throw TypeError$p('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP$1 || shared$4.state) {
  var store = shared$4.state || (shared$4.state = new WeakMap$1());
  var wmget = uncurryThis$16(store.get);
  var wmhas = uncurryThis$16(store.has);
  var wmset = uncurryThis$16(store.set);
  set$3 = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$p(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get$2 = function (it) {
    return wmget(store, it) || {};
  };
  has$3 = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$3('state');
  hiddenKeys$5[STATE] = true;
  set$3 = function (it, metadata) {
    if (hasOwn$t(it, STATE)) throw new TypeError$p(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$e(it, STATE, metadata);
    return metadata;
  };
  get$2 = function (it) {
    return hasOwn$t(it, STATE) ? it[STATE] : {};
  };
  has$3 = function (it) {
    return hasOwn$t(it, STATE);
  };
}

var internalState = {
  set: set$3,
  get: get$2,
  has: has$3,
  enforce: enforce,
  getterFor: getterFor$1
};

var fails$1b = fails$1i;
var isCallable$q = isCallable$y;
var hasOwn$s = hasOwnProperty_1;
var DESCRIPTORS$x = descriptors;
var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$4;
var InternalStateModule$c = internalState;

var enforceInternalState$2 = InternalStateModule$c.enforce;
var getInternalState$a = InternalStateModule$c.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty$g = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$x && !fails$1b(function () {
  return defineProperty$g(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$3 = makeBuiltIn$4.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$s(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name)) {
    defineProperty$g(value, 'name', { value: name, configurable: true });
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$s(options, 'arity') && value.length !== options.arity) {
    defineProperty$g(value, 'length', { value: options.arity });
  }
  if (options && hasOwn$s(options, 'constructor') && options.constructor) {
    if (DESCRIPTORS$x) try {
      defineProperty$g(value, 'prototype', { writable: false });
    } catch (error) { /* empty */ }
  } else value.prototype = undefined;
  var state = enforceInternalState$2(value);
  if (!hasOwn$s(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$3(function toString() {
  return isCallable$q(this) && getInternalState$a(this).source || inspectSource$2(this);
}, 'toString');

var global$1o = global$1H;
var isCallable$p = isCallable$y;
var createNonEnumerableProperty$d = createNonEnumerableProperty$f;
var makeBuiltIn$2 = makeBuiltIn$4.exports;
var setGlobal$1 = setGlobal$3;

var defineBuiltIn$n = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  if (isCallable$p(value)) makeBuiltIn$2(value, name, options);
  if (O === global$1o) {
    if (simple) O[key] = value;
    else setGlobal$1(key, value);
    return O;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty$d(O, key, value);
  return O;
};

var objectGetOwnPropertyNames = {};

var ceil$2 = Math.ceil;
var floor$b = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$i = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor$b : ceil$2)(number);
};

var toIntegerOrInfinity$h = toIntegerOrInfinity$i;

var max$6 = Math.max;
var min$9 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$9 = function (index, length) {
  var integer = toIntegerOrInfinity$h(index);
  return integer < 0 ? max$6(integer + length, 0) : min$9(integer, length);
};

var toIntegerOrInfinity$g = toIntegerOrInfinity$i;

var min$8 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$d = function (argument) {
  return argument > 0 ? min$8(toIntegerOrInfinity$g(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$c = toLength$d;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$n = function (obj) {
  return toLength$c(obj.length);
};

var toIndexedObject$d = toIndexedObject$f;
var toAbsoluteIndex$8 = toAbsoluteIndex$9;
var lengthOfArrayLike$m = lengthOfArrayLike$n;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$6 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$d($this);
    var length = lengthOfArrayLike$m(O);
    var index = toAbsoluteIndex$8(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$6(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$6(false)
};

var uncurryThis$15 = functionUncurryThis;
var hasOwn$r = hasOwnProperty_1;
var toIndexedObject$c = toIndexedObject$f;
var indexOf$2 = arrayIncludes.indexOf;
var hiddenKeys$4 = hiddenKeys$6;

var push$d = uncurryThis$15([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$c(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$r(hiddenKeys$4, key) && hasOwn$r(O, key) && push$d(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$r(O, key = names[i++])) {
    ~indexOf$2(result, key) || push$d(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$3 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$3);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$k = getBuiltIn$n;
var uncurryThis$14 = functionUncurryThis;
var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
var anObject$A = anObject$C;

var concat$3 = uncurryThis$14([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$4 = getBuiltIn$k('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$2.f(anObject$A(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$3.f;
  return getOwnPropertySymbols ? concat$3(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$q = hasOwnProperty_1;
var ownKeys$3 = ownKeys$4;
var getOwnPropertyDescriptorModule$6 = objectGetOwnPropertyDescriptor;
var definePropertyModule$b = objectDefineProperty;

var copyConstructorProperties$4 = function (target, source, exceptions) {
  var keys = ownKeys$3(source);
  var defineProperty = definePropertyModule$b.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$6.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$q(target, key) && !(exceptions && hasOwn$q(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$1a = fails$1i;
var isCallable$o = isCallable$y;

var replacement = /#|\.prototype\./;

var isForced$5 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$o(detection) ? fails$1a(detection)
    : !!detection;
};

var normalize = isForced$5.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$5.data = {};
var NATIVE = isForced$5.NATIVE = 'N';
var POLYFILL = isForced$5.POLYFILL = 'P';

var isForced_1 = isForced$5;

var global$1n = global$1H;
var getOwnPropertyDescriptor$8 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$c = createNonEnumerableProperty$f;
var defineBuiltIn$m = defineBuiltIn$n;
var setGlobal = setGlobal$3;
var copyConstructorProperties$3 = copyConstructorProperties$4;
var isForced$4 = isForced_1;

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$1n;
  } else if (STATIC) {
    target = global$1n[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$1n[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$8(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$4(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$3(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$c(sourceProperty, 'sham', true);
    }
    defineBuiltIn$m(target, key, sourceProperty, options);
  }
};

var wellKnownSymbol$x = wellKnownSymbol$z;

var TO_STRING_TAG$5 = wellKnownSymbol$x('toStringTag');
var test$2 = {};

test$2[TO_STRING_TAG$5] = 'z';

var toStringTagSupport = String(test$2) === '[object z]';

var global$1m = global$1H;
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$n = isCallable$y;
var classofRaw = classofRaw$1;
var wellKnownSymbol$w = wellKnownSymbol$z;

var TO_STRING_TAG$4 = wellKnownSymbol$w('toStringTag');
var Object$3 = global$1m.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$j = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object$3(it), TO_STRING_TAG$4)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$n(O.callee) ? 'Arguments' : result;
};

var global$1l = global$1H;
var classof$i = classof$j;

var String$5 = global$1l.String;

var toString$v = function (argument) {
  if (classof$i(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$5(argument);
};

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
var objectKeys$5 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$w = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$a = objectDefineProperty;
var anObject$z = anObject$C;
var toIndexedObject$b = toIndexedObject$f;
var objectKeys$4 = objectKeys$5;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$w && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$z(O);
  var props = toIndexedObject$b(Properties);
  var keys = objectKeys$4(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$a.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$j = getBuiltIn$n;

var html$2 = getBuiltIn$j('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$y = anObject$C;
var definePropertiesModule$1 = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$2 = hiddenKeys$6;
var html$1 = html$2;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$2 = sharedKey$4;

var GT = '>';
var LT = '<';
var PROTOTYPE$2 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$2('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE$2][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys$2[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$2] = anObject$y(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$2] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
};

var objectGetOwnPropertyNamesExternal = {};

var toPropertyKey$5 = toPropertyKey$8;
var definePropertyModule$9 = objectDefineProperty;
var createPropertyDescriptor$9 = createPropertyDescriptor$c;

var createProperty$9 = function (object, key, value) {
  var propertyKey = toPropertyKey$5(key);
  if (propertyKey in object) definePropertyModule$9.f(object, propertyKey, createPropertyDescriptor$9(0, value));
  else object[propertyKey] = value;
};

var global$1k = global$1H;
var toAbsoluteIndex$7 = toAbsoluteIndex$9;
var lengthOfArrayLike$l = lengthOfArrayLike$n;
var createProperty$8 = createProperty$9;

var Array$7 = global$1k.Array;
var max$5 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$l(O);
  var k = toAbsoluteIndex$7(start, length);
  var fin = toAbsoluteIndex$7(end === undefined ? length : end, length);
  var result = Array$7(max$5(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty$8(result, n, O[k]);
  result.length = n;
  return result;
};

/* eslint-disable es-x/no-object-getownpropertynames -- safe */

var classof$h = classofRaw$1;
var toIndexedObject$a = toIndexedObject$f;
var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var arraySlice$c = arraySliceSimple;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySlice$c(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && classof$h(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames$1(toIndexedObject$a(it));
};

var wellKnownSymbolWrapped = {};

var wellKnownSymbol$v = wellKnownSymbol$z;

wellKnownSymbolWrapped.f = wellKnownSymbol$v;

var global$1j = global$1H;

var path$1 = global$1j;

var path = path$1;
var hasOwn$p = hasOwnProperty_1;
var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
var defineProperty$f = objectDefineProperty.f;

var defineWellKnownSymbol$e = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn$p(Symbol, NAME)) defineProperty$f(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule$1.f(NAME)
  });
};

var call$x = functionCall;
var getBuiltIn$i = getBuiltIn$n;
var wellKnownSymbol$u = wellKnownSymbol$z;
var defineBuiltIn$l = defineBuiltIn$n;

var symbolDefineToPrimitive = function () {
  var Symbol = getBuiltIn$i('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol$u('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn$l(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call$x(valueOf, this);
    }, { arity: 1 });
  }
};

var defineProperty$e = objectDefineProperty.f;
var hasOwn$o = hasOwnProperty_1;
var wellKnownSymbol$t = wellKnownSymbol$z;

var TO_STRING_TAG$3 = wellKnownSymbol$t('toStringTag');

var setToStringTag$d = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$o(target, TO_STRING_TAG$3)) {
    defineProperty$e(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var uncurryThis$13 = functionUncurryThis;
var aCallable$g = aCallable$i;
var NATIVE_BIND$2 = functionBindNative;

var bind$d = uncurryThis$13(uncurryThis$13.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$g(fn);
  return that === undefined ? fn : NATIVE_BIND$2 ? bind$d(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var classof$g = classofRaw$1;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
var isArray$7 = Array.isArray || function isArray(argument) {
  return classof$g(argument) == 'Array';
};

var uncurryThis$12 = functionUncurryThis;
var fails$19 = fails$1i;
var isCallable$m = isCallable$y;
var classof$f = classof$j;
var getBuiltIn$h = getBuiltIn$n;
var inspectSource$1 = inspectSource$4;

var noop$2 = function () { /* empty */ };
var empty = [];
var construct$1 = getBuiltIn$h('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$a = uncurryThis$12(constructorRegExp.exec);
var INCORRECT_TO_STRING$2 = !constructorRegExp.exec(noop$2);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$m(argument)) return false;
  try {
    construct$1(noop$2, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$m(argument)) return false;
  switch (classof$f(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING$2 || !!exec$a(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$6 = !construct$1 || fails$19(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$1i = global$1H;
var isArray$6 = isArray$7;
var isConstructor$5 = isConstructor$6;
var isObject$t = isObject$z;
var wellKnownSymbol$s = wellKnownSymbol$z;

var SPECIES$6 = wellKnownSymbol$s('species');
var Array$6 = global$1i.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray$6(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor$5(C) && (C === Array$6 || isArray$6(C.prototype))) C = undefined;
    else if (isObject$t(C)) {
      C = C[SPECIES$6];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array$6 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$5 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind$c = functionBindContext;
var uncurryThis$11 = functionUncurryThis;
var IndexedObject$3 = indexedObject;
var toObject$o = toObject$q;
var lengthOfArrayLike$k = lengthOfArrayLike$n;
var arraySpeciesCreate$4 = arraySpeciesCreate$5;

var push$c = uncurryThis$11([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$5 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$o($this);
    var self = IndexedObject$3(O);
    var boundFunction = bind$c(callbackfn, that);
    var length = lengthOfArrayLike$k(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate$4;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push$c(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push$c(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$5(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$5(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$5(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$5(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$5(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$5(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$5(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$5(7)
};

var $$2N = _export;
var global$1h = global$1H;
var call$w = functionCall;
var uncurryThis$10 = functionUncurryThis;
var DESCRIPTORS$v = descriptors;
var NATIVE_SYMBOL$4 = nativeSymbol;
var fails$18 = fails$1i;
var hasOwn$n = hasOwnProperty_1;
var isPrototypeOf$a = objectIsPrototypeOf;
var anObject$x = anObject$C;
var toIndexedObject$9 = toIndexedObject$f;
var toPropertyKey$4 = toPropertyKey$8;
var $toString$3 = toString$v;
var createPropertyDescriptor$8 = createPropertyDescriptor$c;
var nativeObjectCreate = objectCreate;
var objectKeys$3 = objectKeys$5;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
var getOwnPropertyDescriptorModule$5 = objectGetOwnPropertyDescriptor;
var definePropertyModule$8 = objectDefineProperty;
var definePropertiesModule = objectDefineProperties;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var defineBuiltIn$k = defineBuiltIn$n;
var shared$3 = shared$7.exports;
var sharedKey$1 = sharedKey$4;
var hiddenKeys$1 = hiddenKeys$6;
var uid$3 = uid$6;
var wellKnownSymbol$r = wellKnownSymbol$z;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineWellKnownSymbol$d = defineWellKnownSymbol$e;
var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
var setToStringTag$c = setToStringTag$d;
var InternalStateModule$b = internalState;
var $forEach$2 = arrayIteration.forEach;

var HIDDEN = sharedKey$1('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE$1 = 'prototype';

var setInternalState$b = InternalStateModule$b.set;
var getInternalState$9 = InternalStateModule$b.getterFor(SYMBOL);

var ObjectPrototype$4 = Object[PROTOTYPE$1];
var $Symbol = global$1h.Symbol;
var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE$1];
var TypeError$o = global$1h.TypeError;
var QObject = global$1h.QObject;
var nativeGetOwnPropertyDescriptor$2 = getOwnPropertyDescriptorModule$5.f;
var nativeDefineProperty$1 = definePropertyModule$8.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
var push$b = uncurryThis$10([].push);

var AllSymbols = shared$3('symbols');
var ObjectPrototypeSymbols = shared$3('op-symbols');
var WellKnownSymbolsStore = shared$3('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS$v && fails$18(function () {
  return nativeObjectCreate(nativeDefineProperty$1({}, 'a', {
    get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$2(ObjectPrototype$4, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype$4[P];
  nativeDefineProperty$1(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$4) {
    nativeDefineProperty$1(ObjectPrototype$4, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty$1;

var wrap$1 = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype$1);
  setInternalState$b(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS$v) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype$4) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject$x(O);
  var key = toPropertyKey$4(P);
  anObject$x(Attributes);
  if (hasOwn$n(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn$n(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor$8(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn$n(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$8(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty$1(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject$x(O);
  var properties = toIndexedObject$9(Properties);
  var keys = objectKeys$3(properties).concat($getOwnPropertySymbols(properties));
  $forEach$2(keys, function (key) {
    if (!DESCRIPTORS$v || call$w($propertyIsEnumerable$1, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
  var P = toPropertyKey$4(V);
  var enumerable = call$w(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype$4 && hasOwn$n(AllSymbols, P) && !hasOwn$n(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn$n(this, P) || !hasOwn$n(AllSymbols, P) || hasOwn$n(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject$9(O);
  var key = toPropertyKey$4(P);
  if (it === ObjectPrototype$4 && hasOwn$n(AllSymbols, key) && !hasOwn$n(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor$2(it, key);
  if (descriptor && hasOwn$n(AllSymbols, key) && !(hasOwn$n(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject$9(O));
  var result = [];
  $forEach$2(names, function (key) {
    if (!hasOwn$n(AllSymbols, key) && !hasOwn$n(hiddenKeys$1, key)) push$b(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$4;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$9(O));
  var result = [];
  $forEach$2(names, function (key) {
    if (hasOwn$n(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$n(ObjectPrototype$4, key))) {
      push$b(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL$4) {
  $Symbol = function Symbol() {
    if (isPrototypeOf$a(SymbolPrototype$1, this)) throw TypeError$o('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$3(arguments[0]);
    var tag = uid$3(description);
    var setter = function (value) {
      if (this === ObjectPrototype$4) call$w(setter, ObjectPrototypeSymbols, value);
      if (hasOwn$n(this, HIDDEN) && hasOwn$n(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor$8(1, value));
    };
    if (DESCRIPTORS$v && USE_SETTER) setSymbolDescriptor(ObjectPrototype$4, tag, { configurable: true, set: setter });
    return wrap$1(tag, description);
  };

  SymbolPrototype$1 = $Symbol[PROTOTYPE$1];

  defineBuiltIn$k(SymbolPrototype$1, 'toString', function toString() {
    return getInternalState$9(this).tag;
  });

  defineBuiltIn$k($Symbol, 'withoutSetter', function (description) {
    return wrap$1(uid$3(description), description);
  });

  propertyIsEnumerableModule$1.f = $propertyIsEnumerable$1;
  definePropertyModule$8.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule$5.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap$1(wellKnownSymbol$r(name), name);
  };

  if (DESCRIPTORS$v) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty$1(SymbolPrototype$1, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState$9(this).description;
      }
    });
    {
      defineBuiltIn$k(ObjectPrototype$4, 'propertyIsEnumerable', $propertyIsEnumerable$1, { unsafe: true });
    }
  }
}

$$2N({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$4, sham: !NATIVE_SYMBOL$4 }, {
  Symbol: $Symbol
});

$forEach$2(objectKeys$3(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol$d(name);
});

$$2N({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$4 }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$$2N({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$4, sham: !DESCRIPTORS$v }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$$2N({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$4 }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive$1();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag$c($Symbol, SYMBOL);

hiddenKeys$1[HIDDEN] = true;

var NATIVE_SYMBOL$3 = nativeSymbol;

/* eslint-disable es-x/no-symbol -- safe */
var nativeSymbolRegistry = NATIVE_SYMBOL$3 && !!Symbol['for'] && !!Symbol.keyFor;

var $$2M = _export;
var getBuiltIn$g = getBuiltIn$n;
var hasOwn$m = hasOwnProperty_1;
var toString$u = toString$v;
var shared$2 = shared$7.exports;
var NATIVE_SYMBOL_REGISTRY$1 = nativeSymbolRegistry;

var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$$2M({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
  'for': function (key) {
    var string = toString$u(key);
    if (hasOwn$m(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn$g('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry$1[symbol] = string;
    return symbol;
  }
});

var $$2L = _export;
var hasOwn$l = hasOwnProperty_1;
var isSymbol$4 = isSymbol$7;
var tryToString$4 = tryToString$6;
var shared$1 = shared$7.exports;
var NATIVE_SYMBOL_REGISTRY = nativeSymbolRegistry;

var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$$2L({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol$4(sym)) throw TypeError(tryToString$4(sym) + ' is not a symbol');
    if (hasOwn$l(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var apply$b = FunctionPrototype$2.apply;
var call$v = FunctionPrototype$2.call;

// eslint-disable-next-line es-x/no-reflect -- safe
var functionApply$1 = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$v.bind(apply$b) : function () {
  return call$v.apply(apply$b, arguments);
});

var uncurryThis$$ = functionUncurryThis;

var arraySlice$b = uncurryThis$$([].slice);

var $$2K = _export;
var getBuiltIn$f = getBuiltIn$n;
var apply$a = functionApply$1;
var call$u = functionCall;
var uncurryThis$_ = functionUncurryThis;
var fails$17 = fails$1i;
var isArray$5 = isArray$7;
var isCallable$l = isCallable$y;
var isObject$s = isObject$z;
var isSymbol$3 = isSymbol$7;
var arraySlice$a = arraySlice$b;
var NATIVE_SYMBOL$2 = nativeSymbol;

var $stringify = getBuiltIn$f('JSON', 'stringify');
var exec$9 = uncurryThis$_(/./.exec);
var charAt$e = uncurryThis$_(''.charAt);
var charCodeAt$5 = uncurryThis$_(''.charCodeAt);
var replace$b = uncurryThis$_(''.replace);
var numberToString$2 = uncurryThis$_(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$2 || fails$17(function () {
  var symbol = getBuiltIn$f('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails$17(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice$a(arguments);
  var $replacer = replacer;
  if (!isObject$s(replacer) && it === undefined || isSymbol$3(it)) return; // IE8 returns string on undefined
  if (!isArray$5(replacer)) replacer = function (key, value) {
    if (isCallable$l($replacer)) value = call$u($replacer, this, key, value);
    if (!isSymbol$3(value)) return value;
  };
  args[1] = replacer;
  return apply$a($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt$e(string, offset - 1);
  var next = charAt$e(string, offset + 1);
  if ((exec$9(low, match) && !exec$9(hi, next)) || (exec$9(hi, match) && !exec$9(low, prev))) {
    return '\\u' + numberToString$2(charCodeAt$5(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $$2K({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice$a(arguments);
      var result = apply$a(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$b(result, tester, fixIllFormed) : result;
    }
  });
}

var $$2J = _export;
var NATIVE_SYMBOL$1 = nativeSymbol;
var fails$16 = fails$1i;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var toObject$n = toObject$q;

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED$q = !NATIVE_SYMBOL$1 || fails$16(function () { getOwnPropertySymbolsModule$1.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$$2J({ target: 'Object', stat: true, forced: FORCED$q }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$n(it)) : [];
  }
});

var $$2I = _export;
var DESCRIPTORS$u = descriptors;
var global$1g = global$1H;
var uncurryThis$Z = functionUncurryThis;
var hasOwn$k = hasOwnProperty_1;
var isCallable$k = isCallable$y;
var isPrototypeOf$9 = objectIsPrototypeOf;
var toString$t = toString$v;
var defineProperty$d = objectDefineProperty.f;
var copyConstructorProperties$2 = copyConstructorProperties$4;

var NativeSymbol = global$1g.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS$u && isCallable$k(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$t(arguments[0]);
    var result = isPrototypeOf$9(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties$2(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var symbolToString = uncurryThis$Z(SymbolPrototype.toString);
  var symbolValueOf = uncurryThis$Z(SymbolPrototype.valueOf);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace$a = uncurryThis$Z(''.replace);
  var stringSlice$f = uncurryThis$Z(''.slice);

  defineProperty$d(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = symbolValueOf(this);
      var string = symbolToString(symbol);
      if (hasOwn$k(EmptyStringDescriptionStore, symbol)) return '';
      var desc = NATIVE_SYMBOL ? stringSlice$f(string, 7, -1) : replace$a(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $$2I({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

var defineWellKnownSymbol$c = defineWellKnownSymbol$e;

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol$c('asyncIterator');

var defineWellKnownSymbol$b = defineWellKnownSymbol$e;

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol$b('hasInstance');

var defineWellKnownSymbol$a = defineWellKnownSymbol$e;

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol$a('isConcatSpreadable');

var defineWellKnownSymbol$9 = defineWellKnownSymbol$e;

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol$9('iterator');

var defineWellKnownSymbol$8 = defineWellKnownSymbol$e;

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol$8('match');

var defineWellKnownSymbol$7 = defineWellKnownSymbol$e;

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol$7('matchAll');

var defineWellKnownSymbol$6 = defineWellKnownSymbol$e;

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol$6('replace');

var defineWellKnownSymbol$5 = defineWellKnownSymbol$e;

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol$5('search');

var defineWellKnownSymbol$4 = defineWellKnownSymbol$e;

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol$4('species');

var defineWellKnownSymbol$3 = defineWellKnownSymbol$e;

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol$3('split');

var defineWellKnownSymbol$2 = defineWellKnownSymbol$e;
var defineSymbolToPrimitive = symbolDefineToPrimitive;

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol$2('toPrimitive');

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

var getBuiltIn$e = getBuiltIn$n;
var defineWellKnownSymbol$1 = defineWellKnownSymbol$e;
var setToStringTag$b = setToStringTag$d;

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol$1('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag$b(getBuiltIn$e('Symbol'), 'Symbol');

var defineWellKnownSymbol = defineWellKnownSymbol$e;

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');

var global$1f = global$1H;
var isCallable$j = isCallable$y;

var String$4 = global$1f.String;
var TypeError$n = global$1f.TypeError;

var aPossiblePrototype$2 = function (argument) {
  if (typeof argument == 'object' || isCallable$j(argument)) return argument;
  throw TypeError$n("Can't set " + String$4(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$Y = functionUncurryThis;
var anObject$w = anObject$C;
var aPossiblePrototype$1 = aPossiblePrototype$2;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
var objectSetPrototypeOf$1 = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$Y(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$w(O);
    aPossiblePrototype$1(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var defineProperty$c = objectDefineProperty.f;

var proxyAccessor$2 = function (Target, Source, key) {
  key in Target || defineProperty$c(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

var isCallable$i = isCallable$y;
var isObject$r = isObject$z;
var setPrototypeOf$8 = objectSetPrototypeOf$1;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$6 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf$8 &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$i(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$r(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf$8($this, NewTargetPrototype);
  return $this;
};

var toString$s = toString$v;

var normalizeStringArgument$5 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$s(argument);
};

var isObject$q = isObject$z;
var createNonEnumerableProperty$b = createNonEnumerableProperty$f;

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
var installErrorCause$2 = function (O, options) {
  if (isObject$q(options) && 'cause' in options) {
    createNonEnumerableProperty$b(O, 'cause', options.cause);
  }
};

var uncurryThis$X = functionUncurryThis;

var $Error = Error;
var replace$9 = uncurryThis$X(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

var clearErrorStack$4 = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace$9(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};

var fails$15 = fails$1i;
var createPropertyDescriptor$7 = createPropertyDescriptor$c;

var errorStackInstallable = !fails$15(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor$7(1, 7));
  return error.stack !== 7;
});

var getBuiltIn$d = getBuiltIn$n;
var hasOwn$j = hasOwnProperty_1;
var createNonEnumerableProperty$a = createNonEnumerableProperty$f;
var isPrototypeOf$8 = objectIsPrototypeOf;
var setPrototypeOf$7 = objectSetPrototypeOf$1;
var copyConstructorProperties$1 = copyConstructorProperties$4;
var proxyAccessor$1 = proxyAccessor$2;
var inheritIfRequired$5 = inheritIfRequired$6;
var normalizeStringArgument$4 = normalizeStringArgument$5;
var installErrorCause$1 = installErrorCause$2;
var clearErrorStack$3 = clearErrorStack$4;
var ERROR_STACK_INSTALLABLE$2 = errorStackInstallable;
var DESCRIPTORS$t = descriptors;

var wrapErrorConstructorWithCause$2 = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn$d.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (hasOwn$j(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn$d('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument$4(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty$a(result, 'message', message);
    if (ERROR_STACK_INSTALLABLE$2) createNonEnumerableProperty$a(result, 'stack', clearErrorStack$3(result.stack, 2));
    if (this && isPrototypeOf$8(OriginalErrorPrototype, this)) inheritIfRequired$5(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause$1(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf$7) setPrototypeOf$7(WrappedError, BaseError);
    else copyConstructorProperties$1(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS$t && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor$1(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor$1(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties$1(WrappedError, OriginalError);

  try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty$a(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};

/* eslint-disable no-unused-vars -- required for functions `.length` */

var $$2H = _export;
var global$1e = global$1H;
var apply$9 = functionApply$1;
var wrapErrorConstructorWithCause$1 = wrapErrorConstructorWithCause$2;

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly$1 = global$1e[WEB_ASSEMBLY];

var FORCED$p = Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause$1(ERROR_NAME, wrapper, FORCED$p);
  $$2H({ global: true, constructor: true, arity: 1, forced: FORCED$p }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly$1 && WebAssembly$1[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause$1(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED$p);
    $$2H({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED$p }, O);
  }
};

// https://github.com/tc39/proposal-error-cause
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply$9(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply$9(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply$9(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply$9(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply$9(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply$9(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply$9(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply$9(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply$9(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply$9(init, this, arguments); };
});

var DESCRIPTORS$s = descriptors;
var fails$14 = fails$1i;
var anObject$v = anObject$C;
var create$a = objectCreate;
var normalizeStringArgument$3 = normalizeStringArgument$5;

var nativeErrorToString = Error.prototype.toString;

var INCORRECT_TO_STRING$1 = fails$14(function () {
  if (DESCRIPTORS$s) {
    // Chrome 32- incorrectly call accessor
    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    var object = create$a(Object.defineProperty({}, 'name', { get: function () {
      return this === object;
    } }));
    if (nativeErrorToString.call(object) !== 'true') return true;
  }
  // FF10- does not properly handle non-strings
  return nativeErrorToString.call({ message: 1, name: 2 }) !== '2: 1'
    // IE8 does not properly handle defaults
    || nativeErrorToString.call({}) !== 'Error';
});

var errorToString$2 = INCORRECT_TO_STRING$1 ? function toString() {
  var O = anObject$v(this);
  var name = normalizeStringArgument$3(O.name, 'Error');
  var message = normalizeStringArgument$3(O.message);
  return !name ? message : !message ? name : name + ': ' + message;
} : nativeErrorToString;

var defineBuiltIn$j = defineBuiltIn$n;
var errorToString$1 = errorToString$2;

var ErrorPrototype$1 = Error.prototype;

// `Error.prototype.toString` method fix
// https://tc39.es/ecma262/#sec-error.prototype.tostring
if (ErrorPrototype$1.toString !== errorToString$1) {
  defineBuiltIn$j(ErrorPrototype$1, 'toString', errorToString$1);
}

var fails$13 = fails$1i;

var correctPrototypeGetter = !fails$13(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var global$1d = global$1H;
var hasOwn$i = hasOwnProperty_1;
var isCallable$h = isCallable$y;
var toObject$m = toObject$q;
var sharedKey = sharedKey$4;
var CORRECT_PROTOTYPE_GETTER$2 = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var Object$2 = global$1d.Object;
var ObjectPrototype$3 = Object$2.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER$2 ? Object$2.getPrototypeOf : function (O) {
  var object = toObject$m(O);
  if (hasOwn$i(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$h(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object$2 ? ObjectPrototype$3 : null;
};

var iterators = {};

var wellKnownSymbol$q = wellKnownSymbol$z;
var Iterators$4 = iterators;

var ITERATOR$a = wellKnownSymbol$q('iterator');
var ArrayPrototype$1 = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$3 = function (it) {
  return it !== undefined && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$a] === it);
};

var classof$e = classof$j;
var getMethod$7 = getMethod$9;
var Iterators$3 = iterators;
var wellKnownSymbol$p = wellKnownSymbol$z;

var ITERATOR$9 = wellKnownSymbol$p('iterator');

var getIteratorMethod$5 = function (it) {
  if (it != undefined) return getMethod$7(it, ITERATOR$9)
    || getMethod$7(it, '@@iterator')
    || Iterators$3[classof$e(it)];
};

var global$1c = global$1H;
var call$t = functionCall;
var aCallable$f = aCallable$i;
var anObject$u = anObject$C;
var tryToString$3 = tryToString$6;
var getIteratorMethod$4 = getIteratorMethod$5;

var TypeError$m = global$1c.TypeError;

var getIterator$4 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$4(argument) : usingIterator;
  if (aCallable$f(iteratorMethod)) return anObject$u(call$t(iteratorMethod, argument));
  throw TypeError$m(tryToString$3(argument) + ' is not iterable');
};

var call$s = functionCall;
var anObject$t = anObject$C;
var getMethod$6 = getMethod$9;

var iteratorClose$2 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$t(iterator);
  try {
    innerResult = getMethod$6(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$s(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$t(innerResult);
  return value;
};

var global$1b = global$1H;
var bind$b = functionBindContext;
var call$r = functionCall;
var anObject$s = anObject$C;
var tryToString$2 = tryToString$6;
var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
var lengthOfArrayLike$j = lengthOfArrayLike$n;
var isPrototypeOf$7 = objectIsPrototypeOf;
var getIterator$3 = getIterator$4;
var getIteratorMethod$3 = getIteratorMethod$5;
var iteratorClose$1 = iteratorClose$2;

var TypeError$l = global$1b.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$a = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$b(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose$1(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$s(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$3(iterable);
    if (!iterFn) throw TypeError$l(tryToString$2(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod$2(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$j(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$7(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator$3(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call$r(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose$1(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$7(ResultPrototype, result)) return result;
  } return new Result(false);
};

var $$2G = _export;
var global$1a = global$1H;
var isPrototypeOf$6 = objectIsPrototypeOf;
var getPrototypeOf$9 = objectGetPrototypeOf$1;
var setPrototypeOf$6 = objectSetPrototypeOf$1;
var copyConstructorProperties = copyConstructorProperties$4;
var create$9 = objectCreate;
var createNonEnumerableProperty$9 = createNonEnumerableProperty$f;
var createPropertyDescriptor$6 = createPropertyDescriptor$c;
var clearErrorStack$2 = clearErrorStack$4;
var installErrorCause = installErrorCause$2;
var iterate$9 = iterate$a;
var normalizeStringArgument$2 = normalizeStringArgument$5;
var wellKnownSymbol$o = wellKnownSymbol$z;
var ERROR_STACK_INSTALLABLE$1 = errorStackInstallable;

var TO_STRING_TAG$2 = wellKnownSymbol$o('toStringTag');
var Error$5 = global$1a.Error;
var push$a = [].push;

var $AggregateError$1 = function AggregateError(errors, message /* , options */) {
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var isInstance = isPrototypeOf$6(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf$6) {
    that = setPrototypeOf$6(new Error$5(), isInstance ? getPrototypeOf$9(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create$9(AggregateErrorPrototype);
    createNonEnumerableProperty$9(that, TO_STRING_TAG$2, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty$9(that, 'message', normalizeStringArgument$2(message));
  if (ERROR_STACK_INSTALLABLE$1) createNonEnumerableProperty$9(that, 'stack', clearErrorStack$2(that.stack, 1));
  installErrorCause(that, options);
  var errorsArray = [];
  iterate$9(errors, push$a, { that: errorsArray });
  createNonEnumerableProperty$9(that, 'errors', errorsArray);
  return that;
};

if (setPrototypeOf$6) setPrototypeOf$6($AggregateError$1, Error$5);
else copyConstructorProperties($AggregateError$1, Error$5, { name: true });

var AggregateErrorPrototype = $AggregateError$1.prototype = create$9(Error$5.prototype, {
  constructor: createPropertyDescriptor$6(1, $AggregateError$1),
  message: createPropertyDescriptor$6(1, ''),
  name: createPropertyDescriptor$6(1, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$$2G({ global: true, constructor: true, arity: 2 }, {
  AggregateError: $AggregateError$1
});

var $$2F = _export;
var getBuiltIn$c = getBuiltIn$n;
var apply$8 = functionApply$1;
var fails$12 = fails$1i;
var wrapErrorConstructorWithCause = wrapErrorConstructorWithCause$2;

var AGGREGATE_ERROR = 'AggregateError';
var $AggregateError = getBuiltIn$c(AGGREGATE_ERROR);
var FORCED$o = !fails$12(function () {
  return $AggregateError([1]).errors[0] !== 1;
}) && fails$12(function () {
  return $AggregateError([1], AGGREGATE_ERROR, { cause: 7 }).cause !== 7;
});

// https://github.com/tc39/proposal-error-cause
$$2F({ global: true, constructor: true, arity: 2, forced: FORCED$o }, {
  AggregateError: wrapErrorConstructorWithCause(AGGREGATE_ERROR, function (init) {
    // eslint-disable-next-line no-unused-vars -- required for functions `.length`
    return function AggregateError(errors, message) { return apply$8(init, this, arguments); };
  }, FORCED$o, true)
});

var wellKnownSymbol$n = wellKnownSymbol$z;
var create$8 = objectCreate;
var definePropertyModule$7 = objectDefineProperty;

var UNSCOPABLES = wellKnownSymbol$n('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule$7.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$8(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$9 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $$2E = _export;
var toObject$l = toObject$q;
var lengthOfArrayLike$i = lengthOfArrayLike$n;
var toIntegerOrInfinity$f = toIntegerOrInfinity$i;
var addToUnscopables$8 = addToUnscopables$9;

// `Array.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
$$2E({ target: 'Array', proto: true }, {
  at: function at(index) {
    var O = toObject$l(this);
    var len = lengthOfArrayLike$i(O);
    var relativeIndex = toIntegerOrInfinity$f(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : O[k];
  }
});

addToUnscopables$8('at');

var fails$11 = fails$1i;
var wellKnownSymbol$m = wellKnownSymbol$z;
var V8_VERSION$2 = engineV8Version;

var SPECIES$5 = wellKnownSymbol$m('species');

var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$2 >= 51 || !fails$11(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$5] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$2D = _export;
var global$19 = global$1H;
var fails$10 = fails$1i;
var isArray$4 = isArray$7;
var isObject$p = isObject$z;
var toObject$k = toObject$q;
var lengthOfArrayLike$h = lengthOfArrayLike$n;
var createProperty$7 = createProperty$9;
var arraySpeciesCreate$3 = arraySpeciesCreate$5;
var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
var wellKnownSymbol$l = wellKnownSymbol$z;
var V8_VERSION$1 = engineV8Version;

var IS_CONCAT_SPREADABLE = wellKnownSymbol$l('isConcatSpreadable');
var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$k = global$19.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$10(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$4('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$p(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$4(O);
};

var FORCED$n = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$$2D({ target: 'Array', proto: true, arity: 1, forced: FORCED$n }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$k(this);
    var A = arraySpeciesCreate$3(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$h(E);
        if (n + len > MAX_SAFE_INTEGER$1) throw TypeError$k(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty$7(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER$1) throw TypeError$k(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty$7(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var toObject$j = toObject$q;
var toAbsoluteIndex$6 = toAbsoluteIndex$9;
var lengthOfArrayLike$g = lengthOfArrayLike$n;

var min$7 = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es-x/no-array-prototype-copywithin -- safe
var arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject$j(this);
  var len = lengthOfArrayLike$g(O);
  var to = toAbsoluteIndex$6(target, len);
  var from = toAbsoluteIndex$6(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min$7((end === undefined ? len : toAbsoluteIndex$6(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};

var $$2C = _export;
var copyWithin = arrayCopyWithin;
var addToUnscopables$7 = addToUnscopables$9;

// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
$$2C({ target: 'Array', proto: true }, {
  copyWithin: copyWithin
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$7('copyWithin');

var fails$$ = fails$1i;

var arrayMethodIsStrict$9 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$$(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var $$2B = _export;
var $every$1 = arrayIteration.every;
var arrayMethodIsStrict$8 = arrayMethodIsStrict$9;

var STRICT_METHOD$8 = arrayMethodIsStrict$8('every');

// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$$2B({ target: 'Array', proto: true, forced: !STRICT_METHOD$8 }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var toObject$i = toObject$q;
var toAbsoluteIndex$5 = toAbsoluteIndex$9;
var lengthOfArrayLike$f = lengthOfArrayLike$n;

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
var arrayFill$1 = function fill(value /* , start = 0, end = @length */) {
  var O = toObject$i(this);
  var length = lengthOfArrayLike$f(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex$5(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex$5(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

var $$2A = _export;
var fill$1 = arrayFill$1;
var addToUnscopables$6 = addToUnscopables$9;

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$$2A({ target: 'Array', proto: true }, {
  fill: fill$1
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$6('fill');

var $$2z = _export;
var $filter$1 = arrayIteration.filter;
var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;

var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$$2z({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var $$2y = _export;
var $find$1 = arrayIteration.find;
var addToUnscopables$5 = addToUnscopables$9;

var FIND = 'find';
var SKIPS_HOLES$1 = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES$1 = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$$2y({ target: 'Array', proto: true, forced: SKIPS_HOLES$1 }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$5(FIND);

var $$2x = _export;
var $findIndex$1 = arrayIteration.findIndex;
var addToUnscopables$4 = addToUnscopables$9;

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$$2x({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$4(FIND_INDEX);

var global$18 = global$1H;
var isArray$3 = isArray$7;
var lengthOfArrayLike$e = lengthOfArrayLike$n;
var bind$a = functionBindContext;

var TypeError$j = global$18.TypeError;

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray$2 = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind$a(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray$3(element)) {
        elementLen = lengthOfArrayLike$e(element);
        targetIndex = flattenIntoArray$2(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError$j('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

var flattenIntoArray_1 = flattenIntoArray$2;

var $$2w = _export;
var flattenIntoArray$1 = flattenIntoArray_1;
var toObject$h = toObject$q;
var lengthOfArrayLike$d = lengthOfArrayLike$n;
var toIntegerOrInfinity$e = toIntegerOrInfinity$i;
var arraySpeciesCreate$2 = arraySpeciesCreate$5;

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$$2w({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject$h(this);
    var sourceLen = lengthOfArrayLike$d(O);
    var A = arraySpeciesCreate$2(O, 0);
    A.length = flattenIntoArray$1(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity$e(depthArg));
    return A;
  }
});

var $$2v = _export;
var flattenIntoArray = flattenIntoArray_1;
var aCallable$e = aCallable$i;
var toObject$g = toObject$q;
var lengthOfArrayLike$c = lengthOfArrayLike$n;
var arraySpeciesCreate$1 = arraySpeciesCreate$5;

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$$2v({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject$g(this);
    var sourceLen = lengthOfArrayLike$c(O);
    var A;
    aCallable$e(callbackfn);
    A = arraySpeciesCreate$1(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});

var $forEach$1 = arrayIteration.forEach;
var arrayMethodIsStrict$7 = arrayMethodIsStrict$9;

var STRICT_METHOD$7 = arrayMethodIsStrict$7('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
var arrayForEach = !STRICT_METHOD$7 ? function forEach(callbackfn /* , thisArg */) {
  return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
} : [].forEach;

var $$2u = _export;
var forEach$2 = arrayForEach;

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
$$2u({ target: 'Array', proto: true, forced: [].forEach != forEach$2 }, {
  forEach: forEach$2
});

var anObject$r = anObject$C;
var iteratorClose = iteratorClose$2;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$r(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};

var global$17 = global$1H;
var bind$9 = functionBindContext;
var call$q = functionCall;
var toObject$f = toObject$q;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
var isConstructor$4 = isConstructor$6;
var lengthOfArrayLike$b = lengthOfArrayLike$n;
var createProperty$6 = createProperty$9;
var getIterator$2 = getIterator$4;
var getIteratorMethod$2 = getIteratorMethod$5;

var Array$5 = global$17.Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject$f(arrayLike);
  var IS_CONSTRUCTOR = isConstructor$4(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind$9(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod$2(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == Array$5 && isArrayIteratorMethod$1(iteratorMethod))) {
    iterator = getIterator$2(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call$q(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty$6(result, index, value);
    }
  } else {
    length = lengthOfArrayLike$b(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array$5(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty$6(result, index, value);
    }
  }
  result.length = index;
  return result;
};

var wellKnownSymbol$k = wellKnownSymbol$z;

var ITERATOR$8 = wellKnownSymbol$k('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$8] = function () {
    return this;
  };
  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$4 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$8] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var $$2t = _export;
var from = arrayFrom$1;
var checkCorrectnessOfIteration$3 = checkCorrectnessOfIteration$4;

var INCORRECT_ITERATION = !checkCorrectnessOfIteration$3(function (iterable) {
  // eslint-disable-next-line es-x/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$$2t({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});

var $$2s = _export;
var $includes$1 = arrayIncludes.includes;
var fails$_ = fails$1i;
var addToUnscopables$3 = addToUnscopables$9;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$_(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$2s({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes$1(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$3('includes');

/* eslint-disable es-x/no-array-prototype-indexof -- required for testing */
var $$2r = _export;
var uncurryThis$W = functionUncurryThis;
var $IndexOf = arrayIncludes.indexOf;
var arrayMethodIsStrict$6 = arrayMethodIsStrict$9;

var un$IndexOf = uncurryThis$W([].indexOf);

var NEGATIVE_ZERO$1 = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
var STRICT_METHOD$6 = arrayMethodIsStrict$6('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$$2r({ target: 'Array', proto: true, forced: NEGATIVE_ZERO$1 || !STRICT_METHOD$6 }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO$1
      // convert -0 to +0
      ? un$IndexOf(this, searchElement, fromIndex) || 0
      : $IndexOf(this, searchElement, fromIndex);
  }
});

var $$2q = _export;
var isArray$2 = isArray$7;

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$$2q({ target: 'Array', stat: true }, {
  isArray: isArray$2
});

var fails$Z = fails$1i;
var isCallable$g = isCallable$y;
var getPrototypeOf$8 = objectGetPrototypeOf$1;
var defineBuiltIn$i = defineBuiltIn$n;
var wellKnownSymbol$j = wellKnownSymbol$z;

var ITERATOR$7 = wellKnownSymbol$j('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es-x/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$8(getPrototypeOf$8(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$Z(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$7].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$g(IteratorPrototype$2[ITERATOR$7])) {
  defineBuiltIn$i(IteratorPrototype$2, ITERATOR$7, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$7 = objectCreate;
var createPropertyDescriptor$5 = createPropertyDescriptor$c;
var setToStringTag$a = setToStringTag$d;
var Iterators$2 = iterators;

var returnThis$1 = function () { return this; };

var createIteratorConstructor$3 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$7(IteratorPrototype$1, { next: createPropertyDescriptor$5(+!ENUMERABLE_NEXT, next) });
  setToStringTag$a(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var $$2p = _export;
var call$p = functionCall;
var FunctionName$1 = functionName;
var isCallable$f = isCallable$y;
var createIteratorConstructor$2 = createIteratorConstructor$3;
var getPrototypeOf$7 = objectGetPrototypeOf$1;
var setPrototypeOf$5 = objectSetPrototypeOf$1;
var setToStringTag$9 = setToStringTag$d;
var createNonEnumerableProperty$8 = createNonEnumerableProperty$f;
var defineBuiltIn$h = defineBuiltIn$n;
var wellKnownSymbol$i = wellKnownSymbol$z;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$3 = FunctionName$1.PROPER;
var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$6 = wellKnownSymbol$i('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var defineIterator$3 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor$2(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$6]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$7(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf$7(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$5) {
          setPrototypeOf$5(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$f(CurrentIteratorPrototype[ITERATOR$6])) {
          defineBuiltIn$h(CurrentIteratorPrototype, ITERATOR$6, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$9(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$3 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME$1) {
      createNonEnumerableProperty$8(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$p(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$h(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$2p({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$6] !== defaultIterator) {
    defineBuiltIn$h(IterablePrototype, ITERATOR$6, defaultIterator, { name: DEFAULT });
  }
  Iterators$1[NAME] = defaultIterator;

  return methods;
};

var toIndexedObject$8 = toIndexedObject$f;
var addToUnscopables$2 = addToUnscopables$9;
var Iterators = iterators;
var InternalStateModule$a = internalState;
var defineProperty$b = objectDefineProperty.f;
var defineIterator$2 = defineIterator$3;
var DESCRIPTORS$r = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$a = InternalStateModule$a.set;
var getInternalState$8 = InternalStateModule$a.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
  setInternalState$a(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$8(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$8(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$2('keys');
addToUnscopables$2('values');
addToUnscopables$2('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$r && values.name !== 'values') try {
  defineProperty$b(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

var $$2o = _export;
var uncurryThis$V = functionUncurryThis;
var IndexedObject$2 = indexedObject;
var toIndexedObject$7 = toIndexedObject$f;
var arrayMethodIsStrict$5 = arrayMethodIsStrict$9;

var un$Join = uncurryThis$V([].join);

var ES3_STRINGS = IndexedObject$2 != Object;
var STRICT_METHOD$5 = arrayMethodIsStrict$5('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$$2o({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$5 }, {
  join: function join(separator) {
    return un$Join(toIndexedObject$7(this), separator === undefined ? ',' : separator);
  }
});

/* eslint-disable es-x/no-array-prototype-lastindexof -- safe */
var apply$7 = functionApply$1;
var toIndexedObject$6 = toIndexedObject$f;
var toIntegerOrInfinity$d = toIntegerOrInfinity$i;
var lengthOfArrayLike$a = lengthOfArrayLike$n;
var arrayMethodIsStrict$4 = arrayMethodIsStrict$9;

var min$6 = Math.min;
var $lastIndexOf$1 = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf$1 && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD$4 = arrayMethodIsStrict$4('lastIndexOf');
var FORCED$m = NEGATIVE_ZERO || !STRICT_METHOD$4;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
var arrayLastIndexOf = FORCED$m ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply$7($lastIndexOf$1, this, arguments) || 0;
  var O = toIndexedObject$6(this);
  var length = lengthOfArrayLike$a(O);
  var index = length - 1;
  if (arguments.length > 1) index = min$6(index, toIntegerOrInfinity$d(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf$1;

var $$2n = _export;
var lastIndexOf = arrayLastIndexOf;

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es-x/no-array-prototype-lastindexof -- required for testing
$$2n({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});

var $$2m = _export;
var $map$1 = arrayIteration.map;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;

var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$$2m({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var $$2l = _export;
var global$16 = global$1H;
var fails$Y = fails$1i;
var isConstructor$3 = isConstructor$6;
var createProperty$5 = createProperty$9;

var Array$4 = global$16.Array;

var ISNT_GENERIC = fails$Y(function () {
  function F() { /* empty */ }
  return !(Array$4.of.call(F) instanceof F);
});

// `Array.of` method
// https://tc39.es/ecma262/#sec-array.of
// WebKit Array.of isn't generic
$$2l({ target: 'Array', stat: true, forced: ISNT_GENERIC }, {
  of: function of(/* ...args */) {
    var index = 0;
    var argumentsLength = arguments.length;
    var result = new (isConstructor$3(this) ? this : Array$4)(argumentsLength);
    while (argumentsLength > index) createProperty$5(result, index, arguments[index++]);
    result.length = argumentsLength;
    return result;
  }
});

var global$15 = global$1H;
var aCallable$d = aCallable$i;
var toObject$e = toObject$q;
var IndexedObject$1 = indexedObject;
var lengthOfArrayLike$9 = lengthOfArrayLike$n;

var TypeError$i = global$15.TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$4 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable$d(callbackfn);
    var O = toObject$e(that);
    var self = IndexedObject$1(O);
    var length = lengthOfArrayLike$9(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError$i('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod$4(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod$4(true)
};

var classof$d = classofRaw$1;
var global$14 = global$1H;

var engineIsNode = classof$d(global$14.process) == 'process';

var $$2k = _export;
var $reduce$1 = arrayReduce.left;
var arrayMethodIsStrict$3 = arrayMethodIsStrict$9;
var CHROME_VERSION$1 = engineV8Version;
var IS_NODE$6 = engineIsNode;

var STRICT_METHOD$3 = arrayMethodIsStrict$3('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG$1 = !IS_NODE$6 && CHROME_VERSION$1 > 79 && CHROME_VERSION$1 < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$$2k({ target: 'Array', proto: true, forced: !STRICT_METHOD$3 || CHROME_BUG$1 }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce$1(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

var $$2j = _export;
var $reduceRight$1 = arrayReduce.right;
var arrayMethodIsStrict$2 = arrayMethodIsStrict$9;
var CHROME_VERSION = engineV8Version;
var IS_NODE$5 = engineIsNode;

var STRICT_METHOD$2 = arrayMethodIsStrict$2('reduceRight');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE$5 && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
$$2j({ target: 'Array', proto: true, forced: !STRICT_METHOD$2 || CHROME_BUG }, {
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduceRight$1(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var $$2i = _export;
var uncurryThis$U = functionUncurryThis;
var isArray$1 = isArray$7;

var un$Reverse = uncurryThis$U([].reverse);
var test$1 = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$$2i({ target: 'Array', proto: true, forced: String(test$1) === String(test$1.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray$1(this)) this.length = this.length;
    return un$Reverse(this);
  }
});

var $$2h = _export;
var global$13 = global$1H;
var isArray = isArray$7;
var isConstructor$2 = isConstructor$6;
var isObject$o = isObject$z;
var toAbsoluteIndex$4 = toAbsoluteIndex$9;
var lengthOfArrayLike$8 = lengthOfArrayLike$n;
var toIndexedObject$5 = toIndexedObject$f;
var createProperty$4 = createProperty$9;
var wellKnownSymbol$h = wellKnownSymbol$z;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
var un$Slice = arraySlice$b;

var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');

var SPECIES$4 = wellKnownSymbol$h('species');
var Array$3 = global$13.Array;
var max$4 = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$$2h({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
  slice: function slice(start, end) {
    var O = toIndexedObject$5(this);
    var length = lengthOfArrayLike$8(O);
    var k = toAbsoluteIndex$4(start, length);
    var fin = toAbsoluteIndex$4(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor$2(Constructor) && (Constructor === Array$3 || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject$o(Constructor)) {
        Constructor = Constructor[SPECIES$4];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array$3 || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array$3 : Constructor)(max$4(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$4(result, n, O[k]);
    result.length = n;
    return result;
  }
});

var $$2g = _export;
var $some$1 = arrayIteration.some;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$9;

var STRICT_METHOD$1 = arrayMethodIsStrict$1('some');

// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$$2g({ target: 'Array', proto: true, forced: !STRICT_METHOD$1 }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var arraySlice$9 = arraySliceSimple;

var floor$a = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor$a(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice$9(array, 0, middle), comparefn),
    mergeSort(arraySlice$9(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

var arraySort$1 = mergeSort;

var userAgent$6 = engineUserAgent;

var firefox = userAgent$6.match(/firefox\/(\d+)/i);

var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;

var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent$5 = engineUserAgent;

var webkit = userAgent$5.match(/AppleWebKit\/(\d+)\./);

var engineWebkitVersion = !!webkit && +webkit[1];

var $$2f = _export;
var uncurryThis$T = functionUncurryThis;
var aCallable$c = aCallable$i;
var toObject$d = toObject$q;
var lengthOfArrayLike$7 = lengthOfArrayLike$n;
var toString$r = toString$v;
var fails$X = fails$1i;
var internalSort$1 = arraySort$1;
var arrayMethodIsStrict = arrayMethodIsStrict$9;
var FF$1 = engineFfVersion;
var IE_OR_EDGE$1 = engineIsIeOrEdge;
var V8$1 = engineV8Version;
var WEBKIT$2 = engineWebkitVersion;

var test = [];
var un$Sort$1 = uncurryThis$T(test.sort);
var push$9 = uncurryThis$T(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails$X(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails$X(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT$1 = !fails$X(function () {
  // feature detection can be too slow, so check engines versions
  if (V8$1) return V8$1 < 70;
  if (FF$1 && FF$1 > 3) return;
  if (IE_OR_EDGE$1) return true;
  if (WEBKIT$2) return WEBKIT$2 < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED$l = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT$1;

var getSortCompare$1 = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString$r(x) > toString$r(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$$2f({ target: 'Array', proto: true, forced: FORCED$l }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable$c(comparefn);

    var array = toObject$d(this);

    if (STABLE_SORT$1) return comparefn === undefined ? un$Sort$1(array) : un$Sort$1(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike$7(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push$9(items, array[index]);
    }

    internalSort$1(items, getSortCompare$1(comparefn));

    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) delete array[index++];

    return array;
  }
});

var getBuiltIn$b = getBuiltIn$n;
var definePropertyModule$6 = objectDefineProperty;
var wellKnownSymbol$g = wellKnownSymbol$z;
var DESCRIPTORS$q = descriptors;

var SPECIES$3 = wellKnownSymbol$g('species');

var setSpecies$6 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$b(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule$6.f;

  if (DESCRIPTORS$q && Constructor && !Constructor[SPECIES$3]) {
    defineProperty(Constructor, SPECIES$3, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var setSpecies$5 = setSpecies$6;

// `Array[@@species]` getter
// https://tc39.es/ecma262/#sec-get-array-@@species
setSpecies$5('Array');

var $$2e = _export;
var global$12 = global$1H;
var toAbsoluteIndex$3 = toAbsoluteIndex$9;
var toIntegerOrInfinity$c = toIntegerOrInfinity$i;
var lengthOfArrayLike$6 = lengthOfArrayLike$n;
var toObject$c = toObject$q;
var arraySpeciesCreate = arraySpeciesCreate$5;
var createProperty$3 = createProperty$9;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var TypeError$h = global$12.TypeError;
var max$3 = Math.max;
var min$5 = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$$2e({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject$c(this);
    var len = lengthOfArrayLike$6(O);
    var actualStart = toAbsoluteIndex$3(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min$5(max$3(toIntegerOrInfinity$c(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError$h(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty$3(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables$1 = addToUnscopables$9;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('flat');

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = addToUnscopables$9;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');

// eslint-disable-next-line es-x/no-typed-arrays -- safe
var arrayBufferNative = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

var defineBuiltIn$g = defineBuiltIn$n;

var defineBuiltIns$5 = function (target, src, options) {
  for (var key in src) defineBuiltIn$g(target, key, src[key], options);
  return target;
};

var global$11 = global$1H;
var isPrototypeOf$5 = objectIsPrototypeOf;

var TypeError$g = global$11.TypeError;

var anInstance$a = function (it, Prototype) {
  if (isPrototypeOf$5(Prototype, it)) return it;
  throw TypeError$g('Incorrect invocation');
};

var global$10 = global$1H;
var toIntegerOrInfinity$b = toIntegerOrInfinity$i;
var toLength$b = toLength$d;

var RangeError$c = global$10.RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
var toIndex$2 = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity$b(it);
  var length = toLength$b(number);
  if (number !== length) throw RangeError$c('Wrong length or index');
  return length;
};

// IEEE754 conversions based on https://github.com/feross/ieee754
var global$$ = global$1H;

var Array$2 = global$$.Array;
var abs$8 = Math.abs;
var pow$5 = Math.pow;
var floor$9 = Math.floor;
var log$8 = Math.log;
var LN2$2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = Array$2(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow$5(2, -24) - pow$5(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs$8(number);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor$9(log$8(number) / LN2$2);
    c = pow$5(2, -exponent);
    if (number * c < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow$5(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow$5(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow$5(2, eBias - 1) * pow$5(2, mantissaLength);
      exponent = 0;
    }
  }
  while (mantissaLength >= 8) {
    buffer[index++] = mantissa & 255;
    mantissa /= 256;
    mantissaLength -= 8;
  }
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  while (exponentLength > 0) {
    buffer[index++] = exponent & 255;
    exponent /= 256;
    exponentLength -= 8;
  }
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  while (nBits > 0) {
    exponent = exponent * 256 + buffer[index--];
    nBits -= 8;
  }
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  while (nBits > 0) {
    mantissa = mantissa * 256 + buffer[index--];
    nBits -= 8;
  }
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow$5(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow$5(2, exponent - mantissaLength);
};

var ieee754 = {
  pack: pack,
  unpack: unpack
};

var global$_ = global$1H;
var uncurryThis$S = functionUncurryThis;
var DESCRIPTORS$p = descriptors;
var NATIVE_ARRAY_BUFFER$2 = arrayBufferNative;
var FunctionName = functionName;
var createNonEnumerableProperty$7 = createNonEnumerableProperty$f;
var defineBuiltIns$4 = defineBuiltIns$5;
var fails$W = fails$1i;
var anInstance$9 = anInstance$a;
var toIntegerOrInfinity$a = toIntegerOrInfinity$i;
var toLength$a = toLength$d;
var toIndex$1 = toIndex$2;
var IEEE754 = ieee754;
var getPrototypeOf$6 = objectGetPrototypeOf$1;
var setPrototypeOf$4 = objectSetPrototypeOf$1;
var getOwnPropertyNames$4 = objectGetOwnPropertyNames.f;
var defineProperty$a = objectDefineProperty.f;
var arrayFill = arrayFill$1;
var arraySlice$8 = arraySliceSimple;
var setToStringTag$8 = setToStringTag$d;
var InternalStateModule$9 = internalState;

var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var getInternalState$7 = InternalStateModule$9.get;
var setInternalState$9 = InternalStateModule$9.set;
var ARRAY_BUFFER$1 = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH$1 = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer$1 = global$_[ARRAY_BUFFER$1];
var $ArrayBuffer = NativeArrayBuffer$1;
var ArrayBufferPrototype$1 = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global$_[DATA_VIEW];
var DataViewPrototype$1 = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype$2 = Object.prototype;
var Array$1 = global$_.Array;
var RangeError$b = global$_.RangeError;
var fill = uncurryThis$S(arrayFill);
var reverse = uncurryThis$S([].reverse);

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter$1 = function (Constructor, key) {
  defineProperty$a(Constructor[PROTOTYPE], key, { get: function () { return getInternalState$7(this)[key]; } });
};

var get$1 = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex$1(index);
  var store = getInternalState$7(view);
  if (intIndex + count > store.byteLength) throw RangeError$b(WRONG_INDEX);
  var bytes = getInternalState$7(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice$8(bytes, start, start + count);
  return isLittleEndian ? pack : reverse(pack);
};

var set$2 = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex$1(index);
  var store = getInternalState$7(view);
  if (intIndex + count > store.byteLength) throw RangeError$b(WRONG_INDEX);
  var bytes = getInternalState$7(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER$2) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance$9(this, ArrayBufferPrototype$1);
    var byteLength = toIndex$1(length);
    setInternalState$9(this, {
      bytes: fill(Array$1(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS$p) this.byteLength = byteLength;
  };

  ArrayBufferPrototype$1 = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance$9(this, DataViewPrototype$1);
    anInstance$9(buffer, ArrayBufferPrototype$1);
    var bufferLength = getInternalState$7(buffer).byteLength;
    var offset = toIntegerOrInfinity$a(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError$b('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength$a(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError$b(WRONG_LENGTH$1);
    setInternalState$9(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS$p) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype$1 = $DataView[PROTOTYPE];

  if (DESCRIPTORS$p) {
    addGetter$1($ArrayBuffer, 'byteLength');
    addGetter$1($DataView, 'buffer');
    addGetter$1($DataView, 'byteLength');
    addGetter$1($DataView, 'byteOffset');
  }

  defineBuiltIns$4(DataViewPrototype$1, {
    getInt8: function getInt8(byteOffset) {
      return get$1(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get$1(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get$1(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set$2(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set$2(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set$2(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set$2(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set$2(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set$2(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set$2(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set$2(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME$2 && NativeArrayBuffer$1.name !== ARRAY_BUFFER$1;
  /* eslint-disable no-new -- required for testing */
  if (!fails$W(function () {
    NativeArrayBuffer$1(1);
  }) || !fails$W(function () {
    new NativeArrayBuffer$1(-1);
  }) || fails$W(function () {
    new NativeArrayBuffer$1();
    new NativeArrayBuffer$1(1.5);
    new NativeArrayBuffer$1(NaN);
    return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
  /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance$9(this, ArrayBufferPrototype$1);
      return new NativeArrayBuffer$1(toIndex$1(length));
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype$1;

    for (var keys$2 = getOwnPropertyNames$4(NativeArrayBuffer$1), j$1 = 0, key$3; keys$2.length > j$1;) {
      if (!((key$3 = keys$2[j$1++]) in $ArrayBuffer)) {
        createNonEnumerableProperty$7($ArrayBuffer, key$3, NativeArrayBuffer$1[key$3]);
      }
    }

    ArrayBufferPrototype$1.constructor = $ArrayBuffer;
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty$7(NativeArrayBuffer$1, 'name', ARRAY_BUFFER$1);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf$4 && getPrototypeOf$6(DataViewPrototype$1) !== ObjectPrototype$2) {
    setPrototypeOf$4(DataViewPrototype$1, ObjectPrototype$2);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = uncurryThis$S(DataViewPrototype$1.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns$4(DataViewPrototype$1, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag$8($ArrayBuffer, ARRAY_BUFFER$1);
setToStringTag$8($DataView, DATA_VIEW);

var arrayBuffer = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};

var $$2d = _export;
var global$Z = global$1H;
var arrayBufferModule = arrayBuffer;
var setSpecies$4 = setSpecies$6;

var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer$4 = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = global$Z[ARRAY_BUFFER];

// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
$$2d({ global: true, constructor: true, forced: NativeArrayBuffer !== ArrayBuffer$4 }, {
  ArrayBuffer: ArrayBuffer$4
});

setSpecies$4(ARRAY_BUFFER);

var NATIVE_ARRAY_BUFFER$1 = arrayBufferNative;
var DESCRIPTORS$o = descriptors;
var global$Y = global$1H;
var isCallable$e = isCallable$y;
var isObject$n = isObject$z;
var hasOwn$h = hasOwnProperty_1;
var classof$c = classof$j;
var tryToString$1 = tryToString$6;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$f;
var defineBuiltIn$f = defineBuiltIn$n;
var defineProperty$9 = objectDefineProperty.f;
var isPrototypeOf$4 = objectIsPrototypeOf;
var getPrototypeOf$5 = objectGetPrototypeOf$1;
var setPrototypeOf$3 = objectSetPrototypeOf$1;
var wellKnownSymbol$f = wellKnownSymbol$z;
var uid$2 = uid$6;

var Int8Array$4 = global$Y.Int8Array;
var Int8ArrayPrototype$1 = Int8Array$4 && Int8Array$4.prototype;
var Uint8ClampedArray$1 = global$Y.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
var TypedArray$1 = Int8Array$4 && getPrototypeOf$5(Int8Array$4);
var TypedArrayPrototype$2 = Int8ArrayPrototype$1 && getPrototypeOf$5(Int8ArrayPrototype$1);
var ObjectPrototype$1 = Object.prototype;
var TypeError$f = global$Y.TypeError;

var TO_STRING_TAG$1 = wellKnownSymbol$f('toStringTag');
var TYPED_ARRAY_TAG$1 = uid$2('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR$2 = uid$2('TYPED_ARRAY_CONSTRUCTOR');
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS$3 = NATIVE_ARRAY_BUFFER$1 && !!setPrototypeOf$3 && classof$c(global$Y.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME$1, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject$n(it)) return false;
  var klass = classof$c(it);
  return klass === 'DataView'
    || hasOwn$h(TypedArrayConstructorsList, klass)
    || hasOwn$h(BigIntArrayConstructorsList, klass);
};

var isTypedArray$1 = function (it) {
  if (!isObject$n(it)) return false;
  var klass = classof$c(it);
  return hasOwn$h(TypedArrayConstructorsList, klass)
    || hasOwn$h(BigIntArrayConstructorsList, klass);
};

var aTypedArray$n = function (it) {
  if (isTypedArray$1(it)) return it;
  throw TypeError$f('Target is not a typed array');
};

var aTypedArrayConstructor$4 = function (C) {
  if (isCallable$e(C) && (!setPrototypeOf$3 || isPrototypeOf$4(TypedArray$1, C))) return C;
  throw TypeError$f(tryToString$1(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod$o = function (KEY, property, forced, options) {
  if (!DESCRIPTORS$o) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global$Y[ARRAY];
    if (TypedArrayConstructor && hasOwn$h(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype$2[KEY] || forced) {
    defineBuiltIn$f(TypedArrayPrototype$2, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS$3 && Int8ArrayPrototype$1[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod$2 = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS$o) return;
  if (setPrototypeOf$3) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$Y[ARRAY];
      if (TypedArrayConstructor && hasOwn$h(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray$1[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn$f(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$3 && TypedArray$1[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global$Y[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn$f(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME$1 in TypedArrayConstructorsList) {
  Constructor = global$Y[NAME$1];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) createNonEnumerableProperty$6(Prototype, TYPED_ARRAY_CONSTRUCTOR$2, Constructor);
  else NATIVE_ARRAY_BUFFER_VIEWS$3 = false;
}

for (NAME$1 in BigIntArrayConstructorsList) {
  Constructor = global$Y[NAME$1];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) createNonEnumerableProperty$6(Prototype, TYPED_ARRAY_CONSTRUCTOR$2, Constructor);
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS$3 || !isCallable$e(TypedArray$1) || TypedArray$1 === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray$1 = function TypedArray() {
    throw TypeError$f('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS$3) for (NAME$1 in TypedArrayConstructorsList) {
    if (global$Y[NAME$1]) setPrototypeOf$3(global$Y[NAME$1], TypedArray$1);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS$3 || !TypedArrayPrototype$2 || TypedArrayPrototype$2 === ObjectPrototype$1) {
  TypedArrayPrototype$2 = TypedArray$1.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS$3) for (NAME$1 in TypedArrayConstructorsList) {
    if (global$Y[NAME$1]) setPrototypeOf$3(global$Y[NAME$1].prototype, TypedArrayPrototype$2);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS$3 && getPrototypeOf$5(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$2) {
  setPrototypeOf$3(Uint8ClampedArrayPrototype, TypedArrayPrototype$2);
}

if (DESCRIPTORS$o && !hasOwn$h(TypedArrayPrototype$2, TO_STRING_TAG$1)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineProperty$9(TypedArrayPrototype$2, TO_STRING_TAG$1, { get: function () {
    return isObject$n(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
  } });
  for (NAME$1 in TypedArrayConstructorsList) if (global$Y[NAME$1]) {
    createNonEnumerableProperty$6(global$Y[NAME$1], TYPED_ARRAY_TAG$1, NAME$1);
  }
}

var arrayBufferViewCore = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$3,
  TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR$2,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG$1,
  aTypedArray: aTypedArray$n,
  aTypedArrayConstructor: aTypedArrayConstructor$4,
  exportTypedArrayMethod: exportTypedArrayMethod$o,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod$2,
  isView: isView,
  isTypedArray: isTypedArray$1,
  TypedArray: TypedArray$1,
  TypedArrayPrototype: TypedArrayPrototype$2
};

var $$2c = _export;
var ArrayBufferViewCore$q = arrayBufferViewCore;

var NATIVE_ARRAY_BUFFER_VIEWS$2 = ArrayBufferViewCore$q.NATIVE_ARRAY_BUFFER_VIEWS;

// `ArrayBuffer.isView` method
// https://tc39.es/ecma262/#sec-arraybuffer.isview
$$2c({ target: 'ArrayBuffer', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS$2 }, {
  isView: ArrayBufferViewCore$q.isView
});

var global$X = global$1H;
var isConstructor$1 = isConstructor$6;
var tryToString = tryToString$6;

var TypeError$e = global$X.TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$3 = function (argument) {
  if (isConstructor$1(argument)) return argument;
  throw TypeError$e(tryToString(argument) + ' is not a constructor');
};

var anObject$q = anObject$C;
var aConstructor$2 = aConstructor$3;
var wellKnownSymbol$e = wellKnownSymbol$z;

var SPECIES$2 = wellKnownSymbol$e('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$6 = function (O, defaultConstructor) {
  var C = anObject$q(O).constructor;
  var S;
  return C === undefined || (S = anObject$q(C)[SPECIES$2]) == undefined ? defaultConstructor : aConstructor$2(S);
};

var $$2b = _export;
var uncurryThis$R = functionUncurryThis;
var fails$V = fails$1i;
var ArrayBufferModule$2 = arrayBuffer;
var anObject$p = anObject$C;
var toAbsoluteIndex$2 = toAbsoluteIndex$9;
var toLength$9 = toLength$d;
var speciesConstructor$5 = speciesConstructor$6;

var ArrayBuffer$3 = ArrayBufferModule$2.ArrayBuffer;
var DataView$2 = ArrayBufferModule$2.DataView;
var DataViewPrototype = DataView$2.prototype;
var un$ArrayBufferSlice = uncurryThis$R(ArrayBuffer$3.prototype.slice);
var getUint8 = uncurryThis$R(DataViewPrototype.getUint8);
var setUint8 = uncurryThis$R(DataViewPrototype.setUint8);

var INCORRECT_SLICE = fails$V(function () {
  return !new ArrayBuffer$3(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$$2b({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (un$ArrayBufferSlice && end === undefined) {
      return un$ArrayBufferSlice(anObject$p(this), start); // FF fix
    }
    var length = anObject$p(this).byteLength;
    var first = toAbsoluteIndex$2(start, length);
    var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
    var result = new (speciesConstructor$5(this, ArrayBuffer$3))(toLength$9(fin - first));
    var viewSource = new DataView$2(this);
    var viewTarget = new DataView$2(result);
    var index = 0;
    while (first < fin) {
      setUint8(viewTarget, index++, getUint8(viewSource, first++));
    } return result;
  }
});

var $$2a = _export;
var ArrayBufferModule$1 = arrayBuffer;
var NATIVE_ARRAY_BUFFER = arrayBufferNative;

// `DataView` constructor
// https://tc39.es/ecma262/#sec-dataview-constructor
$$2a({ global: true, constructor: true, forced: !NATIVE_ARRAY_BUFFER }, {
  DataView: ArrayBufferModule$1.DataView
});

var $$29 = _export;
var uncurryThis$Q = functionUncurryThis;
var fails$U = fails$1i;

var FORCED$k = fails$U(function () {
  return new Date(16e11).getYear() !== 120;
});

var getFullYear = uncurryThis$Q(Date.prototype.getFullYear);

// `Date.prototype.getYear` method
// https://tc39.es/ecma262/#sec-date.prototype.getyear
$$29({ target: 'Date', proto: true, forced: FORCED$k }, {
  getYear: function getYear() {
    return getFullYear(this) - 1900;
  }
});

// TODO: Remove from `core-js@4`
var $$28 = _export;
var global$W = global$1H;
var uncurryThis$P = functionUncurryThis;

var Date$2 = global$W.Date;
var getTime$4 = uncurryThis$P(Date$2.prototype.getTime);

// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
$$28({ target: 'Date', stat: true }, {
  now: function now() {
    return getTime$4(new Date$2());
  }
});

var $$27 = _export;
var uncurryThis$O = functionUncurryThis;
var toIntegerOrInfinity$9 = toIntegerOrInfinity$i;

var DatePrototype$3 = Date.prototype;
var getTime$3 = uncurryThis$O(DatePrototype$3.getTime);
var setFullYear = uncurryThis$O(DatePrototype$3.setFullYear);

// `Date.prototype.setYear` method
// https://tc39.es/ecma262/#sec-date.prototype.setyear
$$27({ target: 'Date', proto: true }, {
  setYear: function setYear(year) {
    // validate
    getTime$3(this);
    var yi = toIntegerOrInfinity$9(year);
    var yyyy = 0 <= yi && yi <= 99 ? yi + 1900 : yi;
    return setFullYear(this, yyyy);
  }
});

var $$26 = _export;

// `Date.prototype.toGMTString` method
// https://tc39.es/ecma262/#sec-date.prototype.togmtstring
$$26({ target: 'Date', proto: true }, {
  toGMTString: Date.prototype.toUTCString
});

var global$V = global$1H;
var toIntegerOrInfinity$8 = toIntegerOrInfinity$i;
var toString$q = toString$v;
var requireObjectCoercible$f = requireObjectCoercible$i;

var RangeError$a = global$V.RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
var stringRepeat = function repeat(count) {
  var str = toString$q(requireObjectCoercible$f(this));
  var result = '';
  var n = toIntegerOrInfinity$8(count);
  if (n < 0 || n == Infinity) throw RangeError$a('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis$N = functionUncurryThis;
var toLength$8 = toLength$d;
var toString$p = toString$v;
var $repeat$2 = stringRepeat;
var requireObjectCoercible$e = requireObjectCoercible$i;

var repeat$3 = uncurryThis$N($repeat$2);
var stringSlice$e = uncurryThis$N(''.slice);
var ceil$1 = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod$3 = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString$p(requireObjectCoercible$e($this));
    var intMaxLength = toLength$8(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString$p(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat$3(fillStr, ceil$1(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice$e(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

var stringPad = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod$3(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod$3(true)
};

var global$U = global$1H;
var uncurryThis$M = functionUncurryThis;
var fails$T = fails$1i;
var padStart = stringPad.start;

var RangeError$9 = global$U.RangeError;
var abs$7 = Math.abs;
var DatePrototype$2 = Date.prototype;
var n$DateToISOString = DatePrototype$2.toISOString;
var getTime$2 = uncurryThis$M(DatePrototype$2.getTime);
var getUTCDate = uncurryThis$M(DatePrototype$2.getUTCDate);
var getUTCFullYear = uncurryThis$M(DatePrototype$2.getUTCFullYear);
var getUTCHours = uncurryThis$M(DatePrototype$2.getUTCHours);
var getUTCMilliseconds = uncurryThis$M(DatePrototype$2.getUTCMilliseconds);
var getUTCMinutes = uncurryThis$M(DatePrototype$2.getUTCMinutes);
var getUTCMonth = uncurryThis$M(DatePrototype$2.getUTCMonth);
var getUTCSeconds = uncurryThis$M(DatePrototype$2.getUTCSeconds);

// `Date.prototype.toISOString` method implementation
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
var dateToIsoString = (fails$T(function () {
  return n$DateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails$T(function () {
  n$DateToISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime$2(this))) throw RangeError$9('Invalid time value');
  var date = this;
  var year = getUTCFullYear(date);
  var milliseconds = getUTCMilliseconds(date);
  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
  return sign + padStart(abs$7(year), sign ? 6 : 4, 0) +
    '-' + padStart(getUTCMonth(date) + 1, 2, 0) +
    '-' + padStart(getUTCDate(date), 2, 0) +
    'T' + padStart(getUTCHours(date), 2, 0) +
    ':' + padStart(getUTCMinutes(date), 2, 0) +
    ':' + padStart(getUTCSeconds(date), 2, 0) +
    '.' + padStart(milliseconds, 3, 0) +
    'Z';
} : n$DateToISOString;

var $$25 = _export;
var toISOString = dateToIsoString;

// `Date.prototype.toISOString` method
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
$$25({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== toISOString }, {
  toISOString: toISOString
});

var $$24 = _export;
var fails$S = fails$1i;
var toObject$b = toObject$q;
var toPrimitive$1 = toPrimitive$3;

var FORCED$j = fails$S(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
});

// `Date.prototype.toJSON` method
// https://tc39.es/ecma262/#sec-date.prototype.tojson
$$24({ target: 'Date', proto: true, arity: 1, forced: FORCED$j }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  toJSON: function toJSON(key) {
    var O = toObject$b(this);
    var pv = toPrimitive$1(O, 'number');
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

var global$T = global$1H;
var anObject$o = anObject$C;
var ordinaryToPrimitive = ordinaryToPrimitive$2;

var TypeError$d = global$T.TypeError;

// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
var dateToPrimitive$1 = function (hint) {
  anObject$o(this);
  if (hint === 'string' || hint === 'default') hint = 'string';
  else if (hint !== 'number') throw TypeError$d('Incorrect hint');
  return ordinaryToPrimitive(this, hint);
};

var hasOwn$g = hasOwnProperty_1;
var defineBuiltIn$e = defineBuiltIn$n;
var dateToPrimitive = dateToPrimitive$1;
var wellKnownSymbol$d = wellKnownSymbol$z;

var TO_PRIMITIVE = wellKnownSymbol$d('toPrimitive');
var DatePrototype$1 = Date.prototype;

// `Date.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
if (!hasOwn$g(DatePrototype$1, TO_PRIMITIVE)) {
  defineBuiltIn$e(DatePrototype$1, TO_PRIMITIVE, dateToPrimitive);
}

// TODO: Remove from `core-js@4`
var uncurryThis$L = functionUncurryThis;
var defineBuiltIn$d = defineBuiltIn$n;

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING$1 = 'toString';
var un$DateToString = uncurryThis$L(DatePrototype[TO_STRING$1]);
var getTime$1 = uncurryThis$L(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) {
  defineBuiltIn$d(DatePrototype, TO_STRING$1, function toString() {
    var value = getTime$1(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? un$DateToString(this) : INVALID_DATE;
  });
}

var $$23 = _export;
var uncurryThis$K = functionUncurryThis;
var toString$o = toString$v;

var charAt$d = uncurryThis$K(''.charAt);
var charCodeAt$4 = uncurryThis$K(''.charCodeAt);
var exec$8 = uncurryThis$K(/./.exec);
var numberToString$1 = uncurryThis$K(1.0.toString);
var toUpperCase = uncurryThis$K(''.toUpperCase);

var raw = /[\w*+\-./@]/;

var hex$1 = function (code, length) {
  var result = numberToString$1(code, 16);
  while (result.length < length) result = '0' + result;
  return result;
};

// `escape` method
// https://tc39.es/ecma262/#sec-escape-string
$$23({ global: true }, {
  escape: function escape(string) {
    var str = toString$o(string);
    var result = '';
    var length = str.length;
    var index = 0;
    var chr, code;
    while (index < length) {
      chr = charAt$d(str, index++);
      if (exec$8(raw, chr)) {
        result += chr;
      } else {
        code = charCodeAt$4(chr, 0);
        if (code < 256) {
          result += '%' + hex$1(code, 2);
        } else {
          result += '%u' + toUpperCase(hex$1(code, 4));
        }
      }
    } return result;
  }
});

var global$S = global$1H;
var uncurryThis$J = functionUncurryThis;
var aCallable$b = aCallable$i;
var isObject$m = isObject$z;
var hasOwn$f = hasOwnProperty_1;
var arraySlice$7 = arraySlice$b;
var NATIVE_BIND = functionBindNative;

var Function$3 = global$S.Function;
var concat$2 = uncurryThis$J([].concat);
var join$6 = uncurryThis$J([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn$f(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = Function$3('C,a', 'return new C(' + join$6(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
var functionBind = NATIVE_BIND ? Function$3.bind : function bind(that /* , ...args */) {
  var F = aCallable$b(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice$7(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat$2(partArgs, arraySlice$7(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject$m(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};

// TODO: Remove from `core-js@4`
var $$22 = _export;
var bind$8 = functionBind;

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$$22({ target: 'Function', proto: true, forced: Function.bind !== bind$8 }, {
  bind: bind$8
});

var isCallable$d = isCallable$y;
var isObject$l = isObject$z;
var definePropertyModule$5 = objectDefineProperty;
var getPrototypeOf$4 = objectGetPrototypeOf$1;
var wellKnownSymbol$c = wellKnownSymbol$z;
var makeBuiltIn$1 = makeBuiltIn$4.exports;

var HAS_INSTANCE = wellKnownSymbol$c('hasInstance');
var FunctionPrototype$1 = Function.prototype;

// `Function.prototype[@@hasInstance]` method
// https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance
if (!(HAS_INSTANCE in FunctionPrototype$1)) {
  definePropertyModule$5.f(FunctionPrototype$1, HAS_INSTANCE, { value: makeBuiltIn$1(function (O) {
    if (!isCallable$d(this) || !isObject$l(O)) return false;
    var P = this.prototype;
    if (!isObject$l(P)) return O instanceof this;
    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
    while (O = getPrototypeOf$4(O)) if (P === O) return true;
    return false;
  }, HAS_INSTANCE) });
}

var DESCRIPTORS$n = descriptors;
var FUNCTION_NAME_EXISTS = functionName.EXISTS;
var uncurryThis$I = functionUncurryThis;
var defineProperty$8 = objectDefineProperty.f;

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis$I(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec$4 = uncurryThis$I(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS$n && !FUNCTION_NAME_EXISTS) {
  defineProperty$8(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec$4(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}

var $$21 = _export;
var global$R = global$1H;

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$$21({ global: true }, {
  globalThis: global$R
});

var global$Q = global$1H;
var setToStringTag$7 = setToStringTag$d;

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag$7(global$Q.JSON, 'JSON', true);

var internalMetadata = {exports: {}};

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails$R = fails$1i;

var arrayBufferNonExtensible = fails$R(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es-x/no-object-isextensible, es-x/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});

var fails$Q = fails$1i;
var isObject$k = isObject$z;
var classof$b = classofRaw$1;
var ARRAY_BUFFER_NON_EXTENSIBLE$2 = arrayBufferNonExtensible;

// eslint-disable-next-line es-x/no-object-isextensible -- safe
var $isExtensible$2 = Object.isExtensible;
var FAILS_ON_PRIMITIVES$9 = fails$Q(function () { $isExtensible$2(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
var objectIsExtensible = (FAILS_ON_PRIMITIVES$9 || ARRAY_BUFFER_NON_EXTENSIBLE$2) ? function isExtensible(it) {
  if (!isObject$k(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE$2 && classof$b(it) == 'ArrayBuffer') return false;
  return $isExtensible$2 ? $isExtensible$2(it) : true;
} : $isExtensible$2;

var fails$P = fails$1i;

var freezing = !fails$P(function () {
  // eslint-disable-next-line es-x/no-object-isextensible, es-x/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});

var $$20 = _export;
var uncurryThis$H = functionUncurryThis;
var hiddenKeys = hiddenKeys$6;
var isObject$j = isObject$z;
var hasOwn$e = hasOwnProperty_1;
var defineProperty$7 = objectDefineProperty.f;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
var isExtensible$1 = objectIsExtensible;
var uid$1 = uid$6;
var FREEZING$4 = freezing;

var REQUIRED = false;
var METADATA = uid$1('meta');
var id$1 = 0;

var setMetadata = function (it) {
  defineProperty$7(it, METADATA, { value: {
    objectID: 'O' + id$1++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey$1 = function (it, create) {
  // return a primitive with prefix
  if (!isObject$j(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn$e(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible$1(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData$1 = function (it, create) {
  if (!hasOwn$e(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible$1(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze$3 = function (it) {
  if (FREEZING$4 && REQUIRED && isExtensible$1(it) && !hasOwn$e(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis$H([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $$20({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = internalMetadata.exports = {
  enable: enable,
  fastKey: fastKey$1,
  getWeakData: getWeakData$1,
  onFreeze: onFreeze$3
};

hiddenKeys[METADATA] = true;

var $$1$ = _export;
var global$P = global$1H;
var uncurryThis$G = functionUncurryThis;
var isForced$3 = isForced_1;
var defineBuiltIn$c = defineBuiltIn$n;
var InternalMetadataModule$1 = internalMetadata.exports;
var iterate$8 = iterate$a;
var anInstance$8 = anInstance$a;
var isCallable$c = isCallable$y;
var isObject$i = isObject$z;
var fails$O = fails$1i;
var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$4;
var setToStringTag$6 = setToStringTag$d;
var inheritIfRequired$4 = inheritIfRequired$6;

var collection$4 = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global$P[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis$G(NativePrototype[KEY]);
    defineBuiltIn$c(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject$i(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject$i(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject$i(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced$3(
    CONSTRUCTOR_NAME,
    !isCallable$c(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$O(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule$1.enable();
  } else if (isForced$3(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails$O(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration$2(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails$O(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance$8(dummy, NativePrototype);
        var that = inheritIfRequired$4(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate$8(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $$1$({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag$6(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};

var defineProperty$6 = objectDefineProperty.f;
var create$6 = objectCreate;
var defineBuiltIns$3 = defineBuiltIns$5;
var bind$7 = functionBindContext;
var anInstance$7 = anInstance$a;
var iterate$7 = iterate$a;
var defineIterator$1 = defineIterator$3;
var setSpecies$3 = setSpecies$6;
var DESCRIPTORS$m = descriptors;
var fastKey = internalMetadata.exports.fastKey;
var InternalStateModule$8 = internalState;

var setInternalState$8 = InternalStateModule$8.set;
var internalStateGetterFor$1 = InternalStateModule$8.getterFor;

var collectionStrong$2 = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance$7(that, Prototype);
      setInternalState$8(that, {
        type: CONSTRUCTOR_NAME,
        index: create$6(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS$m) that.size = 0;
      if (iterable != undefined) iterate$7(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS$m) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    defineBuiltIns$3(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS$m) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS$m) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind$7(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns$3(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS$m) defineProperty$6(Prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator$1(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState$8(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies$3(CONSTRUCTOR_NAME);
  }
};

var collection$3 = collection$4;
var collectionStrong$1 = collectionStrong$2;

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection$3('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong$1);

var log$7 = Math.log;

// `Math.log1p` method implementation
// https://tc39.es/ecma262/#sec-math.log1p
// eslint-disable-next-line es-x/no-math-log1p -- safe
var mathLog1p = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log$7(1 + x);
};

var $$1_ = _export;
var log1p$1 = mathLog1p;

// eslint-disable-next-line es-x/no-math-acosh -- required for testing
var $acosh = Math.acosh;
var log$6 = Math.log;
var sqrt$2 = Math.sqrt;
var LN2$1 = Math.LN2;

var FORCED$i = !$acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  || Math.floor($acosh(Number.MAX_VALUE)) != 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  || $acosh(Infinity) != Infinity;

// `Math.acosh` method
// https://tc39.es/ecma262/#sec-math.acosh
$$1_({ target: 'Math', stat: true, forced: FORCED$i }, {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? log$6(x) + LN2$1
      : log1p$1(x - 1 + sqrt$2(x - 1) * sqrt$2(x + 1));
  }
});

var $$1Z = _export;

// eslint-disable-next-line es-x/no-math-asinh -- required for testing
var $asinh = Math.asinh;
var log$5 = Math.log;
var sqrt$1 = Math.sqrt;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log$5(x + sqrt$1(x * x + 1));
}

// `Math.asinh` method
// https://tc39.es/ecma262/#sec-math.asinh
// Tor Browser bug: Math.asinh(0) -> -0
$$1Z({ target: 'Math', stat: true, forced: !($asinh && 1 / $asinh(0) > 0) }, {
  asinh: asinh
});

var $$1Y = _export;

// eslint-disable-next-line es-x/no-math-atanh -- required for testing
var $atanh = Math.atanh;
var log$4 = Math.log;

// `Math.atanh` method
// https://tc39.es/ecma262/#sec-math.atanh
// Tor Browser bug: Math.atanh(-0) -> 0
$$1Y({ target: 'Math', stat: true, forced: !($atanh && 1 / $atanh(-0) < 0) }, {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : log$4((1 + x) / (1 - x)) / 2;
  }
});

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es-x/no-math-sign -- safe
var mathSign = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

var $$1X = _export;
var sign$2 = mathSign;

var abs$6 = Math.abs;
var pow$4 = Math.pow;

// `Math.cbrt` method
// https://tc39.es/ecma262/#sec-math.cbrt
$$1X({ target: 'Math', stat: true }, {
  cbrt: function cbrt(x) {
    return sign$2(x = +x) * pow$4(abs$6(x), 1 / 3);
  }
});

var $$1W = _export;

var floor$8 = Math.floor;
var log$3 = Math.log;
var LOG2E = Math.LOG2E;

// `Math.clz32` method
// https://tc39.es/ecma262/#sec-math.clz32
$$1W({ target: 'Math', stat: true }, {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - floor$8(log$3(x + 0.5) * LOG2E) : 32;
  }
});

// eslint-disable-next-line es-x/no-math-expm1 -- safe
var $expm1 = Math.expm1;
var exp$2 = Math.exp;

// `Math.expm1` method implementation
// https://tc39.es/ecma262/#sec-math.expm1
var mathExpm1 = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp$2(x) - 1;
} : $expm1;

var $$1V = _export;
var expm1$3 = mathExpm1;

// eslint-disable-next-line es-x/no-math-cosh -- required for testing
var $cosh = Math.cosh;
var abs$5 = Math.abs;
var E$1 = Math.E;

// `Math.cosh` method
// https://tc39.es/ecma262/#sec-math.cosh
$$1V({ target: 'Math', stat: true, forced: !$cosh || $cosh(710) === Infinity }, {
  cosh: function cosh(x) {
    var t = expm1$3(abs$5(x) - 1) + 1;
    return (t + 1 / (t * E$1 * E$1)) * (E$1 / 2);
  }
});

var $$1U = _export;
var expm1$2 = mathExpm1;

// `Math.expm1` method
// https://tc39.es/ecma262/#sec-math.expm1
// eslint-disable-next-line es-x/no-math-expm1 -- required for testing
$$1U({ target: 'Math', stat: true, forced: expm1$2 != Math.expm1 }, { expm1: expm1$2 });

var sign$1 = mathSign;

var abs$4 = Math.abs;
var pow$3 = Math.pow;
var EPSILON = pow$3(2, -52);
var EPSILON32 = pow$3(2, -23);
var MAX32 = pow$3(2, 127) * (2 - EPSILON32);
var MIN32 = pow$3(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
// eslint-disable-next-line es-x/no-math-fround -- safe
var mathFround = Math.fround || function fround(x) {
  var $abs = abs$4(x);
  var $sign = sign$1(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

var $$1T = _export;
var fround = mathFround;

// `Math.fround` method
// https://tc39.es/ecma262/#sec-math.fround
$$1T({ target: 'Math', stat: true }, { fround: fround });

var $$1S = _export;

// eslint-disable-next-line es-x/no-math-hypot -- required for testing
var $hypot = Math.hypot;
var abs$3 = Math.abs;
var sqrt = Math.sqrt;

// Chrome 77 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=9546
var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity;

// `Math.hypot` method
// https://tc39.es/ecma262/#sec-math.hypot
$$1S({ target: 'Math', stat: true, arity: 2, forced: BUGGY }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  hypot: function hypot(value1, value2) {
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs$3(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * sqrt(sum);
  }
});

var $$1R = _export;
var fails$N = fails$1i;

// eslint-disable-next-line es-x/no-math-imul -- required for testing
var $imul = Math.imul;

var FORCED$h = fails$N(function () {
  return $imul(0xFFFFFFFF, 5) != -5 || $imul.length != 2;
});

// `Math.imul` method
// https://tc39.es/ecma262/#sec-math.imul
// some WebKit versions fails with big numbers, some has wrong arity
$$1R({ target: 'Math', stat: true, forced: FORCED$h }, {
  imul: function imul(x, y) {
    var UINT16 = 0xFFFF;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

var log$2 = Math.log;
var LOG10E = Math.LOG10E;

// eslint-disable-next-line es-x/no-math-log10 -- safe
var mathLog10 = Math.log10 || function log10(x) {
  return log$2(x) * LOG10E;
};

var $$1Q = _export;
var log10$1 = mathLog10;

// `Math.log10` method
// https://tc39.es/ecma262/#sec-math.log10
$$1Q({ target: 'Math', stat: true }, {
  log10: log10$1
});

var $$1P = _export;
var log1p = mathLog1p;

// `Math.log1p` method
// https://tc39.es/ecma262/#sec-math.log1p
$$1P({ target: 'Math', stat: true }, { log1p: log1p });

var $$1O = _export;

var log$1 = Math.log;
var LN2 = Math.LN2;

// `Math.log2` method
// https://tc39.es/ecma262/#sec-math.log2
$$1O({ target: 'Math', stat: true }, {
  log2: function log2(x) {
    return log$1(x) / LN2;
  }
});

var $$1N = _export;
var sign = mathSign;

// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
$$1N({ target: 'Math', stat: true }, {
  sign: sign
});

var $$1M = _export;
var fails$M = fails$1i;
var expm1$1 = mathExpm1;

var abs$2 = Math.abs;
var exp$1 = Math.exp;
var E = Math.E;

var FORCED$g = fails$M(function () {
  // eslint-disable-next-line es-x/no-math-sinh -- required for testing
  return Math.sinh(-2e-17) != -2e-17;
});

// `Math.sinh` method
// https://tc39.es/ecma262/#sec-math.sinh
// V8 near Chromium 38 has a problem with very small numbers
$$1M({ target: 'Math', stat: true, forced: FORCED$g }, {
  sinh: function sinh(x) {
    return abs$2(x = +x) < 1 ? (expm1$1(x) - expm1$1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (E / 2);
  }
});

var $$1L = _export;
var expm1 = mathExpm1;

var exp = Math.exp;

// `Math.tanh` method
// https://tc39.es/ecma262/#sec-math.tanh
$$1L({ target: 'Math', stat: true }, {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

var setToStringTag$5 = setToStringTag$d;

// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag$5(Math, 'Math', true);

var $$1K = _export;

var ceil = Math.ceil;
var floor$7 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
$$1K({ target: 'Math', stat: true }, {
  trunc: function trunc(it) {
    return (it > 0 ? floor$7 : ceil)(it);
  }
});

var uncurryThis$F = functionUncurryThis;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
var thisNumberValue$4 = uncurryThis$F(1.0.valueOf);

// a string of all valid unicode whitespaces
var whitespaces$5 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$E = functionUncurryThis;
var requireObjectCoercible$d = requireObjectCoercible$i;
var toString$n = toString$v;
var whitespaces$4 = whitespaces$5;

var replace$8 = uncurryThis$E(''.replace);
var whitespace = '[' + whitespaces$4 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$2 = function (TYPE) {
  return function ($this) {
    var string = toString$n(requireObjectCoercible$d($this));
    if (TYPE & 1) string = replace$8(string, ltrim, '');
    if (TYPE & 2) string = replace$8(string, rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$2(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$2(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$2(3)
};

var DESCRIPTORS$l = descriptors;
var global$O = global$1H;
var uncurryThis$D = functionUncurryThis;
var isForced$2 = isForced_1;
var defineBuiltIn$b = defineBuiltIn$n;
var hasOwn$d = hasOwnProperty_1;
var inheritIfRequired$3 = inheritIfRequired$6;
var isPrototypeOf$3 = objectIsPrototypeOf;
var isSymbol$2 = isSymbol$7;
var toPrimitive = toPrimitive$3;
var fails$L = fails$1i;
var getOwnPropertyNames$3 = objectGetOwnPropertyNames.f;
var getOwnPropertyDescriptor$7 = objectGetOwnPropertyDescriptor.f;
var defineProperty$5 = objectDefineProperty.f;
var thisNumberValue$3 = thisNumberValue$4;
var trim$2 = stringTrim.trim;

var NUMBER = 'Number';
var NativeNumber = global$O[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError$c = global$O.TypeError;
var arraySlice$6 = uncurryThis$D(''.slice);
var charCodeAt$3 = uncurryThis$D(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol$2(it)) throw TypeError$c('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim$2(it);
    first = charCodeAt$3(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt$3(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt$3(it, 1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = arraySlice$6(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt$3(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced$2(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return isPrototypeOf$3(NumberPrototype, dummy) && fails$L(function () { thisNumberValue$3(dummy); })
      ? inheritIfRequired$3(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys$1 = DESCRIPTORS$l ? getOwnPropertyNames$3(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key$2; keys$1.length > j; j++) {
    if (hasOwn$d(NativeNumber, key$2 = keys$1[j]) && !hasOwn$d(NumberWrapper, key$2)) {
      defineProperty$5(NumberWrapper, key$2, getOwnPropertyDescriptor$7(NativeNumber, key$2));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  defineBuiltIn$b(global$O, NUMBER, NumberWrapper, { constructor: true });
}

var $$1J = _export;

// `Number.EPSILON` constant
// https://tc39.es/ecma262/#sec-number.epsilon
$$1J({ target: 'Number', stat: true }, {
  EPSILON: Math.pow(2, -52)
});

var global$N = global$1H;

var globalIsFinite = global$N.isFinite;

// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
// eslint-disable-next-line es-x/no-number-isfinite -- safe
var numberIsFinite$1 = Number.isFinite || function isFinite(it) {
  return typeof it == 'number' && globalIsFinite(it);
};

var $$1I = _export;
var numberIsFinite = numberIsFinite$1;

// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
$$1I({ target: 'Number', stat: true }, { isFinite: numberIsFinite });

var isObject$h = isObject$z;

var floor$6 = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es-x/no-number-isinteger -- safe
var isIntegralNumber$3 = Number.isInteger || function isInteger(it) {
  return !isObject$h(it) && isFinite(it) && floor$6(it) === it;
};

var $$1H = _export;
var isIntegralNumber$2 = isIntegralNumber$3;

// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$$1H({ target: 'Number', stat: true }, {
  isInteger: isIntegralNumber$2
});

var $$1G = _export;

// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
$$1G({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return number != number;
  }
});

var $$1F = _export;
var isIntegralNumber$1 = isIntegralNumber$3;

var abs$1 = Math.abs;

// `Number.isSafeInteger` method
// https://tc39.es/ecma262/#sec-number.issafeinteger
$$1F({ target: 'Number', stat: true }, {
  isSafeInteger: function isSafeInteger(number) {
    return isIntegralNumber$1(number) && abs$1(number) <= 0x1FFFFFFFFFFFFF;
  }
});

var $$1E = _export;

// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.max_safe_integer
$$1E({ target: 'Number', stat: true }, {
  MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
});

var $$1D = _export;

// `Number.MIN_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.min_safe_integer
$$1D({ target: 'Number', stat: true }, {
  MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
});

var global$M = global$1H;
var fails$K = fails$1i;
var uncurryThis$C = functionUncurryThis;
var toString$m = toString$v;
var trim$1 = stringTrim.trim;
var whitespaces$3 = whitespaces$5;

var charAt$c = uncurryThis$C(''.charAt);
var n$ParseFloat = global$M.parseFloat;
var Symbol$2 = global$M.Symbol;
var ITERATOR$5 = Symbol$2 && Symbol$2.iterator;
var FORCED$f = 1 / n$ParseFloat(whitespaces$3 + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR$5 && !fails$K(function () { n$ParseFloat(Object(ITERATOR$5)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
var numberParseFloat = FORCED$f ? function parseFloat(string) {
  var trimmedString = trim$1(toString$m(string));
  var result = n$ParseFloat(trimmedString);
  return result === 0 && charAt$c(trimmedString, 0) == '-' ? -0 : result;
} : n$ParseFloat;

var $$1C = _export;
var parseFloat$1 = numberParseFloat;

// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es-x/no-number-parsefloat -- required for testing
$$1C({ target: 'Number', stat: true, forced: Number.parseFloat != parseFloat$1 }, {
  parseFloat: parseFloat$1
});

var global$L = global$1H;
var fails$J = fails$1i;
var uncurryThis$B = functionUncurryThis;
var toString$l = toString$v;
var trim = stringTrim.trim;
var whitespaces$2 = whitespaces$5;

var $parseInt$1 = global$L.parseInt;
var Symbol$1 = global$L.Symbol;
var ITERATOR$4 = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec$7 = uncurryThis$B(hex.exec);
var FORCED$e = $parseInt$1(whitespaces$2 + '08') !== 8 || $parseInt$1(whitespaces$2 + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR$4 && !fails$J(function () { $parseInt$1(Object(ITERATOR$4)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED$e ? function parseInt(string, radix) {
  var S = trim(toString$l(string));
  return $parseInt$1(S, (radix >>> 0) || (exec$7(hex, S) ? 16 : 10));
} : $parseInt$1;

var $$1B = _export;
var parseInt$2 = numberParseInt;

// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es-x/no-number-parseint -- required for testing
$$1B({ target: 'Number', stat: true, forced: Number.parseInt != parseInt$2 }, {
  parseInt: parseInt$2
});

var $$1A = _export;
var global$K = global$1H;
var uncurryThis$A = functionUncurryThis;
var toIntegerOrInfinity$7 = toIntegerOrInfinity$i;
var thisNumberValue$2 = thisNumberValue$4;
var $repeat$1 = stringRepeat;
var log10 = mathLog10;
var fails$I = fails$1i;

var RangeError$8 = global$K.RangeError;
var String$3 = global$K.String;
var isFinite$1 = global$K.isFinite;
var abs = Math.abs;
var floor$5 = Math.floor;
var pow$2 = Math.pow;
var round$1 = Math.round;
var un$ToExponential = uncurryThis$A(1.0.toExponential);
var repeat$2 = uncurryThis$A($repeat$1);
var stringSlice$d = uncurryThis$A(''.slice);

// Edge 17-
var ROUNDS_PROPERLY = un$ToExponential(-6.9e-11, 4) === '-6.9000e-11'
  // IE11- && Edge 14-
  && un$ToExponential(1.255, 2) === '1.25e+0'
  // FF86-, V8 ~ Chrome 49-50
  && un$ToExponential(12345, 3) === '1.235e+4'
  // FF86-, V8 ~ Chrome 49-50
  && un$ToExponential(25, 0) === '3e+1';

// IE8-
var THROWS_ON_INFINITY_FRACTION = fails$I(function () {
  un$ToExponential(1, Infinity);
}) && fails$I(function () {
  un$ToExponential(1, -Infinity);
});

// Safari <11 && FF <50
var PROPER_NON_FINITE_THIS_CHECK = !fails$I(function () {
  un$ToExponential(Infinity, Infinity);
}) && !fails$I(function () {
  un$ToExponential(NaN, Infinity);
});

var FORCED$d = !ROUNDS_PROPERLY || !THROWS_ON_INFINITY_FRACTION || !PROPER_NON_FINITE_THIS_CHECK;

// `Number.prototype.toExponential` method
// https://tc39.es/ecma262/#sec-number.prototype.toexponential
$$1A({ target: 'Number', proto: true, forced: FORCED$d }, {
  toExponential: function toExponential(fractionDigits) {
    var x = thisNumberValue$2(this);
    if (fractionDigits === undefined) return un$ToExponential(x);
    var f = toIntegerOrInfinity$7(fractionDigits);
    if (!isFinite$1(x)) return String$3(x);
    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
    if (f < 0 || f > 20) throw RangeError$8('Incorrect fraction digits');
    if (ROUNDS_PROPERLY) return un$ToExponential(x, f);
    var s = '';
    var m = '';
    var e = 0;
    var c = '';
    var d = '';
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x === 0) {
      e = 0;
      m = repeat$2('0', f + 1);
    } else {
      // this block is based on https://gist.github.com/SheetJSDev/1100ad56b9f856c95299ed0e068eea08
      // TODO: improve accuracy with big fraction digits
      var l = log10(x);
      e = floor$5(l);
      var n = 0;
      var w = pow$2(10, e - f);
      n = round$1(x / w);
      if (2 * x >= (2 * n + 1) * w) {
        n += 1;
      }
      if (n >= pow$2(10, f + 1)) {
        n /= 10;
        e += 1;
      }
      m = String$3(n);
    }
    if (f !== 0) {
      m = stringSlice$d(m, 0, 1) + '.' + stringSlice$d(m, 1);
    }
    if (e === 0) {
      c = '+';
      d = '0';
    } else {
      c = e > 0 ? '+' : '-';
      d = String$3(abs(e));
    }
    m += 'e' + c + d;
    return s + m;
  }
});

var $$1z = _export;
var global$J = global$1H;
var uncurryThis$z = functionUncurryThis;
var toIntegerOrInfinity$6 = toIntegerOrInfinity$i;
var thisNumberValue$1 = thisNumberValue$4;
var $repeat = stringRepeat;
var fails$H = fails$1i;

var RangeError$7 = global$J.RangeError;
var String$2 = global$J.String;
var floor$4 = Math.floor;
var repeat$1 = uncurryThis$z($repeat);
var stringSlice$c = uncurryThis$z(''.slice);
var un$ToFixed = uncurryThis$z(1.0.toFixed);

var pow$1 = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow$1(x, n - 1, acc * x) : pow$1(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor$4(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor$4(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String$2(data[index]);
      s = s === '' ? t : s + repeat$1('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED$c = fails$H(function () {
  return un$ToFixed(0.00008, 3) !== '0.000' ||
    un$ToFixed(0.9, 0) !== '1' ||
    un$ToFixed(1.255, 2) !== '1.25' ||
    un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails$H(function () {
  // V8 ~ Android 4.3-
  un$ToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$$1z({ target: 'Number', proto: true, forced: FORCED$c }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue$1(this);
    var fractDigits = toIntegerOrInfinity$6(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
    if (fractDigits < 0 || fractDigits > 20) throw RangeError$7('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String$2(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow$1(2, 69, 1)) - 69;
      z = e < 0 ? number * pow$1(2, -e, 1) : number / pow$1(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow$1(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat$1('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat$1('0', fractDigits - k) + result
        : stringSlice$c(result, 0, k - fractDigits) + '.' + stringSlice$c(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});

var $$1y = _export;
var uncurryThis$y = functionUncurryThis;
var fails$G = fails$1i;
var thisNumberValue = thisNumberValue$4;

var un$ToPrecision = uncurryThis$y(1.0.toPrecision);

var FORCED$b = fails$G(function () {
  // IE7-
  return un$ToPrecision(1, undefined) !== '1';
}) || !fails$G(function () {
  // V8 ~ Android 4.3-
  un$ToPrecision({});
});

// `Number.prototype.toPrecision` method
// https://tc39.es/ecma262/#sec-number.prototype.toprecision
$$1y({ target: 'Number', proto: true, forced: FORCED$b }, {
  toPrecision: function toPrecision(precision) {
    return precision === undefined
      ? un$ToPrecision(thisNumberValue(this))
      : un$ToPrecision(thisNumberValue(this), precision);
  }
});

var DESCRIPTORS$k = descriptors;
var uncurryThis$x = functionUncurryThis;
var call$o = functionCall;
var fails$F = fails$1i;
var objectKeys$2 = objectKeys$5;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$a = toObject$q;
var IndexedObject = indexedObject;

// eslint-disable-next-line es-x/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
var defineProperty$4 = Object.defineProperty;
var concat$1 = uncurryThis$x([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign$1 = !$assign || fails$F(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$k && $assign({ b: 1 }, $assign(defineProperty$4({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$4(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es-x/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys$2($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$a(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys$2(S), getOwnPropertySymbols(S)) : objectKeys$2(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$k || call$o(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$1x = _export;
var assign$2 = objectAssign$1;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es-x/no-object-assign -- required for testing
$$1x({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$2 }, {
  assign: assign$2
});

// TODO: Remove from `core-js@4`
var $$1w = _export;
var DESCRIPTORS$j = descriptors;
var create$5 = objectCreate;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$$1w({ target: 'Object', stat: true, sham: !DESCRIPTORS$j }, {
  create: create$5
});

var global$I = global$1H;
var fails$E = fails$1i;
var WEBKIT$1 = engineWebkitVersion;

// Forced replacement object prototype accessors methods
var objectPrototypeAccessorsForced = !fails$E(function () {
  // This feature detection crashes old WebKit
  // https://github.com/zloirock/core-js/issues/232
  if (WEBKIT$1 && WEBKIT$1 < 535) return;
  var key = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call, es-x/no-legacy-object-prototype-accessor-methods -- required for testing
  __defineSetter__.call(null, key, function () { /* empty */ });
  delete global$I[key];
});

var $$1v = _export;
var DESCRIPTORS$i = descriptors;
var FORCED$a = objectPrototypeAccessorsForced;
var aCallable$a = aCallable$i;
var toObject$9 = toObject$q;
var definePropertyModule$4 = objectDefineProperty;

// `Object.prototype.__defineGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__
if (DESCRIPTORS$i) {
  $$1v({ target: 'Object', proto: true, forced: FORCED$a }, {
    __defineGetter__: function __defineGetter__(P, getter) {
      definePropertyModule$4.f(toObject$9(this), P, { get: aCallable$a(getter), enumerable: true, configurable: true });
    }
  });
}

var $$1u = _export;
var DESCRIPTORS$h = descriptors;
var defineProperties = objectDefineProperties.f;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
$$1u({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS$h }, {
  defineProperties: defineProperties
});

var $$1t = _export;
var DESCRIPTORS$g = descriptors;
var defineProperty$3 = objectDefineProperty.f;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
$$1t({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$3, sham: !DESCRIPTORS$g }, {
  defineProperty: defineProperty$3
});

var $$1s = _export;
var DESCRIPTORS$f = descriptors;
var FORCED$9 = objectPrototypeAccessorsForced;
var aCallable$9 = aCallable$i;
var toObject$8 = toObject$q;
var definePropertyModule$3 = objectDefineProperty;

// `Object.prototype.__defineSetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__
if (DESCRIPTORS$f) {
  $$1s({ target: 'Object', proto: true, forced: FORCED$9 }, {
    __defineSetter__: function __defineSetter__(P, setter) {
      definePropertyModule$3.f(toObject$8(this), P, { set: aCallable$9(setter), enumerable: true, configurable: true });
    }
  });
}

var DESCRIPTORS$e = descriptors;
var uncurryThis$w = functionUncurryThis;
var objectKeys$1 = objectKeys$5;
var toIndexedObject$4 = toIndexedObject$f;
var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

var propertyIsEnumerable = uncurryThis$w($propertyIsEnumerable);
var push$8 = uncurryThis$w([].push);

// `Object.{ entries, values }` methods implementation
var createMethod$1 = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject$4(it);
    var keys = objectKeys$1(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS$e || propertyIsEnumerable(O, key)) {
        push$8(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

var objectToArray = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod$1(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod$1(false)
};

var $$1r = _export;
var $entries = objectToArray.entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$$1r({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});

var $$1q = _export;
var FREEZING$3 = freezing;
var fails$D = fails$1i;
var isObject$g = isObject$z;
var onFreeze$2 = internalMetadata.exports.onFreeze;

// eslint-disable-next-line es-x/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES$8 = fails$D(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$$1q({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$8, sham: !FREEZING$3 }, {
  freeze: function freeze(it) {
    return $freeze && isObject$g(it) ? $freeze(onFreeze$2(it)) : it;
  }
});

var $$1p = _export;
var iterate$6 = iterate$a;
var createProperty$2 = createProperty$9;

// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$$1p({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate$6(iterable, function (k, v) {
      createProperty$2(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});

var $$1o = _export;
var fails$C = fails$1i;
var toIndexedObject$3 = toIndexedObject$f;
var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var DESCRIPTORS$d = descriptors;

var FAILS_ON_PRIMITIVES$7 = fails$C(function () { nativeGetOwnPropertyDescriptor$1(1); });
var FORCED$8 = !DESCRIPTORS$d || FAILS_ON_PRIMITIVES$7;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$$1o({ target: 'Object', stat: true, forced: FORCED$8, sham: !DESCRIPTORS$d }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor$1(toIndexedObject$3(it), key);
  }
});

var $$1n = _export;
var DESCRIPTORS$c = descriptors;
var ownKeys$2 = ownKeys$4;
var toIndexedObject$2 = toIndexedObject$f;
var getOwnPropertyDescriptorModule$4 = objectGetOwnPropertyDescriptor;
var createProperty$1 = createProperty$9;

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$$1n({ target: 'Object', stat: true, sham: !DESCRIPTORS$c }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject$2(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$4.f;
    var keys = ownKeys$2(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty$1(result, key, descriptor);
    }
    return result;
  }
});

var $$1m = _export;
var fails$B = fails$1i;
var getOwnPropertyNames$2 = objectGetOwnPropertyNamesExternal.f;

// eslint-disable-next-line es-x/no-object-getownpropertynames -- required for testing
var FAILS_ON_PRIMITIVES$6 = fails$B(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
$$1m({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$6 }, {
  getOwnPropertyNames: getOwnPropertyNames$2
});

var $$1l = _export;
var fails$A = fails$1i;
var toObject$7 = toObject$q;
var nativeGetPrototypeOf = objectGetPrototypeOf$1;
var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

var FAILS_ON_PRIMITIVES$5 = fails$A(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$$1l({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$5, sham: !CORRECT_PROTOTYPE_GETTER$1 }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject$7(it));
  }
});

var $$1k = _export;
var hasOwn$c = hasOwnProperty_1;

// `Object.hasOwn` method
// https://github.com/tc39/proposal-accessible-object-hasownproperty
$$1k({ target: 'Object', stat: true }, {
  hasOwn: hasOwn$c
});

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es-x/no-object-is -- safe
var sameValue$1 = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

var $$1j = _export;
var is = sameValue$1;

// `Object.is` method
// https://tc39.es/ecma262/#sec-object.is
$$1j({ target: 'Object', stat: true }, {
  is: is
});

var $$1i = _export;
var $isExtensible$1 = objectIsExtensible;

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
// eslint-disable-next-line es-x/no-object-isextensible -- safe
$$1i({ target: 'Object', stat: true, forced: Object.isExtensible !== $isExtensible$1 }, {
  isExtensible: $isExtensible$1
});

var $$1h = _export;
var fails$z = fails$1i;
var isObject$f = isObject$z;
var classof$a = classofRaw$1;
var ARRAY_BUFFER_NON_EXTENSIBLE$1 = arrayBufferNonExtensible;

// eslint-disable-next-line es-x/no-object-isfrozen -- safe
var $isFrozen = Object.isFrozen;
var FAILS_ON_PRIMITIVES$4 = fails$z(function () { $isFrozen(1); });

// `Object.isFrozen` method
// https://tc39.es/ecma262/#sec-object.isfrozen
$$1h({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$4 || ARRAY_BUFFER_NON_EXTENSIBLE$1 }, {
  isFrozen: function isFrozen(it) {
    if (!isObject$f(it)) return true;
    if (ARRAY_BUFFER_NON_EXTENSIBLE$1 && classof$a(it) == 'ArrayBuffer') return true;
    return $isFrozen ? $isFrozen(it) : false;
  }
});

var $$1g = _export;
var fails$y = fails$1i;
var isObject$e = isObject$z;
var classof$9 = classofRaw$1;
var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

// eslint-disable-next-line es-x/no-object-issealed -- safe
var $isSealed = Object.isSealed;
var FAILS_ON_PRIMITIVES$3 = fails$y(function () { $isSealed(1); });

// `Object.isSealed` method
// https://tc39.es/ecma262/#sec-object.issealed
$$1g({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$3 || ARRAY_BUFFER_NON_EXTENSIBLE }, {
  isSealed: function isSealed(it) {
    if (!isObject$e(it)) return true;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$9(it) == 'ArrayBuffer') return true;
    return $isSealed ? $isSealed(it) : false;
  }
});

var $$1f = _export;
var toObject$6 = toObject$q;
var nativeKeys = objectKeys$5;
var fails$x = fails$1i;

var FAILS_ON_PRIMITIVES$2 = fails$x(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$$1f({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2 }, {
  keys: function keys(it) {
    return nativeKeys(toObject$6(it));
  }
});

var $$1e = _export;
var DESCRIPTORS$b = descriptors;
var FORCED$7 = objectPrototypeAccessorsForced;
var toObject$5 = toObject$q;
var toPropertyKey$3 = toPropertyKey$8;
var getPrototypeOf$3 = objectGetPrototypeOf$1;
var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f;

// `Object.prototype.__lookupGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__
if (DESCRIPTORS$b) {
  $$1e({ target: 'Object', proto: true, forced: FORCED$7 }, {
    __lookupGetter__: function __lookupGetter__(P) {
      var O = toObject$5(this);
      var key = toPropertyKey$3(P);
      var desc;
      do {
        if (desc = getOwnPropertyDescriptor$6(O, key)) return desc.get;
      } while (O = getPrototypeOf$3(O));
    }
  });
}

var $$1d = _export;
var DESCRIPTORS$a = descriptors;
var FORCED$6 = objectPrototypeAccessorsForced;
var toObject$4 = toObject$q;
var toPropertyKey$2 = toPropertyKey$8;
var getPrototypeOf$2 = objectGetPrototypeOf$1;
var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f;

// `Object.prototype.__lookupSetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__
if (DESCRIPTORS$a) {
  $$1d({ target: 'Object', proto: true, forced: FORCED$6 }, {
    __lookupSetter__: function __lookupSetter__(P) {
      var O = toObject$4(this);
      var key = toPropertyKey$2(P);
      var desc;
      do {
        if (desc = getOwnPropertyDescriptor$5(O, key)) return desc.set;
      } while (O = getPrototypeOf$2(O));
    }
  });
}

var $$1c = _export;
var isObject$d = isObject$z;
var onFreeze$1 = internalMetadata.exports.onFreeze;
var FREEZING$2 = freezing;
var fails$w = fails$1i;

// eslint-disable-next-line es-x/no-object-preventextensions -- safe
var $preventExtensions = Object.preventExtensions;
var FAILS_ON_PRIMITIVES$1 = fails$w(function () { $preventExtensions(1); });

// `Object.preventExtensions` method
// https://tc39.es/ecma262/#sec-object.preventextensions
$$1c({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1, sham: !FREEZING$2 }, {
  preventExtensions: function preventExtensions(it) {
    return $preventExtensions && isObject$d(it) ? $preventExtensions(onFreeze$1(it)) : it;
  }
});

var $$1b = _export;
var isObject$c = isObject$z;
var onFreeze = internalMetadata.exports.onFreeze;
var FREEZING$1 = freezing;
var fails$v = fails$1i;

// eslint-disable-next-line es-x/no-object-seal -- safe
var $seal = Object.seal;
var FAILS_ON_PRIMITIVES = fails$v(function () { $seal(1); });

// `Object.seal` method
// https://tc39.es/ecma262/#sec-object.seal
$$1b({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING$1 }, {
  seal: function seal(it) {
    return $seal && isObject$c(it) ? $seal(onFreeze(it)) : it;
  }
});

var $$1a = _export;
var setPrototypeOf$2 = objectSetPrototypeOf$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$$1a({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf$2
});

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$8 = classof$j;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$8(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn$a = defineBuiltIn$n;
var toString$k = objectToString;

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn$a(Object.prototype, 'toString', toString$k, { unsafe: true });
}

var $$19 = _export;
var $values = objectToArray.values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$$19({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});

var $$18 = _export;
var $parseFloat = numberParseFloat;

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$$18({ global: true, forced: parseFloat != $parseFloat }, {
  parseFloat: $parseFloat
});

var $$17 = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$17({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});

var global$H = global$1H;

var TypeError$b = global$H.TypeError;

var validateArgumentsLength$8 = function (passed, required) {
  if (passed < required) throw TypeError$b('Not enough arguments');
  return passed;
};

var userAgent$4 = engineUserAgent;

var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

var global$G = global$1H;
var apply$6 = functionApply$1;
var bind$6 = functionBindContext;
var isCallable$b = isCallable$y;
var hasOwn$b = hasOwnProperty_1;
var fails$u = fails$1i;
var html = html$2;
var arraySlice$5 = arraySlice$b;
var createElement = documentCreateElement$2;
var validateArgumentsLength$7 = validateArgumentsLength$8;
var IS_IOS$1 = engineIsIos;
var IS_NODE$4 = engineIsNode;

var set$1 = global$G.setImmediate;
var clear = global$G.clearImmediate;
var process$4 = global$G.process;
var Dispatch = global$G.Dispatch;
var Function$2 = global$G.Function;
var MessageChannel = global$G.MessageChannel;
var String$1 = global$G.String;
var counter = 0;
var queue$1 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global$G.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn$b(queue$1, id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global$G.postMessage(String$1(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$1 || !clear) {
  set$1 = function setImmediate(handler) {
    validateArgumentsLength$7(arguments.length, 1);
    var fn = isCallable$b(handler) ? handler : Function$2(handler);
    var args = arraySlice$5(arguments, 1);
    queue$1[++counter] = function () {
      apply$6(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$1[id];
  };
  // Node.js 0.8-
  if (IS_NODE$4) {
    defer = function (id) {
      process$4.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind$6(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$G.addEventListener &&
    isCallable$b(global$G.postMessage) &&
    !global$G.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails$u(post)
  ) {
    defer = post;
    global$G.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set$1,
  clear: clear
};

var userAgent$3 = engineUserAgent;
var global$F = global$1H;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && global$F.Pebble !== undefined;

var userAgent$2 = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

var global$E = global$1H;
var bind$5 = functionBindContext;
var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$3 = engineIsNode;

var MutationObserver = global$E.MutationObserver || global$E.WebKitMutationObserver;
var document$2 = global$E.document;
var process$3 = global$E.process;
var Promise$1 = global$E.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor$4(global$E, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify$2, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE$3 && (parent = process$3.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify$2();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$3 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$2 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$5(promise.then, promise);
    notify$2 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$3) {
    notify$2 = function () {
      process$3.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind$5(macrotask, global$E);
    notify$2 = function () {
      macrotask(flush);
    };
  }
}

var microtask$2 = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify$2();
  } last = task;
};

var global$D = global$1H;

var hostReportErrors$1 = function (a, b) {
  var console = global$D.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};

var perform$5 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var Queue$1 = function () {
  this.head = null;
  this.tail = null;
};

Queue$1.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

var queue = Queue$1;

var global$C = global$1H;

var promiseNativeConstructor = global$C.Promise;

var engineIsBrowser = typeof window == 'object' && typeof Deno != 'object';

var global$B = global$1H;
var NativePromiseConstructor$4 = promiseNativeConstructor;
var isCallable$a = isCallable$y;
var isForced$1 = isForced_1;
var inspectSource = inspectSource$4;
var wellKnownSymbol$b = wellKnownSymbol$z;
var IS_BROWSER = engineIsBrowser;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
var SPECIES$1 = wellKnownSymbol$b('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$a(global$B.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$1('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$4);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$4);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new NativePromiseConstructor$4(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES$1] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_PROMISE_REJECTION_EVENT$1;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$8 = aCallable$i;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$8(resolve);
  this.reject = aCallable$8(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$16 = _export;
var IS_NODE$2 = engineIsNode;
var global$A = global$1H;
var call$n = functionCall;
var defineBuiltIn$9 = defineBuiltIn$n;
var setPrototypeOf$1 = objectSetPrototypeOf$1;
var setToStringTag$4 = setToStringTag$d;
var setSpecies$2 = setSpecies$6;
var aCallable$7 = aCallable$i;
var isCallable$9 = isCallable$y;
var isObject$b = isObject$z;
var anInstance$6 = anInstance$a;
var speciesConstructor$4 = speciesConstructor$6;
var task = task$1.set;
var microtask$1 = microtask$2;
var hostReportErrors = hostReportErrors$1;
var perform$4 = perform$5;
var Queue = queue;
var InternalStateModule$7 = internalState;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$5 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule$7.getterFor(PROMISE);
var setInternalState$7 = InternalStateModule$7.set;
var NativePromisePrototype$2 = NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var PromiseConstructor = NativePromiseConstructor$3;
var PromisePrototype = NativePromisePrototype$2;
var TypeError$a = global$A.TypeError;
var document$1 = global$A.document;
var process$2 = global$A.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$5.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$A.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject$b(it) && isCallable$9(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError$a('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$n(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify$1 = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask$1(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$A.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$A['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$n(task, global$A, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$4(function () {
        if (IS_NODE$2) {
          process$2.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE$2 || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$n(task, global$A, function () {
    var promise = state.facade;
    if (IS_NODE$2) {
      process$2.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$4 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify$1(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$a("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask$1(function () {
        var wrapper = { done: false };
        try {
          call$n(then, value,
            bind$4(internalResolve, wrapper, state),
            bind$4(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify$1(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance$6(this, PromisePrototype);
    aCallable$7(executor);
    call$n(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$4(internalResolve, state), bind$4(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState$7(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn$9(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor$4(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$9(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$9(onRejected) && onRejected;
    reaction.domain = IS_NODE$2 ? process$2.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask$1(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$4(internalResolve, state);
    this.reject = bind$4(internalReject, state);
  };

  newPromiseCapabilityModule$5.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$9(NativePromiseConstructor$3) && NativePromisePrototype$2 !== Object.prototype) {
    nativeThen = NativePromisePrototype$2.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$9(NativePromisePrototype$2, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$n(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$2.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf$1) {
      setPrototypeOf$1(NativePromisePrototype$2, PromisePrototype);
    }
  }
}

$$16({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag$4(PromiseConstructor, PROMISE, false);
setSpecies$2(PROMISE);

var NativePromiseConstructor$2 = promiseNativeConstructor;
var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$4;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$1(function (iterable) {
  NativePromiseConstructor$2.all(iterable).then(undefined, function () { /* empty */ });
});

var $$15 = _export;
var call$m = functionCall;
var aCallable$6 = aCallable$i;
var newPromiseCapabilityModule$4 = newPromiseCapability$2;
var perform$3 = perform$5;
var iterate$5 = iterate$a;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$15({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$4.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$3(function () {
      var $promiseResolve = aCallable$6(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$5(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$m($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$14 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor$1 = promiseNativeConstructor;
var getBuiltIn$a = getBuiltIn$n;
var isCallable$8 = isCallable$y;
var defineBuiltIn$8 = defineBuiltIn$n;

var NativePromisePrototype$1 = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$14({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$8(NativePromiseConstructor$1)) {
  var method$1 = getBuiltIn$a('Promise').prototype['catch'];
  if (NativePromisePrototype$1['catch'] !== method$1) {
    defineBuiltIn$8(NativePromisePrototype$1, 'catch', method$1, { unsafe: true });
  }
}

var $$13 = _export;
var call$l = functionCall;
var aCallable$5 = aCallable$i;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;
var perform$2 = perform$5;
var iterate$4 = iterate$a;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$13({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$3.f(C);
    var reject = capability.reject;
    var result = perform$2(function () {
      var $promiseResolve = aCallable$5(C.resolve);
      iterate$4(iterable, function (promise) {
        call$l($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$12 = _export;
var call$k = functionCall;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$12({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule$2.f(this);
    call$k(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject$n = anObject$C;
var isObject$a = isObject$z;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$2 = function (C, x) {
  anObject$n(C);
  if (isObject$a(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$11 = _export;
var getBuiltIn$9 = getBuiltIn$n;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve$1 = promiseResolve$2;

getBuiltIn$9('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$11({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve$1(this, x);
  }
});

var $$10 = _export;
var call$j = functionCall;
var aCallable$4 = aCallable$i;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform$1 = perform$5;
var iterate$3 = iterate$a;

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$$10({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var promiseResolve = aCallable$4(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$3(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$j(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$$ = _export;
var call$i = functionCall;
var aCallable$3 = aCallable$i;
var getBuiltIn$8 = getBuiltIn$n;
var newPromiseCapabilityModule = newPromiseCapability$2;
var perform = perform$5;
var iterate$2 = iterate$a;

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$$$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn$8('AggregateError');
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable$3(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate$2(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call$i(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$_ = _export;
var NativePromiseConstructor = promiseNativeConstructor;
var fails$t = fails$1i;
var getBuiltIn$7 = getBuiltIn$n;
var isCallable$7 = isCallable$y;
var speciesConstructor$3 = speciesConstructor$6;
var promiseResolve = promiseResolve$2;
var defineBuiltIn$7 = defineBuiltIn$n;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromiseConstructor && fails$t(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$$_({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor$3(this, getBuiltIn$7('Promise'));
    var isFunction = isCallable$7(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (isCallable$7(NativePromiseConstructor)) {
  var method = getBuiltIn$7('Promise').prototype['finally'];
  if (NativePromisePrototype['finally'] !== method) {
    defineBuiltIn$7(NativePromisePrototype, 'finally', method, { unsafe: true });
  }
}

var $$Z = _export;
var functionApply = functionApply$1;
var aCallable$2 = aCallable$i;
var anObject$m = anObject$C;
var fails$s = fails$1i;

// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails$s(function () {
  // eslint-disable-next-line es-x/no-reflect -- required for testing
  Reflect.apply(function () { /* empty */ });
});

// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
$$Z({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
  apply: function apply(target, thisArgument, argumentsList) {
    return functionApply(aCallable$2(target), thisArgument, anObject$m(argumentsList));
  }
});

var $$Y = _export;
var getBuiltIn$6 = getBuiltIn$n;
var apply$5 = functionApply$1;
var bind$3 = functionBind;
var aConstructor$1 = aConstructor$3;
var anObject$l = anObject$C;
var isObject$9 = isObject$z;
var create$4 = objectCreate;
var fails$r = fails$1i;

var nativeConstruct = getBuiltIn$6('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push$7 = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails$r(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails$r(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED$5 = NEW_TARGET_BUG || ARGS_BUG;

$$Y({ target: 'Reflect', stat: true, forced: FORCED$5, sham: FORCED$5 }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor$1(Target);
    anObject$l(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor$1(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply$5(push$7, $args, args);
      return new (apply$5(bind$3, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create$4(isObject$9(proto) ? proto : ObjectPrototype);
    var result = apply$5(Target, instance, args);
    return isObject$9(result) ? result : instance;
  }
});

var $$X = _export;
var DESCRIPTORS$9 = descriptors;
var anObject$k = anObject$C;
var toPropertyKey$1 = toPropertyKey$8;
var definePropertyModule$2 = objectDefineProperty;
var fails$q = fails$1i;

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var ERROR_INSTEAD_OF_FALSE = fails$q(function () {
  // eslint-disable-next-line es-x/no-reflect -- required for testing
  Reflect.defineProperty(definePropertyModule$2.f({}, 1, { value: 1 }), 1, { value: 2 });
});

// `Reflect.defineProperty` method
// https://tc39.es/ecma262/#sec-reflect.defineproperty
$$X({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !DESCRIPTORS$9 }, {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject$k(target);
    var key = toPropertyKey$1(propertyKey);
    anObject$k(attributes);
    try {
      definePropertyModule$2.f(target, key, attributes);
      return true;
    } catch (error) {
      return false;
    }
  }
});

var $$W = _export;
var anObject$j = anObject$C;
var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;

// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
$$W({ target: 'Reflect', stat: true }, {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var descriptor = getOwnPropertyDescriptor$3(anObject$j(target), propertyKey);
    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
  }
});

var hasOwn$a = hasOwnProperty_1;

var isDataDescriptor$2 = function (descriptor) {
  return descriptor !== undefined && (hasOwn$a(descriptor, 'value') || hasOwn$a(descriptor, 'writable'));
};

var $$V = _export;
var call$h = functionCall;
var isObject$8 = isObject$z;
var anObject$i = anObject$C;
var isDataDescriptor$1 = isDataDescriptor$2;
var getOwnPropertyDescriptorModule$3 = objectGetOwnPropertyDescriptor;
var getPrototypeOf$1 = objectGetPrototypeOf$1;

// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject$i(target) === receiver) return target[propertyKey];
  descriptor = getOwnPropertyDescriptorModule$3.f(target, propertyKey);
  if (descriptor) return isDataDescriptor$1(descriptor)
    ? descriptor.value
    : descriptor.get === undefined ? undefined : call$h(descriptor.get, receiver);
  if (isObject$8(prototype = getPrototypeOf$1(target))) return get(prototype, propertyKey, receiver);
}

$$V({ target: 'Reflect', stat: true }, {
  get: get
});

var $$U = _export;
var DESCRIPTORS$8 = descriptors;
var anObject$h = anObject$C;
var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;

// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
$$U({ target: 'Reflect', stat: true, sham: !DESCRIPTORS$8 }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return getOwnPropertyDescriptorModule$2.f(anObject$h(target), propertyKey);
  }
});

var $$T = _export;
var anObject$g = anObject$C;
var objectGetPrototypeOf = objectGetPrototypeOf$1;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
$$T({ target: 'Reflect', stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(target) {
    return objectGetPrototypeOf(anObject$g(target));
  }
});

var $$S = _export;

// `Reflect.has` method
// https://tc39.es/ecma262/#sec-reflect.has
$$S({ target: 'Reflect', stat: true }, {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

var $$R = _export;
var anObject$f = anObject$C;
var $isExtensible = objectIsExtensible;

// `Reflect.isExtensible` method
// https://tc39.es/ecma262/#sec-reflect.isextensible
$$R({ target: 'Reflect', stat: true }, {
  isExtensible: function isExtensible(target) {
    anObject$f(target);
    return $isExtensible(target);
  }
});

var $$Q = _export;
var ownKeys$1 = ownKeys$4;

// `Reflect.ownKeys` method
// https://tc39.es/ecma262/#sec-reflect.ownkeys
$$Q({ target: 'Reflect', stat: true }, {
  ownKeys: ownKeys$1
});

var $$P = _export;
var getBuiltIn$5 = getBuiltIn$n;
var anObject$e = anObject$C;
var FREEZING = freezing;

// `Reflect.preventExtensions` method
// https://tc39.es/ecma262/#sec-reflect.preventextensions
$$P({ target: 'Reflect', stat: true, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(target) {
    anObject$e(target);
    try {
      var objectPreventExtensions = getBuiltIn$5('Object', 'preventExtensions');
      if (objectPreventExtensions) objectPreventExtensions(target);
      return true;
    } catch (error) {
      return false;
    }
  }
});

var $$O = _export;
var call$g = functionCall;
var anObject$d = anObject$C;
var isObject$7 = isObject$z;
var isDataDescriptor = isDataDescriptor$2;
var fails$p = fails$1i;
var definePropertyModule$1 = objectDefineProperty;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var getPrototypeOf = objectGetPrototypeOf$1;
var createPropertyDescriptor$4 = createPropertyDescriptor$c;

// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDescriptor = getOwnPropertyDescriptorModule$1.f(anObject$d(target), propertyKey);
  var existingDescriptor, prototype, setter;
  if (!ownDescriptor) {
    if (isObject$7(prototype = getPrototypeOf(target))) {
      return set(prototype, propertyKey, V, receiver);
    }
    ownDescriptor = createPropertyDescriptor$4(0);
  }
  if (isDataDescriptor(ownDescriptor)) {
    if (ownDescriptor.writable === false || !isObject$7(receiver)) return false;
    if (existingDescriptor = getOwnPropertyDescriptorModule$1.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      definePropertyModule$1.f(receiver, propertyKey, existingDescriptor);
    } else definePropertyModule$1.f(receiver, propertyKey, createPropertyDescriptor$4(0, V));
  } else {
    setter = ownDescriptor.set;
    if (setter === undefined) return false;
    call$g(setter, receiver, V);
  } return true;
}

// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var MS_EDGE_BUG = fails$p(function () {
  var Constructor = function () { /* empty */ };
  var object = definePropertyModule$1.f(new Constructor(), 'a', { configurable: true });
  // eslint-disable-next-line es-x/no-reflect -- required for testing
  return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
});

$$O({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
  set: set
});

var $$N = _export;
var anObject$c = anObject$C;
var aPossiblePrototype = aPossiblePrototype$2;
var objectSetPrototypeOf = objectSetPrototypeOf$1;

// `Reflect.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.setprototypeof
if (objectSetPrototypeOf) $$N({ target: 'Reflect', stat: true }, {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    anObject$c(target);
    aPossiblePrototype(proto);
    try {
      objectSetPrototypeOf(target, proto);
      return true;
    } catch (error) {
      return false;
    }
  }
});

var $$M = _export;
var global$z = global$1H;
var setToStringTag$3 = setToStringTag$d;

$$M({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag$3(global$z.Reflect, 'Reflect', true);

var isObject$6 = isObject$z;
var classof$7 = classofRaw$1;
var wellKnownSymbol$a = wellKnownSymbol$z;

var MATCH$2 = wellKnownSymbol$a('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$6(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$7(it) == 'RegExp');
};

var anObject$b = anObject$C;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$b(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var call$f = functionCall;
var hasOwn$9 = hasOwnProperty_1;
var isPrototypeOf$2 = objectIsPrototypeOf;
var regExpFlags$1 = regexpFlags$1;

var RegExpPrototype$7 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$7) && !hasOwn$9(R, 'flags') && isPrototypeOf$2(RegExpPrototype$7, R)
    ? call$f(regExpFlags$1, R) : flags;
};

var fails$o = fails$1i;
var global$y = global$1H;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$y.RegExp;

var UNSUPPORTED_Y$3 = fails$o(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$2 = UNSUPPORTED_Y$3 || fails$o(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$3 || fails$o(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY$2,
  UNSUPPORTED_Y: UNSUPPORTED_Y$3
};

var fails$n = fails$1i;
var global$x = global$1H;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$x.RegExp;

var regexpUnsupportedDotAll = fails$n(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$m = fails$1i;
var global$w = global$1H;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$w.RegExp;

var regexpUnsupportedNcg = fails$m(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

var DESCRIPTORS$7 = descriptors;
var global$v = global$1H;
var uncurryThis$v = functionUncurryThis;
var isForced = isForced_1;
var inheritIfRequired$2 = inheritIfRequired$6;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$f;
var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var isPrototypeOf$1 = objectIsPrototypeOf;
var isRegExp$4 = isRegexp;
var toString$j = toString$v;
var getRegExpFlags$4 = regexpGetFlags;
var stickyHelpers$2 = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$2;
var defineBuiltIn$6 = defineBuiltIn$n;
var fails$l = fails$1i;
var hasOwn$8 = hasOwnProperty_1;
var enforceInternalState$1 = internalState.enforce;
var setSpecies$1 = setSpecies$6;
var wellKnownSymbol$9 = wellKnownSymbol$z;
var UNSUPPORTED_DOT_ALL$2 = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

var MATCH$1 = wellKnownSymbol$9('match');
var NativeRegExp = global$v.RegExp;
var RegExpPrototype$6 = NativeRegExp.prototype;
var SyntaxError$1 = global$v.SyntaxError;
var exec$6 = uncurryThis$v(RegExpPrototype$6.exec);
var charAt$b = uncurryThis$v(''.charAt);
var replace$7 = uncurryThis$v(''.replace);
var stringIndexOf$4 = uncurryThis$v(''.indexOf);
var stringSlice$b = uncurryThis$v(''.slice);
// TODO: Use only propper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY$1 = stickyHelpers$2.MISSED_STICKY;
var UNSUPPORTED_Y$2 = stickyHelpers$2.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS$7 &&
  (!CORRECT_NEW || MISSED_STICKY$1 || UNSUPPORTED_DOT_ALL$2 || UNSUPPORTED_NCG$1 || fails$l(function () {
    re2[MATCH$1] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt$b(string, index);
    if (chr === '\\') {
      result += chr + charAt$b(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt$b(string, index);
    if (chr === '\\') {
      chr = chr + charAt$b(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec$6(IS_NCG, stringSlice$b(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn$8(names, groupname)) {
          throw new SyntaxError$1('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf$1(RegExpPrototype$6, this);
    var patternIsRegExp = isRegExp$4(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf$1(RegExpPrototype$6, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags$4(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString$j(pattern);
    flags = flags === undefined ? '' : toString$j(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL$2 && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf$4(flags, 's') > -1;
      if (dotAll) flags = replace$7(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY$1 && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf$4(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y$2) flags = replace$7(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG$1) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired$2(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$6, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState$1(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty$5(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames$1(NativeRegExp), index$1 = 0; keys.length > index$1;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index$1++]);
  }

  RegExpPrototype$6.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype$6;
  defineBuiltIn$6(global$v, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies$1('RegExp');

var makeBuiltIn = makeBuiltIn$4.exports;
var defineProperty$2 = objectDefineProperty;

var defineBuiltInAccessor$5 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$2.f(target, name, descriptor);
};

var global$u = global$1H;
var DESCRIPTORS$6 = descriptors;
var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
var classof$6 = classofRaw$1;
var defineBuiltInAccessor$4 = defineBuiltInAccessor$5;
var getInternalState$6 = internalState.get;

var RegExpPrototype$5 = RegExp.prototype;
var TypeError$9 = global$u.TypeError;

// `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
if (DESCRIPTORS$6 && UNSUPPORTED_DOT_ALL$1) {
  defineBuiltInAccessor$4(RegExpPrototype$5, 'dotAll', {
    configurable: true,
    get: function dotAll() {
      if (this === RegExpPrototype$5) return undefined;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof$6(this) === 'RegExp') {
        return !!getInternalState$6(this).dotAll;
      }
      throw TypeError$9('Incompatible receiver, RegExp required');
    }
  });
}

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$e = functionCall;
var uncurryThis$u = functionUncurryThis;
var toString$i = toString$v;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$7.exports;
var create$3 = objectCreate;
var getInternalState$5 = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$a = uncurryThis$u(''.charAt);
var indexOf$1 = uncurryThis$u(''.indexOf);
var replace$6 = uncurryThis$u(''.replace);
var stringSlice$a = uncurryThis$u(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$e(nativeExec, re1, 'a');
  call$e(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState$5(re);
    var str = toString$i(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$e(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$e(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$6(flags, 'y', '');
      if (indexOf$1(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$a(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$a(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$e(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$a(match.input, charsAdded);
        match[0] = stringSlice$a(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call$e(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$3(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec;

var $$L = _export;
var exec$5 = regexpExec$3;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$L({ target: 'RegExp', proto: true, forced: /./.exec !== exec$5 }, {
  exec: exec$5
});

var DESCRIPTORS$5 = descriptors;
var defineBuiltInAccessor$3 = defineBuiltInAccessor$5;
var regExpFlags = regexpFlags$1;
var fails$k = fails$1i;

var RegExpPrototype$4 = RegExp.prototype;

var FORCED$4 = DESCRIPTORS$5 && fails$k(function () {
  // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
  return Object.getOwnPropertyDescriptor(RegExpPrototype$4, 'flags').get.call({ dotAll: true, sticky: true }) !== 'sy';
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED$4) defineBuiltInAccessor$3(RegExpPrototype$4, 'flags', {
  configurable: true,
  get: regExpFlags
});

var global$t = global$1H;
var DESCRIPTORS$4 = descriptors;
var MISSED_STICKY = regexpStickyHelpers.MISSED_STICKY;
var classof$5 = classofRaw$1;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$5;
var getInternalState$4 = internalState.get;

var RegExpPrototype$3 = RegExp.prototype;
var TypeError$8 = global$t.TypeError;

// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS$4 && MISSED_STICKY) {
  defineBuiltInAccessor$2(RegExpPrototype$3, 'sticky', {
    configurable: true,
    get: function sticky() {
      if (this === RegExpPrototype$3) return undefined;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof$5(this) === 'RegExp') {
        return !!getInternalState$4(this).sticky;
      }
      throw TypeError$8('Incompatible receiver, RegExp required');
    }
  });
}

// TODO: Remove from `core-js@4` since it's moved to entry points

var $$K = _export;
var global$s = global$1H;
var call$d = functionCall;
var uncurryThis$t = functionUncurryThis;
var isCallable$6 = isCallable$y;
var isObject$5 = isObject$z;

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var Error$4 = global$s.Error;
var un$Test = uncurryThis$t(/./.test);

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$$K({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (str) {
    var exec = this.exec;
    if (!isCallable$6(exec)) return un$Test(this, str);
    var result = call$d(exec, this, str);
    if (result !== null && !isObject$5(result)) {
      throw new Error$4('RegExp exec method returned something other than an Object or null');
    }
    return !!result;
  }
});

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var defineBuiltIn$5 = defineBuiltIn$n;
var anObject$a = anObject$C;
var $toString$2 = toString$v;
var fails$j = fails$1i;
var getRegExpFlags$3 = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype$2 = RegExp.prototype;
var n$ToString = RegExpPrototype$2[TO_STRING];

var NOT_GENERIC = fails$j(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$5(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$a(this);
    var pattern = $toString$2(R.source);
    var flags = $toString$2(getRegExpFlags$3(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

var collection$2 = collection$4;
var collectionStrong = collectionStrong$2;

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection$2('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

var $$J = _export;
var uncurryThis$s = functionUncurryThis;
var requireObjectCoercible$c = requireObjectCoercible$i;
var toIntegerOrInfinity$5 = toIntegerOrInfinity$i;
var toString$h = toString$v;
var fails$i = fails$1i;

var charAt$9 = uncurryThis$s(''.charAt);

var FORCED$3 = fails$i(function () {
  // eslint-disable-next-line es-x/no-array-string-prototype-at -- safe
  return '𠮷'.at(-2) !== '\uD842';
});

// `String.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
$$J({ target: 'String', proto: true, forced: FORCED$3 }, {
  at: function at(index) {
    var S = toString$h(requireObjectCoercible$c(this));
    var len = S.length;
    var relativeIndex = toIntegerOrInfinity$5(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : charAt$9(S, k);
  }
});

var uncurryThis$r = functionUncurryThis;
var toIntegerOrInfinity$4 = toIntegerOrInfinity$i;
var toString$g = toString$v;
var requireObjectCoercible$b = requireObjectCoercible$i;

var charAt$8 = uncurryThis$r(''.charAt);
var charCodeAt$2 = uncurryThis$r(''.charCodeAt);
var stringSlice$9 = uncurryThis$r(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$g(requireObjectCoercible$b($this));
    var position = toIntegerOrInfinity$4(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt$2(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt$2(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$8(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$9(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var $$I = _export;
var codeAt$1 = stringMultibyte.codeAt;

// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
$$I({ target: 'String', proto: true }, {
  codePointAt: function codePointAt(pos) {
    return codeAt$1(this, pos);
  }
});

var global$r = global$1H;
var isRegExp$3 = isRegexp;

var TypeError$7 = global$r.TypeError;

var notARegexp = function (it) {
  if (isRegExp$3(it)) {
    throw TypeError$7("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$8 = wellKnownSymbol$z;

var MATCH = wellKnownSymbol$8('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$H = _export;
var uncurryThis$q = functionUncurryThis;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var toLength$7 = toLength$d;
var toString$f = toString$v;
var notARegExp$2 = notARegexp;
var requireObjectCoercible$a = requireObjectCoercible$i;
var correctIsRegExpLogic$2 = correctIsRegexpLogic;

// eslint-disable-next-line es-x/no-string-prototype-endswith -- safe
var un$EndsWith = uncurryThis$q(''.endsWith);
var slice = uncurryThis$q(''.slice);
var min$4 = Math.min;

var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$2('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
  var descriptor = getOwnPropertyDescriptor$2(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$$H({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1 }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString$f(requireObjectCoercible$a(this));
    notARegExp$2(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min$4(toLength$7(endPosition), len);
    var search = toString$f(searchString);
    return un$EndsWith
      ? un$EndsWith(that, search, end)
      : slice(that, end - search.length, end) === search;
  }
});

var $$G = _export;
var global$q = global$1H;
var uncurryThis$p = functionUncurryThis;
var toAbsoluteIndex$1 = toAbsoluteIndex$9;

var RangeError$6 = global$q.RangeError;
var fromCharCode$3 = String.fromCharCode;
// eslint-disable-next-line es-x/no-string-fromcodepoint -- required for testing
var $fromCodePoint = String.fromCodePoint;
var join$5 = uncurryThis$p([].join);

// length should be 1, old FF problem
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1;

// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
$$G({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  fromCodePoint: function fromCodePoint(x) {
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;
    while (length > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex$1(code, 0x10FFFF) !== code) throw RangeError$6(code + ' is not a valid code point');
      elements[i] = code < 0x10000
        ? fromCharCode$3(code)
        : fromCharCode$3(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
    } return join$5(elements, '');
  }
});

var $$F = _export;
var uncurryThis$o = functionUncurryThis;
var notARegExp$1 = notARegexp;
var requireObjectCoercible$9 = requireObjectCoercible$i;
var toString$e = toString$v;
var correctIsRegExpLogic$1 = correctIsRegexpLogic;

var stringIndexOf$3 = uncurryThis$o(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$F({ target: 'String', proto: true, forced: !correctIsRegExpLogic$1('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf$3(
      toString$e(requireObjectCoercible$9(this)),
      toString$e(notARegExp$1(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

var charAt$7 = stringMultibyte.charAt;
var toString$d = toString$v;
var InternalStateModule$6 = internalState;
var defineIterator = defineIterator$3;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$6 = InternalStateModule$6.set;
var getInternalState$3 = InternalStateModule$6.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$6(this, {
    type: STRING_ITERATOR,
    string: toString$d(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$3(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt$7(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$n = functionUncurryThis;
var defineBuiltIn$4 = defineBuiltIn$n;
var regexpExec$2 = regexpExec$3;
var fails$h = fails$1i;
var wellKnownSymbol$7 = wellKnownSymbol$z;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$f;

var SPECIES = wellKnownSymbol$7('species');
var RegExpPrototype$1 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$7(KEY);

  var DELEGATES_TO_SYMBOL = !fails$h(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$h(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis$n(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$n(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$2 || $exec === RegExpPrototype$1.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn$4(String.prototype, KEY, methods[0]);
    defineBuiltIn$4(RegExpPrototype$1, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$4(RegExpPrototype$1[SYMBOL], 'sham', true);
};

var charAt$6 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$4 = function (S, index, unicode) {
  return index + (unicode ? charAt$6(S, index).length : 1);
};

var global$p = global$1H;
var call$c = functionCall;
var anObject$9 = anObject$C;
var isCallable$5 = isCallable$y;
var classof$4 = classofRaw$1;
var regexpExec$1 = regexpExec$3;

var TypeError$6 = global$p.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$5(exec)) {
    var result = call$c(exec, R, S);
    if (result !== null) anObject$9(result);
    return result;
  }
  if (classof$4(R) === 'RegExp') return call$c(regexpExec$1, R, S);
  throw TypeError$6('RegExp#exec called on incompatible receiver');
};

var call$b = functionCall;
var fixRegExpWellKnownSymbolLogic$3 = fixRegexpWellKnownSymbolLogic;
var anObject$8 = anObject$C;
var toLength$6 = toLength$d;
var toString$c = toString$v;
var requireObjectCoercible$8 = requireObjectCoercible$i;
var getMethod$5 = getMethod$9;
var advanceStringIndex$3 = advanceStringIndex$4;
var regExpExec$3 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$3('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$8(this);
      var matcher = regexp == undefined ? undefined : getMethod$5(regexp, MATCH);
      return matcher ? call$b(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$c(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$8(this);
      var S = toString$c(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$3(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$3(rx, S)) !== null) {
        var matchStr = toString$c(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$3(S, toLength$6(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

/* eslint-disable es-x/no-string-prototype-matchall -- safe */
var $$E = _export;
var global$o = global$1H;
var call$a = functionCall;
var uncurryThis$m = functionUncurryThis;
var createIteratorConstructor$1 = createIteratorConstructor$3;
var requireObjectCoercible$7 = requireObjectCoercible$i;
var toLength$5 = toLength$d;
var toString$b = toString$v;
var anObject$7 = anObject$C;
var classof$3 = classofRaw$1;
var isRegExp$2 = isRegexp;
var getRegExpFlags$2 = regexpGetFlags;
var getMethod$4 = getMethod$9;
var defineBuiltIn$3 = defineBuiltIn$n;
var fails$g = fails$1i;
var wellKnownSymbol$6 = wellKnownSymbol$z;
var speciesConstructor$2 = speciesConstructor$6;
var advanceStringIndex$2 = advanceStringIndex$4;
var regExpExec$2 = regexpExecAbstract;
var InternalStateModule$5 = internalState;
var IS_PURE$1 = isPure;

var MATCH_ALL = wellKnownSymbol$6('matchAll');
var REGEXP_STRING = 'RegExp String';
var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
var setInternalState$5 = InternalStateModule$5.set;
var getInternalState$2 = InternalStateModule$5.getterFor(REGEXP_STRING_ITERATOR);
var RegExpPrototype = RegExp.prototype;
var TypeError$5 = global$o.TypeError;
var stringIndexOf$2 = uncurryThis$m(''.indexOf);
var un$MatchAll = uncurryThis$m(''.matchAll);

var WORKS_WITH_NON_GLOBAL_REGEX = !!un$MatchAll && !fails$g(function () {
  un$MatchAll('a', /./);
});

var $RegExpStringIterator = createIteratorConstructor$1(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
  setInternalState$5(this, {
    type: REGEXP_STRING_ITERATOR,
    regexp: regexp,
    string: string,
    global: $global,
    unicode: fullUnicode,
    done: false
  });
}, REGEXP_STRING, function next() {
  var state = getInternalState$2(this);
  if (state.done) return { value: undefined, done: true };
  var R = state.regexp;
  var S = state.string;
  var match = regExpExec$2(R, S);
  if (match === null) return { value: undefined, done: state.done = true };
  if (state.global) {
    if (toString$b(match[0]) === '') R.lastIndex = advanceStringIndex$2(S, toLength$5(R.lastIndex), state.unicode);
    return { value: match, done: false };
  }
  state.done = true;
  return { value: match, done: false };
});

var $matchAll = function (string) {
  var R = anObject$7(this);
  var S = toString$b(string);
  var C = speciesConstructor$2(R, RegExp);
  var flags = toString$b(getRegExpFlags$2(R));
  var matcher, $global, fullUnicode;
  matcher = new C(C === RegExp ? R.source : R, flags);
  $global = !!~stringIndexOf$2(flags, 'g');
  fullUnicode = !!~stringIndexOf$2(flags, 'u');
  matcher.lastIndex = toLength$5(R.lastIndex);
  return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
};

// `String.prototype.matchAll` method
// https://tc39.es/ecma262/#sec-string.prototype.matchall
$$E({ target: 'String', proto: true, forced: WORKS_WITH_NON_GLOBAL_REGEX }, {
  matchAll: function matchAll(regexp) {
    var O = requireObjectCoercible$7(this);
    var flags, S, matcher, rx;
    if (regexp != null) {
      if (isRegExp$2(regexp)) {
        flags = toString$b(requireObjectCoercible$7(getRegExpFlags$2(regexp)));
        if (!~stringIndexOf$2(flags, 'g')) throw TypeError$5('`.matchAll` does not allow non-global regexes');
      }
      if (WORKS_WITH_NON_GLOBAL_REGEX) return un$MatchAll(O, regexp);
      matcher = getMethod$4(regexp, MATCH_ALL);
      if (matcher === undefined && IS_PURE$1 && classof$3(regexp) == 'RegExp') matcher = $matchAll;
      if (matcher) return call$a(matcher, regexp, O);
    } else if (WORKS_WITH_NON_GLOBAL_REGEX) return un$MatchAll(O, regexp);
    S = toString$b(O);
    rx = new RegExp(regexp, 'g');
    return rx[MATCH_ALL](S);
  }
});

MATCH_ALL in RegExpPrototype || defineBuiltIn$3(RegExpPrototype, MATCH_ALL, $matchAll);

// https://github.com/zloirock/core-js/issues/280
var userAgent$1 = engineUserAgent;

var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent$1);

var $$D = _export;
var $padEnd = stringPad.end;
var WEBKIT_BUG$1 = stringPadWebkitBug;

// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
$$D({ target: 'String', proto: true, forced: WEBKIT_BUG$1 }, {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var $$C = _export;
var $padStart = stringPad.start;
var WEBKIT_BUG = stringPadWebkitBug;

// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$$C({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var $$B = _export;
var uncurryThis$l = functionUncurryThis;
var toIndexedObject$1 = toIndexedObject$f;
var toObject$3 = toObject$q;
var toString$a = toString$v;
var lengthOfArrayLike$5 = lengthOfArrayLike$n;

var push$6 = uncurryThis$l([].push);
var join$4 = uncurryThis$l([].join);

// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
$$B({ target: 'String', stat: true }, {
  raw: function raw(template) {
    var rawTemplate = toIndexedObject$1(toObject$3(template).raw);
    var literalSegments = lengthOfArrayLike$5(rawTemplate);
    var argumentsLength = arguments.length;
    var elements = [];
    var i = 0;
    while (literalSegments > i) {
      push$6(elements, toString$a(rawTemplate[i++]));
      if (i === literalSegments) return join$4(elements, '');
      if (i < argumentsLength) push$6(elements, toString$a(arguments[i]));
    }
  }
});

var $$A = _export;
var repeat = stringRepeat;

// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$$A({ target: 'String', proto: true }, {
  repeat: repeat
});

var uncurryThis$k = functionUncurryThis;
var toObject$2 = toObject$q;

var floor$3 = Math.floor;
var charAt$5 = uncurryThis$k(''.charAt);
var replace$5 = uncurryThis$k(''.replace);
var stringSlice$8 = uncurryThis$k(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$2 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject$2(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$5(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt$5(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$8(str, 0, position);
      case "'": return stringSlice$8(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$8(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor$3(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt$5(ch, 1) : captures[f - 1] + charAt$5(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var apply$4 = functionApply$1;
var call$9 = functionCall;
var uncurryThis$j = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
var fails$f = fails$1i;
var anObject$6 = anObject$C;
var isCallable$4 = isCallable$y;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$i;
var toLength$4 = toLength$d;
var toString$9 = toString$v;
var requireObjectCoercible$6 = requireObjectCoercible$i;
var advanceStringIndex$1 = advanceStringIndex$4;
var getMethod$3 = getMethod$9;
var getSubstitution$1 = getSubstitution$2;
var regExpExec$1 = regexpExecAbstract;
var wellKnownSymbol$5 = wellKnownSymbol$z;

var REPLACE$1 = wellKnownSymbol$5('replace');
var max$2 = Math.max;
var min$3 = Math.min;
var concat = uncurryThis$j([].concat);
var push$5 = uncurryThis$j([].push);
var stringIndexOf$1 = uncurryThis$j(''.indexOf);
var stringSlice$7 = uncurryThis$j(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE$1]) {
    return /./[REPLACE$1]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$f(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic$2('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$6(this);
      var replacer = searchValue == undefined ? undefined : getMethod$3(searchValue, REPLACE$1);
      return replacer
        ? call$9(replacer, searchValue, O, replaceValue)
        : call$9(nativeReplace, toString$9(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$6(this);
      var S = toString$9(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf$1(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$4(replaceValue);
      if (!functionalReplace) replaceValue = toString$9(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec$1(rx, S);
        if (result === null) break;

        push$5(results, result);
        if (!global) break;

        var matchStr = toString$9(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$4(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$9(result[0]);
        var position = max$2(min$3(toIntegerOrInfinity$3(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push$5(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push$5(replacerArgs, namedCaptures);
          var replacement = toString$9(apply$4(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution$1(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$7(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$7(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

var $$z = _export;
var global$n = global$1H;
var call$8 = functionCall;
var uncurryThis$i = functionUncurryThis;
var requireObjectCoercible$5 = requireObjectCoercible$i;
var isCallable$3 = isCallable$y;
var isRegExp$1 = isRegexp;
var toString$8 = toString$v;
var getMethod$2 = getMethod$9;
var getRegExpFlags$1 = regexpGetFlags;
var getSubstitution = getSubstitution$2;
var wellKnownSymbol$4 = wellKnownSymbol$z;

var REPLACE = wellKnownSymbol$4('replace');
var TypeError$4 = global$n.TypeError;
var indexOf = uncurryThis$i(''.indexOf);
uncurryThis$i(''.replace);
var stringSlice$6 = uncurryThis$i(''.slice);
var max$1 = Math.max;

var stringIndexOf = function (string, searchValue, fromIndex) {
  if (fromIndex > string.length) return -1;
  if (searchValue === '') return fromIndex;
  return indexOf(string, searchValue, fromIndex);
};

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$$z({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible$5(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
    var position = 0;
    var endOfLastMatch = 0;
    var result = '';
    if (searchValue != null) {
      IS_REG_EXP = isRegExp$1(searchValue);
      if (IS_REG_EXP) {
        flags = toString$8(requireObjectCoercible$5(getRegExpFlags$1(searchValue)));
        if (!~indexOf(flags, 'g')) throw TypeError$4('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod$2(searchValue, REPLACE);
      if (replacer) {
        return call$8(replacer, searchValue, O, replaceValue);
      }
    }
    string = toString$8(O);
    searchString = toString$8(searchValue);
    functionalReplace = isCallable$3(replaceValue);
    if (!functionalReplace) replaceValue = toString$8(replaceValue);
    searchLength = searchString.length;
    advanceBy = max$1(1, searchLength);
    position = stringIndexOf(string, searchString, 0);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString$8(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice$6(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = stringIndexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice$6(string, endOfLastMatch);
    }
    return result;
  }
});

var call$7 = functionCall;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$5 = anObject$C;
var requireObjectCoercible$4 = requireObjectCoercible$i;
var sameValue = sameValue$1;
var toString$7 = toString$v;
var getMethod$1 = getMethod$9;
var regExpExec = regexpExecAbstract;

// @@search logic
fixRegExpWellKnownSymbolLogic$1('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible$4(this);
      var searcher = regexp == undefined ? undefined : getMethod$1(regexp, SEARCH);
      return searcher ? call$7(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$7(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject$5(this);
      var S = toString$7(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

var apply$3 = functionApply$1;
var call$6 = functionCall;
var uncurryThis$h = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var isRegExp = isRegexp;
var anObject$4 = anObject$C;
var requireObjectCoercible$3 = requireObjectCoercible$i;
var speciesConstructor$1 = speciesConstructor$6;
var advanceStringIndex = advanceStringIndex$4;
var toLength$3 = toLength$d;
var toString$6 = toString$v;
var getMethod = getMethod$9;
var arraySlice$4 = arraySliceSimple;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails$e = fails$1i;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min$2 = Math.min;
var $push = [].push;
var exec$4 = uncurryThis$h(/./.exec);
var push$4 = uncurryThis$h($push);
var stringSlice$5 = uncurryThis$h(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$e(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString$6(requireObjectCoercible$3(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call$6(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call$6(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push$4(output, stringSlice$5(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply$3($push, output, arraySlice$4(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec$4(separatorCopy, '')) push$4(output, '');
      } else push$4(output, stringSlice$5(string, lastLastIndex));
      return output.length > lim ? arraySlice$4(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call$6(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$3(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call$6(splitter, separator, O, limit)
        : call$6(internalSplit, toString$6(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$4(this);
      var S = toString$6(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor$1(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice$5(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min$2(toLength$3(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push$4(A, stringSlice$5(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push$4(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push$4(A, stringSlice$5(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

var $$y = _export;
var uncurryThis$g = functionUncurryThis;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var toLength$2 = toLength$d;
var toString$5 = toString$v;
var notARegExp = notARegexp;
var requireObjectCoercible$2 = requireObjectCoercible$i;
var correctIsRegExpLogic = correctIsRegexpLogic;

// eslint-disable-next-line es-x/no-string-prototype-startswith -- safe
var un$StartsWith = uncurryThis$g(''.startsWith);
var stringSlice$4 = uncurryThis$g(''.slice);
var min$1 = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$$y({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString$5(requireObjectCoercible$2(this));
    notARegExp(searchString);
    var index = toLength$2(min$1(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString$5(searchString);
    return un$StartsWith
      ? un$StartsWith(that, search, index)
      : stringSlice$4(that, index, index + search.length) === search;
  }
});

var $$x = _export;
var uncurryThis$f = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$i;
var toIntegerOrInfinity$2 = toIntegerOrInfinity$i;
var toString$4 = toString$v;

var stringSlice$3 = uncurryThis$f(''.slice);
var max = Math.max;
var min = Math.min;

// eslint-disable-next-line unicorn/prefer-string-slice, es-x/no-string-prototype-substr -- required for testing
var FORCED$2 = !''.substr || 'ab'.substr(-1) !== 'b';

// `String.prototype.substr` method
// https://tc39.es/ecma262/#sec-string.prototype.substr
$$x({ target: 'String', proto: true, forced: FORCED$2 }, {
  substr: function substr(start, length) {
    var that = toString$4(requireObjectCoercible$1(this));
    var size = that.length;
    var intStart = toIntegerOrInfinity$2(start);
    var intLength, intEnd;
    if (intStart === Infinity) intStart = 0;
    if (intStart < 0) intStart = max(size + intStart, 0);
    intLength = length === undefined ? size : toIntegerOrInfinity$2(length);
    if (intLength <= 0 || intLength === Infinity) return '';
    intEnd = min(intStart + intLength, size);
    return intStart >= intEnd ? '' : stringSlice$3(that, intStart, intEnd);
  }
});

var PROPER_FUNCTION_NAME = functionName.PROPER;
var fails$d = fails$1i;
var whitespaces$1 = whitespaces$5;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$d(function () {
    return !!whitespaces$1[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces$1[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$w = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod$2 = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$w({ target: 'String', proto: true, forced: forcedStringTrimMethod$2('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var $trimEnd = stringTrim.end;
var forcedStringTrimMethod$1 = stringTrimForced;

// `String.prototype.{ trimEnd, trimRight }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
var stringTrimEnd = forcedStringTrimMethod$1('trimEnd') ? function trimEnd() {
  return $trimEnd(this);
// eslint-disable-next-line es-x/no-string-prototype-trimstart-trimend -- safe
} : ''.trimEnd;

var $$v = _export;
var trimEnd$1 = stringTrimEnd;

// `String.prototype.trimRight` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es-x/no-string-prototype-trimleft-trimright -- safe
$$v({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimRight !== trimEnd$1 }, {
  trimRight: trimEnd$1
});

// TODO: Remove this line from `core-js@4`

var $$u = _export;
var trimEnd = stringTrimEnd;

// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es-x/no-string-prototype-trimstart-trimend -- safe
$$u({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimEnd !== trimEnd }, {
  trimEnd: trimEnd
});

var $trimStart = stringTrim.start;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.{ trimStart, trimLeft }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
var stringTrimStart = forcedStringTrimMethod('trimStart') ? function trimStart() {
  return $trimStart(this);
// eslint-disable-next-line es-x/no-string-prototype-trimstart-trimend -- safe
} : ''.trimStart;

var $$t = _export;
var trimStart$1 = stringTrimStart;

// `String.prototype.trimLeft` method
// https://tc39.es/ecma262/#sec-string.prototype.trimleft
// eslint-disable-next-line es-x/no-string-prototype-trimleft-trimright -- safe
$$t({ target: 'String', proto: true, name: 'trimStart', forced: ''.trimLeft !== trimStart$1 }, {
  trimLeft: trimStart$1
});

// TODO: Remove this line from `core-js@4`

var $$s = _export;
var trimStart = stringTrimStart;

// `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es-x/no-string-prototype-trimstart-trimend -- safe
$$s({ target: 'String', proto: true, name: 'trimStart', forced: ''.trimStart !== trimStart }, {
  trimStart: trimStart
});

var uncurryThis$e = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$i;
var toString$3 = toString$v;

var quot = /"/g;
var replace$4 = uncurryThis$e(''.replace);

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
var createHtml = function (string, tag, attribute, value) {
  var S = toString$3(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + replace$4(toString$3(value), quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};

var fails$c = fails$1i;

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
var stringHtmlForced = function (METHOD_NAME) {
  return fails$c(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};

var $$r = _export;
var createHTML$c = createHtml;
var forcedStringHTMLMethod$c = stringHtmlForced;

// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
$$r({ target: 'String', proto: true, forced: forcedStringHTMLMethod$c('anchor') }, {
  anchor: function anchor(name) {
    return createHTML$c(this, 'a', 'name', name);
  }
});

var $$q = _export;
var createHTML$b = createHtml;
var forcedStringHTMLMethod$b = stringHtmlForced;

// `String.prototype.big` method
// https://tc39.es/ecma262/#sec-string.prototype.big
$$q({ target: 'String', proto: true, forced: forcedStringHTMLMethod$b('big') }, {
  big: function big() {
    return createHTML$b(this, 'big', '', '');
  }
});

var $$p = _export;
var createHTML$a = createHtml;
var forcedStringHTMLMethod$a = stringHtmlForced;

// `String.prototype.blink` method
// https://tc39.es/ecma262/#sec-string.prototype.blink
$$p({ target: 'String', proto: true, forced: forcedStringHTMLMethod$a('blink') }, {
  blink: function blink() {
    return createHTML$a(this, 'blink', '', '');
  }
});

var $$o = _export;
var createHTML$9 = createHtml;
var forcedStringHTMLMethod$9 = stringHtmlForced;

// `String.prototype.bold` method
// https://tc39.es/ecma262/#sec-string.prototype.bold
$$o({ target: 'String', proto: true, forced: forcedStringHTMLMethod$9('bold') }, {
  bold: function bold() {
    return createHTML$9(this, 'b', '', '');
  }
});

var $$n = _export;
var createHTML$8 = createHtml;
var forcedStringHTMLMethod$8 = stringHtmlForced;

// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
$$n({ target: 'String', proto: true, forced: forcedStringHTMLMethod$8('fixed') }, {
  fixed: function fixed() {
    return createHTML$8(this, 'tt', '', '');
  }
});

var $$m = _export;
var createHTML$7 = createHtml;
var forcedStringHTMLMethod$7 = stringHtmlForced;

// `String.prototype.fontcolor` method
// https://tc39.es/ecma262/#sec-string.prototype.fontcolor
$$m({ target: 'String', proto: true, forced: forcedStringHTMLMethod$7('fontcolor') }, {
  fontcolor: function fontcolor(color) {
    return createHTML$7(this, 'font', 'color', color);
  }
});

var $$l = _export;
var createHTML$6 = createHtml;
var forcedStringHTMLMethod$6 = stringHtmlForced;

// `String.prototype.fontsize` method
// https://tc39.es/ecma262/#sec-string.prototype.fontsize
$$l({ target: 'String', proto: true, forced: forcedStringHTMLMethod$6('fontsize') }, {
  fontsize: function fontsize(size) {
    return createHTML$6(this, 'font', 'size', size);
  }
});

var $$k = _export;
var createHTML$5 = createHtml;
var forcedStringHTMLMethod$5 = stringHtmlForced;

// `String.prototype.italics` method
// https://tc39.es/ecma262/#sec-string.prototype.italics
$$k({ target: 'String', proto: true, forced: forcedStringHTMLMethod$5('italics') }, {
  italics: function italics() {
    return createHTML$5(this, 'i', '', '');
  }
});

var $$j = _export;
var createHTML$4 = createHtml;
var forcedStringHTMLMethod$4 = stringHtmlForced;

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$$j({ target: 'String', proto: true, forced: forcedStringHTMLMethod$4('link') }, {
  link: function link(url) {
    return createHTML$4(this, 'a', 'href', url);
  }
});

var $$i = _export;
var createHTML$3 = createHtml;
var forcedStringHTMLMethod$3 = stringHtmlForced;

// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
$$i({ target: 'String', proto: true, forced: forcedStringHTMLMethod$3('small') }, {
  small: function small() {
    return createHTML$3(this, 'small', '', '');
  }
});

var $$h = _export;
var createHTML$2 = createHtml;
var forcedStringHTMLMethod$2 = stringHtmlForced;

// `String.prototype.strike` method
// https://tc39.es/ecma262/#sec-string.prototype.strike
$$h({ target: 'String', proto: true, forced: forcedStringHTMLMethod$2('strike') }, {
  strike: function strike() {
    return createHTML$2(this, 'strike', '', '');
  }
});

var $$g = _export;
var createHTML$1 = createHtml;
var forcedStringHTMLMethod$1 = stringHtmlForced;

// `String.prototype.sub` method
// https://tc39.es/ecma262/#sec-string.prototype.sub
$$g({ target: 'String', proto: true, forced: forcedStringHTMLMethod$1('sub') }, {
  sub: function sub() {
    return createHTML$1(this, 'sub', '', '');
  }
});

var $$f = _export;
var createHTML = createHtml;
var forcedStringHTMLMethod = stringHtmlForced;

// `String.prototype.sup` method
// https://tc39.es/ecma262/#sec-string.prototype.sup
$$f({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sup') }, {
  sup: function sup() {
    return createHTML(this, 'sup', '', '');
  }
});

var typedArrayConstructor = {exports: {}};

/* eslint-disable no-new -- required for testing */

var global$m = global$1H;
var fails$b = fails$1i;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$4;
var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer$2 = global$m.ArrayBuffer;
var Int8Array$3 = global$m.Int8Array;

var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$b(function () {
  Int8Array$3(1);
}) || !fails$b(function () {
  new Int8Array$3(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array$3();
  new Int8Array$3(null);
  new Int8Array$3(1.5);
  new Int8Array$3(iterable);
}, true) || fails$b(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array$3(new ArrayBuffer$2(2), 1, undefined).length !== 1;
});

var global$l = global$1H;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$i;

var RangeError$5 = global$l.RangeError;

var toPositiveInteger$1 = function (it) {
  var result = toIntegerOrInfinity$1(it);
  if (result < 0) throw RangeError$5("The argument can't be less than 0");
  return result;
};

var global$k = global$1H;
var toPositiveInteger = toPositiveInteger$1;

var RangeError$4 = global$k.RangeError;

var toOffset$2 = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError$4('Wrong offset');
  return offset;
};

var bind$2 = functionBindContext;
var call$5 = functionCall;
var aConstructor = aConstructor$3;
var toObject$1 = toObject$q;
var lengthOfArrayLike$4 = lengthOfArrayLike$n;
var getIterator$1 = getIterator$4;
var getIteratorMethod$1 = getIteratorMethod$5;
var isArrayIteratorMethod = isArrayIteratorMethod$3;
var aTypedArrayConstructor$3 = arrayBufferViewCore.aTypedArrayConstructor;

var typedArrayFrom$2 = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var O = toObject$1(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod$1(O);
  var i, length, result, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = getIterator$1(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call$5(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind$2(mapfn, arguments[2]);
  }
  length = lengthOfArrayLike$4(O);
  result = new (aTypedArrayConstructor$3(C))(length);
  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }
  return result;
};

var $$e = _export;
var global$j = global$1H;
var call$4 = functionCall;
var DESCRIPTORS$3 = descriptors;
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$2 = typedArrayConstructorsRequireWrappers;
var ArrayBufferViewCore$p = arrayBufferViewCore;
var ArrayBufferModule = arrayBuffer;
var anInstance$5 = anInstance$a;
var createPropertyDescriptor$3 = createPropertyDescriptor$c;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$f;
var isIntegralNumber = isIntegralNumber$3;
var toLength$1 = toLength$d;
var toIndex = toIndex$2;
var toOffset$1 = toOffset$2;
var toPropertyKey = toPropertyKey$8;
var hasOwn$7 = hasOwnProperty_1;
var classof$2 = classof$j;
var isObject$4 = isObject$z;
var isSymbol$1 = isSymbol$7;
var create$2 = objectCreate;
var isPrototypeOf = objectIsPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf$1;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var typedArrayFrom$1 = typedArrayFrom$2;
var forEach$1 = arrayIteration.forEach;
var setSpecies = setSpecies$6;
var definePropertyModule = objectDefineProperty;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var InternalStateModule$4 = internalState;
var inheritIfRequired$1 = inheritIfRequired$6;

var getInternalState$1 = InternalStateModule$4.get;
var setInternalState$4 = InternalStateModule$4.set;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError$3 = global$j.RangeError;
var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer$1.prototype;
var DataView$1 = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$p.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_CONSTRUCTOR$1 = ArrayBufferViewCore$p.TYPED_ARRAY_CONSTRUCTOR;
var TYPED_ARRAY_TAG = ArrayBufferViewCore$p.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore$p.TypedArray;
var TypedArrayPrototype$1 = ArrayBufferViewCore$p.TypedArrayPrototype;
var aTypedArrayConstructor$2 = ArrayBufferViewCore$p.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore$p.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  aTypedArrayConstructor$2(C);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, { get: function () {
    return getInternalState$1(this)[key];
  } });
};

var isArrayBuffer = function (it) {
  var klass;
  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof$2(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && !isSymbol$1(key)
    && key in target
    && isIntegralNumber(+key)
    && key >= 0;
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  key = toPropertyKey(key);
  return isTypedArrayIndex(target, key)
    ? createPropertyDescriptor$3(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject$4(descriptor)
    && hasOwn$7(descriptor, 'value')
    && !hasOwn$7(descriptor, 'get')
    && !hasOwn$7(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn$7(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn$7(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS$3) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype$1, 'buffer');
    addGetter(TypedArrayPrototype$1, 'byteOffset');
    addGetter(TypedArrayPrototype$1, 'byteLength');
    addGetter(TypedArrayPrototype$1, 'length');
  }

  $$e({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global$j[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState$1(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState$1(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance$5(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject$4(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer$1(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset$1(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError$3(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError$3(WRONG_LENGTH);
          } else {
            byteLength = toLength$1($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError$3(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return call$4(typedArrayFrom$1, TypedArrayConstructor, data);
        }
        setInternalState$4(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView$1(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create$2(TypedArrayPrototype$1);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$2) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance$5(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired$1(function () {
          if (!isObject$4(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return call$4(typedArrayFrom$1, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach$1(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty$3(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty$3(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    createNonEnumerableProperty$3(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR$1, TypedArrayConstructor);

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty$3(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor != NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $$e({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty$3(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty$3(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else typedArrayConstructor.exports = function () { /* empty */ };

var createTypedArrayConstructor$8 = typedArrayConstructor.exports;

// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor$8('Float32', function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var createTypedArrayConstructor$7 = typedArrayConstructor.exports;

// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor$7('Float64', function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var createTypedArrayConstructor$6 = typedArrayConstructor.exports;

// `Int8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor$6('Int8', function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var createTypedArrayConstructor$5 = typedArrayConstructor.exports;

// `Int16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor$5('Int16', function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var createTypedArrayConstructor$4 = typedArrayConstructor.exports;

// `Int32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor$4('Int32', function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var createTypedArrayConstructor$3 = typedArrayConstructor.exports;

// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor$3('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var createTypedArrayConstructor$2 = typedArrayConstructor.exports;

// `Uint8ClampedArray` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor$2('Uint8', function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

var createTypedArrayConstructor$1 = typedArrayConstructor.exports;

// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor$1('Uint16', function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var createTypedArrayConstructor = typedArrayConstructor.exports;

// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint32', function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var ArrayBufferViewCore$o = arrayBufferViewCore;
var lengthOfArrayLike$3 = lengthOfArrayLike$n;
var toIntegerOrInfinity = toIntegerOrInfinity$i;

var aTypedArray$m = ArrayBufferViewCore$o.aTypedArray;
var exportTypedArrayMethod$n = ArrayBufferViewCore$o.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
exportTypedArrayMethod$n('at', function at(index) {
  var O = aTypedArray$m(this);
  var len = lengthOfArrayLike$3(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});

var uncurryThis$d = functionUncurryThis;
var ArrayBufferViewCore$n = arrayBufferViewCore;
var $ArrayCopyWithin = arrayCopyWithin;

var u$ArrayCopyWithin = uncurryThis$d($ArrayCopyWithin);
var aTypedArray$l = ArrayBufferViewCore$n.aTypedArray;
var exportTypedArrayMethod$m = ArrayBufferViewCore$n.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod$m('copyWithin', function copyWithin(target, start /* , end */) {
  return u$ArrayCopyWithin(aTypedArray$l(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});

var ArrayBufferViewCore$m = arrayBufferViewCore;
var $every = arrayIteration.every;

var aTypedArray$k = ArrayBufferViewCore$m.aTypedArray;
var exportTypedArrayMethod$l = ArrayBufferViewCore$m.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod$l('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray$k(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$l = arrayBufferViewCore;
var call$3 = functionCall;
var $fill = arrayFill$1;

var aTypedArray$j = ArrayBufferViewCore$l.aTypedArray;
var exportTypedArrayMethod$k = ArrayBufferViewCore$l.exportTypedArrayMethod;

// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
exportTypedArrayMethod$k('fill', function fill(value /* , start, end */) {
  var length = arguments.length;
  return call$3(
    $fill,
    aTypedArray$j(this),
    value,
    length > 1 ? arguments[1] : undefined,
    length > 2 ? arguments[2] : undefined
  );
});

var lengthOfArrayLike$2 = lengthOfArrayLike$n;

var arrayFromConstructorAndList$1 = function (Constructor, list) {
  var index = 0;
  var length = lengthOfArrayLike$2(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var ArrayBufferViewCore$k = arrayBufferViewCore;
var speciesConstructor = speciesConstructor$6;

var TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore$k.TYPED_ARRAY_CONSTRUCTOR;
var aTypedArrayConstructor$1 = ArrayBufferViewCore$k.aTypedArrayConstructor;

// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
var typedArraySpeciesConstructor$4 = function (originalArray) {
  return aTypedArrayConstructor$1(speciesConstructor(originalArray, originalArray[TYPED_ARRAY_CONSTRUCTOR]));
};

var arrayFromConstructorAndList = arrayFromConstructorAndList$1;
var typedArraySpeciesConstructor$3 = typedArraySpeciesConstructor$4;

var typedArrayFromSpeciesAndList = function (instance, list) {
  return arrayFromConstructorAndList(typedArraySpeciesConstructor$3(instance), list);
};

var ArrayBufferViewCore$j = arrayBufferViewCore;
var $filter = arrayIteration.filter;
var fromSpeciesAndList = typedArrayFromSpeciesAndList;

var aTypedArray$i = ArrayBufferViewCore$j.aTypedArray;
var exportTypedArrayMethod$j = ArrayBufferViewCore$j.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod$j('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray$i(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSpeciesAndList(this, list);
});

var ArrayBufferViewCore$i = arrayBufferViewCore;
var $find = arrayIteration.find;

var aTypedArray$h = ArrayBufferViewCore$i.aTypedArray;
var exportTypedArrayMethod$i = ArrayBufferViewCore$i.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod$i('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray$h(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$h = arrayBufferViewCore;
var $findIndex = arrayIteration.findIndex;

var aTypedArray$g = ArrayBufferViewCore$h.aTypedArray;
var exportTypedArrayMethod$h = ArrayBufferViewCore$h.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod$h('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray$g(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$g = arrayBufferViewCore;
var $forEach = arrayIteration.forEach;

var aTypedArray$f = ArrayBufferViewCore$g.aTypedArray;
var exportTypedArrayMethod$g = ArrayBufferViewCore$g.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod$g('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray$f(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$1 = typedArrayConstructorsRequireWrappers;
var exportTypedArrayStaticMethod$1 = arrayBufferViewCore.exportTypedArrayStaticMethod;
var typedArrayFrom = typedArrayFrom$2;

// `%TypedArray%.from` method
// https://tc39.es/ecma262/#sec-%typedarray%.from
exportTypedArrayStaticMethod$1('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$1);

var ArrayBufferViewCore$f = arrayBufferViewCore;
var $includes = arrayIncludes.includes;

var aTypedArray$e = ArrayBufferViewCore$f.aTypedArray;
var exportTypedArrayMethod$f = ArrayBufferViewCore$f.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod$f('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray$e(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$e = arrayBufferViewCore;
var $indexOf = arrayIncludes.indexOf;

var aTypedArray$d = ArrayBufferViewCore$e.aTypedArray;
var exportTypedArrayMethod$e = ArrayBufferViewCore$e.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod$e('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray$d(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});

var global$i = global$1H;
var fails$a = fails$1i;
var uncurryThis$c = functionUncurryThis;
var ArrayBufferViewCore$d = arrayBufferViewCore;
var ArrayIterators = es_array_iterator;
var wellKnownSymbol$3 = wellKnownSymbol$z;

var ITERATOR$3 = wellKnownSymbol$3('iterator');
var Uint8Array$1 = global$i.Uint8Array;
var arrayValues = uncurryThis$c(ArrayIterators.values);
var arrayKeys = uncurryThis$c(ArrayIterators.keys);
var arrayEntries = uncurryThis$c(ArrayIterators.entries);
var aTypedArray$c = ArrayBufferViewCore$d.aTypedArray;
var exportTypedArrayMethod$d = ArrayBufferViewCore$d.exportTypedArrayMethod;
var TypedArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype;

var GENERIC = !fails$a(function () {
  TypedArrayPrototype[ITERATOR$3].call([1]);
});

var ITERATOR_IS_VALUES = !!TypedArrayPrototype
  && TypedArrayPrototype.values
  && TypedArrayPrototype[ITERATOR$3] === TypedArrayPrototype.values
  && TypedArrayPrototype.values.name === 'values';

var typedArrayValues = function values() {
  return arrayValues(aTypedArray$c(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod$d('entries', function entries() {
  return arrayEntries(aTypedArray$c(this));
}, GENERIC);
// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod$d('keys', function keys() {
  return arrayKeys(aTypedArray$c(this));
}, GENERIC);
// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod$d('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod$d(ITERATOR$3, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });

var ArrayBufferViewCore$c = arrayBufferViewCore;
var uncurryThis$b = functionUncurryThis;

var aTypedArray$b = ArrayBufferViewCore$c.aTypedArray;
var exportTypedArrayMethod$c = ArrayBufferViewCore$c.exportTypedArrayMethod;
var $join = uncurryThis$b([].join);

// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
exportTypedArrayMethod$c('join', function join(separator) {
  return $join(aTypedArray$b(this), separator);
});

var ArrayBufferViewCore$b = arrayBufferViewCore;
var apply$2 = functionApply$1;
var $lastIndexOf = arrayLastIndexOf;

var aTypedArray$a = ArrayBufferViewCore$b.aTypedArray;
var exportTypedArrayMethod$b = ArrayBufferViewCore$b.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
exportTypedArrayMethod$b('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  var length = arguments.length;
  return apply$2($lastIndexOf, aTypedArray$a(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
});

var ArrayBufferViewCore$a = arrayBufferViewCore;
var $map = arrayIteration.map;
var typedArraySpeciesConstructor$2 = typedArraySpeciesConstructor$4;

var aTypedArray$9 = ArrayBufferViewCore$a.aTypedArray;
var exportTypedArrayMethod$a = ArrayBufferViewCore$a.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod$a('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray$9(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (typedArraySpeciesConstructor$2(O))(length);
  });
});

var ArrayBufferViewCore$9 = arrayBufferViewCore;
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;

var aTypedArrayConstructor = ArrayBufferViewCore$9.aTypedArrayConstructor;
var exportTypedArrayStaticMethod = ArrayBufferViewCore$9.exportTypedArrayStaticMethod;

// `%TypedArray%.of` method
// https://tc39.es/ecma262/#sec-%typedarray%.of
exportTypedArrayStaticMethod('of', function of(/* ...items */) {
  var index = 0;
  var length = arguments.length;
  var result = new (aTypedArrayConstructor(this))(length);
  while (length > index) result[index] = arguments[index++];
  return result;
}, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);

var ArrayBufferViewCore$8 = arrayBufferViewCore;
var $reduce = arrayReduce.left;

var aTypedArray$8 = ArrayBufferViewCore$8.aTypedArray;
var exportTypedArrayMethod$9 = ArrayBufferViewCore$8.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod$9('reduce', function reduce(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduce(aTypedArray$8(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$7 = arrayBufferViewCore;
var $reduceRight = arrayReduce.right;

var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
var exportTypedArrayMethod$8 = ArrayBufferViewCore$7.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRicht` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod$8('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduceRight(aTypedArray$7(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$6 = arrayBufferViewCore;

var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
var exportTypedArrayMethod$7 = ArrayBufferViewCore$6.exportTypedArrayMethod;
var floor$2 = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod$7('reverse', function reverse() {
  var that = this;
  var length = aTypedArray$6(that).length;
  var middle = floor$2(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});

var global$h = global$1H;
var call$2 = functionCall;
var ArrayBufferViewCore$5 = arrayBufferViewCore;
var lengthOfArrayLike$1 = lengthOfArrayLike$n;
var toOffset = toOffset$2;
var toIndexedObject = toObject$q;
var fails$9 = fails$1i;

var RangeError$2 = global$h.RangeError;
var Int8Array$2 = global$h.Int8Array;
var Int8ArrayPrototype = Int8Array$2 && Int8Array$2.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
var exportTypedArrayMethod$6 = ArrayBufferViewCore$5.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails$9(function () {
  // eslint-disable-next-line es-x/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call$2($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$5.NATIVE_ARRAY_BUFFER_VIEWS && fails$9(function () {
  var array = new Int8Array$2(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod$6('set', function set(arrayLike /* , offset */) {
  aTypedArray$5(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return call$2($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike$1(src);
  var index = 0;
  if (len + offset > length) throw RangeError$2('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

var ArrayBufferViewCore$4 = arrayBufferViewCore;
var typedArraySpeciesConstructor$1 = typedArraySpeciesConstructor$4;
var fails$8 = fails$1i;
var arraySlice$3 = arraySlice$b;

var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
var exportTypedArrayMethod$5 = ArrayBufferViewCore$4.exportTypedArrayMethod;

var FORCED$1 = fails$8(function () {
  // eslint-disable-next-line es-x/no-typed-arrays -- required for testing
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod$5('slice', function slice(start, end) {
  var list = arraySlice$3(aTypedArray$4(this), start, end);
  var C = typedArraySpeciesConstructor$1(this);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED$1);

var ArrayBufferViewCore$3 = arrayBufferViewCore;
var $some = arrayIteration.some;

var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
var exportTypedArrayMethod$4 = ArrayBufferViewCore$3.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod$4('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray$3(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

var global$g = global$1H;
var uncurryThis$a = functionUncurryThis;
var fails$7 = fails$1i;
var aCallable$1 = aCallable$i;
var internalSort = arraySort$1;
var ArrayBufferViewCore$2 = arrayBufferViewCore;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;

var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
var exportTypedArrayMethod$3 = ArrayBufferViewCore$2.exportTypedArrayMethod;
var Uint16Array = global$g.Uint16Array;
var un$Sort = Uint16Array && uncurryThis$a(Uint16Array.prototype.sort);

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!un$Sort && !(fails$7(function () {
  un$Sort(new Uint16Array(2), null);
}) && fails$7(function () {
  un$Sort(new Uint16Array(2), {});
}));

var STABLE_SORT = !!un$Sort && !fails$7(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 74;
  if (FF) return FF < 67;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 602;

  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  un$Sort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return -1;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
};

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod$3('sort', function sort(comparefn) {
  if (comparefn !== undefined) aCallable$1(comparefn);
  if (STABLE_SORT) return un$Sort(this, comparefn);

  return internalSort(aTypedArray$2(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

var ArrayBufferViewCore$1 = arrayBufferViewCore;
var toLength = toLength$d;
var toAbsoluteIndex = toAbsoluteIndex$9;
var typedArraySpeciesConstructor = typedArraySpeciesConstructor$4;

var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
var exportTypedArrayMethod$2 = ArrayBufferViewCore$1.exportTypedArrayMethod;

// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod$2('subarray', function subarray(begin, end) {
  var O = aTypedArray$1(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  var C = typedArraySpeciesConstructor(O);
  return new C(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
  );
});

var global$f = global$1H;
var apply$1 = functionApply$1;
var ArrayBufferViewCore = arrayBufferViewCore;
var fails$6 = fails$1i;
var arraySlice$2 = arraySlice$b;

var Int8Array$1 = global$f.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod$1 = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails$6(function () {
  $toLocaleString.call(new Int8Array$1(1));
});

var FORCED = fails$6(function () {
  return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString();
}) || !fails$6(function () {
  Int8Array$1.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod$1('toLocaleString', function toLocaleString() {
  return apply$1(
    $toLocaleString,
    TO_LOCALE_STRING_BUG ? arraySlice$2(aTypedArray(this)) : aTypedArray(this),
    arraySlice$2(arguments)
  );
}, FORCED);

var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod;
var fails$5 = fails$1i;
var global$e = global$1H;
var uncurryThis$9 = functionUncurryThis;

var Uint8Array = global$e.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var join$3 = uncurryThis$9([].join);

if (fails$5(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return join$3(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);

var $$d = _export;
var uncurryThis$8 = functionUncurryThis;
var toString$2 = toString$v;

var fromCharCode$2 = String.fromCharCode;
var charAt$4 = uncurryThis$8(''.charAt);
var exec$3 = uncurryThis$8(/./.exec);
var stringSlice$2 = uncurryThis$8(''.slice);

var hex2 = /^[\da-f]{2}$/i;
var hex4 = /^[\da-f]{4}$/i;

// `unescape` method
// https://tc39.es/ecma262/#sec-unescape-string
$$d({ global: true }, {
  unescape: function unescape(string) {
    var str = toString$2(string);
    var result = '';
    var length = str.length;
    var index = 0;
    var chr, part;
    while (index < length) {
      chr = charAt$4(str, index++);
      if (chr === '%') {
        if (charAt$4(str, index) === 'u') {
          part = stringSlice$2(str, index + 1, index + 5);
          if (exec$3(hex4, part)) {
            result += fromCharCode$2(parseInt(part, 16));
            index += 5;
            continue;
          }
        } else {
          part = stringSlice$2(str, index, index + 2);
          if (exec$3(hex2, part)) {
            result += fromCharCode$2(parseInt(part, 16));
            index += 2;
            continue;
          }
        }
      }
      result += chr;
    } return result;
  }
});

var uncurryThis$7 = functionUncurryThis;
var defineBuiltIns$2 = defineBuiltIns$5;
var getWeakData = internalMetadata.exports.getWeakData;
var anObject$3 = anObject$C;
var isObject$3 = isObject$z;
var anInstance$4 = anInstance$a;
var iterate$1 = iterate$a;
var ArrayIterationModule = arrayIteration;
var hasOwn$6 = hasOwnProperty_1;
var InternalStateModule$3 = internalState;

var setInternalState$3 = InternalStateModule$3.set;
var internalStateGetterFor = InternalStateModule$3.getterFor;
var find$1 = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice$1 = uncurryThis$7([].splice);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find$1(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice$1(this.entries, index, 1);
    return !!~index;
  }
};

var collectionWeak$2 = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance$4(that, Prototype);
      setInternalState$3(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate$1(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject$3(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    defineBuiltIns$2(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject$3(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn$6(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject$3(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn$6(data, state.id);
      }
    });

    defineBuiltIns$2(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject$3(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};

var global$d = global$1H;
var uncurryThis$6 = functionUncurryThis;
var defineBuiltIns$1 = defineBuiltIns$5;
var InternalMetadataModule = internalMetadata.exports;
var collection$1 = collection$4;
var collectionWeak$1 = collectionWeak$2;
var isObject$2 = isObject$z;
var isExtensible = objectIsExtensible;
var enforceInternalState = internalState.enforce;
var NATIVE_WEAK_MAP = nativeWeakMap;

var IS_IE11 = !global$d.ActiveXObject && 'ActiveXObject' in global$d;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection$1('WeakMap', wrapper, collectionWeak$1);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak$1.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = uncurryThis$6(WeakMapPrototype['delete']);
  var nativeHas = uncurryThis$6(WeakMapPrototype.has);
  var nativeGet = uncurryThis$6(WeakMapPrototype.get);
  var nativeSet = uncurryThis$6(WeakMapPrototype.set);
  defineBuiltIns$1(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject$2(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen['delete'](key);
      } return nativeDelete(this, key);
    },
    has: function has(key) {
      if (isObject$2(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      } return nativeHas(this, key);
    },
    get: function get(key) {
      if (isObject$2(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      } return nativeGet(this, key);
    },
    set: function set(key, value) {
      if (isObject$2(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else nativeSet(this, key, value);
      return this;
    }
  });
}

var collection = collection$4;
var collectionWeak = collectionWeak$2;

// `WeakSet` constructor
// https://tc39.es/ecma262/#sec-weakset-constructor
collection('WeakSet', function (init) {
  return function WeakSet() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionWeak);

var itoc$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var ctoi$1 = {};

for (var index = 0; index < 66; index++) ctoi$1[itoc$1.charAt(index)] = index;

var base64Map = {
  itoc: itoc$1,
  ctoi: ctoi$1
};

var $$c = _export;
var getBuiltIn$4 = getBuiltIn$n;
var uncurryThis$5 = functionUncurryThis;
var fails$4 = fails$1i;
var toString$1 = toString$v;
var hasOwn$5 = hasOwnProperty_1;
var validateArgumentsLength$6 = validateArgumentsLength$8;
var ctoi = base64Map.ctoi;

var disallowed = /[^\d+/a-z]/i;
var whitespaces = /[\t\n\f\r ]+/g;
var finalEq = /[=]+$/;

var $atob = getBuiltIn$4('atob');
var fromCharCode$1 = String.fromCharCode;
var charAt$3 = uncurryThis$5(''.charAt);
var replace$3 = uncurryThis$5(''.replace);
var exec$2 = uncurryThis$5(disallowed.exec);

var NO_SPACES_IGNORE = fails$4(function () {
  return $atob(' ') !== '';
});

var NO_ENCODING_CHECK = !fails$4(function () {
  $atob('a');
});

var NO_ARG_RECEIVING_CHECK$1 = !NO_SPACES_IGNORE && !NO_ENCODING_CHECK && !fails$4(function () {
  $atob();
});

var WRONG_ARITY$1 = !NO_SPACES_IGNORE && !NO_ENCODING_CHECK && $atob.length !== 1;

// `atob` method
// https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob
$$c({ global: true, enumerable: true, forced: NO_SPACES_IGNORE || NO_ENCODING_CHECK || NO_ARG_RECEIVING_CHECK$1 || WRONG_ARITY$1 }, {
  atob: function atob(data) {
    validateArgumentsLength$6(arguments.length, 1);
    if (NO_ARG_RECEIVING_CHECK$1 || WRONG_ARITY$1) return $atob(data);
    var string = replace$3(toString$1(data), whitespaces, '');
    var output = '';
    var position = 0;
    var bc = 0;
    var chr, bs;
    if (string.length % 4 == 0) {
      string = replace$3(string, finalEq, '');
    }
    if (string.length % 4 == 1 || exec$2(disallowed, string)) {
      throw new (getBuiltIn$4('DOMException'))('The string is not correctly encoded', 'InvalidCharacterError');
    }
    while (chr = charAt$3(string, position++)) {
      if (hasOwn$5(ctoi, chr)) {
        bs = bc % 4 ? bs * 64 + ctoi[chr] : ctoi[chr];
        if (bc++ % 4) output += fromCharCode$1(255 & bs >> (-2 * bc & 6));
      }
    } return output;
  }
});

var $$b = _export;
var getBuiltIn$3 = getBuiltIn$n;
var uncurryThis$4 = functionUncurryThis;
var fails$3 = fails$1i;
var toString = toString$v;
var validateArgumentsLength$5 = validateArgumentsLength$8;
var itoc = base64Map.itoc;

var $btoa = getBuiltIn$3('btoa');
var charAt$2 = uncurryThis$4(''.charAt);
var charCodeAt$1 = uncurryThis$4(''.charCodeAt);

var NO_ARG_RECEIVING_CHECK = !!$btoa && !fails$3(function () {
  $btoa();
});

var WRONG_ARG_CONVERSION = !!$btoa && fails$3(function () {
  return $btoa(null) !== 'bnVsbA==';
});

var WRONG_ARITY = !!$btoa && $btoa.length !== 1;

// `btoa` method
// https://html.spec.whatwg.org/multipage/webappapis.html#dom-btoa
$$b({ global: true, enumerable: true, forced: NO_ARG_RECEIVING_CHECK || WRONG_ARG_CONVERSION || WRONG_ARITY }, {
  btoa: function btoa(data) {
    validateArgumentsLength$5(arguments.length, 1);
    if (NO_ARG_RECEIVING_CHECK || WRONG_ARG_CONVERSION || WRONG_ARITY) return $btoa(toString(data));
    var string = toString(data);
    var output = '';
    var position = 0;
    var map = itoc;
    var block, charCode;
    while (charAt$2(string, position) || (map = '=', position % 1)) {
      charCode = charCodeAt$1(string, position += 3 / 4);
      if (charCode > 0xFF) {
        throw new (getBuiltIn$3('DOMException'))('The string contains characters outside of the Latin1 range', 'InvalidCharacterError');
      }
      block = block << 8 | charCode;
      output += charAt$2(map, 63 & block >> 8 - position % 1 * 8);
    } return output;
  }
});

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$2 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;

var global$c = global$1H;
var DOMIterables$1 = domIterables;
var DOMTokenListPrototype$1 = domTokenListPrototype;
var forEach = arrayForEach;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$f;

var handlePrototype$1 = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty$2(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME$1 in DOMIterables$1) {
  if (DOMIterables$1[COLLECTION_NAME$1]) {
    handlePrototype$1(global$c[COLLECTION_NAME$1] && global$c[COLLECTION_NAME$1].prototype);
  }
}

handlePrototype$1(DOMTokenListPrototype$1);

var global$b = global$1H;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$f;
var wellKnownSymbol$2 = wellKnownSymbol$z;

var ITERATOR$2 = wellKnownSymbol$2('iterator');
var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$2, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$2] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$b[COLLECTION_NAME] && global$b[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var IS_NODE$1 = engineIsNode;

var tryNodeRequire$1 = function (name) {
  try {
    // eslint-disable-next-line no-new-func -- safe
    if (IS_NODE$1) return Function('return require("' + name + '")')();
  } catch (error) { /* empty */ }
};

var domExceptionConstants = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};

var $$a = _export;
var tryNodeRequire = tryNodeRequire$1;
var getBuiltIn$2 = getBuiltIn$n;
var fails$2 = fails$1i;
var create$1 = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$c;
var defineProperty$1 = objectDefineProperty.f;
var defineBuiltIn$2 = defineBuiltIn$n;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$5;
var hasOwn$4 = hasOwnProperty_1;
var anInstance$3 = anInstance$a;
var anObject$2 = anObject$C;
var errorToString = errorToString$2;
var normalizeStringArgument$1 = normalizeStringArgument$5;
var DOMExceptionConstants$1 = domExceptionConstants;
var clearErrorStack$1 = clearErrorStack$4;
var InternalStateModule$2 = internalState;
var DESCRIPTORS$2 = descriptors;

var DOM_EXCEPTION$2 = 'DOMException';
var DATA_CLONE_ERR = 'DATA_CLONE_ERR';
var Error$3 = getBuiltIn$2('Error');
// NodeJS < 17.0 does not expose `DOMException` to global
var NativeDOMException$1 = getBuiltIn$2(DOM_EXCEPTION$2) || (function () {
  try {
    // NodeJS < 15.0 does not expose `MessageChannel` to global
    var MessageChannel = getBuiltIn$2('MessageChannel') || tryNodeRequire('worker_threads').MessageChannel;
    // eslint-disable-next-line es-x/no-weak-map, unicorn/require-post-message-target-origin -- safe
    new MessageChannel().port1.postMessage(new WeakMap());
  } catch (error) {
    if (error.name == DATA_CLONE_ERR && error.code == 25) return error.constructor;
  }
})();
var NativeDOMExceptionPrototype = NativeDOMException$1 && NativeDOMException$1.prototype;
var ErrorPrototype = Error$3.prototype;
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState = InternalStateModule$2.getterFor(DOM_EXCEPTION$2);
var HAS_STACK = 'stack' in Error$3(DOM_EXCEPTION$2);

var codeFor = function (name) {
  return hasOwn$4(DOMExceptionConstants$1, name) && DOMExceptionConstants$1[name].m ? DOMExceptionConstants$1[name].c : 0;
};

var $DOMException$1 = function DOMException() {
  anInstance$3(this, DOMExceptionPrototype$1);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument$1(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument$1(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var code = codeFor(name);
  setInternalState$2(this, {
    type: DOM_EXCEPTION$2,
    name: name,
    message: message,
    code: code
  });
  if (!DESCRIPTORS$2) {
    this.name = name;
    this.message = message;
    this.code = code;
  }
  if (HAS_STACK) {
    var error = Error$3(message);
    error.name = DOM_EXCEPTION$2;
    defineProperty$1(this, 'stack', createPropertyDescriptor$2(1, clearErrorStack$1(error.stack, 1)));
  }
};

var DOMExceptionPrototype$1 = $DOMException$1.prototype = create$1(ErrorPrototype);

var createGetterDescriptor = function (get) {
  return { enumerable: true, configurable: true, get: get };
};

var getterFor = function (key) {
  return createGetterDescriptor(function () {
    return getInternalState(this)[key];
  });
};

if (DESCRIPTORS$2) {
  defineBuiltInAccessor$1(DOMExceptionPrototype$1, 'code', getterFor('code'));
  defineBuiltInAccessor$1(DOMExceptionPrototype$1, 'message', getterFor('message'));
  defineBuiltInAccessor$1(DOMExceptionPrototype$1, 'name', getterFor('name'));
}

defineProperty$1(DOMExceptionPrototype$1, 'constructor', createPropertyDescriptor$2(1, $DOMException$1));

// FF36- DOMException is a function, but can't be constructed
var INCORRECT_CONSTRUCTOR = fails$2(function () {
  return !(new NativeDOMException$1() instanceof Error$3);
});

// Safari 10.1 / Chrome 32- / IE8- DOMException.prototype.toString bugs
var INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails$2(function () {
  return ErrorPrototype.toString !== errorToString || String(new NativeDOMException$1(1, 2)) !== '2: 1';
});

// Deno 1.6.3- DOMException.prototype.code just missed
var INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails$2(function () {
  return new NativeDOMException$1(1, 'DataCloneError').code !== 25;
});

// Deno 1.6.3- DOMException constants just missed
INCORRECT_CONSTRUCTOR
  || NativeDOMException$1[DATA_CLONE_ERR] !== 25
  || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;

var FORCED_CONSTRUCTOR$1 = INCORRECT_CONSTRUCTOR;

// `DOMException` constructor
// https://webidl.spec.whatwg.org/#idl-DOMException
$$a({ global: true, constructor: true, forced: FORCED_CONSTRUCTOR$1 }, {
  DOMException: FORCED_CONSTRUCTOR$1 ? $DOMException$1 : NativeDOMException$1
});

var PolyfilledDOMException$1 = getBuiltIn$2(DOM_EXCEPTION$2);
var PolyfilledDOMExceptionPrototype$1 = PolyfilledDOMException$1.prototype;

if (INCORRECT_TO_STRING && (NativeDOMException$1 === PolyfilledDOMException$1)) {
  defineBuiltIn$2(PolyfilledDOMExceptionPrototype$1, 'toString', errorToString);
}

if (INCORRECT_CODE && DESCRIPTORS$2 && NativeDOMException$1 === PolyfilledDOMException$1) {
  defineBuiltInAccessor$1(PolyfilledDOMExceptionPrototype$1, 'code', createGetterDescriptor(function () {
    return codeFor(anObject$2(this).name);
  }));
}

for (var key$1 in DOMExceptionConstants$1) if (hasOwn$4(DOMExceptionConstants$1, key$1)) {
  var constant$1 = DOMExceptionConstants$1[key$1];
  var constantName$1 = constant$1.s;
  var descriptor = createPropertyDescriptor$2(6, constant$1.c);
  if (!hasOwn$4(PolyfilledDOMException$1, constantName$1)) {
    defineProperty$1(PolyfilledDOMException$1, constantName$1, descriptor);
  }
  if (!hasOwn$4(PolyfilledDOMExceptionPrototype$1, constantName$1)) {
    defineProperty$1(PolyfilledDOMExceptionPrototype$1, constantName$1, descriptor);
  }
}

var $$9 = _export;
var getBuiltIn$1 = getBuiltIn$n;
var createPropertyDescriptor$1 = createPropertyDescriptor$c;
var defineProperty = objectDefineProperty.f;
var hasOwn$3 = hasOwnProperty_1;
var anInstance$2 = anInstance$a;
var inheritIfRequired = inheritIfRequired$6;
var normalizeStringArgument = normalizeStringArgument$5;
var DOMExceptionConstants = domExceptionConstants;
var clearErrorStack = clearErrorStack$4;

var DOM_EXCEPTION$1 = 'DOMException';
var Error$2 = getBuiltIn$1('Error');
var NativeDOMException = getBuiltIn$1(DOM_EXCEPTION$1);

var $DOMException = function DOMException() {
  anInstance$2(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = Error$2(message);
  error.name = DOM_EXCEPTION$1;
  defineProperty(that, 'stack', createPropertyDescriptor$1(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in Error$2(DOM_EXCEPTION$1);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);
var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$$9({ global: true, constructor: true, forced: FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn$1(DOM_EXCEPTION$1);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor$1(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn$3(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn$3(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor$1(6, constant.c));
    }
  }
}

var getBuiltIn = getBuiltIn$n;
var setToStringTag$2 = setToStringTag$d;

var DOM_EXCEPTION = 'DOMException';

setToStringTag$2(getBuiltIn(DOM_EXCEPTION), DOM_EXCEPTION);

var $$8 = _export;
var global$a = global$1H;
var clearImmediate = task$1.clear;

// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$$8({ global: true, bind: true, enumerable: true, forced: global$a.clearImmediate !== clearImmediate }, {
  clearImmediate: clearImmediate
});

var $$7 = _export;
var global$9 = global$1H;
var setImmediate = task$1.set;

// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$$7({ global: true, bind: true, enumerable: true, forced: global$9.setImmediate !== setImmediate }, {
  setImmediate: setImmediate
});

var $$6 = _export;
var global$8 = global$1H;
var microtask = microtask$2;
var aCallable = aCallable$i;
var validateArgumentsLength$4 = validateArgumentsLength$8;
var IS_NODE = engineIsNode;

var process$1 = global$8.process;

// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
$$6({ global: true, enumerable: true, noTargetGet: true }, {
  queueMicrotask: function queueMicrotask(fn) {
    validateArgumentsLength$4(arguments.length, 1);
    aCallable(fn);
    var domain = IS_NODE && process$1.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});

var $$5 = _export;
var global$7 = global$1H;
var getBuiltin = getBuiltIn$n;
var uncurryThis$3 = functionUncurryThis;
var fails$1 = fails$1i;
var uid = uid$6;
var isCallable$2 = isCallable$y;
var isConstructor = isConstructor$6;
var isObject$1 = isObject$z;
var isSymbol = isSymbol$7;
var iterate = iterate$a;
var anObject$1 = anObject$C;
var classof$1 = classof$j;
var hasOwn$2 = hasOwnProperty_1;
var createProperty = createProperty$9;
var createNonEnumerableProperty = createNonEnumerableProperty$f;
var lengthOfArrayLike = lengthOfArrayLike$n;
var validateArgumentsLength$3 = validateArgumentsLength$8;
var getRegExpFlags = regexpGetFlags;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;

var Object$1 = global$7.Object;
var Date$1 = global$7.Date;
var Error$1 = global$7.Error;
var EvalError = global$7.EvalError;
var RangeError$1 = global$7.RangeError;
var ReferenceError = global$7.ReferenceError;
var SyntaxError = global$7.SyntaxError;
var TypeError$3 = global$7.TypeError;
var URIError = global$7.URIError;
var PerformanceMark = global$7.PerformanceMark;
var WebAssembly = global$7.WebAssembly;
var CompileError = WebAssembly && WebAssembly.CompileError || Error$1;
var LinkError = WebAssembly && WebAssembly.LinkError || Error$1;
var RuntimeError = WebAssembly && WebAssembly.RuntimeError || Error$1;
var DOMException = getBuiltin('DOMException');
var Set = getBuiltin('Set');
var Map = getBuiltin('Map');
var MapPrototype = Map.prototype;
var mapHas = uncurryThis$3(MapPrototype.has);
var mapGet = uncurryThis$3(MapPrototype.get);
var mapSet = uncurryThis$3(MapPrototype.set);
var setAdd = uncurryThis$3(Set.prototype.add);
var objectKeys = getBuiltin('Object', 'keys');
var push$3 = uncurryThis$3([].push);
var booleanValueOf = uncurryThis$3(true.valueOf);
var numberValueOf = uncurryThis$3(1.0.valueOf);
var stringValueOf = uncurryThis$3(''.valueOf);
var getTime = uncurryThis$3(Date$1.prototype.getTime);
var PERFORMANCE_MARK = uid('structuredClone');
var DATA_CLONE_ERROR = 'DataCloneError';
var TRANSFERRING = 'Transferring';

var checkBasicSemantic = function (structuredCloneImplementation) {
  return !fails$1(function () {
    var set1 = new global$7.Set([7]);
    var set2 = structuredCloneImplementation(set1);
    var number = structuredCloneImplementation(Object$1(7));
    return set2 == set1 || !set2.has(7) || typeof number != 'object' || number != 7;
  }) && structuredCloneImplementation;
};

var checkErrorsCloning = function (structuredCloneImplementation) {
  return !fails$1(function () {
    var error = new Error$1();
    var test = structuredCloneImplementation({ a: error, b: error });
    return !(test && test.a === test.b && test.a instanceof Error$1);
  });
};

// https://github.com/whatwg/html/pull/5749
var checkNewErrorsCloningSemantic = function (structuredCloneImplementation) {
  return !fails$1(function () {
    var test = structuredCloneImplementation(new global$7.AggregateError([1], PERFORMANCE_MARK, { cause: 3 }));
    return test.name != 'AggregateError' || test.errors[0] != 1 || test.message != PERFORMANCE_MARK || test.cause != 3;
  });
};

// FF94+, Safari 15.4+, Chrome 98+, NodeJS 17.0+, Deno 1.13+
// FF and Safari implementations can't clone errors
// https://bugzilla.mozilla.org/show_bug.cgi?id=1556604
// Chrome <103 returns `null` if cloned object contains multiple references to one error
// https://bugs.chromium.org/p/v8/issues/detail?id=12542
// no one of current implementations supports new (html/5749) error cloning semantic
var nativeStructuredClone = global$7.structuredClone;

var FORCED_REPLACEMENT = !checkErrorsCloning(nativeStructuredClone) || !checkNewErrorsCloningSemantic(nativeStructuredClone);

// Chrome 82+, Safari 14.1+, Deno 1.11+
// Chrome 78-81 implementation swaps `.name` and `.message` of cloned `DOMException`
// Chrome returns `null` if cloned object contains multiple references to one error
// Safari 14.1 implementation doesn't clone some `RegExp` flags, so requires a workaround
// Safari implementation can't clone errors
// Deno 1.2-1.10 implementations too naive
// NodeJS 16.0+ does not have `PerformanceMark` constructor
// NodeJS <17.2 structured cloning implementation from `performance.mark` is too naive
// and can't clone, for example, `RegExp` or some boxed primitives
// https://github.com/nodejs/node/issues/40840
// no one of current implementations supports new (html/5749) error cloning semantic
var structuredCloneFromMark = !nativeStructuredClone && checkBasicSemantic(function (value) {
  return new PerformanceMark(PERFORMANCE_MARK, { detail: value }).detail;
});

var nativeRestrictedStructuredClone = checkBasicSemantic(nativeStructuredClone) || structuredCloneFromMark;

var throwUncloneable = function (type) {
  throw new DOMException('Uncloneable type: ' + type, DATA_CLONE_ERROR);
};

var throwUnpolyfillable = function (type, kind) {
  throw new DOMException((kind || 'Cloning') + ' of ' + type + ' cannot be properly polyfilled in this engine', DATA_CLONE_ERROR);
};

var structuredCloneInternal = function (value, map) {
  if (isSymbol(value)) throwUncloneable('Symbol');
  if (!isObject$1(value)) return value;
  // effectively preserves circular references
  if (map) {
    if (mapHas(map, value)) return mapGet(map, value);
  } else map = new Map();

  var type = classof$1(value);
  var deep = false;
  var C, name, cloned, dataTransfer, i, length, keys, key, source, target;

  switch (type) {
    case 'Array':
      cloned = [];
      deep = true;
      break;
    case 'Object':
      cloned = {};
      deep = true;
      break;
    case 'Map':
      cloned = new Map();
      deep = true;
      break;
    case 'Set':
      cloned = new Set();
      deep = true;
      break;
    case 'RegExp':
      // in this block because of a Safari 14.1 bug
      // old FF does not clone regexes passed to the constructor, so get the source and flags directly
      cloned = new RegExp(value.source, getRegExpFlags(value));
      break;
    case 'Error':
      name = value.name;
      switch (name) {
        case 'AggregateError':
          cloned = getBuiltin('AggregateError')([]);
          break;
        case 'EvalError':
          cloned = EvalError();
          break;
        case 'RangeError':
          cloned = RangeError$1();
          break;
        case 'ReferenceError':
          cloned = ReferenceError();
          break;
        case 'SyntaxError':
          cloned = SyntaxError();
          break;
        case 'TypeError':
          cloned = TypeError$3();
          break;
        case 'URIError':
          cloned = URIError();
          break;
        case 'CompileError':
          cloned = CompileError();
          break;
        case 'LinkError':
          cloned = LinkError();
          break;
        case 'RuntimeError':
          cloned = RuntimeError();
          break;
        default:
          cloned = Error$1();
      }
      deep = true;
      break;
    case 'DOMException':
      cloned = new DOMException(value.message, value.name);
      deep = true;
      break;
    case 'DataView':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'BigInt64Array':
    case 'BigUint64Array':
      C = global$7[type];
      // in some old engines like Safari 9, typeof C is 'object'
      // on Uint8ClampedArray or some other constructors
      if (!isObject$1(C)) throwUnpolyfillable(type);
      cloned = new C(
        // this is safe, since arraybuffer cannot have circular references
        structuredCloneInternal(value.buffer, map),
        value.byteOffset,
        type === 'DataView' ? value.byteLength : value.length
      );
      break;
    case 'DOMQuad':
      try {
        cloned = new DOMQuad(
          structuredCloneInternal(value.p1, map),
          structuredCloneInternal(value.p2, map),
          structuredCloneInternal(value.p3, map),
          structuredCloneInternal(value.p4, map)
        );
      } catch (error) {
        if (nativeRestrictedStructuredClone) {
          cloned = nativeRestrictedStructuredClone(value);
        } else throwUnpolyfillable(type);
      }
      break;
    case 'FileList':
      C = global$7.DataTransfer;
      if (isConstructor(C)) {
        dataTransfer = new C();
        for (i = 0, length = lengthOfArrayLike(value); i < length; i++) {
          dataTransfer.items.add(structuredCloneInternal(value[i], map));
        }
        cloned = dataTransfer.files;
      } else if (nativeRestrictedStructuredClone) {
        cloned = nativeRestrictedStructuredClone(value);
      } else throwUnpolyfillable(type);
      break;
    case 'ImageData':
      // Safari 9 ImageData is a constructor, but typeof ImageData is 'object'
      try {
        cloned = new ImageData(
          structuredCloneInternal(value.data, map),
          value.width,
          value.height,
          { colorSpace: value.colorSpace }
        );
      } catch (error) {
        if (nativeRestrictedStructuredClone) {
          cloned = nativeRestrictedStructuredClone(value);
        } else throwUnpolyfillable(type);
      } break;
    default:
      if (nativeRestrictedStructuredClone) {
        cloned = nativeRestrictedStructuredClone(value);
      } else switch (type) {
        case 'BigInt':
          // can be a 3rd party polyfill
          cloned = Object$1(value.valueOf());
          break;
        case 'Boolean':
          cloned = Object$1(booleanValueOf(value));
          break;
        case 'Number':
          cloned = Object$1(numberValueOf(value));
          break;
        case 'String':
          cloned = Object$1(stringValueOf(value));
          break;
        case 'Date':
          cloned = new Date$1(getTime(value));
          break;
        case 'ArrayBuffer':
          C = global$7.DataView;
          // `ArrayBuffer#slice` is not available in IE10
          // `ArrayBuffer#slice` and `DataView` are not available in old FF
          if (!C && typeof value.slice != 'function') throwUnpolyfillable(type);
          // detached buffers throws in `DataView` and `.slice`
          try {
            if (typeof value.slice == 'function') {
              cloned = value.slice(0);
            } else {
              length = value.byteLength;
              cloned = new ArrayBuffer(length);
              source = new C(value);
              target = new C(cloned);
              for (i = 0; i < length; i++) {
                target.setUint8(i, source.getUint8(i));
              }
            }
          } catch (error) {
            throw new DOMException('ArrayBuffer is detached', DATA_CLONE_ERROR);
          } break;
        case 'SharedArrayBuffer':
          // SharedArrayBuffer should use shared memory, we can't polyfill it, so return the original
          cloned = value;
          break;
        case 'Blob':
          try {
            cloned = value.slice(0, value.size, value.type);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'DOMPoint':
        case 'DOMPointReadOnly':
          C = global$7[type];
          try {
            cloned = C.fromPoint
              ? C.fromPoint(value)
              : new C(value.x, value.y, value.z, value.w);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'DOMRect':
        case 'DOMRectReadOnly':
          C = global$7[type];
          try {
            cloned = C.fromRect
              ? C.fromRect(value)
              : new C(value.x, value.y, value.width, value.height);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'DOMMatrix':
        case 'DOMMatrixReadOnly':
          C = global$7[type];
          try {
            cloned = C.fromMatrix
              ? C.fromMatrix(value)
              : new C(value);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'AudioData':
        case 'VideoFrame':
          if (!isCallable$2(value.clone)) throwUnpolyfillable(type);
          try {
            cloned = value.clone();
          } catch (error) {
            throwUncloneable(type);
          } break;
        case 'File':
          try {
            cloned = new File([value], value.name, value);
          } catch (error) {
            throwUnpolyfillable(type);
          } break;
        case 'CryptoKey':
        case 'GPUCompilationMessage':
        case 'GPUCompilationInfo':
        case 'ImageBitmap':
        case 'RTCCertificate':
        case 'WebAssembly.Module':
          throwUnpolyfillable(type);
          // break omitted
        default:
          throwUncloneable(type);
      }
  }

  mapSet(map, value, cloned);

  if (deep) switch (type) {
    case 'Array':
    case 'Object':
      keys = objectKeys(value);
      for (i = 0, length = lengthOfArrayLike(keys); i < length; i++) {
        key = keys[i];
        createProperty(cloned, key, structuredCloneInternal(value[key], map));
      } break;
    case 'Map':
      value.forEach(function (v, k) {
        mapSet(cloned, structuredCloneInternal(k, map), structuredCloneInternal(v, map));
      });
      break;
    case 'Set':
      value.forEach(function (v) {
        setAdd(cloned, structuredCloneInternal(v, map));
      });
      break;
    case 'Error':
      createNonEnumerableProperty(cloned, 'message', structuredCloneInternal(value.message, map));
      if (hasOwn$2(value, 'cause')) {
        createNonEnumerableProperty(cloned, 'cause', structuredCloneInternal(value.cause, map));
      }
      if (name == 'AggregateError') {
        cloned.errors = structuredCloneInternal(value.errors, map);
      } // break omitted
    case 'DOMException':
      if (ERROR_STACK_INSTALLABLE) {
        createNonEnumerableProperty(cloned, 'stack', structuredCloneInternal(value.stack, map));
      }
  }

  return cloned;
};

var PROPER_TRANSFER = nativeStructuredClone && !fails$1(function () {
  var buffer = new ArrayBuffer(8);
  var clone = nativeStructuredClone(buffer, { transfer: [buffer] });
  return buffer.byteLength != 0 || clone.byteLength != 8;
});

var tryToTransfer = function (rawTransfer, map) {
  if (!isObject$1(rawTransfer)) throw TypeError$3('Transfer option cannot be converted to a sequence');

  var transfer = [];

  iterate(rawTransfer, function (value) {
    push$3(transfer, anObject$1(value));
  });

  var i = 0;
  var length = lengthOfArrayLike(transfer);
  var value, type, C, transferredArray, transferred, canvas, context;

  if (PROPER_TRANSFER) {
    transferredArray = nativeStructuredClone(transfer, { transfer: transfer });
    while (i < length) mapSet(map, transfer[i], transferredArray[i++]);
  } else while (i < length) {
    value = transfer[i++];
    if (mapHas(map, value)) throw new DOMException('Duplicate transferable', DATA_CLONE_ERROR);

    type = classof$1(value);

    switch (type) {
      case 'ImageBitmap':
        C = global$7.OffscreenCanvas;
        if (!isConstructor(C)) throwUnpolyfillable(type, TRANSFERRING);
        try {
          canvas = new C(value.width, value.height);
          context = canvas.getContext('bitmaprenderer');
          context.transferFromImageBitmap(value);
          transferred = canvas.transferToImageBitmap();
        } catch (error) { /* empty */ }
        break;
      case 'AudioData':
      case 'VideoFrame':
        if (!isCallable$2(value.clone) || !isCallable$2(value.close)) throwUnpolyfillable(type, TRANSFERRING);
        try {
          transferred = value.clone();
          value.close();
        } catch (error) { /* empty */ }
        break;
      case 'ArrayBuffer':
      case 'MessagePort':
      case 'OffscreenCanvas':
      case 'ReadableStream':
      case 'TransformStream':
      case 'WritableStream':
        throwUnpolyfillable(type, TRANSFERRING);
    }

    if (transferred === undefined) throw new DOMException('This object cannot be transferred: ' + type, DATA_CLONE_ERROR);
    mapSet(map, value, transferred);
  }
};

$$5({ global: true, enumerable: true, sham: !PROPER_TRANSFER, forced: FORCED_REPLACEMENT }, {
  structuredClone: function structuredClone(value /* , { transfer } */) {
    var options = validateArgumentsLength$3(arguments.length, 1) > 1 && arguments[1] != null ? anObject$1(arguments[1]) : undefined;
    var transfer = options ? options.transfer : undefined;
    var map;

    if (transfer !== undefined) {
      map = new Map();
      tryToTransfer(transfer, map);
    }

    return structuredCloneInternal(value, map);
  }
});

var global$6 = global$1H;
var apply = functionApply$1;
var isCallable$1 = isCallable$y;
var userAgent = engineUserAgent;
var arraySlice$1 = arraySlice$b;
var validateArgumentsLength$2 = validateArgumentsLength$8;

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function$1 = global$6.Function;

var wrap = function (scheduler) {
  return MSIE ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength$2(arguments.length, 1) > 2;
    var fn = isCallable$1(handler) ? handler : Function$1(handler);
    var args = boundArgs ? arraySlice$1(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(fn, this, args);
    } : fn, timeout);
  } : scheduler;
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
var schedulersFix = {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global$6.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global$6.setInterval)
};

var $$4 = _export;
var global$5 = global$1H;
var setInterval = schedulersFix.setInterval;

// ie9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$$4({ global: true, bind: true, forced: global$5.setInterval !== setInterval }, {
  setInterval: setInterval
});

var $$3 = _export;
var global$4 = global$1H;
var setTimeout$1 = schedulersFix.setTimeout;

// ie9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$$3({ global: true, bind: true, forced: global$4.setTimeout !== setTimeout$1 }, {
  setTimeout: setTimeout$1
});

var fails = fails$1i;
var wellKnownSymbol$1 = wellKnownSymbol$z;
var IS_PURE = isPure;

var ITERATOR$1 = wellKnownSymbol$1('iterator');

var nativeUrl = !fails(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR$1]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var global$3 = global$1H;
var uncurryThis$2 = functionUncurryThis;

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;

var RangeError = global$3.RangeError;
var exec$1 = uncurryThis$2(regexSeparators.exec);
var floor$1 = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis$2(''.charCodeAt);
var join$2 = uncurryThis$2([].join);
var push$2 = uncurryThis$2([].push);
var replace$2 = uncurryThis$2(''.replace);
var split$2 = uncurryThis$2(''.split);
var toLowerCase$1 = uncurryThis$2(''.toLowerCase);

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = charCodeAt(string, counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        push$2(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push$2(output, value);
        counter--;
      }
    } else {
      push$2(output, value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor$1(delta / damp) : delta >> 1;
  delta += floor$1(delta / numPoints);
  while (delta > baseMinusTMin * tMax >> 1) {
    delta = floor$1(delta / baseMinusTMin);
    k += base;
  }
  return floor$1(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      push$2(output, fromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    push$2(output, delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor$1((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = base;
        while (true) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push$2(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor$1(qMinusT / baseMinusT);
          k += base;
        }

        push$2(output, fromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        handledCPCount++;
      }
    }

    delta++;
    n++;
  }
  return join$2(output, '');
};

var stringPunycodeToAscii = function (input) {
  var encoded = [];
  var labels = split$2(replace$2(toLowerCase$1(input), regexSeparators, '\u002E'), '.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push$2(encoded, exec$1(regexNonASCII, label) ? 'xn--' + encode(label) : label);
  }
  return join$2(encoded, '.');
};

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$2 = _export;
var global$2 = global$1H;
var call$1 = functionCall;
var uncurryThis$1 = functionUncurryThis;
var DESCRIPTORS$1 = descriptors;
var USE_NATIVE_URL$1 = nativeUrl;
var defineBuiltIn$1 = defineBuiltIn$n;
var defineBuiltIns = defineBuiltIns$5;
var setToStringTag$1 = setToStringTag$d;
var createIteratorConstructor = createIteratorConstructor$3;
var InternalStateModule$1 = internalState;
var anInstance$1 = anInstance$a;
var isCallable = isCallable$y;
var hasOwn$1 = hasOwnProperty_1;
var bind$1 = functionBindContext;
var classof = classof$j;
var anObject = anObject$C;
var isObject = isObject$z;
var $toString$1 = toString$v;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$c;
var getIterator = getIterator$4;
var getIteratorMethod = getIteratorMethod$5;
var validateArgumentsLength$1 = validateArgumentsLength$8;
var wellKnownSymbol = wellKnownSymbol$z;
var arraySort = arraySort$1;

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS$1) return global$2[name];
  var descriptor = getOwnPropertyDescriptor(global$2, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$2.RegExp;
var TypeError$2 = global$2.TypeError;
var decodeURIComponent = global$2.decodeURIComponent;
var encodeURIComponent$1 = global$2.encodeURIComponent;
var charAt$1 = uncurryThis$1(''.charAt);
var join$1 = uncurryThis$1([].join);
var push$1 = uncurryThis$1([].push);
var replace$1 = uncurryThis$1(''.replace);
var shift$1 = uncurryThis$1([].shift);
var splice = uncurryThis$1([].splice);
var split$1 = uncurryThis$1(''.split);
var stringSlice$1 = uncurryThis$1(''.slice);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = replace$1(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace$1(result, percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace$1(encodeURIComponent$1(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState$1(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject(init)) this.parseObject(init);
    else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$1(init, 1) : init : $toString$1(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var iteratorMethod = getIteratorMethod(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call$1(next, iterator)).done) {
        entryIterator = getIterator(anObject(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call$1(entryNext, entryIterator)).done ||
          (second = call$1(entryNext, entryIterator)).done ||
          !call$1(entryNext, entryIterator).done
        ) throw TypeError$2('Expected sequence with length 2');
        push$1(this.entries, { key: $toString$1(first.value), value: $toString$1(second.value) });
      }
    } else for (var key in object) if (hasOwn$1(object, key)) {
      push$1(this.entries, { key: key, value: $toString$1(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = split$1(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split$1(attribute, '=');
          push$1(this.entries, {
            key: deserialize(shift$1(entry)),
            value: deserialize(join$1(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      push$1(result, serialize(entry.key) + '=' + serialize(entry.value));
    } return join$1(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance$1(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  setInternalState$1(this, new URLSearchParamsState(init));
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength$1(arguments.length, 2);
    var state = getInternalParamsState(this);
    push$1(state.entries, { key: $toString$1(name), value: $toString$1(value) });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength$1(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString$1(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$1(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$1(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push$1(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$1(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength$1(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $toString$1(name);
    var val = $toString$1(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push$1(entries, { key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind$1(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
defineBuiltIn$1(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn$1(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$$2({ global: true, constructor: true, forced: !USE_NATIVE_URL$1 }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL$1 && isCallable(Headers)) {
  var headersHas = uncurryThis$1(HeadersPrototype.has);
  var headersSet = uncurryThis$1(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject(init)) {
      var body = init.body;
      var headers;
      if (classof(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create(init, {
          body: createPropertyDescriptor(0, $toString$1(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable(nativeFetch)) {
    $$2({ global: true, enumerable: true, noTargetGet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance$1(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $$2({ global: true, constructor: true, noTargetGet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

var web_urlSearchParams_constructor = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$1 = _export;
var DESCRIPTORS = descriptors;
var USE_NATIVE_URL = nativeUrl;
var global$1 = global$1H;
var bind = functionBindContext;
var uncurryThis = functionUncurryThis;
var defineBuiltIn = defineBuiltIn$n;
var defineBuiltInAccessor = defineBuiltInAccessor$5;
var anInstance = anInstance$a;
var hasOwn = hasOwnProperty_1;
var assign$1 = objectAssign$1;
var arrayFrom = arrayFrom$1;
var arraySlice = arraySliceSimple;
var codeAt = stringMultibyte.codeAt;
var toASCII = stringPunycodeToAscii;
var $toString = toString$v;
var setToStringTag = setToStringTag$d;
var validateArgumentsLength = validateArgumentsLength$8;
var URLSearchParamsModule = web_urlSearchParams_constructor;
var InternalStateModule = internalState;

var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;

var NativeURL = global$1.URL;
var TypeError$1 = global$1.TypeError;
var parseInt$1 = global$1.parseInt;
var floor = Math.floor;
var pow = Math.pow;
var charAt = uncurryThis(''.charAt);
var exec = uncurryThis(/./.exec);
var join = uncurryThis([].join);
var numberToString = uncurryThis(1.0.toString);
var pop = uncurryThis([].pop);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var toLowerCase = uncurryThis(''.toLowerCase);
var unshift = uncurryThis([].unshift);

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[a-z]/i;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */
var EOF;

// https://url.spec.whatwg.org/#ipv4-number-parser
var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.length--;
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && charAt(part, 0) == '0') {
      radix = exec(HEX_START, part) ? 16 : 8;
      part = stringSlice(part, radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
      number = parseInt$1(part, radix);
    }
    push(numbers, number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = pop(numbers);
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return charAt(input, pointer);
  };

  if (chr() == ':') {
    if (charAt(input, 1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (chr()) {
    if (pieceIndex == 8) return;
    if (chr() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && exec(HEX, chr())) {
      value = value * 16 + parseInt$1(chr(), 16);
      pointer++;
      length++;
    }
    if (chr() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (chr()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (chr() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!exec(DIGIT, chr())) return;
        while (exec(DIGIT, chr())) {
          number = parseInt$1(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (chr() == ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

// https://url.spec.whatwg.org/#host-serializing
var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor(host / 256);
    } return join(result, '.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign$1({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign$1({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign$1({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
};

// https://url.spec.whatwg.org/#special-scheme
var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

// https://url.spec.whatwg.org/#windows-drive-letter
var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && exec(ALPHA, charAt(string, 0))
    && ((second = charAt(string, 1)) == ':' || (!normalized && second == '|'));
};

// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (
    string.length == 2 ||
    ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

// https://url.spec.whatwg.org/#single-dot-path-segment
var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
};

// https://url.spec.whatwg.org/#double-dot-path-segment
var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

var URLState = function (url, isBase, base) {
  var urlString = $toString(url);
  var baseState, failure, searchParams;
  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw TypeError$1(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw TypeError$1(failure);
    searchParams = getInternalSearchParamsState(new URLSearchParams$1());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};

URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;

    input = $toString(input);

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = replace(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
    }

    input = replace(input, TAB_AND_NEW_LINE, '');

    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (chr && exec(ALPHA, chr)) {
            buffer += toLowerCase(chr);
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;

        case SCHEME:
          if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
            buffer += toLowerCase(chr);
          } else if (chr == ':') {
            if (stateOverride && (
              (url.isSpecial() != hasOwn(specialSchemes, buffer)) ||
              (buffer == 'file' && (url.includesCredentials() || url.port !== null)) ||
              (url.scheme == 'file' && !url.host)
            )) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme == 'file') {
              state = FILE;
            } else if (url.isSpecial() && base && base.scheme == url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              push(url.path, '');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;

        case NO_SCHEME:
          if (!base || (base.cannotBeABaseURL && chr != '#')) return INVALID_SCHEME;
          if (base.cannotBeABaseURL && chr == '#') {
            url.scheme = base.scheme;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme == 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr == '/' && codePoints[pointer + 1] == '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          } break;

        case PATH_OR_AUTHORITY:
          if (chr == '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;
          if (chr == EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
          } else if (chr == '/' || (chr == '\\' && url.isSpecial())) {
            state = RELATIVE_SLASH;
          } else if (chr == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.path.length--;
            state = PATH;
            continue;
          } break;

        case RELATIVE_SLASH:
          if (url.isSpecial() && (chr == '/' || chr == '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr == '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          } break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr != '/' && chr != '\\') {
            state = AUTHORITY;
            continue;
          } break;

        case AUTHORITY:
          if (chr == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;
              else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial())
          ) {
            if (seenAt && buffer == '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;
          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr == ':' && !seenBracket) {
            if (buffer == '') return INVALID_HOST;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride == HOSTNAME) return;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial())
          ) {
            if (url.isSpecial() && buffer == '') return INVALID_HOST;
            if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr == '[') seenBracket = true;
            else if (chr == ']') seenBracket = false;
            buffer += chr;
          } break;

        case PORT:
          if (exec(DIGIT, chr)) {
            buffer += chr;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial()) ||
            stateOverride
          ) {
            if (buffer != '') {
              var port = parseInt$1(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;

        case FILE:
          url.scheme = 'file';
          if (chr == '/' || chr == '\\') state = FILE_SLASH;
          else if (base && base.scheme == 'file') {
            if (chr == EOF) {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
            } else if (chr == '?') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.shortenPath();
              }
              state = PATH;
              continue;
            }
          } else {
            state = PATH;
            continue;
          } break;

        case FILE_SLASH:
          if (chr == '/' || chr == '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
            else url.host = base.host;
          }
          state = PATH;
          continue;

        case FILE_HOST:
          if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            } continue;
          } else buffer += chr;
          break;

        case PATH_START:
          if (url.isSpecial()) {
            state = PATH;
            if (chr != '/' && chr != '\\') continue;
          } else if (!stateOverride && chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            state = PATH;
            if (chr != '/') continue;
          } break;

        case PATH:
          if (
            chr == EOF || chr == '/' ||
            (chr == '\\' && url.isSpecial()) ||
            (!stateOverride && (chr == '?' || chr == '#'))
          ) {
            if (isDoubleDot(buffer)) {
              url.shortenPath();
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else if (isSingleDot(buffer)) {
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
              }
              push(url.path, buffer);
            }
            buffer = '';
            if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                shift(url.path);
              }
            }
            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(chr, pathPercentEncodeSet);
          } break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case QUERY:
          if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            if (chr == "'" && url.isSpecial()) url.query += '%27';
            else if (chr == '#') url.query += '%23';
            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case FRAGMENT:
          if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;
    if (charAt(input, 0) == '[') {
      if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
      result = parseIPv6(stringSlice(input, 1, -1));
      if (!result) return INVALID_HOST;
      this.host = result;
    // opaque host
    } else if (!this.isSpecial()) {
      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      this.host = result;
    } else {
      input = toASCII(input);
      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      this.host = result;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username != '' || this.password != '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return hasOwn(specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;
    if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw TypeError$1(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme == 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse($toString(protocol) + ':', SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = arrayFrom($toString(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = arrayFrom($toString(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? ''
      : port === null ? serializeHost(host)
      : serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : $toString(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = $toString(port);
    if (port == '') this.port = null;
    else this.parse(port, PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = $toString(search);
    if (search == '') {
      this.query = null;
    } else {
      if ('?' == charAt(search, 0)) search = stringSlice(search, 1);
      this.query = '';
      this.parse(search, QUERY);
    }
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = $toString(hash);
    if (hash == '') {
      this.fragment = null;
      return;
    }
    if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);
    this.fragment = '';
    this.parse(hash, FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLPrototype);
  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = setInternalState(that, new URLState(url, false, base));
  if (!DESCRIPTORS) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};

var URLPrototype = URLConstructor.prototype;

var accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};

if (DESCRIPTORS) {
  // `URL.prototype.href` accessors pair
  // https://url.spec.whatwg.org/#dom-url-href
  defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
  // `URL.prototype.origin` getter
  // https://url.spec.whatwg.org/#dom-url-origin
  defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
  // `URL.prototype.protocol` accessors pair
  // https://url.spec.whatwg.org/#dom-url-protocol
  defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
  // `URL.prototype.username` accessors pair
  // https://url.spec.whatwg.org/#dom-url-username
  defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
  // `URL.prototype.password` accessors pair
  // https://url.spec.whatwg.org/#dom-url-password
  defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
  // `URL.prototype.host` accessors pair
  // https://url.spec.whatwg.org/#dom-url-host
  defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
  // `URL.prototype.hostname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hostname
  defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
  // `URL.prototype.port` accessors pair
  // https://url.spec.whatwg.org/#dom-url-port
  defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
  // `URL.prototype.pathname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-pathname
  defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
  // `URL.prototype.search` accessors pair
  // https://url.spec.whatwg.org/#dom-url-search
  defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
  // `URL.prototype.searchParams` getter
  // https://url.spec.whatwg.org/#dom-url-searchparams
  defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
  // `URL.prototype.hash` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hash
  defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
defineBuiltIn(URLPrototype, 'toJSON', function toJSON() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
defineBuiltIn(URLPrototype, 'toString', function toString() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
}

setToStringTag(URLConstructor, 'URL');

$$1({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});

var $ = _export;
var call = functionCall;

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return call(URL.prototype.toString, this);
  }
});

var runtime = {exports: {}};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (module) {
var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
}(runtime));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$7(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$7(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/*
    Creates a Context object. When React renders a component that subscribes to this Context object 
    it will read the current context value from the closest matching Provider above it in the tree.

    The defaultValue argument is only used when a component does not have a matching Provider above it in the tree

    Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
    The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider.

    <MyContext.Provider value={ some_value }>
*/

var GlobalContext = /*#__PURE__*/React__default.createContext({
  i18n: {},
  addI18n: function addI18n(moreI18n) {
    this.i18n = _objectSpread2(_objectSpread2({}, this.i18n), moreI18n);
  },
  getI18n: function getI18n(key) {
    return this.i18n[key] || '??' + key + '??';
  }
});

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$6(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

//      
var charCodeOfDot = ".".charCodeAt(0);
var reEscapeChar = /\\(\\)?/g;
var rePropName = RegExp( // Match anything that isn't a dot or bracket.
"[^.[\\]]+" + "|" + // Or match property names within brackets.
"\\[(?:" + // Match a non-string expression.
"([^\"'][^[]*)" + "|" + // Or match strings (supports escaping characters).
"([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2" + ")\\]" + "|" + // Or match "" as the space between consecutive dots or empty brackets.
"(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))", "g");
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = function stringToPath(string) {
  var result = [];

  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push("");
  }

  string.replace(rePropName, function (match, expression, quote, subString) {
    var key = match;

    if (quote) {
      key = subString.replace(reEscapeChar, "$1");
    } else if (expression) {
      key = expression.trim();
    }

    result.push(key);
  });
  return result;
};

var keysCache = {};

var toPath = function toPath(key) {
  if (key === null || key === undefined || !key.length) {
    return [];
  }

  if (typeof key !== "string") {
    throw new Error("toPath() expects a string");
  }

  if (keysCache[key] == null) {
    keysCache[key] = stringToPath(key);
  }

  return keysCache[key];
};

//      

var getIn = function getIn(state, complexKey) {
  // Intentionally using iteration rather than recursion
  var path = toPath(complexKey);
  var current = state;

  for (var i = 0; i < path.length; i++) {
    var key = path[i];

    if (current === undefined || current === null || typeof current !== "object" || Array.isArray(current) && isNaN(key)) {
      return undefined;
    }

    current = current[key];
  }

  return current;
};

function _toPropertyKey$1(arg) { var key = _toPrimitive$1(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive$1(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var setInRecursor = function setInRecursor(current, index, path, value, destroyArrays) {
  if (index >= path.length) {
    // end of recursion
    return value;
  }

  var key = path[index]; // determine type of key

  if (isNaN(key)) {
    var _extends2;

    // object set
    if (current === undefined || current === null) {
      var _ref;

      // recurse
      var _result2 = setInRecursor(undefined, index + 1, path, value, destroyArrays); // delete or create an object


      return _result2 === undefined ? undefined : (_ref = {}, _ref[key] = _result2, _ref);
    }

    if (Array.isArray(current)) {
      throw new Error("Cannot set a non-numeric property on an array");
    } // current exists, so make a copy of all its values, and add/update the new one


    var _result = setInRecursor(current[key], index + 1, path, value, destroyArrays);

    if (_result === undefined) {
      var numKeys = Object.keys(current).length;

      if (current[key] === undefined && numKeys === 0) {
        // object was already empty
        return undefined;
      }

      if (current[key] !== undefined && numKeys <= 1) {
        // only key we had was the one we are deleting
        if (!isNaN(path[index - 1]) && !destroyArrays) {
          // we are in an array, so return an empty object
          return {};
        } else {
          return undefined;
        }
      }

      current[key];
          var _final = _objectWithoutPropertiesLoose$6(current, [key].map(_toPropertyKey$1));

      return _final;
    } // set result in key


    return _extends({}, current, (_extends2 = {}, _extends2[key] = _result, _extends2));
  } // array set


  var numericKey = Number(key);

  if (current === undefined || current === null) {
    // recurse
    var _result3 = setInRecursor(undefined, index + 1, path, value, destroyArrays); // if nothing returned, delete it


    if (_result3 === undefined) {
      return undefined;
    } // create an array


    var _array = [];
    _array[numericKey] = _result3;
    return _array;
  }

  if (!Array.isArray(current)) {
    throw new Error("Cannot set a numeric property on an object");
  } // recurse


  var existingValue = current[numericKey];
  var result = setInRecursor(existingValue, index + 1, path, value, destroyArrays); // current exists, so make a copy of all its values, and add/update the new one

  var array = [].concat(current);

  if (destroyArrays && result === undefined) {
    array.splice(numericKey, 1);

    if (array.length === 0) {
      return undefined;
    }
  } else {
    array[numericKey] = result;
  }

  return array;
};

var setIn = function setIn(state, key, value, destroyArrays) {
  if (destroyArrays === void 0) {
    destroyArrays = false;
  }

  if (state === undefined || state === null) {
    throw new Error("Cannot call setIn() with " + String(state) + " state");
  }

  if (key === undefined || key === null) {
    throw new Error("Cannot call setIn() with " + String(key) + " key");
  } // Recursive function needs to accept and return State, but public API should
  // only deal with Objects


  return setInRecursor(state, 0, toPath(key), value, destroyArrays);
};

var FORM_ERROR = "FINAL_FORM/form-error";
var ARRAY_ERROR = "FINAL_FORM/array-error";

//      
/**
 * Converts internal field state to published field state
 */

function publishFieldState(formState, field) {
  var errors = formState.errors,
      initialValues = formState.initialValues,
      lastSubmittedValues = formState.lastSubmittedValues,
      submitErrors = formState.submitErrors,
      submitFailed = formState.submitFailed,
      submitSucceeded = formState.submitSucceeded,
      submitting = formState.submitting,
      values = formState.values;
  var active = field.active,
      blur = field.blur,
      change = field.change,
      data = field.data,
      focus = field.focus,
      modified = field.modified,
      modifiedSinceLastSubmit = field.modifiedSinceLastSubmit,
      name = field.name,
      touched = field.touched,
      validating = field.validating,
      visited = field.visited;
  var value = getIn(values, name);
  var error = getIn(errors, name);

  if (error && error[ARRAY_ERROR]) {
    error = error[ARRAY_ERROR];
  }

  var submitError = submitErrors && getIn(submitErrors, name);
  var initial = initialValues && getIn(initialValues, name);
  var pristine = field.isEqual(initial, value);
  var dirtySinceLastSubmit = !!(lastSubmittedValues && !field.isEqual(getIn(lastSubmittedValues, name), value));
  var valid = !error && !submitError;
  return {
    active: active,
    blur: blur,
    change: change,
    data: data,
    dirty: !pristine,
    dirtySinceLastSubmit: dirtySinceLastSubmit,
    error: error,
    focus: focus,
    initial: initial,
    invalid: !valid,
    length: Array.isArray(value) ? value.length : undefined,
    modified: modified,
    modifiedSinceLastSubmit: modifiedSinceLastSubmit,
    name: name,
    pristine: pristine,
    submitError: submitError,
    submitFailed: submitFailed,
    submitSucceeded: submitSucceeded,
    submitting: submitting,
    touched: touched,
    valid: valid,
    value: value,
    visited: visited,
    validating: validating
  };
}

//      
var fieldSubscriptionItems = ["active", "data", "dirty", "dirtySinceLastSubmit", "error", "initial", "invalid", "length", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "value", "visited", "validating"];

//      
var shallowEqual$1 = function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== "object" || !a || typeof b !== "object" || !b) {
    return false;
  }

  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(b);

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};

//      
function subscriptionFilter (dest, src, previous, subscription, keys, shallowEqualKeys) {
  var different = false;
  keys.forEach(function (key) {
    if (subscription[key]) {
      dest[key] = src[key];

      if (!previous || (~shallowEqualKeys.indexOf(key) ? !shallowEqual$1(src[key], previous[key]) : src[key] !== previous[key])) {
        different = true;
      }
    }
  });
  return different;
}

//      
var shallowEqualKeys$1 = ["data"];
/**
 * Filters items in a FieldState based on a FieldSubscription
 */

var filterFieldState = function filterFieldState(state, previousState, subscription, force) {
  var result = {
    blur: state.blur,
    change: state.change,
    focus: state.focus,
    name: state.name
  };
  var different = subscriptionFilter(result, state, previousState, subscription, fieldSubscriptionItems, shallowEqualKeys$1) || !previousState;
  return different || force ? result : undefined;
};

//      
var formSubscriptionItems = ["active", "dirty", "dirtyFields", "dirtyFieldsSinceLastSubmit", "dirtySinceLastSubmit", "error", "errors", "hasSubmitErrors", "hasValidationErrors", "initialValues", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "submitting", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "touched", "valid", "validating", "values", "visited"];

//      
var shallowEqualKeys = ["touched", "visited"];
/**
 * Filters items in a FormState based on a FormSubscription
 */

function filterFormState(state, previousState, subscription, force) {
  var result = {};
  var different = subscriptionFilter(result, state, previousState, subscription, formSubscriptionItems, shallowEqualKeys) || !previousState;
  return different || force ? result : undefined;
}

//      

var memoize = function memoize(fn) {
  var lastArgs;
  var lastResult;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!lastArgs || args.length !== lastArgs.length || args.some(function (arg, index) {
      return !shallowEqual$1(lastArgs[index], arg);
    })) {
      lastArgs = args;
      lastResult = fn.apply(void 0, args);
    }

    return lastResult;
  };
};

var isPromise = (function (obj) {
  return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
});

var version$1 = "4.20.6";

var tripleEquals = function tripleEquals(a, b) {
  return a === b;
};

var hasAnyError = function hasAnyError(errors) {
  return Object.keys(errors).some(function (key) {
    var value = errors[key];

    if (value && typeof value === "object" && !(value instanceof Error)) {
      return hasAnyError(value);
    }

    return typeof value !== "undefined";
  });
};

function convertToExternalFormState(_ref) {
  var active = _ref.active,
      dirtySinceLastSubmit = _ref.dirtySinceLastSubmit,
      modifiedSinceLastSubmit = _ref.modifiedSinceLastSubmit,
      error = _ref.error,
      errors = _ref.errors,
      initialValues = _ref.initialValues,
      pristine = _ref.pristine,
      submitting = _ref.submitting,
      submitFailed = _ref.submitFailed,
      submitSucceeded = _ref.submitSucceeded,
      submitError = _ref.submitError,
      submitErrors = _ref.submitErrors,
      valid = _ref.valid,
      validating = _ref.validating,
      values = _ref.values;
  return {
    active: active,
    dirty: !pristine,
    dirtySinceLastSubmit: dirtySinceLastSubmit,
    modifiedSinceLastSubmit: modifiedSinceLastSubmit,
    error: error,
    errors: errors,
    hasSubmitErrors: !!(submitError || submitErrors && hasAnyError(submitErrors)),
    hasValidationErrors: !!(error || hasAnyError(errors)),
    invalid: !valid,
    initialValues: initialValues,
    pristine: pristine,
    submitting: submitting,
    submitFailed: submitFailed,
    submitSucceeded: submitSucceeded,
    submitError: submitError,
    submitErrors: submitErrors,
    valid: valid,
    validating: validating > 0,
    values: values
  };
}

function notifySubscriber(subscriber, subscription, state, lastState, filter, force) {
  var notification = filter(state, lastState, subscription, force);

  if (notification) {
    subscriber(notification);
    return true;
  }

  return false;
}

function notify(_ref2, state, lastState, filter, force) {
  var entries = _ref2.entries;
  Object.keys(entries).forEach(function (key) {
    var entry = entries[Number(key)]; // istanbul ignore next

    if (entry) {
      var subscription = entry.subscription,
          subscriber = entry.subscriber,
          notified = entry.notified;

      if (notifySubscriber(subscriber, subscription, state, lastState, filter, force || !notified)) {
        entry.notified = true;
      }
    }
  });
}

function createForm(config) {
  if (!config) {
    throw new Error("No config specified");
  }

  var debug = config.debug,
      destroyOnUnregister = config.destroyOnUnregister,
      keepDirtyOnReinitialize = config.keepDirtyOnReinitialize,
      initialValues = config.initialValues,
      mutators = config.mutators,
      onSubmit = config.onSubmit,
      validate = config.validate,
      validateOnBlur = config.validateOnBlur;

  if (!onSubmit) {
    throw new Error("No onSubmit function specified");
  }

  var state = {
    subscribers: {
      index: 0,
      entries: {}
    },
    fieldSubscribers: {},
    fields: {},
    formState: {
      asyncErrors: {},
      dirtySinceLastSubmit: false,
      modifiedSinceLastSubmit: false,
      errors: {},
      initialValues: initialValues && _extends({}, initialValues),
      invalid: false,
      pristine: true,
      submitting: false,
      submitFailed: false,
      submitSucceeded: false,
      resetWhileSubmitting: false,
      valid: true,
      validating: 0,
      values: initialValues ? _extends({}, initialValues) : {}
    },
    lastFormState: undefined
  };
  var inBatch = 0;
  var validationPaused = false;
  var validationBlocked = false;
  var preventNotificationWhileValidationPaused = false;
  var nextAsyncValidationKey = 0;
  var asyncValidationPromises = {};

  var clearAsyncValidationPromise = function clearAsyncValidationPromise(key) {
    return function (result) {
      delete asyncValidationPromises[key];
      return result;
    };
  };

  var changeValue = function changeValue(state, name, mutate) {
    var before = getIn(state.formState.values, name);
    var after = mutate(before);
    state.formState.values = setIn(state.formState.values, name, after) || {};
  };

  var renameField = function renameField(state, from, to) {
    if (state.fields[from]) {
      var _extends2, _extends3;

      state.fields = _extends({}, state.fields, (_extends2 = {}, _extends2[to] = _extends({}, state.fields[from], {
        name: to,
        // rebind event handlers
        blur: function blur() {
          return api.blur(to);
        },
        change: function change(value) {
          return api.change(to, value);
        },
        focus: function focus() {
          return api.focus(to);
        },
        lastFieldState: undefined
      }), _extends2));
      delete state.fields[from];
      state.fieldSubscribers = _extends({}, state.fieldSubscribers, (_extends3 = {}, _extends3[to] = state.fieldSubscribers[from], _extends3));
      delete state.fieldSubscribers[from];
      var value = getIn(state.formState.values, from);
      state.formState.values = setIn(state.formState.values, from, undefined) || {};
      state.formState.values = setIn(state.formState.values, to, value);
      delete state.lastFormState;
    }
  }; // bind state to mutators


  var getMutatorApi = function getMutatorApi(key) {
    return function () {
      // istanbul ignore next
      if (mutators) {
        // ^^ causes branch coverage warning, but needed to appease the Flow gods
        var mutatableState = {
          formState: state.formState,
          fields: state.fields,
          fieldSubscribers: state.fieldSubscribers,
          lastFormState: state.lastFormState
        };

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var returnValue = mutators[key](args, mutatableState, {
          changeValue: changeValue,
          getIn: getIn,
          renameField: renameField,
          resetFieldState: api.resetFieldState,
          setIn: setIn,
          shallowEqual: shallowEqual$1
        });
        state.formState = mutatableState.formState;
        state.fields = mutatableState.fields;
        state.fieldSubscribers = mutatableState.fieldSubscribers;
        state.lastFormState = mutatableState.lastFormState;
        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
        return returnValue;
      }
    };
  };

  var mutatorsApi = mutators ? Object.keys(mutators).reduce(function (result, key) {
    result[key] = getMutatorApi(key);
    return result;
  }, {}) : {};

  var runRecordLevelValidation = function runRecordLevelValidation(setErrors) {
    var promises = [];

    if (validate) {
      var errorsOrPromise = validate(_extends({}, state.formState.values)); // clone to avoid writing

      if (isPromise(errorsOrPromise)) {
        promises.push(errorsOrPromise.then(function (errors) {
          return setErrors(errors, true);
        }));
      } else {
        setErrors(errorsOrPromise, false);
      }
    }

    return promises;
  };

  var getValidators = function getValidators(field) {
    return Object.keys(field.validators).reduce(function (result, index) {
      var validator = field.validators[Number(index)]();

      if (validator) {
        result.push(validator);
      }

      return result;
    }, []);
  };

  var runFieldLevelValidation = function runFieldLevelValidation(field, setError) {
    var promises = [];
    var validators = getValidators(field);

    if (validators.length) {
      var error;
      validators.forEach(function (validator) {
        var errorOrPromise = validator(getIn(state.formState.values, field.name), state.formState.values, validator.length === 0 || validator.length === 3 ? publishFieldState(state.formState, state.fields[field.name]) : undefined);

        if (errorOrPromise && isPromise(errorOrPromise)) {
          field.validating = true;
          var promise = errorOrPromise.then(function (error) {
            if (state.fields[field.name]) {
              state.fields[field.name].validating = false;
              setError(error);
            }
          }); // errors must be resolved, not rejected

          promises.push(promise);
        } else if (!error) {
          // first registered validator wins
          error = errorOrPromise;
        }
      });
      setError(error);
    }

    return promises;
  };

  var runValidation = function runValidation(fieldChanged, callback) {
    if (validationPaused) {
      validationBlocked = true;
      callback();
      return;
    }

    var fields = state.fields,
        formState = state.formState;

    var safeFields = _extends({}, fields);

    var fieldKeys = Object.keys(safeFields);

    if (!validate && !fieldKeys.some(function (key) {
      return getValidators(safeFields[key]).length;
    })) {
      callback();
      return; // no validation rules
    } // pare down field keys to actually validate


    var limitedFieldLevelValidation = false;

    if (fieldChanged) {
      var changedField = safeFields[fieldChanged];

      if (changedField) {
        var validateFields = changedField.validateFields;

        if (validateFields) {
          limitedFieldLevelValidation = true;
          fieldKeys = validateFields.length ? validateFields.concat(fieldChanged) : [fieldChanged];
        }
      }
    }

    var recordLevelErrors = {};
    var asyncRecordLevelErrors = {};
    var fieldLevelErrors = {};
    var promises = [].concat(runRecordLevelValidation(function (errors, wasAsync) {
      if (wasAsync) {
        asyncRecordLevelErrors = errors || {};
      } else {
        recordLevelErrors = errors || {};
      }
    }), fieldKeys.reduce(function (result, name) {
      return result.concat(runFieldLevelValidation(fields[name], function (error) {
        fieldLevelErrors[name] = error;
      }));
    }, []));
    var hasAsyncValidations = promises.length > 0;
    var asyncValidationPromiseKey = ++nextAsyncValidationKey;
    var promise = Promise.all(promises).then(clearAsyncValidationPromise(asyncValidationPromiseKey)); // backwards-compat: add promise to submit-blocking promises iff there are any promises to await

    if (hasAsyncValidations) {
      asyncValidationPromises[asyncValidationPromiseKey] = promise;
    }

    var processErrors = function processErrors(afterAsync) {
      var merged = _extends({}, limitedFieldLevelValidation ? formState.errors : {}, recordLevelErrors, afterAsync ? asyncRecordLevelErrors // new async errors
      : formState.asyncErrors);

      var forEachError = function forEachError(fn) {
        fieldKeys.forEach(function (name) {
          if (fields[name]) {
            // make sure field is still registered
            // field-level errors take precedent over record-level errors
            var recordLevelError = getIn(recordLevelErrors, name);
            var errorFromParent = getIn(merged, name);
            var hasFieldLevelValidation = getValidators(safeFields[name]).length;
            var fieldLevelError = fieldLevelErrors[name];
            fn(name, hasFieldLevelValidation && fieldLevelError || validate && recordLevelError || (!recordLevelError && !limitedFieldLevelValidation ? errorFromParent : undefined));
          }
        });
      };

      forEachError(function (name, error) {
        merged = setIn(merged, name, error) || {};
      });
      forEachError(function (name, error) {
        if (error && error[ARRAY_ERROR]) {
          var existing = getIn(merged, name);
          var copy = [].concat(existing);
          copy[ARRAY_ERROR] = error[ARRAY_ERROR];
          merged = setIn(merged, name, copy);
        }
      });

      if (!shallowEqual$1(formState.errors, merged)) {
        formState.errors = merged;
      }

      if (afterAsync) {
        formState.asyncErrors = asyncRecordLevelErrors;
      }

      formState.error = recordLevelErrors[FORM_ERROR];
    };

    if (hasAsyncValidations) {
      // async validations are running, ensure validating is true before notifying
      state.formState.validating++;
      callback();
    } // process sync errors


    processErrors(false); // sync errors have been set. notify listeners while we wait for others

    callback();

    if (hasAsyncValidations) {
      var afterPromise = function afterPromise() {
        state.formState.validating--;
        callback();
      };

      promise.then(function () {
        if (nextAsyncValidationKey > asyncValidationPromiseKey) {
          // if this async validator has been superseded by another, ignore its results
          return;
        }

        processErrors(true);
      }).then(afterPromise, afterPromise);
    }
  };

  var notifyFieldListeners = function notifyFieldListeners(name) {
    if (inBatch) {
      return;
    }

    var fields = state.fields,
        fieldSubscribers = state.fieldSubscribers,
        formState = state.formState;

    var safeFields = _extends({}, fields);

    var notifyField = function notifyField(name) {
      var field = safeFields[name];
      var fieldState = publishFieldState(formState, field);
      var lastFieldState = field.lastFieldState;
      field.lastFieldState = fieldState;
      var fieldSubscriber = fieldSubscribers[name];

      if (fieldSubscriber) {
        notify(fieldSubscriber, fieldState, lastFieldState, filterFieldState, lastFieldState === undefined);
      }
    };

    if (name) {
      notifyField(name);
    } else {
      Object.keys(safeFields).forEach(notifyField);
    }
  };

  var markAllFieldsTouched = function markAllFieldsTouched() {
    Object.keys(state.fields).forEach(function (key) {
      state.fields[key].touched = true;
    });
  };

  var hasSyncErrors = function hasSyncErrors() {
    return !!(state.formState.error || hasAnyError(state.formState.errors));
  };

  var calculateNextFormState = function calculateNextFormState() {
    var fields = state.fields,
        formState = state.formState,
        lastFormState = state.lastFormState;

    var safeFields = _extends({}, fields);

    var safeFieldKeys = Object.keys(safeFields); // calculate dirty/pristine

    var foundDirty = false;
    var dirtyFields = safeFieldKeys.reduce(function (result, key) {
      var dirty = !safeFields[key].isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));

      if (dirty) {
        foundDirty = true;
        result[key] = true;
      }

      return result;
    }, {});
    var dirtyFieldsSinceLastSubmit = safeFieldKeys.reduce(function (result, key) {
      // istanbul ignore next
      var nonNullLastSubmittedValues = formState.lastSubmittedValues || {}; // || {} is for flow, but causes branch coverage complaint

      if (!safeFields[key].isEqual(getIn(formState.values, key), getIn(nonNullLastSubmittedValues, key))) {
        result[key] = true;
      }

      return result;
    }, {});
    formState.pristine = !foundDirty;
    formState.dirtySinceLastSubmit = !!(formState.lastSubmittedValues && Object.values(dirtyFieldsSinceLastSubmit).some(function (value) {
      return value;
    }));
    formState.modifiedSinceLastSubmit = !!(formState.lastSubmittedValues && // Object.values would treat values as mixed (facebook/flow#2221)
    Object.keys(safeFields).some(function (value) {
      return safeFields[value].modifiedSinceLastSubmit;
    }));
    formState.valid = !formState.error && !formState.submitError && !hasAnyError(formState.errors) && !(formState.submitErrors && hasAnyError(formState.submitErrors));
    var nextFormState = convertToExternalFormState(formState);

    var _safeFieldKeys$reduce = safeFieldKeys.reduce(function (result, key) {
      result.modified[key] = safeFields[key].modified;
      result.touched[key] = safeFields[key].touched;
      result.visited[key] = safeFields[key].visited;
      return result;
    }, {
      modified: {},
      touched: {},
      visited: {}
    }),
        modified = _safeFieldKeys$reduce.modified,
        touched = _safeFieldKeys$reduce.touched,
        visited = _safeFieldKeys$reduce.visited;

    nextFormState.dirtyFields = lastFormState && shallowEqual$1(lastFormState.dirtyFields, dirtyFields) ? lastFormState.dirtyFields : dirtyFields;
    nextFormState.dirtyFieldsSinceLastSubmit = lastFormState && shallowEqual$1(lastFormState.dirtyFieldsSinceLastSubmit, dirtyFieldsSinceLastSubmit) ? lastFormState.dirtyFieldsSinceLastSubmit : dirtyFieldsSinceLastSubmit;
    nextFormState.modified = lastFormState && shallowEqual$1(lastFormState.modified, modified) ? lastFormState.modified : modified;
    nextFormState.touched = lastFormState && shallowEqual$1(lastFormState.touched, touched) ? lastFormState.touched : touched;
    nextFormState.visited = lastFormState && shallowEqual$1(lastFormState.visited, visited) ? lastFormState.visited : visited;
    return lastFormState && shallowEqual$1(lastFormState, nextFormState) ? lastFormState : nextFormState;
  };

  var callDebug = function callDebug() {
    return debug && "development" !== "production" && debug(calculateNextFormState(), Object.keys(state.fields).reduce(function (result, key) {
      result[key] = state.fields[key];
      return result;
    }, {}));
  };

  var notifying = false;
  var scheduleNotification = false;

  var notifyFormListeners = function notifyFormListeners() {
    if (notifying) {
      scheduleNotification = true;
    } else {
      notifying = true;
      callDebug();

      if (!inBatch && !(validationPaused && preventNotificationWhileValidationPaused)) {
        var lastFormState = state.lastFormState;
        var nextFormState = calculateNextFormState();

        if (nextFormState !== lastFormState) {
          state.lastFormState = nextFormState;
          notify(state.subscribers, nextFormState, lastFormState, filterFormState);
        }
      }

      notifying = false;

      if (scheduleNotification) {
        scheduleNotification = false;
        notifyFormListeners();
      }
    }
  };

  var beforeSubmit = function beforeSubmit() {
    return Object.keys(state.fields).some(function (name) {
      return state.fields[name].beforeSubmit && state.fields[name].beforeSubmit() === false;
    });
  };

  var afterSubmit = function afterSubmit() {
    return Object.keys(state.fields).forEach(function (name) {
      return state.fields[name].afterSubmit && state.fields[name].afterSubmit();
    });
  };

  var resetModifiedAfterSubmit = function resetModifiedAfterSubmit() {
    return Object.keys(state.fields).forEach(function (key) {
      return state.fields[key].modifiedSinceLastSubmit = false;
    });
  }; // generate initial errors


  runValidation(undefined, function () {
    notifyFormListeners();
  });
  var api = {
    batch: function batch(fn) {
      inBatch++;
      fn();
      inBatch--;
      notifyFieldListeners();
      notifyFormListeners();
    },
    blur: function blur(name) {
      var fields = state.fields,
          formState = state.formState;
      var previous = fields[name];

      if (previous) {
        // can only blur registered fields
        delete formState.active;
        fields[name] = _extends({}, previous, {
          active: false,
          touched: true
        });

        if (validateOnBlur) {
          runValidation(name, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        } else {
          notifyFieldListeners();
          notifyFormListeners();
        }
      }
    },
    change: function change(name, value) {
      var fields = state.fields,
          formState = state.formState;

      if (getIn(formState.values, name) !== value) {
        changeValue(state, name, function () {
          return value;
        });
        var previous = fields[name];

        if (previous) {
          // only track modified for registered fields
          fields[name] = _extends({}, previous, {
            modified: true,
            modifiedSinceLastSubmit: !!formState.lastSubmittedValues
          });
        }

        if (validateOnBlur) {
          notifyFieldListeners();
          notifyFormListeners();
        } else {
          runValidation(name, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        }
      }
    },

    get destroyOnUnregister() {
      return !!destroyOnUnregister;
    },

    set destroyOnUnregister(value) {
      destroyOnUnregister = value;
    },

    focus: function focus(name) {
      var field = state.fields[name];

      if (field && !field.active) {
        state.formState.active = name;
        field.active = true;
        field.visited = true;
        notifyFieldListeners();
        notifyFormListeners();
      }
    },
    mutators: mutatorsApi,
    getFieldState: function getFieldState(name) {
      var field = state.fields[name];
      return field && field.lastFieldState;
    },
    getRegisteredFields: function getRegisteredFields() {
      return Object.keys(state.fields);
    },
    getState: function getState() {
      return calculateNextFormState();
    },
    initialize: function initialize(data) {
      var fields = state.fields,
          formState = state.formState;

      var safeFields = _extends({}, fields);

      var values = typeof data === "function" ? data(formState.values) : data;

      if (!keepDirtyOnReinitialize) {
        formState.values = values;
      }
      /**
       * Hello, inquisitive code reader! Thanks for taking the time to dig in!
       *
       * The following code is the way it is to allow for non-registered deep
       * field values to be set via initialize()
       */
      // save dirty values


      var savedDirtyValues = keepDirtyOnReinitialize ? Object.keys(safeFields).reduce(function (result, key) {
        var field = safeFields[key];
        var pristine = field.isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));

        if (!pristine) {
          result[key] = getIn(formState.values, key);
        }

        return result;
      }, {}) : {}; // update initalValues and values

      formState.initialValues = values;
      formState.values = values; // restore the dirty values

      Object.keys(savedDirtyValues).forEach(function (key) {
        formState.values = setIn(formState.values, key, savedDirtyValues[key]);
      });
      runValidation(undefined, function () {
        notifyFieldListeners();
        notifyFormListeners();
      });
    },
    isValidationPaused: function isValidationPaused() {
      return validationPaused;
    },
    pauseValidation: function pauseValidation(preventNotification) {
      if (preventNotification === void 0) {
        preventNotification = true;
      }

      validationPaused = true;
      preventNotificationWhileValidationPaused = preventNotification;
    },
    registerField: function registerField(name, subscriber, subscription, fieldConfig) {
      if (subscription === void 0) {
        subscription = {};
      }

      if (!state.fieldSubscribers[name]) {
        state.fieldSubscribers[name] = {
          index: 0,
          entries: {}
        };
      }

      var index = state.fieldSubscribers[name].index++; // save field subscriber callback

      state.fieldSubscribers[name].entries[index] = {
        subscriber: memoize(subscriber),
        subscription: subscription,
        notified: false
      };

      if (!state.fields[name]) {
        // create initial field state
        state.fields[name] = {
          active: false,
          afterSubmit: fieldConfig && fieldConfig.afterSubmit,
          beforeSubmit: fieldConfig && fieldConfig.beforeSubmit,
          blur: function blur() {
            return api.blur(name);
          },
          change: function change(value) {
            return api.change(name, value);
          },
          data: fieldConfig && fieldConfig.data || {},
          focus: function focus() {
            return api.focus(name);
          },
          isEqual: fieldConfig && fieldConfig.isEqual || tripleEquals,
          lastFieldState: undefined,
          modified: false,
          modifiedSinceLastSubmit: false,
          name: name,
          touched: false,
          valid: true,
          validateFields: fieldConfig && fieldConfig.validateFields,
          validators: {},
          validating: false,
          visited: false
        };
      }

      var haveValidator = false;
      var silent = fieldConfig && fieldConfig.silent;

      var notify = function notify() {
        if (silent) {
          notifyFieldListeners(name);
        } else {
          notifyFormListeners();
          notifyFieldListeners();
        }
      };

      if (fieldConfig) {
        haveValidator = !!(fieldConfig.getValidator && fieldConfig.getValidator());

        if (fieldConfig.getValidator) {
          state.fields[name].validators[index] = fieldConfig.getValidator;
        }

        var noValueInFormState = getIn(state.formState.values, name) === undefined;

        if (fieldConfig.initialValue !== undefined && (noValueInFormState || getIn(state.formState.values, name) === getIn(state.formState.initialValues, name)) // only initialize if we don't yet have any value for this field
        ) {
          state.formState.initialValues = setIn(state.formState.initialValues || {}, name, fieldConfig.initialValue);
          state.formState.values = setIn(state.formState.values, name, fieldConfig.initialValue);
          runValidation(undefined, notify);
        } // only use defaultValue if we don't yet have any value for this field


        if (fieldConfig.defaultValue !== undefined && fieldConfig.initialValue === undefined && getIn(state.formState.initialValues, name) === undefined && noValueInFormState) {
          state.formState.values = setIn(state.formState.values, name, fieldConfig.defaultValue);
        }
      }

      if (haveValidator) {
        runValidation(undefined, notify);
      } else {
        notify();
      }

      return function () {
        var validatorRemoved = false; // istanbul ignore next

        if (state.fields[name]) {
          // state.fields[name] may have been removed by a mutator
          validatorRemoved = !!(state.fields[name].validators[index] && state.fields[name].validators[index]());
          delete state.fields[name].validators[index];
        }

        var hasFieldSubscribers = !!state.fieldSubscribers[name];

        if (hasFieldSubscribers) {
          // state.fieldSubscribers[name] may have been removed by a mutator
          delete state.fieldSubscribers[name].entries[index];
        }

        var lastOne = hasFieldSubscribers && !Object.keys(state.fieldSubscribers[name].entries).length;

        if (lastOne) {
          delete state.fieldSubscribers[name];
          delete state.fields[name];

          if (validatorRemoved) {
            state.formState.errors = setIn(state.formState.errors, name, undefined) || {};
          }

          if (destroyOnUnregister) {
            state.formState.values = setIn(state.formState.values, name, undefined, true) || {};
          }
        }

        if (!silent) {
          if (validatorRemoved) {
            runValidation(undefined, function () {
              notifyFormListeners();
              notifyFieldListeners();
            });
          } else if (lastOne) {
            // values or errors may have changed
            notifyFormListeners();
          }
        }
      };
    },
    reset: function reset(initialValues) {
      if (initialValues === void 0) {
        initialValues = state.formState.initialValues;
      }

      if (state.formState.submitting) {
        state.formState.resetWhileSubmitting = true;
      }

      state.formState.submitFailed = false;
      state.formState.submitSucceeded = false;
      delete state.formState.submitError;
      delete state.formState.submitErrors;
      delete state.formState.lastSubmittedValues;
      api.initialize(initialValues || {});
    },

    /**
     * Resets all field flags (e.g. touched, visited, etc.) to their initial state
     */
    resetFieldState: function resetFieldState(name) {
      state.fields[name] = _extends({}, state.fields[name], {
        active: false,
        lastFieldState: undefined,
        modified: false,
        touched: false,
        valid: true,
        validating: false,
        visited: false
      });
      runValidation(undefined, function () {
        notifyFieldListeners();
        notifyFormListeners();
      });
    },

    /**
     * Returns the form to a clean slate; that is:
     * - Clear all values
     * - Resets all fields to their initial state
     */
    restart: function restart(initialValues) {
      if (initialValues === void 0) {
        initialValues = state.formState.initialValues;
      }

      api.batch(function () {
        for (var name in state.fields) {
          api.resetFieldState(name);
          state.fields[name] = _extends({}, state.fields[name], {
            active: false,
            lastFieldState: undefined,
            modified: false,
            modifiedSinceLastSubmit: false,
            touched: false,
            valid: true,
            validating: false,
            visited: false
          });
        }

        api.reset(initialValues);
      });
    },
    resumeValidation: function resumeValidation() {
      validationPaused = false;
      preventNotificationWhileValidationPaused = false;

      if (validationBlocked) {
        // validation was attempted while it was paused, so run it now
        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
      }

      validationBlocked = false;
    },
    setConfig: function setConfig(name, value) {
      switch (name) {
        case "debug":
          debug = value;
          break;

        case "destroyOnUnregister":
          destroyOnUnregister = value;
          break;

        case "initialValues":
          api.initialize(value);
          break;

        case "keepDirtyOnReinitialize":
          keepDirtyOnReinitialize = value;
          break;

        case "mutators":
          mutators = value;

          if (value) {
            Object.keys(mutatorsApi).forEach(function (key) {
              if (!(key in value)) {
                delete mutatorsApi[key];
              }
            });
            Object.keys(value).forEach(function (key) {
              mutatorsApi[key] = getMutatorApi(key);
            });
          } else {
            Object.keys(mutatorsApi).forEach(function (key) {
              delete mutatorsApi[key];
            });
          }

          break;

        case "onSubmit":
          onSubmit = value;
          break;

        case "validate":
          validate = value;
          runValidation(undefined, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
          break;

        case "validateOnBlur":
          validateOnBlur = value;
          break;

        default:
          throw new Error("Unrecognised option " + name);
      }
    },
    submit: function submit() {
      var formState = state.formState;

      if (formState.submitting) {
        return;
      }

      delete formState.submitErrors;
      delete formState.submitError;
      formState.lastSubmittedValues = _extends({}, formState.values);

      if (hasSyncErrors()) {
        markAllFieldsTouched();
        resetModifiedAfterSubmit();
        state.formState.submitFailed = true;
        notifyFormListeners();
        notifyFieldListeners();
        return; // no submit for you!!
      }

      var asyncValidationPromisesKeys = Object.keys(asyncValidationPromises);

      if (asyncValidationPromisesKeys.length) {
        // still waiting on async validation to complete...
        Promise.all(asyncValidationPromisesKeys.map(function (key) {
          return asyncValidationPromises[Number(key)];
        })).then(api.submit, console.error);
        return;
      }

      var submitIsBlocked = beforeSubmit();

      if (submitIsBlocked) {
        return;
      }

      var resolvePromise;
      var completeCalled = false;

      var complete = function complete(errors) {
        formState.submitting = false;
        var resetWhileSubmitting = formState.resetWhileSubmitting;

        if (resetWhileSubmitting) {
          formState.resetWhileSubmitting = false;
        }

        if (errors && hasAnyError(errors)) {
          formState.submitFailed = true;
          formState.submitSucceeded = false;
          formState.submitErrors = errors;
          formState.submitError = errors[FORM_ERROR];
          markAllFieldsTouched();
        } else {
          if (!resetWhileSubmitting) {
            formState.submitFailed = false;
            formState.submitSucceeded = true;
          }

          afterSubmit();
        }

        notifyFormListeners();
        notifyFieldListeners();
        completeCalled = true;

        if (resolvePromise) {
          resolvePromise(errors);
        }

        return errors;
      };

      formState.submitting = true;
      formState.submitFailed = false;
      formState.submitSucceeded = false;
      formState.lastSubmittedValues = _extends({}, formState.values);
      resetModifiedAfterSubmit(); // onSubmit is either sync, callback or async with a Promise

      var result = onSubmit(formState.values, api, complete);

      if (!completeCalled) {
        if (result && isPromise(result)) {
          // onSubmit is async with a Promise
          notifyFormListeners(); // let everyone know we are submitting

          notifyFieldListeners(); // notify fields also

          return result.then(complete, function (error) {
            complete();
            throw error;
          });
        } else if (onSubmit.length >= 3) {
          // must be async, so we should return a Promise
          notifyFormListeners(); // let everyone know we are submitting

          notifyFieldListeners(); // notify fields also

          return new Promise(function (resolve) {
            resolvePromise = resolve;
          });
        } else {
          // onSubmit is sync
          complete(result);
        }
      }
    },
    subscribe: function subscribe(subscriber, subscription) {
      if (!subscriber) {
        throw new Error("No callback given.");
      }

      if (!subscription) {
        throw new Error("No subscription provided. What values do you want to listen to?");
      }

      var memoized = memoize(subscriber);
      var subscribers = state.subscribers;
      var index = subscribers.index++;
      subscribers.entries[index] = {
        subscriber: memoized,
        subscription: subscription,
        notified: false
      };
      var nextFormState = calculateNextFormState();
      notifySubscriber(memoized, subscription, nextFormState, nextFormState, filterFormState, true);
      return function () {
        delete subscribers.entries[index];
      };
    }
  };
  return api;
}

var _excluded$3$1 = ["render", "children", "component"];
// shared logic between components that use either render prop,
// children render function, or component prop
function renderComponent(props, lazyProps, name) {
  var render = props.render,
      children = props.children,
      component = props.component,
      rest = _objectWithoutPropertiesLoose$6(props, _excluded$3$1);

  if (component) {
    return /*#__PURE__*/React.createElement(component, Object.assign(lazyProps, rest, {
      children: children,
      render: render
    }));
  }

  if (render) {
    return render(children === undefined ? Object.assign(lazyProps, rest) : // inject children back in
    Object.assign(lazyProps, rest, {
      children: children
    }));
  }

  if (typeof children !== "function") {
    throw new Error("Must specify either a render prop, a render function as children, or a component prop to " + name);
  }

  return children(Object.assign(lazyProps, rest));
}

function useWhenValueChanges(value, callback, isEqual) {
  if (isEqual === void 0) {
    isEqual = function isEqual(a, b) {
      return a === b;
    };
  }

  var previous = React__default.useRef(value);
  React__default.useEffect(function () {
    if (!isEqual(value, previous.current)) {
      callback();
      previous.current = value;
    }
  });
}

/**
 * A simple hook to create a constant value that lives for
 * the lifetime of the component.
 *
 * Plagiarized from https://github.com/Andarist/use-constant
 *
 * Do NOT reuse this code unless you know what you're doing.
 * Use Andarist's hook; it's more fault tolerant to things like
 * falsy values.
 *
 * @param {Function} init - A function to generate the value
 */

function useConstant(init) {
  var ref = React__default.useRef();

  if (!ref.current) {
    ref.current = init();
  }

  return ref.current;
}

var shallowEqual = function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== "object" || !a || typeof b !== "object" || !b) {
    return false;
  }

  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(b);

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};

var isSyntheticEvent = function isSyntheticEvent(candidate) {
  return !!(candidate && typeof candidate.stopPropagation === "function");
};

var ReactFinalFormContext = /*#__PURE__*/React.createContext();

function useLatest(value) {
  var ref = React__default.useRef(value);
  React__default.useEffect(function () {
    ref.current = value;
  });
  return ref;
}

var version = "6.5.8";

var addLazyState = function addLazyState(dest, state, keys) {
  keys.forEach(function (key) {
    Object.defineProperty(dest, key, {
      get: function get() {
        return state[key];
      },
      enumerable: true
    });
  });
};

var addLazyFormState = function addLazyFormState(dest, state) {
  return addLazyState(dest, state, ["active", "dirty", "dirtyFields", "dirtySinceLastSubmit", "dirtyFieldsSinceLastSubmit", "error", "errors", "hasSubmitErrors", "hasValidationErrors", "initialValues", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "values", "visited"]);
};
var addLazyFieldMetaState = function addLazyFieldMetaState(dest, state) {
  return addLazyState(dest, state, ["active", "data", "dirty", "dirtySinceLastSubmit", "error", "initial", "invalid", "length", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "visited"]);
};

var _excluded$2$1 = ["debug", "decorators", "destroyOnUnregister", "form", "initialValues", "initialValuesEqual", "keepDirtyOnReinitialize", "mutators", "onSubmit", "subscription", "validate", "validateOnBlur"];
var versions = {
  "final-form": version$1,
  "react-final-form": version
};
var all$1 = formSubscriptionItems.reduce(function (result, key) {
  result[key] = true;
  return result;
}, {});

function ReactFinalForm(_ref) {
  var debug = _ref.debug,
      _ref$decorators = _ref.decorators,
      decorators = _ref$decorators === void 0 ? [] : _ref$decorators,
      destroyOnUnregister = _ref.destroyOnUnregister,
      alternateFormApi = _ref.form,
      initialValues = _ref.initialValues,
      initialValuesEqual = _ref.initialValuesEqual,
      keepDirtyOnReinitialize = _ref.keepDirtyOnReinitialize,
      mutators = _ref.mutators,
      onSubmit = _ref.onSubmit,
      _ref$subscription = _ref.subscription,
      subscription = _ref$subscription === void 0 ? all$1 : _ref$subscription,
      validate = _ref.validate,
      validateOnBlur = _ref.validateOnBlur,
      rest = _objectWithoutPropertiesLoose$6(_ref, _excluded$2$1);

  var config = {
    debug: debug,
    destroyOnUnregister: destroyOnUnregister,
    initialValues: initialValues,
    keepDirtyOnReinitialize: keepDirtyOnReinitialize,
    mutators: mutators,
    onSubmit: onSubmit,
    validate: validate,
    validateOnBlur: validateOnBlur
  };
  var form = useConstant(function () {
    var f = alternateFormApi || createForm(config); // pause validation until children register all fields on first render (unpaused in useEffect() below)

    f.pauseValidation();
    return f;
  }); // synchronously register and unregister to query form state for our subscription on first render

  var _React$useState = React.useState(function () {
    var initialState = {};
    form.subscribe(function (state) {
      initialState = state;
    }, subscription)();
    return initialState;
  }),
      state = _React$useState[0],
      setState = _React$useState[1]; // save a copy of state that can break through the closure
  // on the shallowEqual() line below.


  var stateRef = useLatest(state);
  React.useEffect(function () {
    // We have rendered, so all fields are now registered, so we can unpause validation
    form.isValidationPaused() && form.resumeValidation();
    var unsubscriptions = [form.subscribe(function (s) {
      if (!shallowEqual(s, stateRef.current)) {
        setState(s);
      }
    }, subscription)].concat(decorators ? decorators.map(function (decorator) {
      return (// this noop ternary is to appease the flow gods
        // istanbul ignore next
        decorator(form)
      );
    }) : []);
    return function () {
      form.pauseValidation(); // pause validation so we don't revalidate on every field deregistration

      unsubscriptions.reverse().forEach(function (unsubscribe) {
        return unsubscribe();
      }); // don't need to resume validation here; either unmounting, or will re-run this hook with new deps
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, decorators); // warn about decorator changes
  // istanbul ignore next

  if (process.env.NODE_ENV !== "production") {
    // You're never supposed to use hooks inside a conditional, but in this
    // case we can be certain that you're not going to be changing your
    // NODE_ENV between renders, so this is safe.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useWhenValueChanges(decorators, function () {
      console.error("Form decorators should not change from one render to the next as new values will be ignored");
    }, shallowEqual);
  } // allow updatable config


  useWhenValueChanges(debug, function () {
    form.setConfig("debug", debug);
  });
  useWhenValueChanges(destroyOnUnregister, function () {
    form.destroyOnUnregister = !!destroyOnUnregister;
  });
  useWhenValueChanges(keepDirtyOnReinitialize, function () {
    form.setConfig("keepDirtyOnReinitialize", keepDirtyOnReinitialize);
  });
  useWhenValueChanges(initialValues, function () {
    form.setConfig("initialValues", initialValues);
  }, initialValuesEqual || shallowEqual);
  useWhenValueChanges(mutators, function () {
    form.setConfig("mutators", mutators);
  });
  useWhenValueChanges(onSubmit, function () {
    form.setConfig("onSubmit", onSubmit);
  });
  useWhenValueChanges(validate, function () {
    form.setConfig("validate", validate);
  });
  useWhenValueChanges(validateOnBlur, function () {
    form.setConfig("validateOnBlur", validateOnBlur);
  });

  var handleSubmit = function handleSubmit(event) {
    if (event) {
      // sometimes not true, e.g. React Native
      if (typeof event.preventDefault === "function") {
        event.preventDefault();
      }

      if (typeof event.stopPropagation === "function") {
        // prevent any outer forms from receiving the event too
        event.stopPropagation();
      }
    }

    return form.submit();
  };

  var renderProps = {
    form: _extends({}, form, {
      reset: function reset(eventOrValues) {
        if (isSyntheticEvent(eventOrValues)) {
          // it's a React SyntheticEvent, call reset with no arguments
          form.reset();
        } else {
          form.reset(eventOrValues);
        }
      }
    }),
    handleSubmit: handleSubmit
  };
  addLazyFormState(renderProps, state);
  return /*#__PURE__*/React.createElement(ReactFinalFormContext.Provider, {
    value: form
  }, renderComponent(_extends({}, rest, {
    __versions: versions
  }), renderProps, "ReactFinalForm"));
}

function useForm(componentName) {
  var form = React.useContext(ReactFinalFormContext);

  if (!form) {
    throw new Error((componentName || "useForm") + " must be used inside of a <Form> component");
  }

  return form;
}

var isReactNative = typeof window !== "undefined" && window.navigator && window.navigator.product && window.navigator.product === "ReactNative";

var getSelectedValues = function getSelectedValues(options) {
  var result = [];

  if (options) {
    for (var index = 0; index < options.length; index++) {
      var option = options[index];

      if (option.selected) {
        result.push(option.value);
      }
    }
  }

  return result;
};

var getValue = function getValue(event, currentValue, valueProp, isReactNative) {
  if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
    return event.nativeEvent.text;
  }

  if (isReactNative && event.nativeEvent) {
    return event.nativeEvent.text;
  }

  var detypedEvent = event;
  var _detypedEvent$target = detypedEvent.target,
      type = _detypedEvent$target.type,
      value = _detypedEvent$target.value,
      checked = _detypedEvent$target.checked;

  switch (type) {
    case "checkbox":
      if (valueProp !== undefined) {
        // we are maintaining an array, not just a boolean
        if (checked) {
          // add value to current array value
          return Array.isArray(currentValue) ? currentValue.concat(valueProp) : [valueProp];
        } else {
          // remove value from current array value
          if (!Array.isArray(currentValue)) {
            return currentValue;
          }

          var index = currentValue.indexOf(valueProp);

          if (index < 0) {
            return currentValue;
          } else {
            return currentValue.slice(0, index).concat(currentValue.slice(index + 1));
          }
        }
      } else {
        // it's just a boolean
        return !!checked;
      }

    case "select-multiple":
      return getSelectedValues(event.target.options);

    default:
      return value;
  }
};

/**
 * Creates a callback, even with closures, that will be
 * instance === for the lifetime of the component, always
 * calling the most recent version of the function and its
 * closures.
 */

function useConstantCallback(callback) {
  var ref = React.useRef(callback);
  React.useEffect(function () {
    ref.current = callback;
  });
  return React.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(null, args);
  }, []);
}

var all$2 = fieldSubscriptionItems.reduce(function (result, key) {
  result[key] = true;
  return result;
}, {});

var defaultFormat = function defaultFormat(value, name) {
  return value === undefined ? "" : value;
};

var defaultParse = function defaultParse(value, name) {
  return value === "" ? undefined : value;
};

var defaultIsEqual = function defaultIsEqual(a, b) {
  return a === b;
};

function useField(name, config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      afterSubmit = _config.afterSubmit,
      allowNull = _config.allowNull,
      component = _config.component,
      data = _config.data,
      defaultValue = _config.defaultValue,
      _config$format = _config.format,
      format = _config$format === void 0 ? defaultFormat : _config$format,
      formatOnBlur = _config.formatOnBlur,
      initialValue = _config.initialValue,
      multiple = _config.multiple,
      _config$parse = _config.parse,
      parse = _config$parse === void 0 ? defaultParse : _config$parse,
      _config$subscription = _config.subscription,
      subscription = _config$subscription === void 0 ? all$2 : _config$subscription,
      type = _config.type,
      validateFields = _config.validateFields,
      _value = _config.value;
  var form = useForm("useField");
  var configRef = useLatest(config);

  var register = function register(callback, silent) {
    return (// avoid using `state` const in any closures created inside `register`
      // because they would refer `state` from current execution context
      // whereas actual `state` would defined in the subsequent `useField` hook
      // execution
      // (that would be caused by `setState` call performed in `register` callback)
      form.registerField(name, callback, subscription, {
        afterSubmit: afterSubmit,
        beforeSubmit: function beforeSubmit() {
          var _configRef$current = configRef.current,
              beforeSubmit = _configRef$current.beforeSubmit,
              formatOnBlur = _configRef$current.formatOnBlur,
              _configRef$current$fo = _configRef$current.format,
              format = _configRef$current$fo === void 0 ? defaultFormat : _configRef$current$fo;

          if (formatOnBlur) {
            var _ref = form.getFieldState(name),
                value = _ref.value;

            var formatted = format(value, name);

            if (formatted !== value) {
              form.change(name, formatted);
            }
          }

          return beforeSubmit && beforeSubmit();
        },
        data: data,
        defaultValue: defaultValue,
        getValidator: function getValidator() {
          return configRef.current.validate;
        },
        initialValue: initialValue,
        isEqual: function isEqual(a, b) {
          return (configRef.current.isEqual || defaultIsEqual)(a, b);
        },
        silent: silent,
        validateFields: validateFields
      })
    );
  };

  var firstRender = React.useRef(true); // synchronously register and unregister to query field state for our subscription on first render

  var _React$useState = React.useState(function () {
    var initialState = {}; // temporarily disable destroyOnUnregister

    // temporarily disable destroyOnUnregister
    var destroyOnUnregister = form.destroyOnUnregister;
    form.destroyOnUnregister = false;
    register(function (state) {
      initialState = state;
    }, true)(); // return destroyOnUnregister to its original value

    // return destroyOnUnregister to its original value
    form.destroyOnUnregister = destroyOnUnregister;
    return initialState;
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  React.useEffect(function () {
    return register(function (state) {
      if (firstRender.current) {
        firstRender.current = false;
      } else {
        setState(state);
      }
    }, false);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [name, data, defaultValue, // If we want to allow inline fat-arrow field-level validation functions, we
  // cannot reregister field every time validate function !==.
  // validate,
  initialValue // The validateFields array is often passed as validateFields={[]}, creating
  // a !== new array every time. If it needs to be changed, a rerender/reregister
  // can be forced by changing the key prop
  // validateFields
  ]);
  var meta = {};
  addLazyFieldMetaState(meta, state);
  var input = {
    name: name,

    get value() {
      var value = state.value;

      if (formatOnBlur) {
        if (component === "input") {
          value = defaultFormat(value);
        }
      } else {
        value = format(value, name);
      }

      if (value === null && !allowNull) {
        value = "";
      }

      if (type === "checkbox" || type === "radio") {
        return _value;
      } else if (component === "select" && multiple) {
        return value || [];
      }

      return value;
    },

    get checked() {
      var value = state.value;

      if (type === "checkbox") {
        value = format(value, name);

        if (_value === undefined) {
          return !!value;
        } else {
          return !!(Array.isArray(value) && ~value.indexOf(_value));
        }
      } else if (type === "radio") {
        return format(value, name) === _value;
      }

      return undefined;
    },

    onBlur: useConstantCallback(function (event) {
      state.blur();

      if (formatOnBlur) {
        /**
         * Here we must fetch the value directly from Final Form because we cannot
         * trust that our `state` closure has the most recent value. This is a problem
         * if-and-only-if the library consumer has called `onChange()` immediately
         * before calling `onBlur()`, but before the field has had a chance to receive
         * the value update from Final Form.
         */
        var fieldState = form.getFieldState(state.name);
        state.change(format(fieldState.value, state.name));
      }
    }),
    onChange: useConstantCallback(function (event) {
      // istanbul ignore next
      if (process.env.NODE_ENV !== "production" && event && event.target) {
        var targetType = event.target.type;
        var unknown = ~["checkbox", "radio", "select-multiple"].indexOf(targetType) && !type && component !== "select";

        var _value2 = targetType === "select-multiple" ? state.value : _value;

        if (unknown) {
          console.error("You must pass `type=\"" + (targetType === "select-multiple" ? "select" : targetType) + "\"` prop to your Field(" + name + ") component.\n" + ("Without it we don't know how to unpack your `value` prop - " + (Array.isArray(_value2) ? "[" + _value2 + "]" : "\"" + _value2 + "\"") + "."));
        }
      }

      var value = event && event.target ? getValue(event, state.value, _value, isReactNative) : event;
      state.change(parse(value, name));
    }),
    onFocus: useConstantCallback(function (event) {
      return state.focus();
    })
  };

  if (multiple) {
    input.multiple = multiple;
  }

  if (type !== undefined) {
    input.type = type;
  }

  var renderProps = {
    input: input,
    meta: meta
  }; // assign to force Flow check

  return renderProps;
}

var _excluded$9 = ["afterSubmit", "allowNull", "beforeSubmit", "children", "component", "data", "defaultValue", "format", "formatOnBlur", "initialValue", "isEqual", "multiple", "name", "parse", "subscription", "type", "validate", "validateFields", "value"];
var Field = /*#__PURE__*/React.forwardRef(function Field(_ref, ref) {
  var afterSubmit = _ref.afterSubmit,
      allowNull = _ref.allowNull,
      beforeSubmit = _ref.beforeSubmit,
      children = _ref.children,
      component = _ref.component,
      data = _ref.data,
      defaultValue = _ref.defaultValue,
      format = _ref.format,
      formatOnBlur = _ref.formatOnBlur,
      initialValue = _ref.initialValue,
      isEqual = _ref.isEqual,
      multiple = _ref.multiple,
      name = _ref.name,
      parse = _ref.parse,
      subscription = _ref.subscription,
      type = _ref.type,
      validate = _ref.validate,
      validateFields = _ref.validateFields,
      value = _ref.value,
      rest = _objectWithoutPropertiesLoose$6(_ref, _excluded$9);

  var field = useField(name, {
    afterSubmit: afterSubmit,
    allowNull: allowNull,
    beforeSubmit: beforeSubmit,
    children: children,
    component: component,
    data: data,
    defaultValue: defaultValue,
    format: format,
    formatOnBlur: formatOnBlur,
    initialValue: initialValue,
    isEqual: isEqual,
    multiple: multiple,
    parse: parse,
    subscription: subscription,
    type: type,
    validate: validate,
    validateFields: validateFields,
    value: value
  });

  if (typeof children === "function") {
    return children(_extends({}, field, rest));
  }

  if (typeof component === "string") {
    // ignore meta, combine input with any other props
    return /*#__PURE__*/React.createElement(component, _extends({}, field.input, {
      children: children,
      ref: ref
    }, rest));
  }

  if (!name) {
    throw new Error("prop name cannot be undefined in <Field> component");
  }

  return renderComponent(_extends({
    children: children,
    component: component,
    ref: ref
  }, rest), field, "Field(" + name + ")");
});

var AfwForm = function AfwForm(props) {
  var formData = props.formData,
      onSubmit = props.onSubmit,
      children = props.children;

  var doSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values, form) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('doSubmit', values, form.getFieldState('password'));
              onSubmit(values);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function doSubmit(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React__default.createElement(ReactFinalForm, {
    onSubmit: doSubmit,
    validateOnBlur: true,
    initialValues: formData,
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit;
      return /*#__PURE__*/React__default.createElement("form", {
        noValidate: true,
        onSubmit: handleSubmit
      }, children);
    }
  });
};

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = useRef(propValue !== undefined);

  var _useState = useState(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, useCallback(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = _objectWithoutPropertiesLoose$6(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const ThemeContext = /*#__PURE__*/React.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS
});

function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
  const {
    breakpoints
  } = useContext(ThemeContext);
  return breakpoints;
}
function useIsRTL() {
  const {
    dir
  } = useContext(ThemeContext);
  return dir === 'rtl';
}

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}

var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

var propTypes$4 = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$2 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has$2;

  printWarning$2 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$2(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$2(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var has = has$2;
var checkPropTypes = checkPropTypes_1;

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes$4.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes$4.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes$4.exports;

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

var TransitionGroupContext = React__default.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose$6(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default.cloneElement(React__default.Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop$1() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop$1,
  onEntering: noop$1,
  onEntered: noop$1,
  onExit: noop$1,
  onExiting: noop$1,
  onExited: noop$1
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/* eslint-disable no-return-assign */
var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (canUseDOM) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

function listen(node, eventName, handler, options) {
  addEventListener(node, eventName, handler, options);
  return function () {
    removeEventListener(node, eventName, handler, options);
  };
}

/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }

  if (cancelable === void 0) {
    cancelable = true;
  }

  if (node) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

function parseDuration$1(node) {
  var str = style(node, 'transitionDuration') || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }

  var called = false;
  var handle = setTimeout(function () {
    if (!called) triggerEvent(element, 'transitionend', true);
  }, duration + padding);
  var remove = listen(element, 'transitionend', function () {
    called = true;
  }, {
    once: true
  });
  return function () {
    clearTimeout(handle);
    remove();
  };
}

function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration$1(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = listen(element, 'transitionend', handler);
  return function () {
    removeEmulate();
    remove();
  };
}

function parseDuration(node, property) {
  const str = style(node, property) || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function transitionEndListener(element, handler) {
  const duration = parseDuration(element, 'transitionDuration');
  const delay = parseDuration(element, 'transitionDelay');
  const remove = transitionEnd(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}

var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return useMemo(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return ReactDOM.findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}

// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/React__default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = useRef(null);
  const mergedRef = useMergedRefs(nodeRef, childRef);

  const attachRef = r => {
    mergedRef(safeFindDOMNode(r));
  };

  const normalize = callback => param => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  /* eslint-disable react-hooks/exhaustive-deps */


  const handleEnter = useCallback(normalize(onEnter), [onEnter]);
  const handleEntering = useCallback(normalize(onEntering), [onEntering]);
  const handleEntered = useCallback(normalize(onEntered), [onEntered]);
  const handleExit = useCallback(normalize(onExit), [onExit]);
  const handleExiting = useCallback(normalize(onExiting), [onExiting]);
  const handleExited = useCallback(normalize(onExited), [onExited]);
  const handleAddEndListener = useCallback(normalize(addEndListener), [addEndListener]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/jsx(Transition, {
    ref: ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    children: typeof children === 'function' ? (status, innerProps) => children(status, { ...innerProps,
      ref: attachRef
    }) : /*#__PURE__*/React__default.cloneElement(children, {
      ref: attachRef
    })
  });
});
var TransitionWrapper$1 = TransitionWrapper;

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = useRef(value);
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

function useEventCallback(fn) {
  var ref = useCommittedRef(fn);
  return useCallback(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return useState(null);
}

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = useRef(true);
  var isMounted = useRef(function () {
    return mounted.current;
  });
  useEffect(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */

function usePrevious(value) {
  var ref = useRef(null);
  useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

const _excluded$8 = ["as", "disabled"];

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function isTrivialHref$1(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  const meta = {
    tagName
  };

  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }

  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref$1(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (tagName === 'a') {
    // Ensure there's a href so Enter can trigger anchor button.
    href || (href = '#');

    if (disabled) {
      href = undefined;
    }
  }

  return [{
    role: 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref,
      props = _objectWithoutPropertiesLoose$5(_ref, _excluded$8);

  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/jsx(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button.displayName = 'Button';

const _excluded$7 = ["onKeyDown"];

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */
const Anchor = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose$4(_ref, _excluded$7);

  const [buttonProps] = useButtonProps(Object.assign({
    tagName: 'a'
  }, props));
  const handleKeyDown = useEventCallback(e => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });

  if (isTrivialHref(props.href) && !props.role || props.role === 'button') {
    return /*#__PURE__*/jsx("a", Object.assign({
      ref: ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }

  return /*#__PURE__*/jsx("a", Object.assign({
    ref: ref
  }, props, {
    onKeyDown: onKeyDown
  }));
});
Anchor.displayName = 'Anchor';

const defaultProps$8 = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const fadeStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};
const Fade = /*#__PURE__*/React.forwardRef(({
  className,
  children,
  transitionClasses = {},
  ...props
}, ref) => {
  const handleEnter = useCallback((node, isAppearing) => {
    triggerBrowserReflow(node);
    props.onEnter == null ? void 0 : props.onEnter(node, isAppearing);
  }, [props]);
  return /*#__PURE__*/jsx(TransitionWrapper$1, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/React.cloneElement(children, { ...innerProps,
      className: classNames('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.defaultProps = defaultProps$8;
Fade.displayName = 'Fade';
var Fade$1 = Fade;

const propTypes$3 = {
  'aria-label': PropTypes.string,
  onClick: PropTypes.func,

  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: PropTypes.oneOf(['white'])
};
const defaultProps$7 = {
  'aria-label': 'Close'
};
const CloseButton = /*#__PURE__*/React.forwardRef(({
  className,
  variant,
  ...props
}, ref) => /*#__PURE__*/jsx("button", {
  ref: ref,
  type: "button",
  className: classNames('btn-close', variant && `btn-close-${variant}`, className),
  ...props
}));
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes$3;
CloseButton.defaultProps = defaultProps$7;
var CloseButton$1 = CloseButton;

var divWithClassName = (className => /*#__PURE__*/React.forwardRef((p, ref) => /*#__PURE__*/jsx("div", { ...p,
  ref: ref,
  className: classNames(p.className, className)
})));

var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

const pascalCase = str => str[0].toUpperCase() + camelize(str).slice(1);

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = /*#__PURE__*/React.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /*#__PURE__*/jsx(Tag, {
      ref: ref,
      className: classNames(className, resolvedPrefix),
      ...props
    });
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

const context$2 = /*#__PURE__*/React.createContext(null);
context$2.displayName = 'CardHeaderContext';
var CardHeaderContext = context$2;

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = useRef(value);
  valueRef.current = value;
  return valueRef;
}

/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = useUpdatedRef(fn);
  useEffect(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}

/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */


function hasChildOfType(children, type) {
  return React.Children.toArray(children).some(child => /*#__PURE__*/React.isValidElement(child) && child.type === type);
}

function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
  const breakpoints = useBootstrapBreakpoints();
  const spans = [];
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;

    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{ ...props,
    className: classNames(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/jsx(Component, { ...colProps,
    ref: ref,
    className: classNames(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
var Col$1 = Col;

var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
 * Runs `querySelectorAll` on a given element.
 * 
 * @param element the element
 * @param selector the selector
 */

function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = useReducer(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */
function contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9d939cbc98267846$exports = {};

$parcel$export($9d939cbc98267846$exports, "SSRProvider", () => $9d939cbc98267846$export$9f8ac96af4b1b2ae);
$parcel$export($9d939cbc98267846$exports, "useSSRSafeId", () => $9d939cbc98267846$export$619500959fc48b26);
$parcel$export($9d939cbc98267846$exports, "useIsSSR", () => $9d939cbc98267846$export$535bd6ca7f90a273);

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $9d939cbc98267846$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $9d939cbc98267846$var$SSRContext = /*#__PURE__*/ React__default.createContext($9d939cbc98267846$var$defaultContext);
function $9d939cbc98267846$export$9f8ac96af4b1b2ae(props) {
    let cur = useContext($9d939cbc98267846$var$SSRContext);
    let value = useMemo(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $9d939cbc98267846$var$defaultContext ? '' : `${cur.prefix}-${++cur.current}`,
            current: 0
        })
    , [
        cur
    ]);
    return(/*#__PURE__*/ React__default.createElement($9d939cbc98267846$var$SSRContext.Provider, {
        value: value
    }, props.children));
}
let $9d939cbc98267846$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
function $9d939cbc98267846$export$619500959fc48b26(defaultId) {
    let ctx = useContext($9d939cbc98267846$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $9d939cbc98267846$var$defaultContext && !$9d939cbc98267846$var$canUseDOM) console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    return useMemo(()=>defaultId || `react-aria${ctx.prefix}-${++ctx.current}`
    , [
        defaultId
    ]);
}
function $9d939cbc98267846$export$535bd6ca7f90a273() {
    let cur = useContext($9d939cbc98267846$var$SSRContext);
    let isInSSRContext = cur !== $9d939cbc98267846$var$defaultContext;
    let [isSSR, setIsSSR] = useState(isInSSRContext);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof window !== 'undefined' && isInSSRContext) // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(()=>{
        setIsSSR(false);
    }, []);
    return isSSR;
}

const SelectableContext = /*#__PURE__*/React.createContext(null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};

const NavContext = /*#__PURE__*/React.createContext(null);
NavContext.displayName = 'NavContext';
var NavContext$1 = NavContext;

const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

const Context = /*#__PURE__*/createContext(canUseDOM ? window : undefined);
Context.Provider;
/**
 * The document "window" placed in React context. Helpful for determining
 * SSR context, or when rendering into an iframe.
 *
 * @returns the current window
 */

function useWindow() {
  return useContext(Context);
}

const context$1 = /*#__PURE__*/React.createContext(null);
context$1.displayName = 'InputGroupContext';
var InputGroupContext = context$1;

const context = /*#__PURE__*/React.createContext(null);
context.displayName = 'NavbarContext';
var NavbarContext = context;

const propTypes$2 = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: PropTypes.string,

  /** Display feedback as a tooltip. */
  tooltip: PropTypes.bool,
  as: PropTypes.elementType
};
const Feedback = /*#__PURE__*/React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  as: Component = 'div',
  className,
  type = 'valid',
  tooltip = false,
  ...props
}, ref) => /*#__PURE__*/jsx(Component, { ...props,
  ref: ref,
  className: classNames(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
}));
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes$2;
var Feedback$1 = Feedback;

const FormContext = /*#__PURE__*/React.createContext({});
var FormContext$1 = FormContext;

const FormCheckInput = /*#__PURE__*/React.forwardRef(({
  id,
  bsPrefix,
  className,
  type = 'checkbox',
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-input');
  return /*#__PURE__*/jsx(Component, { ...props,
    ref: ref,
    type: type,
    id: id || controlId,
    className: classNames(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormCheckInput.displayName = 'FormCheckInput';
var FormCheckInput$1 = FormCheckInput;

const FormCheckLabel = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
  return /*#__PURE__*/jsx("label", { ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classNames(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';
var FormCheckLabel$1 = FormCheckLabel;

const FormCheck = /*#__PURE__*/React.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = '',
  type = 'checkbox',
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = 'input',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check');
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = useContext(FormContext$1);
  const innerFormContext = useMemo(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel$1);

  const input = /*#__PURE__*/jsx(FormCheckInput$1, { ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });

  return /*#__PURE__*/jsx(FormContext$1.Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/jsx("div", {
      style: style,
      className: classNames(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/jsxs(Fragment, {
        children: [input, hasLabel && /*#__PURE__*/jsx(FormCheckLabel$1, {
          title: title,
          children: label
        }), feedback && /*#__PURE__*/jsx(Feedback$1, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = 'FormCheck';
var FormCheck$1 = Object.assign(FormCheck, {
  Input: FormCheckInput$1,
  Label: FormCheckLabel$1
});

const FormControl = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  type,
  size,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-control');
  let classes;

  if (plaintext) {
    classes = {
      [`${bsPrefix}-plaintext`]: true
    };
  } else {
    classes = {
      [bsPrefix]: true,
      [`${bsPrefix}-${size}`]: size
    };
  }

  process.env.NODE_ENV !== "production" ? warning_1(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;
  return /*#__PURE__*/jsx(Component, { ...props,
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classNames(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === 'color' && `${bsPrefix}-color`)
  });
});
FormControl.displayName = 'FormControl';
var FormControl$1 = Object.assign(FormControl, {
  Feedback: Feedback$1
});

var FormFloating = createWithBsPrefix('form-floating');

const FormGroup = /*#__PURE__*/React.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const context = useMemo(() => ({
    controlId
  }), [controlId]);
  return /*#__PURE__*/jsx(FormContext$1.Provider, {
    value: context,
    children: /*#__PURE__*/jsx(Component, { ...props,
      ref: ref
    })
  });
});
FormGroup.displayName = 'FormGroup';
var FormGroup$1 = FormGroup;

const defaultProps$6 = {
  column: false,
  visuallyHidden: false
};
const FormLabel = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'label',
  bsPrefix,
  column,
  visuallyHidden,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-label');
  let columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classNames(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
  process.env.NODE_ENV !== "production" ? warning_1(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/jsx(Col$1, {
    ref: ref,
    as: "label",
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    jsx(Component, {
      ref: ref,
      className: classes,
      htmlFor: htmlFor,
      ...props
    })
  );
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps$6;
var FormLabel$1 = FormLabel;

const FormRange = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-range');
  return /*#__PURE__*/jsx("input", { ...props,
    type: "range",
    ref: ref,
    className: classNames(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = 'FormRange';
var FormRange$1 = FormRange;

const FormSelect = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext$1);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
  return /*#__PURE__*/jsx("select", { ...props,
    size: htmlSize,
    ref: ref,
    className: classNames(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';
var FormSelect$1 = FormSelect;

const FormText = /*#__PURE__*/React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  as: Component = 'small',
  muted,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
  return /*#__PURE__*/jsx(Component, { ...props,
    ref: ref,
    className: classNames(className, bsPrefix, muted && 'text-muted')
  });
});
FormText.displayName = 'FormText';
var FormText$1 = FormText;

const Switch = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/jsx(FormCheck$1, { ...props,
  ref: ref,
  type: "switch"
}));
Switch.displayName = 'Switch';
var Switch$1 = Object.assign(Switch, {
  Input: FormCheck$1.Input,
  Label: FormCheck$1.Label
});

const FloatingLabel = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
  return /*#__PURE__*/jsxs(FormGroup$1, {
    ref: ref,
    className: classNames(className, bsPrefix),
    controlId: controlId,
    ...props,
    children: [children, /*#__PURE__*/jsx("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = 'FloatingLabel';
var FloatingLabel$1 = FloatingLabel;

const propTypes$1 = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: PropTypes.any,

  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: PropTypes.bool,
  as: PropTypes.elementType
};
const Form = /*#__PURE__*/React.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'form',
  ...props
}, ref) => /*#__PURE__*/jsx(Component, { ...props,
  ref: ref,
  className: classNames(className, validated && 'was-validated')
}));
Form.displayName = 'Form';
Form.propTypes = propTypes$1;
var Form$1 = Object.assign(Form, {
  Group: FormGroup$1,
  Control: FormControl$1,
  Floating: FormFloating,
  Check: FormCheck$1,
  Switch: Switch$1,
  Label: FormLabel$1,
  Text: FormText$1,
  Range: FormRange$1,
  Select: FormSelect$1,
  FloatingLabel: FloatingLabel$1
});

const InputGroupText = createWithBsPrefix('input-group-text', {
  Component: 'span'
});

const InputGroupCheckbox = props => /*#__PURE__*/jsx(InputGroupText, {
  children: /*#__PURE__*/jsx(FormCheckInput$1, {
    type: "checkbox",
    ...props
  })
});

const InputGroupRadio = props => /*#__PURE__*/jsx(InputGroupText, {
  children: /*#__PURE__*/jsx(FormCheckInput$1, {
    type: "radio",
    ...props
  })
});

/**
 *
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
const InputGroup = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  size,
  hasValidation,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'input-group'); // Intentionally an empty object. Used in detecting if a dropdown
  // exists under an input group.

  const contextValue = useMemo(() => ({}), []);
  return /*#__PURE__*/jsx(InputGroupContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsx(Component, {
      ref: ref,
      ...props,
      className: classNames(className, bsPrefix, size && `${bsPrefix}-${size}`, hasValidation && 'has-validation')
    })
  });
});
InputGroup.displayName = 'InputGroup';
var InputGroup$1 = Object.assign(InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
});

const TabContext = /*#__PURE__*/React.createContext(null);

const _excluded$6 = ["as", "active", "eventKey"];

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = useContext(SelectableContext);
  const navContext = useContext(NavContext$1);
  const tabContext = useContext(TabContext);
  let isActive = active;
  const props = {
    role
  };

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[dataAttr('event-key')] = key;
    props.id = contextControllerId || id;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
    /**
     * Simplified scenario for `mountOnEnter`.
     *
     * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
     * once, it would also complicate the code quite a bit, for very little gain.
     * The following implementation is probably good enough.
     *
     * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
     */

    if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props['aria-controls'] = contextControlledId;
  }

  if (props.role === 'tab') {
    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (isActive) {
      props['aria-selected'] = isActive;
    } else {
      props.tabIndex = -1;
    }
  }

  props.onClick = useEventCallback(e => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem$1 = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    as: Component = Button,
    active,
    eventKey
  } = _ref,
      options = _objectWithoutPropertiesLoose$3(_ref, _excluded$6);

  const [props, meta] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options)); // @ts-ignore

  props[dataAttr('active')] = meta.isActive;
  return /*#__PURE__*/jsx(Component, Object.assign({}, options, props, {
    ref: ref
  }));
});
NavItem$1.displayName = 'NavItem';

const _excluded$5 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const EVENT_KEY_ATTR = dataAttr('event-key');
const Nav$2 = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose$2(_ref, _excluded$5);

  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  const forceUpdate = useForceUpdate();
  const needsRefocusRef = useRef(false);
  const parentOnSelect = useContext(SelectableContext);
  const tabContext = useContext(TabContext);
  let getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  const listNode = useRef(null);

  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild || activeChild !== document.activeElement) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[dataProp('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  useEffect(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  const mergedRef = useMergedRefs(ref, listNode);
  return /*#__PURE__*/jsx(SelectableContext.Provider, {
    value: handleSelect,
    children: /*#__PURE__*/jsx(NavContext$1.Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: makeEventKey(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      },
      children: /*#__PURE__*/jsx(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role: role
      }))
    })
  });
});
Nav$2.displayName = 'Nav';
var BaseNav = Object.assign(Nav$2, {
  Item: NavItem$1
});

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

/**
 * Returns the actively focused element safely.
 *
 * @param doc the document to check
 */

function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument();
  }

  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>

    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    /* ie throws if no active element */
    return doc.body;
  }
}

/**
 * Get the width of the vertical window scrollbar if it's visible
 */
function getBodyScrollbarWidth(ownerDocument = document) {
  const window = ownerDocument.defaultView;
  return Math.abs(window.innerWidth - ownerDocument.documentElement.clientWidth);
}

const OPEN_DATA_ATTRIBUTE = dataAttr('modal-open');
/**
 * Manages a stack of Modals as well as ensuring
 * body scrolling is is disabled and padding accounted for
 */

class ModalManager {
  constructor({
    ownerDocument,
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
    this.ownerDocument = ownerDocument;
  }

  getScrollbarWidth() {
    return getBodyScrollbarWidth(this.ownerDocument);
  }

  getElement() {
    return (this.ownerDocument || document).body;
  }

  setModalAttributes(_modal) {// For overriding
  }

  removeModalAttributes(_modal) {// For overriding
  }

  setContainerStyle(containerState) {
    const style$1 = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const container = this.getElement();
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };

    if (containerState.scrollBarWidth) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style$1[paddingProp] = `${parseInt(style(container, paddingProp) || '0', 10) + containerState.scrollBarWidth}px`;
    }

    container.setAttribute(OPEN_DATA_ATTRIBUTE, '');
    style(container, style$1);
  }

  reset() {
    [...this.modals].forEach(m => this.remove(m));
  }

  removeContainerStyle(containerState) {
    const container = this.getElement();
    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
    Object.assign(container.style, containerState.style);
  }

  add(modal) {
    let modalIdx = this.modals.indexOf(modal);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);
    this.setModalAttributes(modal);

    if (modalIdx !== 0) {
      return modalIdx;
    }

    this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(this.state);
    }

    return modalIdx;
  }

  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (!this.modals.length && this.handleContainerOverflow) {
      this.removeContainerStyle(this.state);
    }

    this.removeModalAttributes(modal);
  }

  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }

}

var ModalManager$1 = ModalManager;

const resolveContainerRef = (ref, document) => {
  var _ref;

  if (!canUseDOM) return null;
  if (ref == null) return (document || ownerDocument()).body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  const window = useWindow();
  const [resolvedRef, setRef] = useState(() => resolveContainerRef(ref, window == null ? void 0 : window.document));

  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  useEffect(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  useEffect(() => {
    const nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

const _excluded$4 = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
let manager;

function getManager(window) {
  if (!manager) manager = new ModalManager$1({
    ownerDocument: window == null ? void 0 : window.document
  });
  return manager;
}

function useModalManager(provided) {
  const window = useWindow();
  const modalManager = provided || getManager(window);
  const modal = useRef({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: useCallback(ref => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: useCallback(ref => {
      modal.current.backdrop = ref;
    }, [])
  });
}

const Modal$2 = /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    show = false,
    role = 'dialog',
    className,
    style,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    backdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = props => /*#__PURE__*/jsx("div", Object.assign({}, props)),
    manager: providedManager,
    container: containerRef,
    onShow,
    onHide = () => {},
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref,
      rest = _objectWithoutPropertiesLoose$1(_ref, _excluded$4);

  const container = useWaitForDOMRef(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = useMounted();
  const prevShow = usePrevious(show);
  const [exited, setExited] = useState(!show);
  const lastFocusRef = useRef(null);
  useImperativeHandle(ref, () => modal, [modal]);

  if (canUseDOM && !prevShow && show) {
    lastFocusRef.current = activeElement();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  const handleShow = useEventCallback(() => {
    modal.add();
    removeKeydownListenerRef.current = listen(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = listen(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    () => setTimeout(handleEnforceFocus), true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      const currentActiveElement = activeElement(document);

      if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = useEventCallback(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();

    if (restoreFocus) {
      var _lastFocusRef$current;

      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  useEffect(() => {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  useEffect(() => {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(() => {
    handleHide();
  }); // --------------------------------

  const handleEnforceFocus = useEventCallback(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    const currentActiveElement = activeElement();

    if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = useEventCallback(e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = useEventCallback(e => {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = useRef();
  const removeKeydownListenerRef = useRef();

  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };

  const Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/jsx("div", Object.assign({}, dialogProps, {
    children: /*#__PURE__*/React.cloneElement(children, {
      role: 'document'
    })
  }));

  if (Transition) {
    dialog = /*#__PURE__*/jsx(Transition, {
      appear: true,
      unmountOnExit: true,
      in: !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      children: dialog
    });
  }

  let backdropElement = null;

  if (backdrop) {
    const BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/jsx(BackdropTransition, {
        appear: true,
        in: !!show,
        children: backdropElement
      });
    }
  }

  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/jsxs(Fragment, {
      children: [backdropElement, dialog]
    }), container)
  });
});
Modal$2.displayName = 'Modal';
var BaseModal = Object.assign(Modal$2, {
  Manager: ModalManager$1
});

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

const Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

class BootstrapModalManager extends ModalManager$1 {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop]; // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
    // @ts-ignore

    element.dataset[prop] = actual;
    style(element, {
      [prop]: `${parseFloat(style(element, prop)) + adjust}px`
    });
  }

  restore(prop, element) {
    const value = element.dataset[prop];

    if (value !== undefined) {
      delete element.dataset[prop];
      style(element, {
        [prop]: value
      });
    }
  }

  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    addClass(container, 'modal-open');
    if (!containerState.scrollBarWidth) return;
    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
    qsa(container, Selector.FIXED_CONTENT).forEach(el => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    qsa(container, Selector.STICKY_CONTENT).forEach(el => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach(el => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }

  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    removeClass(container, 'modal-open');
    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
    qsa(container, Selector.FIXED_CONTENT).forEach(el => this.restore(paddingProp, el));
    qsa(container, Selector.STICKY_CONTENT).forEach(el => this.restore(marginProp, el));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach(el => this.restore(marginProp, el));
  }

}

let sharedManager;
function getSharedManager(options) {
  if (!sharedManager) sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}

var ModalBody = createWithBsPrefix('modal-body');

const ModalContext = /*#__PURE__*/React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {}

});
var ModalContext$1 = ModalContext;

const ModalDialog = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  contentClassName,
  centered,
  size,
  fullscreen,
  children,
  scrollable,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal');
  const dialogClass = `${bsPrefix}-dialog`;
  const fullScreenClass = typeof fullscreen === 'string' ? `${bsPrefix}-fullscreen-${fullscreen}` : `${bsPrefix}-fullscreen`;
  return /*#__PURE__*/jsx("div", { ...props,
    ref: ref,
    className: classNames(dialogClass, className, size && `${bsPrefix}-${size}`, centered && `${dialogClass}-centered`, scrollable && `${dialogClass}-scrollable`, fullscreen && fullScreenClass),
    children: /*#__PURE__*/jsx("div", {
      className: classNames(`${bsPrefix}-content`, contentClassName),
      children: children
    })
  });
});
ModalDialog.displayName = 'ModalDialog';
var ModalDialog$1 = ModalDialog;

var ModalFooter = createWithBsPrefix('modal-footer');

const defaultProps$5 = {
  closeLabel: 'Close',
  closeButton: false
};
const AbstractModalHeader = /*#__PURE__*/React.forwardRef(({
  closeLabel,
  closeVariant,
  closeButton,
  onHide,
  children,
  ...props
}, ref) => {
  const context = useContext(ModalContext$1);
  const handleClick = useEventCallback(() => {
    context == null ? void 0 : context.onHide();
    onHide == null ? void 0 : onHide();
  });
  return /*#__PURE__*/jsxs("div", {
    ref: ref,
    ...props,
    children: [children, closeButton && /*#__PURE__*/jsx(CloseButton$1, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
AbstractModalHeader.defaultProps = defaultProps$5;
var AbstractModalHeader$1 = AbstractModalHeader;

const defaultProps$4 = {
  closeLabel: 'Close',
  closeButton: false
};
const ModalHeader = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal-header');
  return /*#__PURE__*/jsx(AbstractModalHeader$1, {
    ref: ref,
    ...props,
    className: classNames(className, bsPrefix)
  });
});
ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = defaultProps$4;
var ModalHeader$1 = ModalHeader;

const DivStyledAsH4 = divWithClassName('h4');
var ModalTitle = createWithBsPrefix('modal-title', {
  Component: DivStyledAsH4
});

const defaultProps$3 = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: ModalDialog$1
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return /*#__PURE__*/jsx(Fade$1, { ...props,
    timeout: null
  });
}

function BackdropTransition(props) {
  return /*#__PURE__*/jsx(Fade$1, { ...props,
    timeout: null
  });
}
/* eslint-enable no-use-before-define */


const Modal = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  style,
  dialogClassName,
  contentClassName,
  children,
  dialogAs: Dialog,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
  'aria-label': ariaLabel,

  /* BaseModal props */
  show,
  animation,
  backdrop,
  keyboard,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus,
  enforceFocus,
  restoreFocus,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const [modalStyle, setStyle] = useState({});
  const [animateStaticModal, setAnimateStaticModal] = useState(false);
  const waitingForMouseUpRef = useRef(false);
  const ignoreBackdropClickRef = useRef(false);
  const removeStaticModalAnimationRef = useRef(null);
  const [modal, setModalRef] = useCallbackRef();
  const mergedRef = useMergedRefs(ref, setModalRef);
  const handleHide = useEventCallback(onHide);
  const isRTL = useIsRTL();
  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal');
  const modalContext = useMemo(() => ({
    onHide: handleHide
  }), [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;
    return getSharedManager({
      isRTL
    });
  }

  function updateDialogStyle(node) {
    if (!canUseDOM) return;
    const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0;
    const modalIsOverflowing = node.scrollHeight > ownerDocument(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? scrollbarSize() : undefined,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? scrollbarSize() : undefined
    });
  }

  const handleWindowResize = useEventCallback(() => {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  useWillUnmount(() => {
    removeEventListener(window, 'resize', handleWindowResize);
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
  }); // We prevent the modal from closing during a drag by detecting where the
  // the click originates from. If it starts in the modal and then ends outside
  // don't close.

  const handleDialogMouseDown = () => {
    waitingForMouseUpRef.current = true;
  };

  const handleMouseUp = e => {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }

    waitingForMouseUpRef.current = false;
  };

  const handleStaticModalAnimation = () => {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = transitionEnd(modal.dialog, () => {
      setAnimateStaticModal(false);
    });
  };

  const handleStaticBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    handleStaticModalAnimation();
  };

  const handleClick = e => {
    if (backdrop === 'static') {
      handleStaticBackdropClick(e);
      return;
    }

    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }

    onHide == null ? void 0 : onHide();
  };

  const handleEscapeKeyDown = e => {
    if (!keyboard && backdrop === 'static') {
      // Call preventDefault to stop modal from closing in restart ui,
      // then play our animation.
      e.preventDefault();
      handleStaticModalAnimation();
    } else if (keyboard && onEscapeKeyDown) {
      onEscapeKeyDown(e);
    }
  };

  const handleEnter = (node, isAppearing) => {
    if (node) {
      updateDialogStyle(node);
    }

    onEnter == null ? void 0 : onEnter(node, isAppearing);
  };

  const handleExit = node => {
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
    onExit == null ? void 0 : onExit(node);
  };

  const handleEntering = (node, isAppearing) => {
    onEntering == null ? void 0 : onEntering(node, isAppearing); // FIXME: This should work even when animation is disabled.

    addEventListener(window, 'resize', handleWindowResize);
  };

  const handleExited = node => {
    if (node) node.style.display = ''; // RHL removes it sometimes

    onExited == null ? void 0 : onExited(node); // FIXME: This should work even when animation is disabled.

    removeEventListener(window, 'resize', handleWindowResize);
  };

  const renderBackdrop = useCallback(backdropProps => /*#__PURE__*/jsx("div", { ...backdropProps,
    className: classNames(`${bsPrefix}-backdrop`, backdropClassName, !animation && 'show')
  }), [animation, backdropClassName, bsPrefix]);
  const baseModalStyle = { ...style,
    ...modalStyle
  }; // If `display` is not set to block, autoFocus inside the modal fails
  // https://github.com/react-bootstrap/react-bootstrap/issues/5102

  baseModalStyle.display = 'block';

  const renderDialog = dialogProps => /*#__PURE__*/jsx("div", {
    role: "dialog",
    ...dialogProps,
    style: baseModalStyle,
    className: classNames(className, bsPrefix, animateStaticModal && `${bsPrefix}-static`),
    onClick: backdrop ? handleClick : undefined,
    onMouseUp: handleMouseUp,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby,
    children: /*#__PURE__*/jsx(Dialog, { ...props,
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName: contentClassName,
      children: children
    })
  });

  return /*#__PURE__*/jsx(ModalContext$1.Provider, {
    value: modalContext,
    children: /*#__PURE__*/jsx(BaseModal, {
      show: show,
      ref: mergedRef,
      backdrop: backdrop,
      container: container,
      keyboard: true // Always set true - see handleEscapeKeyDown
      ,
      autoFocus: autoFocus,
      enforceFocus: enforceFocus,
      restoreFocus: restoreFocus,
      restoreFocusOptions: restoreFocusOptions,
      onEscapeKeyDown: handleEscapeKeyDown,
      onShow: onShow,
      onHide: onHide,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: onEntered,
      onExit: handleExit,
      onExiting: onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: animation ? DialogTransition : undefined,
      backdropTransition: animation ? BackdropTransition : undefined,
      renderBackdrop: renderBackdrop,
      renderDialog: renderDialog
    })
  });
});
Modal.displayName = 'Modal';
Modal.defaultProps = defaultProps$3;
var Modal$1 = Object.assign(Modal, {
  Body: ModalBody,
  Header: ModalHeader$1,
  Title: ModalTitle,
  Footer: ModalFooter,
  Dialog: ModalDialog$1,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
});

var all = {exports: {}};

var createChainableTypeChecker = {exports: {}};

(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];
}(createChainableTypeChecker, createChainableTypeChecker.exports));

(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _createChainableTypeChecker = createChainableTypeChecker.exports;

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];
}(all, all.exports));

var NavItem = createWithBsPrefix('nav-item');

const defaultProps$2 = {
  disabled: false
};
const NavLink = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  as: Component = Anchor,
  active,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'nav-link');
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  return /*#__PURE__*/jsx(Component, { ...props,
    ...navItemProps,
    ref: ref,
    className: classNames(className, bsPrefix, props.disabled && 'disabled', meta.isActive && 'active')
  });
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps$2;
var NavLink$1 = NavLink;

const defaultProps$1 = {
  justify: false,
  fill: false
};
const Nav = /*#__PURE__*/React.forwardRef((uncontrolledProps, ref) => {
  const {
    as = 'div',
    bsPrefix: initialBsPrefix,
    variant,
    fill,
    justify,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeKey: 'onSelect'
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'nav');
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = useContext(NavbarContext);
  const cardHeaderContext = useContext(CardHeaderContext);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }

  return /*#__PURE__*/jsx(BaseNav, {
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classNames(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps$1;
var Nav$1 = Object.assign(Nav, {
  Item: NavItem,
  Link: NavLink$1
});

/* eslint-disable react/no-multi-comp */
const defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
const PageItem = /*#__PURE__*/React.forwardRef(({
  active,
  disabled,
  className,
  style,
  activeLabel,
  children,
  ...props
}, ref) => {
  const Component = active || disabled ? 'span' : Anchor;
  return /*#__PURE__*/jsx("li", {
    ref: ref,
    style: style,
    className: classNames(className, 'page-item', {
      active,
      disabled
    }),
    children: /*#__PURE__*/jsxs(Component, {
      className: "page-link",
      disabled: disabled,
      ...props,
      children: [children, active && activeLabel && /*#__PURE__*/jsx("span", {
        className: "visually-hidden",
        children: activeLabel
      })]
    })
  });
});
PageItem.defaultProps = defaultProps;
PageItem.displayName = 'PageItem';
var PageItem$1 = PageItem;

function createButton(name, defaultValue, label = name) {
  function Button({
    children,
    ...props
  }) {
    return /*#__PURE__*/jsxs(PageItem, { ...props,
      children: [/*#__PURE__*/jsx("span", {
        "aria-hidden": "true",
        children: children || defaultValue
      }), /*#__PURE__*/jsx("span", {
        className: "visually-hidden",
        children: label
      })]
    });
  }

  Button.displayName = name;
  return Button;
}

const First = createButton('First', '«');
const Prev = createButton('Prev', '‹', 'Previous');
const Ellipsis = createButton('Ellipsis', '…', 'More');
const Next = createButton('Next', '›');
const Last = createButton('Last', '»');

/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */
const Pagination = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  size,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'pagination');
  return /*#__PURE__*/jsx("ul", {
    ref: ref,
    ...props,
    className: classNames(className, decoratedBsPrefix, size && `${decoratedBsPrefix}-${size}`)
  });
});
Pagination.displayName = 'Pagination';
var Pagination$1 = Object.assign(Pagination, {
  First,
  Prev,
  Ellipsis,
  Item: PageItem$1,
  Next,
  Last
});

const Row = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'row');
  const breakpoints = useBootstrapBreakpoints();
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;

    if (propValue != null && typeof propValue === 'object') {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classNames(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = 'Row';
var Row$1 = Row;

function NoopTransition({
  children,
  in: inProp,
  mountOnEnter,
  unmountOnExit
}) {
  const hasEnteredRef = useRef(inProp);
  useEffect(() => {
    if (inProp) hasEnteredRef.current = true;
  }, [inProp]);
  if (inProp) return children; // not in
  //
  // if (!mountOnEnter && !unmountOnExit) {
  //   return children;
  // }

  if (unmountOnExit) {
    return null;
  }

  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }

  return children;
}

const _excluded$3 = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"],
      _excluded2 = ["activeKey", "getControlledId", "getControllerId"],
      _excluded3 = ["as"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit,
    role = 'tabpanel',
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  const context = useContext(TabContext);
  if (!context) return [Object.assign({}, props, {
    role
  }), {
    eventKey,
    isActive: active,
    mountOnEnter,
    transition,
    unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];

  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context,
        rest = _objectWithoutPropertiesLoose(context, _excluded2);

  const key = makeEventKey(eventKey);
  return [Object.assign({}, props, {
    role,
    id: getControlledId(eventKey),
    'aria-labelledby': getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? makeEventKey(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];
}
const TabPanel = /*#__PURE__*/React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(_ref2, ref) => {
  let {
    as: Component = 'div'
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded3);

  const [tabPanelProps, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = NoopTransition
  }] = useTabPanel(props); // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/jsx(TabContext.Provider, {
    value: null,
    children: /*#__PURE__*/jsx(SelectableContext.Provider, {
      value: null,
      children: /*#__PURE__*/jsx(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/jsx(Component, Object.assign({}, tabPanelProps, {
          ref: ref,
          hidden: !isActive,
          "aria-hidden": !isActive
        }))
      })
    })
  });
});
TabPanel.displayName = 'TabPanel';

const Tabs = props => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = useUncontrolledProp(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = $9d939cbc98267846$export$619500959fc48b26(userId);
  const generateChildId = useMemo(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = useMemo(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: key => generateChildId(key, 'tabpane'),
    getControllerId: key => generateChildId(key, 'tab')
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/jsx(TabContext.Provider, {
    value: tabContext,
    children: /*#__PURE__*/jsx(SelectableContext.Provider, {
      value: onSelect || null,
      children: children
    })
  });
};

Tabs.Panel = TabPanel;

function getTabTransitionComponent(transition) {
  if (typeof transition === 'boolean') {
    return transition ? Fade$1 : undefined;
  }

  return transition;
}

const TabContainer = ({
  transition,
  ...props
}) => /*#__PURE__*/jsx(Tabs, { ...props,
  transition: getTabTransitionComponent(transition)
});

TabContainer.displayName = 'TabContainer';
var TabContainer$1 = TabContainer;

var TabContent = createWithBsPrefix('tab-content');

const TabPane = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = Fade$1
  }] = useTabPanel({ ...props,
    transition: getTabTransitionComponent(transition)
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'tab-pane'); // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/jsx(TabContext.Provider, {
    value: null,
    children: /*#__PURE__*/jsx(SelectableContext.Provider, {
      value: null,
      children: /*#__PURE__*/jsx(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/jsx(Component, { ...rest,
          ref: ref,
          className: classNames(className, prefix, isActive && 'active')
        })
      })
    })
  });
});
TabPane.displayName = 'TabPane';
var TabPane$1 = TabPane;

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Content for the tab title.
   */
  title: PropTypes.node.isRequired,

  /**
   * The disabled state of the tab.
   */
  disabled: PropTypes.bool,

  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: PropTypes.string,

  /**
   * Object containing attributes to pass to underlying nav link.
   */
  tabAttrs: PropTypes.object
};

const Tab = () => {
  throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly'); // Needed otherwise docs error out.
};

Tab.propTypes = propTypes;
var Tab$1 = Object.assign(Tab, {
  Container: TabContainer$1,
  Content: TabContent,
  Pane: TabPane$1
});

var _excluded$2 = ["name", "type", "label", "lblWidth", "placeholder", "value", "validators"];
var AfwFormInput = function AfwFormInput(props) {
  var name = props.name,
      type = props.type,
      label = props.label,
      lblWidth = props.lblWidth,
      placeholder = props.placeholder;
      props.value;
      var validators = props.validators,
      rest = _objectWithoutProperties(props, _excluded$2);

  var lblSize = lblWidth ? lblWidth - 0 : -1;
  var fldSize = lblWidth ? 12 - lblWidth : 12;

  var processValidation = function processValidation(validators) {
    return function (val) {
      // return validators && validators.reduce((err: any, validator: any) => err || validator(val), undefined);
      return validators && validators.reduce(function (errMsgs, validator) {
        var errMsg = validator(val);
        return errMsg ? errMsgs ? errMsgs + ", " + errMsg : errMsg : errMsgs;
      }, undefined);
    };
  };

  return /*#__PURE__*/React__default.createElement(Field, {
    name: name,
    validate: processValidation(validators)
  }, function (_ref) {
    var input = _ref.input,
        meta = _ref.meta;
    input = _objectSpread2(_objectSpread2({}, input), {}, {
      onChange: props.onChange ? props.onChange : input.onChange,
      onFocus: props.onFocus ? props.onFocus : input.onFocus,
      onBlur: props.onBlur ? props.onBlur : input.onBlur
    });
    return /*#__PURE__*/React__default.createElement("div", null, console.log('>>', input, meta), /*#__PURE__*/React__default.createElement(Form$1.Group, {
      as: Row$1,
      className: "afw-form-input",
      controlId: "formGroupEmail"
    }, /*#__PURE__*/React__default.createElement(Form$1.Label, {
      column: true,
      sm: lblSize
    }, label), /*#__PURE__*/React__default.createElement(Col$1, {
      sm: fldSize
    }, /*#__PURE__*/React__default.createElement(InputGroup$1, {
      hasValidation: true
    }, /*#__PURE__*/React__default.createElement(Form$1.Control, _extends$1({}, rest, {
      name: input.name,
      type: type,
      placeholder: placeholder,
      value: input.value,
      onChange: input.onChange,
      onBlur: input.onBlur,
      onFocus: input.onFocus,
      className: "p-2",
      style: {
        borderColor: meta.touched && meta.error ? 'red' : ''
      }
    })), /*#__PURE__*/React__default.createElement(FormControl$1.Feedback, {
      className: "errSpace",
      type: meta.touched && meta.error ? 'invalid' : 'valid'
    }, meta.touched ? /*#__PURE__*/React__default.createElement("span", null, meta.error || /*#__PURE__*/React__default.createElement("div", null, "\xA0")) : /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement("div", null, "\xA0")))))));
  });
};

var _excluded$1 = ["name", "type", "label", "lblWidth", "placeholder", "options", "value", "validators"];
var AfwFormSelect = function AfwFormSelect(props) {
  var name = props.name;
      props.type;
      var label = props.label,
      lblWidth = props.lblWidth,
      placeholder = props.placeholder,
      options = props.options,
      value = props.value,
      validators = props.validators,
      rest = _objectWithoutProperties(props, _excluded$1);

  var lblSize = lblWidth ? lblWidth - 0 : -1;
  var fldSize = lblWidth ? 12 - lblWidth : 12;

  var processValidation = function processValidation(validators) {
    return function (val) {
      // return validators && validators.reduce((err: any, validator: any) => err || validator(val), undefined);
      return validators && validators.reduce(function (errMsgs, validator) {
        var errMsg = validator(val);
        return errMsg ? errMsgs ? errMsgs + ", " + errMsg : errMsg : errMsgs;
      }, undefined);
    };
  };

  return /*#__PURE__*/React__default.createElement(Field, {
    name: name,
    initialValue: value,
    validate: processValidation(validators)
  }, function (_ref) {
    var input = _ref.input,
        meta = _ref.meta;
    input = _objectSpread2(_objectSpread2({}, input), {}, {
      onChange: props.onChange ? props.onChange : input.onChange,
      onFocus: props.onFocus ? props.onFocus : input.onFocus,
      onBlur: props.onBlur ? props.onBlur : input.onBlur
    });
    return /*#__PURE__*/React__default.createElement("div", null, console.log(input, meta), /*#__PURE__*/React__default.createElement(Form$1.Group, {
      as: Row$1,
      className: "afw-form-select",
      controlId: "formGroupSelect"
    }, /*#__PURE__*/React__default.createElement(Form$1.Label, {
      column: true,
      sm: lblSize
    }, label), /*#__PURE__*/React__default.createElement(Col$1, {
      sm: fldSize
    }, /*#__PURE__*/React__default.createElement(InputGroup$1, {
      hasValidation: true
    }, /*#__PURE__*/React__default.createElement(Form$1.Select, _extends$1({}, rest, {
      name: input.name,
      placeholder: placeholder,
      value: input.value,
      onChange: input.onChange,
      onBlur: input.onBlur,
      onFocus: input.onFocus,
      className: "p-2",
      style: {
        borderColor: meta.touched && meta.error ? 'red' : ''
      }
    }), options.map(function (lvb) {
      return /*#__PURE__*/React__default.createElement("option", {
        key: lvb.value,
        value: lvb.value
      }, lvb.label);
    })), /*#__PURE__*/React__default.createElement(FormControl$1.Feedback, {
      className: "errSpace",
      type: meta.touched && meta.error ? 'invalid' : 'valid'
    }, meta.touched ? /*#__PURE__*/React__default.createElement("span", null, meta.error || /*#__PURE__*/React__default.createElement("div", null, "\xA0")) : /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement("div", null, "\xA0")))))));
  });
};

var _excluded = ["name", "label", "lblWidth", "placeholder", "value", "validators"];
var AfwFormCurrency = function AfwFormCurrency(props) {
  var name = props.name,
      label = props.label,
      lblWidth = props.lblWidth,
      placeholder = props.placeholder;
      props.value;
      var validators = props.validators,
      rest = _objectWithoutProperties(props, _excluded);

  var lblSize = lblWidth ? lblWidth - 0 : -1;
  var fldSize = lblWidth ? 12 - lblWidth : 12;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasFocus = _useState2[0],
      setHasFocus = _useState2[1];

  var processValidation = function processValidation(validators) {
    return function (val) {
      return validators && validators.reduce(function (errMsgs, validator) {
        var errMsg = validator(val);
        return errMsg ? errMsgs ? errMsgs + ", " + errMsg : errMsg : errMsgs;
      }, undefined);
    };
  };

  return /*#__PURE__*/React__default.createElement(Field, {
    name: name,
    validate: processValidation(validators)
  }, function (_ref) {
    var input = _ref.input,
        meta = _ref.meta;

    var doFocus = function doFocus(event) {
      event.target.value = input.value;
      setTimeout(function () {
        return event.target.select();
      }, 0);
      setHasFocus(true);
      input.onFocus(event);
    };

    var doKeyPress = function doKeyPress(event) {
      var posAt = event.target.selectionStart;
      var newValue = input.value.slice(0, posAt) + event.key + input.value.slice(posAt);
      var regex = new RegExp("^\\d+(\\" + props.sep + "(\\d{0," + props.pre + "})?)?$");

      if (!isTextSelected(event.target) && !regex.test(newValue)) {
        event.preventDefault();
      }
    };

    var doBlur = function doBlur(event) {
      setHasFocus(false);
      input.onBlur(event);
    };

    function isTextSelected(target) {
      return target.value.length > 0 && target.selectionStart == 0 && target.selectionEnd == target.value.length;
    }

    var formatCurrency = function formatCurrency(value) {
      var parts = value.split(props.sep);
      var wholeNbr = '';
      parts[0] = parts[0].length > 0 ? parseInt(parts[0], 10) + '' : '';
      parts[0].split("").reverse().forEach(function (nbr, ndx) {
        wholeNbr = ndx > 0 && ndx % 3 === 0 ? nbr + props.grp + wholeNbr : nbr + wholeNbr;
      });
      var fracNbr = '';

      if (wholeNbr.length > 0) {
        var decParts = parts.length > 1 ? parts[1] : '00';

        for (var i = 0; i < props.pre; i++) {
          fracNbr += i + 1 > decParts.split("").length ? 0 : decParts.split("")[i];
        }

        input.onChange(parts[0] + props.sep + fracNbr);
        return wholeNbr + props.sep + fracNbr;
      }

      return '';
    };

    return /*#__PURE__*/React__default.createElement("div", null, console.log(input, meta), /*#__PURE__*/React__default.createElement(Form$1.Group, {
      as: Row$1,
      className: "afw-form-input",
      controlId: "formGroupEmail"
    }, /*#__PURE__*/React__default.createElement(Form$1.Label, {
      column: true,
      sm: lblSize
    }, label), /*#__PURE__*/React__default.createElement(Col$1, {
      sm: fldSize
    }, /*#__PURE__*/React__default.createElement(InputGroup$1, {
      hasValidation: true
    }, /*#__PURE__*/React__default.createElement(InputGroup$1.Text, null, props.sym), /*#__PURE__*/React__default.createElement(Form$1.Control, _extends$1({}, rest, {
      name: input.name,
      type: "text",
      placeholder: placeholder,
      value: hasFocus ? input.value : formatCurrency(input.value),
      onChange: input.onChange,
      onKeyPress: doKeyPress,
      onFocus: doFocus,
      onBlur: doBlur,
      className: "p-2",
      style: {
        borderColor: meta.touched && meta.error ? 'red' : ''
      }
    })), /*#__PURE__*/React__default.createElement(FormControl$1.Feedback, {
      className: "errSpace",
      type: meta.touched && meta.error ? 'invalid' : 'valid'
    }, meta.touched ? /*#__PURE__*/React__default.createElement("span", null, meta.error || /*#__PURE__*/React__default.createElement("div", null, "\xA0")) : /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement("div", null, "\xA0")))))));
  });
};
AfwFormCurrency.defaultProps = {
  sym: "$",
  grp: ",",
  sep: ".",
  pre: 2
};

var required = function required(errMsg) {
  return function (value) {
    return value ? undefined : errMsg || 'Is required';
  };
};
var minLen = function minLen(_minLen, errMsg) {
  return function (value) {
    if (!value) return undefined;
    return (value || '').length >= _minLen ? undefined : errMsg || "Must be longer than ".concat(_minLen);
  };
};
var regEx = function regEx(pattern, errMsg) {
  return function (value) {
    if (!value) return undefined;
    var regExpression = new RegExp(pattern);
    return regExpression.test(value) ? undefined : errMsg || "Invalid format";
  };
};
var isEmail = function isEmail(errMsg) {
  return function (value) {
    if (!value) return undefined; //  RFC 5322 complient

    var regExpression = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
    return regExpression.test(value) ? undefined : errMsg || "Invalid format";
  };
};

var AfwPager = function AfwPager(props) {
  var pageable = props.pageable,
      criteria = props.criteria,
      total = props.total,
      doSubmit = props.doSubmit;

  var _useState = useState([{
    active: true
  }, {
    active: false
  }, {
    active: false
  }, {
    active: false
  }, {
    active: false
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      blockState = _useState2[0],
      setBlockState = _useState2[1];

  var firstPg = 1;

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      curPos = _useState4[0],
      setCurPos = _useState4[1];

  var _useState5 = useState(1),
      _useState6 = _slicedToArray(_useState5, 2),
      blkStart = _useState6[0],
      setBlkStart = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      lastPg = _useState8[0],
      setLastPg = _useState8[1];

  useEffect(function () {
    setLastPg(Math.ceil(total / pageable.pageSz));
  }, [total, pageable.pageSz]);

  var pageBlock = function pageBlock(blockState) {
    return blockState.map(function (block, ndx) {
      return /*#__PURE__*/React__default.createElement(Pagination$1.Item, {
        key: ndx,
        active: block.active,
        disabled: blkStart + ndx > lastPg ? true : false,
        onClick: function onClick() {
          return setCurPos(ndx);
        }
      }, blkStart + ndx);
    });
  };

  var firstClicked = function firstClicked() {
    setBlkStart(1);
    setCurPos(0);
  };

  var prevClicked = function prevClicked() {
    if (curPos == 0) {
      leftEllipseClicked();
    } else {
      setCurPos(curPos - 1);
    }
  };

  var leftEllipseClicked = function leftEllipseClicked() {
    setCurPos(4);
    setBlkStart(blkStart - 5);
  };

  var rightEllipseClicked = function rightEllipseClicked() {
    setCurPos(0);
    setBlkStart(blkStart + 5);
  };

  var nextClicked = function nextClicked() {
    if ((curPos + 1) % 5 == 0) {
      rightEllipseClicked();
    } else {
      setCurPos(curPos + 1);
    }
  };

  var lastClicked = function lastClicked() {
    setCurPos(lastPg % 5 - 1);
    setBlkStart(Math.floor(lastPg / 5) * 5 + 1);
  }; // technique to avoid executing a useEffect hook upon load


  var initPager = useRef(true);
  useEffect(function () {
    if (initPager.current) {
      initPager.current = false;
      return;
    }

    var blockClicked = function blockClicked(blockNdx) {
      setBlockState(function (blockState) {
        return blockState.map(function (block, ndx) {
          block.active = ndx == blockNdx ? true : false;
          return block;
        });
      });
    };

    blockClicked(curPos);
    doSubmit(_objectSpread2(_objectSpread2({}, pageable), {}, {
      page: blkStart + curPos
    }), criteria); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageable, blkStart, curPos, criteria]);
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: '100%'
    }
  }, total > 0 && /*#__PURE__*/React__default.createElement(Pagination$1, {
    style: {
      "float": 'right'
    }
  }, /*#__PURE__*/React__default.createElement(Pagination$1.Item, {
    onClick: function onClick() {
      return firstClicked();
    }
  }, firstPg), /*#__PURE__*/React__default.createElement(Pagination$1.Prev, {
    disabled: blkStart + curPos == 1,
    onClick: function onClick() {
      return prevClicked();
    }
  }), /*#__PURE__*/React__default.createElement(Pagination$1.Ellipsis, {
    disabled: blkStart == 1,
    onClick: function onClick() {
      return leftEllipseClicked();
    }
  }), pageBlock(blockState), /*#__PURE__*/React__default.createElement(Pagination$1.Ellipsis, {
    disabled: blkStart + 5 > lastPg,
    onClick: function onClick() {
      return rightEllipseClicked();
    }
  }), /*#__PURE__*/React__default.createElement(Pagination$1.Next, {
    disabled: blkStart + curPos == lastPg,
    onClick: function onClick() {
      return nextClicked();
    }
  }), /*#__PURE__*/React__default.createElement(Pagination$1.Item, {
    onClick: function onClick() {
      return lastClicked();
    }
  }, lastPg)));
};

var AfwModal = function AfwModal(props) {
  var show = props.show,
      status = props.status,
      doHide = props.doHide,
      children = props.children,
      closeModal = props.closeModal,
      dialogClassName = props.dialogClassName; // useSelector allows you to extract data from the Redux store state, using a selector function.
  // const status = useSelector(selectStatus);
  // useDispatch returns a reference to the dispatch function from the Redux store
  // const dispatch = useDispatch();

  var headerClassName = status === 'danger' ? 'bg-danger' : 'bg-success';
  var iconClassName = status === 'danger' ? 'bi bi-exclamation-triangle' : 'bi bi-info-circle';
  return /*#__PURE__*/React__default.createElement(Modal$1, {
    show: show,
    size: 'lg',
    dialogClassName: dialogClassName,
    centered: true
  }, closeModal && /*#__PURE__*/React__default.createElement(Modal$1.Header, {
    className: headerClassName,
    onHide: doHide,
    closeButton: true
  }, /*#__PURE__*/React__default.createElement("i", {
    className: iconClassName
  }), "\xA0", /*#__PURE__*/React__default.createElement("h4", null, status === 'danger' ? 'Error' : 'Info')), /*#__PURE__*/React__default.createElement(Modal$1.Body, null, children));
};

var AfwMessage = function AfwMessage(props) {
  var msg = props.msg,
      showModal = props.showModal;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, showModal && msg.details.length == 0 && /*#__PURE__*/React__default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "box center-placed"
  }, /*#__PURE__*/React__default.createElement("div", null, msg.content))), showModal && msg.details.length > 0 && /*#__PURE__*/React__default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "list-title"
  }, msg.content), /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex justify-content-center list-body "
  }, /*#__PURE__*/React__default.createElement("ul", null, msg.details.map(function (d) {
    return /*#__PURE__*/React__default.createElement("li", {
      key: d
    }, d);
  })))));
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default.createContext && React__default.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React__default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React__default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return React__default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React__default.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React__default.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function BsX (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}}]})(props);
}

var AfwTabstrip = function AfwTabstrip(props) {
  var panes = props.panes,
      defaultActiveKey = props.defaultActiveKey,
      activeKey = props.activeKey,
      onSelect = props.onSelect,
      onDeleteTab = props.onDeleteTab;
  panes && panes[0] && panes[0].key || '0';
  return /*#__PURE__*/React__default.createElement(Tab$1.Container, {
    defaultActiveKey: defaultActiveKey,
    activeKey: activeKey,
    onSelect: onSelect
  }, /*#__PURE__*/React__default.createElement(Nav$1, null, panes && panes.length && panes.map(function (pane, index) {
    return /*#__PURE__*/React__default.createElement(Nav$1.Item, {
      key: "tab-nav-item-".concat(pane.key || index)
    }, /*#__PURE__*/React__default.createElement(Nav$1.Link, {
      eventKey: pane.key,
      disabled: pane.isDisabled
    }, /*#__PURE__*/React__default.createElement(React__default.Fragment, null, pane.icon ? pane.icon : pane.title, !!pane.isDeleteEnabled && /*#__PURE__*/React__default.createElement("span", {
      onClick: function onClick() {
        onDeleteTab && onDeleteTab(pane);
      }
    }, /*#__PURE__*/React__default.createElement(BsX, {
      style: {
        width: '1.5em',
        height: '1.5em',
        color: 'black'
      }
    })))));
  })), /*#__PURE__*/React__default.createElement(Tab$1.Content, null, panes && panes.length && panes.map(function (pane, index) {
    return /*#__PURE__*/React__default.createElement(Tab$1.Pane, {
      key: "tab-nav-item-".concat(pane.key || index),
      eventKey: pane.key
    }, pane.content);
  })));
};

export { AfwForm, AfwFormCurrency, AfwFormInput, AfwFormSelect, AfwMessage, AfwModal, AfwPager, AfwTabstrip, GlobalContext, isEmail, minLen, regEx, required };
