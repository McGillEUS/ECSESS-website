<script>
	import FaqAccordion from 'components/FAQAccordion.svelte';
	import Section from 'components/Section.svelte';

	// Getting info from ECSESS CMS
	let longAnswer = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	const query = '_type:homepage';
	
	const data = [
    {
      q: "A fequently asked question?",
      a: "This is a short answer",
    },
    {
      q: "A fequently asked question?",
      a: "This is a medium length answer. Lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }, 
	{
      q: "A fequently asked question?",
      a: "This is a long answer. "+longAnswer
    }
  ];

	let description = $state();
	description = fetch(
		`https://${import.meta.env.SANITY_ID}.api.sanity.io/vX/data/query/production?query=${query}&perspective=drafts`
	).then((res) => res.json).then((json) => json.toString());
</script>

<title> McGill ECSESS </title>

<!-- ECSESS Introduction -->
<Section>
	<div class="flex h-1/2 flex-col items-center justify-center text-center">
		<p class="page-title">What is ECSESS?</p>

		<p>{description}</p>
	</div>
</Section>

<!-- Picture, FAQ -->
<Section black>
	<div class="flex justify-around gap-12">
		<div>
			<h1>PICTURES</h1>
		</div>
		<div>
			<h1>FAQ</h1>
			{#each data as { q, a }}
			<FaqAccordion entry={{ title: q, description: a }} />
			{/each}
		</div>
	</div>
</Section>

<!-- Office Hours Calendar -->
<Section>
	<div>
		<p class="text-2xl">Office Hours</p>
	</div>
</Section>
