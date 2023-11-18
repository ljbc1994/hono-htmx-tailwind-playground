import type { PostMetadata } from "../../../types/PostManifest";
import { getFormattedDate } from "../../../utils/getFormattedDate";

interface PostHeaderProps {
  metadata?: PostMetadata;
}

export const PostHeader = ({ metadata }: PostHeaderProps) => {
  if (metadata == null) {
    return null;
  }

  return (
    <header>
      <div class="mb-6">
        <span class="text-xs py-2 px-3 bg-sky-400 rounded-lg text-gray-900 flex-inline mt-1">
          <time datetime={metadata.date.toISOString()}>
            {getFormattedDate(metadata.date)}
          </time>
        </span>
      </div>
      <h1 class="text-4xl md:text-6xl text-white font-extrabold">
        {metadata.title}
      </h1>
    </header>
  );
};
