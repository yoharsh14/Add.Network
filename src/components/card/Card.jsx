import React from "react";
import eth from "cryptocurrency-icons/svg/color/eth.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Card() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white gap-6 px-20 py-4">
      <div className="flex justify-center items-center gap-1">
        <img src={eth} className="h-[23px] w-[23px]" />
        Ethereum Mainnet
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
                <strong>1 (0x1)</strong>
              </td>
              <td className="text-center">
                <strong>ETH</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        Connect
      </button>
      <MdKeyboardArrowDown />
    </div>
  );
}
