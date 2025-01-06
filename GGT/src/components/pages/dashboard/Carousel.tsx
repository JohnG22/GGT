
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// LIBRARIES
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
import { FC, useState } from 'react';


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// CSS
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
import './Carousel.css';


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// TYPES & INTERFACES
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
interface CarouselProps {
  title: string;
  children: React.ReactNode;
}


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// Carousel - Component
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
const Carousel: FC<CarouselProps> = ({ title, children }) => {

  // Hooks_________________________________________________________________________________________
  const [isExpanded, setIsExpanded] = useState(true);

  // Handlers______________________________________________________________________________________
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // View__________________________________________________________________________________________
  return (
    <div className="carousel">
      <div className="carousel_padding carousel_header">
        <div className="arrow_left">
          <img src="arrow_right_bold.png" />
        </div>

        <div className="carousel_title">
          {title}
        </div>
        <div className="arrow_right" onClick={handleToggle}>
          <svg 
            className={`toggle_arrow ${!isExpanded ? 'expanded' : ''}`}
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#8D1737" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </div>
      </div>

      <div className={`carousel_content ${isExpanded ? 'expanded' : ''}`}>
        {children}
      </div>
    </div>
  );

};

export default Carousel;