import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

export default function Search() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Type in the company's symbol</Form.Label>
                <Form.Control
                    placeholder="Enter symbol"
                    {...register("symbol",
                        {
                            required: true,
                            maxLength: 20
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
