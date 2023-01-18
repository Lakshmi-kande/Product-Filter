let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "130",
        image: "white-t-shirt.jpg",
      },
      {
        productName: "Beige Skirt",
        category: "Bottomwear",
        price: "149",
        image: "skirt.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "199",
        image: "sports-watch.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "99",
        image: "knitted-top.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "black-leather-jacket.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "99",
        image: "pink-trousers.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "brown-jacket.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "149",
        image: "comfy-gray-pant.jpg",
      },
      {
        productName: "Leather Watch",
        category: "Watch",
        price: "249",
        image: "leather-watch.jpg",
      },
      {
        productName: "Elegant Watch",
        category: "Watch",
        price: "399",
        image: "elegant-watch.jpg",
      },
      {
        productName: "Formal-Shirt",
        category: "Topwear",
        price: "259",
        image: "formal-shirt.jpg",
      },
      {
        productName: "Jeans",
        category: "Bottomwear",
        price: "299",
        image: "jeans.jpg",
      }
    ],
  };
  
  for (let item of products.data) {
   
    let card = document.createElement("div");
    
    card.classList.add("card", item.category, "hide");
    
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    let image = document.createElement("img");
    image.setAttribute("src", item.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    
    let container = document.createElement("div");
    container.classList.add("container");
    
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = item.productName.toUpperCase();
    container.appendChild(name);
   
    let price = document.createElement("h6");
    price.innerText = "$" + item.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  
  function filterProduct(value) {
    
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    
    let elements = document.querySelectorAll(".card");
    
    elements.forEach((element) => {
      
      if (value === "all") {
        element.classList.remove("hide");
      } else {
        
        if (element.classList.contains(value)) {
          
          element.classList.remove("hide");
        } else {
         
          element.classList.add("hide");
        }
      }
    });
  }
  
  
  document.getElementById("search").addEventListener("click", () => {
    
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    
    elements.forEach((element, index) => {
      
      if (element.innerText.includes(searchInput.toUpperCase())) {
      
        cards[index].classList.remove("hide");
      } else {
        
        cards[index].classList.add("hide");
      }
    });
  });
  
  
  window.onload = () => {
    filterProduct("all");
  };
