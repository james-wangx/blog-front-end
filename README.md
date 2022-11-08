# Blog front end 博客前端

## 一、全局设计

### 1.1 全局设置

比较简洁，没有使用前端框架，后端代码，只是 HTML + CSS + JS。

颜色：

- 页面背景颜色：aliceblue
- 显示内容的盒子背景色：white
- 盒子阴影色：gainsboro
- 页面强调色：dodgerblue
- 页面强调色（浅）：lightblue
- 页面强调色（深）：mediumblue

宽度

- 导航栏：最大宽度
- 导航栏内容：1190px
- 页面内容：1190px
- 页脚：最大宽度
- 内容左侧：页面内容的 70%
- 内容右侧：页面内容的 25%

页面

- 首页
- 文章详情页
- 登录/注册页

超链接无下划线

图标素材：https://www.iconfont.cn/

### 1.2 导航栏设计

每个页面都有导航栏

#### 1.2.1 外层导航栏

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667723639031-84e9a6ba-6f3e-4eea-92fe-bc295c13dc46.png" alt="img" style="zoom:50%;" />

（header 中的内容省略，这里只讲外壳，内容在后面讲）

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667718839162-7937c31b-2dcb-4180-bd78-449716472ca7.png" alt="img" style="zoom:50%;" />

将导航栏的所有内容都放到 header 标签内，通过 height 设置导航栏固定高度，设置上下 padding 使得内容可以夹在中间显示。

通过 box-shadow 设置导航栏盒子阴影向下偏移可以更好的凸显导航栏，产生一种导航栏在页面之上的感觉：

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667719988624-bf32a781-b325-4a04-92d7-4acc884a8401.png)

设置 position 为 sticky （粘贴）和 top 为 0 来固定导航栏的位置。效果是在导航栏距离顶部 0px
前相对定位，超过阈值后固定定位，即实现了导航栏一直固定在顶部的效果。如果设置 position 为 fixed
也可以实现固定定位，但整个导航栏会被移除正常文档流，并不为元素预留空间，使得下面的元素占据了原本是导航栏的位置：

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667721008581-6dded1a0-3582-46e7-b1ab-213e9b4bff6a.png)

如上图，下面的文章内容盒子直接占据了导航栏的位置，而且导航栏宽度也发生了变化。

关于 position 的详细解释：https://developer.mozilla.org/zh-CN/docs/web/CSS/position

文章有一个放大的过渡动画，当鼠标位于文章上时，整个文章内容会放大，这就会覆盖掉固定的导航栏：

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667721484038-2c07d95e-df45-4a95-8af2-f69da456f6e6.png)

可以使用 z-index 解决这个问题，当元素之间重叠的时候，z-index 较大的元素会覆盖较小的元素在上层进行显示。不妨将 z-index 设置为
10。

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667721616937-e70c950e-e159-4f48-8724-e8147887237b.png)

#### 1.2.2 导航栏内容

关于导航内容的设置：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667723686370-1eec01c2-64af-4c01-95ba-51695419aca3.png" alt="img" style="zoom:50%;" />

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667723735902-9997742f-ad41-4cf8-8d85-92f5a3bcecae.png" alt="img" style="zoom:50%;" />

真正的内容都在 nav 标签内，header 标签只是一个壳子，用来设置背景色，调整位置等。设置 margin 为 auto 使得整个导航栏内容居中。导航栏的超链接都是放在
ul li 组成的列表里面的，所以还需要设置很多的样式覆盖默认样式，marigin: 0; padding: 0 等。

#### 1.2.3 输入框

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667723763369-204679d2-ff14-4feb-b7be-0ec4e2ae76d6.png)

设置 autocomplete 为 off 可以不显示一些奇怪的搜索记录，placeholder 中的内容是当输入框没有输入时显示的内容。label
标签在这里没有实际的用处，放上去只是不想看到 IDE 的黄色警告。

输入框样式：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667723813656-a006dd06-a4c4-4dfb-b693-e6fd89cd9351.png" alt="img" style="zoom:50%;" />

设置 focus 伪类选择器当聚焦于输入框时，输入框的宽度会缓缓变宽。设置 transition 使得宽度的过度时间为 0.5 秒，ease-in-out
表示过度时一开始和最后都比较慢，详细请看：https://developer.mozilla.org/zh-CN/docs/web/CSS/transition

#### 1.2.4 登录按钮

