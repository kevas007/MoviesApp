import {View, SafeAreaView} from "react-native";

import NewNovie from "../components/NewNovie";

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <NewNovie />
      </View>
    </SafeAreaView>
  );
};

export default Home;
