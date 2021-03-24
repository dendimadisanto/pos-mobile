import { SelectQuery, UpdateQuery } from '@/commons/query';

export const PenggunaAction = {
    getPengguna,
    Update,
    getUserGroup
  };

 

  function getPengguna() {
    return dispatch => {
       dispatch(setLoading(true));
       SelectQuery("SELECT * FROM userlogin",[]).then(res=>{
          dispatch(setData(res));
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

  function Update(payload){
    return async dispatch =>{
        dispatch(setLoading(true))
        const params = [
            payload.nama_toko,
            payload.telp,
            payload.alamat,
            payload.email,
            payload.ppn
        ];
        await UpdateQuery(" update informasi_toko set nama_toko = ?, telp = ?, alamat = ?, email = ?, ppn = ? ", params);
        dispatch(setLoading(false))
    }
  }

  function setData(payload){
    return { type: 'SET_DATA', payload }
  }

  function setLoading(payload){
    return { type: 'SET_LOADING', payload }
  }

  