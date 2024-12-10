"use strict";
exports.id = 3026;
exports.ids = [3026];
exports.modules = {

/***/ 2128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Shapes = ({ shapes, shapesClass = "simple_shapes" })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: shapesClass,
        children: shapes.map((shap)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `${shap.classname} ${shap.animationName}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "svg",
                    src: `/img/svg/shapes/${shap.shapeImg}.svg`,
                    alt: "svg-icon"
                })
            }, shap.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shapes);


/***/ }),

/***/ 3026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CopyRightText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2739);
/* harmony import */ var _components_MobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _components_Shapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2128);
/* harmony import */ var _components_SocialIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1691);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(443);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8055);
/* harmony import */ var _utility_shapes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8071);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const JamesLayout = ({ darkLogo = true })=>{
    const { pageContent, menus, setAboutData } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_5__.context);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        _utility__WEBPACK_IMPORTED_MODULE_6__/* .iKnowUtilits */ .Z.imgToSVG();
        _utility__WEBPACK_IMPORTED_MODULE_6__/* .iKnowUtilits */ .Z.dataImage();
        setAboutData({
            img: "/img/about/3.jpg",
            name: "James Smith",
            email: "hello@james.com",
            bio: "Hi! My name is James Smith. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success."
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        window.addEventListener("scroll", function() {
            var menu = document.querySelector(".iknow_tm_sidebar_3");
            var WinOffset = window.pageYOffset || document.documentElement.scrollTop;
            if (WinOffset >= 100) {
                menu.classList.add("animate");
            } else {
                menu.classList.remove("animate");
            }
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        window.addEventListener("scroll", _utility__WEBPACK_IMPORTED_MODULE_6__/* .iKnowUtilits */ .Z.scrollSection);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "iknow_tm_extra_demo",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "top_shape"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "background_part",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shapes__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    shapes: _utility_shapes__WEBPACK_IMPORTED_MODULE_7__/* .shapes2 */ .m,
                    shapesClass: "rounded_shapes"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "iknow_tm_topbar onepage",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "topbar_inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                children: darkLogo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/img/logo/dark.png",
                                    alt: "logo"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/img/logo/light.png",
                                    alt: "logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "right",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SocialIcons__WEBPACK_IMPORTED_MODULE_4__/* .SocialIcons2 */ .O_, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MobileMenu__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                menus: menus
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "iknow_tm_sidebar_3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "inner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "image",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "main",
                                "data-img-url": "/img/about/3.jpg"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "menu scrollable",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "anchor_nav",
                                children: menus.map((menu)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "svg",
                                                src: `/img/svg/${menu.icon}.svg`,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: menu.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "iknow_tm_full_link",
                                                href: `#${menu.href}`
                                            })
                                        ]
                                    }, menu.id))
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "iknow_tm_content_wrapper",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "iknow_tm_hero_third section_container",
                        id: "home",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "background",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "image",
                                        "data-img-url": "/img/hero/8.jpg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "overlay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hello",
                                        children: "Hello, I'm"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "name",
                                        children: "James Smith"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text",
                                        children: "A passionate UI/UX Designer and Web Developer based In NYC, USA"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "iknow_tm_button",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "img/cv/1.jpg",
                                            download: "",
                                            children: "Download CV"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "iknow_tm_down_arrow",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "down-icon white top_120",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "anchor",
                                        href: "#about",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            width: "26px",
                                            height: "100%",
                                            viewBox: "0 0 247 390",
                                            version: "1.1",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                                            style: {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeMiterlimit: "1.5"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    id: "wheel",
                                                    d: "M123.359,79.775l0,72.843",
                                                    style: {
                                                        fill: "none",
                                                        stroke: "#fff",
                                                        strokeWidth: 20
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    id: "mouse",
                                                    d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                    style: {
                                                        fill: "none",
                                                        stroke: "#fff",
                                                        strokeWidth: 20
                                                    }
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    pageContent.map((content)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "iknow_tm_section_new section_container",
                            id: content.sectionId,
                            children: content.component
                        }, content.id)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CopyRightText__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        extraCls: "onepage extra"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "bottom_shape"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JamesLayout);


/***/ })

};
;