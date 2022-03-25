
import React, { useEffect } from 'react';
import { useState} from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

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

  const [idPokedex, setIdPokedex] = useState(firstGenPoke[0].id)

  const [pokemon, setPokemon] = useState('')

 
 
  const endpoint = (`https://pokeapi.co/api/v2/pokemon/${idPokedex}`)
 
  

useEffect(() => 

    fetch(endpoint)

         .then(resposta => resposta.json())

         .then(json => { 
           setPokemon({
             nome: json.name,
             img: json.sprites.front_default,
             tipo: json.types
        })
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
Tipo = ${pokemon.tipo}`}>
         
      <CardType/>
    

      </CardInfo>
      
      
          
          
         
            <Button title = 'next' 
                    color = 'red'
                    onPress = {() => {
                      
                      updatePokemon}}
                      />
          
  

      
            

      
    

       

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

