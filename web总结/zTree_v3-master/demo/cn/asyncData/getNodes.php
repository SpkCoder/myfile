�}A  �  ���v�0$}�u
��� 5�o���nϯl�SK��8,?h9�Z�ַ.	�օf������v��@���gS˵�X@�}s��`����j�����7����ȳ�=�a�w�3F8��/2u�%鋲
�ǶC\,&ɲ��ר��E�����(�*g�3��P8�Sggjͷ<����*r���(/���ؘ���vD�ϳ�Gm��U�} �Z�-�+�r؊�$������_?�C��Wrg�Ka&E���v�2-�ƍ�L��[
�>�dwmRXW��a[���ll��0�t��N�x^�|U��,�D������!8��\�(�C��/ӑ�6��n�'�>����0g䪑Y�z�>҅�zٙ�L�cr��sm���%�qASf
��G�K0Ժ joT��AF֍�] Rw�Ds��`�G�)�-�J��1]k���ٻ��k��Z����",)�X�o��)�S٢j����`�*�pd�˾�jG7X�9�{�Iv��%g�

$pName = htmlspecialchars($pName);

//for ($i=1; $i<9999; $i++) {
//	for ($j=1; $j<999; $j++) {
//
//	}
//}

for ($i=1; $i<5; $i++) {
	$nId = $pId.$i;
	$nName = $pName."n".$i;
	echo "{ id:'".$nId."',	name:'".$nName."',	isParent:".(( $pLevel < "2" && ($i%2)!=0)?"true":"false").($pCheck==""?"":((($pLevel < "2" && ($i%2)!=0)?", halfCheck:true":"").($i==3?", checked:true":"")))."}";
	if ($i<4) {
		echo ",";
	}
}
?>]
