var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=r);var o=r("7Y9D8");function i(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?n(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.target.elements.delay.value),n=Number(e.target.elements.step.value),r=Number(e.target.elements.amount.value);let l=t;for(let e=1;e<=r;e+=1)i(e,l).then((e=>o.Notify.success(e))).catch((e=>o.Notify.failure(e))),l+=n}));
//# sourceMappingURL=03-promises.d35769b0.js.map
