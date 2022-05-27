import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'

import { View, StyleSheet } from 'react-native'

import InfoFrame from '../components/InfoFrame'
import CardImage from '../components/CardImage'
import ButtonNav from '../components/ButtonNav'

const Home = ({ navigation }) => {
  const [idPokedex, setIdPokedex] = useState(1)

  const [pokemon, setPokemon] = useState('')

  const endpoint = `https://pokeapi.co/api/v2/pokemon/${idPokedex}`

  useEffect(() =>
    fetch(endpoint)
      .then(resposta => resposta.json())
      //versions['generation-iv'].diamond-pearl.front_default
      //other['dream-world'].front_default
      .then(json => {
        setPokemon({
          id: json.id,
          nome: json.name,
          img: json.sprites.versions['generation-v']['black-white']['animated']
            .front_default,
          tipos: json.types,
          altura: json.height,
          peso: json.weight,
          location: json.location_area_encounters
        })
      })

      .catch(() => {
        console.log(pokemon.types)
      }, [pokemon])
  )

  const idUp = () => {
    setIdPokedex(idPokedex + 1)
  }

  const idDown = () => {
    if (idPokedex === 1) {
      return false
    }
    setIdPokedex(idPokedex - 1)
  }

  //{pokemon?.tipos?.map(tipo => `\n ${tipo?.type?.name}`)

  //console.log(pokemon.tipos)

  function convertWeighttoKg(weight) {
    return (weight * 0.1).toFixed(2)
  }

  function convertHeighttoCm(heigth) {
    return (heigth * 10).toFixed(2)
  }

  const extractTypes = () => {
    pokemon?.tipo?.map(tipos => `${tipo?.type?.name}`)
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <CardImage text={`${pokemon.img}`} nav={navigation} />

      <InfoFrame
        text={` Nº: ${pokemon.id} \n Nome: ${
          pokemon.nome
        } \n Peso: ${convertWeighttoKg(
          pokemon.peso
        )} kg \n Altura: ${convertHeighttoCm(pokemon.altura)} cm`}
        textType={pokemon?.tipos?.map(tipo => `\n ${tipo?.type?.name}`)}
      />

      <ButtonNav text="PREVIOUS" update={idDown} disable={idDown} />
      <ButtonNav text="NEXT" update={idUp} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#D3D3D3'
  },

  buttonStyle: {
    borderRadius: 12,
    color: 'white',
    borderRadius: 16,
    backgroundColor: 'red',
    padding: 10
  },

  imgStyle: {
    width: 250,
    height: 250
  },

  imagePressableContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: 400
  }
})
export default Home
