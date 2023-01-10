import { blobToBase64 } from "./base64Convertor";

let mediaRecorder;
let videoBase64;
let recordedChunks = [];
let stream;
let audioStream;

export const startRecording = async () => {
  try {
    stream = await recordScreen();
    audioStream = await recordAudio();
    let combine = new MediaStream([
      ...stream.getTracks(),
      ...audioStream.getTracks(),
    ]);
    let mimeType = { mimeType: "video/webm;codecs=vp8" };
    mediaRecorder = createRecorder(combine, mimeType);
    return stream;
  } catch (err) {
    console.log("Unable to acquire screen capture: " + err);
  }
};

export const stopRecoding = async () => {
  const blob = new Blob(recordedChunks, {
    type: "video/webm;codecs=vp8",
  });
  var tracks = [...stream.getTracks()];
  for (var i = 0; i < tracks.length; i++) tracks[i].stop();
  var audioTracks = [...audioStream.getTracks()];
  for (var i = 0; i < audioTracks.length; i++) audioTracks[i].stop();
  var byte_size = blob.size;
  videoBase64 = await blobToBase64(blob);
  recordedChunks = [];
  const name = localStorage.getItem("User-firstname") + Date.now();
  return {
    filename: name,
    attachmentBase: videoBase64,
    type: "video",
    byte_size: byte_size,
  };
};

const recordScreen = async () => {
  return await navigator.mediaDevices.getDisplayMedia({
    video: {
      mediaSource: "screen",
    },
    audio: true,
  });
};

const recordAudio = async () => {
  return await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });
};

const createRecorder = (stream, mimeType) => {
  const mediaRecorder = new MediaRecorder(stream, mimeType);
  mediaRecorder.ondataavailable = function (e) {
    if (e.data.size > 0) {
      recordedChunks.push(e.data);
    }
  };
  mediaRecorder.start(200);
  return mediaRecorder;
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const takeScreenshot = async () => {
  try {
    let mediaStream = await navigator.mediaDevices.getDisplayMedia({
      video: { mediaSource: "screen" },
    });
    let track = mediaStream.getVideoTracks()[0];
    const name = localStorage.getItem("User-firstname") + Date.now();
    await sleep(500);
    const capture = await new ImageCapture(track);
    const bitmap = await capture.grabFrame();
    const canvas = document.createElement("canvas");
    canvas.getContext("bitmaprenderer").transferFromImageBitmap(bitmap);
    const blob = await new Promise((res) => canvas.toBlob(res));
    const baseImg = await blobToBase64(blob);
    return {
      filename: name,
      attachmentBase: baseImg,
      type: "image",
    };
  } catch (err) {
    return {
      error: true,
    };
  }
};


export const streamUserCam = async () => {
  return await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "user" },
  });
};
