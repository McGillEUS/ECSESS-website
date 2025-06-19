import { g as getFromCMS } from "../../../chunks/utils.js";
const query = `*[_type == "resources"]{
  title,
  url,
  description,
  "lastUpdated":_updatedAt
}`;
const load = async () => {
  return {
    resources: await getFromCMS(query)
  };
};
export {
  load
};
