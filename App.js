
import React, { useEffect } from 'react';
import { useState} from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, ScrollView, TouchableHighlight } from 'react-native';

import CardInfo from './components/CardInfoPoke';
import CardType from './components/cardTypePoke';
import CardImage from './components/CardImage';
import ButtonNav from './components/ButtonNav';
import NavBar from './components/NavBar';


//array de objetos para armazenar os pokemóns



export default function App () {

  const firstGenPoke = [
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

  

//Isso vai ser usado depois

  const [idPokedex, setIdPokedex] = useState(1)

  const [pokemon, setPokemon] = useState('')

  
const idUp = () => {

  setIdPokedex(idPokedex+1)

}
 
 
  const endpoint = (`https://pokeapi.co/api/v2/pokemon/${idPokedex}`)
 
  

useEffect(() => 

    fetch(endpoint)

         .then((resposta) => resposta.json())

         .then(json => {
               const pokemonRetornado = {
                     nome: json.name,
                     img: json.sprites.front_default
  
}

         .then(json => { 
           setPokemon({
             nome: json.name,
             img: json.sprites.front_default,
             tipo: json.types[0].type
        })
      })
      

          setPokemon(pokemonRetornado)

})
          .catch(() => {
                console.log(pokemon.nome)})
,[])




//console.log(pokemon.name) 
    
 return (
    <View style={styles.container}>
      
      <ScrollView>
        
   
      <CardImage text = {`${pokemon.img}`}/>
        


      <CardInfo text = {`Nome = ${pokemon.nome}
Tipo = ${pokemon.tipo}`}
>
         
      <CardType/>
    

      </CardInfo>
      
      
          
          
         
            <View>
              <ButtonNav text = 'PREV'  />
              <ButtonNav text = 'NEXT' update = {idUp} />
            </View>
                      
          
  

      
            

      
        
   
    

       

      </ScrollView>

    
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1, 
    flexDirection: 'column',
    
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    
  },


  imgStyle: {
    width: 200,
    height: 200
  },

  
 
 
  
 

  
});

