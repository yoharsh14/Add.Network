import React from "react";
import About from "../about/About";
import NetworkList from "../network/NetworkList";
export default function Home() {
  return (
    <div className="flex justify-between gap-3 w-[50%] h-full float-left">
      <About />
    </div>
  );
}
