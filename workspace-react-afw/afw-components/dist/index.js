(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react/jsx-runtime'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react/jsx-runtime', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["afw-components"] = {}, global.React, global.jsxRuntime, global.ReactDOM));
})(this, (function (exports, React, jsxRuntime, ReactDOM) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var React__namespace = /*#__PURE__*/_interopNamespace(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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

  function _objectWithoutPropertiesLoose$4(source, excluded) {
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

    var target = _objectWithoutPropertiesLoose$4(source, excluded);

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

  var GlobalContext = /*#__PURE__*/React__default["default"].createContext({
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

  function _objectWithoutPropertiesLoose$3(source, excluded) {
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

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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
            var _final = _objectWithoutPropertiesLoose$3(current, [key].map(_toPropertyKey));

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
        rest = _objectWithoutPropertiesLoose$3(props, _excluded$3$1);

    if (component) {
      return /*#__PURE__*/React__namespace.createElement(component, Object.assign(lazyProps, rest, {
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

    var previous = React__default["default"].useRef(value);
    React__default["default"].useEffect(function () {
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
    var ref = React__default["default"].useRef();

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

  var ReactFinalFormContext = /*#__PURE__*/React__namespace.createContext();

  function useLatest(value) {
    var ref = React__default["default"].useRef(value);
    React__default["default"].useEffect(function () {
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
        rest = _objectWithoutPropertiesLoose$3(_ref, _excluded$2$1);

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

    var _React$useState = React__namespace.useState(function () {
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
    React__namespace.useEffect(function () {
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
    return /*#__PURE__*/React__namespace.createElement(ReactFinalFormContext.Provider, {
      value: form
    }, renderComponent(_extends({}, rest, {
      __versions: versions
    }), renderProps, "ReactFinalForm"));
  }

  function useForm(componentName) {
    var form = React__namespace.useContext(ReactFinalFormContext);

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
    var ref = React__namespace.useRef(callback);
    React__namespace.useEffect(function () {
      ref.current = callback;
    });
    return React__namespace.useCallback(function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return ref.current.apply(null, args);
    }, []);
  }

  var all = fieldSubscriptionItems.reduce(function (result, key) {
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
        subscription = _config$subscription === void 0 ? all : _config$subscription,
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

    var firstRender = React__namespace.useRef(true); // synchronously register and unregister to query field state for our subscription on first render

    var _React$useState = React__namespace.useState(function () {
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

    React__namespace.useEffect(function () {
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

  var _excluded$6 = ["afterSubmit", "allowNull", "beforeSubmit", "children", "component", "data", "defaultValue", "format", "formatOnBlur", "initialValue", "isEqual", "multiple", "name", "parse", "subscription", "type", "validate", "validateFields", "value"];
  var Field = /*#__PURE__*/React__namespace.forwardRef(function Field(_ref, ref) {
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
        rest = _objectWithoutPropertiesLoose$3(_ref, _excluded$6);

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
      return /*#__PURE__*/React__namespace.createElement(component, _extends({}, field.input, {
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

    return /*#__PURE__*/React__default["default"].createElement(ReactFinalForm, {
      onSubmit: doSubmit,
      validateOnBlur: true,
      initialValues: formData,
      render: function render(_ref2) {
        var handleSubmit = _ref2.handleSubmit;
        return /*#__PURE__*/React__default["default"].createElement("form", {
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
  const ThemeContext = /*#__PURE__*/React__namespace.createContext({
    prefixes: {},
    breakpoints: DEFAULT_BREAKPOINTS
  });

  function useBootstrapPrefix(prefix, defaultPrefix) {
    const {
      prefixes
    } = React.useContext(ThemeContext);
    return prefix || prefixes[defaultPrefix] || defaultPrefix;
  }
  function useBootstrapBreakpoints() {
    const {
      breakpoints
    } = React.useContext(ThemeContext);
    return breakpoints;
  }
  function useIsRTL() {
    const {
      dir
    } = React.useContext(ThemeContext);
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

  var propTypes$3 = {exports: {}};

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
    propTypes$3.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes$3.exports = factoryWithThrowingShims();
  }

  var PropTypes = propTypes$3.exports;

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

  var TransitionGroupContext = React__default["default"].createContext(null);

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

      var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default["default"].findDOMNode(this), appearing],
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
      var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default["default"].findDOMNode(this); // no exit animation skip right to EXITED

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
      var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default["default"].findDOMNode(this);
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
          var childProps = _objectWithoutPropertiesLoose$3(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

      return (
        /*#__PURE__*/
        // allows for nested Transitions
        React__default["default"].createElement(TransitionGroupContext.Provider, {
          value: null
        }, typeof children === 'function' ? children(status, childProps) : React__default["default"].cloneElement(React__default["default"].Children.only(children), childProps))
      );
    };

    return Transition;
  }(React__default["default"].Component);

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

  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
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
    return React.useMemo(function () {
      return mergeRefs(refA, refB);
    }, [refA, refB]);
  }

  function safeFindDOMNode(componentOrElement) {
    if (componentOrElement && 'setState' in componentOrElement) {
      return ReactDOM__default["default"].findDOMNode(componentOrElement);
    }

    return componentOrElement != null ? componentOrElement : null;
  }

  // Normalizes Transition callbacks when nodeRef is used.
  const TransitionWrapper = /*#__PURE__*/React__default["default"].forwardRef(({
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
    const nodeRef = React.useRef(null);
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


    const handleEnter = React.useCallback(normalize(onEnter), [onEnter]);
    const handleEntering = React.useCallback(normalize(onEntering), [onEntering]);
    const handleEntered = React.useCallback(normalize(onEntered), [onEntered]);
    const handleExit = React.useCallback(normalize(onExit), [onExit]);
    const handleExiting = React.useCallback(normalize(onExiting), [onExiting]);
    const handleExited = React.useCallback(normalize(onExited), [onExited]);
    const handleAddEndListener = React.useCallback(normalize(addEndListener), [addEndListener]);
    /* eslint-enable react-hooks/exhaustive-deps */

    return /*#__PURE__*/jsxRuntime.jsx(Transition, {
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
      }) : /*#__PURE__*/React__default["default"].cloneElement(children, {
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
    var ref = React.useRef(value);
    React.useEffect(function () {
      ref.current = value;
    }, [value]);
    return ref;
  }

  function useEventCallback(fn) {
    var ref = useCommittedRef(fn);
    return React.useCallback(function () {
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
    return React.useState(null);
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
    var mounted = React.useRef(true);
    var isMounted = React.useRef(function () {
      return mounted.current;
    });
    React.useEffect(function () {
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
    var ref = React.useRef(null);
    React.useEffect(function () {
      ref.current = value;
    });
    return ref.current;
  }

  const _excluded$5 = ["as", "disabled"];

  function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
  const Button = /*#__PURE__*/React__namespace.forwardRef((_ref, ref) => {
    let {
      as: asProp,
      disabled
    } = _ref,
        props = _objectWithoutPropertiesLoose$2(_ref, _excluded$5);

    const [buttonProps, {
      tagName: Component
    }] = useButtonProps(Object.assign({
      tagName: asProp,
      disabled
    }, props));
    return /*#__PURE__*/jsxRuntime.jsx(Component, Object.assign({}, props, buttonProps, {
      ref: ref
    }));
  });
  Button.displayName = 'Button';

  const _excluded$4 = ["onKeyDown"];

  function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  function isTrivialHref(href) {
    return !href || href.trim() === '#';
  }

  /**
   * An generic `<a>` component that covers a few A11y cases, ensuring that
   * cases where the `href` is missing or trivial like "#" are treated like buttons.
   */
  const Anchor = /*#__PURE__*/React__namespace.forwardRef((_ref, ref) => {
    let {
      onKeyDown
    } = _ref,
        props = _objectWithoutPropertiesLoose$1(_ref, _excluded$4);

    const [buttonProps] = useButtonProps(Object.assign({
      tagName: 'a'
    }, props));
    const handleKeyDown = useEventCallback(e => {
      buttonProps.onKeyDown(e);
      onKeyDown == null ? void 0 : onKeyDown(e);
    });

    if (isTrivialHref(props.href) && !props.role || props.role === 'button') {
      return /*#__PURE__*/jsxRuntime.jsx("a", Object.assign({
        ref: ref
      }, props, buttonProps, {
        onKeyDown: handleKeyDown
      }));
    }

    return /*#__PURE__*/jsxRuntime.jsx("a", Object.assign({
      ref: ref
    }, props, {
      onKeyDown: onKeyDown
    }));
  });
  Anchor.displayName = 'Anchor';

  const defaultProps$6 = {
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
  const Fade = /*#__PURE__*/React__namespace.forwardRef(({
    className,
    children,
    transitionClasses = {},
    ...props
  }, ref) => {
    const handleEnter = React.useCallback((node, isAppearing) => {
      triggerBrowserReflow(node);
      props.onEnter == null ? void 0 : props.onEnter(node, isAppearing);
    }, [props]);
    return /*#__PURE__*/jsxRuntime.jsx(TransitionWrapper$1, {
      ref: ref,
      addEndListener: transitionEndListener,
      ...props,
      onEnter: handleEnter,
      childRef: children.ref,
      children: (status, innerProps) => /*#__PURE__*/React__namespace.cloneElement(children, { ...innerProps,
        className: classNames('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
      })
    });
  });
  Fade.defaultProps = defaultProps$6;
  Fade.displayName = 'Fade';
  var Fade$1 = Fade;

  const propTypes$2 = {
    'aria-label': PropTypes.string,
    onClick: PropTypes.func,

    /**
     * Render different color variant for the button.
     *
     * Omitting this will render the default dark color.
     */
    variant: PropTypes.oneOf(['white'])
  };
  const defaultProps$5 = {
    'aria-label': 'Close'
  };
  const CloseButton = /*#__PURE__*/React__namespace.forwardRef(({
    className,
    variant,
    ...props
  }, ref) => /*#__PURE__*/jsxRuntime.jsx("button", {
    ref: ref,
    type: "button",
    className: classNames('btn-close', variant && `btn-close-${variant}`, className),
    ...props
  }));
  CloseButton.displayName = 'CloseButton';
  CloseButton.propTypes = propTypes$2;
  CloseButton.defaultProps = defaultProps$5;
  var CloseButton$1 = CloseButton;

  var divWithClassName = (className => /*#__PURE__*/React__namespace.forwardRef((p, ref) => /*#__PURE__*/jsxRuntime.jsx("div", { ...p,
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
    const BsComponent = /*#__PURE__*/React__namespace.forwardRef(({
      className,
      bsPrefix,
      as: Tag = Component || 'div',
      ...props
    }, ref) => {
      const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
      return /*#__PURE__*/jsxRuntime.jsx(Tag, {
        ref: ref,
        className: classNames(className, resolvedPrefix),
        ...props
      });
    });
    BsComponent.defaultProps = defaultProps;
    BsComponent.displayName = displayName;
    return BsComponent;
  }

  /**
   * Returns a ref that is immediately updated with the new value
   *
   * @param value The Ref value
   * @category refs
   */

  function useUpdatedRef(value) {
    var valueRef = React.useRef(value);
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
    React.useEffect(function () {
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
    return React__namespace.Children.toArray(children).some(child => /*#__PURE__*/React__namespace.isValidElement(child) && child.type === type);
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
  const Col = /*#__PURE__*/React__namespace.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (props, ref) => {
    const [{
      className,
      ...colProps
    }, {
      as: Component = 'div',
      bsPrefix,
      spans
    }] = useCol(props);
    return /*#__PURE__*/jsxRuntime.jsx(Component, { ...colProps,
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

  const ATTRIBUTE_PREFIX = `data-rr-ui-`;
  function dataAttr(property) {
    return `${ATTRIBUTE_PREFIX}${property}`;
  }

  const Context = /*#__PURE__*/React.createContext(canUseDOM ? window : undefined);
  Context.Provider;
  /**
   * The document "window" placed in React context. Helpful for determining
   * SSR context, or when rendering into an iframe.
   *
   * @returns the current window
   */

  function useWindow() {
    return React.useContext(Context);
  }

  const context = /*#__PURE__*/React__namespace.createContext(null);
  context.displayName = 'InputGroupContext';
  var InputGroupContext = context;

  const propTypes$1 = {
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
  const Feedback = /*#__PURE__*/React__namespace.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: Component = 'div',
    className,
    type = 'valid',
    tooltip = false,
    ...props
  }, ref) => /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
    ref: ref,
    className: classNames(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
  }));
  Feedback.displayName = 'Feedback';
  Feedback.propTypes = propTypes$1;
  var Feedback$1 = Feedback;

  const FormContext = /*#__PURE__*/React__namespace.createContext({});
  var FormContext$1 = FormContext;

  const FormCheckInput = /*#__PURE__*/React__namespace.forwardRef(({
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
    } = React.useContext(FormContext$1);
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-input');
    return /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
      ref: ref,
      type: type,
      id: id || controlId,
      className: classNames(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
    });
  });
  FormCheckInput.displayName = 'FormCheckInput';
  var FormCheckInput$1 = FormCheckInput;

  const FormCheckLabel = /*#__PURE__*/React__namespace.forwardRef(({
    bsPrefix,
    className,
    htmlFor,
    ...props
  }, ref) => {
    const {
      controlId
    } = React.useContext(FormContext$1);
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
    return /*#__PURE__*/jsxRuntime.jsx("label", { ...props,
      ref: ref,
      htmlFor: htmlFor || controlId,
      className: classNames(className, bsPrefix)
    });
  });
  FormCheckLabel.displayName = 'FormCheckLabel';
  var FormCheckLabel$1 = FormCheckLabel;

  const FormCheck = /*#__PURE__*/React__namespace.forwardRef(({
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
    } = React.useContext(FormContext$1);
    const innerFormContext = React.useMemo(() => ({
      controlId: id || controlId
    }), [controlId, id]);
    const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel$1);

    const input = /*#__PURE__*/jsxRuntime.jsx(FormCheckInput$1, { ...props,
      type: type === 'switch' ? 'checkbox' : type,
      ref: ref,
      isValid: isValid,
      isInvalid: isInvalid,
      disabled: disabled,
      as: as
    });

    return /*#__PURE__*/jsxRuntime.jsx(FormContext$1.Provider, {
      value: innerFormContext,
      children: /*#__PURE__*/jsxRuntime.jsx("div", {
        style: style,
        className: classNames(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, type === 'switch' && bsSwitchPrefix),
        children: children || /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [input, hasLabel && /*#__PURE__*/jsxRuntime.jsx(FormCheckLabel$1, {
            title: title,
            children: label
          }), feedback && /*#__PURE__*/jsxRuntime.jsx(Feedback$1, {
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

  const FormControl = /*#__PURE__*/React__namespace.forwardRef(({
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
    } = React.useContext(FormContext$1);
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
    return /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
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

  const FormGroup = /*#__PURE__*/React__namespace.forwardRef(({
    controlId,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    ...props
  }, ref) => {
    const context = React.useMemo(() => ({
      controlId
    }), [controlId]);
    return /*#__PURE__*/jsxRuntime.jsx(FormContext$1.Provider, {
      value: context,
      children: /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
        ref: ref
      })
    });
  });
  FormGroup.displayName = 'FormGroup';
  var FormGroup$1 = FormGroup;

  const defaultProps$4 = {
    column: false,
    visuallyHidden: false
  };
  const FormLabel = /*#__PURE__*/React__namespace.forwardRef(({
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
    } = React.useContext(FormContext$1);
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-label');
    let columnClass = 'col-form-label';
    if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
    const classes = classNames(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
    process.env.NODE_ENV !== "production" ? warning_1(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;
    htmlFor = htmlFor || controlId;
    if (column) return /*#__PURE__*/jsxRuntime.jsx(Col$1, {
      ref: ref,
      as: "label",
      className: classes,
      htmlFor: htmlFor,
      ...props
    });
    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
      jsxRuntime.jsx(Component, {
        ref: ref,
        className: classes,
        htmlFor: htmlFor,
        ...props
      })
    );
  });
  FormLabel.displayName = 'FormLabel';
  FormLabel.defaultProps = defaultProps$4;
  var FormLabel$1 = FormLabel;

  const FormRange = /*#__PURE__*/React__namespace.forwardRef(({
    bsPrefix,
    className,
    id,
    ...props
  }, ref) => {
    const {
      controlId
    } = React.useContext(FormContext$1);
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-range');
    return /*#__PURE__*/jsxRuntime.jsx("input", { ...props,
      type: "range",
      ref: ref,
      className: classNames(className, bsPrefix),
      id: id || controlId
    });
  });
  FormRange.displayName = 'FormRange';
  var FormRange$1 = FormRange;

  const FormSelect = /*#__PURE__*/React__namespace.forwardRef(({
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
    } = React.useContext(FormContext$1);
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
    return /*#__PURE__*/jsxRuntime.jsx("select", { ...props,
      size: htmlSize,
      ref: ref,
      className: classNames(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
      id: id || controlId
    });
  });
  FormSelect.displayName = 'FormSelect';
  var FormSelect$1 = FormSelect;

  const FormText = /*#__PURE__*/React__namespace.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix,
    className,
    as: Component = 'small',
    muted,
    ...props
  }, ref) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
    return /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
      ref: ref,
      className: classNames(className, bsPrefix, muted && 'text-muted')
    });
  });
  FormText.displayName = 'FormText';
  var FormText$1 = FormText;

  const Switch = /*#__PURE__*/React__namespace.forwardRef((props, ref) => /*#__PURE__*/jsxRuntime.jsx(FormCheck$1, { ...props,
    ref: ref,
    type: "switch"
  }));
  Switch.displayName = 'Switch';
  var Switch$1 = Object.assign(Switch, {
    Input: FormCheck$1.Input,
    Label: FormCheck$1.Label
  });

  const FloatingLabel = /*#__PURE__*/React__namespace.forwardRef(({
    bsPrefix,
    className,
    children,
    controlId,
    label,
    ...props
  }, ref) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
    return /*#__PURE__*/jsxRuntime.jsxs(FormGroup$1, {
      ref: ref,
      className: classNames(className, bsPrefix),
      controlId: controlId,
      ...props,
      children: [children, /*#__PURE__*/jsxRuntime.jsx("label", {
        htmlFor: controlId,
        children: label
      })]
    });
  });
  FloatingLabel.displayName = 'FloatingLabel';
  var FloatingLabel$1 = FloatingLabel;

  const propTypes = {
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
  const Form = /*#__PURE__*/React__namespace.forwardRef(({
    className,
    validated,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'form',
    ...props
  }, ref) => /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
    ref: ref,
    className: classNames(className, validated && 'was-validated')
  }));
  Form.displayName = 'Form';
  Form.propTypes = propTypes;
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

  const InputGroupCheckbox = props => /*#__PURE__*/jsxRuntime.jsx(InputGroupText, {
    children: /*#__PURE__*/jsxRuntime.jsx(FormCheckInput$1, {
      type: "checkbox",
      ...props
    })
  });

  const InputGroupRadio = props => /*#__PURE__*/jsxRuntime.jsx(InputGroupText, {
    children: /*#__PURE__*/jsxRuntime.jsx(FormCheckInput$1, {
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
  const InputGroup = /*#__PURE__*/React__namespace.forwardRef(({
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

    const contextValue = React.useMemo(() => ({}), []);
    return /*#__PURE__*/jsxRuntime.jsx(InputGroupContext.Provider, {
      value: contextValue,
      children: /*#__PURE__*/jsxRuntime.jsx(Component, {
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
    const [resolvedRef, setRef] = React.useState(() => resolveContainerRef(ref, window == null ? void 0 : window.document));

    if (!resolvedRef) {
      const earlyRef = resolveContainerRef(ref);
      if (earlyRef) setRef(earlyRef);
    }

    React.useEffect(() => {
      if (onResolved && resolvedRef) {
        onResolved(resolvedRef);
      }
    }, [onResolved, resolvedRef]);
    React.useEffect(() => {
      const nextRef = resolveContainerRef(ref);

      if (nextRef !== resolvedRef) {
        setRef(nextRef);
      }
    }, [ref, resolvedRef]);
    return resolvedRef;
  }

  const _excluded$3 = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  let manager;

  function getManager(window) {
    if (!manager) manager = new ModalManager({
      ownerDocument: window == null ? void 0 : window.document
    });
    return manager;
  }

  function useModalManager(provided) {
    const window = useWindow();
    const modalManager = provided || getManager(window);
    const modal = React.useRef({
      dialog: null,
      backdrop: null
    });
    return Object.assign(modal.current, {
      add: () => modalManager.add(modal.current),
      remove: () => modalManager.remove(modal.current),
      isTopModal: () => modalManager.isTopModal(modal.current),
      setDialogRef: React.useCallback(ref => {
        modal.current.dialog = ref;
      }, []),
      setBackdropRef: React.useCallback(ref => {
        modal.current.backdrop = ref;
      }, [])
    });
  }

  const Modal$2 = /*#__PURE__*/React.forwardRef((_ref, ref) => {
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
      renderBackdrop = props => /*#__PURE__*/jsxRuntime.jsx("div", Object.assign({}, props)),
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
        rest = _objectWithoutPropertiesLoose(_ref, _excluded$3);

    const container = useWaitForDOMRef(containerRef);
    const modal = useModalManager(providedManager);
    const isMounted = useMounted();
    const prevShow = usePrevious(show);
    const [exited, setExited] = React.useState(!show);
    const lastFocusRef = React.useRef(null);
    React.useImperativeHandle(ref, () => modal, [modal]);

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

    React.useEffect(() => {
      if (!show || !container) return;
      handleShow();
    }, [show, container,
    /* should never change: */
    handleShow]); // Hide cleanup logic when:
    //  - `exited` switches to true
    //  - component unmounts;

    React.useEffect(() => {
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
    const removeFocusListenerRef = React.useRef();
    const removeKeydownListenerRef = React.useRef();

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
    let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/jsxRuntime.jsx("div", Object.assign({}, dialogProps, {
      children: /*#__PURE__*/React__namespace.cloneElement(children, {
        role: 'document'
      })
    }));

    if (Transition) {
      dialog = /*#__PURE__*/jsxRuntime.jsx(Transition, {
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
        backdropElement = /*#__PURE__*/jsxRuntime.jsx(BackdropTransition, {
          appear: true,
          in: !!show,
          children: backdropElement
        });
      }
    }

    return /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
      children: /*#__PURE__*/ReactDOM__default["default"].createPortal( /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [backdropElement, dialog]
      }), container)
    });
  });
  Modal$2.displayName = 'Modal';
  var BaseModal = Object.assign(Modal$2, {
    Manager: ModalManager
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

  class BootstrapModalManager extends ModalManager {
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

  const ModalContext = /*#__PURE__*/React__namespace.createContext({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onHide() {}

  });
  var ModalContext$1 = ModalContext;

  const ModalDialog = /*#__PURE__*/React__namespace.forwardRef(({
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
    return /*#__PURE__*/jsxRuntime.jsx("div", { ...props,
      ref: ref,
      className: classNames(dialogClass, className, size && `${bsPrefix}-${size}`, centered && `${dialogClass}-centered`, scrollable && `${dialogClass}-scrollable`, fullscreen && fullScreenClass),
      children: /*#__PURE__*/jsxRuntime.jsx("div", {
        className: classNames(`${bsPrefix}-content`, contentClassName),
        children: children
      })
    });
  });
  ModalDialog.displayName = 'ModalDialog';
  var ModalDialog$1 = ModalDialog;

  var ModalFooter = createWithBsPrefix('modal-footer');

  const defaultProps$3 = {
    closeLabel: 'Close',
    closeButton: false
  };
  const AbstractModalHeader = /*#__PURE__*/React__namespace.forwardRef(({
    closeLabel,
    closeVariant,
    closeButton,
    onHide,
    children,
    ...props
  }, ref) => {
    const context = React.useContext(ModalContext$1);
    const handleClick = useEventCallback(() => {
      context == null ? void 0 : context.onHide();
      onHide == null ? void 0 : onHide();
    });
    return /*#__PURE__*/jsxRuntime.jsxs("div", {
      ref: ref,
      ...props,
      children: [children, closeButton && /*#__PURE__*/jsxRuntime.jsx(CloseButton$1, {
        "aria-label": closeLabel,
        variant: closeVariant,
        onClick: handleClick
      })]
    });
  });
  AbstractModalHeader.defaultProps = defaultProps$3;
  var AbstractModalHeader$1 = AbstractModalHeader;

  const defaultProps$2 = {
    closeLabel: 'Close',
    closeButton: false
  };
  const ModalHeader = /*#__PURE__*/React__namespace.forwardRef(({
    bsPrefix,
    className,
    ...props
  }, ref) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'modal-header');
    return /*#__PURE__*/jsxRuntime.jsx(AbstractModalHeader$1, {
      ref: ref,
      ...props,
      className: classNames(className, bsPrefix)
    });
  });
  ModalHeader.displayName = 'ModalHeader';
  ModalHeader.defaultProps = defaultProps$2;
  var ModalHeader$1 = ModalHeader;

  const DivStyledAsH4 = divWithClassName('h4');
  var ModalTitle = createWithBsPrefix('modal-title', {
    Component: DivStyledAsH4
  });

  const defaultProps$1 = {
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
    return /*#__PURE__*/jsxRuntime.jsx(Fade$1, { ...props,
      timeout: null
    });
  }

  function BackdropTransition(props) {
    return /*#__PURE__*/jsxRuntime.jsx(Fade$1, { ...props,
      timeout: null
    });
  }
  /* eslint-enable no-use-before-define */


  const Modal = /*#__PURE__*/React__namespace.forwardRef(({
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
    const [modalStyle, setStyle] = React.useState({});
    const [animateStaticModal, setAnimateStaticModal] = React.useState(false);
    const waitingForMouseUpRef = React.useRef(false);
    const ignoreBackdropClickRef = React.useRef(false);
    const removeStaticModalAnimationRef = React.useRef(null);
    const [modal, setModalRef] = useCallbackRef();
    const mergedRef = useMergedRefs(ref, setModalRef);
    const handleHide = useEventCallback(onHide);
    const isRTL = useIsRTL();
    bsPrefix = useBootstrapPrefix(bsPrefix, 'modal');
    const modalContext = React.useMemo(() => ({
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

    const renderBackdrop = React.useCallback(backdropProps => /*#__PURE__*/jsxRuntime.jsx("div", { ...backdropProps,
      className: classNames(`${bsPrefix}-backdrop`, backdropClassName, !animation && 'show')
    }), [animation, backdropClassName, bsPrefix]);
    const baseModalStyle = { ...style,
      ...modalStyle
    }; // If `display` is not set to block, autoFocus inside the modal fails
    // https://github.com/react-bootstrap/react-bootstrap/issues/5102

    baseModalStyle.display = 'block';

    const renderDialog = dialogProps => /*#__PURE__*/jsxRuntime.jsx("div", {
      role: "dialog",
      ...dialogProps,
      style: baseModalStyle,
      className: classNames(className, bsPrefix, animateStaticModal && `${bsPrefix}-static`),
      onClick: backdrop ? handleClick : undefined,
      onMouseUp: handleMouseUp,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-describedby": ariaDescribedby,
      children: /*#__PURE__*/jsxRuntime.jsx(Dialog, { ...props,
        onMouseDown: handleDialogMouseDown,
        className: dialogClassName,
        contentClassName: contentClassName,
        children: children
      })
    });

    return /*#__PURE__*/jsxRuntime.jsx(ModalContext$1.Provider, {
      value: modalContext,
      children: /*#__PURE__*/jsxRuntime.jsx(BaseModal, {
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
  Modal.defaultProps = defaultProps$1;
  var Modal$1 = Object.assign(Modal, {
    Body: ModalBody,
    Header: ModalHeader$1,
    Title: ModalTitle,
    Footer: ModalFooter,
    Dialog: ModalDialog$1,
    TRANSITION_DURATION: 300,
    BACKDROP_TRANSITION_DURATION: 150
  });

  /* eslint-disable react/no-multi-comp */
  const defaultProps = {
    active: false,
    disabled: false,
    activeLabel: '(current)'
  };
  const PageItem = /*#__PURE__*/React__namespace.forwardRef(({
    active,
    disabled,
    className,
    style,
    activeLabel,
    children,
    ...props
  }, ref) => {
    const Component = active || disabled ? 'span' : Anchor;
    return /*#__PURE__*/jsxRuntime.jsx("li", {
      ref: ref,
      style: style,
      className: classNames(className, 'page-item', {
        active,
        disabled
      }),
      children: /*#__PURE__*/jsxRuntime.jsxs(Component, {
        className: "page-link",
        disabled: disabled,
        ...props,
        children: [children, active && activeLabel && /*#__PURE__*/jsxRuntime.jsx("span", {
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
      return /*#__PURE__*/jsxRuntime.jsxs(PageItem, { ...props,
        children: [/*#__PURE__*/jsxRuntime.jsx("span", {
          "aria-hidden": "true",
          children: children || defaultValue
        }), /*#__PURE__*/jsxRuntime.jsx("span", {
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
  const Pagination = /*#__PURE__*/React__namespace.forwardRef(({
    bsPrefix,
    className,
    size,
    ...props
  }, ref) => {
    const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'pagination');
    return /*#__PURE__*/jsxRuntime.jsx("ul", {
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

  const Row = /*#__PURE__*/React__namespace.forwardRef(({
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
    return /*#__PURE__*/jsxRuntime.jsx(Component, {
      ref: ref,
      ...props,
      className: classNames(className, decoratedBsPrefix, ...classes)
    });
  });
  Row.displayName = 'Row';
  var Row$1 = Row;

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

    return /*#__PURE__*/React__default["default"].createElement(Field, {
      name: name,
      validate: processValidation(validators)
    }, function (_ref) {
      var input = _ref.input,
          meta = _ref.meta;
      return /*#__PURE__*/React__default["default"].createElement("div", null, console.log(input, meta), /*#__PURE__*/React__default["default"].createElement(Form$1.Group, {
        as: Row$1,
        className: "afw-form-input",
        controlId: "formGroupEmail"
      }, /*#__PURE__*/React__default["default"].createElement(Form$1.Label, {
        column: true,
        sm: lblSize
      }, label), /*#__PURE__*/React__default["default"].createElement(Col$1, {
        sm: fldSize
      }, /*#__PURE__*/React__default["default"].createElement(InputGroup$1, {
        hasValidation: true
      }, /*#__PURE__*/React__default["default"].createElement(Form$1.Control, _extends$1({}, rest, {
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
      })), /*#__PURE__*/React__default["default"].createElement(FormControl$1.Feedback, {
        className: "errSpace",
        type: meta.touched && meta.error ? 'invalid' : 'valid'
      }, meta.touched ? /*#__PURE__*/React__default["default"].createElement("span", null, meta.error || /*#__PURE__*/React__default["default"].createElement("div", null, "\xA0")) : /*#__PURE__*/React__default["default"].createElement("span", null, /*#__PURE__*/React__default["default"].createElement("div", null, "\xA0")))))));
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

    return /*#__PURE__*/React__default["default"].createElement(Field, {
      name: name,
      initialValue: value,
      validate: processValidation(validators)
    }, function (_ref) {
      var input = _ref.input,
          meta = _ref.meta;
      return /*#__PURE__*/React__default["default"].createElement("div", null, console.log(input, meta), /*#__PURE__*/React__default["default"].createElement(Form$1.Group, {
        as: Row$1,
        className: "afw-form-select",
        controlId: "formGroupSelect"
      }, /*#__PURE__*/React__default["default"].createElement(Form$1.Label, {
        column: true,
        sm: lblSize
      }, label), /*#__PURE__*/React__default["default"].createElement(Col$1, {
        sm: fldSize
      }, /*#__PURE__*/React__default["default"].createElement(InputGroup$1, {
        hasValidation: true
      }, /*#__PURE__*/React__default["default"].createElement(Form$1.Select, _extends$1({}, rest, {
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
        return /*#__PURE__*/React__default["default"].createElement("option", {
          key: lvb.val,
          value: lvb.val
        }, lvb.lbl);
      })), /*#__PURE__*/React__default["default"].createElement(FormControl$1.Feedback, {
        className: "errSpace",
        type: meta.touched && meta.error ? 'invalid' : 'valid'
      }, meta.touched ? /*#__PURE__*/React__default["default"].createElement("span", null, meta.error || /*#__PURE__*/React__default["default"].createElement("div", null, "\xA0")) : /*#__PURE__*/React__default["default"].createElement("span", null, /*#__PURE__*/React__default["default"].createElement("div", null, "\xA0")))))));
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

    var _useState = React.useState(false),
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

    return /*#__PURE__*/React__default["default"].createElement(Field, {
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

      return /*#__PURE__*/React__default["default"].createElement("div", null, console.log(input, meta), /*#__PURE__*/React__default["default"].createElement(Form$1.Group, {
        as: Row$1,
        className: "afw-form-input",
        controlId: "formGroupEmail"
      }, /*#__PURE__*/React__default["default"].createElement(Form$1.Label, {
        column: true,
        sm: lblSize
      }, label), /*#__PURE__*/React__default["default"].createElement(Col$1, {
        sm: fldSize
      }, /*#__PURE__*/React__default["default"].createElement(InputGroup$1, {
        hasValidation: true
      }, /*#__PURE__*/React__default["default"].createElement(InputGroup$1.Text, null, props.sym), /*#__PURE__*/React__default["default"].createElement(Form$1.Control, _extends$1({}, rest, {
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
      })), /*#__PURE__*/React__default["default"].createElement(FormControl$1.Feedback, {
        className: "errSpace",
        type: meta.touched && meta.error ? 'invalid' : 'valid'
      }, meta.touched ? /*#__PURE__*/React__default["default"].createElement("span", null, meta.error || /*#__PURE__*/React__default["default"].createElement("div", null, "\xA0")) : /*#__PURE__*/React__default["default"].createElement("span", null, /*#__PURE__*/React__default["default"].createElement("div", null, "\xA0")))))));
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

    var _useState = React.useState([{
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

    var _useState3 = React.useState(0),
        _useState4 = _slicedToArray(_useState3, 2),
        curPos = _useState4[0],
        setCurPos = _useState4[1];

    var _useState5 = React.useState(1),
        _useState6 = _slicedToArray(_useState5, 2),
        blkStart = _useState6[0],
        setBlkStart = _useState6[1];

    var _useState7 = React.useState(0),
        _useState8 = _slicedToArray(_useState7, 2),
        lastPg = _useState8[0],
        setLastPg = _useState8[1];

    React.useEffect(function () {
      setLastPg(Math.ceil(total / pageable.pageSz));
    }, [total, pageable.pageSz]);

    var pageBlock = function pageBlock(blockState) {
      return blockState.map(function (block, ndx) {
        return /*#__PURE__*/React__default["default"].createElement(Pagination$1.Item, {
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


    var initPager = React.useRef(true);
    React.useEffect(function () {
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
    return /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        width: '100%'
      }
    }, total > 0 && /*#__PURE__*/React__default["default"].createElement(Pagination$1, {
      style: {
        "float": 'right'
      }
    }, /*#__PURE__*/React__default["default"].createElement(Pagination$1.Item, {
      onClick: function onClick() {
        return firstClicked();
      }
    }, firstPg), /*#__PURE__*/React__default["default"].createElement(Pagination$1.Prev, {
      disabled: blkStart + curPos == 1,
      onClick: function onClick() {
        return prevClicked();
      }
    }), /*#__PURE__*/React__default["default"].createElement(Pagination$1.Ellipsis, {
      disabled: blkStart == 1,
      onClick: function onClick() {
        return leftEllipseClicked();
      }
    }), pageBlock(blockState), /*#__PURE__*/React__default["default"].createElement(Pagination$1.Ellipsis, {
      disabled: blkStart + 5 > lastPg,
      onClick: function onClick() {
        return rightEllipseClicked();
      }
    }), /*#__PURE__*/React__default["default"].createElement(Pagination$1.Next, {
      disabled: blkStart + curPos == lastPg,
      onClick: function onClick() {
        return nextClicked();
      }
    }), /*#__PURE__*/React__default["default"].createElement(Pagination$1.Item, {
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
    return /*#__PURE__*/React__default["default"].createElement(Modal$1, {
      show: show,
      size: 'lg',
      dialogClassName: dialogClassName,
      centered: true
    }, closeModal && /*#__PURE__*/React__default["default"].createElement(Modal$1.Header, {
      className: headerClassName,
      onHide: doHide,
      closeButton: true
    }, /*#__PURE__*/React__default["default"].createElement("i", {
      className: iconClassName
    }), "\xA0", /*#__PURE__*/React__default["default"].createElement("h5", null, status === 'danger' ? 'Error' : 'Info')), /*#__PURE__*/React__default["default"].createElement(Modal$1.Body, null, children));
  };

  var AfwMessage = function AfwMessage(props) {
    var msg = props.msg,
        showModal = props.showModal;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, showModal && msg.details.length == 0 && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "container"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "box center-placed"
    }, /*#__PURE__*/React__default["default"].createElement("div", null, msg.content))), showModal && msg.details.length > 0 && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "container"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "list-title"
    }, msg.content), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "d-flex justify-content-center list-body "
    }, /*#__PURE__*/React__default["default"].createElement("ul", null, msg.details.map(function (d) {
      return /*#__PURE__*/React__default["default"].createElement("li", {
        key: d
      }, d);
    })))));
  };

  exports.AfwForm = AfwForm;
  exports.AfwFormCurrency = AfwFormCurrency;
  exports.AfwFormInput = AfwFormInput;
  exports.AfwFormSelect = AfwFormSelect;
  exports.AfwMessage = AfwMessage;
  exports.AfwModal = AfwModal;
  exports.AfwPager = AfwPager;
  exports.GlobalContext = GlobalContext;
  exports.isEmail = isEmail;
  exports.minLen = minLen;
  exports.regEx = regEx;
  exports.required = required;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
