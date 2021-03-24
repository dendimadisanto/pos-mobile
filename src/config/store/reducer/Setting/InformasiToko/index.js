const InitialState = {
    form:{
        nama_toko : null
    },
    loading:false
}

export function InformasiToko(state = InitialState, action){
    switch(action.type){
        case 'SET_DATA':
            return {
                ...state,
                form: action.payload
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}