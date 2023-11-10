import Container from "../../components/Container";
import { RatePostForm } from "./components/RatePostForm";

interface PostProps {
  postId: string
  postLikes: number
  content: string;
}

const Post = ({ postId, postLikes, content }: PostProps) => {
  return (
    <>
      <Container>
        <div class="grid md:grid-cols-8 gap-4">
          <article
            class="prose prose-dark lg:prose-xl md:col-span-6"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <aside class="md:col-span-2">
            <div class="md:sticky top-10">
              <RatePostForm postId={postId} postLikes={postLikes} />
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
};

export default Post;
