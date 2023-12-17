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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_shared_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/translations */ \"./src/shared/translations.ts\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/utils */ \"./lib/utils.ts\");\n// compoundInterestChart.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n// TODO ssr can be enabled again once https://github.com/plouc/nivo/issues/2310\n// is fixed\nconst ResponsiveLine = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_nivo_line_dist_nivo-line_es_js\").then(__webpack_require__.bind(__webpack_require__, /*! @nivo/line */ \"./node_modules/@nivo/line/dist/nivo-line.es.js\")).then((m)=>m.ResponsiveLine), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx -> \" + \"@nivo/line\"\n        ]\n    },\n    ssr: false\n});\n_c = ResponsiveLine;\nconst FONT = {\n    fill: \"#907D69\",\n    color: \"#907D69\",\n    fontSize: 14,\n    fontFamily: '\"DINNextW01\", \"Helvetica Neue\", helvetica, arial, sans-serif'\n};\nconst THEME = {\n    crosshair: {\n        line: {\n            stroke: \"#E8E1D8\",\n            strokeWidth: 2\n        }\n    },\n    grid: {\n        line: {\n            stroke: \"#E8E1D8\",\n            strokeWidth: 1,\n            strokeOpacity: 1\n        }\n    },\n    markers: {},\n    legends: {\n        text: {\n            ...FONT\n        }\n    },\n    axis: {\n        legend: {\n            text: {\n                ...FONT\n            }\n        },\n        ticks: {\n            line: {\n                stroke: \"#E8E1D8,\",\n                strokeWidth: 2,\n                strokeOpacity: 1\n            },\n            text: {\n                ...FONT\n            }\n        }\n    }\n};\nconst CompoundInterestChart = (param)=>{\n    let { chartData, chartData2 } = param;\n    _s();\n    (0,src_shared_translations__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();\n    if (!chartData || chartData.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"No data available for chart\"\n        }, void 0, false, {\n            fileName: \"C:\\\\My Personal Data\\\\programming\\\\Suraiya\\\\lenis 2nd order\\\\linechart\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx\",\n            lineNumber: 82,\n            columnNumber: 16\n        }, undefined);\n    }\n    const [modified, setModified] = usee;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Preprocess data to ensure all x-values are present\n        const allXValues = Array.from(new Set(chartData.flatMap((dataset)=>dataset.data.map((point)=>point.x)))).sort((a, b)=>a - b);\n        const preprocessedData = chartData.map((dataset)=>{\n            const indexedData = Object.fromEntries(dataset.data.map((point)=>[\n                    point.x,\n                    point.y\n                ]));\n            const filledData = allXValues.map((x)=>({\n                    x,\n                    y: indexedData[x] !== undefined ? indexedData[x] : 0\n                }));\n            return {\n                ...dataset,\n                data: filledData\n            };\n        });\n        console.log(\"ne is \", preprocessedData);\n    }, []);\n    return(// h-3/6\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[600px] p-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResponsiveLine, {\n                data: chartData2,\n                margin: {\n                    top: 50,\n                    right: 110,\n                    bottom: 50,\n                    left: 60\n                },\n                xScale: {\n                    type: \"point\"\n                },\n                yScale: {\n                    type: \"linear\",\n                    min: \"auto\",\n                    max: \"auto\",\n                    stacked: true,\n                    reverse: false\n                },\n                yFormat: \" >-.2f\",\n                axisTop: null,\n                axisRight: null,\n                axisBottom: {\n                    tickSize: 5,\n                    tickPadding: 5,\n                    tickRotation: 0,\n                    legend: \"transportation\",\n                    legendOffset: 36,\n                    legendPosition: \"middle\"\n                },\n                axisLeft: {\n                    tickSize: 5,\n                    tickPadding: 5,\n                    tickRotation: 0,\n                    legend: \"count\",\n                    legendOffset: -40,\n                    legendPosition: \"middle\"\n                },\n                pointSize: 10,\n                pointColor: {\n                    theme: \"background\"\n                },\n                pointBorderWidth: 2,\n                pointBorderColor: {\n                    from: \"serieColor\"\n                },\n                pointLabelYOffset: -12,\n                useMesh: true,\n                legends: [\n                    {\n                        anchor: \"bottom-right\",\n                        direction: \"column\",\n                        justify: false,\n                        translateX: 100,\n                        translateY: 0,\n                        itemsSpacing: 0,\n                        itemDirection: \"left-to-right\",\n                        itemWidth: 80,\n                        itemHeight: 20,\n                        itemOpacity: 0.75,\n                        symbolSize: 12,\n                        symbolShape: \"circle\",\n                        symbolBorderColor: \"rgba(0, 0, 0, .5)\",\n                        effects: [\n                            {\n                                on: \"hover\",\n                                style: {\n                                    itemBackground: \"rgba(0, 0, 0, .03)\",\n                                    itemOpacity: 1\n                                }\n                            }\n                        ]\n                    }\n                ]\n            }, void 0, false, {\n                fileName: \"C:\\\\My Personal Data\\\\programming\\\\Suraiya\\\\lenis 2nd order\\\\linechart\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full  p-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResponsiveLine, {\n                    data: chartData,\n                    theme: THEME,\n                    margin: {\n                        right: 10,\n                        bottom: 100,\n                        left: 80\n                    },\n                    // yScale={{\n                    //     type: 'linear',\n                    // }}\n                    // new\n                    xScale: {\n                        type: \"point\"\n                    },\n                    yScale: {\n                        type: \"linear\",\n                        // min: 'auto',\n                        // max: 'auto',\n                        stacked: false,\n                        reverse: false\n                    },\n                    // new\n                    // curve=\"monotoneX\"\n                    // useMesh={true}\n                    // yFormat=\" >-.2f\"\n                    // axisBottom={{\n                    //     tickSize: 5,\n                    //     tickPadding: 5,\n                    //     tickRotation: 0,\n                    //     legend: 'transportation',\n                    //     legendOffset: 36,\n                    //     legendPosition: 'middle'\n                    // }}\n                    // axisLeft={{\n                    //     tickSize: 5,\n                    //     tickPadding: 5,\n                    //     tickRotation: 0,\n                    //     legend: 'count',\n                    //     legendOffset: -40,\n                    //     legendPosition: 'middle'\n                    // }}\n                    // pointSize={10}\n                    // pointColor={{ theme: 'background' }}\n                    // pointBorderWidth={2}\n                    // pointBorderColor={{ from: 'serieColor' }}\n                    // pointLabelYOffset={-12}\n                    // useMesh={true}\n                    // legends={[\n                    //     {\n                    //         anchor: 'bottom-right',\n                    //         direction: 'column',\n                    //         justify: false,\n                    //         translateX: 100,\n                    //         translateY: 0,\n                    //         itemsSpacing: 0,\n                    //         itemDirection: 'left-to-right',\n                    //         itemWidth: 80,\n                    //         itemHeight: 20,\n                    //         itemOpacity: 0.75,\n                    //         symbolSize: 12,\n                    //         symbolShape: 'circle',\n                    //         symbolBorderColor: 'rgba(0, 0, 0, .5)',\n                    //         effects: [\n                    //             {\n                    //                 on: 'hover',\n                    //                 style: {\n                    //                     itemBackground: 'rgba(0, 0, 0, .03)',\n                    //                     itemOpacity: 1\n                    //                 }\n                    //             }\n                    //         ]\n                    //     }\n                    // ]}\n                    enablePoints: false,\n                    enableGridX: false,\n                    enableSlices: \"x\",\n                    axisTop: null,\n                    axisRight: null,\n                    axisLeft: {\n                        tickSize: 0,\n                        tickPadding: 10,\n                        format: (value)=>value > 0 ? (0,lib_utils__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(+value / 10000) + \"k\" : \"CHF 0\"\n                    },\n                    axisBottom: {\n                        tickSize: 0,\n                        tickPadding: 40,\n                        format: (value)=>\"\".concat(value, \" Jahre\")\n                    },\n                    legends: [\n                        {\n                            anchor: \"bottom-right\",\n                            direction: \"row\",\n                            justify: false,\n                            translateX: 0,\n                            translateY: 80,\n                            itemsSpacing: 0,\n                            itemDirection: \"left-to-right\",\n                            itemWidth: 80,\n                            itemHeight: 20,\n                            itemOpacity: 0.75,\n                            symbolSize: 12,\n                            symbolShape: \"circle\",\n                            symbolBorderColor: \"rgba(0, 0, 0, .5)\",\n                            effects: [\n                                {\n                                    on: \"hover\",\n                                    style: {\n                                        itemBackground: \"rgba(0, 0, 0, .03)\",\n                                        itemOpacity: 1\n                                    }\n                                }\n                            ]\n                        }\n                    ]\n                }, void 0, false, {\n                    fileName: \"C:\\\\My Personal Data\\\\programming\\\\Suraiya\\\\lenis 2nd order\\\\linechart\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx\",\n                    lineNumber: 179,\n                    columnNumber: 18\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\My Personal Data\\\\programming\\\\Suraiya\\\\lenis 2nd order\\\\linechart\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx\",\n                lineNumber: 178,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\My Personal Data\\\\programming\\\\Suraiya\\\\lenis 2nd order\\\\linechart\\\\src\\\\pages\\\\compoundInterestCalculator\\\\compoundInterestChart.tsx\",\n        lineNumber: 111,\n        columnNumber: 9\n    }, undefined));\n};\n_s(CompoundInterestChart, \"IjVUwG1i7Szbu80rs+yrjjU3auE=\", false, function() {\n    return [\n        src_shared_translations__WEBPACK_IMPORTED_MODULE_3__.useTranslation\n    ];\n});\n_c1 = CompoundInterestChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CompoundInterestChart);\nvar _c, _c1;\n$RefreshReg$(_c, \"ResponsiveLine\");\n$RefreshReg$(_c1, \"CompoundInterestChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG91bmRJbnRlcmVzdENhbGN1bGF0b3IvY29tcG91bmRJbnRlcmVzdENoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw0QkFBNEI7OztBQUNhO0FBR047QUFFc0I7QUFFZDtBQUUzQywrRUFBK0U7QUFDL0UsV0FBVztBQUNYLE1BQU1LLGlCQUFpQkgsbURBQU9BLENBQUMsSUFBTSw0TUFBTyxDQUFjSSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUYsY0FBYzs7Ozs7O0lBQUtHLEtBQUs7O0tBQTFGSDtBQUVOLE1BQU1JLE9BQU87SUFDVEMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLFVBQVU7SUFDVkMsWUFBWTtBQUNoQjtBQUVBLE1BQU1DLFFBQWU7SUFFakJDLFdBQVc7UUFDUEMsTUFBTTtZQUNGQyxRQUFRO1lBQ1JDLGFBQWE7UUFDakI7SUFDSjtJQUNBQyxNQUFNO1FBQ0ZILE1BQU07WUFDRkMsUUFBUTtZQUNSQyxhQUFhO1lBQ2JFLGVBQWU7UUFDbkI7SUFDSjtJQUNBQyxTQUFTLENBQUM7SUFDVkMsU0FBUztRQUNMQyxNQUFNO1lBQ0YsR0FBR2QsSUFBSTtRQUNYO0lBQ0o7SUFDQWUsTUFBTTtRQUNGQyxRQUFRO1lBQ0pGLE1BQU07Z0JBQ0YsR0FBR2QsSUFBSTtZQUNYO1FBQ0o7UUFDQWlCLE9BQU87WUFDSFYsTUFBTTtnQkFDRkMsUUFBUTtnQkFDUkMsYUFBYTtnQkFDYkUsZUFBZTtZQUNuQjtZQUNBRyxNQUFNO2dCQUNGLEdBQUdkLElBQUk7WUFDWDtRQUNKO0lBQ0o7QUFDSjtBQWtCQSxNQUFNa0Isd0JBQXdEO1FBQUMsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUU7O0lBQ3BGMUIsdUVBQWNBO0lBRWQsSUFBSSxDQUFDeUIsYUFBYUEsVUFBVUUsTUFBTSxLQUFLLEdBQUc7UUFDdEMscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFDaEI7SUFFQSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBQ0M7SUFFOUJq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aEM7b0JBRUF0RixTQUFTO3dCQUNMOzRCQUNFaUUsUUFBUTs0QkFDUkMsV0FBVzs0QkFDWEMsU0FBUzs0QkFDVEMsWUFBWTs0QkFDWkMsWUFBWTs0QkFDWkMsY0FBYzs0QkFDZEMsZUFBZTs0QkFDZkMsV0FBVzs0QkFDWEMsWUFBWTs0QkFDWkMsYUFBYTs0QkFDYkMsWUFBWTs0QkFDWkMsYUFBYTs0QkFDYkMsbUJBQW1COzRCQUNuQkMsU0FBUztnQ0FDUDtvQ0FDRUMsSUFBSTtvQ0FDSkMsT0FBTzt3Q0FDTEMsZ0JBQWdCO3dDQUNoQlAsYUFBYTtvQ0FDZjtnQ0FDRjs2QkFDRDt3QkFDSDtxQkFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkI7R0F2T01yRTs7UUFDRnhCLG1FQUFjQTs7O01BRFp3QjtBQXlPTiwrREFBZUEscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb3VuZEludGVyZXN0Q2FsY3VsYXRvci9jb21wb3VuZEludGVyZXN0Q2hhcnQudHN4P2QwZTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG91bmRJbnRlcmVzdENoYXJ0LnRzeFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAbml2by9jb3JlJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnc3JjL3NoYXJlZC90cmFuc2xhdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tICdsaWIvdXRpbHMnO1xyXG5cclxuLy8gVE9ETyBzc3IgY2FuIGJlIGVuYWJsZWQgYWdhaW4gb25jZSBodHRwczovL2dpdGh1Yi5jb20vcGxvdWMvbml2by9pc3N1ZXMvMjMxMFxyXG4vLyBpcyBmaXhlZFxyXG5jb25zdCBSZXNwb25zaXZlTGluZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdAbml2by9saW5lJykudGhlbigobSkgPT4gbS5SZXNwb25zaXZlTGluZSksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcbmNvbnN0IEZPTlQgPSB7XHJcbiAgICBmaWxsOiAnIzkwN0Q2OScsXHJcbiAgICBjb2xvcjogJyM5MDdENjknLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gICAgZm9udEZhbWlseTogJ1wiRElOTmV4dFcwMVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWYnXHJcbn07XHJcblxyXG5jb25zdCBUSEVNRTogVGhlbWUgPSB7XHJcblxyXG4gICAgY3Jvc3NoYWlyOiB7XHJcbiAgICAgICAgbGluZToge1xyXG4gICAgICAgICAgICBzdHJva2U6ICcjRThFMUQ4JyxcclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ3JpZDoge1xyXG4gICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgc3Ryb2tlOiAnI0U4RTFEOCcsXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxLFxyXG4gICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAxXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHt9LFxyXG4gICAgbGVnZW5kczoge1xyXG4gICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgLi4uRk9OVFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBheGlzOiB7XHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgICAgIC4uLkZPTlRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgbGluZToge1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAnI0U4RTFEOCwnLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgICAgIC4uLkZPTlRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmludGVyZmFjZSBDb21wb3VuZEludGVyZXN0Q2hhcnRQcm9wcyB7XHJcbiAgICBjaGFydERhdGE6IHtcclxuICAgICAgICBpZDogc3RyaW5nO1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgICAgICB5OiBudW1iZXJcclxuICAgICAgICB9W11cclxuICAgIH1bXTtcclxuICAgIGNoYXJ0RGF0YTI6e1xyXG4gICAgICAgIGlkOiBhbnk7XHJcbiAgICAgICAgY29sb3I6IGFueTtcclxuICAgICAgICBkYXRhOiB7IHg6IGFueTsgeTogYW55IH1bXTtcclxuICAgIH1bXTtcclxufVxyXG5cclxuXHJcbmNvbnN0IENvbXBvdW5kSW50ZXJlc3RDaGFydDogRkM8Q29tcG91bmRJbnRlcmVzdENoYXJ0UHJvcHM+ID0gKHsgY2hhcnREYXRhLCBjaGFydERhdGEyIH0pID0+IHtcclxuICAgIHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gICAgaWYgKCFjaGFydERhdGEgfHwgY2hhcnREYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2Pk5vIGRhdGEgYXZhaWxhYmxlIGZvciBjaGFydDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbbW9kaWZpZWQsIHNldE1vZGlmaWVkXT11c2VlXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy8gUHJlcHJvY2VzcyBkYXRhIHRvIGVuc3VyZSBhbGwgeC12YWx1ZXMgYXJlIHByZXNlbnRcclxuY29uc3QgYWxsWFZhbHVlcyA9IEFycmF5LmZyb20oXHJcbiAgICBuZXcgU2V0KGNoYXJ0RGF0YS5mbGF0TWFwKGRhdGFzZXQgPT4gZGF0YXNldC5kYXRhLm1hcChwb2ludCA9PiBwb2ludC54KSkpXHJcbiAgKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcblxyXG4gIGNvbnN0IHByZXByb2Nlc3NlZERhdGEgPSBjaGFydERhdGEubWFwKGRhdGFzZXQgPT4ge1xyXG4gICAgY29uc3QgaW5kZXhlZERhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIGRhdGFzZXQuZGF0YS5tYXAocG9pbnQgPT4gW3BvaW50LngsIHBvaW50LnldKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBmaWxsZWREYXRhID0gYWxsWFZhbHVlcy5tYXAoeCA9PiAoe1xyXG4gICAgICB4LFxyXG4gICAgICB5OiBpbmRleGVkRGF0YVt4XSAhPT0gdW5kZWZpbmVkID8gaW5kZXhlZERhdGFbeF0gOiAwXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHsgLi4uZGF0YXNldCwgZGF0YTogZmlsbGVkRGF0YSB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIm5lIGlzIFwiLCBwcmVwcm9jZXNzZWREYXRhKTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBoLTMvNlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtWzYwMHB4XSBwLTE2XCI+XHJcblxyXG5cclxuICAgICAgICAgICAgPFJlc3BvbnNpdmVMaW5lXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtjaGFydERhdGEyfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPXt7IHRvcDogNTAsIHJpZ2h0OiAxMTAsIGJvdHRvbTogNTAsIGxlZnQ6IDYwIH19XHJcbiAgICAgICAgICAgICAgICB4U2NhbGU9e3sgdHlwZTogJ3BvaW50JyB9fVxyXG4gICAgICAgICAgICAgICAgeVNjYWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmVhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHlGb3JtYXQ9XCIgPi0uMmZcIlxyXG4gICAgICAgICAgICAgICAgYXhpc1RvcD17bnVsbH1cclxuICAgICAgICAgICAgICAgIGF4aXNSaWdodD17bnVsbH1cclxuICAgICAgICAgICAgICAgIGF4aXNCb3R0b209e3tcclxuICAgICAgICAgICAgICAgICAgICB0aWNrU2l6ZTogNSxcclxuICAgICAgICAgICAgICAgICAgICB0aWNrUGFkZGluZzogNSxcclxuICAgICAgICAgICAgICAgICAgICB0aWNrUm90YXRpb246IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiAndHJhbnNwb3J0YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZE9mZnNldDogMzYsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kUG9zaXRpb246ICdtaWRkbGUnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgYXhpc0xlZnQ9e3tcclxuICAgICAgICAgICAgICAgICAgICB0aWNrU2l6ZTogNSxcclxuICAgICAgICAgICAgICAgICAgICB0aWNrUGFkZGluZzogNSxcclxuICAgICAgICAgICAgICAgICAgICB0aWNrUm90YXRpb246IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiAnY291bnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZE9mZnNldDogLTQwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAnbWlkZGxlJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHBvaW50U2l6ZT17MTB9XHJcbiAgICAgICAgICAgICAgICBwb2ludENvbG9yPXt7IHRoZW1lOiAnYmFja2dyb3VuZCcgfX1cclxuICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yPXt7IGZyb206ICdzZXJpZUNvbG9yJyB9fVxyXG4gICAgICAgICAgICAgICAgcG9pbnRMYWJlbFlPZmZzZXQ9ey0xMn1cclxuICAgICAgICAgICAgICAgIHVzZU1lc2g9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBsZWdlbmRzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3I6ICdib3R0b20tcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1NwYWNpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXJlY3Rpb246ICdsZWZ0LXRvLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVdpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUhlaWdodDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1PcGFjaXR5OiAwLjc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sU2hhcGU6ICdjaXJjbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xCb3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0czogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiAnaG92ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1CYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAuMDMpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtZnVsbCAgcC0xNic+XHJcbiAgICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVMaW5lXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtjaGFydERhdGF9XHJcbiAgICAgICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDgwXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLy8geVNjYWxlPXt7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdHlwZTogJ2xpbmVhcicsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gfX1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBuZXdcclxuICAgICAgICAgICAgICAgIHhTY2FsZT17eyB0eXBlOiAncG9pbnQnIH19XHJcbiAgICAgICAgICAgICAgICB5U2NhbGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBtaW46ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICByZXZlcnNlOiBmYWxzZSAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLy8gbmV3XHJcbiAgICAgICAgICAgICAgICAvLyBjdXJ2ZT1cIm1vbm90b25lWFwiXHJcbiAgICAgICAgICAgICAgICAvLyB1c2VNZXNoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLy8geUZvcm1hdD1cIiA+LS4yZlwiXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYXhpc0JvdHRvbT17e1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpY2tTaXplOiA1LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpY2tQYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpY2tSb3RhdGlvbjogMCxcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZWdlbmQ6ICd0cmFuc3BvcnRhdGlvbicsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGVnZW5kT2Zmc2V0OiAzNixcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZWdlbmRQb3NpdGlvbjogJ21pZGRsZSdcclxuICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAvLyBheGlzTGVmdD17e1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpY2tTaXplOiA1LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpY2tQYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpY2tSb3RhdGlvbjogMCxcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZWdlbmQ6ICdjb3VudCcsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGVnZW5kT2Zmc2V0OiAtNDAsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGVnZW5kUG9zaXRpb246ICdtaWRkbGUnXHJcbiAgICAgICAgICAgICAgICAvLyB9fVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHBvaW50U2l6ZT17MTB9XHJcbiAgICAgICAgICAgICAgICAvLyBwb2ludENvbG9yPXt7IHRoZW1lOiAnYmFja2dyb3VuZCcgfX1cclxuICAgICAgICAgICAgICAgIC8vIHBvaW50Qm9yZGVyV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAvLyBwb2ludEJvcmRlckNvbG9yPXt7IGZyb206ICdzZXJpZUNvbG9yJyB9fVxyXG4gICAgICAgICAgICAgICAgLy8gcG9pbnRMYWJlbFlPZmZzZXQ9ey0xMn1cclxuICAgICAgICAgICAgICAgIC8vIHVzZU1lc2g9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvLyBsZWdlbmRzPXtbXHJcbiAgICAgICAgICAgICAgICAvLyAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBhbmNob3I6ICdib3R0b20tcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBqdXN0aWZ5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdHJhbnNsYXRlWDogMTAwLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0cmFuc2xhdGVZOiAwLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpdGVtc1NwYWNpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGl0ZW1EaXJlY3Rpb246ICdsZWZ0LXRvLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaXRlbVdpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaXRlbUhlaWdodDogMjAsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGl0ZW1PcGFjaXR5OiAwLjc1LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzeW1ib2xTaXplOiAxMixcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc3ltYm9sU2hhcGU6ICdjaXJjbGUnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzeW1ib2xCb3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjUpJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZWZmZWN0czogW1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG9uOiAnaG92ZXInLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGl0ZW1CYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAuMDMpJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaXRlbU9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBdfVxyXG5cclxuICAgICAgICAgICAgICAgIGVuYWJsZVBvaW50cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBlbmFibGVHcmlkWD17ZmFsc2V9XHJcblxyXG4gICAgICAgICAgICAgICAgZW5hYmxlU2xpY2VzPVwieFwiXHJcbiAgICAgICAgICAgICAgICBheGlzVG9wPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgYXhpc1JpZ2h0PXtudWxsfVxyXG4gICAgICAgICAgICAgICAgYXhpc0xlZnQ9e3tcclxuICAgICAgICAgICAgICAgICAgICB0aWNrU2l6ZTogMCxcclxuICAgICAgICAgICAgICAgICAgICB0aWNrUGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAodmFsdWUpID0+ICh2YWx1ZSA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeSgrIHZhbHVlIC8gMTAwMDApICsgJ2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ0NIRiAwJylcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBheGlzQm90dG9tPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlja1NpemU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGlja1BhZGRpbmc6IDQwLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICh2YWx1ZSkgPT4gYCR7dmFsdWV9IEphaHJlYFxyXG4gICAgICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgICBsZWdlbmRzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiAnYm90dG9tLXJpZ2h0JywgLy8gQWRqdXN0IGFuY2hvciBhcyBuZWVkZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JvdycsICAgICAgIC8vIEFkanVzdCBkaXJlY3Rpb24gYXMgbmVlZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zU3BhY2luZzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXJlY3Rpb246ICdsZWZ0LXRvLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtSGVpZ2h0OiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1PcGFjaXR5OiAwLjc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3ltYm9sU2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xTaGFwZTogJ2NpcmNsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xCb3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiAnaG92ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgLjAzKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtT3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvdW5kSW50ZXJlc3RDaGFydDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiZHluYW1pYyIsInVzZVRyYW5zbGF0aW9uIiwiZm9ybWF0Q3VycmVuY3kiLCJSZXNwb25zaXZlTGluZSIsInRoZW4iLCJtIiwic3NyIiwiRk9OVCIsImZpbGwiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsIlRIRU1FIiwiY3Jvc3NoYWlyIiwibGluZSIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZ3JpZCIsInN0cm9rZU9wYWNpdHkiLCJtYXJrZXJzIiwibGVnZW5kcyIsInRleHQiLCJheGlzIiwibGVnZW5kIiwidGlja3MiLCJDb21wb3VuZEludGVyZXN0Q2hhcnQiLCJjaGFydERhdGEiLCJjaGFydERhdGEyIiwibGVuZ3RoIiwiZGl2IiwibW9kaWZpZWQiLCJzZXRNb2RpZmllZCIsInVzZWUiLCJhbGxYVmFsdWVzIiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwiZmxhdE1hcCIsImRhdGFzZXQiLCJkYXRhIiwibWFwIiwicG9pbnQiLCJ4Iiwic29ydCIsImEiLCJiIiwicHJlcHJvY2Vzc2VkRGF0YSIsImluZGV4ZWREYXRhIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJ5IiwiZmlsbGVkRGF0YSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ4U2NhbGUiLCJ0eXBlIiwieVNjYWxlIiwibWluIiwibWF4Iiwic3RhY2tlZCIsInJldmVyc2UiLCJ5Rm9ybWF0IiwiYXhpc1RvcCIsImF4aXNSaWdodCIsImF4aXNCb3R0b20iLCJ0aWNrU2l6ZSIsInRpY2tQYWRkaW5nIiwidGlja1JvdGF0aW9uIiwibGVnZW5kT2Zmc2V0IiwibGVnZW5kUG9zaXRpb24iLCJheGlzTGVmdCIsInBvaW50U2l6ZSIsInBvaW50Q29sb3IiLCJ0aGVtZSIsInBvaW50Qm9yZGVyV2lkdGgiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRMYWJlbFlPZmZzZXQiLCJ1c2VNZXNoIiwiYW5jaG9yIiwiZGlyZWN0aW9uIiwianVzdGlmeSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwiaXRlbXNTcGFjaW5nIiwiaXRlbURpcmVjdGlvbiIsIml0ZW1XaWR0aCIsIml0ZW1IZWlnaHQiLCJpdGVtT3BhY2l0eSIsInN5bWJvbFNpemUiLCJzeW1ib2xTaGFwZSIsInN5bWJvbEJvcmRlckNvbG9yIiwiZWZmZWN0cyIsIm9uIiwic3R5bGUiLCJpdGVtQmFja2dyb3VuZCIsImVuYWJsZVBvaW50cyIsImVuYWJsZUdyaWRYIiwiZW5hYmxlU2xpY2VzIiwiZm9ybWF0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/compoundInterestCalculator/compoundInterestChart.tsx\n"));

/***/ })

});