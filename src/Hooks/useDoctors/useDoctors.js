import  { useEffect, useState } from 'react';

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://protected-bastion-33246.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    return [doctors]
};

export default useDoctors;