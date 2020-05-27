let demo = document.querySelector("#demo")
let string=`
你好我是前端新人
接下来我要写样式
然后我要写的是
body{
    color:red;
}
`
let string2=null
let n = -1
let temp = () => {
    setTimeout(() => {
        if(string[n]==='\n'){
            string2+="<br>"
        }else{
            string2+=string[n]
        }
        if(n>=string.length){
            return;
        }
        n = n + 1;
        demo.innerHTML = string.substring(0,n);
            temp();
        
    }, 100);
};
temp();