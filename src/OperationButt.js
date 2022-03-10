import {ACTION}from './App';

export default function operationButt({dispatch,operation}){

    return(
    
    <button 
    onClick={()=>
     dispatch({type:ACTION.CHOOSE_OPERATION, payload:{operation}})}> 
     {operation}</button>)
}