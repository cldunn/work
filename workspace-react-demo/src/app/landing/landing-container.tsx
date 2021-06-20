import React from "react";
import { useParams } from 'react-router-dom'

import { Navbar, Form } from 'react-bootstrap';
import { Tv, BoxArrowLeft } from "react-bootstrap-icons";

import './landing.scss';

const Landing: React.FC = (props: any)  => {
    const { demo } = useParams<{demo: string}>();

    const gotoDemos = (evt: any) => {
        evt.preventDefault();
        props.history.push(`/`);
    }

    const handleLogout = (evt: any) => {
        evt.preventDefault();
        props.history.push(`/login/${demo}`);
    }

    return (
        <div className='landing-container'>
            <Navbar bg="light" variant="light">
                <Form inline>
                    <div>
                        <Tv color="royalblue" size={48} onClick={gotoDemos} />
                        <BoxArrowLeft color="royalblue" size={48} onClick={handleLogout} />
                    </div>
                </Form>
            </Navbar>
            <div>
                <h2>Landing</h2>;
            </div>
        </div>
    )
}

export default Landing; 