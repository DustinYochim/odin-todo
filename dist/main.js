/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/font/Alata-Regular.ttf */ "./src/font/Alata-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* SITE-WIDE STYLES */\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\n:root {\n  /* Light mode */\n  --light-switch-shadow: #373d4e;\n  --light-switch-icon: \"🌚\";\n  --light-switch-text: \"dark mode?\";\n  --light-text: #222430;\n  --light-bg: #f7f7f7;\n  --light-theme: #d34a97;\n  --light-sidebar: #f1f1f1;\n\n  /* Dark mode */\n  --dark-switch-shadow: #fce477;\n  --dark-switch-icon: \"🌝\";\n  --dark-switch-text: \"light mode?\";\n  --dark-text: #f7f7f7;\n  --dark-bg: #222430;\n  --dark-theme: #bd93f9;\n  --dark-sidebar: #282a3a;\n\n  /* Default mode */\n  --switch-shadow-color: var(--light-switch-shadow);\n  --switch-icon: var(--light-switch-icon);\n  --switch-text: var(--light-switch-text);\n  --text-color: var(--light-text);\n  --bg-color: var(--light-bg);\n  --theme-color: var(--light-theme);\n  --sidebar-color: var(--light-sidebar);\n}\n\n/* Switched mode */\n.theme-switch:checked ~ #page {\n  --switch-shadow-color: var(--dark-switch-shadow);\n  --switch-icon: var(--dark-switch-icon);\n  --switch-text: var(--dark-switch-text);\n  --text-color: var(--dark-text);\n  --bg-color: var(--dark-bg);\n  --theme-color: var(--dark-theme);\n  --sidebar-color: var(--dark-sidebar);\n}\n\n.theme-switch {\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n\n.switch-label::before {\n  content: var(--switch-icon);\n  font-size: 40px;\n  transition: text-shadow 0.2s;\n}\n.switch-label::after {\n  /* content: var(--switch-text); */\n  color: var(--switch-shadow-color);\n}\n\n.theme-switch:focus ~ #page .switch-label::before,\n.switch-label:hover::before {\n  text-shadow: 0 0 15px var(--switch-shadow-color);\n}\n\n#page {\n  background-color: var(--bg-color);\n  color: var(--text-color);\n\n  font-family: \"Atlata\", sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n\n  min-height: 100vh;\n\n  display: grid;\n  grid-template-columns: minmax(200px, 1.25fr) minmax(10px, 4fr);\n  grid-template-rows: min-content 1fr min-content;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n}\n\n@font-face {\n  font-family: \"Atlata\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\na {\n  color: var(--color-fg);\n  text-decoration: none;\n}\n\n/* HEADER */\nheader {\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  border-bottom: 1.5px solid var(--sidebar-color);\n}\n\n.site-heading {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 2rem;\n}\n\nheader .site-logo {\n  width: 2rem;\n  height: 2rem;\n}\n\n/* SIDEBAR */\nnav {\n  grid-area: sidebar;\n  background-color: var(--sidebar-color);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\nnav > h2 {\n  font-size: 1.5rem;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nnav > h2 > button > img {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\nnav > ul > li {\n  font-size: 1.25rem;\n  padding: 5px;\n  border-radius: 5px;\n}\n\nnav > ul > li:hover {\n  background-color: var(--theme-color);\n  color: var(--bg-color);\n}\n\nnav > ul > li > a {\n  display: flex;\n  align-items: center;\n}\n\na > img {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 0.5rem;\n}\n\n.add-project-button {\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  display: grid;\n  place-items: center;\n}\n.add-project-form {\n  display: none;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.add-project-form input[type=\"text\"] {\n  border: none;\n  border-radius: 3px;\n  margin-bottom: 0.5rem;\n}\n\n.add-project-form button[type=\"submit\"] {\n  border: none;\n  border-radius: 3px;\n  background-color: var(--theme-color);\n  color: var(--text-color);\n  cursor: pointer;\n}\n\n.add-task-form {\n  display: none;\n  flex-direction: column;\n  gap: 0.5rem;\n\n  border: 1px solid var(--theme-color);\n  border-radius: 1rem;\n  background-color: var(--text-color);\n  color: var(--bg-color);\n\n  margin-top: 1rem;\n  padding: 1rem;\n}\n\n.form-row {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.form-row input[type=\"text\"] {\n  background-color: #ffffff;\n  border: 1px solid #d6d9dc;\n  border-radius: 3px;\n  width: 100%;\n  padding: 5px;\n  font-size: 14px;\n}\n.form-row input[type=\"date\"] {\n  background-color: #ffffff;\n  border: 1px solid #d6d9dc;\n  border-radius: 3px;\n  width: 25%;\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.form-row select {\n  background-color: #ffffff;\n  border: 1px solid #d6d9dc;\n  border-radius: 3px;\n  width: 20%;\n  padding: 5px;\n  font-size: 14px;\n}\n\n.form-row label {\n  font-weight: 600;\n}\n\n.form-row textarea {\n  border: 1px solid #d6d9dc;\n  border-radius: 3px;\n\n  min-height: 50px;\n  resize: none;\n}\n\n.form-row.buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 2rem;\n  margin-top: 20px;\n  margin-bottom: 0;\n}\n\n.form-row.buttons > button {\n  background-color: #d6d9dc;\n  border: 1px solid #d6d9dc;\n  border-radius: 3px;\n  color: black;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-bottom: 20px;\n}\n\n.form-row.buttons > button:first-child:hover {\n  background-color: #2abd67;\n  color: white;\n}\n\n.form-row.buttons > button:nth-child(2):hover {\n  background-color: red;\n  color: white;\n}\n\ninput[type=\"text\"] {\n  font-family: \"Atlata\", sans-serif;\n}\n/* MAIN */\nmain {\n  grid-area: main;\n  padding: 5rem;\n\n  display: flex;\n  flex-direction: column;\n}\n\nmain > h2 {\n  text-align: center;\n  background: var(--theme-color);\n  padding: 1rem;\n  border-radius: 2rem;\n  font-size: 1.5rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 0 15px var(--theme-color);\n}\n\n.sort-button {\n  margin-bottom: 1rem;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  display: grid;\n  place-items: center;\n  margin-right: 1rem;\n  align-self: flex-end;\n}\n\nsvg {\n  width: 1.5rem;\n  height: 1.5rem;\n  fill: var(--theme-color);\n}\n\nsvg:hover {\n  fill: #2abd67;\n}\n\n.add-task-button {\n  background-color: var(--theme-color);\n  color: var(--text-color);\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 1rem;\n  font-size: 1rem;\n  cursor: pointer;\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.add-task-button:hover {\n  background-color: #2abd67;\n}\n/* Task List  */\nmain > ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n}\n\n/* Task Item */\nmain > ul > li {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n\n  border: 1px solid var(--theme-color);\n  border-radius: 1rem;\n\n  background-color: var(--text-color);\n  color: var(--bg-color);\n\n  width: 100%;\n  padding: 5px 20px;\n}\n\n.task-summary {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n}\n\n.expand-button,\n.collapse-button {\n  background-color: transparent;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.expand-button > img,\n.collapse-button > img {\n  width: 1.5rem;\n  height: 1.5rem;\n  display: grid;\n  place-items: center;\n}\n\n.mark-complete-button {\n  background-color: #ffffff;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 1px solid var(--theme-color);\n  border-radius: 50%;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.mark-complete-button:hover {\n  background-color: #2abd67;\n}\n\n.due-date {\n  margin-left: auto;\n}\n\n.task-details {\n  display: none;\n  flex-direction: column;\n  gap: 1rem;\n  width: 100%;\n}\n/* FOOTER */\nfooter {\n  grid-area: footer;\n  text-align: center;\n  border-top: 1.5px solid var(--sidebar-color);\n  padding: 1rem 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\nfooter > a {\n  text-decoration: none;\n}\n\nfooter > a:hover {\n  color: var(--theme-color);\n  text-decoration: underline;\n}\n\nfooter > img {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,yBAAyB;EACzB,iCAAiC;EACjC,qBAAqB;EACrB,mBAAmB;EACnB,sBAAsB;EACtB,wBAAwB;;EAExB,cAAc;EACd,6BAA6B;EAC7B,wBAAwB;EACxB,iCAAiC;EACjC,oBAAoB;EACpB,kBAAkB;EAClB,qBAAqB;EACrB,uBAAuB;;EAEvB,iBAAiB;EACjB,iDAAiD;EACjD,uCAAuC;EACvC,uCAAuC;EACvC,+BAA+B;EAC/B,2BAA2B;EAC3B,iCAAiC;EACjC,qCAAqC;AACvC;;AAEA,kBAAkB;AAClB;EACE,gDAAgD;EAChD,sCAAsC;EACtC,sCAAsC;EACtC,8BAA8B;EAC9B,0BAA0B;EAC1B,gCAAgC;EAChC,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,2BAA2B;EAC3B,eAAe;EACf,4BAA4B;AAC9B;AACA;EACE,iCAAiC;EACjC,iCAAiC;AACnC;;AAEA;;EAEE,gDAAgD;AAClD;;AAEA;EACE,iCAAiC;EACjC,wBAAwB;;EAExB,iCAAiC;EACjC,eAAe;EACf,gBAAgB;;EAEhB,iBAAiB;;EAEjB,aAAa;EACb,8DAA8D;EAC9D,+CAA+C;EAC/C;;;mBAGiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,4CAAuC;AACzC;;AAEA;EACE,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA,WAAW;AACX;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,oBAAoB;EACpB,+CAA+C;AACjD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,YAAY;AACZ;EACE,kBAAkB;EAClB,sCAAsC;EACtC,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;;EAEX,oCAAoC;EACpC,mBAAmB;EACnB,mCAAmC;EACnC,sBAAsB;;EAEtB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;;EAElB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,iCAAiC;AACnC;AACA,SAAS;AACT;EACE,eAAe;EACf,aAAa;;EAEb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,uCAAuC;AACzC;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC;EACpC,wBAAwB;EACxB,YAAY;EACZ,oBAAoB;EACpB,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;AACA,eAAe;AACf;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;AACX;;AAEA,cAAc;AACd;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;;EAEX,oCAAoC;EACpC,mBAAmB;;EAEnB,mCAAmC;EACnC,sBAAsB;;EAEtB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,WAAW;AACb;;AAEA;;EAEE,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,cAAc;EACd,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,WAAW;AACb;AACA,WAAW;AACX;EACE,iBAAiB;EACjB,kBAAkB;EAClB,4CAA4C;EAC5C,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,cAAc;AAChB","sourcesContent":["/* SITE-WIDE STYLES */\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\n:root {\n  /* Light mode */\n  --light-switch-shadow: #373d4e;\n  --light-switch-icon: \"🌚\";\n  --light-switch-text: \"dark mode?\";\n  --light-text: #222430;\n  --light-bg: #f7f7f7;\n  --light-theme: #d34a97;\n  --light-sidebar: #f1f1f1;\n\n  /* Dark mode */\n  --dark-switch-shadow: #fce477;\n  --dark-switch-icon: \"🌝\";\n  --dark-switch-text: \"light mode?\";\n  --dark-text: #f7f7f7;\n  --dark-bg: #222430;\n  --dark-theme: #bd93f9;\n  --dark-sidebar: #282a3a;\n\n  /* Default mode */\n  --switch-shadow-color: var(--light-switch-shadow);\n  --switch-icon: var(--light-switch-icon);\n  --switch-text: var(--light-switch-text);\n  --text-color: var(--light-text);\n  --bg-color: var(--light-bg);\n  --theme-color: var(--light-theme);\n  --sidebar-color: var(--light-sidebar);\n}\n\n/* Switched mode */\n.theme-switch:checked ~ #page {\n  --switch-shadow-color: var(--dark-switch-shadow);\n  --switch-icon: var(--dark-switch-icon);\n  --switch-text: var(--dark-switch-text);\n  --text-color: var(--dark-text);\n  --bg-color: var(--dark-bg);\n  --theme-color: var(--dark-theme);\n  --sidebar-color: var(--dark-sidebar);\n}\n\n.theme-switch {\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n\n.switch-label::before {\n  content: var(--switch-icon);\n  font-size: 40px;\n  transition: text-shadow 0.2s;\n}\n.switch-label::after {\n  /* content: var(--switch-text); */\n  color: var(--switch-shadow-color);\n}\n\n.theme-switch:focus ~ #page .switch-label::before,\n.switch-label:hover::before {\n  text-shadow: 0 0 15px var(--switch-shadow-color);\n}\n\n#page {\n  background-color: var(--bg-color);\n  color: var(--text-color);\n\n  font-family: \"Atlata\", sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n\n  min-height: 100vh;\n\n  display: grid;\n  grid-template-columns: minmax(200px, 1.25fr) minmax(10px, 4fr);\n  grid-template-rows: min-content 1fr min-content;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n}\n\n@font-face {\n  font-family: \"Atlata\";\n  src: url(../src/font/Alata-Regular.ttf);\n}\n\na {\n  color: var(--color-fg);\n  text-decoration: none;\n}\n\n/* HEADER */\nheader {\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  border-bottom: 1.5px solid var(--sidebar-color);\n}\n\n.site-heading {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 2rem;\n}\n\nheader .site-logo {\n  width: 2rem;\n  height: 2rem;\n}\n\n/* SIDEBAR */\nnav {\n  grid-area: sidebar;\n  background-color: var(--sidebar-color);\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\nnav > h2 {\n  font-size: 1.5rem;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nnav > h2 > button > img {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\nnav > ul > li {\n  font-size: 1.25rem;\n  padding: 5px;\n  border-radius: 5px;\n}\n\nnav > ul > li:hover {\n  background-color: var(--theme-color);\n  color: var(--bg-color);\n}\n\nnav > ul > li > a {\n  display: flex;\n  align-items: center;\n}\n\na > img {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 0.5rem;\n}\n\n.add-project-button {\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  display: grid;\n  place-items: center;\n}\n.add-project-form {\n  display: none;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.add-project-form input[type=\"text\"] {\n  border: none;\n  border-radius: 3px;\n  margin-bottom: 0.5rem;\n}\n\n.add-project-form button[type=\"submit\"] {\n  border: none;\n  border-radius: 3px;\n  background-color: var(--theme-color);\n  color: var(--text-color);\n  cursor: pointer;\n}\n\n.add-task-form {\n  display: none;\n  flex-direction: column;\n  gap: 0.5rem;\n\n  border: 1px solid var(--theme-color);\n  border-radius: 1rem;\n  background-color: var(--text-color);\n  color: var(--bg-color);\n\n  margin-top: 1rem;\n  padding: 1rem;\n}\n\n.form-row {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.form-row input[type=\"text\"] {\n  background-color: #ffffff;\n  border: 1px solid #d6d9dc;\n  border-radius: 3px;\n  width: 100%;\n  padding: 5px;\n  font-size: 14px;\n}\n.form-row input[type=\"date\"] {\n  background-color: #ffffff;\n  border: 1px solid #d6d9dc;\n  border-radius: 3px;\n  width: 25%;\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.form-row select {\n  background-color: #ffffff;\n  border: 1px solid #d6d9dc;\n  border-radius: 3px;\n  width: 20%;\n  padding: 5px;\n  font-size: 14px;\n}\n\n.form-row label {\n  font-weight: 600;\n}\n\n.form-row textarea {\n  border: 1px solid #d6d9dc;\n  border-radius: 3px;\n\n  min-height: 50px;\n  resize: none;\n}\n\n.form-row.buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 2rem;\n  margin-top: 20px;\n  margin-bottom: 0;\n}\n\n.form-row.buttons > button {\n  background-color: #d6d9dc;\n  border: 1px solid #d6d9dc;\n  border-radius: 3px;\n  color: black;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-bottom: 20px;\n}\n\n.form-row.buttons > button:first-child:hover {\n  background-color: #2abd67;\n  color: white;\n}\n\n.form-row.buttons > button:nth-child(2):hover {\n  background-color: red;\n  color: white;\n}\n\ninput[type=\"text\"] {\n  font-family: \"Atlata\", sans-serif;\n}\n/* MAIN */\nmain {\n  grid-area: main;\n  padding: 5rem;\n\n  display: flex;\n  flex-direction: column;\n}\n\nmain > h2 {\n  text-align: center;\n  background: var(--theme-color);\n  padding: 1rem;\n  border-radius: 2rem;\n  font-size: 1.5rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 0 15px var(--theme-color);\n}\n\n.sort-button {\n  margin-bottom: 1rem;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  display: grid;\n  place-items: center;\n  margin-right: 1rem;\n  align-self: flex-end;\n}\n\nsvg {\n  width: 1.5rem;\n  height: 1.5rem;\n  fill: var(--theme-color);\n}\n\nsvg:hover {\n  fill: #2abd67;\n}\n\n.add-task-button {\n  background-color: var(--theme-color);\n  color: var(--text-color);\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 1rem;\n  font-size: 1rem;\n  cursor: pointer;\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.add-task-button:hover {\n  background-color: #2abd67;\n}\n/* Task List  */\nmain > ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n}\n\n/* Task Item */\nmain > ul > li {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n\n  border: 1px solid var(--theme-color);\n  border-radius: 1rem;\n\n  background-color: var(--text-color);\n  color: var(--bg-color);\n\n  width: 100%;\n  padding: 5px 20px;\n}\n\n.task-summary {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n}\n\n.expand-button,\n.collapse-button {\n  background-color: transparent;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.expand-button > img,\n.collapse-button > img {\n  width: 1.5rem;\n  height: 1.5rem;\n  display: grid;\n  place-items: center;\n}\n\n.mark-complete-button {\n  background-color: #ffffff;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: 1px solid var(--theme-color);\n  border-radius: 50%;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.mark-complete-button:hover {\n  background-color: #2abd67;\n}\n\n.due-date {\n  margin-left: auto;\n}\n\n.task-details {\n  display: none;\n  flex-direction: column;\n  gap: 1rem;\n  width: 100%;\n}\n/* FOOTER */\nfooter {\n  grid-area: footer;\n  text-align: center;\n  border-top: 1.5px solid var(--sidebar-color);\n  padding: 1rem 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\nfooter > a {\n  text-decoration: none;\n}\n\nfooter > a:hover {\n  color: var(--theme-color);\n  text-decoration: underline;\n}\n\nfooter > img {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
const projects = [
  {
    name: "Inbox",
    tasks: [],
  },
];

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  static addProject(project) {
    projects.push(project);
  }

  static getAllProjects() {
    return projects;
  }

  static addTaskToProject(projectName, task) {
    const project = projects.find((project) => project.name === projectName);
    project.tasks.push(task);
  }
}


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
const tasks = [
  {
    name: "Task 1",
    // dueDate: new Date(),
    dueDate: "2023-03-01",
    priority: "High",
    notes: "This is a note",
    completed: false,
    project: "Inbox",
  },
  {
    name: "Task 2",
    dueDate: "2023-03-02",
    // dueDate: new Date(),
    priority: "High",
    notes: "This is a note",
    completed: false,
    project: "Inbox",
  },
  {
    name: "Task 3",
    dueDate: "2023-03-03",
    // dueDate: new Date(),
    priority: "High",
    notes: "This is a note",
    completed: false,
    project: "Inbox",
  },
];

