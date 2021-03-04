/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Pressable,
  InputText
} from 'react-native';


const App = () => {

  const [number, setNumber] = useState();
  const [textereponse, setTextReponse] = useState("Entrer un nombre entre 0 et 100")
  const [nombreADeviner, setNombreADeviner] = useState(Math.floor(Math.random() * 100) + 1)
  const [textButton, setTextButton] = useState("Verifier")



  const Verifier = () => {
    console.log(number, nombreADeviner)
    if (+number < nombreADeviner) {
      setTextReponse("C'est plus")

    }
    if (+number > nombreADeviner) {
      setTextReponse("C'est moins")

    }

    if (+number === nombreADeviner) {
      setTextReponse("Félicitation vous avez trouver le bon nombre! \n Encore une partie? Appuyer sur rejouer!")
      setTextButton("Rejouer")

    }


  }

  const Rejouer = () => {
    setTextReponse("Entrez un nombre entre 0 et 100")
    setTextButton("Verifier")
    setNombreADeviner(Math.floor(Math.random() * 100) + 1)



  }

  const handleChange = (value) => {
    setNumber(value)
  }

  return (
    <View style={styles.container}>
      <View style={styles.Inputnombre}>
        <TextInput keyboardType='numeric' style={styles.InputText} onChangeText={(value) => handleChange(value)}
        // setNumber={(number) => { setNumber(number) }} 
        />
      </View>
      <View style={styles.reponse}>
        <Text style={[styles.textReponse]}>{textereponse}</Text>

      </View>
      <View style={styles.bouton}>
        <Pressable onPress={textButton === "Rejouer" ? Rejouer : Verifier} style={styles.btn}>
          <Text style={styles.btnText}>{textButton}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Inputnombre: {
    flex: 3,
    // backgroundColor: "black",
    alignItems: "center",
    justifyContent: 'center',
  },
  reponse: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: 'grey'
  },
  bouton: {
    flex: 3,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',

  },

  btn: {
    borderRadius: 10,
    backgroundColor: "grey",
    padding: 70,


  },
  btnText: {
    fontSize: 50,
    color: "white",
  },

  InputText: {
    fontSize: 40,
    color: "black",
    flexWrap: 'wrap',

  },

  textReponse: {
    color: "white",
    fontSize: 22,
    textAlign: 'center',

  },

  placeholder: {
    color: "white",
    fontSize: 10,

  }

});

export default App;
