�})  �  E��t��D�}�u
��� 5�o����/t�3��������BD��i@��g8ih�}c�U���=���)G/��B�/Zjg��:
��(r�yn�c����-�+��7��G%\�C�����V���>q�y��|�f�v!:"qĿ��Ę_.ӫ6���̑h�1�,�!НFZ�@�8te"�c��c^�K��M:��Q}�����w��5ϙ��{ם����:v���FF�|�eHc��a&E���v�2-�ƍ�L��[
�>�dwmRXW��a[���ll��0�t��N�x^�|U��,�D������!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};