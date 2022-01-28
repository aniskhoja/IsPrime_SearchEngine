import React from 'react';

//result span to get result output
export const ResultPannel = ({ apiResult }) => {
    return <h1 data-testid="resultHeading"><span data-testid="resultSpan" className="badge bg-success">{apiResult}</span></h1>;
};
