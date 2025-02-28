import { getCollection } from "astro:content";

export async function getPublicPosts() {
  return await getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
}
