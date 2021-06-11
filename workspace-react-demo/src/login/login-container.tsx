import React from "react";
import { Form, Button } from 'react-bootstrap-v5';

import './login.scss';

const Login: React.FC = (props: any) => {
    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        props.history.push('./landing');
    }

    return (
        <Form className='full centered-content' onSubmit={handleSubmit}>
            <div>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button variant="primary" type="Submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
    
}

export default Login;