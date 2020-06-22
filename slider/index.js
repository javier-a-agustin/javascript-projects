const content = [
    // Info sacada de wikipedia
    {
        name : "Marte",
        content : "Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar. Marte es el planeta interior más alejado del Sol. Es un planeta telúrico con una atmósfera delgada de dióxido de carbono, y posee dos satélites pequeños y de forma irregular, Fobos y Deimos (hijos del dios griego), que podrían ser asteroides capturados similares al asteroide troyano Eureka",
        img : "data:image/jpeg;base64,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",
        
    },
    {
        name : "Titan",
        content : "Titán es el mayor de los satélites de Saturno y el segundo del sistema solar tras Ganimedes. Además el único satélite conocido que posee una atmósfera importante, y el único objeto, aparte de la Tierra, en el que se ha encontrado evidencia clara de cuerpos líquidos estables en la superficie",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Two_Halves_of_Titan.png/280px-Two_Halves_of_Titan.png"
    },
    {
        name : "Gliese 667 Cc",
        content : "Gliese 667 Cc es un exoplaneta supertierra descubierto el 21 de noviembre de 2011 por el espectrógrafo HARPS, y confirmada su existencia el 2 de febrero de 2012, que orbita la estrella Gliese 667 C, a una distancia de 23,6 años luz. Gliese 667 Cc se encuentra en un sistema estelar triple en la constelación del Escorpión, y el planeta es el segundo o tercero con respecto a la distancia de su estrella, en un sistema formado por al menos seis planetas.",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gliese_667.jpg/245px-Gliese_667.jpg"
    
    },
    {
        name : "Venus",
        content : "Venus es el segundo planeta del sistema solar en orden de distancia desde el Sol, el sexto en cuanto a tamaño, ordenados de mayor a menor. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor (gr. Afrodita). Se trata de un planeta de tipo rocoso y terrestre, llamado con frecuencia el planeta hermano de la Tierra, ya que ambos son similares en cuanto a tamaño, masa y composición, aunque totalmente diferentes en cuestiones térmicas y atmosféricas (la temperatura media de Venus es de 463,85 ºC)",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/280px-Venus-real_color.jpg"
    }

];

const anterior = document.querySelector(".anterior");
const siguiente = document.querySelector(".siguiente");
const title = document.querySelector(".title");
const text = document.querySelector(".text");
const img = document.querySelector("img");

var counter = 0;


function updateContent(item){
    title.textContent = item.name;
    text.textContent = item.content;
    img.src = item.img;
};

siguiente.addEventListener("click", function() {
    if (counter == 3){
        counter = 0;
    }else{
        counter++;
    };    
    const item = content[counter];
    updateContent(item);
});

anterior.addEventListener("click", function() {
    if (counter == 0){
        counter = 3;
    }else{
        counter--;
    };

    const item = content[counter];
    updateContent(item);
});