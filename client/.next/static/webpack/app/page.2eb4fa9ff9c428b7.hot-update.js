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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Slider() {\n    _s();\n    const images = [\n        {\n            url: \"https://placehold.co/600x400\"\n        },\n        {\n            url: \"https://image-get.vercel.app/Ecommerce/1.webp\"\n        },\n        {\n            url: \"https://image-get.vercel.app/Ecommerce/2.webp\"\n        },\n        {\n            url: \"https://image-get.vercel.app/Ecommerce/3.webp\"\n        }\n    ];\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const changeImage = ()=>{\n        setImg((prev)=>prev === images.length - 1 ? 0 : ++prev);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            changeImage();\n        }, 5000);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"w-screen h-[500px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: images[img].url,\n                    className: \"w-full h-full bg-cover bg-no-repeat duration-500 bg-left-top rounded-2xl\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-white h-10 w-10 rounded-full absolute top-[280px] left-3\",\n                    onClick: ()=>{\n                        setImg((prev)=>prev === 0 ? images.length - 1 : prev - 1);\n                        clearTimeout;\n                    },\n                    children: \"P\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-white h-10 w-10 rounded-full absolute top-[280px] right-3\",\n                    onClick: ()=>{\n                        setImg((prev)=>prev === images.length - 1 ? 0 : prev + 1);\n                        clearTimeout;\n                    },\n                    children: \"N\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ashis\\\\OneDrive\\\\Desktop\\\\Ecommerce\\\\client\\\\app\\\\components\\\\Slider.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Slider, \"PS5hId0Jlcq9R5aPQvs+gZfw6l0=\");\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NsaWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2tEO0FBRW5DLFNBQVNHOztJQUN0QixNQUFNQyxTQUFTO1FBQ2I7WUFDRUMsS0FBSTtRQUNOO1FBQ0E7WUFDRUEsS0FBSTtRQUNOO1FBQ0E7WUFDRUEsS0FBSTtRQUNOO1FBQ0E7WUFDRUEsS0FBSTtRQUNOO0tBQ0Q7SUFDRCxNQUFNLENBQUNDLEtBQUlDLE9BQU8sR0FBR0wsK0NBQVFBLENBQUM7SUFFOUIsTUFBTU0sY0FBWTtRQUNkRCxPQUFPLENBQUNFLE9BQVFBLFNBQVNMLE9BQU9NLE1BQU0sR0FBQyxJQUFJLElBQUksRUFBRUQ7SUFFckQ7SUFFQVIsZ0RBQVNBLENBQUM7UUFDUlUsV0FBVztZQUNUSDtRQUNGLEdBQUU7SUFDSjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDSTtZQUFRQyxXQUFVOzs4QkFDakIsOERBQUNQO29CQUFJUSxLQUFLVixNQUFNLENBQUNFLElBQUksQ0FBQ0QsR0FBRztvQkFBRVEsV0FBVTs7Ozs7OzhCQUNyQyw4REFBQ0U7b0JBQU9GLFdBQVU7b0JBQ2xCRyxTQUFTO3dCQUFLVCxPQUFPLENBQUNFLE9BQVFBLFNBQVEsSUFBSUwsT0FBT00sTUFBTSxHQUFDLElBQUlELE9BQUs7d0JBQUdRO29CQUFhOzhCQUFHOzs7Ozs7OEJBR3BGLDhEQUFDRjtvQkFBT0YsV0FBVTtvQkFDbEJHLFNBQVM7d0JBQUtULE9BQU8sQ0FBQ0UsT0FBUUEsU0FBU0wsT0FBT00sTUFBTSxHQUFDLElBQUksSUFBSUQsT0FBSzt3QkFBS1E7b0JBQVk7OEJBQ2xGOzs7Ozs7Ozs7Ozs7O0FBTVQ7R0E1Q3dCZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9TbGlkZXIudHN4PzQxNzEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoKSB7XHJcbiAgY29uc3QgaW1hZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICB1cmw6J2h0dHBzOi8vcGxhY2Vob2xkLmNvLzYwMHg0MDAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6J2h0dHBzOi8vaW1hZ2UtZ2V0LnZlcmNlbC5hcHAvRWNvbW1lcmNlLzEud2VicCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDonaHR0cHM6Ly9pbWFnZS1nZXQudmVyY2VsLmFwcC9FY29tbWVyY2UvMi53ZWJwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOidodHRwczovL2ltYWdlLWdldC52ZXJjZWwuYXBwL0Vjb21tZXJjZS8zLndlYnAnXHJcbiAgICB9LFxyXG4gIF1cclxuICBjb25zdCBbaW1nLHNldEltZ10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlSW1hZ2U9KCk9PntcclxuICAgICAgc2V0SW1nKChwcmV2KT0+IHByZXYgPT09IGltYWdlcy5sZW5ndGgtMSA/IDAgOiArK3ByZXYgKVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgY2hhbmdlSW1hZ2UoKTtcclxuICAgIH0sNTAwMClcclxuICB9LClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndy1zY3JlZW4gaC1bNTAwcHhdJz5cclxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VzW2ltZ10udXJsfSBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgYmctY292ZXIgYmctbm8tcmVwZWF0IGR1cmF0aW9uLTUwMCBiZy1sZWZ0LXRvcCByb3VuZGVkLTJ4bCcvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy13aGl0ZSBoLTEwIHctMTAgcm91bmRlZC1mdWxsIGFic29sdXRlIHRvcC1bMjgwcHhdIGxlZnQtMydcclxuICAgICAgICBvbkNsaWNrPXsoKT0+e3NldEltZygocHJldik9PiBwcmV2ID09PTAgPyBpbWFnZXMubGVuZ3RoLTEgOiBwcmV2LTEpO2NsZWFyVGltZW91dDt9fT5cclxuICAgICAgICAgIFAgXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXdoaXRlIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgdG9wLVsyODBweF0gcmlnaHQtMydcclxuICAgICAgICBvbkNsaWNrPXsoKT0+e3NldEltZygocHJldik9PiBwcmV2ID09PSBpbWFnZXMubGVuZ3RoLTEgPyAwIDogcHJldisxICk7IGNsZWFyVGltZW91dH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTiBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2xpZGVyIiwiaW1hZ2VzIiwidXJsIiwiaW1nIiwic2V0SW1nIiwiY2hhbmdlSW1hZ2UiLCJwcmV2IiwibGVuZ3RoIiwic2V0VGltZW91dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xlYXJUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Slider.tsx\n"));

/***/ })

});