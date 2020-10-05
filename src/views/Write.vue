<template>
  <div class="write">
    <h1>This is a write page for {{ this.soldier }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      soldier: this.$route.params.soldier
    };
  }
};
</script>
