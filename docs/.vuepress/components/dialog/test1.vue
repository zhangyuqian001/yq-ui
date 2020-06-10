<template>
  <div style="margin-bottom:20px">
    <yq-button @click="firstDialog = true">打开Dialog</yq-button>
    <yq-dialog :visible.sync="firstDialog" :header="'标题'">
      <div>dialog内容</div>
      <div slot="footer">
        <yq-button @click="firstDialog = false">取消</yq-button>
        <yq-button @click="firstDialog = false" type="info">确定</yq-button>
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
