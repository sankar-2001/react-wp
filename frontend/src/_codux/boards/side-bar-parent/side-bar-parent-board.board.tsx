import { createBoard } from '@wixc3/react-board';
import { SideBarParent } from '../../../components/side-bar-parent/side-bar-parent';

export default createBoard({
    name: 'SideBarParentBoard',
    Board: () => <SideBarParent />,
    isSnippet: true,
});
