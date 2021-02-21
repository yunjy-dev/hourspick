import React, { Component } from "react";
import { BackHandler } from "react-native";
import { WebView } from "react-native-webview";

export default class HesticaPage extends Component {
  WEBVIEW_REF = React.createRef();

  state = {
    canGoBack: false,
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => {
    if (this.state.canGoBack) {
      this.WEBVIEW_REF.current.goBack();
      return true;
    }
  };

  onNavigationStateChange = (navState) => {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  };

  render() {
    return (
      <WebView
        source={{ uri: "https://hestica.com" }}
        ref={this.WEBVIEW_REF}
        // onNavigationStateChange={this.onNavigationStateChange}
        onNavigationStateChange={()=>{
            this.onNavigationStateChange; 
            console.log(this.onNavigationStateChange);
            }
        }
      />
    );
  }
}











// import React, { Component } from 'react';
// // import { BackHandler } from 'react-native';

// import {
//   BackHandler,
//   Platform,
//   WebView,
// } from 'react-native-webview';

// class HesticaPage extends Component {
//     constructor(props) {
//         super(props);
//         // this.WEBVIEW_REF = React.createRef();
//         this.webView = {
//             canGoBack: false,
//             ref: null,
//           }
//     }    
  
//     onAndroidBackPress = () => {
//       if (this.webView.canGoBack && this.webView.ref) {
//         this.webView.ref.goBack();
//         return true;
//       }
//       return false;
//     }
  
//     componentWillMount() {
//       if (Platform.Os === 'android') {
//         BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
//       }
//     }
  
//     // componentWillUnmount() {
//     //   if (Platform.OS === 'android') {
//     //     BackHandler.removeEventListener('hardwareBackPress');
//     //   }
//     // }
  
//     render() {
//       return (
//         <WebView
//           source={{ uri: "https://www.google.com" }}
//           ref={(webView) => { this.webView.ref = webView; }}
//           onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
//         />
//       );
//     }
//   }


  


// const WebPage = () => {
//     return (
//         <WebView
//             source={{ uri: "https://hestica.com" }}
//             style={{ 
//                 marginTop: 40,
//                 marginBottom: 0,
//             }}
//         />
//     );

// }

// export default HesticaPage;