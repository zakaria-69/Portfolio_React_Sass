import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';


const Technologie = () => {

    return (
        <div className='technos' id='technos'>
            <h1>Technologies</h1>
            <section className='technos__container'>
                <AnimationOnScroll animateIn="animate__backInLeft" style={{ animationDelay: '0.2s' }}>
                    <div className='technos__container__frontend'>
                        <h2>frontend</h2>
                        <div className='technos__container__frontend__list'>
                            <ul>
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
                                <li className='technos__container__frontend__list__item'>
                                    <p>React native</p>
                                    <img src='../../../logo_technos_portfolio/react_native_logo.png' alt='logo_react_native'>
                                    </img>
                                </li>
                                <li className='technos__container__frontend__list__item'>
                                    <p>Angular</p>
                                    <img src='../../../logo_technos_portfolio/angular_logo.jpg' alt='logo_angular'>
                                    </img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInDown" style={{ animationDelay: '0.4s' }}>
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
                                    <p>Java</p>
                                    <img src='../../../logo_technos_portfolio/java_logo.png' alt='logo_java'>
                                    </img>
                                </li>
                                <li className='technos__container__backend__list__item'>
                                    <p>PHP</p>
                                    <img src='../../../logo_technos_portfolio/php_logo.png' alt='logo_PHP'>
                                    </img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInDown" style={{ animationDelay: '0.8s' }}>
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
                                <li className='technos__container__databases__list__item'>
                                    <p>Sequelize</p>
                                    <img src='../../../logo_technos_portfolio/Sequelize_logo.png' alt='logo_sequelize'>
                                    </img>
                                </li>
                                <li className='technos__container__databases__list__item'>
                                    <p>Prisma</p>
                                    <img src='../../../logo_technos_portfolio/prisma_logo2.jpg' alt='logo_prisma'>
                                    </img>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__backInRight" style={{ animationDelay: '1.2s' }}>
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
                                    <p>GraphQL</p>
                                    <img src='../../../logo_technos_portfolio/graphql_logo.png' alt='logo_grahpql'>
                                    </img>
                                </li>
                                <li className='technos__container__extras__list__item'>
                                    <p>SEO</p>
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