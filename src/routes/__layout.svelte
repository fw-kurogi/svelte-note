<script>
  import '../app.scss';
</script>

<div id="root">
  <slot />
</div>

<style lang="scss">
  #root {
    display: block;
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    overflow: hidden;
  }
</style>
