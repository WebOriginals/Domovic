if ($('#map').length > 0) {
    var myMap;

    ymaps.ready(init);

    function init() {

        myMap = new ymaps.Map('map', {

            center: [45.350942, 39.058194],
            controls: [],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        });

        var myPlacemark = new ymaps.Placemark([45.350942, 39.058194], {}, {
            iconLayout: 'default#image',
            iconImageHref: './../../img/ic/point-map.svg',
            iconImageSize: [32, 32],
            iconImageOffset: [-15, -40]
        });

// Размещение геообъекта на карте.
        myMap.geoObjects
            .add(myPlacemark);

// Добавим на карту ползунок масштаба и линейку.
        myMap.controls.add('zoomControl');

//Отключить изменение маштаба колесом и косанием
        myMap.behaviors.disable(['scrollZoom', 'multiTouch', 'drag']);
    }

}