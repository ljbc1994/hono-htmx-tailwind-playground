import { FC } from "hono/jsx";
import Container from "../../components/Container";
import { PostMetadata } from "../../types/PostManifest";
import { PostPreview } from "./components/PostPreview";

interface PostsProps {
  posts: PostMetadata[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <Container>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <PostPreview preview={post} />
        ))}
      </div>
    </Container>
  );
};

export default Posts;
