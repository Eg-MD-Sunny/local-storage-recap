const addToDb = (id) =>{
    let shoppingCart ={}
    console.log(typeof shoppingCart)
    localStorage.setItem('data-store',JSON.stringify(shoppingCart))

    let matchDataId = shoppingCart[id]
    






    // const matchDataId = localStorage.getItem(id)
    // //console.log('Geeting Data Type', typeof matchDataId);
    // if(matchDataId){
    //     const newValueSet= parseInt(matchDataId) + 1;
    // //console.log('Increase Data Type', typeof newValueSet);
    //     //localStorage.setItem(id,newValueSet);
    // }else{
    //     //localStorage.setItem(id,1)
    // }
}

export { addToDb }

