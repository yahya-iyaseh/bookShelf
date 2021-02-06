
const main = document.querySelector('.content');
const form = document.querySelector('.form');
const f = form.querySelector('form');
const btn = document.querySelector('button');
const add = document.querySelector('.add');
const formAdd = document.querySelector('#add');
const back = document.querySelector('#back');
let books =[];
// cehck if we have books array in local Storage or Not 
if(localStorage.getItem('books') ) {
  books = JSON.parse(localStorage.getItem('books') );
}else{
  books = [
  {
     title: "Anna Karenina",
     author: "Leo Tolstoy",
     image: "img/book1.jpg"
  },
  {
     title: "Madame Bovary",
     author: "Gustave Flaubert",
     image: "img/book2.jpg"
  },
  {
     title: "War and Peace",
     author: "Leo Tolstoy",
     image: "img/book3.jpg"
  },
  {
     title: "The Great Gatsby",
     author: "F. Scott Fitzgerald",
     image: "img/book4.jpg"
  },
  {
     title: "Lolita",
     author: "Vladimir Nabokov",
     image: "img/book5.jpg"
  },
  {
     title: "Middlemarch",
     author: "Georage Eliot",
     image: "img/book6.jpg"
  },
  {
     title: "The Adventures of Huckleberry Finn",
     author: "Mark Twain",
     image: "img/book7.jpg"
  },
  {
     title: "The Stories of Anton Chekhov",
     author: "Anton Chekhov",
     image: "img/book8.jpg"
  },
  {
     title: "In Search of Lost Time",
     author: "Marcel Proust",
     image: "img/book9.jpg"
  },
  {
     title: "Hamelt",
     author: "William Shakespeare",
     image: "img/book10.jpg"
  }
 ];
}

main.addEventListener('click', e =>{
   if(e.target.classList.contains('delete')){
   let div =  e.target.parentElement.querySelectorAll('h3');
   let name = div[0].textContent;
   let author = div[1].textContent;
   let i = -1;
   books.forEach((e, index)=>{
      if(e.title === name && e.author === author){
         i= index;
      }
   });

   if(i !== -1){
      // console.log(name, author, i); for test 
      books.splice(i, 1);
      // console.log(books); for test 
      let up = JSON.stringify(books) ;
      localStorage.setItem('books', up);
      e.target.parentElement.remove();
   } else{
      e.target.parentElement.remove();
   }
   }
  });
// cal the array and push his info in the main div as a templates
const affFun = e =>{
 e.forEach(e => {

  let img = e.image;
  let author = e.author;
  let name = e.title;
   
  let html = `  
      <div class="gallery">
         <img src="${img}" width="150px" class="imges" >
         <div class="desc">
           <h3>${name}</h3>
           <br>
           <h3>${author}</h3>
          </div>
          <i class="far fa-trash-alt delete"></i>
      </div>`;
      // another template 
//   let html = `<div class="book">
//               <img src="${img}" width="150px" >
//               <h3>${name}</h3>
//               <br>
//               <h3>${author}</h3>
//               <i class="far fa-trash-alt delete"></i>
//              </div>`;
 
   main.innerHTML +=(html); 
 });
};

// to hide mian div and show the form in the screen when we click in the button in main screen 
btn.addEventListener('click', e => {
 main.classList.add('d-none');
 add.classList.add('d-none');
 form.classList.remove('d-none');
});

// to add the book info to the main div from Add form 
form.addEventListener('submit', e =>{
   // to keep us in the same page when we submit
  e.preventDefault();
  // get the value from the add form
 let name = f.name.value;
 let author = f.author.value; 
 let image = f.imglink.value;
 // check if the user add img url or not if not we will add a default img
 if(!image){
  image = 'img/default.jfif';
 }
 // add the value from add form to books array 
  books.push( {
   title: name,
   author: author,
   image: image
});
// delete all divs in the main div
while (main.firstChild) {
 main.removeChild(main.firstChild);
}
// call affFun Responsible for set books array to local Storage 
affFun(books);
let up = JSON.stringify(books) ;
localStorage.setItem('books', up);
// reset add form for inputs value
f.reset();
// hide the add form and show the main div whem submit the form 
 main.classList.remove('d-none');
 add.classList.remove('d-none');
 form.classList.add('d-none');
})

// put the info for books when we loading page 
affFun(books);

// // hide the add form and show the main div when click back btn 
back.addEventListener('click', e =>{
   f.reset();
 main.classList.remove('d-none');
 add.classList.remove('d-none');
 form.classList.add('d-none');
});



