"use strict";

// importing function of alert
// import alertMessage from "./functions.js";

// formdata
let formdata = new FormData();

// array for global (object { name, value(boolean) })
let globals = [];

let avatar = document.getElementById("image");

let textarea = document.getElementById("textarea");

// getting form from dom
let form = document.getElementById("form");

// getting all globe icons to toggle their classes
let globes = document.getElementsByClassName("fa-globe");

// getting datas from all inputs
let datas = [...document.getElementsByClassName("data")];
console.log(datas)

datas = datas.filter((e) => e.disabled !== true);

// alert
let upperAlert = document.querySelector(".alert");

// creating globals array with objects (default) -> need to connect with DB
for (let i = 0; i < globes.length; i++) {
  globals.push({ name: globes[i].id, value: false });
  globals[i].name = globals[i].name.replace(/\s/g, "");
}

// dynamically changing classes of globes
for (let i = 0; i < globes.length; i++) {
  for (let i = 0; i < globals.length; i++) {
    if (globals[i].value == false) {
      globes[i].classList.add("inactive");
    } else {
    }
  }
}

// toggling class of globe and adding them to globals
for (let x = 0; x < globes.length; x++) {
  globes[x].addEventListener("click", (e) => {
    let element = e.target.id;
    let id = document.getElementById(element);
    id.classList.toggle("inactive");
    globals[x].value ^= 1;
  });
}

// changing image with validation of size
avatar.addEventListener("change", function (event) {
  let newImage = event.target.files[0];
  // validation of file size => max 2mb
  if (newImage.size > 2000000) {
    alertMessage(upperAlert, "error", "Image cannot be more than 2mb");
  } else {
    //sending file
    // some code

    // getting old image
    let oldImage = document.getElementById("output");
    // setting new image
    oldImage.src = URL.createObjectURL(event.target.files[0]);
  }
});


// preventing refreshing and submiting of form and sending them somewhere (send only need datas)
/* form.addEventListener("submit", (event) => {
  event.preventDefault();
  // creating variable to fill it and send it to backend
  let inputs = {};
  for (let i = 0; i < datas.length; i++) {
    datas[i].name = datas[i].name.trim();
    if (
      datas[i].value == "" ||
      datas[i].value == null ||
      datas[i].value == undefined
    ) {
    } else {
      inputs[datas[i].name] = {
        value: datas[i].value.trim(),
        isGlobal: globals[i] && globals[i].value || 0,
      };
    }
  }
  let formData = new FormData(this);
  formdata.append("datas", inputs);
  $.ajax({
      url : 'profile/myProfile',
      method : 'post',
      processData: false,
      contentType: false,
      data: formData,
      success : function(data){
        alert('saved');
      },
      error : function(data){

      }
  })
  console.log(inputs)

  // sending formdata to backend
  // if you want to see what do i send => console.log(inputs)
//   async function sendData() {
//     let response = await fetch("/path/to/somewhere", {
//       method: "POST",
//       body: formdata,
//     });
//     // test
//     let result = await response.json();
//     console.log(result);
//   }

//   sendData();
}); */
// var formData = new FormData($('#form')[0]);
// formData.getAll('profile');
// formData.values()

$('#form').on('submit',(function(e) {
  e.preventDefault();
  let inputs = {};
  for (let i = 0; i < datas.length; i++) {
    datas[i].name = datas[i].name.trim();
    if (
      datas[i].value == "" ||
      datas[i].value == null ||
      datas[i].value == undefined
    ) {
    } else {
      inputs[datas[i].name] = {
        isGlobal: globals[i] && globals[i].value || 0,
      };
    }
  }
  //formdata.append("datas", inputs);
  console.log(inputs)
  var formData = new FormData(this);
  formData.append('inputs',JSON.stringify(inputs));
  formData.append('oldImage',$('#output').attr('data-image'));
  //formData.append('datas',inputs);
  $.ajax({
  type: 'post',
  url: 'profile/myProfile',
  contentType : false,
  processData : false,
  data: formData,
  success: function(result){     
    location.reload();
  },
  error: function(error){
    console.log(error,'myProfile error boldy');
  }
  });

}));


const countryInput = document.getElementsByName('country')[0]
const timeInput = document.getElementsByName('time')[0]
const cityInput = document.getElementsByName('city')[0]

function getCountries() {
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then((data) => {
      for (let i = 0; i < data.length; i++) {
         timeInput.add(new Option(data[i].timezones + " " + data[i].name, data[i].timezones), undefined)
         countryInput.add(new Option(data[i].name, data[i].name), undefined);
      }
         const selectedCountry = document.querySelector('select[name="country"]');
         const selectedTimeZone = document.querySelector('select[name="time"]');
            

         for(let i in selectedCountry.children){
            if (selectedCountry.children[i].value === "Turkmenistan") {
               selectedCountry.children[i].selected = "true"
            }
         }

         for (let i in selectedTimeZone.children) {
            if (selectedTimeZone.children[i].innerText === "UTC+05:00 Turkmenistan") {
               selectedTimeZone.children[i].selected = "true"
            }
         }
   })

}

getCountries()
