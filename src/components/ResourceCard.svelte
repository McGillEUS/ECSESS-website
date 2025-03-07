<script>
	import Button from './Button.svelte';
    import Link from './Link.svelte';
	let { title = '_Resource Title_', children = () => {}, link = "https://example.com"} = $props();
</script>

<div class="bg-ecsess-200 w-96 rounded-lg px-8 py-4">
	<p class="text-ecsess-black text-xl font-semibold pb-2">
		{title}
	</p>

	<p class="text-ecsess-black text-base font-normal py-2">{@render children()}</p>

    <Link href={link}>
        <Button>Access</Button>
    </Link>
</div>
