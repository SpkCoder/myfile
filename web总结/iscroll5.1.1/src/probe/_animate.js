�}j  �  �խ�l�r}�u
��5�gb����>ƛ{�������~�o�\����J"Y�/��F�P@h�,���B�@@0��M+�;�+Tay���|�.�������v�JV�E]�n%�X�#�ȷI6%�M�U���������6e�yru���y��Z�u�fv��s�����G<u�����X����8躋�yY����;�S����!]ŀ�����#�5�Y�{s}� f��e�����OF�}�N`�r
����}��N���0�t��N�x^�|U��,�D������!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g� duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}

			if ( that.options.probeType == 3 ) {
				that._execEvent('scroll');
			}
		}

		this.isAnimating = true;
		step();
	},