这只是一个不怎么合适的名字，并不代表它一定是登录按钮。确切的说：当用户没有登录时它显示一个登录按钮，当用户登录后它显示一个下拉框，用户可以看到用户名，并且可以退出登录。HTML
代码就这么点：

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667723854952-f20eab08-b210-45ce-add2-410a46e13eb7.png)

它的内容是 JS 在判断是否登录后填充的。

### 1.3 页脚设计

每个页面都有页脚

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667726239665-c539cebc-7463-49de-848d-92642f33001f.png" alt="img" style="zoom:50%;" />

页脚样式：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667726801524-50461a9c-4848-4597-adf2-834855b868ab.png" alt="img" style="zoom:50%;" />

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667726820578-56243995-96f1-4e04-a0d1-abf3b8d34c0c.png" alt="img" style="zoom:50%;" />

同样 footer 标签只是一个外壳，用来设置背景色，调整位置等。真正的内容在 id 为 footer 的 div 标签中。页脚内容就是简单的三行信息，设置
text-align 为 center 使它们居中显示。设置页脚的内容宽度为 1190px，与导航栏内容、页面内容的宽度保持一致。设置页脚的阴影和导航栏类似，不再赘述。

## 二、首页

### 2.1 简略框架

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667718489893-e7e0fbdd-6a67-44db-9248-f4b910730f8f.png)

### 2.2 左右分割

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667727857795-1d812a49-8463-4c9d-b980-4ec49a6e57f8.png" alt="img" style="zoom:50%;" />

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667727887891-87c1bee3-6280-4e4f-ad41-1ae3ad4f6fe5.png" alt="img" style="zoom:50%;" />

通过 float 将 div 分割成左右两部分

### 2.3 左侧内容

#### 2.3.1 文章列表

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667728258094-c9806041-f3f5-44ec-b054-094a0d8cd9ea.png)

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667728307898-1c2df4f2-34af-45c0-9683-827f81625cf0.png" alt="img" style="zoom:50%;" />

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667728332628-41e88b4f-1f29-4596-8822-1ef1090b5cdd.png" alt="img" style="zoom:50%;" />

设置 transform: scale(1.05) 当鼠标位于某一文章块上时，该块会放大 1.05 倍，通过 transition: transform .5s ease-in-out
设置这一过程的过渡时间为 0.5s。border-radius 可以设置边框的圆角，值越大，圆角越大。设置box-shadow: 5px 5px 5px gainsboro
使得阴影水平向右，竖直向下偏移，在视觉上可以更好地分隔文章块。

#### 2.3.2 分页

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667738325166-2aa317f6-80f4-471a-b3d2-be1bf70aa306.png" alt="img" style="zoom:50%;" />

分页样式：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667738693946-9a098faa-7b26-4523-bdf0-bdaa076957c9.png" alt="img" style="zoom:50%;" />

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667738710268-4c2da551-638f-4cb2-b463-4e573a5f6741.png" alt="img" style="zoom:50%;" />

页脚的设计远比想象的要烦的多，首先需要一个 div 外框放置分页所在的行，里面再套一个 div 放置真实的内容。页码放在 ul > li > a
标签中，需要很多设置覆盖默认的样式。尤为重要的一点是：行标签（例如 a、span等）是存在间距的，只有设置其父元素的 font-size 为
0，再设置行标签的 font-size 才能消除间距。例如我的分页打算给 a 标签设置一个左边框，这样可以使每个页码明显的分开，但事实上 a
标签之间默认是存在间距的：

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667739858223-022dc995-83bc-4284-b25b-61d49b9aa2fb.png)

上图中绿色及以内的才是 a 标签的大小，但是可以明显看到距离右边第三个标签的左边框存在一定的距离，这个距离就是默认的行标签的间距。为了消除间距，使每个页码都居中显示，可以设置
ul 或者 li 的 font-size 为 0，再指定 a 的 font-size，效果如下：

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667739808566-f024085c-c10c-4919-b8a9-b29f99f7b394.png)

### 2.4 右侧固定栏

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667728824262-f5d5fdf7-ae5c-4faa-bbd6-48c4d76332af.png" alt="img" style="zoom:50%;" />

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667728960517-e9cbe8a0-9283-42bd-bbe0-df3aa4a3bb85.png" alt="img" style="zoom:50%;" />

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667728978477-3ca96edd-47fe-4954-8126-39d7487fa21c.png" alt="img" style="zoom:50%;" />

