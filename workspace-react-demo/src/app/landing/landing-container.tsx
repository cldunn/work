import React from "react";
import { Navbar, Form } from 'react-bootstrap';
import { BoxArrowLeft } from "react-bootstrap-icons";

import {
    Link,
    Route,
    useParams
  } from 'react-router-dom'

import './landing.scss';

const Landing: React.FC = (props: any)  => {
    const handleLogout = (evt: any) => {
        evt.preventDefault();
        console.log('handleLogout', props);
        props.history.push('/login');
    }

    const demos = [{
        name: 'Simple Demo',
        id: 'simpleDemo',
        detail: {
            description: 'React UI to Spring API using basic security and JPA persistence using hibernate.'
        }
    }, {
        name: 'Simple Demo using Redis',
        id: 'redisDemo',
        detail: {
            description: 'React UI to Spring API using basic security, Redis cache and muti-tenant (via discriminator) JPA persistence using hibernate.'
        }
    }, {
        name: 'Simple Demo with OAuth2',
        id: 'oauth2Demo',
        detail: {
            description: 'React UI to Spring API using OAuth2 with KeyCloak, Redis cache and muti-tenant (via discriminator) JPA persistence using hibernate.'
        }
    }, {
        name: 'Simple Demo using Cloud Config Server',
        id: 'cloudDemo',
        detail: {
            description: 'React UI to Spring API using OAuth2 with KeyCloak, Cloud configuration server, Redis cache and muti-tenant (via discriminator) JPA persistence using hibernate.'
        }
    }]

    
    function Demo () {
        const { demoId } = useParams<{demoId: string}>();
        
        // use "useRouteMatch" hook to get match info
        // let match = useRouteMatch("/blog/:slug");
      
        const demo = demos.find(({ id }) => id === demoId)
      
        return (
            <div>
                { /* Replace link to=demo route */ }
                <Link to='/login'>{demo.name}</Link>
                <p>{demo.detail.description}</p>
               
                <hr />
      
                { /* Add multiple <Redirect from="demo[id] to="apporpriate page"/> */}
            </div>
        )
    }

    function Demos () {
        return (
            <div>
                <h1>Demos</h1>
                <ul>
                    {demos.map(({ name, id }) => (
                        <li key={id}>
                            <Link to={`/demos/${id}`}>{name}</Link>
                        </li>
                    ))}
                </ul>
                <hr />
      
                <Route path={`/demos/:demoId`}>
                  <Demo />
                </Route>
          </div>
        )
    }

    return (
        <div className='landing-containerr'>
            <Navbar bg="light" variant="light">
                <Form inline>
                    <BoxArrowLeft color="royalblue" size={48} onClick={handleLogout} />
                </Form>
            </Navbar>
            <div>
                <Demos />
            </div>
        </div>
    )
}

export default Landing;