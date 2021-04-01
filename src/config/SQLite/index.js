
import SQLite from 'react-native-sqlite-storage';

export const SQL = {
    connect
}

function connect(){
    global.db = SQLite.openDatabase(
      {
        name: 'pos.db',
        createFromLocation : 1,
      },
      () => { console.log('connect') },
      error => {
        console.log("ERROR: " + error);
      }
    );
    SQLite.DEBUG = true;
}