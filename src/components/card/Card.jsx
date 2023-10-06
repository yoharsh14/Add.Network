import React from "react";
import eth from "cryptocurrency-icons/svg/color/eth.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
export default function Card(props) {
  const mode = useSelector((state) => state.ui.darkMode);
  const addNetwork = async () => {
    // const provider = props.provider;
    const { url, name, ...params } = props.item;
    const result = await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [params],
    });
  };
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl ${
        mode ? "bg-black text-white" : "bg-white text-black"
      } gap-3 p-12 py-4`}
    >
      <div className="flex justify-center items-center gap-1">
        <img src={eth} className="h-[23px] w-[23px]" />
        {props.name}
      </div>
      <div className="">
        <table>
          <thead>
            <tr>
              <th>ChainID</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <strong>{props.chainId}</strong>
              </td>
              <td className="text-center">
                <strong>{props.name}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={addNetwork}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Connect
      </button>
      <MdKeyboardArrowDown />
    </div>
  );
}
