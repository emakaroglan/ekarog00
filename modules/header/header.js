import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png'
import styles from './header.module.css';

const Header = () => {

    return (
    <header className={styles.main}>
        <main className = {styles.content}>
                <Image src = {logo} alt = "logo"/>
            <nav>
                <li>Home</li>
                <li>About Us</li>
                <li>Showcase</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Sign in</li>
            </nav>
        </main>
    </header>
    )
}

export default Header;