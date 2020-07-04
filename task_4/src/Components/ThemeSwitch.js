import React, { Component } from 'react'

import { ThemeContext } from '../Helpers/ContextHelper';
import '../Styles/ThemeSwitch.css'

class ThemeSwitch extends Component {

    render = () => {
        return (
            <ThemeContext.Consumer>
                {
                    theme => (
                        <>
                            <div
                                className="current-theme"
                            >
                                <h4>
                                    Current theme {theme.themeMode}
                                </h4>
                                <div 
                                    className="current-theme"
                                >
                                    <button
                                        className={`button ${theme.themeMode}`}
                                        onClick={theme.changeTheme('light')}
                                    >
                                        Light
                                    </button>
                                    <button
                                        className={`button ${theme.themeMode}`}
                                        onClick={theme.changeTheme('dark')}
                                    >
                                        Dark
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}

export default ThemeSwitch;
