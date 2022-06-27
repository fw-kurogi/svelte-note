<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  import Dialog, { Header, Title, Content } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import IconButton from '@smui/icon-button';
  import Textfield from '@smui/textfield';

  export let open;

  let titleState = {
    value: '',
    error: false
  };
  let contentState = {
    value: '',
    error: false
  };

  const dispatch = createEventDispatcher();
  const onCreate = () => {
    if (!titleState.value.length) {
      titleState.error = true;
    }
    if (!contentState.value.length) {
      contentState.error = true;
    }
    if (titleState.error || contentState.error) {
      return;
    }
    dispatch('create', {
      title: titleState.value,
      content: contentState.value
    });
  };
</script>

<div class="create-modal">
  <Dialog
    bind:open
    fullscreen
    aria-labelledby="fullscreen-title"
    aria-describedby="fullscreen-content"
  >
    {#if open}
    <Header>
      <Title>Create Note</Title>
      <IconButton action="close" class="material-icons">close</IconButton>
    </Header>
    <Content style="padding: 10px;">
      <Textfield
        label="Title"
        bind:value={titleState.value}
        variant="outlined"
        invalid={titleState.error}
        on:change={() => (titleState.error = false)}
        style="width: 100%;"
      />
      <Textfield
        textarea
        label="Content"
        bind:value={contentState.value}
        invalid={contentState.error}
        on:change={() => (contentState.error = false)}
        style="width: 100%; margin-top:20px"
      />
    </Content>
    <div class="mdc-dialog__actions">
      <Button variant="raised" on:click={onCreate}>
        <Label>Create</Label>
      </Button>
    </div>
      {/if}
  </Dialog>
</div>

<style lang="scss">
  .create-modal {
    .text-field {
      width: 100%;
    }
  }
</style>
