�}5  }  �;:vf��}�u
��5�o���n˷��(�'����� x}X�#��e'�����3L��i�����Hmvpi�',r����a.|ϙ}�� �#N��F���K�I�
4��C'��%9 Pd�v��O�<�	7�ڑ3���.��W�B���E�gl�6�s)Ev�a�h�h�ɀ-�Q[D��e�.,M$�%Vi�6��N)��+T���XL���WY�^�)#�lƪ9x��m!
��)���j���<�7��D��*����ET����[�[�ґ���U�6��� �N�x^�|U��,�D������!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�n;

    /**
     * 组件初始化
     */
    Component.prototype.init = function() {
        this.initialized = true;
        this.oninit();
    }
    /**
     * 组件销毁
     */
    Component.prototype.destory = function() {
        if(this.parent) {
            this.parent.removeChild(this);
            this.parent = null;
        }
        
        this.ondestory();
        this.oninit = this.ondestory = null;
    }

    my.Component = Component;
})();
