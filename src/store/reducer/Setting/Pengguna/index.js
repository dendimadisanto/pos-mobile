const InitialState = {
    form:{
        id:"",
        username:"",
        password:"",
        usergroupid:""
    },
    InitForm:{
        id:"",
        username:"",
        password:"",
        usergroupid:""
    },
    data:[],
    loading:false,
    usergroupData:null
}

export function Pengguna(state = InitialState, action){
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
        case 'SET_USERGROUP':
            return {
                ...state,
                usergroupData: action.payload
            };
        default:
            return state;
    }
}