'use strict';

//Fech (ajax) y peticiones a servicios / apis rest
let posts = [];

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    listadoDePost(data);
})




function listadoDePost(posteos){
    posteos.forEach(ele => {
        let seccion = document.querySelector('section')
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let pId = document.createElement('p');
        let fragment = document.createDocumentFragment();
        h2.textContent = ele.title;
        p.textContent = ele.body;
        pId.textContent = ele.id;
        fragment.appendChild(h2);
        seccion.appendChild(fragment);
        fragment.appendChild(pId);
        seccion.appendChild(fragment);
        fragment.appendChild(p);
        seccion.appendChild(fragment);


        
        /** El innerHTML es mas inseguro, 
         * por eso mejor utilizar creacion de elementos
         * .innerHTML += 
         * `<h2>${ele.title}</h2>
         * <p>${ele.body}</p>`
         * 
         */
        
        
    });

    document.querySelector('span').style.display = 'none';
}