import React from 'react';

const LeftLinks = () => {
    return (
        <div className='sidebar'>
            <nav className='sidebar__nav__links'>
                <ul>
                    <li className='sidebar__nav__links__li'>
                        <a href='https://www.linkedin.com/in/zakaria-ladjrafi-088248239/'
                            className='sidebar__nav__links__li__link linkedin'>
                            <i class="fa-brands fa-linkedin fa-xl"></i>
                        </a>
                    </li>
                    <li className='sidebar__nav__links__li'>
                        <a href='https://twitter.com/xX_kikito_xX' className='sidebar__nav__links__li__link twitter'>
                        <i class="fa-brands fa-twitter fa-xl"></i>
                        </a>
                    </li>
                    <li className='sidebar__nav__links__li'>
                        <a href='https://github.com/zakaria-69' className='sidebar__nav__links__li__link github'>
                        <i class="fa-brands fa-github fa-xl"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}


export default LeftLinks;