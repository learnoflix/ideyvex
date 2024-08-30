"use client";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { abi } from "../../abi";
import { config } from "../../wagmi";
import { Button } from "./Button";
import { Address } from "viem";
interface WriteCommentProps {
  id: string | number;
}
export function WriteComment({ id }: WriteCommentProps) {
  const account = useAccount({ config });
  const { writeContract } = useWriteContract();
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as Address;
  const { data, refetch } = useReadContract({
    abi,
    address: contractAddress,
    functionName: "getCount",
    account: account.address,
    query: { enabled: false, initialData: 0x0 },
  });

  return (
    <>
      <div className="w-full flex flex-col space-y-6 items-start justify-center max-w-xl mx-auto py-10">
        <div className="w-full p-4 rounded-md flex flex-col space-y-2">
          <textarea
            className="w-full px-4 py-1 border border-stone-200 text-lg text-stone-400 rounded-lg h-16 outline-none"
            placeholder="Follow this user para or cool am down..."
          ></textarea>
          <button className="ml-auto w-fit px-4 py-2 border rounded-md text-sm font-medium text-center text-stone-600">
            Drop comment
          </button>
        </div>
      </div>
    </>
  );
}
