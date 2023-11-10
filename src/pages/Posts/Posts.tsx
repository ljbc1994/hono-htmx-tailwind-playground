import Container from "../../components/Container";

interface PostPreviewProps {
  preview: { title: string; content: string; imageUrl?: string };
}

const PostPreview = ({ preview }: PostPreviewProps) => {
  return (
    <a class="grid items-center bg-gray-800 hover:bg-gray-700 transition rounded-md shadow-lg" href="/">
      {preview.imageUrl ? (
        <div class="bg-gradient-to-r from-indigo-700 from-10% to-sky-700 rounded-t-md p-4">
            <img src={preview.imageUrl} />
        </div>
      ) : null}
      <span class="flex flex-col px-8 py-6 space-y-2">
        <h2 class="text-sky-300 text-2xl font-bold">{preview?.title}</h2>
        <p class="text-white">{preview.content}</p>
      </span>
    </a>
  );
};

const Posts = () => {
  return (
    <Container>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PostPreview
          preview={{ title: "Yoo", content: "example...", imageUrl: "test" }}
        />
        <PostPreview
          preview={{
            title: "Hows about this",
            content: "example...",
          }}
        />
        <PostPreview
          preview={{
            title: "Yeah boi",
            content: "example...",
            imageUrl: "test",
          }}
        />
        <PostPreview
          preview={{
            title: "Haha yeah true",
            content: "example...",
            imageUrl: "test",
          }}
        />
      </div>
    </Container>
  );
};

export default Posts;
