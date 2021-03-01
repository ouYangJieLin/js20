/**
 * 自动转化bool值
 * 除了undefined,null,false,0,NaN,''
 * 其他的都是true
 * */
console.log(Boolean(undefined),Boolean(null),Boolean(false),Boolean(0),Boolean(NaN),Boolean(''));

/**
 * btoa()：任意值转为 Base64 编码
 * atob()：Base64 编码转为原来的值
 * 存储到浏览器缓存的数据可以用这个简单加密下
 * */
var base64String = 'ouyangjielin';
console.log(btoa(base64String),atob(btoa(base64String)));

/**
 * 对象
 * delete：删除属性,in：属性是否存在
 * with 能更便利的修改对象属性，如果传入的对象中没有该属性，则会创造一个全局属性
 * */
var obj = {
    name:'ouyangjielin',
    age:'14'
}
with (obj) {
    name = '小米';
    age = '22';
    sex = '男';
}
console.log(obj.name,obj['age']);
delete obj.age;
console.log('name' in obj,'age' in obj);

/**
 * function
 * 闭包(不会释放，所以会一直存在)，立即执行函数(一定要加;)
 * arguments：函数内部参数数组
 **/
function bb1(){
    var a = 1;
    function bb2(){
        console.log(a++);
    }
    return bb2;
}
var bb3 = bb1();
bb3();//1
bb3();//2
bb3();//3

(function (a,b) {
    console.log(a+b);
}(1,2));
(function (a,b) {
    console.log(a+b);
})(1,2);

/**
 * 强制转换函数
 * Number(),String(),Boolean()
 * */

/**
 * 错误
 * SyntaxError：语法错误
 * ReferenceError：变量不存在
 * RangeError：值超出范围
 * TypeError：对象是变量或参数不是预期类型时发生的错误
 * URIError：encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()，unescape()这六个函数参数有误
 * */

/**
 * Object
 * 对于一般的对象来说，Object.keys()和Object.getOwnPropertyNames()返回的结果是一样的。
 * 只有涉及不可枚举属性时，才会有不一样的结果。
 * Object.keys方法只返回可枚举的属性,Object.getOwnPropertyNames方法还返回不可枚举的属性名。
 * */
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

var test = [{a:'a',b:'b',orderNum:'3'},{a:'b',b:'b',orderNum:'2'},{a:'c',b:'b',orderNum:'6'},{a:'c',b:'b',orderNum:'1'}];
sort(test);
console.log(test);
function sort(arr){
    for(var j=0;j<arr.length-1;j++){
        //两两比较，如果前一个比后一个大，则交换位置。
        for(var i=0;i<arr.length-1-j;i++){
            if(arr[i].orderNum>arr[i+1].orderNum){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
}

function setCookie(name, value,time) {
    var _time = time||false;
    var strsec = _time?_time * 60 * 1000:60 * 1000 * 60 * 24;
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec);
    document.cookie = name + "="+ encodeURIComponent(JSON.stringify(value)) + ";path=/;expires=" + exp.toGMTString();
    console.log(exp.toGMTString());
};
function delCookie(name) {
    setCookie(name,"", -1);
};
function getCookie(name) {
    var arr = document.cookie.split('; ');
    for(var i = 0; i < arr.length; i++) {
        var arrName = arr[i].split('=');

        if(arrName[0] == name) {
            return JSON.parse(decodeURIComponent( arrName[1]));
        }
    }
    return '';
};