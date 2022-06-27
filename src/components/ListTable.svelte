<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import dayjs from 'dayjs';

  export let notes;

  const viewDate = (date) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
  };
  const toHref = (id: number) => {
    window.location.href = `/notes/${id}`
  }
</script>

<div class="note-table">
  <DataTable table$aria-label="People list" style="width: 100%;">
    <Head>
      <Row>
        <Cell>ID</Cell>
        <Cell style="width: 30%;">Title</Cell>
        <Cell style="width: 70%;">Content</Cell>
        <Cell>Update</Cell>
      </Row>
    </Head>
    <Body>
      {#each notes as note}
        <Row on:click={() => toHref(note.id)} style="cursor:pointer;">
          <Cell>{note.id}</Cell>
          <Cell>{note.title}</Cell>
          <Cell>{note.content}</Cell>
          <Cell>{viewDate(note.updatedAt)}</Cell>
        </Row>
      {/each}
    </Body>
  </DataTable>
</div>

<style lang="scss">
  .note-table {
  }
</style>
