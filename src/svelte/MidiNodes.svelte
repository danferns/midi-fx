<script lang="ts">
    import Node from "./node.svelte";
    import Path from "./Path.svelte";
    import { Instances, instances } from "../ts/editor/instances";

    let localInstances: Instances = {};

    instances.subscribe((val: Instances) => {
        localInstances = val;
    });
</script>

<main>
    {#each Object.entries(localInstances) as [key, instance]}
        <Node
            id={key}
            outputs={instance.outputs}
            inputs={instance.inputs}
            x={instance.x}
            y={instance.y}
            gui={instance.component}
        />

        {#each Object.entries(instance.outputs) as [outputName, output]}
            {#each [...output.connections.values()] as connection}
                <Path
                    x1={localInstances[key].outputs[outputName].x}
                    y1={localInstances[key].outputs[outputName].y}
                    x2={localInstances[connection[0]].inputs[connection[1]].x}
                    y2={localInstances[connection[0]].inputs[connection[1]].y}
                    active={output.active}
                />
            {/each}
        {/each}
    {/each}
</main>

<style>
    main {
        height: 100%;
        width: 100%;
    }

    :global(:root) {
        --background: hsl(0 0% 10%);
        --background-accent: hsl(0 0% 20%);
        --background-accent-focused: hsl(0 0% 30%);
    }
</style>
