import React from "react";

import {
    Link,
    Route,
    Switch,
    useParams
  } from 'react-router-dom'

import DemosDescription from "./descriptions/demos-description";
import SimpleMvc from './descriptions/simple-mvc-description';
  
import './demos.scss';

const Demos: React.FC = ()  => {
    const demos = [{
        name: 'Simple Mvc',
        id: 'simpleMvc',
        detail: {
            description: SimpleMvc
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
            <div className="flex-container">
                { /* Replace link to=demo route */ }
                <div style={{marginBottom: '20px'}}>
                    <Link to={`/login/${demo.id}`}>Launch {demo.name}</Link>
                </div>

                {React.createElement(demo.detail.description)}
               
      
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
      
                <Switch>
                    <Route path="/demos/:demoId" component={Demo} />
                    <Route path="/demos" component={DemosDescription} />
                </Switch>
          </div>
        )
    }

    return (
        <div className='demos-container'>
            <div>
                <Demos />
            </div>
        </div>
    )
}

export default Demos;