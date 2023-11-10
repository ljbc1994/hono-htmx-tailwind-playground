import Container from "../../components/Container";

interface PostProps {
  content: string;
}

const Post = ({ content }: PostProps) => {
  return (
    <>
      <div class="bg-blue-600 p-1 mb-10"></div>
      <Container>
        <article
          class="prose prose-dark lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </>
  );
};

export default Post;
