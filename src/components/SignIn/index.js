import React, {Component} from 'react';
import styles from './styles.scss';
import Cookies from 'universal-cookie';


class SignInIframe extends Component {
  

  
  constructor(props) {    
    super(props);
    this.state = {loggedIn: false, email:''};
    this.cookies = new Cookies();
    if(typeof window === 'undefined') return;
    window.addEventListener("message", (event) => { this.userLoggedInCalback(event) }, false);
    this.cookies = new Cookies();    
  }

  userLoggedInCalback(event) {
    //console.log("event:", event);
    if(event.origin !== "https://www.toni-develops.com") {
      //console.log("iframe post failed. event.origin: ", event.origin);
      return    
    }
    if(event.data) {
      console.log('event data: ', event.data);
      this.setState({loggedIn: true, email: event.data});
      const userObject = {
        email : event.data
      }
      const user = JSON.stringify(userObject);
      this.cookies.set('user', user, { path: '/' });
    }
  }
  

  componentDidMount() {  
    if(typeof document !== 'undefined') { 
    }  
  }


  continue() {
    window.location.href = '/diseases';
  }

  render() {

    if(this.state.loggedIn) {
      return (<div><h1>welcome {this.state.email}</h1><button onClick={() => { this.continue()} }>continue</button></div>);
    }
    else {
      return (
        <div className={styles.wrapper}>
          <iframe src="https://www.toni-develops.com/external-files/examples/oauth-google/auth-google.php"></iframe>
        </div>)
      }
    }
}

export default SignInIframe;