import type { PageLoadEvent } from './$types';
import type { SpacexHistories$input as Variables } from "$houdini";

export const SpacexHistoriesVariables: (event: PageLoadEvent) => Promise<Variables> = async (event) => {
   console.log("event params: ", event.params);

   return { limit: 1 };
};