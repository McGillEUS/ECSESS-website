<script>
	import Button from 'components/Button.svelte';
	import ResourceCard from 'components/ResourceCard.svelte';
	import Section from 'components/Section.svelte';
</script>

<title> Component showroom for developers </title>

<Section>
    <Button>Button</Button>
    <ResourceCard></ResourceCard>
</Section>
<Section black>
    <Button>Button</Button>
    <ResourceCard title="Workshop feedback">
        Description of the workshop
    </ResourceCard>

</Section>
<Section>
    <Button>Button</Button>
</Section>
