'use strict';

/**
 * Circuit.js controller
 *
 * @description: A set of functions called "actions" for managing `Circuit`.
 */

module.exports = {

  /**
   * Retrieve circuit records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.circuit.search(ctx.query);
    } else {
      return strapi.services.circuit.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a circuit record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.circuit.fetch(ctx.params);
  },

  /**
   * Count circuit records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.circuit.count(ctx.query);
  },

  /**
   * Create a/an circuit record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.circuit.add(ctx.request.body);
  },

  /**
   * Update a/an circuit record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.circuit.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an circuit record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.circuit.remove(ctx.params);
  }
};
