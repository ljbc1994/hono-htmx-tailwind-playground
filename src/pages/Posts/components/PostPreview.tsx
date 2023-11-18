import { PostMetadata } from "../../../types/PostManifest";
import { getFormattedDate } from "../../../utils/getFormattedDate";

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
          {/* <img src={preview.image} /> */}
        </div>
      ) : null}
      <span class="flex flex-col px-8 py-6 space-y-2">
        <h2 class="text-sky-300 text-2xl font-extrabold">{preview.title}</h2>
        <p class="text-white">{preview.description}</p>
        <div class="flex">
          <div class="text-xs py-2 px-3 bg-gray-900 rounded-lg text-gray-500 flex-inline mt-1">
            <span>{getFormattedDate(preview.date)}</span>
          </div>
        </div>
      </span>
    </a>
  );
};
