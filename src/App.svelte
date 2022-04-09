<script lang="ts">
    import MidiNodes from "./svelte/MidiNodes.svelte";
</script>

<main>
    <MidiNodes />
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");
    :global(body) {
        font-family: "Comfortaa", sans-serif;
        letter-spacing: 0.075ch;
        background: black;
        color: white;
    }
    :global(html, body, #app) {
        height: 100%;
        width: 100%;
        margin: 0px;
        overflow: clip;
    }
    main {
        height: 100%;
        width: 100%;
    }
</style>
