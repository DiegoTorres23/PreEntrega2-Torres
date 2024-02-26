const renderCarrito=()=>{
    const peces= obtenerCarritoLS()
    let contenido="";
      contenido =`<table class=" m-2">
      <tbody class="">;`
    for (const produ of peces){
    
    contenido+=`<tr class="text-white pCard">
            <td><img src="${produ.imagen}" class="img-fluid ms-5" alt="${produ.Nombre}" width="110" height="auto"></td>
            <td class="pt-3"> <b>${produ.Nombre}</b> </td>
            <td class="pt-3"><b>Precio:$</b> ${produ.precio} </td>
            <td class="pt-2"><button onclick="eliminarProductoCarrito(${produ.id})"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg></button></td>
        </tr>`
    }
    contenido+=`<tr class="text-white">
                    <td class="text-center py-5" colspan="2"><b> Total a Pagar:</b></td>
                    <td class=><b>$${montoPagar()}</b> </td>
                    <td>&nbsp;</td>
                </tr>
            </tbody>
        </table>`;
    document.getElementById("productosCarrito").innerHTML=contenido;
}
renderCarrito()