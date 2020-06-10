# Dialog组件
弹出对话框，内容属性可自由定制
## 基础用法
基础的dialog用法。

<demo-block>
::: slot source
<dialog-test1></dialog-test1>
:::

使用header属性来定义 dialog 的标题，使用Slot自定义dialog底部footer内容。

::: slot highlight
```html
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
```
```javascript
      export default {
        data() {
          return {
            firstDialog: false,
            secondDialog: false
          };
        }
      };
```
:::
</demo-block>

## 自定义用法
自定义的dialog用法。

<demo-block>
::: slot source
<dialog-test2></dialog-test2>
:::

使用visible属性来定义 dialog 的显示隐藏。

::: slot highlight
```html
    <div>
      <yq-button @click="secondDialog = true" type="primary">自定义Dialog</yq-button>
      <yq-dialog :visible.sync="secondDialog">
        <div>
          <yq-progress :percentage="55" :color="'#d4333c'"></yq-progress>
        </div>
      </yq-dialog>
    </div>
```
```javascript
      export default {
        data() {
          return {
            firstDialog: false,
            secondDialog: false
          };
        }
      };
```
:::
</demo-block>

## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
visible|是否显示dialog|Boolean|default|false
header| dialog传入的标题，也可通过slot传入 | String | - | -
width| dialog宽度，百分比/px	| String |-|30%
clickEmpty|是否可通过点击空白处关闭dialog	| Boolean | - | true

## Slot
name|说明
:-|:-
title|dialog标题内容，如不传不显示标题内容，标题显示header属性内容
footer|dialog底部footer内容，如不传则不显示footer内容