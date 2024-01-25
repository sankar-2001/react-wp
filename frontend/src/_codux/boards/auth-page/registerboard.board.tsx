import { createBoard } from "@wixc3/react-board";
import AuthPage from "../../../scenes/AuthPage";

export default createBoard({
  name: "registerboard",
  Board: () => <AuthPage />,
  isSnippet: true,
  environmentProps: {
    canvasWidth: 1239,
    canvasHeight: 1862,
    windowHeight: 1264,
    windowWidth: 1024,
  },
});
