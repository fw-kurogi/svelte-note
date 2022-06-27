<script>
    import Button from "@smui/button";
    import {Label} from "@smui/fab";
    import {createEventDispatcher} from "svelte";
    import dayjs from "dayjs";

    export let note;

    const viewDate = (date) => {
        return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    };

    const dispatch = createEventDispatcher();
    const onRemove = () => {
        dispatch('remove')
    }
</script>

<div class="note-card">
    <div class="note-card-head">
        <span>Note Info</span>
        <div class="note-card-actions">
        <Button color="secondary" variant="outlined" on:click={onRemove}>
            <Label>DELETE</Label>
        </Button>
        </div>
    </div>
    <hr class="note-card-line">
    <div class="note-card-content">
        <ul>
            <li>
                <p>Title</p>
                <p>{note.title}</p>
            </li>
            <li>
                <p>ID</p>
                <p>{note.id}</p>
            </li>
            <li>
                <p>Content</p>
                <p>{note.content}</p>
            </li>
            <li>
                <p>Update</p>
                <p>{viewDate(note.updatedAt)}</p>
            </li>
        </ul>
    </div>
</div>


<style lang="scss">
  .note-card {
    background-color: #1E212AFF;
    border-radius: 6px;

    .note-card-head {
      color: #ffffff;
      font-size: 1.4rem;
      position: relative;
      padding: 16px 24px;
      line-height: 1.4;
      letter-spacing: 1px;
      border-radius: 5px 5px 0 0;
      display: flex;

      .note-card-actions {
        margin-left: auto;
      }
    }

    .note-card-content {
      ul {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        list-style: none;
      }

      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        text-decoration: none;
        width: 100%;
        box-sizing: border-box;
        text-align: left;
        padding: 12px 24px;

        p {
          margin: 0;
          width: 100%;
        }
      }
    }

    .note-card-line {
      margin: 0px;
      flex-shrink: 0;
      border-width: 0px 0px thin;
      border-style: solid;
      border-color: #2B2F3CFF;
    }
  }
</style>
