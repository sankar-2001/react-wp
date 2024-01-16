import React from 'react';

export interface LabelProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string > | string;
    htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({ className = '', children, htmlFor}) => (
    <div className={className}>
        <label htmlFor={htmlFor}>{children}</label>
    </div>
);