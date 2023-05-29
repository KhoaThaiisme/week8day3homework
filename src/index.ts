
import { v4 as uuidv4 } from 'uuid';

type Item = {
    readonly id: string,
    name:string,
    description:string,
    price:number
}

type User = {
    readonly id: string,
    name:string,
    age:number,
    cart:Item[]
}

function createUser (name:string, age:number):User{
    let user:User = {
        id: uuidv4(),
        name: name, 
        age: age,
        cart: []
    }
    return user
}

function createItem (name: string, description: string, price: number) {
    let item:Item = {
        id: uuidv4(),
        name:name,
        description:description,
        price:price
    }
    return item
}

function addToCart(item:Item, user:User) {
    user.cart.push(item)
}

function removeFromCart(item:Item, user:User) {
    let cart:Item[] = []
    for(let i = 0; i < user.cart.length ; i ++ ) {
        if (user.cart[i].id !== item.id) {
            cart.push(user.cart[i])
        }
    user.cart = cart
    }
}

function removeQuantity(item:Item, user:User, quantity:number) {
    for(let i = 0; i<user.cart.length; i ++ ) {
        if(user.cart[i].id === item.id){
            user.cart.splice(i, quantity)
        }
    }
}

function cartTotal(user:User):number{
    let total = 0
    for(let i = 0; i < user.cart.length; i++){
        total += user.cart[i].price;
    }
    return Math.round(total * 100) / 100;
}

function printCart(user:User){
    console.log("Cart: ")
    for(let i = 0; i <  user.cart.length; i++){
        console.log(user.cart[i].name); // remove .name to print all info
    }
}

const user1 = createUser("khoa", 29);
const itemA = createItem("Shoes", "Nike Shoes", 59.99);
const itemB = createItem("Shirt", "Nike Shirt", 19.99);
const itemC = createItem("Socks", "Nike Socks", 9.99)

addToCart(itemA, user1);
printCart(user1);
console.log(cartTotal(user1));

