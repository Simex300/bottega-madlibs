import React from 'react';

const Header = (title, content) => {
    return (
        <div className="header">
            <div className="header__skew"> </div>
            <div className="header__border"> </div>
            <h1>{ title }</h1>
            <h2>{ content }</h2>
            <i className="fas fa-check"></i>
        </div>
    )
}

export default Header;