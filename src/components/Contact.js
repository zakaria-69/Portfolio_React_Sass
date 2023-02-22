import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Contact = () => {
    const schema = yup
        .object({
            nom: yup
                .string()
                .max(50)
                .required("Veuillez saisir vôtre nom"),

            prenom: yup
                .string()
                .max(50)
                .required("Veuillez saisir vôtre prénom"),

            email: yup
                .string()
                .email("Veuillez saisir une adresse email valide")
                .max(255)
                .required('Veuillez saisir une adresse email'),

            objet: yup
                .string()
                .max(255)
                .required(`Veuillez saisir l'objet de vôtre requête`),

            message: yup
                .string()
                .max(1000)
                .required(`Veuillez saisir vôtre message`),

        })
        .required();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = () => {
        alert("merci d'avoir rempli nôtre formulaire");
    }

    return (
        <div className='contact__container' id='contact'>
            <h1>Contact</h1>
            <div className='contact__container__fullForm'>
                <div className='contact__container__formContainer'>
                    <form action='*' onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="nom">Nom *</label>
                        <input type='text'
                            name='nom'
                            id='nom'
                            title='nom'
                            {...register('nom')}
                        >
                        </input>
                        {errors.nom && <p id='c-yup'>{errors.nom.message}</p>}
                        <br />
                        <label htmlFor='prenom'>Prénom *</label>
                        <input type="text"
                            name='prenom'
                            id='prenom'
                            title='prenom'
                            {...register('prenom')}
                        >
                        </input>
                        {errors.prenom && <p id='c-yup'>{errors.prenom.message}</p>}
                        <br />
                        <label htmlFor='email'>Email *</label>
                        <input type="email"
                            name='email'
                            id='email'
                            {...register('email')}
                        >
                        </input>
                        {errors.email && <p id='c-yup'>{errors.email.message}</p>}
                        <br />
                        <label htmlFor="entreprise">Entreprise</label>
                        <input type='text'
                            name='entreprise'
                            id='entreprise'
                            title='entreprise'
                            {...register('entreprise')}
                        >
                        </input>
                        {errors.entreprise && <p id='c-yup'>{errors.entreprise.message}</p>}
                        <br />
                        <label htmlFor="objet">objet *</label>
                        <input type='text'
                            name='objet'
                            id='objet'
                            title='objet'
                            {...register('objet')}
                        >
                        </input>
                        {errors.objet && <p id='c-yup'>{errors.objet.message}</p>}
                        <br />
                        <label htmlFor="name">Message *</label>
                        <textarea type='text'
                            maxLength={1000}
                            name='message'
                            id='message'
                            title='message'
                            {...register('message')}
                        >
                        </textarea>
                        {errors.message && <p id='c-yup'>{errors.message.message}</p>}
                        <br />
                        <p>(Les champs dotées d'une " * " sont des champs obligatoires).</p>
                        <button type='submit'>Envoyer</button>
                    </form>
                </div>
                <div className='contact__container__mesInfos'>
                    <h2>Mes infos</h2>
                    <a href='mailto:zak.ladjrafi@gmail.com'><i class="fa-solid fa-envelope"></i>zak.ladjrafi@gmail.com</a>
                    <br />
                    <a href='tel:0782479774'><i class="fa-solid fa-phone"></i>+33782479774</a>
                    <br />
                    <a href='https://goo.gl/maps/Y9xoEBogH4r2j7iP9' target="__blank"><i class="fa-solid fa-location-dot"></i>2 rue de la Mairie 69340</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;