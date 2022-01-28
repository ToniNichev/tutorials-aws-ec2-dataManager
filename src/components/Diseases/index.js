import React, {Component} from 'react';
import styles from './styles.scss';
import ToggleSwitch from '../ToggleSwitch';
import BulletPoint from '../BulletPoint';
import AddFlagPopup from '../AddFlagPopup';
import {Poster} from '../../utils/Poster';
import EditDelete from '../EditDelete';
import { apiUrl } from '../../utils/getParams';

class Diseases extends Component {
  
  
  constructor(props) {
    super(props);
    this.getFlags();
    this.addFlagVisible = false;
    this.editFlagId = null;
    this.state = {
      addFlagVisible: false,
      flagEditable: false,
    };
  }  

  addFlag(id) {
    this.editFlagId = id;
    this.setState({addFlagVisible: true});
  }

  closePopup() {
    this.setState({addFlagVisible: false});    
    this.getFlags();
  }  

  async getFlags() { 
    // run this only on client side
    if(typeof window == 'undefined')
      return;
    const result = await Poster(`${apiUrl}/get`, {});

    if(JSON.stringify(result) !== JSON.stringify(window.__API_DATA__)) {
      window.__API_DATA__ = result;
      this.forceUpdate();
    } 
  }

  editItem(id) {
    this.addFlag(id);
  }

  selectItems() {
    this.setState({flagEditable: !this.state.flagEditable});     
  }

  render() {
    const featureFlags = typeof global.__API_DATA__ !== 'undefined' ? global.__API_DATA__ : window.__API_DATA__;

    return (
      <div className={styles.wrapper}>
          <div className={styles.leftRail}>
            <div className={styles.title}>FLAGS</div>
              {featureFlags.map( (flag, id) => 
                <div key={flag.flagName} className={styles.flagWrapper}>
                  <BulletPoint flagName={flag._id} status={this.state.flagEditable} />
                    <span onClick={ () => { this.editItem(id) }}>
                      <span className={styles.flagName}>{flag.conceptId}</span>
                      <span className={styles.flagName}>{flag.displayName}</span>
                      <span className={styles.flagName}>{flag.description}</span>
                      <span className={styles.flagName}>{flag.parentIds}</span>
                      <span className={styles.flagName}>{flag.childIds}</span>
                      <span className={styles.flagName}>{flag.alternateNames}</span>
                      <span className={styles.flagValue}><ToggleSwitch featureFlagName={flag.flagName} val={flag.value} /></span>
                    </span>
                </div>
              )}
          </div>      
          <div className={styles.rightRail}>
            <button className={this.state.flagEditable ? styles.addButtonHidden : styles.addButtonVisible } onClick={() => { this.addFlag(null)} }>ADD</button>
            <EditDelete closePopup={ () => {this.closePopup() } } flagEditable={ this.state.flagEditable } selectItems={ () => { this.selectItems() } } />
          </div>
          {this.state.addFlagVisible ? <AddFlagPopup editFlagId={this.editFlagId} flags={featureFlags} closePopup={ () => {this.closePopup() } } /> : null}
      </div>
    );
  }

}

export default Diseases;