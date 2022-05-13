import React from 'react';

import './App.css';

import IranMap from './IranMap';


class App extends React.Component {

    render() {
        return (
            <div className="container">
                <IranMap/>
                <div>hello</div>
            </div>
        );
    }
}

export default App;
