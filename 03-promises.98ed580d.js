!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=r);var o=r("6JpON"),u=document.querySelector("form");u.addEventListener("submit",(function(e){var n=function(e){new Promise((function(e,n){var t=Math.random()>.3;setTimeout((function(){t?e():n()}),a)})).then((function(){return o.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(a,"ms"))})).catch((function(){return o.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(a,"ms"))})),a+=r};e.preventDefault();for(var t=Number(u.querySelector('input[name="delay"]').value),r=Number(u.querySelector('input[name="step"]').value),i=Number(u.querySelector('input[name="amount"]').value),a=t,c=1;c<=i;c+=1)n(c)}))}();
//# sourceMappingURL=03-promises.98ed580d.js.map
