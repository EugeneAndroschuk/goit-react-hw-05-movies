"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,n){n.r(t);var r=n(683),c=n(439),a=n(791),o=n(689),i=n(414),u=n(184);t.default=function(){var e=(0,o.UO)().movieId,t=(0,a.useState)({}),n=(0,c.Z)(t,2),f=n[0],s=n[1],p=(0,a.useState)(!1),l=(0,c.Z)(p,2),g=l[0],h=l[1];return(0,a.useEffect)((function(){i.Z.getMovieCast(e).then((function(e){s((0,r.Z)({},e)),h(!0)}))}),[e]),(0,u.jsx)("div",{children:g&&(0,u.jsx)("ul",{children:f.data.cast.map((function(e){return(0,u.jsxs)("li",{children:[e.profile_path?(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:"",width:100}):"No Photo",(0,u.jsx)("p",{children:e.original_name}),(0,u.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})})}},414:function(e,t,n){var r=n(243),c="57ffb78434af41b6f3367e52cfbaed8d",a="https://api.themoviedb.org/3/",o={getMoviesTrending:function(){return r.Z.get("".concat(a,"trending/movie/day?api_key=").concat(c))},getMoviesSearch:function(e){return r.Z.get("".concat(a,"search/movie?api_key=").concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"))},getMovieDetails:function(e){return r.Z.get("".concat(a,"movie/").concat(e,"?api_key=").concat(c,"&language=en-US"))},getMovieCast:function(e){return r.Z.get("".concat(a,"movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US"))},getMovieReviews:function(e){return r.Z.get("".concat(a,"movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US"))}};t.Z=o},683:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=247.9ddd60d7.chunk.js.map