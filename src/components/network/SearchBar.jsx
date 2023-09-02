import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
export default function SearchBar() {
  return (
    <div className="sticky top-0 bg-gray-200 py-3">
      <div className="bg-white flex flex-col m-2 border-2 rounded-3xl p-3 gap-2">
        <div className="flex justify-center items-center gap-3">
          <div>Search Networks</div>
          <input
            type="text"
            value=" ETH, Fantom, ..."
            className="w-[85%] h-10 border-2 rounded-2xl"
          />
          <AiOutlineSearch />
        </div>
        <div className="flex justify-between items-center pl-3">
          <div className="">
            <input type="checkbox" name="testnet" />
            <label htmlFor="textnet"> include Textnets</label>
          </div>
          <button className="mr-2 border-none bg-slate-400 rounded-2xl px-3 py-2">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
