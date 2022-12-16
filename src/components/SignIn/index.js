import React, {Component} from 'react';
import styles from './styles.scss';
import Cookies from 'universal-cookie';



class SignInIframe extends Component {
  

  constructor(props) {    
    super(props);
  }


  handleGoogleSignIn() {
    console.log("HANDLE GOOGLE SIGN IN !");
  }

  initializeGsi() {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

    if (!window.google) return

    console.log(">>>> initialize google");
    //setGsiScriptLoaded(true)
    window.google.accounts.id.initialize({
      client_id: '989056576533-mtef8cl5is5ogjh3np580ireurns7l5k.apps.googleusercontent.com',
      callback: function() { console.log("$$$$$$$$$$$$$$$$$$$"); },
    })      
  }    

  

  componentDidMount() {  
    if(typeof document !== 'undefined') {
      // don't try anything on server side
      const script = document.createElement("script")
      script.src = "https://accounts.google.com/gsi/client"
      script.onload = () => {
        if (!window.google) return

        console.log(">>>> initialize google");
        //setGsiScriptLoaded(true)
        window.google.accounts.id.initialize({
          client_id: '989056576533-mtef8cl5is5ogjh3np580ireurns7l5k.apps.googleusercontent.com',
          callback: function() { console.log("$$$$$$$$$$$$$$$$$$$"); },
        })          
      }
      script.async = true
      script.id = "google-client-script"
      document.querySelector("body")?.appendChild(script);    
    }  
  }


  render() {
    const stateParam = 'state-param';
    const redirectUri = 'http://localhost:8085/sign-in-callback';
    const appId = '1843912682636144';

    const uri = `https://www.facebook.com/v15.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&state=${stateParam}`;

    return (
      <div className={styles.wrapper}>
          <a href={uri}>Sign In With Facebook</a>

          <div 
            id="g_id_onload" 
            data-client_id="989056576533-mtef8cl5is5ogjh3np580ireurns7l5k.apps.googleusercontent.com"
            data-login_uri="http://localhost/oauth/callback.php" 
            data-auto_prompt="false">
          </div>
            <div 
            class="g_id_signin" 
            data-type="standard" 
            data-size="large" 
            data-theme="outline" 
            data-text="sign_in_with"
            data-shape="rectangular" 
            data-logo_alignment="left">
          </div>
      </div>)
  }
}

export default SignInIframe;