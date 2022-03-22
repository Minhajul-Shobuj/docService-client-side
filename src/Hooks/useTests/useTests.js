import { useEffect, useState } from "react";

const useTests = () => {
    const [tests, setTests] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tests')
            .then(res => res.json())
            .then(data => setTests(data));
    }, []);
    return [tests]
};

export default useTests;