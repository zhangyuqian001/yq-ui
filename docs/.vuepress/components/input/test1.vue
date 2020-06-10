<template>
  <div>
    <yq-input v-model="value" type="text" placeholder="请输入内容" name="username"></yq-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    }
  }
}
</script>