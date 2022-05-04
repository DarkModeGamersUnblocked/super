const gamecontainer = document.getElementById("gamescontainer");

fetch("./scripts/books.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        var count = Object.keys(data);
        count.sort(function(a, b) {
            var nameA = a.toUpperCase(); // ignore upper and lowercase
            var nameB = b.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
        for (let i = 0; i < count.length; i++) {
            obj = count[i];
            //a
            const amain = document.createElement("a");
            amain.href = "./books.html?notebook=" + obj;
            amain.target = "_self";
            amain.className = "game";
            // div
            const diva = document.createElement("div");
            diva.className = "gamecontent";
            // img
            const imgdiv = document.createElement("img");
            imgdiv.loading = "lazy";
            imgdiv.src = data[obj].image;
            imgdiv.alt = data[obj];
            
            //p
            const pdiv = document.createElement("p");
            pdiv.textContent = data[obj].display_name;


            gamecontainer.appendChild(amain);
            amain.appendChild(diva);
            diva.appendChild(imgdiv);
            diva.appendChild(pdiv);
            gamecontainer.appendChild(amain);
        }
    });