import React, { useCallback} from "react";
import {Wrap, VideoFile, TestCapture} from './styles/ContainerStyles';
// import MadeVideo from './../videos/test001.mp4';
import MadeVideo from './../videos/눈나.mp4';
// import MadeVideo from './../videos/test002.MOV';
// import TestCapture from './test';
import html2canvas from 'html2canvas';

const BlackBackground = () => {
    const TimeAndStyle = useCallback(()=>{
        function drawImg(imgData) {
            return new Promise( () => {
                var canvas = document.getElementById('canvas');
                var ctx = canvas.getContext('2d');

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                var imageObj = new Image();

                imageObj.onload = function () {          
                    ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
                };
                imageObj.src = imgData;
            });
        }

        setTimeout( ()=>{
            html2canvas(document.getElementById('div'))
            .then(blah => drawImg(blah.toDataURL('image/png', 1.0)));
        
            const player = document.getElementById("div");
            player.muted = false;
        }, 4000);

        setTimeout( function(imgData){
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            var imageObj = new Image();

            imageObj.onload = function () {          
                ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
            };
            imageObj.src = imgData;
        }, 8000);
    }, []);

    return (
        <Wrap onClick={TimeAndStyle}>
            <TestCapture>
                <canvas id="canvas" class="canvas" style={{width:"100vw", height:"100vh"}}></canvas>
            </TestCapture>
            <VideoFile> 
                <video id="div" autoPlay muted loop width="100%">
                    <source src={MadeVideo} type="video/mp4"></source>
                </video>
            </VideoFile>
        </Wrap>
        
    );
};

export default BlackBackground;