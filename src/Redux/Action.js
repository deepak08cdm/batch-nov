export function addToList(item){
    return(
        {
            type:'ADDITEMTOLIST',
            payload:item
        }
    )
}
export function deleteFromList(item){
    return({
        type:'DELETEITEMFROMLIST',
        payload:item
    })
}