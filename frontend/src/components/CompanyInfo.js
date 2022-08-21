import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from "react-router-dom";

export default function CompanyInfo({ symbol }) {
    const { company } = useFetch(symbol);

    return (
        <>
            <Link to="/chart">{company.name}</Link>
            <p>{company.country}</p>
            <p>{company.currency}</p>
            <p>{company.weburl}</p>
        </>
    );
}
