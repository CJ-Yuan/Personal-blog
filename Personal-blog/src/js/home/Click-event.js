// 返回顶部按钮等
    //监听滚动条
document.body.onscroll = ()=>{
    // 获取当前滚动条位置
    let heightTop = document.documentElement.scrollTop;
    //判断
    if(heightTop >200){
        // 显示回到顶部按钮
        div.style.opacity="0.8";
        div.style.transform="translateX(-58px)"
    }else{
        // 隐藏
        div.style.opacity="0";
        div.style.transform="translateX(0px)"
        clearInterval();
    }
}

// 获取按钮
let div = document.getElementsByClassName('rightside')[0];
//为按钮绑定一个点击事件 
div.onclick = ()=>{
    Top();
}
// 返回顶部代码
const Top=()=>{
    //把内容滚动指定的像素，第一个参数向右滚动条的像素数，第二个参数条是向下滚动的像素数
    window.scrollBy(0,-100)
    let scrolldelay = setTimeout('Top()',20);
    let sTop = document.documentElement.scrollTop;
    if(sTop == 0) clearTimeout(scrolldelay);
}



// 点击下拉按钮，页面下滑
let sTop = document.getElementById("scroll-down");

sTop.onclick=()=>{
    drop();
}

var drop = () => {
    // 获取当前可视高度
    let a =  document.documentElement.clientHeight;
    window.scrollBy(0,20)
    let scrolldelay = setTimeout('drop()',10);
    let sTop = document.documentElement.scrollTop;
    if(sTop >= a) clearTimeout(scrolldelay);
}

// 
let menus = document.getElementById('toggle-menu');
    menus.onclick = ()=>{
        let mask = document.getElementById('sidebar');
            mask.style.display="block"
    }

let menusk = document.getElementById('menu-mask');
    menusk.onclick = ()=>{
        let mask = document.getElementById('sidebar');
        mask.style.display="none"
}