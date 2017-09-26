# CN_TM
麦通内贸站展示厅在线聊天界面



### 9.26更新
- 修复IE8和Firefox浏览器兼容性问题

### 9.22更新
- 新增初始化窗口加载层

```
<div class="init">
        <img src="img/logo_n.png" alt="" width="400px"/>
        <br/>
        <img src="img/progress.gif" alt="" class="init-loading"/>

        <p>加载中，请稍后...</p>
    </div>
```
默认`display:block`，当页面加载结束后`display:none`


### 9.14更新
- 新增登录失败提示

### 8.31更新
- 打开设置弹窗可能会存在延迟 ，为此给`设置icon`添加了动画效果：  

```
<i class="iconfont iconfont-set"></i>
``` 

当点击icon时，在上面代码中追加`.set-load`，等设置弹窗加载完毕后remove`.set-load`

- 更新了消息记录的样式