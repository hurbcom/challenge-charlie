import React, { useState, useEffect } from 'react';
import GeoService from '../../services/GeoService';
import SearchLocationView from './SearchLocationView';
import _ from 'lodash';

let findOptionsDebounce;

export default ({onLocationChange}) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [locationName, setLocationName] = useState('');
  const [locationOptions, setLocationOptions] = useState(undefined);


  useEffect(() => {
    new GeoService().getCurrentLocation()
    .then(location => setCurrentLocation(location));

    findOptionsDebounce = _.debounce((text) => {
      //recuso tentativas com menos de 3 caracteres
      if(text.trim().length < 3){
        removeOptions();
        return;
      }
      new GeoService().findLocationByName(text).then(cities => {
         showOptions(cities);
      });
    }, 300);
  }, []);

  useEffect(() => {
    if(currentLocation){
      selectOption(currentLocation);
    }
  }, [currentLocation]);

  function selectOption(option){
    const label = formatOptionLabel(option);
    setLocationName(label);
    removeOptions();
    if(onLocationChange){
      onLocationChange(option);
    }
  }

  function removeOptions(){
    setLocationOptions(undefined);
  }

  function showOptions(options){
    setLocationOptions(options);
  }
  
  function onTextChange(text){
    text = text || '';
    setLocationName(text);
    findOptionsDebounce(text);
  }

  function formatOptionLabel(option){
    return option.formatted;
  }

  return (
    <SearchLocationView
      inputText={locationName}
      onInputTextChange={text => onTextChange(text)}
      optionList={locationOptions}
      onOptionSelect={option => selectOption(option)}
      formatOptionLabel={option => formatOptionLabel(option)}
    ></SearchLocationView>
  )
}