import React, 
       { useRef,
         useEffect,
         useCallback } from 'react';
import styled from 'styled-components';
 
import { ReactComponent as ArrowLeft } from './images/iconmonstr-arrow-68.svg';
import { ReactComponent as ArrowRight } from './images/iconmonstr-arrow-67.svg';

const Slide = ({
        children,
        controls = false,
        autoplay= true,
        velocity="5000",
        interval="5000"
    }) => {
    const slideshow = useRef(null);
    const intervalSlideshow = useRef(null);
 
    const Next = useCallback(() => {
       if ( slideshow.current.children.length > 0 ) {
            const firstElement = slideshow.current.children[0];

            slideshow.current.style.transition = `${velocity}ms ease-out all`;
            const lenSlide= slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${lenSlide}px)`;

            const transitionSlide = () => {
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                slideshow.current.appendChild(firstElement);
                slideshow.current.removeEventListener('transitionend', transitionSlide);
            }
        
            slideshow.current.addEventListener('transitionend', transitionSlide);
       }
    }, [velocity] );
    
    const Previous = () => {
          if ( slideshow.current.children.length > 0 ) {
               const index = slideshow.current.children.length - 1;
               const lastElement = slideshow.current.children[index];
               slideshow.current.insertBefore(lastElement,slideshow.current.firstChild);
               
               slideshow.current.style.transition = 'none';
               const lenSlide = slideshow.current.children[0].offsetWidth;
               slideshow.current.style.transform = `translateX(-${lenSlide}px)`;

               setTimeout(() => {
                  slideshow.current.style.transition = `${velocity}ms ease-out all`;
                  slideshow.current.style.transform = `translateX(0)`;
               }, 300 );
          }
    }

    useEffect( () => {
        if ( autoplay ) {
             intervalSlideshow.current = setInterval( () => {
                 Next();
             }, interval );
            
            slideshow.current.addEventListener('mouseenter', () => {
                clearInterval(intervalSlideshow.current);
            });
            
            slideshow.current.addEventListener('mouseleave', () => {
                intervalSlideshow.current = setInterval( () => {
                    Next();
                }, interval );
            });
        }
    }, [autoplay, interval, Next] );

    return (
        <MainContainer>
            <SliderContainer ref={slideshow}>
                {children}  
            </SliderContainer>
            { controls &&
              <Controls>
                 <ButtonControl onClick={Next}>
                    <ArrowLeft />
                 </ButtonControl>
                 <ButtonControl rarrow onClick={Previous}>
                    <ArrowRight />
                 </ButtonControl>
              </Controls> }
        </MainContainer>
    );
}

const MainContainer = styled.div`
      position: relative;
`; 

const SliderContainer = styled.div`
      display: flex;
      flex-wrap: nowrap;
`;

const Slider = styled.div`
      min-width: 100%;
      overflow: hidden;
      transition: .3s ease all;
      z-index: 10;
      max-heigth: 400px;
      position: relative;

      img {
          width: 100%;
          vertical-align: top;
      }
`;

const SliderText = styled.div`
      background: ${props => props.backColor ? props.backColor : 'rgba(0,0,0,.3)'};
      color: ${props => props.textColor ? props.textColor : '#fff'};
      width: 100%;
      padding: 10px 60px;
      text-align: center;
      position: absolute;
      bottom: 0;

      @media screen and (max-width: 700px) {
          position: relative;
          background: #000;
      }
`;

const Controls = styled.div`
      position: absolute;
      top: 0;
      z-index: 20;
      width: 100%:
      height: 100%;
      pointer-events: none;
`;

const ButtonControl = styled.button`
      pointer-events: all;
      background: none;
      border: none;
      cursor: pointer;
      outline: none;
      width: 500px;
      height: 180px;
      text-align: center;
      position: relative;
      transition: .3s ease all;
      
      path {
          filter: ${props => props.rarrow ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
      }

      ${props => props.rarrow ? 'right: 0': 'left: 0'}
`;

export { Slide, Slider, SliderText };
