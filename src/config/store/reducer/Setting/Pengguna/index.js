const InitialState = {
    form:{
        id:null,
        username:null,
        password:null,
        usergroup:null
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
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
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