'use strict';

/**
 * critic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::critic.critic');
