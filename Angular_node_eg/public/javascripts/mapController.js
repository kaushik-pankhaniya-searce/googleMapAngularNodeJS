angular.module('angularjs_with_Nodejs').controller('mapController', function ($scope, $timeout,$filter) {
    var CSS_COLOR_NAMES = ["BlueViolet","Darkorange","DeepPink","Cyan", "Gold","LawnGreen","DarkKhaki","AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue",  "Brown",
        "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson",  "DarkBlue", "DarkCyan", "DarkGoldenRod",
        "DarkGray", "DarkGrey", "DarkGreen",  "DarkMagenta", "DarkOliveGreen",  "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
        "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet",  "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick",
        "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite",  "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink",
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
//    var arrLatLongTruck = [
//        [22.58608, 88.37402],
//        [22.58608, 88.19824],
//        [22.4846, 88.13232],
//        [22.47445, 87.96753],
//        [22.43892, 87.84668],
//        [22.40845, 87.66541],
//        [22.39829, 87.52808],
//        [22.38813, 87.39624],
//        [22.35766, 87.31384],
//        [22.32717, 87.22046],
//        [22.35258, 87.07764],
//        [22.32209, 86.98425],
//        [22.31193, 86.90186],
//        [22.28651, 86.79199],
//        [22.28143, 86.72607],
//        [22.35258, 86.68213],
//        [22.43892, 86.61072],
//        [22.54042, 86.5448],
//        [22.62665, 86.44592],
//        [22.69761, 86.39099],
//        [22.7888, 86.32507],
//        [22.84956, 86.20972],
//        [22.90017, 86.09985],
//        [22.95582, 86.01196],
//        [22.97606, 85.92957],
//        [22.98617, 85.84717],
//        [23.02662, 85.72083],
//        [23.06706, 85.65491],
//        [23.11254, 85.61646],
//        [23.17315, 85.58899],
//        [23.20345, 85.5011],
//        [23.26402, 85.42969],
//        [23.33969, 85.38025],
//        [23.35987, 85.3363],
//        [23.378157, 85.320415],
//        [23.415926, 85.227822],
//        [23.453684, 85.108481],
//        [23.491431, 85.003542],
//        [23.538599, 84.908892],
//        [23.546144, 84.812185],
//        [23.619689, 84.771032],
//        [23.655504, 84.731938],
//        [23.706381, 84.664036],
//        [23.74829, 84.54686],
//        [23.858459, 84.356532],
//        [23.972084, 84.216699],
//        [24.021763, 84.10794],
//        [24.163598, 84.05356],
//        [24.227373, 83.917611],
//        [24.191946, 83.684556],
//        [24.284034, 83.478691],
//        [24.245082, 83.303899],
//        [24.255707, 83.156298],
//        [24.206118, 83.008696],
//        [24.227373, 82.853326],
//        [24.174229, 82.760104],
//        [24.096246, 82.562007],
//        [24.220288, 82.429942],
//        [24.326514, 82.286225],
//        [24.44326, 82.146392],
//        [24.404357, 81.812346],
//        [24.439724, 81.664744],
//        [24.347749, 81.458879],
//        [24.36898, 81.334583],
//        [24.457403, 81.214171],
//        [24.513962, 81.097643],
//        [24.559898, 80.95781],
//        [24.584625, 80.767482],
//        [24.581093, 80.596574],
//        [24.623472, 80.351866],
//        [24.722302, 80.138232],
//        [24.761107, 79.932367],
//        [24.817529, 79.730386],
//        [24.902113, 79.602205]
//    ];
    var k = 0;
    /**
     * To initaliza the map
     */
    $scope.initMap = function () {
        myLatLng = new google.maps.LatLng(18.580085, -73.738125);

        // Empty content string
        var tableContent = '';
        directionsDisplay = new google.maps.DirectionsRenderer();

        map = new google.maps.Map(document.getElementById('mymap'), {
            center: myLatLng,
            zoom: 5,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
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
            });
        }

//        map.setCenter(new google.maps.LatLng(28.541766, 77.243415));
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
                        '<label>Manager Name ' + this['Manager Name'] + '</label> <br>' +
                        '<label>City  ' + this['City'] + '</label> <br>' +
                        '<label>State  ' + this['State'] + '</label> <br>' +
                        '<label>Capacity Utilization ' + this['Capacity Utilization'] + '</label> <br>' +
                        '<label>Area (SQ FT)' + this['Area'] + '</label> <br>' +
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
                        '<label>FY 15-16 MT ' + this['FY15-16MT'] + '</label> <br>' +
                        '<label>Type  ' + this['Type'] + '</label> <br>' +
                        '<label>State  ' + this['State'] + '</label> <br>' +
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
                        '<label>State  ' + this['State'] + '</label> <br>' +
                        '<label>Net Profit ' + this['Net Profit'] + '</label> <br>' +
                        '<label>Total Assets ' + this['Total Assets'] + '</label> <br>' +
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
                        '<label>Manager Name ' + this['Manager Name'] + '</label> <br>' +
                        '<label>Sales Rep  ' + this['Sales Rep First Name'] + ' ' + this['Sales Rep Last Name'] + '</label> <br>' +
                        '<label>Average Monthly Billing  ' + this['Average Monthly Billing'] + ' ' + this['Sales Rep Last Name'] + '</label> <br>' +
                        '<label>City  ' + this['City'] + '</label> <br>' +
                        '<label>State  ' + this['State'] + '</label> <br>' +
                        '</p></big>' +
                        '</div>' +
                        '</div>'
                } else if (this.docType == 'Top Perforrming Sales Executives') {
                    markerImage = this['Ranking'] >= 8 ? 'images/rsz_userred.png' : this['Ranking'] >= 5 ? 'images/rsz_userblue.png' : 'images/rsz_usergreen.png';
                    infoWindowContent = '<div id="content"  class="infowindow_warehouse">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<img src=" images/' + this['Images'] + '"><h1 id="firstHeading" class="firstHeading">' + this['First Name'] + ' ' + this['Last Name'] + '</h1>' +
                        '<div id="bodyContent" class="infowindow_warehouse">' +
                        '<big> <p>' +
                        '<label>City ' + this['City'] + '</label> <br>' +
                        '<label>State  ' + this['State'] + '</label> <br>' +
                        '<label>Ranking  ' + this['Ranking'] + '</label> <br>' +
                        '</p></big>' +
                        '</div>' +
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
                        '<h1 id="firstHeading" class="firstHeading">' + this['Dealer Name'] + '</h1>' +
                        '<div id="bodyContent" class="infowindow_warehouse">' +
                        '<big> <p>' +
                        '<label> nothing to show </label>' +
                        '</p></big>' +
                        '</div>' +
                        '</div>'
                }
                if (isFilteredData && filterValue.length > 0 && this.docType != 'Top Perforrming Sales Executives') {


                    var idx = filterValue.indexOf(this[filterKeyName]);
                    console.log(idx);

                    if (idx != -1)
                    {
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
                objMarkersFilterQuery[keyName] = { '$in': value};
            }
            else {
                objMarkersFilterQuery[keyName] = value;
            }
        }


        $.getJSON('/filter', objMarkersFilterQuery, function (data) {
            $scope.placeMarkesrs(data, true, value, keyName);
            if (templateCategory == 'Top Perforrming Sales Executives') {
                $scope.top20 = 0;
                $scope.middle2080 = 0;
                $scope.bottom20 = 0;
//                markerImage = this['Ranking'] >= 8 ? 'images/rsz_userred.png' : this['Ranking'] >= 5 ? 'images/rsz_userblue.png' : 'images/rsz_usergreen.png';

                angular.forEach(data, function(item, index){
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
            angular.forEach(data, function(item,index){
                assetOriginDestDetails.push({"destination":{"Latitude": item.Latitude, "Longitude": item.Longitude}, "origin":{"Latitude": latitude, "Longitude": longitude}})
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

        flgShowAllMarkers = false;
        $scope.placeMarkesrs(null);

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
         }
          else if (filterName == "reports") {
             $scope.title = "Reports";
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
        var assetOriginDestDetails = [{"origin": {"Latitude": 26.8467, "Longitude": 80.9462}, "destination":{"Latitude": 22.58608, "Longitude": 88.37402},"markerContent":'<div id="content"  class="infowindow_warehouse">' + '<div id="siteNotice">' + '<h7 > Ankush Jain </h7><br>' + '<h7 Vehicle# - > MH 12 JX 1634 </h7><br>' + '<h7 Mobile# - > 9673990425 </h7>' +  '</div>'},
                                      {"origin": {"Latitude": 21.1702, "Longitude": 72.8311}, "destination":{"Latitude": 21.1458, "Longitude": 79.0882},"markerContent":'<div id="content"  class="infowindow_warehouse">' + '<div id="siteNotice">' + '<h7 > Akhilesh Aggarwal </h7><br>' + '<h7 Vehicle# - > MH 12 BQ 5454 </h7><br>' + '<h7 Mobile# - > 8551089000 </h7>' +  '</div>'},
                                      {"origin": {"Latitude": 24.5854, "Longitude": 73.7125}, "destination": {"Latitude": 28.7041, "Longitude": 77.1025},"markerContent":'<div id="content"  class="infowindow_warehouse">' + '<div id="siteNotice">' + '<h7 > Abhishek Jha </h7><br>' + '<h7 Vehicle# - > DL 2C AS 2935 </h7><br>' + '<h7 Mobile# - > 7838757968 </h7>' +  '</div>'},
                                      {"origin": {"Latitude": 24.5854, "Longitude": 73.7125}, "destination":{"Latitude": 26.7041, "Longitude": 80.1025},"markerContent":'<div id="content"  class="infowindow_warehouse">' + '<div id="siteNotice">' + '<h7 > Akash Joshi </h7><br>' + '<h7 Vehicle# - > DL 2C AS 2935 </h7><br>' + '<h7 Mobile# - > 7838757968 </h7>' +  '</div>'}
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


        angular.forEach(assetOriginDestDetails, function(item, index) {
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
                        var markerTruck = new google.maps.Marker({position: start, map: map, icon: 'images/smalltruck.png'});
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
                }
            });



        });
    };

    $scope.moveTruck = function (map, markerTruck, markerIndex, latLngindex, countDotMarker) {

        setTimeout(function () {
            if (countDotMarker == 8 && $scope.whichOverlayToShow == 'assetTracking') {
                countDotMarker = 0;

                var geocoder = geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'latLng': markerTruck.position }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            var markerDot = new google.maps.Marker({position: markerTruck.position, map: map, icon: 'images/marker-dot.png'});
                           setTimeout(function(){
                               markerDot.setMap(map);
                               markerDot.setPosition(markerTruck.position);
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
                                       '<p><i> Time : '+$filter("date")(new Date(), "HH:mm:ss")
                                       +'</i></p></div>' +
                                       '</div>';
                                   var infoWindow = new google.maps.InfoWindow({
                                       content: infoWindowContent
                                   });
                                   infoWindow.open(map, markerDot);
                                   arrInfowindowsAssetTrackingMarkers.push(infoWindow);
                               },1000);
                               arrMarkers.push(markerDot);
                           })
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


        }, 1000)
    };


    $scope.showReport = function (showToUser, fileName) {
//        $("#dialog").dialog({width: 800, height: 500});
        $scope.showDialog = showToUser;
        if (showToUser)
//        $scope.$apply();
//            $("#frame").attr("src", "images/Report - VW.pdf");
            $("#frame").attr("src", "images/" + fileName);
    };

    $scope.showModal = function (showToUser, img) {
        $scope.showPersonAnalysis = showToUser;
        $scope.salePersonImage = img;
    };
    //////////////////////////////////////Defailt function calling on load////////////////////////////////
    setTimeout(function () {
        $scope.initMap();
    }, 100);
});