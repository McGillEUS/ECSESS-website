import { createClient } from "@sanity/client";
const SANITY_ID = "vmtsvpe2";
const client = createClient({
  projectId: SANITY_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-02-06"
});
async function getFromCMS(query) {
  return await client.fetch(query);
}
export {
  getFromCMS as g
};
