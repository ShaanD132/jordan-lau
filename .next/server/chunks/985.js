"use strict";
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 7985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(429);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);


const styles = {
    global: (props)=>({
            body: {
                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("#FFFAF0", "#1B1B1B")(props),
                transitionProperty: "background-color",
                transitionDuration: "normal"
            }
        })
};
const components = {
    Heading: {
        variants: {
            "section-title": {
                fontSize: 50
            },
            "sub-title": {
                fontSize: 35,
                fontFamily: "Zacbel X Medium"
            },
            "page-title": {
                fontSize: 55
            }
        }
    }
};
const fonts = {
    heading: "'Galhau'"
};
const colors = {
    glassTeal: "#E4EDFF",
    accentColor: "#d0e0ff",
    dotColor: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("#3377ff", "#00256e")
};
const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    config,
    styles,
    components,
    colors,
    fonts
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ })

};
;