'use strict';

/**
 * A class for cities.
 *
 * @constructor
 * @param {String} name The name of the city.
 * @param {Object} details City details.
 * @package {Number} details.population The population of the city in millions.
 */
var City = function(name, details) {
  details = details || {};
  if (!details.population) {
    throw new Error('Population is required when creating a city.');
  }

  this._name = name;
  this._population = details.population;
};

/**
 * Name accessor.
 *
 * @return {String} The city name.
 */
City.prototype.getName = function() {
  return this._name;
};

/**
 * Population accessor.
 *
 * @return {Number} The city population.
 */
City.prototype.getPopulation = function() {
  return this._population;
};

City.prototype.isSmall = function() {
  return this._population < 0.2;
};

City.prototype.isMedium = function() {
  return this._population >= 0.2 && this._population < 1;
};

City.prototype.isLarge = function() {
  return this._population >= 1;
};

module.exports = City;