class Task {
  constructor(
    name,
    priority,
    notes,
    completed,
    project = "Inbox",
    dueDate = "No date"
  ) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = completed;
    this.project = project;
  }

  static getTask(name) {
    return tasks.find((task) => task.name === name);
  }

  static getAllTasks() {
    return tasks;
  }

  static addTask(task) {
    tasks.push(task);
  }

  static sortTasksByDate() {
    return tasks.sort((a, b) => a.dueDate - b.dueDate);
  }

  static getDateFormatted() {
    const day = this.dueDate.split("/")[1];
    const month = this.dueDate.split("/")[1];
    const year = this.dueDate.split("/")[2];
    return `${month}/${day}/${year}`;
  }
}


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ "./src/modules/Task.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ "./src/modules/Project.js");




class UI {
  // Initialize the UI module
  static init() {
    // Render all tasks
    UI.renderAllTasks();
    UI.renderAllProjects();
    UI.themeSwitcher();

    // Add event listeners
    UI.addEventListeners();

    console.log("UI module initialized");
  }

  // This code is only used to remember theme selection
  static themeSwitcher() {
    const themeSwitch = document.querySelector(".theme-switch");
    themeSwitch.checked = localStorage.getItem("switchedTheme") === "true";

    themeSwitch.addEventListener("change", (e) => {
      if (e.currentTarget.checked === true) {
        // Add item to localstorage
        localStorage.setItem("switchedTheme", "true");
      } else {
        // Remove item if theme is switched back to normal
        localStorage.removeItem("switchedTheme");
      }
    });
  }

