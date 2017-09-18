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

    $scope.srcAddress;
    $scope.destAddress;
    $scope.wayPoints = [
        {'origin': {}, 'destination': {}}
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
    var arrdirectionsService = [];//= new google.maps.DirectionsService();
    var flgShowAllMarkers = true;
    $scope.showDialog = false;
    var arrLatLongTruck = [];

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
        flgShowAllMarkers = true;
        // jQuery AJAX call for JSON
        $.getJSON('/templates', function (data) {
            $scope.filter.filterCategories = data;
            $scope.$apply();
            console.log($scope.filter.filterCategories);
            $scope.showMarkersforAllCategories();
        });
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

            if (map)
            {
                if(map.data)
                {
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
                    infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<img src=" images/' + this['Images'] + '"><h1 id="firstHeading" class="firstHeading">' + this['First Name'] + ' ' + this['Last Name'] + '</h1>' +
                        '<div id="bodyContent" class="infowindow_warehouse">' +
                        '<big> <p>' +
                        '<label>City - ' + this['City'] + '</label> <br>' +
                        '<label>State  - ' + this['State'] + '</label> <br>' +
                        '<label>Ranking -  ' + this['Ranking'] + '</label> <br>' +
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
        map.setZoom(5);

        flgShowAllMarkers = false;
        $scope.placeMarkesrs(null);
        setMapStyle('default');

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
                $scope.title = "Zip Codes";
                $scope.placeMarkesrs(null);
                setMapStyle('businessGeography');
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
            {"destination": {"Latitude": 26.8467, "Longitude": 80.9462}, "origin": {"Latitude": 22.58608, "Longitude": 88.37402}, "markerContent": '<div id="content"  class="infowindow_warehouse">' + '<div id="siteNotice">' + '<h7 > Ankush Jain </h7><br>' + '<h7 Vehicle# - > MH 12 JX 1634 </h7><br>' + '<h7 Mobile# - > 9673990425 </h7>' + '</div>'},
            {"destination": {"Latitude": 21.1702, "Longitude": 72.8311}, "origin": {"Latitude": 21.1458, "Longitude": 79.0882}, "markerContent": '<div id="content"  class="infowindow_warehouse">' + '<div id="siteNotice">' + '<h7 > Akhilesh Aggarwal </h7><br>' + '<h7 Vehicle# - > MH 12 BQ 5454 </h7><br>' + '<h7 Mobile# - > 8551089000 </h7>' + '</div>'},
            {"destination": {"Latitude": 24.5854, "Longitude": 73.7125}, "origin": {"Latitude": 28.7041, "Longitude": 77.1025}, "markerContent": '<div id="content"  class="infowindow_warehouse">' + '<div id="siteNotice">' + '<h7 > Abhishek Jha </h7><br>' + '<h7 Vehicle# - > DL 2C AS 2935 </h7><br>' + '<h7 Mobile# - > 7838757968 </h7>' + '</div>'},
            {"destination": {"Latitude": 24.5854, "Longitude": 74.7125}, "origin": {"Latitude": 26.7041, "Longitude": 80.1025}, "markerContent": '<div id="content"  class="infowindow_warehouse">' + '<div id="siteNotice">' + '<h7 > Akash Joshi </h7><br>' + '<h7 Vehicle# - > DL 2C AS 2935 </h7><br>' + '<h7 Mobile# - > 7838757968 </h7>' + '</div>'}
        ];
        calcRoute(assetOriginDestDetails, false, true);
    };
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
        }, 5000)
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

    $scope.listWaypoints = function() {
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
        }, function(response, status) {
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

    $scope.resetRouting = function() {
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

    $scope.optimizeRoute = function() {
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
        }, function(response, status) {
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
        geocoder.geocode({'latLng': latlng}, function(results, status) {
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
                if (i % modVal == 0)
                {
                    console.log(i);
                    codeLatLng(routeLatLngs[i],function(address){   ///<<-------CHANGE HERE
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


    //////////////////////////////////////Default function calling on load////////////////////////////////
    setTimeout(function () {
        $scope.initMap();
//        $scope.placeZipcodesBoundries();
    }, 100);
});


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
                else {
                    $scope.wayPoints[0]['destination'] = {"Latitude": place.geometry.location.lat(), "Longitude": place.geometry.location.lng()};
                }

            });
            function setMarker(position) {
                markers.push(position); // add marker to array
                return markers;

            };
        }
    };
});