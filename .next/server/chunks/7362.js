exports.id = 7362;
exports.ids = [7362];
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

/***/ 1878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layouts_SarahLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./components/CopyRightText.js
var CopyRightText = __webpack_require__(2739);
// EXTERNAL MODULE: ./components/TopBar.js
var TopBar = __webpack_require__(3042);
// EXTERNAL MODULE: ./components/SocialIcons.js
var SocialIcons = __webpack_require__(1691);
;// CONCATENATED MODULE: ./components/hero/Sarah.js


const Sarah = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "infobar",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bar_in",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "image",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/img/thumbs/10-9.jpg",
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main",
                            "data-img-url": "/img/hero/3.jpg"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "extra",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "short",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Sarah Jessica"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Senior UI/UX Designer"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons/* SocialIcons2 */.O_, {})
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const hero_Sarah = (Sarah);

// EXTERNAL MODULE: ./context/context.js
var context = __webpack_require__(443);
// EXTERNAL MODULE: ./utility/index.js
var utility = __webpack_require__(8055);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./layouts/SarahLayout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 






const SarahLayout = ({ darkLogo, darkBg = false })=>{
    (0,react_.useEffect)(()=>{
        // Function to get computed style of an element
        function getComputedStyle(el, styleProp) {
            if (el.currentStyle) {
                return el.currentStyle[styleProp];
            } else if (window.getComputedStyle) {
                return document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
            }
            return "";
        }
        // Function to set CSS properties
        function setCSSProperties() {
            var ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var topbar = document.querySelector(".iknow_tm_topbar");
            var footer = document.querySelector(".iknow_tm_copyright");
            var fixedContentInner = document.querySelector(".iknow_tm_fixed_content .fixed_content_inner");
            var topbarH = topbar ? topbar.offsetHeight : 0;
            var footerH = footer ? footer.offsetHeight : 0;
            var topPosition = topbarH + 62;
            var topPosition2 = topbarH + 35;
            var topPosition3 = topbarH + 25;
            var total = wh - topbarH - footerH - 62;
            var total2 = wh - topbarH - footerH - 40;
            var total3 = wh - topbarH - footerH;
            if (ww > 1400 && fixedContentInner) {
                fixedContentInner.style.height = total + "px";
                fixedContentInner.style.top = topPosition + "px";
            } else if (ww >= 1040 && fixedContentInner) {
                fixedContentInner.style.height = total3 + "px";
                fixedContentInner.style.top = topPosition3 + "px";
            } else if (fixedContentInner) {
                fixedContentInner.style.height = total2 + "px";
                fixedContentInner.style.top = topPosition2 + "px";
            }
        }
        // Call the function when the window is resized
        window.addEventListener("resize", setCSSProperties);
        // Call the function initially
        setCSSProperties();
    }, []);
    const [active, setActive] = (0,react_.useState)("about");
    (0,react_.useEffect)(()=>{
        utility/* iKnowUtilits */.Z.dataImage();
        utility/* iKnowUtilits */.Z.imgToSVG();
    }, []);
    const { pageContent, setTestimonialItems, menus, setAboutData } = (0,react_.useContext)(context.context);
    (0,react_.useEffect)(()=>{
        setTestimonialItems(1);
        setAboutData({
            img: "/img/about/3.jpg",
            name: "Sarah Jessica",
            email: "hello@jessica.com",
            bio: "Hi! My name is Sarah Jessica. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success."
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TopBar/* default */.Z, {
                darkLogo: darkLogo,
                topbarIcon: false
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "iknow_tm_fixed_background movingEffect",
                "data-img-url": darkBg ? "/img/hero/5.jpg" : "/img/hero/4.jpg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "iknow_tm_fixed_content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "fixed_content_inner",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content_left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menubar",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: menus.map((menu)=>menu.id !== 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: menu.href === active ? "active" : "",
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
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                setActive(menu.href);
                                                            },
                                                            href: `#${menu.href}`
                                                        })
                                                    ]
                                                }, menu.id))
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(hero_Sarah, {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "content_right",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mainbar",
                                    children: pageContent.map((content)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: content.sectionId,
                                            className: `iknow_tm_main_section ${active === content.sectionId ? "active" : ""}`,
                                            children: content.component
                                        }, content.id))
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CopyRightText/* default */.Z, {
                fixed: true
            })
        ]
    });
};
/* harmony default export */ const layouts_SarahLayout = (SarahLayout);


/***/ })

};
;