  // Render a single task
  static renderTask(task) {
    const taskList = document.querySelector("#taskList");

    // Render task li
    const li = document.createElement("li");
    li.classList.add("task");
    li.setAttribute("id", "expandable");
    // Render task summary Div
    const taskSummary = document.createElement("div");
    taskSummary.classList.add("task-summary");
    // Render complete button
    const markCompleteButton = document.createElement("button");
    markCompleteButton.classList.add("mark-complete-button");
    // Render Title
    const name = document.createElement("span");
    name.classList.add("task-name");
    name.textContent = task.name;
    // Render Due Date
    const dueDate = document.createElement("span");
    dueDate.classList.add("due-date");
    dueDate.textContent = task.dueDate;
    // dueDate.textContent = format(parseISO(task.dueDate), "MM/dd/yyyy");
    // console.log(parseISO(task.dueDate));
    // Render details button
    const expandButton = document.createElement("button");
    expandButton.setAttribute("id", "expandButton");
    expandButton.classList.add("expand-button");
    // Render details icon
    const expandIcon = document.createElement("img");
    expandIcon.setAttribute("src", "../src/img/expand.svg");
    expandButton.appendChild(expandIcon);

    // Append elements to Summary
    taskSummary.appendChild(markCompleteButton);
    taskSummary.appendChild(name);
    taskSummary.appendChild(dueDate);
    taskSummary.appendChild(expandButton);
    // Append Summary to li
    li.appendChild(taskSummary);
    // Render task details
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");
    // Render Task Project
    const project = document.createElement("p");
    project.classList.add("task-project");
    project.textContent = `Project: ${task.project}`;
    // Render Task Notes
    const notes = document.createElement("p");
    notes.classList.add("task-notes");
    notes.textContent = `Notes: ${task.notes}`;
    // Render Task Priority
    const priority = document.createElement("p");
    priority.classList.add("task-priority");
    priority.textContent = `Priority: ${task.priority}`;
    taskDetails.appendChild(priority);
    taskDetails.appendChild(project);
    taskDetails.appendChild(notes);
    li.appendChild(taskDetails);
    // Append li to taskList
    taskList.appendChild(li);
    // Add event listener to expand button
    expandButton.addEventListener("click", () => {
      console.log("Expand button clicked");
      taskDetails.setAttribute("style", "display: block");
      expandButton.setAttribute("style", "display: none");
      const collapseButton = document.createElement("button");
      collapseButton.classList.add("collapse-button");
      const collapseIcon = document.createElement("img");
      collapseIcon.setAttribute("src", "../src/img/expand-less.svg");
      collapseButton.appendChild(collapseIcon);
      taskSummary.appendChild(collapseButton);
      collapseButton.addEventListener("click", () => {
        taskDetails.setAttribute("style", "display: none");
        expandButton.setAttribute("style", "display: block");
        collapseButton.remove();
      });
    });
  }

