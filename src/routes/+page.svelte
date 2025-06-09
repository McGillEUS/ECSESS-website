<script>
	import Section from 'components/Section.svelte';
	import { PortableText } from '@portabletext/svelte';
	/** loading things from the server side */
	let { data } = $props();
	console.log(data);
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
	<h1>Our student council</h1>
	<div class="flex justify-around gap-12">
		<div>
			<img src={data.councilPhoto} alt="ECSESS Council" />
		</div>
	</div>
</Section>

<!-- Office Hours Calendar -->
<Section>
	<div>
		<h1>FAQ</h1>
		<p>Under development</p>
	</div>
	<div>
		<h1 class="text-2xl">Office Hours</h1>
		<p>Under development</p>
	</div>
</Section>
