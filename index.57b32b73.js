!function(){var t,e;fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_8tpZg11OtSAVj1x4e7Xsgrtcx0d6GFYVaOUgrdFXq3fwB3BvcWUUBzK33KIQ8PCa"}}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){throw t})),e="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(t),fetch(e,{headers:{"x-api-key":"live_8tpZg11OtSAVj1x4e7Xsgrtcx0d6GFYVaOUgrdFXq3fwB3BvcWUUBzK33KIQ8PCa"}}).then((function(t){return t.json()})).then((function(t){return t[0]})).catch((function(t){throw t}));document.querySelector(".breed-select")}();
//# sourceMappingURL=index.57b32b73.js.map
