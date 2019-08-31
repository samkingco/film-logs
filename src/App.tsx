import React from "react";
import { Router } from "@reach/router";
import { RollsList } from "./routes/RollsList";
import { CreateRoll } from "./routes/CreateRoll";
import { RollDetail } from "./routes/RollDetail";
import { CreateFrame } from "./routes/CreateFrame";
import { FrameDetail } from "./routes/FrameDetail";
import { EditRoll } from "./routes/EditRoll";

const App: React.FC = () => {
  return (
    <Router>
      <RollsList path="/" />
      <CreateRoll path="/new-roll" />
      <RollDetail path="/:rollId" />
      <EditRoll path="/:rollId/edit" />
      <CreateFrame path="/:rollId/new-frame" />
      <FrameDetail path="/:rollId/:frameId" />
    </Router>
  );
};

export default App;
