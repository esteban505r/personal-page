"use strict";
exports.id = 2124;
exports.ids = [2124];
exports.modules = {

/***/ 2124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layouts_NaynaLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./components/CopyRightText.js
var CopyRightText = __webpack_require__(2739);
// EXTERNAL MODULE: ./components/MobileMenu.js
var MobileMenu = __webpack_require__(6);
// EXTERNAL MODULE: ./components/SocialIcons.js
var SocialIcons = __webpack_require__(1691);
;// CONCATENATED MODULE: ./components/hero/Nayna.js

const Nayna = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "iknow_tm_hero_fifth iknow_tm_section_new section_container",
        id: "home",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "background",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "image",
                        "data-img-url": "/img/hero/10.jpg"
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
                        className: "avatar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main",
                            "data-img-url": "/img/hero/11.jpg"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "details",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "hello",
                                children: "Hello, I'm"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "name",
                                children: "Nayna Eva"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text",
                                children: "A passionate UI/UX Designer and Web Developer based In NYC, USA"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "sign",
                                src: "/img/hero/sign.png",
                                alt: ""
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const hero_Nayna = (Nayna);

// EXTERNAL MODULE: ./context/context.js
var context = __webpack_require__(443);
// EXTERNAL MODULE: ./utility/index.js
var utility = __webpack_require__(8055);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./layouts/NaynaLayout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







const NaynaLayout = ({ darkLogo = true, darkBg = false })=>{
    const { pageContent, menus, setAboutData } = (0,react_.useContext)(context.context);
    (0,react_.useEffect)(()=>{
        utility/* iKnowUtilits */.Z.imgToSVG();
        utility/* iKnowUtilits */.Z.dataImage();
        utility/* iKnowUtilits */.Z.scrollSection();
        setAboutData({
            img: "/img/hero/13.jpg",
            name: "Nayna Eva",
            email: "hello@nayna.com",
            bio: "Hi! My name is Nayna Eva. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success."
        });
    }, []);
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", utility/* iKnowUtilits */.Z.scrollSection);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "iknow_tm_extra_demo_2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "top_shape"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "bottom_shape"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "iknow_tm_fixed_background",
                "data-img-url": darkBg ? "/img/hero/5.jpg" : "/img/hero/4.jpg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "iknow_tm_topbar smaller onepage",
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
            /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu/* default */.Z, {
                menus: menus
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "iknow_tm_mainpart_new_2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons/* SocialIcons3 */.AL, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main_menu",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "anchor_nav",
                            children: menus.map((menu)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "svg",
                                            src: `/img/svg/${menu.icon}.svg`,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: menu.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "iknow_tm_full_link",
                                            href: `#${menu.href}`
                                        })
                                    ]
                                }, menu.id))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(hero_Nayna, {}),
                    pageContent.map((content)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "iknow_tm_section_new section_container",
                            id: content.sectionId,
                            children: content.component
                        }, content.id)),
                    /*#__PURE__*/ jsx_runtime_.jsx(CopyRightText/* default */.Z, {
                        extraCls: "smaller onepage empty"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layouts_NaynaLayout = (NaynaLayout);


/***/ })

};
;