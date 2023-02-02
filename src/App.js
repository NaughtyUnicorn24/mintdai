import React from "react";
import { McdPlugin, ETH, MDAI } from "@makerdao/dai-plugin-mcd";
import Maker from "@makerdao/dai";

Maker.create("browser").then(async maker => {
  // make sure the current account owns a proxy contract;
  // create it if needed. the proxy contract is used to
  // perform multiple operations in a single transaction
  await maker.service("proxy").ensureProxy();

  // use the "vault manager" service to work with vaults
  const manager = maker.service("mcd:cdpManager");

  // ETH-A is the name of the collateral type; in the future,
  // there could be multiple collateral types for a token with
  // different risk parameters
  const vault = await manager.openLockAndDraw("ETH-A", ETH(50), MDAI(1000));
});

export default function App() {
  return (
    <div className="App">
      <h1>MCD Test</h1>
    </div>
  );
}
