import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
export default function About() {
  return (
    <div className="py-16 px-20">
      <div className="flex flex-col justify-start items-center mt-10 gap-5 sticky top-11">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            ADD.NET
          </span>
        </h1>
        <h2>Helping users connect to EVM powered networks</h2>
        <h3 className="mb-3 text-gray-600 dark:text-gray-500">
          ADD.NET is a list of EVM networks. Users can use the information to
          connect their wallets and Web3 middleware providers to the appropriate
          Chain ID and Network ID to connect to the correct chain.
        </h3>
        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Add Your Network +
        </button>
        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Add Your RPC +
        </button>
        <div className="flex gap-2 items-center">
          <AiFillGithub /> View Code
        </div>
        <div className="flex items-center gap-2">
          <BsSun /> Toggle Theme
        </div>
      </div>
    </div>
  );
}
