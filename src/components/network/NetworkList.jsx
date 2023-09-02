import React from "react";
import Card from "../card/Card";
import SearchBar from "./SearchBar";
export default function NetworkList() {
  return (
    <div className="bg-gray-200">
      <SearchBar  />
      <div className="flex flex-wrap justify-center gap-10">
        {[1, 2, 3, 4, 5, 6, 6, 7, 1,1,2,2,2,2,22,2,2].map(() => {
          return <Card />;
        })}
      </div>
    </div>
  );
}
