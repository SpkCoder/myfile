�}�  T  �}�p鱤}�u
��5�����T��ؔ|�4	J%�<�#JiO�3��q�ѡ$��Bmaȷ/��z���rv�-��p[��W�f��0���%����B_ܢ+x�w/^L$��[oJQEv�m���MDؚ�>Z��Ǭ|�?w��+� �4�s�!WC���@�o]�3vϗ*��"���z~.:gM:��b��l?jQ`����%���&�?���k�-0	7tp?�Af{�sx4.�T<D�+���ھ 2V>-@�J���3���3)�~ZF0k�T[忕k����l2����7�,�D������!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�lD,�~jaP�.��N��P}���w����Z9�s刁�lNI���7O��&�Wϰ<*�t��u�P�TKT̤~qa_����M!~/�S��H�� :�w��
T�6+eۘ��>��j�́*D �u��iۋ���ˎ7��,EP�0{�e�"�nS7)��K%���T ���^*x�S&��ʇ�ƍ�<	���O��*�`����d�c
}'~�*�A(��S����1�����OoF^�^��P�)df#P�,|OA#�G���}<�r�^��п�ƾ�����g���qR�u��W��/��P�C�8fLB�ӝfM��X����|�7лI�)���L�H��*M�Ƥ��򫑕p�,i���ǹ����t^Nm+����%f��yʷ.e�bn�K�Gcb?�K�
t����.q�N1��m����eT-���5+Nk�r5\����P^����g;��Z����J�CA[B	�1���;�$�<�����N�8�Va�T��i���&�lD-���3pڌ;�^�~�Ǹ�>d�%2�.Cg)��m޻D�M} �����W�q}]�KI)2����vLm����_f�J��������/�3����7�i�+�%^����I�W8�%U����֎���|��J\k����w[t_��~a9�	�k���J��}ay�laKO�d�D7yߵa9(������s�0�(�g����Ԧ���_�P������b�9U�q��k��˖yh�©,gy`(݊t�d�:���Nn��]II� $�l��G�'la&����Y$KH�͕8�ʙ�K�hʣʣ~Ҧk��Z�^,�b�^����y8��+oƷxcm��Q�6�*@��<NR$ܽ��υ�]���~S��4(4�$��Oͤ��F`�����:�����(Ľ��t��E��٤���F4�Ta��:�W�TL1�2Svxf8�����Q�¿���m��z =���k���2�i.M��O���.w��^G��v1DO�K.l�T`#Yl-�K=(��*�+������)I����-4"0Bߨ@�pv���f�fQ��\O�@,�G��d5�M&ķ��k%Q�J!)�J�9�?��1n�"(Ϯ��"��.1���4��^	�b��|�d^5O���L3�򰟨:㑜W��y#'Ed�������ᓋC��Y��j1��� ��o���w�76�!%J3�!��!��?��Ҹ��( #��'����n+ߣ;�_��?�e��:ul}���S�d��>U�\Wc�`���1���KN����A�2�S�NYX@:ĺZ�˷#�p�D��[@ 
BM�%n�S~ �_�'1��7����#etg�Fw��ʂ�d�*�;R
>���pb��67�E�x�LQe=�J��;�Uy!᱒�L`sɯ�2K <�C��;1���"��{�|$�����E,Ud_h�	Ze����khSͯ� {Nou�_3��z�1��&%Pgc2M
�o;�Gt����W�w:��Mae��R�G�Nh���`���/��٨��U�nBeCaptured(this.power - 1))
		{		
			fish.moving = false;
			fish.captured = true;
			fish.capturingCounter = game.fps >> 1;
			fish.gotoAndPlay("capture");
		}
	}
	return true;
};

Bullet.prototype.destory = function()
{
	this.parent.removeChild(this);
};

Bullet.prototype.isOutOfScreen = function()
{
	return (this.x < -50 ||
			this.x > game.width + 50 || 
			this.y < -50 || 
			this.y > game.height + 50);
};

})();