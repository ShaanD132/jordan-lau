"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/theme-toggle.js":
/*!************************************!*\
  !*** ./components/theme-toggle.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ThemeToggle = function() {\n    _s();\n    var toggleColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)().toggleColorMode;\n    var ThemeButtonColors = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"#e4edff\", \"#fdf0bd\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_node_modules_framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n        exitBeforeEnter: true,\n        initial: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_node_modules_framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            style: {\n                display: \"inline-block\"\n            },\n            initial: {\n                y: 0,\n                rotate: 0,\n                opacity: 0\n            },\n            animate: {\n                rotate: -180,\n                opacity: 1\n            },\n            exit: {\n                rotate: 0,\n                opacity: 0\n            },\n            transition: {\n                duration: 0.2\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                \"aria-label\": \"Toggle theme\",\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"accentColor\", \"#fbe384\"),\n                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"black\", \"black\"),\n                icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {}, void 0, false, void 0, void 0), /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {}, void 0, false, void 0, void 0)),\n                onClick: toggleColorMode,\n                _hover: {\n                    bg: ThemeButtonColors\n                }\n            }, void 0, false, {\n                fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/components/theme-toggle.js\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, _this)\n        }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"light\", \"dark\"), false, {\n            fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/components/theme-toggle.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/shaan/Desktop/Programming/Websites/lau-new/components/theme-toggle.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, _this);\n};\n_s(ThemeToggle, \"ZUI+nOBBI/rDP52jF8N15z9Tw3Y=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue\n    ];\n});\n_c = ThemeToggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggle);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBc0U7QUFDTztBQUN6Qjs7QUFHcEQsSUFBTU8sV0FBVyxHQUFHLFdBQU07O0lBQ3RCLElBQU0sZUFBZ0IsR0FBSUosOERBQVksRUFBRSxDQUFqQ0ssZUFBZTtJQUN0QixJQUFNQyxpQkFBaUIsR0FBR0wsbUVBQWlCLENBQUMsU0FBUyxFQUFDLFNBQVMsQ0FBQztJQUVoRSxxQkFDSSw4REFBQ0osd0VBQWU7UUFBQ1UsZUFBZTtRQUFDQyxPQUFPLEVBQUUsS0FBSztrQkFDM0MsNEVBQUNWLG1FQUFVO1lBQ1hZLEtBQUssRUFBRTtnQkFBRUMsT0FBTyxFQUFFLGNBQWM7YUFBRTtZQUVsQ0gsT0FBTyxFQUFFO2dCQUFFSSxDQUFDLEVBQUMsQ0FBQztnQkFBRUMsTUFBTSxFQUFFLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO2FBQUU7WUFDdkNDLE9BQU8sRUFBRTtnQkFBRUYsTUFBTSxFQUFFLENBQUMsR0FBRztnQkFBRUMsT0FBTyxFQUFFLENBQUM7YUFBRTtZQUNyQ0UsSUFBSSxFQUFFO2dCQUFFSCxNQUFNLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLENBQUM7YUFBRTtZQUMvQkcsVUFBVSxFQUFFO2dCQUFFQyxRQUFRLEVBQUUsR0FBRzthQUFFO3NCQUV6Qiw0RUFBQ25CLHdEQUFVO2dCQUNQb0IsWUFBVSxFQUFDLGNBQWM7Z0JBQ3pCQyxFQUFFLEVBQUluQixtRUFBaUIsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDO2dCQUNqRG9CLEtBQUssRUFBSXBCLG1FQUFpQixDQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7Z0JBQzdDcUIsSUFBSSxFQUFFckIsbUVBQWlCLGVBQUMsOERBQUNFLHNEQUFRLG9DQUFHLGdCQUFFLDhEQUFDRCxxREFBTyxvQ0FBRyxDQUFDO2dCQUNsRHFCLE9BQU8sRUFBRWxCLGVBQWU7Z0JBQ3hCbUIsTUFBTSxFQUFFO29CQUFFSixFQUFFLEVBQUVkLGlCQUFpQjtpQkFBRTs7Ozs7cUJBQ25DO1dBYkRMLG1FQUFpQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7Ozs7aUJBYzFCOzs7OzthQUNELENBQ25CO0NBQ0o7R0F6QktHLFdBQVc7O1FBQ2FKLDBEQUFZO1FBQ1pDLCtEQUFpQjtRQU05QkEsK0RBQWlCO1FBUVJBLCtEQUFpQjtRQUNkQSwrREFBaUI7UUFDcEJBLCtEQUFpQjs7O0FBbEJyQ0csS0FBQUEsV0FBVztBQTJCakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aGVtZS10b2dnbGUuanM/OGMwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHtBbmltYXRlUHJlc2VuY2UsIG1vdGlvbn0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IEljb25CdXR0b24sIHVzZUNvbG9yTW9kZSwgdXNlQ29sb3JNb2RlVmFsdWV9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IFN1bkljb24sIE1vb25JY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIlxuXG5cbmNvbnN0IFRoZW1lVG9nZ2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IHt0b2dnbGVDb2xvck1vZGV9ID0gdXNlQ29sb3JNb2RlKClcbiAgICBjb25zdCBUaGVtZUJ1dHRvbkNvbG9ycyA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiI2U0ZWRmZlwiLFwiI2ZkZjBiZFwiKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlciBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX1cbiAgICAgICAgICAgIGtleT17dXNlQ29sb3JNb2RlVmFsdWUoJ2xpZ2h0JywgJ2RhcmsnKX1cbiAgICAgICAgICAgIGluaXRpYWw9e3sgeTowLCByb3RhdGU6IDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgcm90YXRlOiAtMTgwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICBleGl0PXt7IHJvdGF0ZTogMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSB0aGVtZVwiXG4gICAgICAgICAgICAgICAgICAgIGJnID0ge3VzZUNvbG9yTW9kZVZhbHVlKCdhY2NlbnRDb2xvcicsICcjZmJlMzg0Jyl9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0ge3VzZUNvbG9yTW9kZVZhbHVlIChcImJsYWNrXCIsIFwiYmxhY2tcIil9XG4gICAgICAgICAgICAgICAgICAgIGljb249e3VzZUNvbG9yTW9kZVZhbHVlKDxNb29uSWNvbiAvPiwgPFN1bkljb24gLz4pfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9XG4gICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBiZzogVGhlbWVCdXR0b25Db2xvcnMgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZSJdLCJuYW1lcyI6WyJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTdW5JY29uIiwiTW9vbkljb24iLCJUaGVtZVRvZ2dsZSIsInRvZ2dsZUNvbG9yTW9kZSIsIlRoZW1lQnV0dG9uQ29sb3JzIiwiZXhpdEJlZm9yZUVudGVyIiwiaW5pdGlhbCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsInkiLCJyb3RhdGUiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhcmlhLWxhYmVsIiwiYmciLCJjb2xvciIsImljb24iLCJvbkNsaWNrIiwiX2hvdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/theme-toggle.js\n"));

/***/ })

});