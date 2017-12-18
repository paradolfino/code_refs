[GET]

'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchAlbums = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return fetch('http://rallycoding.herokuapp.com/api/music_albums');

                    case 2:
                        res = _context.sent;
                        _context.next = 5;
                        return res.json();

                    case 5:
                        json = _context.sent;
                        //assign json to response.json
                        console.log(json);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function fetchAlbums() {
        return _ref.apply(this, arguments);
    };
}(); //es5 async

function fetchAlbums() { //es6
    fetch('http://rallycoding.herokuapp.com/api/music_albums') //endpoint
        .then(res => res.json()) //return promise, when resolved, of response json
        .then(json => console.log(json)); //return promise, when resolved, of json and then log json
}

async function fetchAlbums() { //es8
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums'); //await response from api endpoint
    const json = await res.json(); //assign json to response.json
    console.log(json);
}

const fetchAlbums = async () => { //es8 arrow function
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums'); //await response from api endpoint
    const json = await res.json(); //assign json to response.json
    console.log(json);
}

$.ajax({ //jquery get
    type: "GET",
    url: url,
    data: data,
    success: success,
    dataType: dataType
  }); 

  $.get( "ajax/test.html", function( data ) { //jquery shorter get
    $( ".result" ).html( data );
    alert( "Load was performed." );
  });



[POST]

fetch('https://api.github.com/gists', {
    method: 'post',
    body: JSON.stringify(opts)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    ChromeSamples.log('Created Gist:', data.html_url);
  }); //es6 fetch post

  $.ajax({ //jquery POST
    type: "POST",
    url: url,
    data: data,
    success: success,
    dataType: dataType
  });

  $.post( "ajax/test.html", function( data ) {
    $( ".result" ).html( data );
  }); //jquery POST but shorter