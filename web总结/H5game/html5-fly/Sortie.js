�}�  �  .w0�L9}�u
��5�o����L���ɲ���b��d�e�^"��M�:w��vf������"3T>�9�M�3�
:a�(T��N�2~���$�k���t}7�* >�qD(U�04�~�|3�0L5�Y�R9��Ē��-s�g✡�LGwf��i|!����Ʀ�/��Oξ��L�oj��"��HZw'\�ݲAe��d�����ko�2�jr����ha�c�<����
<ݔ���n�El�3��`�B�x� �]����,[���ll��0�t��N�x^�|U��,�D������!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�Sortie.prototype.launch = function()
      {
         if ( this.myLaunched )
            return;

         var i;

         for (i = 0; i < this.myComponents.length; ++i )
            g_enemies.push(this.myComponents[i]);

         this.myLaunched = true;

         return this.myComponents[i-1];
      }
