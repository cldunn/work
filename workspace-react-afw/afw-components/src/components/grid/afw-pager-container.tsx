import React, { useState, useEffect, useRef } from "react";

import Pagination from 'react-bootstrap/Pagination';
import './afw-pager.scss'

export const AfwPager: React.FC<any> = (props: any) => {
    const {pageable, criteria, total, doSubmit} = props;
    
    const [blockState, setBlockState] = useState([
        {active: true},
        {active: false},
        {active: false},
        {active: false},
        {active: false}
    ]);

    const firstPg = 1;
    const [curPos, setCurPos] = useState(0);
    const [blkStart, setBlkStart] = useState(1);
    
    const [lastPg, setLastPg] = useState(0);
    useEffect(() => {
        setLastPg(Math.ceil(total / pageable.pageSz));
    }, [total, pageable.pageSz])

    const pageBlock = (blockState: any) => {
        return blockState.map((block: any, ndx: number) => {
          return <Pagination.Item key={ndx} active={block.active} disabled={blkStart + ndx > lastPg ? true : false}
                  onClick={() => setCurPos(ndx)}>{blkStart + ndx}</Pagination.Item>;
        });
    };

    const firstClicked = () => {
        setBlkStart(1);
        setCurPos(0);
    }

    const prevClicked = () => {
        if (curPos == 0) {
            leftEllipseClicked();
        }
        else {
            setCurPos(curPos - 1);
        }
    }

    const leftEllipseClicked = () => {
        setCurPos(4);
        setBlkStart(blkStart - 5);
    }

    const rightEllipseClicked = () => {
        setCurPos(0);
        setBlkStart(blkStart + 5);
    }

    const nextClicked = () => {
        if ((curPos + 1) % 5 == 0) {
            rightEllipseClicked();
        }
        else {
            setCurPos(curPos + 1);
        }
        
    }

    const lastClicked = () => {
        setCurPos(lastPg % 5 - 1);
        setBlkStart(Math.floor(lastPg / 5) * 5 + 1);
    }

    // technique to avoid executing a useEffect hook upon load
    const initPager = useRef(true);
    useEffect(() => {
        if (initPager.current) {
            initPager.current = false;
            return;
        }
        
        const blockClicked = (blockNdx: any) => {
            setBlockState(blockState => blockState.map((block: any, ndx: number): any => {
                block.active = (ndx == blockNdx) ? true : false;
                return block;
            }));
        };
        
    
        blockClicked(curPos);
        doSubmit({...pageable, page: blkStart + curPos}, criteria);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ pageable, blkStart, curPos, criteria ]);

    return (
        <div style={{width: '100%'}}>
            {total > 0 &&
                <Pagination style={{float: 'right'}}>
                    <Pagination.Item onClick={() => firstClicked()}>{firstPg}</Pagination.Item>
                    <Pagination.Prev disabled={blkStart + curPos == 1} onClick={() => prevClicked()}/>
                    <Pagination.Ellipsis disabled={blkStart == 1} onClick={() => leftEllipseClicked()}/>

                    { pageBlock(blockState) }

                    <Pagination.Ellipsis disabled={blkStart + 5 > lastPg} onClick={() => rightEllipseClicked()}/>
                    <Pagination.Next disabled={blkStart + curPos == lastPg} onClick={() => nextClicked()} />
                    <Pagination.Item onClick={() => lastClicked()}>{lastPg}</Pagination.Item>
                </Pagination>        
            }
        </div>
    )
}
