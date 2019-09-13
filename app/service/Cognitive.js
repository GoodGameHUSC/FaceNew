import Cognitive from '../config/cognitive';
import axios from 'axios';
export function progressImage(imageUrl) {
  return new Promise((res, rej) => {
    try {
      const url = Cognitive.baseUrl;
      const subscriptionKey = Cognitive.api_key
      const config = {
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'Content-Type': 'application/json'
        },
        params: {
          returnFaceId: true,
          returnFaceLandmarks: false,
          returnFaceAttributes: 'age,gender,smile,glasses,emotion,hair,makeup,noise'
        },
        url: url,
        method: 'post',
        data: {
          "url": imageUrl
        }
      }
      axios(config)
        .then(response => {
          if (response.data[0] == []) rej(new Error("Can find result"));
          res(response.data[0]);
        })
        .catch((e) => {
          rej(e);
        })
    } catch (error) {
      console.log(error)
    }

  })
}