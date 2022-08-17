import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

export default function Search() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Type in the company's symbol</Form.Label>
                {errors.symbol?.type === "required" && <p>This field is required</p>}
                {errors.symbol?.type === "maxLength" && <p>35 is the maximum amount of characters you may use</p>}
                {errors.symbol?.type === "pattern" && <p>You can only input letters and spaces</p>}
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
