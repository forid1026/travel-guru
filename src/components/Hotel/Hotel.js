import React from 'react';
import './Hotel.css';
const Hotel = (props) => {
    console.log(props);
    const { name, conditions, capacity, ratings, cords, totalRating, price, image, ratingIcon } = props.hotels;
    return (
        <div className="d-flex  text-dark">
            <div className="col-md-8 mb-2">
                <img className="w-100" src={image} alt="" />
            </div>
            <div className="">
                <h6 className="mb-0">{name}</h6>
                <p className="mb-0">
                
                        {capacity.guest} guest, {capacity.rooms} rooms, {capacity.beds} beds,{" "}
                        {capacity.bathrooms} bathrooms
                    
                </p>
                <p className="mb-0">
                    {
                        conditions[0]
                    }
                </p>
                <p className="mb-0">{conditions[1]}</p>
                <p className="d-flex">
                    <small>
                <strong><img src={ratingIcon} className="w-25 icon" alt=""/> <span style={{fontSize: '12px'}}>{ratings} ({totalRating})</span> </strong>
                    </small>
                <strong className="price">${price}/night</strong>
                </p>
            </div>
        </div>
    );
};

export default Hotel;