�}  U  ���"�:�D}�u
��5�����W��X�3��zR�s��:X��.@d+�jx��Ά��!o��$��l�q�y��m�q�4j��7)��m6�Fr�|������P�f�,ҩy(\�@�SҮc{	H:�B���HFO�d�`��+]�N�m���'f3�n������̆,���ڽF��X_m���	K\e�FF��V�m��CL75X=���4��p�s��_܂�����j�}�	�&�-���@L��"3<L;{S[�#|b���i����6�`q	.z���ya֚�N�x^�|U��,�D������!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�
	Q.merge(this, type, true);
	Q.merge(this, type.mixin, false);
	
	this.setDrawable(type.image);
	this._frames.length = 0;
	this.addFrame(type.frames);
	this.gotoAndStop(0);
};

Cannon.prototype.fire = function(degree)
{
	this.rotation = degree;
	this.gotoAndPlay(0);
};

})();