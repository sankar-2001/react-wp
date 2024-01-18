import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'teleop',
    Board: () => <div>
<nav><a href="/home">Home</a> | <a href="/projects">Projects</a> | <a href="/about">About</a> | <a href="/contact">Contact Us</a></nav>
<video controls={ true } src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"></video>
</div>,
    isSnippet: true,
    environmentProps: {
windowWidth: 1024
}
});
