import { combineReducers } from 'redux';

import { InformasiToko } from '../reducer/Setting/InformasiToko';
import { Pengguna } from '../reducer/Setting/Pengguna';

const rootReducer = combineReducers({
    InformasiToko,
    Pengguna
});

export default rootReducer;