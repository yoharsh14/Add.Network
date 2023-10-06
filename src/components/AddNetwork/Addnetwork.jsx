import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../hooks/ui";
import { useNavigate } from "react-router";
export default function addnetwork() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mode = useSelector((state) => state.ui.darkMode);
  const toggle = () => {
    dispatch(uiAction.toggle());
  };
  const toAddnet = () => {
    navigate("..");
  };
  const [chainId, setChainId] = useState();
  const [rpcUrl, setRpcUrl] = useState();
  const [chainName, setChainName] = useState();
  const [currencyName, setCurrencyName] = useState();
  const [currencySymbol, setCurrencySymbol] = useState();
  const [decimals, setDecimals] = useState();
  const [blockExplorer, setBlockExplorer] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [name, setName] = useState();
  const onSubmitHandler = () => {};
  return (
    <div
      className={`py-16 px-20 ${
        mode ? "bg-black" : "bg-white"
      } float-left w-[50%]`}
    >
      <div
        className={`flex flex-col justify-start items-center mt-10 gap-5 sticky top-11`}
      >
        <h1
          className={`mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl `}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400">
            Add network Form
          </span>
        </h1>
        <form>
          <label htmlFor="chain">ChainId</label>
          <input type="text" className="border-2 mx-2" />
        </form>
        <div>
          <button
            onClick={onSubmitHandler}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
          <button
            onClick={toAddnet}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Back
          </button>
        </div>

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
