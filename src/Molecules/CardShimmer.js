import React from 'react';

const CardShimmer = ()=> {
    return (
        <div className='card-shimmer'>
            <div className="card-shimmer__wrapper">
                <div className="card-shimmer__city-info animate">
                </div>
                <div className="card-shimmer__content-info">
                    <div className="card-shimmer__icon animate"></div>
                    <div className="card-shimmer__text-box">
                        <div className="card-shimmer__today">
                            <span className="card-shimmer__today-info animate"> </span>
                            <span className="card-shimmer__today-info animate"></span>
                        </div>
                        <div className="card-shimmer__status-box">
                            <span className="card-shimmer__status-info animate"> </span>
                            <span className="card-shimmer__status-air animate"></span>
                            <span className="card-shimmer__status-air animate"> </span>
                            <span className="card-shimmer__status-air animate"></span>
                        </div>
                    </div>
                </div>
                <div className="card-shimmer__box card-shimmer__box--tomorrow">
                    <div className="card-shimmer__box-wrapper">
                        <span className="card-shimmer__box-info animate"> </span>
                        <span className="card-shimmer__box-info animate"></span>
                    </div>
                </div>
                <div className="card-shimmer__box card-shimmer__box--after">
                    <div className="card-shimmer__box-wrapper">
                        <span className="card-shimmer__box-info animate"></span>
                        <span className="card-shimmer__box-info animate"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
 
   


export default CardShimmer;
