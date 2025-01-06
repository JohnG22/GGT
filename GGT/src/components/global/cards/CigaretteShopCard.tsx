
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// LIBRARIES
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
import { FC, useEffect, useState } from 'react';
import { IonButton } from '@ionic/react';


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// CSS
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
import './CigaretteShopCard.css';


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// TYPES & INTERFACES
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
interface CigaretteShopCardProps {
  data: any;
}


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// CigaretteShopCard - Component
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
const CigaretteShopCard: FC<CigaretteShopCardProps> = ({ data }) => {

  // Variables_____________________________________________________________________________________
  const [tag, setTag] = useState('');

  useEffect(() => {
    if (data.tag) {
      setTag(data.tag);
    }
  }, []);

  // View__________________________________________________________________________________________
  return (
    <div className="cigarette_shop_card">
      <div className='cigarette_card_tag_container'>
        {
        tag === 'doprodej' ? 
        <div className='cigarette_card_tag cigarette_card_tag_grey'>DOPRODEJ</div> 
        : 
        <div className='cigarette_card_tag cigarette_card_tag_green'>
          <img src="gift.png" />EXTRA BODY
        </div> 
        }
      </div>

      <div className="cigarette_card_image">
        <img src={data.image} height={120}/>
      </div>
      
      <div className="cigarette_card_content">

        <div className="cigarette_shop_card_title">
          {data.name}
        </div>
        <div className="cigarette_card_price">
          {data.price} <span>{data.bonus_points ? '/ '+data.bonus_points : ''}</span>
        </div>
        <div className="cigarette_card_code">
          {data.code}
        </div>
        <div className="cigarette_card_available">
          Dostupnost<br />
          <span className='colored_text'>
            skladem &gt; {data.available ? data.available : 0} ks
          </span>
        </div>

        <IonButton 
          className="cigarette_shop_card_button" 
          expand="block"
        >
          <img src="shop_cart.png" />
          Vložit do košíku
        </IonButton>
      </div>
    </div>
  );

};

export default CigaretteShopCard;