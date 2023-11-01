"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/AuthorizationButton.tsx":
/*!************************************************!*\
  !*** ./src/components/AuthorizationButton.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AuthorizationButton = ()=>{\n    const handleAuthorization = async ()=>{\n        try {\n            // Make an HTTP GET request to your TypeScript server's /api/login route\n            const response = await fetch(\"/api/login\");\n            // If the response status is OK (200), the redirection to Spotify's authorization page will happen.\n            if (response.status === 200) {\n                console.log(\"Redirecting to Spotify authorization page...\");\n            } else {\n                console.error(\"Failed to initiate authorization.\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleAuthorization,\n            children: \"Authorize with Spotify\"\n        }, void 0, false, {\n            fileName: \"/home/matt/projects/botify/src/components/AuthorizationButton.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/matt/projects/botify/src/components/AuthorizationButton.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorizationButton);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRob3JpemF0aW9uQnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsc0JBQXNCLElBQU07SUFDaEMsTUFBTUMsc0JBQXNCLFVBQVk7UUFDdEMsSUFBSTtZQUNGLHdFQUF3RTtZQUN4RSxNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFFN0IsbUdBQW1HO1lBQ25HLElBQUlELFNBQVNFLE1BQU0sS0FBSyxLQUFLO2dCQUMzQkMsUUFBUUMsR0FBRyxDQUFDO1lBQ2QsT0FBTztnQkFDTEQsUUFBUUUsS0FBSyxDQUFDO1lBQ2hCLENBQUM7UUFDSCxFQUFFLE9BQU9BLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLFVBQVVBO1FBQzFCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDO1lBQU9DLFNBQVNUO3NCQUFxQjs7Ozs7Ozs7Ozs7QUFHNUM7QUFFQSxpRUFBZUQsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm90aWZ5Ly4vc3JjL2NvbXBvbmVudHMvQXV0aG9yaXphdGlvbkJ1dHRvbi50c3g/MTFiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBdXRob3JpemF0aW9uQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBoYW5kbGVBdXRob3JpemF0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNYWtlIGFuIEhUVFAgR0VUIHJlcXVlc3QgdG8geW91ciBUeXBlU2NyaXB0IHNlcnZlcidzIC9hcGkvbG9naW4gcm91dGVcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbG9naW4nKTtcbiAgICAgIFxuICAgICAgLy8gSWYgdGhlIHJlc3BvbnNlIHN0YXR1cyBpcyBPSyAoMjAwKSwgdGhlIHJlZGlyZWN0aW9uIHRvIFNwb3RpZnkncyBhdXRob3JpemF0aW9uIHBhZ2Ugd2lsbCBoYXBwZW4uXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1JlZGlyZWN0aW5nIHRvIFNwb3RpZnkgYXV0aG9yaXphdGlvbiBwYWdlLi4uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gaW5pdGlhdGUgYXV0aG9yaXphdGlvbi4nKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUF1dGhvcml6YXRpb259PkF1dGhvcml6ZSB3aXRoIFNwb3RpZnk8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhvcml6YXRpb25CdXR0b247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBdXRob3JpemF0aW9uQnV0dG9uIiwiaGFuZGxlQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AuthorizationButton.tsx\n");

/***/ }),

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AuthorizationButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AuthorizationButton */ \"./src/components/AuthorizationButton.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Home = ()=>{\n    const scrollToRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative no-scrollbar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthorizationButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/matt/projects/botify/src/pages/Home.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/matt/projects/botify/src/pages/Home.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSG9tZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRTtBQUNwQztBQUUvQixNQUFNRSxPQUFPLElBQU07SUFFakIsTUFBTUMsY0FBY0YsNkNBQU1BLENBQU0sSUFBSTtJQUVwQyxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0wsdUVBQW1CQTs7Ozs7Ozs7OztBQUcxQjtBQUVBLGlFQUFlRSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm90aWZ5Ly4vc3JjL3BhZ2VzL0hvbWUudHN4PzYxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQXV0aG9yaXphdGlvbkJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0F1dGhvcml6YXRpb25CdXR0b25cIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIGNvbnN0IHNjcm9sbFRvUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG5vLXNjcm9sbGJhclwiPlxuICAgICAgPEF1dGhvcml6YXRpb25CdXR0b24+PC9BdXRob3JpemF0aW9uQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiQXV0aG9yaXphdGlvbkJ1dHRvbiIsInVzZVJlZiIsIkhvbWUiLCJzY3JvbGxUb1JlZiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Home.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./src/pages/Home.tsx\");\n\n\n\nfunction Index() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/matt/projects/botify/src/pages/index.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/matt/projects/botify/src/pages/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFFQTtBQUVYLFNBQVNFLFFBQVE7SUFDOUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNILDZDQUFJQTs7Ozs7Ozs7OztBQUdYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3RpZnkvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naC1zY3JlZW4nPlxuICAgICAgPEhvbWU+PC9Ib21lPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIb21lIiwiSW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();