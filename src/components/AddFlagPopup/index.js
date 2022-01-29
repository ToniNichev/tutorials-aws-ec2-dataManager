import React from 'react';
import styles from './styles.scss';
import { apiUrl } from '../../utils/getParams';
import EventsManager from  '../../containers/EventsManager';
import {Poster} from '../../utils/Poster';

const addEditFlag = async (editFlagId, closePopup) => {
  const flag = {
    conceptId: parseInt(document.getElementById('addFeatureFlag').querySelector(".conceptId").innerHTML),
    description: document.getElementById('addFeatureFlag').querySelector("input.description").value,
    displayName: document.getElementById('addFeatureFlag').querySelector("input.displayName").value ,
    parentIds: document.getElementById('addFeatureFlag').querySelector("input.parentIds").value,
    childIds: document.getElementById('addFeatureFlag').querySelector("input.childIds").value,
  };
  const searchResult = await Poster(`${apiUrl}/find`,  {'displayName' : flag.displayName} );  


  if(editFlagId === null) {
    // adding new concept
    if(searchResult.length > 0) {
      EventsManager.callEvent('showPopup')(`Concept with name: ${flag.displayName} already exists!`);
    }
    else {    
      const result = await Poster(`${apiUrl}/add`, flag);
      closePopup();
    }
  }
  else {
    // edit existing concept    
    const data = {
      "updateFlag": { _id: editFlagId},
      "newFlagData": flag
    }
    const result = await Poster(`${apiUrl}/update`, data);
    closePopup();
  }
}


const Renderer = ({flags, closePopup, editFlagId}) => {  
  let conceptId = parseInt(flags[flags.length - 1].conceptId) + 1;
  let displayName = '';
  let description = '';
  let parentIds = '';
  let childIds = '';
  let _id = editFlagId !== null ? flags[editFlagId]._id : null;
  if(editFlagId !== null) {
    // edit item mode
    const curentEditedFlag = flags[editFlagId];
    conceptId = curentEditedFlag.conceptId;
    displayName = curentEditedFlag.displayName;
    description = curentEditedFlag.description;
    parentIds = curentEditedFlag.parentIds;
    childIds = curentEditedFlag.childIds;
  }
  return (
    <div id="addFeatureFlag" className={styles.modal}>
      <div className={styles.modalContent}>
        <span onClick={ () => { closePopup() } } className={styles.close}>&times;</span>
        <div className={styles.flagProperties}>
          <p><label>id:</label><label className="conceptId">{conceptId}</label></p>
          <p><label>Display Name</label> <input className="displayName" type="text" defaultValue={displayName} /></p>
          <p><label>Description</label> <input className="description" type="text" defaultValue={description} /></p>
          <p><label>parentIDs</label> <input className="parentIds" type="text" defaultValue={parentIds} /></p>
          <p><label>childIDs</label> <input className="childIds" type="text" defaultValue={childIds} /></p>
          <p><button onClick={ () => { addEditFlag(_id, closePopup) } }>SAVE</button></p>
        </div>          
      </div>      
    </div>
  );
}

export default Renderer;