import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img src='https://s2.logaster.com/static/v3/img/products/logo.png'></img>
            </header>
            <nav className='nav'>

                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className='content'>
              <div>
                  <img src='https://www.jssor.com/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg'></img>

              </div>
                <div>
                    ava + 123
                </div>
                <div>
                    My posts
                    <div>
                        new post
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
