

function ajax(url,FnSucc,FnFaild)
{
     
	 
	   //1创建Ajax对象
	   if(window.XMLHttpRequest)
	   {
	      var oAjax = new XMLHttpRequest();                   //其他浏览器
	   }
	   else
	   {
	      var oAjax = new ActiveXObject(Microsoft.XMLHttp);    //IE6以下
	   }
	   
	   //2连接服务器
	   //open（方法， 文件路径， 异步传输）；
	   oAjax.open("GET",url+"?time="+new Date().getTime(),true);     
	   
	   
	   //3发送请求
	   oAjax.send();
	   
	   
	   //4接收返回
	   oAjax.onreadystatechange = function()
	   {
	       //oAjax.readyState  服务器和浏览器进行到哪一步了
		   if(oAjax.readyState==4)   //读取完成
		   {
		      
			  if(oAjax.status==200)   //成功
			  {
			     FnSucc(oAjax.responseText);
			  }
			  else
			  {
			  
			     if(FnFaild)
				 {
				    FnFaild(oAjax.status);
				 }
			    
			  }
			  
		   }
		   
		   
	   };
	   
	   
	 
	 
	 
}