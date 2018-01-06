# 从视频中提取音频

利用ffmpeg从视频中提取音频，常使用方法有二种：

- 使用node模块fluent-ffmpeg，然后再setFfmpegPath('./ffmpegg/bin/ffmpeg.exe')，缺点是fluent-ffmpeg提供的回调方法还不完全，例如没有直接设置采样率的方法（非audioBitrate）

- node中开个子进程，执行转换命令，代码如下：

``` javascript
ffmpegCmd(inputFilePath) {
    let parseObj = path.parse(inputFilePath),
        outFilePath = path.join(parseObj.dir, `./${parseObj.name}.wav`);
        
        // 待优化：转换和上传是否可以一气呵成
        //       转换8K、16K可选
        //       转换进度显示
        //       转换loading提示
        //       子进程内存释放，优化
        //       怎样判断/知道是否转换完毕
        //       界面优化
        //       ffmpeg优化
        //       outFilePath是否合理
    let sd = spawn(
        path.join(sdPath, 'ffmpeg.exe'),
        ['-y', '-i', inputFilePath, '-ar', 8000, '-ac', 1, outFilePath],
        {
            cwd: sdPath
        }
    );
    console.log(sd, 222);
    sd.on("close", function() {
        console.log("close~~~")
    });
}
```