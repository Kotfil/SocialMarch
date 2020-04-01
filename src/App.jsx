import React, {Component} from 'react';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>


    );
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>js</li>
            </ul>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href='#s'>Home</a>
            <a href='#s'>News Feed</a>
            <a href='#s'>Messages</a>
        </div>
    );
}
export default App;
