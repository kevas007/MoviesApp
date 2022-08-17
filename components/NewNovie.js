import { View, Text } from 'react-native'
import { useState, useEffect } from "react";
import axios from 'axios'



const NewNovie = () => {
  useEffect(() => {
    axios
    .get("https://api.themoviedb.org/3/movie/10500?api_key=c64a7ced9260f57e46daa8fc043348d7")
    .then(value => {
      console.log(value.data);
    })
    .catch(reason => {
      console.log(reason);
    });
}, []);
  return (
    <View>
      <Text>NewNovie</Text>
    </View>
  )
}

export default NewNovie