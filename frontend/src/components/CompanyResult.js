import React, { useState, useEffect, useRef } from 'react';

export default function CompanyResult({ symbol }) {
    const [company, setCompany] = useState({});
    const apiToken = "cbubv7qad3i96b4mgrlg";
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            const fetchData = async () => {
                const response = await fetch(
                    `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apiToken}`);
                const data = await response.json();
                setCompany(data);
            };

            fetchData();
        }
    }, [symbol]);

    return (
        <>
            <p>{company.name}</p>
            <p>{company.country}</p>
            <p>{company.currency}</p>
            <p>{company.weburl}</p>
        </>
    );
}
