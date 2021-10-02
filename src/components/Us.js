import React from 'react'
import AboutUs from './AboutUs';

import '../../node_modules/bulma/css/bulma.css';
import '../styles.css'
import styled from 'styled-components'

import res1 from './images/restaurant.jpg';
import per1 from './images/personal.jpg';

const Us = () => {
    return (
        <div id="about-us">
            <div className="row">
                <TitleMainMenu>Conocenos</TitleMainMenu>
            </div>
            <AboutUs>
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image">
                                    <img src={res1} alt="Conocenos" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-3">Nosotros</p>
                                <div className="content">
                                Somos una familia dedicada al área restaurantera, donde buscamos siempre
                                crear experiencias únicas. Nuestro objetivo el brindar una satisfacción
                                total a cada uno de nuestros clientes cada vez que nos visitan.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AboutUs>
            <AboutUs>
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image">
                                    <img src={per1} alt="Nuestra Familia" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-3">Nuestra Familia</p>
                                <div className="content">
                                La experiencia en el trato y servicio que tendrás será único e inolvidable.<br />
                                Visítanos y compruébalo.<br />
                                Solo aquí en <strong>SP's House.</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AboutUs>
        </div>  
    );
}

const TitleMainMenu = styled.p`
    text-align: center;
    color: #0d1543;
    font: italic bold 40px Modern Love;
    text-shadow: -4px 3px 0 #779cdd, -14px 7px 0 #9498b4;
    position: relative;
`;

export default Us;
