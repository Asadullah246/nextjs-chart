"use strict";
exports.__esModule = true;
var slider_1 = require("src/core/slider");
var largeNumberSlider_1 = require("src/core/largeNumberSlider");
var react_1 = require("react");
var CompoundInterestForm = function (_a) {
    var onValuesChange = _a.onValuesChange;
    var _b = react_1.useState('TW Portfolio'), type = _b[0], setType = _b[1];
    var _c = react_1.useState(0), rate = _c[0], setRate = _c[1];
    var _d = react_1.useState(10000), principal = _d[0], setPrincipal = _d[1];
    var _e = react_1.useState(5), time = _e[0], setTime = _e[1];
    var _f = react_1.useState(0), compoundInterest = _f[0], setCompoundInterest = _f[1];
    var _g = react_1.useState(150), savingsRate = _g[0], setSavingsRate = _g[1];
    var _h = react_1.useState(0), newPrincipal = _h[0], setNewPrincipal = _h[1];
    var _j = react_1.useState(0), totalDeposit = _j[0], setTotalDeposit = _j[1];
    var _k = react_1.useState(0), amountOfYield = _k[0], setAmountOfYield = _k[1];
    var _l = react_1.useState(0), zeroYield = _l[0], setZeroYield = _l[1];
    react_1.useEffect(function () {
        calculateCompoundInterest();
    }, [type, rate, principal, time, savingsRate]);
    var calculateCompoundInterest = function () {
        // Compound Interests based on preset rates as per the design concept
        var interestRate = type === 'TW Portfolio'
            ? 5
            : type === 'High Yield Savings'
                ? 3
                : type === 'Fixed Deposit'
                    ? 1
                    : type === 'Call Money'
                        ? 0.5
                        : rate;
        // Assuming interest is compounded annually (n = 1)
        var n = 1;
        // Calculating the future value
        var futureValue = principal * Math.pow(1 + interestRate / (100 * n), n * time);
        // Calculating the compound interest without savings
        var compoundInterestWithoutSavings = futureValue - principal;
        // Calculating the savings per month
        var savingsPerMonth = principal * (interestRate / 100) / 12;
        // Calculating the compound interest with adjusted savings
        var compoundInterestValue = compoundInterestWithoutSavings + savingsPerMonth * (time * 12);
        // State Variables for the KPI Tile
        setNewPrincipal(futureValue);
        setTotalDeposit(savingsPerMonth * (time * 12));
        setAmountOfYield(compoundInterestWithoutSavings + savingsPerMonth * (time * 12));
        setZeroYield(principal + savingsPerMonth * (time * 12));
        // State Variables for all calculations
        setCompoundInterest(compoundInterestValue);
        onValuesChange({
            type: type,
            rate: interestRate,
            principal: principal,
            time: time,
            compoundInterest: compoundInterestValue,
            newPrincipal: principal + compoundInterestValue + savingsRate * (time * 12) + amountOfYield,
            totalDeposit: savingsRate * (time * 12),
            amountOfYield: compoundInterestWithoutSavings + savingsPerMonth * (time * 12)
        });
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "bg-white p-12 shadow-sm" },
            react_1["default"].createElement("div", { className: "grid grid-cols-1 gap-16" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h4", { className: "font-bold" }, "Startkapital"),
                    react_1["default"].createElement(largeNumberSlider_1.SliderLarge, { ariaLabelForHandle: "Principal slider", label: "Startkapital", value: principal, labelValue: principal, min: 0, max: 100000, step: 100, onChange: function (value) { return setPrincipal(value); } })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h4", { className: "font-bold" }, "Zinssatz"),
                    react_1["default"].createElement("div", { className: "grid grid-cols-1 gap-8" },
                        react_1["default"].createElement("div", { className: "flex pt-5" },
                            react_1["default"].createElement("input", { type: "radio", value: "TW Portfolio", checked: type === 'TW Portfolio', onChange: function () {
                                    setType('TW Portfolio');
                                    calculateCompoundInterest();
                                }, className: "rounded-full w-4 h-4" }),
                            react_1["default"].createElement("p", { className: "ml-4" }, "True Wealth Musterportfolio"),
                            react_1["default"].createElement("h3", { className: "ml-auto" }, "5%")),
                        react_1["default"].createElement("div", { className: "flex" },
                            react_1["default"].createElement("input", { type: "radio", value: "High Yield Savings", checked: type === 'High Yield Savings', onChange: function () {
                                    setType('High Yield Savings');
                                    calculateCompoundInterest();
                                }, className: "rounded-full w-3 h-3" }),
                            react_1["default"].createElement("p", { className: "ml-4" }, "Hochzins Sparkonto"),
                            react_1["default"].createElement("h3", { className: "ml-auto" }, "3%")),
                        react_1["default"].createElement("div", { className: "flex" },
                            react_1["default"].createElement("input", { type: "radio", value: "Fixed Deposit", checked: type === 'Fixed Deposit', onChange: function () {
                                    setType('Fixed Deposit');
                                    calculateCompoundInterest();
                                }, className: "rounded-full w-3 h-3" }),
                            react_1["default"].createElement("p", { className: "ml-4" }, "Festgeld"),
                            react_1["default"].createElement("h3", { className: "ml-auto" }, "1%")),
                        react_1["default"].createElement("div", { className: "flex" },
                            react_1["default"].createElement("input", { type: "radio", value: "Call Money", checked: type === 'Call Money', onChange: function () {
                                    setType('Call Money');
                                    calculateCompoundInterest();
                                }, className: "rounded-full w-3 h-3" }),
                            react_1["default"].createElement("p", { className: "ml-4" }, "Tagesgeld"),
                            react_1["default"].createElement("h3", { className: "ml-auto" }, "0,5%")),
                        react_1["default"].createElement("div", { className: "flex items-center" },
                            react_1["default"].createElement("p", null, "Individueller Zinssatz"),
                            react_1["default"].createElement("input", { type: "text", value: rate + '%', onChange: function (e) {
                                    var inputValue = e.target.value;
                                    // Replacing both commas with a dot
                                    var normalizedInput = inputValue.replace(/,/g, '.');
                                    // Removing non-numeric characters and the percentage symbol
                                    var validatedInput = normalizedInput.replace(/[^0-9.]/g, '');
                                    // Limiting the length to 3 digits, which is already an optimistic assumption about monetary development in this century
                                    var truncatedInput = validatedInput.slice(0, 3);
                                    // Convering the truncated input to a number
                                    var newRate = truncatedInput === '' ? 0 : parseFloat(truncatedInput);
                                    // Setting the new interest rate
                                    setRate(isNaN(newRate) ? 0 : newRate);
                                    setType('Custom');
                                    calculateCompoundInterest();
                                }, className: "w-16 ml-auto" })),
                        react_1["default"].createElement("div", null))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(slider_1.Slider, { ariaLabelForHandle: "Savings rate slider", label: "Sparrate pro Monat", labelValue: savingsRate, min: 100, max: 10000, step: 100, value: savingsRate, onChange: function (value) { return setSavingsRate(value); } })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(slider_1.Slider, { ariaLabelForHandle: "Age slider", label: "Laufzeit in Jahren", min: 1, max: 50, value: time, step: 1, onChange: function (value) { return setTime(value); }, labelValue: time, labelValueSuffix: "Jahre" })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h4", { className: "font-bold" }, "Compound Interest"),
                    react_1["default"].createElement("p", null,
                        compoundInterest.toFixed(2),
                        "CHF")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h4", { className: "font-bold" }, "New Principal"),
                    react_1["default"].createElement("p", null,
                        newPrincipal.toFixed(0),
                        " CHF")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h4", { className: "font-bold" }, "Total Deposit"),
                    react_1["default"].createElement("p", null,
                        totalDeposit.toFixed(0),
                        " CHF")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h4", { className: "font-bold" }, "Amount of Yield"),
                    react_1["default"].createElement("p", null,
                        amountOfYield.toFixed(0),
                        " CHF")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h4", { className: "font-bold" }, "Zero Yield"),
                    react_1["default"].createElement("p", null,
                        zeroYield.toFixed(2),
                        " CHF"))))));
};
exports["default"] = CompoundInterestForm;
