import React from "react";
import { Navbar, Form } from 'react-bootstrap';
import { BoxArrowLeft } from "react-bootstrap-icons";


import './landing.scss';

const Landing: React.FC = (props: any)  => {
    const handleLogout = (evt: any) => {
        evt.preventDefault();
        console.log('handleLogout', props);
        props.history.push('./login');
    }

    return (
        <div className='landing-containerr'>
            <Navbar bg="light" variant="light">
                <Form inline>
                    <BoxArrowLeft color="royalblue" size={48} onClick={handleLogout} />
                </Form>
            </Navbar>
            <div>
                <h2>Landing</h2>;
            </div>
        </div>
    )
}

export default Landing;