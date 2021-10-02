import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClock, 
         faMoneyBillAlt,
         faUserTie,
         faUtensils } from '@fortawesome/free-solid-svg-icons';

import { faCcAmex,
         faCcMastercard,
         faCcVisa,
         faSoundcloud } from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';

const Info = () => {
    return (
        <ListItems>
            <ul>
                <li>
                    <span className="icon-text">
                        <span className="icon">
                           <FontAwesomeIcon icon={faUtensils}/>
                        </span>
                        <TextBold>Comida</TextBold>
                    </span>
                    <p>Cortes, Ensaladas, Postres, Bebidas</p>
                </li><br />
                <li>
                    <span className="icon-text">
                        <span className="icon">
                           <FontAwesomeIcon icon={faClock}/>
                        </span>
                        <TextBold>Horario</TextBold>
                    </span>
                    <p>Lunes - Domingo 13:00 a 21:00</p>
                </li><br />
                <li>
                    <span className="icon-text">
                        <span className="icon">
                           <FontAwesomeIcon icon={faCcVisa}/>
                        </span>
                        <span className="icon"> 
                           <FontAwesomeIcon icon={faCcMastercard}/>
                        </span>
                        <TextBold>Formas de Pago</TextBold>
                        <span className="icon">
                           <FontAwesomeIcon icon={faCcAmex}/>
                        </span>
                        <span className="icon">
                           <FontAwesomeIcon icon={faMoneyBillAlt}/>
                        </span>
                    </span>
                    <p>Tarjeta de Crédito, Efectivo</p>
                </li><br />
                <li>
                    <span className="icon-text">
                        <span className="icon">
                           <FontAwesomeIcon icon={faUserTie}/>
                        </span>
                        <TextBold>Vestimenta</TextBold>
                    </span>
                    <p>Formal o Informal según tu preferencia</p>
                </li><br />
                <li>
                    <span className="icon-text">
                        <span className="icon">
                           <FontAwesomeIcon icon={faSoundcloud}/>
                        </span>
                        <TextBold>Música</TextBold>
                    </span>
                    <p>Ambiental</p>
                </li>
            </ul>
        </ListItems>
    );
}

const ListItems = styled.div`
      position: relative;
      padding: 0;
      margin: 0;
      font-size: 12px;
`;

const TextBold = styled.span`
      font-weight: bold;
`;

export default Info;
