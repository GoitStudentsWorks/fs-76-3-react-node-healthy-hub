import{r as t,j as _}from"./index-8b2bd5cf.js";import{f as c}from"./fetchFoodData-cbe1b28e.js";const o="_main__container__page_6q9vk_1",p="_cont__image__foodlist__page_6q9vk_21",g="_title__page_6q9vk_35",n="_picture__page_6q9vk_63",r="_image__page_6q9vk_75",m="_item__list__page_6q9vk_90",l="_item__page_6q9vk_119",d="_product__image__page_6q9vk_140",u="_product__info__page_6q9vk_146",x="_product__name__page_6q9vk_150",h="_product__calories__page_6q9vk_156",f="_calories__quantity__page_6q9vk_162",e={main__container__page:o,cont__image__foodlist__page:p,title__page:g,picture__page:n,image__page:r,item__list__page:m,item__page:l,product__image__page:d,product__info__page:u,product__name__page:x,product__calories__page:h,calories__quantity__page:f};function j(){const[s,i]=t.useState([]);return t.useEffect(()=>{c().then(a=>{i(a)}).catch(a=>console.error(a))},[]),_.jsx("ul",{className:e.item__list__page,children:s.map(a=>_.jsxs("li",{className:e.item__page,children:[_.jsx("img",{src:a.img,alt:a.name,className:e.product__image__page}),_.jsxs("div",{className:e.product__info__page,children:[_.jsx("h3",{className:e.product__name__page,children:a.name}),_.jsxs("p",{className:e.product__calories__page,children:[a.amount," ",_.jsxs("span",{className:e.calories__quantity__page,children:[a.calories," calories"]})]})]})]},a.name))})}const b="/HealthyHub/assets/recfood-desktop1x-06d01b32.jpg",k="/HealthyHub/assets/recfood-desktop2x-762a00ff.jpg",q="/HealthyHub/assets/recfood-mobile1x-8ad6e996.jpg",v="/HealthyHub/assets/recfood-mobile2x-cf4e2290.jpg",H="/HealthyHub/assets/recfood-tab1x-93a31777.jpg",N="/HealthyHub/assets/recfood-tab2x-5cc2bc5a.jpg";function w(){return _.jsxs("div",{className:e.main__container__page,children:[_.jsx("h2",{className:e.title__page,children:"Recommended food"}),_.jsxs("div",{className:e.cont__image__foodlist__page,children:[_.jsxs("picture",{className:e.picture__page,children:[_.jsx("source",{media:"(min-width: 1440px)",srcSet:`${b} 1x, ${k} 2x`,width:536,height:560}),_.jsx("source",{media:"(min-width: 833px)",srcSet:`${H} 1x, ${N} 2x`,width:380,height:396}),_.jsx("img",{srcSet:`${q} 1x, ${v} 2x`,width:300,height:312,className:e.image__page})]}),_.jsx(j,{})]})]})}export{w as default};
