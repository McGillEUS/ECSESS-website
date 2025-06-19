import { g as getFromCMS } from "../../../chunks/utils.js";
const eventQuery = `*[_type == "events"]{
  name,
  category,
  date,
  location,
  description,
  "lastUpdated": _updatedAt,
}`;
const load = async () => {
  return {
    events: await getFromCMS(eventQuery)
  };
};
export {
  load
};
