import { combineReducers } from 'redux';

import { InformasiToko } from './Setting/InformasiToko';
import { Pengguna } from './Setting/Pengguna';
import { Kategori } from './Setting/Kategori';
import { Pelanggan } from './Pelanggan';
import { Pemasok } from './Pemasok';
import { Barang } from './Barang';

const rootReducer = combineReducers({
    InformasiToko,
    Pengguna,
    Kategori,
    Pelanggan,
    Pemasok,
    Barang
});

export default rootReducer;