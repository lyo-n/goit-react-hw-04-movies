(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{67:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var c=n(2),a=n(30),r=n(31),s=n(34),i=n(33),p=n(0),o=n(32),h=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={cast:null},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;o.a.fetchMovieCast(this.props.match.params.movieId).then((function(e){return t.setState({cast:e})}))}},{key:"render",value:function(){var t=this.state.cast;return Object(c.jsx)(c.Fragment,{children:t&&Object(c.jsx)("ul",{children:t.map((function(t){return Object(c.jsx)("li",{children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w154/".concat(t.profile_path):"".concat("https://static.thenounproject.com/png/340719-200.png"),alt:t.id}),Object(c.jsx)("p",{children:t.name}),Object(c.jsxs)("p",{children:["Character: ",t.character]})]})},t.id)}))})})}}]),n}(p.Component)}}]);
//# sourceMappingURL=8.84845095.chunk.js.map