import React from 'react';
import { hotelsInfo } from '../../fakeData/hotelsInfo';
import Hotel from '../Hotel/Hotel';
import Header from '../Header/Header';
import Map from '../Map/Map';

const CheckoutRoom = () => {

    const hotels = hotelsInfo;


    return (
        <div className='px-5  bg-light text-dark'>
            <Header />
            <hr />
            <div className="container">
                <div className="">
                    <p className="mb-1"> 252 stays  Apr 13-17 3 guest</p>
                    <h4>Stay in Cox's Bazar</h4>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {
                            hotels.map(hotels => (
                                <Hotel
                                    hotels={hotels}
                                    key={hotels.name}
                                />
                            ))
                        }
                    </div>
                    <div className="col-md-6">
                        <Map></Map>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CheckoutRoom;