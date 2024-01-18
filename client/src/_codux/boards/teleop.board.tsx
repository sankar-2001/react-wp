import { createBoard } from '@wixc3/react-board';
import { useState } from 'react';
import { Navbar, TabId, Alignment, Tabs, Tab } from '@blueprintjs/core';


export default createBoard({
    name: 'teleop',
    Board: () => {
                                    
        const [navbarTabId, setNavbarTabId] = useState<TabId>('Home');


        const handleNavbarTabChange = (navbarTabId: TabId) =>
            setNavbarTabId(navbarTabId);
                                     return  <div>
<nav><a href="/home">Home</a> | <a href="/projects">Projects<Navbar>
                <Navbar.Group>
                    <Navbar.Heading>
                        Page: <strong>{navbarTabId}</strong>
                    </Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Tabs
                        animate
                        fill
                        id="navbar"
                        onChange={handleNavbarTabChange}
                        selectedTabId={navbarTabId}
                    >
                        <Tab id="Home" title="Home" />
                        <Tab id="Files" title="Files" />
                        <Tab id="Builds" title="Builds" />
                    </Tabs>
                </Navbar.Group>
            </Navbar>
</a> | <a href="/about">About</a> | <a href="/contact">Contact Us</a></nav>
<video controls={ true } src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"></video>
</div>
                                    
                                },
    isSnippet: true,
    environmentProps: {
windowWidth: 1024
}
});
