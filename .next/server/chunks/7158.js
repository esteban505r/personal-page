"use strict";
exports.id = 7158;
exports.ids = [7158];
exports.modules = {

/***/ 7158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layouts_TomLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./components/AboutMe.js
var AboutMe = __webpack_require__(7245);
// EXTERNAL MODULE: ./components/Blog.js
var Blog = __webpack_require__(3040);
// EXTERNAL MODULE: ./components/Contact.js
var Contact = __webpack_require__(6943);
// EXTERNAL MODULE: ./components/CopyRightText.js
var CopyRightText = __webpack_require__(2739);
// EXTERNAL MODULE: ./components/Portfolio.js
var Portfolio = __webpack_require__(3472);
// EXTERNAL MODULE: ./components/Resume.js
var Resume = __webpack_require__(2382);
// EXTERNAL MODULE: ./components/Service.js
var Service = __webpack_require__(5695);
// EXTERNAL MODULE: ./components/TopBar.js
var TopBar = __webpack_require__(3042);
// EXTERNAL MODULE: ./components/SocialIcons.js
var SocialIcons = __webpack_require__(1691);
;// CONCATENATED MODULE: ./components/hero/Tom.js


const Tom = ({ shapes2 })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "iknow_tm_hero_second",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "background_shape"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                    children: "Tom Anderson"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text",
                                    children: "A passionate UI/UX Designer and Senior Web Developer based In NYC, USA"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons/* SocialIcons2 */.O_, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "right",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "image",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main",
                                        "data-img-url": "/img/hero/2.jpg"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "first anim_translate"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "second anim_left2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "third anim_right2"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rounded_shapes",
                children: shapes2.map((shap)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `${shap.classname} ${shap.animationName}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "svg",
                            src: `/img/svg/shapes/${shap.shapeImg}.svg`,
                            alt: "svg"
                        })
                    }, shap.id))
            })
        ]
    });
};
/* harmony default export */ const hero_Tom = (Tom);

// EXTERNAL MODULE: ./context/context.js
var context = __webpack_require__(443);
// EXTERNAL MODULE: ./utility/index.js
var utility = __webpack_require__(8055);
// EXTERNAL MODULE: ./utility/shapes.js
var shapes = __webpack_require__(8071);
// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(7335);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./layouts/TomLayout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 














const Testimonials = app_dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "/home/bansyne/Projects/Personal/personal-page/layouts/TomLayout.js -> " + "@/components/Testimonials"
        ]
    },
    ssr: false
});
const TomLayout = ({ darkLogo })=>{
    const { setAboutData } = (0,react_.useContext)(context.context);
    (0,react_.useEffect)(()=>{
        utility/* iKnowUtilits */.Z.dataImage();
        utility/* iKnowUtilits */.Z.imgToSVG();
        utility/* iKnowUtilits */.Z.accordionToggle();
        setAboutData({
            img: "/img/about/2.jpg",
            name: "Tom Anderson",
            email: "hello@anderson.com",
            bio: "Hi! My name is Tom Anderson. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success."
        });
    }, []);
    const contents = [
        {
            id: 1,
            menuIcon: "archive",
            href: "about",
            menuTitle: "About Me",
            content: /*#__PURE__*/ jsx_runtime_.jsx(AboutMe/* default */.Z, {})
        },
        {
            id: 2,
            menuIcon: "contacs",
            href: "resume",
            menuTitle: "Resume",
            content: /*#__PURE__*/ jsx_runtime_.jsx(Resume/* default */.Z, {})
        },
        {
            id: 3,
            menuIcon: "briefcase",
            href: "portfolio",
            menuTitle: "Portfolio",
            content: /*#__PURE__*/ jsx_runtime_.jsx(Portfolio/* default */.Z, {})
        },
        {
            id: 4,
            menuIcon: "gear",
            href: "service",
            menuTitle: "Service",
            content: /*#__PURE__*/ jsx_runtime_.jsx(Service/* default */.Z, {})
        },
        {
            id: 5,
            menuIcon: "message",
            href: "testimonials",
            menuTitle: "Testimonials",
            content: /*#__PURE__*/ jsx_runtime_.jsx(Testimonials, {})
        },
        {
            id: 6,
            menuIcon: "writing",
            href: "news",
            menuTitle: "Blog",
            content: /*#__PURE__*/ jsx_runtime_.jsx(Blog/* default */.Z, {})
        },
        {
            id: 7,
            menuIcon: "letter",
            href: "contact",
            menuTitle: "Contact",
            content: /*#__PURE__*/ jsx_runtime_.jsx(Contact/* default */.Z, {})
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TopBar/* default */.Z, {
                darkLogo: darkLogo,
                topbarIcon: false
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(hero_Tom, {
                shapes2: shapes/* shapes2 */.m
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "iknow_tm_extra_menu",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "menu_list",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "unordered",
                            children: contents.map((content)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "unorderest_li",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "list_in",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "list_icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "svg",
                                                        src: `/img/svg/${content.menuIcon}.svg`,
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: content.menuTitle
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "down_icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "svg",
                                                        src: "/img/svg/down.svg",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "iknow_tm_full_link tab_btn",
                                                    href: `#${content.href}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "details_wrapper",
                                            children: content.content
                                        })
                                    ]
                                }, content.id))
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CopyRightText/* default */.Z, {
                extraCls: "copyright"
            })
        ]
    });
};
/* harmony default export */ const layouts_TomLayout = (TomLayout);


/***/ })

};
;