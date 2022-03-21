
import React, { useEffect } from 'react';
import { useState} from 'react';
import { Alert, StyleSheet, Text, View, Image, Button } from 'react-native';

import CardInfo from './components/CardInfoPoke';
import CardType from './components/cardTypePoke';
import CardImage from './components/CardImage';
//array de objetos para armazenar os pokemóns
const firsGenPoke = [
{id: 1, nome: "Bulbassaur"},
{id: 2, nome: "Ivyssaur"},
{id: 3, nome: "Venusaur"},
{id: 4, nome: "Charmander"},
{id: 5, nome: "Charmeleon"},
{id: 6, nome: "Charizard"},
{id: 7, nome: "Squirtle"},
{id: 8, nome: "Wartotle"},
{id: 9, nome: "Blastoise"}
]


export default function App () {


  
  const [pokemon, setPokemon] = useState(null)

useEffect(() => 

    fetch('https://pokeapi.co/api/v2/pokemon/ditto')

         .then((resposta) => resposta.json())

         .then(json => {
               const pokemonRetornado = {
                     nome: json.name,
  
}


          setPokemon(pokemonRetornado)

})
          .catch(() => {
                Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon')})
)



    
 return (
    <View style={styles.container}>
       
        
      
      <CardImage/>
      
      <CardInfo Text = '${pokemon}'>
        
        <CardType/>
      </CardInfo>

      <Button style = {styles.buttonBckd} title='press' >
        
      </Button>
    

       
    
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  buttonBckd: {
    
    width: 50,
    height: 50,
    position: 'absolute',
    left: 10,
    backgroundColor: '#F51A16',
    color: '#F51A16'
  }
 
 
  
 

  
});

