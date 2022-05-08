var oInput = document.getElementById('yuan1'),
oUl = document.getElementById('yuan2');
oInput.oninput = function(){
var value = this.value;
var oScript = document.createElement('script');
oScript.src = 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1458,21097,30186,29568,29700,29221&wd='+ value +'&cb=doJson';
document.body.appendChild(oScript);
}

function doJson(data){
var g = data.g,
str = '';
if(g){
    g.forEach(function(ele, index){
    //console.log(ele.q);
    //var q = ele.q;
    str += '<li><a href = https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=' + ele.q + '>' + ele.q + '</a></li>'
    })
    oUl.innerHTML = str;
    oUl.style.display = 'block';
}else{
    oUl.style.display = 'none';
}

}