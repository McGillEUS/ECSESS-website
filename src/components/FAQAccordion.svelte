<script>
  import { slide } from "svelte/transition";
  import '/src/app.css';
  export let entry;
  const { title, description } = entry;
  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
</script>

<div class="accordion-wrapper">
  <div class="accordion-item {isOpen ? 'open' : ''}">
    <button
      class="accordion-header"
      on:click={toggle}
      aria-expanded={isOpen}
    >
      <span class="title">{title}</span>
      <svg
        class="accordion-icon"
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
      <div class="accordion-content" transition:slide={{ duration: 300 }}>
        <p>{@html description}</p>
      </div>
    {/if}
  </div>
</div>

<style>
  .accordion-wrapper {
    width: 500px;
  }

  .accordion-item {
    border: 2px solid var(--color-ecsess-200);
    border-radius: 0.75rem;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 1rem;
    width: 100%;
    color: inherit;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }

  .accordion-header:hover {
   background-color: var(--color-ecsess-black-hover);
  }

  .accordion-icon {
    transition: transform 0.3s ease;
  }

  [aria-expanded="true"] .accordion-icon {
    transform: rotate(90deg);
  }

  .accordion-content {
    max-height: 100px;
    overflow-y: auto;
    padding: 1rem;
    border-top: 1px solid var(--color-ecsess-200);
    color: var(--color-ecsess-200);
    background-color: transparent;
    transition: background-color 0.3s ease;
  }

  .accordion-item.open .accordion-header,
  .accordion-item.open .accordion-content {
    background-color: var(--color-ecsess-black-hover);
  }

  .title {
    font-weight: bold;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
  }
</style>
