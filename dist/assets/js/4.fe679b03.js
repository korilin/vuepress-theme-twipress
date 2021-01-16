(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{385:function(t,s,a){t.exports=a.p+"assets/img/lang.073cd6c3.jpg"},386:function(t,s,a){t.exports=a.p+"assets/img/introduce.357883ee.jpg"},423:function(t,s,a){"use strict";a.r(s);var n=a(2),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("在编译的时候，变量的类型就可以被编译器确定，并且运行时该变量不经过强制转换将类型无法发生改变，这种禁止错误类型的参数继续运算的语言我们称为"),n("strong",[t._v("强类型语言")]),t._v("。")]),t._v(" "),n("p",[n("strong",[t._v("弱类型语言")]),t._v("的变量在定义后，可以根据环境变化不需要通过显式的强制转换，可以进行隐式的转换类型，这一种变量类型为弱类型。")]),t._v(" "),n("p",[t._v("本次主要对Python进行探讨，不对强弱类型、动态类型、安全类型这些进行讲解，关于类型系统的相关内容参考"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%A1%9E%E5%9E%8B%E7%B3%BB%E7%B5%B1#%E5%BC%B7%E5%9E%8B%E5%88%A5%E5%92%8C%E5%BC%B1%E5%9E%8B%E5%88%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki类型系统强类型和弱类型"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("以下是来自知乎问题"),n("a",{attrs:{href:"https://www.zhihu.com/question/19918532",target:"_blank",rel:"noopener noreferrer"}},[t._v("“弱类型、强类型、动态类型、静态类型语言的区别是什么？”"),n("OutboundLink")],1),t._v("中的一张图片。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(385),alt:"language"}})]),t._v(" "),n("p",[t._v("从这张图中可以看出 Python 属于强类型语言。")]),t._v(" "),n("p",[t._v("例如在 Python 里面定义了进行不同类型的运算")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),t._v("\n")])])]),n("p",[t._v("就会报如下的类型错误 (TypeError)")]),t._v(" "),n("div",{staticClass:"language-PowerShell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[t._v("Traceback "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n  File "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<stdin>"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in <module>\nTypeError: unsupported operand "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(": "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'int'")]),t._v(" and "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'str'")]),t._v("\n")])])]),n("p",[t._v("因为 a 和 b 是两个不同类型的变量，在不可以进行加号操作，但是在 C 语言里面可以，因为它会进行隐式转换，而在 Python 里面不会进行类型隐式转换。")]),t._v(" "),n("p",[t._v("对于 Python 来说，变量不通过 int() 或 str() 等方法进行转换的话，那么该变量的类型将无法发生改变。因此 Python 属于强类型语言。")]),t._v(" "),n("p",[n("strong",[t._v("但强类型是针对类型检查的严格程度而言的，它指任何变量在使用的时候必须要指定这个变量的类型，而且在程序的运行过程中这个变量只能存储这个类型的数据。")])]),t._v(" "),n("p",[t._v("但是在使用 Python 的时候可以发现，变量定义不需要指定变量的类型，一个变量可以赋其它类型的值的，例如可以这样写")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\na "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\nb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),t._v("\na "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b\n")])])]),n("p",[t._v("这看起来和强类型的定义发生冲突了，但其实这涉及到 Python 的另一个特性。")]),t._v(" "),n("p",[t._v("Python 的变量并不是指定了类型的，Python 的变量在进行赋值的时候，是指向了对象的地址，在进行重新赋值的时候，Python 变量并不关心值的类型，因为它只是改变了地址的指向。这种赋值方式报错导致的类型错误，都是在运行的时候才会发生，包括上面举的例子的。")]),t._v(" "),n("p",[n("strong",[t._v("在编译的时候不对变量类型进行识别，而是在运行时期调度已标记的资料，称为动态检查，这一类语言称为动态语言。")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%A1%9E%E5%9E%8B%E7%B3%BB%E7%B5%B1#%E9%9D%9C%E6%85%8B%E5%92%8C%E5%8B%95%E6%85%8B%E6%AA%A2%E6%9F%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情参考wiki类型系统静态和动态检查"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("因为 Python 的这个特性，所以可以抛开强类型语言对于定于及赋值时声明类型的要求，转而在运行时会对变量指向地址的值的类型进行判别，这导致 Python 中的变量几乎都是引用类型。")]),t._v(" "),n("p",[t._v("对于 Python 这种动态指向，在编写程序的时候，给我们带来了很多方便，但是稍不注意，也会让程序发生一些难以察觉的错误。")]),t._v(" "),n("p",[t._v("例如在对列表操作的时候")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\nb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a ="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b ="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("此时将会输出")]),t._v(" "),n("div",{staticClass:"language-PowerShell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[t._v("a = "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nb = "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("当 Python 将一个列表赋给 a 时，a 并不等于 [0, 0, 0], 而是指向了这个列表的地址。")]),t._v(" "),n("p",[t._v("将 a 的值赋给 b 的时，相当于将 b 的引用修改成 a 的引用，即 b 也是指向这个列表的地址。当你对 b 进行操作的时候，就是在对存放在这个地址里的值进行操作，所以 a 的值也会发生改变，当程序在递归或者用树遍历的时候，如果这样对列表元素进行操作，将可能出现逻辑的错误。")]),t._v(" "),n("p",[t._v("为了避免这种情况，Python 也提供了一些方法给我们进行赋值使用，当我们希望将 a 和 b 不是指向同一个列表，但两个列表的值又要一样的时候，我们可以用 "),n("code",[t._v("list.copy()")]),t._v(" 函数来对列表进行浅拷贝。这个函数生成了一个新的列表赋给了 b, 所以对 b 操作的时候不会改变 a 的值。")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [0, 0, 0]")]),t._v("\n")])])]),n("p",[t._v("另外一种方法就是直接对整个列表进行截取：\n当我们使用 a[x:y] 时，可以截取到 a 中下标 x 到下标 y 的片段（不包含 y，即 "),n("code",[t._v("[x,y)")]),t._v("）；\n当 x 或 y 的参数放空时，表示从头开始截取或者截取到尾；\n例：a[:y] 就是截取下标 0~y 的片段，a[x:] 就是从 x 开始截取到列表结束；\n而 a[:] 就是从头截取到最后一个元素，也就是整个列表都截取下来。")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [0, 0, 0]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1, 0, 0]")]),t._v("\n")])])]),n("p",[t._v("但这些是浅拷贝，如果你打算对复制后的多维列表进行操作，你需要判断你要操作的元素所在的维度。")]),t._v(" "),n("p",[t._v("当你对多维列表下第一层元素进行操作时")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a ="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b ="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c ="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("div",{staticClass:"language-PowerShell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[t._v("a = "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nb = "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nc = "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("这两种方法同样适用，但当你打算对复制后的多维列表的子列表进行操作时，你会发现这两个方法对于多维列表操作单个元素来说，都不起作用。")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ne "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\ne"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d ="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e ="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a ="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("div",{staticClass:"language-PowerShell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[t._v("d = "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ne = "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\na = "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[n("strong",[t._v("这个原因是：对于 Python 每一个变量都是引用，对于多维列表，表层元素的值本身是一个引用，引用被复制后还是引用。")])]),t._v(" "),n("p",[t._v("由于拷贝后，拷贝出来的多维列表是一个新引用，即指向了一个新列表的地址，但是两个列表表层元素的值相同，而该值又是一个引用，因此表层元素所指向的深层列表也相同，当我们对深层列表（引用的子列表）进行操作时，由于两个引用相同，所以操作的依旧是同一个列表。")]),t._v(" "),n("p",[t._v("可以通过下图来帮助理解这一内容：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(386),alt:"dynamic"}})]),t._v(" "),n("p",[t._v("例如：")]),t._v(" "),n("p",[t._v("我将 a 复制给了 b, 虽然生成的是新列表，但是列表里面元素指向的地址是相同的，当我修改 "),n("code",[t._v("b[0]")]),t._v(" 的时候，相当于是把 "),n("code",[t._v("b[0]")]),t._v(" 指向了其它列表，此时 a 并不会收到影响。")]),t._v(" "),n("p",[t._v("但是如果我修改的是 "),n("code",[t._v("b[1][1]")]),t._v(", 此时我修改的是 "),n("code",[t._v("b[1]")]),t._v(" 指向的列表下标为 1 的元素，但是 "),n("code",[t._v("a[1]")]),t._v(" 和 "),n("code",[t._v("b[1]")]),t._v(" 指向的是同一列表，相当于也是在修改 "),n("code",[t._v("a[1]")]),t._v("的元素。")]),t._v(" "),n("p",[t._v("这种情况下，也有应对的方法，用 for 循环来进行深度复制")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("但是这种办法对于对于 n 维列表，需要内嵌的 for 循环为 n-1 个，如果是维度高的列表，就不是很切实际了。")]),t._v(" "),n("p",[t._v("但 Python 提供了另外一种方法， "),n("code",[t._v("copy.deepcopy()")]),t._v(" 函数，这个方法在 Python 3 自带的包 "),n("code",[t._v("copy")]),t._v(" 里面。")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" copy\n\na "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" copy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deepcopy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a ="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b ="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("此时将会输出")]),t._v(" "),n("div",{staticClass:"language-PowerShell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[t._v("a = "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nb = "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("可以看到操作列表 b 并不会对列表 a 造成影响。")]),t._v(" "),n("p",[t._v("参考链接：")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.jianshu.com/p/efa9dd51f5cc",target:"_blank",rel:"noopener noreferrer"}},[t._v("谈谈python中的深拷贝和浅拷贝@会发光的二极管"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%A1%9E%E5%9E%8B%E7%B3%BB%E7%B5%B1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wiki 类型系统"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://www.zhihu.com/question/19918532",target:"_blank",rel:"noopener noreferrer"}},[t._v("弱类型、强类型、动态类型、静态类型语言的区别是什么？"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=p.exports}}]);