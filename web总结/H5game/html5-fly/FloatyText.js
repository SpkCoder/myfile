�}.  �  �⢪�=�}�u
��5������L��R�r@���F�_���^�Z�J�Ma�ܴ;��3�ld@U�4i�����BС�L:�eL���E#��fΛ��!��|�U��9[�c_o���a���U-��H�J��]0���y#93����S�{�c�$�����1�,,�jIp�t�H?,�C0^��,���
���Ȣ�qJ�f��ݕ��UÊ�]-@_W$mh��=�9��CQ���[�p<7������Mrq4��lC$�\����x�Z����8���[�DQ�Y�N�x^�|U��,�D������!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g� var textColor = this.myFrameCounter % g_rainbow.length;
   g_context.fillStyle = g_rainbow[textColor];

   g_context.font = "10pt Helvetica";
   g_context.fillText(this.myText, this.myX, this.myY);
   g_context.font = "14pt Helvetica";

   this.myX += this.myVelX;
   this.myY += this.myVelY;
   this.myFrameCounter++;

   if ( this.myFrameCounter > this.myDuration )
      return false;
   return true;
}
