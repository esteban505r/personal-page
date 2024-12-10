exports.id = 4928;
exports.ids = [4928];
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

/***/ 5808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layouts_MaryLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./components/Audio.js


const Audio = ()=>{
    (0,react_.useEffect)(()=>{
        var audio1 = document.querySelectorAll("#audio1");
        var audio2 = document.querySelectorAll("#audio2");
        var hamburgers = document.querySelectorAll(".trigger .hamburger");
        if (hamburgers.length > 0) {
            hamburgers.forEach((hamburger)=>{
                hamburger.addEventListener("click", function() {
                    var element = this;
                    if (element.classList.contains("is-active")) {
                        audio1[0].play();
                    } else {
                        audio2[0].play();
                    }
                    return false;
                });
            });
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                id: "audio1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                    src: "/audio/1.mp3"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                id: "audio2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                    src: "/audio/2.mp3"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Audio = (Audio);

// EXTERNAL MODULE: ./components/CopyRightText.js
var CopyRightText = __webpack_require__(2739);
;// CONCATENATED MODULE: ./components/hero/Mary.js

const Mary = ({ activeMenu })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `iknow_tm_animate_section ${activeMenu == "home" ? "active animated zoomInDown" : "active slideInLeft hidden animated"}`,
        id: "home",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "iknow_tm_hero_fourth",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "background",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image",
                            "data-img-url": "/img/hero/9.jpg"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "overlay"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "left",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "image",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/hero/avatar.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "right",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "hello",
                                    children: "Hello, I'm"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "name",
                                    children: "Mary Jane"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text",
                                    children: "A passionate UI/UX Designer and Web Developer based In NYC, USA"
                                }),
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
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const hero_Mary = (Mary);

// EXTERNAL MODULE: ./context/context.js
var context = __webpack_require__(443);
// EXTERNAL MODULE: ./utility/index.js
var utility = __webpack_require__(8055);
;// CONCATENATED MODULE: ./layouts/MaryLayout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 






const MaryLayout = ({ darkLogo = true, darkBg = false })=>{
    const [activeMenu, setActiveMenu] = (0,react_.useState)("home");
    const [toggle, setToggle] = (0,react_.useState)(false);
    const { pageContent, menus, setAboutData } = (0,react_.useContext)(context.context);
    (0,react_.useEffect)(()=>{
        utility/* iKnowUtilits */.Z.imgToSVG();
        utility/* iKnowUtilits */.Z.dataImage();
        setAboutData({
            img: "/img/hero/12.jpg",
            name: "Mary Jane",
            email: "hello@mary.com",
            bio: "Hi! My name is Mary Jane. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success."
        });
    }, []);
    (0,react_.useEffect)(()=>{
        utility/* iKnowUtilits */.Z.maryMenuTransition();
    }, [
        activeMenu
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "iknow_tm_extra_demo",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "iknow_tm_fixed_background",
                        "data-img-url": darkBg ? "/img/hero/5.jpg" : "/img/hero/4.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "iknow_tm_topbar smaller",
                        "data-position": "fixed",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "topbar_inner",
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
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "wrapper",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `menu transition_link ${toggle ? "opened" : ""}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: menus.map((menu)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: activeMenu === menu.href ? "active" : "",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: `#${menu.href}`,
                                                                onClick: ()=>setActiveMenu(menu.href),
                                                                children: menu.title
                                                            })
                                                        }, menu.id))
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "ccc"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "trigger",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `hamburger hamburger--slider ${toggle ? "is-active" : ""}`,
                                                onClick: ()=>setToggle(!toggle),
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
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "iknow_tm_mainpart_new",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(hero_Mary, {
                                activeMenu: activeMenu
                            }),
                            pageContent.map((content)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `iknow_tm_animate_section ${activeMenu == content.sectionId ? "active animated zoomInDown" : "active slideInLeft hidden animated"}`,
                                    id: "about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section_inner",
                                        children: content.component
                                    })
                                }, content.id))
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CopyRightText/* default */.Z, {
                        fixed: true
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Audio, {})
        ]
    });
};
/* harmony default export */ const layouts_MaryLayout = (MaryLayout);


/***/ })

};
;