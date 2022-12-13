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
    //const redirectUri = 'http://toni-develops.com:8085/sign-in-iframe-callback';
    const redirectUri = 'http%3A%2F%2Ftoni-develops.com%3A8085%2Fsign-in-iframe-callback';
    const appId = '553596269528879';

    const uri = `https://www.facebook.com/v15.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&state=${stateParam}`;

    return (
      <div className={styles.wrapper}>
        <form action={uri}>
          <button type="submit">Sign In With Facebook</button>
        </form>
      </div>)
  }
}

export default SignInIframe;