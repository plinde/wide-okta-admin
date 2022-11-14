// ==UserScript==
// @name         Wide Okta Admin
// @version      1.0
// @description  Script for automatically widening Okta's Admin console
// @author       plinde
// @match        https://*-admin.okta.com/*
// @grant        none
// @homepageURL https://github.com/plinde/wide-okta-admin
// ==/UserScript==

var styleSheet = "" +
"div#content {" +
  "width: 90%!important;" +
"}" +
"";

(function () {
  var s = document.createElement('style');
  s.type = "text/css";
  s.innerHTML = styleSheet;
  (document.head || document.documentElement).appendChild(s);
})();

