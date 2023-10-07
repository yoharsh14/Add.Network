import React, { useEffect } from "react";
import Card from "../card/Card";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function NetworkList(props) {
  const mode = useSelector((state) => state.ui.darkMode);
  const items = useSelector((state) => state.list.networks);
  return (
    <div
      className={`bg-gray-200 w-[60%] h-auto ${
        mode ? "dark:bg-zinc-800" : "bg-gray-200"
      }`}
    >
      <SearchBar addProvider={props.addProvider} />
      <div className={`flex flex-wrap justify-around h-auto`}>
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
