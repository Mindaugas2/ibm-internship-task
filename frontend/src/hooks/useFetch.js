import { useState, useEffect, useRef } from 'react';

export default function useFetch(symbol, dateFrom, dateTo) {
    const [company, setCompany] = useState({});
    const apiToken = "cbubv7qad3i96b4mgrlg";
    const isInitialMount = useRef(true);
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            const fetchData = async () => {
                const response = await fetch(
                    `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apiToken}`
                );
                const data = await response.json();
                setCompany(data);
            };
            fetchData();

            const fetchChartData = async () => {
                const response = await fetch(
                    `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=1&from=${dateFrom}&to=${dateTo}&token=${apiToken}`
                );
                const data = await response.json();
                setChartData(data);
            };
            fetchChartData();
        }
    }, [symbol]);

    return { company, chartData };
}
