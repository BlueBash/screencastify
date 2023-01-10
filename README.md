# screencastify

Using this library, you can record a screen with audio, stream a user cam, and take a screenshot of a webpage.

## 🎁 Features

- Easy to use
- Compatible with both JavaScript and TypeScript
- Record the screen with audio
- Stream the user cam
- Take a screenshot of the webpage's screen or part of the screen

## 🔧 Installation

```sh
npm i screencastify
```

## 🔰 Methods

<table>
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>startRecording()</td>
    <td>To start screen recording and get screen stream object.</td>
  </tr>
  <tr>
    <td>stopRecording()</td>
    <td>To end screen recording and get base64 source.</td>
  </tr>
  <tr>
    <td>takeScreenshot()</td>
    <td>To capture the screenshot and get base64 source.</td>
  </tr>
  <tr>
    <td>streamUserCam()</td>
    <td>To stream user cam and get the stream object</td>
  </tr>
</table>

## 💡 Usage

## 1) To take the screenshot

**`takeScreenshot()`** method is used for taking the screenshot

```js
import { takeScreenshot } from "screencastify";

const handleScreenshot = () => {
  const screenshot = takeScreenshot();
  // in this variable you get the screenshot captured
};
<button onClick={() => handleScreenshot()}>Take ScreenShot</button>;
```

## 2) To Record the screen

**`startRecording`** method is used for start the screen recording and **`startRecording`** method is used for stop the screen recording and it gives the video in base64 format.

```js
import { startRecording, stopRecording } from "screencastify";

const handleStopRecording = () => {
  const recording = stopRecording();
  // in this variable you get the screen recoding
};
<button onClick={() => startRecording()}>start recording</button>;
```

## 3) To Stream user camera

**`streamUserCam()`** method is used for stream the user cam

```js
import React, { useEffect, useRef } from "react";
import { streamUserCam } from "recorder-capture";

const UserCam = () => {
  let videoRef = useRef(null);

  const getUserVideo = async () => {
    const stream = await streamUserCam();
    //in this variable you get the stream object
    let video = videoRef.current;
    video.srcObject = stream;
    video.play();
  };

  useEffect(() => {
    getUserVideo();
  }, [videoRef]);

  return (
    <div>
      {/* In this video tag you get the the stream of user cam */}
      <video ref={videoRef}></video>
    </div>
  );
};

export default UserCam;
```

## 🤝Contributing

Feel free to submit a PR on [github](https://github.com/BlueBash/screencastify/) if you found a bug or if you want to enhance it further.

Thanks!. Happy Recording!
