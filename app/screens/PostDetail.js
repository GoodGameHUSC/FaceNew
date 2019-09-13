import * as React from "react";
import { View, StyleSheet, Text, Image, Linking } from "react-native";
import BackgroundScreen from "../components/BackgroundScreen";
import { SafeAreaView } from 'react-navigation';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Themes from "../constants/Themes";
import { Ionicons } from '@expo/vector-icons';


class PostDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerMode: 'screen',
  };

  render() {

    const { navigation } = this.props;
    const item = navigation.getParam('data', 'NO-ID');
    const TopBar = <View style={styles.topBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name={Platform.OS === 'ios'
            ? 'ios-arrow-back'
            : 'md-arrow-back'}
          size={26}
          color={'black'}
        />
      </TouchableOpacity>
    </View>

    return (
      <BackgroundScreen>
        <SafeAreaView
          style={styles.container}
        >
          {/* <View>
            {TopBar}
          </View> */}
          <ScrollView>
            <Image
              style={{
                alignSelf: 'stretch',
                height: 200,
                margin: 0,
                width: '100%',
              }}
              source={{ uri: item.urlToImage }}
            />
            <View style={{ backgroundColor: "white", minHeight: '100%' }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>
                Author :
                {item.author}</Text>
              <Text style={styles.author}>
                Published at :
                {item.publishedAt.substr(0, 10)}</Text>
              <Text style={{ height: 80 }}></Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.description}>{item.content}
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL(item.url)}>
                <Text style={{ color: 'blue', textAlign: "center", width: "100%", marginBottom: 20 }}> View More</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </BackgroundScreen>
    );
  }
}

// const HomeScreen = connectActionSheet(Home);

export default PostDetail;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "transparent",
    flex: 1
  },
  title: {
    padding: 20,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "left",
  },
  author: {
    fontSize: 14,
    paddingHorizontal: 20,
    fontStyle: 'italic',
    paddingLeft: 30
  },
  description: {
    padding: 20,
    fontSize: 14,
  },
  topBar: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    marginBottom: 5,
    width: '100%',
    height: 50,
    padding: 10,
    justifyContent: "left"
  }
});
