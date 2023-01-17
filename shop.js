let Name, img, price;
let produs = [
  {
    id: 0,
    Name: "Pomegranate",
    img: "./5-pomegranate-png-image-thumb.png",
    price: "$46",
    like: 1,
    likeflag: false,
  },
  {
    id: 1,
    Name: "Orange",
    img: "./5-2-fruit-free-png-image-thumb.png",
    price: "$56",
    like: 2,
    likeflag: true,
  },
  {
    id: 2,
    Name: "Strawberry",
    img: "./1-strawberry-png-images-thumb.png",
    price: " $54",
    like: 3,
    likeflag: false,
  },
];
let shop = document.getElementById("shop");
produs.forEach((item, index) => {
  shop.innerHTML += `
  <div class="col-lg-4">
  <div class="fruit" data-id="${item.id}" >
  <img style="width: 50%" src="${item.img}" />
  
<p id="name">${item.Name}</p>
<p class="price">${item.price}</p>
<p class="heart ${item.likeflag ? "red" : ""}">
  <span>${item.like}</span>\&#9829</p></br>
  <button class="Buy">Add to Card</button>
</div>
</div>`;
});

let heart = document.getElementsByClassName("heart");

Array.from(heart).forEach((item, index) => {
  item.addEventListener("click", function () {
    let count = Number(item.querySelector("span").innerHTML);
    let span = item.querySelector("span");
    let id = item.parentElement.dataset.id;

    produs.forEach((item2, index) => {
      console.log(item2.like);
      if (item2.id == id) {
        if (item2.likeflag) {
          count--;
          item2.likeflag = false;
          span.innerHTML = count;
          item.classList.remove("red");
        } else if (item2.likeflag == false) {
          count++;
          item2.likeflag = true;
          span.innerHTML = count;
          item.classList.add("red");
          // }
        }
      }
    });
  });
});

let list = document.getElementById("list");
let buy = document.querySelectorAll(".Buy");
let cards = [];
Array.from(buy).forEach((value2, index) => {
  value2.addEventListener("click", function () {
    let id = value2.parentElement.dataset.id;
    produs.forEach((value, index) => {
      if (id == value.id) {
        let card = {
          id: value.id,
          Name: value.Name,
          img: value.img,
          price: value.price,
          count: 1,
          flag: false,
        };

        cards.push(card);

        // console.log(cards);

        list.innerHTML = "";
        cards.forEach((val, index) => {
          list.innerHTML += `
          <div  class="rowshop col-lg-12" data-id="${val.id}">
          <img style="width: 10%" src="${val.img}" />
            <p>${val.Name}</p>
            <p>${val.price}</p>
            <p id="p">Quantity (<span class="count">${val.count}</span>)</p>
        <div>
              <button class="decrease">-</button>
              <button class="add">+</button>
              <button class="remove">Remove item</button>
        </div><br></div>
          `;
        });
        let decrease = document.getElementsByClassName("decrease");
        let additem = document.getElementsByClassName("add");
        let count = document.getElementsByClassName("count");
        
          console.log(span);
          Array.from(additem).forEach((val2, index) => {
            // console.log(val2.parentElement.parentElement.dataset.id);
            val2.addEventListener("click", function () {
              produs.forEach((vall, index) => {
                // console.log(vall.id);
                if (vall.id == val2.parentElement.parentElement.dataset.id) x++;
                console.log(x);
                vall.dataset.count = x;
                vall.innerHTML = vall.dataset.count;
              });
            });
          });
          Array.from(decrease).forEach((vall3, index) => {
            vall3.addEventListener("click", function () {
              let x = vall.dataset.count;
              if (x > 0) x--;
              console.log(x);
              vall.dataset.count = x;
              vall.innerHTML = vall.dataset.count;
            });
            // });
          });
        });
      }
    });
  });
});
// });
// });
