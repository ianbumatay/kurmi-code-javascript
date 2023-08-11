


let employees = [
    {name:'Ian', like:'burgers'},
    {name:'kyle', like:'pastrami'},
    {name:'Jada', like:'salad'},
    {name:'Vinny', like:'soup'},
    {name:'Joy', like:'tacos'}
] 

let restaurants = [
    {name:'Mcdonals', menu:'burgers'},
    {name:'Katz deli', menu:'pastrami'},
    {name:'Go green', menu:'salad'},
    {name:'Siagonese', menu:'soup'},
    {name:'Taco bell', menu:'tacos'}
]  

// **** automating restaurant of choice based on the food they like

for(const employee of employees){ 
    const chosenrestaurant = restaurants.find(restaurant => restaurant.menu === employee.like)

    if(chosenrestaurant){
        console.log(`${employee.name} chose ${chosenrestaurant.name}`)

    }else{
        console.log(`${employee.name} is not hungry.`)
    }
} 




//**** choosing a restaurant based on the menu 

for(const employee of employees){

   const prefRestaurant = restaurants.filter(restaurant => restaurant.menu === employee.like ) 

   if(employee.like.includes('salad')){

        for(const restaurant of prefRestaurant){ 
           console.log(`${employee.name} likes ${employee.like}  should order from ${restaurant.name}`)
        }
    }
}











