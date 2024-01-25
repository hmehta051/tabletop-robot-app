import { useState } from "react";

const TableRobot = () => {
  const [robotPosition, setRobotPosition] = useState({
    x: 0,
    y: 0,
    facing: "NORTH",
  });

  const initialPosition = (x, y, facing) => {
    if (
      x >= 0 &&
      x < 500 &&
      y >= 0 &&
      y < 500 &&
      ["NORTH", "EAST", "SOUTH", "WEST"].includes(facing)
    ) {
      setRobotPosition({ x, y, facing });
    }
  };

  const robotMove = () => {
    const { x, y, facing } = robotPosition;
    if (facing === "NORTH" && y < 499)
      setRobotPosition({ ...robotPosition, y: y + 50 });
    else if (facing === "EAST" && x < 499)
      setRobotPosition({ ...robotPosition, x: x + 50 });
    else if (facing === "SOUTH" && y > 0)
      setRobotPosition({ ...robotPosition, y: y - 50 });
    else if (facing === "WEST" && x > 0)
      setRobotPosition({ ...robotPosition, x: x - 50 });
  };

  const turnLeft = () => {
    const nextFacing = {
      NORTH: "WEST",
      WEST: "SOUTH",
      SOUTH: "EAST",
      EAST: "NORTH",
    };
    setRobotPosition({
      ...robotPosition,
      facing: nextFacing[robotPosition.facing],
    });
  };

  const turnRight = () => {
    const nextFacing = {
      NORTH: "EAST",
      EAST: "SOUTH",
      SOUTH: "WEST",
      WEST: "NORTH",
    };
    setRobotPosition({
      ...robotPosition,
      facing: nextFacing[robotPosition.facing],
    });
  };

  const report = () => {
    return `${robotPosition.x}, ${robotPosition.y}, ${robotPosition.facing}`;
  };

  return (
    <>
      <div className="btn-btn">
        <button onClick={() => initialPosition(0, 0, "NORTH")}>PLACE</button>
        <button onClick={robotMove}>MOVE</button>
        <button onClick={turnLeft}>LEFT</button>
        <button onClick={turnRight}>RIGHT</button>
        <button onClick={() => alert(report())}>REPORT</button>
      </div>
      <div
        style={{
          position: "relative",
          width: 500,
          height: 500,
          border: "1px solid black",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTml2eZvj12lhE7Elrh_yUcUILRa4Kh7MfEvQ&usqp=CAU"
          alt="Toy Robot"
          style={{
            position: "absolute",
            left: robotPosition.x,
            top: robotPosition.y,
            width: 50,
            height: 50,
            transform: `rotate(${getRotationAngle(robotPosition.facing)}deg)`,
          }}
        />
      </div>
    </>
  );
};

const getRotationAngle = (facing) => {
  const angles = { NORTH: 0, EAST: 90, SOUTH: 180, WEST: 270 };
  return angles[facing] || 0;
};

export default TableRobot;
