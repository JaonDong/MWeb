var prefix = "http://";
var ip = "127.0.0.1";// 服务器IP或者域名
var port = ":8080";// 服务器提供服务的端口号
var path = "/chinook/service/user/";// 请求的路径
var suffix = "?callback=?";
var subjectName = "/mweb/";
//1223
/* 获取验证码 */
function ajaxCode(urlName, phoneNumber) {
	$.ajax({
		url : prefix + ip + port + path + urlName + suffix,
		type : "GET",
		async : false,
		dataType : 'jsonp',
		data : {
			phoneNumber : phoneNumber
		},
		success : function(data) {
			if ("success" == data.status) {
				alert("验证码已成功发送，请注意接收！");
				sendCode = data.sendCode;
			} else if ("failure" == data.status) {
				alert("验证码发送失败，请稍后重试！");
			}
		},
		error : function(e) {
			alert("error");
		}
	});
};
/* 手机号，密码注册。 */
function ajaxRegister(urlName, phoneNumber, password) {
	$
			.ajax({
				url : prefix + ip + port + path + urlName + suffix,
				type : "GET",
				async : false,
				dataType : 'jsonp',
				data : {
					phoneNumber : phoneNumber,
					password : password
				},
				success : function(data) {
					if ("success" == data.status) {
						alert(data.message);
						window.location.href = prefix + ip + subjectName
								+ "index.html";
					} else if ("failure" == data.status) {
						alert(data.message);
						window.location.href = prefix + ip + subjectName
								+ "registration.html";
					}
				},
				error : function(e) {
					alert("error");
				}
			});
};
/* 登陆 */
function ajaxLogin(urlName, userid, password) {
	$
			.ajax({
				url : prefix + ip + port + path + urlName + suffix,
				type : "GET",
				async : false,
				dataType : 'jsonp',
				data : {
					phoneNumber : userid,
					password : password
				},
				success : function(data) {
					if ("success" == data.status) {
						alert(data.message);
						window.location.href = prefix + ip + subjectName
								+ "index.html";
					} else if ("failure" == data.status) {
						alert(data.message);
						window.location.href = prefix + ip + subjectName
								+ "login.html";
					}
				},
				error : function(e) {
					alert("error");
				}
			});
};
/* 找回密码第一步，验证用户是否存在。 */
function ajaxUpUserPassword(urlName, userId, password) {
	$
			.ajax({
				url : prefix + ip + port + path + urlName + suffix,
				type : "GET",
				async : false,
				dataType : 'jsonp',
				data : {
					userId : userId,
					password : password
				},
				success : function(d) {
					if ("success" == d.status) {
						// 切换到下一个页面
						window.location.href = prefix + ip + subjectName
								+ "index.html";
					} else if ("failure" == d.status) {
						alert(d.message);
					}
				},
				error : function(e) {
					alert("error");
				}
			});
};

function ajaxCheckPhoneNumer(urlName, userid) {
	$.ajax({
		url : prefix + ip + port + path + urlName + suffix,
		type : "GET",
		async : false,
		dataType : 'jsonp',
		data : {
			phoneNumber : userid
		},
		success : function(d) {
			if ("success" == d.status) {
				// 切换到下一个页面
				window.location.href = prefix + ip + subjectName
						+ "forget_password2.html?userid=" + $('#userid').val()
						+ "&userName=" + d.data.userName + "&customerId="
						+ d.data.customerId;
			} else if ("failure" == d.status) {
				alert(d.message);
			}
		},
		error : function(e) {
			alert("error");
		}
	});
}

/* 页面跳转函数 */
function turnUrl(customerId) {
	window.location.href = prefix + ip + subjectName
			+ "forget_password3.html?customerId=" + customerId;
}

function checkMobile(s) {
	var regu = /^[1][3][0-9]{9}$/;
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
};

function isAuth(s) {
	var regu = "^[0-9]+$";
	var re = new RegExp(regu);
	if (s.search(re) != -1) {
		if (6 == s.length) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};

function isPasswd(s) {
	var patrn = /^(\w){6,20}$/;
	if (!patrn.exec(s))
		return false
	return true
}

function createCode() {
	code = "";
	var codeLength = 4;// 验证码的长度
	var checkCode = document.getElementById("checkCode");
	var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C',
			'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
			'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');// 所有候选组成验证码的字符，当然也可以用中文的

	for (var i = 0; i < codeLength; i++) {
		var charIndex = Math.floor(Math.random() * 36);
		code += selectChar[charIndex];
	}
	// alert(code);
	if (checkCode) {
		checkCode.className = "code";
		checkCode.value = code;
	}
}

function getUrlParam(name) {
	// 构造一个含有目标参数的正则表达式对象
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	// 匹配目标参数
	var r = window.location.search.substr(1).match(reg);
	// 返回参数值
	if (r != null)
		return unescape(r[2]);
	return null;
}

function validation(id, time) {
	if (!$(id).attr("disabled")) {
		$(id).attr("disabled", "true");
	}
	;
	var interval = setInterval(function() {
		time--;
		$(id).text(time + "s后重新发送");
		if (time == 0) {
			clearInterval(interval);
			$(id).removeAttr("disabled");
			$(id).text("重新发送");
		}
	}, 1000);
}
