const ffmpeg = require('fluent-ffmpeg');

const proc = ffmpeg('/home/ricardo/Documentos/Faculdade/CITI/Desenvolvimento/AVANTIA/image2video/src/assets/viturianoArmario.png')
  .loop(5)
  .fps(24)
  .on('end', function() {
    console.log('File has been converted succesfully');
  })
  .on('error', function(err) {
    console.log(`This error happened => ${err.message}`);
  })
  .save('/home/ricardo/Documentos/Faculdade/CITI/Desenvolvimento/AVANTIA/image2video/src/assets/videoTest.mp4');


module.exports = proc;
