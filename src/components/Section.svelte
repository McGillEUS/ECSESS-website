<script>
	let { children = () => 'Section placeholder', black = false } = $props();

	let tailwindClasses = $state(
		'mx-auto flex min-h-[75vh] flex-col items-center justify-center gap-4 p-4 text-center text-ecsess-200'
	);

	if (black) {
		tailwindClasses += ' bg-ecsess-black';
	} else {
		// green background
		tailwindClasses += ' bg-ecsess-800';
	}
</script>

<div class={tailwindClasses}>
	{@render children()}
</div>
