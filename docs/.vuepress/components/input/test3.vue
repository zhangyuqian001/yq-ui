<template>
  <div>
    <yq-input v-model="value" type="password" placeholder="请输入内容" name="username" clearable></yq-input>
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