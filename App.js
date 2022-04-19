
import React, { useEffect } from 'react';
import { useState} from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, ScrollView, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'


import InfoFrame from './components/InfoFrame';
import CardImage from './components/CardImage';
import ButtonNav from './components/ButtonNav';

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
            tipos: json.types
            
        })
      
      
      })

          .catch(() => {
                console.log(pokemon.types)}
,[pokemon]))




const idUp = () => {

  setIdPokedex(idPokedex+1)

}

const idDown = () => {

  if(idPokedex === 1){
    return false
  }
  setIdPokedex(idPokedex-1)


}


//

//console.log(pokemon.tipos) 
    
 return (

<NavigationContainer>


    <View style={styles.container}>
      
      <ScrollView>
        
        <CardImage text = {`${pokemon.img}`}/>

        <InfoFrame text = {`Name: ${pokemon.nome}`} textType = {`${pokemon?.tipos?.map(tipo => tipo?.type?.name)}`} >

       </InfoFrame>

       
       
         
            
              
              <ButtonNav text = 'PREVIOUS' update = {idDown} disable = {idDown} />
              <ButtonNav text = 'NEXT' update = {idUp} />
              
            
                      
      </ScrollView>

    
    </View>
 
</NavigationContainer>
  );
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
    //color: 'red',
    borderRadius: 16,
    backgroundColor: 'red'
},


  imgStyle: {
    width: 250,
    height: 250
  },

  
 
 
  
 

  
});

