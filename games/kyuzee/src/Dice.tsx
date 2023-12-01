import React, { CSSProperties, useState } from "react";

const DotStyle: CSSProperties = {
  backgroundColor: "black",
  borderRadius: "50%",
  width: "17%",
  height: "17%",
};

const DiceStyle: CSSProperties = {
  width: "50px",
  height: "50px",
  border: "4px solid", // 굵은 선의 색상 및 스타일 지정
  borderRadius: "8%",
  padding: "20px", // 테두리 주위에 간격을 만들기 위한 패딩 추가 (선택 사항)
  alignItems: "center",
  position: "relative",
  justifyContent: "center",
  cursor: "pointer",
  userSelect: "none",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "3px",
};

const Dot: React.FC<{ style: CSSProperties }> = ({ style }) => {
  return <div style={{ ...DotStyle, ...style }}></div>;
};

export type DiceProps = {};

export type DiceFace = 1 | 2 | 3 | 4 | 5 | 6;

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Dice: React.FC = () => {
  const roll = (): DiceFace => getRandomInt(1, 6) as DiceFace;
  const [face, setFace] = useState<DiceFace>(roll());

  const onClick = () => {
    setFace(() => roll());
  };

  return (
    <>
      <button onClick={onClick} style={DiceStyle}>
        {face}
      </button>
    </>
  );
};
