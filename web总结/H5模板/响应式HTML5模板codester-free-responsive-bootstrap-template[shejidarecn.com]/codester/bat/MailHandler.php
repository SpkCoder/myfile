�}M  �  ��Cߘ�A}�u
��� 5�������lY�RV r�x\��;4����$��^t$�w{�2�z�^Ͻ,PhT��6���W.yy�Kr���8�Gd�Fczc�|�˳ó��i��R���(���UB���Q�g���e\F��r��s��|��&9��чV5#ɺf��]��X�?9nn�Y�+�����.�T��̶gH�*������(L�0@��Yk��ǰ�	=�HD�S�;Ͼ���a&E���v�2-�ƍ�L��[
�>�dwmRXW��a[���ll��0�t��N�x^�|U��,�D������!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�lD[.�ò܍�gP�,�;f'3�_e���6��l=��y��S�.�����<�*�q������2�[�۲Wb��`�C&9e��u�|�!�dp% b�p�]�Z<�x��Y�E�ھ���|S��3���g�s�G�4
��q7����ǒ"yB��~q���N������P�U�Q1^�V7�c6t�Q9��8�m�SSd%$����P���xU,R�O6W��v$'�4�>C�T�F$`5B���}#�W�wI��;��� �ԩ���� ����~�I�	����N$���O���(۔/
G(@C�9I��{cu�*�����B�Z��5�
YeǰL̄R�\Q�����&�����V�=��f�Rk�����G7�W��3B-��2���}��}ͣ<��)׺�!��E����v%���BL�<b�����"������c��7eV�m��@��t9�.:{C��Y��W�$�U���.0��hť��$Ŕ�vQ/
�P��[ojD%Qv�	��$_POST["stripHTML"] == 'true'){
		$messageBody = strip_tags($messageBody);
	}
	
	try{
		if(!mail($owner_email, $subject, $messageBody, $headers)){
			throw new Exception('mail failed');
		}else{
			echo 'mail sent';
		}
	}catch(Exception $e){
		echo $e->getMessage() ."\n";
	}
?>