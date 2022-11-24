// Define items
const imageFileInput = document.getElementById("imageFileInput");
const modelTextInput = document.getElementById("modelTextInput");
const counterTextInput = document.getElementById("counterTextInput");
const placeTextInput = document.getElementById("placeTextInput");
const priceTextInput = document.getElementById("priceTextInput");
const yearTextInput = document.getElementById("yearTextInput");
const canvas = document.getElementById("car_info");
const download = document.getElementById('save');

let image;

watermark = new Image();
snap_code = new Image();
payments = new Image();
counter = new Image();
place = new Image();
year = new Image();

watermark.src = "Images/watermark.png";
snap_code.src = "Images/snap.png";
payments.src = "Vectors/payments_FILL0_wght400_GRAD0_opsz48.svg";
counter.src = "Images/counter.png";
place.src = "Vectors/placeholder-svgrepo-com.svg";
year.src = "Images/year.png";


// change sensor for imageFileInput
imageFileInput.addEventListener("change", (e) => {

  const imagedataurl = URL.createObjectURL(imageFileInput.files[0]);

  image = new Image();
  image.src = imagedataurl;

  image.addEventListener("load", () => {
    updateCarInfoCanvas(canvas, image, modelTextInput.value, 
      counterTextInput.value, 
      placeTextInput.value,
      priceTextInput.value,
      yearTextInput.value)
  }, {once:true});
})

// change sensor for modelTextInput
modelTextInput.addEventListener("change", (e) => {
  
  updateCarInfoCanvas(canvas, image, modelTextInput.value, 
    counterTextInput.value, 
    placeTextInput.value,
    priceTextInput.value,
    yearTextInput.value)

})

// change sensor for counterTextInput
counterTextInput.addEventListener("change", (e) => {
  
  updateCarInfoCanvas(canvas, image, modelTextInput.value, 
    counterTextInput.value, 
    placeTextInput.value,
    priceTextInput.value,
    yearTextInput.value)

})

// change sensor for placeTextInput
placeTextInput.addEventListener("change", (e) => {
  
  updateCarInfoCanvas(canvas, image, modelTextInput.value, 
    counterTextInput.value, 
    placeTextInput.value,
    priceTextInput.value,
    yearTextInput.value)

})

// change sensor for priceTextInput
priceTextInput.addEventListener("change", (e) => {
  
  updateCarInfoCanvas(canvas, image, modelTextInput.value, 
    counterTextInput.value, 
    placeTextInput.value,
    priceTextInput.value,
    yearTextInput.value)
})

// change sensor for yearTextInput
yearTextInput.addEventListener("change", (e) => {
  
  updateCarInfoCanvas(canvas, image, modelTextInput.value, 
    counterTextInput.value, 
    placeTextInput.value,
    priceTextInput.value,
    yearTextInput.value)

})


function updateCarInfoCanvas(
canvas,
image,
modelText, 
counterText, 
placeText, 
priceText, 
yearText){

  // Define items
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const width2 = image.width;
  const height = image.height;
  const fontSizeCtx = Math.floor(width/15);
  const fontSizeMtx = Math.floor(width2/20);
  const svgWH = Math.floor(image.width/15);
  const watermarkheight = Math.floor(image.width/10);
  const watermarkwidth = Math.floor(watermarkheight*2.598473282);
  const snap_codeheight = Math.floor(image.width/11);
  const snap_codewidth = snap_codeheight;
  const yOffset = height/70;
  const xOffset = width/70;
  const mtx = canvas.getContext("2d");

  // Update canvas background
  canvas.width = width;
  canvas.height = height +(fontSizeCtx*1.25)+((fontSizeMtx*1.25)*2.25) ;
  ctx.drawImage(image, 0, 0);
  ctx.drawImage(watermark, image.width -(watermarkwidth), image.height -(watermarkheight), watermarkwidth, watermarkheight);
  ctx.drawImage(snap_code, 0, image.height/2 -(watermarkheight/2), snap_codeheight, snap_codewidth);
  ctx.drawImage(counter, width -svgWH, image.height +(fontSizeCtx*1.25), svgWH, svgWH);
  ctx.drawImage(payments, width -svgWH, image.height +(fontSizeCtx*1.25)+((fontSizeCtx*1.0)*1), svgWH, svgWH);
  ctx.drawImage(place, width/2 -svgWH, image.height +(fontSizeCtx*1.25), svgWH, svgWH);
  ctx.drawImage(year, width/2 -svgWH, image.height +(fontSizeCtx*1.25)+((fontSizeCtx*1.0)*1), svgWH, svgWH);


  // Prepare text ctx
  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSizeCtx / 4);
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSizeCtx}px serif`;

  // Add model text
  ctx.textBaseline = "bottom";
  ctx.fillText(modelText, width / 2, image.height +fontSizeCtx*1.25 );

  // Prepare text mtx
  mtx.strokeStyle = "black";
  mtx.lineWidth = Math.floor(fontSizeMtx / 4);
  mtx.fillStyle = "black";
  mtx.textAlign = "right";
  mtx.lineJoin = "round";
  mtx.font = `${fontSizeMtx}px serif`;
  mtx.content = `counter(item, arabic-indic)`;
  const fillTextW = width-(svgWH*1.1)
  const fillTextW2 = width/2-(svgWH*1.1);

  // Add counter text
  mtx.textBaseline = "bottom";
  mtx.fillText(counterText+' كلم', fillTextW, image.height +(fontSizeCtx*1.25)+(fontSizeMtx*1.25));

  // Add place text
  mtx.textBaseline = "bottom";
  mtx.fillText(placeText, fillTextW2, image.height +(fontSizeCtx*1.25)+(fontSizeMtx*1.25));

  // Add price text
  mtx.textBaseline = "bottom";
  mtx.fillText(priceText+' ر.س', fillTextW, image.height +(fontSizeCtx*1.25)+((fontSizeMtx*1.25)*2));
  
  // Add year text
  mtx.textBaseline = "bottom";
  mtx.fillText(yearText, fillTextW2, image.height +(fontSizeCtx*1.25)+((fontSizeMtx*1.25)*2));

}

download.addEventListener('click', function(e) {
  console.log(canvas.toDataURL());
  const link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});