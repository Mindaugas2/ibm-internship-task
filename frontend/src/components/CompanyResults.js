import React from 'react';
import CompanyGraph from './CompanyGraph';
import CompanyInfo from './CompanyInfo';
import { Routes, Route } from 'react-router-dom';

export default function CompanyResults({ symbol, dateFrom, dateTo }) {
    const dateFromHere = dateFrom;
    const dateToHere = dateTo;

    return (
        // <Routes>
        //     <Route
        //         path='/'
        //         element={<CompanyInfo
        //             symbol={symbol}
        //         />}
        //     />
        //     <Route
        //         path='/chart'
        //         element={
        //             <CompanyGraph
        //                 symbol={symbol}
        //                 dateFrom={dateFromHere}
        //                 dateTo={dateToHere}
        //             />}
        //     />
        // </Routes>
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
