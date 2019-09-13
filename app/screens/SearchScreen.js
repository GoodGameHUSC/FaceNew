import * as React from "react";
import { Image, View, StyleSheet, Text, ScrollView, FlatList, ActivityIndicator } from "react-native";
import BackgroundScreen from "../components/BackgroundScreen";
import Post from '../models/post';
import { SafeAreaView } from 'react-navigation';
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Themes from "../constants/Themes";
import { Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Overlay } from 'react-native-elements';
import CameraScreen from './CameraScreen';
import { determineResult } from '../service/DetermineResult';
import { everyThingNews } from "../service/NewsApi";
import { uploadFile } from "../service/Firebase";
import { progressImage } from "../service/Cognitive";

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
        <Text style={{ fontStyle: 'italic', fontSize: 14, width: '100%', textAlign: 'left' }}>{props.item.source.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      showSearchEngine: false,
      statusText: 'Recording your face',
      time: 3,
      face: null,
      analyzeTopic: [],
      posts: null
    }
  }

  render() {
    const { navigation } = this.props;
    const TopBar = <View style={styles.topBar}>
      <Text style={styles.textBar}>Search</Text>
    </View>
    const IconSearch = <TouchableOpacity onPress={this._searchWithKeyWord}>
      <Ionicons
        name={Platform.OS === 'ios'
          ? 'ios-search'
          : 'md-search'}
        size={24}
        color={'grey'}
      />
    </TouchableOpacity>
    const FaceSearch = <Overlay
      isVisible={this.state.showSearchEngine}
      width="80%"
      height={400}
    >
      <Text style={{ textAlign: 'center', margin: 20 }}>{this.state.statusText}</Text>
      <View
        style={{ height: 200, width: 200, alignSelf: "center" }}
      >

        <CameraScreen onTakeFaceSuccess={this._onHaveFace} onError={this._onLostFace}></CameraScreen>
      </View>

      <Text style={{ textAlign: 'center', margin: 20 }}> Note : Please take phone in font of your face and make sure your phone have front Camera</Text>
    </Overlay>;
    const Indicator = this.state.loading && <View>
      <ActivityIndicator size="large" color="grey" />
      <Text style={{ textAlign: 'center' }}>{this.state.statusText}</Text>
    </View>

    const News = this.state.posts && <View style={{ ...styles.card, minHeight: 500, paddingBottom: 30 }}>
      <Text style={styles.sectionTitle}>Results</Text>
      {
        this.state.posts ?
          <ScrollView style={{ borderRadius: 10 }} >
            <FlatList
              style={{ marginBottom: 5, borderRadius: 10 }}
              data={this.state.posts.articles}
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
          {FaceSearch}

          <View style={styles.card}>
            <Input
              placeholder='Keywords ...'
              inputContainerStyle={{ borderBottomColor: 'white', width: '100%' }}
              rightIcon={IconSearch}
              value={this.state.keyword}
              onChangeText={text => this.setState({ keyword: text })}
            />
            <TouchableOpacity onPress={() => this._beginUseFaceSearch()}>
              <Text style={{ padding: 10, fontSize: 20 }}>Search Use <Text style={{ fontWeight: 'bold' }}>Face API</Text> </Text>
            </TouchableOpacity>

            {
              this.state.analyzeTopic.length > 0 && <View style={{ minHeight: 100, width: '100%', padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Recommendation topic for you : </Text>
                <Text style={{ fontStyle: 'italic' }}>{this.state.analyzeTopic.join(", ")}</Text>

              </View>
            }
          </View>
          <View style={styles.searchResultView}>
            {Indicator}
            {News}
          </View>
        </SafeAreaView>
      </BackgroundScreen>
    );
  }


  _beginUseFaceSearch = async () => {
    if (this.state.loading) return

    this.setState({ showSearchEngine: true })

  }
  _onHaveFace = async (face) => {

    this.setState({
      face: face,
      showSearchEngine: false,
      loading: true,
      statusText: 'Uploading image'
    })
    try {
      let fileUrl = await uploadFile(face);
      this.setState({ statusText: 'Analyzing face image' })
      console.log(fileUrl)
      let analyseData = await progressImage(fileUrl)
      this.setState({ statusText: 'Prepare Result' })
      console.log(analyseData);
      if (!analyseData) throw new Error("Unable to detect face in that image, please try again")
      let resultAnalyse = determineResult(analyseData);
      console.log(resultAnalyse);
      this.setState({ analyzeTopic: resultAnalyse.array });
      let result = await everyThingNews(resultAnalyse.string)
      console.log(result);
      this.setState({ loading: false, posts: result })
    } catch (error) {
      this.setState({ loading: false })
      alert(error.message || 'Something wrong')
      console.log(error);
    }

  }
  _searchWithKeyWord = async () => {
    try {
      console.log(this.state.keyword)
      if (!this.state.keyword) return
      this.setState({
        loading: true,
        statusText: 'Finding Result'
      })
      let result = await everyThingNews(this.state.keyword)
      console.log(result);
      this.setState({ loading: false, posts: result })
    } catch (error) {
      console.log(errors)
      alert(error.message || 'Something went wrong')
      this.setState({
        loading: false,
      })
    }
  }

  _onLostFace = () => {
    console.log("oops")
    this.setState({ showSearchEngine: false })
  }
}


export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "transparent",
    flex: 1
  },
  searchResultView: {
    padding: 5,
    marginTop: 20
  },
  btnSearch: { width: '10%', padding: 10, height: 40, width: 40, borderRadius: 25, backgroundColor: 'grey', textAlign: 'center' },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 5,
    width: '100%',
    height: 50,
    padding: 10,
    paddingLeft: 20,
    justifyContent: "center"
  },
  textBar: {
    fontSize: 26,
    fontWeight: 'bold',
    width: '100%',
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
    marginTop: 20,
    padding: 5,
    paddingTop: 10,
    borderRadius: 10,
    minHeight: 100,
    maxHeight: 500
  },
  sectionTitle: {
    marginLeft: 10,
    width: '100%',
    fontSize: 18,
    textAlign: 'center',
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
