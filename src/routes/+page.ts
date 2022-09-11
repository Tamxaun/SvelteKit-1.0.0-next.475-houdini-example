import type { PageLoad } from './$types';
import { SpacexHistoriesStore } from "$houdini";

export const load: PageLoad = async (event) => {
   const SpacexHistories = new SpacexHistoriesStore();

   const result = await SpacexHistories.fetch({ event, variables: { limit: 1 } });

   console.log('do something with', result)
   console.log('do something with', result.data?.histories)

   return { SpacexHistories }
}