<script lang="ts">
	// import type { PageData } from './$types';
	// export let data: PageData

	// $: ({ ExampleQueryPagination } = data)


	import { graphql } from '$houdini';

	const SpacexHistories = graphql`
		query SpacexHistories {
			histories(limit: 4, sort: "event_date_utc") {
				title
				details
				event_date_utc
			}
		}
	`
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo: History of SpaceX" />
</svelte:head>

<section>
	<h1>History of SpaceX</h1>
	{JSON.stringify($SpacexHistories)}
	<!-- {#if $ExampleQueryPagination && $ExampleQueryPagination.isFetching}
		Loading...
	{:else if $ExampleQueryPagination}
		<ul>
			{#each $ExampleQueryPagination.data?.histories ?? [] as historie}
				{@const date = new Date(historie?.event_date_utc).getUTCFullYear()}
				<li data-icon={date}>
					<div>
						<div><b>{historie?.title}</b></div>
						<div>{historie?.details}</div>
					</div>					
				</li>
			{/each}
		</ul>
		<button disabled={$ExampleQueryPagination.isFetching} on:click={ExampleQueryPagination.loadNextPage}
			>Load More</button>
	{/if} -->
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
		gap: 3em;
		align-items: start;
		font-size: 1rem;
		line-height: 1.25;
		padding: 1rem 1.25rem;
		border: 1px solid;
		border-radius: 4px;
	}

	li::before {
		content: attr(data-icon);
		padding: .25em 0;
		font-size: .75em;
	}

	button {
		margin-top: 2rem;
		padding: 0.5rem 2rem;
		background-color: skyblue;
		cursor: pointer;
	}

	button:disabled {
		opacity: .5
	}

	button:hover {
		background-color: lightskyblue;
	}

	button:active {
		transform: translateY(4px);
	}

</style>
