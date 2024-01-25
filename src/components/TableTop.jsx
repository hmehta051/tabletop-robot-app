import { useState } from "react";

const Tabletop = () => {
  const [robot, setRobot] = useState({
    x: 0,
    y: 0,
    facing: "NORTH",
  });

  const place = (x, y, facing) => {
    if (
      x >= 0 &&
      x < 500 &&
      y >= 0 &&
      y < 500 &&
      ["NORTH", "EAST", "SOUTH", "WEST"].includes(facing)
    ) {
      setRobot({ x, y, facing });
    }
  };

  const move = () => {
    const { x, y, facing } = robot;
    if (facing === "NORTH" && y < 499) setRobot({ ...robot, y: y + 50 });
    else if (facing === "EAST" && x < 499) setRobot({ ...robot, x: x + 50 });
    else if (facing === "SOUTH" && y > 0) setRobot({ ...robot, y: y - 50 });
    else if (facing === "WEST" && x > 0) setRobot({ ...robot, x: x - 50 });
  };

  const turnLeft = () => {
    const nextFacing = {
      NORTH: "WEST",
      WEST: "SOUTH",
      SOUTH: "EAST",
      EAST: "NORTH",
    };
    setRobot({ ...robot, facing: nextFacing[robot.facing] });
  };

  const turnRight = () => {
    const nextFacing = {
      NORTH: "EAST",
      EAST: "SOUTH",
      SOUTH: "WEST",
      WEST: "NORTH",
    };
    setRobot({ ...robot, facing: nextFacing[robot.facing] });
  };

  const report = () => {
    return `${robot.x}, ${robot.y}, ${robot.facing}`;
  };

  return (
    <>
      <button onClick={() => place(0, 0, "NORTH")}>PLACE</button>
      <button onClick={move}>MOVE</button>
      <button onClick={turnLeft}>LEFT</button>
      <button onClick={turnRight}>RIGHT</button>
      <button onClick={() => alert(report())}>REPORT</button>
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
            left: robot.x,
            top: robot.y,
            width: 50,
            height: 50,
            transform: `rotate(${getRotationAngle(robot.facing)}deg)`,
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

export default Tabletop;
