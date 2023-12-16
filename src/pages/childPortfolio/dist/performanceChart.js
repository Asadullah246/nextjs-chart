"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.PerformanceChart = void 0;
var dynamic_1 = require("next/dynamic");
var react_1 = require("react");
var infoTooltip_1 = require("src/core/infoTooltip");
var translations_1 = require("src/shared/translations");
var utils_1 = require("lib/utils");
// TODO ssr can be enabled again once https://github.com/plouc/nivo/issues/2310 is fixed
var ResponsiveLine = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("@nivo/line"); }).then(function (m) { return m.ResponsiveLine; }); }, {
    ssr: false
});
var FONT = {
    fill: "#907D69",
    color: "#907D69",
    fontSize: 14,
    fontFamily: '"DINNextW01", "Helvetica Neue", helvetica, arial, sans-serif'
};
var THEME = {
    crosshair: {
        line: {
            stroke: "#E8E1D8",
            strokeWidth: 2
        }
    },
    grid: {
        line: {
            stroke: "#E8E1D8",
            strokeWidth: 1,
            strokeOpacity: 1
        }
    },
    markers: {},
    legends: {
        text: __assign({}, FONT)
    },
    axis: {
        legend: {
            text: __assign({}, FONT)
        },
        ticks: {
            line: {
                stroke: "#E8E1D8",
                strokeWidth: 2,
                strokeOpacity: 1
            },
            text: __assign({}, FONT)
        }
    }
};
var data = [
    {
        id: "savingsAccount",
        color: "hsl(34, 23%, 74%)",
        data: [
            {
                x: 0,
                y: 0
            },
            {
                x: 5,
                y: 6233
            },
            {
                x: 10,
                y: 12947
            },
            {
                x: 15,
                y: 20181
            },
            {
                x: 20,
                y: 27973
            },
            {
                x: 25,
                y: 36368
            }
        ]
    },
    {
        id: "invested",
        color: "hsl(32, 81%, 48%)",
        data: [
            {
                x: 0,
                y: 0
            },
            {
                x: 5,
                y: 6809
            },
            {
                x: 10,
                y: 15499
            },
            {
                x: 15,
                y: 26590
            },
            {
                x: 20,
                y: 40746
            },
            {
                x: 25,
                y: 58812
            }
        ]
    }
];
exports.PerformanceChart = function () {
    var t = translations_1.useTranslation().t;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "h-96" },
            react_1["default"].createElement(ResponsiveLine, { data: data, theme: THEME, colors: { datum: "color" }, margin: { top: 10, right: 10, bottom: 70, left: 70 }, yScale: {
                    type: "linear",
                    min: 0,
                    max: 60000
                }, curve: "monotoneX", enablePoints: false, enableGridX: false, enableSlices: "x", sliceTooltip: Tooltip, axisTop: null, axisRight: null, axisLeft: {
                    tickSize: 0,
                    tickPadding: 20,
                    tickValues: [0, 10000, 20000, 30000, 40000, 50000, 60000],
                    format: function (value) { return (value > 0 ? utils_1.formatCurrency(+value / 1000) + "k" : "CHF 0"); }
                }, axisBottom: {
                    tickSize: 0,
                    tickPadding: 20
                } })),
        react_1["default"].createElement("div", { className: "flex flex-col text-xs text-dark-100 mb-6" },
            react_1["default"].createElement("div", { className: "display flex items-center gap-2" },
                react_1["default"].createElement("span", { className: "w-4 h-0.5 -mt-0.5 bg-primary-100" }),
                react_1["default"].createElement("div", null,
                    t("childPortfolio.performance.invested"),
                    react_1["default"].createElement(infoTooltip_1.InfoTooltip, { tooltip: t("childPortfolio.performance.expectedReturnTooltip") }))),
            react_1["default"].createElement("div", { className: "display flex items-center gap-2" },
                react_1["default"].createElement("span", { className: "w-4 h-0.5 -mt-0.5 bg-light-400" }),
                t("childPortfolio.performance.savingsAccount")))));
};
var Tooltip = function (_a) {
    var slice = _a.slice;
    var t = translations_1.useTranslation().t;
    var stocks = slice.points[0];
    var savingsAccount = slice.points[1];
    return (react_1["default"].createElement("div", { className: "shadow bg-white p-4 rounded text-xs grid grid-cols-2 w-80 whitespace-nowrap" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("span", { className: "inline-block w-3 h-3 rounded-full bg-primary-100 mr-1" }),
            t("childPortfolio.performance.invested")),
        react_1["default"].createElement("div", { className: "text-right" }, (stocks === null || stocks === void 0 ? void 0 : stocks.data.y) !== undefined && utils_1.formatCurrency(+stocks.data.y)),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("span", { className: "inline-block w-3 h-3 rounded-full bg-light-400 mr-1" }),
            t("childPortfolio.performance.savingsAccount")),
        react_1["default"].createElement("div", { className: "text-right" }, (savingsAccount === null || savingsAccount === void 0 ? void 0 : savingsAccount.data.y) !== undefined && utils_1.formatCurrency(+savingsAccount.data.y))));
};
