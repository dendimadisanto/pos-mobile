const InitialState = {
    form:{
        id:"",
        nama:"",
        id_kategori:"",
        id_pemasok:"",
        harga:"",
        keterangan:"",
        id_satuan:"",
        berat:"",
        kode_barang:""

    },
    InitForm:{
        id:"",
        nama:"",
        id_kategori:"",
        id_pemasok:"",
        harga:"",
        keterangan:"",
        id_satuan:"",
        berat:"",
        kode_barang:""
    },
    data:[],
    dataPemasok:[],
    dataKategori:[],
    dataSatuan:[],
    loading:false,
}

export function Barang(state = InitialState, action){
    switch(action.type){
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            };
        case 'SET_KATEGORI':
            return {
                ...state,
                dataKategori: action.payload
            };
        case 'SET_PEMASOK':
            return {
                ...state,
                dataPemasok: action.payload
            };
        case 'SET_SATUAN':
            return {
                ...state,
                dataSatuan: action.payload
            };
        case 'SET_BARCODE':
            state.form.kode_barang = action.payload;
            return {
                ...state,
            };
        case 'SET_DATA_FORM':
            return {
                ...state,
                form: action.payload
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };
        case 'SET_RESET_FORM':
            return {
                ...state,
                form: state.InitForm
            };
        default:
            return state;
    }
}