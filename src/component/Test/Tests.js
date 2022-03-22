import React from 'react';
import useTests from '../../Hooks/useTests/useTests';
import Test from './Test';

const Tests = () => {
    const [tests]=useTests();
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
                {tests.map(test =>

                    <Test key={test._id} test={test}></Test>
                )}
            </div>
        </div>
    );
};

export default Tests;