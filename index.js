const ffmpeg = require('fluent-ffmpeg');

const sourceUrl = './source/test.mp4',
    outputUrl = './output/test.wav';

let transform = new ffmpeg({
        source: sourceUrl
    })
    .setFfmpegPath('./ffmpegg/bin/ffmpeg.exe')
    .toFormat('wav')
    .audioBitrate('128k')
    .audioCodec('libmp3lame')// 文件会小，转换速度会慢
    .save(outputUrl)
    .on('progress', function (progress) {
        console.log('Processing: ' + Math.ceil(progress.percent) + '% done');
    })
    .on('end', function () {
        console.log('转码完成!');
    });