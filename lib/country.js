'use strict';

var City = require('./city');

/**
 * A class for countries.
 *
 * @constructor
 * @param {String} name The country name.
 */
var Country = function(name) {
  this._name = name;
  this._cities = [];
};

/**
 * Add a new city.
 *
 * @param {String} name The name of the city.
 * @param {Object} details The details of the city.
 * @return {City} Returns the created city.
 * @see {@link City}
 */
Country.prototype.addCity = function(name, details) {
  var city = new City(name, details);
  this._cities.push(city);
  return city;
};

/**
 * Find small cities, those with populations less than 200,000.
 *
 * @return {Array.<String>} An array of small city names.
 */
Country.prototype.findSmallCities = function(name, details) {
  var smallCities = [];
  //if polulation is less then 0.2 then push name to array
  //
  var allCities = this._cities;
  allCities.forEach(function(city){
    if (city.getPopulation() <= 0.2) {
      smallCities.push(city.getName())
    }

  });
  return smallCities;
};

/**
 * Find medium cities, those with populations between 200,000 and 1 million.
 *
 * @return {Array.<String>} An array of medium city names.
 */
Country.prototype.findMediumCities = function() {
  var mediumCities = [];
  var allCities = this._cities;
  allCities.forEach(function(city){
    console.log(city.getPopulation() >= 0.2 && city.getPopulation() <= 2);
    if (city.getPopulation() >= 0.2 && city.getPopulation() <= 2) {
      mediumCities.push(city.getName())
    }

  });
  return mediumCities;
};

/**
 * Find large cities, those with populations greater than 1 million.
 *
 * @return {Array.<String>} An array of large city names.
 */
Country.prototype.findLargeCities = function() {
};

module.exports = Country;
