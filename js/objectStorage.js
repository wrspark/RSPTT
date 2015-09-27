/**
 *  This file is confidential by Charles.Wang
 *  Copyright belongs to Charles.wang
 *  You can make contact with Charles.Wang (charles_wang888@126.com)
 *  javascript包含2个函数，一个是存数据，一个是取数据：
 */
 
//存一组关联数据到json对象，再把json对象存放到localStorage中
function saveStorage(){
   
    //创建一个js对象，用于存放当前从表单获得的数据
    var data = new Object;
    //把这对象的属性名依次和从用户输入的属性值关联起来
    data.player1=document.getElementById("player1").value;
    data.player2=document.getElementById("player2").value;
    data.player1_ptns=document.getElementById("player1_ptns").value;
    data.player2_ptns=document.getElementById("player2_ptns").value;
    //创建一个json对象，让其对应刚才创建的对象的字符串数据形式
    var str = JSON.stringify(data);
    //吧json对象存放到localStorage上，key为用户输入的player1，value为这个json字符串
    localStorage.setItem(data.player1,str);
    console.log("数据已经保存! 被保存的用户名为: "+data.player1);
 }
 
 //从localStorage按照用户输入的检索名称为key，得到对应的json字符串，然后把json字符串解析为一组信息， 并且打印到指定位置
 function findStorage(id){
	 
    //获得用户的输入，是用户希望检索的名字
    var requiredPersonName = document.getElementById("find").value;
    //以这个检索的名字为key,来查找localStorage,得到了json字符串
    var str=localStorage.getItem(requiredPersonName);
    //解析这个json字符串得到Object对象
    var data= JSON.parse(str);
    //从Object对象中分离出相关属性值，然后构造要输出的HTML内容
    var result="选手1:"+data.player1+'<br>';
    result+="选手2:"+data.player2+'<br>';
    result+="选手1 得分:"+data.player1_ptns+'<br>';
    result+="选手2 得分:"+data.player2_ptns+'<br>';
    result+="比赛结果:"+data.player1_ptns+" : "+data.player2_ptns+'<br>';
    //取得页面上要输出的容器
    var target = document.getElementById(id);
    //用刚才创建的HTML内容来填充这个容器
    target.innerHTML = result;
 }