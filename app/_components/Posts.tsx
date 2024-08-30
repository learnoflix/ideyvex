"use client";
import { createAvatar } from "@dicebear/core";
import { croodles } from "@dicebear/collection";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
const AVATAR = (address: any) => {
  const avatar = createAvatar(croodles, {
    seed: address,
  });
  const svg = avatar.toString();
  return svg;
};
const client = new ApolloClient({
  uri: "https://api.studio.thegraph.com/query/87129/ideyvex/version/latest",
  cache: new InMemoryCache(),
});

const GET_DATA = gql`
  {
    postCreateds(first: 100, orderBy: blockTimestamp, orderDirection: desc) {
      IDeyVex_id
      body
      author
      blockTimestamp
      id
    }
  }
`;

const DataFetcher = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading)
    return (
      <p className="text-center w-full text-sm font-normal text-stone-600">
        Nobody don para o.
      </p>
    );
  if (error)
    return (
      <p className="text-center w-full text-sm font-normal text-stone-600">
        An error was encountered
      </p>
    );

  return (
    <div>
      {data.postCreateds.map((row) => (
        <div
          key={row.IDeyVex_id}
          className="w-full p-1 rounded-lg flex flex-row space-x-2 items-start justify-start border border-stone-300 mb-2"
        >
          <div
            className="flex-none w-20 h-20"
            dangerouslySetInnerHTML={{
              __html: AVATAR(row.author),
            }}
          ></div>
          <div className="flex flex-col space-y-0 items-start justify-start w-full">
            <Link
              href={"/post/" + row.id}
              className="text-md font-normal text-stone-600 pt-4 pb-2"
            >
              {row.body}
            </Link>
            <div className="text-xs font-normal text-stone-800">
              <b className="text-amber-600">Author:</b> {row.author}
            </div>
            <div className="text-xs font-normal text-stone-800">
              <b className="text-amber-600">Time:</b>{" "}
              {moment.unix(row.blockTimestamp).fromNow()}
            </div>
            <div className="flex flex-none space-x-4 items-center justify-end ml-auto w-full">
              <div className="flex items-center space-x-1 bg-lime-100 px-4 py-2 rounded-md border-2 border-lime-100 cursor-pointer">
                <Image src="/novex.png" width={24} height={24} alt="novex" />
                <div className="text-md font-light text-lime-600">
                  {Number(row.vex ?? 0)}
                </div>
              </div>
              <div className="flex items-center space-x-1 bg-rose-100 px-4 py-2 rounded-md border-2 border-rose-100 cursor-pointer">
                <Image src="/vex.png" width={24} height={24} alt="novex" />
                <div className="text-md font-light text-rose-600">
                  {Number(row.vex ?? 0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export function Posts() {
  return (
    <ApolloProvider client={client}>
      <div className="p-4 w-full flex flex-col space-y-2 items-start justify-start max-w-xl mx-auto">
        <h1 className="text-lg font-medium italic text-stone-400">
          Some people don drop vex...
        </h1>
        <DataFetcher />
      </div>
    </ApolloProvider>
  );
}
