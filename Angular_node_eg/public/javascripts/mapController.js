angular.module('angularjs_with_Nodejs').controller('mapController', function ($scope, $timeout, $filter, $http) {
    var CSS_COLOR_NAMES = ["BlueViolet", "Darkorange", "DeepPink", "Cyan", "Gold", "LawnGreen", "DarkKhaki", "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "Brown",
        "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "DarkBlue", "DarkCyan", "DarkGoldenRod",
        "DarkGray", "DarkGrey", "DarkGreen", "DarkMagenta", "DarkOliveGreen", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
        "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick",
        "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink",
        "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
    var colours = {
        "cyan": "00ffff",
        "aliceblue": "f0f8ff",
        "forestgreen": "228b22",
        "magenta": "ff00ff",
        "darkorange": "ff8c00",
        "violet": "ee82ee",
        "darkkhaki": "bdb76b",
        "deeppink": "ff1493",
        "azure": "f0ffff",
        "beige": "f5f5dc",
        "bisque": "ffe4c4",
        "blanchedalmond": "ffebcd",
        "blue": "0000ff",
        "blueviolet": "8a2be2",
        "burlywood": "deb887",
        "cadetblue": "5f9ea0",
        "chartreuse": "7fff00",
        "chocolate": "d2691e",
        "coral": "ff7f50",
        "cornflowerblue": "6495ed",
        "cornsilk": "fff8dc",
        "crimson": "dc143c",
        "aqua": "00ffff",
        "darkblue": "00008b",
        "darkcyan": "008b8b",
        "darkgoldenrod": "b8860b",
        "darkgray": "a9a9a9",
        "darkgreen": "006400",
        "aquamarine": "7fffd4",
        "darkmagenta": "8b008b",
        "darkolivegreen": "556b2f",
        "darkorchid": "9932cc",
        "darkred": "8b0000",
        "darksalmon": "e9967a",
        "darkseagreen": "8fbc8f",
        "darkslateblue": "483d8b",
        "darkslategray": "2f4f4f",
        "darkturquoise": "00ced1",
        "darkviolet": "9400d3",
        "deepskyblue": "00bfff",
        "dimgray": "696969",
        "dodgerblue": "1e90ff",
        "firebrick": "b22222",
        "floralwhite": "fffaf0",
        "fuchsia": "ff00ff",
        "gainsboro": "dcdcdc",
        "ghostwhite": "f8f8ff",
        "gold": "ffd700",
        "goldenrod": "daa520",
        "gray": "808080",
        "green": "008000",
        "greenyellow": "adff2f",
        "honeydew": "f0fff0",
        "hotpink": "ff69b4",
        "indianred ": "cd5c5c",
        "indigo": "4b0082",
        "ivory": "fffff0",
        "khaki": "f0e68c",
        "lavender": "e6e6fa",
        "lavenderblush": "fff0f5",
        "lawngreen": "7cfc00",
        "lemonchiffon": "fffacd",
        "lightblue": "add8e6",
        "lightcoral": "f08080",
        "lightcyan": "e0ffff",
        "lightgoldenrodyellow": "fafad2",
        "lightgrey": "d3d3d3",
        "lightgreen": "90ee90",
        "lightpink": "ffb6c1",
        "lightsalmon": "ffa07a",
        "lightseagreen": "20b2aa",
        "lightskyblue": "87cefa",
        "lightslategray": "778899",
        "lightsteelblue": "b0c4de",
        "lightyellow": "ffffe0",
        "lime": "00ff00",
        "limegreen": "32cd32",
        "linen": "faf0e6",
        "maroon": "800000",
        "mediumaquamarine": "66cdaa",
        "mediumblue": "0000cd",
        "mediumorchid": "ba55d3",
        "mediumpurple": "9370d8",
        "mediumseagreen": "3cb371",
        "mediumslateblue": "7b68ee",
        "mediumspringgreen": "00fa9a",
        "mediumturquoise": "48d1cc",
        "mediumvioletred": "c71585",
        "midnightblue": "191970",
        "mintcream": "f5fffa",
        "mistyrose": "ffe4e1",
        "moccasin": "ffe4b5",
        "navajowhite": "ffdead",
        "navy": "000080",
        "oldlace": "fdf5e6",
        "olive": "808000",
        "olivedrab": "6b8e23",
        "orange": "ffa500",
        "orangered": "ff4500",
        "orchid": "da70d6",
        "palegoldenrod": "eee8aa",
        "palegreen": "98fb98",
        "paleturquoise": "afeeee",
        "palevioletred": "d87093",
        "papayawhip": "ffefd5",
        "peachpuff": "ffdab9",
        "peru": "cd853f",
        "pink": "ffc0cb",
        "plum": "dda0dd",
        "powderblue": "b0e0e6",
        "purple": "800080",
        "rebeccapurple": "663399",
        "red": "ff0000",
        "rosybrown": "bc8f8f",
        "royalblue": "4169e1",
        "saddlebrown": "8b4513",
        "salmon": "fa8072",
        "sandybrown": "f4a460",
        "seagreen": "2e8b57",
        "seashell": "fff5ee",
        "sienna": "a0522d",
        "silver": "c0c0c0",
        "skyblue": "87ceeb",
        "slateblue": "6a5acd",
        "slategray": "708090",
        "snow": "fffafa",
        "springgreen": "00ff7f",
        "steelblue": "4682b4",
        "tan": "d2b48c",
        "teal": "008080",
        "thistle": "d8bfd8",
        "tomato": "ff6347",
        "turquoise": "40e0d0",
        "wheat": "f5deb3",
        "white": "ffffff",
        "whitesmoke": "f5f5f5",
        "yellow": "ffff00",
        "yellowgreen": "9acd32",
        "antiquewhite": "faebd7",
        "black": "000000"
    };

    $scope.locationGodrej = {
        "from": null,
        "to": null
    };


    var apiKey = 'AIzaSyDVR5iaxk4V2f3OqyyhwUrZdWvE7L7n8Uo';
    var drawingManager;
    var placeIdArray = [];
    var polylines = [];
    var snappedCoordinates = [];

    $scope.geo = {};
    $scope.geo.addressesToGetGeolocations = "";
    $scope.geo.geolocatedAddresses = [];


    $scope.routeSearch = {
        'searchRouteBy': "",
        "showRoute": "",
        "routeTitle": "",
        "riderName": "",
        "showDirectionPanel": false,
        "showSearchRouteCombo": false
    };
    $scope.routeSearchKeywords = "";
    $scope.routeSearchKeywords1 = "qubix";
    $scope.searchRouteBy = "";
    $scope.showNavigationSaveConfirmation = false;


    $scope.routeSelected = {};
    $scope.routeSelected.routeWaypoints = [];
    $scope.routeSelected.selectedrouteWaypoints = [];
    $scope.selectedrouteWaypoints = [];

    $scope.statesData = {
        'selectedStates': [],
        'selectedZipcodes': [],
        'selectedTalukas': [],
        'selectedDistricts': [],
        'states': [],
        'talukas': [],
        'districts': [],
        'zipCodes': []
    };
    $scope.addresses = [
        {"lat": 22.4846, "lng": 88.13232, status: "0"}//,
//        {"lat":23.11254, "lng":85.61646},
//        {"lat":23.858459,"lng":84.356532},
//        {"lat":23.4846, "lng":88.13232}
    ];

    $scope.zipCodesToShow = [
        {"zipCode": ""}
    ];


    $scope.wayPoints = [
        {'origin': {}, 'destination': {}}
    ];

    $scope.wayPointsNav = [
        {
            'origin': {}, 'destination': {},
            'originName': {}, 'destinationName': {}
        }
    ];

    $scope.wayPointsPOI = [
        {
            'location': {},
            'locationName': {},
            'POI':""
        }
    ];

    $scope.zipCodesData = null;
    var geoCodes = {};

    $scope.title = "Dashboard";
    $scope.logoFileName = "images/VLCC.png";
    $scope.showPersonAnalysis = false;
    var map;
    var myLatLng, arrMarkers = [], arrUserMarkers = [], arrInfowindows = [], arrInfowindowsAssetTrackingMarkers = [];
    var trafficLayer;
    $scope.filter = {
        "filterFields": [],
        "filterCategories": [],
        "selectedCategory": "",
        "categoryData": []
    };

    $scope.IsVisible = false;
    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }
    $scope.divHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = false;
    }
    $scope.whichOverlayToShow = "filter1";
//    $scope.filterFields = [];
//    $scope.filterCategories = [];"
//    $scope.categoryData = [];
    var wareHouses, selectedCategory, objMarkersFilterQuery = {};
    var arrdirectionsDisplay = [];
    var arrPolylines = [];
    var arrdirectionsService = [];//= new google.maps.DirectionsService();
    var flgShowAllMarkers = true;
    $scope.showDialog = false;
    var arrLatLongTruck = [];
    var arrLatLongBike = [];

    var k = 0;

    function setMapStyle(styleType) {
        var stylez = [];
        switch (styleType) {
            case 'default':
                stylez = [];
                break;
            case 'businessGeography':
                stylez
                    = [
                    {
                        featureType: "all",
                        elementType: "all",
                        stylers: [
                            {
                                color: "#ffffff"} // <-- THIS
                        ]
                    },

                    {
                        "featureType": "administrative.country",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#d1c6c6"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#d1c6c6"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#b8cad2"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ];
                break;


        }
        var mapType = new google.maps.StyledMapType(stylez, { name: "Grayscale" });
        map.mapTypes.set('applyThisStyle', mapType);
        map.setMapTypeId('applyThisStyle');
    }

    /**
     * To initaliza the map
     */
    $scope.initMap = function () {
        myLatLng = new google.maps.LatLng(18.580085, -73.738125);

        // Empty content string
        var tableContent = '';
        directionsDisplay = new google.maps.DirectionsRenderer();

        var mapOpts = {
            center: myLatLng,
            zoom: 5,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'applyThisStyle']
            }
        };
        map = new google.maps.Map(document.getElementById('mymap'), mapOpts);

        trafficLayer = new google.maps.TrafficLayer();

        directionsDisplay.setMap(map);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(pos);
            }, function () {
//            handleLocationError(true, infoWindow, map.getCenter());
                map.setCenter(new google.maps.LatLng(28.7041, 77.1025));
            });
        }

//
        google.maps.event.addListener(map, 'click', function (event) {
            if ($scope.whichOverlayToShow == 'zipCodes') {
                var polygon = $scope.zipCodesData[0].geometry.coordinates;
                isPointInPoly([ event.latLng.lat(), event.latLng.lng() ], polygon); // true
            }
            if ($scope.whichOverlayToShow == 'filter1') {
                flgShowAllMarkers = false;
                $scope.placeMarkesrs(null);
                for (i = 0; i < arrUserMarkers.length; i++) {
                    arrUserMarkers[i].setMap(null);
                }
                arrUserMarkers = [];
                var latitude = event.latLng.lat();
                var longitude = event.latLng.lng();
                console.log(latitude + ', ' + longitude);
                var pinImage = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/009900/");

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(parseFloat(latitude), parseFloat(longitude)),
                    icon: pinImage,
                    map: map
                });
                arrUserMarkers.push(marker);
                arrMarkers.push(marker);
                objMarkersFilterQuery = {};
                $scope.placeNearestLocations(latitude, longitude);
            }
        });

        // Enables the polyline drawing control. Click on the map to start drawing a
        // polyline. Each click will add a new vertice. Double-click to stop drawing.
//        drawingManager = new google.maps.drawing.DrawingManager({
//            drawingMode: google.maps.drawing.OverlayType.POLYLINE,
//            drawingControl: true,
//            drawingControlOptions: {
//                position: google.maps.ControlPosition.TOP_CENTER,
//                drawingModes: [
//                    google.maps.drawing.OverlayType.POLYLINE
//                ]
//            },
//            polylineOptions: {
//                strokeColor: '#696969',
//                strokeWeight: 2
//            }
//        });
//        drawingManager.setMap(map);

        // Snap-to-road when the polyline is completed.
//        drawingManager.addListener('polylinecomplete', function(poly) {
//            var path = poly.getPath();
//            polylines.push(poly);
//            placeIdArray = [];
//            runSnapToRoad(path);
//        });


        // NOTE: This uses cross-domain XHR, and may not work on older browsers.
//        map.data.loadGeoJson('mapdata/districtCensus/uttarakhand_district.json');
//                'https://storage.googleapis.com/mapsdevsite/json/google.json');


//        map.data.loadGeoJson('images/gj.geojson.json');
//        map.data.loadGeoJson('images/ka.geojson.json');

