import React from "react";
import { useSelector  } from 'react-redux'
import { useHistory } from "react-router-dom";

import forge from 'node-forge';
import {Buffer} from 'buffer';

import { Container, Col, Row, Button } from "react-bootstrap";

import { AfwForm, AfwFormInput, required, minLen } from "afw-components";

import { useAppDispatch } from "../store";
import { selectPublicKey, selectForm, getPublicKey, login } from './login-slice';

import './login.scss';

const LoginView = (): JSX.Element => {
    const history = useHistory();

    // dispatch function from the Redux store derived from store with thunk access
    const dispatch = useAppDispatch ();

    const publicKey = useSelector(selectPublicKey);
    const form = useSelector(selectForm);

    // formerly atob()
    // const decodeB64 = (str: string):string => Buffer.from(str, 'base64').toString('binary');

    // formerly btoa()
    const encodeB64 = (str: string):string => Buffer.from(str, 'binary').toString('base64');

    const onSubmit = async (values: any) => {
        console.log('password: ', values.password);

        // contrive a constant password for testing encryption on the server side
        const passowrd = 'MyVoiceIsMyPassword';

        let pk = publicKey;
        if (!pk) {
            try {
                // will return the jsonResp.data via fulfilled action.payload
                const data = await dispatch(getPublicKey({
                    url: '/getPublicKey'
                })).unwrap();
                
                // in order to access any changes in state immeadiately, must directly access store
                // selectors will eventullay change and cause re-render, but not immeadiately
                // pk = store.getState().login.publicKey;

                pk = data.publicKey;
            }
            catch(err) {
                console.error(err)
            }
        }

        const pki = forge.pki;
        const pKey = pki.publicKeyFromPem(pk);
        const _password = pKey.encrypt(passowrd, 'RSA-OAEP', {
            md: forge.md.sha256.create(),
            mgf1: {
                md: forge.md.sha1.create()
            }
        });

        try {
            await dispatch(login({
                url: '/login',
                params: {
                    name: values.name,
                    password: encodeB64(_password)
                }
            })).unwrap();

            history.push(`/landing/home`);
        }
        catch(err) {
            console.error(err)
        }

    };

    return (
        <div className="box center-placed">
            <AfwForm formData={form} onSubmit={onSubmit} >
                <Container className="login-form-container">
                    <Row>
                        <Col xs={12}>
                            <AfwFormInput name='name' type='text'
                                label='Name' placeholder='Name' 
                                validators={[required()]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <AfwFormInput name='password' type='password' 
                                label='Password' placeholder='Password' 
                                validators={[required(), minLen(9)]} />
                        </Col>
                    </Row>
                    <Button className="col" variant="primary" type="submit">Submit</Button>
                </Container>
            </AfwForm>
        </div>
    )
}

export default LoginView;