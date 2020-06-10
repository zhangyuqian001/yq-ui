# Input组件
常用input组件

## 基本用法
 

<demo-block>
::: slot source
<input-test1></input-test1>
:::

::: slot highlight
```html
<yq-input v-model="value" type="text" placeholder="请输入内容" name="username"></yq-input>
```
```javascript
export default {
    data() {
        return {
        value: ""
        }
    }
} 
```
:::
</demo-block>

## 禁用状态

<demo-block>
::: slot source
<input-test2></input-test2>
:::

通过 disabled 属性指定是否禁用 input 组件

::: slot highlight
```html
<yq-input v-model="value" type="password" :disabled="true" placeholder="请输入内容" name="username"></yq-input>
```
```javascript
export default {
    data() {
        return {
        value: ""
        }
    }
} 
```
:::
</demo-block>

## 可清空

<demo-block>
::: slot source
<input-test3></input-test3>
:::

使用clearable属性即可得到一个可清空的输入框

::: slot highlight
```html
<yq-input v-model="value" type="password" placeholder="请输入内容" name="username" clearable></yq-input>
```
```javascript
export default {
    data() {
        return {
        value: ""
        }
    }
} 
```
:::
</demo-block>

## 密码框 

<demo-block>
::: slot source
<input-test4></input-test4>
:::

使用show-password属性即可得到一个可切换显示隐藏的密码框

::: slot highlight
```html
<yq-input v-model="value" type="password" placeholder="请输入内容" name="username" show-password></yq-input>
```
```javascript
export default {
    data() {
        return {
        value: ""
        }
    }
} 
```
:::
</demo-block>

## 带 icon 的输入框
带有图标标记输入类型

<demo-block>
::: slot source
<input-test5></input-test5>
:::

可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标

::: slot highlight
```html
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
```
```javascript
export default {
    data() {
        return {
        value: ""
        }
    }
} 
```
:::
</demo-block>

## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
name|原生属性|String|-|-
type| 类型 | String | text，textarea 和其他 原生 input 的 type 值 | text
placeholder| 输入框占位文本	| String |-|-
value | v-model| String / Number | - | - | -
disabled | 是否禁用	| Boolean | - | false
clearable |是否清空	| Boolean | - | false
showPassword | 是否显示切换密码图标	| Boolean | - | false
prefixIcon | 输入框头部图标	| String | - | -
suffixIcon | 输入框尾部图标	| String | - | -