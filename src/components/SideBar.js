import React, { useState } from 'react';

const LeftLinks = () => {
    const [toggleSidebar, setToggleSidebar] = useState('true');

    const handleToggleSidebar = (e) => {
        setToggleSidebar(!toggleSidebar)
        console.log('sidebar toggled')
    }

    return (
        <div className='sidebar__container'>
            {!toggleSidebar ? (
                <div className='sidebar'>
                    <nav className='sidebar__nav__links'>
                        <ul>
                            <li className='sidebar__nav__links__li'>
                                <a href='https://www.linkedin.com/in/zakaria-ladjrafi-088248239/'
                                    className='sidebar__nav__links__li__link linkedin'
                                    title='linkedin'>
                                    <i className="fa-brands fa-linkedin fa-xl"></i>
                                </a>
                            </li>
                            <li className='sidebar__nav__links__li'>
                                <a href='https://twitter.com/xX_kikito_xX'
                                    className='sidebar__nav__links__li__link twitter'
                                    title='twitter'>
                                    <i className="fa-brands fa-twitter fa-xl"></i>
                                </a>
                            </li>
                            <li className='sidebar__nav__links__li'>
                                <a href='https://github.com/zakaria-69'
                                    className='sidebar__nav__links__li__link github'
                                    title='github'>
                                    <i className="fa-brands fa-github fa-xl"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button className='toggle__sidebar'
                        onClick={handleToggleSidebar}
                        id='toggleSidebar'
                        title='réseaux'>&lt;</button>
                </div>)
                :
                (
                    <div className='sidebar'>
                        <button className='toggle__sidebar'
                            onClick={handleToggleSidebar}
                            id='toggleSidebar'
                            title='réseaux'>&gt;</button>
                    </div>
                )}
        </div>
    );
}

export default LeftLinks;