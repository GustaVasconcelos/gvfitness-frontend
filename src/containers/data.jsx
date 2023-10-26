import '../styles/data.css'
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { FaUserAlt, FaRuler } from "react-icons/fa";
import api from '../services/api';
import { getUserId } from '../services/localStorage';

const Data = () => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false);
    const getUser = async () => {
        try {
            const userId = getUserId();
            const res = await api.get('/user/'+userId);
            setUser(res.data.user);
            setLoading(true)
        } catch(err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getUser()
    },[])
    return (
        <div>
            <Header/>
            <main>
                <div className="container-data">
                    <div className="container-data-title">
                        <FaUserAlt/>
                        <h3>Seus dados</h3>
                    </div>
                    {
                        loading ? (
                            <div className="container-data-items">
                                <div className="data-items-card">
                                    <h4>Nome: {user.name}</h4>
                                </div>
                                <div className="data-items-card">
                                    <h4>CPF: {user.cpf}</h4>
                                </div>
                                <div className="data-items-card">
                                    <h4>E-mail: {user.email}</h4>
                                </div>
                                <div className="data-items-card">
                                    <h4>Idade: S / V</h4>
                                </div>
                                <div className="data-items-card">
                                    <h4>Gênero: S / V</h4>
                                </div>
                            </div>
                        ):(
                            <div style={{width:"100%", textAlign:'center', marginTop:10}}>
                                <h1>Carregando...</h1>
                            </div>
                        )
                    }
                    <div className="container-data-title">
                        <FaRuler/>
                        <h3>Suas medidas</h3>
                    </div>
                    <div className="container-data-items">
                        <div className="data-items-card">
                            <h4>Peso: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Altura: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>IMC: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Gordura Corporal: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Braço E: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Braço D: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Ante Braço E: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Ante Braço D: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Perna E: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Perna D: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Panturrilha E: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Panturrilha  D: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Quadril: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Abdomen  D: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Tórax: S / V</h4>
                        </div>
                        <div className="data-items-card">
                            <h4>Cintura: S / V</h4>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Data;