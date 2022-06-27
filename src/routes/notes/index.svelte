<script context="module">
  export async function load({ fetch }) {
    const { notes } = await fetch(`/notes.json`).then((res) => res.json());

    return {
      props: { notes }
    };
  }
</script>

<script lang="ts">
  import Fab, { Label, Icon } from '@smui/fab';
  import ListTable from '$components/ListTable.svelte';
  import CreateModal from '$components/CreateModal.svelte';
  import {invalidate} from '$app/navigation';

  export let notes;

  let modalOpen = false;

  const create = async (event: CustomEvent<{ title: string, content: string }>) => {
    const res = await fetch(`/notes.json`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event.detail)
    }).then(res => {
      return res.json()
    })

    modalOpen = false
    await invalidate(`/notes.json`)
  };
</script>

<div class="notes">
  <div class="menu-box">
    <h2 class="menu-title">Note List</h2>
    <div class="action-btn">
      <Fab color="primary" extended on:click={() => (modalOpen = true)}>
        <Icon class="material-icons">add</Icon>
        <Label>create</Label>
      </Fab>
    </div>
  </div>

  <ListTable {notes} />

  <CreateModal bind:open={modalOpen} on:create={create} />
</div>

<style lang="scss">
  .notes {
    padding: 30px;

    .menu-box {
      align-items: center;
      display: flex;
      justify-content: space-between;

      .menu-title {
        margin: 0px;
      }

      margin-bottom: 30px;
    }
  }
</style>