为了实现右侧的固定，还需要在里面套一个 div，因为 class 为 right 的 div 宽度已经固定了，而且位置就在内容的右侧，所以设置内
div 再设置固定时只需要指定 top 距离顶部的距离，无需设置左右侧的距离。如果仅固定外层 right 的 div 同时只设置
top，就会出现下面的奇怪布局：

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667729263313-0abe878a-f9f7-4b3e-8ae4-8e36c4632342.png)

虽然也实现了固定，但由于没有指定左右的距离，导致 left 和 right 都为默认的 auto，整个右边栏会跑到内容块的最左边。

#### 2.4.1 热门文章

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667729459096-26693552-221c-4159-8a5b-07f81e2e41a3.png" alt="img" style="zoom: 50%;" />

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667729532831-5291ae1c-9a08-4aab-b22d-5ecc4b16e20a.png" alt="img" style="zoom:50%;" />

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667729584855-db9fefc3-f7a0-4ee8-95f0-bb517ede95d3.png" alt="img" style="zoom:50%;" />

都是常规的 CSS 样式，没有什么特殊需要注意的地方

#### 2.4.2 文章标签

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667737542441-545fe65a-7765-4ea9-9286-9b27884f5cdb.png" alt="img" style="zoom:50%;" />

标签样式：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667738123953-52678e03-71e7-49ec-bf59-f0b227c55138.png" alt="img" style="zoom:50%;" />

随机背景色：

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667737689321-d486c679-8e88-4401-b34b-8dd3046b09ff.png)

在 JS 中通过 CSS 选择器定位到标签，然后遍历标签数组，为这些标签赋值随机背景色。在 CSS 中使用 !important
可以加强当前样式的权重，覆盖其它样式。这里的样式意思是强制使超链接继承 span 的字体颜色，即黑色，当鼠标放在 span
标签上时，标签的背景色和超链接的字体颜色会一起改变。统一在 span 中设置过渡时间为 0.5s。

## 三、文章详情页

导航栏和页脚和首页的一样，需要做的是中间的内容部分。一般来说前端通过 Markdown 编辑器编写文章，然后将 Markdown
字符串存储在数据库中。在浏览文章时，后端代码再从数据库中读出 Markdown 字符串，将其转成 HTML 后再返回给前端。所以这里演示的内容也是先写成
Markdown 再转成 HTML 的。例如在 Typora（一个Markdown编辑器）中写好文章后，可以直接导出为 HTML。

### 3.1 简略框架

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667742725423-27e85b99-a2d1-4760-b073-52226f3b92c3.png)

### 3.2 左右分割

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667743513946-ff85b1be-8060-4e6b-a738-6433ae08b8a8.png" alt="img" style="zoom:50%;" />

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667743536599-7f810333-e140-414d-af8b-082fe2601b6d.png" alt="img" style="zoom:50%;" />

由于每个文章的长度未知，所以左侧文章的高度无法确定。再加上子元素设置了 float，导致其脱离了标准文档流，父元素（class 为 detail
的 div）的高度也无法确定。出现的怪象如下：

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667743940181-7d423bbd-d155-49a8-a9e0-8d71a196ec69.png)

上图可以看到本该在最下面的页脚到了上面，原因是整个内容部分的高度为0。

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667744044933-3569f1fe-7426-464a-88f3-623857e94325.png)

可以在 detail 的外层再套一个 div，通过设置其 overflow 属性为 auto 解决此问题，这时最外层的 div 就有了高度可以正好包住文章内容，把页脚挤下去。

此外，这个 “外壳” 还有一个作用，就是可以显示左右侧的阴影了，需要设置外壳的宽度稍微比内容大一点。

### 3.3 左侧内容

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667744342583-c2af027b-9b46-4317-8a93-11aaeba50471.png)

这是由 Markdown 字符串转成的 HTML 代码，除此之外还需要一些特别的样式：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667744429826-5f454510-43e7-458e-8923-56a641952cbe.png" alt="img" style="zoom:50%;" />

默认的段落标签上下 margin 都为 16，导致文章看起来十分松散，这里直接让 margin-bottom 归零。

### 3.4 右侧固定文章目录

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667745044983-1b83522b-f03b-4042-b74c-b3f63ace8d24.png" alt="img" style="zoom:50%;" />

