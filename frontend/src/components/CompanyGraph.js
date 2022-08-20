import React from 'react';

export default function CompanyGraph({ dateTo, dateFrom }) {
    return (
        <div>
            <p>Date from: {dateFrom}</p>
            <p>Date to: {dateTo}</p>
        </div>
    );
}
