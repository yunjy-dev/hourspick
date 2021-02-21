import React from 'react';

import { WebView } from 'react-native-webview';

const WebPage = () => {
    return (
        <WebView
            source={{ uri: "https://hestica.com" }}
            style={{ 
                marginTop: 40,
                marginBottom: 0,
            }}
        />
    );

}

export default WebPage;