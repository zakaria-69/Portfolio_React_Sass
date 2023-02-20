import React from 'react';

const Contact = () => {
    return (
        <div className='contact__container' id='contact'>           
            <h1>Contact</h1>
            <div className='contact__container__fullForm'>
            <div className='contact__container__formContainer'>
                <form action='*'>
                    <label htmlFor="name">Name *</label>
                    <input type='text'
                            name='name'
                            id='name'
                            title='name'
                            required>
                    </input> 
                    <br/>
                    <label htmlFor='prenom'>Prénom *</label>
                    <input type="text"
                            name='prénom'
                            id='prenom'
                            title='prénom'
                            required>
                    </input>
                    <br/>
                    <label htmlFor="entreprise">Entreprise</label>
                    <input type='text'
                            name='entreprise'
                            id='entreprise'
                            title='entreprise'>
                        </input> 
                    <br/>
                    <label htmlFor="objet">objet *</label>
                    <input type='text' name='objet' id='objet' title='objet' required></input> 
                    <br/>
                    <label htmlFor="name">Message *</label>
                    <textarea type='text'
                              maxLength={250}
                              name='message'
                              id='message'
                              title='message'
                              required>
                    </textarea> 
                    <br/>
                    <p>(Les champs dotées d'une " * " sont des champs obligatoires)</p>
                    <button type='submit'>Envoyer</button>
                    

                </form>
            </div>
            <div className='contact__container__mesInfos'>
                <h2>Mes infos</h2>
                <a href='mailto:ladjrafi_zakaria@yahoo.com'><i class="fa-solid fa-envelope"></i>ladjrafi_zakaria@yahoo.com</a>
                <br/>
                <a href='tel:0782479774'><i class="fa-solid fa-phone"></i>+33782479774</a>
                <br/>
                <a href='https://goo.gl/maps/Y9xoEBogH4r2j7iP9' target="__blank"><i class="fa-solid fa-location-dot"></i>2 rue de la Mairie 69340</a>
            </div>
            </div>
        </div>
    );
};

export default Contact;