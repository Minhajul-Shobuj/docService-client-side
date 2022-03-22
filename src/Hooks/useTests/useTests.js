import { useEffect, useState } from "react";

const useTests = () => {
    const [tests, setTests] = useState([]);
    useEffect(() => {
        fetch('https://dashboard.heroku.com/apps/fast-tundra-02981/tests')
            .then(res => res.json())
            .then(data => setTests(data));
    }, []);
    return [tests]
};

export default useTests;