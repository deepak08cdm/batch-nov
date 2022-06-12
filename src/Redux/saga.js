import axios from 'axios'
import {takeLatest , put ,call} from 'redux-saga/effects'

const apiFetch = async()=>{
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return result?.data
}
function* fetchData(action){
    const result = yield call (apiFetch)
    // console.log(result)
    yield put({
        type:'JSONDATA',
        payload:result
    })
}
function* mySaga(){
 yield takeLatest('FETCHDATA', fetchData)
 console.log('saga completed')
}

export default mySaga