//        map.data.setStyle({
////            fillColor: 'green',
//            strokeWeight: 1
//        });
        $scope.getTemplates();
    };

    /**
     * To get all templates of metadata to be shown on map or to use in filter
     */
    $scope.getTemplates = function () {
        $scope.calulateMapDistancebyArrayLatLng();
        flgShowAllMarkers = true;
        // jQuery AJAX call for JSON
        $.getJSON('/templates', function (data) {
            $scope.filter.filterCategories = data;
            $scope.$apply();
            console.log($scope.filter.filterCategories);
            $scope.showMarkersforAllCategories();
        });


        // parse a pbf file from disk in Node
//        var pbf = new Pbf(fs.readFileSync('data.pbf'));
//        pbf.readFields(function (tag) {
//            if (tag === 1) pbf.readVarint();
//            else if (tag === 2) pbf.readString();
//            else var numbers = pbf.readPackedVarint();
//        })

//        var parser = new OSMParser();
//
//        parser.on('node', function(data) {
//            console.log(data);
//        });
//
//        parser.on('way', function(data) {
//            console.log(data);
//        });
//
//        parser.on('relation', function(data) {
//            console.log(data);
//        });
//
//        parser.on('error', function(err) {
//            console.error(err);
//        });
//
//        parser.on('end', function(err) {
//            console.log('done!');
//        });
//
//        parser.filterNode = function(node, callback) {
//            if (node.tags['place']) callback(null, node);
//            else callback(null, null);
//        }
//
//        parser.filterWay = function(way, callback) {
//            callback(null, null);
//        }
//
//        parser.filterRelation = function(relation, callback) {
//            if (node.tags['water']) callback(null, node);
//            else callback(null, null);
//        }
//
//        parser.parse('/images/pbf/india-latest.osm (1).pbf');
    };

    /**
     * Show all markers on load or on All category select
     */
    $scope.showMarkersforAllCategories = function () {
        $scope.placeMarkesrs(null);
        flgShowAllMarkers = true;
        for (i = 0; i < $scope.filter.filterCategories.length; i++) {
            $.getJSON('/getData', {"docType": $scope.filter.filterCategories[i]}, function (data) {
                $scope.placeMarkesrs(data);
            });
        }
    };
    /**
     * Place markers on map as per data given
     * @param data
     * @param isFilteredData
     * @param filterValue
     * @param filterKeyName
     */

    $scope.placeMarkesrs = function (data, isFilteredData, filterValue, filterKeyName) {
        if (flgShowAllMarkers == false) {
            for (i = 0; i < arrMarkers.length; i++) {
                arrMarkers[i].setMap(null);
            }
            arrMarkers = [];
            for (i = 0; i < arrInfowindows.length; i++) {
                arrInfowindows[i].close();
            }
            arrInfowindows = [];
            for (i = 0; i < arrInfowindowsAssetTrackingMarkers.length; i++) {
                arrInfowindowsAssetTrackingMarkers[i].close();
            }
            arrInfowindowsAssetTrackingMarkers = [];
            if (arrdirectionsDisplay != null) {
                for (i = 0; i < arrdirectionsDisplay.length; i++) {
                    arrdirectionsDisplay[i].setMap(null);
                    arrdirectionsDisplay[i] = null;
                }
                arrdirectionsDisplay = [];
            }

            if (map) {
                if (map.data) {
                    map.data.forEach(function (feature) {
                        // If you want, check here for some constraints.
                        map.data.remove(feature);
                    });
                }
            }
        }
        if (data != null) {
            var markerImage = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
            $.each(data, function (index, item) {
                myLatLng = new google.maps.LatLng(parseFloat(this.latitude ? this.latitude : this.Latitude), parseFloat(this.longitude ? this.longitude : this.Longitude));
                var infoWindowContent = "";
                markerImage = 'http://maps.google.com/mapfiles/ms/icons/' + (this.markerColor ? this.markerColor : 'red') + '-dot.png';

                if (this.docType == 'WareHouses' || this.docType == 'Warehouses') {
                    infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h1 id="firstHeading" class="firstHeading">' + this['Warehouse Code'] + '</h1>' +
                        '<div id="bodyContent" class="infowindow_warehouse">' +
                        '<big> <p >' +
                        '<label>Manager Name - ' + this['Manager Name'] + '</label> <br>' +
                        '<label>City -  ' + this['City'] + '</label> <br>' +
                        '<label>State -  ' + this['State'] + '</label> <br>' +
                        '<label>Capacity Utilization - ' + this['Capacity Utilization'] + '</label> <br>' +
                        '<label>Area (SQ FT) - ' + this['Area'] + '</label> <br>' +
                        '</p></big>' +
                        '</div>' +
                        '</div>'
                } else if (this.docType == 'Plants') {
                    infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h1 id="firstHeading" class="firstHeading">' + this['Plant'] + '</h1>' +
                        '<div id="bodyContent" class="infowindow_warehouse">' +
                        '<big> <p>' +
                        '<label>FY 15-16 MT - ' + this['FY15-16MT'] + '</label> <br>' +
                        '<label>Type  - ' + this['Type'] + '</label> <br>' +
                        '<label>State -  ' + this['State'] + '</label> <br>' +
                        '</p></big>' +
                        '</div>' +
                        '</div>'
                } else if (this.docType == 'Competitors') {
                    infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h1 id="firstHeading" class="firstHeading">' + this['Name'] + '</h1>' +
                        '<div id="bodyContent" class="infowindow_warehouse">' +
                        '<big> <p >' +
                        '<label>State -  ' + this['State'] + '</label> <br>' +
                        '<label>Net Profit - ' + this['Net Profit'] + '</label> <br>' +
                        '<label>Total Assets - ' + this['Total Assets'] + '</label> <br>' +
                        '</p></big>' +
                        '</div>' +
                        '</div>'
                } else if (this.docType == 'Dealers') {
                    infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<img src=" images/' + this['Image Source'] + '"><h1 id="firstHeading" class="firstHeading">' + this['Dealer Name'] + '</h1>' +
                        '<div id="bodyContent" class="infowindow_warehouse">' +
                        '<big> <p>' +
                        '<label>Manager Name - ' + this['Manager Name'] + '</label> <br>' +
                        '<label>Sales Rep  - ' + this['Sales Rep First Name'] + ' ' + this['Sales Rep Last Name'] + '</label> <br>' +
                        '<label>Average Monthly Billing -  ' + this['Average Monthly Billing'] + ' ' + this['Sales Rep Last Name'] + '</label> <br>' +
                        '<label>City -  ' + this['City'] + '</label> <br>' +
                        '<label>State -  ' + this['State'] + '</label> <br>' +
                        '</p></big>' +
                        '</div>' +
                        '</div>'
                } else if (this.docType == 'Top Perforrming Sales Executives') {
                    markerImage = this['Ranking'] >= 8 ? 'images/icon/user_red.png' : this['Ranking'] >= 5 ? 'images/icon/user_blue.png' : 'images/icon/user_green.png';
//                    console.log(this['Latitude']+','+this['Longitude']);
                    infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<img src=" images/' + this['Images1'] + '"><h2 id="firstHeading" class="firstHeading">' + this['First Name'] + ' ' + this['Last Name'] + '</h2>' +
                        '<div id="bodyContent" class="infowindow_warehouse">' +
                        '<big> <p>' +
                        '<label>City - ' + this['City'] + ', ' +
                        'State  - ' + this['State'] + '</label> <br>' +
                        '<label>Last location -  ' + this['Lastlocation'] + '</label> <br>' +
                        '<label>Battery -  ' + this['Battery'] + '</label> <br>' +
                        '</p></big>' +
                        '</div>' +
                        '</div>'
                } else if (this.docType == 'Distributors') {
                    infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h1 id="firstHeading" class="firstHeading">' + this['Manager Name'] + '</h1>' +
                        '</div>'
                } else if (this.docType == 'StoreLocations') {
                    infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h1 id="firstHeading" class="firstHeading">' + this['AgencyName'] + '</h1>' +
                        '<div id="bodyContent" class="infowindow_warehouse">' +
                        '<big> <p >' +
                        '<label>Store -  ' + this['Store'] + '</label> <br>' +
                        '<label>City -  ' + this['City'] + '</label> <br>' +
                        '<label>State -  ' + this['State'] + '</label> <br>' +
                        '<label>Sales Representative - ' + this['SalesRepFirstName'] + ' ' + this['SalesRepLastName'] + '</label> <br>' +
                        '<label>Average Monthly Billing (Rs. Crore) -  ' + this['AverageMonthlyBilling'] + '</label> <br>' +
                        '<label>Income Bands -  ' + this['IncomeBands'] + '</label> <br>' +
                        '<label>Gender Ratio - ' + this['GenderRatio'] + '</label> <br>' +
                        '</p></big>' +
                        '</div>' +
                        '</div>'
                } else {
                    infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h1 id="firstHeading" class="firstHeading">' + this['Manager Name'] + '</h1>' +
                        '<div id="bodyContent" class="infowindow_warehouse">' +
                        '<big> <p>' +

                        '</p></big>' +
                        '</div>' +
                        '</div>'
                }
                if (isFilteredData && filterValue.length > 0 && this.docType != 'Top Perforrming Sales Executives') {


                    var idx = filterValue.indexOf(this[filterKeyName]);
                    console.log(idx);

                    if (idx != -1) {
                        if (typeof colours[CSS_COLOR_NAMES[idx].toLowerCase()] != 'undefined')
                            markerImage = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|' + colours[CSS_COLOR_NAMES[idx].toLowerCase()] + '|0000FF'
                    }
                }
                var marker = new google.maps.Marker({
                    position: myLatLng, map: map,
                    icon: markerImage// 'http://maps.google.com/mapfiles/ms/icons/' + (this.markerColor?this.markerColor:'red') + '-dot.png'
                });
                marker.setMap(map);

                var infoWindow = new google.maps.InfoWindow({
                    content: this.markerContent ? this.markerContent : infoWindowContent
                });
                marker.addListener('click', function () {
                    for (i = 0; i < arrInfowindows.length; i++) {
                        arrInfowindows[i].close();
                    }
                    arrInfowindows = [];
                    infoWindow.open(map, marker);
                    arrInfowindows.push(infoWindow);
                });
                arrMarkers.push(marker);
            });
        }


//        marker = new google.maps.Marker({
//            position: myLatLng, map: map,
//            icon: 'http://maps.google.com/mapfiles/ms/icons/pink-pushpin.png'
//        });
//        marker.setMap(map);
//        marker = new google.maps.Marker({
//            position: myLatLng, map: map,
//            icon: 'http://maps.google.com/mapfiles/ms/icons/orange-pushpin.png'
//        });
//        marker.setMap(map);
    };

    /**
     * Load filter fields and its select options
     */
    $scope.loadFilter = function (selectedCategory) {
        flgShowAllMarkers = false;
        console.log($scope.filter.selectedCategory);
        if (selectedCategory == 'all' || selectedCategory == 'All') {
            $scope.filter.filterFields = [];
            $scope.showMarkersforAllCategories();
        }
        else {
            $.getJSON('/templatesFields', {'docType': selectedCategory}, function (data) {
                $scope.filter.filterFields = data[0].fields;
                console.log($scope.filterFields);
                console.log(selectedCategory);
                objMarkersFilterQuery = {};
                objMarkersFilterQuery['dbToSearchFor'] = 'metadata';// templateCategory;
                objMarkersFilterQuery['docType'] = selectedCategory;
                $scope.getData(selectedCategory);
            });
        }
    };

    $scope.getData = function (dbName) {
        if (dbName == 'all' || dbName == 'All') {
            $scope.filter.filterFields = [];
            $scope.showMarkersforAllCategories();
        }
        else {
            $.getJSON('/getData', {"docType": dbName}, function (data) {
                $scope.filter.categoryData = data;
//                $.each($scope.filter.filterFields, function (a, b) {
//                    var unique = $scope.filter.categoryData.filter((set => f => !set.has(f[b.key]) && set.add(f[b.key]))(new Set));
//                    console.log(unique);
//                });

                $scope.$apply();
                $scope.placeMarkesrs(data);
            });
        }
    };

    $scope.filterMarkerData = function (templateCategory, keyName, value) {
        flgShowAllMarkers = false;

        objMarkersFilterQuery['dbToSearchFor'] = 'metadata';// templateCategory;
        objMarkersFilterQuery['docType'] = templateCategory;

        delete objMarkersFilterQuery['$and'];
        delete objMarkersFilterQuery['Latitude1'];
        delete objMarkersFilterQuery['Latitude'];
        delete objMarkersFilterQuery['Longitude1'];
        delete objMarkersFilterQuery['Longitude'];
        var value1 = angular.copy(value);
        if (value == "" || value == undefined) {
            delete objMarkersFilterQuery[keyName];
            if (Object.keys(objMarkersFilterQuery).length > 2) {
                angular.forEach(Object.keys(objMarkersFilterQuery), function (item) {
                    if (["dbToSearchFor", "docType"].indexOf(item) == -1) {
                        keyName = item;
                        value = objMarkersFilterQuery[keyName]['$in'] ? objMarkersFilterQuery[keyName]['$in'] : objMarkersFilterQuery[keyName];
                    }
                });
            }
        }
        else {
            if (angular.isArray(value)) {

                for (var m = 0; m < value1.length; m++) {
                    value1[m] = value1[m].replace(/\n/g, '').trim()
                }
                objMarkersFilterQuery[keyName] = { '$in': value1};
            }
            else {
                objMarkersFilterQuery[keyName] = value;
            }
        }


        $.getJSON('/filter', objMarkersFilterQuery, function (data) {
            $scope.placeMarkesrs(data, true, value1, keyName);
            if (templateCategory == 'Top Perforrming Sales Executives') {
                $scope.top20 = 0;
                $scope.middle2080 = 0;
                $scope.bottom20 = 0;
//                markerImage = this['Ranking'] >= 8 ? 'images/icon/user_red.png' : this['Ranking'] >= 5 ? 'images/icon/user_blue.png' : 'images/icon/user_green.png';

                angular.forEach(data, function (item, index) {
                    if (item.Ranking < 5) {
                        $scope.top20++;
                    }
                    else if (item.Ranking >= 5 && item.Ranking < 8) {
                        $scope.middle2080++;
                    }
                    else {
                        $scope.bottom20++;
                    }
                });
                $scope.salesPersonData = data;
                $scope.$apply();

            }
        }, function () {
            $scope.placeMarkesrs(null);
        });

    };

    $scope.placeNearestLocations = function (latitude, longitude) {
        flgShowAllMarkers = true;
        objMarkersFilterQuery['dbToSearchFor'] = 'metadata';// templateCategory;
        if ($scope.filter.selectedCategory != "" && $scope.filter.selectedCategory != undefined) {
            objMarkersFilterQuery = {"docType": $scope.filter.selectedCategory,
                'Latitude': latitude,
                'Longitude': longitude,
                'Latitude1': latitude + 3,
                'Longitude1': longitude + 3};
//        objMarkersFilterQuery = {"docType":selectedCategory,
//            'query':"{'docType':" + selectedCategory + ",'$and' : [{'Latitude' :{'$gte':" + latitude + "}},{'Latitude' :{'$lte': " + (latitude +10) + "}}]}"};
        }
        else {
            objMarkersFilterQuery = {
                'Latitude': latitude,
                'Longitude': longitude,
                'Latitude1': latitude + 3,
                'Longitude1': longitude + 3};
        }
        $.getJSON('/getNearestData', objMarkersFilterQuery, function (data) {
            flgShowAllMarkers = true;
            $scope.placeMarkesrs(data);

            var assetOriginDestDetails = [];
            angular.forEach(data, function (item, index) {
                assetOriginDestDetails.push({"destination": {"Latitude": item.Latitude, "Longitude": item.Longitude}, "origin": {"Latitude": latitude, "Longitude": longitude}})
            });


            calcRoute(assetOriginDestDetails, true, false);
//            calcRoute(data, latitude, longitude, true, false);

        }, function () {
            $scope.placeMarkesrs(null);
        });
    };
    $scope.showFilters = function (filterName) {
        $scope.whichOverlayToShow = filterName;
        $scope.addresses = [
            {"lat": "", "lng": "", status: ""}
        ];
        $scope.wayPointsPOI = [
            {
                'location': {},
                'locationName': {},
                'POI':""
            }
        ];

        $scope.filter.selectedCategory = "All";
        $scope.showNavigationSaveConfirmation = false;
        map.setZoom(5);
        trafficLayer.setMap(null);
        map.setCenter(myLatLng);

        flgShowAllMarkers = false;
        $scope.placeMarkesrs(null);
//        setMapStyle('default');

        if (filterName == "filter1") {
            $scope.title = "Dashboard";
            $scope.showPersonAnalysis = false;
            flgShowAllMarkers = true;
            $scope.showMarkersforAllCategories();
        }
        else if (filterName == "salesPerson") {
            $scope.title = "Sales Tracking";
            // alert("hi all" + filterName);
            //$("#salerPersonPics").show();
            $scope.filter.selectedCategory = "Top Perforrming Sales Executives";
            $scope.showPersonAnalysis = false;
            flgShowAllMarkers = false;
            $scope.getData('Top Perforrming Sales Executives');
            $scope.placeMarkesrs();

        }
        else if (filterName == "navigation") {
            $scope.title = "Route Navigation";
            $scope.getRoutes();
        }
        else {
            if (filterName == "assetTracking") {
                $scope.title = "Asset Tracking";
                $scope.placeMarkesrs(null);
            }
            else if (filterName == "reports") {
                $scope.title = "Reports";
                $scope.placeMarkesrs(null);
            }
            else if (filterName == "wayPoints") {
                $scope.title = "Way Points";
                $scope.placeMarkesrs(null);
            }
            else if (filterName == "zipCodes") {
                $scope.title = "Business Geography";
                $scope.placeMarkesrs(null);
//                setMapStyle('businessGeography');
            }
            else if (filterName == "routeOptimization") {
                $scope.title = "Route Optimization";
            }
            else if (filterName == "navigation") {
                $scope.title = "Route Navigation";
            }
            else if (filterName == "geolocations") {
                $scope.title = "Geolocations";
            }
            flgShowAllMarkers = false;
            $scope.showPersonAnalysis = false;
            $scope.placeMarkesrs(null);
        }
        if (arrdirectionsDisplay != null) {
            for (i = 0; i < arrdirectionsDisplay.length; i++) {
                arrdirectionsDisplay[i].setMap(null);
                arrdirectionsDisplay[i] = null;
            }
            arrdirectionsDisplay = [];
        }
//        k = -1;
    };
    $scope.assetTracking = function () {
        flgShowAllMarkers = false;
        $scope.placeMarkesrs(null);


//        k = arrLatLongTruck.length - 1;
        k = 0;
        var assetOriginDestDetails = [
            {"destination": {"Latitude": 26.8467, "Longitude": 80.9462}, "origin": {"Latitude": 22.58608, "Longitude": 88.37402}, "markerContent": '<div id="content"  class="infowindow_warehouse">' + '<div id="siteNotice">' + '<h6 >Driver Name - Ankush Jain </h6><br>' + '<h7> Vehicle# -  MH 12 JX 1634 </h7><br>' + '<h7> Mobile# -  9673990425 </h7><br>' + '<h7> Goods Type -  Food Product </h7><br>' + '<h7> Speed -  40 km/h </h7><br>' + '<h7> Battery -  67% </h7><br>' + '</div>'},
            {"destination": {"Latitude": 21.1702, "Longitude": 72.8311}, "origin": {"Latitude": 21.1458, "Longitude": 79.0882}, "markerContent": '<div id="content"  class="infowindow_warehouse">' + '<div id="siteNotice">' + '<h6 >Driver Name - Akhilesh Aggarwal </h6><br>' + '<h7> Vehicle# -  MH 12 BQ 5454 </h7><br>' + '<h7> Mobile# -  8551089000 </h7><br>' + '<h7> Goods Type -  Electronics Items </h7><br>' + '<h7> Speed -  50 km/h </h7><br>' + '<h7> Battery -  43% </h7><br>' + '</div>'},
            {"destination": {"Latitude": 24.5854, "Longitude": 73.7125}, "origin": {"Latitude": 28.7041, "Longitude": 77.1025}, "markerContent": '<div id="content"  class="infowindow_warehouse">' + '<div id="siteNotice">' + '<h6 >Driver Name - Abhishek Jha </h6><br>' + '<h7> Vehicle# -  DL 2C AS 2935 </h7><br>' + '<h7> Mobile# -  7838757968 </h7><br>' + '<h7> Goods Type -  Cement </h7><br>' + '<h7> Speed -  30 km/h </h7><br>' + '<h7> Battery -  87% </h7><br>' + '</div>'},
            {"destination": {"Latitude": 24.5854, "Longitude": 74.7125}, "origin": {"Latitude": 26.7041, "Longitude": 80.1025}, "markerContent": '<div id="content"  class="infowindow_warehouse">' + '<div id="siteNotice">' + '<h6 >Driver Name - Akash Joshi </h6><br>' + '<h7> Vehicle# -  DL 2C AS 2935 </h7><br>' + '<h7> Mobile# -  7838757968 </h7><br>' + '<h7> Goods Type -  Furniture </h7><br>' + '<h7> Speed -  65 km/h </h7><br>' + '<h7> Battery -  10% </h7><br>' + '</div>'}
        ];
        calcRoute(assetOriginDestDetails, false, true);


    };

    function godrejLocations() {
        //        Show different markers . 3 red + 3 green
//        user will click any 2 to get From and To locations, show route, distnace, time taken
        var redLocations = [
            {"lat": 17.893305, "lng": 73.995474, "address": "Satara,Maharashtra"},
            {"lat": 13.375257, "lng": 77.568529, "address": "Bangalore Rural, Karnataka"},
            {"lat": 15.309332, "lng": 75.237023, "address": "Dharwad, Karnataka"},
            {"lat": 9.943584, "lng": 76.388548, "address": "Ernakulam,Kerala"}
//            {"lat": 26.8467, "lng": 80.9462, "address":""}
        ];
        var greenLocations = [
            {"lat": 12.043287, "lng": 79.011515, "address": "Villupuram,Tamil Nadu"},
            {"lat": 17.438795, "lng": 75.073924, "address": "Solapur,Maharashtra"},
            {"lat": 13.967824, "lng": 78.320157, "address": "Anantapuram,Andhra Pradesh"},
            {"lat": 9.491820, "lng": 77.670352, "address": "Virudhunagar,Tamil Nadu"}
//            {"lat": 26.8467, "lng": 80.9462, "address":""},
//            {"lat": 26.8467, "lng": 80.9462, "address":""}
        ];
        var markerRed;
        for (var l = 0; l < greenLocations.length; l++) {
            var locationLatLngRed = new google.maps.LatLng(parseFloat(redLocations[l].lat), parseFloat(redLocations[l].lng));
            var FromTo = l % 2 == 0 ? "From" : "To";
            markerRed = new google.maps.Marker({
                position: locationLatLngRed, map: map,
                icon: 'images/icon/redMarker.png'
            });
            markerRed.setMap(map);


            markerRed.addListener('click', function (e, locationLatLngRed) {
                var m = this;
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'latLng': this.position }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            var infoWindowRed = new google.maps.InfoWindow({
                                content: results[1].formatted_address
                            });
//                            for (var i = 0; i < arrInfowindows.length; i++) {
//                                arrInfowindows[i].close();
//                            }
//                            arrInfowindows = [];
                            infoWindowRed.open(map, m);
//                            arrInfowindows.push(infoWindowRed);
                        }
                    }
                });
                if ($scope.locationGodrej.from == null && $scope.locationGodrej.to == null)
                    $scope.locationGodrej.from = new google.maps.LatLng(parseFloat(this.position.lat()), parseFloat(this.position.lng()));
                else if ($scope.locationGodrej.from != null && $scope.locationGodrej.to != null) {
                    $scope.locationGodrej.from = new google.maps.LatLng(parseFloat(this.position.lat()), parseFloat(this.position.lng()));
                    $scope.locationGodrej.to = null;
                }
                else {
                    $scope.locationGodrej.to = new google.maps.LatLng(parseFloat(this.position.lat()), parseFloat(this.position.lng()));
                    var start = $scope.locationGodrej.from;
                    var end = $scope.locationGodrej.to;
                    var infowindow2 = new google.maps.InfoWindow();
                    var request = {
                        origin: start,
                        destination: end,
                        travelMode: google.maps.TravelMode.DRIVING
                    };
                    var directionsService1 = new google.maps.DirectionsService();

                    directionsService1.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            var directionsDisplay1 = new google.maps.DirectionsRenderer(
                                {
                                    suppressMarkers: true
                                }
                            );
                            directionsDisplay1.setMap(map);
                            directionsDisplay1.setOptions({ preserveViewport: true });
                            directionsDisplay1.setDirections(response);
                            arrdirectionsDisplay.push(directionsDisplay1);
                            infowindow2.setContent(response.routes[0].legs[0].distance.text + "<br>" + response.routes[0].legs[0].duration.text + " ");
                            var index = parseInt(response.routes[0].overview_path.length / 2);
                            var infoposition = new google.maps.LatLng(response.routes[0].overview_path[index].lat(), response.routes[0].overview_path[index].lng());

                            infowindow2.setPosition(infoposition ? infoposition : end);
                            infowindow2.open(map);
                            arrInfowindows.push(infowindow2);
                        }
                    });
                }

