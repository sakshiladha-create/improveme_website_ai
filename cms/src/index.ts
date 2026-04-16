import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Ensure public API access for blogs in local/dev by enabling permissions.
    // This makes the frontend fetches work without manual admin clicks.
    try {
      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (!publicRole?.id) return;

      const actionsToEnable = ['api::blog.blog.find', 'api::blog.blog.findOne'];
      const existing = await strapi.db.query('plugin::users-permissions.permission').findMany({
        where: {
          role: publicRole.id,
          action: { $in: actionsToEnable },
        },
        select: ['id', 'action', 'enabled'],
      });

      const toUpdate = existing.filter((p) => !p.enabled).map((p) => p.id);
      if (toUpdate.length) {
        await strapi.db.query('plugin::users-permissions.permission').updateMany({
          where: { id: { $in: toUpdate } },
          data: { enabled: true },
        });
      }
    } catch (err) {
      strapi.log.warn(`Could not auto-enable blog permissions for public role: ${String(err)}`);
    }
  },
};
