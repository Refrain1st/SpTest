function holderlogin() {
	var username = $("input[name=userName]")[0].value;
	var password = $("input[name=password]")[0].value;
	if (username.length > 0 && password.length > 0 ) {
		var user = {
			'userStuId' : username,
			'userPassword' : hex_md5(password)
		};
		// jquery ajax用法 发送异步请求到服务端去
		$.ajax({
			// 请求方式。。增加 post 查询get  修改：put 删除：delete   servlet Customer资源
			type : "POST",
			// 请求地址
			url : "/cluba/logholder",
			contentType:"application/json;charset=utf-8",
			// 数据
			data : JSON.stringify(user),
			// 请求成功
			success : function(result) {
				alert("success");
				window.location.href="main.html"; 
				var cookie=document.cookie;
				var a="a";
				
			},
			// 请求失败，包含具体的错误信息
			error : function(e) {
				alert("error");
				console.log(e.status);
				console.log(e.responseText);
			}
		});

	} else {
		alert("out");
		$("#account_warning").removeClass("hide");

	}

}

function userlogin() {
	var username = $("input[name=userName]")[0].value;
	var password = $("input[name=password]")[0].value;
	if (username.length > 0 && password.length > 0 ) {
		var user = {
			'userStuId' : username,
			'userPassword' : hex_md5(password)
		};
		// jquery ajax用法 发送异步请求到服务端去
		$.ajax({
			// 请求方式。。增加 post 查询get  修改：put 删除：delete   servlet Customer资源
			type : "POST",
			// 请求地址
			url : "/cluba/login",
			contentType:"application/json;charset=utf-8",
			// 数据
			data : JSON.stringify(user),
			// 请求成功
			success : function(result) {
				alert("success");
				window.location.href="main.html"; 
				var cookie=document.cookie;
				var a="a";
				
			},
			// 请求失败，包含具体的错误信息
			error : function(e) {
				alert("error");
				console.log(e.status);
				console.log(e.responseText);
			}
		});

	} else {
		alert("out");
		$("#account_warning").removeClass("hide");

	}

}

function usersign(){
	$('#Submit').triggerHandler('click');
	var userid = $("input[name=user]")[0].value;
	var name = $("input[name=name]")[0].value;
	var password = $("input[name=password]")[0].value;
	var club = $("input[name=club]")[0].value;
	if (userid.length > 0 && name.length > 0 & password.length > 0) {
		var user = {
			'userStuId' : userid,
			'userName' : name,
			'userClub' : club,
			'userCredit' : 0,
			'userPassword' : hex_md5(password)
		};
		// jquery ajax用法 发送异步请求到服务端去
		$.ajax({
			// 请求方式。。增加 post 查询get  修改：put 删除：delete   servlet Customer资源
			type : "POST",
			// 请求地址
			url : "/cluba/logsign",
			contentType:"application/json;charset=utf-8",
			// 数据
			data : JSON.stringify(user),
			// 请求成功
			success : function(result) {
				alert("success");
				window.location.href="index3.html"; 
				var cookie=document.cookie;
				var a="a";
				
			},
			// 请求失败，包含具体的错误信息
			error : function(e) {
				alert("error");
				alert(e.status);
				alert(e.responseText);
			}
		});

	} else {
		alert("out");
//		$("#account_warning").removeClass("hide");

	}
}

function getSession() {
	
	// jquery ajax用法 发送异步请求到服务端去
	setInterval(() => {
		$.ajax({
			type : "get",
			// 请求地址
			url : "/cluba/session",
			// 请求成功
			success : function(result) {
				
			},
			// 请求失败，包含具体的错误信息
			error : function(e) {
				console.log(e.status);
				console.log(e.responseText);
				//alert("会话超时请重新登陆")
				window.location.href="index.html"; 
			}
		});
	}, 15000);
	


}

function logout() {
		// jquery ajax用法 发送异步请求到服务端去
		$.ajax({
			// 请求方式。。增加 post 查询get  修改：put 删除：delete   servlet Customer资源
			type : "POST",
			// 请求地址
			url : "/cluba/logout",
			// 请求成功
			success : function(result) {
				window.location.href="index.html"; 
			},
			// 请求失败，包含具体的错误信息
			error : function(e) {
				console.log(e.status);
				console.log(e.responseText);
			}
		});


}

$(function(){
    //按键盘enter键触发提交按钮
      $('#username').focus(function(){
            document.onkeydown = function (event) {
                if (event && event.keyCode == 13) {
                    $("#myBtn").click();
                }
            }
        });
});