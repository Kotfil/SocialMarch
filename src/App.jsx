import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


let posts = [
    {id: 0, message: 'Hello friend', likesCount: 12},
    {id: 1, message: 'How are You?', likesCount: 32},
];

let dialogsData = [
    {id: 1, name: 'Oksana'},
    {id: 2, name: 'Vitaly'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Marina'},
    {id: 5, name: 'Evgen'},
    {id: 6, name: 'Sergey'}
];


let messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How Are You?'},
    {id: 3, message: 'How old are you?'},
    {id: 4, message: 'How old are you?'},
    {id: 5, message: 'How old are you?'},
    {id: 6, message: 'How old are you?'}
];


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={() => <Profile posts={posts} />}/>
                    <Route exact path='/dialogs' component={() => <Dialogs />}/>
                    <Route path='#'/>
                    <Route path='#'/>
                    <Route path='#'/>
                </div>
            </div>
        </BrowserRouter>

    );
};


export default App;
