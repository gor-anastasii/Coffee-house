function insertDataFromXML() {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "filter.xml", false)
    xhr.send()
  
    let xmlData = xhr.responseXML
    let cards = xmlData.getElementsByTagName("card")
  
    let template = `
        <div class="card-img"></div>
        <div class="card-info">
          <h3 id="header"></h3>
          <p id="text"></p>
          <span id="price"></span>
        </div>
    `

    let container = document.querySelector(".filter-container")
  
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i]
  
      let id = card.getAttribute("id")
      let num = card.getAttribute("num")
      let header = card.getElementsByTagName("header")[0].textContent
      let text = card.getElementsByTagName("text")[0].textContent
      let price = card.getElementsByTagName("price")[0].textContent
      let image = card.getElementsByTagName("image")[0].textContent
  
      let cardElement = document.createElement("div")
      cardElement.classList.add('card')
      cardElement.innerHTML = template
      cardElement.getElementsByClassName("card-img")[0].style.backgroundImage = `url(${image})`
      cardElement.getElementsByClassName("card-info")[0].querySelector("#header").textContent = header
      cardElement.getElementsByClassName("card-info")[0].querySelector("#text").textContent = text
      cardElement.getElementsByClassName("card-info")[0].querySelector("#price").textContent = price

      cardElement.classList.add(id);
      cardElement.classList.add(num)
      if(id == 'dessert' || id === 'tea'){
        cardElement.classList.add('hide')
      }
  
      container.appendChild(cardElement)
    }
  }
  
  insertDataFromXML()