//
            });
            arrUserMarkers.push(markerRed);

            var locationLatLngGreen = new google.maps.LatLng(greenLocations[l].lat, greenLocations[l].lng);
            var markerGreen = new google.maps.Marker({
                position: locationLatLngGreen, map: map,
                icon: 'images/icon/greenMarker.png'
            });
            markerGreen.setMap(map);


            markerGreen.addListener('click', function () {
                var m = this;
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'latLng': this.position }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            var infoWindowGreen = new google.maps.InfoWindow({
                                content: results[1].formatted_address
                            });
//                            for (i = 0; i < arrInfowindows.length; i++) {
//                                arrInfowindows[i].close();
//                            }
//                            arrInfowindows = [];
                            infoWindowGreen.open(map, m);
//                            arrInfowindows.push(infoWindowGreen);
                        }
                    }
                });


                if ($scope.locationGodrej.from == null && $scope.locationGodrej.to == null)
                    $scope.locationGodrej.from = this.position;
                else if ($scope.locationGodrej.from != null && $scope.locationGodrej.to != null) {
                    $scope.locationGodrej.from = this.position;
                    $scope.locationGodrej.to = null;
                }
                else {
                    $scope.locationGodrej.to = new google.maps.LatLng(parseFloat(this.position.lat()), parseFloat(this.position.lng()));

                    var start = $scope.locationGodrej.from;
                    var end = $scope.locationGodrej.to;
                    var infowindow2 = new google.maps.InfoWindow();
                    var request = {
                        origin: start,
                        destination: end,
                        travelMode: google.maps.TravelMode.DRIVING
                    };
                    var directionsService1 = new google.maps.DirectionsService();

                    directionsService1.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            var directionsDisplay1 = new google.maps.DirectionsRenderer(
                                {
                                    suppressMarkers: true
                                }
                            );
                            directionsDisplay1.setMap(map);
                            directionsDisplay1.setOptions({ preserveViewport: true });
                            directionsDisplay1.setDirections(response);
                            arrdirectionsDisplay.push(directionsDisplay1);
                            infowindow2.setContent(response.routes[0].legs[0].distance.text + "<br>" + response.routes[0].legs[0].duration.text + " ");
                            var index = parseInt(response.routes[0].overview_path.length / 2);
                            var infoposition = new google.maps.LatLng(response.routes[0].overview_path[index].lat(), response.routes[0].overview_path[index].lng());

                            infowindow2.setPosition(infoposition ? infoposition : end);
                            infowindow2.open(map);
                            arrInfowindows.push(infowindow2);
                        }
                    });
                }
//                for (i = 0; i < arrInfowindows.length; i++) {
//                    arrInfowindows[i].close();
//                }
//                arrInfowindows = [];
//                infoWindowGreen.open(map, markerGreen);
//                arrInfowindows.push(infoWindowGreen);
            });
            arrUserMarkers.push(markerGreen);
        }
//        flgShowAllMarkers = true;
//        $scope.placeMarkesrs(arrMarkers);
    }

    function calcRoute(assetOriginDestDetails, supressMarkers, isAssetTracking) {
        flgShowAllMarkers = false;
        if (arrdirectionsDisplay != null) {
            for (i = 0; i < arrdirectionsDisplay.length; i++) {
                arrdirectionsDisplay[i].setMap(null);
                arrdirectionsDisplay[i] = null;
            }
            arrdirectionsDisplay = [];
        }
        angular.forEach(assetOriginDestDetails, function (item, index) {
            var start = new google.maps.LatLng(item.origin.Latitude, item.origin.Longitude);
            var end = new google.maps.LatLng(item.destination.Latitude, item.destination.Longitude);
            var infowindow2 = new google.maps.InfoWindow();
            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };
            var directionsService = new google.maps.DirectionsService();

            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    var directionsDisplay = new google.maps.DirectionsRenderer(
                        {
                            suppressMarkers: supressMarkers ? supressMarkers : false
                        }
                    );
                    directionsDisplay.setMap(map);
                    directionsDisplay.setOptions({ preserveViewport: true });
                    directionsDisplay.setDirections(response);
                    arrdirectionsDisplay.push(directionsDisplay);
                    infowindow2.setContent(response.routes[0].legs[0].distance.text + "<br>" + response.routes[0].legs[0].duration.text + " ");


                    if (response.routes) {
                        if (response.routes[0].overview_path) {
                            if (arrLatLongTruck.length == 0) {
                                arrLatLongTruck = [response.routes[0].overview_path];
                            }
                            else {
                                arrLatLongTruck.push(response.routes[0].overview_path);
                            }
                            var index = parseInt(response.routes[0].overview_path.length / 2);
                            var infoposition = new google.maps.LatLng(response.routes[0].overview_path[index].lat(), response.routes[0].overview_path[index].lng());
                        }
                    }
                    infowindow2.setPosition(infoposition ? infoposition : end);
                    infowindow2.open(map);
                    arrInfowindows.push(infowindow2);
                    if (isAssetTracking) {
                        var markerTruck = new google.maps.Marker({position: start, map: map, icon: 'images/icon/truck3.png'});
                        markerTruck.setMap(map);
                        markerTruck.addListener('click', function () {
//                            for (i = 0; i < arrInfowindows.length; i++) {
//                                arrInfowindows[i].close();
//                            }
//                            arrInfowindows = [];
                            var infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                                '<div id="siteNotice">' +
                                '</div>' +
                                '<h1 id="firstHeading" class="firstHeading">' + this['Dealer Name'] + '</h1>' +
                                '<div id="bodyContent" class="infowindow_warehouse">' +
                                '<big> <p>' +
                                '<label> nothing to show </label>' +
                                '</p></big>' +
                                '</div>' +
                                '</div>'
                            var infoWindow = new google.maps.InfoWindow({
                                content: item.markerContent ? item.markerContent : infoWindowContent
                            });
                            infoWindow.open(map, markerTruck);
                            arrInfowindows.push(infoWindow);
                        });
                        arrMarkers.push(markerTruck);

                        for (var i = 0; i < arrMarkers.length; i++) {
                            $scope.moveTruck(map, arrMarkers[i], i, 0, 0);
                        }

//                        if (index == assetOriginDestDetails.length -1 ) {
                        godrejLocations();
//                        }

                    }
                    else if ($scope.whichOverlayToShow == "wayPoints") {
                        checkWaypointsExist();
//                        showWaypoints(arrLatLongTruck);
                    }
                }
            });


        });


    };
    $scope.moveTruck = function (map, markerTruck, markerIndex, latLngindex, countDotMarker) {
//        console.log(markerTruck.position);
        setTimeout(function () {
            if (countDotMarker == 3 && $scope.whichOverlayToShow == 'assetTracking') {
                countDotMarker = 0;

                var geocoder = geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'latLng': markerTruck.position }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            var markerDot = new google.maps.Marker({position: markerTruck.position, map: map, icon: 'images/marker-dot.png'});

                            markerDot.setMap(map);
                            markerDot.setPosition(markerTruck.position);
                            markerDot.addListener('click', function () {
                                for (i = 0; i < arrInfowindowsAssetTrackingMarkers.length; i++) {
                                    arrInfowindowsAssetTrackingMarkers[i].close();
                                }
                                arrInfowindowsAssetTrackingMarkers = [];

                                var infoWindowContent = '<div id="content"  class="inf owindow_warehouse">' +
                                    '<div id="siteNotice">' +
                                    '</div>' +
                                    '<div id="bodyContent" class="infowindow_warehouse">' +
                                    '<big> <p>' +
                                    '<label> ' + results[1].formatted_address + ' </label>' +
                                    '</p></big>' +
                                    '<p><i> Time : ' + $filter("date")(new Date(), "HH:mm:ss")
                                    + '</i></p></div>' +
                                    '</div>';
                                var infoWindow = new google.maps.InfoWindow({
                                    content: infoWindowContent
                                });
                                infoWindow.open(map, markerDot);
                                arrInfowindowsAssetTrackingMarkers.push(infoWindow);
                            })
                            arrMarkers.push(markerDot);
                        }
                    }
                });
            }
            else {
                countDotMarker++;
            }
            markerTruck.setPosition(new google.maps.LatLng(arrLatLongTruck[markerIndex][latLngindex].lat(), arrLatLongTruck[markerIndex][latLngindex].lng()));
            latLngindex++;

            if (latLngindex <= arrLatLongTruck[markerIndex].length) {
//            if (k >= 0) {
                $scope.moveTruck(map, markerTruck, markerIndex, latLngindex, countDotMarker);
            }
