"use strict";
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 2857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6431);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fave_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1456);




const variants = {
    hidden: {
        opacity: 0,
        x: 2000,
        y: 0
    },
    enter: {
        opacity: 1,
        x: 0,
        y: 0
    },
    exit: {
        opacity: 1,
        x: -2000,
        y: 0
    }
};
const Layout = ({ children , title  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_node_modules_framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion.article */ .EA.article, {
        initial: "hidden",
        animate: "enter",
        exit: "exit",
        variants: variants,
        transition: {
            duration: 0.5,
            type: "easeInOut"
        },
        style: {
            position: "relative"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            title,
                            " - Shaan Dussoye"
                        ]
                    })
                }),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fave_grid__WEBPACK_IMPORTED_MODULE_2__/* .GridItemStyle */ .P, {})
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ })

};
;