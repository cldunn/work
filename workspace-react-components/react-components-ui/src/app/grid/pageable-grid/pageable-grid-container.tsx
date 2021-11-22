import React, { useState, useContext, useEffect } from "react";
import '../../common/splitter/splitter.scss';
import SplitPane from "react-split-pane";

import { useAppDispatch } from "../../store";
import GlobalContext from '../../common/global-content';
import { init, searchItems } from './pageable-grid-slice';

import DataGrid from 'react-data-grid';
import { Button, Col, Form, Row } from "react-bootstrap";
import AfwPager from "../../common/grid/afw-pager-container";

import './pageable-grid.scss';

const PageableGrid: React.FC = ()  => {
    // dispatch function from the Redux store derived from store with thunk access
    const dispatch = useAppDispatch();

    // useContext accepts a context object (returned from React.createContext) 
    // and returns the current context value for that context.
    const gCtx = useContext(GlobalContext);

    const [pageable] = useState({
        page: 1,
		pageSz: 10,
        orderBy: 'itemId',
        orderDir: 'asc'
    });

    const [criteria, setCriteria] = useState({
        description: null
    });
    const [total, setTotal] = useState(0);
    const [gridData, setGridData] = useState([]);

    const columns = [
        { key: 'itemId', name: 'Item Id' },
        { key: 'description', name: 'Description' }
    ];

    // onChange = {(e: any) => { updateCriteria('name', e.target.value)}}
    // note: e.target.getAttribute('name') will return name where name="name"
    const updateCriteria = ( e: any ) => {
        setCriteria((currentValues: any) => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        doSubmit({...pageable, page: 1}, criteria);
    }

    const doSubmit = async (myPageable: any, myCriteria: any) => {
        const data = await dispatch(searchItems({
            url: '/pageable-grid/searchItems',
            params: {
                pageInfo: {
                    page: myPageable.page, 
                    pageSz: myPageable.pageSz,
                    orderBy: myPageable.orderBy,
                    orderDir: myPageable.orderDir
                },
                criteria: myCriteria
            }
        })).unwrap();

        setTotal(data.result.total);
        setGridData(data.result.dtos);
    };
    
    useEffect(() => {
        async function initPage() {
            const data = await dispatch(init()).unwrap();
            gCtx.addI18n(data.i18n);
        }

        initPage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SplitPane split="horizontal" minSize="50%" defaultSize="50%">
            <div className="flex-container" style={{width: '100%', overflow: 'hidden'}} onSubmit={handleSubmit}>
                <Form style={{height:'auto'}}>
                    <Row className="align-items-center">
                        <Form.Label column="sm" sm={1}>
                            <span className="float-end">Description</span>
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control type="text" name="description" placeholder="Description" onChange={updateCriteria}/>
                        </Col>
                        <Col sm={1}>
                            <Button type="submit">Search</Button>
                        </Col>
                    </Row>
                </Form>
                <hr/>
                <DataGrid className="flex-contained" columns={columns} rows={gridData} />
                <AfwPager
                    pageable={pageable}
                    criteria={criteria}
                    total={total}
                    doSubmit={doSubmit}
                />
            </div>
            {/* Navbar with Form for name input value and Search button*/}
            {/* Grid with name, date and currency fields */}
            {/* Bootstrap footer with Pager */}
            <div>Pageable Grid Desciprtion</div>
        </SplitPane>
    )
}

export default PageableGrid;