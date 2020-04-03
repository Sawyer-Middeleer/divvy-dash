import axios from 'axios';
import { createMessage } from './messages';

import { GET_STATIONS, DELETE_STATION, ADD_STATION, GET_ERRORS } from './types';

// GET STATIONS
export const getStations = () => dispatch => {
    axios
        .get('/api/dashboard/')
        .then(res => {
            dispatch({
                type: GET_STATIONS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

// DELETE STATION
export const deleteStation = id => dispatch => {
    axios
        .delete(`/api/dashboard/${id}/`)
        .then(res => {
            dispatch(createMessage({ deleteStation: 'Station Deleted' }))
            dispatch({
                type: DELETE_STATION,
                payload: id
            });
        }).catch(err => console.log(err));
}

// ADD STATION
export const addStation = station => dispatch => {
    axios
        .post('/api/dashboard/', station)
        .then(res => {
            dispatch(createMessage({ addStation: 'Station Added' }))
            dispatch({
                type: ADD_STATION,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';