let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `
/*您好,我是一名前端新人,请多多指教.
 *我要在这个页面画一个太极八卦图.
 *接下来开始加样式了.*/

/*第一步:画出一个圆:*/
#div1{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);         
    top: 40px; 
    border: 1px solid red;
    width:200px;
    height:200px;
    border-radius:50%;
}
/*第二步:给圆添加阴影效果,并删掉红色边框:*/
#div1{
    box-shadow:0 0 4px rgba(0,0,0,0.5);
    border:none;
}

/*第三步:用背景色渐变,令圆左白右黑:*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,212,255,1) 50%, rgba(0,0,0,1) 50%);
    //背景色渐变由 https://cssgradient.io/ 生成
}

/*第四步:用伪元素法加两个圆并居中:*/
#div1::before{
    content:'圆1';
    display:block;
    border:1px solid red;
    width:100px;
    height:100px;
    border-radius:50%;
    position:absolute;
    left:50px;
    top:0px;
}
#div1::after{ 
    content:'圆2';
    display:block;
    border:1px solid red;
    width:100px;
    height:100px;
    border-radius:50%;
    position:absolute;
    left:50px;
    top:100px;
}

/*第五步:删除边框和文字,
 *使圆1变成黑色画出阴鱼,圆2变成白色画出阳鱼*/
#div1::before{
    border:none;
    content:'';
    background:black;
}
#div1::after{
    border:none;
    content:'';
    background:white;
}

/*第六步:再用背景色渐变法画出阴眼和阳眼:*/
#div1::before{
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 80%);
}
`
let string2 = ""
let n = 0
let step = () => {
    setTimeout(() => {
        //n从0开始
        if (string[n] === "\n") {
            string2 += "<br>" //如果是回车就加一个<br>标签(html的回车)
        } else if (string[n] === " ") {
            string2 += "&nbsp;" //如果是空格就缩进
        } else {
            string2 += string[n]  //如果不是回车就照搬文字内容
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 9999) //电脑端滚动条自动往下
        html.scrollTo(0, 9999) //手机端滚动条自动往下
        if (n < string.length - 1) { //字符串长度-1可防止打印字符时在最后出现undefined
            n += 1
            step()
        } else {
        }
    }, 35)
}
step()


