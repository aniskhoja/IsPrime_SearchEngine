
import React from 'react';
import { Form } from './form';
import { ErrorPannel } from './errorPannel';
import { ResultPannel } from './resultPannel';

//main container
export const Main = ({ onSubmit, getInput, setInput, error, apiResult }) => {
    return (<main className="container App">
        <Form onSubmit={onSubmit} getInput={getInput} setInput={setInput} />
        <ErrorPannel error={error} />
        <ResultPannel apiResult={apiResult} />
    </main>);
};
