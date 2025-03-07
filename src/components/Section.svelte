<script>
    let { children = () => "Section placeholder" } = $props();
</script>

<div class="container mx-auto px-4 py-6 flex flex-col items-center justify-center gap-4 text-center">
    {@render children()}
</div>
