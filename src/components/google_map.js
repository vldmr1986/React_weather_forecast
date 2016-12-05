/**
 * Created by volodymyrbushma on 11/30/16.
 */
import React, {Component} from 'react';
import {GoogleMapLoader, GoogleMap} from 'react-google-maps';


export default (props) => {
    return (
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}}></div>}
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}></GoogleMap>
            }

        />
    )
};
