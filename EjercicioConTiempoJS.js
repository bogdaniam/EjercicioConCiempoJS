fetch(`https://api.github.com/emojis`)
    .then(res => res.json())
    .then(json => buscar(json))

function buscar(a) {

    for (let key in a) {

        let encontrado = false;
        let contador = 0;



        while ((contador != key.length) && (encontrado != true)) {


            if (key[contador] == "y") {
                var url = a[`${key}`];

                //Los consol.log son para comprobar mas facil 🤪
                console.log(key)
                console.log(url)

                var imagen = document.createElement("img");
                imagen.src = `${url}`;
                document.body.appendChild(imagen);
                encontrado = true;
            }
            contador++;
        }

    }




}