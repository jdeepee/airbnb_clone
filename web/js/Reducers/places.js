import { Map, fromJS } from 'immutable';
import React from 'react';
import {REQUEST_COMPLETED} from 'js/Constants/PlaceConstants';

// Will retun place information otherwise passes to store to rerender.
export default function place(place = null, action = '') {
    switch (action.type) {
        case REQUEST_COMPLETED:
            return action.payload;
        default:
            return place;
    }
}