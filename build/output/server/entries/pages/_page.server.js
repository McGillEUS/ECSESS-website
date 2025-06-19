import { g as getFromCMS } from "../../chunks/utils.js";
const homepageQuery = `*[_type == "homepage"]{
	"description": description[],
	"councilPhoto": councilPhoto.asset->url,
	"faqs": faqs[]{ question, answer },
}[0]`;
const load = async () => {
  let CMSresponse = await getFromCMS(homepageQuery);
  return {
    description: CMSresponse.description,
    councilPhoto: CMSresponse.councilPhoto,
    faqs: CMSresponse.faqs
    // ohs: await getFromCMS(ohQuery),
  };
};
export {
  load
};
