interface PostProps {
  content: string;
}

const Post = ({ content }: PostProps) => {
  return (
    <div>
      <article
        class="prose prose-dark lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Post;
