import React, {Component} from 'react';
import styles from './styles.scss';
import Cookies from 'universal-cookie';



class SignInIframeCallback extends Component {

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
    const stateParam = '';
    const redirectUri = '';
    const appId = '553596269528879';

    return (
      <div className={styles.wrapper}>
        CALLBACK
      </div>)
  }
}

export default SignInIframeCallback;