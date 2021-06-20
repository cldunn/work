import React from "react";
import { useParams } from 'react-router-dom'

import { Navbar, Form, Button } from 'react-bootstrap';
import { Tv } from "react-bootstrap-icons";

import './login.scss';

const Login: React.FC = (props: any) => {
    const { demo } = useParams<{demo: string}>();

    const gotoDemos = (evt: any) => {
        evt.preventDefault();
        props.history.push(`/`);
    }

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        props.history.push(`/landing/${demo}`);
    }

    return (
        <div className='login-container'>
            <Navbar bg="light" variant="light">
                <Form inline>
                    <div>
                        <Tv color="royalblue" size={48} onClick={gotoDemos} />
                    </div>
                </Form>
            </Navbar>
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
        </div>
    );
    
}

export default Login;