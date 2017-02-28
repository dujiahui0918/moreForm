$(function(){
    //名称输入框事件
    $("#userid").on({
        focus:function(){
            $("#warn").text("必填，长度为4~16个字符");
        },
        blur:function(){
            var _that = $(this),warn = _that.parent().next().find("p");
            var val = $(this).val();
            check.checkName(val,"名称不能为空","名称长度不正确","",_that,warn);
        }
    })
    $("#userpassid").on({
        focus:function(){
            $("#warn1").text("必填，长度为4~16个字符");
        },
        blur:function(){
            var _that = $(this),warn = _that.parent().next().find("p");
            var val = $(this).val();
            check.checkName(val,"密码不能为空","密码长度不正确","密码可用",_that,warn);
        }
    })
    $("#userpassid1").on({
        focus:function(){
            $("#warn2").text("请再次输入密码");
        },
        blur:function(){
            var val = $(this).val(),val1 = $("#userpassid").val();
            var _that = $(this) ;
            check.checkPass(val,val1,_that);
        }
    })
    $("#yid").on({
        focus:function(){
            $("#warn3").text("请输入邮编");
        },
        blur:function(){
            var val = $(this).val(),_that = $(this),warn = _that.parent().next().find("p");  
            var reg = /\w@\w*\.\w/;
            check.checkNo(val,"请输入邮编","格式正确","格式不正确",_that,warn,reg);
        }
    })
    $("#phoneid").on({
        focus:function(){
            $("#warn4").text("请输入电话号码");
        },
        blur:function(){
            var val = $(this).val(),_that = $(this),warn = _that.parent().next().find("p");
            var reg = /^(13[0-9]{9})|(15[89][0-9]{8})$/;
            check.checkNo(val,"请输入电话号码","格式正确","格式不正确",_that,warn,reg);
        }
    })
    //点击提交触发每个的失去焦点事件
    $(".btn2").on("click",function(){
        var name = $("#userid").trigger("blur").hasClass("red");
        var pass = $("#userpassid").trigger("blur").hasClass("red");
        var pass1 = $("#userpassid1").trigger("blur").hasClass("red");
        var yid = $("#yid").trigger("blur").hasClass("red");
        var phone = $("#phoneid").trigger("blur").hasClass("red");
        if(name==false||pass==false||pass1==false||yid==false||phone==false){
            alert("提交成功！");
        }else{
            alert("提交失败");
        }
        
    })
    var check={};
    check.checkName = function(val,select1,select2,select3,_that,warn){
        if(!val){
            warn.text("").text(select1); 
            _that.addClass("red");
            return false;
        }else if(val.length<4||val.length>16){
            _that.addClass("red");
            warn.text("").text(select2);
            return false;
        }else{
            warn.text(select3);
            _that.addClass("green");
            return true;
        }   
    }

    check.checkPass = function(val,val1,_that){
        if(!val){
            $("#warn2").text("请先输入密码"); 
            _that.addClass("red"); 
            return false;
        }else if(val!==val1){
            $("#warn2").text("两次输入密码不一致"); 
            _that.addClass("red");
            return false;
        }else{
            $("#warn2").text("密码核对正确"); 
            _that.addClass("green");
            return true;
        }
    }
    check.checkNo = function(val,sel1,sel2,sel3,_that,warn,reg){
        if(!val){
           warn.text(sel1); 
            _that.addClass("red"); 
            return false; 
        }else if(!reg.test(val)){
            warn.text(sel3); 
            _that.addClass("red");
            return false;
        }else{
            warn.text(sel2); 
            _that.addClass("green");
            return true;
        }
    }
})