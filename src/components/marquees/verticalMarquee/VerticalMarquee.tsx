import React, { useEffect, useState, useRef } from "react";
import './VerticalMarquee.scss';
import classnames from 'classnames';

interface IMarqueeData {
  marqueeData: {
    text: string;
  }
}
export interface VerticalMarqueeProps {
  data: IMarqueeData[];
  label: string;
  rollingWidth?: number;
  borderRadius?: number;
  labelColor?: string;
}

const VerticalMarquee = ({
  data,
  label,
  rollingWidth,
  borderRadius,
  labelColor,
}: VerticalMarqueeProps) => {
  const [top, setTop] = useState(0);
  const dataIndexRef = useRef(0);
  const dataLengthRef = useRef(0);
  const [dataStatus, setDataStatus] = useState<any>([]);
  const marqueeBoxRef = useRef(null);
  const marqueeBoxInterRef = useRef<any>(null);

  useEffect(() => {
    setDataStatus(data);
    dataLengthRef.current = data.length;

    marqueeBoxInterRef.current = setInterval(() => {
      dataIndexRef.current = dataIndexRef.current + 1;

      if (dataIndexRef.current === dataLengthRef.current - 1) {
        setTop(data => data-30);
        setDataStatus((v:any) => {
          let result = [...v, ...data];
          if (v.length > 100) {
            result = [...data];
            setTop(0);
          }
          return result;
        });
        // clearInterval(roll);
        dataLengthRef.current = dataLengthRef.current + data.length;
      } else {
        setTop(data => data-30);
      }
    }, 1000);

    return () => {
      setTop(0);
      setDataStatus(data);
      clearInterval(marqueeBoxInterRef.current);
    };
  }, []);

  useEffect(() => {
    if (!marqueeBoxRef.current) return;
    window.addEventListener("scroll", yScrollEvent);
    return () => {
      window.removeEventListener("scroll", yScrollEvent);
    };
  }, [marqueeBoxRef.current]);

  const yScrollEvent = () => {
    // @ts-ignore
    const scroll = marqueeBoxRef.current.getBoundingClientRect();
    if(scroll.y < 0) {
      setTop(0);
      setDataStatus(data);
      clearInterval(marqueeBoxInterRef.current);
    }
  };
  return (
    <div id="vertical-marquee">
      <div
        className="marquee"
        ref={marqueeBoxRef}
        style={{
          borderRadius: `${borderRadius}px`,
        }}
      >
        <div 
          className="label"
          style={{
            color: `${labelColor}`,
          }}
        >
          {label}
        </div>
        <div
          className="rolling-box"
          style={{ width: `${rollingWidth}px`}}
        >
          <ul
            className="rolling"
            style={{
              transform: `translateY(${top}px)`,
            }}
          >
            {
              dataStatus.map((v:any, i:number) => (
                <li key={`key_${i}`}>{v}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
};

export default VerticalMarquee;