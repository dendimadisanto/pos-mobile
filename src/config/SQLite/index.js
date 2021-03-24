
import SQLite from 'react-native-sqlite-storage';

export const SQL = {
    connect
}

function connect(){
    global.db = SQLite.openDatabase(
      {
        name: 'posApp.db',
        createFromLocation : '~pos.db',
      },
      () => { console.log('connect') },
      error => {
        console.log("ERROR: " + error);
      }
    );
    SQLite.DEBUG = true;
}