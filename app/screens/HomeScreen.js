import * as React from "react";
import { Image, View, StyleSheet, Text, ListView, FlatList } from "react-native";
import BackgroundScreen from "../components/BackgroundScreen";
import { connectActionSheet } from "@expo/react-native-action-sheet";
import Post from '../models/post';
import { SafeAreaView } from 'react-navigation';
import { ScrollView, TouchableWithoutFeedback, TouchableOpacity } from "react-native-gesture-handler";
import NewLinePlaceHolder from "../components/NewLinePlaceHolder";
import Themes from "../constants/Themes";
import { Ionicons } from '@expo/vector-icons';

function HeadLineItem(props) {
  return (
    <TouchableWithoutFeedback
      style={styles.headlineItem}
      onPress={() => props.navigation.navigate('PostDetail', {
        data: props.item
      })}
    >
      <Image
        style={{ width: 190, height: 190, borderRadius: 10 }}
        source={{ uri: props.item.urlToImage }}
      />
      <Text style={styles.headlineItemTitle}>{props.item.title}</Text>
      <Text style={{ fontStyle: 'italic', fontSize: 14, width: '100%', textAlign: 'right' }}>{props.item.source.name}</Text>
    </TouchableWithoutFeedback>
  );
}

function EveryThingItem(props) {
  return (
    <TouchableWithoutFeedback
      style={styles.everyThingItem}
      onPress={() => props.navigation.navigate('PostDetail', {
        data: props.item
      })}
    >
      <Image
        style={{ width: 90, height: 90, borderRadius: 10 }}
        source={{ uri: props.item.urlToImage }}
      />
      <View style={{ width: 250, height: 90, marginHorizontal: 10 }}>
        <Text style={styles.headlineItemTitle}>{props.item.title}</Text>
        <Text style={{ fontStyle: 'italic', fontSize: 14, width: '100%', textAlign: 'right' }}>{props.item.source.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    posts: null,
    allNew: null
  };

  render() {
    const { navigation } = this.props;
    const IconSearch = <TouchableOpacity onPress={() => navigation.navigate('Search')}>
      <Ionicons
        name={Platform.OS === 'ios'
          ? 'ios-search'
          : 'md-search'}
        size={26}
        color={'black'}
      />
    </TouchableOpacity>
    const TopBar = <View style={styles.topBar}>
      <Text style={styles.textBar}>Home</Text>
      {IconSearch}
    </View>
    const NewLine = <View style={styles.NewLine}>
      <Text style={styles.sectionTitle}>Top Headlines</Text>
      <View style={{ paddingTop: 20, padding: 10 }}>
        {
          this.state.posts ?
            <ScrollView horizontal={true} style={{ borderRadius: 10 }} >
              <FlatList
                style={{ marginBottom: 5, borderRadius: 10 }}
                horizontal={true}
                data={this.state.posts.articles}
                renderItem={({ item }) => <HeadLineItem navigation={this.props.navigation} item={item} ></HeadLineItem>}
                keyExtractor={item => item.url}
              />
            </ScrollView>
            : <NewLinePlaceHolder />
        }
      </View>
    </View>
    const News = <View style={{ ...styles.card, minHeight: 500 }}>
      <Text style={styles.sectionTitle}>All News</Text>
      {
        this.state.allNew ?
          <ScrollView style={{ borderRadius: 10 }} >
            <FlatList
              style={{ marginBottom: 5, borderRadius: 10 }}
              data={this.state.allNew.articles}
              renderItem={({ item }) => <EveryThingItem navigation={this.props.navigation} item={item} ></EveryThingItem>}
              keyExtractor={item => item.url}
            />
          </ScrollView>
          : <NewLinePlaceHolder />
      }
    </View>
    return (
      <BackgroundScreen>
        <SafeAreaView
          style={styles.container}
        >
          {TopBar}
          <ScrollView style={{ minHeight: '100%' }}>
            {NewLine}
            {News}
          </ScrollView>
        </SafeAreaView>
      </BackgroundScreen>
    );
  }

  async componentDidMount() {
    const posts = await Post.loadTopHeadLine();
    this.setState({ posts });
    const allNew = await Post.loadEveryThing();
    this.setState({ allNew });
  }
}

const HomeScreen = connectActionSheet(Home);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "transparent",
    flex: 1
  },
  topBar: {
    backgroundColor: 'white',
    marginBottom: 5,
    width: '100%',
    height: 50,
    padding: 10,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textBar: {
    fontSize: 26,
    fontWeight: 'bold',
    width: '80%',
    color: 'ge',
    textAlign: "left"
  },
  NewLine: {
    minHeight: 50,
    backgroundColor: 'white',
    margin: 5,
    padding: 5,
    paddingTop: 10,
    borderRadius: 10
  },
  card: {
    backgroundColor: 'white',
    margin: 5,
    padding: 5,
    paddingTop: 10,
    borderRadius: 10
  },
  sectionTitle: {
    marginLeft: 10,
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    color: 'grey',
  },
  headlineItem: {
    width: 200,
    height: 300,
    margin: 5,
    padding: 5,
    paddingTop: 5,
    borderRadius: 10,
    backgroundColor: Themes.screenBackgroundColor
  },
  everyThingItem: {
    width: '100%',
    height: 100,
    margin: 5,
    padding: 5,
    paddingTop: 5,
    borderRadius: 10,
    backgroundColor: Themes.screenBackgroundColor,
    flex: 1, flexDirection: 'row'
  },
  headlineItemTitle: {
    marginTop: 5,
    fontWeight: "bold",
    height: 70
  }
});
