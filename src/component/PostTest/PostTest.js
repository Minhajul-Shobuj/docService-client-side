import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useTests from '../../Hooks/useTests/useTests';
import TestForm from './TestForm';

const PostTest = () => {
    const [tests] = useTests();
    let params = useParams();
    const [test, setTest] = useState({});
    useEffect(() => {
        const id = params.id;
        const singelTest = tests.find(course => id === course._id);
        setTest(singelTest);
    }, [tests, params]);
    return (
        <div className='row mx-2 my-5'>
            <div className='col-lg-6'>
                <TestForm></TestForm>
            </div>
            <div className='col-lg-6 mt-2'>
            <div className="card mt-2 rounded">
                        <div className="card-body">
                            <h5 className="card-title">{test?.name}</h5>
                            <small className='fst-italic fw-bold'>Time: {test?.time}</small><br />
                            <small className='fw-bolder'>Price: {test?.price}$</small>
                        </div>
                    </div>
        </div>
        </div>
    );
};

export default PostTest;