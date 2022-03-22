import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/male.png'

const Doctor = ({doctor}) => {
    const{name,position,visitingTime,fees,_id}=doctor;
    return (
        <div>
            <div className="col">
                <div className="card mt-3">
                    <img style={{width:'200px'}} src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <small className='fst-italic fw-bold'>{position}</small><br />
                        <small className='fw-bolder'>Visiting Fee: {fees}$</small>
                        <h6 className="card-text">Time: {visitingTime}</h6>
                    </div>
                    <Link to={`/appointment/${_id}`}><button className='btn btn-success'>Add to Cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;