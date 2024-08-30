"use client";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
import { Post } from "./Post";
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
        Loading paras...
      </p>
    );
  if (error)
    return (
      <p className="text-center w-full text-sm font-normal text-stone-600">
        An error was encountered
      </p>
    );

  return (
    <>
      {data.postCreateds.map((row: any) => (
        <Post {...row} />
      ))}
    </>
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
