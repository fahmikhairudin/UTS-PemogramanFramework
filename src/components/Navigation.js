import { Link } from 'react-router-dom';
import React from 'react';

function Navigation  () {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Perpustakaan Polinema</h1>
            <nav>
                <Link to='/'>HOME</Link> | {" "}
                <Link to='profil'>Profile</Link> | {" "}
                <Link to='about'>list buku</Link> | {" "}
            </nav>

        </div>
    )
}


export default Navigation;