import { types as sdkTypes } from './util/sdkLoader';
import { TRANSITION_REVIEW_2_BY_CUSTOMER } from './util/transaction';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-bern',
    predictionPlace: {
      address: 'Bern, Schweiz',
      bounds: new LatLngBounds(new LatLng(46.99027, 7.49555), new LatLng(46.919033, 7.294318)),
    },
  },
  {
    id: 'default-zurich',
    predictionPlace: {
      address: 'Zürich, Schweiz',
      bounds: new LatLngBounds(new LatLng(47.434662, 8.625334), new LatLng(47.320258, 8.447982)),
    },
  },
  {
    id: 'default-lucerne',
    predictionPlace: {
      address: 'Luzern, Schweiz',
      bounds: new LatLngBounds(new LatLng(47.07497, 8.358228), new LatLng(47.015855, 8.212001)),
    },
  }
];
