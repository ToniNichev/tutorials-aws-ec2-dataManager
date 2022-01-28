import React from 'react';
import styles from './styles.scss';
import EventsManager from '../../containers/EventsManager';
import GenralPopup from '../GeneralPopup';
import {Poster} from '../../utils/Poster';
import { apiUrl } from '../../utils/getParams';

const deleteFlags = async () => {
  const list = EventsManager.callEvent('getSelectedList')();
  //const result = await Poster(`${apiUrl}/delete`, {'_id': '61f438df0680e3da198d928b'});
  
  for(var index in list) {
    console.log("items for deletion >>>", index);
    const result = await Poster(`${apiUrl}/delete`, {'_id': index});
  }
}


const EditDelete = ({flagEditable, selectItems}) => {  
  if(!flagEditable) {
    return (
      <button onClick={() => { selectItems()} }>EDIT</button>
    );
  }
  else {
    return (
      <div>
        <button className={styles.deleteButton} onClick={() => { deleteFlags()} }>DELETE</button>
        <button onClick={() => { selectItems()} }>CANCEL</button>
      </div>
    );
  }

}

export default EditDelete;