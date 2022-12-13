import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import GenralPopup from '../GeneralPopup';
import EventsManager from '../../containers/EventsManager';

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

  return (
    <div>
      <div className={styles.wrapper}>      
        <h2>{ title } { process.env.APP_NAME } </h2>
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