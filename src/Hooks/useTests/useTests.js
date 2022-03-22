import { useEffect, useState } from "react";

const useTests = () => {
    const [tests, setTests] = useState([]);
    useEffect(() => {
        fetch('https://protected-bastion-33246.herokuapp.com/tests')
            .then(res => res.json())
            .then(data => setTests(data));
    }, []);
    return [tests]
};

export default useTests;