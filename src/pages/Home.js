import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import api from "../sevices/api";
import Pokemon from '../components/Pokemon'

const endpointPokemon = "/pokemon/"

const Home = () => {

    const [pokemons, setPokemons] = useState([]);
    const [allan, setAllan] = useState("Meu nome é Allan");

    useEffect(() => {
        getPokemon()
    }, []);

    const getPokemon = () => {
        api
            .get(endpointPokemon)
            .then((response) => {
                // console.log(response.data.results)
                //debugger
                setPokemons(response.data.results)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    return (
        <>
            <div className='title center'>
                <p>Pokemons</p>
            </div>

            <div className='padding center'>
                {/* <form>
                    <label>Search (name, type, etc.):
                        &nbsp;
                        <input className='round'
                            type="text"
                            value={pokemons}
                            onChange={(e) => setPokemons("")}
                        />
                    </label>
                    &nbsp;
                    <input className='buttom'
                        type="button"
                        value="Seek"
                    onClick={(e) => setPokemons(e.target.value)}
                    />
                </form> */}

                <p className="name">{allan}</p>

                <p>
                    <input type='button' value="DUVIDO!" onClick={() => setAllan("Se vai sentar na cabeçççç")} style={{ backgroundColor: "red", width: 90, height: 30, borderRadius: 5 }} />
                    <Button theme="pink" onClick={() => setAllan("Se vai sentar na melao")}>DUVIDO!</Button>
                    <Button theme="blue" onClick={() => setAllan("Jade picona te passou a pamonha")}>DUVIDO!</Button>
                </p>

                <h1 className='padding'>Pokemon List</h1>
                <ul>
                    {pokemons &&
                        <div className='container'>
                            {pokemons.map((item) => {
                                //console.log(item.name)
                                return <Pokemon key={item.url} data={item} />
                            })}
                        </div>
                    }
                </ul>
            </div>
        </>
    )
}

export default Home

/* Styled-Components */

const theme = {
    blue: {
        default: "#3f51b5",
        hover: "#283593"
    },
    pink: {
        default: "#e91e63",
        hover: "#ad1457"
    }
};

const Button = styled.button`
    background-color: ${(props) => theme[props.theme].default};
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: ${(props) => theme[props.theme].hover};
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;

// const Circle = styled.circle`
//     stroke-dasharray: 289.0272;
//     stroke-dashoffset: -144.5136;
//     transform: rotate(180deg);
//     transform-origin: 50px 50px;
// `;