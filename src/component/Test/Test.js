import React from 'react';
import { Link } from 'react-router-dom';


const Test = ({test}) => {
const{name,time,price,_id}=test;
    return (
        <div>
            <div className="col">
                    <div className="card mt-2 rounded">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <small className='fst-italic fw-bold'>Time: {time}</small><br />
                            <small className='fw-bolder'>Price: {price}$</small>
                        </div>
                        <Link to={`/test/${_id}`}><button className='btn btn-success'>Add to Cart</button></Link>
                    </div>
                    </div>
        </div>
    );
};

export default Test;