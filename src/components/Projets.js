import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Projets = () => {

    const proprietes = {
        duration: 4000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }

    return (
        <section className='projets__container' id='projets'>
            <div>
                <h1>Projets</h1>
            </div>
            <div className='projets__container__subcontainer'>
                <div className='projets__container__slideshow'>
                    <Slide {...proprietes}>
                        <div className='projets__container__slideshow__each__slide'>
                            <div className='projets__container__slideshow__each__slide__container'>
                                <a href='https://zakaria-69.github.io/Booki_projet2_Transformez_une_maquette_en_site_web/'>
                                    <img src='../../../img_projects_carousel/Booki.png' alt='booki_logo' title='booki_projet' />
                                </a>
                            </div>
                        </div>
                        <div className='projets__container__slideshow__each__slide'>
                            <div className='projets__container__slideshow__each__slide__container'>
                                <a href='https://zakaria-69.github.io/Ohmyfood_Projet3_Dynamiser_une_page_web_avec_des_animations/'>
                                    <img src='../../../img_projects_carousel/ohmyfood.png' alt='ohmyfood_logo' title='ohmyfood_projet' />
                                </a>
                            </div>
                        </div>
                        <div className='projets__container__slideshow__each__slide'>
                            <div className='projets__container__slideshow__each__slide__container'>
                                <a href='https://zakaria-69.github.io/P4_panthere_agence_web_Optimisez_un_site_web/'>
                                    <img src='../../../img_projects_carousel/laPanthere.png' alt='laPanthère_logo' title='laPanthère_projet' />
                                </a>
                            </div>
                        </div>
                        <div className='projets__container__slideshow__each__slide'>
                            <div className='projets__container__slideshow__each__slide__container'>
                                <a href='https://github.com/zakaria-69/P5_Kanap_Construisez_un_site_E_commerce_en_javascript'>
                                    <img src='../../../img_projects_carousel/kanap.png' alt='kanap_logo' title='kanap_projet' />
                                </a>
                            </div>
                        </div>
                        <div className='projets__container__slideshow__each__slide'>
                            <div className='projets__container__slideshow__each__slide__container'>
                                <a href='https://github.com/zakaria-69/developpez-une-API-securis-e-pour-une-appli-avis-gastronomique'>
                                    <img src='../../../img_projects_carousel/hotsauces.jpg' alt='screenshot_projet_hotsauce' title='hot_sauces_projet' />
                                </a>
                            </div>
                        </div>
                        <div className='projets__container__slideshow__each__slide'>
                            <div className='projets__container__slideshow__each__slide__container'>
                                <a href='https://github.com/zakaria-69/Groupomania_cree_un_reseau_social_d_entreprise'>
                                    <img src='../../../img_projects_carousel/groupomania.png' alt='groupomania_logo' title='groupomania_projet' />
                                </a>
                            </div>
                        </div>
                        <div className='projets__container__slideshow__each__slide'>
                            <div className='projets__container__slideshow__each__slide__container'>
                                <a href='https://zakaria-69.github.io/phaser_3_game_initiation/'>
                                    <img src='../../../img_projects_carousel/phaser3.png' alt='phaser3_jeux_image' title='phaser3_jeux_projet' />
                                </a>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
};

export default Projets;