if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'example'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'example'.");
}
if (typeof Yested === 'undefined') {
  throw new Error("Error loading module 'example'. Its dependency 'Yested' was not found. Please, check whether 'Yested' is loaded prior to 'example'.");
}
var example = function (Kotlin, $module$Yested) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      vilmosnagy: Kotlin.definePackage(null, /** @lends _.com.vilmosnagy */ {
        yestedexample: Kotlin.definePackage(null, /** @lends _.com.vilmosnagy.yestedexample */ {
          f: function () {
            this.unaryPlus_pdl1w0$('Hello World');
          },
          f_0: function () {
            this.unaryPlus_pdl1w0$('Bolded text');
          },
          f_1: function () {
            this.strong_6csr66$(_.com.vilmosnagy.yestedexample.f_0);
          },
          f_2: function () {
            this.unaryPlus_pdl1w0$('Link to Framework');
          },
          f_3: function () {
            this.a_imi8xm$(void 0, void 0, 'http://www.yested.net', void 0, _.com.vilmosnagy.yestedexample.f_2);
          },
          f_4: function () {
            this.li_639p41$(_.com.vilmosnagy.yestedexample.f_1);
            this.li_639p41$(_.com.vilmosnagy.yestedexample.f_3);
          },
          main_kand9s$f: function () {
            this.h1_6csr66$(_.com.vilmosnagy.yestedexample.f);
            this.ul_nrtpt3$(_.com.vilmosnagy.yestedexample.f_4);
          },
          main_kand9s$: function (args) {
            var tmp$0;
            var div = $module$Yested.net.yested.with_ji1yox$(new $module$Yested.net.yested.Div(), _.com.vilmosnagy.yestedexample.main_kand9s$f);
            (tmp$0 = $module$Yested.net.yested.el_61zpoe$('app')) != null ? tmp$0.appendChild(div.element) : null;
          }
        })
      })
    })
  });
  Kotlin.defineModule('example', _);
  _.com.vilmosnagy.yestedexample.main_kand9s$([]);
  return _;
}(kotlin, Yested);
