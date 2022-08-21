import React from 'react';
import useFetch from '../hooks/useFetch';

export default function CompanyGraph({ symbol, dateTo, dateFrom }) {
    const { data } = useFetch(symbol, dateTo, dateFrom);

    return (
        <div>
            <p>Date from: {dateFrom}</p>
            <p>Date to: {dateTo}</p>
        </div>
    );
}
