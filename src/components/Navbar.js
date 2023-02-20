import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav className='nav__header'>
                <ul className='nav__header__ul'>
                    <li className='nav__header__ul__item '>
                        <a href='#presentation' className='nav__header__ul__item__left'>
                            Présentation
                        </a>
                    </li>
                    <li className='nav__header__ul__item'>
                        <a href='#technos'>
                            Technos
                        </a>
                    </li>
                    <li className='nav__header__ul__item'>
                        <a href='#cv'>
                            CV
                        </a>
                    </li>
                    <li className='nav__header__ul__item'>
                        <a href='#projets'>
                            Projets
                        </a>
                    </li>
                    <li className='nav__header__ul__item'>
                        <a href='#contact'>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;