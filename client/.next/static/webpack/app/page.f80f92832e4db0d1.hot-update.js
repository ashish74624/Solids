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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Slider() {\n    _s();\n    const images = [\n        {\n            url: \"https://placehold.co/600x400\"\n        },\n        {\n            url: \"https://image-get.vercel.app/Ecommerce/1.webp\"\n        },\n        {\n            url: \"https://image-get.vercel.app/Ecommerce/2.webp\"\n        },\n        {\n            url: \"https://image-get.vercel.app/Ecommerce/3.webp\"\n        }\n    ];\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const changeImage = ()=>{\n        setTimeout(()=>{\n            setImg((prev)=>prev === images.length - 1 ? 0 : ++prev);\n        }, 5000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        changeImage();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"w-screen h-[500px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: images[img].url,\n                    className: \"w-full h-full bg-cover bg-no-repeat duration-500 bg-left-top rounded-2xl\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-white h-10 w-10 rounded-full absolute top-[280px] left-3\",\n                    onClick: ()=>{\n                        setImg((prev)=>prev === 0 ? images.length - 1 : prev - 1);\n                        clearTimeout;\n                    },\n                    children: \"P\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-white h-10 w-10 rounded-full absolute top-[280px] right-3\",\n                    onClick: ()=>{\n                        setImg((prev)=>prev === images.length - 1 ? 0 : prev + 1);\n                        clearTimeout;\n                    },\n                    children: \"N\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Slider, \"PS5hId0Jlcq9R5aPQvs+gZfw6l0=\");\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NsaWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2tEO0FBRW5DLFNBQVNHOztJQUN0QixNQUFNQyxTQUFTO1FBQ2I7WUFDRUMsS0FBSTtRQUNOO1FBQ0E7WUFDRUEsS0FBSTtRQUNOO1FBQ0E7WUFDRUEsS0FBSTtRQUNOO1FBQ0E7WUFDRUEsS0FBSTtRQUNOO0tBQ0Q7SUFDRCxNQUFNLENBQUNDLEtBQUlDLE9BQU8sR0FBR0wsK0NBQVFBLENBQUM7SUFFOUIsTUFBTU0sY0FBWTtRQUNoQkMsV0FBVztZQUNURixPQUFPLENBQUNHLE9BQVFBLFNBQVNOLE9BQU9PLE1BQU0sR0FBQyxJQUFJLElBQUksRUFBRUQ7UUFDbkQsR0FBRTtJQUVKO0lBRUFULGdEQUFTQSxDQUFDO1FBQ1JPO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ0k7WUFBUUMsV0FBVTs7OEJBQ2pCLDhEQUFDUDtvQkFBSVEsS0FBS1YsTUFBTSxDQUFDRSxJQUFJLENBQUNELEdBQUc7b0JBQUVRLFdBQVU7Ozs7Ozs4QkFDckMsOERBQUNFO29CQUFPRixXQUFVO29CQUNsQkcsU0FBUzt3QkFBS1QsT0FBTyxDQUFDRyxPQUFRQSxTQUFRLElBQUlOLE9BQU9PLE1BQU0sR0FBQyxJQUFJRCxPQUFLO3dCQUFHTztvQkFBYTs4QkFBRzs7Ozs7OzhCQUdwRiw4REFBQ0Y7b0JBQU9GLFdBQVU7b0JBQ2xCRyxTQUFTO3dCQUFLVCxPQUFPLENBQUNHLE9BQVFBLFNBQVNOLE9BQU9PLE1BQU0sR0FBQyxJQUFJLElBQUlELE9BQUs7d0JBQUtPO29CQUFZOzhCQUNsRjs7Ozs7Ozs7Ozs7OztBQU1UO0dBNUN3QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU2xpZGVyLnRzeD80MTcxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKCkge1xyXG4gIGNvbnN0IGltYWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgdXJsOidodHRwczovL3BsYWNlaG9sZC5jby82MDB4NDAwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOidodHRwczovL2ltYWdlLWdldC52ZXJjZWwuYXBwL0Vjb21tZXJjZS8xLndlYnAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6J2h0dHBzOi8vaW1hZ2UtZ2V0LnZlcmNlbC5hcHAvRWNvbW1lcmNlLzIud2VicCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDonaHR0cHM6Ly9pbWFnZS1nZXQudmVyY2VsLmFwcC9FY29tbWVyY2UvMy53ZWJwJ1xyXG4gICAgfSxcclxuICBdXHJcbiAgY29uc3QgW2ltZyxzZXRJbWddID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUltYWdlPSgpPT57XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgIHNldEltZygocHJldik9PiBwcmV2ID09PSBpbWFnZXMubGVuZ3RoLTEgPyAwIDogKytwcmV2IClcclxuICAgIH0sNTAwMClcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjaGFuZ2VJbWFnZSgpO1xyXG4gIH0sKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd3LXNjcmVlbiBoLVs1MDBweF0nPlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZXNbaW1nXS51cmx9IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBiZy1jb3ZlciBiZy1uby1yZXBlYXQgZHVyYXRpb24tNTAwIGJnLWxlZnQtdG9wIHJvdW5kZWQtMnhsJy8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXdoaXRlIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgdG9wLVsyODBweF0gbGVmdC0zJ1xyXG4gICAgICAgIG9uQ2xpY2s9eygpPT57c2V0SW1nKChwcmV2KT0+IHByZXYgPT09MCA/IGltYWdlcy5sZW5ndGgtMSA6IHByZXYtMSk7Y2xlYXJUaW1lb3V0O319PlxyXG4gICAgICAgICAgUCBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctd2hpdGUgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBhYnNvbHV0ZSB0b3AtWzI4MHB4XSByaWdodC0zJ1xyXG4gICAgICAgIG9uQ2xpY2s9eygpPT57c2V0SW1nKChwcmV2KT0+IHByZXYgPT09IGltYWdlcy5sZW5ndGgtMSA/IDAgOiBwcmV2KzEgKTsgY2xlYXJUaW1lb3V0fX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBOIFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTbGlkZXIiLCJpbWFnZXMiLCJ1cmwiLCJpbWciLCJzZXRJbWciLCJjaGFuZ2VJbWFnZSIsInNldFRpbWVvdXQiLCJwcmV2IiwibGVuZ3RoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInNyYyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGVhclRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Slider.tsx\n"));

/***/ })

});