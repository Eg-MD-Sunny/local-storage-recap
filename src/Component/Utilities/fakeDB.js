const addToDb = (id) =>{
    const matchDataId = localStorage.getItem(id)
    //console.log('Geeting Data Type', typeof matchDataId);
    if(matchDataId){
        const newValueSet= matchDataId + 1;
    //console.log('Increase Data Type', typeof newValueSet);
        localStorage.setItem(id,newValueSet);
    }else{
        localStorage.setItem(id,1)
    }
}

export { addToDb };

