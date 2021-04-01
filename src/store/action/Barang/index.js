import { SelectQuery, CudQuery } from '@/commons/query';

export const BarangAction = {
    getData,
    Store,
    Delete,
    getDataById,
    resetForm,
    getKategori,
    getPemasok,
    getSatuan,
    setLoading,
    setBarcode
  };

 

  function getData(payload) {
    return async dispatch => {
       dispatch(setLoading(true));
       let params = [];
       let where = "";
       if(payload){
         params.push('%' + payload + '%');
         where = " where nama like ? "
       }
       SelectQuery("SELECT * FROM pelanggan "+where+" ", params).then(res=>{
          dispatch(setData(res));
          dispatch(setLoading(false));
      });
    };
   
  }

  function getDataById(payload) {
    return dispatch => {
       dispatch(setLoading(true));
       SelectQuery("SELECT * FROM pelanggan where id = ?",[payload]).then(res=>{
          dispatch(setDataForm(res[0]));
          dispatch(setLoading(false));
      });
    };
   
  }

  function Delete (payload){
    return async dispatch =>{
        dispatch(setLoading(true))
        await CudQuery(" delete from pelanggan where id = ? ", [payload]);
        dispatch(setLoading(false))
    }
  }

  function Store (payload){
    return async dispatch =>{
        dispatch(setLoading(true))
    
        if(payload.id != ""){
            await CudQuery(" update pelanggan set nama = ?, alamat = ?, telepon = ?, email = ? where id = ? ",[payload.nama,payload.alamat,payload.telepon,payload.email, payload.id]);
        }
        else{
          // insert
          await CudQuery(" insert into pelanggan (nama,alamat,telepon,email) values(?,?,?,?) ", [payload.nama,payload.alamat,payload.telepon,payload.email]);
        }
        
        dispatch(setLoading(false))
    }
  }
  
  function getKategori() {
    return dispatch => {
       SelectQuery("SELECT id as value, kategori as label FROM kategori_barang",[]).then(res=>{
          dispatch(setKategori(res));
      });
    };
   
  }

  function getPemasok() {
    return dispatch => {
       SelectQuery("SELECT id as value, pemasok as label FROM pemasok",[]).then(res=>{
          dispatch(setPemasok(res));
      });
    };
   
  }

  function getSatuan() {
    return dispatch => {
       SelectQuery("SELECT id as value, satuan as label FROM satuan",[]).then(res=>{
          dispatch(setSatuan(res));
      });
    };
   
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

  function setKategori(payload){
    return { type: 'SET_KATEGORI', payload }
  }

  function setPemasok(payload){
    return { type: 'SET_PEMASOK', payload }
  }

  function setSatuan(payload){
    return { type: 'SET_SATUAN', payload }
  }

  function setBarcode(payload){
    return { type: 'SET_BARCODE', payload }
  }
  
  function resetForm(){
    return { type: 'SET_RESET_FORM' }
  }

  