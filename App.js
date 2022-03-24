
import React, { useEffect } from 'react';
import { useState} from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

import CardInfo from './components/CardInfoPoke';
import CardType from './components/cardTypePoke';
import CardImage from './components/CardImage';
import ButtonNav from './components/ButtonNav';
import NavBar from './components/NavBar';


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


  

//Isso vai ser usado depois

  const [pokemon, setPokemon] = useState('')

 

useEffect(() => 

    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')

         .then(resposta => resposta.json())

         .then(json => { 
           setPokemon({
             nome: json.name,
             img: json.sprites.front_default
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
      


      <CardInfo text = {`Nome = ${pokemon.nome}`}>
         
      <CardType/>
    

      </CardInfo>
      
      <NavBar>
          
          <ButtonNav text = '->' style = {styles.buttonStyle}/>
      
      </NavBar>
      

      
    

       

      </ScrollView>

    
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1, 
    //flexDirection: 'column',
    
    //justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    
  },


  imgStyle: {
    width: 200,
    height: 200
  },

  buttonStyle:{
    alignSelf: 'stretch'
  }

 
 
  
 

  
});

