
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// LIBRARIES
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
import { FC } from 'react';
import { IonHeader } from '@ionic/react';


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// CSS
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
import './MainHeader.css';


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// TYPES & INTERFACES
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
interface MainHeaderProps {}


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// MainHeader - Component
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
const MainHeader: FC<MainHeaderProps> = () => {
  
  // View__________________________________________________________________________________________
  return (
    <IonHeader>
      <div className="header-container">
        <div className="logo-section">
          <img src="main_logo.png" className="logo" />
        </div>

        <div className="middle-section">
          <div className="info-row">
            <img src="FaMoney.png" width={20} />
            <span>+0 Kč</span>
          </div>
          <div className="info-row">
            <img src="FaGift.png" width={20} />
            <span>+12499 b.</span>
          </div>
        </div>

        <div className="right-section">
          <button className="icon-button">
            <img src="cart.png" width={20} />
          </button>
          <button className="icon-button">
            <img src="bell.png" width={24} />
          </button>
          <button className="icon-button">
            <img src="hamburger.png" width={24} />
          </button>
        </div>
      </div>
    </IonHeader>
  );
  
};

export default MainHeader;