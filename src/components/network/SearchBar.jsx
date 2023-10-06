import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { ethers } from "ethers";
import { useState } from "react";
import { walletAction } from "../../hooks/wallet";
export default function SearchBar(props) {
  const mode = useSelector((state) => state.ui.darkMode);
  const font_color = mode ? "text-white" : "text-black";
  const background = mode ? "bg-black" : "bg-white";
  const nameChangeHandler = () => {};
  const [account, setAccount] = useState("Connect Wallet");
  const dispatch = useDispatch();
  const init = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signers = await provider.getSigner();
      const network = Number((await provider.getNetwork()).chainId);
      const account = signers.address;
      let accountString =
        account.substring(0, 6) +
        "..." +
        account.substring(account.length - 4, account.length);
      setAccount(accountString);
      props.addProvider(provider);
      dispatch(walletAction.addChainId(network));
    } catch (error) {
      console.log(error);
      setAccount("Add crypto wallet");
    }
  };
  return (
    <div
      className={`sticky top-0 ${
        mode ? "dark:bg-zinc-800" : "bg-gray-200"
      } py-3`}
    >
      <div
        className={` ${background} flex flex-col m-2 border-none rounded-xl  ${font_color}`}
      >
        <div className="flex justify-center items-center gap-3 border-b-1 p-3">
          <div>Search Networks</div>
          <input
            type="text"
            value=" ETH, Fantom, ..."
            onChange={nameChangeHandler}
            className={`w-[85%] h-10 ${background}`}
          />
          <AiOutlineSearch />
        </div>
        <div className="flex justify-between items-center p-3">
          <div className="">
            <input type="checkbox" name="testnet" />
            <label htmlFor="textnet"> include Textnets</label>
          </div>
          <button
            onClick={init}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            {account}s
          </button>
        </div>
      </div>
    </div>
  );
}
