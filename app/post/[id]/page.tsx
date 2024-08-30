import { Header } from "./../../_components/Header";
import Link from "next/link";
import { WriteComment } from "@/app/_components/WriteComment";
import { SinglePost } from "@/app/_components/SinglePost";

function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <>
      <Header />
      <div className="w-full flex flex-col space-y-2 items-start justify-start max-w-xl mx-auto">
        <Link href="/" className="text-md font-normal text-amer-400 py-8">
          {"<"} Back to vex
        </Link>
        <SinglePost id={id} />
        <WriteComment id={id} />
      </div>
    </>
  );
}

export default Page;
