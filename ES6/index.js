let arr = [
    {name:'a',age:'8',sex:'男'},
    {name:'b',age:'9',sex:'男'},
    {name:'c',age:'10',sex:'女'},
    {name:'d',age:'11',sex:'男'},
    ];

/**
 * forEach 遍历函数
 * */
arr.forEach(e=>{
    console.log(e.name+e.age+e.sex);
});
/**
 * map 处理函数，生成新数组
 * */
let mapArr = arr.map(e=>{
    return '小'+e.name
});
console.log(mapArr);
/**
 * filter 过滤函数，生成新数组
 * */
let filterArr = arr.filter(e=>{
    return e.sex == '男'
});
console.log(filterArr);
/**
 * find 查询函数，生成符合条件的一个对象
 * */
let findArr = arr.find(e=>{
    return e.sex == '男'
});
console.log(findArr);
/**
 * some（任意一个满足）,every（所有都满足） 判断函数，返回true和false
 * */
let someArr = arr.some(e=>{
    return e.age > 10
});
console.log(someArr);
let everyArr = arr.every(e=>{
    return e.age > 10
});
console.log(everyArr);
/**
 * reduce 综合函数
 * */
let reduceArr1 = arr.reduce((d,e)=>{
    return d + parseInt(e.age)
},0);
console.log(reduceArr1);
let reduceArr2 = arr.reduce((d,e)=>{
    d.push('小'+e.name);
    return d;
},[]);
console.log(reduceArr2);

/**
 * var，let的区别是let有作用域的概念和唯一性，var没有
 * const是定义常量，但是数组是可以push的
 * */

/**
 * 模版字符串 ``
 * ${变量或者函数}
 * */
let mode = `<ol>
                <li>one${arr[0].sex}</li>
                <li>two</li>
                <li>three</li>
            </ol>`;
document.getElementById('mode').innerHTML = mode;

/**
 * 箭头函数的this指向不会改变
 * 几种简写方式
 * 参数默认值
 * */
function test(d = '默认值'){
    return d;
}
//普通形式
let test1 = (d) => {
    return d;
};
//只有一个参数可以省略参数括号
let test2 = d => {
    return d;
};
//只有简单的return可以去掉大括号和return
let test3 = d => d;

/**
 * 展开运算符 ... 函数参数，替代concat
 * 获取函数所有参数 内置对象 arguments,只能在普通声明函数的时候用，箭头函数等其他函数形式define
 * */
function fn(...data){
    console.log(data);
    console.log(arguments);
}
fn(1,2,3,4,5);
let _arr = [...arr,{name:'e',age:'18',sex:''}];
console.log(_arr);

/**
 * 解构，可以多级嵌套
 * */
//对象解构
let obj = arr[0];
// 普通解构和嵌套解构
// let {name,age,sex} = obj;
let {0:{name,age,sex}} = arr;
console.log(name,age,sex);
//函数解构
function objFn({name,age}){
    console.log('我叫'+name+',今年'+age+'岁。')
}
objFn(obj);
//两种数组解构。配合展开运算符
let [a,b,c,d] = arr;
console.log(a,b,c,d);
let [e,...f] = arr;
console.log(e,f);
let {length} = arr;
console.log(length);

/**
 * 面向对象 class类
 * */
function NewPeople(option){
    this.sex = option.sex;
    //es5继承1
    // People.call(this,option);
}
//es5继承2
// NewPeople.prototype = Object.create(People.prototype);
// NewPeople.prototype.constructor = NewPeople;

// class继承
// class People extends oldPeople {
//     constructor(option){
//         super(option);
//         this.name = option.name;
//         this.age = option.age;
//     }
//     introduce(){
//         alert("大叫好，我叫"+this.name+"，我今年"+this.age+"岁了。");
//     }
// }
class People {
    constructor(option){
        this.name = option.name;
        this.age = option.age;
    }
    introduce(){
        alert("大叫好，我叫"+this.name+"，我今年"+this.age+"岁了。");
    }
}

let people1 = new People({name:'aa',age:'111'});
// people1.introduce();

/**
 * 迭代器
 * */
function* createIds(){
    let index = 1;
    while (true){
        yield index++
    }
}
const gen = createIds();
console.log(gen.next().value,gen.next().value,gen.next().value);
/**
 * 新数据结构 map
 * 也普通对象的区别就是，key和value都可以是任何类型
 * */
const map1 = new Map();

const key1 = 'test',key2 = {},key3 = function(){};
map1.set(key1,'value1');
map1.set(key2,'value2');
map1.set(key3,'value3');
console.log(map1.get(key1));
console.log(map1.size);

/**
 * 新数据结构 set
 * 可以存储任何数据类型的集合，但是没有重复值
 * */
const set1 = new Set([1,[1]]);
set1.add(100);
set1.add('set');
set1.add(100);
console.log(set1);
console.log(set1.size);
console.log(set1.has(100));
set1.delete(100);

/**
 * promise
 * 里面可以使用setTimeout来实现延迟的功能
 * */
function promiseFn(bool){
    return new Promise((resolve, reject)=>{
        if(bool){
            setTimeout(() => {
                resolve(bool);
            },5000)
        }else{
            reject(bool);
        }
    })
}

promiseFn(true).then(data => {
    console.log('promise1:'+data);
    return 123;
}).then(data => {
    console.log('then可以多次调用，data取上一个then的return值:'+data)
}).catch(data => {
    console.log('promise2:'+data);
}).finally(data => {
    console.log('我都会调用');
});


/**
 * async await
 * 异步
 * */
async function timeout(flag) {
    if (flag) {
        return 'hello world'
    } else {
        throw 'my god, failure'
    }
}
timeout(false).then( d =>{
    console.log(d);
}).catch( d =>{
    console.log(d);
});

async function myFunc() {
    const promise = new Promise(((resolve, reject) => {
        setTimeout(() => resolve('Hello World!',2000))
    }));

    const error = false;

    if(!error){
        // 等待resolve执行完毕之后才会执行
        const res = await promise;
        return res;
    }else{
        await Promise.reject(new Error('error：报错了！'));
    }
}
myFunc().then(data => console.log(data)).catch(err => console.log(err));