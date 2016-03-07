/**
 * Created by bence_mandli on 2016. 03. 01..
 */
'use strict';

app.service('TagService', function () {

    var _activeTags = null;
    var _tag = [
        {
            name: 'Animals',
            icons: './img/tags/animal.svg',
            subTag: [
                {
                    name: 'Pets',
                    subTag: [
                        'Guppy',
                        'GoldFish',
                        'Dog',
                        'Cat'
                    ]
                },
                {
                    name: 'Wild animals',
                    subTag: [
                        'Tiger',
                        'Ant',
                        'Tetra',
                        'Peafowl'
                    ]
                },
                {
                    name: 'Domestic animals',
                    subTag: [
                        'Cow',
                        'Pig',
                        'Goat',
                        'Horse'
                    ]
                }
            ]
        },
        {
            name: 'Food',
            icons: './img/tags/food.svg',
            subTag: [
                {
                    name: 'Fast Food',
                    subTag: [
                        'Cheeseburger',
                        'Hamburger'
                    ]
                },
                {
                    name: 'Dessert',
                    subTag: [
                        'Chocolate',
                        'Cookie',
                        'Cake',
                        'Pie'
                    ]
                }
            ]
        },
        {
            name: 'Vechicle',
            icons: './img/tags/vehicle.svg',
            subTag: [
                {
                    name: 'Motorcycle',
                    subTag: [
                        'Harley Davidson'
                    ]
                },
                {
                    name: 'Car',
                    subTag: [
                        'Lamborghini',
                        'Ferrari',
                        'Bugatti',
                        'Mercedes',
                        'BMW'
                    ]
                }
            ]
        },
        {
            name: 'Movie',
            icons: './img/tags/movie.svg',
            subTag: [
                {
                    name: 'Science fiction',
                    subTag: [
                        'Sunshine',
                        'Interstellar',
                        'The Moon',
                        'Oblivion',
                        'Star Trek',
                        'Star Wars'
                    ]
                }
            ]
        }
    ];

    var getAll = function () {
        return _tag;
    };

    var setTag = function (tag) {
        _activeTags = tag;
    };

    var getTag = function () {
        return _activeTags;
    };

    return {
        getAll: getAll,
        setTag: setTag,
        getTag: getTag
    };

});
