<script>
    import '../app.css';
	import Navbar from 'components/NavBar.svelte';
	import Footer from 'components/Footer.svelte';
    
	let { children } = $props();
</script>

<Navbar />
<div class="h-screen bg-ecsess-800">
	{@render children()}
	<Footer />
</div>

<style>
    @reference tailwindcss;
</style>