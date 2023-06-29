import React from 'react';
import './App.css';
import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.13.0/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');

const values = {
  meetingNumber : "88572960657",
  role : 0,
  signature : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJUejVHbTduX1N4T2RVbmprcFF5WDdnIiwibW4iOiI4ODU3Mjk2MDY1NyIsInJvbGUiOjAsImlhdCI6MTY4ODAyNjk1MiwiZXhwIjoxNjg4MDM0MTUyLCJhcHBLZXkiOiJUejVHbTduX1N4T2RVbmprcFF5WDdnIiwidG9rZW5FeHAiOjE2ODgwMzQxNTJ9.zwxZA0HpbcZiChroY4Yc2kQOzGnobMIgYydUzYFaKPM",
  ZOOM_MEETING_SDK_KEY : "Tz5Gm7n_SxOdUnjkpQyX7g",
  ZOOM_MEETING_SDK_SECRET:"0bc6484vs94H8SBSvEti2IZsuoIacFI5",
  password : "a6p7qn"
  
}
// TESTING
function App() {
  var sdkKey = values.ZOOM_MEETING_SDK_KEY
  var meetingNumber = values.meetingNumber;
  var passWord = values.password;
  var userName = "Testing"
  var userEmail = ''
  var registrantToken = ''
  var zakToken = ''
  var leaveUrl = 'http://localhost:3000'

  function getSignature(e) {
    e.preventDefault();
    startMeeting(values.signature);
  }

  function startMeeting(signature) {
    document.getElementById('zmmtg-root').style.display = 'block'

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success)

        ZoomMtg.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: meetingNumber,
          passWord: passWord,
          userName: userName,
          userEmail: userEmail,
          tk: registrantToken,
          zak: zakToken,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        })

      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  return (
    <div className="App">
      <main>
        <h1>Zoom Meeting SDK Sample React</h1>

        <button onClick={getSignature}>Join Meeting</button>
      </main>
    </div>
  );
}

export default App;
