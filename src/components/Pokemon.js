import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import api from "../sevices/api";
//import '../styles/pokemon.css';

const endpointPokemonInfo = "/pokemon"

const Pokemon = ({ data }) => {

    const [pokemonImageUrl, setPokemonImageUrl] = useState("");
    const [pokemonWeight, setPokemonWeight] = useState("");

    const getPokemonInfo = (data) => {

        let endpoint = endpointPokemonInfo + "/" + data

        api
            .get(endpoint)
            .then((response) => {
                //console.log(response.data.sprites.back_default)
                // console.log("weight:", response.data.weight)
                setPokemonImageUrl(response.data.sprites.back_shiny)
                setPokemonWeight(response.data.weight)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    const titleCase = (str) => {
        return str
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    useEffect(() => {
        getPokemonInfo(data.name)
    }, [data.name]);

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justify="center"
            style={{ minHeight: '30vh' }}
        >
            <Card sx={{ width: 350, maxWidth: 350 }} align="center">
                <CardContent sx={{ backgroundColor: "lightBlue" }}>
                    <div>
                        <div className="container column">
                            <div className="item">
                                <div className="content">
                                    <p className="name">{titleCase(data.name)}</p>
                                    {pokemonImageUrl &&
                                        <img src={pokemonImageUrl} alt={data.name} />
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            {`Weight: ${pokemonWeight}`}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid >
    );
}

export default Pokemon
