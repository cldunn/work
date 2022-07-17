import React, { useContext, useState, useEffect }  from "react";

import { useSelector  } from 'react-redux';

import { AfwTabstrip } from "afw-components";
import { GlobalContext, IGlobalContext, IPane } from "afw-components";

import { useAppDispatch } from "../store";
import { pageConfig, selectActiveKey, selectPanes,  selectTab, deleteTab } from './cookie-slice';

import Cookies from 'js-cookie';

import './cookie.scss';
const CookieContainer = (): JSX.Element => {
    /* allow-top-navigation */
    /* allow-popups */

    // dispatch function from the Redux store derived from store with thunk access
    const dispatch = useAppDispatch();
    const gCtx: typeof IGlobalContext = useContext(GlobalContext);

    const activeKey = useSelector(selectActiveKey);
    const panes = useSelector(selectPanes);

    // useState returns a stateful value, and a function to update it. 
    // Flag indicating module is initialized and ready to render 
    const [isInit, setInit] = useState(false);

    const dateFormatter = (dtStr: string) => {
        return dtStr.replace(/-/g, '%2D').replace(/ /g, '%20').replace(/:/, '%3A');
    }

    const customConverter = Cookies.withConverter({
        write: function(value:string) {
            return value;
        }
    })

    useEffect(() => {
        const initPage = async () => {
            const data = await dispatch(pageConfig({url: '/cookie/pageConfig'})).unwrap();
            console.log('pageConfig data: ', data);
            gCtx.addI18n(data.i18n);

            const cookieParams = {
                domain: 'localhost',
                path: '/'
            };

            Cookies.set('USER_NAME', data.userName, cookieParams);
            
            // supress js date manipulation, just write as formatted
            customConverter.set('BIRTH_DATE', dateFormatter(data.birthDateStr), cookieParams);

            setInit(true);
        }

        initPage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSelect = (key: string) => {
        console.log('onSelect: ', key);
        dispatch(selectTab(key));
    }

    const onDeleteTab = (pane: typeof IPane) => {
        console.log('onDeleteTab: ', pane);
        dispatch(deleteTab(pane.key));
    }

    return (isInit && (
        <div className="full">
            <iframe src="https://platform.twitter.com/widgets/tweet_button.html"></iframe>
            <iframe src="http://localhost:3002/hello.html"></iframe>
            <AfwTabstrip panes={panes} activeKey={activeKey} defaultActiveKey={'home'} onSelect={onSelect} onDeleteTab={onDeleteTab} />
        </div>
    ))
}

export default CookieContainer;