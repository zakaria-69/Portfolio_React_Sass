import React from 'react';

const Footer = () => {
    return (
        <div className='footer__container'>
            <div className='footer__container__links'>
                <div className='footer__container__links__cv'>
                    <a href='../../../Zakaria_LADJRAFI_CV.pdf' download title='cv'>
                        <i className="fa-solid fa-file fa-xl"></i>
                    </a>
                </div>
                <div className='footer__container__links__linkedin' title='linkedin'>
                    <a href='https://www.linkedin.com/in/zakaria-ladjrafi-088248239/'>
                        <i className="fa-brands fa-linkedin fa-xl"></i>
                    </a>
                </div>
                <div className='footer__container__links__twitter'>
                    <a href='https://twitter.com/xX_kikito_xX' title='twitter'>
                        <i className="fa-brands fa-twitter fa-xl"></i>
                    </a>
                </div>
                <div className='footer__container__links__github'>
                    <a href='https://github.com/zakaria-69' title='github'>
                        <i className="fa-brands fa-github fa-xl"></i>
                    </a>
                </div>

            </div>
            <p>
                <i className="fa-regular fa-copyright"></i>
                2023 |LADJRAFI Zakaria |Tout droits réservés.
            </p>

        </div>
    );
};

export default Footer;