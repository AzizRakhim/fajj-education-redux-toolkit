import React, { createContext, useReducer } from 'react'
import { useState } from 'react';
import { groupObj } from '../../obj';

export const groupContext = createContext();

function GroupProvider({children}) {
  let [groups, setGroups] = useState(groupObj);

  const reducer = (state, action) => {
    switch (action.type) {
      case "CANCEL":{
        return state = state.filter(item => {
          return item.id != action.payload.id
        });
      }
      case "CONFIRM": {
        state.forEach(item => {
          if(item.id === action.payload.id){
            item.subject = action.payload.subject
            item.educationType = action.payload.education
            item.status = action.payload.status
            item.payment = action.payload.payment
            item.teacher = action.payload.teacher
          }
        });
        return [...state];
      }
      case "ADD": {
        return [action.payload.obj, ...state];
      }
      
      default:
        break;
    }
  }

  const confirmHandler = (id, subject, education, status, payment, teacher) => {
    dispatch({type : "CONFIRM", payload : { id, subject, education, status, payment, teacher}});
  }

  const cancelHandler = (elId) => {
    dispatch({type : "CANCEL", payload : { id : elId}})
  }

  const addHandler = (elObj) => {
    dispatch({type : "ADD", payload : { obj : elObj }});
  }

  let [arr, dispatch] = useReducer(reducer, groups);

  const value = {
    arr,
    addHandler,
    cancelHandler,
    confirmHandler
  }

  return (
    <groupContext.Provider value={value}
    >
      {children}
    </groupContext.Provider>
  )
}

export default GroupProvider;
