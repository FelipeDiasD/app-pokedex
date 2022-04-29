
import React, { useEffect } from 'react';
import { useState} from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, ScrollView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'


import InfoFrame from '';
import CardImage from '';
import ButtonNav from '';


export default function Details () {
    

  

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
            img: json.sprites.other['official-artwork'].front_default,
            tipos: json.types,
            altura: json.height,
            peso: json.weight
            
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
  
  <StatusBar hidden = {true}/>
    

  

    <View style={styles.container}>
      
      <ScrollView>
        
        <CardImage text = {`${pokemon.img}`}/>

        <InfoFrame text = {` Name: ${pokemon.nome} \n Weight: ${(pokemon.peso * 0.1).toFixed(2)} kg \n Height: ${(pokemon.altura * 10)} cm`} 
        textType = {`${(pokemon?.tipos?.map(tipo => `\n ${(tipo?.type?.name)}`))}`} >

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