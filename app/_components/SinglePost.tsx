"use client";

import { createAvatar } from "@dicebear/core";
import { croodles } from "@dicebear/collection";
import Image from "next/image";
import moment from "moment";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

interface postId {
  id?: string;
}

const AVATAR = (author: any) => {
  const avatar = createAvatar(croodles, {
    seed: author,
  });
  const svg = avatar.toString();
  return svg;
};
export function SinglePost({ id }: postId) {
  const client = new ApolloClient({
    uri: "https://api.studio.thegraph.com/query/87129/ideyvex/version/latest",
    cache: new InMemoryCache(),
  });

  const GET_DATA = gql`{
  postCreated(
    id: "${id}"
  ) {
    id
    author
    blockTimestamp
    body
  }
}`;
  const DataFetcher = () => {
    const { loading, error, data } = useQuery(GET_DATA);
    console.log(data);
    if (loading)
      return (
        <p className="text-center w-full text-sm font-normal text-stone-600">
          Loading para..
        </p>
      );
    if (error)
      return (
        <p className="text-center w-full text-sm font-normal text-stone-600">
          An error was encountered
        </p>
      );
    const row = data.postCreated;
    return (
      <>
        <div
          key={row.id}
          className="w-full p-1 rounded-lg flex flex-row space-x-2 items-start justify-start border border-stone-300 mb-2"
        >
          <div
            className="flex-none w-20 h-20"
            dangerouslySetInnerHTML={{
              __html: AVATAR(row.author),
            }}
          ></div>
          <div className="flex flex-col space-y-0 items-start justify-start w-full">
            <div className="text-md font-normal text-stone-600 pt-4 pb-2">
              {row.body}
            </div>
            <div className="text-xs font-normal text-stone-800">
              <b className="text-amber-600">By:</b>
              {row.author.substring(0, 12) + "..."}
            </div>
            <div className="text-xs font-normal text-stone-800">
              <b className="text-amber-600"></b>{" "}
              {moment.unix(row.blockTimestamp).fromNow()}
            </div>
            <div className="flex flex-none space-x-4 items-center justify-end ml-auto w-full">
              <div className="flex items-center space-x-1cursor-pointer">
                <Image src="/novex.png" width={24} height={24} alt="novex" />
                <div className="text-xl font-normal text-lime-600">
                  {Number(row.vex ?? 0)}
                </div>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <Image src="/vex.png" width={24} height={24} alt="vex" />
                <div className="text-xl font-normal text-rose-600">
                  {Number(row.novex ?? 0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <ApolloProvider client={client}>
      <DataFetcher />
    </ApolloProvider>
  );
}
