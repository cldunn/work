import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { BsX } from "react-icons/bs";
import { BaseIcon } from '../../icons/BaseIcon';

export const AfwTabstrip: React.FC<any> = (props: any): any => {
    const { panes, defaultActiveKey, activeKey, onSelect, onDeleteTab } = props;
    const firstPaneKey = (panes && panes[0] && panes[0].key) || '0';

    return (
        <Tab.Container
            defaultActiveKey={defaultActiveKey}
            activeKey={activeKey}
            onSelect={onSelect}>
            <Nav>
                {panes && panes.length && panes.map(( pane: any, index: number) => (
                    <Nav.Item key={`tab-nav-item-${pane.key || index}`}>
                        <Nav.Link eventKey={pane.key} disabled={pane.isDisabled}>
                            <>
                                {pane.icon ? pane.icon : pane.title}
                                {!!pane.isDeleteEnabled && (
                                    <span onClick={() => { onDeleteTab && onDeleteTab(pane); }}>
                                        <BsX style={{width: '1.5em', height: '1.5em', color: 'black'}}/>
                                    </span>
                                )}
                            </>
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            <Tab.Content>
                {panes && panes.length && panes.map(( pane: any, index: number) => (
                    <Tab.Pane  key={`tab-nav-item-${pane.key || index}`} eventKey={pane.key}>
                        {pane.content}
                    </Tab.Pane>
                ))}
            </Tab.Content>
        </Tab.Container>
    );
};