
import React, { useEffect } from 'react';
import { useState} from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, ScrollView, TouchableHighlight } from 'react-native';

import CardInfo from './components/CardInfoPoke';
import TypeCard from './components/TypeCardPoke';
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

  

 
  const endpoint = (`https://pokeapi.co/api/v2/pokemon/${idPokedex}`)
 
  

useEffect(() => 

    fetch(endpoint)

         .then(resposta => resposta.json())

         .then(json => { 
           setPokemon({
             nome: json.name,
             img: json.sprites.front_default,
             tipo: json.types[0].type.name
        })
      })
      

          .catch(() => {
                console.log(pokemon.nome)})
,[])

const idUp = () => {

  setIdPokedex(idPokedex+1)

}

const idDown = () => {

  setIdPokedex(idPokedex-1)

}
 


//console.log(pokemon.name) 
    
 return (
    <View style={styles.container}>
      
      <ScrollView>
        
   
      <CardImage text = {`${pokemon.img}`}/>
        


      <CardInfo text = {`Name = ${pokemon.nome}`}
>
         
         <TypeCard text = {`Type = ${pokemon.tipo}`}/>
         
       
    

      </CardInfo>

     
      
      
          
          
         
            <View>
              <ButtonNav text = 'PREV' update = {idDown} />
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
    width: 250,
    height: 250
  },

  
 
 
  
 

  
});

