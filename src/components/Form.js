import React, {useState} from 'react';
//import DatePick from './DateTime';
//import TimePick from './TimePicker';
import styled from 'styled-components';
//import { useSendData } from './hook/useSendData'
//import { useGetData } from './hook/useGetData';


import '../../node_modules/bulma/css/bulma.css';
import '../styles.css';

const Form = ({ onSubmit: sendForm,
                children,
                reserved = true,
                meat = false,
                salad = false,
                desserts = false,
                cocktails = false,
                id = 1
                }) => {
    if ( meat === true )
         id = 2;
    if ( salad === true )
         id = 3;
    if ( desserts === true )
         id = 4;
    if ( cocktails === true )
         id = 5;

         const [ formData, setFormData ] = useState({});
         const handleChange = (e) => {
               e.stopPropagation();
               setFormData({
                   ...formData,
                   [e.target.name]: e.target.value,
               });
         }

         const handleClick = (e) => {
               e.preventDefault();
               console.log(formData)
               sendForm(formData)
         }
         
    return (
        <MainContainer>
         {children}
        { reserved && id === 1 &&
        <form>
            <div className="form-group">
                <label htmlFor="firstName">Nombre Completo</label>
                <input className="input" name="firstName" id="firstName" placeholder="Nombre Completo"
                       onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Apellidos</label>
                <input className="input" name="lastName" id="lastName" placeholder="Paterno Materno" 
                       onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Teléfono</label>
                <input className="input" name="phoneNumber" id="phoneNumber" placeholder="2222222222" 
                       onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email"
                       className="input"
                       name="email"
                       id="email"
                       placeholder="nombre@ejemplo.com" 
                       onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="myDate">Fecha de reservación</label>
                <input className="input" name="myDate" id="myDate" placeholder="2021-10-02" 
                       onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="myTime">Hora de reservación</label>
                <input className="input" name="myTime" id="myTime" placeholder="13:00:00" 
                       onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="personNumber">Número de Personas</label><br />
                <input className="input" name="personNumber" id="personNumber" placeholder="2" 
                       onChange={(e) => handleChange(e)} />
            </div><br />
            <div className="form-group">
                <button
                       className="button is-half is-danger"
                       type="button" 
                       onClick={(e) => handleClick(e)}
                >
                Reservar
                </button>
            </div>
        </form>
        }
        
        {
            meat && id === 2 &&
            //<form onSubmit={onSubmit}>
            <form>
                <div className="notification is-info">
                    <p className="title is-3 is-spaced"><strong>CORTES  DE  CARNE</strong></p>
                    <ol>
                        <li>New York</li>
                        <li>Rib-Eye</li>
                        <li>Arrachera</li>
                        <li>Bide de Lomo</li>
                        <li>Medallones de Filete</li>
                        <li>Cabreria</li>
                        <li>Fajitas de Arrechara</li>
                        <li>Churrasco</li>
                        <li>Picaña</li>
                    </ol> 
                    <p><strong>Terminos:</strong> Azul, Rojo o Inglés, Medio, Tres Cuartos, Bien Cocido.</p>
                </div>    
            </form>   
        }
        
        {
            salad && id === 3 &&
            //<form onSubmit={onSubmit}>
            <form>
                <div className="notification is-success">
                    <p className="title is-3 is-spaced"><strong>E N S A L A D A S</strong></p>
                    <ol>
                        <li>Mixta</li>
                        <li>Espinacas</li>
                        <li>César</li>
                        <li>Griega</li>
                        <li>Rústica</li>
                        <li>Ensaladilla Rusa</li>
                        <li>Bariloche</li>
                        <li>Capresse</li>
                        <li>Nordika</li>
                    </ol> 
                    <p><strong>Aderezos:</strong> Naranja, Miel y Mostaza, Italiano y Francés.</p>
                </div>    
            </form>   
        }
        
        {
            desserts && id === 4 &&
            //<form onSubmit={onSubmit}>
            <form>
                <div className="notification is-warning">
                    <p className="title is-3 is-spaced"><strong>P O S T R E S</strong></p>
                    <ol>
                        <li>Tiramisú</li>
                        <li>Sorbete</li>
                        <li>Vesubio</li>
                        <li>Alfajor</li>
                        <li>Crème Brûlèe</li>
                        <li>Flan Napolitano</li>
                        <li>Crepas</li>
                        <li>Fresas cubiertas de chocolate</li>
                        <li>Gelatina<p>Fresa, Limón, Naranja, Piña, Yogurth, Cajeta</p></li>
                    </ol>
                    <p><strong>Cubiertas de chocolate:</strong> oscuro, amargo, semi-amargo, blanco</p>
                </div>    
            </form>   
        }
         {
            cocktails && id === 5 &&
            //<form onSubmit={onSubmit}>
            <form>
                <div className="notification is-link">
                    <p className="title is-3 is-spaced"><strong>B E B I D A S</strong></p>
                    <ol>
                        <li>Zwizzle Gin</li>
                        <li>Zoquete</li>
                        <li>New Orleans</li>
                        <li>Espresso Martini</li>
                        <li>Negroni</li>
                        <li>Aperol Spritz</li>
                        <li>Martini</li>
                        <li>Dry Sack</li>
                        <li>Dubonet</li>
                    </ol>
                    <p><strong>Otras bebidas:</strong> tequilas, rones, brandys, fereces y vermut.</p>
                </div>    
            </form>   
        }
        </MainContainer>
    );
};

const MainContainer = styled.div`
      position: relative;
`; 
/*
<DatePick />
                <TimePick sdataDate={setDataDate} />

<div className="select">
                    <select className="select" name="personNumber" id="personNumber" onChange={(e) => handleChange(e)} value={value} >
                        <option value="2">2 Personas</option>
                        <option value="3">3 Personas</option>
                        <option value="4">4 Personas</option>
                        <option value="5">5 Personas</option>
                        <option value="6">6 Personas</option>
                        <option value="7">7 Personas</option>
                        <option value="8">8 Personas</option>
                        <option value="9">9 Personas</option>
                        <option value="10">+ 10 Personas</option>
                    </select>
                </div>
*/
export { Form };
