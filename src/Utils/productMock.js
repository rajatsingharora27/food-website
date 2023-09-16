export const CAKES = [
  {
    id: 1, // random string from db
    price: 2000, //number
    image: "https://source.unsplash.com/random/300x300/?1", // main image convert to array in below list
    name: "hello", //string
    tagline: "Best cake of your life", //string
    productDes: {
      tagLine: "", //string
      ingredients: "", //string
      description: "", //string
      strotageAndConsumptionAdvice: "", //string
    },
    imageList: [], // image array from db
    isDiscoutAvailable: "", // boolean
    stockDetail: "", //number
    productCategory: "", // cakes, biscut
    couponCodeList: [], //if discoutAvaiable then check
  },
  {
    id: 2,
    price: 3000,
    image: "https://source.unsplash.com/random/300x300/?1",
    name: "hello",
    avaiableQuantity: 212,
    tagline: "Best cake of your life",
  },
  {
    id: 3,
    price: 1000,
    image: "https://source.unsplash.com/random/300x300/?1",
    name: "hello",
    avaiableQuantity: 20,
    tagline: "Best cake of your life",
  },
  {
    id: 4,
    price: 5000,
    image: "https://source.unsplash.com/random/300x300/?1",
    name: "hello",
    avaiableQuantity: 20,
    tagline: "Best cake of your life",
  },
];
