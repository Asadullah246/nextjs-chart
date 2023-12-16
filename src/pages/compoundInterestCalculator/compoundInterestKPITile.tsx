import React from 'react';

interface CompoundInterestKPITileProps {
  newPrincipal: number;
  totalDeposit: number;
  amountOfYield: number;
}

const formatNumberWithSeparator = (number:any) => {
  // Convert the number to a string
  const numberString = number.toString();

  // Use a regular expression to add a single quote as a separator for thousands
  const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, "'");

  return formattedNumber;
};

const CompoundInterestKPITile: React.FC<CompoundInterestKPITileProps> = ({
  newPrincipal,
  totalDeposit,
  amountOfYield,
}) => {
  return (
    <div>
      <div className="bg-white w-full pt-5 shadow-sm">
        <div className="md:grid grid-cols-3 text-center">
     
          <div>
            <h2 className="mb-0">{formatNumberWithSeparator(newPrincipal.toFixed(0))} CHF</h2>
            <p className="uppercase">Endkapital</p>
          </div>
          <div>
          <h2 className="mb-0">{formatNumberWithSeparator(totalDeposit.toFixed(0))} CHF</h2>
            <p className="uppercase">Einzahlung</p>
          </div>
          <div>
          <h2 className="mb-0">{formatNumberWithSeparator(amountOfYield.toFixed(0))} CHF</h2>
            <p className="uppercase">Rendite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestKPITile;