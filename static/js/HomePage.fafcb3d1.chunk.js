(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{32:function(t,n,e){"use strict";var r=e(36),a=e.n(r);a.a.defaults.baseURL="https://api.themoviedb.org/3";var c="3011823430ba4360f934c80b54c0176e",i={trendingMovies:function(){return a()("/trending/movie/day?api_key=".concat(c)).then((function(t){return t.data.results}))},searchMovies:function(t){return a()("/search/movie?api_key=".concat(c,"&query=").concat(t)).then((function(t){return t.data.results}))},detailsMovies:function(t){return a()("/movie/".concat(t,"?api_key=").concat(c)).then((function(t){return t.data}))},castMovies:function(t){return a()("/movie/".concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.data.cast}))},reviewsMovies:function(t){return a()("/movie/".concat(t,"/reviews?api_key=").concat(c)).then((function(t){return t.data.result}))}};n.a=i},65:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return h}));var r=e(2),a=e(30),c=e(31),i=e(34),o=e(33),u=e(0),s=e(9),d=e(32),h=function(t){Object(i.a)(e,t);var n=Object(o.a)(e);function e(){var t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=n.call.apply(n,[this].concat(c))).state={trending:[]},t}return Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;d.a.trendingMovies().then((function(n){return t.setState({trending:n})}))}},{key:"render",value:function(){var t=this,n=this.state.trending;return Object(r.jsxs)("article",{children:[Object(r.jsx)("h3",{children:"Trending today"}),n.length>0&&Object(r.jsx)("ul",{children:n.map((function(n){return Object(r.jsx)("li",{children:Object(r.jsx)(s.b,{to:{pathname:"/movie/".concat(n.id),state:{from:t.props.location}},children:n.title})},n.id)}))})]})}}]),e}(u.Component)}}]);
//# sourceMappingURL=HomePage.fafcb3d1.chunk.js.map