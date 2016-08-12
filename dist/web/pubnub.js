/*! 4.0.5 / Consumer  */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PubNub"] = factory();
	else
		root["PubNub"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _pubnubCommon = __webpack_require__(1);

	var _pubnubCommon2 = _interopRequireDefault(_pubnubCommon);

	var _flow_interfaces = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var db = {
	  get: function get(key) {
	    return localStorage.getItem(key);
	  },
	  set: function set(key, data) {
	    return localStorage.setItem(key, data);
	  }
	};

	function sendBeacon(url) {
	  if (navigator && navigator.sendBeacon) {
	    navigator.sendBeacon(url);
	  } else {
	    return false;
	  }
	}

	var _class = function (_PubNubCore) {
	  _inherits(_class, _PubNubCore);

	  function _class(setup) {
	    _classCallCheck(this, _class);

	    setup.db = db;
	    setup.sendBeacon = sendBeacon;
	    setup.sdkFamily = 'Web';

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, setup));
	  }

	  return _class;
	}(_pubnubCommon2.default);

	exports.default = _class;
	module.exports = exports['default'];
	//# sourceMappingURL=index.js.map


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _uuid = __webpack_require__(2);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _networking = __webpack_require__(4);

	var _networking2 = _interopRequireDefault(_networking);

	var _config = __webpack_require__(12);

	var _config2 = _interopRequireDefault(_config);

	var _index = __webpack_require__(11);

	var _index2 = _interopRequireDefault(_index);

	var _subscription_manager = __webpack_require__(16);

	var _subscription_manager2 = _interopRequireDefault(_subscription_manager);

	var _listener_manager = __webpack_require__(19);

	var _listener_manager2 = _interopRequireDefault(_listener_manager);

	var _endpoint = __webpack_require__(22);

	var _endpoint2 = _interopRequireDefault(_endpoint);

	var _add_channels = __webpack_require__(23);

	var addChannelsChannelGroupConfig = _interopRequireWildcard(_add_channels);

	var _remove_channels = __webpack_require__(24);

	var removeChannelsChannelGroupConfig = _interopRequireWildcard(_remove_channels);

	var _delete_group = __webpack_require__(25);

	var deleteChannelGroupConfig = _interopRequireWildcard(_delete_group);

	var _list_groups = __webpack_require__(26);

	var listChannelGroupsConfig = _interopRequireWildcard(_list_groups);

	var _list_channels = __webpack_require__(27);

	var listChannelsInChannelGroupConfig = _interopRequireWildcard(_list_channels);

	var _add_push_channels = __webpack_require__(28);

	var addPushChannelsConfig = _interopRequireWildcard(_add_push_channels);

	var _remove_push_channels = __webpack_require__(29);

	var removePushChannelsConfig = _interopRequireWildcard(_remove_push_channels);

	var _list_push_channels = __webpack_require__(30);

	var listPushChannelsConfig = _interopRequireWildcard(_list_push_channels);

	var _remove_device = __webpack_require__(31);

	var removeDevicePushConfig = _interopRequireWildcard(_remove_device);

	var _leave = __webpack_require__(32);

	var presenceLeaveEndpointConfig = _interopRequireWildcard(_leave);

	var _where_now = __webpack_require__(33);

	var presenceWhereNowEndpointConfig = _interopRequireWildcard(_where_now);

	var _heartbeat = __webpack_require__(34);

	var presenceHeartbeatEndpointConfig = _interopRequireWildcard(_heartbeat);

	var _get_state = __webpack_require__(35);

	var presenceGetStateConfig = _interopRequireWildcard(_get_state);

	var _set_state = __webpack_require__(36);

	var presenceSetStateConfig = _interopRequireWildcard(_set_state);

	var _here_now = __webpack_require__(37);

	var presenceHereNowConfig = _interopRequireWildcard(_here_now);

	var _audit = __webpack_require__(38);

	var auditEndpointConfig = _interopRequireWildcard(_audit);

	var _grant = __webpack_require__(39);

	var grantEndpointConfig = _interopRequireWildcard(_grant);

	var _publish = __webpack_require__(40);

	var publishEndpointConfig = _interopRequireWildcard(_publish);

	var _history = __webpack_require__(41);

	var historyEndpointConfig = _interopRequireWildcard(_history);

	var _time = __webpack_require__(18);

	var timeEndpointConfig = _interopRequireWildcard(_time);

	var _subscribe = __webpack_require__(17);

	var subscribeEndpointConfig = _interopRequireWildcard(_subscribe);

	var _package = __webpack_require__(14);

	var _package2 = _interopRequireDefault(_package);

	var _flow_interfaces = __webpack_require__(13);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class(setup) {
	    var _this = this;

	    _classCallCheck(this, _class);

	    var sendBeacon = setup.sendBeacon;
	    var db = setup.db;


	    var config = this._config = new _config2.default({ setup: setup, db: db });
	    var crypto = new _index2.default({ config: config });
	    var networking = new _networking2.default({ config: config, crypto: crypto, sendBeacon: sendBeacon });

	    var modules = { config: config, networking: networking, crypto: crypto };
	    var listenerManager = this._listenerManager = new _listener_manager2.default();

	    var timeEndpoint = _endpoint2.default.bind(this, modules, timeEndpointConfig);
	    var leaveEndpoint = _endpoint2.default.bind(this, modules, presenceLeaveEndpointConfig);
	    var heartbeatEndpoint = _endpoint2.default.bind(this, modules, presenceHeartbeatEndpointConfig);
	    var setStateEndpoint = _endpoint2.default.bind(this, modules, presenceSetStateConfig);
	    var subscribeEndpoint = _endpoint2.default.bind(this, modules, subscribeEndpointConfig);


	    var subscriptionManager = new _subscription_manager2.default({
	      timeEndpoint: timeEndpoint,
	      leaveEndpoint: leaveEndpoint, heartbeatEndpoint: heartbeatEndpoint, setStateEndpoint: setStateEndpoint,
	      subscribeEndpoint: subscribeEndpoint,
	      config: modules.config,
	      listenerManager: listenerManager
	    });

	    this.addListener = listenerManager.addListener.bind(listenerManager);
	    this.removeListener = listenerManager.removeListener.bind(listenerManager);

	    this.channelGroups = {
	      listGroups: _endpoint2.default.bind(this, modules, listChannelGroupsConfig),
	      listChannels: _endpoint2.default.bind(this, modules, listChannelsInChannelGroupConfig),
	      addChannels: _endpoint2.default.bind(this, modules, addChannelsChannelGroupConfig),
	      removeChannels: _endpoint2.default.bind(this, modules, removeChannelsChannelGroupConfig),
	      deleteGroup: _endpoint2.default.bind(this, modules, deleteChannelGroupConfig)
	    };

	    this.push = {
	      addChannels: _endpoint2.default.bind(this, modules, addPushChannelsConfig),
	      removeChannels: _endpoint2.default.bind(this, modules, removePushChannelsConfig),
	      deleteDevice: _endpoint2.default.bind(this, modules, removeDevicePushConfig),
	      listChannels: _endpoint2.default.bind(this, modules, listPushChannelsConfig)
	    };

	    this.hereNow = _endpoint2.default.bind(this, modules, presenceHereNowConfig);
	    this.whereNow = _endpoint2.default.bind(this, modules, presenceWhereNowEndpointConfig);
	    this.getState = _endpoint2.default.bind(this, modules, presenceGetStateConfig);
	    this.setState = subscriptionManager.adaptStateChange.bind(subscriptionManager);

	    this.grant = _endpoint2.default.bind(this, modules, grantEndpointConfig);
	    this.audit = _endpoint2.default.bind(this, modules, auditEndpointConfig);

	    this.publish = _endpoint2.default.bind(this, modules, publishEndpointConfig);

	    this.fire = function (args, callback) {
	      args.replicate = false;
	      args.storeInHistory = false;
	      _this.publish(args, callback);
	    };

	    this.history = _endpoint2.default.bind(this, modules, historyEndpointConfig);

	    this.time = timeEndpoint;

	    this.subscribe = subscriptionManager.adaptSubscribeChange.bind(subscriptionManager);
	    this.unsubscribe = subscriptionManager.adaptUnsubscribeChange.bind(subscriptionManager);
	    this.reconnect = subscriptionManager.reconnect.bind(subscriptionManager);
	    this.stop = subscriptionManager.disconnect.bind(subscriptionManager);

	    this.getAuthKey = modules.config.getAuthKey.bind(modules.config);
	    this.setAuthKey = modules.config.setAuthKey.bind(modules.config);
	    this.setCipherKey = modules.config.setCipherKey.bind(modules.config);
	    this.getUUID = modules.config.getUUID.bind(modules.config);
	    this.setUUID = modules.config.setUUID.bind(modules.config);
	    this.getFilterExpression = modules.config.getFilterExpression.bind(modules.config);
	    this.setFilterExpression = modules.config.setFilterExpression.bind(modules.config);
	  }

	  _createClass(_class, [{
	    key: 'getVersion',
	    value: function getVersion() {
	      return _package2.default.version;
	    }
	  }], [{
	    key: 'generateUUID',
	    value: function generateUUID() {
	      return _uuid2.default.v4();
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;
	module.exports = exports['default'];
	//# sourceMappingURL=pubnub-common.js.map


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php

	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(3);

	// Maps for number <-> hex string conversion
	var _byteToHex = [];
	var _hexToByte = {};
	for (var i = 0; i < 256; i++) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
	}

	// **`parse()` - Parse a UUID into it's component bytes**
	function parse(s, buf, offset) {
	  var i = (buf && offset) || 0, ii = 0;

	  buf = buf || [];
	  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	    if (ii < 16) { // Don't overflow!
	      buf[i + ii++] = _hexToByte[oct];
	    }
	  });

	  // Zero out remaining bytes if string was short
	  while (ii < 16) {
	    buf[i + ii++] = 0;
	  }

	  return buf;
	}

	// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	function unparse(buf, offset) {
	  var i = offset || 0, bth = _byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}

	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html

	// random #'s we need to init node and clockseq
	var _seedBytes = _rng();

	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];

	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;

	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];

	  options = options || {};

	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }

	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }

	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }

	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;

	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;

	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;

	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;

	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;

	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;

	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;

	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; n++) {
	    b[i + n] = node[n];
	  }

	  return buf ? buf : unparse(b);
	}

	// **`v4()` - Generate random UUID**

	// See https://github.com/broofa/node-uuid for API details
	function v4(options, buf, offset) {
	  // Deprecated - 'format' argument, as supported in v1.2
	  var i = buf && offset || 0;

	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};

	  var rnds = options.random || (options.rng || _rng)();

	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;

	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ii++) {
	      buf[i + ii] = rnds[ii];
	    }
	  }

	  return buf || unparse(rnds);
	}

	// Export public API
	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;
	uuid.parse = parse;
	uuid.unparse = unparse;

	module.exports = uuid;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;

	if (global.crypto && crypto.getRandomValues) {
	  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	  // Moderately fast, high quality
	  var _rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(_rnds8);
	    return _rnds8;
	  };
	}

	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  _rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return _rnds;
	  };
	}

	module.exports = rng;


	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(console) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _superagent = __webpack_require__(6);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _index = __webpack_require__(11);

	var _index2 = _interopRequireDefault(_index);

	var _config = __webpack_require__(12);

	var _config2 = _interopRequireDefault(_config);

	var _flow_interfaces = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class(_ref) {
	    var config = _ref.config;
	    var crypto = _ref.crypto;
	    var sendBeacon = _ref.sendBeacon;

	    _classCallCheck(this, _class);

	    this._config = config;
	    this._crypto = crypto;
	    this._sendBeacon = sendBeacon;

	    this._maxSubDomain = 20;
	    this._currentSubDomain = Math.floor(Math.random() * this._maxSubDomain);

	    this._providedFQDN = (this._config.secure ? 'https://' : 'http://') + this._config.origin;
	    this._coreParams = {};

	    this.shiftStandardOrigin();
	  }

	  _createClass(_class, [{
	    key: 'nextOrigin',
	    value: function nextOrigin() {
	      if (this._providedFQDN.indexOf('pubsub.') === -1) {
	        return this._providedFQDN;
	      }

	      var newSubDomain = void 0;

	      this._currentSubDomain = this._currentSubDomain + 1;

	      if (this._currentSubDomain >= this._maxSubDomain) {
	        this._currentSubDomain = 1;
	      }

	      newSubDomain = this._currentSubDomain.toString();

	      return this._providedFQDN.replace('pubsub', 'ps' + newSubDomain);
	    }
	  }, {
	    key: 'shiftStandardOrigin',
	    value: function shiftStandardOrigin() {
	      var failover = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	      this._standardOrigin = this.nextOrigin(failover);

	      return this._standardOrigin;
	    }
	  }, {
	    key: 'getStandardOrigin',
	    value: function getStandardOrigin() {
	      return this._standardOrigin;
	    }
	  }, {
	    key: 'POST',
	    value: function POST(params, body, endpoint, callback) {
	      var superagentConstruct = _superagent2.default.post(this.getStandardOrigin() + endpoint.url).query(params).send(body);
	      return this._abstractedXDR(superagentConstruct, endpoint, callback);
	    }
	  }, {
	    key: 'GET',
	    value: function GET(params, endpoint, callback) {
	      var superagentConstruct = _superagent2.default.get(this.getStandardOrigin() + endpoint.url).query(params);
	      return this._abstractedXDR(superagentConstruct, endpoint, callback);
	    }
	  }, {
	    key: '_abstractedXDR',
	    value: function _abstractedXDR(superagentConstruct, endpoint, callback) {
	      var _this = this;

	      if (this._config.logVerbosity) {
	        superagentConstruct = superagentConstruct.use(this._attachSuperagentLogger);
	      }

	      return superagentConstruct.timeout(endpoint.timeout).end(function (err, resp) {
	        var status = {};
	        status.error = err !== null;
	        status.operation = endpoint.operation;

	        if (resp && resp.status) {
	          status.statusCode = resp.status;
	        }

	        if (err) {
	          status.errorData = err;
	          status.category = _this._detectErrorCategory(err);
	          return callback(status, null);
	        }

	        var parsedResponse = JSON.parse(resp.text);
	        return callback(status, parsedResponse);
	      });
	    }
	  }, {
	    key: '_detectErrorCategory',
	    value: function _detectErrorCategory(err) {
	      if (err.code === 'ENOTFOUND') return 'PNNetworkIssuesCategory';
	      if (err.timeout) return 'PNTimeoutCategory';

	      if (err.response) {
	        if (err.response.badRequest) return 'PNBadRequestCategory';
	        if (err.response.forbidden) return 'PNAccessDeniedCategory';
	      }

	      return 'PNUnknownCategory';
	    }
	  }, {
	    key: '_attachSuperagentLogger',
	    value: function _attachSuperagentLogger(req) {
	      var _pickLogger = function _pickLogger() {
	        if (console && console.log) return console;
	        if (window && window.console && window.console.log) return window.console;
	        return console;
	      };

	      var start = new Date().getTime();
	      var timestampStart = new Date().toISOString();
	      var logger = _pickLogger();
	      logger.log('HTTP-STARTED', { url: req.url, qs: req.qs, timestampStart: timestampStart });

	      req.on('response', function (res) {
	        var now = new Date().getTime();
	        var elapsed = now - start;
	        var timestampDone = new Date().toISOString();

	        logger.log('HTTP-FINISHED', { started: timestampStart, ended: timestampDone, url: req.url, qs: req.qs, text: res.text, elapsed: elapsed });
	      });
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;
	module.exports = exports['default'];
	//# sourceMappingURL=networking.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(console) {/**
	 * Root reference for iframes.
	 */

	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  console.warn("Using browser-only version of superagent in non-browser environment");
	  root = this;
	}

	var Emitter = __webpack_require__(7);
	var requestBase = __webpack_require__(8);
	var isObject = __webpack_require__(9);

	/**
	 * Noop.
	 */

	function noop(){};

	/**
	 * Expose `request`.
	 */

	var request = module.exports = __webpack_require__(10).bind(null, Request);

	/**
	 * Determine XHR.
	 */

	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  throw Error("Browser-only verison of superagent could not find XHR");
	};

	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */

	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */

	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pushEncodedKeyValuePair(pairs, key, obj[key]);
	    }
	  }
	  return pairs.join('&');
	}

	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */

	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (Array.isArray(val)) {
	    return val.forEach(function(v) {
	      pushEncodedKeyValuePair(pairs, key, v);
	    });
	  } else if (isObject(val)) {
	    for(var subkey in val) {
	      pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
	    }
	    return;
	  }
	  pairs.push(encodeURIComponent(key)
	    + '=' + encodeURIComponent(val));
	}

	/**
	 * Expose serialization method.
	 */

	 request.serializeObject = serialize;

	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */

	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var pair;
	  var pos;

	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    pos = pair.indexOf('=');
	    if (pos == -1) {
	      obj[decodeURIComponent(pair)] = '';
	    } else {
	      obj[decodeURIComponent(pair.slice(0, pos))] =
	        decodeURIComponent(pair.slice(pos + 1));
	    }
	  }

	  return obj;
	}

	/**
	 * Expose parser.
	 */

	request.parseString = parseString;

	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */

	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};

	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */

	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };

	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */

	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};

	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;

	  lines.pop(); // trailing CRLF

	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }

	  return fields;
	}

	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */

	function isJSON(mime) {
	  return /[\/+]json\b/.test(mime);
	}

	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function type(str){
	  return str.split(/ *; */).shift();
	};

	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function params(str){
	  return str.split(/ *; */).reduce(function(obj, str){
	    var parts = str.split(/ *= */),
	        key = parts.shift(),
	        val = parts.shift();

	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};

	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */

	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this._setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this._setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this._parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}

	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};

	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */

	Response.prototype._setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);

	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};

	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */

	Response.prototype._parseBody = function(str){
	  var parse = request.parse[this.type];
	  if (!parse && isJSON(this.type)) {
	    parse = request.parse['application/json'];
	  }
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};

	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */

	Response.prototype._setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }

	  var type = status / 100 | 0;

	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;

	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;

	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};

	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */

	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;

	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;

	  return err;
	};

	/**
	 * Expose `Response`.
	 */

	request.Response = Response;

	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */

	function Request(method, url) {
	  var self = this;
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {}; // preserves header name case
	  this._header = {}; // coerces header names to lowercase
	  this.on('end', function(){
	    var err = null;
	    var res = null;

	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      // issue #876: return the http status code if the response parsing fails
	      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
	      return self.callback(err);
	    }

	    self.emit('response', res);

	    var new_err;
	    try {
	      if (res.status < 200 || res.status >= 300) {
	        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	        new_err.original = err;
	        new_err.response = res;
	        new_err.status = res.status;
	      }
	    } catch(e) {
	      new_err = e; // #985 touching res may cause INVALID_STATE_ERR on old Android
	    }

	    // #1000 don't catch errors from the callback to avoid double calling it
	    if (new_err) {
	      self.callback(new_err, res);
	    } else {
	      self.callback(null, res);
	    }
	  });
	}

	/**
	 * Mixin `Emitter` and `requestBase`.
	 */

	Emitter(Request.prototype);
	for (var key in requestBase) {
	  Request.prototype[key] = requestBase[key];
	}

	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};

	/**
	 * Set responseType to `val`. Presently valid responseTypes are 'blob' and
	 * 'arraybuffer'.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .responseType('blob')
	 *        .end(callback);
	 *
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.responseType = function(val){
	  this._responseType = val;
	  return this;
	};

	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.auth = function(user, pass, options){
	  if (!options) {
	    options = {
	      type: 'basic'
	    }
	  }

	  switch (options.type) {
	    case 'basic':
	      var str = btoa(user + ':' + pass);
	      this.set('Authorization', 'Basic ' + str);
	    break;

	    case 'auto':
	      this.username = user;
	      this.password = pass;
	    break;
	  }
	  return this;
	};

	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/

	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};

	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.attach = function(field, file, filename){
	  this._getFormData().append(field, file, filename || file.name);
	  return this;
	};

	Request.prototype._getFormData = function(){
	  if (!this._formData) {
	    this._formData = new root.FormData();
	  }
	  return this._formData;
	};

	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */

	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};

	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */

	Request.prototype.crossDomainError = function(){
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;

	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;

	  this.callback(err);
	};

	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */

	Request.prototype._timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};

	/**
	 * Compose querystring to append to req.url
	 *
	 * @api private
	 */

	Request.prototype._appendQueryString = function(){
	  var query = this._query.join('&');
	  if (query) {
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }
	};

	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var timeout = this._timeout;
	  var data = this._formData || this._data;

	  // store callback
	  this._callback = fn || noop;

	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;

	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }

	    if (0 == status) {
	      if (self.timedout) return self._timeoutError();
	      if (self._aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };

	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = 'download';
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }

	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }

	  // querystring
	  this._appendQueryString();

	  // initiate request
	  if (this.username && this.password) {
	    xhr.open(this.method, this.url, true, this.username, this.password);
	  } else {
	    xhr.open(this.method, this.url, true);
	  }

	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;

	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
	    // serialize stuff
	    var contentType = this._header['content-type'];
	    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }

	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }

	  if (this._responseType) {
	    xhr.responseType = this._responseType;
	  }

	  // send stuff
	  this.emit('request', this);

	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};


	/**
	 * Expose `Request`.
	 */

	request.Request = Request;

	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * OPTIONS query to `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.options = function(url, data, fn){
	  var req = request('OPTIONS', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	function del(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};

	request['del'] = del;
	request['delete'] = del;

	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */

	if (true) {
	  module.exports = Emitter;
	}

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module of mixed-in functions shared between node and client code
	 */
	var isObject = __webpack_require__(9);

	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.clearTimeout = function _clearTimeout(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};

	/**
	 * Override default response body parser
	 *
	 * This function will be called to convert incoming data into request.body
	 *
	 * @param {Function}
	 * @api public
	 */

	exports.parse = function parse(fn){
	  this._parser = fn;
	  return this;
	};

	/**
	 * Override default request body serializer
	 *
	 * This function will be called to convert data set via .send or .attach into payload to send
	 *
	 * @param {Function}
	 * @api public
	 */

	exports.serialize = function serialize(fn){
	  this._serializer = fn;
	  return this;
	};

	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.timeout = function timeout(ms){
	  this._timeout = ms;
	  return this;
	};

	/**
	 * Promise support
	 *
	 * @param {Function} resolve
	 * @param {Function} reject
	 * @return {Request}
	 */

	exports.then = function then(resolve, reject) {
	  if (!this._fullfilledPromise) {
	    var self = this;
	    this._fullfilledPromise = new Promise(function(innerResolve, innerReject){
	      self.end(function(err, res){
	        if (err) innerReject(err); else innerResolve(res);
	      });
	    });
	  }
	  return this._fullfilledPromise.then(resolve, reject);
	}

	/**
	 * Allow for extension
	 */

	exports.use = function use(fn) {
	  fn(this);
	  return this;
	}


	/**
	 * Get request header `field`.
	 * Case-insensitive.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	exports.get = function(field){
	  return this._header[field.toLowerCase()];
	};

	/**
	 * Get case-insensitive header `field` value.
	 * This is a deprecated internal API. Use `.get(field)` instead.
	 *
	 * (getHeader is no longer used internally by the superagent code base)
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 * @deprecated
	 */

	exports.getHeader = exports.get;

	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 * Case-insensitive.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};

	/**
	 * Remove header `field`.
	 * Case-insensitive.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 */
	exports.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};

	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File|Buffer|fs.ReadStream} val
	 * @return {Request} for chaining
	 * @api public
	 */
	exports.field = function(name, val) {
	  this._getFormData().append(name, val);
	  return this;
	};

	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	exports.abort = function(){
	  if (this._aborted) {
	    return this;
	  }
	  this._aborted = true;
	  this.xhr && this.xhr.abort(); // browser
	  this.req && this.req.abort(); // node
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};

	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */

	exports.withCredentials = function(){
	  // This is browser-only functionality. Node side is no-op.
	  this._withCredentials = true;
	  return this;
	};

	/**
	 * Set the max redirects to `n`. Does noting in browser XHR implementation.
	 *
	 * @param {Number} n
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.redirects = function(n){
	  this._maxRedirects = n;
	  return this;
	};

	/**
	 * Convert to a plain javascript object (not JSON string) of scalar properties.
	 * Note as this method is designed to return a useful non-this value,
	 * it cannot be chained.
	 *
	 * @return {Object} describing method, url, and data of this request
	 * @api public
	 */

	exports.toJSON = function(){
	  return {
	    method: this.method,
	    url: this.url,
	    data: this._data,
	    headers: this._header
	  };
	};

	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	exports._isHost = function _isHost(obj) {
	  var str = {}.toString.call(obj);

	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	 *      request.post('/user')
	 *        .send('name=tobi')
	 *        .send('species=ferret')
	 *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.send = function(data){
	  var obj = isObject(data);
	  var type = this._header['content-type'];

	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    // default to x-www-form-urlencoded
	    if (!type) this.type('form');
	    type = this._header['content-type'];
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }

	  if (!obj || this._isHost(data)) return this;

	  // default to json
	  if (!type) this.type('json');
	  return this;
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(obj) {
	  return null !== obj && 'object' === typeof obj;
	}

	module.exports = isObject;


/***/ },
/* 10 */
/***/ function(module, exports) {

	// The node and browser modules expose versions of this with the
	// appropriate constructor function bound as first argument
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */

	function request(RequestConstructor, method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new RequestConstructor('GET', method).end(url);
	  }

	  // url first
	  if (2 == arguments.length) {
	    return new RequestConstructor('GET', method);
	  }

	  return new RequestConstructor(method, url);
	}

	module.exports = request;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _config = __webpack_require__(12);

	var _config2 = _interopRequireDefault(_config);

	var _hmacSha = __webpack_require__(15);

	var _hmacSha2 = _interopRequireDefault(_hmacSha);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class(_ref) {
	    var config = _ref.config;

	    _classCallCheck(this, _class);

	    this._config = config;

	    this._iv = '0123456789012345';

	    this._allowedKeyEncodings = ['hex', 'utf8', 'base64', 'binary'];
	    this._allowedKeyLengths = [128, 256];
	    this._allowedModes = ['ecb', 'cbc'];

	    this._defaultOptions = {
	      encryptKey: true,
	      keyEncoding: 'utf8',
	      keyLength: 256,
	      mode: 'cbc'
	    };
	  }

	  _createClass(_class, [{
	    key: 'HMACSHA256',
	    value: function HMACSHA256(data) {
	      var hash = _hmacSha2.default.HmacSHA256(data, this._config.secretKey);
	      return hash.toString(_hmacSha2.default.enc.Base64);
	    }
	  }, {
	    key: 'SHA256',
	    value: function SHA256(s) {
	      return _hmacSha2.default.SHA256(s).toString(_hmacSha2.default.enc.Hex);
	    }
	  }, {
	    key: '_parseOptions',
	    value: function _parseOptions(incomingOptions) {
	      var options = incomingOptions || {};
	      if (!options.hasOwnProperty('encryptKey')) options.encryptKey = this._defaultOptions.encryptKey;
	      if (!options.hasOwnProperty('keyEncoding')) options.keyEncoding = this._defaultOptions.keyEncoding;
	      if (!options.hasOwnProperty('keyLength')) options.keyLength = this._defaultOptions.keyLength;
	      if (!options.hasOwnProperty('mode')) options.mode = this._defaultOptions.mode;

	      if (this._allowedKeyEncodings.indexOf(options.keyEncoding.toLowerCase()) === -1) {
	        options.keyEncoding = this._defaultOptions.keyEncoding;
	      }

	      if (this._allowedKeyLengths.indexOf(parseInt(options.keyLength, 10)) === -1) {
	        options.keyLength = this._defaultOptions.keyLength;
	      }

	      if (this._allowedModes.indexOf(options.mode.toLowerCase()) === -1) {
	        options.mode = this._defaultOptions.mode;
	      }

	      return options;
	    }
	  }, {
	    key: '_decodeKey',
	    value: function _decodeKey(key, options) {
	      if (options.keyEncoding === 'base64') {
	        return _hmacSha2.default.enc.Base64.parse(key);
	      } else if (options.keyEncoding === 'hex') {
	        return _hmacSha2.default.enc.Hex.parse(key);
	      } else {
	        return key;
	      }
	    }
	  }, {
	    key: '_getPaddedKey',
	    value: function _getPaddedKey(key, options) {
	      key = this._decodeKey(key, options);
	      if (options.encryptKey) {
	        return _hmacSha2.default.enc.Utf8.parse(this.SHA256(key).slice(0, 32));
	      } else {
	        return key;
	      }
	    }
	  }, {
	    key: '_getMode',
	    value: function _getMode(options) {
	      if (options.mode === 'ecb') {
	        return _hmacSha2.default.mode.ECB;
	      } else {
	        return _hmacSha2.default.mode.CBC;
	      }
	    }
	  }, {
	    key: '_getIV',
	    value: function _getIV(options) {
	      return options.mode === 'cbc' ? _hmacSha2.default.enc.Utf8.parse(this._iv) : null;
	    }
	  }, {
	    key: 'encrypt',
	    value: function encrypt(data, options) {
	      if (!this._config.cipherKey) return data;
	      options = this._parseOptions(options);
	      var iv = this._getIV(options);
	      var mode = this._getMode(options);
	      var cipherKey = this._getPaddedKey(this._config.cipherKey, options);
	      var encryptedHexArray = _hmacSha2.default.AES.encrypt(data, cipherKey, { iv: iv, mode: mode }).ciphertext;
	      var base64Encrypted = encryptedHexArray.toString(_hmacSha2.default.enc.Base64);
	      return base64Encrypted || data;
	    }
	  }, {
	    key: 'decrypt',
	    value: function decrypt(data, options) {
	      if (!this._config.cipherKey) return data;
	      options = this._parseOptions(options);
	      var iv = this._getIV(options);
	      var mode = this._getMode(options);
	      var cipherKey = this._getPaddedKey(this._config.cipherKey, options);
	      try {
	        var ciphertext = _hmacSha2.default.enc.Base64.parse(data);
	        var plainJSON = _hmacSha2.default.AES.decrypt({ ciphertext: ciphertext }, cipherKey, { iv: iv, mode: mode }).toString(_hmacSha2.default.enc.Utf8);
	        var plaintext = JSON.parse(plainJSON);
	        return plaintext;
	      } catch (e) {
	        return null;
	      }
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;
	module.exports = exports['default'];
	//# sourceMappingURL=index.js.map


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _uuid = __webpack_require__(2);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _flow_interfaces = __webpack_require__(13);

	var _package = __webpack_require__(14);

	var _package2 = _interopRequireDefault(_package);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class(_ref) {
	    var setup = _ref.setup;
	    var db = _ref.db;

	    _classCallCheck(this, _class);

	    this._db = db;

	    this.instanceId = _uuid2.default.v4();
	    this.secretKey = setup.secretKey;
	    this.subscribeKey = setup.subscribeKey;
	    this.publishKey = setup.publishKey;
	    this.sdkFamily = setup.sdkFamily;
	    this.partnerId = setup.partnerId;
	    this.setAuthKey(setup.authKey);
	    this.setCipherKey(setup.cipherKey);

	    this.setFilterExpression(setup.filterExpression);

	    this.origin = setup.origin || 'pubsub.pubnub.com';
	    this.secure = setup.ssl || false;

	    if (typeof location !== 'undefined' && location.protocol === 'https:') {
	      this.secure = true;
	    }

	    this.logVerbosity = setup.logVerbosity || false;
	    this.suppressLeaveEvents = setup.suppressLeaveEvents || false;

	    this.announceFailedHeartbeats = setup.announceFailedHeartbeats || true;
	    this.announceSuccessfulHeartbeats = setup.announceSuccessfulHeartbeats || false;

	    this.useInstanceId = setup.useInstanceId || false;
	    this.useRequestId = setup.useRequestId || false;

	    this.setTransactionTimeout(setup.transactionalRequestTimeout || 15 * 1000);

	    this.setSubscribeTimeout(setup.subscribeRequestTimeout || 310 * 1000);

	    this.setSendBeaconConfig(setup.useSendBeacon || true);

	    this.setPresenceTimeout(setup.presenceTimeout || 300);

	    if (setup.heartbeatInterval) {
	      this.setHeartbeatInterval(setup.heartbeatInterval);
	    }

	    this.setUUID(this._decideUUID(setup.uuid));
	  }

	  _createClass(_class, [{
	    key: 'getAuthKey',
	    value: function getAuthKey() {
	      return this.authKey;
	    }
	  }, {
	    key: 'setAuthKey',
	    value: function setAuthKey(val) {
	      this.authKey = val;return this;
	    }
	  }, {
	    key: 'setCipherKey',
	    value: function setCipherKey(val) {
	      this.cipherKey = val;return this;
	    }
	  }, {
	    key: 'getUUID',
	    value: function getUUID() {
	      return this.UUID;
	    }
	  }, {
	    key: 'setUUID',
	    value: function setUUID(val) {
	      if (this._db && this._db.set) this._db.set(this.subscribeKey + 'uuid', val);
	      this.UUID = val;
	      return this;
	    }
	  }, {
	    key: 'getFilterExpression',
	    value: function getFilterExpression() {
	      return this.filterExpression;
	    }
	  }, {
	    key: 'setFilterExpression',
	    value: function setFilterExpression(val) {
	      this.filterExpression = val;return this;
	    }
	  }, {
	    key: 'getPresenceTimeout',
	    value: function getPresenceTimeout() {
	      return this._presenceTimeout;
	    }
	  }, {
	    key: 'setPresenceTimeout',
	    value: function setPresenceTimeout(val) {
	      this._presenceTimeout = val;
	      this.setHeartbeatInterval(this._presenceTimeout / 2 - 1);
	      return this;
	    }
	  }, {
	    key: 'getHeartbeatInterval',
	    value: function getHeartbeatInterval() {
	      return this._heartbeatInterval;
	    }
	  }, {
	    key: 'setHeartbeatInterval',
	    value: function setHeartbeatInterval(val) {
	      this._heartbeatInterval = val;return this;
	    }
	  }, {
	    key: 'getSubscribeTimeout',
	    value: function getSubscribeTimeout() {
	      return this._subscribeRequestTimeout;
	    }
	  }, {
	    key: 'setSubscribeTimeout',
	    value: function setSubscribeTimeout(val) {
	      this._subscribeRequestTimeout = val;return this;
	    }
	  }, {
	    key: 'getTransactionTimeout',
	    value: function getTransactionTimeout() {
	      return this._transactionalRequestTimeout;
	    }
	  }, {
	    key: 'setTransactionTimeout',
	    value: function setTransactionTimeout(val) {
	      this._transactionalRequestTimeout = val;return this;
	    }
	  }, {
	    key: 'isSendBeaconEnabled',
	    value: function isSendBeaconEnabled() {
	      return this._useSendBeacon;
	    }
	  }, {
	    key: 'setSendBeaconConfig',
	    value: function setSendBeaconConfig(val) {
	      this._useSendBeacon = val;return this;
	    }
	  }, {
	    key: 'getVersion',
	    value: function getVersion() {
	      return _package2.default.version;
	    }
	  }, {
	    key: '_decideUUID',
	    value: function _decideUUID(providedUUID) {
	      if (providedUUID) {
	        return providedUUID;
	      }

	      if (this._db && this._db.get && this._db.get(this.subscribeKey + 'uuid')) {
	        return this._db.get(this.subscribeKey + 'uuid');
	      }

	      return _uuid2.default.v4();
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;
	module.exports = exports['default'];
	//# sourceMappingURL=config.js.map


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {};
	//# sourceMappingURL=flow_interfaces.js.map


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
		"name": "pubnub",
		"preferGlobal": false,
		"version": "4.0.5",
		"author": "PubNub <support@pubnub.com>",
		"description": "Publish & Subscribe Real-time Messaging with PubNub",
		"bin": {},
		"scripts": {
			"codecov": "cat coverage/lcov.info | codecov"
		},
		"main": "./lib/node/index.js",
		"react-native": "./lib/node/index.js",
		"browser": "./dist/web/pubnub.min.js",
		"repository": {
			"type": "git",
			"url": "git://github.com/pubnub/javascript.git"
		},
		"keywords": [
			"cloud",
			"publish",
			"subscribe",
			"websockets",
			"comet",
			"bosh",
			"xmpp",
			"real-time",
			"messaging"
		],
		"dependencies": {
			"superagent": "^2.0.0",
			"uuid": "^2.0.2"
		},
		"noAnalyze": false,
		"devDependencies": {
			"babel-core": "^6.10.4",
			"babel-eslint": "6.1.0",
			"babel-plugin-add-module-exports": "^0.2.1",
			"babel-plugin-transform-class-properties": "^6.10.2",
			"babel-plugin-transform-flow-strip-types": "^6.8.0",
			"babel-preset-es2015": "^6.9.0",
			"babel-register": "^6.9.0",
			"chai": "^3.5.0",
			"eslint-config-airbnb": "9.0.1",
			"eslint-plugin-flowtype": "2.3.1",
			"eslint-plugin-import": "^1.9.2",
			"eslint-plugin-mocha": "3.0.0",
			"eslint-plugin-react": "5.2.2",
			"flow-bin": "^0.29.0",
			"gulp": "^3.9.1",
			"gulp-babel": "^6.1.2",
			"gulp-clean": "^0.3.2",
			"gulp-eslint": "^2.0.0",
			"gulp-exec": "^2.1.2",
			"gulp-flowtype": "^0.4.9",
			"gulp-gzip": "^1.4.0",
			"gulp-istanbul": "^1.0.0",
			"gulp-mocha": "^2.2.0",
			"gulp-rename": "^1.2.2",
			"gulp-sourcemaps": "^1.6.0",
			"gulp-uglify": "^1.5.4",
			"imports-loader": "0.6.5",
			"isparta": "^4.0.0",
			"json-loader": "0.5.4",
			"karma": "1.1.1",
			"karma-babel-preprocessor": "^6.0.1",
			"karma-chai": "0.1.0",
			"karma-chrome-launcher": "^1.0.1",
			"karma-mocha": "^1.1.1",
			"karma-phantomjs-launcher": "1.0.1",
			"karma-spec-reporter": "0.0.26",
			"mocha": "2.5.3",
			"nock": "^8.0.0",
			"phantomjs-prebuilt": "2.1.7",
			"remap-istanbul": "^0.6.4",
			"run-sequence": "^1.2.1",
			"sinon": "^1.17.4",
			"stats-webpack-plugin": "^0.4.0",
			"uglify-js": "^2.6.4",
			"underscore": "^1.8.3",
			"webpack": "^1.13.1",
			"webpack-dev-server": "1.14.1",
			"webpack-stream": "^3.2.0"
		},
		"bundleDependencies": [],
		"license": "MIT",
		"engine": {
			"node": ">=0.8"
		}
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	var CryptoJS = CryptoJS || function (h, s) {
	  var f = {},
	      g = f.lib = {},
	      q = function q() {},
	      m = g.Base = { extend: function extend(a) {
	      q.prototype = this;var c = new q();a && c.mixIn(a);c.hasOwnProperty("init") || (c.init = function () {
	        c.$super.init.apply(this, arguments);
	      });c.init.prototype = c;c.$super = this;return c;
	    }, create: function create() {
	      var a = this.extend();a.init.apply(a, arguments);return a;
	    }, init: function init() {}, mixIn: function mixIn(a) {
	      for (var c in a) {
	        a.hasOwnProperty(c) && (this[c] = a[c]);
	      }a.hasOwnProperty("toString") && (this.toString = a.toString);
	    }, clone: function clone() {
	      return this.init.prototype.extend(this);
	    } },
	      r = g.WordArray = m.extend({ init: function init(a, c) {
	      a = this.words = a || [];this.sigBytes = c != s ? c : 4 * a.length;
	    }, toString: function toString(a) {
	      return (a || k).stringify(this);
	    }, concat: function concat(a) {
	      var c = this.words,
	          d = a.words,
	          b = this.sigBytes;a = a.sigBytes;this.clamp();if (b % 4) for (var e = 0; e < a; e++) {
	        c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4);
	      } else if (65535 < d.length) for (e = 0; e < a; e += 4) {
	        c[b + e >>> 2] = d[e >>> 2];
	      } else c.push.apply(c, d);this.sigBytes += a;return this;
	    }, clamp: function clamp() {
	      var a = this.words,
	          c = this.sigBytes;a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);a.length = h.ceil(c / 4);
	    }, clone: function clone() {
	      var a = m.clone.call(this);a.words = this.words.slice(0);return a;
	    }, random: function random(a) {
	      for (var c = [], d = 0; d < a; d += 4) {
	        c.push(4294967296 * h.random() | 0);
	      }return new r.init(c, a);
	    } }),
	      l = f.enc = {},
	      k = l.Hex = { stringify: function stringify(a) {
	      var c = a.words;a = a.sigBytes;for (var d = [], b = 0; b < a; b++) {
	        var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;d.push((e >>> 4).toString(16));d.push((e & 15).toString(16));
	      }return d.join("");
	    }, parse: function parse(a) {
	      for (var c = a.length, d = [], b = 0; b < c; b += 2) {
	        d[b >>> 3] |= parseInt(a.substr(b, 2), 16) << 24 - 4 * (b % 8);
	      }return new r.init(d, c / 2);
	    } },
	      n = l.Latin1 = { stringify: function stringify(a) {
	      var c = a.words;a = a.sigBytes;for (var d = [], b = 0; b < a; b++) {
	        d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));
	      }return d.join("");
	    }, parse: function parse(a) {
	      for (var c = a.length, d = [], b = 0; b < c; b++) {
	        d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);
	      }return new r.init(d, c);
	    } },
	      j = l.Utf8 = { stringify: function stringify(a) {
	      try {
	        return decodeURIComponent(escape(n.stringify(a)));
	      } catch (c) {
	        throw Error("Malformed UTF-8 data");
	      }
	    }, parse: function parse(a) {
	      return n.parse(unescape(encodeURIComponent(a)));
	    } },
	      u = g.BufferedBlockAlgorithm = m.extend({ reset: function reset() {
	      this._data = new r.init();this._nDataBytes = 0;
	    }, _append: function _append(a) {
	      "string" == typeof a && (a = j.parse(a));this._data.concat(a);this._nDataBytes += a.sigBytes;
	    }, _process: function _process(a) {
	      var c = this._data,
	          d = c.words,
	          b = c.sigBytes,
	          e = this.blockSize,
	          f = b / (4 * e),
	          f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);a = f * e;b = h.min(4 * a, b);if (a) {
	        for (var g = 0; g < a; g += e) {
	          this._doProcessBlock(d, g);
	        }g = d.splice(0, a);c.sigBytes -= b;
	      }return new r.init(g, b);
	    }, clone: function clone() {
	      var a = m.clone.call(this);
	      a._data = this._data.clone();return a;
	    }, _minBufferSize: 0 });g.Hasher = u.extend({ cfg: m.extend(), init: function init(a) {
	      this.cfg = this.cfg.extend(a);this.reset();
	    }, reset: function reset() {
	      u.reset.call(this);this._doReset();
	    }, update: function update(a) {
	      this._append(a);this._process();return this;
	    }, finalize: function finalize(a) {
	      a && this._append(a);return this._doFinalize();
	    }, blockSize: 16, _createHelper: function _createHelper(a) {
	      return function (c, d) {
	        return new a.init(d).finalize(c);
	      };
	    }, _createHmacHelper: function _createHmacHelper(a) {
	      return function (c, d) {
	        return new t.HMAC.init(a, d).finalize(c);
	      };
	    } });var t = f.algo = {};return f;
	}(Math);

	(function (h) {
	  for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function l(a) {
	    return 4294967296 * (a - (a | 0)) | 0;
	  }, k = 2, n = 0; 64 > n;) {
	    var j;a: {
	      j = k;for (var u = h.sqrt(j), t = 2; t <= u; t++) {
	        if (!(j % t)) {
	          j = !1;break a;
	        }
	      }j = !0;
	    }j && (8 > n && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);k++;
	  }var a = [],
	      f = f.SHA256 = q.extend({ _doReset: function _doReset() {
	      this._hash = new g.init(m.slice(0));
	    }, _doProcessBlock: function _doProcessBlock(c, d) {
	      for (var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; 64 > p; p++) {
	        if (16 > p) a[p] = c[d + p] | 0;else {
	          var k = a[p - 15],
	              l = a[p - 2];a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16];
	        }k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);q = n;n = m;m = h;h = j + k | 0;j = g;g = f;f = e;e = k + l | 0;
	      }b[0] = b[0] + e | 0;b[1] = b[1] + f | 0;b[2] = b[2] + g | 0;b[3] = b[3] + j | 0;b[4] = b[4] + h | 0;b[5] = b[5] + m | 0;b[6] = b[6] + n | 0;b[7] = b[7] + q | 0;
	    }, _doFinalize: function _doFinalize() {
	      var a = this._data,
	          d = a.words,
	          b = 8 * this._nDataBytes,
	          e = 8 * a.sigBytes;
	      d[e >>> 5] |= 128 << 24 - e % 32;d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);d[(e + 64 >>> 9 << 4) + 15] = b;a.sigBytes = 4 * d.length;this._process();return this._hash;
	    }, clone: function clone() {
	      var a = q.clone.call(this);a._hash = this._hash.clone();return a;
	    } });s.SHA256 = q._createHelper(f);s.HmacSHA256 = q._createHmacHelper(f);
	})(Math);

	(function () {
	  var h = CryptoJS,
	      s = h.enc.Utf8;h.algo.HMAC = h.lib.Base.extend({ init: function init(f, g) {
	      f = this._hasher = new f.init();"string" == typeof g && (g = s.parse(g));var h = f.blockSize,
	          m = 4 * h;g.sigBytes > m && (g = f.finalize(g));g.clamp();for (var r = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r.words, n = l.words, j = 0; j < h; j++) {
	        k[j] ^= 1549556828, n[j] ^= 909522486;
	      }r.sigBytes = l.sigBytes = m;this.reset();
	    }, reset: function reset() {
	      var f = this._hasher;f.reset();f.update(this._iKey);
	    }, update: function update(f) {
	      this._hasher.update(f);return this;
	    }, finalize: function finalize(f) {
	      var g = this._hasher;f = g.finalize(f);g.reset();return g.finalize(this._oKey.clone().concat(f));
	    } });
	})();

	(function () {
	  var u = CryptoJS,
	      p = u.lib.WordArray;u.enc.Base64 = { stringify: function stringify(d) {
	      var l = d.words,
	          p = d.sigBytes,
	          t = this._map;d.clamp();d = [];for (var r = 0; r < p; r += 3) {
	        for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + 0.75 * v < p; v++) {
	          d.push(t.charAt(w >>> 6 * (3 - v) & 63));
	        }
	      }if (l = t.charAt(64)) for (; d.length % 4;) {
	        d.push(l);
	      }return d.join("");
	    }, parse: function parse(d) {
	      var l = d.length,
	          s = this._map,
	          t = s.charAt(64);t && (t = d.indexOf(t), -1 != t && (l = t));for (var t = [], r = 0, w = 0; w < l; w++) {
	        if (w % 4) {
	          var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
	              b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);r++;
	        }
	      }return p.create(t, r);
	    }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
	})();

	(function (u) {
	  function p(b, n, a, c, e, j, k) {
	    b = b + (n & a | ~n & c) + e + k;return (b << j | b >>> 32 - j) + n;
	  }function d(b, n, a, c, e, j, k) {
	    b = b + (n & c | a & ~c) + e + k;return (b << j | b >>> 32 - j) + n;
	  }function l(b, n, a, c, e, j, k) {
	    b = b + (n ^ a ^ c) + e + k;return (b << j | b >>> 32 - j) + n;
	  }function s(b, n, a, c, e, j, k) {
	    b = b + (a ^ (n | ~c)) + e + k;return (b << j | b >>> 32 - j) + n;
	  }for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) {
	    b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
	  }r = r.MD5 = v.extend({ _doReset: function _doReset() {
	      this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878]);
	    },
	    _doProcessBlock: function _doProcessBlock(q, n) {
	      for (var a = 0; 16 > a; a++) {
	        var c = n + a,
	            e = q[c];q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
	      }var a = this._hash.words,
	          c = q[n + 0],
	          e = q[n + 1],
	          j = q[n + 2],
	          k = q[n + 3],
	          z = q[n + 4],
	          r = q[n + 5],
	          t = q[n + 6],
	          w = q[n + 7],
	          v = q[n + 8],
	          A = q[n + 9],
	          B = q[n + 10],
	          C = q[n + 11],
	          u = q[n + 12],
	          D = q[n + 13],
	          E = q[n + 14],
	          x = q[n + 15],
	          f = a[0],
	          m = a[1],
	          g = a[2],
	          h = a[3],
	          f = p(f, m, g, h, c, 7, b[0]),
	          h = p(h, f, m, g, e, 12, b[1]),
	          g = p(g, h, f, m, j, 17, b[2]),
	          m = p(m, g, h, f, k, 22, b[3]),
	          f = p(f, m, g, h, z, 7, b[4]),
	          h = p(h, f, m, g, r, 12, b[5]),
	          g = p(g, h, f, m, t, 17, b[6]),
	          m = p(m, g, h, f, w, 22, b[7]),
	          f = p(f, m, g, h, v, 7, b[8]),
	          h = p(h, f, m, g, A, 12, b[9]),
	          g = p(g, h, f, m, B, 17, b[10]),
	          m = p(m, g, h, f, C, 22, b[11]),
	          f = p(f, m, g, h, u, 7, b[12]),
	          h = p(h, f, m, g, D, 12, b[13]),
	          g = p(g, h, f, m, E, 17, b[14]),
	          m = p(m, g, h, f, x, 22, b[15]),
	          f = d(f, m, g, h, e, 5, b[16]),
	          h = d(h, f, m, g, t, 9, b[17]),
	          g = d(g, h, f, m, C, 14, b[18]),
	          m = d(m, g, h, f, c, 20, b[19]),
	          f = d(f, m, g, h, r, 5, b[20]),
	          h = d(h, f, m, g, B, 9, b[21]),
	          g = d(g, h, f, m, x, 14, b[22]),
	          m = d(m, g, h, f, z, 20, b[23]),
	          f = d(f, m, g, h, A, 5, b[24]),
	          h = d(h, f, m, g, E, 9, b[25]),
	          g = d(g, h, f, m, k, 14, b[26]),
	          m = d(m, g, h, f, v, 20, b[27]),
	          f = d(f, m, g, h, D, 5, b[28]),
	          h = d(h, f, m, g, j, 9, b[29]),
	          g = d(g, h, f, m, w, 14, b[30]),
	          m = d(m, g, h, f, u, 20, b[31]),
	          f = l(f, m, g, h, r, 4, b[32]),
	          h = l(h, f, m, g, v, 11, b[33]),
	          g = l(g, h, f, m, C, 16, b[34]),
	          m = l(m, g, h, f, E, 23, b[35]),
	          f = l(f, m, g, h, e, 4, b[36]),
	          h = l(h, f, m, g, z, 11, b[37]),
	          g = l(g, h, f, m, w, 16, b[38]),
	          m = l(m, g, h, f, B, 23, b[39]),
	          f = l(f, m, g, h, D, 4, b[40]),
	          h = l(h, f, m, g, c, 11, b[41]),
	          g = l(g, h, f, m, k, 16, b[42]),
	          m = l(m, g, h, f, t, 23, b[43]),
	          f = l(f, m, g, h, A, 4, b[44]),
	          h = l(h, f, m, g, u, 11, b[45]),
	          g = l(g, h, f, m, x, 16, b[46]),
	          m = l(m, g, h, f, j, 23, b[47]),
	          f = s(f, m, g, h, c, 6, b[48]),
	          h = s(h, f, m, g, w, 10, b[49]),
	          g = s(g, h, f, m, E, 15, b[50]),
	          m = s(m, g, h, f, r, 21, b[51]),
	          f = s(f, m, g, h, u, 6, b[52]),
	          h = s(h, f, m, g, k, 10, b[53]),
	          g = s(g, h, f, m, B, 15, b[54]),
	          m = s(m, g, h, f, e, 21, b[55]),
	          f = s(f, m, g, h, v, 6, b[56]),
	          h = s(h, f, m, g, x, 10, b[57]),
	          g = s(g, h, f, m, t, 15, b[58]),
	          m = s(m, g, h, f, D, 21, b[59]),
	          f = s(f, m, g, h, z, 6, b[60]),
	          h = s(h, f, m, g, C, 10, b[61]),
	          g = s(g, h, f, m, j, 15, b[62]),
	          m = s(m, g, h, f, A, 21, b[63]);a[0] = a[0] + f | 0;a[1] = a[1] + m | 0;a[2] = a[2] + g | 0;a[3] = a[3] + h | 0;
	    }, _doFinalize: function _doFinalize() {
	      var b = this._data,
	          n = b.words,
	          a = 8 * this._nDataBytes,
	          c = 8 * b.sigBytes;n[c >>> 5] |= 128 << 24 - c % 32;var e = u.floor(a / 4294967296);n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;b.sigBytes = 4 * (n.length + 1);this._process();b = this._hash;n = b.words;for (a = 0; 4 > a; a++) {
	        c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
	      }return b;
	    }, clone: function clone() {
	      var b = v.clone.call(this);b._hash = this._hash.clone();return b;
	    } });t.MD5 = v._createHelper(r);t.HmacMD5 = v._createHmacHelper(r);
	})(Math);
	(function () {
	  var u = CryptoJS,
	      p = u.lib,
	      d = p.Base,
	      l = p.WordArray,
	      p = u.algo,
	      s = p.EvpKDF = d.extend({ cfg: d.extend({ keySize: 4, hasher: p.MD5, iterations: 1 }), init: function init(d) {
	      this.cfg = this.cfg.extend(d);
	    }, compute: function compute(d, r) {
	      for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
	        n && s.update(n);var n = s.update(d).finalize(r);s.reset();for (var a = 1; a < p; a++) {
	          n = s.finalize(n), s.reset();
	        }b.concat(n);
	      }b.sigBytes = 4 * q;return b;
	    } });u.EvpKDF = function (d, l, p) {
	    return s.create(p).compute(d, l);
	  };
	})();

	CryptoJS.lib.Cipher || function (u) {
	  var p = CryptoJS,
	      d = p.lib,
	      l = d.Base,
	      s = d.WordArray,
	      t = d.BufferedBlockAlgorithm,
	      r = p.enc.Base64,
	      w = p.algo.EvpKDF,
	      v = d.Cipher = t.extend({ cfg: l.extend(), createEncryptor: function createEncryptor(e, a) {
	      return this.create(this._ENC_XFORM_MODE, e, a);
	    }, createDecryptor: function createDecryptor(e, a) {
	      return this.create(this._DEC_XFORM_MODE, e, a);
	    }, init: function init(e, a, b) {
	      this.cfg = this.cfg.extend(b);this._xformMode = e;this._key = a;this.reset();
	    }, reset: function reset() {
	      t.reset.call(this);this._doReset();
	    }, process: function process(e) {
	      this._append(e);return this._process();
	    },
	    finalize: function finalize(e) {
	      e && this._append(e);return this._doFinalize();
	    }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function _createHelper(e) {
	      return { encrypt: function encrypt(b, k, d) {
	          return ("string" == typeof k ? c : a).encrypt(e, b, k, d);
	        }, decrypt: function decrypt(b, k, d) {
	          return ("string" == typeof k ? c : a).decrypt(e, b, k, d);
	        } };
	    } });d.StreamCipher = v.extend({ _doFinalize: function _doFinalize() {
	      return this._process(!0);
	    }, blockSize: 1 });var b = p.mode = {},
	      x = function x(e, a, b) {
	    var c = this._iv;c ? this._iv = u : c = this._prevBlock;for (var d = 0; d < b; d++) {
	      e[a + d] ^= c[d];
	    }
	  },
	      q = (d.BlockCipherMode = l.extend({ createEncryptor: function createEncryptor(e, a) {
	      return this.Encryptor.create(e, a);
	    }, createDecryptor: function createDecryptor(e, a) {
	      return this.Decryptor.create(e, a);
	    }, init: function init(e, a) {
	      this._cipher = e;this._iv = a;
	    } })).extend();q.Encryptor = q.extend({ processBlock: function processBlock(e, a) {
	      var b = this._cipher,
	          c = b.blockSize;x.call(this, e, a, c);b.encryptBlock(e, a);this._prevBlock = e.slice(a, a + c);
	    } });q.Decryptor = q.extend({ processBlock: function processBlock(e, a) {
	      var b = this._cipher,
	          c = b.blockSize,
	          d = e.slice(a, a + c);b.decryptBlock(e, a);x.call(this, e, a, c);this._prevBlock = d;
	    } });b = b.CBC = q;q = (p.pad = {}).Pkcs7 = { pad: function pad(a, b) {
	      for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) {
	        l.push(d);
	      }c = s.create(l, c);a.concat(c);
	    }, unpad: function unpad(a) {
	      a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255;
	    } };d.BlockCipher = v.extend({ cfg: v.cfg.extend({ mode: b, padding: q }), reset: function reset() {
	      v.reset.call(this);var a = this.cfg,
	          b = a.iv,
	          a = a.mode;if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor;else c = a.createDecryptor, this._minBufferSize = 1;this._mode = c.call(a, this, b && b.words);
	    }, _doProcessBlock: function _doProcessBlock(a, b) {
	      this._mode.processBlock(a, b);
	    }, _doFinalize: function _doFinalize() {
	      var a = this.cfg.padding;if (this._xformMode == this._ENC_XFORM_MODE) {
	        a.pad(this._data, this.blockSize);var b = this._process(!0);
	      } else b = this._process(!0), a.unpad(b);return b;
	    }, blockSize: 4 });var n = d.CipherParams = l.extend({ init: function init(a) {
	      this.mixIn(a);
	    }, toString: function toString(a) {
	      return (a || this.formatter).stringify(this);
	    } }),
	      b = (p.format = {}).OpenSSL = { stringify: function stringify(a) {
	      var b = a.ciphertext;a = a.salt;return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r);
	    }, parse: function parse(a) {
	      a = r.parse(a);var b = a.words;if (1398893684 == b[0] && 1701076831 == b[1]) {
	        var c = s.create(b.slice(2, 4));b.splice(0, 4);a.sigBytes -= 16;
	      }return n.create({ ciphertext: a, salt: c });
	    } },
	      a = d.SerializableCipher = l.extend({ cfg: l.extend({ format: b }), encrypt: function encrypt(a, b, c, d) {
	      d = this.cfg.extend(d);var l = a.createEncryptor(c, d);b = l.finalize(b);l = l.cfg;return n.create({ ciphertext: b, key: c, iv: l.iv, algorithm: a, mode: l.mode, padding: l.padding, blockSize: a.blockSize, formatter: d.format });
	    },
	    decrypt: function decrypt(a, b, c, d) {
	      d = this.cfg.extend(d);b = this._parse(b, d.format);return a.createDecryptor(c, d).finalize(b.ciphertext);
	    }, _parse: function _parse(a, b) {
	      return "string" == typeof a ? b.parse(a, this) : a;
	    } }),
	      p = (p.kdf = {}).OpenSSL = { execute: function execute(a, b, c, d) {
	      d || (d = s.random(8));a = w.create({ keySize: b + c }).compute(a, d);c = s.create(a.words.slice(b), 4 * c);a.sigBytes = 4 * b;return n.create({ key: a, iv: c, salt: d });
	    } },
	      c = d.PasswordBasedCipher = a.extend({ cfg: a.cfg.extend({ kdf: p }), encrypt: function encrypt(b, c, d, l) {
	      l = this.cfg.extend(l);d = l.kdf.execute(d, b.keySize, b.ivSize);l.iv = d.iv;b = a.encrypt.call(this, b, c, d.key, l);b.mixIn(d);return b;
	    }, decrypt: function decrypt(b, c, d, l) {
	      l = this.cfg.extend(l);c = this._parse(c, l.format);d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);l.iv = d.iv;return a.decrypt.call(this, b, c, d.key, l);
	    } });
	}();

	(function () {
	  for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) {
	    a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
	  }for (var e = 0, j = 0, c = 0; 256 > c; c++) {
	    var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
	        k = k >>> 8 ^ k & 255 ^ 99;l[e] = k;s[k] = e;var z = a[e],
	        F = a[z],
	        G = a[F],
	        y = 257 * a[k] ^ 16843008 * k;t[e] = y << 24 | y >>> 8;r[e] = y << 16 | y >>> 16;w[e] = y << 8 | y >>> 24;v[e] = y;y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;b[k] = y << 24 | y >>> 8;x[k] = y << 16 | y >>> 16;q[k] = y << 8 | y >>> 24;n[k] = y;e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1;
	  }var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
	      d = d.AES = p.extend({ _doReset: function _doReset() {
	      for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], j = 0; j < a; j++) {
	        if (j < d) e[j] = c[j];else {
	          var k = e[j - 1];j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);e[j] = e[j - d] ^ k;
	        }
	      }c = this._invKeySchedule = [];for (d = 0; d < a; d++) {
	        j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]];
	      }
	    }, encryptBlock: function encryptBlock(a, b) {
	      this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l);
	    }, decryptBlock: function decryptBlock(a, c) {
	      var d = a[c + 1];a[c + 1] = a[c + 3];a[c + 3] = d;this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s);d = a[c + 1];a[c + 1] = a[c + 3];a[c + 3] = d;
	    }, _doCryptBlock: function _doCryptBlock(a, b, c, d, e, j, l, f) {
	      for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) {
	        var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
	            s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
	            t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
	            n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
	            g = q,
	            h = s,
	            k = t;
	      }q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];a[b] = q;a[b + 1] = s;a[b + 2] = t;a[b + 3] = n;
	    }, keySize: 8 });u.AES = p._createHelper(d);
	})();

	CryptoJS.mode.ECB = function () {
	  var ECB = CryptoJS.lib.BlockCipherMode.extend();

	  ECB.Encryptor = ECB.extend({
	    processBlock: function processBlock(words, offset) {
	      this._cipher.encryptBlock(words, offset);
	    }
	  });

	  ECB.Decryptor = ECB.extend({
	    processBlock: function processBlock(words, offset) {
	      this._cipher.decryptBlock(words, offset);
	    }
	  });

	  return ECB;
	}();

	module.exports = CryptoJS;
	//# sourceMappingURL=hmac-sha256.js.map


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _subscribe = __webpack_require__(17);

	var _subscribe2 = _interopRequireDefault(_subscribe);

	var _time = __webpack_require__(18);

	var _time2 = _interopRequireDefault(_time);

	var _cryptography = __webpack_require__(11);

	var _cryptography2 = _interopRequireDefault(_cryptography);

	var _config = __webpack_require__(12);

	var _config2 = _interopRequireDefault(_config);

	var _listener_manager = __webpack_require__(19);

	var _listener_manager2 = _interopRequireDefault(_listener_manager);

	var _reconnection_manager = __webpack_require__(20);

	var _reconnection_manager2 = _interopRequireDefault(_reconnection_manager);

	var _utils = __webpack_require__(21);

	var _utils2 = _interopRequireDefault(_utils);

	var _flow_interfaces = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class(_ref) {
	    var _this = this;

	    var subscribeEndpoint = _ref.subscribeEndpoint;
	    var leaveEndpoint = _ref.leaveEndpoint;
	    var heartbeatEndpoint = _ref.heartbeatEndpoint;
	    var setStateEndpoint = _ref.setStateEndpoint;
	    var timeEndpoint = _ref.timeEndpoint;
	    var config = _ref.config;
	    var crypto = _ref.crypto;
	    var listenerManager = _ref.listenerManager;

	    _classCallCheck(this, _class);

	    this._listenerManager = listenerManager;
	    this._config = config;

	    this._leaveEndpoint = leaveEndpoint;
	    this._heartbeatEndpoint = heartbeatEndpoint;
	    this._setStateEndpoint = setStateEndpoint;
	    this._subscribeEndpoint = subscribeEndpoint;

	    this._crypto = crypto;

	    this._channels = {};
	    this._presenceChannels = {};

	    this._channelGroups = {};
	    this._presenceChannelGroups = {};

	    this._timetoken = 0;
	    this._subscriptionStatusAnnounced = false;

	    var onConnectionStateChange = function onConnectionStateChange(isConnected) {
	      _this.reconnect();
	      _this._subscriptionStatusAnnounced = true;

	      if (isConnected) {
	        _this._listenerManager.announceConnectionRestored();
	        _this.reconnect();
	      } else if (!isConnected) {
	        _this._listenerManager.announceNetworkIssues();
	        _this.disconnect();
	      }
	    };

	    this._reconnectionManager = new _reconnection_manager2.default({ timeEndpoint: timeEndpoint, onConnectionStateChange: onConnectionStateChange });
	  }

	  _createClass(_class, [{
	    key: 'adaptStateChange',
	    value: function adaptStateChange(args, callback) {
	      var _this2 = this;

	      var state = args.state;
	      var _args$channels = args.channels;
	      var channels = _args$channels === undefined ? [] : _args$channels;
	      var _args$channelGroups = args.channelGroups;
	      var channelGroups = _args$channelGroups === undefined ? [] : _args$channelGroups;


	      channels.forEach(function (channel) {
	        if (channel in _this2._channels) _this2._channels[channel].state = state;
	      });

	      channelGroups.forEach(function (channelGroup) {
	        if (channelGroup in _this2._channelGroups) _this2._channelGroups[channelGroup].state = state;
	      });

	      this._setStateEndpoint({ state: state, channels: channels, channelGroups: channelGroups }, callback);
	    }
	  }, {
	    key: 'adaptSubscribeChange',
	    value: function adaptSubscribeChange(args) {
	      var _this3 = this;

	      var timetoken = args.timetoken;
	      var _args$channels2 = args.channels;
	      var channels = _args$channels2 === undefined ? [] : _args$channels2;
	      var _args$channelGroups2 = args.channelGroups;
	      var channelGroups = _args$channelGroups2 === undefined ? [] : _args$channelGroups2;
	      var _args$withPresence = args.withPresence;
	      var withPresence = _args$withPresence === undefined ? false : _args$withPresence;


	      if (timetoken) this._timetoken = timetoken;

	      channels.forEach(function (channel) {
	        _this3._channels[channel] = { state: {} };
	        if (withPresence) _this3._presenceChannels[channel] = {};
	      });

	      channelGroups.forEach(function (channelGroup) {
	        _this3._channelGroups[channelGroup] = { state: {} };
	        if (withPresence) _this3._presenceChannelGroups[channelGroup] = {};
	      });

	      this._subscriptionStatusAnnounced = false;
	      this._reconnectionManager.startPolling();
	      this.reconnect();
	    }
	  }, {
	    key: 'adaptUnsubscribeChange',
	    value: function adaptUnsubscribeChange(args) {
	      var _this4 = this;

	      var _args$channels3 = args.channels;
	      var channels = _args$channels3 === undefined ? [] : _args$channels3;
	      var _args$channelGroups3 = args.channelGroups;
	      var channelGroups = _args$channelGroups3 === undefined ? [] : _args$channelGroups3;


	      channels.forEach(function (channel) {
	        if (channel in _this4._channels) delete _this4._channels[channel];
	        if (channel in _this4._presenceChannels) delete _this4._presenceChannels[channel];
	      });

	      channelGroups.forEach(function (channelGroup) {
	        if (channelGroup in _this4._channelGroups) delete _this4._channelGroups[channelGroup];
	        if (channelGroup in _this4._presenceChannelGroups) delete _this4._channelGroups[channelGroup];
	      });

	      if (this._config.suppressLeaveEvents === false) {
	        this._leaveEndpoint({ channels: channels, channelGroups: channelGroups }, function (status) {
	          _this4._listenerManager.announceStatus(status);
	        });
	      }

	      if (this._channels.length === 0 && this._presenceChannelGroups === 0) {
	        this._reconnectionManager.stopPolling();
	      }

	      this.reconnect();
	    }
	  }, {
	    key: 'reconnect',
	    value: function reconnect() {
	      this._startSubscribeLoop();
	      this._registerHeartbeatTimer();
	    }
	  }, {
	    key: 'disconnect',
	    value: function disconnect() {
	      this._stopSubscribeLoop();
	      this._stopHeartbeatTimer();
	    }
	  }, {
	    key: '_registerHeartbeatTimer',
	    value: function _registerHeartbeatTimer() {
	      this._stopHeartbeatTimer();
	      this._performHeartbeatLoop();
	      this._heartbeatTimer = setInterval(this._performHeartbeatLoop.bind(this), this._config.getHeartbeatInterval() * 1000);
	    }
	  }, {
	    key: '_stopHeartbeatTimer',
	    value: function _stopHeartbeatTimer() {
	      if (this._heartbeatTimer) {
	        clearInterval(this._heartbeatTimer);
	        this._heartbeatTimer = null;
	      }
	    }
	  }, {
	    key: '_performHeartbeatLoop',
	    value: function _performHeartbeatLoop() {
	      var _this5 = this;

	      var presenceChannels = Object.keys(this._channels);
	      var presenceChannelGroups = Object.keys(this._channelGroups);
	      var presenceState = {};

	      if (presenceChannels.length === 0 && presenceChannelGroups.length === 0) {
	        return;
	      }

	      presenceChannels.forEach(function (channel) {
	        var channelState = _this5._channels[channel].state;
	        if (Object.keys(channelState).length) presenceState[channel] = channelState;
	      });

	      presenceChannelGroups.forEach(function (channelGroup) {
	        var channelGroupState = _this5._channelGroups[channelGroup].state;
	        if (Object.keys(channelGroupState).length) presenceState[channelGroup] = channelGroupState;
	      });

	      var onHeartbeat = function onHeartbeat(status) {
	        if (status.error && _this5._config.announceFailedHeartbeats) {
	          _this5._listenerManager.announceStatus(status);
	        }

	        if (!status.error && _this5._config.announceSuccessfulHeartbeats) {
	          _this5._listenerManager.announceStatus(status);
	        }
	      };

	      this._heartbeatEndpoint({
	        channels: presenceChannels,
	        channelGroups: presenceChannelGroups,
	        state: presenceState }, onHeartbeat.bind(this));
	    }
	  }, {
	    key: '_startSubscribeLoop',
	    value: function _startSubscribeLoop() {
	      this._stopSubscribeLoop();
	      var channels = [];
	      var channelGroups = [];

	      Object.keys(this._channels).forEach(function (channel) {
	        return channels.push(channel);
	      });
	      Object.keys(this._presenceChannels).forEach(function (channel) {
	        return channels.push(channel + '-pnpres');
	      });

	      Object.keys(this._channelGroups).forEach(function (channelGroup) {
	        return channelGroups.push(channelGroup);
	      });
	      Object.keys(this._presenceChannelGroups).forEach(function (channelGroup) {
	        return channelGroups.push(channelGroup + '-pnpres');
	      });

	      if (channels.length === 0 && channelGroups.length === 0) {
	        return;
	      }

	      var subscribeArgs = {
	        channels: channels,
	        channelGroups: channelGroups,
	        timetoken: this._timetoken,
	        filterExpression: this._config.filterExpression,
	        region: this._region
	      };

	      this._subscribeCall = this._subscribeEndpoint(subscribeArgs, this._processSubscribeResponse.bind(this));
	    }
	  }, {
	    key: '_processSubscribeResponse',
	    value: function _processSubscribeResponse(status, payload) {
	      var _this6 = this;

	      if (status.error) {
	        if (status.category === 'PNTimeoutCategory') {
	          this._startSubscribeLoop();
	        }

	        if (status.category === 'PNNetworkIssuesCategory') {
	          this.disconnect();
	          this._reconnectionManager.startPolling();
	        }

	        return;
	      }

	      if (!this._subscriptionStatusAnnounced) {
	        var connectedAnnounce = {};
	        connectedAnnounce.category = 'PNConnectedCategory';
	        connectedAnnounce.operation = status.operation;
	        this._subscriptionStatusAnnounced = true;
	        this._listenerManager.announceStatus(connectedAnnounce);
	      }

	      payload.messages.forEach(function (message) {
	        var channel = message.channel;
	        var subscriptionMatch = message.subscriptionMatch;
	        var publishMetaData = message.publishMetaData;

	        if (channel === subscriptionMatch) {
	          subscriptionMatch = null;
	        }

	        if (_utils2.default.endsWith(message.channel, '-pnpres')) {
	          var announce = {};
	          announce.actualChannel = subscriptionMatch != null ? channel : null;
	          announce.subscribedChannel = subscriptionMatch != null ? subscriptionMatch : channel;
	          announce.action = message.payload.action;
	          announce.state = message.payload.data;
	          announce.timetoken = publishMetaData.publishTimetoken;
	          announce.occupancy = message.payload.occupancy;
	          announce.uuid = message.payload.uuid;
	          announce.timestamp = message.payload.timestamp;
	          _this6._listenerManager.announcePresence(announce);
	        } else {
	          var _announce = {};
	          _announce.actualChannel = subscriptionMatch != null ? channel : null;
	          _announce.subscribedChannel = subscriptionMatch != null ? subscriptionMatch : channel;
	          _announce.timetoken = publishMetaData.publishTimetoken;

	          if (_this6._config.cipherKey) {
	            _announce.message = _this6._crypto.decrypt(message.payload);
	          } else {
	            _announce.message = message.payload;
	          }

	          _this6._listenerManager.announceMessage(_announce);
	        }
	      });

	      this._region = payload.metadata.region;
	      this._timetoken = payload.metadata.timetoken;
	      this._startSubscribeLoop();
	    }
	  }, {
	    key: '_stopSubscribeLoop',
	    value: function _stopSubscribeLoop() {
	      if (this._subscribeCall) {
	        this._subscribeCall.abort();
	        this._subscribeCall = null;
	      }
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;
	module.exports = exports['default'];
	//# sourceMappingURL=subscription_manager.js.map


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNSubscribeOperation';
	}

	function validateParams(modules) {
	  var config = modules.config;


	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var config = modules.config;
	  var _incomingParams$chann = incomingParams.channels;
	  var channels = _incomingParams$chann === undefined ? [] : _incomingParams$chann;

	  var stringifiedChannels = channels.length > 0 ? channels.join(',') : ',';
	  return '/v2/subscribe/' + config.subscribeKey + '/' + encodeURIComponent(stringifiedChannels) + '/0';
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getSubscribeTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams(_ref2, incomingParams) {
	  var config = _ref2.config;
	  var _incomingParams$chann2 = incomingParams.channelGroups;
	  var channelGroups = _incomingParams$chann2 === undefined ? [] : _incomingParams$chann2;
	  var timetoken = incomingParams.timetoken;
	  var filterExpression = incomingParams.filterExpression;
	  var region = incomingParams.region;

	  var params = {
	    heartbeat: config.getPresenceTimeout()
	  };

	  if (channelGroups.length > 0) {
	    params['channel-group'] = channelGroups.join(',');
	  }

	  if (filterExpression && filterExpression.length > 0) {
	    params['filter-expr'] = filterExpression;
	  }

	  if (timetoken) {
	    params.tt = timetoken;
	  }

	  if (region) {
	    params.tr = region;
	  }

	  return params;
	}

	function handleResponse(modules, serverResponse) {
	  var messages = [];

	  serverResponse.m.forEach(function (rawMessage) {
	    var publishMetaData = {
	      publishTimetoken: rawMessage.p.t,
	      region: rawMessage.p.r
	    };
	    var parsedMessage = {
	      shard: parseInt(rawMessage.a, 10),
	      subscriptionMatch: rawMessage.b,
	      channel: rawMessage.c,
	      payload: rawMessage.d,
	      flags: rawMessage.f,
	      issuingClientId: rawMessage.i,
	      subscribeKey: rawMessage.k,
	      originationTimetoken: rawMessage.o,
	      publishMetaData: publishMetaData
	    };
	    messages.push(parsedMessage);
	  });

	  var metadata = {
	    timetoken: serverResponse.t.t,
	    region: serverResponse.t.r
	  };

	  return { messages: messages, metadata: metadata };
	}
	//# sourceMappingURL=subscribe.js.map


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.prepareParams = prepareParams;
	exports.isAuthSupported = isAuthSupported;
	exports.handleResponse = handleResponse;
	exports.validateParams = validateParams;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNTimeOperation';
	}

	function getURL() {
	  return '/time/0';
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function prepareParams() {
	  return {};
	}

	function isAuthSupported() {
	  return false;
	}

	function handleResponse(modules, serverResponse) {
	  return {
	    timetoken: serverResponse[0]
	  };
	}

	function validateParams() {}
	//# sourceMappingURL=time.js.map


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _flow_interfaces = __webpack_require__(13);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);

	    this._listeners = [];
	  }

	  _createClass(_class, [{
	    key: 'addListener',
	    value: function addListener(newListeners) {
	      this._listeners.push(newListeners);
	    }
	  }, {
	    key: 'removeListener',
	    value: function removeListener(deprecatedListener) {
	      var newListeners = [];

	      this._listeners.forEach(function (listener) {
	        if (listener !== deprecatedListener) newListeners.push(listener);
	      });

	      this._listeners = newListeners;
	    }
	  }, {
	    key: 'announcePresence',
	    value: function announcePresence(announce) {
	      this._listeners.forEach(function (listener) {
	        if (listener.presence) listener.presence(announce);
	      });
	    }
	  }, {
	    key: 'announceStatus',
	    value: function announceStatus(announce) {
	      this._listeners.forEach(function (listener) {
	        if (listener.status) listener.status(announce);
	      });
	    }
	  }, {
	    key: 'announceMessage',
	    value: function announceMessage(announce) {
	      this._listeners.forEach(function (listener) {
	        if (listener.message) listener.message(announce);
	      });
	    }
	  }, {
	    key: 'announceConnectionRestored',
	    value: function announceConnectionRestored() {
	      var reconnectedStatus = {};
	      reconnectedStatus.category = 'PNReconnectedCategory';
	      this.announceStatus(reconnectedStatus);
	    }
	  }, {
	    key: 'announceNetworkIssues',
	    value: function announceNetworkIssues() {
	      var disconnectedStatus = {};
	      disconnectedStatus.category = 'PNNetworkIssuesCategory';
	      this.announceStatus(disconnectedStatus);
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;
	module.exports = exports['default'];
	//# sourceMappingURL=listener_manager.js.map


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _time = __webpack_require__(18);

	var _time2 = _interopRequireDefault(_time);

	var _flow_interfaces = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class(_ref) {
	    var timeEndpoint = _ref.timeEndpoint;
	    var onConnectionStateChange = _ref.onConnectionStateChange;

	    _classCallCheck(this, _class);

	    this._timeEndpoint = timeEndpoint;
	    this._onConnectionStateChange = onConnectionStateChange;
	    this._connected = true;
	  }

	  _createClass(_class, [{
	    key: 'startPolling',
	    value: function startPolling() {
	      this._timeTimer = setInterval(this._performTimeLoop.bind(this), 6000);
	    }
	  }, {
	    key: 'stopPolling',
	    value: function stopPolling() {
	      clearInterval(this._timeTimer);
	    }
	  }, {
	    key: '_performTimeLoop',
	    value: function _performTimeLoop() {
	      var _this = this;

	      this._timeEndpoint(function (status) {
	        if (status.error && _this._connected) {
	          _this._connected = false;
	          _this._onConnectionStateChange(_this._connected);
	        } else if (!status.error && !_this._connected) {
	          _this._connected = false;
	          _this._onConnectionStateChange(_this._connected);
	        }
	      });
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;
	module.exports = exports['default'];
	//# sourceMappingURL=reconnection_manager.js.map


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	function pamEncode(str) {
	  return encodeURIComponent(str).replace(/[!'()*~]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	  });
	}

	function objectToList(o) {
	  var l = [];
	  Object.keys(o).forEach(function (key) {
	    return l.push(key);
	  });
	  return l;
	}

	function objectToListSorted(o) {
	  return objectToList(o).sort();
	}

	function signPamFromParams(params) {
	  var l = objectToListSorted(params);
	  return l.map(function (paramKey) {
	    return paramKey + '=' + pamEncode(params[paramKey]);
	  }).join('&');
	}

	module.exports = {
	  signPamFromParams: signPamFromParams,
	  endsWith: function endsWith(searchString, suffix) {
	    return searchString.indexOf(suffix, this.length - suffix.length) !== -1;
	  }
	};
	//# sourceMappingURL=utils.js.map


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (modules, endpoint) {
	  var networking = modules.networking;
	  var config = modules.config;
	  var crypto = modules.crypto;

	  var callback = null;
	  var incomingParams = {};

	  if (endpoint.getOperation() === 'PNTimeOperation' || endpoint.getOperation() === 'PNChannelGroupsOperation') {
	    callback = arguments.length <= 2 ? undefined : arguments[2];
	  } else {
	    incomingParams = arguments.length <= 2 ? undefined : arguments[2];
	    callback = arguments.length <= 3 ? undefined : arguments[3];
	  }

	  var validationResult = endpoint.validateParams(modules, incomingParams);

	  if (validationResult) {
	    callback(createValidationError(validationResult));
	    return;
	  }

	  var outgoingParams = endpoint.prepareParams(modules, incomingParams);

	  outgoingParams.uuid = config.UUID;
	  outgoingParams.pnsdk = generatePNSDK(config);

	  if (config.useInstanceId) {
	    outgoingParams.instanceid = config.instanceId;
	  }

	  if (config.useRequestId) {
	    outgoingParams.requestid = _uuid2.default.v4();
	  }

	  if (endpoint.isAuthSupported() && config.getAuthKey()) {
	    outgoingParams.auth = config.getAuthKey();
	  }

	  if (endpoint.getOperation() === 'PNAccessManagerGrant') {
	    var signInput = config.subscribeKey + '\n' + config.publishKey + '\ngrant\n';
	    signInput += _utils2.default.signPamFromParams(outgoingParams);
	    outgoingParams.signature = crypto.HMACSHA256(signInput);
	  }

	  if (endpoint.getOperation() === 'PNAccessManagerAudit') {
	    var _signInput = config.subscribeKey + '\n' + config.publishKey + '\naudit\n';
	    _signInput += _utils2.default.signPamFromParams(outgoingParams);
	    outgoingParams.signature = crypto.HMACSHA256(_signInput);
	  }

	  var onResponse = function onResponse(status, payload) {
	    if (callback) {
	      if (status.error) return callback(status);

	      callback(status, endpoint.handleResponse(modules, payload, incomingParams));
	    }
	  };

	  var callInstance = void 0;

	  if (endpoint.usePost && endpoint.usePost(modules, incomingParams)) {
	    var url = endpoint.postURL(modules, incomingParams);
	    var networkingParams = { url: url,
	      operation: endpoint.getOperation(),
	      timeout: endpoint.getRequestTimeout(modules)
	    };
	    var payload = endpoint.postPayload(modules, incomingParams);
	    callInstance = networking.POST(outgoingParams, payload, networkingParams, onResponse);
	  } else {
	    var _url = endpoint.getURL(modules, incomingParams);
	    var _networkingParams = { url: _url,
	      operation: endpoint.getOperation(),
	      timeout: endpoint.getRequestTimeout(modules)
	    };
	    callInstance = networking.GET(outgoingParams, _networkingParams, onResponse);
	  }

	  if (endpoint.getOperation() === 'PNSubscribeOperation') {
	    return callInstance;
	  }
	};

	var _flow_interfaces = __webpack_require__(13);

	var _uuid = __webpack_require__(2);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _utils = __webpack_require__(21);

	var _utils2 = _interopRequireDefault(_utils);

	var _config = __webpack_require__(12);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createError(errorPayload, type) {
	  errorPayload.type = type;
	  return errorPayload;
	}

	function createValidationError(message) {
	  return createError({ message: message }, 'validationError');
	}

	function generatePNSDK(config) {
	  var base = 'PubNub-JS-' + config.sdkFamily;

	  if (config.partnerId) {
	    base += '-' + config.partnerId;
	  }

	  base += '/' + config.getVersion();

	  return base;
	}

	module.exports = exports['default'];
	//# sourceMappingURL=endpoint.js.map


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNAddChannelsToGroupOperation';
	}

	function validateParams(modules, incomingParams) {
	  var channels = incomingParams.channels;
	  var channelGroup = incomingParams.channelGroup;
	  var config = modules.config;


	  if (!channelGroup) return 'Missing Channel Group';
	  if (!channels || channels.length === 0) return 'Missing Channels';
	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var channelGroup = incomingParams.channelGroup;
	  var config = modules.config;

	  return '/v1/channel-registration/sub-key/' + config.subscribeKey + '/channel-group/' + channelGroup;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams(modules, incomingParams) {
	  var _incomingParams$chann = incomingParams.channels;
	  var channels = _incomingParams$chann === undefined ? [] : _incomingParams$chann;


	  return {
	    add: channels.join(',')
	  };
	}

	function handleResponse() {
	  return {};
	}
	//# sourceMappingURL=add_channels.js.map


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNRemoveChannelsFromGroupOperation';
	}

	function validateParams(modules, incomingParams) {
	  var channels = incomingParams.channels;
	  var channelGroup = incomingParams.channelGroup;
	  var config = modules.config;


	  if (!channelGroup) return 'Missing Channel Group';
	  if (!channels || channels.length === 0) return 'Missing Channels';
	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var channelGroup = incomingParams.channelGroup;
	  var config = modules.config;

	  return '/v1/channel-registration/sub-key/' + config.subscribeKey + '/channel-group/' + channelGroup;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams(modules, incomingParams) {
	  var _incomingParams$chann = incomingParams.channels;
	  var channels = _incomingParams$chann === undefined ? [] : _incomingParams$chann;


	  return {
	    remove: channels.join(',')
	  };
	}

	function handleResponse() {
	  return {};
	}
	//# sourceMappingURL=remove_channels.js.map


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.isAuthSupported = isAuthSupported;
	exports.getRequestTimeout = getRequestTimeout;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNRemoveGroupOperation';
	}

	function validateParams(modules, incomingParams) {
	  var channelGroup = incomingParams.channelGroup;
	  var config = modules.config;


	  if (!channelGroup) return 'Missing Channel Group';
	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var channelGroup = incomingParams.channelGroup;
	  var config = modules.config;

	  return '/v1/channel-registration/sub-key/' + config.subscribeKey + '/channel-group/' + channelGroup + '/remove';
	}

	function isAuthSupported() {
	  return true;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function prepareParams() {
	  return {};
	}

	function handleResponse() {
	  return {};
	}
	//# sourceMappingURL=delete_group.js.map


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNChannelGroupsOperation';
	}

	function validateParams(modules) {
	  var config = modules.config;


	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules) {
	  var config = modules.config;

	  return '/v1/channel-registration/sub-key/' + config.subscribeKey + '/channel-group';
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams() {
	  return {};
	}

	function handleResponse(modules, serverResponse) {
	  return {
	    groups: serverResponse.payload.groups
	  };
	}
	//# sourceMappingURL=list_groups.js.map


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNChannelsForGroupOperation';
	}

	function validateParams(modules, incomingParams) {
	  var channelGroup = incomingParams.channelGroup;
	  var config = modules.config;


	  if (!channelGroup) return 'Missing Channel Group';
	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var channelGroup = incomingParams.channelGroup;
	  var config = modules.config;

	  return '/v1/channel-registration/sub-key/' + config.subscribeKey + '/channel-group/' + channelGroup;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams() {
	  return {};
	}

	function handleResponse(modules, serverResponse) {
	  return {
	    channels: serverResponse.payload.channels
	  };
	}
	//# sourceMappingURL=list_channels.js.map


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNPushNotificationEnabledChannelsOperation';
	}

	function validateParams(modules, incomingParams) {
	  var device = incomingParams.device;
	  var pushGateway = incomingParams.pushGateway;
	  var channels = incomingParams.channels;
	  var config = modules.config;


	  if (!device) return 'Missing Device ID (device)';
	  if (!pushGateway) return 'Missing GW Type (pushGateway: gcm or apns)';
	  if (!channels || channels.length === 0) return 'Missing Channels';
	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var device = incomingParams.device;
	  var config = modules.config;

	  return '/v1/push/sub-key/' + config.subscribeKey + '/devices/' + device;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams(modules, incomingParams) {
	  var pushGateway = incomingParams.pushGateway;
	  var _incomingParams$chann = incomingParams.channels;
	  var channels = _incomingParams$chann === undefined ? [] : _incomingParams$chann;

	  return { type: pushGateway, add: channels.join(',') };
	}

	function handleResponse() {
	  return {};
	}
	//# sourceMappingURL=add_push_channels.js.map


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNPushNotificationEnabledChannelsOperation';
	}

	function validateParams(modules, incomingParams) {
	  var device = incomingParams.device;
	  var pushGateway = incomingParams.pushGateway;
	  var channels = incomingParams.channels;
	  var config = modules.config;


	  if (!device) return 'Missing Device ID (device)';
	  if (!pushGateway) return 'Missing GW Type (pushGateway: gcm or apns)';
	  if (!channels || channels.length === 0) return 'Missing Channels';
	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var device = incomingParams.device;
	  var config = modules.config;

	  return '/v1/push/sub-key/' + config.subscribeKey + '/devices/' + device;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams(modules, incomingParams) {
	  var pushGateway = incomingParams.pushGateway;
	  var _incomingParams$chann = incomingParams.channels;
	  var channels = _incomingParams$chann === undefined ? [] : _incomingParams$chann;

	  return { type: pushGateway, remove: channels.join(',') };
	}

	function handleResponse() {
	  return {};
	}
	//# sourceMappingURL=remove_push_channels.js.map


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNPushNotificationEnabledChannelsOperation';
	}

	function validateParams(modules, incomingParams) {
	  var device = incomingParams.device;
	  var pushGateway = incomingParams.pushGateway;
	  var config = modules.config;


	  if (!device) return 'Missing Device ID (device)';
	  if (!pushGateway) return 'Missing GW Type (pushGateway: gcm or apns)';
	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var device = incomingParams.device;
	  var config = modules.config;

	  return '/v1/push/sub-key/' + config.subscribeKey + '/devices/' + device;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams(modules, incomingParams) {
	  var pushGateway = incomingParams.pushGateway;

	  return { type: pushGateway };
	}

	function handleResponse(modules, serverResponse) {
	  return { channels: serverResponse };
	}
	//# sourceMappingURL=list_push_channels.js.map


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNRemoveAllPushNotificationsOperation';
	}

	function validateParams(modules, incomingParams) {
	  var device = incomingParams.device;
	  var pushGateway = incomingParams.pushGateway;
	  var config = modules.config;


	  if (!device) return 'Missing Device ID (device)';
	  if (!pushGateway) return 'Missing GW Type (pushGateway: gcm or apns)';
	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var device = incomingParams.device;
	  var config = modules.config;

	  return '/v1/push/sub-key/' + config.subscribeKey + '/devices/' + device + '/remove';
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams(modules, incomingParams) {
	  var pushGateway = incomingParams.pushGateway;

	  return { type: pushGateway };
	}

	function handleResponse() {
	  return {};
	}
	//# sourceMappingURL=remove_device.js.map


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNUnsubscribeOperation';
	}

	function validateParams(modules) {
	  var config = modules.config;


	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var config = modules.config;
	  var _incomingParams$chann = incomingParams.channels;
	  var channels = _incomingParams$chann === undefined ? [] : _incomingParams$chann;

	  var stringifiedChannels = channels.length > 0 ? channels.join(',') : ',';
	  return '/v2/presence/sub-key/' + config.subscribeKey + '/channel/' + encodeURIComponent(stringifiedChannels) + '/leave';
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams(modules, incomingParams) {
	  var _incomingParams$chann2 = incomingParams.channelGroups;
	  var channelGroups = _incomingParams$chann2 === undefined ? [] : _incomingParams$chann2;

	  var params = {};

	  if (channelGroups.length > 0) {
	    params['channel-group'] = channelGroups.join(',');
	  }

	  return params;
	}

	function handleResponse() {
	  return {};
	}
	//# sourceMappingURL=leave.js.map


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNWhereNowOperation';
	}

	function validateParams(modules) {
	  var config = modules.config;


	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var config = modules.config;
	  var _incomingParams$uuid = incomingParams.uuid;
	  var uuid = _incomingParams$uuid === undefined ? config.UUID : _incomingParams$uuid;

	  return '/v2/presence/sub-key/' + config.subscribeKey + '/uuid/' + uuid;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams() {
	  return {};
	}

	function handleResponse(modules, serverResponse) {
	  return { channels: serverResponse.payload.channels };
	}
	//# sourceMappingURL=where_now.js.map


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.isAuthSupported = isAuthSupported;
	exports.getRequestTimeout = getRequestTimeout;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNHeartbeatOperation';
	}

	function validateParams(modules) {
	  var config = modules.config;


	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var config = modules.config;
	  var _incomingParams$chann = incomingParams.channels;
	  var channels = _incomingParams$chann === undefined ? [] : _incomingParams$chann;

	  var stringifiedChannels = channels.length > 0 ? channels.join(',') : ',';
	  return '/v2/presence/sub-key/' + config.subscribeKey + '/channel/' + encodeURIComponent(stringifiedChannels) + '/heartbeat';
	}

	function isAuthSupported() {
	  return true;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function prepareParams(modules, incomingParams) {
	  var _incomingParams$chann2 = incomingParams.channelGroups;
	  var channelGroups = _incomingParams$chann2 === undefined ? [] : _incomingParams$chann2;
	  var _incomingParams$state = incomingParams.state;
	  var state = _incomingParams$state === undefined ? {} : _incomingParams$state;
	  var config = modules.config;

	  var params = {};

	  if (channelGroups.length > 0) {
	    params['channel-group'] = channelGroups.join(',');
	  }

	  params.state = JSON.stringify(state);
	  params.heartbeat = config.getPresenceTimeout();
	  return params;
	}

	function handleResponse() {
	  return {};
	}
	//# sourceMappingURL=heartbeat.js.map


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNGetStateOperation';
	}

	function validateParams(modules) {
	  var config = modules.config;


	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var config = modules.config;
	  var _incomingParams$uuid = incomingParams.uuid;
	  var uuid = _incomingParams$uuid === undefined ? config.UUID : _incomingParams$uuid;
	  var _incomingParams$chann = incomingParams.channels;
	  var channels = _incomingParams$chann === undefined ? [] : _incomingParams$chann;

	  var stringifiedChannels = channels.length > 0 ? channels.join(',') : ',';
	  return '/v2/presence/sub-key/' + config.subscribeKey + '/channel/' + stringifiedChannels + '/uuid/' + uuid;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams(modules, incomingParams) {
	  var _incomingParams$chann2 = incomingParams.channelGroups;
	  var channelGroups = _incomingParams$chann2 === undefined ? [] : _incomingParams$chann2;

	  var params = {};

	  if (channelGroups.length > 0) {
	    params['channel-group'] = channelGroups.join(',');
	  }

	  return params;
	}

	function handleResponse(modules, serverResponse, incomingParams) {
	  var _incomingParams$chann3 = incomingParams.channels;
	  var channels = _incomingParams$chann3 === undefined ? [] : _incomingParams$chann3;
	  var _incomingParams$chann4 = incomingParams.channelGroups;
	  var channelGroups = _incomingParams$chann4 === undefined ? [] : _incomingParams$chann4;

	  var channelsResponse = {};

	  if (channels.length === 1 && channelGroups.length === 0) {
	    channelsResponse[channels[0]] = serverResponse.payload;
	  } else {
	    channelsResponse = serverResponse.payload;
	  }

	  return { channels: channelsResponse };
	}
	//# sourceMappingURL=get_state.js.map


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNSetStateOperation';
	}

	function validateParams(modules, incomingParams) {
	  var config = modules.config;
	  var state = incomingParams.state;


	  if (!state) return 'Missing State';
	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var config = modules.config;
	  var _incomingParams$chann = incomingParams.channels;
	  var channels = _incomingParams$chann === undefined ? [] : _incomingParams$chann;

	  var stringifiedChannels = channels.length > 0 ? channels.join(',') : ',';
	  return '/v2/presence/sub-key/' + config.subscribeKey + '/channel/' + stringifiedChannels + '/uuid/' + config.UUID + '/data';
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams(modules, incomingParams) {
	  var state = incomingParams.state;
	  var _incomingParams$chann2 = incomingParams.channelGroups;
	  var channelGroups = _incomingParams$chann2 === undefined ? [] : _incomingParams$chann2;

	  var params = {};

	  params.state = JSON.stringify(state);

	  if (channelGroups.length > 0) {
	    params['channel-group'] = channelGroups.join(',');
	  }

	  return params;
	}

	function handleResponse(modules, serverResponse) {
	  return { state: serverResponse.payload };
	}
	//# sourceMappingURL=set_state.js.map


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNHereNowOperation';
	}

	function validateParams(modules) {
	  var config = modules.config;


	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var config = modules.config;
	  var _incomingParams$chann = incomingParams.channels;
	  var channels = _incomingParams$chann === undefined ? [] : _incomingParams$chann;
	  var _incomingParams$chann2 = incomingParams.channelGroups;
	  var channelGroups = _incomingParams$chann2 === undefined ? [] : _incomingParams$chann2;

	  var baseURL = '/v2/presence/sub-key/' + config.subscribeKey;

	  if (channels.length > 0 || channelGroups.length > 0) {
	    var stringifiedChannels = channels.length > 0 ? channels.join(',') : ',';
	    baseURL += '/channel/' + encodeURIComponent(stringifiedChannels);
	  }

	  return baseURL;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams(modules, incomingParams) {
	  var _incomingParams$chann3 = incomingParams.channelGroups;
	  var channelGroups = _incomingParams$chann3 === undefined ? [] : _incomingParams$chann3;
	  var _incomingParams$inclu = incomingParams.includeUUIDs;
	  var includeUUIDs = _incomingParams$inclu === undefined ? true : _incomingParams$inclu;
	  var _incomingParams$inclu2 = incomingParams.includeState;
	  var includeState = _incomingParams$inclu2 === undefined ? false : _incomingParams$inclu2;

	  var params = {};

	  if (!includeUUIDs) params.disable_uuids = 1;
	  if (includeState) params.state = 1;

	  if (channelGroups.length > 0) {
	    params['channel-group'] = channelGroups.join(',');
	  }

	  return params;
	}

	function handleResponse(modules, serverResponse, incomingParams) {
	  var _incomingParams$chann4 = incomingParams.channels;
	  var channels = _incomingParams$chann4 === undefined ? [] : _incomingParams$chann4;
	  var _incomingParams$chann5 = incomingParams.channelGroups;
	  var channelGroups = _incomingParams$chann5 === undefined ? [] : _incomingParams$chann5;
	  var _incomingParams$inclu3 = incomingParams.includeUUIDs;
	  var includeUUIDs = _incomingParams$inclu3 === undefined ? true : _incomingParams$inclu3;
	  var _incomingParams$inclu4 = incomingParams.includeState;
	  var includeState = _incomingParams$inclu4 === undefined ? false : _incomingParams$inclu4;


	  var prepareSingularChannel = function prepareSingularChannel() {
	    var response = {};
	    var occupantsList = [];
	    response.totalChannels = 1;
	    response.totalOccupancy = serverResponse.occupancy;
	    response.channels = {};
	    response.channels[channels[0]] = {
	      occupants: occupantsList,
	      name: channels[0],
	      occupancy: serverResponse.occupancy
	    };

	    if (includeUUIDs) {
	      serverResponse.uuids.forEach(function (uuidEntry) {
	        if (includeState) {
	          occupantsList.push({ state: uuidEntry.state, uuid: uuidEntry.uuid });
	        } else {
	          occupantsList.push({ state: null, uuid: uuidEntry });
	        }
	      });
	    }

	    return response;
	  };

	  var prepareMultipleChannel = function prepareMultipleChannel() {
	    var response = {};
	    response.totalChannels = serverResponse.payload.total_channels;
	    response.totalOccupancy = serverResponse.payload.total_occupancy;
	    response.channels = {};

	    Object.keys(serverResponse.payload.channels).forEach(function (channelName) {
	      var channelEntry = serverResponse.payload.channels[channelName];
	      var occupantsList = [];
	      response.channels[channelName] = {
	        occupants: occupantsList,
	        name: channelName,
	        occupancy: channelEntry.occupancy
	      };

	      if (includeUUIDs) {
	        channelEntry.uuids.forEach(function (uuidEntry) {
	          if (includeState) {
	            occupantsList.push({ state: uuidEntry.state, uuid: uuidEntry.uuid });
	          } else {
	            occupantsList.push({ state: null, uuid: uuidEntry });
	          }
	        });
	      }

	      return response;
	    });

	    return response;
	  };

	  var response = void 0;
	  if (channels.length > 1 || channelGroups.length > 0 || channelGroups.length === 0 && channels.length === 0) {
	    response = prepareMultipleChannel();
	  } else {
	    response = prepareSingularChannel();
	  }

	  return response;
	}
	//# sourceMappingURL=here_now.js.map


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNAccessManagerAudit';
	}

	function validateParams(modules) {
	  var config = modules.config;


	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules) {
	  var config = modules.config;

	  return '/v1/auth/audit/sub-key/' + config.subscribeKey;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return false;
	}

	function prepareParams(modules, incomingParams) {
	  var channel = incomingParams.channel;
	  var channelGroup = incomingParams.channelGroup;
	  var _incomingParams$authK = incomingParams.authKeys;
	  var authKeys = _incomingParams$authK === undefined ? [] : _incomingParams$authK;

	  var params = {};

	  params.timestamp = Math.floor(new Date().getTime() / 1000);

	  if (channel) {
	    params.channel = channel;
	  }

	  if (channelGroup) {
	    params['channel-group'] = channelGroup;
	  }

	  if (authKeys.length > 0) {
	    params.auth = authKeys.join(',');
	  }

	  return params;
	}

	function handleResponse(modules, serverResponse) {
	  return serverResponse.payload;
	}
	//# sourceMappingURL=audit.js.map


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function getOperation() {
	  return 'PNAccessManagerGrant';
	}

	function validateParams(modules) {
	  var config = modules.config;


	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules) {
	  var config = modules.config;

	  return '/v1/auth/grant/sub-key/' + config.subscribeKey;
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return false;
	}

	function prepareParams(modules, incomingParams) {
	  var _incomingParams$chann = incomingParams.channels;
	  var channels = _incomingParams$chann === undefined ? [] : _incomingParams$chann;
	  var _incomingParams$chann2 = incomingParams.channelGroups;
	  var channelGroups = _incomingParams$chann2 === undefined ? [] : _incomingParams$chann2;
	  var ttl = incomingParams.ttl;
	  var _incomingParams$read = incomingParams.read;
	  var read = _incomingParams$read === undefined ? false : _incomingParams$read;
	  var _incomingParams$write = incomingParams.write;
	  var write = _incomingParams$write === undefined ? false : _incomingParams$write;
	  var _incomingParams$manag = incomingParams.manage;
	  var manage = _incomingParams$manag === undefined ? false : _incomingParams$manag;
	  var _incomingParams$authK = incomingParams.authKeys;
	  var authKeys = _incomingParams$authK === undefined ? [] : _incomingParams$authK;

	  var params = {};

	  params.r = read ? '1' : '0';
	  params.w = write ? '1' : '0';
	  params.m = manage ? '1' : '0';
	  params.timestamp = Math.floor(new Date().getTime() / 1000);

	  if (channels.length > 0) {
	    params.channel = channels.join(',');
	  }

	  if (channelGroups.length > 0) {
	    params['channel-group'] = channelGroups.join(',');
	  }

	  if (authKeys.length > 0) {
	    params.auth = authKeys.join(',');
	  }

	  if (ttl || ttl === 0) {
	    params.ttl = ttl;
	  }

	  return params;
	}

	function handleResponse() {
	  return {};
	}
	//# sourceMappingURL=grant.js.map


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.usePost = usePost;
	exports.getURL = getURL;
	exports.postURL = postURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.postPayload = postPayload;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function prepareMessagePayload(modules, messagePayload) {
	  var crypto = modules.crypto;
	  var config = modules.config;

	  var stringifiedPayload = JSON.stringify(messagePayload);

	  if (config.cipherKey) {
	    stringifiedPayload = crypto.encrypt(stringifiedPayload);
	    stringifiedPayload = JSON.stringify(stringifiedPayload);
	  }

	  return stringifiedPayload;
	}

	function getOperation() {
	  return 'PNPublishOperation';
	}

	function validateParams(_ref, incomingParams) {
	  var config = _ref.config;
	  var message = incomingParams.message;
	  var channel = incomingParams.channel;


	  if (!channel) return 'Missing Channel';
	  if (!message) return 'Missing Message';
	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function usePost(modules, incomingParams) {
	  var _incomingParams$sendB = incomingParams.sendByPost;
	  var sendByPost = _incomingParams$sendB === undefined ? false : _incomingParams$sendB;

	  return sendByPost;
	}

	function getURL(modules, incomingParams) {
	  var config = modules.config;
	  var channel = incomingParams.channel;
	  var message = incomingParams.message;

	  var stringifiedPayload = prepareMessagePayload(modules, message);
	  return '/publish/' + config.publishKey + '/' + config.subscribeKey + '/0/' + encodeURIComponent(channel) + '/0/' + encodeURIComponent(stringifiedPayload);
	}

	function postURL(modules, incomingParams) {
	  var config = modules.config;
	  var channel = incomingParams.channel;

	  return '/publish/' + config.publishKey + '/' + config.subscribeKey + '/0/' + encodeURIComponent(channel) + '/0';
	}

	function getRequestTimeout(_ref2) {
	  var config = _ref2.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function postPayload(modules, incomingParams) {
	  var message = incomingParams.message;

	  return prepareMessagePayload(modules, message);
	}

	function prepareParams(modules, incomingParams) {
	  var meta = incomingParams.meta;
	  var _incomingParams$repli = incomingParams.replicate;
	  var replicate = _incomingParams$repli === undefined ? true : _incomingParams$repli;
	  var storeInHistory = incomingParams.storeInHistory;

	  var params = {};

	  if (storeInHistory != null) {
	    if (storeInHistory) {
	      params.store = '1';
	    } else {
	      params.store = '0';
	    }
	  }

	  if (replicate === false) {
	    params.norep = 'true';
	  }

	  if (meta && (typeof meta === 'undefined' ? 'undefined' : _typeof(meta)) === 'object') {
	    params.meta = JSON.stringify(meta);
	  }

	  return params;
	}

	function handleResponse(modules, serverResponse) {
	  return { timetoken: serverResponse[2] };
	}
	//# sourceMappingURL=publish.js.map


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperation = getOperation;
	exports.validateParams = validateParams;
	exports.getURL = getURL;
	exports.getRequestTimeout = getRequestTimeout;
	exports.isAuthSupported = isAuthSupported;
	exports.prepareParams = prepareParams;
	exports.handleResponse = handleResponse;

	var _flow_interfaces = __webpack_require__(13);

	function __processMessage(modules, message) {
	  var config = modules.config;
	  var crypto = modules.crypto;

	  if (!config.cipherKey) return message;

	  try {
	    return crypto.decrypt(message);
	  } catch (e) {
	    return message;
	  }
	}

	function getOperation() {
	  return 'PNHistoryOperation';
	}

	function validateParams(modules, incomingParams) {
	  var channel = incomingParams.channel;
	  var config = modules.config;


	  if (!channel) return 'Missing channel';
	  if (!config.subscribeKey) return 'Missing Subscribe Key';
	}

	function getURL(modules, incomingParams) {
	  var channel = incomingParams.channel;
	  var config = modules.config;

	  return '/v2/history/sub-key/' + config.subscribeKey + '/channel/' + encodeURIComponent(channel);
	}

	function getRequestTimeout(_ref) {
	  var config = _ref.config;

	  return config.getTransactionTimeout();
	}

	function isAuthSupported() {
	  return true;
	}

	function prepareParams(modules, incomingParams) {
	  var start = incomingParams.start;
	  var end = incomingParams.end;
	  var includeTimetoken = incomingParams.includeTimetoken;
	  var reverse = incomingParams.reverse;
	  var _incomingParams$count = incomingParams.count;
	  var count = _incomingParams$count === undefined ? 100 : _incomingParams$count;

	  var outgoingParams = {};

	  outgoingParams.count = count;
	  if (start) outgoingParams.start = start;
	  if (end) outgoingParams.end = end;
	  if (includeTimetoken != null) outgoingParams.include_token = includeTimetoken.toString();
	  if (reverse != null) outgoingParams.reverse = reverse.toString();

	  return outgoingParams;
	}

	function handleResponse(modules, serverResponse) {
	  var response = {
	    messages: [],
	    startTimeToken: parseInt(serverResponse[1], 10),
	    endTimeToken: parseInt(serverResponse[2], 10)
	  };

	  serverResponse[0].forEach(function (serverHistoryItem) {
	    var item = {
	      timetoken: null,
	      entry: null
	    };

	    if (serverHistoryItem.timetoken) {
	      item.timetoken = serverHistoryItem.timetoken;
	      item.entry = __processMessage(modules, serverHistoryItem.message);
	    } else {
	      item.entry = __processMessage(modules, serverHistoryItem);
	    }

	    response.messages.push(item);
	  });

	  return response;
	}
	//# sourceMappingURL=history.js.map


/***/ }
/******/ ])
});
;