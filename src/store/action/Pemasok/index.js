import { SelectQuery, CudQuery } from '@/commons/query';

export const PemasokAction = {
    getData,
    Store,
    Delete,
    getDataById,
    resetForm
  };

 

  function getData(payload) {
    return async dispatch => {
       dispatch(setLoading(true));
       let params = [];
       let where = "";
       if(payload){
         params.push('%' + payload + '%');
         where = " where pemasok like ? "
       }
       SelectQuery("SELECT * FROM pemasok "+where+" ", params).then(res=>{
          dispatch(setData(res));
          dispatch(setLoading(false));
      });
    };
   
  }

  function getDataById(payload) {
    return dispatch => {
       dispatch(setLoading(true));
       SelectQuery("SELECT * FROM pemasok where id = ?",[payload]).then(res=>{
          dispatch(setDataForm(res[0]));
          dispatch(setLoading(false));
      });
    };
   
  }

  function Delete (payload){
    return async dispatch =>{
        dispatch(setLoading(true))
        await CudQuery(" delete from pemasok where id = ? ", [payload]);
        dispatch(setLoading(false))
    }
  }

  function Store (payload){
    return async dispatch =>{
        dispatch(setLoading(true))
    
        if(payload.id != ""){
            await CudQuery(" update pemasok set pemasok = ?, alamat = ?, telepon = ?, email = ? where id = ? ",[payload.pemasok,payload.alamat,payload.telepon,payload.email, payload.id]);
        }
        else{
          // insert
          await CudQuery(" insert into pemasok (pemasok,alamat,telepon,email) values(?,?,?,?) ", [payload.pemasok,payload.alamat,payload.telepon,payload.email]);
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

  function setDataForm(payload){
    return { type: 'SET_DATA_FORM', payload }
  }

  function resetForm(){
    return { type: 'SET_RESET_FORM' }
  }

  