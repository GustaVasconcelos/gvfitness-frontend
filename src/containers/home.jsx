import '../styles/home.css'

import React, { useEffect, useState } from "react";
import api from '../services/api';

import Header from "../components/header.jsx";

import { getUserId } from '../services/localStorage';

const Home = () => {

    const [loading, setLoading] = useState(false)
    const [trainingSheet, setTrainingSheet] = useState('')
    const [itemTrainingSheet, setItemTrainingSheet] = useState('')

    const getTrainingSheets = async () => {
        try {
            const userId = getUserId();
            const res = await api.get(`/trainingSheet/user/${userId}`);
            setTrainingSheet(res.data);
            setLoading(true);
        } catch(err) {
            console.log(err);
        }
    }
    useEffect(() =>{
        getTrainingSheets();
    },[])

    const getItemTrainingSheet = async () => {
        try {
            const res = await api.get('/itemTrainingSheet/')
            setItemTrainingSheet(res.data);
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getItemTrainingSheet();
    },[loading])

    return (
        <div>
            <Header></Header>
            <main>
                <div className="container-training-sheets">
                    {
                        trainingSheet? (
                            trainingSheet.map((item, index) =>(
                            <div className="container-training-sheets-card" key={index}>
                                <div className='training-sheets-name'>
                                    <p>{item.name}</p>
                                </div>
                                <div className='training-sheet-card'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Exercício</th>
                                                <th>Séries</th>
                                                <th>Repet</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                itemTrainingSheet?(
                                                    itemTrainingSheet.map((element, indexEl) => (
                                                        item._id === element.trainingSheetId &&
                                                        <tr key={indexEl}>
                                                            <td>{element.name}</td>
                                                            <td>{element.series}</td>
                                                            <td>{element.repetition}</td>
                                                        </tr>
                                                    ))
                                                ):(
                                                    <div>
                                                        <h5>Não possui itens cadastrados</h5>
                                                    </div>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            ))
                        ):
                        (
                            <div className='no-item'>
                                <h1>Nenhum item cadastrado</h1>
                            </div>
                        )
                    }
                </div>
                
            </main>
        </div>
    )
}

export default Home;