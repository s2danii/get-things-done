import React from 'react';


function Navigation (props) {
    return (
        <nav>
            <div className="wrapper">
                <p>{props.date}</p>
                <ul>
                    <li className="logInButton">
                        {props.accountType === 'guest' ? 
                        <a onClick={props.login}>Log In</a> :
                        <a onClick={props.logout}>Log Out</a>}
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navigation;