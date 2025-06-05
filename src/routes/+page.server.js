import { getFromCMS } from 'utils/utils.js';

// needs to concat and format this text
const query = `*[_type == "homepage"].description[].children[].text`;

export const load = async () => {
	return {
		description: await getFromCMS(query),
		ohs: "",
		pictures: "",
		FAQs: "",
	};
};
