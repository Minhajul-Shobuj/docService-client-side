import React from 'react';
import { Link } from 'react-router-dom';
import useTests from '../../../Hooks/useTests/useTests';

const Tests = () => {
    const [tests]=useTests();
    const topTests= tests.slice(0,6);
    return (
        <div className='container my-5'>
            <h1>Our Quality Tests</h1>
           <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
                {topTests.map(data=>
                    <div key={data._id} className="col">
                    <div className="card mt-2 rounded">
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <small className='fst-italic fw-bold'>Time: {data.time}</small><br />
                            <small className='fw-bolder'>Price: {data.price}$</small>
                        </div>
                        <Link to={`/test/${data._id}`}><button className='btn btn-success'>Add to Cart</button></Link>
                    </div>
                </div>
                    )}
            </div> 
            <Link to='/courses'>All Tests</Link>
        </div>
    );
};

export default Tests;