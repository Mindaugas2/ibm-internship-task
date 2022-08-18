import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import "./Search.scss";

export default function Search() {
    const [symbol, setSymbol] = useState();
    const [company, setCompany] = useState({});
    const apiToken = "cbubv7qad3i96b4mgrlg";
    const isInitialMount = useRef(true);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit'
    });
    const onSubmit = data => setSymbol(data.symbol);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            const fetchData = async () => {
                // const response = await fetch(symbol ?
                //     `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apiToken}`
                //     : `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apiToken}`);
                const response = await fetch(
                    `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apiToken}`);
                const data = await response.json();
                setCompany(data);
            };

            fetchData();
        }
    }, [symbol]);

    console.log(company);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Type in the company's symbol</Form.Label>
                {errors.symbol?.type === "required" &&
                    <p className='TextColor'>This field is required</p>}
                {errors.symbol?.type === "maxLength" &&
                    <p className='TextColor'>35 is the maximum amount of characters you may use</p>}
                {errors.symbol?.type === "pattern" &&
                    <p className='TextColor'>You can only input letters and spaces</p>}
                <Form.Control
                    placeholder="Enter symbol"
                    {...register("symbol",
                        {
                            required: true,
                            maxLength: 35,
                            pattern: /^[a-zA-Z\s]*$/
                        })
                    }
                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
            >
                Submit
            </Button>
        </Form>
    );
}
