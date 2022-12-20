import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import GenralPopup from '../GeneralPopup';
import EventsManager from '../../containers/EventsManager';
import Cookies from 'universal-cookie';

let selectedFlagsList = [];

const getSelectedList = () => {
  return selectedFlagsList;
}

const setSelectedList = (id) => {
  selectedFlagsList[id] = true;
}

const unsetSelectedList = (id) => {
  delete selectedFlagsList[id];
}

EventsManager.registerEvent('getSelectedList' ,getSelectedList);
EventsManager.registerEvent('setSelectedList' ,setSelectedList);
EventsManager.registerEvent('unsetSelectedList' ,unsetSelectedList);


const Header = ( {title} ) => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
});
  
const logOut = () => {
  const cookies = new Cookies();
  cookies.remove('user');  
  window.location.href = '/diseases';
}

return (
  <div>
    <div className={styles.wrapper}>
      <div className={styles.hederTitle}>
        <div>
          <h2>{ title } { process.env.APP_NAME } </h2>
        </div>     
        <div>
          <button onClick={() => { logOut()} }>Log Out</button>
        </div>
      </div>
      <ul>
        <li><Link to='/diseases'>DISEASES</Link></li>
        <li><Link to='/settings'>SETTINGS</Link></li>
      </ul>
    </div>
    <GenralPopup showPopup={false} />
  </div>
  );
}

export default Header;