(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+5i3":function(e,t,r){},ABfV:function(e,t,r){e.exports={link:"link-module--link--2Ffog"}},OGtf:function(e,t,r){var l=r("XKFU"),a=r("eeVq"),s=r("vhPU"),n=/"/g,i=function(e,t,r,l){var a=String(s(e)),i="<"+t;return""!==r&&(i+=" "+r+'="'+String(l).replace(n,"&quot;")+'"'),i+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(i),l(l.P+l.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},QeBL:function(e,t,r){"use strict";r.r(t);r("KKXr");var l=r("en+Q"),a=r("q1tI"),s=r.n(a),n=r("Wbzz"),i=r("UbMB"),o=r.n(i),u=r("/ROL"),c=r("jr8U"),d=r.n(c);var p=function(e){var t,r;function l(t){var r;return(r=e.call(this,t)||this).state={filterSelected:"none"},r}return r=e,(t=l).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,l.prototype.render=function(){var e=this,t=o.a.bind(d.a);return s.a.createElement("aside",{className:d.a.sidebar},s.a.createElement("header",null,s.a.createElement(n.a,{to:"/"},"rvaccaro")),s.a.createElement("section",{className:d.a.social},s.a.createElement(u.a,{type:"CodePen",id:"rvaccaro"}),s.a.createElement(u.a,{type:"FreeCodeCamp",id:"robertito13"}),s.a.createElement(u.a,{type:"GitHub",id:"robertito13"}),s.a.createElement(u.a,{type:"Goodreads",id:"112815172"}),s.a.createElement(u.a,{type:"LastFM",id:"rvaccaro"}),s.a.createElement(u.a,{type:"LinkedIn",id:"rvaccaro85"}),s.a.createElement(u.a,{type:"StackOverflow",id:"4467281"}),s.a.createElement(u.a,{type:"Twitter",id:"robertitov13"})),s.a.createElement("section",{className:d.a.categories},s.a.createElement("button",{className:t({filterButton:!0,active:"none"===this.state.filterSelected}),onClick:function(){e.props.filterFn(""),e.setState({filterSelected:"none"})}},"Todos"),s.a.createElement("button",{className:t({filterButton:!0,active:"links"===this.state.filterSelected}),onClick:function(){e.props.filterFn("type=links"),e.setState({filterSelected:"links"})}},"Enlaces"),s.a.createElement("button",{className:t({filterButton:!0,active:"posts"===this.state.filterSelected}),onClick:function(){e.props.filterFn("type=posts"),e.setState({filterSelected:"posts"})}},"Posts"),s.a.createElement("button",{className:t({filterButton:!0,active:"certificates"===this.state.filterSelected}),onClick:function(){e.props.filterFn("type=certificates"),e.setState({filterSelected:"certificates"})}},"Certificados")),s.a.createElement("section",{className:d.a.last}))},l}(s.a.Component),f=(r("tUrg"),r("IP2g")),m=r("wHSu"),g={fontSize:"16px",height:"16px",width:"1em",verticalAlign:"-0.125em"},b=r("ABfV"),w=r.n(b);var h=function(e){var t,r;function l(){return e.apply(this,arguments)||this}return r=e,(t=l).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,l.prototype.render=function(){return s.a.createElement("div",{className:w.a.link},s.a.createElement("a",{href:this.props.to},this.props.children),s.a.createElement(f.a,{icon:m.d,style:g}))},l}(s.a.Component);var k=function(e){var t,r;function l(){return e.apply(this,arguments)||this}return r=e,(t=l).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,l.prototype.render=function(){return s.a.createElement("div",{className:w.a.link},s.a.createElement(n.a,{to:this.props.to},this.props.children),s.a.createElement(f.a,{icon:m.a,style:g}))},l}(s.a.Component),_=r("k3lz"),v=r.n(_),y=function(e){var t=e.posts;return s.a.createElement("div",{className:v.a.content},t.map((function(e){var t=e.node,r=(t.frontmatter.tags||[]).map((function(e){return s.a.createElement("div",{className:v.a.tag,key:e},e)})),l=null;switch(t.fields.source){case"links":l=s.a.createElement(h,{to:t.frontmatter.link},t.frontmatter.title);break;case"certificates":l=s.a.createElement(k,{to:t.fields.slug},t.frontmatter.title," [",t.frontmatter.issuer,"]");break;default:l=s.a.createElement(n.a,{to:t.fields.slug},t.frontmatter.title)}return s.a.createElement("article",{key:t.id,className:v.a.article},s.a.createElement("div",{className:v.a.date},"[ ",s.a.createElement("time",{dateTime:t.frontmatter.rawDate},t.frontmatter.date)," ]"),l,r||"")})))},D=r("H8eV");r("+5i3"),t.default=function(){var e=l.data.allMarkdownRemark.edges||[],t=Object(a.useState)({filteredPosts:[],query:""}),r=t[0],n=t[1],i=r.filteredPosts,o=r.query,u=i&&""!==o?i:e;return s.a.createElement("div",{className:"container"},s.a.createElement(D.a,{title:"Inicio"}),s.a.createElement(p,{filterFn:function(t){var r=t.split("="),l=e.filter((function(e){return"type"===r[0]&&e.node.fields.source===r[1]}));n({filteredPosts:l,query:t})}}),s.a.createElement(y,{posts:u}))}},UbMB:function(e,t,r){var l;r("LK8F"),function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var s=typeof l;if("string"===s||"number"===s)e.push(this&&this[l]||l);else if(Array.isArray(l))e.push(a.apply(this,l));else if("object"===s)for(var n in l)r.call(l,n)&&l[n]&&e.push(this&&this[n]||n)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()},"en+Q":function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"fields":{"slug":"/codigofacilito-react-profesional/","source":"certificates"},"excerpt":"","frontmatter":{"date":"21-07-2020","rawDate":"2020-07-21","title":"Curso profesional de React","link":null,"tags":null,"issuer":"códigofacilito","issuer_url":"https://codigofacilito.com/","cert":{"publicURL":"/static/a19853d972ec2e7cdc74f3bc9a03cee4/certificate.pdf"},"cert_url":"https://codigofacilito.com/usuarios/robertovaccaro"},"id":"d5b9add6-d36f-5304-a0ac-d8b9db655960"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"21-07-2020","rawDate":"2020-07-21","title":"I Built my blog Using Dev.to API and React💛, here is how you can create your own Blog","link":"https://dev.to/hemant/i-created-my-blog-using-dev-to-api-and-react-4f61","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"680cec93-2afe-51d1-9ad6-5f510f6100ce"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"20-07-2020","rawDate":"2020-07-20","title":"Cool stuff with Typescript","link":"https://dev.to/aminejvm/cool-stuff-with-typescript-2aah","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"809a6540-c50e-5480-bc61-306d36857455"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"16-07-2020","rawDate":"2020-07-16","title":"Build your own React","link":"https://pomb.us/build-your-own-react/","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"d6472155-be65-59b0-8ef9-143714a39152"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"14-07-2020","rawDate":"2020-07-14","title":"18 Essential Videos That Fundamentally Shaped My Understanding of JavaScript","link":"https://dev.to/somedood/18-essential-videos-that-fundamentally-shaped-my-understanding-of-javascript-3ib","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"f031d888-0ef7-5fa7-91b1-fa9b4f814486"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"11-07-2020","rawDate":"2020-07-11","title":"The algorithm behind Ctrl + F","link":"https://dev.to/akhilpokle/the-algorithm-behind-ctrl-f-3hgh","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"f5db8936-3b00-5b56-bda0-a9acae57253e"}},{"node":{"fields":{"slug":"/codigofacilito-php-profesional/","source":"certificates"},"excerpt":"","frontmatter":{"date":"07-07-2020","rawDate":"2020-07-07","title":"Curso profesional de PHP","link":null,"tags":null,"issuer":"códigofacilito","issuer_url":"https://codigofacilito.com/","cert":{"publicURL":"/static/dbc10b578a3fff4a3e769a58c0d54fb8/certificate.pdf"},"cert_url":"https://codigofacilito.com/usuarios/robertovaccaro"},"id":"bc8fae09-05a7-5b85-aef5-5bb9fe94108e"}},{"node":{"fields":{"slug":"/jwt-the-right-way/","source":"posts"},"excerpt":"Introducción JWT es un formato estandarizado para representar claims, información sobre identidad o privilegios, con el objetivo de…","frontmatter":{"date":"06-07-2020","rawDate":"2020-07-06","title":"JWT: The right way","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"8de82cd3-818e-5527-9060-21f629be3d39"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"05-07-2020","rawDate":"2020-07-05","title":"25 años de historia de PHP | JetBrains","link":"https://www.jetbrains.com/es-es/lp/php-25/","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"f63ff678-bff6-559f-9a46-8d3535475ac8"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"05-07-2020","rawDate":"2020-07-05","title":"What\'s new in PHP 8","link":"https://stitcher.io/blog/new-in-php-8","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"707f4251-ddce-53aa-8611-2151bdd67210"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"03-07-2020","rawDate":"2020-07-03","title":"A Journey to find a memory leak","link":"https://jolicode.com/blog/a-journey-to-find-a-memory-leak","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"0cc66064-fa54-514d-954c-bf2b59b7d5f6"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"02-07-2020","rawDate":"2020-07-02","title":"A Complete Guide to Dark Mode on the Web","link":"https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"938d8889-4455-577d-9474-5c2ac0ebd097"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"30-06-2020","rawDate":"2020-06-30","title":"How to Add Search Functionality to a Gatsby Blog","link":"https://www.aboutmonica.com/blog/create-gatsby-blog-search-tutorial","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"22de59c4-f432-53e3-b0ad-344503b79d68"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"26-06-2020","rawDate":"2020-06-26","title":"Visual Studio Code tips and tricks","link":"https://channel9.msdn.com/Events/Build/2020/BOD103?ocid=AID3012654&WT.mc_id=build2020-azuredevtips-micrum","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"2cf54b99-b962-51fb-9bea-2b3a614fe3f1"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"23-06-2020","rawDate":"2020-06-23","title":"Detect PHP security vulnerabilities with Psalm","link":"https://psalm.dev/articles/detect-security-vulnerabilities-with-psalm","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"4464c60e-2a81-5283-b7c2-79150321b1dc"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"16-06-2020","rawDate":"2020-06-16","title":"How to Code Right in Your Browser with Your Own Cloud Dev Environment","link":"https://www.freecodecamp.org/news/learn-programming-in-your-browser-the-right-way/","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"acdd811a-ad34-560f-b832-4f7c71488c36"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"10-06-2020","rawDate":"2020-06-10","title":"Using \\"window\\" the React Way with react-fns","link":"https://alligator.io/react/declarative-html5-apis-react-fns/","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"9c97a0b0-e0c0-5dc2-a1fe-be12504f40dc"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"10-06-2020","rawDate":"2020-06-10","title":"What the Heck is Backstage Anyway?","link":"https://engineering.atspotify.com/2020/03/17/what-the-heck-is-backstage-anyway/","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"02750e84-4cf9-5d6f-b9fb-56119de152f6"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"19-05-2020","rawDate":"2020-05-19","title":"The case of the missing DNS packets: a Google Cloud support story","link":"https://cloud.google.com/blog/topics/inside-google-cloud/google-cloud-support-engineer-solves-a-tough-dns-case","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"3633364c-4bf7-504b-a4b5-48be229654a3"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"19-05-2020","rawDate":"2020-05-19","title":"How HTTP Requests Work","link":"https://christine.website/blog/how-http-requests-work-2020-05-19","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"6dfce683-b683-57b5-8e6d-9c190117842e"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"19-05-2020","rawDate":"2020-05-19","title":"The Hardest Program I\'ve Ever Written","link":"https://journal.stuffwithstuff.com/2015/09/08/the-hardest-program-ive-ever-written/","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"93b534e7-8db2-5a45-8fc6-425dc31b3810"}},{"node":{"fields":{"slug":"/udemy-nodejs/","source":"certificates"},"excerpt":"","frontmatter":{"date":"15-04-2020","rawDate":"2020-04-15","title":"NodeJS - The Complete Guide (MVC, REST APIs, GraphQL)","link":null,"tags":null,"issuer":"Academin - Udemy","issuer_url":"https://www.udemy.com/user/academind/","cert":{"publicURL":"/static/816f9760eca75ae8ed18f30e817bae29/certificate.jpg"},"cert_url":"https://www.udemy.com/certificate/UC-47dd1e5d-fee0-4421-94f1-4982f9c47692/"},"id":"a6bdb044-6bd7-5591-9c9b-f588c9a7c6a7"}},{"node":{"fields":{"slug":"/utn-devops/","source":"certificates"},"excerpt":"","frontmatter":{"date":"27-03-2020","rawDate":"2020-03-27","title":"DevOps, integración y agilidad continua","link":null,"tags":null,"issuer":"UTN.BA","issuer_url":"https://www.sceu.frba.utn.edu.ar/e-learning/","cert":{"publicURL":"/static/354796bb9a7eb31308b933f1aa51152c/certificate.pdf"},"cert_url":"https://learndigital.withgoogle.com/activate/validate-certificate-code"},"id":"d9397066-d54d-5e83-b12f-d25daa57c7fe"}},{"node":{"fields":{"slug":"/mikroways-fundamentos-kubernets/","source":"certificates"},"excerpt":"","frontmatter":{"date":"21-02-2020","rawDate":"2020-02-21","title":"Fundamentos de Kubernets","link":null,"tags":null,"issuer":"Mikroways","issuer_url":"https://www.mikroways.net/","cert":{"publicURL":"/static/c7f7b12bc0bfad24750a419b540729c5/certificate.pdf"},"cert_url":""},"id":"0f9cc0df-5dac-51e7-b0e5-e664124dc464"}},{"node":{"fields":{"slug":"/google-activate-desarrollo-app-moviles/","source":"certificates"},"excerpt":"","frontmatter":{"date":"13-07-2019","rawDate":"2019-07-13","title":"Desarollo de Apps Móviles","link":null,"tags":null,"issuer":"Google Actívate","issuer_url":"https://learndigital.withgoogle.com/activate","cert":{"publicURL":"/static/bcb71e75b61594e84f53f1a3858282c2/certificate.pdf"},"cert_url":"https://learndigital.withgoogle.com/activate/validate-certificate-code"},"id":"c7a61193-ac15-5e8d-8822-04dade91a1f0"}},{"node":{"fields":{"slug":"/wordpress-cs-en-vscode/","source":"posts"},"excerpt":"WordPress tiene recomendaciones sobre cómo se debe escribir el código tanto si es para el core como para plugins y themes e incluso para la…","frontmatter":{"date":"30-05-2019","rawDate":"2019-05-30","title":"WordPress CS en VSCode","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"5c10fea9-a923-516c-a406-1462fdc32bec"}},{"node":{"fields":{"slug":"/quitar-etiquetas-p-de-las-imagenes-en-wordpress/","source":"posts"},"excerpt":"","frontmatter":{"date":"29-05-2019","rawDate":"2019-05-29","title":"Quitar etiquetas p de las imágenes en WordPress","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"ddb4382e-4bfc-5f9a-8b5d-6052b15f22b3"}},{"node":{"fields":{"slug":"/docker-compose-env/","source":"posts"},"excerpt":"Compose nos permite una gran personalización mediante el archivo de configuración pero hay algunas cosas que no están soportadas dentro del…","frontmatter":{"date":"11-05-2019","rawDate":"2019-05-11","title":"Docker Compose: .env","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"1d6a954f-a396-55d5-8528-9ca2e8978a03"}},{"node":{"fields":{"slug":"/docker-wordpress/","source":"posts"},"excerpt":"Siguiendo con el tema de Docker, uno de mis usos preferidos es utilizarlo para crear entornos locales para testear WordPress. Si bien hay…","frontmatter":{"date":"05-05-2019","rawDate":"2019-05-05","title":"Docker: Wordpress","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"ec3c4afb-1864-5ce5-b793-aa55b1e97bd8"}},{"node":{"fields":{"slug":"/docker/","source":"posts"},"excerpt":"Hace unos meses como consecuencia de haber tenido que cambiar de discos en mi PC me encontré con la necesidad de volver a montar un entorno…","frontmatter":{"date":"03-05-2019","rawDate":"2019-05-03","title":"Docker","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"5f76e5fb-8da1-5922-b1fd-01cb33aa5aaa"}},{"node":{"fields":{"slug":"/divagacion-gutenberg/","source":"posts"},"excerpt":"El cambio de editor por defecto de WordPress en diciembre del año pasado generó mucha controversia. Por parte de sus detractores, lo poco…","frontmatter":{"date":"29-04-2019","rawDate":"2019-04-29","title":"Divagación: Gutenberg","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"c1341a8e-226a-5ef3-a8a2-576c3bb94111"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"18-01-2019","rawDate":"2019-01-18","title":"The Problem with Time & Timezones - Computerphile","link":"https://www.youtube.com/watch?v=-5wpm-gesOY","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"f1de9556-d6f5-5eb5-a85a-91addfc6cd11"}},{"node":{"fields":{"slug":"/tdd-wordpress-theme/","source":"posts"},"excerpt":"Tanto al comenzar a desarrollar un tema desde cero como cuando ya adquirió mayor complejidad tenemos que hacer una serie de chequeos de…","frontmatter":{"date":"02-12-2018","rawDate":"2018-12-02","title":"TDD Wordpress Theme","link":null,"tags":["wordpress"],"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"3bcf209f-87c7-5fdf-8911-3a9016f901d1"}},{"node":{"fields":{"slug":"/utn-desarrollo-web-php-wordpress/","source":"certificates"},"excerpt":"","frontmatter":{"date":"12-11-2018","rawDate":"2018-11-12","title":"Desarollo web con PHP y Wordpress","link":null,"tags":null,"issuer":"UTN.BA","issuer_url":"https://www.sceu.frba.utn.edu.ar/e-learning/","cert":{"publicURL":"/static/329f5db4a7cea8a3527422e55084e587/certificate.pdf"},"cert_url":"https://learndigital.withgoogle.com/activate/validate-certificate-code"},"id":"a3d69721-e4d3-5a20-bad7-4dd1d5ce1e82"}},{"node":{"fields":{"slug":"/wordpress-customizer-js-api/","source":"posts"},"excerpt":"A partir de la versión 4.1 de Wordpress implementó una API en Javascript que permite la creación y el control de todos los elementos del…","frontmatter":{"date":"21-10-2018","rawDate":"2018-10-21","title":"Wordpress Customizer JS API","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"89979751-bda5-5585-ae1b-05e60765746d"}},{"node":{"fields":{"slug":"/arquitectura-de-un-sitio-web/","source":"posts"},"excerpt":"La arquitectura de un sitio web o aplicación web es la descripción de la configuración, función y relación de los distintos componentes que…","frontmatter":{"date":"17-09-2018","rawDate":"2018-09-17","title":"Arquitectura de un sitio web","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"3b5fe791-162d-561e-8ba0-d15d5875e1d3"}},{"node":{"fields":{"slug":"/notificaciones-desde-wsl/","source":"posts"},"excerpt":"Con todos los avances que ha tenido el Windows Subsystem fro Linux, una de las funcionalidades que todavía sigue pendiente de implementar es…","frontmatter":{"date":"31-08-2018","rawDate":"2018-08-31","title":"Notificaciones de Windows en WSL","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"ca72ebb9-894a-5cac-8a29-9c5c2b819e95"}},{"node":{"fields":{"slug":"/recursos-utiles-para-el-desarrollo-web/","source":"posts"},"excerpt":"Serie de herramientas y bibliotecas online que son útiles durante el proceso de desarrollo web. Google Analytics Podemos usar otro pero…","frontmatter":{"date":"22-08-2018","rawDate":"2018-08-22","title":"Recursos útiles para el desarrollo web","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"aae1b880-3487-5716-ba5d-bca537761da4"}},{"node":{"fields":{"slug":"/wordpress-y-phpunit/","source":"posts"},"excerpt":"PHPUnit es uno de los frameworks para test unitarios automáticos para PHP más usados y el elegido por los desarrolladores de Wordpress junto…","frontmatter":{"date":"15-08-2018","rawDate":"2018-08-15","title":"Wordpress y PHPUnit","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"3279ac77-5497-55fa-a393-b0c770b81171"}},{"node":{"fields":{"slug":"/patron-de-inyeccion-de-dependencias/","source":"posts"},"excerpt":"La idea detrás del patrón de inyección de dependencias es lograr una mayor separación de las responsabilidades de nuestro código cambiando…","frontmatter":{"date":"10-08-2018","rawDate":"2018-08-10","title":"Patrón de Inyección de Dependencias","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"3c8f77c5-e7d2-5d3d-89d0-122563b6ff35"}},{"node":{"fields":{"slug":"/patron-de-carga-diferida-value-holder/","source":"posts"},"excerpt":"El patrón de carga diferida es una técnica para mejorar la performance utilizada en casos en que nos encontramos con que no todas las…","frontmatter":{"date":"08-08-2018","rawDate":"2018-08-08","title":"Patrón de Carga Diferida: Value Holder","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"4f9d9374-90c0-5e4b-9248-8ea54706759e"}},{"node":{"fields":{"slug":"/patron-de-carga-diferida-fantasma/","source":"posts"},"excerpt":"El patrón de carga diferida es una técnica para mejorar la performance utilizada en casos en que nos encontramos con que no todas las…","frontmatter":{"date":"12-07-2018","rawDate":"2018-07-12","title":"Patrón de Carga Diferida: Fantasma","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"0a6d9321-0f52-5c59-b18d-e4dc94889229"}},{"node":{"fields":{"slug":"/patron-de-carga-diferida-proxy-virtual/","source":"posts"},"excerpt":"El patrón de carga diferida es una técnica para mejorar la performance utilizada en casos en que nos encontramos con que no todas las…","frontmatter":{"date":"11-07-2018","rawDate":"2018-07-11","title":"Patrón de Carga Diferida: Proxy Virtual","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"70cb7324-9758-50e6-a324-8fe2dbc94ffd"}},{"node":{"fields":{"slug":"/insertar-o-actualizar-en-mysql/","source":"posts"},"excerpt":"Al momento de agregar una nueva fila a una tabla en MySQL nos podemos encontrar que nos devuelve el error 1062: Duplicate entry  for key…","frontmatter":{"date":"05-07-2018","rawDate":"2018-07-05","title":"Insertar o actualizar en MySQL","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"5870464d-0c0c-52c3-b04d-22982e8fd03c"}},{"node":{"fields":{"slug":"/workflow-en-wordpress/","source":"posts"},"excerpt":"La estructura de directorios que uso en mi workflow se aprovecha de una feature de WordPress que permite distribuir grupos de themes. La…","frontmatter":{"date":"28-06-2018","rawDate":"2018-06-28","title":"Workflow en WordPress","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"bdb272e6-4861-565a-a7a1-bb82d0a4f023"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"27-06-2018","rawDate":"2018-06-27","title":"Entendiendo Frontend hoy","link":"https://belcurcio.com/blog/entendiendo-frontend-hoy","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"996a4c83-c9f9-5622-9750-68f62f6ccb11"}},{"node":{"fields":{"slug":"/crear-un-child-theme-en-wordpress/","source":"posts"},"excerpt":"La creación de un child theme nos da la posibilidad de adaptar un theme pre existente a nuestro gusto. Cambiar algunas fuentes, espaciado…","frontmatter":{"date":"01-06-2018","rawDate":"2018-06-01","title":"Crear un child theme en Wordpress","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"72078232-cd83-5547-b377-9410e6da0cb5"}},{"node":{"fields":{"slug":"/errores-comunes-cuando-empezamos-a-utilizar-react/","source":"posts"},"excerpt":"Olvidar la clave de los elementos al usar map Si bien no es un error, por eso únicamente genera una advertencia, el uso de keys (claves) es…","frontmatter":{"date":"28-05-2018","rawDate":"2018-05-28","title":"Errores comunes cuando empezamos a utilizar React","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"9ebda2c4-9274-544d-8388-34b978bbbd89"}},{"node":{"fields":{"slug":"/cuando-no-usar-modulos-o-librerias-externas-en-javascript/","source":"posts"},"excerpt":"Cuándo no sabemos cómo programar la funcionalidad Los módulos o librerías tienen que simplificar el proceso de desarrollo, no reemplazarlo…","frontmatter":{"date":"22-05-2018","rawDate":"2018-05-22","title":"Cuándo (no) usar módulos o librerías externas en JavaScript","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"5d88e489-36f6-5ed1-8f9a-a5bb623ce8a5"}},{"node":{"fields":{"slug":"/patron-de-carga-diferida-inicializacion-diferida/","source":"posts"},"excerpt":"El patrón de carga diferida es una técnica para mejorar la performance utilizada en casos en que nos encontramos con que no todas las…","frontmatter":{"date":"17-05-2018","rawDate":"2018-05-17","title":"Patrón de Carga Diferida: Inicialización diferida","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"5190cb6b-1570-52df-9730-41ae336a57f5"}},{"node":{"fields":{"slug":"/propiedades-no-enumerables-en-javascript/","source":"posts"},"excerpt":"Hasta la especificación ES5 de JavaScript las propiedades de un objeto consistían únicamente de un nombre y un valor. A partir de 200…","frontmatter":{"date":"09-05-2018","rawDate":"2018-05-09","title":"Propiedades no enumerables en JavaScript","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"d5645853-4435-5788-9eda-182ffc4aba2e"}},{"node":{"fields":{"slug":"/limitaciones-y-diferencias-de-object-assign-y-el-operador-de-propagacion-en-javascript/","source":"posts"},"excerpt":"Con el (nuevo) auge de la programación funcional y de librerías como Redux ha resurgido el concepto de inmutabilidad. La existencia de…","frontmatter":{"date":"05-05-2018","rawDate":"2018-05-05","title":"Limitaciones y diferencias de Object.assign() y el operador de propagación en JavaScript","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"9cc40b05-1095-5831-ba55-dfc52ce49ad8"}},{"node":{"fields":{"slug":"/parsear-uri-con-javascript/","source":"posts"},"excerpt":"","frontmatter":{"date":"27-04-2018","rawDate":"2018-04-27","title":"Parsear URI con Javascript","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"a0ab0a14-afe2-53db-8a6a-ed36f35511b0"}},{"node":{"fields":{"slug":"/evitar-los-post-duplicados-al-utilizar-multiples-loops-en-wordpress/","source":"posts"},"excerpt":"Durante el desarrollo de un theme de WordPress es habitual que lleguemos a una instancia en la que el loop por defecto se queda corto y…","frontmatter":{"date":"20-04-2018","rawDate":"2018-04-20","title":"Evitar los post duplicados al utilizar múltiples loops en WordPress","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"94d56e5b-233c-5399-b0bf-c5d22753bb2b"}},{"node":{"fields":{"slug":"/rendimiento-de-wsl/","source":"posts"},"excerpt":"Una de las grandes features que trajo la Anniversary Update de Windows 10 es el Windows Subsystem for Linux (WSL), una compatibility layer…","frontmatter":{"date":"13-04-2018","rawDate":"2018-04-13","title":"Rendimiento de WSL","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"18430628-335d-5f71-ae14-6b41e27e4708"}},{"node":{"fields":{"slug":"/solucionar-errores-de-renovacion-de-certificados-lets-encrypt-en-virtualmin/","source":"posts"},"excerpt":"Para los que administramos nuestros servidores con Virtualmin y probamos desde que apareció la gestión de certificados SSL con Let\'s Encrypt…","frontmatter":{"date":"15-07-2016","rawDate":"2016-07-15","title":"Solucionar errores de renovación de certificados Let\'s Encrypt en Virtualmin","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"01c34f25-2e12-51b7-bf6e-2c57ef2ed8e8"}},{"node":{"fields":{"slug":null,"source":"links"},"excerpt":"","frontmatter":{"date":"11-06-2016","rawDate":"2016-06-11","title":"Expresiones regulares, de novato a maestro en un sólo artículo","link":"http://jarroba.com/busqueda-de-patrones-expresiones-regulares/","tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"a997e55f-f8fb-58a1-be2d-0bdf546c03a2"}},{"node":{"fields":{"slug":"/windows-atom/","source":"posts"},"excerpt":"La solución a uno de los problemas más molestos de usar Atom en Windows: no poder asociar las extensiones de archivos al editor para…","frontmatter":{"date":"24-02-2016","rawDate":"2016-02-24","title":"Windows + Atom","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"3c3c6e98-e8e0-53c6-9363-756470414962"}},{"node":{"fields":{"slug":"/mapear-una-conexion-sftp-a-una-unidad-en-windows/","source":"posts"},"excerpt":"El acceso mediante SSH al servidor es más seguro, rápido y potente. Nos permite trabajar  como si estuviéramos delante del equipo. SFTP no…","frontmatter":{"date":"12-01-2016","rawDate":"2016-01-12","title":"Mapear una conexión SFTP a una unidad en Windows","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"9151d08a-1771-5d08-adcd-a561281f1459"}},{"node":{"fields":{"slug":"/usar-repositorios-git-como-paquetes-de-composer/","source":"posts"},"excerpt":"No todos los proyectos de GitHub están registrados en packagist.com o tienen creado un \\"composer.json\\" que nos permita agregarlo de forma…","frontmatter":{"date":"04-12-2015","rawDate":"2015-12-04","title":"Usar repositorios Git como paquetes de Composer","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"58691162-4b40-5462-9ce9-2f4fa5d0cabf"}},{"node":{"fields":{"slug":"/usar-gitputty-para-conectarse-a-repositorios-en-windows/","source":"posts"},"excerpt":"Instalar GIT para Windows - Descarga Instalar PuTTY - Descarga  Utilizar PuTTYgen para crear un par de claves Abrir PuTTYgen, cambiar la…","frontmatter":{"date":"01-12-2015","rawDate":"2015-12-01","title":"Usar Git+PuTTY para conectarse a repositorios en Windows","link":null,"tags":null,"issuer":null,"issuer_url":null,"cert":null,"cert_url":null},"id":"445bd819-c4fc-5c57-92d1-ee972349dc92"}}]}}}')},tUrg:function(e,t,r){"use strict";r("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7c74b673d0bf55b35190.js.map