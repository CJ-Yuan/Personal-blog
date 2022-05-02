// 根据可视宽度添加类名
const getWindowInfo = ()=>{
    let yuan =  document.documentElement.scrollWidth;
    let Id = document.getElementById("nav");
    if(yuan<=768){
    Id.classList.add("hide-menu")
    }else{
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