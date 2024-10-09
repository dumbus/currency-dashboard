import React from 'react';

interface AverageProps {
  averageValue: string;
}

// Get average value from props and render simple component to show it
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
