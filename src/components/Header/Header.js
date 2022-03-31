import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy Routing Website</h1>
            <nav>
                <CustomLink to="/"><p>Home</p></CustomLink>
                <CustomLink to="/friends"><p>Friends</p></CustomLink>
                <CustomLink to="/about"><p>About</p></CustomLink>
                <CustomLink to="/posts"><p>Posts</p></CustomLink>
                <CustomLink to="/countries"><p>Countries</p></CustomLink>
            </nav>
        </div>
    );
};

export default Header;