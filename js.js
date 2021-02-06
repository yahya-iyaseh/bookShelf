const main = document.querySelector('.content');
const form = document.querySelector('.form');
const f = form.querySelector('form');
const btn = document.querySelector('button');
const add = document.querySelector('.add');
const formAdd = document.querySelector('#add');
const back = document.querySelector('#back');
let books =[];
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
      console.log(name, author, i);
      books.splice(i, 1);
      console.log(books);
      let up = JSON.stringify(books) ;
      localStorage.setItem('books', up);
      e.target.parentElement.remove();
   }
   

   }

  });
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

btn.addEventListener('click', e => {
 main.classList.add('d-none');
 add.classList.add('d-none');
 form.classList.remove('d-none');
 
});

form.addEventListener('submit', e =>{
  e.preventDefault();
 let name = f.name.value;
 let author = f.author.value; 
 let image = f.imglink.value;
 if(!image){
  image = 'img/default.jfif';
 }
  books.push( {
   title: name,
   author: author,
   image: image
 
});
while (main.firstChild) {
 main.removeChild(main.firstChild);
}
affFun(books);
let up = JSON.stringify(books) ;
localStorage.setItem('books', up);
f.reset();
 main.classList.remove('d-none');
 add.classList.remove('d-none');
 form.classList.add('d-none');
})

affFun(books);

back.addEventListener('click', e =>{
   f.reset();
 main.classList.remove('d-none');
 add.classList.remove('d-none');
 form.classList.add('d-none');
});


