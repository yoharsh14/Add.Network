import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../hooks/ui";
import { useNavigate } from "react-router";
import { listAction } from "../../hooks/list";
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
  const [chainId, setChainId] = useState("");
  const [rpcUrl, setRpcUrl] = useState("");
  const [chainName, setChainName] = useState("");
  const [currencyName, setCurrencyName] = useState("");
  const [currencySymbol, setCurrencySymbol] = useState("");
  const [decimals, setDecimals] = useState("");
  const [blockExplorer, setBlockExplorer] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const onSubmitHandler = () => {
    const newNetwork = {
      chainId,
      rpcUrls: [rpcUrl],
      chainName,
      nativeCurrency: {
        name: currencyName,
        symbol: currencySymbol,
        decimals: Number(decimals),
      },
      blockExplorerUrls: [blockExplorer],
      url: imageUrl,
      name: name,
    };
    dispatch(listAction.update(newNetwork));
    setChainId("");
    setRpcUrl("");
    setChainName("");
    setCurrencyName("");
    setCurrencySymbol("");
    setDecimals("");
    setBlockExplorer("");
    setImageUrl("");
    setName("");
  };
  return (
    <div
      className={`py-16 px-20 ${
        mode ? "bg-black" : "bg-white"
      } float-left w-[50%] ${mode ? "text-gray-400" : "dark:text-gray-500"}`}
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
        <form className="flex flex-col gap-4 font-semibold">
          <div>
            <label htmlFor="chain">ChainId in hex</label>
            <input
              type="text"
              className="border-2 mx-2"
              value={chainId}
              onChange={(e) => setChainId(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="chain">RpcUrl</label>
            <input
              type="text"
              className="border-2 mx-2"
              value={rpcUrl}
              onChange={(e) => setRpcUrl(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="chain">Chain Name</label>
            <input
              type="text"
              className="border-2 mx-2"
              value={chainName}
              onChange={(e) => setChainName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="chain">Currency Name</label>
            <input
              type="text"
              className="border-2 mx-2"
              value={currencyName}
              onChange={(e) => setCurrencyName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="chain">Currency Symbol</label>
            <input
              type="text"
              className="border-2 mx-2"
              value={currencySymbol}
              onChange={(e) => setCurrencySymbol(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="chain">Decimals</label>
            <input
              type="number"
              className="border-2 mx-2"
              value={decimals}
              onChange={(e) => setDecimals(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="chain">Block Explorer Link</label>
            <input
              type="text"
              className="border-2 mx-2"
              value={blockExplorer}
              onChange={(e) => setBlockExplorer(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="chain">Image Url</label>
            <input
              type="text"
              className="border-2 mx-2"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="chain">Name</label>
            <input
              type="text"
              className="border-2 mx-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
