/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/contact"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshaan%2FDesktop%2FProgramming%2FWebsites%2Flau-new%2Fpages%2Fcontact.js&page=%2Fcontact!":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshaan%2FDesktop%2FProgramming%2FWebsites%2Flau-new%2Fpages%2Fcontact.js&page=%2Fcontact! ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/contact\",\n      function () {\n        return __webpack_require__(/*! ./pages/contact.js */ \"./pages/contact.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/contact\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRnNoYWFuJTJGRGVza3RvcCUyRlByb2dyYW1taW5nJTJGV2Vic2l0ZXMlMkZsYXUtbmV3JTJGcGFnZXMlMkZjb250YWN0LmpzJnBhZ2U9JTJGY29udGFjdCEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw4Q0FBb0I7QUFDM0M7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzI2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9jb250YWN0XCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9jb250YWN0LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9jb250YWN0XCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshaan%2FDesktop%2FProgramming%2FWebsites%2Flau-new%2Fpages%2Fcontact.js&page=%2Fcontact!\n"));

/***/ }),

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fave_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fave-grid */ \"./components/fave-grid.js\");\nvar _this = undefined;\n\n\n\n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 2000,\n        y: 0\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 1,\n        x: -2000,\n        y: 0\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_node_modules_framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.5,\n            type: \"easeInOut\"\n        },\n        style: {\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            title,\n                            \" - Shaan Dussoye\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/components/layouts/article.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/components/layouts/article.js\",\n                    lineNumber: 15,\n                    columnNumber: 21\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fave_grid__WEBPACK_IMPORTED_MODULE_2__.GridItemStyle, {}, void 0, false, {\n                    fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/components/layouts/article.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/components/layouts/article.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXlEO0FBQzdCO0FBQ2lCO0FBRTdDLElBQU1HLFFBQVEsR0FBRztJQUNiQyxNQUFNLEVBQUU7UUFBQ0MsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLElBQUk7UUFBRUMsQ0FBQyxFQUFDLENBQUM7S0FBRTtJQUNuQ0MsS0FBSyxFQUFFO1FBQUVILE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBQyxDQUFDO0tBQUM7SUFDL0JFLElBQUksRUFBRTtRQUFFSixPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQUVDLENBQUMsRUFBQyxDQUFDO0tBQUM7Q0FDckM7QUFFRCxJQUFNRyxNQUFNLEdBQUc7UUFBR0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEtBQUssU0FBTEEsS0FBSzt5QkFDN0IsOERBQUNaLHVFQUFjO1FBQ2ZjLE9BQU8sRUFBRyxRQUFRO1FBQUNDLE9BQU8sRUFBRyxPQUFPO1FBQUNOLElBQUksRUFBRyxNQUFNO1FBQUNOLFFBQVEsRUFBSUEsUUFBUTtRQUFFYSxVQUFVLEVBQUk7WUFBQ0MsUUFBUSxFQUFFLEdBQUc7WUFBRUMsSUFBSSxFQUFFLFdBQVc7U0FBQztRQUFFQyxLQUFLLEVBQUk7WUFBQ0MsUUFBUSxFQUFFLFVBQVU7U0FBQztrQkFDMUo7O2dCQUNLUixLQUFLLGtCQUFNLDhEQUFDWCxrREFBSTs4QkFDakIsNEVBQUNXLE9BQUs7OzRCQUFFQSxLQUFLOzRCQUFDLGtCQUFnQjs7Ozs7OzZCQUFROzs7Ozt5QkFBTztnQkFDNUNELFFBQVE7OEJBQ1QsOERBQUNULHFEQUFhOzs7O3lCQUFHOzt3QkFDbEI7Ozs7O2FBQ2M7Q0FDcEI7QUFWS1EsS0FBQUEsTUFBTTtBQVlaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlLmpzP2VmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgR3JpZEl0ZW1TdHlsZSB9IGZyb20gIFwiLi4vZmF2ZS1ncmlkXCJcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7b3BhY2l0eTogMCwgeDogMjAwMCwgeTowIH0sXG4gICAgZW50ZXI6IHsgb3BhY2l0eTogMSwgeDogMCwgeTowfSxcbiAgICBleGl0OiB7IG9wYWNpdHk6IDEsIHg6IC0yMDAwLCB5OjB9XG59XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiAgKFxuICAgIDxtb3Rpb24uYXJ0aWNsZVxuICAgIGluaXRpYWwgPSBcImhpZGRlblwiIGFuaW1hdGUgPSBcImVudGVyXCIgZXhpdCA9IFwiZXhpdFwiIHZhcmlhbnRzID0ge3ZhcmlhbnRzfSB0cmFuc2l0aW9uID0ge3tkdXJhdGlvbjogMC41LCB0eXBlOiBcImVhc2VJbk91dFwifX0gc3R5bGUgPSB7e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCJ9fT5cbiAgICA8PlxuICAgICAgICB7dGl0bGUgJiYgKCA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX0gLSBTaGFhbiBEdXNzb3llPC90aXRsZT48L0hlYWQ+KX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8R3JpZEl0ZW1TdHlsZSAvPlxuICAgIDwvPlxuICAgIDwvbW90aW9uLmFydGljbGU+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdLCJuYW1lcyI6WyJtb3Rpb24iLCJIZWFkIiwiR3JpZEl0ZW1TdHlsZSIsInZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsIngiLCJ5IiwiZW50ZXIiLCJleGl0IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImFydGljbGUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInR5cGUiLCJzdHlsZSIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n"));

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Contact = function() {\n    _s();\n    var btnBgColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"#B65FCF\", \"#126180\");\n    var btnHoverBgColors = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"#a841c6\", \"#0d475e\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            maxW: \"container.md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                mt: 20,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                        variant: \"section-title\",\n                        children: \"Email Me\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/pages/contact.js\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        fontFamily: \"Creato\",\n                        px: 3,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"https://formsubmit.co/jordanlau502@gmail.com\",\n                            method: \"POST\",\n                            className: \"email-form\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"hidden\",\n                                    name: \"_subject\",\n                                    value: \"New Email from Portfolio\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/pages/contact.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    name: \"Email\",\n                                    placeholder: \"Email Address\",\n                                    required: true,\n                                    className: \"email-input\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/pages/contact.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"Name\",\n                                    placeholder: \"Name\",\n                                    className: \"email-input\",\n                                    required: true,\n                                    color: \"black\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/pages/contact.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    type: \"text\",\n                                    name: \"Message\",\n                                    className: \"message\",\n                                    placeholder: \"Write Message\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/pages/contact.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"hidden\",\n                                    name: \"_next\",\n                                    value: \"http://jordan-lau.vercel.app/thanks\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/pages/contact.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    type: \"submit\",\n                                    fontWeight: \"normal\",\n                                    fontSize: 18,\n                                    backgroundColor: btnBgColor,\n                                    color: \"white\",\n                                    _hover: {\n                                        bg: btnHoverBgColors,\n                                        color: \"#F3F2ED\"\n                                    },\n                                    className: \"btn font-out\",\n                                    children: \"Send Email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/pages/contact.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/pages/contact.js\",\n                            lineNumber: 17,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/pages/contact.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/pages/contact.js\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/pages/contact.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/pages/contact.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, _this);\n};\n_s(Contact, \"tTqyyPD4p+3GWxpsoYZhlKbYgzA=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQXFGO0FBQ25DOztBQUVsRCxJQUFNTSxPQUFPLEdBQUcsV0FBTTs7SUFFbEIsSUFBTUMsVUFBVSxHQUFHSCxtRUFBaUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO0lBQzFELElBQU1JLGdCQUFnQixHQUFHSixtRUFBaUIsQ0FBQyxTQUFTLEVBQUMsU0FBUyxDQUFDO0lBRS9ELHFCQUNJLDhEQUFDQyxtRUFBTTtrQkFDSCw0RUFBQ0osdURBQVM7WUFBQ1EsSUFBSSxFQUFHLGNBQWM7c0JBQzVCLDRFQUFDVCxpREFBRztnQkFBRVUsRUFBRSxFQUFJLEVBQUU7O2tDQUNWLDhEQUFDUixxREFBTzt3QkFBQ1MsT0FBTyxFQUFHLGVBQWU7a0NBQUMsVUFFbkM7Ozs7OzZCQUFVO2tDQUNWLDhEQUFDWCxpREFBRzt3QkFBQ1ksVUFBVSxFQUFHLFFBQVE7d0JBQUNDLEVBQUUsRUFBSSxDQUFDO2tDQUM5Qiw0RUFBQ0MsTUFBSTs0QkFBQ0MsTUFBTSxFQUFDLDhDQUE4Qzs0QkFBQ0MsTUFBTSxFQUFDLE1BQU07NEJBQUNDLFNBQVMsRUFBRyxZQUFZOzs4Q0FDOUYsOERBQUNDLE9BQUs7b0NBQUNDLElBQUksRUFBRyxRQUFRO29DQUFDQyxJQUFJLEVBQUcsVUFBVTtvQ0FBQ0MsS0FBSyxFQUFHLDBCQUEwQjs7Ozs7eUNBQUU7OENBQzdFLDhEQUFDSCxPQUFLO29DQUFDQyxJQUFJLEVBQUcsT0FBTztvQ0FBQ0MsSUFBSSxFQUFHLE9BQU87b0NBQUNFLFdBQVcsRUFBRyxlQUFlO29DQUFDQyxRQUFRO29DQUFDTixTQUFTLEVBQUcsYUFBYTs7Ozs7eUNBQUU7OENBQ3ZHLDhEQUFDQyxPQUFLO29DQUFDQyxJQUFJLEVBQUMsTUFBTTtvQ0FBQ0MsSUFBSSxFQUFDLE1BQU07b0NBQUNFLFdBQVcsRUFBRyxNQUFNO29DQUFDTCxTQUFTLEVBQUcsYUFBYTtvQ0FBQ00sUUFBUTtvQ0FBQ0MsS0FBSyxFQUFHLE9BQU87Ozs7O3lDQUFFOzhDQUN4Ryw4REFBQ0MsVUFBUTtvQ0FBQ04sSUFBSSxFQUFDLE1BQU07b0NBQUNDLElBQUksRUFBQyxTQUFTO29DQUFDSCxTQUFTLEVBQUcsU0FBUztvQ0FBQ0ssV0FBVyxFQUFHLGVBQWU7b0NBQUNDLFFBQVE7Ozs7O3lDQUFZOzhDQUM3Ryw4REFBQ0wsT0FBSztvQ0FBQ0MsSUFBSSxFQUFHLFFBQVE7b0NBQUNDLElBQUksRUFBRyxPQUFPO29DQUFDQyxLQUFLLEVBQUcscUNBQXFDOzs7Ozt5Q0FBRTs4Q0FDckYsOERBQUNsQixvREFBTTtvQ0FBQ2dCLElBQUksRUFBQyxRQUFRO29DQUFDTyxVQUFVLEVBQUcsUUFBUTtvQ0FBQ0MsUUFBUSxFQUFJLEVBQUU7b0NBQUVDLGVBQWUsRUFBSXJCLFVBQVU7b0NBQUVpQixLQUFLLEVBQUcsT0FBTztvQ0FBQ0ssTUFBTSxFQUFFO3dDQUFFQyxFQUFFLEVBQUV0QixnQkFBZ0I7d0NBQUVnQixLQUFLLEVBQUUsU0FBUztxQ0FBQztvQ0FBR1AsU0FBUyxFQUFHLGNBQWM7OENBQUUsWUFBVTs7Ozs7eUNBQVM7Ozs7OztpQ0FDM007Ozs7OzZCQUNMOzs7Ozs7cUJBQ0o7Ozs7O2lCQUNFOzs7OzthQUNQLENBQ1o7Q0FDSjtHQTFCS1gsT0FBTzs7UUFFVUYsK0RBQWlCO1FBQ1hBLCtEQUFpQjs7O0FBSHhDRSxLQUFBQSxPQUFPO0FBNEJiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRhY3QuanM/NGU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgSGVhZGluZywgQnV0dG9uLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlXCJcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGJ0bkJnQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZShcIiNCNjVGQ0ZcIiwgXCIjMTI2MTgwXCIpXG4gICAgY29uc3QgYnRuSG92ZXJCZ0NvbG9ycyA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiI2E4NDFjNlwiLFwiIzBkNDc1ZVwiKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXID0gXCJjb250YWluZXIubWRcIj5cbiAgICAgICAgICAgICAgICA8Qm94ICBtdCA9IHsyMH0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHZhcmlhbnQgPSBcInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIE1lXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBmb250RmFtaWx5ID0gXCJDcmVhdG9cIiBweCA9IHszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vZm9ybXN1Ym1pdC5jby9qb3JkYW5sYXU1MDJAZ21haWwuY29tXCIgbWV0aG9kPVwiUE9TVFwiIGNsYXNzTmFtZSA9IFwiZW1haWwtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJoaWRkZW5cIiBuYW1lID0gXCJfc3ViamVjdFwiIHZhbHVlID0gXCJOZXcgRW1haWwgZnJvbSBQb3J0Zm9saW9cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImVtYWlsXCIgbmFtZSA9IFwiRW1haWxcIiBwbGFjZWhvbGRlciA9IFwiRW1haWwgQWRkcmVzc1wiIHJlcXVpcmVkIGNsYXNzTmFtZSA9IFwiZW1haWwtaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIk5hbWVcIiBwbGFjZWhvbGRlciA9IFwiTmFtZVwiIGNsYXNzTmFtZSA9IFwiZW1haWwtaW5wdXRcIiByZXF1aXJlZCBjb2xvciA9IFwiYmxhY2tcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIk1lc3NhZ2VcIiBjbGFzc05hbWUgPSBcIm1lc3NhZ2VcIiBwbGFjZWhvbGRlciA9IFwiV3JpdGUgTWVzc2FnZVwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImhpZGRlblwiIG5hbWUgPSBcIl9uZXh0XCIgdmFsdWUgPSBcImh0dHA6Ly9qb3JkYW4tbGF1LnZlcmNlbC5hcHAvdGhhbmtzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGZvbnRXZWlnaHQgPSBcIm5vcm1hbFwiIGZvbnRTaXplID0gezE4fSBiYWNrZ3JvdW5kQ29sb3IgPSB7YnRuQmdDb2xvcn0gY29sb3IgPSBcIndoaXRlXCIgX2hvdmVyPXt7IGJnOiBidG5Ib3ZlckJnQ29sb3JzLCBjb2xvcjogXCIjRjNGMkVEXCJ9fSAgY2xhc3NOYW1lID0gXCJidG4gZm9udC1vdXRcIiA+U2VuZCBFbWFpbDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3QiXSwibmFtZXMiOlsiQm94IiwiQ29udGFpbmVyIiwiSGVhZGluZyIsIkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiTGF5b3V0IiwiQ29udGFjdCIsImJ0bkJnQ29sb3IiLCJidG5Ib3ZlckJnQ29sb3JzIiwibWF4VyIsIm10IiwidmFyaWFudCIsImZvbnRGYW1pbHkiLCJweCIsImZvcm0iLCJhY3Rpb24iLCJtZXRob2QiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiY29sb3IiLCJ0ZXh0YXJlYSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsIl9ob3ZlciIsImJnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshaan%2FDesktop%2FProgramming%2FWebsites%2Flau-new%2Fpages%2Fcontact.js&page=%2Fcontact!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);