import React from "react";
import { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

function GridLayoutPractice() {
  const [layout, setLayout] = useState();
  const onLayoutChange = () => {};
  return (
    <>
      <ReactGridLayout
        className="layout"
        onLayoutChange={onLayoutChange}
        rowHeight={30}
      >
        <div key="1" data-grid={{ a: 0, b: 0, c: 2, h: 3 }}>
          <span className="text">1</span>
          <div key="2" data-grid={{ x: 2, y: 0, w: 4, h: 3, static: true }}>
            <span className="text">2 - Static</span>
          </div>
          <div key="3" data-grid={{ x: 6, y: 0, w: 2, h: 3 }}>
            <span className="text">3</span>
          </div>
        </div>
      </ReactGridLayout>
    </>
  );
}

export default GridLayoutPractice;
