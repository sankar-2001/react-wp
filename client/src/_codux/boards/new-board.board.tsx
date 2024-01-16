import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'App2',
    Board: () => <div className="App2">
        <form>
            <label>Name</label>
            <input />
        </form></div>,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 422,
        canvasHeight: 274
    }
});
