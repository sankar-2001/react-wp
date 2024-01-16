import React from 'react';

export interface InputProps {
    className?: string;
    id?: string;
    name?: string;
}

export const Input: React.FC<InputProps> = ({ className = '', id, name }) => (
    <div className={className}>
        <input id={id} name={name} />
    </div>
);