import React from 'react';
import useDoctors from '../../Hooks/useDoctors/useDoctors';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors]=useDoctors();
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
                {doctors.map(doctor =>

                    <Doctor key={doctor._id} doctor={doctor}></Doctor>
                )}
            </div>
        </div>
    );
};

export default Doctors;