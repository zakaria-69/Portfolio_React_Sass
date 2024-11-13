import React from 'react';

const Cv = () => {
    return (
        <section className='cv__container' id='cv'>
            <h1>Cv</h1>
            <div className='cv__container__page'>
                <div className='cv__container__page__screenshot'>
                    <img src='../../../img/capture_cv_marron_2024.png' alt="capture d'écran d'un cv"></img>
                </div>
                <div className='cv__container__page__download'>
                    <a href='../../../CV_dev_fullstack_marron_ 2024.pdf' download className='cv__container__page__download__item'>
                        <p>Télecharger CV</p>
                    </a>
                </div>
            </div>
        </section>
       
    )
}


export default Cv;