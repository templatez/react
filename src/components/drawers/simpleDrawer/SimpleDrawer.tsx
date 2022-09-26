import React, { useEffect, useState } from "react";
import "./SimpleDrawer.scss";
import classnames from "classnames";
interface IDrawer {
  title: string;
  content: string;
}
export interface SimpleDrawerProps {
  size?: number;
  list: IDrawer[];
  fontFamily?: string;
}

const SimpleDrawer = ({ size, list, fontFamily }: SimpleDrawerProps) => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    if (list) {
      const tempArry: any = list.map((v: any, i: number) => ({
        ...v,
        isActive: false,
        id: i,
      }));
      setDataList(tempArry);
    }
  }, []);
  const onIsActiveHandler = (e: any) => {
    const { id } = e.target.closest("li").dataset;
    if (id) {
      const temp: any = dataList.map((v: any) => {
        let result = { ...v };
        if (v.id === Number(id)) {
          result = {
            ...v,
            isActive: !v.isActive,
          };
        }
        return result;
      });
      setDataList(temp);
    }
  };
  return (
    <div className="tzr-simple-drawer" style={{ fontSize: `${size}px` }}>
      <ul className="simple-drawer">
        {dataList.map((v: any, i: number) => (
          <li
            className="list"
            key={`simple-drawer_${i}`}
            onClick={onIsActiveHandler}
            data-id={v.id}
          >
            <h3 className="title">
              <div
                className="left"
                style={
                  fontFamily ? { fontFamily: fontFamily } : { fontFamily: "" }
                }
              >
                {v.title}
              </div>
              <div className="right">
                {v.isActive ? (
                  <span className="up_arrow"></span>
                ) : (
                  <span className="down_arrow"></span>
                )}
              </div>
            </h3>
            <div className={classnames("content", v.isActive && "open")}>
              {v.isActive && v.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleDrawer;
