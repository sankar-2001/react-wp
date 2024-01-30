import { createBoard } from '@wixc3/react-board';
import { SideBarItem } from '../../../components/side-bar-item/side-bar-item';

export default createBoard({
    name: 'SideBarItemBoard',
    Board: () => <SideBarItem />,
    isSnippet: true,
});
