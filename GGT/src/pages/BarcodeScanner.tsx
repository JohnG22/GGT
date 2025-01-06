
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// LIBRARIES
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

import React, { FC } from 'react';
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
// CSS
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// TYPES & INTERFACES
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
interface BarcodeScannerProps {
}


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// BarcodeScanner - Page
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
const BarcodeScanner: FC<BarcodeScannerProps> = () => {


  // View__________________________________________________________________________________________
  return (
    <div>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/barcode">
            <IonPage>
              <IonContent>

                {/* BARCODE SCANNER */}

              </IonContent>
            </IonPage>
          </Route>
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

export default BarcodeScanner;