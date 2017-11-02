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

    $scope.zipCodesData = null;
    var geoCodes = {};

    $scope.title = "Dashboard";
    $scope.logoFileName = "images/VLCC.png";
    $scope.showPersonAnalysis = false;
    var map;
    var myLatLng, arrMarkers = [], arrUserMarkers = [], arrInfowindows = [], arrInfowindowsAssetTrackingMarkers = [];
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
//        $scope.calulateMapDistancebyArrayLatLng();
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
        $scope.filter.selectedCategory = "All";
        $scope.showNavigationSaveConfirmation = false;
        map.setZoom(5);

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
                if (index == 1) {
                    var geocoder = new google.maps.Geocoder();
                    // Get LatLng information by name
                    geocoder.geocode({
                        address: item.properties.PINCODE,
//                                    location: item.properties.PINCODE
                    }, function (results, status) {
                        if (status === 'OK') {
                            map.setCenter(results[0].geometry.location);
                        }
                    });
                }
                mapDataToload['features'].push(item);
            });

            map.data.forEach(function (feature) {
                // If you want, check here for some constraints.
                map.data.remove(feature);
            });
            map.data.addGeoJson(mapDataToload);
            map.data.addListener('click', function (event) {
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
//            map.setZoom(8);

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
            {"lat": "17.332463", "lng": "78.605945"},
            {"lat": "17.33212", "lng": "78.606226"},
            {"lat": "17.331765", "lng": "78.606655"},
            {"lat": "17.33138", "lng": "78.607084"},
            {"lat": "17.330985", "lng": "78.60759"},
            {"lat": "17.33033", "lng": "78.607298"},
            {"lat": "17.329822", "lng": "78.606648"},
            {"lat": "17.32939", "lng": "78.606102"},
            {"lat": "17.329055", "lng": "78.605742"},
            {"lat": "17.328103", "lng": "78.605521"},
            {"lat": "17.327051", "lng": "78.605342"},
            {"lat": "17.326908", "lng": "78.60562"},
            {"lat": "17.326527", "lng": "78.606495"},
            {"lat": "17.325866", "lng": "78.607417"},
            {"lat": "17.325483", "lng": "78.607887"},
            {"lat": "17.325424", "lng": "78.6078"},
            {"lat": "17.325633", "lng": "78.607529"},
            {"lat": "17.326261", "lng": "78.606739"},
            {"lat": "17.326703", "lng": "78.605905"},
            {"lat": "17.326993", "lng": "78.604726"},
            {"lat": "17.327207", "lng": "78.603521"},
            {"lat": "17.32738", "lng": "78.602457"},
            {"lat": "17.327662", "lng": "78.601227"},
            {"lat": "17.328063", "lng": "78.599934"},
            {"lat": "17.328425", "lng": "78.598803"},
            {"lat": "17.328869", "lng": "78.597437"},
            {"lat": "17.329321", "lng": "78.596021"},
            {"lat": "17.329683", "lng": "78.594917"},
            {"lat": "17.330145", "lng": "78.593829"},
            {"lat": "17.330573", "lng": "78.592908"},
            {"lat": "17.331248", "lng": "78.591793"},
            {"lat": "17.332033", "lng": "78.590493"},
            {"lat": "17.332733", "lng": "78.589308"},
            {"lat": "17.333415", "lng": "78.588157"},
            {"lat": "17.334052", "lng": "78.586837"},
            {"lat": "17.33465", "lng": "78.585505"},
            {"lat": "17.335257", "lng": "78.584194"},
            {"lat": "17.335598", "lng": "78.582779"},
            {"lat": "17.335787", "lng": "78.581467"},
            {"lat": "17.335949", "lng": "78.580142"},
            {"lat": "17.336072", "lng": "78.578982"},
            {"lat": "17.336217", "lng": "78.577749"},
            {"lat": "17.336402", "lng": "78.576289"},
            {"lat": "17.336562", "lng": "78.57491"},
            {"lat": "17.336559", "lng": "78.574373"},
            {"lat": "17.336597", "lng": "78.57408"},
            {"lat": "17.336703", "lng": "78.573609"},
            {"lat": "17.336845", "lng": "78.573052"},
            {"lat": "17.337147", "lng": "78.572125"},
            {"lat": "17.337532", "lng": "78.570948"},
            {"lat": "17.337864", "lng": "78.569923"},
            {"lat": "17.338138", "lng": "78.569104"},
            {"lat": "17.338428", "lng": "78.56822"},
            {"lat": "17.33887", "lng": "78.56728"},
            {"lat": "17.339428", "lng": "78.566272"},
            {"lat": "17.340019", "lng": "78.565103"},
            {"lat": "17.340465", "lng": "78.563992"},
            {"lat": "17.340672", "lng": "78.56279"},
            {"lat": "17.340858", "lng": "78.561472"},
            {"lat": "17.341056", "lng": "78.560113"},
            {"lat": "17.341298", "lng": "78.558757"},
            {"lat": "17.341677", "lng": "78.557884"},
            {"lat": "17.34224", "lng": "78.557065"},
            {"lat": "17.342575", "lng": "78.556639"},
            {"lat": "17.342992", "lng": "78.55602"},
            {"lat": "17.343417", "lng": "78.555445"},
            {"lat": "17.343871", "lng": "78.554767"},
            {"lat": "17.3444", "lng": "78.553959"},
            {"lat": "17.344942", "lng": "78.553152"},
            {"lat": "17.345464", "lng": "78.552358"},
            {"lat": "17.345865", "lng": "78.551756"},
            {"lat": "17.346043", "lng": "78.551461"},
            {"lat": "17.346287", "lng": "78.55107"},
            {"lat": "17.346525", "lng": "78.550772"},
            {"lat": "17.346834", "lng": "78.550417"},
            {"lat": "17.347196", "lng": "78.549999"},
            {"lat": "17.347671", "lng": "78.54955"},
            {"lat": "17.348302", "lng": "78.549037"},
            {"lat": "17.348867", "lng": "78.54857"},
            {"lat": "17.349252", "lng": "78.548259"},
            {"lat": "17.3494", "lng": "78.547959"},
            {"lat": "17.349685", "lng": "78.547634"},
            {"lat": "17.350578", "lng": "78.547132"},
            {"lat": "17.351174", "lng": "78.546781"},
            {"lat": "17.352162", "lng": "78.546352"},
            {"lat": "17.353147", "lng": "78.546098"},
            {"lat": "17.354083", "lng": "78.545854"},
            {"lat": "17.35514", "lng": "78.545575"},
            {"lat": "17.356012", "lng": "78.545359"},
            {"lat": "17.356827", "lng": "78.545142"},
            {"lat": "17.357829", "lng": "78.544899"},
            {"lat": "17.358812", "lng": "78.544648"},
            {"lat": "17.359855", "lng": "78.544375"},
            {"lat": "17.360938", "lng": "78.544081"},
            {"lat": "17.361952", "lng": "78.54379"},
            {"lat": "17.36315", "lng": "78.543434"},
            {"lat": "17.364156", "lng": "78.54309"},
            {"lat": "17.365112", "lng": "78.542582"},
            {"lat": "17.365966", "lng": "78.5419"},
            {"lat": "17.366704", "lng": "78.541119"},
            {"lat": "17.367312", "lng": "78.540185"},
            {"lat": "17.367707", "lng": "78.539391"},
            {"lat": "17.36802", "lng": "78.53849"},
            {"lat": "17.368201", "lng": "78.53754"},
            {"lat": "17.368274", "lng": "78.53663"},
            {"lat": "17.368288", "lng": "78.535889"},
            {"lat": "17.368286", "lng": "78.534878"},
            {"lat": "17.368322", "lng": "78.533948"},
            {"lat": "17.368343", "lng": "78.533118"},
            {"lat": "17.368347", "lng": "78.532337"},
            {"lat": "17.368375", "lng": "78.531845"},
            {"lat": "17.368401", "lng": "78.53099"},
            {"lat": "17.36841", "lng": "78.530327"},
            {"lat": "17.368425", "lng": "78.529453"},
            {"lat": "17.368424", "lng": "78.529038"},
            {"lat": "17.368463", "lng": "78.528172"},
            {"lat": "17.368478", "lng": "78.527669"},
            {"lat": "17.368487", "lng": "78.527224"},
            {"lat": "17.368506", "lng": "78.526341"},
            {"lat": "17.368439", "lng": "78.525827"},
            {"lat": "17.368415", "lng": "78.525536"},
            {"lat": "17.368518", "lng": "78.524747"},
            {"lat": "17.368534", "lng": "78.524094"},
            {"lat": "17.368562", "lng": "78.523402"},
            {"lat": "17.368567", "lng": "78.522428"},
            {"lat": "17.368588", "lng": "78.521717"},
            {"lat": "17.368597", "lng": "78.52126"},
            {"lat": "17.368754", "lng": "78.521423"},
            {"lat": "17.368766", "lng": "78.521458"},
            {"lat": "17.36881", "lng": "78.521458"},
            {"lat": "17.369017", "lng": "78.521444"},
            {"lat": "17.369135", "lng": "78.521455"},
            {"lat": "17.369247", "lng": "78.52146"},
            {"lat": "17.36943", "lng": "78.521443"},
            {"lat": "17.369662", "lng": "78.521372"},
            {"lat": "17.369825", "lng": "78.521368"},
            {"lat": "17.369959", "lng": "78.521379"},
            {"lat": "17.370124", "lng": "78.521341"},
            {"lat": "17.370282", "lng": "78.521069"},
            {"lat": "17.370469", "lng": "78.520857"},
            {"lat": "17.370576", "lng": "78.520868"},
            {"lat": "17.37068", "lng": "78.520871"},
            {"lat": "17.371489", "lng": "78.520893"},
            {"lat": "17.371547", "lng": "78.520901"},
            {"lat": "17.371634", "lng": "78.5209"},
            {"lat": "17.371735", "lng": "78.520884"},
            {"lat": "17.371818", "lng": "78.520889"},
            {"lat": "17.371892", "lng": "78.52091"},
            {"lat": "17.372724", "lng": "78.521005"},
            {"lat": "17.372799", "lng": "78.521032"},
            {"lat": "17.372854", "lng": "78.521039"},
            {"lat": "17.372914", "lng": "78.520991"},
            {"lat": "17.373034", "lng": "78.520704"},
            {"lat": "17.373164", "lng": "78.52043"},
            {"lat": "17.373679", "lng": "78.520181"},
            {"lat": "17.373458", "lng": "78.519078"},
            {"lat": "17.373544", "lng": "78.518876"},
            {"lat": "17.373488", "lng": "78.51884"},
            {"lat": "17.373442", "lng": "78.51882"},
            {"lat": "17.372428", "lng": "78.518638"},
            {"lat": "17.371489", "lng": "78.51841"},
            {"lat": "17.3706", "lng": "78.51823"},
            {"lat": "17.369745", "lng": "78.518014"},
            {"lat": "17.369486", "lng": "78.517997"},
            {"lat": "17.369349", "lng": "78.518068"},
            {"lat": "17.369245", "lng": "78.518368"},
            {"lat": "17.36904", "lng": "78.519207"},
            {"lat": "17.36887", "lng": "78.520314"},
            {"lat": "17.368822", "lng": "78.521063"},
            {"lat": "17.368797", "lng": "78.521579"},
            {"lat": "17.368765", "lng": "78.522212"},
            {"lat": "17.368743", "lng": "78.522872"},
            {"lat": "17.368726", "lng": "78.523637"},
            {"lat": "17.368698", "lng": "78.52446"},
            {"lat": "17.368657", "lng": "78.525002"},
            {"lat": "17.36871", "lng": "78.525719"},
            {"lat": "17.368648", "lng": "78.526613"},
            {"lat": "17.368603", "lng": "78.527405"},
            {"lat": "17.368585", "lng": "78.528339"},
            {"lat": "17.368552", "lng": "78.528904"},
            {"lat": "17.368504", "lng": "78.529548"},
            {"lat": "17.368492", "lng": "78.530249"},
            {"lat": "17.368487", "lng": "78.530561"},
            {"lat": "17.368432", "lng": "78.531382"},
            {"lat": "17.368425", "lng": "78.53194"},
            {"lat": "17.368415", "lng": "78.532243"},
            {"lat": "17.368424", "lng": "78.532672"},
            {"lat": "17.368414", "lng": "78.533437"},
            {"lat": "17.368394", "lng": "78.534359"},
            {"lat": "17.368374", "lng": "78.535123"},
            {"lat": "17.368428", "lng": "78.535804"},
            {"lat": "17.368382", "lng": "78.536135"},
            {"lat": "17.368343", "lng": "78.537043"},
            {"lat": "17.368255", "lng": "78.537875"},
            {"lat": "17.368087", "lng": "78.538681"},
            {"lat": "17.367865", "lng": "78.539409"},
            {"lat": "17.367595", "lng": "78.539962"},
            {"lat": "17.367207", "lng": "78.540608"},
            {"lat": "17.36661", "lng": "78.541439"},
            {"lat": "17.365789", "lng": "78.542258"},
            {"lat": "17.365005", "lng": "78.54285"},
            {"lat": "17.364065", "lng": "78.543327"},
            {"lat": "17.362963", "lng": "78.543698"},
            {"lat": "17.361905", "lng": "78.543994"},
            {"lat": "17.360987", "lng": "78.544235"},
            {"lat": "17.359994", "lng": "78.544495"},
            {"lat": "17.35909", "lng": "78.544726"},
            {"lat": "17.358173", "lng": "78.544947"},
            {"lat": "17.35725", "lng": "78.545185"},
            {"lat": "17.356363", "lng": "78.545407"},
            {"lat": "17.355538", "lng": "78.545637"},
            {"lat": "17.354684", "lng": "78.545855"},
            {"lat": "17.353869", "lng": "78.546073"},
            {"lat": "17.352985", "lng": "78.546291"},
            {"lat": "17.35201", "lng": "78.546565"},
            {"lat": "17.351177", "lng": "78.546971"},
            {"lat": "17.350646", "lng": "78.547422"},
            {"lat": "17.350057", "lng": "78.547838"},
            {"lat": "17.349635", "lng": "78.54821"},
            {"lat": "17.348772", "lng": "78.548894"},
            {"lat": "17.348042", "lng": "78.549492"},
            {"lat": "17.347482", "lng": "78.54994"},
            {"lat": "17.347208", "lng": "78.550218"},
            {"lat": "17.346973", "lng": "78.550508"},
            {"lat": "17.34674", "lng": "78.550876"},
            {"lat": "17.346519", "lng": "78.551145"},
            {"lat": "17.346319", "lng": "78.5512"},
            {"lat": "17.346105", "lng": "78.551483"},
            {"lat": "17.345695", "lng": "78.5521"},
            {"lat": "17.345342", "lng": "78.552635"},
            {"lat": "17.345014", "lng": "78.553119"},
            {"lat": "17.344766", "lng": "78.553471"},
            {"lat": "17.344452", "lng": "78.553955"},
            {"lat": "17.344185", "lng": "78.554366"},
            {"lat": "17.343997", "lng": "78.55467"},
            {"lat": "17.34384", "lng": "78.554978"},
            {"lat": "17.343485", "lng": "78.555567"},
            {"lat": "17.342987", "lng": "78.556253"},
            {"lat": "17.342519", "lng": "78.556937"},
            {"lat": "17.342229", "lng": "78.557425"},
            {"lat": "17.342011", "lng": "78.557778"},
            {"lat": "17.341624", "lng": "78.558417"},
            {"lat": "17.341387", "lng": "78.5591"},
            {"lat": "17.341247", "lng": "78.559605"},
            {"lat": "17.341071", "lng": "78.560506"},
            {"lat": "17.340924", "lng": "78.561569"},
            {"lat": "17.340733", "lng": "78.562935"},
            {"lat": "17.34045", "lng": "78.564321"},
            {"lat": "17.33987", "lng": "78.565544"},
            {"lat": "17.339301", "lng": "78.566654"},
            {"lat": "17.338664", "lng": "78.567782"},
            {"lat": "17.338237", "lng": "78.568957"},
            {"lat": "17.337912", "lng": "78.569931"},
            {"lat": "17.337533", "lng": "78.57109"},
            {"lat": "17.337128", "lng": "78.57239"},
            {"lat": "17.336868", "lng": "78.573275"},
            {"lat": "17.336767", "lng": "78.57404"},
            {"lat": "17.336622", "lng": "78.574886"},
            {"lat": "17.336489", "lng": "78.576017"},
            {"lat": "17.336348", "lng": "78.57723"},
            {"lat": "17.33623", "lng": "78.578192"},
            {"lat": "17.336213", "lng": "78.578493"},
            {"lat": "17.336113", "lng": "78.579197"},
            {"lat": "17.33606", "lng": "78.579605"},
            {"lat": "17.335986", "lng": "78.580363"},
            {"lat": "17.335839", "lng": "78.581586"},
            {"lat": "17.335657", "lng": "78.582958"},
            {"lat": "17.335339", "lng": "78.584275"},
            {"lat": "17.334946", "lng": "78.585194"},
            {"lat": "17.33439", "lng": "78.586298"},
            {"lat": "17.333792", "lng": "78.587582"},
            {"lat": "17.333178", "lng": "78.588679"},
            {"lat": "17.332432", "lng": "78.589895"},
            {"lat": "17.331733", "lng": "78.59107"},
            {"lat": "17.33122", "lng": "78.591924"},
            {"lat": "17.330629", "lng": "78.592961"},
            {"lat": "17.33009", "lng": "78.594068"},
            {"lat": "17.329635", "lng": "78.595281"},
            {"lat": "17.32929", "lng": "78.596289"},
            {"lat": "17.328894", "lng": "78.597563"},
            {"lat": "17.328447", "lng": "78.598899"},
            {"lat": "17.328159", "lng": "78.599794"},
            {"lat": "17.327837", "lng": "78.600825"},
            {"lat": "17.327503", "lng": "78.602162"},
            {"lat": "17.327329", "lng": "78.603158"},
            {"lat": "17.327131", "lng": "78.604257"},
            {"lat": "17.32701", "lng": "78.604901"},
            {"lat": "17.326868", "lng": "78.605639"},
            {"lat": "17.326525", "lng": "78.606468"},
            {"lat": "17.325888", "lng": "78.607367"},
            {"lat": "17.325404", "lng": "78.60802"},
            {"lat": "17.324746", "lng": "78.608825"},
            {"lat": "17.324074", "lng": "78.609702"},
            {"lat": "17.32342", "lng": "78.61057"},
            {"lat": "17.32285", "lng": "78.61135"},
            {"lat": "17.322313", "lng": "78.612037"},
            {"lat": "17.321664", "lng": "78.612888"},
            {"lat": "17.321095", "lng": "78.613649"},
            {"lat": "17.320597", "lng": "78.61438"},
            {"lat": "17.320284", "lng": "78.615353"},
            {"lat": "17.320092", "lng": "78.616547"},
            {"lat": "17.319901", "lng": "78.618294"},
            {"lat": "17.320043", "lng": "78.619859"},
            {"lat": "17.320218", "lng": "78.621357"},
            {"lat": "17.320373", "lng": "78.622865"},
            {"lat": "17.320547", "lng": "78.624502"},
            {"lat": "17.32064", "lng": "78.62606"},
            {"lat": "17.32077", "lng": "78.627472"},
            {"lat": "17.321109", "lng": "78.628909"},
            {"lat": "17.32145", "lng": "78.630269"},
            {"lat": "17.321809", "lng": "78.631662"},
            {"lat": "17.322168", "lng": "78.633262"},
            {"lat": "17.322267", "lng": "78.634919"},
            {"lat": "17.322185", "lng": "78.636125"},
            {"lat": "17.321934", "lng": "78.637462"},
            {"lat": "17.321644", "lng": "78.638433"},
            {"lat": "17.32139", "lng": "78.639185"},
            {"lat": "17.321158", "lng": "78.63986"},
            {"lat": "17.320896", "lng": "78.640693"},
            {"lat": "17.320572", "lng": "78.641746"},
            {"lat": "17.32022", "lng": "78.642732"},
            {"lat": "17.319844", "lng": "78.644054"},
            {"lat": "17.319689", "lng": "78.645508"},
            {"lat": "17.319637", "lng": "78.647372"},
            {"lat": "17.319679", "lng": "78.649137"},
            {"lat": "17.319603", "lng": "78.650841"},
            {"lat": "17.31907", "lng": "78.652401"},
            {"lat": "17.318499", "lng": "78.653992"},
            {"lat": "17.317967", "lng": "78.655527"},
            {"lat": "17.317473", "lng": "78.657127"},
            {"lat": "17.317307", "lng": "78.658692"},
            {"lat": "17.317378", "lng": "78.660373"},
            {"lat": "17.317487", "lng": "78.662057"},
            {"lat": "17.317499", "lng": "78.663344"},
            {"lat": "17.317412", "lng": "78.664872"},
            {"lat": "17.317187", "lng": "78.666425"},
            {"lat": "17.316777", "lng": "78.667882"},
            {"lat": "17.316334", "lng": "78.669378"},
            {"lat": "17.315957", "lng": "78.670788"},
            {"lat": "17.31558", "lng": "78.672344"},
            {"lat": "17.315067", "lng": "78.673931"},
            {"lat": "17.314426", "lng": "78.675592"},
            {"lat": "17.313829", "lng": "78.677217"},
            {"lat": "17.313198", "lng": "78.678869"},
            {"lat": "17.312625", "lng": "78.680329"},
            {"lat": "17.312018", "lng": "78.681831"},
            {"lat": "17.311722", "lng": "78.682459"},
            {"lat": "17.311619", "lng": "78.682537"},
            {"lat": "17.310844", "lng": "78.682266"},
            {"lat": "17.309955", "lng": "78.681934"},
            {"lat": "17.309311", "lng": "78.681685"},
            {"lat": "17.308142", "lng": "78.68128"},
            {"lat": "17.306607", "lng": "78.680733"},
            {"lat": "17.305039", "lng": "78.680349"},
            {"lat": "17.303845", "lng": "78.680517"},
            {"lat": "17.30236", "lng": "78.681089"},
            {"lat": "17.301238", "lng": "78.681257"},
            {"lat": "17.300123", "lng": "78.681058"},
            {"lat": "17.298499", "lng": "78.680577"},
            {"lat": "17.296916", "lng": "78.680176"},
            {"lat": "17.295257", "lng": "78.680128"},
            {"lat": "17.293512", "lng": "78.680092"},
            {"lat": "17.291717", "lng": "78.680055"},
            {"lat": "17.290005", "lng": "78.680008"},
            {"lat": "17.288387", "lng": "78.680047"},
            {"lat": "17.287678", "lng": "78.680294"},
            {"lat": "17.286251", "lng": "78.681133"},
            {"lat": "17.285677", "lng": "78.681256"},
            {"lat": "17.285181", "lng": "78.680979"},
            {"lat": "17.283973", "lng": "78.680029"},
            {"lat": "17.283033", "lng": "78.679824"},
            {"lat": "17.281369", "lng": "78.679653"},
            {"lat": "17.279612", "lng": "78.67948"},
            {"lat": "17.277954", "lng": "78.679313"},
            {"lat": "17.276763", "lng": "78.678867"},
            {"lat": "17.275689", "lng": "78.6786"},
            {"lat": "17.274818", "lng": "78.678847"},
            {"lat": "17.273536", "lng": "78.679034"},
            {"lat": "17.272269", "lng": "78.678739"},
            {"lat": "17.271833", "lng": "78.678468"},
            {"lat": "17.271442", "lng": "78.678034"},
            {"lat": "17.271361", "lng": "78.678069"},
            {"lat": "17.27134", "lng": "78.678153"},
            {"lat": "17.2714", "lng": "78.678259"},
            {"lat": "17.271904", "lng": "78.679125"},
            {"lat": "17.272147", "lng": "78.679803"},
            {"lat": "17.272194", "lng": "78.680858"},
            {"lat": "17.272093", "lng": "78.681158"},
            {"lat": "17.271895", "lng": "78.681739"},
            {"lat": "17.27193", "lng": "78.682338"},
            {"lat": "17.27213", "lng": "78.682799"},
            {"lat": "17.272843", "lng": "78.684038"},
            {"lat": "17.272894", "lng": "78.684859"},
            {"lat": "17.272706", "lng": "78.68579"},
            {"lat": "17.272425", "lng": "78.68629"},
            {"lat": "17.271965", "lng": "78.68658"},
            {"lat": "17.271382", "lng": "78.686844"},
            {"lat": "17.270437", "lng": "78.686579"},
            {"lat": "17.269233", "lng": "78.685838"},
            {"lat": "17.267984", "lng": "78.685023"},
            {"lat": "17.266754", "lng": "78.684102"},
            {"lat": "17.266147", "lng": "78.683801"},
            {"lat": "17.265509", "lng": "78.683967"},
            {"lat": "17.265099", "lng": "78.683648"},
            {"lat": "17.265268", "lng": "78.683124"},
            {"lat": "17.265273", "lng": "78.682768"},
            {"lat": "17.265143", "lng": "78.682428"},
            {"lat": "17.264887", "lng": "78.682153"},
            {"lat": "17.264365", "lng": "78.681884"},
            {"lat": "17.263897", "lng": "78.682143"},
            {"lat": "17.2632", "lng": "78.683054"},
            {"lat": "17.26267", "lng": "78.683275"},
            {"lat": "17.262153", "lng": "78.683531"},
            {"lat": "17.260702", "lng": "78.683604"},
            {"lat": "17.25916", "lng": "78.683599"},
            {"lat": "17.258591", "lng": "78.683563"},
            {"lat": "17.25816", "lng": "78.683299"},
            {"lat": "17.257658", "lng": "78.682902"},
            {"lat": "17.256463", "lng": "78.683037"},
            {"lat": "17.255088", "lng": "78.683114"},
            {"lat": "17.253772", "lng": "78.683192"},
            {"lat": "17.252538", "lng": "78.683458"},
            {"lat": "17.251428", "lng": "78.683624"},
            {"lat": "17.250008", "lng": "78.683559"},
            {"lat": "17.249968", "lng": "78.6832"},
            {"lat": "17.249982", "lng": "78.682448"},
            {"lat": "17.250027", "lng": "78.682588"},
            {"lat": "17.250568", "lng": "78.68274"},
            {"lat": "17.250838", "lng": "78.682855"},
            {"lat": "17.251089", "lng": "78.682875"},
            {"lat": "17.251113", "lng": "78.68319"},
            {"lat": "17.251145", "lng": "78.683383"},
            {"lat": "17.251562", "lng": "78.6834"},
            {"lat": "17.251684", "lng": "78.683385"},
            {"lat": "17.251806", "lng": "78.683387"},
            {"lat": "17.252015", "lng": "78.683513"},
            {"lat": "17.252062", "lng": "78.683522"},
            {"lat": "17.252146", "lng": "78.683518"},
            {"lat": "17.253089", "lng": "78.683317"},
            {"lat": "17.25429", "lng": "78.683165"},
            {"lat": "17.255708", "lng": "78.683094"},
            {"lat": "17.256919", "lng": "78.682925"},
            {"lat": "17.257169", "lng": "78.682853"},
            {"lat": "17.257389", "lng": "78.682819"},
            {"lat": "17.257608", "lng": "78.682854"},
            {"lat": "17.258015", "lng": "78.683122"},
            {"lat": "17.258495", "lng": "78.683501"},
            {"lat": "17.25985", "lng": "78.68356"},
            {"lat": "17.26131", "lng": "78.683579"},
            {"lat": "17.26183", "lng": "78.683584"},
            {"lat": "17.262335", "lng": "78.683283"},
            {"lat": "17.262419", "lng": "78.683165"},
            {"lat": "17.26252", "lng": "78.683135"},
            {"lat": "17.262616", "lng": "78.683184"},
            {"lat": "17.262814", "lng": "78.683353"},
            {"lat": "17.263174", "lng": "78.68304"},
            {"lat": "17.263717", "lng": "78.682149"},
            {"lat": "17.264037", "lng": "78.681702"},
            {"lat": "17.264709", "lng": "78.681938"},
            {"lat": "17.265232", "lng": "78.682385"},
            {"lat": "17.265354", "lng": "78.682693"},
            {"lat": "17.265372", "lng": "78.683031"},
            {"lat": "17.265284", "lng": "78.68336"},
            {"lat": "17.2652", "lng": "78.683756"},
            {"lat": "17.265277", "lng": "78.68386"},
            {"lat": "17.265403", "lng": "78.683883"},
            {"lat": "17.265532", "lng": "78.683837"},
            {"lat": "17.265827", "lng": "78.683708"},
            {"lat": "17.266727", "lng": "78.68398"},
            {"lat": "17.267777", "lng": "78.684768"},
            {"lat": "17.268806", "lng": "78.68548"},
            {"lat": "17.270052", "lng": "78.686239"},
            {"lat": "17.271128", "lng": "78.686814"},
            {"lat": "17.271982", "lng": "78.686553"},
            {"lat": "17.272418", "lng": "78.68625"},
            {"lat": "17.272608", "lng": "78.68593"},
            {"lat": "17.272828", "lng": "78.685074"},
            {"lat": "17.272834", "lng": "78.684302"},
            {"lat": "17.27267", "lng": "78.683748"},
            {"lat": "17.271929", "lng": "78.682516"},
            {"lat": "17.271852", "lng": "78.68211"},
            {"lat": "17.271894", "lng": "78.681594"},
            {"lat": "17.272089", "lng": "78.681093"},
            {"lat": "17.272142", "lng": "78.68078"},
            {"lat": "17.27204", "lng": "78.67962"},
            {"lat": "17.271519", "lng": "78.67857"},
            {"lat": "17.271052", "lng": "78.677554"},
            {"lat": "17.270913", "lng": "78.677172"},
            {"lat": "17.270897", "lng": "78.676795"},
            {"lat": "17.271019", "lng": "78.676419"},
            {"lat": "17.271124", "lng": "78.676369"},
            {"lat": "17.271228", "lng": "78.676423"},
            {"lat": "17.271259", "lng": "78.676548"},
            {"lat": "17.271158", "lng": "78.676838"},
            {"lat": "17.271147", "lng": "78.677177"},
            {"lat": "17.27133", "lng": "78.677488"},
            {"lat": "17.27213", "lng": "78.678035"},
            {"lat": "17.273027", "lng": "78.678429"},
            {"lat": "17.273257", "lng": "78.678471"},
            {"lat": "17.273492", "lng": "78.678472"},
            {"lat": "17.273717", "lng": "78.678464"},
            {"lat": "17.274912", "lng": "78.678327"},
            {"lat": "17.275991", "lng": "78.678108"},
            {"lat": "17.276673", "lng": "78.678438"},
            {"lat": "17.277492", "lng": "78.679014"},
            {"lat": "17.279088", "lng": "78.679199"},
            {"lat": "17.280778", "lng": "78.679367"},
            {"lat": "17.282388", "lng": "78.679538"},
            {"lat": "17.284155", "lng": "78.679729"},
            {"lat": "17.284785", "lng": "78.680075"},
            {"lat": "17.285185", "lng": "78.680734"},
            {"lat": "17.285509", "lng": "78.681011"},
            {"lat": "17.28607", "lng": "78.681065"},
            {"lat": "17.286639", "lng": "78.680794"},
            {"lat": "17.288", "lng": "78.680042"},
            {"lat": "17.288431", "lng": "78.679938"},
            {"lat": "17.288744", "lng": "78.679905"},
            {"lat": "17.289069", "lng": "78.679902"},
            {"lat": "17.290779", "lng": "78.679934"},
            {"lat": "17.29253", "lng": "78.67998"},
            {"lat": "17.294212", "lng": "78.680008"},
            {"lat": "17.295731", "lng": "78.680008"},
            {"lat": "17.297165", "lng": "78.68012"},
            {"lat": "17.298079", "lng": "78.680358"},
            {"lat": "17.299282", "lng": "78.680719"},
            {"lat": "17.300575", "lng": "78.68109"},
            {"lat": "17.300853", "lng": "78.681135"},
            {"lat": "17.301134", "lng": "78.681155"},
            {"lat": "17.301422", "lng": "78.681157"},
            {"lat": "17.302437", "lng": "78.680964"},
            {"lat": "17.303849", "lng": "78.680416"},
            {"lat": "17.304415", "lng": "78.680292"},
            {"lat": "17.304705", "lng": "78.68027"},
            {"lat": "17.305", "lng": "78.68027"},
            {"lat": "17.30614", "lng": "78.680507"},
            {"lat": "17.307542", "lng": "78.680999"},
            {"lat": "17.30886", "lng": "78.68147"},
            {"lat": "17.309826", "lng": "78.681815"},
            {"lat": "17.310589", "lng": "78.68207"},
            {"lat": "17.311404", "lng": "78.682349"},
            {"lat": "17.311557", "lng": "78.682372"},
            {"lat": "17.311673", "lng": "78.682329"},
            {"lat": "17.311753", "lng": "78.682224"},
            {"lat": "17.312142", "lng": "78.681333"},
            {"lat": "17.312615", "lng": "78.680173"},
            {"lat": "17.31309", "lng": "78.678916"},
            {"lat": "17.313609", "lng": "78.677564"},
            {"lat": "17.314127", "lng": "78.676138"},
            {"lat": "17.314579", "lng": "78.674895"},
            {"lat": "17.314905", "lng": "78.673966"},
            {"lat": "17.315332", "lng": "78.67286"},
            {"lat": "17.315699", "lng": "78.67155"},
            {"lat": "17.316022", "lng": "78.670228"},
            {"lat": "17.3164", "lng": "78.668832"},
            {"lat": "17.316832", "lng": "78.667394"},
            {"lat": "17.317217", "lng": "78.66583"},
            {"lat": "17.317383", "lng": "78.664289"},
            {"lat": "17.31741", "lng": "78.662849"},
            {"lat": "17.317332", "lng": "78.66135"},
            {"lat": "17.317189", "lng": "78.659735"},
            {"lat": "17.317214", "lng": "78.658155"},
            {"lat": "17.317438", "lng": "78.656767"},
            {"lat": "17.317912", "lng": "78.655345"},
            {"lat": "17.318435", "lng": "78.653809"},
            {"lat": "17.319032", "lng": "78.652204"},
            {"lat": "17.319549", "lng": "78.650683"},
            {"lat": "17.319615", "lng": "78.649872"},
            {"lat": "17.319562", "lng": "78.648182"},
            {"lat": "17.319518", "lng": "78.646549"},
            {"lat": "17.319653", "lng": "78.6449"},
            {"lat": "17.319983", "lng": "78.643276"},
            {"lat": "17.320477", "lng": "78.64176"},
            {"lat": "17.320983", "lng": "78.640192"},
            {"lat": "17.32151", "lng": "78.638589"},
            {"lat": "17.321973", "lng": "78.636978"},
            {"lat": "17.32217", "lng": "78.635579"},
            {"lat": "17.322168", "lng": "78.633997"},
            {"lat": "17.321894", "lng": "78.632404"},
            {"lat": "17.321497", "lng": "78.630817"},
            {"lat": "17.321112", "lng": "78.629267"},
            {"lat": "17.32074", "lng": "78.627692"},
            {"lat": "17.320577", "lng": "78.626116"},
            {"lat": "17.320455", "lng": "78.624441"},
            {"lat": "17.320268", "lng": "78.622787"},
            {"lat": "17.32009", "lng": "78.621229"},
            {"lat": "17.319919", "lng": "78.619656"},
            {"lat": "17.319809", "lng": "78.618175"},
            {"lat": "17.320005", "lng": "78.616627"},
            {"lat": "17.320245", "lng": "78.61515"},
            {"lat": "17.320525", "lng": "78.614339"},
            {"lat": "17.321213", "lng": "78.613332"},
            {"lat": "17.321903", "lng": "78.612375"},
            {"lat": "17.322344", "lng": "78.611756"},
            {"lat": "17.32235", "lng": "78.611661"},
            {"lat": "17.32221", "lng": "78.611368"},
            {"lat": "17.322495", "lng": "78.611313"},
            {"lat": "17.322568", "lng": "78.611328"},
            {"lat": "17.322639", "lng": "78.61132"},
            {"lat": "17.322942", "lng": "78.611004"},
            {"lat": "17.323594", "lng": "78.610173"},
            {"lat": "17.324274", "lng": "78.609295"},
            {"lat": "17.325059", "lng": "78.608292"},
            {"lat": "17.325689", "lng": "78.60747"},
            {"lat": "17.32631", "lng": "78.60668"},
            {"lat": "17.326761", "lng": "78.605791"},
            {"lat": "17.326937", "lng": "78.605008"},
            {"lat": "17.327073", "lng": "78.604259"},
            {"lat": "17.327235", "lng": "78.603487"},
            {"lat": "17.327396", "lng": "78.602577"},
            {"lat": "17.327619", "lng": "78.601383"},
            {"lat": "17.328004", "lng": "78.600145"},
            {"lat": "17.32843", "lng": "78.598835"},
            {"lat": "17.328839", "lng": "78.597542"},
            {"lat": "17.329193", "lng": "78.5964"},
            {"lat": "17.329592", "lng": "78.595143"},
            {"lat": "17.330004", "lng": "78.59412"},
            {"lat": "17.33024", "lng": "78.593615"},
            {"lat": "17.330643", "lng": "78.592802"},
            {"lat": "17.331285", "lng": "78.591735"},
            {"lat": "17.331969", "lng": "78.590594"},
            {"lat": "17.332568", "lng": "78.589538"},
            {"lat": "17.332963", "lng": "78.588834"},
            {"lat": "17.33355", "lng": "78.587793"},
            {"lat": "17.334144", "lng": "78.586579"},
            {"lat": "17.334729", "lng": "78.58535"},
            {"lat": "17.335134", "lng": "78.584474"},
            {"lat": "17.335497", "lng": "78.58335"},
            {"lat": "17.33569", "lng": "78.582134"},
            {"lat": "17.335856", "lng": "78.580955"},
            {"lat": "17.33594", "lng": "78.580181"},
            {"lat": "17.33601", "lng": "78.579524"},
            {"lat": "17.33607", "lng": "78.578745"},
            {"lat": "17.336208", "lng": "78.577794"},
            {"lat": "17.336378", "lng": "78.576556"},
            {"lat": "17.336545", "lng": "78.575193"},
            {"lat": "17.336666", "lng": "78.574193"},
            {"lat": "17.336722", "lng": "78.573887"},
            {"lat": "17.336889", "lng": "78.573112"},
            {"lat": "17.337123", "lng": "78.572248"},
            {"lat": "17.337378", "lng": "78.571347"},
            {"lat": "17.337652", "lng": "78.570429"},
            {"lat": "17.337886", "lng": "78.569804"},
            {"lat": "17.338069", "lng": "78.569181"},
            {"lat": "17.33828", "lng": "78.5684"},
            {"lat": "17.338624", "lng": "78.567567"},
            {"lat": "17.338783", "lng": "78.567192"},
            {"lat": "17.338747", "lng": "78.56708"},
            {"lat": "17.33814", "lng": "78.566829"},
            {"lat": "17.337598", "lng": "78.566564"},
            {"lat": "17.337411", "lng": "78.566578"},
            {"lat": "17.337234", "lng": "78.566928"},
            {"lat": "17.336854", "lng": "78.567844"},
            {"lat": "17.336868", "lng": "78.567935"},
            {"lat": "17.336837", "lng": "78.56821"},
            {"lat": "17.336638", "lng": "78.568708"},
            {"lat": "17.336447", "lng": "78.569299"},
            {"lat": "17.336368", "lng": "78.56949"},
            {"lat": "17.336415", "lng": "78.569629"},
            {"lat": "17.337795", "lng": "78.569755"},
            {"lat": "17.337908", "lng": "78.569881"},
            {"lat": "17.337922", "lng": "78.570046"},
            {"lat": "17.337667", "lng": "78.570829"},
            {"lat": "17.337386", "lng": "78.571733"},
            {"lat": "17.337092", "lng": "78.572697"},
            {"lat": "17.336909", "lng": "78.573301"},
            {"lat": "17.33684", "lng": "78.573739"},
            {"lat": "17.336793", "lng": "78.574036"},
            {"lat": "17.336747", "lng": "78.57434"},
            {"lat": "17.336616", "lng": "78.575015"},
            {"lat": "17.336519", "lng": "78.575967"},
            {"lat": "17.336393", "lng": "78.576999"},
            {"lat": "17.33627", "lng": "78.578012"},
            {"lat": "17.336146", "lng": "78.579035"},
            {"lat": "17.336075", "lng": "78.579611"},
            {"lat": "17.335996", "lng": "78.58026"},
            {"lat": "17.335855", "lng": "78.581414"},
            {"lat": "17.335662", "lng": "78.582795"},
            {"lat": "17.335371", "lng": "78.584182"},
            {"lat": "17.334795", "lng": "78.585467"},
            {"lat": "17.334136", "lng": "78.586854"},
            {"lat": "17.333473", "lng": "78.588199"},
            {"lat": "17.332758", "lng": "78.589447"},
            {"lat": "17.332161", "lng": "78.590468"},
            {"lat": "17.331873", "lng": "78.591037"},
            {"lat": "17.331929", "lng": "78.591129"},
            {"lat": "17.332883", "lng": "78.591343"},
            {"lat": "17.333322", "lng": "78.591495"},
            {"lat": "17.334486", "lng": "78.591648"},
            {"lat": "17.334525", "lng": "78.591931"},
            {"lat": "17.334631", "lng": "78.592572"},
            {"lat": "17.334803", "lng": "78.593379"},
            {"lat": "17.334937", "lng": "78.594138"},
            {"lat": "17.334959", "lng": "78.594287"},
            {"lat": "17.33498", "lng": "78.594378"},
            {"lat": "17.335019", "lng": "78.594405"},
            {"lat": "17.33571", "lng": "78.594413"},
            {"lat": "17.335033", "lng": "78.594418"},
            {"lat": "17.334954", "lng": "78.59471"},
            {"lat": "17.334928", "lng": "78.594984"},
            {"lat": "17.334947", "lng": "78.595382"},
            {"lat": "17.335009", "lng": "78.595955"},
            {"lat": "17.335014", "lng": "78.596327"},
            {"lat": "17.333612", "lng": "78.596371"},
            {"lat": "17.332211", "lng": "78.596292"},
            {"lat": "17.330834", "lng": "78.596228"},
            {"lat": "17.329622", "lng": "78.596359"},
            {"lat": "17.329472", "lng": "78.596367"},
            {"lat": "17.329294", "lng": "78.596512"},
            {"lat": "17.328945", "lng": "78.597469"},
            {"lat": "17.328661", "lng": "78.598329"},
            {"lat": "17.328357", "lng": "78.599282"},
            {"lat": "17.327976", "lng": "78.600404"},
            {"lat": "17.327568", "lng": "78.601767"},
            {"lat": "17.327323", "lng": "78.603137"},
            {"lat": "17.327114", "lng": "78.60427"},
            {"lat": "17.327012", "lng": "78.604855"},
            {"lat": "17.326964", "lng": "78.605155"},
            {"lat": "17.326858", "lng": "78.605652"},
            {"lat": "17.326543", "lng": "78.606441"},
            {"lat": "17.325979", "lng": "78.607272"},
            {"lat": "17.325629", "lng": "78.607752"},
            {"lat": "17.325144", "lng": "78.608385"},
            {"lat": "17.324437", "lng": "78.609275"},
            {"lat": "17.323624", "lng": "78.610314"},
            {"lat": "17.322857", "lng": "78.611342"},
            {"lat": "17.322102", "lng": "78.612293"},
            {"lat": "17.321276", "lng": "78.613375"},
            {"lat": "17.320548", "lng": "78.614537"},
            {"lat": "17.320241", "lng": "78.615724"},
            {"lat": "17.320055", "lng": "78.616972"},
            {"lat": "17.319917", "lng": "78.618339"},
            {"lat": "17.320019", "lng": "78.619735"},
            {"lat": "17.32018", "lng": "78.621234"},
            {"lat": "17.320354", "lng": "78.622808"},
            {"lat": "17.320533", "lng": "78.624425"},
            {"lat": "17.320622", "lng": "78.626005"},
            {"lat": "17.320766", "lng": "78.627545"},
            {"lat": "17.321125", "lng": "78.629034"},
            {"lat": "17.321517", "lng": "78.63053"},
            {"lat": "17.321913", "lng": "78.632088"},
            {"lat": "17.32223", "lng": "78.63368"},
            {"lat": "17.322267", "lng": "78.635221"},
            {"lat": "17.322133", "lng": "78.636672"},
            {"lat": "17.321739", "lng": "78.638251"},
            {"lat": "17.321196", "lng": "78.639795"},
            {"lat": "17.320697", "lng": "78.641284"},
            {"lat": "17.320207", "lng": "78.642741"},
            {"lat": "17.319767", "lng": "78.644368"},
            {"lat": "17.319619", "lng": "78.646034"},
            {"lat": "17.31963", "lng": "78.647683"},
            {"lat": "17.319683", "lng": "78.649379"},
            {"lat": "17.319613", "lng": "78.65085"},
            {"lat": "17.319087", "lng": "78.652377"},
            {"lat": "17.318517", "lng": "78.653949"},
            {"lat": "17.317965", "lng": "78.655514"},
            {"lat": "17.317473", "lng": "78.657132"},
            {"lat": "17.317307", "lng": "78.658778"},
            {"lat": "17.31737", "lng": "78.660493"},
            {"lat": "17.317447", "lng": "78.662038"},
            {"lat": "17.317481", "lng": "78.663187"},
            {"lat": "17.317455", "lng": "78.66451"},
            {"lat": "17.31727", "lng": "78.66608"},
            {"lat": "17.316857", "lng": "78.667615"},
            {"lat": "17.316379", "lng": "78.669178"},
            {"lat": "17.315939", "lng": "78.670819"},
            {"lat": "17.315531", "lng": "78.672505"},
            {"lat": "17.315006", "lng": "78.674089"},
            {"lat": "17.314417", "lng": "78.675671"},
            {"lat": "17.31381", "lng": "78.677244"},
            {"lat": "17.313212", "lng": "78.678865"},
            {"lat": "17.312634", "lng": "78.68038"},
            {"lat": "17.312079", "lng": "78.681737"},
            {"lat": "17.311783", "lng": "78.682408"},
            {"lat": "17.311639", "lng": "78.682452"},
            {"lat": "17.3107", "lng": "78.682202"},
            {"lat": "17.309918", "lng": "78.681937"},
            {"lat": "17.309102", "lng": "78.681638"},
            {"lat": "17.307846", "lng": "78.681193"},
            {"lat": "17.306295", "lng": "78.680642"},
            {"lat": "17.305007", "lng": "78.680357"},
            {"lat": "17.30378", "lng": "78.680538"},
            {"lat": "17.302284", "lng": "78.681114"},
            {"lat": "17.301007", "lng": "78.681243"},
            {"lat": "17.299385", "lng": "78.680836"},
            {"lat": "17.297797", "lng": "78.680369"},
            {"lat": "17.296192", "lng": "78.680153"},
            {"lat": "17.294447", "lng": "78.680125"},
            {"lat": "17.292772", "lng": "78.680098"},
            {"lat": "17.291102", "lng": "78.680071"},
            {"lat": "17.28955", "lng": "78.68003"},
            {"lat": "17.288059", "lng": "78.680147"},
            {"lat": "17.28665", "lng": "78.68094"},
            {"lat": "17.285987", "lng": "78.681273"},
            {"lat": "17.28523", "lng": "78.681043"},
            {"lat": "17.284092", "lng": "78.680077"},
            {"lat": "17.28318", "lng": "78.679834"},
            {"lat": "17.281573", "lng": "78.67967"},
            {"lat": "17.2799", "lng": "78.679503"},
            {"lat": "17.278323", "lng": "78.679355"},
            {"lat": "17.277105", "lng": "78.679032"},
            {"lat": "17.275923", "lng": "78.678659"},
            {"lat": "17.274873", "lng": "78.678842"},
            {"lat": "17.273673", "lng": "78.679045"},
            {"lat": "17.272439", "lng": "78.678828"},
            {"lat": "17.271895", "lng": "78.678563"},
            {"lat": "17.271592", "lng": "78.678189"},
            {"lat": "17.27139", "lng": "78.678094"},
            {"lat": "17.271344", "lng": "78.67817"},
            {"lat": "17.271379", "lng": "78.67827"},
            {"lat": "17.271829", "lng": "78.679015"},
            {"lat": "17.272148", "lng": "78.679756"},
            {"lat": "17.272208", "lng": "78.680878"},
            {"lat": "17.272102", "lng": "78.681165"},
            {"lat": "17.271923", "lng": "78.681661"},
            {"lat": "17.271933", "lng": "78.68234"},
            {"lat": "17.272059", "lng": "78.682685"},
            {"lat": "17.272746", "lng": "78.683757"},
            {"lat": "17.272867", "lng": "78.684135"},
            {"lat": "17.272909", "lng": "78.684878"},
            {"lat": "17.272685", "lng": "78.685883"},
            {"lat": "17.2724", "lng": "78.686358"},
            {"lat": "17.271955", "lng": "78.686625"},
            {"lat": "17.271361", "lng": "78.686895"},
            {"lat": "17.270481", "lng": "78.686628"},
            {"lat": "17.269388", "lng": "78.685945"},
            {"lat": "17.268236", "lng": "78.685232"},
            {"lat": "17.267047", "lng": "78.68432"},
            {"lat": "17.26618", "lng": "78.683829"},
            {"lat": "17.265524", "lng": "78.68398"},
            {"lat": "17.265104", "lng": "78.68372"},
            {"lat": "17.265275", "lng": "78.683118"},
            {"lat": "17.265275", "lng": "78.682748"},
            {"lat": "17.265135", "lng": "78.682412"},
            {"lat": "17.264779", "lng": "78.682075"},
            {"lat": "17.264383", "lng": "78.681892"},
            {"lat": "17.263898", "lng": "78.682203"},
            {"lat": "17.263228", "lng": "78.683104"},
            {"lat": "17.263026", "lng": "78.683421"},
            {"lat": "17.262624", "lng": "78.683292"},
            {"lat": "17.262147", "lng": "78.683553"},
            {"lat": "17.260779", "lng": "78.683633"},
            {"lat": "17.259313", "lng": "78.683616"},
            {"lat": "17.258737", "lng": "78.68361"},
            {"lat": "17.25817", "lng": "78.683339"},
            {"lat": "17.257678", "lng": "78.68292"},
            {"lat": "17.256465", "lng": "78.683088"},
            {"lat": "17.254985", "lng": "78.683133"},
            {"lat": "17.253644", "lng": "78.683234"},
            {"lat": "17.252418", "lng": "78.683511"},
            {"lat": "17.251108", "lng": "78.683647"},
            {"lat": "17.250214", "lng": "78.683633"},
            {"lat": "17.24998", "lng": "78.683317"},
            {"lat": "17.249994", "lng": "78.682456"},
            {"lat": "17.250138", "lng": "78.682684"},
            {"lat": "17.250318", "lng": "78.682682"},
            {"lat": "17.250392", "lng": "78.682668"},
            {"lat": "17.250473", "lng": "78.682664"},
            {"lat": "17.250819", "lng": "78.682805"},
            {"lat": "17.25094", "lng": "78.682842"},
            {"lat": "17.250966", "lng": "78.682876"},
            {"lat": "17.250962", "lng": "78.682934"},
            {"lat": "17.250805", "lng": "78.682865"},
            {"lat": "17.250628", "lng": "78.682756"},
            {"lat": "17.250204", "lng": "78.682712"},
            {"lat": "17.249985", "lng": "78.682405"},
            {"lat": "17.249989", "lng": "78.68185"},
            {"lat": "17.249959", "lng": "78.681277"},
            {"lat": "17.249767", "lng": "78.681244"},
            {"lat": "17.249534", "lng": "78.680973"},
            {"lat": "17.249322", "lng": "78.680483"},
            {"lat": "17.249207", "lng": "78.680135"},
            {"lat": "17.24856", "lng": "78.68025"},
            {"lat": "17.24839", "lng": "78.680159"},
            {"lat": "17.24812", "lng": "78.679721"},
            {"lat": "17.247818", "lng": "78.67938"},
            {"lat": "17.24775", "lng": "78.679216"},
            {"lat": "17.247863", "lng": "78.679422"},
            {"lat": "17.248113", "lng": "78.679689"},
            {"lat": "17.248309", "lng": "78.679964"},
            {"lat": "17.248475", "lng": "78.680235"},
            {"lat": "17.248977", "lng": "78.680124"},
            {"lat": "17.249108", "lng": "78.680094"},
            {"lat": "17.249197", "lng": "78.680107"},
            {"lat": "17.249297", "lng": "78.680395"},
            {"lat": "17.249629", "lng": "78.681095"},
            {"lat": "17.249697", "lng": "78.681189"},
            {"lat": "17.24978", "lng": "78.681224"},
            {"lat": "17.249878", "lng": "78.681224"},
            {"lat": "17.25073", "lng": "78.680982"},
            {"lat": "17.251714", "lng": "78.680695"},
            {"lat": "17.252406", "lng": "78.680431"},
            {"lat": "17.252514", "lng": "78.680338"},
            {"lat": "17.252633", "lng": "78.680318"},
            {"lat": "17.252762", "lng": "78.680348"},
            {"lat": "17.253707", "lng": "78.680116"},
            {"lat": "17.254957", "lng": "78.67974"},
            {"lat": "17.255584", "lng": "78.679432"},
            {"lat": "17.25661", "lng": "78.678519"},
            {"lat": "17.256785", "lng": "78.678192"},
            {"lat": "17.256877", "lng": "78.678116"},
            {"lat": "17.257005", "lng": "78.678127"},
            {"lat": "17.257155", "lng": "78.67816"},
            {"lat": "17.25767", "lng": "78.678025"},
            {"lat": "17.257845", "lng": "78.677997"},
            {"lat": "17.25802", "lng": "78.678002"},
            {"lat": "17.25854", "lng": "78.678267"},
            {"lat": "17.259425", "lng": "78.678842"},
            {"lat": "17.260424", "lng": "78.679482"},
            {"lat": "17.260821", "lng": "78.679348"},
            {"lat": "17.26142", "lng": "78.679332"},
            {"lat": "17.261843", "lng": "78.679603"},
            {"lat": "17.262706", "lng": "78.680379"},
            {"lat": "17.262702", "lng": "78.680665"},
            {"lat": "17.262472", "lng": "78.681609"},
            {"lat": "17.262401", "lng": "78.682832"},
            {"lat": "17.26259", "lng": "78.683103"},
            {"lat": "17.262882", "lng": "78.683377"},
            {"lat": "17.262928", "lng": "78.683373"},
            {"lat": "17.262991", "lng": "78.683327"},
            {"lat": "17.263158", "lng": "78.683042"},
            {"lat": "17.263729", "lng": "78.682115"},
            {"lat": "17.264043", "lng": "78.681704"},
            {"lat": "17.264796", "lng": "78.681991"},
            {"lat": "17.26523", "lng": "78.682398"},
            {"lat": "17.265368", "lng": "78.682737"},
            {"lat": "17.265366", "lng": "78.683111"},
            {"lat": "17.265229", "lng": "78.683579"},
            {"lat": "17.265249", "lng": "78.683864"},
            {"lat": "17.265482", "lng": "78.683882"},
            {"lat": "17.26579", "lng": "78.683753"},
            {"lat": "17.265972", "lng": "78.683707"},
            {"lat": "17.266165", "lng": "78.683708"},
            {"lat": "17.266765", "lng": "78.684015"},
            {"lat": "17.2678", "lng": "78.684784"},
            {"lat": "17.268883", "lng": "78.685535"},
            {"lat": "17.270041", "lng": "78.686263"},
            {"lat": "17.271104", "lng": "78.686852"},
            {"lat": "17.271963", "lng": "78.686605"},
            {"lat": "17.272379", "lng": "78.686341"},
            {"lat": "17.27259", "lng": "78.686013"},
            {"lat": "17.272819", "lng": "78.685175"},
            {"lat": "17.272833", "lng": "78.684234"},
            {"lat": "17.272705", "lng": "78.683809"},
            {"lat": "17.271974", "lng": "78.682579"},
            {"lat": "17.271889", "lng": "78.682181"},
            {"lat": "17.271911", "lng": "78.681658"},
            {"lat": "17.272129", "lng": "78.681079"},
            {"lat": "17.272193", "lng": "78.680772"},
            {"lat": "17.272098", "lng": "78.679613"},
            {"lat": "17.271495", "lng": "78.678455"},
            {"lat": "17.271328", "lng": "78.678102"},
            {"lat": "17.271152", "lng": "78.67765"},
            {"lat": "17.270992", "lng": "78.67725"},
            {"lat": "17.270949", "lng": "78.676793"},
            {"lat": "17.271022", "lng": "78.676484"},
            {"lat": "17.271111", "lng": "78.676384"},
            {"lat": "17.271223", "lng": "78.676396"},
            {"lat": "17.271277", "lng": "78.676503"},
            {"lat": "17.271189", "lng": "78.676785"},
            {"lat": "17.271141", "lng": "78.6771"},
            {"lat": "17.271264", "lng": "78.67741"},
            {"lat": "17.271612", "lng": "78.677695"},
            {"lat": "17.272407", "lng": "78.678194"},
            {"lat": "17.273228", "lng": "78.678495"},
            {"lat": "17.274607", "lng": "78.678422"},
            {"lat": "17.2755", "lng": "78.678146"},
            {"lat": "17.275705", "lng": "78.678107"},
            {"lat": "17.27593", "lng": "78.678103"},
            {"lat": "17.276169", "lng": "78.678147"},
            {"lat": "17.276712", "lng": "78.678475"},
            {"lat": "17.277457", "lng": "78.679016"},
            {"lat": "17.278637", "lng": "78.679182"},
            {"lat": "17.28029", "lng": "78.679349"},
            {"lat": "17.281824", "lng": "78.679496"},
            {"lat": "17.283435", "lng": "78.679653"},
            {"lat": "17.284183", "lng": "78.679727"},
            {"lat": "17.284752", "lng": "78.68003"},
            {"lat": "17.284982", "lng": "78.680379"},
            {"lat": "17.285377", "lng": "78.680938"},
            {"lat": "17.2856", "lng": "78.68107"},
            {"lat": "17.285857", "lng": "78.681109"},
            {"lat": "17.286126", "lng": "78.681058"},
            {"lat": "17.287432", "lng": "78.680332"},
            {"lat": "17.288282", "lng": "78.679978"},
            {"lat": "17.289789", "lng": "78.679938"},
            {"lat": "17.291431", "lng": "78.67996"},
            {"lat": "17.293095", "lng": "78.679997"},
            {"lat": "17.294634", "lng": "78.680024"},
            {"lat": "17.296119", "lng": "78.680054"},
            {"lat": "17.297622", "lng": "78.680227"},
            {"lat": "17.299024", "lng": "78.680637"},
            {"lat": "17.300688", "lng": "78.681089"},
            {"lat": "17.30099", "lng": "78.681137"},
            {"lat": "17.301305", "lng": "78.68115"},
            {"lat": "17.301628", "lng": "78.681134"},
            {"lat": "17.30273", "lng": "78.680854"},
            {"lat": "17.304252", "lng": "78.680327"},
            {"lat": "17.304583", "lng": "78.680283"},
            {"lat": "17.304924", "lng": "78.68027"},
            {"lat": "17.30527", "lng": "78.68029"},
            {"lat": "17.306933", "lng": "78.68078"},
            {"lat": "17.308512", "lng": "78.681344"},
            {"lat": "17.309795", "lng": "78.681799"},
            {"lat": "17.31052", "lng": "78.682051"},
            {"lat": "17.311343", "lng": "78.682337"},
            {"lat": "17.311496", "lng": "78.682395"},
            {"lat": "17.311608", "lng": "78.682406"},
            {"lat": "17.311674", "lng": "78.682374"},
            {"lat": "17.311843", "lng": "78.682064"},
            {"lat": "17.31224", "lng": "78.681118"},
            {"lat": "17.312704", "lng": "78.679968"},
            {"lat": "17.313162", "lng": "78.678742"},
            {"lat": "17.31367", "lng": "78.6774"},
            {"lat": "17.314212", "lng": "78.675971"},
            {"lat": "17.314629", "lng": "78.674799"},
            {"lat": "17.314783", "lng": "78.674382"},
            {"lat": "17.314932", "lng": "78.673989"},
            {"lat": "17.315131", "lng": "78.673494"},
            {"lat": "17.315399", "lng": "78.672652"},
            {"lat": "17.31573", "lng": "78.671445"},
            {"lat": "17.316076", "lng": "78.67001"},
            {"lat": "17.316544", "lng": "78.668429"},
            {"lat": "17.316998", "lng": "78.666864"},
            {"lat": "17.31729", "lng": "78.665188"},
            {"lat": "17.317415", "lng": "78.663513"},
            {"lat": "17.317357", "lng": "78.661812"},
            {"lat": "17.31722", "lng": "78.660085"},
            {"lat": "17.317193", "lng": "78.658425"},
            {"lat": "17.317407", "lng": "78.656994"},
            {"lat": "17.317859", "lng": "78.655591"},
            {"lat": "17.318297", "lng": "78.654228"},
            {"lat": "17.318807", "lng": "78.652863"},
            {"lat": "17.319287", "lng": "78.651545"},
            {"lat": "17.319595", "lng": "78.650171"},
            {"lat": "17.319567", "lng": "78.648518"},
            {"lat": "17.319513", "lng": "78.646814"},
            {"lat": "17.319639", "lng": "78.645117"},
            {"lat": "17.319911", "lng": "78.643514"},
            {"lat": "17.320373", "lng": "78.642045"},
            {"lat": "17.320714", "lng": "78.64101"},
            {"lat": "17.321184", "lng": "78.639604"},
            {"lat": "17.321697", "lng": "78.638075"},
            {"lat": "17.322085", "lng": "78.636427"},
            {"lat": "17.322204", "lng": "78.635399"},
            {"lat": "17.322215", "lng": "78.634263"},
            {"lat": "17.322044", "lng": "78.632864"},
            {"lat": "17.321704", "lng": "78.631443"},
            {"lat": "17.321328", "lng": "78.629967"},
            {"lat": "17.320952", "lng": "78.62839"},
            {"lat": "17.32064", "lng": "78.626747"},
            {"lat": "17.320529", "lng": "78.624994"},
            {"lat": "17.320367", "lng": "78.623264"},
            {"lat": "17.320183", "lng": "78.621602"},
            {"lat": "17.320005", "lng": "78.620033"},
            {"lat": "17.31984", "lng": "78.618513"},
            {"lat": "17.319967", "lng": "78.616944"},
            {"lat": "17.320216", "lng": "78.615343"},
            {"lat": "17.320564", "lng": "78.614288"},
            {"lat": "17.320889", "lng": "78.613715"},
            {"lat": "17.321444", "lng": "78.613004"},
            {"lat": "17.32225", "lng": "78.61199"},
            {"lat": "17.323148", "lng": "78.610809"},
            {"lat": "17.324137", "lng": "78.60951"},
            {"lat": "17.325066", "lng": "78.608268"},
            {"lat": "17.32534", "lng": "78.607915"},
            {"lat": "17.325758", "lng": "78.607379"},
            {"lat": "17.326299", "lng": "78.606659"},
            {"lat": "17.326729", "lng": "78.605853"},
            {"lat": "17.326942", "lng": "78.605017"},
            {"lat": "17.327109", "lng": "78.60412"},
            {"lat": "17.32726", "lng": "78.60332"},
            {"lat": "17.327357", "lng": "78.60255"},
            {"lat": "17.327595", "lng": "78.601429"},
            {"lat": "17.327976", "lng": "78.60018"},
            {"lat": "17.328309", "lng": "78.599188"},
            {"lat": "17.328593", "lng": "78.598342"},
            {"lat": "17.328939", "lng": "78.597229"},
            {"lat": "17.329288", "lng": "78.596062"},
            {"lat": "17.329619", "lng": "78.594994"},
            {"lat": "17.33003", "lng": "78.594038"},
            {"lat": "17.330375", "lng": "78.5933"},
            {"lat": "17.330976", "lng": "78.592234"},
            {"lat": "17.331757", "lng": "78.590949"},
            {"lat": "17.332553", "lng": "78.589596"},
            {"lat": "17.333174", "lng": "78.588482"},
            {"lat": "17.33344", "lng": "78.587902"},
            {"lat": "17.333585", "lng": "78.587598"},
            {"lat": "17.333725", "lng": "78.587303"},
            {"lat": "17.333973", "lng": "78.586735"},
            {"lat": "17.334345", "lng": "78.586004"},
            {"lat": "17.334813", "lng": "78.585047"},
            {"lat": "17.335262", "lng": "78.584099"},
            {"lat": "17.335526", "lng": "78.583039"},
            {"lat": "17.335698", "lng": "78.58189"},
            {"lat": "17.335833", "lng": "78.580757"},
            {"lat": "17.33599", "lng": "78.579539"},
            {"lat": "17.336079", "lng": "78.578453"},
            {"lat": "17.336202", "lng": "78.577462"},
            {"lat": "17.336372", "lng": "78.576245"},
            {"lat": "17.336524", "lng": "78.574935"},
            {"lat": "17.336637", "lng": "78.573983"},
            {"lat": "17.336778", "lng": "78.573307"},
            {"lat": "17.337025", "lng": "78.572508"},
            {"lat": "17.337334", "lng": "78.57155"},
            {"lat": "17.33763", "lng": "78.570572"},
            {"lat": "17.337874", "lng": "78.56989"},
            {"lat": "17.338092", "lng": "78.569242"},
            {"lat": "17.338367", "lng": "78.568372"},
            {"lat": "17.338827", "lng": "78.567339"},
            {"lat": "17.339395", "lng": "78.566305"},
            {"lat": "17.339969", "lng": "78.565178"},
            {"lat": "17.34044", "lng": "78.564029"},
            {"lat": "17.340649", "lng": "78.562773"},
            {"lat": "17.340774", "lng": "78.561853"},
            {"lat": "17.340913", "lng": "78.560872"},
            {"lat": "17.341076", "lng": "78.5597"},
            {"lat": "17.341322", "lng": "78.558543"},
            {"lat": "17.341692", "lng": "78.557796"},
            {"lat": "17.342196", "lng": "78.557051"},
            {"lat": "17.34254", "lng": "78.556614"},
            {"lat": "17.342884", "lng": "78.556129"},
            {"lat": "17.343107", "lng": "78.555759"},
            {"lat": "17.343475", "lng": "78.555302"},
            {"lat": "17.343927", "lng": "78.55466"},
            {"lat": "17.344495", "lng": "78.553815"},
            {"lat": "17.34509", "lng": "78.552914"},
            {"lat": "17.345692", "lng": "78.551972"},
            {"lat": "17.345968", "lng": "78.551537"},
            {"lat": "17.346155", "lng": "78.551255"},
            {"lat": "17.346362", "lng": "78.550951"},
            {"lat": "17.346702", "lng": "78.550548"},
            {"lat": "17.347012", "lng": "78.550199"},
            {"lat": "17.347517", "lng": "78.549699"},
            {"lat": "17.34826", "lng": "78.549117"},
            {"lat": "17.348919", "lng": "78.548603"},
            {"lat": "17.349254", "lng": "78.548325"},
            {"lat": "17.349658", "lng": "78.54785"},
            {"lat": "17.350352", "lng": "78.547401"},
            {"lat": "17.350979", "lng": "78.546897"},
            {"lat": "17.351845", "lng": "78.546422"},
            {"lat": "17.352881", "lng": "78.546145"},
            {"lat": "17.353842", "lng": "78.545904"},
            {"lat": "17.354774", "lng": "78.545672"},
            {"lat": "17.355602", "lng": "78.54544"},
            {"lat": "17.356478", "lng": "78.545227"},
            {"lat": "17.357467", "lng": "78.54497"},
            {"lat": "17.358518", "lng": "78.544706"},
            {"lat": "17.359615", "lng": "78.544454"},
            {"lat": "17.360628", "lng": "78.544177"},
            {"lat": "17.361347", "lng": "78.543936"},
            {"lat": "17.362468", "lng": "78.543575"},
            {"lat": "17.363625", "lng": "78.543254"},
            {"lat": "17.36425", "lng": "78.543014"},
            {"lat": "17.364729", "lng": "78.542744"},
            {"lat": "17.365417", "lng": "78.542303"},
            {"lat": "17.366038", "lng": "78.541804"},
            {"lat": "17.366723", "lng": "78.541034"},
            {"lat": "17.367317", "lng": "78.540154"},
            {"lat": "17.367549", "lng": "78.539711"},
            {"lat": "17.367835", "lng": "78.539003"},
            {"lat": "17.368061", "lng": "78.538206"},
            {"lat": "17.368182", "lng": "78.537452"},
            {"lat": "17.368233", "lng": "78.53673"},
            {"lat": "17.368229", "lng": "78.536034"},
            {"lat": "17.368266", "lng": "78.535269"},
            {"lat": "17.368282", "lng": "78.534329"},
            {"lat": "17.368297", "lng": "78.533158"},
            {"lat": "17.368298", "lng": "78.532147"},
            {"lat": "17.368332", "lng": "78.53124"},
            {"lat": "17.368354", "lng": "78.530678"},
            {"lat": "17.368362", "lng": "78.530385"},
            {"lat": "17.368365", "lng": "78.529678"},
            {"lat": "17.368409", "lng": "78.528807"},
            {"lat": "17.368429", "lng": "78.52779"},
            {"lat": "17.368443", "lng": "78.527144"},
            {"lat": "17.368472", "lng": "78.526197"},
            {"lat": "17.368369", "lng": "78.525638"},
            {"lat": "17.368378", "lng": "78.525336"},
            {"lat": "17.368448", "lng": "78.525003"},
            {"lat": "17.368483", "lng": "78.524492"},
            {"lat": "17.368512", "lng": "78.523713"},
            {"lat": "17.368525", "lng": "78.523339"},
            {"lat": "17.368519", "lng": "78.522725"},
            {"lat": "17.368508", "lng": "78.52242"},
            {"lat": "17.368521", "lng": "78.521652"},
            {"lat": "17.368505", "lng": "78.521296"},
            {"lat": "17.36867", "lng": "78.52129"},
            {"lat": "17.368817", "lng": "78.521496"},
            {"lat": "17.368859", "lng": "78.521495"},
            {"lat": "17.368916", "lng": "78.521494"},
            {"lat": "17.369205", "lng": "78.521495"},
            {"lat": "17.369255", "lng": "78.521497"},
            {"lat": "17.369303", "lng": "78.521507"},
            {"lat": "17.369459", "lng": "78.521512"},
            {"lat": "17.369566", "lng": "78.521506"},
            {"lat": "17.369692", "lng": "78.521522"},
            {"lat": "17.369838", "lng": "78.521535"},
            {"lat": "17.369944", "lng": "78.52153"},
            {"lat": "17.370025", "lng": "78.521508"},
            {"lat": "17.370193", "lng": "78.521223"},
            {"lat": "17.370408", "lng": "78.520878"},
            {"lat": "17.370479", "lng": "78.520866"},
            {"lat": "17.37053", "lng": "78.520864"},
            {"lat": "17.370592", "lng": "78.520857"},
            {"lat": "17.370719", "lng": "78.520865"},
            {"lat": "17.370804", "lng": "78.520873"},
            {"lat": "17.370893", "lng": "78.520864"},
            {"lat": "17.371417", "lng": "78.520902"},
            {"lat": "17.37146", "lng": "78.520904"},
            {"lat": "17.371516", "lng": "78.520902"},
            {"lat": "17.371586", "lng": "78.520901"},
            {"lat": "17.371674", "lng": "78.520886"},
            {"lat": "17.371755", "lng": "78.520893"},
            {"lat": "17.372653", "lng": "78.521042"},
            {"lat": "17.372733", "lng": "78.521057"},
            {"lat": "17.3728", "lng": "78.521059"},
            {"lat": "17.372889", "lng": "78.521005"},
            {"lat": "17.372998", "lng": "78.520724"},
            {"lat": "17.373147", "lng": "78.520201"},
            {"lat": "17.37369", "lng": "78.520129"},
            {"lat": "17.373645", "lng": "78.520244"},
            {"lat": "17.373566", "lng": "78.520367"},
            {"lat": "17.373095", "lng": "78.520641"},
            {"lat": "17.372941", "lng": "78.521035"},
            {"lat": "17.371647", "lng": "78.52095"},
            {"lat": "17.370348", "lng": "78.520859"},
            {"lat": "17.368998", "lng": "78.520827"},
            {"lat": "17.368834", "lng": "78.521144"},
            {"lat": "17.368777", "lng": "78.521726"},
            {"lat": "17.368752", "lng": "78.522352"},
            {"lat": "17.368729", "lng": "78.522778"},
            {"lat": "17.368682", "lng": "78.523242"},
            {"lat": "17.368664", "lng": "78.52369"},
            {"lat": "17.368642", "lng": "78.524362"},
            {"lat": "17.368623", "lng": "78.524675"},
            {"lat": "17.368615", "lng": "78.525015"},
            {"lat": "17.368727", "lng": "78.525447"},
            {"lat": "17.368769", "lng": "78.525732"},
            {"lat": "17.368694", "lng": "78.526396"},
            {"lat": "17.368607", "lng": "78.526954"},
            {"lat": "17.368578", "lng": "78.527389"},
            {"lat": "17.368567", "lng": "78.527907"},
            {"lat": "17.368549", "lng": "78.528615"},
            {"lat": "17.368543", "lng": "78.529106"},
            {"lat": "17.36851", "lng": "78.529964"},
            {"lat": "17.36848", "lng": "78.530725"},
            {"lat": "17.36846", "lng": "78.53148"},
            {"lat": "17.368468", "lng": "78.53202"},
            {"lat": "17.368477", "lng": "78.532313"},
            {"lat": "17.368425", "lng": "78.532981"},
            {"lat": "17.368385", "lng": "78.53409"},
            {"lat": "17.368365", "lng": "78.534888"},
            {"lat": "17.368369", "lng": "78.535619"},
            {"lat": "17.368359", "lng": "78.536389"},
            {"lat": "17.368278", "lng": "78.53735"},
            {"lat": "17.368149", "lng": "78.538178"},
            {"lat": "17.367965", "lng": "78.538969"},
            {"lat": "17.367781", "lng": "78.539513"},
            {"lat": "17.367715", "lng": "78.539814"},
            {"lat": "17.367368", "lng": "78.54044"},
            {"lat": "17.3668", "lng": "78.54123"},
            {"lat": "17.366075", "lng": "78.54199"},
            {"lat": "17.36528", "lng": "78.542622"},
            {"lat": "17.364764", "lng": "78.54298"},
            {"lat": "17.364294", "lng": "78.543248"},
            {"lat": "17.363388", "lng": "78.543593"},
            {"lat": "17.362575", "lng": "78.543837"},
            {"lat": "17.36181", "lng": "78.544082"},
            {"lat": "17.360757", "lng": "78.544388"},
            {"lat": "17.359791", "lng": "78.544598"},
            {"lat": "17.358779", "lng": "78.544853"},
            {"lat": "17.357794", "lng": "78.545075"},
            {"lat": "17.356843", "lng": "78.545304"},
            {"lat": "17.355914", "lng": "78.545527"},
            {"lat": "17.355035", "lng": "78.545749"},
            {"lat": "17.354189", "lng": "78.545968"},
            {"lat": "17.353289", "lng": "78.546204"},
            {"lat": "17.352378", "lng": "78.546441"},
            {"lat": "17.351578", "lng": "78.546777"},
            {"lat": "17.350953", "lng": "78.547218"},
            {"lat": "17.350528", "lng": "78.547519"},
            {"lat": "17.350174", "lng": "78.547805"},
            {"lat": "17.349864", "lng": "78.548229"},
            {"lat": "17.349204", "lng": "78.548679"},
            {"lat": "17.348505", "lng": "78.549165"},
            {"lat": "17.348027", "lng": "78.549621"},
            {"lat": "17.347683", "lng": "78.549899"},
            {"lat": "17.347371", "lng": "78.55017"},
            {"lat": "17.346929", "lng": "78.550647"},
            {"lat": "17.346662", "lng": "78.550938"},
            {"lat": "17.34631", "lng": "78.551207"},
            {"lat": "17.346109", "lng": "78.55149"},
            {"lat": "17.345843", "lng": "78.551899"},
            {"lat": "17.345457", "lng": "78.552492"},
            {"lat": "17.345113", "lng": "78.553015"},
            {"lat": "17.344777", "lng": "78.553534"},
            {"lat": "17.344412", "lng": "78.554074"},
            {"lat": "17.344217", "lng": "78.554364"},
            {"lat": "17.343872", "lng": "78.554941"},
            {"lat": "17.343643", "lng": "78.555334"},
            {"lat": "17.3432", "lng": "78.555984"},
            {"lat": "17.342745", "lng": "78.556645"},
            {"lat": "17.342306", "lng": "78.55735"},
            {"lat": "17.341842", "lng": "78.558074"},
            {"lat": "17.341555", "lng": "78.558664"},
            {"lat": "17.341307", "lng": "78.55953"},
            {"lat": "17.341068", "lng": "78.560626"},
            {"lat": "17.340904", "lng": "78.561812"},
            {"lat": "17.340727", "lng": "78.563063"},
            {"lat": "17.340465", "lng": "78.564334"},
            {"lat": "17.33997", "lng": "78.565396"},
            {"lat": "17.339485", "lng": "78.566389"},
            {"lat": "17.338985", "lng": "78.567254"},
            {"lat": "17.3385", "lng": "78.568268"},
            {"lat": "17.338197", "lng": "78.569192"},
            {"lat": "17.338034", "lng": "78.569867"},
            {"lat": "17.337817", "lng": "78.570484"},
            {"lat": "17.337477", "lng": "78.571422"},
            {"lat": "17.33713", "lng": "78.5725"},
            {"lat": "17.336868", "lng": "78.573457"},
            {"lat": "17.336773", "lng": "78.574202"},
            {"lat": "17.33668", "lng": "78.574723"},
            {"lat": "17.336547", "lng": "78.57576"},
            {"lat": "17.336413", "lng": "78.576819"},
            {"lat": "17.336317", "lng": "78.577721"},
            {"lat": "17.336203", "lng": "78.578587"},
            {"lat": "17.336081", "lng": "78.579521"},
            {"lat": "17.336002", "lng": "78.580407"},
            {"lat": "17.335883", "lng": "78.581434"},
            {"lat": "17.335738", "lng": "78.582508"},
            {"lat": "17.335557", "lng": "78.583732"},
            {"lat": "17.335114", "lng": "78.584855"},
            {"lat": "17.334565", "lng": "78.585993"},
            {"lat": "17.33401", "lng": "78.587173"},
            {"lat": "17.333402", "lng": "78.588372"},
            {"lat": "17.332744", "lng": "78.589481"},
            {"lat": "17.332104", "lng": "78.590564"},
            {"lat": "17.331563", "lng": "78.59149"},
            {"lat": "17.331157", "lng": "78.592147"},
            {"lat": "17.330642", "lng": "78.592995"},
            {"lat": "17.330166", "lng": "78.593968"},
            {"lat": "17.329689", "lng": "78.595119"},
            {"lat": "17.329298", "lng": "78.596314"},
            {"lat": "17.32893", "lng": "78.597479"},
            {"lat": "17.328588", "lng": "78.59856"},
            {"lat": "17.32834", "lng": "78.599342"},
            {"lat": "17.328105", "lng": "78.600073"},
            {"lat": "17.32776", "lng": "78.601149"},
            {"lat": "17.32752", "lng": "78.60225"},
            {"lat": "17.327329", "lng": "78.6033"},
            {"lat": "17.327124", "lng": "78.604351"},
            {"lat": "17.327004", "lng": "78.605088"},
            {"lat": "17.326864", "lng": "78.605758"},
            {"lat": "17.326553", "lng": "78.606484"},
            {"lat": "17.326256", "lng": "78.606976"},
            {"lat": "17.325939", "lng": "78.6074"},
            {"lat": "17.325652", "lng": "78.607793"},
            {"lat": "17.325443", "lng": "78.608087"},
            {"lat": "17.325177", "lng": "78.60839"},
            {"lat": "17.324722", "lng": "78.60896"},
            {"lat": "17.324122", "lng": "78.609723"},
            {"lat": "17.323365", "lng": "78.610675"},
            {"lat": "17.322577", "lng": "78.611727"},
            {"lat": "17.321769", "lng": "78.612775"},
            {"lat": "17.320997", "lng": "78.613789"},
            {"lat": "17.320536", "lng": "78.614589"},
            {"lat": "17.320234", "lng": "78.615854"},
            {"lat": "17.320008", "lng": "78.617278"},
            {"lat": "17.31993", "lng": "78.618635"},
            {"lat": "17.320084", "lng": "78.620092"},
            {"lat": "17.320244", "lng": "78.621535"},
            {"lat": "17.320402", "lng": "78.622903"},
            {"lat": "17.320547", "lng": "78.624283"},
            {"lat": "17.320624", "lng": "78.625702"},
            {"lat": "17.320734", "lng": "78.627094"},
            {"lat": "17.321016", "lng": "78.628509"},
            {"lat": "17.321265", "lng": "78.629492"},
            {"lat": "17.32135", "lng": "78.629804"},
            {"lat": "17.321557", "lng": "78.63068"},
            {"lat": "17.321899", "lng": "78.632062"},
            {"lat": "17.322234", "lng": "78.63366"},
            {"lat": "17.322287", "lng": "78.635175"},
            {"lat": "17.322172", "lng": "78.636422"},
            {"lat": "17.321815", "lng": "78.638004"},
            {"lat": "17.321377", "lng": "78.63929"},
            {"lat": "17.320895", "lng": "78.640662"},
            {"lat": "17.320563", "lng": "78.641694"},
            {"lat": "17.320474", "lng": "78.641988"},
            {"lat": "17.320158", "lng": "78.642944"},
            {"lat": "17.319794", "lng": "78.644262"},
            {"lat": "17.319653", "lng": "78.645719"},
            {"lat": "17.319623", "lng": "78.647202"},
            {"lat": "17.319665", "lng": "78.648741"},
            {"lat": "17.319701", "lng": "78.65004"},
            {"lat": "17.319614", "lng": "78.650835"},
            {"lat": "17.319177", "lng": "78.652197"},
            {"lat": "17.318691", "lng": "78.653544"},
            {"lat": "17.318211", "lng": "78.654849"},
            {"lat": "17.317758", "lng": "78.656121"},
            {"lat": "17.317408", "lng": "78.657614"},
            {"lat": "17.317298", "lng": "78.659192"},
            {"lat": "17.317392", "lng": "78.66072"},
            {"lat": "17.317466", "lng": "78.662103"},
            {"lat": "17.317525", "lng": "78.662385"},
            {"lat": "17.3175", "lng": "78.66345"},
            {"lat": "17.317464", "lng": "78.664572"},
            {"lat": "17.317326", "lng": "78.665814"},
            {"lat": "17.317007", "lng": "78.667177"},
            {"lat": "17.316572", "lng": "78.668599"},
            {"lat": "17.316127", "lng": "78.670222"},
            {"lat": "17.315774", "lng": "78.671685"},
            {"lat": "17.31525", "lng": "78.673509"},
            {"lat": "17.314664", "lng": "78.675085"},
            {"lat": "17.314015", "lng": "78.676776"},
            {"lat": "17.313395", "lng": "78.678432"},
            {"lat": "17.312782", "lng": "78.680092"},
            {"lat": "17.312144", "lng": "78.681683"},
            {"lat": "17.311817", "lng": "78.682425"},
            {"lat": "17.311704", "lng": "78.682504"},
            {"lat": "17.31082", "lng": "78.682261"},
            {"lat": "17.309942", "lng": "78.681949"},
            {"lat": "17.309257", "lng": "78.681702"},
            {"lat": "17.3083", "lng": "78.681365"},
            {"lat": "17.30717", "lng": "78.680956"},
            {"lat": "17.305941", "lng": "78.68053"},
            {"lat": "17.304875", "lng": "78.680355"},
            {"lat": "17.303702", "lng": "78.68057"},
            {"lat": "17.302565", "lng": "78.681008"},
            {"lat": "17.301397", "lng": "78.681235"},
            {"lat": "17.300182", "lng": "78.681054"},
            {"lat": "17.298654", "lng": "78.680604"},
            {"lat": "17.297197", "lng": "78.680203"},
            {"lat": "17.29571", "lng": "78.680125"},
            {"lat": "17.294123", "lng": "78.680097"},
            {"lat": "17.292655", "lng": "78.680081"},
            {"lat": "17.291168", "lng": "78.680047"},
            {"lat": "17.289788", "lng": "78.680019"},
            {"lat": "17.288312", "lng": "78.680055"},
            {"lat": "17.287583", "lng": "78.680343"},
            {"lat": "17.286452", "lng": "78.681028"},
            {"lat": "17.285969", "lng": "78.681252"},
            {"lat": "17.285157", "lng": "78.68093"},
            {"lat": "17.283993", "lng": "78.680014"},
            {"lat": "17.28312", "lng": "78.679795"},
            {"lat": "17.281601", "lng": "78.679644"},
            {"lat": "17.280052", "lng": "78.679494"},
            {"lat": "17.278568", "lng": "78.679349"},
            {"lat": "17.277367", "lng": "78.679098"},
            {"lat": "17.276288", "lng": "78.678683"},
            {"lat": "17.275784", "lng": "78.67859"},
            {"lat": "17.274827", "lng": "78.67883"},
            {"lat": "17.273608", "lng": "78.679014"},
            {"lat": "17.272299", "lng": "78.678745"},
            {"lat": "17.271877", "lng": "78.678475"},
            {"lat": "17.271618", "lng": "78.678139"},
            {"lat": "17.27143", "lng": "78.67804"},
            {"lat": "17.271364", "lng": "78.678099"},
            {"lat": "17.271365", "lng": "78.6782"},
            {"lat": "17.271541", "lng": "78.678477"},
            {"lat": "17.271942", "lng": "78.679252"},
            {"lat": "17.272132", "lng": "78.679783"},
            {"lat": "17.272196", "lng": "78.680802"},
            {"lat": "17.272128", "lng": "78.681123"},
            {"lat": "17.271915", "lng": "78.681836"},
            {"lat": "17.271964", "lng": "78.682434"},
            {"lat": "17.272138", "lng": "78.682815"},
            {"lat": "17.272696", "lng": "78.68367"},
            {"lat": "17.272848", "lng": "78.684089"},
            {"lat": "17.272899", "lng": "78.684874"},
            {"lat": "17.272771", "lng": "78.68562"},
            {"lat": "17.272544", "lng": "78.686165"},
            {"lat": "17.272279", "lng": "78.686461"},
            {"lat": "17.271384", "lng": "78.686868"},
            {"lat": "17.271037", "lng": "78.686919"},
            {"lat": "17.270558", "lng": "78.686665"},
            {"lat": "17.269606", "lng": "78.686058"},
            {"lat": "17.26853", "lng": "78.685369"},
            {"lat": "17.267532", "lng": "78.684634"},
            {"lat": "17.266419", "lng": "78.683871"},
            {"lat": "17.266009", "lng": "78.683778"},
            {"lat": "17.265453", "lng": "78.683973"},
            {"lat": "17.265125", "lng": "78.683643"},
            {"lat": "17.265286", "lng": "78.682809"},
            {"lat": "17.265209", "lng": "78.682515"},
            {"lat": "17.264947", "lng": "78.682182"},
            {"lat": "17.264505", "lng": "78.681894"},
            {"lat": "17.264202", "lng": "78.681924"},
            {"lat": "17.263787", "lng": "78.682293"},
            {"lat": "17.263174", "lng": "78.683143"},
            {"lat": "17.262947", "lng": "78.683397"},
            {"lat": "17.262664", "lng": "78.683284"},
            {"lat": "17.262197", "lng": "78.683542"},
            {"lat": "17.260837", "lng": "78.683622"},
            {"lat": "17.259457", "lng": "78.6836"},
            {"lat": "17.258617", "lng": "78.68358"},
            {"lat": "17.258152", "lng": "78.683307"},
            {"lat": "17.2577", "lng": "78.682917"},
            {"lat": "17.257322", "lng": "78.68284"},
            {"lat": "17.256279", "lng": "78.683087"},
            {"lat": "17.254805", "lng": "78.68312"},
            {"lat": "17.253527", "lng": "78.683242"},
            {"lat": "17.252501", "lng": "78.68344"},
            {"lat": "17.251512", "lng": "78.683649"},
            {"lat": "17.251284", "lng": "78.683696"},
            {"lat": "17.251229", "lng": "78.683653"},
            {"lat": "17.251269", "lng": "78.683627"},
            {"lat": "17.251355", "lng": "78.683618"},
            {"lat": "17.251754", "lng": "78.683588"},
            {"lat": "17.251908", "lng": "78.683454"},
            {"lat": "17.251872", "lng": "78.683388"},
            {"lat": "17.251801", "lng": "78.683373"},
            {"lat": "17.251226", "lng": "78.683427"},
            {"lat": "17.251127", "lng": "78.683329"},
            {"lat": "17.251087", "lng": "78.682972"},
            {"lat": "17.251124", "lng": "78.682811"},
            {"lat": "17.251168", "lng": "78.682797"},
            {"lat": "17.251211", "lng": "78.682795"},
            {"lat": "17.25117", "lng": "78.682803"},
            {"lat": "17.251102", "lng": "78.682797"},
            {"lat": "17.250842", "lng": "78.682809"},
            {"lat": "17.250585", "lng": "78.682698"},
            {"lat": "17.250184", "lng": "78.682678"},
            {"lat": "17.250009", "lng": "78.682509"},
            {"lat": "17.250008", "lng": "78.682239"},
            {"lat": "17.25001", "lng": "78.683236"},
            {"lat": "17.250069", "lng": "78.68353"},
            {"lat": "17.250257", "lng": "78.68358"},
            {"lat": "17.250417", "lng": "78.683589"},
            {"lat": "17.250597", "lng": "78.68359"},
            {"lat": "17.250766", "lng": "78.683595"},
            {"lat": "17.250898", "lng": "78.683621"},
            {"lat": "17.250958", "lng": "78.683689"},
            {"lat": "17.250903", "lng": "78.683818"},
            {"lat": "17.25017", "lng": "78.683988"},
            {"lat": "17.250054", "lng": "78.683917"},
            {"lat": "17.250052", "lng": "78.683863"},
            {"lat": "17.250091", "lng": "78.683821"},
            {"lat": "17.2504", "lng": "78.683787"},
            {"lat": "17.250466", "lng": "78.683797"},
            {"lat": "17.250534", "lng": "78.683799"},
            {"lat": "17.250593", "lng": "78.683782"},
            {"lat": "17.250646", "lng": "78.683777"},
            {"lat": "17.250711", "lng": "78.683776"},
            {"lat": "17.250804", "lng": "78.683775"},
            {"lat": "17.250887", "lng": "78.683752"},
            {"lat": "17.250923", "lng": "78.683698"},
            {"lat": "17.250825", "lng": "78.683637"},
            {"lat": "17.250193", "lng": "78.683636"},
            {"lat": "17.249968", "lng": "78.683339"},
            {"lat": "17.249977", "lng": "78.682677"},
            {"lat": "17.249969", "lng": "78.682128"},
            {"lat": "17.250117", "lng": "78.682538"},
            {"lat": "17.25002", "lng": "78.683255"},
            {"lat": "17.250115", "lng": "78.683546"},
            {"lat": "17.250735", "lng": "78.683598"},
            {"lat": "17.25093", "lng": "78.683603"},
            {"lat": "17.251134", "lng": "78.683607"},
            {"lat": "17.252329", "lng": "78.683468"},
            {"lat": "17.253508", "lng": "78.683225"},
            {"lat": "17.25482", "lng": "78.6831"},
            {"lat": "17.256272", "lng": "78.683046"},
            {"lat": "17.2574", "lng": "78.682764"},
            {"lat": "17.257965", "lng": "78.683049"},
            {"lat": "17.258564", "lng": "78.683507"},
            {"lat": "17.259968", "lng": "78.683568"},
            {"lat": "17.260255", "lng": "78.683577"},
            {"lat": "17.260531", "lng": "78.683584"},
            {"lat": "17.260792", "lng": "78.683585"},
            {"lat": "17.261175", "lng": "78.6836"},
            {"lat": "17.261419", "lng": "78.683607"},
            {"lat": "17.261655", "lng": "78.683606"},
            {"lat": "17.262076", "lng": "78.683549"},
            {"lat": "17.262393", "lng": "78.683231"},
            {"lat": "17.262494", "lng": "78.683135"},
            {"lat": "17.262607", "lng": "78.683127"},
            {"lat": "17.262709", "lng": "78.683194"},
            {"lat": "17.262856", "lng": "78.683348"},
            {"lat": "17.263185", "lng": "78.683058"},
            {"lat": "17.26376", "lng": "78.682095"},
            {"lat": "17.264025", "lng": "78.681729"},
            {"lat": "17.264309", "lng": "78.681697"},
            {"lat": "17.264931", "lng": "78.682043"},
            {"lat": "17.26527", "lng": "78.6824"},
            {"lat": "17.265397", "lng": "78.682758"},
            {"lat": "17.265372", "lng": "78.68315"},
            {"lat": "17.265216", "lng": "78.683776"},
            {"lat": "17.265285", "lng": "78.683874"},
            {"lat": "17.265404", "lng": "78.683895"},
            {"lat": "17.265529", "lng": "78.683865"},
            {"lat": "17.265828", "lng": "78.683744"},
            {"lat": "17.266014", "lng": "78.683697"},
            {"lat": "17.266223", "lng": "78.683705"},
            {"lat": "17.266807", "lng": "78.68401"},
            {"lat": "17.267758", "lng": "78.684701"},
            {"lat": "17.268742", "lng": "78.68541"},
            {"lat": "17.269987", "lng": "78.686191"},
            {"lat": "17.271071", "lng": "78.686815"},
            {"lat": "17.271918", "lng": "78.686585"},
            {"lat": "17.272403", "lng": "78.686314"},
            {"lat": "17.272634", "lng": "78.685957"},
            {"lat": "17.272864", "lng": "78.685047"},
            {"lat": "17.272862", "lng": "78.684224"},
            {"lat": "17.272701", "lng": "78.683717"},
            {"lat": "17.271993", "lng": "78.682567"},
            {"lat": "17.271903", "lng": "78.682234"},
            {"lat": "17.271902", "lng": "78.681711"},
            {"lat": "17.272009", "lng": "78.681321"},
            {"lat": "17.27218", "lng": "78.680784"},
            {"lat": "17.272105", "lng": "78.679732"},
            {"lat": "17.271702", "lng": "78.678825"},
            {"lat": "17.271325", "lng": "78.678054"},
            {"lat": "17.2712", "lng": "78.677722"},
            {"lat": "17.270966", "lng": "78.677195"},
            {"lat": "17.27093", "lng": "78.676892"},
            {"lat": "17.271019", "lng": "78.676511"},
            {"lat": "17.271117", "lng": "78.676388"},
            {"lat": "17.271237", "lng": "78.676385"},
            {"lat": "17.271294", "lng": "78.676486"},
            {"lat": "17.271212", "lng": "78.676823"},
            {"lat": "17.271169", "lng": "78.677125"},
            {"lat": "17.27128", "lng": "78.677423"},
            {"lat": "17.271665", "lng": "78.677724"},
            {"lat": "17.272317", "lng": "78.678127"},
            {"lat": "17.27313", "lng": "78.678455"},
            {"lat": "17.27332", "lng": "78.678485"},
            {"lat": "17.273518", "lng": "78.678489"},
            {"lat": "17.273722", "lng": "78.678479"},
            {"lat": "17.274958", "lng": "78.678324"},
            {"lat": "17.27591", "lng": "78.678099"},
            {"lat": "17.276356", "lng": "78.678198"},
            {"lat": "17.276761", "lng": "78.678497"},
            {"lat": "17.277367", "lng": "78.678956"},
            {"lat": "17.27848", "lng": "78.679136"},
            {"lat": "17.280087", "lng": "78.679297"},
            {"lat": "17.281605", "lng": "78.679445"},
            {"lat": "17.283125", "lng": "78.679592"},
            {"lat": "17.284562", "lng": "78.679834"},
            {"lat": "17.284915", "lng": "78.680177"},
            {"lat": "17.28541", "lng": "78.680922"},
            {"lat": "17.285632", "lng": "78.68104"},
            {"lat": "17.285893", "lng": "78.68109"},
            {"lat": "17.286167", "lng": "78.681049"},
            {"lat": "17.287446", "lng": "78.680292"},
            {"lat": "17.28831", "lng": "78.679938"},
            {"lat": "17.288593", "lng": "78.679902"},
            {"lat": "17.288891", "lng": "78.679888"},
            {"lat": "17.289205", "lng": "78.679898"},
            {"lat": "17.290742", "lng": "78.679924"},
            {"lat": "17.292315", "lng": "78.679957"},
            {"lat": "17.293757", "lng": "78.680004"},
            {"lat": "17.295202", "lng": "78.680017"},
            {"lat": "17.296693", "lng": "78.680038"},
            {"lat": "17.297992", "lng": "78.68029"},
            {"lat": "17.299418", "lng": "78.680714"},
            {"lat": "17.300834", "lng": "78.681086"},
            {"lat": "17.301118", "lng": "78.681115"},
            {"lat": "17.301404", "lng": "78.681124"},
            {"lat": "17.301686", "lng": "78.681112"},
            {"lat": "17.302753", "lng": "78.680834"},
            {"lat": "17.304087", "lng": "78.680354"},
            {"lat": "17.304529", "lng": "78.680279"},
            {"lat": "17.30483", "lng": "78.680259"},
            {"lat": "17.305128", "lng": "78.680264"},
            {"lat": "17.306466", "lng": "78.680603"},
            {"lat": "17.3078", "lng": "78.681056"},
            {"lat": "17.309038", "lng": "78.6815"},
            {"lat": "17.309512", "lng": "78.681681"},
            {"lat": "17.310076", "lng": "78.681945"},
            {"lat": "17.310753", "lng": "78.682182"},
            {"lat": "17.31153", "lng": "78.682407"},
            {"lat": "17.311698", "lng": "78.682341"},
            {"lat": "17.311859", "lng": "78.682067"},
            {"lat": "17.312256", "lng": "78.681179"},
            {"lat": "17.312714", "lng": "78.680047"},
            {"lat": "17.313187", "lng": "78.678773"},
            {"lat": "17.313702", "lng": "78.677406"},
            {"lat": "17.314224", "lng": "78.676014"},
            {"lat": "17.3147", "lng": "78.674772"},
            {"lat": "17.315033", "lng": "78.673813"},
            {"lat": "17.315412", "lng": "78.672709"},
            {"lat": "17.315753", "lng": "78.671447"},
            {"lat": "17.31609", "lng": "78.670052"},
            {"lat": "17.316495", "lng": "78.668637"},
            {"lat": "17.316875", "lng": "78.667329"},
            {"lat": "17.317199", "lng": "78.665923"},
            {"lat": "17.317372", "lng": "78.664519"},
            {"lat": "17.317414", "lng": "78.663129"},
            {"lat": "17.317375", "lng": "78.661712"},
            {"lat": "17.317271", "lng": "78.660302"},
            {"lat": "17.317202", "lng": "78.658908"},
            {"lat": "17.317266", "lng": "78.657612"},
            {"lat": "17.317437", "lng": "78.656825"},
            {"lat": "17.317917", "lng": "78.65539"},
            {"lat": "17.318417", "lng": "78.65396"},
            {"lat": "17.318968", "lng": "78.652506"},
            {"lat": "17.319481", "lng": "78.651149"},
            {"lat": "17.319673", "lng": "78.650147"},
            {"lat": "17.319647", "lng": "78.648727"},
            {"lat": "17.319596", "lng": "78.647233"},
            {"lat": "17.319629", "lng": "78.645809"},
            {"lat": "17.319767", "lng": "78.644454"},
            {"lat": "17.320094", "lng": "78.643101"},
            {"lat": "17.320419", "lng": "78.642125"},
            {"lat": "17.32071", "lng": "78.641204"},
            {"lat": "17.320954", "lng": "78.640445"},
            {"lat": "17.321162", "lng": "78.639718"},
            {"lat": "17.321488", "lng": "78.638677"},
            {"lat": "17.321903", "lng": "78.637467"},
            {"lat": "17.322154", "lng": "78.636113"},
            {"lat": "17.322233", "lng": "78.634817"},
            {"lat": "17.322144", "lng": "78.633359"},
            {"lat": "17.321786", "lng": "78.631853"},
            {"lat": "17.321416", "lng": "78.630467"},
            {"lat": "17.32117", "lng": "78.629526"},
            {"lat": "17.320897", "lng": "78.628274"},
            {"lat": "17.320669", "lng": "78.626988"},
            {"lat": "17.320602", "lng": "78.625762"},
            {"lat": "17.320545", "lng": "78.624515"},
            {"lat": "17.320442", "lng": "78.62363"},
            {"lat": "17.32033", "lng": "78.622732"},
            {"lat": "17.320221", "lng": "78.621544"},
            {"lat": "17.320065", "lng": "78.6202"},
            {"lat": "17.319918", "lng": "78.618766"},
            {"lat": "17.319981", "lng": "78.617284"},
            {"lat": "17.3202", "lng": "78.615887"},
            {"lat": "17.320457", "lng": "78.614699"},
            {"lat": "17.321117", "lng": "78.613585"},
            {"lat": "17.322017", "lng": "78.612373"},
            {"lat": "17.322967", "lng": "78.61109"},
            {"lat": "17.323933", "lng": "78.609799"},
            {"lat": "17.324833", "lng": "78.608597"},
            {"lat": "17.325472", "lng": "78.607767"},
            {"lat": "17.326132", "lng": "78.606933"},
            {"lat": "17.326712", "lng": "78.605967"},
            {"lat": "17.326915", "lng": "78.605259"},
            {"lat": "17.327041", "lng": "78.604545"},
            {"lat": "17.327179", "lng": "78.603814"},
            {"lat": "17.327328", "lng": "78.603017"},
            {"lat": "17.32749", "lng": "78.60211"},
            {"lat": "17.327675", "lng": "78.601259"},
            {"lat": "17.32803", "lng": "78.600157"},
            {"lat": "17.328384", "lng": "78.599065"},
            {"lat": "17.328702", "lng": "78.597988"},
            {"lat": "17.329085", "lng": "78.59683"},
            {"lat": "17.329402", "lng": "78.595878"},
            {"lat": "17.329479", "lng": "78.595835"},
            {"lat": "17.329481", "lng": "78.596226"},
            {"lat": "17.32956", "lng": "78.596281"},
            {"lat": "17.329613", "lng": "78.59629"},
            {"lat": "17.329686", "lng": "78.59629"},
            {"lat": "17.330877", "lng": "78.59615"},
            {"lat": "17.331092", "lng": "78.596134"},
            {"lat": "17.331225", "lng": "78.596125"},
            {"lat": "17.331388", "lng": "78.596108"},
            {"lat": "17.3328", "lng": "78.596161"},
            {"lat": "17.333522", "lng": "78.59622"},
            {"lat": "17.333662", "lng": "78.596232"},
            {"lat": "17.333816", "lng": "78.596235"},
            {"lat": "17.333989", "lng": "78.596236"},
            {"lat": "17.334169", "lng": "78.596236"},
            {"lat": "17.334337", "lng": "78.59624"},
            {"lat": "17.334885", "lng": "78.596271"},
            {"lat": "17.33494", "lng": "78.596267"},
            {"lat": "17.334985", "lng": "78.596249"},
            {"lat": "17.334987", "lng": "78.595967"},
            {"lat": "17.334957", "lng": "78.595318"},
            {"lat": "17.334963", "lng": "78.594898"},
            {"lat": "17.334974", "lng": "78.594498"},
            {"lat": "17.335377", "lng": "78.594354"},
            {"lat": "17.335428", "lng": "78.594355"},
            {"lat": "17.335493", "lng": "78.59435"},
            {"lat": "17.335672", "lng": "78.59438"},
            {"lat": "17.335745", "lng": "78.594499"},
            {"lat": "17.335802", "lng": "78.594505"},
            {"lat": "17.335858", "lng": "78.594502"},
            {"lat": "17.335777", "lng": "78.594422"},
            {"lat": "17.334989", "lng": "78.594439"},
            {"lat": "17.334976", "lng": "78.594755"},
            {"lat": "17.333587", "lng": "78.594767"},
            {"lat": "17.33228", "lng": "78.594635"},
            {"lat": "17.331333", "lng": "78.594521"},
            {"lat": "17.330777", "lng": "78.594274"},
            {"lat": "17.330261", "lng": "78.594116"},
            {"lat": "17.330082", "lng": "78.594389"},
            {"lat": "17.329767", "lng": "78.595118"},
            {"lat": "17.329433", "lng": "78.596059"},
            {"lat": "17.329052", "lng": "78.597172"},
            {"lat": "17.32869", "lng": "78.598247"},
            {"lat": "17.328393", "lng": "78.599309"},
            {"lat": "17.328073", "lng": "78.600266"},
            {"lat": "17.327697", "lng": "78.6015"},
            {"lat": "17.327485", "lng": "78.602632"},
            {"lat": "17.327285", "lng": "78.603725"},
            {"lat": "17.327153", "lng": "78.604326"},
            {"lat": "17.327032", "lng": "78.605097"},
            {"lat": "17.327028", "lng": "78.605256"},
            {"lat": "17.327305", "lng": "78.60541"},
            {"lat": "17.328358", "lng": "78.60559"},
            {"lat": "17.328997", "lng": "78.605719"},
            {"lat": "17.329334", "lng": "78.605994"},
            {"lat": "17.329618", "lng": "78.606335"},
            {"lat": "17.329967", "lng": "78.606807"},
            {"lat": "17.330323", "lng": "78.607284"},
            {"lat": "17.330613", "lng": "78.607558"},
            {"lat": "17.330754", "lng": "78.607679"},
            {"lat": "17.330835", "lng": "78.607649"},
            {"lat": "17.331271", "lng": "78.607172"},
            {"lat": "17.3317", "lng": "78.60666"},
            {"lat": "17.332061", "lng": "78.606241"},
            {"lat": "17.332345", "lng": "78.605965"},
            {"lat": "17.332407", "lng": "78.605949"},
            {"lat": "17.332448", "lng": "78.605949"},
            {"lat": "17.332489", "lng": "78.605961"}
        ];
        var totalDist1 = calcPathLength(arrLatLng);
        var totalDist2 = 0;
        var totalDist3 = 0;

        for (var i = 0; i < arrLatLng.length - 1; i++) {
            totalDist2 = totalDist2 + distance(arrLatLng[i].lat, arrLatLng[i].lng, arrLatLng[i + 1].lat, arrLatLng[i + 1].lng, "K");
            totalDist3 = totalDist2 + getDistanceFromLatLonInKm(arrLatLng[i].lat, arrLatLng[i].lng, arrLatLng[i + 1].lat, arrLatLng[i + 1].lng);
        }


        console.log("------------Total distance is 1---------------");
        console.log(totalDist1);
        console.log(totalDist2);
        console.log(totalDist3);
        console.log("----------------------------s---------------");

        arrLatLng = [
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
        totalDist1 = calcPathLength(arrLatLng);
        totalDist2 = 0;

        for (i = 0; i < arrLatLng.length - 1; i++) {
            totalDist2 = totalDist2 + distance(arrLatLng[i].lat, arrLatLng[i].lng, arrLatLng[i + 1].lat, arrLatLng[i + 1].lng, "K");
            totalDist3 = totalDist2 + getDistanceFromLatLonInKm(arrLatLng[i].lat, arrLatLng[i].lng, arrLatLng[i + 1].lat, arrLatLng[i + 1].lng);
        }


        console.log("------------Total distance is 2---------------");
        console.log(totalDist1);
        console.log(totalDist2);
        console.log(totalDist3);
        console.log("----------------------------s---------------");
    };

    function calcPathLength(path) {
        var total = 0;
        for (var i = 0; i < path.length - 1; i++) {
            var pos1 = new google.maps.LatLng(path[i].lat, path[i].lng);
            var pos2 = new google.maps.LatLng(path[i + 1].lat, path[i + 1].lng);
            total += google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2);
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
                    ;
                }

            });
            function setMarker(position) {
                markers.push(position); // add marker to array
                return markers;

            };
        }
    };
});