
import axios from "axios";
let allProducts = [];

// let allProducts = [{
//     id: 1,
//     title: 'strawberry',
//     image: 'images/1.jpg',
//     price: 5,
//     count: 1,
//     isInterest: false,
//     category: 'fruits&vegies'
// },
//     {
//         id: 2,
//         title: 'onion',
//         image: 'images/2.jpg',
//         price: 130,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'
//     },
//     {
//         id: 3,
//         title: 'tomato ',
//         image: 'images/3.jpg',
//         price: 150,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'
//     },
//     {
//         id: 4,
//         title: 'eggplant',
//         image: 'images/4.jpg',
//         price: 125,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 5,
//         title: 'broccli ',
//         image: 'images/5.jpg',
//         price: 85,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 7,
//         title: 'carrot',
//         image: 'images/7.jpg',
//         price: 120,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 8,
//         title: 'flower',
//         image: 'images/8.jpg',
//         price: 80,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 9,
//         title: 'cucumber',
//         image: 'images/9.jpg',
//         price: 40,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 10,
//         title: 'garlic',
//         image: 'images/10.jpg',
//         price: 165,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 11,
//         title: ' pepper',
//         image: 'images/11.jpg',
//         price: 70,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 12,
//         title: 'lettuce',
//         image: 'images/12.jpg',
//         price: 180,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 13,
//         title: ' hot pepper',
//         image: 'images/13.jpg',
//         price: 2,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 14,
//         title: 'melon',
//         image: 'images/14.jpg',
//         price: 80,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 15,
//         title: 'mushroom',
//         image: 'images/15.jpg',
//         price: 250,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 16,
//         title: 'bannana',
//         image: 'images/16.jpg',
//         price: 470,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 17,
//         title: 'kosa',
//         image: 'images/17.jpg',
//         price: 135,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 18,
//         title: 'pinapple',
//         image: 'images/18.jpg',
//         price: 255,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 19,
//         title: 'seeds',
//         image: 'images/19.jpg',
//         price: 550,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 20,
//         title: 'nuts',
//         image: 'images/20.jpg',
//         price: 125,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 21,
//         title: 'cherry',
//         image: 'images/21.jpg',
//         price: 450,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 22,
//         title: 'figs',
//         image: 'images/22.jpg',
//         price: 15,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 23,
//         title: 'orange',
//         image: 'images/23.jpg',
//         price: 120,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 24,
//         title: ' papaya',
//         image: 'images/24.jpg',
//         price: 4,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 25,
//         title: 'mgadara',
//         image: 'images/25.jpg',
//         price: 5,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 26,
//         title: 'lift',
//         image: 'images/26.jpg',
//         price: 6,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 27,
//         title: 'figs',
//         image: 'images/27.jpg',
//         price: 550,
//         count: 1,
//         isInterest: false,
//         category: 'fruits&vegies'},
//     {
//         id: 28,
//         title: 'shirt',
//         image: 'images/28.jpg',
//         price: 3,
//         count: 1,
//         isInterest: false,
//         category: 'Clothes'
//     },
//     {
//         id: 29,
//         title: 'jeans',
//         image: 'images/29.jpg',
//         price: 2,
//         count: 1,
//         isInterest: false,
//         category: 'Clothes'
//     },
//     {
//         id: 30,
//         title: ' jacket',
//         image: 'images/30.jpg',
//         price: 170,
//         count: 1,
//         isInterest: false,
//         category: 'Clothes'
//     },
//     {
//         id: 31,
//         title: ' socks',
//         image: 'images/31.jpg',
//         price: 220,
//         count: 1,
//         isInterest: false,
//         category: 'Clothes'
//     },
//     {
//         id: 32,
//         title: 'shoes',
//         image: 'images/32.jpg',
//         price: 240,
//         count: 1,
//         isInterest: false,
//         category: 'Clothes'
//     },
//     {
//         id: 33,
//         title: 'headphones',
//         image: 'images/33.jpg',
//         price: 550,
//         count: 1,
//         isInterest: false,
//         category: 'Electronics'
//     },
//     {
//         id: 34,
//         title: 'laptop',
//         image: 'images/34.jpg',
//         price: 800,
//         count: 1,
//         isInterest: false,
//         category: 'Electronics'
//     },
//     {
//         id: 35,
//         title: 'TV',
//         image: 'images/35.jpg',
//         price: 1300,
//         count: 1,
//         isInterest: false,
//         category: 'Electronics'
//     },
//     {
//         id: 36,
//         title: 'Fairy',
//         image: 'images/36.jpg',
//         price: 40,
//         count: 1,
//         isInterest: false,
//         category: 'Cleaning'
//     },
//     {
//         id: 37,
//         title: 'toseik Wipes',
//         image: 'images/37.jpg',
//         price: 120,
//         count: 1,
//         isInterest: false,
//         category: 'Cleaning'
//     },
// ]

const fetchData = async () => { 
    try {
      const response = await axios.get("http://localhost:5000/items/");
    //
      //allProducts = response.data; // Update the allProducts array with fetched data
    //console.log(  response.data)
    response.data.forEach((item) => {



        console.log(item)
        let jsonelemnt = {
            id: '',
            title: '',
            image: '',
            price: '',
            count: '',
            isInterest: false,
            category: '',  

        }

        //console.log("id : " + item.id)
        //console.log("title : " + item.title)
        //console.log("image : " + item.image)
        //console.log("price : " + item.price)
        //console.log("count : " + item.count)
        //console.log("category : " + item.category)
        jsonelemnt.id = item.id;
        jsonelemnt.title=item.title
        jsonelemnt.image=item.image
        jsonelemnt.price=item.price
        jsonelemnt.count=item.count
        jsonelemnt.category=item.category


        console.log("json element is : ")
        console.log(jsonelemnt)



        allProducts.push(jsonelemnt);
      });
  



    } catch (err) {
      console.log(err);
    }
  };


export default allProducts 

fetchData();
