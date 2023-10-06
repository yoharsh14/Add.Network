import { configureStore, createSlice } from "@reduxjs/toolkit";

const listInitialState = {
  networks: [
    {
      chainId: "0x89",
      rpcUrls: ["https://polygon-rpc.com/"],
      chainName: "Matic Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      blockExplorerUrls: ["https://polygonscan.com/"],
      url: "url",
      name: "Polygon",
    },
    {
      chainId: "0x89",
      rpcUrls: ["https://polygon-rpc.com/"],
      chainName: "Matic Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      blockExplorerUrls: ["https://polygonscan.com/"],
      url: "url",
      name: "Polygon",
    },
    {
      chainId: "0x44D",
      rpcUrls: ["https://zkevm-rpc.com"],
      chainName: "zKevm",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      blockExplorerUrls: ["https://zkevm.polygonscan.com"],
      url: "url",
      name: "ZkEVM",
    },
    {
      chainId: "0x89",
      rpcUrls: ["https://polygon-rpc.com/"],
      chainName: "Matic Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      blockExplorerUrls: ["https://polygonscan.com/"],
      url: "url",
      name: "Polygon",
    },
    {
      chainId: "0x89",
      rpcUrls: ["https://polygon-rpc.com/"],
      chainName: "Matic Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      blockExplorerUrls: ["https://polygonscan.com/"],
      url: "url",
      name: "Polygon",
    },
  ],
};

export const listSlice = createSlice({
  name: "list",
  initialState: listInitialState,
  reducers: {
    update(state, action) {
      state.networks = action.payload;
    },
  },
});

export const listAction = listSlice.actions;
