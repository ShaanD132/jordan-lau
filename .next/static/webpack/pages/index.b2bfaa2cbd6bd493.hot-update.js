"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fave_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fave-grid */ \"./components/fave-grid.js\");\nvar _this = undefined;\n\n\n\n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 10000,\n        y: 0\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 1,\n        x: -10000,\n        y: 0\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_node_modules_framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.8,\n            type: \"easeInOut\"\n        },\n        style: {\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            title,\n                            \" - Shaan Dussoye\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/components/layouts/article.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/components/layouts/article.js\",\n                    lineNumber: 15,\n                    columnNumber: 21\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fave_grid__WEBPACK_IMPORTED_MODULE_2__.GridItemStyle, {}, void 0, false, {\n                    fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/components/layouts/article.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/components/layouts/article.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXlEO0FBQzdCO0FBQ2lCO0FBRTdDLElBQU1HLFFBQVEsR0FBRztJQUNiQyxNQUFNLEVBQUU7UUFBQ0MsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLEtBQUs7UUFBRUMsQ0FBQyxFQUFDLENBQUM7S0FBRTtJQUNwQ0MsS0FBSyxFQUFFO1FBQUVILE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBQyxDQUFDO0tBQUM7SUFDL0JFLElBQUksRUFBRTtRQUFFSixPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQyxLQUFLO1FBQUVDLENBQUMsRUFBQyxDQUFDO0tBQUM7Q0FDdEM7QUFFRCxJQUFNRyxNQUFNLEdBQUc7UUFBR0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEtBQUssU0FBTEEsS0FBSzt5QkFDN0IsOERBQUNaLHVFQUFjO1FBQ2ZjLE9BQU8sRUFBRyxRQUFRO1FBQUNDLE9BQU8sRUFBRyxPQUFPO1FBQUNOLElBQUksRUFBRyxNQUFNO1FBQUNOLFFBQVEsRUFBSUEsUUFBUTtRQUFFYSxVQUFVLEVBQUk7WUFBQ0MsUUFBUSxFQUFFLEdBQUc7WUFBRUMsSUFBSSxFQUFFLFdBQVc7U0FBQztRQUFFQyxLQUFLLEVBQUk7WUFBQ0MsUUFBUSxFQUFFLFVBQVU7U0FBQztrQkFDMUo7O2dCQUNLUixLQUFLLGtCQUFNLDhEQUFDWCxrREFBSTs4QkFDakIsNEVBQUNXLE9BQUs7OzRCQUFFQSxLQUFLOzRCQUFDLGtCQUFnQjs7Ozs7OzZCQUFROzs7Ozt5QkFBTztnQkFDNUNELFFBQVE7OEJBQ1QsOERBQUNULHFEQUFhOzs7O3lCQUFHOzt3QkFDbEI7Ozs7O2FBQ2M7Q0FDcEI7QUFWS1EsS0FBQUEsTUFBTTtBQVlaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlLmpzP2VmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgR3JpZEl0ZW1TdHlsZSB9IGZyb20gIFwiLi4vZmF2ZS1ncmlkXCJcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7b3BhY2l0eTogMCwgeDogMTAwMDAsIHk6MCB9LFxuICAgIGVudGVyOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHk6MH0sXG4gICAgZXhpdDogeyBvcGFjaXR5OiAxLCB4OiAtMTAwMDAsIHk6MH1cbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+ICAoXG4gICAgPG1vdGlvbi5hcnRpY2xlXG4gICAgaW5pdGlhbCA9IFwiaGlkZGVuXCIgYW5pbWF0ZSA9IFwiZW50ZXJcIiBleGl0ID0gXCJleGl0XCIgdmFyaWFudHMgPSB7dmFyaWFudHN9IHRyYW5zaXRpb24gPSB7e2R1cmF0aW9uOiAwLjgsIHR5cGU6IFwiZWFzZUluT3V0XCJ9fSBzdHlsZSA9IHt7cG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxuICAgIDw+XG4gICAgICAgIHt0aXRsZSAmJiAoIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfSAtIFNoYWFuIER1c3NveWU8L3RpdGxlPjwvSGVhZD4pfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxHcmlkSXRlbVN0eWxlIC8+XG4gICAgPC8+XG4gICAgPC9tb3Rpb24uYXJ0aWNsZT5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il0sIm5hbWVzIjpbIm1vdGlvbiIsIkhlYWQiLCJHcmlkSXRlbVN0eWxlIiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieCIsInkiLCJlbnRlciIsImV4aXQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiYXJ0aWNsZSIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidHlwZSIsInN0eWxlIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n"));

/***/ })

});