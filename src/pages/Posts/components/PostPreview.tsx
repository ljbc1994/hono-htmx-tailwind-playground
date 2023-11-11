import { PostMetadata } from "../../../types/PostManifest";

interface PostPreviewProps {
  preview: PostMetadata;
}

export const PostPreview = ({ preview }: PostPreviewProps) => {
  return (
    <a
      class="grid items-center bg-gray-800 hover:bg-gray-700 transition rounded-md shadow-lg"
      href={`/post/${preview.slug}`}
    >
      {preview.image ? (
        <div class="bg-gradient-to-r from-indigo-700 from-10% to-sky-700 rounded-t-md p-4">
          <img src={preview.image} />
        </div>
      ) : null}
      <span class="flex flex-col px-8 py-6 space-y-2">
        <h2 class="text-sky-300 text-2xl font-bold">{preview.title}</h2>
        <p class="text-white">{preview.description}</p>
      </span>
    </a>
  );
};
