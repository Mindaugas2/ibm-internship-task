import React from 'react';
import CompanyGraph from './CompanyGraph';
import CompanyInfo from './CompanyInfo';
import { Routes, Route } from 'react-router-dom';

export default function CompanyResults({ symbol, dateTo, dateFrom }) {
    return (
        <Routes>
            <Route path='/' element={<CompanyInfo symbol={symbol} />} />
            <Route path='chart' element={<CompanyGraph
                symol={symbol}
                dateTo={dateTo}
                dateFrom={dateFrom}
            />} />
        </Routes>
    );
}
