import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NetworkList from "./network/NetworkList";
const Root = (props) => {
  const navigation = useNavigate();
  return (
    <div className="h-full flex">
      <Outlet />
      <NetworkList addProvider={props.addProvider} provider={props.provider} />
    </div>
  );
};

export default Root;
