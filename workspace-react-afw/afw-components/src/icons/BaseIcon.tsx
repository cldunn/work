import React from 'react';

export const BaseIcon = (props: any): any => {
    const { width, height, href } = props;

    return (
        <svg className="bi" width="1em" height="1em" fill="currentColor">
            <use xlinkHref="bootstrap-icons.svg#x"></use>
        </svg>
    );
};