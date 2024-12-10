"use strict";
exports.id = 1601;
exports.ids = [1601];
exports.modules = {

/***/ 1601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layouts_JassicaLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./components/CopyRightText.js
var CopyRightText = __webpack_require__(2739);
// EXTERNAL MODULE: ./components/TopBar.js
var TopBar = __webpack_require__(3042);
;// CONCATENATED MODULE: ./components/hero/Jessica.js

const Jessica = ({ menus, setActiveNav, activeNav, shapes1, setCopyRightClass })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "iknow_tm_hero",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "background_shape"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hero_content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content_inner",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main_info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "subtitle",
                                                children: "I'm"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "name",
                                                children: "Esteban Lopez"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text",
                                                children: "I'm an Android Developer with more than 5 years of experience, passionate about technology and innovation."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "iknow_tm_video",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "video_inner",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "circle"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "play",
                                                            children: "Play Video"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "iknow_tm_full_link popup-youtube",
                                                            href: "https://www.youtube.com/watch?v=7e90gBu4pas"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "right",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "image",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/thumbs/47-60.jpg",
                                                    alt: "img"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main",
                                                    "data-img-url": "/img/hero/1.jpg"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "main_menu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: menus.map((menu)=>menu.id !== 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: activeNav === menu.href ? "active" : "",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "svg",
                                                    src: `/img/svg/${menu.icon}.svg`,
                                                    alt: "Svg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: menu.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "iknow_tm_full_link",
                                                    href: `#${menu.href}`,
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        setActiveNav(menu.href);
                                                        setCopyRightClass("hidden visible");
                                                    }
                                                })
                                            ]
                                        }, menu.id))
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "simple_shapes",
                children: shapes1.map((shap)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `${shap.classname} ${shap.animationName}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "svg",
                            src: `/img/svg/shapes/${shap.shapeImg}.svg`,
                            alt: "svg-icon"
                        })
                    }, shap.id))
            })
        ]
    });
};
/* harmony default export */ const hero_Jessica = (Jessica);

// EXTERNAL MODULE: ./context/context.js
var context = __webpack_require__(443);
// EXTERNAL MODULE: ./utility/index.js
var utility = __webpack_require__(8055);
// EXTERNAL MODULE: ./utility/shapes.js
var shapes = __webpack_require__(8071);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./layouts/JassicaLayout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







const JassicaLayout = ({ darkLogo })=>{
    (0,react_.useEffect)(()=>{
        utility/* iKnowUtilits */.Z.dataImage();
        utility/* iKnowUtilits */.Z.imgToSVG();
        utility/* iKnowUtilits */.Z.menuHoverEffect();
    }, []);
    const [activeNav, setActiveNav] = (0,react_.useState)(null);
    const { pageContent, menus } = (0,react_.useContext)(context.context);
    const [copyRightClass, setCopyRightClass] = (0,react_.useState)("hidden");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TopBar/* default */.Z, {
                darkLogo: darkLogo
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(hero_Jessica, {
                shapes1: shapes/* shapes1 */.Q,
                menus: menus,
                setActiveNav: setActiveNav,
                activeNav: activeNav,
                setCopyRightClass: setCopyRightClass
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `iknow_tm_mainpart ${activeNav !== null ? "opened" : ""}`,
                    children: pageContent.map((content)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `iknow_tm_main_section ${content.sectionId === activeNav ? "active" : ""}`,
                            children: content.component
                        }, content.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CopyRightText/* default */.Z, {
                extraCls: copyRightClass
            })
        ]
    });
};
/* harmony default export */ const layouts_JassicaLayout = (JassicaLayout);


/***/ })

};
;