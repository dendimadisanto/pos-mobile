import { SelectQuery, UpdateQuery } from '@/commons/query';

export const InformasiTokoAction = {
    getShopInformation,
    Update,
    setForm
  };

 

  function getShopInformation() {
    return dispatch => {
       dispatch(setLoading(true));
       SelectQuery("SELECT * FROM informasi_toko where id=1",[]).then(res=>{
          dispatch(setData(res[0]));
          dispatch(setLoading(false));
      });
    };
   
  }

  function setForm(payload){
    return { type: 'SET_DATA', payload }
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

  