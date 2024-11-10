const products=
[
    {
        id:1,
        img:"/src/assets/productos/1.png",
        nombre:"Cortante",
        precio:10000,
        cantidad: 30,
        detalle: "Set x 4 Cortantes con expulsores Halloween"

    },
    {
        id:2,
        img:"/src/assets/productos/2.png",
        nombre:"Shot-Head",
        precio:4000,
        cantidad: 20,
        detalle: "Shot Crystal Head"
    },
    {
        id:3,
        img:"/src/assets/productos/3.png",
        nombre:"Shot-Skull",
        precio:4500,
        cantidad: 15,
        detalle: "Shot Crystal Skull"
    },
    {
        id:4,
        img:"/src/assets/productos/4.png",
        nombre:"Sorbetes",
        precio:1500,
        cantidad: 10,
        detalle: "Sorbetes de Calaveras Pack x 24"
    },
    {
        id:5,
        img:"/src/assets/productos/5.png",
        nombre:"Sprinkles",
        precio:11000,
        cantidad: 9,
        detalle: "Sprinkles Ojos Linea Magic Premium"
    },
    {
        id:6,
        img:"/src/assets/productos/6.png",
        nombre:"Stencil-Calabaza",
        precio:6000,
        cantidad: 8,
        detalle: "Stencil Calabaza Sombria"
    },
    {
        id:7,
        img:"/src/assets/productos/7.png",
        nombre:"Set-x-12-velas",
        precio:5000,
        cantidad: 7,
        detalle: "Velas Fancy Pack x 12"
    },
    {
        id:8,
        img:"/src/assets/productos/8.png",
        nombre:"Velas-Bicolor",
        precio:5500,
        cantidad: 6,
        detalle: "Velas Bicolor Pack x 12 Wilton"
    },
    {
        id:9,
        img:"/src/assets/productos/9.png",
        nombre:"Velas-Con-Lunares",
        precio:6300,
        cantidad: 5,
        detalle: "Velas Blancas con Lunares Multicolor Pack x 12 Wilton"
    },
    {
        id:10,
        img:"/src/assets/productos/10.png",
        nombre:"Velas-Metalizadas",
        precio:4500,
        cantidad: 6,
        detalle: "Velas Metalizadas Azul Pack x 6"
    },
    {
        id:11,
        img:"/src/assets/productos/11.png",
        nombre:"Waflera-Square",
        precio:55000,
        cantidad: 7,
        detalle: "Waflera para hornalla Belgian Waffler Nordic Ware"
    },
    {
        id:12,
        img:"/src/assets/productos/12.png",
        nombre:"Waflera-Sweetheart",
        precio:65000,
        cantidad: 8,
        detalle: "Waflera para hornalla Sweetheart Waffler Nordic Ware"
    }
]

export const getProduct = () => {
    return new Promise ((resolve)=> {
        setTimeout (()=>{
            resolve(products)
        },1500)
    });
}

export const getProductId=(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
        resolve(products.find((prod)=>prod.id===productId));

    },1500);
  
});
} 

