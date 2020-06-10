<template>
  <div>
    <yq-input
      v-model="value"
      type="password"
      placeholder="请输入内容"
      name="username"
      prefix-icon="edit"
    ></yq-input>
    <yq-input
      v-model="value"
      type="password"
      placeholder="请输入内容"
      name="username"
      suffix-icon="edit"
    ></yq-input>
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