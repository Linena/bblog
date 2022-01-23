---

sidebar: auto
title: HTML
desc: HTML,QQ,Banner,刷新,拖动排序插件,数据变异,页面刷新
keyword: HTML,QQ,Banner,刷新,拖动排序插件，数据变异，页面刷新
date: 2012-01-13 14:56:23

---

## html 跳转QQ加好友

#### 手机端：

```html
<a href="mqqapi://im/chat?chat_type=wpa&uin=QQ号码"></a>
```


#### 电脑端：

```html
<a href="http://wpa.qq.com/msgrd?v=3&uin=QQ号码&site=qq&menu=yes  "></a>
```


#### 电脑端二：

```html
<a href="tencent://message/?Menu=yes&amp;uin=QQ号码&amp;Site=80fans&amp;Service=300&amp;sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a545b1714f9d45"></a>
```




## 拖动排序插件


#### sortablejs 移动端 h5 PC端 拖动排序

<https://github.com/SortableJS/Sortable>

#### 配置项（回调函数）

<https://www.itxst.com/sortablejs/neuinffi.html>



## 数据变异

#### 方法一：

JSON.parse(JSON.stringify(That.headerNavList)); // 转化为json数据重新赋值

```javascript
let That = this;
let temp = JSON.parse(JSON.stringify(That.headerNavList));
let Dom = $(event.currentTarget);
let thisTableTr = Dom.parent().parent().parent();
let index = thisTableTr.index();
let thisNextData = temp[index + 1];
temp[index + 1] = temp[index];
temp[index] = thisNextData;
That.headerNavList = temp;
```


#### 方法二：

```javascript
moveDownColumn:async function (event) {
    let Dom = $(event.currentTarget);
    let That = this;
    let thisTableTr = Dom.parent().parent().parent();
    let index = thisTableTr.index();
    console.log(That.headerNavList[index],That.headerNavList[index + 1])
    let thisNextData = That.headerNavList[index + 1];
    That.headerNavList[index + 1] = That.headerNavList[index];
    That.headerNavList[index] = thisNextData;
    console.log(That.headerNavList)
    await this.$forceUpdate();

}
```

<https://www.html.cn/qa/vue-js/16379.html>




## html 检测页面刷新


**html 检测 页面刷新 关闭页面  触发**

````javascript
// 判断刷新页面
$(window).bind('onbeforeunload', function (event) {
    event.returnValue = "系统可能不会保存您所做的更改。";
});

// 判断离开页面
$(window).bind('beforeunload', function () {
    return '您输入的内容尚未保存，确定离开此页面吗？';
});
````

<https://blog.csdn.net/simon_cm/article/details/79623258>

## textarea高度根据内容自适应

```javascript
(function($){
    $.fn.autoTextarea = function(options) {
        var defaults={
            maxHeight:null,
            minHeight:$(this).height()
        };
        var opts = $.extend({},defaults,options);
        return $(this).each(function() {
            $(this).bind("paste cut keydown keyup focus blur",function(){
                var height,style=this.style;
                this.style.height = opts.minHeight + 'px';
                if (this.scrollHeight > opts.minHeight) {
                    if (opts.maxHeight && this.scrollHeight > opts.maxHeight) {
                        height = opts.maxHeight;
                        style.overflowY = 'scroll';
                    } else {
                        height = this.scrollHeight;
                        style.overflowY = 'hidden';
                    }
                    style.height = height + 'px';
                }
            });
        });
    };
})(jQuery);
$(".SettingCompany-con-ul-li-input").autoTextarea({
    minHeight:30
});
```