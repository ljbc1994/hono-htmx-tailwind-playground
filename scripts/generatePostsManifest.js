import fs from "node:fs";
import fm from "front-matter";

const posts = fs.readdirSync("./posts");

const postsMetadata = posts.map((post) => {
  const contents = fs.readFileSync(`./posts/${post}`).toString("utf-8");
  const { attributes } = fm(contents, { allowUnsafe: true });
  return { ...attributes, slug: post.replace('.md', '') };
});

fs.writeFileSync(
  `./public/static/posts-manifest.json`,
  JSON.stringify(postsMetadata)
);
