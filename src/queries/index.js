
import mongoDB  from'../connectors/database/mongodb';

const collectionName = 'feature-flags';

export default {

    findFeatureFlagByName: async (flagName) => {
      const result = await mongoDB.find({ flagName }, collectionName);
      return result;
    },

    
   getFeatureFlags: async (url) => {
    const result = await mongoDB.find({}, collectionName);
    return result;     
   },

   updateFeatureFlag: async (searchObject, newObject) => {
     delete newObject._id;
      await mongoDB.update(searchObject, newObject, collectionName, () => {
        return true;
    });     
   },    

   addFeatureFlag: async (flagData) => {
    mongoDB.add(flagData, collectionName, () => {
      return true;
    });     
   }, 

   deleteFlag:  async (flagData) => {
    mongoDB.deleteFlag(flagData._id, collectionName, () => {
      return true;
    });     
   }, 

   dropdb: async () => {
    const result = mongoDB.dropDB();
    return result;
   },

   setup: async () => {
     mongoDB.dropDB();
     const obj = [
      {
        "conceptId" : 1,
        "displayName": "Diagnosis",
        "description": "Entry domain",
        "parentIds": "1",
        "childIds": "2",
        "alternateNames": ""
      },
      {
        "conceptId" : 2,
        "displayName": "Disease of Nervous System",
        "description": "Diseases targeting the nervous system",
        "parentIds": "1",
        "childIds": "4",
        "alternateNames": ""
      },
      {
        "conceptId" : 3,
        "displayName": "Disease of Eye",
        "description": "Diseases targeting the eye",
        "parentIds": "1",
        "childIds": "2,3",
        "alternateNames": ""
      },
      {
        "conceptId" : 4,
        "displayName": "Multiple Sclerosis (MS)",
        "description": "Multiple Sclerosis",
        "parentIds": "2,8",
        "childIds": "5,6,7",
        "alternateNames": "MS,name1,name2"
      }          
     ]
    mongoDB.add(obj, collectionName, () => {}); 
   }   

}
