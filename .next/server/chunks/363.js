"use strict";
exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 7363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PrimaryLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/navigation/header/NavItem.jsx



const NavItem = ({ text , href  })=>{
    return /*#__PURE__*/ _jsx("a", {
        href: href,
        className: "nav__link",
        children: text
    });
};
/* harmony default export */ const header_NavItem = ((/* unused pure expression or super */ null && (NavItem)));
const NavLink = (styled_default()).a`
  .nav__link {
    font-size: 18px;
    position: relative;
    transition: ease-in-out 0.8s;
  }

  @media (min-width: 768px) {
    .nav__link::before {
      content: '';
      position: absolute;
      width: 0%;
      height: 3px;
      bottom: -10px;
      left: 0;
      background-color: var(--main);
      transition: ease-in-out 0.8s;
    }

    .nav__link:hover:before {
      width: 100%;
    }
  }
`;

;// CONCATENATED MODULE: ./components/navigation/footer/Footer.jsx



function Footer({ text , href  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Feeter, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Border, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Span, {
                children: "\xa9 2023 - Maxime & Lo\xefc"
            })
        ]
    });
}
const Border = (styled_default()).div`
  margin: 0px auto 0px auto;
  border-top: 2px solid var(--fading-bg);
  width: 75%;
`;
const Feeter = (styled_default()).footer`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  max-width: 100%;
  flex-shrink: 0;
  flex-direction: column;
  flex-basis: auto;
  -webkit-box-align: stretch;
  align-items: stretch;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg);
  margin-top: auto;
  z-index: 1;
`;
const Span = (styled_default()).span`
  margin: 10px 16px;
  color: var(--fg);
`;
const ContainerList = (styled_default()).div`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  > * {
    margin: 4px 16px;
  }
`;

// EXTERNAL MODULE: ./components/navigation/header/Header.jsx + 1 modules
var Header = __webpack_require__(9573);
;// CONCATENATED MODULE: ./components/layouts/primary/PrimaryLayout.jsx




function PrimaryLayout({ children , ...divProps }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "OpenLake"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "px-5",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "m-auto"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}


/***/ })

};
;