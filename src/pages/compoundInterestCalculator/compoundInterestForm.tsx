import { Slider } from "src/core/slider";
import { SliderLarge } from "src/core/largeNumberSlider";
import React, { useState, useEffect } from 'react';

interface CompoundInterestFormProps {
    onValuesChange: (values: {
        type: string;
        rate: number;
        principal: number;
        time: number;
        compoundInterest: number;
        newPrincipal: number;
        totalDeposit: number;
        amountOfYield: number;
    }) => void;
}

const CompoundInterestForm: React.FC<CompoundInterestFormProps> = ({ onValuesChange }) => {
    const [type,
        setType] = useState<string>('TW Portfolio');
    const [rate,
        setRate] = useState<number>(0);
    const [principal,
        setPrincipal] = useState<number>(10000);
    const [time,
        setTime] = useState<number>(5);
    const [compoundInterest,
        setCompoundInterest] = useState<number>(0);
    const [savingsRate,
        setSavingsRate] = useState<number>(150);
    const [newPrincipal,
        setNewPrincipal] = useState<number>(0);
    const [totalDeposit,
        setTotalDeposit] = useState<number>(0);
    const [amountOfYield,
        setAmountOfYield] = useState<number>(0);
    const [zeroYield,
        setZeroYield] = useState<number>(0);

    useEffect(() => {
        calculateCompoundInterest();
    }, [type, rate, principal, time, savingsRate]);

    const calculateCompoundInterest = () => {

        // Compound Interests based on preset rates as per the design concept
        const interestRate = type === 'TW Portfolio'
            ? 5
            : type === 'High Yield Savings'
                ? 3
                : type === 'Fixed Deposit'
                    ? 1
                    : type === 'Call Money'
                        ? 0.5
                        : rate;

        // Assuming interest is compounded annually (n = 1)
        const n = 1;

        // Calculating the future value
        const futureValue = principal * Math.pow(1 + interestRate / (100 * n), n * time);

        // Calculating the compound interest without savings
        const compoundInterestWithoutSavings = futureValue - principal;

        // Calculating the savings per month
        const savingsPerMonth = principal * (interestRate / 100) / 12;

        // Calculating the compound interest with adjusted savings
        const compoundInterestValue = compoundInterestWithoutSavings + savingsPerMonth * (time * 12);

        // State Variables for the KPI Tile
        setNewPrincipal(futureValue);
        setTotalDeposit(savingsPerMonth * (time * 12));
        setAmountOfYield(compoundInterestWithoutSavings + savingsPerMonth * (time * 12));
        setZeroYield(principal + savingsPerMonth * (time * 12));

        // State Variables for all calculations
        setCompoundInterest(compoundInterestValue);

        onValuesChange({
            type,
            rate: interestRate,
            principal,
            time,
            compoundInterest: compoundInterestValue,
            newPrincipal: principal + compoundInterestValue + savingsRate * (time * 12) + amountOfYield,
            totalDeposit: savingsRate * (time * 12),
            amountOfYield: compoundInterestWithoutSavings + savingsPerMonth * (time * 12)
        });
    };

    return (
        <div>
            <div className="bg-white p-12 shadow-sm">

                <div className="grid grid-cols-1 gap-16">

                    <div>
                        <h4 className="font-bold">Startkapital</h4>

                        <SliderLarge
                            ariaLabelForHandle="Principal slider"
                            label="Startkapital"
                            value={principal}
                            labelValue={principal}
                            min={0}
                            max={100000}
                            step={1000}
                            onChange={(value: any) => setPrincipal(value)} />

                    </div>

                    <div>
                        <h4 className="font-bold">Zinssatz</h4>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="flex pt-5">

                                <input
                                    type="radio"
                                    value="TW Portfolio"
                                    checked={type === 'TW Portfolio'}
                                    onChange={() => {
                                        setType('TW Portfolio');
                                        calculateCompoundInterest();
                                    }}
                                    className="rounded-full w-4 h-4" />

                                <p className="ml-4">True Wealth Musterportfolio</p>
                                <h3 className="ml-auto">5%</h3>

                            </div>

                            <div className="flex">
                                <input
                                    type="radio"
                                    value="High Yield Savings"
                                    checked={type === 'High Yield Savings'}
                                    onChange={() => {
                                        setType('High Yield Savings');
                                        calculateCompoundInterest();
                                    }}
                                    className="rounded-full w-3 h-3" />
                                <p className="ml-4">Hochzins Sparkonto</p>
                                <h3 className="ml-auto">3%</h3>
                            </div>

                            <div className="flex">
                                <input
                                    type="radio"
                                    value="Fixed Deposit"
                                    checked={type === 'Fixed Deposit'}
                                    onChange={() => {
                                        setType('Fixed Deposit');
                                        calculateCompoundInterest();
                                    }}
                                    className="rounded-full w-3 h-3" />
                                <p className="ml-4">Festgeld</p>
                                <h3 className="ml-auto">1%</h3>
                            </div>

                            <div className="flex">
                                <input
                                    type="radio"
                                    value="Call Money"
                                    checked={type === 'Call Money'}
                                    onChange={() => {
                                        setType('Call Money');
                                        calculateCompoundInterest();
                                    }}
                                    className="rounded-full w-3 h-3" />
                                <p className="ml-4">Tagesgeld</p>
                                <h3 className="ml-auto">0,5%</h3>
                            </div>

                            <div className="flex items-center">
                                <p>Individueller Zinssatz</p>
                                <input
                                    type="text"
                                    value={rate + '%'}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        const normalizedInput = inputValue.replace(/,/g, '.');
                                        const validatedInput = normalizedInput.replace(/[^0-9.]/g, '');
                                        const truncatedInput = validatedInput.slice(0, 3);
                                        const newRate = truncatedInput === ''
                                            ? 0
                                            : parseFloat(truncatedInput);
                                        setRate(isNaN(newRate)
                                            ? 0
                                            : newRate);
                                        setType('Custom');
                                        calculateCompoundInterest();
                                    }}
                                    className="w-16 ml-auto" />

                            </div>

                            <div></div>

                        </div>

                    </div>

                    <Slider
                        ariaLabelForHandle="Savings rate slider"
                        label="Sparrate pro Monat"
                        labelValue={savingsRate}
                        min={100}
                        max={10000}
                        step={100}
                        value={savingsRate}
                        onChange={(value: any) => setSavingsRate(value)} />

                    <Slider
                        ariaLabelForHandle="Age slider"
                        label="Laufzeit in Jahren"
                        min={1}
                        max={50}
                        value={time}
                        step={1}
                        onChange={(value: any) => setTime(value)}
                        labelValue={time}
                        labelValueSuffix="Jahre" />

                    <div>
                        <h4 className="font-bold">Compound Interest</h4>
                        <p>{compoundInterest.toFixed(2)}
                            CHF</p>
                    </div>
                    <div>
                        <h4 className="font-bold">New Principal</h4>
                        <p>{newPrincipal.toFixed(0)}
                            CHF</p>
                    </div>
                    <div>
                        <h4 className="font-bold">Total Deposit</h4>
                        <p>{totalDeposit.toFixed(0)}
                            CHF</p>
                    </div>
                    <div>
                        <h4 className="font-bold">Amount of Yield</h4>
                        <p>{amountOfYield.toFixed(0)}
                            CHF</p>
                    </div>

                    <div>
                        <h4 className="font-bold">Zero Yield</h4>
                        <p>{zeroYield.toFixed(2)}
                            CHF</p>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default CompoundInterestForm;
