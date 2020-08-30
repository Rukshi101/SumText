import AsyncStorage from '@react-native-community/async-storage';
export default class LocalDB {
  static storeString = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('Error storing single item', error);
    }
  };

  static storeObject = async (key, value) => {
    try {
      const jsonvalue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonvalue);
    } catch (error) {
      console.log('Error storing object', error);
    }
  };

  static getSingle = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log('Error getting single item', error);
    }
  };

  static getObject = async (key) => {
    try {
      const jsonvalue = await AsyncStorage.getItem(key);
      return jsonvalue != null ? JSON.parse(jsonvalue) : null;
    } catch (error) {
      console.log('Error getting single item', error);
    }
  };

  static removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('Error deleting value', error);
    }
  };

  static clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log('Error clearing entire local store', error);
    }
  };
}
