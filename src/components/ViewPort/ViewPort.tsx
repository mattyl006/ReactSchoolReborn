import React from "react";
import useViewPort, { IViewPortSize } from "../../hooks/useViewPort";

type ViewPortProps = { className?: string };

const ViewPort: React.FC<ViewPortProps> = (props) => {
  const { x, y }: IViewPortSize = useViewPort();
  return (
    <div className={props.className}>
      <p>
        X: {x} Y: {y}
      </p>
    </div>
  );
};

export default ViewPort;
