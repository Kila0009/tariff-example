import React, { useState } from "react";

interface YearSelectorProps {
    onYearChange: (year: number) => void;
  }
  
  const YearSelector: React.FC<YearSelectorProps> = ({ onYearChange }) => {
    const years = [2020, 2021, 2022, 2023];
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  
    return (
      <div>
        {years.map(year => (
          <button key={year} onClick={() => {
            setSelectedYear(year)
            onYearChange(year);
          }}>
            {year}
          </button>
        ))}
      </div>
    );
  };
  