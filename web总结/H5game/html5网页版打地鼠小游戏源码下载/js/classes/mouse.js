�}  q  �����}�u
��I5�i�$"���E4ѱݝ��y?�U�8��m�&pc8~b��]b�s_B��>Ș���*�r�ݘL�;����F��<��G2�/]RßJ�M�w/����V�J|=�,�-!��>�ႦP��xf,SU�Ƅ�+ܨ��T�"��Z�G�c�F�H�9h
���� 9�#�Qcҏ��(E��-��Rm�0�&Ȃt���� �c�p*��z����w+���S�(����X^�ͮ5�;��Nk��i�;@QD)o~Lȑ���5~u�"����S�-���j�����>]�?n�+<��+�u����Y"���Bos���0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�l�-	>{����{�E������vB�Ʒ���S=N�
=�l�tn���xb�=f��~C=N���@P��nHcA���+�9�0/m�[Mgo���#H���{��K��K����$E��F�T�dn��,U*Ǯ��������36Zt���Ԉ������+n��T|��2�C$ҿ��=b�b���W�\�^e�!�|x��oD����Yj�H�Q{e��%�\f��!ݛ��do��/��׵qbk�h��.�O�Y$�g>?+�5�E1�����1O\ҭq�JcA��|���ׁ�wE����ߟ{Hd�.�
x��G�o�m��D����]_~��B��ە�T�u��9��q�*���0���V�j_L�����DX{������v��Aﻛ��[�SY�g���±�g(4c�9���\j�C�N���p
Ҭwv�[^'�'��T''����m"r�+dY����w��f�L�ҏ�#<�5�'P��[Yy&�&_n��BI@��P!�O����l�,�[q0W��)xk�S�ϋ���
��"<=�)���bo��nҒ&V6YY
�Դ�y.Rti�Q ��[�!*5)V	h�m4�h���4��Y�k8�v�XJa�m�Ь����G��6�n���*b��@)�T�ϕ���
��{8��[�����W��r�>]#RS����DӔ�ӂ ����_'�闲R����|��Oa�{��օ�hw{��a� 4L���b-uֹ�!�ԝd����)il�!gP�-�����c���V��C��k� f��jeڦ�
�F�5�D[��+��CD��A�8V��MT��� �<�M�gA���)�C^���ϳ�)��,�����kx�	OrgF��pÅt�鶔m}�W3�����=U�
�x���y~f�l"�YR�̒v� )V�j�~���`뙝��m�7�ڦ���f�"�	M&���?zŘ��������[�q���|Dn��3�YoR�Ut?�Gޘ�Z\ֳ������%h  this.reprepare(this,existMatrix,i,j);
				 }else{
			        self.anim.update();
				    self.anim.draw(context,this.x,this.y,this.width,this.height);
				 }
             }
			 else if(this.state == 'dead'){
			     self.anim.currentFrame=self.anim.frames[3];
				 self.anim.draw(context,this.x,this.y,this.width,this.height);
				 self.disppearDuration--;
				 if(self.disppearDuration==0){
					 self.reprepare(self,existMatrix,i,j);
				 }
			 }
    }

    window.Mouse = Mouse;
})();
