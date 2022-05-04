// 根据可视宽度添加类名
const getWindowInfo = ()=>{
    // 获取可视区域宽度
    let yuan =  document.documentElement.scrollWidth;
    let Id = document.getElementById("nav");
    // 判断是否为移动端
    if(yuan<=768){
        // 添加函数
    Id.classList.add("hide-menu")
    }else{
        // 删除函数
    Id.classList.remove("hide-menu")
    }
};

// 防抖
const debounce = (fn,delay)=>{
    let time;
    return ()=>{
        if(time) clearTimeout;
        time = setTimeout(()=>{
            fn();
        },delay);
    }
}

const yuange = debounce(getWindowInfo,500);

//监听可视区域的宽度
window.addEventListener('resize',yuange);