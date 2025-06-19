import { r as redirect } from "../../../../chunks/index.js";
import { g as getFromCMS } from "../../../../chunks/utils.js";
const redirectQuery = `*[_type == "redirects"]{ shortname, url }`;
const load = async ({ params }) => {
  let CMSresponse = await getFromCMS(redirectQuery);
  const { shortname } = params;
  CMSresponse.forEach((res) => {
    if (res.shortname == shortname) {
      throw redirect(302, res.url);
    }
  });
  return {
    shortname,
    availableShortnames: CMSresponse
  };
};
export {
  load
};
