let people = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },

    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0,
        arr:[]
    },
    {
        course: 'PROGRAMMING',
        count: 0,
        arr:[]
    },
    {
        course: '     3DSMAX',
        count: 0,
        arr:[]
    },
    {
        course: ' DIZAYN',
        count: 0,
        arr:[]
    },
    {       
        course: '   BACKEND',
        count: 0,
        arr:[]
    },
]

for(categ of categories){
    let categTwo = categ.course.trim()
    for(let item of people){
    let player = item.info.faculity.toUpperCase()
           if(player === categTwo){
             categ.arr.push(item.name)
             categ.count++
            
            
           }
           
        } 
        console.log(categ)
}       



/////2-задание////////
let cars = [
    {
      id: Math.random(),
      model: "maluba 2",
      company: "chevrolette",
      engine: 2.2,
      img: "https://1.bp.blogspot.com/-6-s2BwymkcA/W4qoq7oh_sI/AAAAAAAA1AE/G7um1RohqHsx1X2GAJ-8h-aInt-TU_K3ACEwYBhgL/w800/2018_chevrolet_malibu_00.jpg",
      price: {
        cash: 24000,
        credit: 30000,
        card: 26000,
      },
    },
    {
      id: Math.random(),
      model: "mercedes benz amg",
      company: "mercedes",
      engine: 10,
      img: "https://yandex.ru/images/search?pos=7&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7a%2Fab%2F57%2F7aab57c2c5ecbb9c0155e146370e6867.jpg&text=mercedes%20benz%20amg&lr=10334&rpt=simage&source=serp",
      price: {
        cash: 150000,
        credit: 200000,
        card: 156000,
      },
    },
  
    {
      id: Math.random(),
      model: "Laferrari",
      company: "Laferrari",
      engine: 5.2,
      img: "https://yandex.ru/images/search?rpt=simage&noreask=1&source=qa&text=Ferrari%20LaFerrari&stype=image&lr=10334&pos=0&img_url=https%3A%2F%2Fscontent-amt2-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2Fc236.0.608.608a%2F170287187_148433820438422_7676304990724955259_n.jpg%3Ftp%3D1%26_nc_ht%3Dscontent-amt2-1.cdninstagram.com%26_nc_cat%3D102%26_nc_ohc%3Dpq3fOsON55wAX-yIj9h%26edm%3DAPU89FABAAAA%26ccb%3D7-4%26oh%3Db99f2577bbeb5154876a9e197437f996%26oe%3D60B4C961%26_nc_sid%3D86f79a",
      price: {
        cash: 170000,
        credit: 210000,
        card: 175000,
      },
    },
    {
      id: Math.random(),
      model: "Tesla model s",
      company: "Tesla",
      engine: 6.3,
      img: "https://yandex.ru/images/search?text=Tesla%20Model%20S%20%D1%84%D0%BE%D1%82%D0%BE&img_url=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2461428.jpg&rpt=simage&source=qa&stype=image&lr=10334&pos=0",
      price: {
        cash: 180000,
        credit: 220000,
        card: 180000,
      },
    },
    {
      id: Math.random(),
      model: "rimac",
      company: "The Rimac Group",
      engine: 1.9,
      img: "https://avatars.mds.yandex.net/i?id=36394a42166318d0114cfe6f944a0c4e-4819767-images-thumbs&n=13",
      price: {
        cash: 2400000,
        credit: 2600000,
        card: 2500000,
      },
    },
    {
      id: Math.random(),
      model: "damas",
      company: "chevrollete",
      engine: 3.2,
      img: "https://i.cenyavto.com/2020/05/hJNB.jpeg",
      price: {
        cash: 24000,
        credit: 26000,
        card: 25000,
      },
    },
    {
      id: Math.random(),
      model: "BMW",
      company: "Dont know",
      engine: 2.1,
      img: "https://avatars.mds.yandex.net/i?id=7d0070ffb2e05f2b194c689ac0a86b9c-5584528-images-thumbs&n=13",
      price: {
        cash: 80000,
        credit: 830000,
        card: 810000,
      },
    },
    {
      id: Math.random(),
      model: "Jamolidin",
      company: "God",
      engine: 1000000,
      img: "https://yandex.ru/images/search?pos=3&img_url=https%3A%2F%2Fcoolwallpapers.me%2Fpicsup%2F5816330-omar-sy-wallpapers.jpg&text=%D0%BD%D0%B5%D0%B3%D1%80%D1%8B&lr=10334&rpt=simage&source=serp",
      price: {
        cash: 0,
        credit: 0,
        card: 0,
      },
    },
    {
      id: Math.random(),
      model: "Lamborigini Aventador J",
      company: "Lamborigini",
      engine: 3,
      img: "https://wroom.ru/i/cars2/lamborghini_aventador_1.jpg",
      price: {
        cash: 360000,
        credit: 380000,
        card: 370000,
      },
    },
    {
      id: Math.random(),
      model: "SuperMarket Busket",
      company: "5-ochka",
      engine: 0.5,
      img: "https://safeguard.ru/wa-data/public/shop/products/29/26/2629/images/10410/10410.750x0.jpg",
      price: {
        cash: 6000,
        credit: 6800,
        card: 6700,
      },
    },
    {
      id: Math.random(),
      model: "Mitsubishi Lancer X",
      company: "Mitsubishi Motors",
      engine: 1.8,
      img: "https://st4.zr.ru/_ah/img/332P_4JQQYd7enXYrJ9Qnw=s800",
      price: {
        cash: 38995,
        credit: 40000,
        card: 39000,
      },
    },
    {
      id: Math.random(),
      model: "centra",
      company: "chevrolette",
      img: "https://www.zr.ru/d/story/b0/584368/201310170856-201310170856-gentra-026.jpg",
      engine: 1.5,
      price: {
        cash: 15000,
        credit: 21000,
        card: 17000,
      },
    },
    {
      id: Math.random(),
      model: "cobalt",
      company: "chevrolette",
      img: "https://mashintop.ru/uploads/attachments/complectation/1699161295/originals/chevrolet_cobalt_34121.jpg",
      engine: 1.6,
      price: {
        cash: 13000,
        credit: 18000,
        card: 15000,
      },
    },
    {
      id: Math.random(),
      model: "nexia",
      company: "chevrolette",
      img: "https://mashintop.ru/uploads/attachments/complectation/1699161295/originals/chevrolet_cobalt_34121.jpg",
  
      engine: 1.6,
      price: {
        cash: 10000,
        credit: 14000,
        card: 12000,
      },
    },
  ];
  
  
//for(let model of cars){
//    document.write(`
//    <div style="background-color:blue;width:300px;margin-bottom:10px;height:220px;color:red;font-size:24px;text-align:center">
//    id:${model.id}<br>
//    Model:${model.model}<br>
//    Engine:${model.engine}<br>
//    Price with cash:${model.price.cash}<br>
//    Price with credit:${model.price.credit}<br>
//    Price with 1 Mounth:${model.price.credit/10}<br>
//    Price with card:${model.price.card}<br>
//    </div>
//   `)
//   setTimeout(() => {
//    prompt("Какой модель удалить?") 
//}, 3000);  
// if(prompt === cars.id){
//   cars.splice(indexof[cars.id],1)
//}
//}

 
       

