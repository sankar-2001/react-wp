import './side-bar-parent.css';
import React from 'react';
import Classnames from 'classnames';

export interface SideBarParentProps {
    className?: string;
    children?: JSX.Element| Array<JSX.Element | string> | string;
}

export const SideBarParent: React.FC<SideBarParentProps> = ({ className = '', children }) => (
    <div className={Classnames(className,'sidebarparent','bg-red-300')}>{children}</div>
);