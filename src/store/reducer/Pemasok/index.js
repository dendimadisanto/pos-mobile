const InitialState = {
    form:{
        id:"",
        pemasok:"",
        telepon:"",
        email:"",
        alamat:""
    },
    InitForm:{
        id:"",
        pemasok:"",
        telepon:"",
        email:"",
        alamat:""
    },
    data:[],
    loading:false,
}

export function Pemasok(state = InitialState, action){
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