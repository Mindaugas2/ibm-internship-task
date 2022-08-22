import React from 'react';
import useFetch from '../hooks/useFetch';

export default function CompanyInfo({ symbol }) {
    const { company } = useFetch(symbol);

    return (
        <>
            <p>{company.name}</p>
            <p>{company.country}</p>
            <p>{company.currency}</p>
            <p>{company.weburl}</p>
        </>
    );
}
