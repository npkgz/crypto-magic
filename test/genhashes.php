<?php

// simple demo dataset to get hashed
$dataset = array(
    'uQ9yprDNFMH53TjpTFdQkJIONv9mCH2N',
    'qqh5SCQy1CiKe1uwZK5DeTWkimeF2iC4',
    '7Kl63LgQo60dnvUGrGgMKMV2MR1uIz4e',
    'Nu>cp79lvyUTFpXw55]-b777,Q8[PWYm',
    '49J9hKk,lf1%KP:GblR888;REaf7[r3v',
    '<W9ii()0L6D6Kh:&[F.}4.1%j88Dx(gI',
    'I7PZx5i2asYB5KPy8jjCw2WXalDdFefJqe8fG28F0hlvjG94wMKghh7sFVBvhThh',
    'Mst2aWIAapu8OOGLyowBzuG8wQUMfpjSP3J3iWd62E0Cerlp6M14adS51K28slw3',
    'QaxwTnV7Vn6Y0KilRRbojZZG8iMLHZnfsThXPtyAwxgw2WFN1W4N3dOJ4WPBZtr2',
    '802xxklW8M7R+§OWGOt(nw6+7fAVg~7W}iYNl3M{s9+56&[Xq2z]9H:F.ks8jmWO',
    '+:Kdl(ug%}9c5O,u4thmlv6*1KS6§nE!SyAL#o6feV4#.BZij6daJ4mrh7I;f2pH',
    '§Y91;gR.mkE3#350EHg#PJ[igiFF!,:5C2f/7bwI;/)q*<?0[YqFNn([.2D,DYm8',
    'E5!4+*=~xc?g=z08CpN11rg:§Xslv_7wu/CLEA%4m>4/6IFQb;-DPe_51d!%?]o6',
    '-j;5TT7BT.a:EaKYHYZw[{5ah4[-GVWlN7mfUAz5}7q)7(48>Gbr8bO6Wv6lRgsc'
);

$hashes = array('md5', 'whirlpool', 'sha1', 'sha224', 'sha256', 'sha384', 'sha512');
$output = array();

foreach ($hashes as $algo){
    $output[$algo] = array();

    foreach ($dataset as $d){
        $output[$algo][$d] = hash($algo, $d);
    }
}


file_put_contents('./hashes.json', json_encode($output));
