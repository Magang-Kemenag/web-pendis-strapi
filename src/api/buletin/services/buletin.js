'use strict';

/**
 * buletin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::buletin.buletin');
