const products =[
    //Tejidos
    {id: "1",name:"Alfombra Roma", price: 5000, categoryId: "tejido" , image: "./assets/img/alfombra-roma.jpg"},
    {id: "2", name:"Alfombra Paris", price: 5500, categoryId: "tejido" , image: "./assets/img/alfombra-paris.jpg"},
    {id: "3", name:"Manta Venecia", price: 6000, categoryId: "tejido", image: "./assets/img/manta-venecia.jpg" },
    //Ceramica
    {id: "4", name:"Florero Dona", price: 9200, categoryId: "ceramica", image: "./assets/img/florero-dona.jpg"},
    {id: "5", name:"Jaron Asimetrico", price: 9600, categoryId: "ceramica", image: "./assets/img/jarron-asimetrico.jpg"},
    {id: "6", name:"Maceta Moai", price: 9400, categoryId: "ceramica", image: "./assets/img/maceta-moai.jpg"},
    // 3D
    {id: "7", name:"Florero Barril", price: 4000, categoryId: "3d", image: "./assets/img/florero-barril.jpg"},
    {id: "8", name:"Estatuilla Moai", price: 4500, categoryId: "3d", image: "./assets/img/estatuilla-moai.jpg"},
    {id: "9" , name:"Estatuilla Atlas", price: 6500, categoryId: "3d", image: "./assets/img/estatua-atlas.jpg"}
] 


export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        
            const product = products.find(p => p.id === id) 

            if (product){
                resolve(product)
            }else{
                reject("Producto no existente")
            }
        },)
};


export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) =>{
        
            const filterProductCategory = categoryId ? products.filter(product => product.categoryId === categoryId)
            : products;

            resolve(filterProductCategory);
        },)
    ;
};


//================================================================



// import { doc, getDoc, collection, getDocs, addDoc ,query, where, getFirestore} from "firebase/firestore";
  

//   export const getProduct = (id) => {
//     return new Promise((resolve, reject) => {
//       const db = getFirestore();
  
//       const itemDoc = doc(db, "Products", id);
  
//       getDoc(itemDoc)
//         .then((doc) => {
//           if (doc.exists()) {
//             resolve({ id: doc.id, ...doc.data() });
//           } else {
//             resolve(null);
//           }
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   };
  
//   export const getProducts = (categoryId) => {
//     return new Promise((resolve, reject) => {
//       const db = getFirestore();
  
//       const itemCollection = collection(db, "Products");
  
//       let q;
//       if (categoryId) {
//         q = query(itemCollection, where("categoryId", "==", categoryId));
//       } else {
//         q = query(itemCollection);
//       }
  
//       getDocs(q)
//         .then((querySnapshot) => {
//           const products = querySnapshot.docs.map((doc) => {
//             return { id: doc.id, ...doc.data() };
//           });
//           resolve(products);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   };



export const createOrder = (orden) => {
    console.log("Orden creada")
  //const db = getFirestore();

  //const ordersCollection = collection(db, "orders");

 // return addDoc(ordersCollection, orden);
};
  