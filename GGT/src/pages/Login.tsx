
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// LIBRARIES
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

//React____________________________________________________________________________________________
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//React Ionic______________________________________________________________________________________
import { 
  IonContent, 
  IonPage, 
  IonInput, 
  IonButton, 
  IonText, 
  IonIcon 
} from '@ionic/react';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

//Others___________________________________________________________________________________________


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// IMPORTS
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

//Components_______________________________________________________________________________________

//Contexts_________________________________________________________________________________________

//Methods__________________________________________________________________________________________

//Lang_____________________________________________________________________________________________

//CSS_______________________________________________________________________________________________
import './Login.css';


//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// LOGIN PAGE
//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

const Login: React.FC = () => {

  // Hooks_________________________________________________________________________________________
  const history = useHistory();

  // Variables_____________________________________________________________________________________
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Handle login method___________________________________________________________________________
  const handleLogin = () => {
    console.log('Handle login...');
    history.push('/dashboard');
  };

  // Toggling visibility___________________________________________________________________________
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // View__________________________________________________________________________________________
  return (
    <IonPage>
      <IonContent className="ion-padding login-container" style={{ paddingTop: 'env(safe-area-inset-top)'}}>
        
        {/* Logo */}
        <div className="logo-container">
          <img src="main_logo.png" width={250} height={250} />
        </div>

        {/* Login Title */}
        <h2 className="login-title">Přihlaste se prosím</h2>

        {/* Username Input */}
        <IonInput
          onIonChange={e => setUsername(e.detail.value!)}
          placeholder="Přihlašovací jméno"
          className="login-input"
          value={username}
        />

        {/* Password Input */}
        <div className="password-container">
          <IonInput
            onIonChange={e => setPassword(e.detail.value!)}
            type={showPassword ? 'text' : 'password'}
            className="login-input password-input"
            placeholder="Heslo"
            value={password}
          />
          <IonIcon 
            icon={showPassword ? eyeOffOutline : eyeOutline}
            onClick={togglePasswordVisibility}
            className="password-toggle"
          />
        </div>

        {/* Forgot Password */}
        <div className="forgot-password">
          <IonText color="primary">Zapomněl jsi heslo?</IonText>
        </div>

        {/* Login Button */}
        <IonButton 
          className="login-button"
          onClick={handleLogin}
          expand="block" 
          mode='ios'
        >
          Přihlásit se
        </IonButton>

        {/* Registration Link */}
        <div className="registration-link">
          <IonText>Nejsi členem? </IonText>
          <IonText color="primary" className="register-text">Zaregistruj se!</IonText>
        </div>

        <div className="horizontal-divider"></div>

        {/* Language Selection */}
        <div className="language-selection">
          <IonText>Vybrat jazyk aplikace</IonText>
          <div className="language-flags">
            <img 
              src="cz-round-flag.png" 
              className="flag-icon" 
              height={45} 
              width={45}
            />
            <img 
              src="vie-round-flag.png" 
              className="flag-icon" 
              height={45} 
              width={45} 
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );

};

export default Login;