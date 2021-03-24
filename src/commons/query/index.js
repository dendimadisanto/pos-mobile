export async function SelectQuery(query, params = []){
    let selectQuery = await ExecuteQuery(query, params);
    let data = [];
    var rows = selectQuery.rows;
    for (let i = 0; i < rows.length; i++) {
        var item = rows.item(i);
        data.push(item)
    }
    return data;
  }

  export async function UpdateQuery(query, params){
    let updateQuery = await ExecuteQuery(query, params);
    return updateQuery;
  }


  ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
      trans.executeSql(sql, params, (trans, results) => {
        resolve(results);
      },
        (error) => {
          reject(error);
        });
    });
  });