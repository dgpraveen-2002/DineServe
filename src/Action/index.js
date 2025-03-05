export const settablenumber = (value) => async dispatch =>{
    dispatch({
        type:"SETTABLENUMBER",
        payload:value
    })
}

export const resettablenumber = () => async dispatch =>{
    dispatch({
        type:"RESETTABLENUMBER"
    })
}

export const setfilter = (val) => async dispatch =>{
    dispatch({
        type:"SETFILTER",
        payload:val
    })
}

export const resetfilter = () => async dispatch =>{
    dispatch({
        type:"RESETFILTER"
    })
}
