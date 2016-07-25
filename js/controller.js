/**
 * Created by 小川 on 2016/7/24.
 */
function G(id){

    return document.getElementById(id);

}

var UI = new Object();

UI.register = function(id,even,fun,arr){

    if(G(id)) G(id)["on"+even] = function(){ fun(arr);};

}

UI.register("baidu","click",tipInfo,[1,2]);