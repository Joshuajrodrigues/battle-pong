import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
const SPEED = 50
const Board = forwardRef((props, ref) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const [windowLimit,setWindowLimit] = useState(0)
  const [location, setLocation] = useState(400);
  //150
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          boardRef.current!.focus();
        },
      };
    },
    []
  );

  useEffect(()=>{
    let windowWidth = window.innerWidth
    let magicNumber = 130;
    setWindowLimit(windowWidth-magicNumber)
    setLocation(0)
  },[])

  return (
    <div
      ref={boardRef}
      onKeyDown={(key) => {
        if (key.code === "KeyD" && location < windowLimit) {
          setLocation(() => location + SPEED);
        } else if (key.code === "KeyA" && location > 0) {
          setLocation(() => location - SPEED);
        }
      }}
      tabIndex={1}
      style={{ left: `${location}` + "px" }}
      className={`
      bg-slate-200 
        absolute 
        rounded-sm 
        bottom-0 
        m-4 
        w-24
        h-2`}
    ></div>
  );
});

export default Board;