可以用锚点实现文章目录跳转的功能，即指定超链接为 ”# + 要跳转到的标签的
id“。但是默认的跳转会直接跳到指定标题位置，没有一个过渡的过程，就听突然的。而且跳转后发现导航栏遮挡了一部分内容，以下 CSS
就可以解决这些问题：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667745308651-fa8df09f-e588-4da6-8de3-cf0e8fa7db52.png" alt="img" style="zoom:50%;" />

剩下的是文章目录的一些简单样式：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667745389786-b4462653-a05a-478a-afd0-5d5a9667078b.png" alt="img" style="zoom:50%;" />

定位设置和上文首页中的设置差不多，.catalog 是被包裹在 .right 中的，后者有了确切的位置和宽度，故这里设置固定位置也只需要指定
top。

### 3.5 返回顶部

这是一个实用性很强的按钮，当浏览了很多内容后仍然一窍不通时，可以点击这个按钮返回文章顶部，再从头看起。

HTML代码就这么点：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667745759582-827c4321-566b-4795-b2a2-07531e32dcf1.png" alt="img" style="zoom:50%;" />

这是它的样式：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667745918252-9383ef44-8ed0-4ca0-8a33-46cf0445fc49.png" alt="img" style="zoom:50%;" />

重点是 visibility 和 opacity 这两个属性，通过下面 JS 代码的配合可以控制按钮的显示：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667746064422-b2b61d87-80f1-44ea-bcf8-2338ab9d493b.png" alt="img" style="zoom:50%;" />

当载入页面时，visibility 为 hidden，opacity 为 0 表示按钮不显示。当页面垂直滚动的像素数大于 500 时，设置 visibility 为
visible，opacity 为 1 表示显示按钮。加上 CSS 中设置的过渡效果，opacity（透明度） 从 0 到 1 这个效果将会在 0.5s
过渡完成。当垂直滚动的像素数小于 500 时，再将其设置回去，同样带有过渡效果。

## 四、登录/注册页

### 4.1 简略框架

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667746849471-a31d8a3b-d83f-4847-b8df-dfa256d45cac.png)

### 4.2 页面和样式

登录和注册页面都差不多

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667746932711-a974f38b-567c-46f2-8994-4190873c03be.png" alt="img" style="zoom:50%;" />

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667746973825-f00eefd2-6d7d-41d3-8e99-78bb53e382f5.png" alt="img" style="zoom:50%;" />

两个页面用的是一个 CSS 文件

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667747016379-1c6d96c1-75b4-4658-b1f2-a14aca4e1e4d.png" alt="img" style="zoom:50%;" />

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667747035834-0e326252-bb78-41b3-a7c2-1367e7bb225c.png" alt="img" style="zoom:50%;" />

需要注意的是因为中间的内容不够多，准确说是不够高，导致页脚并不是在页面的最下面：

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667747185106-1e6d8b82-17b6-4537-97c5-30ea72f88dad.png)

因此还需要固定一下页脚：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667747217307-aacd3a39-0baa-4141-817a-885e39022818.png" alt="img" style="zoom:50%;" />

在设置好宽度后，可以只指定底部的距离。

### 4.3 登录与退出登录

想要实现这个功能一般需要后端代码和数据库的支持，纯前端可以在 JS 中可以使用 Web Storage 技术模拟这一实现。基本思路就是用 JS
判断账号密码，正确无误后往 localStorage 中写入数据，直接跳转主页。加在页面时判断是否登录来显示不同的页面。退出登录时删除
localStorage 中的数据并刷新页面。

下图是点击登录按钮后发生的操作：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667905995635-1d3041ec-3741-4798-b2d3-e1608119deba.png" alt="img" style="zoom:50%;" />


这是加在页面时发生的操作：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667747745971-77ba545d-115a-4a26-a194-40f25a053ea4.png" alt="img" style="zoom:50%;" />

关于这部分由 JS 添加的 HTML 代码，CSS 中已经先有了它们的相关样式：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667747891404-2bcdb9f4-a7b8-49f8-84d3-514babbc02db.png" alt="img" style="zoom:50%;" />

下面是一个可有可无的功能，只是在模仿后端的工作：

<img src="https://cdn.nlark.com/yuque/0/2022/png/2635347/1667748050532-28adc986-0251-44aa-ad21-291240cea800.png" alt="img" style="zoom:50%;" />

如果用户已经登录，再访问 login 页面时就会弹出警告框，返回首页。

![img](https://cdn.nlark.com/yuque/0/2022/png/2635347/1667748142688-0ccf6c1c-5e10-49e3-8050-a26b27e5416e.png)
