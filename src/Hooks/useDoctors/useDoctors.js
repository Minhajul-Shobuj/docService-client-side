import  { useEffect, useState } from 'react';

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://dashboard.heroku.com/apps/fast-tundra-02981/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    return [doctors]
};

export default useDoctors;