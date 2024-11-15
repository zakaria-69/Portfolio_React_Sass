import React from 'react';

const Presentation = () => {
    return (
        <main className='presentation__container presentation__anim' id='presentation'>
            <h1>Bienvenue <br />je suis Ladjrafi Zakaria</h1>
            <section className='presentation__container__animation'>
                <div className='first'>
                    <div>
                        Fraichement diplômé
                    </div>
                </div>
                <div className='second'>
                    <div>
                        Développeur web
                    </div>
                </div>
                <div className='third'>
                    <div>
                        Motivé
                    </div>
                </div>
                <div className='fourth'>
                    <div>
                        Dynamique
                    </div>
                </div>
                <div className='fifth'>
                    <div>
                        Rigoureux
                    </div>
                </div>
                <div className='sixth'>
                    <div>
                        Passionné
                    </div>
                </div>
                <div className='seventh'>
                    <div>
                        force de proposition
                    </div>
                </div>
                <div className='height'>
                    <div>
                        Curieux
                    </div>
                </div>
            </section>
            <div className='presentation__container__description'>
                <div className='presentation__container__description__left'>
                    <p className='presentation__container__description__left__textContent'>
                    Depuis très jeune, j'ai une appétence pour le monde informatique, le digital,
                    la technologie. En cherchant à savoir plus en détail comment étaient crée les sites internet,
                    les jeux-vidéos et plus récemment les applications, comment interagissaient entre eux les éléments
                    et les appareils pour obtenir le résultat escompté, c'est de cette réflexion que m'est venu l'envie d'apprendre
                    des langages informatiques. Après quelques projets personnels et ayant vu le pouvoir de ces outils. J'ai
                    vu mon intérêt et mon envie d'en apprendre encore plus, décuplée.
                    <br />
                        J'ai donc validé mon bac +2 en qualité de
                        <span className='presentation__container__description__left__textContent__profession'> développeur intégrateur Web </span>
                        au cours de l'année 2022, puis j'ai poursuivi sur un cursur bac +3/4 en tant que <span className='presentation__container__description__left__textContent__profession'> Concepteur développeur d'applications </span> et j'aspire à pouvoir
                        continuer d'apprendre et surtout d'éxercer car c'est selon moi le meilleurs moyen de s'améliorer.
                    </p>
                </div>
                <div className='presentation__container__description__right'>
                    <div className='presentation__container__description__right__img'>
                        <img src='../../../img/profil-cv.jpg' alt="img de profil"></img>
                    </div>
                    <div>
                        <p className='presentation__container__description__right__ofGripSentence'>
                        Un jour sans rien apprendre est un jour perdu, alors, continuons d'échanger et d'apprendre ensemble !
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Presentation;