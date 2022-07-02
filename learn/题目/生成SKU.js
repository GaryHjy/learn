// 生成SKU
// 已知规格数据
const spu = 'AB1234567';
const specList = [
  ["red", "yellow"],
  ["XL", "S"], 
  ['a1', 'a2'],
  ['b1', 'b2'],
];
/** 
  输出结果：
  AB1234567-red-XL-a1-b1;
  AB1234567-red-XL-a1-b2;
  AB1234567-red-XL-a2-b1;
  AB1234567-red-XL-a2-b2;
  AB1234567-red-S-a1-b1;
  AB1234567-red-S-a1-b2;
  AB1234567-red-S-a2-b1;
  AB1234567-red-S-a2-b2;
  AB1234567-yellow-XL-a1-b1;
  AB1234567-yellow-XL-a1-b2;
  AB1234567-yellow-XL-a2-b1;
  AB1234567-yellow-XL-a2-b2;
  AB1234567-yellow-S-a1-b1;
  AB1234567-yellow-S-a1-b2;
  AB1234567-yellow-S-a2-b1;
  AB1234567-yellow-S-a2-b2;
  ....
*/

function genSKU(prefix, arr) {
}

const skuList = genSKU(spu, specList);
console.log(skuList);