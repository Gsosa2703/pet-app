// GoogleSignInButton.tsx
import React, { useEffect } from 'react';
import { Button, Alert } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId: 'AIzaSyDzZHTDbu2e_C6Lb_snYH9TTH4DsjBOIK8', // From Firebase Console settings
  offlineAccess: true,
});

const GoogleSignInButton: React.FC = () => {

  const signInWithGoogle = async () => {
    try {
      // Initiate Google Sign-In process
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const user = userInfo;
      // Create a Firebase credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(user.data?.idToken || null);
      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
      Alert.alert('Success', 'Google sign-in successful!');
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Cancelled', 'Google sign-in cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('In Progress', 'Google sign-in is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Error', 'Google Play Services not available or outdated');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  return <Button title="Sign In with Google" onPress={signInWithGoogle} />;
};

export default GoogleSignInButton;
