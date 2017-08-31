# CN_TM
麦通内贸站展示厅在线聊天界面


### 8.31更新
- 打开设置弹窗可能会存在延迟 ，为此给`设置icon`添加了动画效果：  

```
<i class="iconfont iconfont-set"></i>
``` 

当点击icon时，在上面代码中追加`.set-load`，等设置弹窗加载完毕后remove`.set-load`

- 更新了消息记录的样式