<script>
	let { children = () => 'Section placeholder', black = false } = $props();
</script>

{#if black}
	<div
		class="bg-ecsess-black mx-auto flex min-h-[75vh] flex-col items-center justify-center gap-4 p-4 text-center text-ecsess-200"
	>
		{@render children()}
	</div>
{:else}
	<div
		class="bg-ecsess-800 mx-auto flex min-h-[75vh] flex-col items-center justify-center gap-4 p-4 text-center text-ecsess-200"
	>
		{@render children()}
	</div>
{/if}
