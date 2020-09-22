import React from 'react';
import CheckoutRoom from '../CheckoutRoom/CheckoutRoom';
import { LocationData } from '../LocationData';

const Rooms = () => {
   const location =  LocationData;
   console.log(location);
    return (
        <div>
            {
                location.map(location =>
                    <CheckoutRoom
                        location={location}
                    
                    />)
            }
        </div>
    );
};

export default Rooms;