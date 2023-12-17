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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_shared_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/translations */ \"./src/shared/translations.ts\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/utils */ \"./lib/utils.ts\");\n// compoundInterestChart.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n// TODO ssr can be enabled again once https://github.com/plouc/nivo/issues/2310\n// is fixed\nconst ResponsiveLine = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_nivo_line_dist_nivo-line_es_js\").then(__webpack_require__.bind(__webpack_require__, /*! @nivo/line */ \"./node_modules/@nivo/line/dist/nivo-line.es.js\")).then((m)=>m.ResponsiveLine), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx -> \" + \"@nivo/line\"\n        ]\n    },\n    ssr: false\n});\n_c = ResponsiveLine;\nconst FONT = {\n    fill: \"#907D69\",\n    color: \"#907D69\",\n    fontSize: 14,\n    fontFamily: '\"DINNextW01\", \"Helvetica Neue\", helvetica, arial, sans-serif'\n};\nconst THEME = {\n    crosshair: {\n        line: {\n            stroke: \"blue\",\n            strokeWidth: 2\n        }\n    },\n    grid: {\n        line: {\n            stroke: \"#E8E1D8\",\n            strokeWidth: 1,\n            strokeOpacity: 1\n        }\n    },\n    markers: {},\n    legends: {\n        text: {\n            ...FONT\n        }\n    },\n    axis: {\n        legend: {\n            text: {\n                ...FONT\n            }\n        },\n        ticks: {\n            line: {\n                stroke: \"#E8E1D8,\",\n                strokeWidth: 2,\n                strokeOpacity: 1\n            },\n            text: {\n                ...FONT\n            }\n        }\n    }\n};\nconst CompoundInterestChart = (param)=>{\n    let { chartData } = param;\n    _s();\n    (0,src_shared_translations__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();\n    if (!chartData || chartData.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"No data available for chart\"\n        }, void 0, false, {\n            fileName: \"C:\\\\My Personal Data\\\\programming\\\\Suraiya\\\\lenis 2nd order\\\\linechart\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx\",\n            lineNumber: 76,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-3/6 p-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResponsiveLine, {\n            data: chartData,\n            theme: THEME,\n            margin: {\n                right: 10,\n                bottom: 70,\n                left: 80\n            },\n            yScale: {\n                type: \"linear\"\n            },\n            // curve=\"monotoneX\"\n            enablePoints: false,\n            enableGridX: false,\n            enableSlices: \"x\",\n            axisTop: null,\n            axisRight: null,\n            axisLeft: {\n                tickSize: 0,\n                tickPadding: 10,\n                format: (value)=>value > 0 ? (0,lib_utils__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(+value / 10000) + \"k\" : \"CHF 0\"\n            },\n            axisBottom: {\n                tickSize: 0,\n                tickPadding: 40,\n                format: (value)=>\"\".concat(value, \" Jahre\")\n            },\n            // new\n            // axisLeft={{\n            //     tickSize: 0,\n            //     tickPadding: 10,\n            //     format: (value) => (value > 0 ? formatCurrency(+value / 10000) + 'k' : 'CHF 0'),\n            //   }}\n            //   axisBottom={{\n            //     tickSize: 0,\n            //     tickPadding: 40,\n            //     format: (value) => `${value} Jahre`,\n            //   }}\n            //   xScale={{ type: 'point' }}\n            //   yScale={{\n            //       type: 'linear',\n            //       min: 'auto',\n            //       max: 'auto',\n            //       stacked: true,\n            //       reverse: false\n            //   }}\n            //   yFormat=\" >-.2f\"\n            //   axisTop={null}\n            //   axisRight={null}\n            //   axisBottom={{\n            //       tickSize: 5,\n            //       tickPadding: 5,\n            //       tickRotation: 0,\n            //       legend: 'transportation',\n            //       legendOffset: 36,\n            //       legendPosition: 'middle'\n            //   }}\n            //   axisLeft={{\n            //       tickSize: 5,\n            //       tickPadding: 5,\n            //       tickRotation: 0,\n            //       legend: 'count',\n            //       legendOffset: -40,\n            //       legendPosition: 'middle'\n            //   }}\n            curve: \"natural\",\n            legends: [\n                {\n                    anchor: \"bottom-right\",\n                    direction: \"row\",\n                    justify: false,\n                    translateX: 0,\n                    translateY: 70,\n                    itemsSpacing: 0,\n                    itemDirection: \"left-to-right\",\n                    itemWidth: 80,\n                    itemHeight: 20,\n                    itemOpacity: 0.75,\n                    symbolSize: 12,\n                    symbolShape: \"circle\",\n                    symbolBorderColor: \"rgba(0, 0, 0, .5)\",\n                    effects: [\n                        {\n                            on: \"hover\",\n                            style: {\n                                itemBackground: \"rgba(0, 0, 0, .03)\",\n                                itemOpacity: 1\n                            }\n                        }\n                    ]\n                }\n            ]\n        }, void 0, false, {\n            fileName: \"C:\\\\My Personal Data\\\\programming\\\\Suraiya\\\\lenis 2nd order\\\\linechart\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx\",\n            lineNumber: 81,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\My Personal Data\\\\programming\\\\Suraiya\\\\lenis 2nd order\\\\linechart\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CompoundInterestChart, \"h6J0Q3nxDyaAQ99JMz6OOoWbcwM=\", false, function() {\n    return [\n        src_shared_translations__WEBPACK_IMPORTED_MODULE_3__.useTranslation\n    ];\n});\n_c1 = CompoundInterestChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CompoundInterestChart);\nvar _c, _c1;\n$RefreshReg$(_c, \"ResponsiveLine\");\n$RefreshReg$(_c1, \"CompoundInterestChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG91bmRJbnRlcmVzdENhbGN1bGF0b3IvY29tcG91bmRJbnRlcmVzdENoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw0QkFBNEI7OztBQUNGO0FBR1M7QUFFc0I7QUFFZDtBQUUzQywrRUFBK0U7QUFDL0UsV0FBVztBQUNYLE1BQU1JLGlCQUFpQkgsbURBQU9BLENBQUMsSUFBTSw0TUFBTyxDQUFjSSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUYsY0FBYzs7Ozs7O0lBQUtHLEtBQUs7O0tBQTFGSDtBQUVOLE1BQU1JLE9BQU87SUFDVEMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLFVBQVU7SUFDVkMsWUFBWTtBQUNoQjtBQUVBLE1BQU1DLFFBQWU7SUFFakJDLFdBQVc7UUFDUEMsTUFBTTtZQUNGQyxRQUFRO1lBQ1JDLGFBQWE7UUFDakI7SUFDSjtJQUNBQyxNQUFNO1FBQ0ZILE1BQU07WUFDRkMsUUFBUTtZQUNSQyxhQUFhO1lBQ2JFLGVBQWU7UUFDbkI7SUFDSjtJQUNBQyxTQUFTLENBQUM7SUFDVkMsU0FBUztRQUNMQyxNQUFNO1lBQ0YsR0FBR2QsSUFBSTtRQUNYO0lBQ0o7SUFDQWUsTUFBTTtRQUNGQyxRQUFRO1lBQ0pGLE1BQU07Z0JBQ0YsR0FBR2QsSUFBSTtZQUNYO1FBQ0o7UUFDQWlCLE9BQU87WUFDSFYsTUFBTTtnQkFDRkMsUUFBUTtnQkFDUkMsYUFBYTtnQkFDYkUsZUFBZTtZQUNuQjtZQUNBRyxNQUFNO2dCQUNGLEdBQUdkLElBQUk7WUFDWDtRQUNKO0lBQ0o7QUFDSjtBQVlBLE1BQU1rQix3QkFBd0Q7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQ3hFekIsdUVBQWNBO0lBRWQsSUFBSSxDQUFDeUIsYUFBYUEsVUFBVUMsTUFBTSxLQUFLLEdBQUc7UUFDdEMscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0E7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQzFCO1lBQ0cyQixNQUFNSjtZQUNOSyxPQUFPbkI7WUFFUG9CLFFBQVE7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLE1BQU07WUFDVjtZQUNBQyxRQUFRO2dCQUNKQyxNQUFNO1lBRVY7WUFDQSxvQkFBb0I7WUFFcEJDLGNBQWM7WUFDZEMsYUFBYTtZQUViQyxjQUFhO1lBQ2JDLFNBQVM7WUFDVEMsV0FBVztZQUNYQyxVQUFVO2dCQUNOQyxVQUFVO2dCQUNWQyxhQUFhO2dCQUNiQyxRQUFRLENBQUNDLFFBQVdBLFFBQVEsSUFDdEI3Qyx5REFBY0EsQ0FBQyxDQUFFNkMsUUFBUSxTQUFTLE1BQ2xDO1lBQ1Y7WUFDQUMsWUFBWTtnQkFDUkosVUFBVTtnQkFDVkMsYUFBYTtnQkFFYkMsUUFBUSxDQUFDQyxRQUFVLEdBQVMsT0FBTkEsT0FBTTtZQUNoQztZQUNBLE1BQU07WUFFTixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLHVCQUF1QjtZQUN2Qix1RkFBdUY7WUFDdkYsT0FBTztZQUNQLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsdUJBQXVCO1lBQ3ZCLDJDQUEyQztZQUMzQyxPQUFPO1lBRVAsK0JBQStCO1lBQy9CLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLE9BQU87WUFDUCxxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLHdCQUF3QjtZQUN4Qix5QkFBeUI7WUFDekIsa0NBQWtDO1lBQ2xDLDBCQUEwQjtZQUMxQixpQ0FBaUM7WUFDakMsT0FBTztZQUNQLGdCQUFnQjtZQUNoQixxQkFBcUI7WUFDckIsd0JBQXdCO1lBQ3hCLHlCQUF5QjtZQUN6Qix5QkFBeUI7WUFDekIsMkJBQTJCO1lBQzNCLGlDQUFpQztZQUNqQyxPQUFPO1lBRVBFLE9BQU07WUFDTjdCLFNBQVM7Z0JBQ0w7b0JBQ0U4QixRQUFRO29CQUNSQyxXQUFXO29CQUNYQyxTQUFTO29CQUNUQyxZQUFZO29CQUNaQyxZQUFZO29CQUNaQyxjQUFjO29CQUNkQyxlQUFlO29CQUNmQyxXQUFXO29CQUNYQyxZQUFZO29CQUNaQyxhQUFhO29CQUNiQyxZQUFZO29CQUNaQyxhQUFhO29CQUNiQyxtQkFBbUI7b0JBQ25CQyxTQUFTO3dCQUNQOzRCQUNFQyxJQUFJOzRCQUNKQyxPQUFPO2dDQUNMQyxnQkFBZ0I7Z0NBQ2hCUCxhQUFhOzRCQUNmO3dCQUNGO3FCQUNEO2dCQUNIO2FBQ0Q7Ozs7Ozs7Ozs7O0FBU25CO0dBdkhNbEM7O1FBQ0Z4QixtRUFBY0E7OztNQURad0I7QUF5SE4sK0RBQWVBLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG91bmRJbnRlcmVzdENhbGN1bGF0b3IvY29tcG91bmRJbnRlcmVzdENoYXJ0LnRzeD9kMGUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvdW5kSW50ZXJlc3RDaGFydC50c3hcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQG5pdm8vY29yZSc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcblxyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3NyYy9zaGFyZWQvdHJhbnNsYXRpb25zJztcclxuXHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSAnbGliL3V0aWxzJztcclxuXHJcbi8vIFRPRE8gc3NyIGNhbiBiZSBlbmFibGVkIGFnYWluIG9uY2UgaHR0cHM6Ly9naXRodWIuY29tL3Bsb3VjL25pdm8vaXNzdWVzLzIzMTBcclxuLy8gaXMgZml4ZWRcclxuY29uc3QgUmVzcG9uc2l2ZUxpbmUgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnQG5pdm8vbGluZScpLnRoZW4oKG0pID0+IG0uUmVzcG9uc2l2ZUxpbmUpLCB7IHNzcjogZmFsc2UgfSk7XHJcblxyXG5jb25zdCBGT05UID0ge1xyXG4gICAgZmlsbDogJyM5MDdENjknLFxyXG4gICAgY29sb3I6ICcjOTA3RDY5JyxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIGZvbnRGYW1pbHk6ICdcIkRJTk5leHRXMDFcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmJ1xyXG59O1xyXG5cclxuY29uc3QgVEhFTUU6IFRoZW1lID0ge1xyXG5cclxuICAgIGNyb3NzaGFpcjoge1xyXG4gICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgc3Ryb2tlOiAnYmx1ZScsXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAyXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdyaWQ6IHtcclxuICAgICAgICBsaW5lOiB7XHJcbiAgICAgICAgICAgIHN0cm9rZTogJyNFOEUxRDgnLFxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogMSxcclxuICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7fSxcclxuICAgIGxlZ2VuZHM6IHtcclxuICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgIC4uLkZPTlRcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXhpczoge1xyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgICAgICAuLi5GT05UXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogJyNFOEUxRDgsJyxcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgICAgICAuLi5GT05UXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgQ29tcG91bmRJbnRlcmVzdENoYXJ0UHJvcHMge1xyXG4gICAgY2hhcnREYXRhOiB7XHJcbiAgICAgICAgaWQ6IHN0cmluZztcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICAgICAgeTogbnVtYmVyXHJcbiAgICAgICAgfVtdXHJcbiAgICB9W107XHJcbn1cclxuXHJcbmNvbnN0IENvbXBvdW5kSW50ZXJlc3RDaGFydDogRkM8Q29tcG91bmRJbnRlcmVzdENoYXJ0UHJvcHM+ID0gKHsgY2hhcnREYXRhIH0pID0+IHtcclxuICAgIHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gICAgaWYgKCFjaGFydERhdGEgfHwgY2hhcnREYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2Pk5vIGRhdGEgYXZhaWxhYmxlIGZvciBjaGFydDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0zLzYgcC0xNlwiPlxyXG4gICAgICAgICAgICA8UmVzcG9uc2l2ZUxpbmVcclxuICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJ0RGF0YX1cclxuICAgICAgICAgICAgICAgIHRoZW1lPXtUSEVNRX1cclxuXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49e3tcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA3MCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA4MFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHlTY2FsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lYXInLFxyXG5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvLyBjdXJ2ZT1cIm1vbm90b25lWFwiXHJcblxyXG4gICAgICAgICAgICAgICAgZW5hYmxlUG9pbnRzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGVuYWJsZUdyaWRYPXtmYWxzZX1cclxuXHJcbiAgICAgICAgICAgICAgICBlbmFibGVTbGljZXM9XCJ4XCJcclxuICAgICAgICAgICAgICAgIGF4aXNUb3A9e251bGx9XHJcbiAgICAgICAgICAgICAgICBheGlzUmlnaHQ9e251bGx9XHJcbiAgICAgICAgICAgICAgICBheGlzTGVmdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tTaXplOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICh2YWx1ZSkgPT4gKHZhbHVlID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KCsgdmFsdWUgLyAxMDAwMCkgKyAnaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnQ0hGIDAnKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGF4aXNCb3R0b209e3tcclxuICAgICAgICAgICAgICAgICAgICB0aWNrU2l6ZTogMCxcclxuICAgICAgICAgICAgICAgICAgICB0aWNrUGFkZGluZzogNDAsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogKHZhbHVlKSA9PiBgJHt2YWx1ZX0gSmFocmVgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLy8gbmV3XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYXhpc0xlZnQ9e3tcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aWNrU2l6ZTogMCxcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aWNrUGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZm9ybWF0OiAodmFsdWUpID0+ICh2YWx1ZSA+IDAgPyBmb3JtYXRDdXJyZW5jeSgrdmFsdWUgLyAxMDAwMCkgKyAnaycgOiAnQ0hGIDAnKSxcclxuICAgICAgICAgICAgICAgIC8vICAgfX1cclxuICAgICAgICAgICAgICAgIC8vICAgYXhpc0JvdHRvbT17e1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpY2tTaXplOiAwLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpY2tQYWRkaW5nOiA0MCxcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb3JtYXQ6ICh2YWx1ZSkgPT4gYCR7dmFsdWV9IEphaHJlYCxcclxuICAgICAgICAgICAgICAgIC8vICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgIHhTY2FsZT17eyB0eXBlOiAncG9pbnQnIH19XHJcbiAgICAgICAgICAgICAgICAvLyAgIHlTY2FsZT17e1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgdHlwZTogJ2xpbmVhcicsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBtaW46ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIG1heDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgc3RhY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyAgIH19XHJcbiAgICAgICAgICAgICAgICAvLyAgIHlGb3JtYXQ9XCIgPi0uMmZcIlxyXG4gICAgICAgICAgICAgICAgLy8gICBheGlzVG9wPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgLy8gICBheGlzUmlnaHQ9e251bGx9XHJcbiAgICAgICAgICAgICAgICAvLyAgIGF4aXNCb3R0b209e3tcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIHRpY2tTaXplOiA1LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgdGlja1BhZGRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB0aWNrUm90YXRpb246IDAsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBsZWdlbmQ6ICd0cmFuc3BvcnRhdGlvbicsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBsZWdlbmRPZmZzZXQ6IDM2LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgbGVnZW5kUG9zaXRpb246ICdtaWRkbGUnXHJcbiAgICAgICAgICAgICAgICAvLyAgIH19XHJcbiAgICAgICAgICAgICAgICAvLyAgIGF4aXNMZWZ0PXt7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB0aWNrU2l6ZTogNSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIHRpY2tQYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgdGlja1JvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgbGVnZW5kOiAnY291bnQnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgbGVnZW5kT2Zmc2V0OiAtNDAsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBsZWdlbmRQb3NpdGlvbjogJ21pZGRsZSdcclxuICAgICAgICAgICAgICAgIC8vICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZT1cIm5hdHVyYWxcIlxyXG4gICAgICAgICAgICAgICAgbGVnZW5kcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcjogJ2JvdHRvbS1yaWdodCcsIC8vIEFkanVzdCBhbmNob3IgYXMgbmVlZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdyb3cnLCAgICAgICAvLyBBZGp1c3QgZGlyZWN0aW9uIGFzIG5lZWRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtRGlyZWN0aW9uOiAnbGVmdC10by1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtV2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbUhlaWdodDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtT3BhY2l0eTogMC43NSxcclxuICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3ltYm9sU2hhcGU6ICdjaXJjbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3ltYm9sQm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIC41KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBlZmZlY3RzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogJ2hvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIC4wMyknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXX1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvdW5kSW50ZXJlc3RDaGFydDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZHluYW1pYyIsInVzZVRyYW5zbGF0aW9uIiwiZm9ybWF0Q3VycmVuY3kiLCJSZXNwb25zaXZlTGluZSIsInRoZW4iLCJtIiwic3NyIiwiRk9OVCIsImZpbGwiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsIlRIRU1FIiwiY3Jvc3NoYWlyIiwibGluZSIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZ3JpZCIsInN0cm9rZU9wYWNpdHkiLCJtYXJrZXJzIiwibGVnZW5kcyIsInRleHQiLCJheGlzIiwibGVnZW5kIiwidGlja3MiLCJDb21wb3VuZEludGVyZXN0Q2hhcnQiLCJjaGFydERhdGEiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhIiwidGhlbWUiLCJtYXJnaW4iLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ5U2NhbGUiLCJ0eXBlIiwiZW5hYmxlUG9pbnRzIiwiZW5hYmxlR3JpZFgiLCJlbmFibGVTbGljZXMiLCJheGlzVG9wIiwiYXhpc1JpZ2h0IiwiYXhpc0xlZnQiLCJ0aWNrU2l6ZSIsInRpY2tQYWRkaW5nIiwiZm9ybWF0IiwidmFsdWUiLCJheGlzQm90dG9tIiwiY3VydmUiLCJhbmNob3IiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5IiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJpdGVtc1NwYWNpbmciLCJpdGVtRGlyZWN0aW9uIiwiaXRlbVdpZHRoIiwiaXRlbUhlaWdodCIsIml0ZW1PcGFjaXR5Iiwic3ltYm9sU2l6ZSIsInN5bWJvbFNoYXBlIiwic3ltYm9sQm9yZGVyQ29sb3IiLCJlZmZlY3RzIiwib24iLCJzdHlsZSIsIml0ZW1CYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/compoundInterestCalculator/compoundInterestChart.tsx\n"));

/***/ })

});