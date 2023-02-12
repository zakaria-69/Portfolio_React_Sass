import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';


const Technologie = () => {

    return (

        <div className='technos'>
            <h1>Technologies</h1>
            <section className='technos__container'>
                <AnimationOnScroll animateIn="animate__backInLeft" style={{ animationDelay: '0s' }} className='delay_1'>
                    <div className='technos__container__frontend'>
                        <h2>frontend</h2>
                        <div className='technos__container__frontend__list'>
                            <ul>
                                <li className='technos__container__frontend__list__item'>
                                    <p>Html</p>
                                    <img src='../../../logo_technos_portfolio/Html5_logo.png' alt='logo_html'>
                                    </img>
                                </li>
                                <li className='technos__container__frontend__list__item'>
                                    <p>Css</p>
                                    <img src='../../../logo_technos_portfolio/Css3_logo.png' alt='logo_css'>
                                    </img>
                                </li>
                                <li className='technos__container__frontend__list__item'>
                                    <p>Javascript</p>
                                    <img src='../../../logo_technos_portfolio/Javascript_logo.png' alt='logo_javascript'>
                                    </img>
                                </li>
                                <li className='technos__container__frontend__list__item'>
                                    <p>React.js</p>
                                    <img src='../../../logo_technos_portfolio/React_logo.png' alt='logo_react.js'>
                                    </img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInDown" style={{ animationDelay: '0.4s' }} className='delay_2'>
                    <div className='technos__container__backend'>
                        <h2>backend</h2>
                        <div className='technos__container__backend__list'>
                            <ul>
                                <li className='technos__container__backend__list__item'>
                                    <p>Node.Js</p>
                                    <img src='../../../logo_technos_portfolio/Node_logo.jpg' alt='logo_node.js'>
                                    </img>
                                </li>
                                <li className='technos__container__backend__list__item'>
                                    <p>Express</p>
                                    <img src='../../../logo_technos_portfolio/Express_logo.png' alt='logo_express.js'>
                                    </img>
                                </li>
                                <li className='technos__container__backend__list__item'>
                                    <p>Sequelize</p>
                                    <img src='../../../logo_technos_portfolio/Sequelize_logo.png' alt='logo_sequelize'>
                                    </img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInUp" style={{ animationDelay: '0.8s' }} className='delay_3'>
                    <div className='technos__container__databases'>
                        <h2>Databases</h2>
                        <div className='technos__container__databases__list'>
                            <ul>
                                <li className='technos__container__databases__list__item'>
                                    <p>MongoDB</p>
                                    <img src='../../../logo_technos_portfolio/Mongodb_logo.jpg' alt='logo_mongodb'>
                                    </img>
                                </li>
                                <li className='technos__container__databases__list__item'>
                                    <p>MySql</p>
                                    <img src='../../../logo_technos_portfolio/Mysql_logo.png' alt='logo_mysql'>
                                    </img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInRight" style={{ animationDelay: '1.2s' }} className='delay_4'>
                    <div className='technos__container__extras'>
                        <h2>extras</h2>
                        <div className='technos__container__extras__list'>
                            <ul>
                                <li className='technos__container__extras__list__item'>
                                    <p>Git/Github</p>
                                    <img src='../../../logo_technos_portfolio/Git_github_logos.png' alt='logos_git_et_github'>
                                    </img>
                                </li>
                                <li className='technos__container__extras__list__item'>
                                    <p>VsCode</p>
                                    <img src='../../../logo_technos_portfolio/Vscode_logo.png' alt='logo_vscode'>
                                    </img>
                                </li>
                                <li className='technos__container__extras__list__item'>
                                    <p>Optimisation/SEO</p>
                                    <img src='../../../logo_technos_portfolio/Seo_opti_logo.png' alt='logo_seo'>
                                    </img>
                                </li>
                                <li className='technos__container__extras__list__item'>
                                    <p>API Rest</p>
                                    <img src='../../../logo_technos_portfolio/Rest_api_logo.png' alt='logo_api_rest'>
                                    </img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>
        </div>

    );
}

export default Technologie;