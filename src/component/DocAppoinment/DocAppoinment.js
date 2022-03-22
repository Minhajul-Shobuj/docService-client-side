import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useDoctors from '../../Hooks/useDoctors/useDoctors';
import Form from './Form';
import img from '../../images/male.png'

const DocAppoinment = () => {
    const[doctors]=useDoctors()
    let params = useParams();
    const [doctor, setDoctor] = useState({});
    useEffect(() => {
        const id = params.id;
        const singleDoctor = doctors.find(doctor => id === doctor._id);
        setDoctor(singleDoctor);
    }, [doctors, params]);
    return (
        <div className='row mx-2 my-5'>
            <div className='col-lg-6'>
                <Form></Form>
            </div>
            <div className='col-lg-6 mt-2'>
            <div className="card">
                    <img style={{width:'200px'}} src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{doctor?.name}</h5>
                        <small className='fst-italic fw-bold'>{doctor?.position}</small><br />
                        <small className='fw-bolder'>Visiting Fee:{doctor?.fees}</small>
                        <h6 className="card-text">Time:{doctor?.visitingTime}</h6>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default DocAppoinment;