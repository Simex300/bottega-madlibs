import React from 'react';

const Header = (title, content) => {
    return (
        <div className="header">
            <h1>{ title }</h1>
            <h2>{ content }</h2>
        </div>
    )
}

export default Header;