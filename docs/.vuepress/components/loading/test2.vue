<template>
  <div>
    <yq-button type="primary" @click="displayLoad2">局部loading</yq-button>
    <div style="position:relative;width:500px;height:200px;border:1px solid #333;margin-top:10px">
      <yq-loading :visible="showLoading2" :position="'absolute'"></yq-loading>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLoading2: false
    };
  },
  methods: {
    displayLoad2() {
      this.showLoading2 = true;
      setTimeout(() => {
        this.showLoading2 = false;
      }, 2000);
    }
  }
};
</script>