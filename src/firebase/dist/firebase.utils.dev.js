"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInWithGoogle = exports.createUserProfileDocument = exports.firestore = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var config = {
  apiKey: "AIzaSyC3Rz0CltuN9Mc8gUS-hbPXLznWKHjpIPY",
  authDomain: "crwn-clothing-f10ec.firebaseapp.com",
  databaseURL: "https://crwn-clothing-f10ec.firebaseio.com",
  projectId: "crwn-clothing-f10ec",
  storageBucket: "crwn-clothing-f10ec.appspot.com",
  messagingSenderId: "739035837565",
  appId: "1:739035837565:web:f899bf74e4a8eb93b3ad14",
  measurementId: "G-VWJHP1RZ74"
};

_app["default"].initializeApp(config);

var auth = _app["default"].auth();

exports.auth = auth;

var firestore = _app["default"].firestore();

exports.firestore = firestore;

var createUserProfileDocument = function createUserProfileDocument(userAuth, additionalData) {
  var userRef, userSnapshot, displayName, email, createdAt;
  return regeneratorRuntime.async(function createUserProfileDocument$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (userAuth) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          userRef = firestore.doc("users/".concat(userAuth.uid));
          _context.next = 5;
          return regeneratorRuntime.awrap(userRef.get());

        case 5:
          userSnapshot = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(userSnapshot);

        case 8:
          if (_context.sent.exists) {
            _context.next = 19;
            break;
          }

          _context.prev = 9;
          displayName = userAuth.displayName, email = userAuth.email;
          createdAt = new Date();
          _context.next = 14;
          return regeneratorRuntime.awrap(userRef.set(_objectSpread({
            displayName: displayName,
            email: email,
            createdAt: createdAt
          }, additionalData)));

        case 14:
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](9);
          console.log("Ther's error accure", _context.t0);

        case 19:
          return _context.abrupt("return", userRef);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[9, 16]]);
};

exports.createUserProfileDocument = createUserProfileDocument;
var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

var signInWithGoogle = function signInWithGoogle() {
  auth.signInWithPopup(provider);
};

exports.signInWithGoogle = signInWithGoogle;