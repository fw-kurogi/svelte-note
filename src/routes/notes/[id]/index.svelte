<script context="module">
    export async function load({params, fetch}) {
        const {id} = params;

        const {note} = await fetch(`/notes/${id}.json`).then((res) => res.json());

        return {
            props: {note}
        };
    }
</script>

<script>
    import NoteCard from "../../../components/NoteCard.svelte";
    import {goto} from "$app/navigation";

    export let note;

    const onRemove = async () => {
        const res = await fetch(`/notes/${note.id}.json`, {
            method: "DELETE"
        }).then(res => {
            return res.json()
        })

        goto(`/notes`)
    }
</script>

<div class="note">
    <NoteCard {note} on:remove={onRemove} />
</div>

<style lang="scss">
  .note {
    padding: 30px 100px;
  }
</style>
