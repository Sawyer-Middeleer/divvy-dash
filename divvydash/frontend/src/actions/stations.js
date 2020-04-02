import axios from 'axios';

import { GET_STATIONS } from './types';

// GET STATIONS
export const getStations = () => dispatch => {
    axios.get('/api/dashboard/')
        .then(res => {
            dispatch({
                type: GET_STATIONS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}