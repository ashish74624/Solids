"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Slider.tsx":
/*!***********************************!*\
  !*** ./app/components/Slider.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Slider() {\n    _s();\n    const images = [\n        {\n            url: \"https://placehold.co/600x400\"\n        },\n        {\n            url: \"https://image-get.vercel.app/Ecommerce/1.webp\"\n        },\n        {\n            url: \"https://image-get.vercel.app/Ecommerce/2.webp\"\n        },\n        {\n            url: \"https://image-get.vercel.app/Ecommerce/3.webp\"\n        }\n    ];\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // const [isTransitioning, setIsTransitioning] = useState(false);\n    const changeImage = ()=>{\n        // setIsTransitioning(true);\n        setTimeout(()=>{\n            setImg((prev)=>prev === images.length - 1 ? 0 : prev + 1);\n        // setIsTransitioning(false);\n        }, 5000);\n    };\n    const startInterval = ()=>{\n        const newInterval = setInterval(()=>changeImage(), 5000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const intervalId = setInterval(()=>{\n            changeImage();\n        }, 5000);\n        return ()=>{\n            clearInterval(intervalId);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"w-screen h-[500px] relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: images[img].url,\n                    className: \"w-full h-full bg-cover bg-no-repeat duration-500 bg-left-top rounded-2xl\",\n                    alt: \"Slider Image\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-white h-10 w-10 rounded-full absolute top-[280px] left-3\",\n                    onClick: ()=>{\n                        setImg((prev)=>prev === 0 ? images.length - 1 : prev - 1);\n                    },\n                    children: \"P\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-white h-10 w-10 rounded-full absolute top-[280px] right-3\",\n                    onClick: ()=>{\n                        setImg((prev)=>prev === images.length - 1 ? 0 : prev + 1);\n                    },\n                    children: \"N\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Slider, \"xT298liBLjNVNUFG9AKQJhmCDOg=\");\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NsaWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21EO0FBRXBDLFNBQVNHOztJQUN0QixNQUFNQyxTQUFTO1FBQ2I7WUFDRUMsS0FBSztRQUNQO1FBQ0E7WUFDRUEsS0FBSztRQUNQO1FBQ0E7WUFDRUEsS0FBSztRQUNQO1FBQ0E7WUFDRUEsS0FBSztRQUNQO0tBQ0Q7SUFDRCxNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0wsK0NBQVFBLENBQUM7SUFDL0IsaUVBQWlFO0lBRWpFLE1BQU1NLGNBQWM7UUFDbEIsNEJBQTRCO1FBQzVCQyxXQUFXO1lBQ1RGLE9BQU8sQ0FBQ0csT0FBVUEsU0FBU04sT0FBT08sTUFBTSxHQUFHLElBQUksSUFBSUQsT0FBTztRQUMxRCw2QkFBNkI7UUFDL0IsR0FBRztJQUNMO0lBRUEsTUFBTUUsZ0JBQWM7UUFDbEIsTUFBTUMsY0FBZUMsWUFBWSxJQUFJTixlQUFjO0lBQ3JEO0lBRUFQLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsYUFBYUQsWUFBWTtZQUM3Qk47UUFDRixHQUFHO1FBRUgsT0FBTztZQUNMUSxjQUFjRDtRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNFLDRFQUFDRTtZQUFRQyxXQUFVOzs4QkFDakIsOERBQUNaO29CQUNDYSxLQUFLZixNQUFNLENBQUNFLElBQUksQ0FBQ0QsR0FBRztvQkFDcEJhLFdBQVk7b0JBQ1pFLEtBQUk7Ozs7Ozs4QkFFTiw4REFBQ0M7b0JBQ0NILFdBQVU7b0JBQ1ZJLFNBQVM7d0JBQ1BmLE9BQU8sQ0FBQ0csT0FBVUEsU0FBUyxJQUFJTixPQUFPTyxNQUFNLEdBQUcsSUFBSUQsT0FBTztvQkFDNUQ7OEJBQ0Q7Ozs7Ozs4QkFHRCw4REFBQ1c7b0JBQ0NILFdBQVU7b0JBQ1ZJLFNBQVM7d0JBQ1BmLE9BQU8sQ0FBQ0csT0FBVUEsU0FBU04sT0FBT08sTUFBTSxHQUFHLElBQUksSUFBSUQsT0FBTztvQkFDNUQ7OEJBQ0Q7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQW5Fd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1NsaWRlci50c3g/NDE3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoKSB7XHJcbiAgY29uc3QgaW1hZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICB1cmw6ICdodHRwczovL3BsYWNlaG9sZC5jby82MDB4NDAwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vaW1hZ2UtZ2V0LnZlcmNlbC5hcHAvRWNvbW1lcmNlLzEud2VicCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdodHRwczovL2ltYWdlLWdldC52ZXJjZWwuYXBwL0Vjb21tZXJjZS8yLndlYnAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9pbWFnZS1nZXQudmVyY2VsLmFwcC9FY29tbWVyY2UvMy53ZWJwJyxcclxuICAgIH0sXHJcbiAgXTtcclxuICBjb25zdCBbaW1nLCBzZXRJbWddID0gdXNlU3RhdGUoMCk7XHJcbiAgLy8gY29uc3QgW2lzVHJhbnNpdGlvbmluZywgc2V0SXNUcmFuc2l0aW9uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXRJc1RyYW5zaXRpb25pbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0SW1nKChwcmV2KSA9PiAocHJldiA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEgPyAwIDogcHJldiArIDEpKTtcclxuICAgICAgLy8gc2V0SXNUcmFuc2l0aW9uaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJ0SW50ZXJ2YWw9KCk9PntcclxuICAgIGNvbnN0IG5ld0ludGVydmFsID0gIHNldEludGVydmFsKCgpPT5jaGFuZ2VJbWFnZSgpLDUwMDAgKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNoYW5nZUltYWdlKCk7XHJcbiAgICB9LCA1MDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3ctc2NyZWVuIGgtWzUwMHB4XSByZWxhdGl2ZSc+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbaW1nXS51cmx9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC1mdWxsIGJnLWNvdmVyIGJnLW5vLXJlcGVhdCBkdXJhdGlvbi01MDAgYmctbGVmdC10b3Agcm91bmRlZC0yeGxgfVxyXG4gICAgICAgICAgYWx0PSdTbGlkZXIgSW1hZ2UnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLXdoaXRlIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgdG9wLVsyODBweF0gbGVmdC0zJ1xyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJbWcoKHByZXYpID0+IChwcmV2ID09PSAwID8gaW1hZ2VzLmxlbmd0aCAtIDEgOiBwcmV2IC0gMSkpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdiZy13aGl0ZSBoLTEwIHctMTAgcm91bmRlZC1mdWxsIGFic29sdXRlIHRvcC1bMjgwcHhdIHJpZ2h0LTMnXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEltZygocHJldikgPT4gKHByZXYgPT09IGltYWdlcy5sZW5ndGggLSAxID8gMCA6IHByZXYgKyAxKSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNsaWRlciIsImltYWdlcyIsInVybCIsImltZyIsInNldEltZyIsImNoYW5nZUltYWdlIiwic2V0VGltZW91dCIsInByZXYiLCJsZW5ndGgiLCJzdGFydEludGVydmFsIiwibmV3SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImludGVydmFsSWQiLCJjbGVhckludGVydmFsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Slider.tsx\n"));

/***/ })

});