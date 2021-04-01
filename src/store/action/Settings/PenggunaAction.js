import { SelectQuery, CudQuery } from '@/commons/query';

export const PenggunaAction = {
    getPengguna,
    Store,
    getUserGroup,
    Delete,
    getPenggunaById,
    resetForm
  };

 

  function getPengguna(payload) {
    return dispatch => {
       dispatch(setLoading(true));
       let params = [];
       let where = "";
       if(payload){
         params.push(payload + '%');
         where = " where username like ? "
       }
       SelectQuery("SELECT * FROM userlogin "+where+" ", params).then(res=>{
          dispatch(setData(res));
          dispatch(setLoading(false));
      });
    };
   
  }

  function getPenggunaById(payload) {
    return dispatch => {
       dispatch(setLoading(true));
       SelectQuery("SELECT * FROM userlogin where id = ?",[payload]).then(res=>{
          dispatch(setDataForm(res[0]));
          dispatch(setLoading(false));
      });
    };
   
  }

  function getUserGroup() {
    return dispatch => {
       dispatch(setLoading(true));
       SelectQuery("SELECT id as value, nama as label FROM usergroup",[]).then(res=>{
          dispatch(setUserGroup(res));
          dispatch(setLoading(false));
      });
    };
   
  }

  function setUserGroup(payload){
    return { type: 'SET_USERGROUP', payload }
  }

  function setDataForm(payload){
    return { type: 'SET_DATA_FORM', payload }
  }

  function resetForm(){
    return { type: 'SET_RESET_FORM' }
  }
  
  function Delete (payload){
    return async dispatch =>{
        dispatch(setLoading(true))
        await CudQuery(" delete from userlogin where id = ? ", [payload]);
        dispatch(setLoading(false))
    }
  }

  function Store (payload){
    return async dispatch =>{
        dispatch(setLoading(true))
        const params = [
            payload.username,
            payload.password,
            payload.usergroupid,
            payload.id,
        ];

        if(payload.id != ""){
            await CudQuery(" update userlogin set username = ?, password = ?, usergroupid = ? where id = ? ", params);
        }
        else{
          // insert

          params.splice(0,3); // menghilangkan id
          await CudQuery(" insert into userlogin (username, password, usergroupid) values(?,?,?) ", params);
        }
        
        dispatch(setLoading(false))
    }
  }

  function setData(payload){
    return { type: 'SET_DATA', payload }
  }

  function setLoading(payload){
    return { type: 'SET_LOADING', payload }
  }

  