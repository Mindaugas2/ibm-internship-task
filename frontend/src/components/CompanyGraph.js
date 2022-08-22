import React from 'react';
import useFetch from '../hooks/useFetch';

export default function CompanyGraph({ symbol, dateFrom, dateTo }) {
    const { chartData } = useFetch(symbol, dateFrom, dateTo);

    // Make sure the array is populated before running any functions
    if (Object.keys(chartData).length !== 0) {
        // Convert the object of arrays into an array of objects
        var result = Object.values(chartData)[0].map((s, i) => {
            let obj = {};
            for (let key in chartData) {
                obj[key] = chartData[key][i];
            }
            return obj;
        });

        // Rename object keys to suitable ones
        result.forEach(function (obj) {
            obj.close = obj.c;
            obj.high = obj.h;
            obj.low = obj.l;
            obj.open = obj.o;
            obj.time = obj.t;
            obj.volume = obj.v;
            delete obj.c;
            delete obj.h;
            delete obj.l;
            delete obj.o;
            delete obj.t;
            delete obj.v;
        });

        console.log(result);
    }

    return (
        <>
            <p>Chart location</p>
        </>
    );
}
