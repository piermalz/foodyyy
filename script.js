jQuery(document).ready(function($) {
  "use strict";
  $('#slider').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 7000,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }

        
  });
});

const navbar = document.getElementById("main-navbar")

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbar-after-scroll")
  } else {
    navbar.classList.remove("navbar-after-scroll")
  }
})

// document.addEventListener('alpine:init' , () => {
//   Alpine.data('product' , () => ({

//     items: [
//       { id: 1, name: 'Rose Muffen' , Img: 'romain-briaux-G7eI_KNp7iw-unsplash.jpg' , price: '12'},
//       { id: 2, name: 'Salads Special' , Img: 'hermes-rivera-OzBLe_Eg1mg-unsplash.jpg' , price: '10'},
//       { id: 3, name: 'Egg Muffen' , Img: 'ella-olsson-KPDbRyFOTnE-unsplash.jpg' , price: '14'},
//       { id: 4, name: 'Salads' , Img: 'louis.jpg' , price: '15'},
//       { id: 5, name: 'Egg Masala' , Img: 'sebastian-coman-photography-Co-T6odt0es-unsplash.jpg' , price: '13'},
//       { id: 6, name: 'Vegie Muffen' , Img: 'charlesdeluvio-wr8Ze_O-sjI-unsplash.jpg' , price: '11'},
//     ],

//   }));
// });