<script lang="ts">
  import Button, { Label } from '@smui/button';
</script>

<div class="login">
  <div class="login-box">
    <h1>Welcome to SvelteNotes</h1>
    <div class="login-btn">
      <Button variant="raised" href="/notes">
        <Label>List</Label>
      </Button>
    </div>
  </div>
</div>

<style lang="scss">
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 570px);
    padding: 65px 30px 75px;

    .login-box {
      background-color: #111827;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 10px 15px;
      padding: 32px;
    }

    .login-btn {
      text-align: center;
    }
  }
</style>