//            k++;
        }, 3000)
    };

    $scope.showReport = function (showToUser, fileName, heading) {
//        $("#dialog").dialog({width: 800, height: 500});
        $scope.showDialog = showToUser;
        $scope.report_dialog_head = heading;
        if (showToUser)
//        $scope.$apply();
//            $("#frame").attr("src", "images/Report - VW.pdf");
            $("#frame").attr("src", "images/" + fileName);
    };

    $scope.showModal = function (showToUser, img) {
        $scope.showPersonAnalysis = showToUser;
        $scope.salePersonImage = img;
    };

    $scope.listWaypoints = function () {
        flgShowAllMarkers = false;
        var summaryPanel = document.getElementById('directions-panel');
        summaryPanel.innerHTML = "";
        if (arrdirectionsDisplay != null) {
            for (i = 0; i < arrdirectionsDisplay.length; i++) {
                arrdirectionsDisplay[i].setMap(null);
                arrdirectionsDisplay[i] = null;
            }
            arrdirectionsDisplay = [];
        }
        $scope.placeMarkesrs(null);

        var start = new google.maps.LatLng($scope.wayPoints[0].origin.Latitude, $scope.wayPoints[0].origin.Longitude);
        var end = new google.maps.LatLng($scope.wayPoints[0].destination.Latitude, $scope.wayPoints[0].destination.Longitude);

        var directionsService = new google.maps.DirectionsService();
        directionsService.route({
            origin: start,
            destination: end,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
//                directionsDisplay.setDirections(response);
//                var route = response.routes[0];
//                var summaryPanel = document.getElementById('directions-panel');
//                summaryPanel.innerHTML = '';

                showWaypoints(response.routes[0].overview_path);
//                // For each route, display summary information.
//                for (var i = 0; i < route.legs.length; i++) {
//                    var routeSegment = i + 1;
//                    summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
//                        '</b><br>';
//                    summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
//                    summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
//                    summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
//                }
            } else {
//                window.alert('Directions request failed due to ' + status);
            }
        });
    }

    $scope.findWaypoints = function () {

//        $scope.routeSelected.selectedrouteWaypoints = [];
//        for (var i = 0; i < $scope.selectedrouteWaypoints.length; i++) {
//            if ($scope.selectedrouteWaypoints[i].selected) {
//                $scope.routeSelected.selectedrouteWaypoints.push({
//                    location: $scope.routeSelected.selectedrouteWaypoints[i].value,
//                    stopover: true
//                });
//            }
//        }
        calcRoute($scope.wayPoints, false, false);


    };
    /**
     * reset route displayed on end point selection change
     */

    $scope.resetRouting = function () {
        flgShowAllMarkers = false;
        if (arrdirectionsDisplay != null) {
            for (i = 0; i < arrdirectionsDisplay.length; i++) {
                arrdirectionsDisplay[i].setMap(null);
                arrdirectionsDisplay[i] = null;
            }
            arrdirectionsDisplay = [];
        }
        $scope.placeMarkesrs(null);
    };

    $scope.optimizeRoute = function () {
        flgShowAllMarkers = false;
        if (arrdirectionsDisplay != null) {
            for (i = 0; i < arrdirectionsDisplay.length; i++) {
                arrdirectionsDisplay[i].setMap(null);
                arrdirectionsDisplay[i] = null;
            }
            arrdirectionsDisplay = [];
        }
        $scope.placeMarkesrs(null);
        map.setZoom(6);
        map.setCenter({lat: 19.864011, lng: 75.396782});
        var waypts = [];
        var checkboxArray = document.getElementById('waypoints');
        $scope.routeSelected.selectedrouteWaypoints = [];
        for (var i = 0; i < checkboxArray.length; i++) {
            if (checkboxArray.options[i].selected) {
                waypts.push({
                    location: checkboxArray[i].value,
                    stopover: true
                });
            }
        }
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(map);


        trafficLayer.setMap(map);

        directionsService.route({
            origin: document.getElementById('start').value,
            destination: document.getElementById('end').value,
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                arrdirectionsDisplay.push(directionsDisplay);
                var route = response.routes[0];
                var summaryPanel = document.getElementById('directions-panel');
                summaryPanel.innerHTML = '';
                // For each route, display summary information.
                for (var i = 0; i < route.legs.length; i++) {
                    var routeSegment = i + 1;
                    summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                        '</b><br>';
                    summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
                    summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
                    summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
                }
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };

    function codeLatLng(latlng, callback) {  ///<<-------CHANGE HERE
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'latLng': latlng}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {

                    callback(results[0].formatted_address);   ///<<-------CHANGE HERE
                    //return results[0].formatted_address;   ///<<------- CAN'T DO THIS..
                } else {
//                    alert('No results found');
                }
            } else {
//                alert('Geocoder failed due to: ' + status);
            }
        });
    }

    function showWaypoints(routeLatLngs) {
        var modVal = 10;
//        for (var k = 0; k < routeLatLngs.length; k++)
//        {
        modVal = parseInt(routeLatLngs.length / 10);
        console.log(routeLatLngs.length + " , " + modVal);
        for (var i = 0; i < routeLatLngs.length; i++) {
            if (i % modVal == 0) {
                console.log(i);
                codeLatLng(routeLatLngs[i], function (address) {   ///<<-------CHANGE HERE
                    $scope.routeSelected.routeWaypoints.push(address);
                    $scope.$apply();
                });
            }
        }

//        }

    }

    /**
     * check if given lat long exists on route found
     */
    function checkWaypointsExist() {
        var latLng, latLngForArray, flgFound;
        angular.forEach($scope.addresses, function (item, index) {
            if (index < $scope.addresses.length - 1) {
                flgFound = false;
                angular.forEach(arrLatLongTruck[0], function (latlngItem, latLngIndex) {
                    var addrLat = parseFloat(item.lat);
                    var addrLng = parseFloat(item.lng);
                    var routeLat = parseFloat(latlngItem.lat());
                    var routeLng = parseFloat(latlngItem.lng());
//                    if (index == 1)
//                        console.log(routeLat, ",", routeLng);

                    if (addrLat && addrLng && routeLat && routeLng) {
                        try {
                            if (addrLat.toFixed(4) == routeLat.toFixed(4) && addrLng.toFixed(4) == routeLng.toFixed(4)) {
//                            console.log('found');
                                latLng = new google.maps.LatLng(addrLat, addrLng),
                                    latLngForArray = [addrLat, addrLng];
                                var marker = new google.maps.Marker({
                                    position: latLng, map: map,
                                    icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                                });
                                marker.setMap(map);
                                flgFound = true;
//                            $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?location='+latLng+'&sensor=false', null, function (data) {
//                                var p = data.results[0].geometry.location;
//                                var latlng = new google.maps.LatLng(p.lat, p.lng);
//                                new google.maps.Marker({
//                                    position: latLng,
//                                    map: map,
//                                    icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
//                                });
//
//                            });
//                            if (geoCodes[latLng] == null){
//                                var geocoder = new google.maps.Geocoder();
//                                // Get LatLng information by name
//                                geocoder.geocode({
////                                address: formatted_address,
//                                    location: latLng
//                                }, function (results, status) {
//                                    if (status === 'OK') {
//                                        for (var i = 0; i < results.length; i++) {
//                                            console.log(results[i].types + " - " + results[i].formatted_address);
//                                        }
//                                        geoCodes[latLng] = {'formatted_address':results[1].formatted_address};
//                                        if (results[1]) {
////                                        map.setZoom(11);
//                                            var marker = new google.maps.Marker({
//                                                position: latLng, map: map,
//                                                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
//                                            });
//                                            marker.setMap(map);
//
//                                            var infoWindow = new google.maps.InfoWindow({
//                                                content: results[1].formatted_address
//                                            });
//                                            marker.addListener('click', function () {
//                                                for (i = 0; i < arrInfowindows.length; i++) {
//                                                    arrInfowindows[i].close();
//                                                }
//                                                arrInfowindows = [];
//                                                infoWindow.open(map, marker);
//                                                arrInfowindows.push(infoWindow);
//                                            });
//                                            arrMarkers.push(marker);
//
//                                        } else {
//                                            console.log('No results found');
//                                        }
//                                    } else {
//                                        console.log('Geocoder failed due to: ' + status);
//                                    }
//
//
//
//
//                                });
//                            }
//                            else {
//                                var marker = new google.maps.Marker({
//                                    position: latLng,
//                                    map: map,
//                                    icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
//                                });
//                                marker.setMap(map);
//
//                                var infoWindow = new google.maps.InfoWindow({
//                                    content: geoCodes[latLng].formatted_address
//                                });
//                                marker.addListener('click', function () {
//                                    for (i = 0; i < arrInfowindows.length; i++) {
//                                        arrInfowindows[i].close();
//                                    }
//                                    arrInfowindows = [];
//                                    infoWindow.open(map, marker);
//                                    arrInfowindows.push(infoWindow);
//                                });
//                                arrMarkers.push(marker);
//                            }

                            }
                            else {

                            }
                        }
                        catch (err) {
//                        console.log("error - " + err.message + " - " + index + " - " + addrLat + " - " + addrLng)
                        }
                    }

                });
                if (flgFound == true) {
                    item.status = 1;
                }
                else
                    item.status = 0;
            }
        });

    }

    $scope.listDistrictNames = function () {
        $.getJSON('/stateNames', {}, function (data) {
            $scope.statesData.states = data;
            $scope.$apply();
            $scope.statesData.selectedStates = data[0];
        });
    };
    $scope.listStateData = function (selectedStates) {
        if (selectedStates != null && selectedStates != undefined && selectedStates != "") {
            var query = {
                'properties.STATE': selectedStates.trim()
            };
            $.getJSON('/stateData', query, function (data) {
                $scope.statesData.zipCodes = data.zipCodes;
                $scope.statesData.talukas = data.talukas;
                $scope.statesData.districts = data.districts;
                $scope.$apply();
            });
        }
    };

    $scope.resetOtherData = function (selectedCategory) {
        $scope.selectedFilterCategory = selectedCategory;
//        switch (selectedCategory) {
//            case 'zipcode':
//                $scope.statesData.selectedTalukas = [];
//                $scope.statesData.selectedDistricts = [];
//                break;
//            case 'taluka':
//                $scope.statesData.selectedDistricts = [];
//                $scope.statesData.selectedZipcodes = [];
//                break;
//            case 'district':
//                $scope.statesData.selectedTalukas = [];
//                $scope.statesData.selectedZipcodes = [];
//                break;
//
//        }
    };

    $scope.placeZipcodesBoundries = function () {
        var mapDataToload = {"type": "FeatureCollection", "features": []};
        var value1 = "";
        var query = {};
        var queryMetadata = {};
        var queryParam = "";
        var queryParamMetadata = "";

        switch ($scope.selectedFilterCategory) {
            case 'zipcode':
                value1 = angular.copy($scope.statesData.selectedZipcodes);
                for (var m = 0; m < value1.length; m++) {
                    value1[m] = parseInt(value1[m])
                }
                queryParam = "properties.PINCODE";
                queryParamMetadata = "PINCODE";
                break;
            case 'taluka':
                value1 = angular.copy($scope.statesData.selectedTalukas);
                queryParam = "properties.SUB_DISTRICT";
                queryParamMetadata = "SUB_DISTRICT";
                break;
            case 'district':
                value1 = angular.copy($scope.statesData.selectedDistricts);
                queryParam = "properties.DISTRICT";
                queryParamMetadata = "DISTRICT";
                break;

        }
        if (angular.isArray(value1)) {
            for (var m = 0; m < value1.length; m++) {
                if (typeof(value1[m]) == "string")
                    value1[m] = value1[m].replace(/\n/g, '').trim();
            }
            query[queryParam] = { '$in': value1};
            queryMetadata[queryParamMetadata] = { '$in': value1};
        }
        else {
            query[queryParam] = value1.trim();
            queryMetadata[queryParamMetadata] = value1.trim();
        }
        $scope.placeMarkesrs(null);
        $.getJSON('/zipcodBoundries', query, function (data) {
            $scope.zipCodesData = data.shapeFile;


            angular.forEach($scope.zipCodesData, function (item, index) {
                if (index == 0) {
                    var geocoder = new google.maps.Geocoder();
                    var addressToSearch = "";
                    if (item.properties.NAME != undefined && item.properties.NAME != null)
                        addressToSearch= addressToSearch + item.properties.NAME
                    if (item.properties.DISTRICT != undefined && item.properties.DISTRICT != null)
                        addressToSearch= addressToSearch + item.properties.DISTRICT
                    if (item.properties.PINCODE != undefined && item.properties.PINCODE != null)
                        addressToSearch= addressToSearch + item.properties.PINCODE
                    // Get LatLng information by name
                    if (addressToSearch != "")
                    {
                        geocoder.geocode({
                            address: addressToSearch
//                                    location: item.properties.PINCODE
                        }, function (results, status) {
                            if (status === 'OK') {
                                map.setCenter(results[0].geometry.location);
                            }
                        });
                    }
                }
                mapDataToload['features'].push(item);
            });

            map.data.forEach(function (feature) {
                // If you want, check here for some constraints.
                map.data.remove(feature);
            });
            map.data.addGeoJson(mapDataToload);
            map.data.addListener('click', function (event) {

                var polygon = $scope.zipCodesData[0].geometry.coordinates;
                isPointInPoly([ event.latLng.lat(), event.latLng.lng() ], polygon); // true


                for (i = 0; i < arrInfowindows.length; i++) {
                    arrInfowindows[i].close();
                }
                arrInfowindows = [];

                var myHTML = '<div id="content"  class="infowindow_warehouse">' +
                    '<label id="firstHeading" class="firstHeading">' + event.feature.f['NAME'] + ', ' + event.feature.f['DISTRICT'] + ', ' +
                    event.feature.f['STATE'] + '</label>' +
                    '</div>';
                var infowindow = new google.maps.InfoWindow({content: myHTML});
                infowindow.setPosition(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));
                infowindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
                infowindow.open(map);
                arrInfowindows.push(infowindow);
            });
            var featureStyle = {
                strokeColor: '#ff3333',
                strokeWeight: 1,
                fillColor: 'green'
            };

            map.data.setStyle(featureStyle);
            map.setZoom(8);

        }, function (error) {

        });

        $.getJSON('/zipcodMetadata', queryMetadata, function (data) {
            $scope.placeMarkesrs(data.metaData);
        }, function (error) {

        });
    };

    var places = [];

    /**
     * function will log places on console
     * @param places
     * @param fileName
     */
    function writePlaces(places, fileName) {
//        angular.forEach(places, function (place, index) {
//            try
//            {
//                console.log(place.name + " : " + place.formatted_address + " : " + place.geometry.location.lat + " : " + place.geometry.location.lng);
//            }
//            catch (err) {
//                        console.log("error - " + err.message + " - " + index )
//            }
//
////            var txtFile = new File(fileName+ '.json');
////            var txtFile = new File([""], "/tmp/"+fileName + ".json", {type: "text/plain"});
////            txtFile.open("w"); // open file with write access
////            txtFile.writeln(place);
////            txtFile.close();
//
////            var txtFile1 = new File(fileName + '.txt');
////            txtFile1.writeln(place);
////            txtFile1.close();
//        });
    }

    function addPlaces(data) {
        angular.forEach(data, function (item, index) {
            places.push(item)
        });
    }

    $scope.placeType1 = "bus";
    $scope.placeName = "kadappa";
    $scope.findPlaces = function () {
//        https://maps.googleapis.com/maps/api/place/textsearch/xml?query=jalgaon&key=AIzaSyDVR5iaxk4V2f3OqyyhwUrZdWvE7L7n8Uo
        var arrplaces = [$scope.placeName];
//        var searchPlacesTypes = ['bus','government office','railway', 'hospital', 'restaurant'];
        var searchPlacesTypes = [$scope.placeType1];
        var counter = 1;
        var next_page_token = false, next_page_tokenval = "";
        var queryToSend = {};

        var proceed;

        for (var l = 0; l < arrplaces.length; l++) {
            for (var j = 0; j < searchPlacesTypes.length; j++) {
                var fileName = arrplaces[l] + '_' + searchPlacesTypes[j] + '_' + counter;
                queryToSend = {
                    'query': arrplaces[l] + " " + searchPlacesTypes[j],
                    'key': 'AIzaSyDVR5iaxk4V2f3OqyyhwUrZdWvE7L7n8Uo'
                };
                $.getJSON('/searchText', queryToSend, function (data) {
                    console.log(data);
                    addPlaces(data.results);
                    if (data.next_page_token) {
                        next_page_token = true;
                        next_page_tokenval = data.next_page_token;
                        queryToSend = {
                            'next_page_token': next_page_tokenval
                        };
                        setTimeout(function () {
                            $.getJSON('/searchText', queryToSend, function (data) {
                                console.log(data);
                                places.push(data.results);
                                if (data.next_page_token) {
                                    next_page_token = true;
                                    next_page_tokenval = data.next_page_token;
                                    queryToSend = {
                                        'next_page_token': next_page_tokenval
                                    };
                                    setTimeout(function () {
                                        $.getJSON('/searchText', queryToSend, function (data) {
                                            console.log(data);
                                            places.push(data.results);
                                            if (data.next_page_token) {
                                                next_page_token = true;
                                                next_page_tokenval = data.next_page_token;
                                            }
                                            else {
                                                next_page_token = false;
                                                writePlaces(places, fileName);
                                            }


                                        }, function (error) {
                                            console.log(error);
                                        });
                                    }, 1500);
                                }

                                else {
                                    next_page_token = false;
                                    writePlaces(places, fileName);
                                }


                            }, function (error) {
                                console.log(error);
                            });
                        }, 1500);


                    }
                    else {
                        next_page_token = false;
                        writePlaces(places, fileName);
                    }


//                    while (next_page_token && proceed) {
//
//                    }
                }, function (error) {
                    console.log(error);
                });


            }
        }
//        for (var i = 0; i < arrplaces.length; i++) {
//            for (var j = 0; j < searchPlacesTypes.length; j++) {
//                $http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + arrplaces[i] + ' ' + searchPlacesTypes[j] + '&key=AIzaSyDVR5iaxk4V2f3OqyyhwUrZdWvE7L7n8Uo')
//                    .then(function(response) {
////                        $scope.myWelcome = response.data;
////                    });
////                $.getJSON('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + arrplaces[i] + ' ' + searchPlacesTypes[j] + '&key=AIzaSyDVR5iaxk4V2f3OqyyhwUrZdWvE7L7n8Uo',  function (data) {
//                    counter = 1;
//                    if (data.status == 'OK') {
//                        angular.forEach(data.results, function (place, index) {
//                            console.log(place.name + " : " + place.formatted_address + " : " + place.geometry.location.lat + " : " + place.geometry.location.lng);
//                            var txtFile = new File(arrplaces[i] + '_' + searchPlacesTypes[j] + '_' + counter + '.json');
//                            txtFile.writeln(place);
//                            txtFile.close();
//
//                            var txtFile1 = new File(arrplaces[i] + '_' + searchPlacesTypes[j] + '_' + counter + '.txt');
//                            txtFile1.writeln(place);
//                            txtFile1.close();
//                        });
//                        if (data.next_page_token)
//                            next_page_token = true;
//
//                        else
//                            next_page_token= false;
//
//                        while (next_page_token) {
//                            counter++;
//                            $.getJSON('https://maps.googleapis.com/maps/api/place/textsearch/json?pagetoken=' + data.next_page_token + 'query=' + arrplaces[i] + ' ' + searchPlacesTypes[j] + '&key=AIzaSyDVR5iaxk4V2f3OqyyhwUrZdWvE7L7n8Uo',  function (data) {
//                                counter = 1;
//                                if (data.status == 'OK') {
//                                    angular.forEach(data.results, function (place, index) {
//                                        console.log(place.name + " : " + place.formatted_address + " : " + place.geometry.location.lat() + " : " + place.geometry.location.lng());
//                                        var txtFile = new File(arrplaces[i] + '_' + searchPlacesTypes[j] + '_' + counter + '.json');
//                                        txtFile.writeln(place);
//                                        txtFile.close();
//
//                                        var txtFile1 = new File(arrplaces[i] + '_' + searchPlacesTypes[j] + '_' + counter + '.txt');
//                                        txtFile1.writeln(place);
//                                        txtFile1.close();
//                                    });
//                                    if (data.next_page_token)
//                                        next_page_token = true;
//
//                                    else
//                                        next_page_token= false;
//                                }
//                            }, function (error) {
//
//                            });
//                        }
//                    }
//                }, function (error) {
//
//                });
//            }
//        }

    };
    var markerBike;

    /**
     * display route and distance from user location to selected store
     * @param start
     * @param end
     */
    $scope.showDirections = function () {
        $scope.placeMarkesrs(null);
        $scope.routeSearch.showSearchRouteCombo = false;
        $scope.routeSearch.searchRouteBy = "";
        routeTakenBreadcrums = [];
        routeDetails = {};

        var start = new google.maps.LatLng($scope.wayPointsNav[0].origin.Latitude, $scope.wayPointsNav[0].origin.Longitude);
        var end = new google.maps.LatLng($scope.wayPointsNav[0].destination.Latitude, $scope.wayPointsNav[0].destination.Longitude);
        var directionsDisplay, directionsService;
        // Instantiate a directions service.
        directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer();

        if (arrdirectionsDisplay != null) {
            for (i = 0; i < arrdirectionsDisplay.length; i++) {
                arrdirectionsDisplay[i].setMap(null);
                arrdirectionsDisplay[i] = null;
            }
            arrdirectionsDisplay = [];
        }
        if (arrPolylines != null) {
            for (i = 0; i < arrPolylines.length; i++) {
                arrPolylines[i].setMap(null);
                arrPolylines[i] = null;
            }
            arrPolylines = [];
        }


        var infowindow2 = new google.maps.InfoWindow();
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        };


        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {

                directionsDisplay.setMap(map);
                directionsDisplay.setOptions({ preserveViewport: true });
                directionsDisplay.setDirections(response);
                arrdirectionsDisplay.push(directionsDisplay);
                $scope.routeSearch.showDirectionPanel = true;
                directionsDisplay.setPanel(document.getElementById('right-panel'));

//                $scope.directionsPanel.showList = true;
                $scope.$apply();

                arrLatLongBike = response.routes[0].overview_path;
                routeDetails = response.routes[0];

                infowindow2.setContent(response.routes[0].legs[0].distance.text + "<br>" + response.routes[0].legs[0].duration.text + " ");
                if (response.routes) {
                    if (response.routes[0].overview_path) {
                        var index = parseInt(response.routes[0].overview_path.length / 2);
                        var infoposition = new google.maps.LatLng(response.routes[0].overview_path[index].lat(), response.routes[0].overview_path[index].lng());
                    }
                }
                infowindow2.setPosition(infoposition ? infoposition : end);
                infowindow2.open(map);
                arrInfowindows.push(infowindow2);

                map.setZoom(8);
                map.setCenter({lat: response.routes[0].overview_path[0].lat(), lng: response.routes[0].overview_path[0].lng()});
//                console.log('lat: ' + response.routes[0].overview_path[0].lat() + 'lng: ' + response.routes[0].overview_path[0].lng());
//                console.log('lat: ' + response.routes[0].overview_path[response.routes[0].overview_path.length - 1].lat() + 'lng: ' + response.routes[0].overview_path[response.routes[0].overview_path.length - 1].lng());
//                var bounds = new google.maps.LatLngBounds();
//                for (var i = 0; i < routeDetails.overview_polyline.getPath().getLength(); i++) {
//                    bounds.extend(routeDetails.overview_polyline.getPath().getAt(i));
//                }
//                map.fitBounds(bounds);

                markerBike = new google.maps.Marker({position: start, map: map, icon: 'images/map_marker_animated_orange.gif', optimized: false});
                markerBike.setMap(map);
                markerBike.addListener('click', function () {
//                            for (i = 0; i < arrInfowindows.length; i++) {
//                                arrInfowindows[i].close();
//                            }
//                            arrInfowindows = [];
                    var infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h1 id="firstHeading" class="firstHeading">' + this['Dealer Name'] + '</h1>' +
                        '<div id="bodyContent" class="infowindow_warehouse">' +
                        '<big> <p>' +
                        '<label> nothing to show </label>' +
                        '</p></big>' +
                        '</div>' +
                        '</div>'
                    var infoWindow = new google.maps.InfoWindow({
                        content: item.markerContent ? item.markerContent : infoWindowContent
                    });
                    infoWindow.open(map, markerBike);
                    arrInfowindows.push(infoWindow);
                });
                arrMarkers.push(markerBike);
                routeTakenBreadcrums = [];

                countPOI = 0;
                arrPOI = [];
                clearTimeout(callPlacesapi);
                clearTimeout(callPlacesapi);
                getAllPointOfInterests();
//                moveBiker(map, markerBike, 0, 0);


            }
        });
    };

    $scope.startBikerNavigation = function () {
        moveBiker(map, markerBike, 0, 0);
    };

    var routeTakenBreadcrums = [];
    var callPlacesapi, resultPlacesapi;
    var routeDetails = {};
    var countPOI = 0;
    var arrPOI = [];
    var arrPOISelected = [];

    function getAllPointOfInterests() {
        for (var l = 0; l < arrLatLongBike.length; l += 30) {
//        var l = 0, interval = 1;
//            (function (ind) {
//            callPlacesapi = setTimeout(function () {
//                if ((ind < arrLatLongBike.length) && (ind % 5 == 0)) {
            var service = new google.maps.places.PlacesService(map);
            service.textSearch({
                location: arrLatLongBike[l],
                radius: 500,
                type: ['restaurant']
//                query:' jalgaon'

            }, callbackForAllPOI);
//                    l += 5;
//                }
//                else {
//                    clearTimeout(callPlacesapi);
//                }
////                interval += 1;
//            }, 1000); // With each iteration, the delay increases
//            })(l);
        }
    }


    function callbackForAllPOI(results, status, next_page_token) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
