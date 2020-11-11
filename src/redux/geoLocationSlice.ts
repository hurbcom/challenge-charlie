import { createSlice } from '@reduxjs/toolkit';

export const geoLocationSlice = createSlice({
  name: 'geoLocation',
  initialState: {
    latitude: null,
    longitude: null,
    locationName: ''
  },
  reducers: {
    insertGeoLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.locationName = action.payload.locationName;
    },
    insertLocationName: (state, action) => {
      state.locationName = action.payload.locationName;
    },
    deleteGeoLocation: (state) => {
      state.latitude = null;
      state.longitude = null;
    }
  }
});

export const {
  insertGeoLocation,
  insertLocationName,
  deleteGeoLocation
} = geoLocationSlice.actions;

export const selectGeoLocation = (state) => state.geoLocation;

export default geoLocationSlice.reducer;
