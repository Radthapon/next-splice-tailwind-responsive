

type Featured = {
  id:number;
  title:string;
  img?:string;
}
type Featureds = Featured[];

type Creator = {
  id:number;
  profile:{ name:string; img?:string; postion:string},
  desc:string;
}
type Creators = Creator[];

type Sound = {
  id:number;
  title:string;
  image:string;
  desc:string;
}
type Sounds = Sound[];

export const featuredItem:Featureds = [
  {
    id:1,
    title:"featuredNo1",
    img:"/featuredP1.png",
  },
  {
    id:2,
    title:"featuredNo2",
    img:"/featuredP2.png",
  },
  {
    id:3,
    title:"featuredNo3",
    img:"/featuredP3.png",
  },
  {
    id:4,
    title:"featuredNo4",
    img:"/featuredP4.png",
  },
  {
    id:5,
    title:"featuredNo5",
    img:"/featuredP5.png",
  },
];


export const creatorItem:Creators = [
  {
    id:1,
    profile:{
        name:"Andrew Huang",
        img:"/profile1.png",
        postion:"Artist"
      },
    desc:"I can always find what Im looking for on Splice, whether its the exact sound I want or just a bit of inspiration."
  },
  {
    id:2,
    profile:{
        name:"KSHMR",
        img:"/profile2.png",
        postion:"Artist"
      },
    desc:"Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs."
  },
  {
    id:3,
    profile:{
        name:"Kesha Lee",
        img:"/profile3.png",
        postion:"Artist"
      },
    desc:"Its been fun to dive into Splices creator community and explore tools that support my own creative process."
  },
  {
    id:4,
    profile:{
        name:"Andrew Huang",
        img:"/profile4.png",
        postion:"Artist"
      },
    desc:"I can always find what Im looking for on Splice, whether its the exact sound I want or just a bit of inspiration."
  },
];

export const soundItem:Sounds = [
  {
    id:1,
    title:"100 royalty free",
    image:"/sound1.png",
    desc:"Use sounds for anything. They’re cleared for commercial use.",
  },
  {
    id:2,
    title:"No commitments",
    image:"/sound2.png",
    desc:"Cancel your subscription at any time, no questions asked.",
  },
  {
    id:3,
    title:"Yours forever",
    image:"/sound3.png",
    desc:"Keep everything you download. Even if you cancel.",
  },
  {
    id:4,
    title:"Individual samples",
    image:"/sound4.png",
    desc:"Preview & download individual samples, not just full packs.",
  },
];

export const footerItemImg = [
  {
    id:1,
    imagefoorer:'/footer1.png'
  },
  {
    id:2,
    imagefoorer:'/footer2.png'
  },  {
    id:3,
    imagefoorer:'/footer3.png'
  },  {
    id:4,
    imagefoorer:'/footer4.png'
  },
];