"use client";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { abi } from "../../abi";
import { config } from "../../wagmi";
import { Address } from "viem";
import { createAvatar } from "@dicebear/core";
import { croodles } from "@dicebear/collection";
import Image from "next/image";
import Link from "next/link";

interface CommentsProps {
  id?: string | number;
}

export function Comments({ id }: CommentsProps) {
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
  const AVATAR = (address: any) => {
    const avatar = createAvatar(croodles, {
      seed: address,
    });
    const svg = avatar.toString();
    return svg;
  };

  return (
    <>
      <div className="w-full flex flex-col space-y-2 items-start justify-start">
        <div className="w-full p-1 rounded-lg flex flex-row space-x-2 items-start justify-start border-b border-stone-300">
          <div
            className="flex-none w-12 h-12"
            dangerouslySetInnerHTML={{
              __html: AVATAR("0x0000000000000000000000"),
            }}
          ></div>
          <div className="flex flex-col space-y-0 items-start justify-start w-full">
            <div className="text-md font-normal text-stone-600 pt-2 pb-1">
              This is a simple comment
            </div>
            <div className="text-xs font-normal text-stone-800">
              <b className="text-amber-600">User:</b> 0x0000000000000000000000
            </div>
            <div className="text-xs font-normal text-stone-800">
              <b className="text-amber-600">Time:</b> 40 minutes ago.
            </div>
          </div>
        </div>
        <div className="w-full p-1 rounded-lg flex flex-row space-x-2 items-start justify-start border-b border-stone-300">
          <div
            className="flex-none w-12 h-12"
            dangerouslySetInnerHTML={{
              __html: AVATAR("0x0000000000000000000000"),
            }}
          ></div>
          <div className="flex flex-col space-y-0 items-start justify-start w-full">
            <div className="text-md font-normal text-stone-600 pt-2 pb-1">
              This is a simple comment
            </div>
            <div className="text-xs font-normal text-stone-800">
              <b className="text-amber-600">User:</b> 0x0000000000000000000000
            </div>
            <div className="text-xs font-normal text-stone-800">
              <b className="text-amber-600">Time:</b> 40 minutes ago.
            </div>
          </div>
        </div>
        <div className="w-full p-1 rounded-lg flex flex-row space-x-2 items-start justify-start border-b border-stone-300">
          <div
            className="flex-none w-12 h-12"
            dangerouslySetInnerHTML={{
              __html: AVATAR("0x0000000000000000000000"),
            }}
          ></div>
          <div className="flex flex-col space-y-0 items-start justify-start w-full">
            <div className="text-md font-normal text-stone-600 pt-2 pb-1">
              This is a simple comment
            </div>
            <div className="text-xs font-normal text-stone-800">
              <b className="text-amber-600">User:</b> 0x0000000000000000000000
            </div>
            <div className="text-xs font-normal text-stone-800">
              <b className="text-amber-600">Time:</b> 40 minutes ago.
            </div>
          </div>
        </div>
        <div className="w-full p-1 rounded-lg flex flex-row space-x-2 items-start justify-start border-b border-stone-300">
          <div
            className="flex-none w-12 h-12"
            dangerouslySetInnerHTML={{
              __html: AVATAR("0x0000000000000000000000"),
            }}
          ></div>
          <div className="flex flex-col space-y-0 items-start justify-start w-full">
            <div className="text-md font-normal text-stone-600 pt-2 pb-1">
              This is a simple comment
            </div>
            <div className="text-xs font-normal text-stone-800">
              <b className="text-amber-600">User:</b> 0x0000000000000000000000
            </div>
            <div className="text-xs font-normal text-stone-800">
              <b className="text-amber-600">Time:</b> 40 minutes ago.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
