import { IViewPortSize } from "./types";

const useViewPort = () => {
  const size: IViewPortSize = { x: window.innerWidth, y: window.innerHeight };
  return size;
};

export default useViewPort;
