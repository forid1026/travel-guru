import React, { useState } from 'react';
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from 'react-google-maps';
import { hotelsInfo } from '../../fakeData/hotelsInfo';



const HotelsMap = () => {
    const hotels = hotelsInfo;
    const [selectedArea, setSelectedArea] = useState(null);
    return(
        <GoogleMap defaultZoom={10} defaultCenter={{lat: 21.433920, lng:91.987030}}>
            
             {

               hotels.map((hotels) =>(
                <Marker
                    position={{
                        
                        lat: hotels.coordinates.lat,
                        lng: hotels.coordinates.lng
                         
                    }}
                    onClick={() => {
                        setSelectedArea(hotels);
                    }}

                
                />

               ))
            } 

            {
                selectedArea && (
                    <InfoWindow
                    
                    position = {{
                        lat: hotels.coordinates.lat,
                        lng: hotels.coordinates.lng

                    }}
                    >
                        <div>hotel details</div>
                    </InfoWindow>
                )
            }

          
            
        </GoogleMap>
    );
};

const WrappedMap = withScriptjs(withGoogleMap(HotelsMap));




const Map = () => {
    return (
            
            <div className="map">
                <WrappedMap
                
                    googleMapURL ={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCiKxw_Nge09TW8uir9TSnTX-d14ATiIc0`}
                    loadingElement = {<div style={{height: '600px'}}/>}
                    containerElement={<div style={{height: '600px'}}/>}
                    mapElement={<div style={{height: '600px'}}/>}

                />
            </div>
        
    );
};


export default Map;