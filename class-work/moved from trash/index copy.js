'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRefreshToken = getRefreshToken;
exports.getAccessToken = getAccessToken;
exports.refreshToken = refreshToken;
exports.login = login;
exports.logout = logout;
exports.isLoggedIn = isLoggedIn;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authApiUrl = 'https://auth.invisionapp.com/oauth/token';
var clientId = 'invision_craft_plugin';
var clientSecret = 'wintercontingency';
var syncIdentifier = 'com.invisionlabs.sync';

function setTokens(panel, accessToken, refreshToken) {
  panel.set('access_token', accessToken, syncIdentifier);
  panel.set('refresh_token', refreshToken, syncIdentifier);
}

function getRefreshToken(panel) {
  return panel.get('refresh_token', undefined, syncIdentifier);
}

function getAccessToken(panel) {
  return panel.get('access_token', undefined, syncIdentifier);
}

function getDomain(panel) {
  return panel.get('domain', undefined, syncIdentifier);
}

function isPCDomain(panel) {
  return panel.get('isPCDomain', undefined, syncIdentifier);
}

function getAuthApiUrl(panel) {
  const domain = getDomain(panel);
  if (isPCDomain(panel)) {
    return "https://auth." + domain + "-io.invisionapp.com/oauth/token";
  } else {
    return authApiUrl;
  }
}

function refreshToken(panel, callback) {
  var refreshFormData = {
    'grant_type': 'refresh_token',
    'refresh_token': getRefreshToken(panel),
    'client_id': clientId,
    'client_secret': clientSecret
  };

  _request2.default.post({ url: getAuthApiUrl(panel), form: refreshFormData, json: true }, function (err, httpResponse, body) {
    if (err) {
      callback(err);
      return;
    }

    if (body.message) {
      callback(body.message);
      return;
    }

    setTokens(panel, body['access_token'], body['refresh_token']);
    callback();
  });
};

function login(panel, email, password, callback) {
  var formData = {
    username: email,
    password: password,
    'grant_type': 'password',
    'client_id': clientId,
    'client_secret': clientSecret
  };

  _request2.default.post({ url: getAuthApiUrl(panel), form: formData, json: true }, function (err, httpResponse, body) {
    if (err) {
      callback({ error: err });
      return;
    }

    if (body.message) {
      callback({ error: body.message });
      return;
    }

    setTokens(panel, body['access_token'], body['refresh_token']);
    callback({ ok: true, email: email });
  });
};

function logout(panel) {
  setTokens(panel, undefined, undefined);
}

function isLoggedIn(panel) {
  if (panel == null) {
    panel = window.panel;
  }
  return getAccessToken(panel) != null;
};
