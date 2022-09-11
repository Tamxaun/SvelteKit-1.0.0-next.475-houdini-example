<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ SpacexHistories } = data);
	$: if (SpacexHistories) {
		console.log('Histories', $SpacexHistories.data?.histories);
		console.log('Variables', $SpacexHistories.variables);
	}

	// Inline Query
	// import { graphql, type SpacexHistoriesStore } from '$houdini';

	// const SpacexHistories: SpacexHistoriesStore = graphql`
	// 	query SpacexHistories {
	// 		histories(limit: 4, sort: "event_date_utc") @paginate {
	// 			title
	// 			details
	// 			event_date_utc
	// 		}
	// 	}
	// `;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo: History of SpaceX" />
</svelte:head>

<section>
	<h1>History of SpaceX</h1>
	{#if $SpacexHistories}
		<ul>
			{#each $SpacexHistories.data?.histories ?? [] as historie}
				{@const year = new Date(historie?.event_date_utc).getUTCFullYear()}
				{@const month = new Date(historie?.event_date_utc).getUTCMonth()}
				<li data-icon={`${month}.${year}`}>
					<div>
						<div><b>{historie?.title}</b></div>
						<div>{historie?.details}</div>
					</div>
				</li>
			{/each}
		</ul>
		<button
			disabled={$SpacexHistories.isFetching}
			on:click={() => SpacexHistories.loadNextPage({ limit: 4 })}>Load More</button
		>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 1rem;
	}

	ul li {
		display: grid;
		grid-template-columns: 0 1fr;
		gap: 3.5em;
		align-items: start;
		font-size: 1rem;
		line-height: 1.25;
		padding: 1rem 1.25rem;
		border: 1px solid;
		border-radius: 4px;
	}

	li::before {
		content: attr(data-icon);
		padding: 0.25em 0;
		font-size: 0.75em;
	}

	button {
		margin-top: 2rem;
		padding: 0.5rem 2rem;
		background-color: skyblue;
		cursor: pointer;
	}

	button:disabled {
		opacity: 0.5;
	}

	button:hover {
		background-color: lightskyblue;
	}

	button:active {
		transform: translateY(4px);
	}
</style>
