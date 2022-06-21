import React, { useState} from "react";
import { useSelector  } from 'react-redux';
import { useHistory } from "react-router-dom";

import { Container, Col, Row, Button } from "react-bootstrap";

import SockJsClient from 'react-stomp';

import { selectTime } from '../login/login-slice';

import './home.scss';

const HomeContainer = (): JSX.Element => {
    const time = useSelector(selectTime);
    const history = useHistory();

    const [tm, setTm] = useState(time);
    const [client, setClient] = useState(null);

    const sendMessage = (msg: any) => {
        client.sendMessage('/topic/messages', msg);
    }

    const gotoCookie = () => {
        history.push(`/landing/cookie`);
    }

    return (
        <div className="box center-placed">
            <Container className="home-container">
                <Row className="home-row">
                    <Col xs={12}>
                        <div className="home-time">{tm}</div>
                    </Col>
                </Row>
                <Row className="home-row">
                    <Col xs={12}>
                        <Button className="col home-btn" variant="primary" onClick={gotoCookie}>Submit</Button>
                    </Col>
                </Row>
            </Container>
            <SockJsClient
                url={'http://localhost:8001/react-demo-api/ws'}
                topics={['/topic/messages']}
                onMessage={(data: any) => {
                    setTm(data.time);
                }}
                ref={(client: any) => {
                    setClient(client);
                }}
            />
        </div>
    )
}

export default HomeContainer;