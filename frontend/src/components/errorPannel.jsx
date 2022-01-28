import React from 'react';

//error span goes here..
export const ErrorPannel = ({ error }) => {
  return (<div data-testid="rejectSpan" className="alert alert-primary" role="alert">
    {error}
  </div>);
};
