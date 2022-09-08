import type { PageLoad } from './$types';
// import { load_ExampleQueryPagination } from '$houdini';

export const load: PageLoad = async (event) => {
	return {
		// ...(await load_ExampleQueryPagination({ event, variables: {} }))
	};
};
