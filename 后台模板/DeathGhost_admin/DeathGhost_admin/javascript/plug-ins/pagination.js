�}�    ��p �L��}�u
��!5������U��P�K̞9V�Y'�f+N���Ӓ��֎/�zҲK��!�ty8l�����r�:��F����B�O?/�D�kx�u��pP�����'(ۼ�F��fKU;#A��b��;:+��q]X���4�`�:���eQ}������+�L����a΄���(o��I�s�te1�N�E�Sɖ���=��BNLfl�O�s7��д.���gH���>��~i�s�AN���u�zEۢ��-�_Ps2[�(r�m�'����}ˎ4�(+�������t�a�"���s�&�q�����!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�l�&5����/����ud�o�@f�åWK>����X��K�ǱR�e��^�e)tV&)IO,�@>�G����kCZ��fHǲ��7��,o,�,�!ӷ�#B<��;lkrmrV�NNA睁�c�D�#iD��˝GC�u��b�b�{�3��pEk^��*Wz���s�u����o��щAԟ��5&
��gT뻗���@o�S��g���>�	4�;�_�ډ@��K7�=���Uq�X�N����R<t9�*/���tS`�%K.�Z�ˇ�! c���VO[���\���p�e��-�}���pX��7Y�C������H���W�˴ �n��״+p��Ek��YU0����H�=6{���n |�Da��K.�Y���3hCJ=8
lo�ˏ���g���������\��M�tMΈ��1�;�F�f+>6���3PG�xk���h�eNK���H�<����;����TE����N~�ɵU�<���4��,ӁR�|�;3��p�z�3@l�)v���`7{�A����}m0��,;��I)w�59����R��������WX iF�H�lI��{#�i�_�&T���-��DF]'�?��K���F��\MK֔WA�Y���F�8��V�}up����:f����l)Փw�|��3"k\`R�;��Xu�K�� `t!���t�i��hv<}&׿!%3�G|��.���k��$�����6��V���Uޑ�q{��T��}��j��,���Ǵ�P��Ы� (Mֹ��]St�,#�p&aɃ��S���̒���ٱJaV���l^���?�5��W.Zd�lr4w:�4O�G�c�a�{WC�kQ��G�3X����',��)�M�J��i�!{g��P ���.��?��Õl��+F87�?�uX�9�"C�tA�n`:��j�f,0H ��o%1O(��y�,v�*���7��b0QԸ=$暴k������D����fH�d�@j`4Hw�g[p[�J@|��+{�;R��f
��� �OO��Ul�&^��2�Я[�Hf4�;��~ns|b�F̗f�:�Z�K��/XS�f>ǚ�|�E���;t�4a#�O��MG1QZ_-V��)�Kk��C�*%Y�̃���'"X�D���~s��V$~�QD�qDG-��A��hv���r�
�M,%NX�hJ��[��0�+
UH΁l��&B�۴�T��W��z��V��(�+h3�P��^��8��K�t��`w^VG�5�Sh:�sNF�\s�T�������9���SB����3� �MAG��V�6��#���� �UЊ�DF�e����WZk -m��� k�n�� �8��) 'k~e>@<�n�eF����>��j�J��7��V��"X��4^e�RDZ>j{�����ч)�ZA[-��i��(Ea���S�&2� �ZT?���}��෪ef>?G�w)��o>4�rȘY���>��PP̌�&yk�O`7~g���S,y�ĕ�����d2 �ū+vF� �IO��1l�.�	j��ꦬ��C<�����P�{'��:Оc��g4���#�nf�F��,�
���f%٫>][�4��������#�=�8h;���.�a���e�V�¥	�!߽���e�������@��q�����`]���xH�r�eg���b�.��ܺ�x)zk�r����wJ�6;��aCjB�����&�כ�l��E�e4r�l�b/� ���Y�ZR�!Gp�=��x�P���ρ�.�P��!����y(�k#�(flCO;�Y����<A���|�pӠS�s.�=�m����_��*��BM�h$6��&���#-��h&Ǹ�k��M�(n`0fcZ膡ũ��Ob�����"���	:�/J�;�E�(Q�@��\'
����E-	�.�Db)�1��1�"+�.��`���V�u���H7�7�\G7��_��YM@��}u�;�¡U�Fm�*_�'�]��9�̑�n~��P�F��f��J���3�HX�jݗ�6lO��R�'("click","a.nextPage",function(){
					var current = parseInt(obj.children("span.current").text());
					ms.fillHtml(obj,{"current":current+1,"pageCount":args.pageCount});
					if(typeof(args.backFn)=="function"){
						args.backFn(current+1);
					}
				});
			})();
		}
	}
	$.fn.createPage = function(options){
		var args = $.extend({
			pageCount : 10,
			current : 1,
			backFn : function(){}
		},options);
		ms.init(this,args);
	}
})(jQuery);
