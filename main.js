//https://teachablemachine.withgoogle.com/models/ERwqQIOfN/

    Webcam.set({
     width:350,
     height:300,
     imgae_format : 'png',
     png_quality:90
    });

    camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_objec_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ERwqQIOfN/model.json', modelLoaded);
