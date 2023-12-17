"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/compoundInterestCalculator/compoundInterestChart.tsx":
/*!************************************************************************!*\
  !*** ./src/pages/compoundInterestCalculator/compoundInterestChart.tsx ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_shared_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/translations */ \"./src/shared/translations.ts\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/utils */ \"./lib/utils.ts\");\n// compoundInterestChart.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n// TODO ssr can be enabled again once https://github.com/plouc/nivo/issues/2310\n// is fixed\nconst ResponsiveLine = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_nivo_line_dist_nivo-line_es_js\").then(__webpack_require__.bind(__webpack_require__, /*! @nivo/line */ \"./node_modules/@nivo/line/dist/nivo-line.es.js\")).then((m)=>m.ResponsiveLine), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx -> \" + \"@nivo/line\"\n        ]\n    },\n    ssr: false\n});\n_c = ResponsiveLine;\nconst FONT = {\n    fill: \"#907D69\",\n    color: \"#907D69\",\n    fontSize: 14,\n    fontFamily: '\"DINNextW01\", \"Helvetica Neue\", helvetica, arial, sans-serif'\n};\nconst THEME = {\n    crosshair: {\n        line: {\n            stroke: \"red\",\n            strokeWidth: 2\n        }\n    },\n    grid: {\n        line: {\n            stroke: \"#E8E1D8\",\n            strokeWidth: 1,\n            strokeOpacity: 1\n        }\n    },\n    markers: {},\n    legends: {\n        text: {\n            ...FONT\n        }\n    },\n    axis: {\n        legend: {\n            text: {\n                ...FONT\n            }\n        },\n        ticks: {\n            line: {\n                stroke: \"#E8E1D8,\",\n                strokeWidth: 2,\n                strokeOpacity: 1\n            },\n            text: {\n                ...FONT\n            }\n        }\n    }\n};\nconst CompoundInterestChart = (param)=>{\n    let { chartData } = param;\n    _s();\n    (0,src_shared_translations__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();\n    if (!chartData || chartData.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"No data available for chart\"\n        }, void 0, false, {\n            fileName: \"C:\\\\My Personal Data\\\\programming\\\\Suraiya\\\\lenis 2nd order\\\\linechart\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx\",\n            lineNumber: 76,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-3/6 p-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResponsiveLine, {\n            data: chartData,\n            theme: THEME,\n            margin: {\n                right: 10,\n                bottom: 70,\n                left: 80\n            },\n            yScale: {\n                type: \"linear\"\n            },\n            // curve=\"monotoneX\"\n            enablePoints: false,\n            enableGridX: false,\n            enableSlices: \"x\",\n            axisTop: null,\n            axisRight: null,\n            axisLeft: {\n                tickSize: 0,\n                tickPadding: 10,\n                format: (value)=>value > 0 ? (0,lib_utils__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(+value / 10000) + \"k\" : \"CHF 0\"\n            },\n            axisBottom: {\n                tickSize: 0,\n                tickPadding: 40,\n                format: (value)=>\"\".concat(value, \" Jahre\")\n            },\n            // new\n            // axisLeft={{\n            //     tickSize: 0,\n            //     tickPadding: 10,\n            //     format: (value) => (value > 0 ? formatCurrency(+value / 10000) + 'k' : 'CHF 0'),\n            //   }}\n            //   axisBottom={{\n            //     tickSize: 0,\n            //     tickPadding: 40,\n            //     format: (value) => `${value} Jahre`,\n            //   }}\n            //   xScale={{ type: 'point' }}\n            //   yScale={{\n            //       type: 'linear',\n            //       min: 'auto',\n            //       max: 'auto',\n            //       stacked: true,\n            //       reverse: false\n            //   }}\n            //   yFormat=\" >-.2f\"\n            //   axisTop={null}\n            //   axisRight={null}\n            //   axisBottom={{\n            //       tickSize: 5,\n            //       tickPadding: 5,\n            //       tickRotation: 0,\n            //       legend: 'transportation',\n            //       legendOffset: 36,\n            //       legendPosition: 'middle'\n            //   }}\n            //   axisLeft={{\n            //       tickSize: 5,\n            //       tickPadding: 5,\n            //       tickRotation: 0,\n            //       legend: 'count',\n            //       legendOffset: -40,\n            //       legendPosition: 'middle'\n            //   }}\n            curve: \"natural\",\n            legends: [\n                {\n                    anchor: \"bottom-right\",\n                    direction: \"row\",\n                    justify: false,\n                    translateX: 0,\n                    translateY: 70,\n                    itemsSpacing: 0,\n                    itemDirection: \"left-to-right\",\n                    itemWidth: 80,\n                    itemHeight: 20,\n                    itemOpacity: 0.75,\n                    symbolSize: 12,\n                    symbolShape: \"circle\",\n                    symbolBorderColor: \"rgba(0, 0, 0, .5)\",\n                    effects: [\n                        {\n                            on: \"hover\",\n                            style: {\n                                itemBackground: \"rgba(0, 0, 0, .03)\",\n                                itemOpacity: 1\n                            }\n                        }\n                    ]\n                }\n            ]\n        }, void 0, false, {\n            fileName: \"C:\\\\My Personal Data\\\\programming\\\\Suraiya\\\\lenis 2nd order\\\\linechart\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx\",\n            lineNumber: 81,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\My Personal Data\\\\programming\\\\Suraiya\\\\lenis 2nd order\\\\linechart\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CompoundInterestChart, \"h6J0Q3nxDyaAQ99JMz6OOoWbcwM=\", false, function() {\n    return [\n        src_shared_translations__WEBPACK_IMPORTED_MODULE_3__.useTranslation\n    ];\n});\n_c1 = CompoundInterestChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CompoundInterestChart);\nvar _c, _c1;\n$RefreshReg$(_c, \"ResponsiveLine\");\n$RefreshReg$(_c1, \"CompoundInterestChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG91bmRJbnRlcmVzdENhbGN1bGF0b3IvY29tcG91bmRJbnRlcmVzdENoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw0QkFBNEI7OztBQUNGO0FBR1M7QUFFc0I7QUFFZDtBQUUzQywrRUFBK0U7QUFDL0UsV0FBVztBQUNYLE1BQU1JLGlCQUFpQkgsbURBQU9BLENBQUMsSUFBTSw0TUFBTyxDQUFjSSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUYsY0FBYzs7Ozs7O0lBQUtHLEtBQUs7O0tBQTFGSDtBQUVOLE1BQU1JLE9BQU87SUFDVEMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLFVBQVU7SUFDVkMsWUFBWTtBQUNoQjtBQUVBLE1BQU1DLFFBQWU7SUFFakJDLFdBQVc7UUFDUEMsTUFBTTtZQUNGQyxRQUFRO1lBQ1JDLGFBQWE7UUFDakI7SUFDSjtJQUNBQyxNQUFNO1FBQ0ZILE1BQU07WUFDRkMsUUFBUTtZQUNSQyxhQUFhO1lBQ2JFLGVBQWU7UUFDbkI7SUFDSjtJQUNBQyxTQUFTLENBQUM7SUFDVkMsU0FBUztRQUNMQyxNQUFNO1lBQ0YsR0FBR2QsSUFBSTtRQUNYO0lBQ0o7SUFDQWUsTUFBTTtRQUNGQyxRQUFRO1lBQ0pGLE1BQU07Z0JBQ0YsR0FBR2QsSUFBSTtZQUNYO1FBQ0o7UUFDQWlCLE9BQU87WUFDSFYsTUFBTTtnQkFDRkMsUUFBUTtnQkFDUkMsYUFBYTtnQkFDYkUsZUFBZTtZQUNuQjtZQUNBRyxNQUFNO2dCQUNGLEdBQUdkLElBQUk7WUFDWDtRQUNKO0lBQ0o7QUFDSjtBQVlBLE1BQU1rQix3QkFBd0Q7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQ3hFekIsdUVBQWNBO0lBRWQsSUFBSSxDQUFDeUIsYUFBYUEsVUFBVUMsTUFBTSxLQUFLLEdBQUc7UUFDdEMscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0E7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQzFCO1lBQ0cyQixNQUFNSjtZQUNOSyxPQUFPbkI7WUFFUG9CLFFBQVE7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLE1BQU07WUFDVjtZQUNBQyxRQUFRO2dCQUNKQyxNQUFNO1lBRVY7WUFDQSxvQkFBb0I7WUFFcEJDLGNBQWM7WUFDZEMsYUFBYTtZQUViQyxjQUFhO1lBQ2JDLFNBQVM7WUFDVEMsV0FBVztZQUNYQyxVQUFVO2dCQUNOQyxVQUFVO2dCQUNWQyxhQUFhO2dCQUNiQyxRQUFRLENBQUNDLFFBQVdBLFFBQVEsSUFDdEI3Qyx5REFBY0EsQ0FBQyxDQUFFNkMsUUFBUSxTQUFTLE1BQ2xDO1lBQ1Y7WUFDQUMsWUFBWTtnQkFDUkosVUFBVTtnQkFDVkMsYUFBYTtnQkFFYkMsUUFBUSxDQUFDQyxRQUFVLEdBQVMsT0FBTkEsT0FBTTtZQUNoQztZQUNBLE1BQU07WUFFTixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLHVCQUF1QjtZQUN2Qix1RkFBdUY7WUFDdkYsT0FBTztZQUNQLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsdUJBQXVCO1lBQ3ZCLDJDQUEyQztZQUMzQyxPQUFPO1lBRVAsK0JBQStCO1lBQy9CLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLE9BQU87WUFDUCxxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLHdCQUF3QjtZQUN4Qix5QkFBeUI7WUFDekIsa0NBQWtDO1lBQ2xDLDBCQUEwQjtZQUMxQixpQ0FBaUM7WUFDakMsT0FBTztZQUNQLGdCQUFnQjtZQUNoQixxQkFBcUI7WUFDckIsd0JBQXdCO1lBQ3hCLHlCQUF5QjtZQUN6Qix5QkFBeUI7WUFDekIsMkJBQTJCO1lBQzNCLGlDQUFpQztZQUNqQyxPQUFPO1lBRVBFLE9BQU07WUFDTjdCLFNBQVM7Z0JBQ0w7b0JBQ0U4QixRQUFRO29CQUNSQyxXQUFXO29CQUNYQyxTQUFTO29CQUNUQyxZQUFZO29CQUNaQyxZQUFZO29CQUNaQyxjQUFjO29CQUNkQyxlQUFlO29CQUNmQyxXQUFXO29CQUNYQyxZQUFZO29CQUNaQyxhQUFhO29CQUNiQyxZQUFZO29CQUNaQyxhQUFhO29CQUNiQyxtQkFBbUI7b0JBQ25CQyxTQUFTO3dCQUNQOzRCQUNFQyxJQUFJOzRCQUNKQyxPQUFPO2dDQUNMQyxnQkFBZ0I7Z0NBQ2hCUCxhQUFhOzRCQUNmO3dCQUNGO3FCQUNEO2dCQUNIO2FBQ0Q7Ozs7Ozs7Ozs7O0FBU25CO0dBdkhNbEM7O1FBQ0Z4QixtRUFBY0E7OztNQURad0I7QUF5SE4sK0RBQWVBLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG91bmRJbnRlcmVzdENhbGN1bGF0b3IvY29tcG91bmRJbnRlcmVzdENoYXJ0LnRzeD9kMGUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvdW5kSW50ZXJlc3RDaGFydC50c3hcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG5pdm8vY29yZSc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcblxyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3NyYy9zaGFyZWQvdHJhbnNsYXRpb25zJztcclxuXHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSAnbGliL3V0aWxzJztcclxuXHJcbi8vIFRPRE8gc3NyIGNhbiBiZSBlbmFibGVkIGFnYWluIG9uY2UgaHR0cHM6Ly9naXRodWIuY29tL3Bsb3VjL25pdm8vaXNzdWVzLzIzMTBcclxuLy8gaXMgZml4ZWRcclxuY29uc3QgUmVzcG9uc2l2ZUxpbmUgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnQG5pdm8vbGluZScpLnRoZW4oKG0pID0+IG0uUmVzcG9uc2l2ZUxpbmUpLCB7IHNzcjogZmFsc2UgfSk7XHJcblxyXG5jb25zdCBGT05UID0ge1xyXG4gICAgZmlsbDogJyM5MDdENjknLFxyXG4gICAgY29sb3I6ICcjOTA3RDY5JyxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIGZvbnRGYW1pbHk6ICdcIkRJTk5leHRXMDFcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmJ1xyXG59O1xyXG5cclxuY29uc3QgVEhFTUU6IFRoZW1lID0ge1xyXG5cclxuICAgIGNyb3NzaGFpcjoge1xyXG4gICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgc3Ryb2tlOiAncmVkJyxcclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ3JpZDoge1xyXG4gICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgc3Ryb2tlOiAnI0U4RTFEOCcsXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxLFxyXG4gICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAxXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHt9LFxyXG4gICAgbGVnZW5kczoge1xyXG4gICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgLi4uRk9OVFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBheGlzOiB7XHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgICAgIC4uLkZPTlRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgbGluZToge1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAnI0U4RTFEOCwnLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgICAgIC4uLkZPTlRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmludGVyZmFjZSBDb21wb3VuZEludGVyZXN0Q2hhcnRQcm9wcyB7XHJcbiAgICBjaGFydERhdGE6IHtcclxuICAgICAgICBpZDogc3RyaW5nO1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgICAgICB5OiBudW1iZXJcclxuICAgICAgICB9W11cclxuICAgIH1bXTtcclxufVxyXG5cclxuY29uc3QgQ29tcG91bmRJbnRlcmVzdENoYXJ0OiBGQzxDb21wb3VuZEludGVyZXN0Q2hhcnRQcm9wcz4gPSAoeyBjaGFydERhdGEgfSkgPT4ge1xyXG4gICAgdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgICBpZiAoIWNoYXJ0RGF0YSB8fCBjaGFydERhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+Tm8gZGF0YSBhdmFpbGFibGUgZm9yIGNoYXJ0PC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTMvNiBwLTE2XCI+XHJcbiAgICAgICAgICAgIDxSZXNwb25zaXZlTGluZVxyXG4gICAgICAgICAgICAgICAgZGF0YT17Y2hhcnREYXRhfVxyXG4gICAgICAgICAgICAgICAgdGhlbWU9e1RIRU1FfVxyXG5cclxuICAgICAgICAgICAgICAgIG1hcmdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDcwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDgwXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgeVNjYWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXHJcblxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8vIGN1cnZlPVwibW9ub3RvbmVYXCJcclxuXHJcbiAgICAgICAgICAgICAgICBlbmFibGVQb2ludHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZW5hYmxlR3JpZFg9e2ZhbHNlfVxyXG5cclxuICAgICAgICAgICAgICAgIGVuYWJsZVNsaWNlcz1cInhcIlxyXG4gICAgICAgICAgICAgICAgYXhpc1RvcD17bnVsbH1cclxuICAgICAgICAgICAgICAgIGF4aXNSaWdodD17bnVsbH1cclxuICAgICAgICAgICAgICAgIGF4aXNMZWZ0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlja1NpemU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGlja1BhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogKHZhbHVlKSA9PiAodmFsdWUgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koKyB2YWx1ZSAvIDEwMDAwKSArICdrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdDSEYgMCcpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgYXhpc0JvdHRvbT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tTaXplOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tQYWRkaW5nOiA0MCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAodmFsdWUpID0+IGAke3ZhbHVlfSBKYWhyZWBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvLyBuZXdcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBheGlzTGVmdD17e1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpY2tTaXplOiAwLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpY2tQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb3JtYXQ6ICh2YWx1ZSkgPT4gKHZhbHVlID4gMCA/IGZvcm1hdEN1cnJlbmN5KCt2YWx1ZSAvIDEwMDAwKSArICdrJyA6ICdDSEYgMCcpLFxyXG4gICAgICAgICAgICAgICAgLy8gICB9fVxyXG4gICAgICAgICAgICAgICAgLy8gICBheGlzQm90dG9tPXt7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGlja1NpemU6IDAsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGlja1BhZGRpbmc6IDQwLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvcm1hdDogKHZhbHVlKSA9PiBgJHt2YWx1ZX0gSmFocmVgLFxyXG4gICAgICAgICAgICAgICAgLy8gICB9fVxyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgeFNjYWxlPXt7IHR5cGU6ICdwb2ludCcgfX1cclxuICAgICAgICAgICAgICAgIC8vICAgeVNjYWxlPXt7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB0eXBlOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIG1pbjogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgbWF4OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vICAgfX1cclxuICAgICAgICAgICAgICAgIC8vICAgeUZvcm1hdD1cIiA+LS4yZlwiXHJcbiAgICAgICAgICAgICAgICAvLyAgIGF4aXNUb3A9e251bGx9XHJcbiAgICAgICAgICAgICAgICAvLyAgIGF4aXNSaWdodD17bnVsbH1cclxuICAgICAgICAgICAgICAgIC8vICAgYXhpc0JvdHRvbT17e1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgdGlja1NpemU6IDUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB0aWNrUGFkZGluZzogNSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIHRpY2tSb3RhdGlvbjogMCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIGxlZ2VuZDogJ3RyYW5zcG9ydGF0aW9uJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIGxlZ2VuZE9mZnNldDogMzYsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBsZWdlbmRQb3NpdGlvbjogJ21pZGRsZSdcclxuICAgICAgICAgICAgICAgIC8vICAgfX1cclxuICAgICAgICAgICAgICAgIC8vICAgYXhpc0xlZnQ9e3tcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIHRpY2tTaXplOiA1LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgdGlja1BhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB0aWNrUm90YXRpb246IDAsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBsZWdlbmQ6ICdjb3VudCcsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBsZWdlbmRPZmZzZXQ6IC00MCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAnbWlkZGxlJ1xyXG4gICAgICAgICAgICAgICAgLy8gICB9fVxyXG5cclxuICAgICAgICAgICAgICAgIGN1cnZlPVwibmF0dXJhbFwiXHJcbiAgICAgICAgICAgICAgICBsZWdlbmRzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiAnYm90dG9tLXJpZ2h0JywgLy8gQWRqdXN0IGFuY2hvciBhcyBuZWVkZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JvdycsICAgICAgIC8vIEFkanVzdCBkaXJlY3Rpb24gYXMgbmVlZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiA3MCxcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zU3BhY2luZzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXJlY3Rpb246ICdsZWZ0LXRvLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtSGVpZ2h0OiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1PcGFjaXR5OiAwLjc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3ltYm9sU2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xTaGFwZTogJ2NpcmNsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xCb3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiAnaG92ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgLjAzKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtT3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBdfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG91bmRJbnRlcmVzdENoYXJ0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJkeW5hbWljIiwidXNlVHJhbnNsYXRpb24iLCJmb3JtYXRDdXJyZW5jeSIsIlJlc3BvbnNpdmVMaW5lIiwidGhlbiIsIm0iLCJzc3IiLCJGT05UIiwiZmlsbCIsImNvbG9yIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiVEhFTUUiLCJjcm9zc2hhaXIiLCJsaW5lIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJncmlkIiwic3Ryb2tlT3BhY2l0eSIsIm1hcmtlcnMiLCJsZWdlbmRzIiwidGV4dCIsImF4aXMiLCJsZWdlbmQiLCJ0aWNrcyIsIkNvbXBvdW5kSW50ZXJlc3RDaGFydCIsImNoYXJ0RGF0YSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEiLCJ0aGVtZSIsIm1hcmdpbiIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInlTY2FsZSIsInR5cGUiLCJlbmFibGVQb2ludHMiLCJlbmFibGVHcmlkWCIsImVuYWJsZVNsaWNlcyIsImF4aXNUb3AiLCJheGlzUmlnaHQiLCJheGlzTGVmdCIsInRpY2tTaXplIiwidGlja1BhZGRpbmciLCJmb3JtYXQiLCJ2YWx1ZSIsImF4aXNCb3R0b20iLCJjdXJ2ZSIsImFuY2hvciIsImRpcmVjdGlvbiIsImp1c3RpZnkiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsIml0ZW1zU3BhY2luZyIsIml0ZW1EaXJlY3Rpb24iLCJpdGVtV2lkdGgiLCJpdGVtSGVpZ2h0IiwiaXRlbU9wYWNpdHkiLCJzeW1ib2xTaXplIiwic3ltYm9sU2hhcGUiLCJzeW1ib2xCb3JkZXJDb2xvciIsImVmZmVjdHMiLCJvbiIsInN0eWxlIiwiaXRlbUJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/compoundInterestCalculator/compoundInterestChart.tsx\n"));

/***/ })

});