import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import "./SearchField.scss";

export default function Search({ setSymbol, setDateFrom, setDateTo }) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit'
    });
    const onSubmit = data => {
        setSymbol(data.symbol);
        // Convert date string to UNIX time format
        setDateFrom(parseInt((new Date(data.dateFrom).getTime() / 1000).toFixed(0)));
        setDateTo(parseInt((new Date(data.dateTo).getTime() / 1000).toFixed(0)));
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Type in a company's symbol</Form.Label>
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

            <Form.Group className="mb-3">
                <Form.Label>Date range for stock data</Form.Label>
                <Form.Control
                    type="date"
                    {...register("dateFrom",
                        {
                            required: true
                        })
                    }
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="date"
                    {...register("dateTo",
                        {
                            required: true
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
