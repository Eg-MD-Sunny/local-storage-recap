const addToDb = (id) =>{
    let shoppingCart ={}
    console.log(typeof shoppingCart)
    

    //Local Storage Get & Check Data
    const storedCard = localStorage.getItem('data-store')
    console.log(typeof storedCard);
    if(storedCard){
        shoppingCart=JSON.parse(storedCard)
        //console.log(typeof shoppingCart)
    }else{
        shoppingCart ={}
    }

    // Local Storage Set Data
    let matchDataId = shoppingCart[id]
    if(matchDataId){
        const newValueSet = matchDataId + 1;
        shoppingCart[id]=newValueSet;
    }else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('data-store',JSON.stringify(shoppingCart))


   

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
const removeFromDb = (id) =>{
    // console.log('Inside Fake DB',id)
    const storedCard = localStorage.getItem('data-store')
    if(storedCard){
        const shoppingCart = JSON.parse(storedCard)
        if(id in shoppingCart){
            // console.log('Exists In the Cart')
            delete shoppingCart[id];
            localStorage.setItem('data-store',JSON.stringify(shoppingCart))
        }
    }else{

    }
}
export { addToDb, removeFromDb };

