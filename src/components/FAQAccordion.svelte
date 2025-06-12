<script>
	import { slide } from 'svelte/transition';
	let isOpen = false;
	export let entry;
	const { title, description } = entry;
	const toggle = () => (isOpen = !isOpen);
</script>

<div class="accordion-wrapper w-[500px]">
	<div
		class="accordion-item
    border-ecsess-200 mb-4 overflow-hidden rounded-xl border-2
    {isOpen ? '' : 'open'}"
	>
		<button
			class="accordion-header hover:bg-ecsess-black-hover
            flex h-16 w-full cursor-pointer items-center justify-between
            px-4 transition-colors ease-in-out"
			on:click={toggle}
			aria-expanded={isOpen}
		>
			<span class="font-bold text-xl">{title}</span>
			<svg
				class="accordion-icon transform-cpu ease-in-out transition-all"
				width="20"
				height="20"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path d="M9 5l7 7-7 7" />
			</svg>
		</button>

		{#if isOpen}
			<div class="accordion-content max-h-fit border-t-2 border-t-ecsess-200 p-4 bg-transparent transition-all ease-in" transition:slide={{ duration: 300 }}>
				<p>{@html description}</p>
			</div>
		{/if}
	</div>
</div>

<style>
	[aria-expanded='true'] .accordion-icon {
		transform: rotate(90deg);
	}

	.accordion-item.open .accordion-header,
	.accordion-item.open .accordion-content {
		background-color: var(--color-ecsess-black-hover);
	}
</style>
