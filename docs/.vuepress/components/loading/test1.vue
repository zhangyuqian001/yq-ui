<template>
  <div>
    <yq-button type="primary" @click="displayLoad1">全屏loading</yq-button>
    <yq-loading :visible="showLoading1"></yq-loading>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLoading1: false,
    };
  },
  methods: {
    displayLoad1() {
      this.showLoading1 = true;
      setTimeout(() => {
        this.showLoading1 = false;
      }, 2000);
    }
  }
};
</script>