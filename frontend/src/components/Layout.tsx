import React from 'react';
import Routes from "../routes";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import Sidepanel from '@/scenes/global/Sidepanel';

function Layout(props) {
    return (
        <div>
            <div style={{display: "flex"}}>
                <Sidepanel history={props.history}/>
                <div style={{maxWidth: '800px'}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;