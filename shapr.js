/*

Quantumult X
unlock Shapr:3D PRO

*/

let obj = JSON.parse($response.body);
obj.segmentation_is_student_or_teacher = true;
$done({body: JSON.stringify(obj)});
