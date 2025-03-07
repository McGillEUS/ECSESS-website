<script>
	import ResourceCard from 'components/ResourceCard.svelte';
	import Section from 'components/Section.svelte';
	let isElectionTime = $state(true);
</script>

<title> Join ECSESS !!! </title>

<Section>
	<p class="page-title">Want to join ECSESS Council?</p>

	{#if isElectionTime}
    <ResourceCard title="Involvement Booklet">
        A guide to involvement with ECSESS and its subcommittees (The Factory, IEEE McGill, CodeJam).
    </ResourceCard>
    {:else}
		<p>Come back around March for application period!</p>
	{/if}
</Section>