  // Expand task details
  static expandTask(task, li, expandButton) {
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");
    // Render Task Project
    const project = document.createElement("p");
    project.classList.add("task-project");
    project.textContent = task.project;
    // Render Task Notes
    const notes = document.createElement("p");
    notes.classList.add("task-notes");
    notes.textContent = task.notes;
    // Render Task Priority
    const priority = document.createElement("p");
    priority.classList.add("task-priority");
    priority.textContent = task.priority;
    // // Render Task Edit Button
    // const editButton = document.createElement("button");
    // editButton.classList.add("edit-button");
    // // Render Edit Icon
    // const editIcon = document.createElement("img");
    // editIcon.setAttribute("src", "../src/img/edit.svg");
    // editButton.appendChild(editIcon);
    // // Render Task Delete Button
    // const deleteButton = document.createElement("button");
    // deleteButton.classList.add("delete-button");
    // // Render Delete Icon
    // const deleteIcon = document.createElement("img");
    // deleteIcon.setAttribute("src", "../src/img/delete.svg");
    // deleteButton.appendChild(deleteIcon);
    // Render Task Collapse Button
    const collapseButton = document.createElement("button");
    collapseButton.classList.add("collapse-button");
    // Render Collapse Icon
    // const collapseIcon = document.createElement("img");
    // collapseIcon.setAttribute("src", "../src/img/collapse.svg");
    // collapseButton.appendChild(collapseIcon);

    // Append elements to taskDetails
    taskDetails.appendChild(project);
    taskDetails.appendChild(notes);
    taskDetails.appendChild(priority);
    taskDetails.appendChild(collapseButton);
    // taskDetails.appendChild(editButton);
    // taskDetails.appendChild(deleteButton);
    // Append taskDetails to li
    li.appendChild(taskDetails);
    expandButton.setAttribute("style", "display: none;");
  }

  // Render all tasks
  static renderAllTasks() {
    console.log("Rendering all tasks");
    const tasks = _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllTasks();
    const taskList = document.querySelector("#taskList");
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      UI.renderTask(task);
    });
  }

  // Render project
  static renderProject(project) {
    const projectList = document.querySelector("#projectList");
    const li = document.createElement("li");
    li.classList.add("project");
    // Render project name
    const name = document.createElement("span");
    name.classList.add("project-name");
    name.textContent = project.name;
    // // Render project delete button
    // const deleteButton = document.createElement("button");
    // deleteButton.classList.add("delete-button");
    // // Render delete icon
    // const deleteIcon = document.createElement("img");
    // deleteIcon.setAttribute("src", "../src/img/delete.svg");
    // deleteButton.appendChild(deleteIcon);
    // Append elements to li
    li.appendChild(name);
    // li.appendChild(deleteButton);
    // Append li to projectList
    projectList.appendChild(li);
  }

  // Render all projects
  static renderAllProjects() {
    console.log("Rendering all projects");
    const projects = _Project_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAllProjects();
    const projectList = document.querySelector("#projectList");
    projectList.innerHTML = "";
    projects.forEach((project) => {
      UI.renderProject(project);
    });
  }

  // Show project form
  static showProjectForm() {
    const projectForm = document.querySelector("#addProjectForm");
    projectForm.setAttribute("style", "display: block");
    document.getElementById("addProjectInput").focus();
  }

  // Hide project form
  static hideProjectForm() {
    console.log("Hiding project form");
  }

  // Show task form
  static showTaskForm() {
    UI.addFormSelectOptions();
    const taskForm = document.querySelector("#addTaskForm");
    taskForm.setAttribute("style", "display: block");
  }

  // Add task form submit
  static addTaskFormSubmit(e) {
    e.preventDefault();
    const name = document.querySelector("#taskName").value;
    const dueDate = document.querySelector("#dueDate").value;
    const project = document.querySelector("#project").value;
    const notes = document.querySelector("#notes").value;
    let priority = null;
    if (document.getElementById("high").checked) {
      priority = "high";
    } else if (document.getElementById("medium").checked) {
      priority = "medium";
    } else if (document.getElementById("low").checked) {
      priority = "low";
    } else {
      alert("Something went wrong!");
    }
    console.log(project);
    const task = new _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, priority, notes, false, project, dueDate);
    _Project_js__WEBPACK_IMPORTED_MODULE_1__["default"].addTaskToProject(project, task);
    _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(task);
    UI.renderTask(task);
    const taskForm = document.querySelector("#addTaskForm");
    taskForm.setAttribute("style", "display: none");
    taskForm.reset();
  }

  // Add project form submit
  static addProjectFormSubmit(e) {
    e.preventDefault();
    const name = document.querySelector("#addProjectInput").value;
    const project = new _Project_js__WEBPACK_IMPORTED_MODULE_1__["default"](name);
    _Project_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(project);
    UI.renderAllProjects();
    const projectForm = document.querySelector("#addProjectForm");
    projectForm.setAttribute("style", "display: none");
    projectForm.reset();
  }

  // Add Event Listeners
  static addEventListeners() {
    const addProjectButton = document.querySelector("#addProjectButton");
    addProjectButton.addEventListener("click", UI.showProjectForm);

    const addProjectForm = document.querySelector("#addProjectForm");
    addProjectForm.addEventListener("submit", UI.addProjectFormSubmit);

    const addTaskButton = document.querySelector("#addTaskButton");
    addTaskButton.addEventListener("click", UI.showTaskForm);

    const addTaskForm = document.querySelector("#addTaskForm");
    addTaskForm.addEventListener("submit", UI.addTaskFormSubmit);
    addTaskForm.reset();

    const sortButton = document.querySelector("#sortButton");
    sortButton.addEventListener("click", UI.sortTaskAscending);
  }

  // Add Form Select Options
  static addFormSelectOptions() {
    const projects = _Project_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAllProjects();
    const projectSelect = document.querySelector("#project");
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.setAttribute("value", project.name);
      option.textContent = project.name;
      projectSelect.appendChild(option);
    });
  }
}


/***/ }),

