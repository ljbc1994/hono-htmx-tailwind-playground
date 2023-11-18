import type { PostMetadata } from "../../types/PostManifest";

import Container from "../../components/Container";

import { AuthorCard } from "./components/AuthorCard";
import { RatePostForm } from "./components/RatePostForm";
import { PostHeader } from "./components/PostHeader";

interface PostProps {
  postId: string;
  postLikes: number;
  content: string;
  metadata?: PostMetadata;
  relatedPosts?: PostMetadata[];
}

const Post = ({
  postId,
  postLikes,
  metadata,
  relatedPosts,
  content,
}: PostProps) => {
  return (
    <Container>
      <div class="grid md:grid-cols-8 gap-4">
        <article class="md:col-span-6">
          <div class="mb-6 md:mb-10">
            <PostHeader metadata={metadata} />
          </div>
          <article
            class="prose prose-dark prose-lg lg:prose-xl prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
        <aside class="md:col-span-2 space-y-4">
          <div>
            <AuthorCard />
          </div>
          <div class="md:sticky top-10">
            <RatePostForm postId={postId} postLikes={postLikes} />
          </div>
        </aside>
      </div>
    </Container>
  );
};

export default Post;
