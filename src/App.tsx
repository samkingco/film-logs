import React from "react";
import { Router } from "@reach/router";
import { ActiveThemeProvider, GlobalStyle, GlobalFonts } from "./components";
import { RollsList } from "./routes/RollsList";
import { CreateRoll } from "./routes/CreateRoll";
import { RollDetail } from "./routes/RollDetail";
import { EditRoll } from "./routes/EditRoll";
import { CreateFrame } from "./routes/CreateFrame";
import { EditFrame } from "./routes/EditFrame";
import { Settings } from "./routes/Settings";

const App: React.FC = () => {
  return (
    <ActiveThemeProvider>
      <GlobalStyle />
      <GlobalFonts />
      <Router>
        <RollsList path="/" />
        <CreateRoll path="/new-roll" />
        <RollDetail path="/:rollId" />
        <EditRoll path="/:rollId/edit" />
        <CreateFrame path="/:rollId/new-frame" />
        <EditFrame path="/:rollId/:frameId/edit" />
        <Settings path="/settings" />
      </Router>
    </ActiveThemeProvider>
  );
};

export default App;
