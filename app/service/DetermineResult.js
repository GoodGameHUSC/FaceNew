export function determineResult(data) {
  // let data = {
  //   "faceId": "f9c70c4c-57b6-4787-bba9-f6cde5d64758",
  //   "faceRectangle": {
  //     "top": 117,
  //     "left": 161,
  //     "width": 99,
  //     "height": 99
  //   },
  //   "faceAttributes": {
  //     "smile": 0.981,
  //     "headPose": {
  //       "pitch": 2.4,
  //       "roll": -8.1,
  //       "yaw": -8.8
  //     },
  //     "gender": "male",
  //     "age": 47.0,
  //     "facialHair": {
  //       "moustache": 0.1,
  //       "beard": 0.1,
  //       "sideburns": 0.1
  //     },
  //     "glasses": "NoGlasses",
  //     "emotion": {
  //       "anger": 0.0,
  //       "contempt": 0.001,
  //       "disgust": 0.0,
  //       "fear": 0.0,
  //       "happiness": 0.981,
  //       "neutral": 0.019,
  //       "sadness": 0.0,
  //       "surprise": 0.0
  //     },
  //     "blur": {
  //       "blurLevel": "low",
  //       "value": 0.0
  //     },
  //     "exposure": {
  //       "exposureLevel": "goodExposure",
  //       "value": 0.66
  //     },
  //     "noise": {
  //       "noiseLevel": "low",
  //       "value": 0.0
  //     },
  //     "makeup": {
  //       "eyeMakeup": false,
  //       "lipMakeup": false
  //     },
  //     "accessories": [],
  //     "occlusion": {
  //       "foreheadOccluded": false,
  //       "eyeOccluded": false,
  //       "mouthOccluded": false
  //     },
  //     "hair": {
  //       "bald": 0.05,
  //       "invisible": false,
  //       "hairColor": [
  //         {
  //           "color": "black",
  //           "confidence": 1.0
  //         },
  //         {
  //           "color": "brown",
  //           "confidence": 0.81
  //         },
  //         {
  //           "color": "other",
  //           "confidence": 0.45
  //         },
  //         {
  //           "color": "gray",
  //           "confidence": 0.31
  //         },
  //         {
  //           "color": "red",
  //           "confidence": 0.02
  //         },
  //         {
  //           "color": "blond",
  //           "confidence": 0.01
  //         }
  //       ]
  //     }
  //   }
  // }

  const { age, gender, glasses, emotion, smile, noise } = data.faceAttributes;
  let index_age = 0;
  let index_gender = 0;
  let index_glasses = 0;
  let index_emotion = 0;
  let index_smile = 0;
  let index_noise = 0;

  if (age < 18) index_age = 0;
  else if (age < 40) index_age = 1;
  else index_age = 2;

  if (gender != 'male') index_gender = 1;

  if (glasses == "NoGlasses") index_glasses = 1;

  let mostEmotion = 0;
  let mostkey = 'anger';
  Object.keys(emotion).forEach(key => {
    if (emotion[key] > mostEmotion) mostkey = key
  });

  if (smile != 1) index_smile = 1;

  if (mostkey == 'anger' || mostkey == 'sadness' || mostkey == 'disgust' || mostkey == 'fear')
    index_emotion = 1;
  else if (mostkey == 'happiness' || mostkey == 'neutral' || mostkey == 'contempt')
    index_emotion = 0
  else index_emotion = 2

  if (noise.value > 0.5) index_noise = 1;
  else index_noise = 0;

  let resultAnalysic = [].concat(result.age[index_age], result.gender[index_gender], result.glasses[index_glasses],
    result.emotion[index_emotion], result.noise[index_noise], result.smile[index_smile]);
  return {
    string: resultAnalysic.join(" OR "),
    array: resultAnalysic
  }
}

const result = {
  age: [
    ['play', 'study'],
    ['work', 'tourist'],
    ['politic', 'healthy']
  ],
  gender: [
    ['gym', 'sport', 'economic'],
    ['makeup', 'cooking']
  ],
  glasses: [
    ['glasses', 'book'],
    ['outside']
  ],
  emotion: [
    ['play', 'chill', 'relax'],// glad
    ['angry', 'book', 'religion'],//sadness
    ['trend'] //surprise
  ],
  smile: [
    ['happy'],
    []
  ],
  noise: [
    ['normal'],
    ['stars']
  ]
}

function mapResult(age, gender, glasses, emotion, noise) {

}