import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => <div></div>,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 140,
        canvasHeight: 90
    }
});
