import React from 'react';
import Tiles from './Tiles';
import Container from './ContainerModal';

import '../../node_modules/bulma/css/bulma.css';
import '../styles.css'
import styled from 'styled-components'

import meal1 from './images/menu7.jpg';
import meal2 from './images/menu2.jpg';
import meal3 from './images/menu11.jpg';
import meal4 from './images/menu13.jpg';

const Menu = () => {
    const buttonTextMeat = 'Ver';
    let idMeat = 2;
    const onSubmitMeat = (event) => {
      event.preventDefault(event);
    };

    const buttonTextSalad = 'Ver';
    let idSalad = 3;
    const onSubmitSalad = (event) => {
      event.preventDefault(event);
    };

    const buttonTextDesserts = 'Ver';
    let idDesserts = 4;
    const onSubmitDesserts = (event) => {
      event.preventDefault(event);
    };

    const buttonTextCocktails = 'Ver';
    let idCocktails = 5;
    const onSubmitCocktails = (event) => {
      event.preventDefault(event);
    };    

    return (
        <div id="our-menu">
            <div className="row">
                <TitleMainMenu>Nuestro Menú</TitleMainMenu>
            </div>
            <Tiles>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">Cortes</p>
                            <figure className="image is-4by3">
                                <img alt="" src={meal1} />
                            </figure>
                            <div className="columns is-mobile">
                                <div className="column is-half is-offset-one-quarter">
                                    <Container buttonText={buttonTextMeat} onSubmit={onSubmitMeat} id={idMeat} />
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">Ensaladas</p>
                            <figure className="image is-4by3">
                                <img alt="" src={meal2} />
                            </figure>
                            <div className="columns is-mobile">
                                <div className="column is-half is-offset-one-quarter">
                                    <Container buttonText={buttonTextSalad} onSubmit={onSubmitSalad} id={idSalad} />
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">Postres</p>
                            <figure className="image is-4by3">
                                <img alt="" src={meal3} />
                            </figure>
                            <div className="columns is-mobile">
                                <div className="column is-half is-offset-one-quarter">
                                    <Container buttonText={buttonTextDesserts} onSubmit={onSubmitDesserts} id={idDesserts} />
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">Bebidas</p>
                            <figure className="image is-4by3">
                                <img alt="" src={meal4} />
                            </figure>
                            <div className="columns is-mobile">
                                <div className="column is-half is-offset-one-quarter">
                                    <Container buttonText={buttonTextCocktails} onSubmit={onSubmitCocktails} id={idCocktails} />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>  
            </Tiles>
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

export default Menu;
