(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(156),l=a(160),s=a(159),d=a(157),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.site.siteMetadata.description,n=e.projects.edges;return o.a.createElement(l.a,{location:this.props.location,title:t,description:a},o.a.createElement(s.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),o.a.createElement("h3",null,"All Projects"),n.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},o.a.createElement(c.a,{style:{boxShadow:"none"},to:"/project"+t.fields.slug},a)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}),o.a.createElement("hr",null))},t}(o.a.Component);t.default=u;var g="1539887434"},156:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(158);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return s});var n=a(165),r=a.n(n),i=a(166),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm,s=c.scale},158:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},159:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(168),s=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},160:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(157),l=a(162),s=a(156),d=a(167),u=a.n(d),g={particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:19.18081918081918,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}},nb:80},interactivity:{detect_on:"window",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};var m=function(e){return o.a.createElement(u.a,{style:{backgroundColor:"#153972",color:"white",height:"100vh"},params:{particleParams:g}})};var p="495320646",b=function(e){return o.a.createElement("div",null,o.a.createElement(s.b,{query:p,render:function(t){var a=t.site.siteMetadata.social,n=a.email,r=a.github,i=e.title,c=e.description;return o.a.createElement("div",{style:{color:"white",position:"absolute",margin:"auto",width:"100%",textAlign:"center",bottom:"40vh",fontFamily:"Roboto"}},o.a.createElement("h1",{style:{fontSize:"5rem",fontFamily:"Roboto",fontWeight:"bold"}},i),o.a.createElement("h2",{style:{fontSize:"2.5rem",fontFamily:"Roboto",fontWeight:"bold"}},c),o.a.createElement("div",null,o.a.createElement("a",{style:{color:"white"},"aria-label":"Send email",href:"mailto:"+n},"Email ",o.a.createElement("i",{className:"icon fa fa-envelope"})),o.a.createElement("a",{style:{color:"white"},"aria-label":"My Github",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/"+r},"Github ",o.a.createElement("i",{className:"icon fa fa-github-alt","aria-hidden":"true"}))))},data:l}),o.a.createElement(m,null))},h=a(163);var f="2779508646",y=function(e){return o.a.createElement("div",null,o.a.createElement(s.b,{query:f,render:function(t){var a=t.site.siteMetadata.social,n=a.email,r=a.github,i=e.title;return o.a.createElement("div",{style:{color:"white",background:"#153972",margin:"auto",width:"100%",textAlign:"center",fontFamily:"Roboto"}},o.a.createElement("h1",{style:{fontSize:"5rem",fontFamily:"Roboto",fontWeight:"bold",marginTop:"0px"}},i),o.a.createElement("div",{className:"icons-header"},o.a.createElement("a",{style:{color:"white"},"aria-label":"Send email",href:"mailto:"+n},"Email ",o.a.createElement("i",{className:"icon fa fa-envelope"})),o.a.createElement("a",{style:{color:"white"},"aria-label":"My Github",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/"+r},"Github ",o.a.createElement("i",{className:"icon fa fa-github-alt","aria-hidden":"true"}))),o.a.createElement("ul",null,o.a.createElement(s.a,{style:{color:"white"},to:"/"},"Home"),o.a.createElement(s.a,{style:{color:"white"},to:"/project"},"Projects"),o.a.createElement(s.a,{style:{color:"white"},to:"/blog"},"Blogs")))},data:h}))},v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.description,i=t.children;return e="/gatsby-blog/"===a.pathname?o.a.createElement(b,{title:n,description:r}):o.a.createElement(y,{title:n}),o.a.createElement("div",null,o.a.createElement("header",null,e),o.a.createElement("main",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},i),o.a.createElement("footer",null,"© ",(new Date).getFullYear()))},t}(o.a.Component);t.a=v},161:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},162:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",width:50,height:50,src:"/gatsby-blog/static/4a9773549091c227cd2eb82ccd9c5e3a/58398/gatsby-icon.png",srcSet:"/gatsby-blog/static/4a9773549091c227cd2eb82ccd9c5e3a/58398/gatsby-icon.png 1x,\n/gatsby-blog/static/4a9773549091c227cd2eb82ccd9c5e3a/fd23f/gatsby-icon.png 1.5x,\n/gatsby-blog/static/4a9773549091c227cd2eb82ccd9c5e3a/fc368/gatsby-icon.png 2x,\n/gatsby-blog/static/4a9773549091c227cd2eb82ccd9c5e3a/521d9/gatsby-icon.png 3x"}}},site:{siteMetadata:{author:"Peter Hoggarth",social:{twitter:"test",email:"hoggarth.peter@gmail.com",github:"peterhogg"}}}}}},163:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",width:50,height:50,src:"/gatsby-blog/static/4a9773549091c227cd2eb82ccd9c5e3a/58398/gatsby-icon.png",srcSet:"/gatsby-blog/static/4a9773549091c227cd2eb82ccd9c5e3a/58398/gatsby-icon.png 1x,\n/gatsby-blog/static/4a9773549091c227cd2eb82ccd9c5e3a/fd23f/gatsby-icon.png 1.5x,\n/gatsby-blog/static/4a9773549091c227cd2eb82ccd9c5e3a/fc368/gatsby-icon.png 2x,\n/gatsby-blog/static/4a9773549091c227cd2eb82ccd9c5e3a/521d9/gatsby-icon.png 3x"}}},site:{siteMetadata:{author:"Peter Hoggarth",social:{twitter:"test",email:"hoggarth.peter@gmail.com",github:"peterhogg"}}}}}},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Peter Hoggarth",description:"Full stack software developer.",author:"Peter Hoggarth"}}}}}}]);
//# sourceMappingURL=component---src-pages-project-js-411de36236afac2ab842.js.map