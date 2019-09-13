import firebase from 'firebase'
import * as ImageManipulator from 'expo-image-manipulator';
const storage = firebase.storage();
const uriToBlob = (uri) => {

  return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      // return the blob
      resolve(xhr.response);
    };

    xhr.onerror = function () {
      // something went wrong
      reject(new Error('uriToBlob failed'));
    };

    // this helps us get a blob
    xhr.responseType = 'blob';

    xhr.open('GET', uri, true);
    xhr.send(null);

  });
}
export function uploadFile(file) {
  return new Promise(async (res, rej) => {
    try {
      let resized = await resize(file.uri);
      let blobFile = await uriToBlob(resized.uri);
      let filename = Date.now() + '.jpg';
      const ref = storage.ref().child('images/' + filename);
      ref.put(blobFile, {
        contentType: 'image/jpeg'
      })
        .then(snapshot => {
          blobFile.close();
          snapshot.ref.getDownloadURL()
            .then(downloadURL => res(downloadURL))
            .catch(error => rej(error))
        })
        .catch(error => {
          blobFile.close();
          return rej(error);
        })
    } catch (error) {
      console.log(error)
    }

  })

}

const resize = (uri) => {
  return ImageManipulator.manipulateAsync(uri, [{ resize: { height: 500 } }])
}
