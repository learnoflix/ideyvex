import { CreatePost } from "./CreatePost";
import { Posts } from "./Posts";

export function Dapp() {
  return (
    <div className="bg-background w-full min-h-screen">
      <CreatePost />
      <Posts />
    </div>
  );
}
