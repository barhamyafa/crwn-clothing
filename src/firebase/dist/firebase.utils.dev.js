"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInWithGoogle = exports.firestore = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

var signInWithGoogle = function signInWithGoogle() {
  auth.signInWithPopup(provider);
};

exports.signInWithGoogle = signInWithGoogle;