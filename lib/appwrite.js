import { Account, Client, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.vsm.aora',
    projectId: '6691d6560008271af5c6',
    storageId: '6691d99900171148f1e5',
    databaseId: '6691d7c5001188ecc1be',
    userCollectionId: '6691d7de0014a1a86748',
    videoCollectionId: '6691d80000390546e68a',
  };


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;


const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}

