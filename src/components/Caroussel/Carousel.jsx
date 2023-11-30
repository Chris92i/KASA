import './style.scss'
import { useState } from 'react'
import Arrow from '../../assets/arrow.svg'


const Carousel = ({ slides = [] }) => {
  const [index, setIndex] = useState(0);
  
    const goNext = () => {
      setIndex((oldIndex) => {
        let newIndex = oldIndex + 1;
        if (newIndex > slides.length - 1) {
          newIndex = 0;
        }
        return newIndex;
      });
    };
  
    const goPrev = () => {
      setIndex((oldIndex) => {
        let newIndex = oldIndex - 1;
        if (newIndex < 0) {
          newIndex = slides.length - 1;
        }
        return newIndex;
      });
    };
  
      return (
        
        <div className='carousel-container'>
            {
              slides.length>1 && (
              <>
              <button onClick={goPrev}><img className='chevron_avant' src={Arrow}/></button>
              <span>{index +1}/{slides.length}</span>
              <button onClick={goNext}><img className='chevron_arriere' src= {Arrow}/></button>
              </>
              )
            }
            {slides.length > 0 && <img className='imageCarousel' src={slides[index]} alt="Carousel" />}
        </div>
        
    );
};
  export default Carousel;