import React, {Component} from 'react';
import styles from './styles.scss';
import Cookies from 'universal-cookie';



class SignIn extends Component {

  constructor(props) {    
    super(props);
    if(typeof window !== 'undefined') {
      window.redirect = (hubId) => {
        location.href=`/home?data=["${hubId}"]`;
      }
    }
    this.cookies = new Cookies();
    this.state = {
      popupVisible: false,
      popupMessage: '',
      logInPopupVisible: true
    }
  }

  render() {

    return (
      <div className={styles.wrapper}>
        <iframe 
          id="log-in" 
          src="http://toni-develops.com:8085/sign-in-iframe" frameBorder="0">                  
        </iframe>
      </div>)
  }
}

export default SignIn;