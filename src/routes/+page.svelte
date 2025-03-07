<script>
	import Section from 'components/Section.svelte';

	// Getting info from ECSESS CMS
	let description =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
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
			<p>PICTURES</p>
		</div>
		<div>
			<p>FAQ</p>
		</div>
	</div>
</Section>

<!-- Office Hours Calendar -->
<Section>
	<div>
		<p class="text-2xl">Office Hours</p>
	</div>
</Section>
