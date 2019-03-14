var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://sdirectdb:sdirectdb@192.168.0.5:27017/sdirectdb');

var product = [new Product({
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMj6UqvyejplBwT_jKP0lo2D2nlO_UezP0OlMpmZz-OuwpxpieA',
    title:'Antique - CupBoard',
    description:'Material - Wooden',
    price: 21
}),
new Product({
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrykobgP0W0VqcbWfXNDXWCng7b1gOrvM7Sd_mZCqzIdJm-FAA',
    title:'Antique - Telephone',
    description:'Material - Brass',
    price: 24
}),
new Product({
    imagePath: 'https://i.ebayimg.com/00/s/NTAwWDUwMA==/z/Q5wAAOxy7nNTVh2z/$_35.JPG?set_id=2',
    title:'Antique - Glass Bottle',
    description:'Matrial - Glass',
    price: 20
}),
new Product({
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OeenAvxn_VwxSO4U2bx0CTCACTooBJFQe_M8-WQKblFtwAHNcw',
    title:'Antique - Clocks',
    description:'Material - Metal',
    price: 40
}),
new Product({
    imagePath: 'https://static1.squarespace.com/static/555fa358e4b0de9ddd413f39/5956a93dbf629ab1b6caeafd/5c2d06f54d7a9c2ebb17c39b/1548036831728/French-Bronze-Hippolyte-Francois-Moreau-full-1-720_10.10-253-f.jpg?format=300w',
    title:'Antique - Art',
    description:'Materail - Stone',
    price: 12
}),new Product({
    imagePath: 'http://initiation.histoiredelart.info/sites/default/files/public/styles/grid_4__mobile/public/image/achilles_killing_penthesilea.jpg?itok=ZSWpn2JR',
    title:'Antique - Vase',
    description:'Materail - Metal',
    price: 18
})
];

Product.collection.insert(product, function (err, docs) {
    if (err){ 
        return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
    }
  });
  
