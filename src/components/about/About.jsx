import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../hooks/ui";
import { useNavigate } from "react-router";
export default function About() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mode = useSelector((state) => state.ui.darkMode);
  const chain = useSelector((state) => state.wallet.chainId);
  const toggle = () => {
    dispatch(uiAction.toggle());
  };
  const toAddnet = () => {
    navigate("addnet");
  };
  return (
    <div
      className={`sticky py-16 px-20 ${
        mode ? "bg-black" : "bg-white"
      } flex justify-between gap-3 w-[50%] h-screen float-left`}
    >
      <div
        className={`flex flex-col justify-start items-center mt-10 gap-5 sticky top-11 `}
      >
        <h1
          className={`mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl `}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400">
            ADD.NET
          </span>
        </h1>
        <h2
          className={`mb-3 text-xl  ${
            mode ? "text-white" : "dark:text-gray-500"
          }`}
        >
          Helping users connect to EVM powered networks
        </h2>
        <h3
          className={`mb-3  ${mode ? "text-gray-400" : "dark:text-gray-500"}`}
        >
          ADD.NET is a list of EVM networks. Users can use the information to
          connect their wallets and Web3 middleware providers to the appropriate
          Chain ID and Network ID to connect to the correct chain.
        </h3>
        <h2>
          {" "}
          Your Current ChainId: <b>{chain}</b>
        </h2>
        <button
          onClick={toAddnet}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Add Your Network +
        </button>
        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Add Your RPC +
        </button>
        <button
          className={`flex items-center gap-2 ${
            mode ? "text-white" : "text-black"
          }`}
        >
          <AiFillGithub /> <a href="">View Code</a>
        </button>
        <button
          className={`flex items-center gap-2 ${
            mode ? "text-white" : "text-black"
          }`}
          onClick={toggle}
        >
          <BsSun /> Toggle Theme
        </button>
      </div>
    </div>
  );
}
