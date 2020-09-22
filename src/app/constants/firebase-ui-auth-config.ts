import { firebase } from 'firebaseui-angular';

export const firebaseUiAuthConfig: firebaseui.auth.Config = {
    signInOptions: [
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
            requireDisplayName: false,
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        },
    ],
    siteName: 'SchoolTimes',
};
