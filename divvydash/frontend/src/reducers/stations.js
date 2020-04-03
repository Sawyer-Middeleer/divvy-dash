import { GET_STATIONS, DELETE_STATION, ADD_STATION } from '../actions/types.js';

const initialState = {
    stations: []
};

export default function(state = initialState, action) {
    switch(action.type){
        case GET_STATIONS:
            return {
                ...state,
                stations: action.payload
            };
        case DELETE_STATION:
            return {
                ...state,
                stations: state.stations.filter(station => station.id !== action.payload)
            };
        case ADD_STATION:
            return {
                ...state,
                stations: [...state.stations, action.payload]
            };
        default:
            return state;
    }
}