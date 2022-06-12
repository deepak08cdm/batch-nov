import axios from "axios"

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


// for thunk middleware

// export function fetchData(){
//     return async(dispatch,state)=>{
//         const result  = await axios.get('https://jsonplaceholder.typicode.com/posts')
//         console.log('state from action', state())
//         dispatch({
//             type:'JSONDATA',
//             payload:result.data
//         })
//     }
// }


//for saga middleware

export function fetchData(){
    return {
        type:'FETCHDATA',
        payload:''
    }
}