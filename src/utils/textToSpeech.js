<<<<<<< HEAD
export const convert = textToConvert => {
=======
const textToSpeech = textToConvert => {
>>>>>>> ch(refactor code)
  var audioCtx = new AudioContext();
  var source = audioCtx.createBufferSource();
  const options = {
    method: "GET",
    headers: {
      ["x-rapidapi-host"]: "voicerss-text-to-speech.p.rapidapi.com",
      ["x-rapidapi-key"]: "b97efcac5emshc17a3a4fdf8e160p1835c6jsn9557deebb035"
    }
  };
  const BASE_URL = "https://voicerss-text-to-speech.p.rapidapi.com/?r=0&c=mp3&f=8khz_8bit_mono"
  const URL = `${BASE_URL}&src=${textToConvert}&hl=en-us&key=a8512ad7a466442a91e327d383337413`;
  fetch(URL, options)
    .then(response => {
      const reader = response.body.getReader();
      return new ReadableStream({
        start(controller) {
          return pump();
          function pump() {
            return reader.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              controller.enqueue(value);
              return pump();
            });
          }
        }
      });
    })
    .then(stream => new Response(stream))
    .then(response => {
      return response.arrayBuffer();
    })
    .then(function(buffer) {
      audioCtx.decodeAudioData(buffer, function(decodedData) {
        source.buffer = decodedData;

        source.connect(audioCtx.destination);
      });
    })
    .catch(err => console.error(err));

  source.start(0);
};
export default textToSpeech;
