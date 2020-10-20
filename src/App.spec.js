import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('should render App', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    expect(div.innerHTML).toContain('div');


    ReactDOM.unmountComponentAtNode(div);
});