/***/ "./src/font/Alata-Regular.ttf":
/*!************************************!*\
  !*** ./src/font/Alata-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a90e0970a7aca7d36f95.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");




document.addEventListener("DOMContentLoaded", _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].init);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsV0FBVyxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsUUFBUSxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZ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Q0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsYUFBYTtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNERBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrRUFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQUk7QUFDekIsSUFBSSxvRUFBd0I7QUFDNUIsSUFBSSx3REFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1EQUFPO0FBQy9CLElBQUksOERBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixrRUFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDelNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUN3QjtBQUNoQjs7QUFFOUIsOENBQThDLHdEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9mb250L0FsYXRhLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogU0lURS1XSURFIFNUWUxFUyAqL1xcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAvKiBMaWdodCBtb2RlICovXFxuICAtLWxpZ2h0LXN3aXRjaC1zaGFkb3c6ICMzNzNkNGU7XFxuICAtLWxpZ2h0LXN3aXRjaC1pY29uOiBcXFwi8J+MmlxcXCI7XFxuICAtLWxpZ2h0LXN3aXRjaC10ZXh0OiBcXFwiZGFyayBtb2RlP1xcXCI7XFxuICAtLWxpZ2h0LXRleHQ6ICMyMjI0MzA7XFxuICAtLWxpZ2h0LWJnOiAjZjdmN2Y3O1xcbiAgLS1saWdodC10aGVtZTogI2QzNGE5NztcXG4gIC0tbGlnaHQtc2lkZWJhcjogI2YxZjFmMTtcXG5cXG4gIC8qIERhcmsgbW9kZSAqL1xcbiAgLS1kYXJrLXN3aXRjaC1zaGFkb3c6ICNmY2U0Nzc7XFxuICAtLWRhcmstc3dpdGNoLWljb246IFxcXCLwn4ydXFxcIjtcXG4gIC0tZGFyay1zd2l0Y2gtdGV4dDogXFxcImxpZ2h0IG1vZGU/XFxcIjtcXG4gIC0tZGFyay10ZXh0OiAjZjdmN2Y3O1xcbiAgLS1kYXJrLWJnOiAjMjIyNDMwO1xcbiAgLS1kYXJrLXRoZW1lOiAjYmQ5M2Y5O1xcbiAgLS1kYXJrLXNpZGViYXI6ICMyODJhM2E7XFxuXFxuICAvKiBEZWZhdWx0IG1vZGUgKi9cXG4gIC0tc3dpdGNoLXNoYWRvdy1jb2xvcjogdmFyKC0tbGlnaHQtc3dpdGNoLXNoYWRvdyk7XFxuICAtLXN3aXRjaC1pY29uOiB2YXIoLS1saWdodC1zd2l0Y2gtaWNvbik7XFxuICAtLXN3aXRjaC10ZXh0OiB2YXIoLS1saWdodC1zd2l0Y2gtdGV4dCk7XFxuICAtLXRleHQtY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xcbiAgLS10aGVtZS1jb2xvcjogdmFyKC0tbGlnaHQtdGhlbWUpO1xcbiAgLS1zaWRlYmFyLWNvbG9yOiB2YXIoLS1saWdodC1zaWRlYmFyKTtcXG59XFxuXFxuLyogU3dpdGNoZWQgbW9kZSAqL1xcbi50aGVtZS1zd2l0Y2g6Y2hlY2tlZCB+ICNwYWdlIHtcXG4gIC0tc3dpdGNoLXNoYWRvdy1jb2xvcjogdmFyKC0tZGFyay1zd2l0Y2gtc2hhZG93KTtcXG4gIC0tc3dpdGNoLWljb246IHZhcigtLWRhcmstc3dpdGNoLWljb24pO1xcbiAgLS1zd2l0Y2gtdGV4dDogdmFyKC0tZGFyay1zd2l0Y2gtdGV4dCk7XFxuICAtLXRleHQtY29sb3I6IHZhcigtLWRhcmstdGV4dCk7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXG4gIC0tdGhlbWUtY29sb3I6IHZhcigtLWRhcmstdGhlbWUpO1xcbiAgLS1zaWRlYmFyLWNvbG9yOiB2YXIoLS1kYXJrLXNpZGViYXIpO1xcbn1cXG5cXG4udGhlbWUtc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMXB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XFxufVxcblxcbi5zd2l0Y2gtbGFiZWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiB2YXIoLS1zd2l0Y2gtaWNvbik7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjJzO1xcbn1cXG4uc3dpdGNoLWxhYmVsOjphZnRlciB7XFxuICAvKiBjb250ZW50OiB2YXIoLS1zd2l0Y2gtdGV4dCk7ICovXFxuICBjb2xvcjogdmFyKC0tc3dpdGNoLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi50aGVtZS1zd2l0Y2g6Zm9jdXMgfiAjcGFnZSAuc3dpdGNoLWxhYmVsOjpiZWZvcmUsXFxuLnN3aXRjaC1sYWJlbDpob3Zlcjo6YmVmb3JlIHtcXG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1zd2l0Y2gtc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuI3BhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJBdGxhdGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG5cXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxLjI1ZnIpIG1pbm1heCgxMHB4LCA0ZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcInNpZGViYXIgbWFpblxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXRsYXRhXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgdmFyKC0tc2lkZWJhci1jb2xvcik7XFxufVxcblxcbi5zaXRlLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmhlYWRlciAuc2l0ZS1sb2dvIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4vKiBTSURFQkFSICovXFxubmF2IHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5uYXYgPiBoMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxubmF2ID4gaDIgPiBidXR0b24gPiBpbWcge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5uYXYgPiB1bCA+IGxpIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxubmF2ID4gdWwgPiBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG5uYXYgPiB1bCA+IGxpID4gYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYSA+IGltZyB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkZC1wcm9qZWN0LWZvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi5hZGQtcHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcblxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mb3JtLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmZvcm0tcm93IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkOWRjO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgd2lkdGg6IDI1JTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmZvcm0tcm93IHNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHdpZHRoOiAyMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5mb3JtLXJvdyBsYWJlbCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9ybS1yb3cgdGV4dGFyZWEge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb3JtLXJvdy5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmZvcm0tcm93LmJ1dHRvbnMgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDlkYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ5ZGM7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZvcm0tcm93LmJ1dHRvbnMgPiBidXR0b246Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tcm93LmJ1dHRvbnMgPiBidXR0b246bnRoLWNoaWxkKDIpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXRsYXRhXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLyogTUFJTiAqL1xcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgcGFkZGluZzogNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluID4gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCB2YXIoLS10aGVtZS1jb2xvcik7XFxufVxcblxcbi5zb3J0LWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuc3ZnIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGZpbGw6IHZhcigtLXRoZW1lLWNvbG9yKTtcXG59XFxuXFxuc3ZnOmhvdmVyIHtcXG4gIGZpbGw6ICMyYWJkNjc7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xcbn1cXG4vKiBUYXNrIExpc3QgICovXFxubWFpbiA+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi8qIFRhc2sgSXRlbSAqL1xcbm1haW4gPiB1bCA+IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxufVxcblxcbi50YXNrLXN1bW1hcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZC1idXR0b24sXFxuLmNvbGxhcHNlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4cGFuZC1idXR0b24gPiBpbWcsXFxuLmNvbGxhcHNlLWJ1dHRvbiA+IGltZyB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1hcmstY29tcGxldGUtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYXJrLWNvbXBsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi50YXNrLWRldGFpbHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmZvb3RlciA+IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgPiBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZm9vdGVyID4gaW1nIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCO0FBQ3JCOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsd0JBQXdCOztFQUV4QixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCOztFQUV2QixpQkFBaUI7RUFDakIsaURBQWlEO0VBQ2pELHVDQUF1QztFQUN2Qyx1Q0FBdUM7RUFDdkMsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQixpQ0FBaUM7RUFDakMscUNBQXFDO0FBQ3ZDOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGdEQUFnRDtFQUNoRCxzQ0FBc0M7RUFDdEMsc0NBQXNDO0VBQ3RDLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFD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QVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0EsV0FBVztBQUNYO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsZUFBZTs7RUFFZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogU0lURS1XSURFIFNUWUxFUyAqL1xcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAvKiBMaWdodCBtb2RlICovXFxuICAtLWxpZ2h0LXN3aXRjaC1zaGFkb3c6ICMzNzNkNGU7XFxuICAtLWxpZ2h0LXN3aXRjaC1pY29uOiBcXFwi8J+MmlxcXCI7XFxuICAtLWxpZ2h0LXN3aXRjaC10ZXh0OiBcXFwiZGFyayBtb2RlP1xcXCI7XFxuICAtLWxpZ2h0LXRleHQ6ICMyMjI0MzA7XFxuICAtLWxpZ2h0LWJnOiAjZjdmN2Y3O1xcbiAgLS1saWdodC10aGVtZTogI2QzNGE5NztcXG4gIC0tbGlnaHQtc2lkZWJhcjogI2YxZjFmMTtcXG5cXG4gIC8qIERhcmsgbW9kZSAqL1xcbiAgLS1kYXJrLXN3aXRjaC1zaGFkb3c6ICNmY2U0Nzc7XFxuICAtLWRhcmstc3dpdGNoLWljb246IFxcXCLwn4ydXFxcIjtcXG4gIC0tZGFyay1zd2l0Y2gtdGV4dDogXFxcImxpZ2h0IG1vZGU/XFxcIjtcXG4gIC0tZGFyay10ZXh0OiAjZjdmN2Y3O1xcbiAgLS1kYXJrLWJnOiAjMjIyNDMwO1xcbiAgLS1kYXJrLXRoZW1lOiAjYmQ5M2Y5O1xcbiAgLS1kYXJrLXNpZGViYXI6ICMyODJhM2E7XFxuXFxuICAvKiBEZWZhdWx0IG1vZGUgKi9cXG4gIC0tc3dpdGNoLXNoYWRvdy1jb2xvcjogdmFyKC0tbGlnaHQtc3dpdGNoLXNoYWRvdyk7XFxuICAtLXN3aXRjaC1pY29uOiB2YXIoLS1saWdodC1zd2l0Y2gtaWNvbik7XFxuICAtLXN3aXRjaC10ZXh0OiB2YXIoLS1saWdodC1zd2l0Y2gtdGV4dCk7XFxuICAtLXRleHQtY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xcbiAgLS1iZy1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xcbiAgLS10aGVtZS1jb2xvcjogdmFyKC0tbGlnaHQtdGhlbWUpO1xcbiAgLS1zaWRlYmFyLWNvbG9yOiB2YXIoLS1saWdodC1zaWRlYmFyKTtcXG59XFxuXFxuLyogU3dpdGNoZWQgbW9kZSAqL1xcbi50aGVtZS1zd2l0Y2g6Y2hlY2tlZCB+ICNwYWdlIHtcXG4gIC0tc3dpdGNoLXNoYWRvdy1jb2xvcjogdmFyKC0tZGFyay1zd2l0Y2gtc2hhZG93KTtcXG4gIC0tc3dpdGNoLWljb246IHZhcigtLWRhcmstc3dpdGNoLWljb24pO1xcbiAgLS1zd2l0Y2gtdGV4dDogdmFyKC0tZGFyay1zd2l0Y2gtdGV4dCk7XFxuICAtLXRleHQtY29sb3I6IHZhcigtLWRhcmstdGV4dCk7XFxuICAtLWJnLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXG4gIC0tdGhlbWUtY29sb3I6IHZhcigtLWRhcmstdGhlbWUpO1xcbiAgLS1zaWRlYmFyLWNvbG9yOiB2YXIoLS1kYXJrLXNpZGViYXIpO1xcbn1cXG5cXG4udGhlbWUtc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMXB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XFxufVxcblxcbi5zd2l0Y2gtbGFiZWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiB2YXIoLS1zd2l0Y2gtaWNvbik7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjJzO1xcbn1cXG4uc3dpdGNoLWxhYmVsOjphZnRlciB7XFxuICAvKiBjb250ZW50OiB2YXIoLS1zd2l0Y2gtdGV4dCk7ICovXFxuICBjb2xvcjogdmFyKC0tc3dpdGNoLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi50aGVtZS1zd2l0Y2g6Zm9jdXMgfiAjcGFnZSAuc3dpdGNoLWxhYmVsOjpiZWZvcmUsXFxuLnN3aXRjaC1sYWJlbDpob3Zlcjo6YmVmb3JlIHtcXG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1zd2l0Y2gtc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuI3BhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJBdGxhdGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG5cXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxLjI1ZnIpIG1pbm1heCgxMHB4LCA0ZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcInNpZGViYXIgbWFpblxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXRsYXRhXFxcIjtcXG4gIHNyYzogdXJsKC4uL3NyYy9mb250L0FsYXRhLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZmcpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgdmFyKC0tc2lkZWJhci1jb2xvcik7XFxufVxcblxcbi5zaXRlLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmhlYWRlciAuc2l0ZS1sb2dvIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4vKiBTSURFQkFSICovXFxubmF2IHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5uYXYgPiBoMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxubmF2ID4gaDIgPiBidXR0b24gPiBpbWcge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5uYXYgPiB1bCA+IGxpIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxubmF2ID4gdWwgPiBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG5uYXYgPiB1bCA+IGxpID4gYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYSA+IGltZyB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkZC1wcm9qZWN0LWZvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi5hZGQtcHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcblxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mb3JtLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmZvcm0tcm93IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkOWRjO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgd2lkdGg6IDI1JTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmZvcm0tcm93IHNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHdpZHRoOiAyMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5mb3JtLXJvdyBsYWJlbCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9ybS1yb3cgdGV4dGFyZWEge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDlkYztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb3JtLXJvdy5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmZvcm0tcm93LmJ1dHRvbnMgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDlkYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ5ZGM7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZvcm0tcm93LmJ1dHRvbnMgPiBidXR0b246Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tcm93LmJ1dHRvbnMgPiBidXR0b246bnRoLWNoaWxkKDIpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXRsYXRhXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLyogTUFJTiAqL1xcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgcGFkZGluZzogNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluID4gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCB2YXIoLS10aGVtZS1jb2xvcik7XFxufVxcblxcbi5zb3J0LWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuc3ZnIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGZpbGw6IHZhcigtLXRoZW1lLWNvbG9yKTtcXG59XFxuXFxuc3ZnOmhvdmVyIHtcXG4gIGZpbGw6ICMyYWJkNjc7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xcbn1cXG4vKiBUYXNrIExpc3QgICovXFxubWFpbiA+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi8qIFRhc2sgSXRlbSAqL1xcbm1haW4gPiB1bCA+IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxufVxcblxcbi50YXNrLXN1bW1hcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZC1idXR0b24sXFxuLmNvbGxhcHNlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4cGFuZC1idXR0b24gPiBpbWcsXFxuLmNvbGxhcHNlLWJ1dHRvbiA+IGltZyB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1hcmstY29tcGxldGUtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYXJrLWNvbXBsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi50YXNrLWRldGFpbHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmZvb3RlciA+IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgPiBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZm9vdGVyID4gaW1nIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkluYm94XCIsXG4gICAgdGFza3M6IFtdLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgc3RhdGljIGdldEFsbFByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgfVxufVxuIiwiY29uc3QgdGFza3MgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlRhc2sgMVwiLFxuICAgIC8vIGR1ZURhdGU6IG5ldyBEYXRlKCksXG4gICAgZHVlRGF0ZTogXCIyMDIzLTAzLTAxXCIsXG4gICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgIG5vdGVzOiBcIlRoaXMgaXMgYSBub3RlXCIsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBwcm9qZWN0OiBcIkluYm94XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRhc2sgMlwiLFxuICAgIGR1ZURhdGU6IFwiMjAyMy0wMy0wMlwiLFxuICAgIC8vIGR1ZURhdGU6IG5ldyBEYXRlKCksXG4gICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgIG5vdGVzOiBcIlRoaXMgaXMgYSBub3RlXCIsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBwcm9qZWN0OiBcIkluYm94XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRhc2sgM1wiLFxuICAgIGR1ZURhdGU6IFwiMjAyMy0wMy0wM1wiLFxuICAgIC8vIGR1ZURhdGU6IG5ldyBEYXRlKCksXG4gICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgIG5vdGVzOiBcIlRoaXMgaXMgYSBub3RlXCIsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBwcm9qZWN0OiBcIkluYm94XCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoXG4gICAgbmFtZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBjb21wbGV0ZWQsXG4gICAgcHJvamVjdCA9IFwiSW5ib3hcIixcbiAgICBkdWVEYXRlID0gXCJObyBkYXRlXCJcbiAgKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUYXNrKG5hbWUpIHtcbiAgICByZXR1cm4gdGFza3MuZmluZCgodGFzaykgPT4gdGFzay5uYW1lID09PSBuYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBbGxUYXNrcygpIHtcbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayh0YXNrKSB7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIHN0YXRpYyBzb3J0VGFza3NCeURhdGUoKSB7XG4gICAgcmV0dXJuIHRhc2tzLnNvcnQoKGEsIGIpID0+IGEuZHVlRGF0ZSAtIGIuZHVlRGF0ZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0RGF0ZUZvcm1hdHRlZCgpIHtcbiAgICBjb25zdCBkYXkgPSB0aGlzLmR1ZURhdGUuc3BsaXQoXCIvXCIpWzFdO1xuICAgIGNvbnN0IG1vbnRoID0gdGhpcy5kdWVEYXRlLnNwbGl0KFwiL1wiKVsxXTtcbiAgICBjb25zdCB5ZWFyID0gdGhpcy5kdWVEYXRlLnNwbGl0KFwiL1wiKVsyXTtcbiAgICByZXR1cm4gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIC8vIEluaXRpYWxpemUgdGhlIFVJIG1vZHVsZVxuICBzdGF0aWMgaW5pdCgpIHtcbiAgICAvLyBSZW5kZXIgYWxsIHRhc2tzXG4gICAgVUkucmVuZGVyQWxsVGFza3MoKTtcbiAgICBVSS5yZW5kZXJBbGxQcm9qZWN0cygpO1xuICAgIFVJLnRoZW1lU3dpdGNoZXIoKTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICBVSS5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgY29uc29sZS5sb2coXCJVSSBtb2R1bGUgaW5pdGlhbGl6ZWRcIik7XG4gIH1cblxuICAvLyBUaGlzIGNvZGUgaXMgb25seSB1c2VkIHRvIHJlbWVtYmVyIHRoZW1lIHNlbGVjdGlvblxuICBzdGF0aWMgdGhlbWVTd2l0Y2hlcigpIHtcbiAgICBjb25zdCB0aGVtZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWUtc3dpdGNoXCIpO1xuICAgIHRoZW1lU3dpdGNoLmNoZWNrZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN3aXRjaGVkVGhlbWVcIikgPT09IFwidHJ1ZVwiO1xuXG4gICAgdGhlbWVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGxvY2Fsc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN3aXRjaGVkVGhlbWVcIiwgXCJ0cnVlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVtb3ZlIGl0ZW0gaWYgdGhlbWUgaXMgc3dpdGNoZWQgYmFjayB0byBub3JtYWxcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzd2l0Y2hlZFRoZW1lXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVuZGVyIGEgc2luZ2xlIHRhc2tcbiAgc3RhdGljIHJlbmRlclRhc2sodGFzaykge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTGlzdFwiKTtcblxuICAgIC8vIFJlbmRlciB0YXNrIGxpXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJleHBhbmRhYmxlXCIpO1xuICAgIC8vIFJlbmRlciB0YXNrIHN1bW1hcnkgRGl2XG4gICAgY29uc3QgdGFza1N1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tTdW1tYXJ5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXN1bW1hcnlcIik7XG4gICAgLy8gUmVuZGVyIGNvbXBsZXRlIGJ1dHRvblxuICAgIGNvbnN0IG1hcmtDb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWFya0NvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtYXJrLWNvbXBsZXRlLWJ1dHRvblwiKTtcbiAgICAvLyBSZW5kZXIgVGl0bGVcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgLy8gUmVuZGVyIER1ZSBEYXRlXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgLy8gZHVlRGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdChwYXJzZUlTTyh0YXNrLmR1ZURhdGUpLCBcIk1NL2RkL3l5eXlcIik7XG4gICAgLy8gY29uc29sZS5sb2cocGFyc2VJU08odGFzay5kdWVEYXRlKSk7XG4gICAgLy8gUmVuZGVyIGRldGFpbHMgYnV0dG9uXG4gICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBleHBhbmRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJleHBhbmRCdXR0b25cIik7XG4gICAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJleHBhbmQtYnV0dG9uXCIpO1xuICAgIC8vIFJlbmRlciBkZXRhaWxzIGljb25cbiAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBleHBhbmRJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWcvZXhwYW5kLnN2Z1wiKTtcbiAgICBleHBhbmRCdXR0b24uYXBwZW5kQ2hpbGQoZXhwYW5kSWNvbik7XG5cbiAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gU3VtbWFyeVxuICAgIHRhc2tTdW1tYXJ5LmFwcGVuZENoaWxkKG1hcmtDb21wbGV0ZUJ1dHRvbik7XG4gICAgdGFza1N1bW1hcnkuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgdGFza1N1bW1hcnkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgdGFza1N1bW1hcnkuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcbiAgICAvLyBBcHBlbmQgU3VtbWFyeSB0byBsaVxuICAgIGxpLmFwcGVuZENoaWxkKHRhc2tTdW1tYXJ5KTtcbiAgICAvLyBSZW5kZXIgdGFzayBkZXRhaWxzXG4gICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XG4gICAgLy8gUmVuZGVyIFRhc2sgUHJvamVjdFxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByb2plY3RcIik7XG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke3Rhc2sucHJvamVjdH1gO1xuICAgIC8vIFJlbmRlciBUYXNrIE5vdGVzXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBub3Rlcy5jbGFzc0xpc3QuYWRkKFwidGFzay1ub3Rlc1wiKTtcbiAgICBub3Rlcy50ZXh0Q29udGVudCA9IGBOb3RlczogJHt0YXNrLm5vdGVzfWA7XG4gICAgLy8gUmVuZGVyIFRhc2sgUHJpb3JpdHlcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YDtcbiAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQobm90ZXMpO1xuICAgIGxpLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgICAvLyBBcHBlbmQgbGkgdG8gdGFza0xpc3RcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGV4cGFuZCBidXR0b25cbiAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXhwYW5kIGJ1dHRvbiBjbGlja2VkXCIpO1xuICAgICAgdGFza0RldGFpbHMuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBibG9ja1wiKTtcbiAgICAgIGV4cGFuZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmVcIik7XG4gICAgICBjb25zdCBjb2xsYXBzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBjb2xsYXBzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2UtYnV0dG9uXCIpO1xuICAgICAgY29uc3QgY29sbGFwc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGNvbGxhcHNlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1nL2V4cGFuZC1sZXNzLnN2Z1wiKTtcbiAgICAgIGNvbGxhcHNlQnV0dG9uLmFwcGVuZENoaWxkKGNvbGxhcHNlSWNvbik7XG4gICAgICB0YXNrU3VtbWFyeS5hcHBlbmRDaGlsZChjb2xsYXBzZUJ1dHRvbik7XG4gICAgICBjb2xsYXBzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrRGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmVcIik7XG4gICAgICAgIGV4cGFuZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrXCIpO1xuICAgICAgICBjb2xsYXBzZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRXhwYW5kIHRhc2sgZGV0YWlsc1xuICBzdGF0aWMgZXhwYW5kVGFzayh0YXNrLCBsaSwgZXhwYW5kQnV0dG9uKSB7XG4gICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XG4gICAgLy8gUmVuZGVyIFRhc2sgUHJvamVjdFxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByb2plY3RcIik7XG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHRhc2sucHJvamVjdDtcbiAgICAvLyBSZW5kZXIgVGFzayBOb3Rlc1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbm90ZXMuY2xhc3NMaXN0LmFkZChcInRhc2stbm90ZXNcIik7XG4gICAgbm90ZXMudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuICAgIC8vIFJlbmRlciBUYXNrIFByaW9yaXR5XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgLy8gLy8gUmVuZGVyIFRhc2sgRWRpdCBCdXR0b25cbiAgICAvLyBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAvLyBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ1dHRvblwiKTtcbiAgICAvLyAvLyBSZW5kZXIgRWRpdCBJY29uXG4gICAgLy8gY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIC8vIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWcvZWRpdC5zdmdcIik7XG4gICAgLy8gZWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgLy8gLy8gUmVuZGVyIFRhc2sgRGVsZXRlIEJ1dHRvblxuICAgIC8vIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgLy8gZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xuICAgIC8vIC8vIFJlbmRlciBEZWxldGUgSWNvblxuICAgIC8vIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIC8vIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltZy9kZWxldGUuc3ZnXCIpO1xuICAgIC8vIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAvLyBSZW5kZXIgVGFzayBDb2xsYXBzZSBCdXR0b25cbiAgICBjb25zdCBjb2xsYXBzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29sbGFwc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlLWJ1dHRvblwiKTtcbiAgICAvLyBSZW5kZXIgQ29sbGFwc2UgSWNvblxuICAgIC8vIGNvbnN0IGNvbGxhcHNlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgLy8gY29sbGFwc2VJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWcvY29sbGFwc2Uuc3ZnXCIpO1xuICAgIC8vIGNvbGxhcHNlQnV0dG9uLmFwcGVuZENoaWxkKGNvbGxhcHNlSWNvbik7XG5cbiAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gdGFza0RldGFpbHNcbiAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZChub3Rlcyk7XG4gICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGNvbGxhcHNlQnV0dG9uKTtcbiAgICAvLyB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAvLyB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIC8vIEFwcGVuZCB0YXNrRGV0YWlscyB0byBsaVxuICAgIGxpLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgICBleHBhbmRCdXR0b24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbiAgfVxuXG4gIC8vIFJlbmRlciBhbGwgdGFza3NcbiAgc3RhdGljIHJlbmRlckFsbFRhc2tzKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUmVuZGVyaW5nIGFsbCB0YXNrc1wiKTtcbiAgICBjb25zdCB0YXNrcyA9IFRhc2suZ2V0QWxsVGFza3MoKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0xpc3RcIik7XG4gICAgdGFza0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBVSS5yZW5kZXJUYXNrKHRhc2spO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVuZGVyIHByb2plY3RcbiAgc3RhdGljIHJlbmRlclByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TGlzdFwiKTtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAvLyBSZW5kZXIgcHJvamVjdCBuYW1lXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIC8vIC8vIFJlbmRlciBwcm9qZWN0IGRlbGV0ZSBidXR0b25cbiAgICAvLyBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIC8vIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ1dHRvblwiKTtcbiAgICAvLyAvLyBSZW5kZXIgZGVsZXRlIGljb25cbiAgICAvLyBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAvLyBkZWxldGVJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWcvZGVsZXRlLnN2Z1wiKTtcbiAgICAvLyBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIGxpXG4gICAgbGkuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgLy8gbGkuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAvLyBBcHBlbmQgbGkgdG8gcHJvamVjdExpc3RcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cblxuICAvLyBSZW5kZXIgYWxsIHByb2plY3RzXG4gIHN0YXRpYyByZW5kZXJBbGxQcm9qZWN0cygpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJlbmRlcmluZyBhbGwgcHJvamVjdHNcIik7XG4gICAgY29uc3QgcHJvamVjdHMgPSBQcm9qZWN0LmdldEFsbFByb2plY3RzKCk7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RMaXN0XCIpO1xuICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgVUkucmVuZGVyUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNob3cgcHJvamVjdCBmb3JtXG4gIHN0YXRpYyBzaG93UHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RGb3JtXCIpO1xuICAgIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogYmxvY2tcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0SW5wdXRcIikuZm9jdXMoKTtcbiAgfVxuXG4gIC8vIEhpZGUgcHJvamVjdCBmb3JtXG4gIHN0YXRpYyBoaWRlUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc29sZS5sb2coXCJIaWRpbmcgcHJvamVjdCBmb3JtXCIpO1xuICB9XG5cbiAgLy8gU2hvdyB0YXNrIGZvcm1cbiAgc3RhdGljIHNob3dUYXNrRm9ybSgpIHtcbiAgICBVSS5hZGRGb3JtU2VsZWN0T3B0aW9ucygpO1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrRm9ybVwiKTtcbiAgICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrXCIpO1xuICB9XG5cbiAgLy8gQWRkIHRhc2sgZm9ybSBzdWJtaXRcbiAgc3RhdGljIGFkZFRhc2tGb3JtU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza05hbWVcIikudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0XCIpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3Rlc1wiKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBudWxsO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hcIikuY2hlY2tlZCkge1xuICAgICAgcHJpb3JpdHkgPSBcImhpZ2hcIjtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaXVtXCIpLmNoZWNrZWQpIHtcbiAgICAgIHByaW9yaXR5ID0gXCJtZWRpdW1cIjtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93XCIpLmNoZWNrZWQpIHtcbiAgICAgIHByaW9yaXR5ID0gXCJsb3dcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhuYW1lLCBwcmlvcml0eSwgbm90ZXMsIGZhbHNlLCBwcm9qZWN0LCBkdWVEYXRlKTtcbiAgICBQcm9qZWN0LmFkZFRhc2tUb1Byb2plY3QocHJvamVjdCwgdGFzayk7XG4gICAgVGFzay5hZGRUYXNrKHRhc2spO1xuICAgIFVJLnJlbmRlclRhc2sodGFzayk7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRhc2tGb3JtXCIpO1xuICAgIHRhc2tGb3JtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZVwiKTtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICB9XG5cbiAgLy8gQWRkIHByb2plY3QgZm9ybSBzdWJtaXRcbiAgc3RhdGljIGFkZFByb2plY3RGb3JtU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdElucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICBQcm9qZWN0LmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgVUkucmVuZGVyQWxsUHJvamVjdHMoKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdEZvcm1cIik7XG4gICAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lXCIpO1xuICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gIH1cblxuICAvLyBBZGQgRXZlbnQgTGlzdGVuZXJzXG4gIHN0YXRpYyBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0QnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLnNob3dQcm9qZWN0Rm9ybSk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdEZvcm1cIik7XG4gICAgYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBVSS5hZGRQcm9qZWN0Rm9ybVN1Ym1pdCk7XG5cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrQnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLnNob3dUYXNrRm9ybSk7XG5cbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVGFza0Zvcm1cIik7XG4gICAgYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBVSS5hZGRUYXNrRm9ybVN1Ym1pdCk7XG4gICAgYWRkVGFza0Zvcm0ucmVzZXQoKTtcblxuICAgIGNvbnN0IHNvcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NvcnRCdXR0b25cIik7XG4gICAgc29ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuc29ydFRhc2tBc2NlbmRpbmcpO1xuICB9XG5cbiAgLy8gQWRkIEZvcm0gU2VsZWN0IE9wdGlvbnNcbiAgc3RhdGljIGFkZEZvcm1TZWxlY3RPcHRpb25zKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdC5nZXRBbGxQcm9qZWN0cygpO1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIik7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9qZWN0Lm5hbWUpO1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFVJLmluaXQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9