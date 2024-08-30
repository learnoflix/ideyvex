"use client";

interface WriteCommentProps {
  id: string | number;
}
export function WriteComment({ id }: WriteCommentProps) {


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
