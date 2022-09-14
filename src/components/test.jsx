import React from "react";
import html2canvas from 'html2canvas';

const TestCapture = (...props) => {
    const onCapture = () => {
        console.log('캡쳐함');
        html2canvas(document.getElementById('div')).then(canvas=>
            //onSaveAs(canvas.toDataURL('image/png')), 'image-download.png'
            drawImg(canvas.toDataURL('image/png'))
        );
    };
    // const onSaveAs = (url, filename) => {
    //     console.log('저장함');
    //     var link = document.createElement('a');
    //     document.body.appendChild(link);
    //     link.href = url;
    //     link.download = filename;
    //     link.click();
    //     document.body.removeChild(link);
    // };

    function drawImg(imgData) {
        return new Promise(function reslove() {        
            //내가 결과 값을 그릴 canvas 부분 설정       
            var canvas = document.getElementById('canvas');        
            var ctx = canvas.getContext('2d');        
            //canvas의 뿌려진 부분 초기화        
            ctx.clearRect(0, 0, canvas.width, canvas.height);        
            var imageObj = new Image();        
            imageObj.onload = function () {            
                ctx.drawImage(imageObj, 0, 0);            
                //canvas img를 그림      
            };        
                imageObj.src = imgData;        
                //그릴 image데이터를 넣어줌 
            }, function reject() { }
        )
    }

    return (
        <>
            {/* <button onClick={onCapture}>click</button> */}
            <canvas onClick={onCapture} id="canvas" style={{width:"100vw", height:"100vh"}}></canvas>
        </>
    );
}

export default TestCapture;