import React from 'react';
import CompanyGraph from './CompanyGraph';
import CompanyInfo from './CompanyInfo';

export default function CompanyResults({ symbol, dateTo, dateFrom }) {
    return (
        <>
            <CompanyInfo symbol={symbol} />
            <CompanyGraph
                dateTo={dateTo}
                dateFrom={dateFrom}
            />
        </>
    );
}
