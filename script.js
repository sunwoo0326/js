var req = new XMLHttpRequest();
req.open("GET","image_list.json");
req.onreadystatechange = function( ) {
    console.log(this.response);
    }
}
req.send( );    