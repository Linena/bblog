---

sidebar: auto
title: CSS
desc: CSS,css代码实现瀑布流
keyword: CSS,css代码实现瀑布流
date: 2012-01-13 14:56:23

---

## css代码实现瀑布流

```css
.waterfall-container {    
    column-count: 2; /*分2列*/
}  
.waterfall-item {    
    break-inside: avoid;   /*不留白*/
}
```
<https://cloud.tencent.com/developer/article/1662195>

## 文字溢出自动隐藏显示

#### 超出三行自动隐藏显示省略号

```css
display:-webkit-box;
-webkit-line-clamp:3;
-webkit-box-orient:vertical;
overflow:hidden;
```

#### 单行文本

```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```


## 弹性盒子水平布局

**父级元素的设置：**

```css
display: flex; 
flex-direction: row;  //主轴的方向
flex-wrap: wrap;  //换行方式
justify-content: space-between;  //X轴对齐方式
align-items: center; // Y轴对齐
align-content: flex-start;  //多根轴线的对齐方式
```

`display: flex;`

`flex-direction: row; //主轴的方向`

`flex-wrap: wrap; //换行方式`

`justify-content: space-between;  //X轴对齐方式`

`align-items: center; // Y轴对齐`

`align-content: flex-start; //多根轴线的对齐方式`

**子级元素的一些设置：**

```css
order: 3;  //排列循序
flex-grow: 0; //放大比例，默认为0
flex-shrink: 1; //缩小比例，默认为1
align-self: auto; //允许单个项目有与其他项目不一样的对齐方式,默认为auto;
```

<http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html>

<https://www.runoob.com/css3/css3-flexbox.html>


## css 设置伪元素层级在父级下边

```css
#show_image{
    transform-style: preserve-3d;	
}
#show_image::before{
    transform: translateZ(-1px);  
}
```

<https://blog.csdn.net/G925010178/article/details/107847633>

## 解决手机端页面的鼠标点击出现蓝色背景

```css
* {
    -webkit-tap-highlight-color:transparent;
}
```

<https://blog.csdn.net/wuyou1336/article/details/78926322>

## 穿透遮罩

```
    pointer-events: none;
```

<https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events>








