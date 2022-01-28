import React from 'react';

//Table Form
export const Form = ({ onSubmit, getInput, setInput }) => {
    return (<form onSubmit={onSubmit}>
        <h3 data-testid="heading">I will find the median prime number's of given input</h3>
        <input data-testid="numberInput" type="text" className="form-control" id="InputNumber" value={getInput} onChange={e => setInput(e.target.value)} />
        <button className="btn btn-primary m-2">Submit</button>
    </form>);
};
