"use strict";
exports.id = 456;
exports.ids = [456];
exports.modules = {

/***/ 1456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ WorkGridItem),
/* harmony export */   "P": () => (/* binding */ GridItemStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_5__);






const DishesBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box)`
transition: all 0.5s ease-in-out;
border-radius: 12px;
top: 0px;
height: 99.2%;
width: 100%;

.dishes-text {
    transition: all 0.8s ease-in-out;
    opacity: 0%;
}

.dishes-title {
    transition: all 0.3s ease-in-out;
    color: rgba(255, 255, 255, 1);
    text-shadow: 0em 0em 1rem black;
}

&:hover {
    background-color: rgba(0, 0, 0, 0.7);

    .dishes-title {
        color: rgba(255,255,255,1);
    }

    .dishes-text {
        opacity: 100%;
    }
}
`;
const DishesTextContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_5___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box)`
width: 100%;
text-align: left;
margin-top: 85%
`;
const WorkGridItem = ({ children , id , title , thumbnail  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        w: "100%",
        align: "center",
        position: "relative",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/dishes/${id}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.LinkBox, {
                cursor: "pointer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        position: "relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: thumbnail,
                            alt: title,
                            className: "grid-item-thumbnail",
                            placeholder: "blur"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DishesBox, {
                        position: "absolute",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DishesTextContainer, {
                            px: 3,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                                    as: "h2",
                                    fontSize: {
                                        base: 35,
                                        sm: 40
                                    },
                                    fontFamily: "Outfit-Medium",
                                    mb: 2,
                                    className: "dishes-title",
                                    children: title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    className: "dishes-text",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                        color: "white",
                                        px: 3,
                                        fontFamily: "Zacbel X Medium",
                                        fontSize: {
                                            base: 16,
                                            sm: 18
                                        },
                                        children: [
                                            " ",
                                            children,
                                            " "
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
const GridItemStyle = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.Global, {
        styles: `
    .grid-item-thumbnail{
        border-radius: 12px;
    }

    `
    });


/***/ })

};
;