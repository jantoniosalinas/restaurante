import React from 'react'

import Map from './Map';
import Info from './Info';
import Container from './ContainerModal';

import styled from 'styled-components'
import '../../node_modules/bulma/css/bulma.css';
import '../styles.css'

const Reservation = () => {
    const buttonText = 'Reservar';
    const onSubmit = (event) => {
        event.preventDefault(event);
        
        event.target.reset();
    };

    return (
        <div className="columns">
            <div className="column is-one-third" id='reservation'>
                <TextBoldReserved>Reserva con Nosotros</TextBoldReserved>
                <Container buttonText={buttonText} onSubmit={onSubmit} />
            </div>
            <div className="column">
                <Map />
            </div>
            <div className="column">
                <Info />
            </div>
        </div>
    );
}

const TextBoldReserved = styled.span`
      font-weight: bold;
      color: #3853f0;
      text-align: center;
      width: 0.1rem;
      margin: 0.5rem;
      font-size: 22px;
`;

export default Reservation;
