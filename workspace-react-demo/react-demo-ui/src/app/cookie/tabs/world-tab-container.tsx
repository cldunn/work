import React, { Suspense } from 'react';

import { useAppDispatch } from "../../store";

import { addTab } from '../cookie-slice';

import './tab-container.scss';


const WorldTabContainer = () : JSX.Element => {
    // dispatch function from the Redux store derived from store with thunk access
    const dispatch = useAppDispatch();

    const loadComponent = (fileName: string) => {
        // React.laxy() can only import  using string constants
        // const component = React.lazy(() => import('./galaxy-tab-container'));

        const Component = React.lazy(() => import(`./${fileName}`));
        return Component;
    }

    const openGalaxy = (key: string, title: string, componentFileName: string) => {
        const Component = loadComponent(componentFileName);
        dispatch(addTab({
            key: 'galaxy',
            title: 'Galaxy',
            isDeleteEnabled: true,
            content: (
                <Suspense fallback={<div>loading...</div>}>
                    <Component />
                </Suspense>
            )
        }));
    }

    return (
        <div className="parent">
            <div>
                Hello World
            </div>
            <div>
                <a href='#' onClick={() => openGalaxy('galaxy', 'Galaxy', 'galaxy-tab-container')}>Galaxy</a>
            </div>
        </div>
    );
};

export default WorldTabContainer;
    