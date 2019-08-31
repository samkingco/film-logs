import React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { useSelector } from "react-redux";
import { getRolls } from "../store";

interface Props extends RouteComponentProps {}

export const RollsList: React.FC<Props> = () => {
  const rolls = useSelector(getRolls);

  return (
    <>
      <h1>log some of your film shots my dude</h1>
      <p>
        <Link to="/new-roll">Add roll</Link>
      </p>
      {rolls.map(roll => (
        <div key={roll.id}>
          <h2>{roll.stock}</h2>
          {roll.note ? <p>{roll.note}</p> : null}
          <p>ISO: {roll.iso}</p>
          <p>Camera: {roll.camera}</p>
          <p>Created: {roll.createdTime}</p>
          <p>
            Exposed: {roll.exposedFrames}/{roll.maxFrames}
          </p>
          <p>
            <Link to={roll.id}>View roll</Link>
          </p>
        </div>
      ))}
    </>
  );
};
