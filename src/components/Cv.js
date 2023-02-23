import React from 'react';

const Cv = () => {
    return (
        <section className='cv__container' id='cv'>
            <h1>Cv</h1>
            <div className='cv__container__page'>
                <div className='cv__container__page__screenshot'>
                    <img src='../../../img/cv_screenshot_portfolio.png'></img>
                </div>
                <div className='cv__container__page__download'>
                    <a href='../../../Zakaria_LADJRAFI_CV.pdf' download className='cv__container__page__download__item'>
                        <p>Télecharger CV</p>
                    </a>
                </div>
            </div>
        </section>
    );
}


export default Cv;