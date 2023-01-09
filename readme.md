# recorder-capture

This React library help you to record screen with audio and take a screenshot of the webpage's screen.

## 🎁 Features

* Easy to use
* Compatible with both JavaScript and TypeScript
* To record the screen with audio
* Take a screenshot of the webpage's screen or part of the screen

## 🔧 Installation

```sh
npm i recorder-capture
```

## 🔰 Methods

<table>
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>startRecording()</td>
    <td>To start screen recording.</td>
  </tr>
  <tr>
    <td>stopRecording()</td>
    <td>To end screen recording and get base64 source.</td>
  </tr>
  <tr>
    <td>takeScreenshot()</td>
    <td>To capture the screenshot and get base64 source.</td>
  </tr>
</table>

## 💡 Usage

## To take the screenshot

**`capture`** method is used for taking the screenshot

```js
import { takeScreenshot } from "recorder-capture";

const handleScreenshot = () => {
  // in this variable you get the screenshot captured
  const screenshot = takeScreenshot();
};
<button onClick={() => handleScreenshot()}>Take ScreenShot</button>;
```

## To Record the screen

**`startRecording`** method is used for start the screen recording and **`startRecording`** method is used for stop the screen recording and it gives the video in base64 format.

```js
import { startRecording, stopRecording } from "recorder-capture";

const handleStopRecording = () => {
  // in this variable you get the screen recoding
  const recording = stopRecording();
};
<button onClick={() => startRecording()}>start recording</button>;
```
