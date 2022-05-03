getData('/src/json/article.json',function(data){
    var data = JSON.parse(data)
    var html = ''
    var len=data.length;
    console.log(data);
    //通过遍历得到的数据，生成html
    // for(var i = 0; i<len;i++){
    //     // console.log('1');
    //     console.log(data[1])
    // }
    for(var i =0; i<len; i++){
        console.log(data[i])
        if( i%2 == 0){
            html += `<div class="recent-post-item">
            <div class="post_cover left">
                <a href="#"><img class="post_bg entered loaded" src="`+data[i].image+`"></a>
            </div>
            <div class="recent-post-info">
                <a class="article-title" href="#">`+data[i].title+`</a>
                <div class="article-meta-wrap">
                    <span class="post-meta-date">
                        <i class="iconfont icon-riqi">
                            <span class="article-meta-label">发表于</span>
                            <time class="display:inline;">`+data[i].time+`</time>
                        </i>
                    </span>
                    <span class="article-meta">
                        <span class="article-meta-separator">|</span>
                        <i class="iconfont icon-icon-test12"></i>
                        <a class="article-meta__categories" href="#">`+data[i].classification+`</a>
                    </span>

                    <span class="article-meta">
                        <span class="article-meta-separator">|</span>
                        <i class="iconfont icon-icon-test1"></i>
                        <a class="article-meta__categories" href="#">`+data[i].comment+`条评论</a>
                    </span>
                </div>

                <div class="content">`+data[i].introduce+`</div>
            </div>
        </div>`
        }else{
            html += `<div class="recent-post-item">
            <div class="recent-post-info">
                <a class="article-title" href="#">`+data[i].title+`</a>
                <div class="article-meta-wrap">
                    <span class="post-meta-date">
                        <i class="iconfont icon-riqi">
                            <span class="article-meta-label">发表于</span>
                            <time class="display:inline;">`+data[i].time+`</time>
                        </i>
                    </span>
                    <span class="article-meta">
                        <span class="article-meta-separator">|</span>
                        <i class="iconfont icon-icon-test12"></i>
                        <a class="article-meta__categories" href="#">`+data[i].classification+`</a>
                    </span>

                    <span class="article-meta">
                        <span class="article-meta-separator">|</span>
                        <i class="iconfont icon-icon-test1"></i>
                        <a class="article-meta__categories" href="#">`+data[i].comment+`条评论</a>
                    </span>
                </div>

                <div class="content">`+data[i].introduce+`</div>
            </div>
            <div class="post_cover left">
                <a href="#"><img class="post_bg entered loaded" src="`+data[i].image+`"></a>
            </div>
        </div>`
        }
    }
    var yuan = document.getElementsByClassName('recent-posts')[0].innerHTML = html;
    // console.log(yuan);
})



// var xhr = new XMLHttpRequest();
// xhr.open("get","../../json/article.json");
// xhr.send();
// xhr.onreadystatechange = function (){
//     if(xhr.status == 200 & xhr.readyState == 4){
//         console.log(xhr.readyState);
//     }
// }





//封装get请求
function getData(url, fn){
    ajax({
      url: url,
      type: 'get',
      success: fn
    })
    }
    
    
    //封装ajax
    function ajax(json){
        //判断游览器
    if(window.XMLHttpRequest){
        var ajax = new XMLHttpRequest()
    }
    else{
        var ajax = new ActiveXObject( "Microsoft.XMLHTTP" )
    }
        //判断get请求 还是 post 请求 
    if(json.type=='get'){
        ajax.open('get',json.url+'?'+JsonToString(json.data),true)
        ajax.send()
    }
    else if(json.type=='post'){
        ajax.open('post',json.url,true)
        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
        ajax.send(JsonToString(json.data))
    }
        //返回的请求状态
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            if(ajax.status>=200 && ajax.status<300 || ajax.status == 304){
                json.success(ajax.responseText)
            }
            else{
                json.error && json.error()
            }
        }
    }

    function JsonToString(json){
        var arr = []
        for(var i in json){
            arr.push(i+'='+json[i])
        }
        return arr.join('&')
      }
}