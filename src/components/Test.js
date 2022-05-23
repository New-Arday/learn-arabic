// import React from "react";
// import { useState, useRef } from "react";
// function Test() {
//   const dragItem = useRef();
//   const dragOverItem = useRef();
//   const [list, setList] = useState([
//     "a pen",
//     "a book",
//     "a blackboard",
//     "a desk",
//     "an exercise book",
//     "a ruller",
//   ]);

//   const dragStart = (e, position) => {
//     dragItem.current = position;
//     console.log(e.target.innerHTML);
//   };

//   const dragEnter = (e, position) => {
//     dragOverItem.current = position;
//     console.log(e.target.innerHTML);
//   };

//   const drop = (e) => {
//     const copyListItems = [...list];
//     const dragItemContent = copyListItems[dragItem.current];
//     copyListItems.splice(dragItem.current, 1);
//     copyListItems.splice(dragOverItem.current, 0, dragItemContent);
//     dragItem.current = null;
//     dragOverItem.current = null;
//     setList(copyListItems);
//   };

//   return (
//     <>
//       {list &&
//         list.map((item, index) => (
//           <div
//             style={{
//               backgroundColor: "lightblue",
//               margin: "20px 25%",
//               textAlign: "center",
//               fontSize: "40px",
//             }}
//             onDragOver={(e) => e.preventDefault()}
//             onDragStart={(e) => dragStart(e, index)}
//             onDragEnter={(e) => dragEnter(e, index)}
//             onDragEnd={drop}
//             key={index}
//             draggable
//           >
//             {item}
//           </div>
//         ))}
//     </>
//   );
// }

// export default Test;
