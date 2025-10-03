import React from "react";
import useViewPort from "./useViewPort";
import { IViewPortSize } from "./types";

type ViewPortProps = { className?: string };

const ViewPort: React.FC<ViewPortProps> = (props) => {
  const size: IViewPortSize = useViewPort();
  return (
    <div className={props.className}>
      <p>
        X: {size.x} Y: {size.y}
      </p>
    </div>
  );
};

export default ViewPort;
