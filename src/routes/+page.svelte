<script>
	import FaqAccordion from 'components/FAQAccordion.svelte';
	import Section from 'components/Section.svelte';
	import { PortableText } from '@portabletext/svelte';

	/** loading things from the server side */
	let { data } = $props();

	// Getting info from ECSESS CMS
	let longAnswer =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	const faqs = [
		{
			q: 'A fequently asked question?',
			a: 'This is a short answer'
		},
		{
			q: 'A fequently asked question?',
			a: 'This is a medium length answer. Lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			q: 'A fequently asked question?',
			a: 'This is a long answer. ' + longAnswer
		}
	];
</script>

<title> McGill ECSESS </title>

<!-- ECSESS Introduction -->
<Section>
	<div class="flex h-1/2 flex-col items-center justify-center text-center">
		<p class="page-title">What is ECSESS?</p>
		<div id="test">
			<PortableText value={data.description} />
		</div>
	</div>
</Section>

<!-- Picture, FAQ -->
<Section black>
	<div>
		<h1>Our Student Council</h1>
		<img src={data.councilPhoto} alt="ECSESS Council" />
	</div>
	<div>
		<h1>FAQ</h1>
		{#each faqs as { q, a }}
			<FaqAccordion entry={{ title: q, description: a }} />
		{/each}
	</div>
</Section>
<!-- Office Hours Calendar -->
<Section>
	<div>
		<h1 class="text-2xl">Office Hours</h1>
		<p>Under development</p>
	</div>
</Section>
