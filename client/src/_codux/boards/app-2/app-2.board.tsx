import { createBoard } from '@wixc3/react-board';
import { App2 } from '../../../components/app-2/app-2';

export default createBoard({
    name: 'App2',
    Board: () => <App2 />,
    isSnippet: true,
});
