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
    this.flagConceptIdMap = {};
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

  async getFlags(filterVal = {}) {     
    if(typeof window == 'undefined') {
      // run this only on client side
      return;
    }
    const filterObject = filterVal === {} ? {} : filterVal;
    const result = await Poster(`${apiUrl}/find`, filterObject);

    for(const id in result) {
      const conceptId = result[id].conceptId;
      this.flagConceptIdMap[conceptId] = result[id];
    }

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

  applyFlter(e) {
    const val = { displayName: e.target.value};
    this.getFlags(val);
  }

  getItemsByIds(ids) {
    const idsArr = ids.split(',');
    const result = idsArr.map( (id) => {
      if(id !== "") {
        const validId = typeof this.flagConceptIdMap[id] === 'undefined' ? false : true;
        return <li className={validId ? styles.validId : styles.invalidId}>{ validId ? this.flagConceptIdMap[id].displayName : `Invalid or deleted id: ${id} `}</li>
      }
      else {
        return null
      }
    });

    return <ul>{result}</ul>;
  }

  render() {
    const featureFlags = typeof global.__API_DATA__ !== 'undefined' ? global.__API_DATA__ : window.__API_DATA__;
    for(const id in featureFlags) {
      const conceptId = featureFlags[id].conceptId;
      this.flagConceptIdMap[conceptId] = featureFlags[id];
    }
    return (
      <div className={styles.wrapper}>
          <div className={styles.leftRail}>
            <div className={styles.title}>
              Filter by display name <input type="text" id="search-box" onChange={ (evt) => { this.applyFlter(evt) } }/>
            </div>

              {featureFlags.map( (flag, id) => 
                <div key={flag.flagName} className={styles.flagWrapper}>
                  <BulletPoint flagName={flag._id} status={this.state.flagEditable} />
                    <span className={styles.fieldsWrapper}>
                      <span className={styles.flagName}>{flag.conceptId}</span>
                      <span className={styles.flagName}>{flag.displayName}</span>
                      <span className={styles.flagName}>{flag.description}</span>
                      <div className={styles.flagName}>
                        {this.getItemsByIds(flag.parentIds) }

                        <span className={styles.flagName}>
                        {this.getItemsByIds(flag.childIds) }
                        </span>
                      </div>
                      <span className={styles.flagName}>{flag.alternateNames}</span>
                    </span>
                    <div>
                      <button onClick={ () => { this.editItem(id) }}>Edit</button>
                    </div>
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