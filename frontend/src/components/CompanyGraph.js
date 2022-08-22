import React, { useEffect, useRef } from 'react';
import useFetch from '../hooks/useFetch';
import { createChart } from 'lightweight-charts';

export default function CompanyGraph({ symbol, dateFrom, dateTo }) {
    const { chartData } = useFetch(symbol, dateFrom, dateTo);
    const chartContainerRef = useRef();
    const isInitialMount = useRef(true);

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
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            const chartOptions = {
                layout: {
                    textColor: 'black',
                    background: {
                        type: 'solid',
                        color: 'white'
                    }
                },
                width: chartContainerRef.current.clientWidth,
                height: 300,
            };

            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            };

            const chart = createChart(chartContainerRef.current, chartOptions);
            chart.timeScale().fitContent();

            const candlestickSeries = chart.addCandlestickSeries({
                upColor: '#26a69a',
                downColor: '#ef5350',
                borderVisible: false,
                wickUpColor: '#26a69a',
                wickDownColor: '#ef5350'
            });
            candlestickSeries.setData(result);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                chart.remove();
            };
        }
    }, [result]);

    return <div ref={chartContainerRef} />;
}
