!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("6JpON");function a(e,t){var n=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}e(r).Notify.init({position:"center-bottom",distance:"100px"}),document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(t.target.elements.delay.value),o=Number(t.target.elements.step.value),i=t.target.elements.amount.value,u=1;u<=i;u+=1)a(u,n).then((function(t){var n=t.position,o=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=o}))}();
//# sourceMappingURL=03-promises.f2fb22b4.js.map