//                    for (var i = 0; i <= 10; i++) {
//                (function (ind) {
//                    setTimeout(function () {
                var place = results[i];
//                        console.log(place.name + " : " + place.vicinity + " : " + place.geometry.location.lat() + " : " + place.geometry.location.lng());
//                        console.log(place.name + " : " + place.formatted_address + " : " + place.geometry.location.lat + " : " + place.geometry.location.lng);
                var placeLoc = place.geometry.location;
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    icon: "images/icon/restaurant.png"
                });
                arrMarkers.push(marker);

                google.maps.event.addListener(marker, 'click', function () {
                    arrPOISelected.push(this);
                    for (i = 0; i < arrInfowindows.length; i++) {
                        arrInfowindows[i].close();
                    }
                    this.setIcon('images/icon/hotspring.png');
                    arrInfowindows = [];
                    var infowindow = new google.maps.InfoWindow();
                    infowindow.setContent(place.name);
                    infowindow.open(map, this);
                    arrInfowindows.push(infowindow);
                });

                arrPOI.push(place);
//                    }, 500);
//                })(i);
            }
//                }
        }
    }

    function checkPOIinRange(bikePosition) {
        for (i = 0; i < arrPOISelected.length; i++) {
            var marker = arrPOISelected[i];
//            var targetLat = marker.getPosition().lat();
//            var targetLng = marker.getPosition().lng();
//
//            var targetLoc = new google.maps.LatLng(targetLat, targetLng);

//        var center= new GLatLng(centerLat, centerLng);

            var distanceInkm = google.maps.geometry.spherical.computeDistanceBetween(bikePosition, marker.getPosition()) / 1000;
            var distanceInmeters = google.maps.geometry.spherical.computeDistanceBetween(bikePosition, marker.getPosition());

            if (distanceInmeters < 500) {
// To add the marker to the map, call setMap();
                marker.setAnimation(google.maps.Animation.BOUNCE);
//                marker.setIcon('images/icon/graphics-food-burger_round.gif')
            }
            else {
//                marker.setIcon('images/icon/restaurant.png')
                marker.setAnimation(null);
            }
        }
    }

    /**
     *
     * @param map
     * @param markerBike
     * @param latLngindex
     * @param countDotMarker
     * $param routes
     */
    function moveBiker(map, markerBike, latLngindex, countDotMarker) {
        setTimeout(function () {
            if ($scope.whichOverlayToShow == 'navigation') {
                countDotMarker = 0;
                routeTakenBreadcrums.push({"latitude": arrLatLongBike[latLngindex].lat(), "longitude": arrLatLongBike[latLngindex].lng()});
                var geocoder = geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'latLng': markerBike.position }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            var markerDot = new google.maps.Marker({position: markerBike.position, map: map, icon: 'images/marker-dot.png'});

                            markerDot.setMap(map);
                            markerDot.setPosition(markerBike.position);
                            markerDot.addListener('click', function () {
                                for (i = 0; i < arrInfowindowsAssetTrackingMarkers.length; i++) {
                                    arrInfowindowsAssetTrackingMarkers[i].close();
                                }
                                arrInfowindowsAssetTrackingMarkers = [];

                                var infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                                    '<div id="siteNotice">' +
                                    '</div>' +
                                    '<div id="bodyContent" class="infowindow_warehouse">' +
                                    '<big> <p>' +
                                    '<label> ' + results[1].formatted_address + ' </label>' +
                                    '</p></big>' +
                                    '<p><i> Time : ' + $filter("date")(new Date(), "HH:mm:ss")
                                    + '</i></p></div>' +
                                    '</div>';
                                var infoWindow = new google.maps.InfoWindow({
                                    content: infoWindowContent
                                });
                                infoWindow.open(map, markerDot);
                                arrInfowindowsAssetTrackingMarkers.push(infoWindow);
                            });
                            arrMarkers.push(markerDot);


                            if (countPOI > 5) {
//                                getPointOfInterests(markerBike.position);
                                checkPOIinRange(markerBike.position);
                                countPOI = 0;
                            }
                            else {
                                countPOI++;
                            }

                        }
                    }
                });
            }
            else {
                countDotMarker++;
            }
            markerBike.setPosition(new google.maps.LatLng(arrLatLongBike[latLngindex].lat(), arrLatLongBike[latLngindex].lng()));
            latLngindex++;

            if (latLngindex < arrLatLongBike.length) {
//            if (k >= 0) {
                moveBiker(map, markerBike, latLngindex, countDotMarker);
            }
            else {
                clearTimeout(callPlacesapi);
                clearTimeout(callPlacesapi);
                $scope.showNavigationSaveConfirmation = true;
                $scope.$apply();
//                $scope.saveRoute($scope.wayPointsNav[0].originName, $scope.wayPointsNav[0].destinationName, "trialRoute", "PAllavi",routes );
            }
//            k++;
        }, 500)
    }

    /**
     *
     * @param origin
     * @param destination
     * @param routeName
     * @param userName
     * This function will save the route to DB for further suggestions to other users
     */
    $scope.saveRoute = function () {
        $scope.showNavigationSaveConfirmation = false;
        $scope.$apply();
        var route1 = {
//          "legs" : routeDetails.legs,
            "overview_path": routeTakenBreadcrums,
            "overview_polyline": routeDetails.overview_polyline,
            "summary": routeDetails.summary
        };
        var objToSave = {
            "origin": $scope.wayPointsNav[0].originName,
            "destination": $scope.wayPointsNav[0].destinationName,
            "routeName": $scope.routeSearch.routeTitle ? $scope.routeSearch.routeTitle : $scope.wayPointsNav[0].originName + "_" + $scope.wayPointsNav[0].destinationName + "_" + $filter("date")(new Date(), "dd-MMM-yyyy"),
            "userName": $scope.routeSearch.riderName ? $scope.routeSearch.riderName : "Vineet",
            "routeDetails": route1,
            "routeSaveDate": new Date()
        };
        var query = {"routeInfo": objToSave};
        $.getJSON('/saveRoute', query, function (data) {
                console.log(data);
                alert('Route saved successfully');
                $scope.getRoutes();
            },
            function (error) {
                alert('Route saved unsuccessful.');
                console.log(error);
                $scope.getRoutes();
            });
    };

    function getPointOfInterests(currentLocation) {
        var service = new google.maps.places.PlacesService(map);
        service.textSearch({
            location: currentLocation,
            radius: 2000,
            type: ['restaurant']
//                query:' jalgaon'

        }, callback);


    }

    function callback(results, status, next_page_token) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {


//                    for (var i = 0; i <= 10; i++) {
                (function (ind) {
                    setTimeout(function () {
                        var place = results[ind];
//                        console.log(place.name + " : " + place.vicinity + " : " + place.geometry.location.lat() + " : " + place.geometry.location.lng());
//                        console.log(place.name + " : " + place.formatted_address + " : " + place.geometry.location.lat + " : " + place.geometry.location.lng);
                        var placeLoc = place.geometry.location;
                        var marker = new google.maps.Marker({
                            map: map,
                            position: place.geometry.location,
                            icon: "images/icon/restaurant.png"
                        });
                        arrMarkers.push(marker);

                        google.maps.event.addListener(marker, 'click', function () {
                            for (i = 0; i < arrInfowindows.length; i++) {
                                arrInfowindows[i].close();
                            }
                            arrInfowindows = [];

                            var infowindow = new google.maps.InfoWindow();
                            infowindow.setContent(place.name);
                            infowindow.open(map, this);
                            arrInfowindows.push(infowindow);
                        });
                    }, 2500);
                })(i);
            }
