const products =[
    //Tejidos
    {id: "1",name:"Alfombra Roma", price: 5000, category: "tejido" , image: "./assets/img/alfombra-roma.jpg"},
    {id: "2", name:"Alfombra Paris", price: 5500, category: "tejido" , image: "./assets/img/alfombra-paris.jpg"},
    {id: "3", name:"Manta Venecia", price: 6000, category: "tejido", image: "./assets/img/manta-venecia.jpg" },
    //Ceramica
    {id: "4", name:"Florero Dona", price: 9200, category: "ceramica", image: "./assets/img/florero-dona.jpg"},
    {id: "5", name:"Jaron Asimetrico", price: 9600, category: "ceramica", image: "./assets/img/jarron-asimetrico.jpg"},
    {id: "6", name:"Maceta Moai", price: 9400, category: "ceramica", image: "./assets/img/maceta-moai.jpg"},
    // 3D
    {id: "7", name:"Florero Barril", price: 4000, category: "3d", image: "./assets/img/florero-barril.jpg"},
    {id: "8", name:"Estatuilla Moai", price: 4500, category: "3d", image: "./assets/img/estatuilla-moai.jpg"},
    {id: "9" , name:"Estatuilla Atlas", price: 6500, category: "3d", image: "./assets/img/estatua-atlas.jpg"}
] 


export const getProduct = (id) => {
    return new Promise((resolve, reject) => {{
        setTimeout(()=>{
            const product = products.find(p => p.id === id) 

            if (product){
                resolve(product)
            }else{
                reject("Producto no existente")
            }
        }, 2000)
    }
    })
}


export const getProducts = (category) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const filterProductCategory = category ? products.filter(product => product.category === category)
            : products;

            resolve(filterProductCategory);
        }, 2000)
    });
};