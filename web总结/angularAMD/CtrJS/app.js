�}�  N  K����|h�}�u
��� 5�9r��������O2q������Q)6*;�P�_��E��z�����B�3�ܙ���p��P	c8Z�ê*Ea`��-��M:���4�������Bۘ5���~�@r��4��V
=�f)G01��`�,�&��-.����\���ĊK	�9e�Tۇ�BP9Z h���`������w��5ϙ��{ם����:v���FF�|�eHc��a&E���v�2-�ƍ�L��[
�>�dwmRXW��a[���ll��0�t��N�x^�|U��,�D������!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�l'��a!�P���{P��	�y(5����G)f6�B<+أ^VG+z5���q^rH& 8ƶb�s����|*��p�1Q�ȥ�~��\e#�޻�Jj�B.?I�y�����Jِ^����d쳹��@�7XgZ6���E�p?�m����؎�;�d��r���p��K꟫f˔53l�XC���P9�D�� ��D`���+i!�4�F|�p�;��V�S�^��A1����d�C����wť{]`1h`�ʾ�zۿC�4��j�ĝ�3v���fPEnC�:�z��0DncS�	�EKEl���m��5��9c�I�����R�2zԠo����4�n�WF��^�ϩ�DJSۂ����>b���Η�Xc�5��餗�l�m��fjנt�㹁7=��:u�-i%�*;Y_�bh�+n����cAO�����C0|v1C�1�[����+���ߊ�"�^���GL����J;ڵ����$�+	�=޴F�{i1O6   controllerUrl: 'CtrJS/home.js'
                })
            )
            .when(
                "/about",
                angularAMD.route({
                    templateUrl: 'views/about.html',
                    controller: 'AboutController',
                    controllerUrl: 'CtrJS/about.js'
                })
            )
            .otherwise({redirectTo:'/'});

    });

    
    //定义app模块
    return angularAMD.bootstrap(app);
});



