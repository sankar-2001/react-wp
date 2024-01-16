import React from 'react';

export interface SubmitButtonProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}


export const SubmitButton: React.FC<SubmitButtonProps> = ({ className = '', children }) => (
    <div className={className}>
        <button>
            <label>Submit</label></button>
    </div>
);