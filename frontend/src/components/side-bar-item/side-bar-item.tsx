import './side-bar-item.css';
import React from 'react';
import Classnames from 'classnames';

export interface SideBarItemProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
    active?: boolean;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({ className = '', children}) => (
    <div className={Classnames(className,'sidebaritem') }>{children}</div>
);