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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Slider() {\n    _s();\n    const images = [\n        {\n            url: \"https://placehold.co/600x400\"\n        },\n        {\n            url: \"https://image-get.vercel.app/Ecommerce/1.webp\"\n        },\n        {\n            url: \"https://image-get.vercel.app/Ecommerce/2.webp\"\n        },\n        {\n            url: \"https://image-get.vercel.app/Ecommerce/3.webp\"\n        }\n    ];\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(images.length - 1);\n    const changeImage = ()=>{\n        setTimeout(()=>{\n            setImg((prev)=>{\n                var _images;\n                return prev === 0 ? ((_images = images) === null || _images === void 0 ? void 0 : _images.length) - 1 : --prev;\n            });\n        }, 5000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        changeImage();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"w-screen h-[500px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: images[img].url,\n                    className: \"w-full h-full bg-cover bg-no-repeat duration-500 bg-left-top rounded-2xl\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-white h-10 w-10 rounded-full absolute top-[280px] left-3\",\n                    onClick: ()=>{\n                        setImg((prev)=>prev--);\n                    },\n                    children: \"P\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-white h-10 w-10 rounded-full absolute top-[280px] right-3\",\n                    children: \"N\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Slider, \"KtSSwNZyMIlIK2UBPAqFotiqVS0=\");\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NsaWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2tEO0FBRW5DLFNBQVNHOztJQUN0QixNQUFNQyxTQUFTO1FBQ2I7WUFDRUMsS0FBSTtRQUNOO1FBQ0E7WUFDRUEsS0FBSTtRQUNOO1FBQ0E7WUFDRUEsS0FBSTtRQUNOO1FBQ0E7WUFDRUEsS0FBSTtRQUNOO0tBQ0Q7SUFDRCxNQUFNLENBQUNDLEtBQUlDLE9BQU8sR0FBR0wsK0NBQVFBLENBQUNFLE9BQU9JLE1BQU0sR0FBQztJQUU1QyxNQUFNQyxjQUFZO1FBQ2hCQyxXQUFXO1lBQ1RILE9BQU8sQ0FBQ0k7b0JBQXNCUDt1QkFBZE8sU0FBUyxJQUFLUCxFQUFBQSxVQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVFJLE1BQU0sSUFBRyxJQUFLLEVBQUVHOztRQUN4RCxHQUFFO0lBRUo7SUFFQVYsZ0RBQVNBLENBQUM7UUFDUlE7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDRztZQUFRQyxXQUFVOzs4QkFDakIsOERBQUNQO29CQUFJUSxLQUFLVixNQUFNLENBQUNFLElBQUksQ0FBQ0QsR0FBRztvQkFBRVEsV0FBVTs7Ozs7OzhCQUNyQyw4REFBQ0U7b0JBQU9GLFdBQVU7b0JBQThERyxTQUFTO3dCQUFLVCxPQUFPLENBQUNJLE9BQVFBO29CQUFPOzhCQUFHOzs7Ozs7OEJBR3hILDhEQUFDSTtvQkFBT0YsV0FBVTs4QkFBK0Q7Ozs7Ozs7Ozs7Ozs7QUFNekY7R0F6Q3dCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9TbGlkZXIudHN4PzQxNzEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoKSB7XHJcbiAgY29uc3QgaW1hZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICB1cmw6J2h0dHBzOi8vcGxhY2Vob2xkLmNvLzYwMHg0MDAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6J2h0dHBzOi8vaW1hZ2UtZ2V0LnZlcmNlbC5hcHAvRWNvbW1lcmNlLzEud2VicCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDonaHR0cHM6Ly9pbWFnZS1nZXQudmVyY2VsLmFwcC9FY29tbWVyY2UvMi53ZWJwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOidodHRwczovL2ltYWdlLWdldC52ZXJjZWwuYXBwL0Vjb21tZXJjZS8zLndlYnAnXHJcbiAgICB9LFxyXG4gIF1cclxuICBjb25zdCBbaW1nLHNldEltZ10gPSB1c2VTdGF0ZShpbWFnZXMubGVuZ3RoLTEpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VJbWFnZT0oKT0+e1xyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICBzZXRJbWcoKHByZXYpPT4gcHJldiA9PT0gMCA/IChpbWFnZXM/Lmxlbmd0aCAtIDEpIDogLS1wcmV2IClcclxuICAgIH0sNTAwMClcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjaGFuZ2VJbWFnZSgpO1xyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3ctc2NyZWVuIGgtWzUwMHB4XSc+XHJcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlc1tpbWddLnVybH0gY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIGJnLWNvdmVyIGJnLW5vLXJlcGVhdCBkdXJhdGlvbi01MDAgYmctbGVmdC10b3Agcm91bmRlZC0yeGwnLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctd2hpdGUgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBhYnNvbHV0ZSB0b3AtWzI4MHB4XSBsZWZ0LTMnIG9uQ2xpY2s9eygpPT57c2V0SW1nKChwcmV2KT0+IHByZXYtLSl9fT5cclxuICAgICAgICAgIFAgXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXdoaXRlIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgdG9wLVsyODBweF0gcmlnaHQtMyc+XHJcbiAgICAgICAgICBOIFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTbGlkZXIiLCJpbWFnZXMiLCJ1cmwiLCJpbWciLCJzZXRJbWciLCJsZW5ndGgiLCJjaGFuZ2VJbWFnZSIsInNldFRpbWVvdXQiLCJwcmV2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInNyYyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Slider.tsx\n"));

/***/ })

});