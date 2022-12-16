import React, {Component} from 'react';
import styles from './styles.scss';
import Cookies from 'universal-cookie';



class SignInIframe extends Component {

  constructor(props) {    
    super(props);
    this.cookies = new Cookies();
    this.state = {
      popupVisible: false,
      popupMessage: '',
      logInPopupVisible: true
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
      </div>)
  }
}

export default SignInIframe;