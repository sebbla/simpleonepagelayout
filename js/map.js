var map, latLng = new google.maps.LatLng(51.47493961788009, 18.2373046875);

function initialize() {
    var styles = [
        {
            stylers: [
                {hue: "#009BC7"},
                {saturation: -30}
            ]
        }
    ];
    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
    var mapOptions = {
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        zoom: 8,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        center: latLng
    };
    map = new google.maps.Map(document.getElementById('location-map'), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    marker = new google.maps.Marker({
        map: map,
        position: latLng,
        visible: false
    });

    // InfoBox window
    infobox = new InfoBox({
        content: document.getElementById("infobox"),
        disableAutoPan: false,
        pixelOffset: new google.maps.Size(-73, -200),
        zIndex: null,
        boxStyle: {
            background: "",
            opacity: 1,
        },
        closeBoxMargin: "12px 4px 2px 2px",
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1)
    });
    infobox.open(map, marker);
}

// Listeners
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', function() {
    if (typeof map !== "undefined") {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    }
});