const InitialState = {
    form:{
        id:"",
        kategori:""
    },
    InitForm:{
        id:"",
        kategori:""
    },
    data:[],
    loading:false,
}

export function Kategori(state = InitialState, action){
    switch(action.type){
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
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