import React from 'react';

interface AverageProps {
  averageValue: string;
}

function Average({ averageValue }: AverageProps) {
  return (
    <div className="average">
      <h2 className="average-title">Среднее за период</h2>
      <div className="average-value">
        <span>{averageValue}</span> ₽
      </div>
    </div>
  );
}

export default Average;
