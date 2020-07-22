var customerId;

$("#addCustomerDialog").on("hidden.bs.modal", function() {
	$("#account_warning").addClass("hide");
});
/**
 * @param {Object}
 *            id 弹出编辑对话框
 */
function delDataDialog(userStuId, userName) {
	$('#delCustomerDialog').modal('show');
	customerId = userStuId;
}
$('#delButton').on('click', function() {
	
	$.ajax({
		// 请求方式
		type : "DELETE",
		// 请求地址
		url : "../customer/"+customerId,
		// 请求成功
		success : function(result) {
			$('#delCustomerDialog').modal('hide');
			getData();
		},
		// 请求失败，包含具体的错误信息
		error : function(e) {
			
		}
	});
});

/**
 * 按钮点击事件就会跳到这个方法里 弹出一个模态框 这个是一个bootstrap模态框
 * 
 * @param {Object}
 *            id 弹出添加对话框
 */
function addDataDialog() {
	// 弹出一个模态框
	$('#addCustomerDialog').modal('show');

}
function editDataDialog(userStuId, userName, userClub, userPassword) {
	$('#editDialog').modal('show');
	$("input[name=updateclub]")[0].value =userClub;
	var userPassword = $("input[name=updatepass]")[0].value = userPassword;
	customerId = userStuId;
}

//restful规范： post delete put get 增删查改
function updateData() {

	// jquery的 三个字段的值
	var updateclub = $("input[name=updateclub]")[0].value;
	var updatepass = $("input[name=updatepass]")[0].value;
	if (updateclub.length > 0 && updatepass.length > 0) {
		var customer = {
			'userStuId':customerId,
			'userClub':updateclub,
			'userPassword' : hex_md5(updatepass)
			
		};
		// jquery ajax用法 发送异步请求到服务端去
		$.ajax({
			// 请求方式。。增加 post 查询get  修改：put 删除：delete   servlet Customer资源
			type : "PUT",
			// 请求地址
			url : "../customer",
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

	} else {

		$("#account_warning").removeClass("hide");

	}

}
// restful规范： post delete put get 增删查改
function addData() {

	// jquery的 三个字段的值
	var number = $("input[name=number]")[0].value;
	var username = $("input[name=username]")[0].value;
	var club = $("input[name=club]")[0].value;
	var password = $("input[name=password]")[0].value;
	if (username.length > 0 && number.length > 0 && password.length > 0) {
		var customer = {
			'userStuId' : number,
			'userName' : username,
			'userClub' : club,
			'userPassword' : hex_md5(password)
		};
		// jquery ajax用法 发送异步请求到服务端去
		$.ajax({
			// 请求方式。。增加 post 查询get  修改：put 删除：delete
			type : "POST",
			// 请求地址
			url : "../customer",
			contentType:"application/json;charset=utf-8",
			// 数据
			data : JSON.stringify(customer),
			// 请求成功
			success : function(result) {
				// 关闭对话框
				$('#addCustomerDialog').modal('hide');
				// 重新获取数据
				getData();

			},
			// 请求失败，包含具体的错误信息
			error : function(e) {
				
				console.log(e.status);
				console.log(e.responseText);
				if(e.responseText=="请重新登陆"){
					window.location.href="index.html"; 
				}
			}
		});

	} else {

		$("#account_warning").removeClass("hide");

	}

}
function refreshData() {
	
	getData();
}

/**
 * [{"id":69,"userName":"张涛","jobs":"学生","phone":"134567892"},{"id":71,"userName":"张三","jobs":"销售经理","phone":"13323456785"},{"id":74,"userName":"大花","jobs":"服务员","phone":"13540864681"},{"id":75,"userName":"吴佳伟","jobs":"学生","phone":"3235454365786"},{"id":76,"userName":"周子裕","jobs":"学生","phone":"13540864681"}]
 * 
 * @returns
 */
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
									"data" : "userCredit"
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
												+ row.userCredit
												+ "'"
												+ ')"><i class="fa fa-pencil" ></i>修改</a>  '
												+ '<a href="#" role="button" data-toggle="modal"  onclick="delDataDialog('
												+ row.userStuId
												+ ')"><i class="fa fa-trash-o"  ></i>删除</a>';
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
