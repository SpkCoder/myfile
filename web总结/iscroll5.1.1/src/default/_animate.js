�}�  �  s�
u��}�u
��5�g�����>��c�Z��Bi�.� �i����[x�hTq�t#ca�v4wXz���*&���Tԣ��k���@ �@��f�S�cƛ%����'����R���2�֒0ѶIG�!r�ć�ORh5xS��n$,�W�Յ��G��@�nx����ݟz�e1{]Ǟ�Hu�ׇ�n��8�D���-��wRf�<[�R%����
#�IM�1�+�����a?6Dx�u%k}��RE=~pʸ����Kr j�����:�)vG[d0�t��N�x^�|U��,�D������!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�ation;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
		}

		this.isAnimating = true;
		step();
	},