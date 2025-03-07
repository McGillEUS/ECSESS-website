<script>
	import NavButton from './NavButton.svelte';
    
</script>

<nav class="bg-ecsess-black text-ecsess-200 mx-auto flex min-w-fit flex-wrap items-center justify-center px-4 pt-4">
	<NavButton href="/">Home</NavButton>
	<NavButton href="/council">Meet the council</NavButton>
	<NavButton href="/events">Events</NavButton>
	<NavButton href="/resources">Resources</NavButton>
	<NavButton href="/join">Join ECSESS</NavButton>
    {#if import.meta.env.DEV} 
    <NavButton href="/components">Componenets</NavButton>
    {/if}
</nav>
