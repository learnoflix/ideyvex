"use client";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { abi } from "../../abi";
import { config } from "../../wagmi";
import { Address } from "viem";
import { createAvatar } from "@dicebear/core";
import { croodles } from "@dicebear/collection";
import Image from "next/image";
import Link from "next/link";

interface PostProps {
  id?: string | number;
}

export function Post({ id }: PostProps) {
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
      <div className="w-full p-1 rounded-lg flex flex-row space-x-2 items-start justify-start border border-stone-300">
        <div
          className="flex-none w-20 h-20"
          dangerouslySetInnerHTML={{
            __html: AVATAR("0x0000000000000000000000"),
          }}
        ></div>
        <div className="flex flex-col space-y-0 items-start justify-start w-full">
          <Link
            href={"/post/" + id}
            className="text-md font-normal text-stone-600 pt-4 pb-2"
          >
            Why fuel go be 1,000 naira per liter... why!!!!!!!!!!!!
          </Link>
          <div className="text-xs font-normal text-stone-800">
            <b className="text-amber-600">Author:</b> 0x0000000000000000000000
          </div>
          <div className="text-xs font-normal text-stone-800">
            <b className="text-amber-600">Time:</b> 40 minutes ago.
          </div>
          <div className="flex flex-none space-x-4 items-center justify-end ml-auto w-full">
            <div className="flex items-center space-x-1 bg-lime-100 px-4 py-2 rounded-md border-2 border-lime-100 cursor-pointer">
              <Image src="/novex.png" width={24} height={24} alt="novex" />
              <div className="text-md font-light text-lime-600">30</div>
            </div>
            <div className="flex items-center space-x-1 bg-rose-100 px-4 py-2 rounded-md border-2 border-rose-100 cursor-pointer">
              <Image src="/vex.png" width={24} height={24} alt="novex" />
              <div className="text-md font-light text-rose-600">30</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
