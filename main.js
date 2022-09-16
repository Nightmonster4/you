function StartB(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/ST5v_vCbe/model.json", modelloaded);
}

function modelloaded(){
    classifier.classify(resultlelo);
}

var dog = 0;
var cat = 0;
var cow = 0;
var tiger = 0;

function resultlelo(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        r_n_r = Math.floor(Math.random() * 255) + 1;
        r_n_g = Math.floor(Math.random() * 255) + 1;
        r_n_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("sound_playing").innerHTML = 'Detected the voice of - ' + results[0].label;
        document.getElementById("accuracy").innerHTML = 'Detected dog - '+dog+ 'Detected Cat - '+cat;
        document.getElementById("sound_playing").style.color = "rgb("+r_n_r+","+r_n_g+","+r_n_r+")";
        document.getElementById("accuracy").style.color = "rgb("+r_n_r+","+r_n_g+","+r_n_r+")";

        img = document.getElementById('animal_image');

        if (results[0].label == "Barking"){
            img.src = "dog.jpg";
            dog = dog+1;
        }

        else if (results[0].label == "Meowing"){
            img.src = "Cat.jpg";
            cat = cat+1;
        }

        else if (results[0].label == "Mooing"){
            img.src = "Cow.jpg";
            cow = cow+1;
        }

        else if (results[0].label == "Roaring"){
            img.src = "Tiger.jpg";
            tiger = tiger+1;
        }

        else{
            img.src = "anime_ear.jpg";
        }
    }
}