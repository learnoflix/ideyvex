import { CreatePost } from "./CreatePost";
import { Posts } from "./Posts";

export function Dapp() {
  return (
    <div className="bg-background w-full min-h-screen">
      <ul className="mb-4 w-full flex flex-col space-y-1 p-2 border">
        <span className="text-amber-600">
          Connect Base Sepolia Wallet ::{" "}
          <a className="font-bold text-blue-600 underline bg-blue-50" href="https://docs.nabla.fi/incentivized-testnet-beta/connect-wallet-to-base-sepolia-testnet">
            Tutorials to add BASE SEPOLIA
          </a>{" "}
        </span>
        <li className="text-xs font-normal text-gray-700">
          <span className="font-bold text-green-600">[COMPLETED] &nbsp; </span>
          Create new para :: using Wagmi
        </li>
        <li className="text-xs font-normal text-gray-700">
          <span className="font-bold text-green-600">[COMPLETED] &nbsp; </span>
          View all paras :: using Graph
        </li>
        <li className="text-xs font-normal text-gray-700">
          <span className="font-bold text-green-600">[COMPLETED] &nbsp; </span>
          View single para :: using Graph
        </li>
        <li className="text-xs font-normal text-gray-700">
          <span className="font-bold text-green-600">[COMPLETED] &nbsp; </span>
          Generate avatar :: using dicebear
        </li>
        <li className="text-xs font-normal text-gray-700">
          <span className="font-bold text-green-600">[COMPLETED] &nbsp; </span>
          Get human time :: using moment.js
        </li>
        <li className="text-xs font-normal text-gray-700">
          <span className="font-bold text-rose-600">[PENDING] &nbsp; </span>
          Add comment
        </li>
        <li className="text-xs font-normal text-gray-700">
          <span className="font-bold text-rose-600">[PENDING] &nbsp; </span>
          View all comment
        </li>
        <li className="text-xs font-normal text-gray-700">
          <span className="font-bold text-rose-600">[PENDING] &nbsp; </span>
          React on para
        </li>
      </ul>
      <CreatePost />
      <Posts />
    </div>
  );
}
