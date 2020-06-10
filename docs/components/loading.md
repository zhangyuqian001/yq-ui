
# Loading组件
常用loading组件。
## 全局用法
基础的全局loading用法。

<demo-block>
::: slot source
<loading-test1></loading-test1>
:::

加载效果，全屏加载

::: slot highlight
```html
   <div>
    <yq-button type="primary" @click="displayLoad1">全屏loading</yq-button>
    <yq-loading :visible="showLoading1"></yq-loading>
  </div>
```
```javascript
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
```
:::
</demo-block>

## 局部用法
基础的局部loading用法。

<demo-block>
::: slot source
<loading-test2></loading-test2>
:::

加载效果，指定目标区域加载

::: slot highlight
```html
  <div>
    <yq-button type="primary" @click="displayLoad2">局部loading</yq-button>
    <div style="position:relative;width:500px;height:200px;border:1px solid #333;margin-top:10px">
      <yq-loading :visible="showLoading2" :position="'absolute'"></yq-loading>
    </div>
  </div>
```
```javascript
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
```
:::
</demo-block>

## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
visible|是否显示loading|Boolean|-|false
position| 切换全屏/指定区域加载loading | String | fixed/absolute | absolute

## 注意
name|说明
:-|:-
position|使用position属性控制loading显示区域时，需要注意的是，区域加载loading是通过定位控制的，如果指定区域加载loading，需要在区域父元素增加position:relative属性，否则在复杂页面中会出现混乱