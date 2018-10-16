'use strict';

module.exports = registro;

function registro(req, res) {
    let random = {
        "id": Math.floor(100000 + Math.random() * 900000),
        "name": Math.floor(100000 + Math.random() * 900000)+','+Math.floor(100000 + Math.random() * 900000)+','+Math.floor(100000 + Math.random() * 900000),
        "gps": {
            "_id": "gtm-pet-m"+Math.floor(100000 + Math.random() * 900000),
            "|location": Math.floor(100000 + Math.random() * 900000),
            "|doctype": "code:"+Math.floor(100000 + Math.random() * 900000),
            "type": Math.floor(100000 + Math.random() * 900000),
            "#from": "pos:0."+Math.floor(100000 + Math.random() * 900000),
            "#to": "abc"+Math.floor(100000 + Math.random() * 900000),
            "system": {
                "_id": Math.floor(100000 + Math.random() * 900000000),
                "community": Math.floor(100000 + Math.random() * 900000000)
            }
        }
    }
    res.json(random);
}
