import React, { useEffect } from "react";
import Card from "../card/Card";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function NetworkList(props) {
  const mode = useSelector((state) => state.ui.darkMode);
  const items = useSelector((state) => state.list.networks);
  return (
    <div className="bg-gray-200  w-[50%] float-left h-full">
      <SearchBar addProvider={props.addProvider} />
      <div
        className={`flex flex-wrap justify-center gap-7 ${
          mode ? "dark:bg-zinc-800" : "bg-gray-200"
        }`}
      >
        {items &&
          items.map((item, key) => {
            return (
              <Card
                key={key}
                name={item.name}
                chainId={item.chainId}
                url={item.url}
                currency={item.nativeCurrency.name}
                item={item}
                provider={props.provider}
              />
            );
          })}
      </div>
    </div>
  );
}