//                }
        }
    }

    $scope.getRoutes = function () {
        var query = {};

        $scope.placeMarkesrs(null);
        if (arrdirectionsDisplay != null) {
            for (i = 0; i < arrdirectionsDisplay.length; i++) {
                arrdirectionsDisplay[i].setMap(null);
                arrdirectionsDisplay[i] = null;
            }
            arrdirectionsDisplay = [];
        }
        $scope.routeSearch.showDirectionPanel = false;

//        if ($scope.wayPointsNav[0].originName != {}) {
//            query['origin'] ={ '$regex': "^" + $scope.wayPointsNav[0].originName, '$options': '-i'};
//        }
//
//        if ($scope.wayPointsNav[0].destinationName != {}) {
//            query['destination'] ={ '$regex': "^" + $scope.wayPointsNav[0].destinationName, '$options': '-i'};
//        }

//        if ($scope.routeSearch.searchRouteBy) {
//
//            query['search'] = $scope.routeSearch.searchRouteBy;
//
//        }
        $.getJSON('/getRoute', query, function (data) {
                $scope.showRoute = {};
                $scope.routeSearch.routesSearched = data;
                $scope.routeSearch.showSearchRouteCombo = true;
                $scope.$apply();
            },
            function (error) {
                $scope.showRoute = {};
                $scope.routeSearch.routesSearched = [];
                $scope.routeSearch.showSearchRouteCombo = false;
                console.log(error);
            });
    };

    $scope.showSelectedRoute = function (routeName) {
        $scope.routeSearch.showDirectionPanel = false;
        routeName = JSON.parse(routeName);
        var polyline = new google.maps.Polyline({
            path: google.maps.geometry.encoding.decodePath(routeName.routeDetails.overview_polyline),
            map: map,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 4
        });

        arrPolylines.push(polyline);
        var latitude = polyline.getPath().b[0].lat();
        var longitude = polyline.getPath().b[0].lng();
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(parseFloat(latitude), parseFloat(longitude)),
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        });
        marker.addListener('click', function () {
            var infoWindow = new google.maps.InfoWindow({
                content: routeName.origin
            });
            for (i = 0; i < arrInfowindows.length; i++) {
                arrInfowindows[i].close();
            }
            arrInfowindows = [];
            infoWindow.open(map, marker);
            arrInfowindows.push(infoWindow);
        });
        arrMarkers.push(marker);

        var latitude1 = polyline.getPath().b[polyline.getPath().b.length - 1].lat();
        var longitude1 = polyline.getPath().b[polyline.getPath().b.length - 1].lng();
        var marker1 = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(parseFloat(latitude1), parseFloat(longitude1)),
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        });
        marker1.addListener('click', function () {
            var infoWindow1 = new google.maps.InfoWindow({
                content: routeName.destination
            });
            for (i = 0; i < arrInfowindows.length; i++) {
                arrInfowindows[i].close();
            }
            arrInfowindows = [];
            infoWindow1.open(map, marker);
            arrInfowindows.push(infoWindow1);
        });
        arrMarkers.push(marker1);


        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < polyline.getPath().getLength(); i++) {
            bounds.extend(polyline.getPath().getAt(i));
        }
        map.fitBounds(bounds);
    };


///////////////////////////////SPEED LIMIT/////////////////////////////////////////

//    function initialize() {
//
//
//        // Clear button. Click to remove all polylines.
//        $('#clear').click(function(ev) {
//            for (var i = 0; i < polylines.length; ++i) {
//                polylines[i].setMap(null);
//            }
//            polylines = [];
//            ev.preventDefault();
//            return false;
//        });
//    }

// Snap a user-created polyline to roads and draw the snapped path
    function runSnapToRoad(path) {
        var pathValues = [];
        for (var i = 0; i < path.getLength(); i++) {
            pathValues.push(path.getAt(i).toUrlValue());
        }

        $.get('https://roads.googleapis.com/v1/snapToRoads', {
            interpolate: true,
            key: apiKey,
            path: pathValues.join('|')
        }, function (data) {
            processSnapToRoadResponse(data);
            drawSnappedPolyline();
            getAndDrawSpeedLimits();
        });
    }

// Store snapped polyline returned by the snap-to-road service.
    function processSnapToRoadResponse(data) {
        snappedCoordinates = [];
        placeIdArray = [];
        for (var i = 0; i < data.snappedPoints.length; i++) {
            var latlng = new google.maps.LatLng(
                data.snappedPoints[i].location.latitude,
                data.snappedPoints[i].location.longitude);
            snappedCoordinates.push(latlng);
            placeIdArray.push(data.snappedPoints[i].placeId);
        }
    }

// Draws the snapped polyline (after processing snap-to-road response).
    function drawSnappedPolyline() {
        var snappedPolyline = new google.maps.Polyline({
            path: snappedCoordinates,
            strokeColor: 'black',
            strokeWeight: 3
        });

        snappedPolyline.setMap(map);
        polylines.push(snappedPolyline);
    }

// Gets speed limits (for 100 segments at a time) and draws a polyline
// color-coded by speed limit. Must be called after processing snap-to-road
// response.
    function getAndDrawSpeedLimits() {
        for (var i = 0; i <= placeIdArray.length / 100; i++) {
            // Ensure that no query exceeds the max 100 placeID limit.
            var start = i * 100;
            var end = Math.min((i + 1) * 100 - 1, placeIdArray.length);

            drawSpeedLimits(start, end);
        }
    }

// Gets speed limits for a 100-segment path and draws a polyline color-coded by
// speed limit. Must be called after processing snap-to-road response.
    function drawSpeedLimits(start, end) {
        var placeIdQuery = '';
        for (var i = start; i < end; i++) {
            placeIdQuery += '&placeId=' + placeIdArray[i];
        }

        $.get('https://roads.googleapis.com/v1/speedLimits',
                'key=' + apiKey + placeIdQuery,
            function (speedData) {
                processSpeedLimitResponse(speedData, start);
            }
        );
    }

