const addToDb = (id) =>{
    const quantity = localStorage.getItem(id)
    if(quantity){
        const newQty = parseInt(quantity) + 1;
        localStorage.setItem(id,newQty)
    }else{
        localStorage.setItem(id,1)
    }
}

export { addToDb };

