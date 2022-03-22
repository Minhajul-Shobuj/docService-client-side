import React from 'react';
import { Link } from 'react-router-dom';
import useDoctors from '../../../Hooks/useDoctors/useDoctors';
import img from '../../../images/male.png'

const Doctor = () => {
 const [doctors]=useDoctors()
    const topDoctors= doctors.slice(0,6);
    return (
        <div className='container my-5'>
            <h1>Our High Profile Doctors</h1>
           <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
                {topDoctors.map(data=>
                    <div key={data._id} className="col">
                    <div className="mt-3 card">
                        <img style={{width:'200px'}} src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <small className='fst-italic fw-bold'> {data.position} course</small><br />
                            <small className='fw-bolder'>Visiting Fee: {data.fees}$</small>
                            <h6 className="card-text">Time:  {data.visitingTime}</h6>
                        </div>
                        <Link to={`/appointment/${data._id}`}><button className='btn btn-success'>Add to cart</button></Link>
                    </div>
                </div>
                    )}
            </div> 
            <Link to='/doctors'>All Doctors</Link>
        </div>
    );
};

export default Doctor;