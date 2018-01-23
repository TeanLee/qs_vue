<template>
  <div>
      <h1>{{msg}} - {{ $route.params.username }}</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'I am hi page.'
        }
    }
}
</script>

<style>

</style>
