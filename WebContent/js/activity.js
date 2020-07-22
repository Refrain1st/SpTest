//用户加载
function userLoad() {
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
				window.location.href="../index3.html"; 
			}
		});
	}, 15000);
}

//包含数据刷新与搜索
function getData() {
	var actName = $("input[name=select]")[0].value;
	$.ajax({
				url : "/cluba/Activity",// 请求地址
				dataType : "json",// 数据格式
				type : "GET",// 请求方式
				// async : false,//是否异步请求
				success : function(data) { // 如何发送成功
					var list = data;
					if (actName.length > 0) {
						for (var i = 0; i < list.length; i++) {
							$("#actdiv"+i).remove();
							if (actName == list[i].activityName) {
								var a = '<div id="actdiv#{num}">' + '活动' + i;
								a += '<div class="head">#{activityName}</div>';
								a += '<div id="head1">开办社团:#{activityClub}</div>';
								a += '<div id="body">活动简介:#{activityFile} 学分:#{activityCredits}';
								a += '<div id="btn-act" onclick="outActivity()">已加入</div>';
								a += '</div>';
								a += '</div>';
								a = a.replace("#{num}", i);
								a = a.replace("#{activityClub}", list[i].activityClub);
								a = a.replace("#{activityName}", list[i].activityName);
								a = a.replace("#{activityFile}", list[i].activityFile);
								a = a.replace("#{activityCredits}", list[i].activityCredits);
								if (list[i].activityStatus == "run") {
									a = a.replace("status", "加入");
								} else
									continue;
								$(".panel-activity").append(a);
							} else
								continue;
						}
					} else {
						for (var i = 0; i < list.length; i++) {
							var a = '<div id="actdiv#{num}">' + '活动' + i;
							a += '<div class="head">#{activityName}</div>';
							a += '<div id="head1">开办社团:#{activityClub}</div>';
							a += '<div id="body">活动简介:#{activityFile} 学分:#{activityCredits}';
							a += '<div id="btn-act" onclick="join('+list[i].activityName+')">status</div>';
							a += '</div>';
							a += '</div>';
							a = a.replace("#{num}", i);
							a = a.replace("#{activityClub}", list[i].activityClub);
							a = a.replace("#{activityName}", list[i].activityName);
							a = a.replace("#{activityFile}", list[i].activityFile);
							a = a.replace("#{activityCredits}", list[i].activityCredits);
							if (list[i].activityStatus == "run") {
								a = a.replace("status", "加入");
//								a = a.replace("#{onclick}", "joinActivity()");
							} else
								continue;
							$(".panel-activity").append(a);
						}
						
					}
				}
			});
}

//用户
function join(activityName) {
	var myname=$("#name");
	var act = activityName;
//	var act=$(".head");
//	for(var i=0;i<act.length;i++){
//	alert(list[i].innerHTML);//这里可以对获取的对象做各种操作
//	}
	var test = {
			'userName' : myname,
			'userActivity' : act
		}
	$.ajax({
		// 请求方式。。增加 post 查询get  修改：put 删除：delete   servlet Customer资源
		type : "POST",
		// 请求地址
		url : "/cluba/join",
		contentType:"application/json;charset=utf-8",
		data : JSON.stringify(test),
		// 请求成功
		success : function(data) {
			alert("加入成功");
		},
		// 请求失败，包含具体的错误信息
		error : function(e) {
			alert("error");
			console.log(e.status);
			console.log(e.responseText);
		}
	});
}

//活动管理
function list() {
	// Jquery 库
	$('#activityList')
			.DataTable(
					{
						"destroy" : true,
						"pagingType" : "full_numbers",
						"sLoadingRecords" : "正在加载数据...",
						"sZeroRecords" : "暂无数据",
						"ajax" : {
							"url" : "/cluba/Activity",
							"dataSrc" : ""
						},
						// 屏蔽掉搜索框
						"searching" : false,
						//列对象
						"columns" : [
								{
									"data" : "activityStatus"
								},
								{
									"data" : "activityName"
								},
								{
									"data" : "activityCredits"
								},
								{
									"data" : "activityClub"
								},
								{
									"data" : null,
									"render" : function(data, type, row, meta) {
										var html = '<a  href="#" role="button" data-toggle="modal" onclick="startB('
												+ row.activityName
												+ ')"><i class="fa fa-pencil" ></i>开始活动</a>  '
												+ '<a href="#" role="button" data-toggle="modal"  onclick="overB('
												+ row.activityName
												+ ')"><i class="fa fa-trash-o" ></i>活动结束</a>';
										return html;
									}
								}

						],
						"language" : {
							"processing" : "玩命加载中...",
							"lengthMenu" : "显示 _MENU_ 项结果",
							"zeroRecords" : "没有匹配结果",
							"info" : "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
							"infoEmpty" : "显示第 0 至 0 项结果，共 0 项",
							"infoFiltered" : "(由 _MAX_ 项结果过滤)",
							"infoPostFix" : "",
							"url" : "",
							"paginate" : {
								"first" : "首页",
								"previous" : "前一页",
								"next" : "下一页",
								"last" : "末页"
							}
						}
					});

}
var testName = "java杯";;

function startA(activityName) {
	
	
//	$('#warnS').modal('show');
//	testName = activityName;
}
function startB() {
	testName = "java杯";
	var status = "run";
	var customer={
			'activityName' : testName,
			'activityStatus' : status
	}
	$.ajax({
		// 请求方式。。增加 post 查询get  修改：put 删除：delete   servlet Customer资源
		type : "PUT",
		// 请求地址
		url : "/cluba/startA",
		data : customer,
//		data : JSON.stringify(customer),
//		contentType:"application/json;charset=utf-8",
		// 请求成功
		success : function(result) {
			alert("success");
			// 关闭对话框
			list();

		},
		// 请求失败，包含具体的错误信息
		error : function(e) {
			alert("error");
			console.log(e.status);
			console.log(e.responseText);
		}
	});
}

function overA(activityName) {
	$('#warnO').modal('show');
	testName = activityName;
}
function overB(activityName) {
	testName = "java杯";
	var status = "over";
	var a={
			'activityName' : testName,
			'activityStatus' : status
	}
	$.ajax({
		// 请求方式。。增加 post 查询get  修改：put 删除：delete   servlet Customer资源
		type : "PUT",
		// 请求地址
		url : "/cluba/overA",
		data : a,
//		data : JSON.stringify(customer),
//		contentType:"application/json;charset=utf-8",
		// 请求成功
		success : function(result) {
//			alert("success");
			// 重新获取数据
			list();
			upC();
		},
		// 请求失败，包含具体的错误信息
		error : function(e) {
			alert("error");
			console.log(e.status);
			console.log(e.responseText);
		}
	});
}
function upC() {
	var customer={
		'activityName' : testName,
		'activityCredits' : 0.5
}
	$.ajax({
		// 请求方式。。增加 post 查询get  修改：put 删除：delete   servlet Customer资源
		type : "PUT",
		// 请求地址
		url : "/cluba/upC",
		data: customer,
//		data : JSON.stringify(customer),
//		contentType:"application/json;charset=utf-8",
		// 请求成功
		success : function(result) {
			alert("success");
			// 重新获取数据
			list();

		},
		// 请求失败，包含具体的错误信息
		error : function(e) {
			alert("error");
			console.log(e.status);
			console.log(e.responseText);
		}
	});
}