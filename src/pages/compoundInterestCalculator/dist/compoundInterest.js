"use strict";
exports.__esModule = true;
var react_1 = require("react");
var compoundInterestKPITile_1 = require("./compoundInterestKPITile");
var compoundInterestForm_1 = require("./compoundInterestForm");
var compoundInterestSummaryTile_1 = require("./compoundInterestSummaryTile");
var compoundInterestChart_1 = require("./compoundInterestChart");
var CompoundInterest = function () {
    var _a = react_1.useState(0), newPrincipal = _a[0], setNewPrincipal = _a[1];
    var _b = react_1.useState(0), totalDeposit = _b[0], setTotalDeposit = _b[1];
    var _c = react_1.useState(0), amountOfYield = _c[0], setAmountOfYield = _c[1];
    var _d = react_1.useState(0), zeroYield = _d[0], setZeroYield = _d[1];
    var _e = react_1.useState([]), chartData = _e[0], setChartData = _e[1];
    var _f = react_1.useState(0), time = _f[0], setTime = _f[1];
    var handleValuesChange = function (values) {
        setNewPrincipal(values.newPrincipal);
        setTotalDeposit(values.totalDeposit);
        setAmountOfYield(values.amountOfYield);
        setZeroYield(values.zeroYield);
        setTime(values.time);
        setChartData([
            {
                id: 'Endkapital',
                data: [
                    { x: 1, y: 1 },
                    { x: 15, y: 20 },
                    { x: values.time, y: values.newPrincipal },
                ]
            },
            {
                id: 'ZeroYield',
                data: [
                    { x: 1, y: 1 },
                    { x: values.time, y: values.totalDeposit },
                ]
            },
        ]);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "pt-5" },
            react_1["default"].createElement(compoundInterestKPITile_1["default"], { newPrincipal: newPrincipal, totalDeposit: totalDeposit, amountOfYield: amountOfYield })),
        react_1["default"].createElement("div", { className: "md:flex gap-8 py-8" },
            react_1["default"].createElement("div", { className: "w-full md:w-4/12" },
                react_1["default"].createElement(compoundInterestForm_1["default"], { onValuesChange: handleValuesChange })),
            react_1["default"].createElement("div", { className: "w-full md:w-8/12 bg-white shadow-sm" },
                react_1["default"].createElement(compoundInterestChart_1["default"], { chartData: chartData }))),
        react_1["default"].createElement(compoundInterestSummaryTile_1["default"], { newPrincipal: newPrincipal, totalDeposit: totalDeposit, amountOfYield: amountOfYield })));
};
exports["default"] = CompoundInterest;
