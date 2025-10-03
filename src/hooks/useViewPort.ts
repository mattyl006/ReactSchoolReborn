import React from "react";

export type IViewPortSize = {
  x: number;
  y: number;
};

const getSize = (): IViewPortSize => ({
  x: window.innerWidth,
  y: window.innerHeight,
});

const useViewPort = () => {
  const [size, setSize] = React.useState(getSize());

  const handleSizeUpdate = () => setSize(getSize());

  React.useEffect(() => {
    window.addEventListener("resize", handleSizeUpdate);

    return () => {
      window.removeEventListener("resize", handleSizeUpdate);
    };
  }, []);

  return size;
};

export default useViewPort;
