!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=r);var o=r("6JpON"),u=document.querySelector("form");u.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(u.querySelector('input[name="delay"]').value),t=Number(u.querySelector('input[name="step"]').value),r=Number(u.querySelector('input[name="amount"]').value),i=n,a=1;a<=r;a+=1){(function(e,n){return new Promise((function(t,r){var o=Math.random()>.3;setTimeout((function(){o?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))})(a,i).then((function(e){return o.Notify.success(e)})).catch((function(e){return o.Notify.failure(e)})),i+=t}}))}();
//# sourceMappingURL=03-promises.919c67c5.js.map
