# css权重优先级计算

inline style -> (1000)

id selectors -> (100)

class selectors / 伪类（:first） / 属性选择器 ->(10)

type selectors / 伪元素选择器 （::after, ::before） -> (1)



e.g.: div a .test

[0, 0, 1, 2]

div div #test

[0, 1, 0, 2]


[inline, id, class, type]