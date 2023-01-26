"use strict";
exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 9573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/navigation/header/SearchBar.jsx
"use client";




function SearchBar() {
    const router = new router_.useRouter();
    const clickPoint = (0,external_react_.useRef)();
    const [search, setSearch] = (0,external_react_.useState)("");
    const handleFocus = ()=>{
        clickPoint.current.style.display = "none";
    };
    const handleBlur = ()=>{
        clickPoint.current.style.display = "block";
    };
    const handleAnswerChange = (e)=>{
        if (e.key === "Enter") {
            localStorage.setItem("search", search);
            router.push(`../explore/search`);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Searchbar, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                    type: "text",
                    placeholder: "Looking for something ?",
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                    onKeyDown: (e)=>handleAnswerChange(e),
                    onChange: (e)=>setSearch(e.target.value)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                    ref: clickPoint,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Svg, {
                        className: "w-5 h-5 text-gray-500",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                            clipRule: "evenodd"
                        })
                    })
                })
            ]
        })
    });
}
const Searchbar = (styled_default()).div`
  display: flex;
  padding-left: 2rem;
  padding-right: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Container = (styled_default()).div`
  position: relative;
  margin-right: 0.75rem;
  width: 100%;
`;
const Button = (styled_default()).div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
`;
const Svg = (styled_default()).svg`
  color: var(--fg);
  width: 1.2rem;
  height: 1.2rem;
`;
const Input = (styled_default()).input`
  display: block;
  width: 100%;
  max-width: 30rem;
  padding-left: 2.5rem;
  height: 40px;
  border-radius: 15px;
  background: var(--fading-bg);
  color: var(--fg);
  border: none;

  :focus {
    outline-color: var(--main);
  }
`;

// EXTERNAL MODULE: ./components/navigation/header/Theme.jsx
var Theme = __webpack_require__(3313);
;// CONCATENATED MODULE: ./components/navigation/header/Header.jsx









function Header() {
    const MENU_LIST = [
        {
            text: "Explore",
            href: "/explore"
        },
        {
            text: "Connect",
            href: "/user/login"
        }
    ];
    const [profileId, setProfileId] = (0,external_react_.useState)(null);
    const { theme , setTheme  } = (0,external_next_themes_.useTheme)();
    const [themeState, setThemeState] = (0,external_react_.useState)(false);
    const [navActive, setNavActive] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setThemeState(true);
        setProfileId(window.localStorage.profile_id);
    }, []);
    console.log(profileId);
    if (!themeState) {
        return null;
    }
    const renderThemeChanger = ()=>{
        if (theme === "dark") {
            return /*#__PURE__*/ jsx_runtime_.jsx(solid_.MoonIcon, {
                className: "theme-select",
                onClick: ()=>setTheme("light")
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx(solid_.SunIcon, {
                className: "theme-select",
                onClick: ()=>setTheme("dark")
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Nav, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Logo, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            priority: true,
                            src: "/assets/logo.svg",
                            height: 60,
                            width: 60,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(WebsiteName, {
                        children: "OpenLake"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavMenuBar, {
                onClick: ()=>setNavActive(!navActive),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavMenuElements, {
                className: `${navActive ? "active" : ""} nav__menu-list`,
                children: [
                    profileId ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavItems, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/explore",
                                className: "nav__link",
                                children: "Explore"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/user/profile",
                                className: "nav__link",
                                children: "Profile"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavItems, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/explore",
                                className: "nav__link",
                                children: "Explore"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/user/login",
                                className: "nav__link",
                                children: "Connect"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ContainerTheme, {
                        className: "theme",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Theme/* default */.Z, {})
                    })
                ]
            })
        ]
    });
}
const Nav = (styled_default()).nav`
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 5px 2rem;
  background-color: var(--bg);
  position: sticky;
  z-index: 99;
  max-width: 1920px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;
const NavMenuBar = (styled_default()).div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  cursor: pointer;
  div {
    width: 40px;
    height: 4px;
    background-color: black;
    border-radius: 2px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const NavMenuElements = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  position: fixed;
  top: 60px;
  width: 288px;
  height: 25%;
  row-gap: 24px;
  right: -288px;
  padding: 24px 16px;
  border-radius: 10px;
  background-color: var(--bg);
  transition: all ease-in 300ms;

  @media (min-width: 768px) {
    position: unset;
    flex-direction: row;
    min-height: fit-content;
    width: fit-content;
    column-gap: 24px;
    align-items: center;
    width: 100%;
    margin-top: 0;
  }
`;
const NavItems = (styled_default()).div`
  .nav__link {
    font-size: 18px;
    position: relative;
    transition: ease-in-out 0.3s;
  }

  a {
    margin-right: 50px;
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
      transition: ease-in-out 0.3s;
    }

    .nav__link:hover:before {
      width: 100%;
    }
  }
`;
const Logo = (styled_default()).div`
  display: flex;
  align-items: center;
  height: 70px;
`;
const List = (styled_default()).nav`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 1rem;
`;
const WebsiteName = (styled_default()).h1`
  display: none;
  font-family: 'Righteous', cursive;

  @media (min-width: 768px) {
    display: block;
    font-size: 1.9rem;
    margin-left: 7px;
  }
`;
const ContainerTheme = (styled_default()).div`
  @media (min-width: 768px) {
    position: absolute;
    right: -15px;
    top: 14px;
  }
`;


/***/ })

};
;