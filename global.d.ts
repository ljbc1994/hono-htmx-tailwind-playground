import { PostMetadataService } from "./src/services/PostMetadataService";
import { PostService } from "./src/services/PostService";

declare module "hono" {
  export interface ContextVariableMap {
    postService: PostService;
    postMetadataService: PostMetadataService;
  }
}
