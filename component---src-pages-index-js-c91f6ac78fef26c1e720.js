"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,a){var l=a(7294),i=a(1597),r=a(396);t.Z=function(){var e,t,c=(0,i.useStaticQuery)("3249277476"),n=null===(e=c.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=c.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(1944)}),(null==n?void 0:n.name)&&l.createElement("p",null,"作者：",l.createElement("strong",null,n.name)," ",(null==n?void 0:n.summary)||null," ",l.createElement("a",{href:"https://weibo.com/"+s.weibo},"关注微博")))}},6558:function(e,t,a){a.r(t);var l=a(7294),i=a(1597),r=a(8771),c=a(8678),n=a(262);t.default=function(e){var t,a=e.data,s=e.location,o=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=a.allMarkdownRemark.nodes;return 0===d.length?l.createElement(c.Z,{location:s,title:o},l.createElement(n.Z,{title:"All posts"}),l.createElement(r.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(c.Z,{location:s,title:o},l.createElement(n.Z,{title:"All posts"}),l.createElement(r.Z,null),l.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},1944:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#383838","images":{"fallback":{"src":"/static/7223dbac3a16ac296e960daddb46ef0a/d24ee/profile-pic.jpg","srcSet":"/static/7223dbac3a16ac296e960daddb46ef0a/d24ee/profile-pic.jpg 50w,\\n/static/7223dbac3a16ac296e960daddb46ef0a/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/7223dbac3a16ac296e960daddb46ef0a/d4bf4/profile-pic.avif 50w,\\n/static/7223dbac3a16ac296e960daddb46ef0a/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/7223dbac3a16ac296e960daddb46ef0a/3faea/profile-pic.webp 50w,\\n/static/7223dbac3a16ac296e960daddb46ef0a/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-c91f6ac78fef26c1e720.js.map