import React, { useState, createContext } from "react";


export const BuahContext = createContext();
export const BuahProvider = props => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null)
    const [inputNama, setInputNama] = useState("")
    const [inputHarga, setInputHarga] = useState("")
    const [inputBerat, setInputBerat] = useState("")
    const [ID_FRUIT, setID_FRUIT]  =  useState(0)
    const [statusForm, setStatusForm]  =  useState("create")

    return (
        <BuahContext.Provider value = {[dataHargaBuah, setDataHargaBuah, inputNama, setInputNama, inputHarga, setInputHarga,
         inputBerat, setInputBerat, ID_FRUIT, setID_FRUIT, statusForm, setStatusForm]}>
             {props.children}
         </BuahContext.Provider>
    );
};