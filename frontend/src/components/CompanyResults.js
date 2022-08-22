import React from 'react';
import CompanyGraph from './CompanyGraph';
import CompanyInfo from './CompanyInfo';

export default function CompanyResults({ symbol, dateFrom, dateTo }) {
    return (
        <>
            <CompanyInfo
                symbol={symbol}
            />
            <CompanyGraph
                symbol={symbol}
                dateFrom={dateFrom}
                dateTo={dateTo}
            />
        </>
    );
}
