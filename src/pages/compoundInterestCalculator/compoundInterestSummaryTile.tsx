import React from 'react';

interface CompoundInterestSummaryTileProps {
  newPrincipal: number;
  totalDeposit: number;
  amountOfYield: number;
}

const CompoundInterestSummaryTile: React.FC<CompoundInterestSummaryTileProps> = ({
  newPrincipal,
  totalDeposit,
  amountOfYield,
}) => {
  return (
    <div>
      <div className="w-full">
        <div className="bg-white p-16 shadow-sm">
          <h2>Lesehilfe</h2>
          <p>
            Wenn Sie mit {newPrincipal.toFixed(0)} CHF Startkapital, einer monatlichen
            Sparrate von {totalDeposit.toFixed(0)} CHF für 10 Jahre bei einem jährlichen
            Zinssatz von 5 % sparen und die Zinsen jährlich reinvestieren, dann beträgt Ihr
            Endkapital {amountOfYield.toFixed(0)} CHF. Daraus ergeben sich{' '}
            {totalDeposit.toFixed(0)} CHF Einzahlungen und {amountOfYield.toFixed(0)} CHF
            Zinszahlungen. Sie wissen nicht, wo Sie anfangen sollen? Eröffnen Sie jetzt ein
            Testkonto und wandeln Sie es später in ein echtes Konto um.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestSummaryTile;
