import React, {Component} from 'react';
import styles from './styles.scss';
import Cookies from 'universal-cookie';



class SignInIframe extends Component {

  constructor(props) {    
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
          <a href="/diseases">CONTINUE</a>
      </div>)
  }
}

export default SignInIframe;