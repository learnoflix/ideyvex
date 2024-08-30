"use client";

import { abi } from "@/abi";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

const contractAddress = "0xC73Dfc54b16A104a75aD7b778e0F1b0B021AbCeD";

export function CreatePost() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const body = formData.get("body") as string;
    writeContract({
      address: contractAddress,
      abi,
      functionName: "createPost",
      args: [body],
    });
  }
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <>
      <form
        onSubmit={submit}
        className="w-full flex flex-col space-y-6 items-start justify-center max-w-xl mx-auto py-10"
      >
        <div className="w-full py-2 px-4 rounded-lg shadow flex flex-col space-y-1">
          <div className="text-lg font-medium text-stone-400">
            Why You Dey Vex!
          </div>
          <textarea
            name="body"
            className="w-full p-4 border-2 border-stone-200 text-lg text-stone-400 rounded-lg h-16 outline-none"
            placeholder="Enter your reason for vexxing..."
          />
          <button
            type="submit"
            disabled={isPending}
            className="ml-auto w-fit bg-stone-600 px-6 py-3 rounded-lg text-md font-medium text-center text-stone-100"
          >
            {isPending ? "Posting..." : "Post am"}
          </button>
        </div>
        {/* {hash && <div>Post Hash: {hash}</div>} */}
        {isConfirming && <p>Publishing your vex, no too para ... network slow die!...</p>}
        {isConfirmed && <p>We don post your vex, abeg no vex...</p>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
      </form>
    </>
  );
}