// Draw a polyline segment (up to 100 road segments) color-coded by speed limit.
    function processSpeedLimitResponse(speedData, start) {
        var end = start + speedData.speedLimits.length;
        for (var i = 0; i < speedData.speedLimits.length - 1; i++) {
            var speedLimit = speedData.speedLimits[i].speedLimit;
            var color = getColorForSpeed(speedLimit);

            // Take two points for a single-segment polyline.
            var coords = snappedCoordinates.slice(start + i, start + i + 2);

            var snappedPolyline = new google.maps.Polyline({
                path: coords,
                strokeColor: color,
                strokeWeight: 6
            });
            snappedPolyline.setMap(map);
            polylines.push(snappedPolyline);
        }
    }

    function getColorForSpeed(speed_kph) {
        if (speed_kph <= 40) {
            return 'purple';
        }
        if (speed_kph <= 50) {
            return 'blue';
        }
        if (speed_kph <= 60) {
            return 'green';
        }
        if (speed_kph <= 80) {
            return 'yellow';
        }
        if (speed_kph <= 100) {
            return 'orange';
        }
        return 'red';
    }


    $scope.getGeolocationandAddresses = function () {
        console.log($scope.geo.addressesToGetGeolocations);
        var query = {
            'addresses': $scope.geo.addressesToGetGeolocations
        };

        $.getJSON('/getGeolocation', query, function (data) {
                $scope.geo.geolocatedAddresses = data;
                $scope.$apply();
            },
            function (error) {
                $scope.geo.geolocatedAddresses = [];
                console.log(error);
            });
    };


    $scope.calulateMapDistancebyArrayLatLng = function () {
        var arrLatLng = [
            {"lat": "17.405078", "lng": "78.486421"},
            {"lat": "17.405084", "lng": "78.486341"},
            {"lat": "17.405111", "lng": "78.486225"},
            {"lat": "17.405194", "lng": "78.486054"},
            {"lat": "17.405243", "lng": "78.486014"},
            {"lat": "17.40529", "lng": "78.485984"},
            {"lat": "17.40534", "lng": "78.485981"},
            {"lat": "17.405905", "lng": "78.486105"},
            {"lat": "17.405959", "lng": "78.486109"},
            {"lat": "17.406004", "lng": "78.486101"},
            {"lat": "17.40603", "lng": "78.486048"},
            {"lat": "17.406132", "lng": "78.48575"},
            {"lat": "17.406253", "lng": "78.48547"},
            {"lat": "17.406306", "lng": "78.485195"},
            {"lat": "17.406376", "lng": "78.484905"},
            {"lat": "17.40641", "lng": "78.484823"},
            {"lat": "17.407345", "lng": "78.485022"},
            {"lat": "17.40819", "lng": "78.48524"},
            {"lat": "17.409175", "lng": "78.485439"},
            {"lat": "17.409547", "lng": "78.485512"},
            {"lat": "17.409649", "lng": "78.485535"},
            {"lat": "17.409728", "lng": "78.485525"},
            {"lat": "17.40977", "lng": "78.48551"},
            {"lat": "17.409796", "lng": "78.485469"},
            {"lat": "17.409805", "lng": "78.485415"},
            {"lat": "17.409897", "lng": "78.485125"},
            {"lat": "17.410077", "lng": "78.484853"},
            {"lat": "17.410188", "lng": "78.484577"},
            {"lat": "17.410316", "lng": "78.484459"},
            {"lat": "17.41039", "lng": "78.484469"},
            {"lat": "17.410783", "lng": "78.484554"},
            {"lat": "17.410782", "lng": "78.484709"},
            {"lat": "17.410612", "lng": "78.485098"},
            {"lat": "17.410494", "lng": "78.485473"},
            {"lat": "17.410383", "lng": "78.485828"},
            {"lat": "17.41028", "lng": "78.486148"},
            {"lat": "17.410177", "lng": "78.486495"},
            {"lat": "17.410125", "lng": "78.486793"},
            {"lat": "17.410043", "lng": "78.487109"},
            {"lat": "17.409857", "lng": "78.487503"},
            {"lat": "17.409669", "lng": "78.487923"},
            {"lat": "17.409554", "lng": "78.488289"},
            {"lat": "17.409477", "lng": "78.488569"},
            {"lat": "17.409424", "lng": "78.48886"},
            {"lat": "17.409323", "lng": "78.489173"},
            {"lat": "17.409184", "lng": "78.489493"},
            {"lat": "17.40911", "lng": "78.48977"},
            {"lat": "17.409019", "lng": "78.490077"},
            {"lat": "17.408912", "lng": "78.490377"},
            {"lat": "17.408802", "lng": "78.490652"},
            {"lat": "17.408674", "lng": "78.491055"},
            {"lat": "17.408559", "lng": "78.491438"},
            {"lat": "17.408457", "lng": "78.491748"},
            {"lat": "17.408333", "lng": "78.49214"},
            {"lat": "17.40823", "lng": "78.492527"},
            {"lat": "17.40812", "lng": "78.492875"},
            {"lat": "17.407976", "lng": "78.493285"},
            {"lat": "17.407837", "lng": "78.493679"},
            {"lat": "17.407739", "lng": "78.493993"},
            {"lat": "17.407625", "lng": "78.494333"},
            {"lat": "17.407474", "lng": "78.494755"},
            {"lat": "17.407301", "lng": "78.495235"},
            {"lat": "17.407137", "lng": "78.495649"},
            {"lat": "17.407009", "lng": "78.495962"},
            {"lat": "17.406927", "lng": "78.496293"},
            {"lat": "17.406938", "lng": "78.496423"},
            {"lat": "17.407055", "lng": "78.496614"},
            {"lat": "17.407609", "lng": "78.496888"},
            {"lat": "17.407827", "lng": "78.49701"},
            {"lat": "17.407776", "lng": "78.497107"},
            {"lat": "17.407325", "lng": "78.496963"},
            {"lat": "17.406998", "lng": "78.49688"},
            {"lat": "17.406794", "lng": "78.497152"},
            {"lat": "17.406649", "lng": "78.497545"},
            {"lat": "17.406494", "lng": "78.497934"},
            {"lat": "17.406307", "lng": "78.498418"},
            {"lat": "17.40612", "lng": "78.498902"},
            {"lat": "17.405989", "lng": "78.499243"},
            {"lat": "17.405874", "lng": "78.499539"},
            {"lat": "17.405737", "lng": "78.49988"},
            {"lat": "17.405522", "lng": "78.500381"},
            {"lat": "17.405322", "lng": "78.500945"},
            {"lat": "17.405147", "lng": "78.50145"},
            {"lat": "17.405008", "lng": "78.501798"},
            {"lat": "17.404863", "lng": "78.502135"},
            {"lat": "17.40472", "lng": "78.50248"},
            {"lat": "17.40457", "lng": "78.502878"},
            {"lat": "17.404419", "lng": "78.503364"},
            {"lat": "17.404199", "lng": "78.503914"},
            {"lat": "17.40406", "lng": "78.504286"},
            {"lat": "17.403937", "lng": "78.5046"},
            {"lat": "17.403788", "lng": "78.505047"},
            {"lat": "17.403664", "lng": "78.505487"},
            {"lat": "17.40354", "lng": "78.505889"},
            {"lat": "17.403394", "lng": "78.506327"},
            {"lat": "17.403265", "lng": "78.506737"},
            {"lat": "17.403136", "lng": "78.507106"},
            {"lat": "17.402992", "lng": "78.507375"},
            {"lat": "17.402805", "lng": "78.507687"},
            {"lat": "17.402571", "lng": "78.507958"},
            {"lat": "17.402263", "lng": "78.508267"},
            {"lat": "17.401936", "lng": "78.508577"},
            {"lat": "17.401653", "lng": "78.508849"},
            {"lat": "17.401633", "lng": "78.508869"},
            {"lat": "17.401599", "lng": "78.508912"},
            {"lat": "17.401627", "lng": "78.508984"},
            {"lat": "17.401918", "lng": "78.509276"},
            {"lat": "17.402277", "lng": "78.509612"},
            {"lat": "17.402619", "lng": "78.509919"},
            {"lat": "17.402933", "lng": "78.510195"},
            {"lat": "17.403238", "lng": "78.510467"},
            {"lat": "17.403542", "lng": "78.51075"},
            {"lat": "17.403883", "lng": "78.511052"},
            {"lat": "17.404195", "lng": "78.511354"},
            {"lat": "17.404534", "lng": "78.511734"},
            {"lat": "17.404749", "lng": "78.512032"},
            {"lat": "17.404919", "lng": "78.512305"},
            {"lat": "17.405115", "lng": "78.512604"},
            {"lat": "17.405313", "lng": "78.512905"},
            {"lat": "17.405457", "lng": "78.51318"},
            {"lat": "17.405543", "lng": "78.513484"},
            {"lat": "17.405408", "lng": "78.514045"},
            {"lat": "17.405303", "lng": "78.514345"},
            {"lat": "17.405258", "lng": "78.514667"},
            {"lat": "17.405297", "lng": "78.514952"},
            {"lat": "17.405342", "lng": "78.515245"},
            {"lat": "17.405444", "lng": "78.515564"},
            {"lat": "17.405563", "lng": "78.515865"},
            {"lat": "17.405672", "lng": "78.516138"},
            {"lat": "17.405823", "lng": "78.516439"},
            {"lat": "17.406021", "lng": "78.516711"},
            {"lat": "17.406263", "lng": "78.517"},
            {"lat": "17.406542", "lng": "78.517314"},
            {"lat": "17.406788", "lng": "78.517605"},
            {"lat": "17.407082", "lng": "78.517939"},
            {"lat": "17.407394", "lng": "78.518325"},
            {"lat": "17.407689", "lng": "78.518673"},
            {"lat": "17.407967", "lng": "78.518963"},
            {"lat": "17.408304", "lng": "78.51924"},
            {"lat": "17.408638", "lng": "78.519515"},
            {"lat": "17.408988", "lng": "78.519814"},
            {"lat": "17.409376", "lng": "78.52013"},
            {"lat": "17.409721", "lng": "78.52041"},
            {"lat": "17.410061", "lng": "78.520683"},
            {"lat": "17.410389", "lng": "78.520964"},
            {"lat": "17.410735", "lng": "78.521243"},
            {"lat": "17.411115", "lng": "78.521542"},
            {"lat": "17.411518", "lng": "78.521827"},
            {"lat": "17.411898", "lng": "78.522092"},
            {"lat": "17.412335", "lng": "78.522394"},
            {"lat": "17.41268", "lng": "78.522667"},
            {"lat": "17.413109", "lng": "78.522959"},
            {"lat": "17.41354", "lng": "78.523275"},
            {"lat": "17.413999", "lng": "78.523637"},
            {"lat": "17.414412", "lng": "78.523983"},
            {"lat": "17.414724", "lng": "78.524372"},
            {"lat": "17.414903", "lng": "78.524752"},
            {"lat": "17.41499", "lng": "78.525075"},
            {"lat": "17.415116", "lng": "78.525508"},
            {"lat": "17.41525", "lng": "78.525848"},
            {"lat": "17.415423", "lng": "78.52612"},
            {"lat": "17.415687", "lng": "78.526447"},
            {"lat": "17.415959", "lng": "78.52672"},
            {"lat": "17.416376", "lng": "78.527007"},
            {"lat": "17.417125", "lng": "78.527245"},
            {"lat": "17.417397", "lng": "78.527285"},
            {"lat": "17.417551", "lng": "78.527298"},
            {"lat": "17.417713", "lng": "78.527297"},
            {"lat": "17.417867", "lng": "78.527307"},
            {"lat": "17.418027", "lng": "78.527307"},
            {"lat": "17.418187", "lng": "78.527314"},
            {"lat": "17.41888", "lng": "78.527302"},
            {"lat": "17.418928", "lng": "78.527301"},
            {"lat": "17.419003", "lng": "78.527307"},
            {"lat": "17.420082", "lng": "78.527278"},
            {"lat": "17.420482", "lng": "78.527012"},
            {"lat": "17.420764", "lng": "78.526729"},
            {"lat": "17.421025", "lng": "78.526437"},
            {"lat": "17.42133", "lng": "78.526165"},
            {"lat": "17.421773", "lng": "78.525919"},
            {"lat": "17.421839", "lng": "78.525918"},
            {"lat": "17.421891", "lng": "78.52593"},
            {"lat": "17.422457", "lng": "78.526023"},
            {"lat": "17.422904", "lng": "78.526352"},
            {"lat": "17.423073", "lng": "78.526631"},
            {"lat": "17.42324", "lng": "78.52695"},
            {"lat": "17.42345", "lng": "78.527262"},
            {"lat": "17.423668", "lng": "78.527533"},
            {"lat": "17.423944", "lng": "78.527814"},
            {"lat": "17.424232", "lng": "78.528092"},
            {"lat": "17.424473", "lng": "78.528365"},
            {"lat": "17.424748", "lng": "78.528665"},
            {"lat": "17.42503", "lng": "78.528976"},
            {"lat": "17.425302", "lng": "78.529273"},
            {"lat": "17.42557", "lng": "78.529567"},
            {"lat": "17.425832", "lng": "78.52986"},
            {"lat": "17.42608", "lng": "78.530153"},
            {"lat": "17.426269", "lng": "78.530375"},
            {"lat": "17.426503", "lng": "78.530668"},
            {"lat": "17.426626", "lng": "78.530769"},
            {"lat": "17.426838", "lng": "78.530769"},
            {"lat": "17.42711", "lng": "78.530469"},
            {"lat": "17.427307", "lng": "78.530181"},
            {"lat": "17.427491", "lng": "78.529863"},
            {"lat": "17.427655", "lng": "78.529577"},
            {"lat": "17.427833", "lng": "78.529278"},
            {"lat": "17.42795", "lng": "78.528994"},
            {"lat": "17.428006", "lng": "78.528717"},
            {"lat": "17.428066", "lng": "78.528445"},
            {"lat": "17.428058", "lng": "78.528317"},
            {"lat": "17.428354", "lng": "78.528016"},
            {"lat": "17.428553", "lng": "78.527668"},
            {"lat": "17.428786", "lng": "78.527278"},
            {"lat": "17.428969", "lng": "78.527005"},
            {"lat": "17.429213", "lng": "78.526715"},
            {"lat": "17.429482", "lng": "78.526493"},
            {"lat": "17.429203", "lng": "78.526757"},
            {"lat": "17.42898", "lng": "78.52708"},
            {"lat": "17.428805", "lng": "78.527401"},
            {"lat": "17.428663", "lng": "78.527724"},
            {"lat": "17.428487", "lng": "78.528117"},
            {"lat": "17.428308", "lng": "78.528517"},
            {"lat": "17.428142", "lng": "78.52891"},
            {"lat": "17.427974", "lng": "78.529267"},
            {"lat": "17.427817", "lng": "78.52959"},
            {"lat": "17.427593", "lng": "78.529977"},
            {"lat": "17.427338", "lng": "78.530397"},
            {"lat": "17.42702", "lng": "78.530819"},
            {"lat": "17.426679", "lng": "78.531224"},
            {"lat": "17.426335", "lng": "78.531669"},
            {"lat": "17.426042", "lng": "78.53213"},
            {"lat": "17.425805", "lng": "78.532588"},
            {"lat": "17.425593", "lng": "78.533075"},
            {"lat": "17.425405", "lng": "78.533565"},
            {"lat": "17.425265", "lng": "78.534008"},
            {"lat": "17.425174", "lng": "78.534388"},
            {"lat": "17.425083", "lng": "78.534789"},
            {"lat": "17.424973", "lng": "78.535273"},
            {"lat": "17.424843", "lng": "78.535719"},
            {"lat": "17.424679", "lng": "78.536077"},
            {"lat": "17.424425", "lng": "78.536396"},
            {"lat": "17.424159", "lng": "78.536663"},
            {"lat": "17.423785", "lng": "78.536989"},
            {"lat": "17.423308", "lng": "78.537383"},
            {"lat": "17.422793", "lng": "78.537819"},
            {"lat": "17.422363", "lng": "78.538274"},
            {"lat": "17.422012", "lng": "78.538747"},
            {"lat": "17.421709", "lng": "78.539172"},
            {"lat": "17.421402", "lng": "78.539581"},
            {"lat": "17.421119", "lng": "78.539932"},
            {"lat": "17.420847", "lng": "78.540228"},
            {"lat": "17.42059", "lng": "78.540504"},
            {"lat": "17.420025", "lng": "78.54077"},
            {"lat": "17.419644", "lng": "78.541071"},
            {"lat": "17.419397", "lng": "78.541355"},
            {"lat": "17.419324", "lng": "78.541592"},
            {"lat": "17.419482", "lng": "78.54186"},
            {"lat": "17.419712", "lng": "78.542144"},
            {"lat": "17.419982", "lng": "78.542439"},
            {"lat": "17.420225", "lng": "78.542707"},
            {"lat": "17.420485", "lng": "78.543021"},
            {"lat": "17.420744", "lng": "78.543322"},
            {"lat": "17.420985", "lng": "78.543611"},
            {"lat": "17.421237", "lng": "78.543901"},
            {"lat": "17.421514", "lng": "78.544201"},
            {"lat": "17.421835", "lng": "78.544565"},
            {"lat": "17.422146", "lng": "78.544904"},
            {"lat": "17.422424", "lng": "78.545202"},
            {"lat": "17.42267", "lng": "78.545508"},
            {"lat": "17.422924", "lng": "78.545773"},
            {"lat": "17.4232", "lng": "78.546054"},
            {"lat": "17.423466", "lng": "78.546322"},
            {"lat": "17.423693", "lng": "78.546594"},
            {"lat": "17.423933", "lng": "78.546869"},
            {"lat": "17.424177", "lng": "78.547139"},
            {"lat": "17.424482", "lng": "78.547439"},
            {"lat": "17.424769", "lng": "78.547723"},
            {"lat": "17.425049", "lng": "78.547993"},
            {"lat": "17.425295", "lng": "78.548259"},
            {"lat": "17.425561", "lng": "78.548544"},
            {"lat": "17.425848", "lng": "78.548841"},
            {"lat": "17.426112", "lng": "78.54912"},
            {"lat": "17.426277", "lng": "78.549338"},
            {"lat": "17.42651", "lng": "78.549613"},
            {"lat": "17.426769", "lng": "78.54988"},
            {"lat": "17.427035", "lng": "78.55015"},
            {"lat": "17.427332", "lng": "78.550426"},
            {"lat": "17.427668", "lng": "78.550696"},
            {"lat": "17.427989", "lng": "78.550991"},
            {"lat": "17.428353", "lng": "78.551273"},
            {"lat": "17.428756", "lng": "78.551565"},
            {"lat": "17.429087", "lng": "78.551835"},
            {"lat": "17.429412", "lng": "78.552101"},
            {"lat": "17.429771", "lng": "78.552393"},
            {"lat": "17.430109", "lng": "78.552675"},
            {"lat": "17.430447", "lng": "78.552974"},
            {"lat": "17.430774", "lng": "78.553252"},
            {"lat": "17.431103", "lng": "78.55352"},
            {"lat": "17.431434", "lng": "78.553784"},
            {"lat": "17.431998", "lng": "78.554131"},
            {"lat": "17.432813", "lng": "78.554347"},
            {"lat": "17.43398", "lng": "78.554504"},
            {"lat": "17.435328", "lng": "78.55463"},
            {"lat": "17.436108", "lng": "78.554884"},
            {"lat": "17.436557", "lng": "78.555156"},
            {"lat": "17.436864", "lng": "78.555432"},
            {"lat": "17.437152", "lng": "78.555752"},
            {"lat": "17.43735", "lng": "78.55611"},
            {"lat": "17.437531", "lng": "78.556532"},
            {"lat": "17.437734", "lng": "78.55703"},
            {"lat": "17.437907", "lng": "78.557449"},
            {"lat": "17.438068", "lng": "78.557831"},
            {"lat": "17.438225", "lng": "78.558205"},
            {"lat": "17.438343", "lng": "78.558498"},
            {"lat": "17.43839", "lng": "78.558625"},
            {"lat": "17.438308", "lng": "78.558708"},
            {"lat": "17.437853", "lng": "78.558967"},
            {"lat": "17.437292", "lng": "78.55922"},
            {"lat": "17.436749", "lng": "78.55948"},
            {"lat": "17.436588", "lng": "78.559592"},
            {"lat": "17.436568", "lng": "78.559654"},
            {"lat": "17.436597", "lng": "78.559743"},
            {"lat": "17.436423", "lng": "78.559936"}
        ];

        var arr1 = ["17.405078,78.486421",
            "17.405084,78.486341",
            "17.405111,78.486225",
            "17.405194,78.486054",
            "17.405243,78.486014",
            "17.40529,78.485984",
            "17.40534,78.485981",
            "17.405905,78.486105",
            "17.405959,78.486109",
            "17.406004,78.486101",
            "17.40603,78.486048",
            "17.406132,78.48575",
            "17.406253,78.48547",
            "17.406306,78.485195",
            "17.406376,78.484905",
            "17.40641,78.484823",
            "17.407345,78.485022",
            "17.40819,78.48524",
            "17.409175,78.485439",
            "17.409547,78.485512",
            "17.409649,78.485535",
            "17.409728,78.485525",
            "17.40977,78.48551",
            "17.409796,78.485469",
            "17.409805,78.485415",
            "17.409897,78.485125",
            "17.410077,78.484853",
            "17.410188,78.484577",
            "17.410316,78.484459",
            "17.41039,78.484469",
            "17.410783,78.484554",
            "17.410782,78.484709",
            "17.410612,78.485098",
            "17.410494,78.485473",
            "17.410383,78.485828",
            "17.41028,78.486148",
            "17.410177,78.486495",
            "17.410125,78.486793",
            "17.410043,78.487109",
            "17.409857,78.487503",
            "17.409669,78.487923",
            "17.409554,78.488289",
            "17.409477,78.488569",
            "17.409424,78.48886",
            "17.409323,78.489173",
            "17.409184,78.489493",
            "17.40911,78.48977",
            "17.409019,78.490077",
            "17.408912,78.490377",
            "17.408802,78.490652",
            "17.408674,78.491055",
            "17.408559,78.491438",
            "17.408457,78.491748",
            "17.408333,78.49214",
            "17.40823,78.492527",
            "17.40812,78.492875",
            "17.407976,78.493285",
            "17.407837,78.493679",
            "17.407739,78.493993",
            "17.407625,78.494333",
            "17.407474,78.494755",
            "17.407301,78.495235",
            "17.407137,78.495649",
            "17.407009,78.495962",
            "17.406927,78.496293",
            "17.406938,78.496423",
            "17.407055,78.496614",
            "17.407609,78.496888",
            "17.407827,78.49701",
            "17.407776,78.497107",
            "17.407325,78.496963",
            "17.406998,78.49688",
            "17.406794,78.497152",
            "17.406649,78.497545",
            "17.406494,78.497934",
            "17.406307,78.498418",
            "17.40612,78.498902",
            "17.405989,78.499243",
            "17.405874,78.499539",
            "17.405737,78.49988",
            "17.405522,78.500381",
            "17.405322,78.500945",
            "17.405147,78.50145",
            "17.405008,78.501798",
            "17.404863,78.502135",
            "17.40472,78.50248",
            "17.40457,78.502878",
            "17.404419,78.503364",
            "17.404199,78.503914",
            "17.40406,78.504286",
            "17.403937,78.5046",
            "17.403788,78.505047",
            "17.403664,78.505487",
            "17.40354,78.505889",
            "17.403394,78.506327",
            "17.403265,78.506737",
            "17.403136,78.507106",
            "17.402992,78.507375",
            "17.402805,78.507687",
            "17.402571,78.507958",
            "17.402263,78.508267",
            "17.401936,78.508577",
            "17.401653,78.508849",
            "17.401633,78.508869",
            "17.401599,78.508912",
            "17.401627,78.508984",
            "17.401918,78.509276",
            "17.402277,78.509612",
            "17.402619,78.509919",
            "17.402933,78.510195",
            "17.403238,78.510467",
            "17.403542,78.51075",
            "17.403883,78.511052",
            "17.404195,78.511354",
            "17.404534,78.511734",
            "17.404749,78.512032",
            "17.404919,78.512305",
            "17.405115,78.512604",
            "17.405313,78.512905",
            "17.405457,78.51318",
            "17.405543,78.513484",
            "17.405408,78.514045",
            "17.405303,78.514345",
            "17.405258,78.514667",
            "17.405297,78.514952",
            "17.405342,78.515245",
            "17.405444,78.515564",
            "17.405563,78.515865",
            "17.405672,78.516138",
            "17.405823,78.516439",
            "17.406021,78.516711",
            "17.406263,78.517",
            "17.406542,78.517314",
            "17.406788,78.517605",
            "17.407082,78.517939",
            "17.407394,78.518325",
            "17.407689,78.518673",
            "17.407967,78.518963",
            "17.408304,78.51924",
            "17.408638,78.519515",
            "17.408988,78.519814",
            "17.409376,78.52013",
            "17.409721,78.52041",
            "17.410061,78.520683",
            "17.410389,78.520964",
            "17.410735,78.521243",
            "17.411115,78.521542",
            "17.411518,78.521827",
            "17.411898,78.522092",
            "17.412335,78.522394",
            "17.41268,78.522667",
            "17.413109,78.522959",
            "17.41354,78.523275",
            "17.413999,78.523637",
            "17.414412,78.523983",
            "17.414724,78.524372",
            "17.414903,78.524752",
            "17.41499,78.525075",
            "17.415116,78.525508",
            "17.41525,78.525848",
            "17.415423,78.52612",
            "17.415687,78.526447",
            "17.415959,78.52672",
            "17.416376,78.527007",
            "17.417125,78.527245",
            "17.417397,78.527285",
            "17.417551,78.527298",
            "17.417713,78.527297",
            "17.417867,78.527307",
            "17.418027,78.527307",
            "17.418187,78.527314",
            "17.41888,78.527302",
            "17.418928,78.527301",
            "17.419003,78.527307",
            "17.420082,78.527278",
            "17.420482,78.527012",
            "17.420764,78.526729",
            "17.421025,78.526437",
            "17.42133,78.526165",
            "17.421773,78.525919",
            "17.421839,78.525918",
            "17.421891,78.52593",
            "17.422457,78.526023",
            "17.422904,78.526352",
            "17.423073,78.526631",
            "17.42324,78.52695",
            "17.42345,78.527262",
            "17.423668,78.527533",
            "17.423944,78.527814",
            "17.424232,78.528092",
            "17.424473,78.528365",
            "17.424748,78.528665",
            "17.42503,78.528976",
            "17.425302,78.529273",
            "17.42557,78.529567",
            "17.425832,78.52986",
            "17.42608,78.530153",
            "17.426269,78.530375",
            "17.426503,78.530668",
            "17.426626,78.530769",
            "17.426838,78.530769",
            "17.42711,78.530469",
            "17.427307,78.530181",
            "17.427491,78.529863",
            "17.427655,78.529577",
            "17.427833,78.529278",
            "17.42795,78.528994",
            "17.428006,78.528717",
            "17.428066,78.528445",
            "17.428058,78.528317",
            "17.428354,78.528016",
            "17.428553,78.527668",
            "17.428786,78.527278",
            "17.428969,78.527005",
            "17.429213,78.526715",
            "17.429482,78.526493",
            "17.429203,78.526757",
            "17.42898,78.52708",
            "17.428805,78.527401",
            "17.428663,78.527724",
            "17.428487,78.528117",
            "17.428308,78.528517",
            "17.428142,78.52891",
            "17.427974,78.529267",
            "17.427817,78.52959",
            "17.427593,78.529977",
            "17.427338,78.530397",
            "17.42702,78.530819",
            "17.426679,78.531224",
            "17.426335,78.531669",
            "17.426042,78.53213",
            "17.425805,78.532588",
            "17.425593,78.533075",
            "17.425405,78.533565",
            "17.425265,78.534008",
            "17.425174,78.534388",
            "17.425083,78.534789",
            "17.424973,78.535273",
            "17.424843,78.535719",
            "17.424679,78.536077",
            "17.424425,78.536396",
            "17.424159,78.536663",
            "17.423785,78.536989",
            "17.423308,78.537383",
            "17.422793,78.537819",
            "17.422363,78.538274",
            "17.422012,78.538747",
            "17.421709,78.539172",
            "17.421402,78.539581",
            "17.421119,78.539932",
            "17.420847,78.540228",
            "17.42059,78.540504",
            "17.420025,78.54077",
            "17.419644,78.541071",
            "17.419397,78.541355",
            "17.419324,78.541592",
            "17.419482,78.54186",
            "17.419712,78.542144",
            "17.419982,78.542439",
            "17.420225,78.542707",
            "17.420485,78.543021",
            "17.420744,78.543322",
            "17.420985,78.543611",
            "17.421237,78.543901",
            "17.421514,78.544201",
            "17.421835,78.544565",
            "17.422146,78.544904",
            "17.422424,78.545202",
            "17.42267,78.545508",
            "17.422924,78.545773",
            "17.4232,78.546054",
            "17.423466,78.546322",
            "17.423693,78.546594",
            "17.423933,78.546869",
            "17.424177,78.547139",
            "17.424482,78.547439",
            "17.424769,78.547723",
            "17.425049,78.547993",
            "17.425295,78.548259",
            "17.425561,78.548544",
            "17.425848,78.548841",
            "17.426112,78.54912",
            "17.426277,78.549338",
            "17.42651,78.549613",
            "17.426769,78.54988",
            "17.427035,78.55015",
            "17.427332,78.550426",
            "17.427668,78.550696",
            "17.427989,78.550991",
            "17.428353,78.551273",
            "17.428756,78.551565",
            "17.429087,78.551835",
            "17.429412,78.552101",
            "17.429771,78.552393",
            "17.430109,78.552675",
            "17.430447,78.552974",
            "17.430774,78.553252",
            "17.431103,78.55352",
            "17.431434,78.553784",
            "17.431998,78.554131",
            "17.432813,78.554347",
            "17.43398,78.554504",
            "17.435328,78.55463",
            "17.436108,78.554884",
            "17.436557,78.555156",
            "17.436864,78.555432",
            "17.437152,78.555752",
            "17.43735,78.55611",
            "17.437531,78.556532",
            "17.437734,78.55703",
            "17.437907,78.557449",
            "17.438068,78.557831",
            "17.438225,78.558205",
            "17.438343,78.558498",
            "17.43839,78.558625",
            "17.438308,78.558708",
            "17.437853,78.558967",
            "17.437292,78.55922",
            "17.436749,78.55948",
            "17.436588,78.559592",
            "17.436568,78.559654",
            "17.436597,78.559743",
            "17.436423,78.559936"];

        console.log(arrLatLng.length);

        var cnty = 0;
        var p_cnty = 0;
        var temparr = [];
        temparr[cnty] = [];
        for (var f = 0; f < arr1.length; f++) {
            if (f % 100 != 0)
                temparr[cnty].push(arr1[f]);
            else {
                if (f == 0)
                    continue
                p_cnty = angular.copy(cnty);
                console.log(p_cnty)
                $.get('https://roads.googleapis.com/v1/snapToRoads', {
                    interpolate: true,
                    key: apiKey,
                    path: temparr[p_cnty].join('|')
                }, function (data) {
//            console.log('===========================================================');
                    console.log('yoooooooooo');
                    if (data.snappedPoints) {
                        console.log(p_cnty)
                        console.log('----------')
                        for (var h = 0; h < data.snappedPoints.length; h++) {
                            if (data.snappedPoints[h].originalIndex && data.snappedPoints[h].location.latitude && data.snappedPoints[h].location.longitude) {
                                arrLatLng[h + (p_cnty * 100)] = {"lat": data.snappedPoints[h].location.latitude, "lng": data.snappedPoints[h].location.longitude}
                            }
                        }
                    }

                }(p_cnty));
                cnty = cnty + 1;
                temparr[cnty] = []

            }
        }


//        $.get('https://roads.googleapis.com/v1/snapToRoads', {
//            interpolate: true,
//            key: apiKey,
//            path: arr2.join('|')
//        }, function (data) {
//
//            if (data.snappedPoints) {
//                for (var h =0; h<data.snappedPoints.length;h++){
//                    if(data.snappedPoints[h].originalIndex && data.snappedPoints[h].location.latitude && data.snappedPoints[h].location.longitude) {
//                        arrLatLng[h+100] = {"lat" : data.snappedPoints[h].location.latitude,"lng" : data.snappedPoints[h].location.longitude}
//                    }
//                }
//            }
//
//        });
//        $.get('https://roads.googleapis.com/v1/snapToRoads', {
//            interpolate: true,
//            key: apiKey,
//            path: arr3.join('|')
//        }, function (data) {
//
//            if (data.snappedPoints) {
//                for (var h =0; h<data.snappedPoints.length;h++){
//                    if(data.snappedPoints[h].originalIndex && data.snappedPoints[h].location.latitude && data.snappedPoints[h].location.longitude) {
//                        arrLatLng[h+200] = {"lat" : data.snappedPoints[h].location.latitude,"lng" : data.snappedPoints[h].location.longitude}
//                    }
//                }
//            }
//
//        });
//        $.get('https://roads.googleapis.com/v1/snapToRoads', {
//            interpolate: true,
//            key: apiKey,
//            path: arr4.join('|')
//        }, function (data) {
//            console.log(arrLatLng.length);
//            if (data.snappedPoints) {
//                for (var h =0; h<data.snappedPoints.length;h++){
//                    if(data.snappedPoints[h].originalIndex && data.snappedPoints[h].location.latitude && data.snappedPoints[h].location.longitude) {
//                        arrLatLng[h+300] = {"lat" : data.snappedPoints[h].location.latitude,"lng" : data.snappedPoints[h].location.longitude}
//                    }
//                }
//
//
//            }
//
//        });
        setTimeout(function () {


            console.log('heeeeeeeeeeeeeeeeeeeee')
            var totalDist1 = calcPathLength(arrLatLng);
            var totalDist2 = 0;
            var totalDist3 = 0;

            for (i = 0; i < arrLatLng.length - 1; i++) {
                if (arrLatLng[i] == undefined) {
                    i = i + 1;
                }
                if (arrLatLng[i + 1] == undefined) {
//                        arrLatLng[i + 1] = arrLatLng[i + 2];
                    arrLatLng.splice(i + 1, 1)
                }
                if (arrLatLng[i] && arrLatLng[i + 1]) {
                    totalDist2 = totalDist2 + distance(arrLatLng[i].lat, arrLatLng[i].lng, arrLatLng[i + 1].lat, arrLatLng[i + 1].lng, "K");
                    totalDist3 = totalDist2 + getDistanceFromLatLonInKm(arrLatLng[i].lat, arrLatLng[i].lng, arrLatLng[i + 1].lat, arrLatLng[i + 1].lng);
                }
            }


            console.log("------------Total distance is 2---------------");
            console.log(totalDist1);
            console.log(totalDist2);
            console.log(totalDist3);
            console.log("----------------------------s---------------");
        }, 2500);

    };

    function calcPathLength(path) {
        var total = 0;
        for (var i = 0; i < path.length - 1; i++) {
            if (path[i] == undefined) {
                i = i + 1;
            }
            if (path[i + 1] == undefined) {
                path.splice(i + 1, 1)
            }
            if (path[i] && path[i + 1]) {
                var pos1 = new google.maps.LatLng(path[i].lat, path[i].lng);
                var pos2 = new google.maps.LatLng(path[i + 1].lat, path[i + 1].lng);
                total += google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2);
            }
        }
        ;
        return total;
    };

    function distance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344
        }
        ;
        if (unit == "N") {
            dist = dist * 0.8684
        }
        ;
        return dist
    }

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }


    $scope.locatePointsInsideCityorOutside = function () {

        var inside = false;
        var polygon = $scope.zipCodesData[0].geometry.coordinates;
        for (var i = 0; i < arrUserMarkers.length; i++) {
            arrUserMarkers[i].setMap(null);
        }
        arrUserMarkers = [];


        angular.forEach($scope.addresses, function (item, indx) {
            if (indx < $scope.addresses.length-1) {
                inside = isPointInPoly([ item.lat, item.lng ], polygon);
                item.status = inside == true ? 'Inside' : 'Outside';

                var latitude = item.lat;
                var longitude = item.lng;

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(parseFloat(latitude), parseFloat(longitude)),
                    icon: inside == true ? 'images/icon/greenMarker.png' : 'images/icon/redMarker.png',
                    map: map
                });

                marker.setMap(map);
                var infoWindow = new google.maps.InfoWindow({
                    content:  item.lat + ',' + item.lng
                });
                marker.addListener('click', function () {
                    for (i = 0; i < arrInfowindows.length; i++) {
                        arrInfowindows[i].close();
                    }
                    arrInfowindows = [];
                    infoWindow.open(map, marker);
                    arrInfowindows.push(infoWindow);
                });
                arrUserMarkers.push(marker);
                arrMarkers.push(marker);
            }
        });
    };


    function isPointInPoly(point, vs) {
        var x = point[1], y = point[0];
        console.log(x);
        console.log(y);
//        var y = 28.659141, x =  77.083273;
//        28.659141	77.083273
//        28.552771	76.744832
//        28.743942	77.057525
//        28.900662	77.464005


        vs = vs[0];
        var poly = vs;
        var pt = point;

//        var a = google.maps.geometry.poly.containsLocation(point, vs);

        var inside = false;

//        for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
//            ((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1] < poly[i].y))
//            && (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])
//            && (c = !c);
//        console.log(c);

        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            var xi = vs[i][0], yi = vs[i][1];
            var xj = vs[j][0], yj = vs[j][1];

            var intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }

        if (inside == false) {
            x = point[0];
            y = point[1];
//            console.log(x);
//            console.log(y);


            for (i = 0, j = vs.length - 1; i < vs.length; j = i++) {
                xi = vs[i][0], yi = vs[i][1];
                xj = vs[j][0], yj = vs[j][1];

                intersect = ((yi > y) != (yj > y))
                    && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                if (intersect) inside = !inside;
            }
        }
