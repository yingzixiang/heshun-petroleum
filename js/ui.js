	//页面中添加尾部节点
	$(function(){
		var htmlFooter = "";
		htmlFooter += '<div class="weui-footer member-info-footer">'
		htmlFooter += 	'<p class="weui-footer__text">和顺石油移动互联网+会员</p>'
		htmlFooter +=   '<p class="weui-footer__text">技术支持 © 极速挪车TM jisunuoche.com</p>'
		htmlFooter += '</div>'
		$("body").append(htmlFooter)
	})
	
	    var wait = 60; //设置刷新时间  
		function time(btn) {  
		    if(wait == 0) {  
		    	btn.style.color = '#000';
		        btn.removeAttribute("disabled");  
		        btn.value = "获取验证码";  
		        wait = 60;  
		    } else {  
		    	btn.style.color = '#AFAFAF';
		        btn.setAttribute("disabled", true);  
		        btn.value = "重新发送(" + wait + ")";  
		        wait--;  
		        setTimeout(function() {  
		                time(btn)  
		            },  
		            1000)  
		    }  
		}  
		
		document.getElementById("codeBtn").onclick = function() {  
		    time(this);  
		}  
