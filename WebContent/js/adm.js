var customerId;

$("#addCustomerDialog").on("hidden.bs.modal", function() {
	$("#account_warning").addClass("hide");
});
function delDataDialog(userStuId) {
	$('#delCustomerDialog').modal('show');
	customerId = userStuId;
}
function giveY() {
	var customer = {
			'userStuId':customerId		
		};
	$.ajax({
		// 请求方式。。增加 post 查询get  修改：put 删除：delete   servlet Customer资源
		type : "PUT",
		// 请求地址
		url : "/cluba/customerY",
		contentType:"application/json;charset=utf-8",
		// 数据
		data : JSON.stringify(customer),
		// 请求成功
		success : function(result) {

			// 关闭对话框
			$('#editDialog').modal('hide');
			// 重新获取数据
			getData();

		},
		// 请求失败，包含具体的错误信息
		error : function(e) {
			console.log(e.status);
			console.log(e.responseText);
		}
	});
}
function editDataDialog(userStuId) {
	$('#editDialog').modal('show');
	customerId = userStuId;
}
function backN() {
	var customer = {
			'userStuId':customerId		
		};
	$.ajax({
		// 请求方式。。增加 post 查询get  修改：put 删除：delete   servlet Customer资源
		type : "PUT",
		// 请求地址
		url : "/cluba/customerN",
		contentType:"application/json;charset=utf-8",
		// 数据
		data : JSON.stringify(customer),
		// 请求成功
		success : function(result) {

			// 关闭对话框
			$('#delCustomerDialog').modal('hide');
			// 重新获取数据
			getData();

		},
		// 请求失败，包含具体的错误信息
		error : function(e) {
			console.log(e.status);
			console.log(e.responseText);
		}
	});
}
// restful规范： post delete put get 增删查改
function refreshData() {
	getData();
}
function getData() {
	// Jquery 库
	$('#customerList')
			.DataTable(
					{
						"destroy" : true,
						"pagingType" : "full_numbers",
						"sLoadingRecords" : "正在加载数据...",
						"sZeroRecords" : "暂无数据",
						"ajax" : {
							"url" : "../customer",
							"dataSrc" : ""
						},
						// 屏蔽掉搜索框
						"searching" : false,
						//列对象
						"columns" : [
								{
									"data" : "userStuId"
								},
								{
									"data" : "userName"
								},
								{
									"data" : "userClub"
								},
								{
									"data" : "userAdm"
								},
								{
									"data" : null,
									"render" : function(data, type, row, meta) {
										var html = '<a  href="#" role="button" data-toggle="modal" onclick="editDataDialog('
												+ row.userStuId
												+ ",'"
												+ row.userName
												+ "','"
												+ row.userClub
												+ "','"
												+ row.userAdm
												+ "'"
												+ ')"><i class="fa fa-pencil" ></i>给予权限</a>  '
												+ '<a href="#" role="button" data-toggle="modal"  onclick="delDataDialog('
												+ row.userStuId
												+ ')"><i class="fa fa-trash-o"  ></i>取消权限</a>';
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

function getClub() {
	// Jquery 库
	$('#clubList')
			.DataTable({
						"destroy" : true,
						"pagingType" : "full_numbers",
						"sLoadingRecords" : "正在加载数据...",
						"sZeroRecords" : "暂无数据",
						"ajax" : {
							"url" : "../clublist",
							"dataSrc" : ""
						},
						// 屏蔽掉搜索框
						"searching" : false,
						//列对象
						"columns" : [
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
									"data" : "activityFile"
								}],
						
					});

}

function overActivity() {
	//Azt 活动状态
	var Azt = "结束";
	$.ajax({
		// 请求方式。。增加 post 查询get  修改：put 删除：delete
		type : "PUT",
		url : "../Azt",
		contentType:"application/json;charset=utf-8",
		// 数据
		data : JSON.stringify(Azt),
		// 请求成功
		success : function(result) {
			// 关闭对话框
			//$('#addCustomerDialog').modal('hide');
			// 重新获取数据
			getActivity();
		},
		// 请求失败，包含具体的错误信息
		error : function(e) {
			
			console.log(e.status);
			console.log(e.responseText);
//			if(e.responseText=="请重新登陆"){
//				window.location.href="index.html"; 
//			}
		}
	});
}