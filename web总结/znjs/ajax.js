�}�  �  $ ��Wh"�}�u
��d5��x^!���]�T�;���LϮ�NO}f�D�2�J���Oݴ��M�#r8z=�f��X�����{=LJ���@����_q���h!ЬbO�����*JIkb,�t��.�?ߘ%n��\1g�N�
r���/lg�X$�R!����L ��>�p�큼YK`�ۦ�zjg���9X:<�\��U���	.?o�3����������Į�����'^`8Օt-��qO����c����Ȑ^��˟>X����u�<jP��}B�O�Z�$4�h#$��=�S%J��s:��uߧg�>��:���fP�+}�N�`�iF,�S���L����sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�
	   
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