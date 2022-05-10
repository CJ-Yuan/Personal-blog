// 向html插入导航栏

var nav = ` <!-- 导航栏 -->
<nav id="nav" class="show">
    <!-- 名字 -->
    <span id="blog_name"><a id="site-name" href="#">CJY</a></span>
    <!-- 菜单 -->
    <div id="menus">
        <!-- 搜索按钮 -->
        <div id="search-button">
            <a class="site-page group" href="../html/searchpage.html">
                <!-- 图标 -->
               <i class="iconfont icon-icon-test5"></i>
               <span>搜索</span>
            </a>
        </div>
        <!-- 菜单和菜单项 -->
        <div class="menus_items">
            <!-- 首页 -->
            <div class="menus_item">
                <a class="site-page group" href="../index.html">
                    <i class="iconfont icon-icon-test2" ></i>
                    <span>首页</span>
                </a>
            </div>
            <!-- 目录 -->
            <div class="menus_item">
                <a class="site-page group" href="#">
                    <i class="iconfont icon-icon-test14"></i>   
                    <span>目录</span>
                    <i class="iconfont icon-icon-test32"></i>
                </a>
                <!-- 目錄下的二級目錄 -->
                <ul class="menus_item_child">
                    <li>
                        <a class="" href="">
                            <i class=""></i>
                            <span>演示1</span>
                        </a>
                    </li>
                    <li>
                        <a class="" href="">
                            <i class=""></i>
                            <span>演示2</span>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- 文档 -->
            <div class="menus_item">
                <a class="site-page group" href="#">
                    <i class="iconfont icon-icon-test4"></i>
                    <span>文檔</span>
                    <i class="iconfont icon-icon-test32"></i>
                </a>
                <!-- 文檔下的二級目錄 -->
                <ul class="menus_item_child">
                    <li>
                        <a class="" href="">
                            <i class=""></i>
                            <span>演示1</span>
                        </a>
                    </li>
                    <li>
                        <a class="" href="">
                            <i class=""></i>
                            <span>演示2</span>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- 娱乐 -->
            <div class="menus_item">
                <a class="site-page group" href="#">
                    <i class="iconfont icon-icon-test7"></i>
                    <span>娱乐</span>
                    <i class="iconfont icon-icon-test32"></i>
                </a>
                <!-- 娛樂下的二級文檔 -->
                <ul class="menus_item_child">
                    <li>
                        <a class="" href="./五子棋/五子棋.html">
                            <i class=""></i>
                            <span>五子棋</span>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- 留言板 -->
            <div class="menus_item">
                <a class="site-page group" href="#">
                    <i class="iconfont icon-icon-test"></i>
                    <span>留言板</span>
                </a>
            </div>
            <!-- 关于 -->
            <div class="menus_item">
                <a class="site-page group" href="../html/about.html">
                    <i class="iconfont icon-icon-test20"></i>
                    <span>关于</span>
                </a>
            </div>
        </div>
    </div>
</nav>`

var yuan = document.getElementsByClassName('header-nav')[0].innerHTML = nav;