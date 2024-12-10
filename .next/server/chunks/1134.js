exports.id = 1134;
exports.ids = [1134];
exports.modules = {

/***/ 7553:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 2128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 2213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layouts_JassoneLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./components/CopyRightText.js
var CopyRightText = __webpack_require__(2739);
// EXTERNAL MODULE: ./components/Shapes.js
var Shapes = __webpack_require__(2128);
// EXTERNAL MODULE: ./components/SocialIcons.js
var SocialIcons = __webpack_require__(1691);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/three/build/three.js
var three = __webpack_require__(1618);
// EXTERNAL MODULE: ./node_modules/vanta/dist/vanta.waves.min.js
var vanta_waves_min = __webpack_require__(4265);
var vanta_waves_min_default = /*#__PURE__*/__webpack_require__.n(vanta_waves_min);
;// CONCATENATED MODULE: ./utility/useVanta.js



const useVanta = ()=>{
    const myRefDiv = (0,react_.useRef)(null);
    const [vanta, setVanta] = (0,react_.useState)(0);
    (0,react_.useEffect)(()=>{
        if (!vanta) {
            setVanta(vanta_waves_min_default()({
                THREE: three,
                el: myRefDiv.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 0,
                minWidth: 0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: 0xb65634
            }));
        }
        return ()=>{
            if (vanta) {
                vanta.destroy();
            }
        };
    }, [
        vanta
    ]);
    return myRefDiv;
};
/* harmony default export */ const utility_useVanta = (useVanta);

;// CONCATENATED MODULE: ./components/hero/Jassone.js


const Jassone = ({ activeMenu })=>{
    const myRefDiv = utility_useVanta();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `iknow_tm_animate_section ${activeMenu == "home" ? "iknow_tm_animate_section animated zoomIn active" : "iknow_tm_animate_section active zoomOut hidden animated"}`,
        id: "home",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "iknow_tm_hero_extra",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "background",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image",
                            ref: myRefDiv
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "overlay"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "hero_content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "left",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "hello",
                                    children: "Hello,I'm"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "name",
                                    children: "Jassone Doe"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text",
                                    children: "A passionate UI/UX Designer and Web Developer based In NYC, USA"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "iknow_tm_button yellow transition_link",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#contact",
                                        children: "Work with me"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "right",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "image parallax",
                                "data-relative-input": "true",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/img/thumbs/47-60.jpg",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main layer",
                                        "data-depth": "0.05",
                                        "data-img-url": "/img/hero/7.jpg"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "box layer",
                                        "data-depth": "0.1"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const hero_Jassone = (Jassone);

// EXTERNAL MODULE: ./context/context.js
var context = __webpack_require__(443);
// EXTERNAL MODULE: ./utility/index.js
var utility = __webpack_require__(8055);
// EXTERNAL MODULE: ./utility/shapes.js
var shapes = __webpack_require__(8071);
;// CONCATENATED MODULE: ./layouts/JassoneLayout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








const JassoneLayout = ({ darkLogo = true })=>{
    const { pageContent, menus, setAboutData } = (0,react_.useContext)(context.context);
    const [activeMenu, setActiveMenu] = (0,react_.useState)("home");
    (0,react_.useEffect)(()=>{
        utility/* iKnowUtilits */.Z.imgToSVG();
        utility/* iKnowUtilits */.Z.dataImage();
        utility/* iKnowUtilits */.Z.menuTransition();
        setAboutData({
            img: "/img/hero/7.jpg",
            name: "Jassone Doe",
            email: "hello@jassone.com",
            bio: "Hi! My name is Jassone Doe. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success."
        });
    }, []);
    const [menuToggle, setMenuToggle] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "iknow_tm_mobile_menu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mobile_menu_inner",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mobile_in",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/logo/dark.png",
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "trigger",
                                    onClick: ()=>setMenuToggle(!menuToggle),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `hamburger hamburger--slider ${menuToggle ? "is-active" : ""}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hamburger-box",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "hamburger-inner"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown",
                        style: {
                            display: menuToggle ? "block" : "none"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "dropdown_inner",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "transition_link",
                                children: menus.map((menu)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: `#${menu.href}`,
                                            onClick: ()=>{
                                                setMenuToggle(false);
                                                setActiveMenu(menu.href);
                                            },
                                            children: menu.title
                                        })
                                    }, menu.id))
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "iknow_tm_sidebar_2 index-4-menu",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sidebar_inner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                children: darkLogo ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/logo/dark.png",
                                    alt: "logo"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/logo/light.png",
                                    alt: "logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu transition_link",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    menus.map((menu)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: activeMenu === menu.href ? "active" : "",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "svg",
                                                    src: `/img/svg/${menu.icon}.svg`,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        " ",
                                                        menu.title
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "iknow_tm_full_link",
                                                    href: `#${menu.href}`,
                                                    onClick: ()=>setActiveMenu(menu.href)
                                                })
                                            ]
                                        }, menu.id)),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        class: "ccc"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "iknow_tm_fixed_mainpart",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mainpart_inner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Shapes/* default */.Z, {
                            shapes: shapes/* shapes1 */.Q
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "topbar_extra",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "details",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons/* default */.ZP, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "iknow_tm_button",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "img/cv/1.jpg",
                                            download: "",
                                            children: "Download CV"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "iknow_tm_content_extra",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(hero_Jassone, {
                                    activeMenu: activeMenu
                                }),
                                pageContent.map((content)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `iknow_tm_animate_section ${activeMenu == content.sectionId ? "iknow_tm_animate_section animated zoomIn active" : "iknow_tm_animate_section active zoomOut hidden animated"}`,
                                        id: content.id,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section_inner",
                                            children: content.component
                                        })
                                    }))
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "extra_copyright",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(CopyRightText/* default */.Z, {
                                extraCls: "ex"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_JassoneLayout = (JassoneLayout);


/***/ })

};
;