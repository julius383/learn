import{af as r,ag as n,ah as t,ai as a,aj as e,ak as i,y as u,al as o,z as f}from"./index-BiV-b1K2.js";import{a as s}from"./_baseEach-DDZLUgL5.js";import{b as l}from"./_baseMap-CoUfqKnE.js";function c(n,t){if(n!==t){var a=void 0!==n,e=null===n,i=n==n,u=r(n),o=void 0!==t,f=null===t,s=t==t,l=r(t);if(!f&&!l&&!u&&n>t||u&&o&&s&&!f&&!l||e&&o&&s||!a&&s||!i)return 1;if(!e&&!u&&!l&&n<t||l&&a&&i&&!e&&!u||f&&a&&i||!o&&i||!s)return-1}return 0}function v(r,u,o){u=u.length?n(u,(function(r){return t(r)?function(n){return a(n,1===r.length?r[0]:r)}:r})):[e];var f=-1;return u=n(u,i(s)),function(r,n){var t=r.length;for(r.sort(n);t--;)r[t]=r[t].value;return r}(l(r,(function(r,t,a){return{criteria:n(u,(function(n){return n(r)})),index:++f,value:r}})),(function(r,n){return function(r,n,t){for(var a=-1,e=r.criteria,i=n.criteria,u=e.length,o=t.length;++a<u;){var f=c(e[a],i[a]);if(f)return a>=o?f:f*("desc"==t[a]?-1:1)}return r.index-n.index}(r,n,o)}))}var h=u((function(r,n){if(null==r)return[];var t=n.length;return t>1&&o(r,n[0],n[1])?n=[]:t>2&&o(n[0],n[1],n[2])&&(n=[n[0]]),v(r,f(n),[])}));export{h as s};
