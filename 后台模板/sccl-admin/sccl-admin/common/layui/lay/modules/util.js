�}?    $/�b~,�}�u
��Z5�O���n��Dz��`�ܪ�?�2@cOh�ϰ��*��D|]�� ��.S!�p���? u���#����yb®tJq���j��ۑ8#� <���j�P=3���9��	���c��j6�Ew�<�y�
�7�a��q�5��#u��£�4 ,br�w�h�[�9�J�Z�J~Q��bJa�t#G��"a|<�����>�b�.&��l'4����V7@����fD�T���k��^��A�C47�z�j��[}
�Xe�ip��Pl:W�p~�G0���ғO��Xn
~(�2�@?�НG���'��*��oK�V�6[�p;���$�c	�X�)�^��8�v�/�)ٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�l/���udQ�����ÊQ,?d*%�'ݓ�i�|�yM�&�x=��w&3J(�$̵��c�9"'��&�c�b9�w�@*���8��~�9!(i��C�|��AB6 �sK�_#�x��o��n�xK�Vd��9ע��B�,J�O1ڣ��k�{h!-H��Ŕ���H���F�{�vQ��.%5�M���t���3J�W.��@K�b��t�ڷ���F�-EG��*h�(���3
XC	xm?�;���0'xG��;�"C`�Il6�+���.����@=j��剔*u�@��f�Mjm�p[6����$X�5!'��×�j�F��aYemc�]��a�%|3t�c��X�	w��Sam6F5/��Б�~��!H.��N��S��"(�p���5���T4�旘�V)&�su5�;v6c��Ks���*���C *d�B�����Uȕ�������Θ�B*���Ҋ��{�6"�h���s�<o�|��3��UqT���_)y"lD*|`�:��3�s�4%�®c�f����9+4	&HF0�yȢ��E`�d��@FM7x�['��]�3�0 � ��X��h"c�c��l���݇��w�R�o�)�0���N���O�j]��+���-AO�zI���2�јk�=d>Q�M�����߇�,`��~�0��7!ot������ߨ��$��h���s�zZB� �E=,�Z{���܆N�;�f2iO\���YeW
v	b��iT���ѣƋ��b&���:Jg���>Q���)^�x~%*,B��)�'o(3�}����k��MlPA =g����^ٮŖ��;�$�C�+[hA�Sn\q�s�M�یca�ʽ�m�l[c3nMӸC��0��&���	��]�)#5��w�f�a��8�S)7AU`d�yI=��T]�^����W���Ʋ�%�!"�d��1V�L�e�����bUlx�F�V.��u�afw��m�I���z��[8, function(){
        var othis = $(this), type = othis.attr('lay-type');
        if(type === 'top'){
          $('html,body').animate({
            scrollTop : 0
          }, 200);;
        }
        options.click && options.click.call(this, type);
      });
      
      //Top显示控制
      $(document).on('scroll', function(){
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){
          scroll();
        }, 100);
      });
    }
  };
  
  exports('util', util);
});