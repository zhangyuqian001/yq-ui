<template>
  <div>
      <yq-button @click="secondDialog = true" type="primary">自定义Dialog</yq-button>
      <yq-dialog :visible.sync="secondDialog">
        <div>
          <yq-progress :percentage="55" :color="'#d4333c'"></yq-progress>
        </div>
      </yq-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return {
      firstDialog: false,
      secondDialog: false
    };
  }
};
</script>
