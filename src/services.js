import {getFirestore,
    query,
    doc,
    getDoc,
    collection,
    getDocs,
    where,
    addDoc} from "firebase/firestore"




export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();
        
        const itemDoc = doc(db, 'Products', id);

        getDoc(itemDoc)
        .then((doc)=> {
            if (doc.exists()) {
                resolve({id: doc.id, ...doc.data()});
            }else {
                resolve(null);
            }
        }).catch((error)=> {
            reject(error);
        })
})};


export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) =>{
        console.log('gtprod',categoryId)
        const db = getFirestore();

        const productsCollection = collection(db, 'Products')
        console.log('collections', productsCollection);


        let q = query(productsCollection)

        if (categoryId){
            q = query(productsCollection, where('categoryId','==',categoryId));
            console.log('if === ', q.categoryId);
        }
        

        getDocs(q)
        .then((snapshot) => {
            const products = snapshot.docs.map((doc) => {
                console.log('map', q.categoryId)
                return {id: doc.id, ...doc.data()};
            });
            resolve(products)
        })
    
    },)
    ;
};


export const createOrder = (orden) => {
    
  const db = getFirestore();

  const ordersCollection = collection(db, "Orders");

 return addDoc(ordersCollection, orden);
};
