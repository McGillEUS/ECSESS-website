import { g as getFromCMS } from "../../../chunks/utils.js";
const query = `*[_type == "members"]{
  name,
  email,
  position,
  positionDescription,
  "image": image.asset->url,
  yearProgram
}`;
const load = async () => {
  return {
    members: await getFromCMS(query)
  };
};
export {
  load
};
