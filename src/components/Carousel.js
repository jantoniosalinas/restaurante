import React from 'react';
import { Slide,
         Slider,
         SliderText
       } from './Slide';

import Container from './ContainerModal';

import '../../node_modules/bulma/css/bulma.css';
import '../styles.css';
import styled from 'styled-components';

import img4 from './images/ensalada.jpg';
import img6 from './images/mealTwo.jpg';
import img5 from './images/mealOne.jpg';
import img7 from './images/mealThree.jpg';
import { SendData } from './hook/useSendData';

const Carousel = () => {
    const buttonText = 'Reservar';
    //const [ formData, setFormData ] = useState({})
    const sendData = (datos) => {
        
        console.log(datos);
        SendData(datos).then(result => {
            console.log(result)
        });
    }
    
    return (
        <div>
            <TitleMain>SP´s House</TitleMain>
            <Slide>
                <Slider>
                    <a href="/">
                        <img src={img4} alt=""/>
                    </a>
                    <SliderText textColor="blue">
                        <div className="buttons">
                            <Container buttonText={buttonText} sendForm={sendData} />
                        </div>
                        <p className='subtitle is-4 is-spaced'>Lo mejor de la casa eres tú ...</p>
                    </SliderText>
                </Slider>
                <Slider>
                    <a href="/">
                        <img src={img5} alt=""/>
                    </a>
                    <SliderText>
                        <p>Lo mejor de la casa eres tú ...</p>
                    </SliderText>
                </Slider>
                <Slider>
                    <a href="/">
                        <img src={img6} alt=""/>
                    </a>
                    <SliderText>
                        <p>Lo mejor de la casa eres tú ...</p>
                    </SliderText>
                </Slider>
                <Slider>
                    <a href="/">
                        <img src={img7} alt=""/>
                    </a>
                    <SliderText>
                        <p>Lo mejor de la casa eres tú ...</p>
                    </SliderText>
                </Slider>
            </Slide>
        </div>
    );
}

const TitleMain = styled.p`
    text-align: center;
    color: #0d1543;
    font: italic bold 70px Modern Love;
    text-shadow: -4px 3px 0 #779cdd, -14px 7px 0 #9498b4;
    position: relative;
`;

export default Carousel;
