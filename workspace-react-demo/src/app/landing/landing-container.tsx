import React from "react";
import { Navbar, Form } from 'react-bootstrap';
import { BoxArrowLeft } from "react-bootstrap-icons";

import {
    Link,
    Route,
    useParams,
    useRouteMatch
  } from 'react-router-dom'

import './landing.scss';

const Landing: React.FC = (props: any)  => {
    const handleLogout = (evt: any) => {
        evt.preventDefault();
        console.log('handleLogout', props);
        props.history.push('/login');
    }

    const topics = [
        {
            name: 'React Router',
            id: 'react-router',
            description: 'Declarative, component based routing for React',
            resources: [
            {
                name: 'URL Parameters',
                id: 'url-parameters',
                description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
                url: 'https://ui.dev/react-router-v5-url-parameters/'
            },
            {
                name: 'Programmatically navigate',
                id: 'programmatically-navigate',
                description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
                url: 'https://ui.dev/react-router-v5-programmatically-navigate/'
            }
          ]
        },
        {
          name: 'React.js',
          id: 'reactjs',
          description: 'A JavaScript library for building user interfaces',
          resources: [
            {
              name: 'React Lifecycle Events',
              id: 'react-lifecycle',
              description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
              url: 'https://ui.dev/an-introduction-to-life-cycle-events-in-react-js/'
            },
            {
              name: 'React AHA Moments',
              id: 'react-aha',
              description: "A collection of 'Aha' moments while learning React.",
              url: 'https://ui.dev/react-aha-moments/'
            }
          ]
        },
        {
          name: 'Functional Programming',
          id: 'functional-programming',
          description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
          resources: [
            {
              name: 'Imperative vs Declarative programming',
              id: 'imperative-declarative',
              description: 'A guide to understanding the difference between Imperative and Declarative programming.',
              url: 'https://ui.dev/imperative-vs-declarative-programming/'
            },
            {
              name: 'Building User Interfaces with Pure Functions and Function Composition',
              id: 'fn-composition',
              description: 'A guide to building UI with pure functions and function composition in React',
              url: 'https://ui.dev/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
            }
          ]
        }
    ]

    function Resource () {
        const { topicId, subId } = useParams<{topicId: string, subId: string}>()
      
        const topic = topics.find(({ id }) => id === topicId)
          .resources.find(({ id }) => id === subId)
      
        return (
            <div>
                <h3>{topic.name}</h3>
                <p>{topic.description}</p>
                <a href={topic.url}>More info.</a>
            </div>
        )
    }

    function Topic () {
        const { topicId } = useParams<{topicId: string}>();
        const { url, path } = useRouteMatch();
      
        const topic = topics.find(({ id }) => id === topicId)
      
        return (
            <div>
                <h2>{topic.name}</h2>
                <p>{topic.description}</p>
      
                <ul>
                    {topic.resources.map((sub) => (
                    <li key={sub.id}>
                        <Link to={`${url}/${sub.id}`}>{sub.name}</Link>
                    </li>
                ))}
                </ul>
      
                <hr />
      
                <Route path={`${path}/:subId`}>
                    <Resource />
                </Route>
            </div>
        )
    }

    function Topics () {
        return (
            <div>
                <h1>Topics</h1>
                <ul>
                    {topics.map(({ name, id }) => (
                        <li key={id}>
                            <Link to={`/topics/${id}`}>{name}</Link>
                        </li>
                    ))}
                </ul>
                <hr />
      
                <Route path={`/topics/:topicId`}>
                  <Topic />
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
                <Topics />
            </div>
        </div>
    )
}

export default Landing;