//        var msg  = 'Location is ' + inside?'inside ':'outside ' + 'the boundry'
//        alert(inside );

        return inside;
    }

    $scope.searchPOI = function(){
        for (var i = 0; i < arrMarkers.length; i++) {
            arrMarkers[i].setMap(null);
        }
        arrMarkers = [];

        var location = new google.maps.LatLng($scope.wayPointsPOI[0].location.geometry.location.lat(), $scope.wayPointsPOI[0].location.geometry.location.lng());
// Specify location, radius and place types for your Places API search.
        var request = {
            location: location,
            name: $scope.wayPointsPOI.POI,
            rankBy : google.maps.places.RankBy.DISTANCE,
            type:[]
        };

        // Create the PlaceService and send the request.
        // Handle the callback with an anonymous function.
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, placePOIs);
    };

    function placePOIs(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            map.setZoom(13);
            map.setCenter($scope.wayPointsPOI[0].location.geometry.location);
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
//            icon : place.icon
        });
        var infoWindow = new google.maps.InfoWindow();

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(place.name);
            infoWindow.open(map, this);
        });

        arrMarkers.push(marker);
    }

//////////////////////////////////////Default function calling on load////////////////////////////////
    setTimeout(function () {
        $scope.initMap();

//        $scope.placeZipcodesBoundries();
    }, 100);
})
;


angular.module('angularjs_with_Nodejs').directive('googleplace', function () {
    var markers = [];
    return {
        require: 'ngModel',
        scope: true,
        link: function ($scope, element) {

            var autocomplete = new google.maps.places.Autocomplete(element[0]);
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();

                if (element.context.id == "src") {
                    $scope.wayPoints[0]['origin'] = {"Latitude": place.geometry.location.lat(), "Longitude": place.geometry.location.lng()};

                }
                else if (element.context.id == "dest") {
                    $scope.wayPoints[0]['destination'] = {"Latitude": place.geometry.location.lat(), "Longitude": place.geometry.location.lng()};
                }
                else if (element.context.id == "srcNav") {
                    $scope.wayPointsNav[0]['origin'] = {"Latitude": place.geometry.location.lat(), "Longitude": place.geometry.location.lng()};
                    $scope.wayPointsNav[0]['originName'] = place.name;

                }
                else if (element.context.id == "destNav") {
                    $scope.wayPointsNav[0]['destination'] = {"Latitude": place.geometry.location.lat(), "Longitude": place.geometry.location.lng()};
                    $scope.wayPointsNav[0]['destinationName'] = place.name;

                }
                else if (element.context.id == "srcPOI") {
                    $scope.wayPointsPOI[0]['location'] = place;// {"Latitude": place.geometry.location.lat(), "Longitude": place.geometry.location.lng()};
                    $scope.wayPointsPOI[0]['locationName'] = place.name;

                }

            });
            function setMarker(position) {
                markers.push(position); // add marker to array
                return markers;

            };
        }
    };
});