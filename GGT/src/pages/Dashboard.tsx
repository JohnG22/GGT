
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// LIBRARIES
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
import React from 'react';
import { 
  IonContent,  
  IonPage,  
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
  IonFab,
  IonFabButton
} from '@ionic/react';
import { Route } from 'react-router';

//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// IMPORTS
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

//components_______________________________________________________________________________________
import SalesAgentCard    from '../components/pages/dashboard/SalesAgentCard';
import CigaretteShopCard from '../components/global/cards/CigaretteShopCard';
import WelcomeCard       from '../components/pages/dashboard/WelcomeCard';
import CigaretteCard     from '../components/global/cards/CigaretteCard';
import MainHeader        from '../components/global/headers/MainHeader';
import Carousel          from '../components/pages/dashboard/Carousel';
import Banners           from '../components/pages/dashboard/Banners';

//pages____________________________________________________________________________________________
import BarcodeScanner from './BarcodeScanner';


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// CSS
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
import './Dashboard.css';


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// Dashboard - Page
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
const Dashboard: React.FC = () => {

  const slideData = [
    {
      index: 0,
      src: 'banners/banner.png',
    },
    {
      index: 1,
      src: 'banners/banner.png',
    },
    {
      index: 2,
      src: 'banners/banner.png',
    },
    {
      index: 3,
      src: 'banners/banner.png',
    },
  ];


  // View__________________________________________________________________________________________
  return (
    <div>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/dashboard">
            <IonPage>
              <MainHeader />
              <IonContent>

                {/* Welcome Card */}
                <WelcomeCard username="Uživateli" />

                {/* Sales Agent Card with information */}
                <SalesAgentCard 
                  location="Novoveská 2056/5i Ostrava - Mariánské Hory" 
                  username="Radek Milotínský" 
                  telephone="730 160 215" 
                />

                {/* Content - Recommended */}
                <Carousel title="Doporučujeme" children={
                  <div className='recommended_card'>
                    <CigaretteCard image={'cigarettes/parker_simpson.png'} title={'Parker and Simpson'} />
                    <CigaretteCard image={'cigarettes/camel.png'}          title={'Camel Blue'}         />
                    <CigaretteCard image={'cigarettes/parker_simpson.png'} title={'Parker and Simpson'} />
                    <CigaretteCard image={'cigarettes/camel.png'}          title={'Camel Blue'}         />
                  </div>
                }/>

                {/* Content - Banners */}
                <Carousel title="Bannery" children={ <Banners heading="Example Slider" slides={slideData}  /> }/>

                {/* Content - Top Sales */}
                <Carousel title="Nejprodávanější" children={
                  <div className='top_sale_container'>
                    <CigaretteShopCard 
                      data={
                        {
                          image: 'cigarettes/camel_shorts.jpg',
                          name: 'Camel shorts filters',
                          price: '1 401,95 Kč',
                          bonus_points: '+ 30b.',
                          code: '7835Q147',
                          available: 200,
                          tag: 'doprodej',
                        }
                      } 
                    />
                    
                    <CigaretteShopCard 
                      data={
                        {
                          image: 'cigarettes/marlboro.png',
                          name: 'Marlboro Crafted 30S Gold',
                          price: '1 597,47 Kč',
                          bonus_points: '+ 624b.',
                          code: '1017Q209',
                          available: 186,
                          tag: 'extra_body',
                        }
                      } 
                    />
                  </div>
                } />
              </IonContent>
            </IonPage>
          </Route>
          <Route path="/barcode" component={BarcodeScanner} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" className="custom-tabs" mode="md">
          <IonTabButton tab="home" href="/dashboard">
            <img src="menu_home.png" alt="Home" />
            <IonLabel>Domů</IonLabel>
          </IonTabButton>
          
          <IonTabButton>
            <img src="menu_search.png" alt="Search" />
            <IonLabel>Vyhledávání</IonLabel>
          </IonTabButton>
          
          <IonTabButton>
          </IonTabButton>
          
          <IonTabButton>
            <img src="menu_list.png" alt="List" />
            <IonLabel>Seznam</IonLabel>
          </IonTabButton>
          
          <IonTabButton>
            <img src="menu_cart.png" alt="Cart" />
            <IonLabel>Košík</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

      <IonFab className="qr">
        <IonFabButton href='/barcode'>
          <img src="qr.png" alt="" />
        </IonFabButton>
        Chci<br />skenovat
      </IonFab>
    </div>
  );
};

export default Dashboard;