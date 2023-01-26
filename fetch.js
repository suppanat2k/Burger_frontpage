const foodListk = document.querySelector('.foodlistk')
const foodListq = document.querySelector('.foodlistq')


fetch('data.json')
    .then(res => res.json())
    .then((data) => {
        const itemsK = data[0].foodItems
        const itemsQ = data[1].foodItems
        if(foodListk){
            appendItemK(itemsK)
        }
        if(foodListq){
            appendItemQ(itemsQ)
        }
    })
    .catch(err => err.message)

appendItemK = (items) =>{
    items.forEach((item) => {
        const fooditem = document.createElement('div')
        fooditem.classList.add('fooditem')

        const itemname = document.createElement('h3')
        itemname.classList.add('foodname')
        itemname.innerHTML = `Name : ${item.foodName}`

        const itemtype = document.createElement('p')
        itemtype.classList.add('foodtype')
        if(item.foodType != undefined){
            itemtype.innerHTML = `Type : ${item.foodType}`
        }else{
            itemtype.innerHTML = `Type : -`
        }

        const itemprice = document.createElement('p')
        itemprice.classList.add('price')
        itemprice.innerHTML = `Price : ${item.price}`

        fooditem.append(itemname,itemtype,itemprice)
        foodListk.append(fooditem)
    })
}

appendItemQ = (items) =>{
    items.forEach((item) => {
        const fooditem = document.createElement('div')
        fooditem.classList.add('fooditem')

        const itemname = document.createElement('h3')
        itemname.classList.add('foodname')
        itemname.innerHTML = `Name : ${item.foodName}`

        const itemtype = document.createElement('p')
        itemtype.classList.add('foodtype')
        if(item.foodType != undefined){
            itemtype.innerHTML = `Type : ${item.foodType}`
        }else{
            itemtype.innerHTML = `Type : -`
        }

        const itemprice = document.createElement('p')
        itemprice.classList.add('price')
        itemprice.innerHTML = `Price : ${item.price}`

        fooditem.append(itemname,itemtype,itemprice)
        foodListq.append(fooditem)
    })
}
