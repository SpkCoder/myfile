�}�  N  ��*�f�}�u
��5���n����D��6��2&�:P4��wF����ߋ��3B�7
�z�&���ʺX���\�5;��ކ&0�X���IOd�Ũ�ָ"O���E���7>lr����0��$��Sg���F۾���~|�a�%@��n��b|�����{uѱQ	��6�3(~�|�4m�*=$OD���M</� �L]�$
L��#{t�|kE�P�d�Cn�+�D�����M��zL���F�0�F�\�P��n�t�JD|K�n�A�B�xT�)�~�0�t��N�x^�|U��,�D������!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�i];
		var dx = Math.random()*fish.width + 20 >> 0;
		var dy = Math.random()*fish.height + 20 >> 0;
		if(Math.random() > 0.5) dy *= -1;
		fish.x = prev.x + dx * dir;
		fish.y = prev.y + dy;
		prev = fish;
	}
};

FishGroup.pattens.push(HLinePatten);

})();