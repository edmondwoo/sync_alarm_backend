module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_2nx5adHkN315trx5SQ3xF7MtBESl/IM53yY88N6",
        apiToken: "id6BI2zavdz80nqNrtdhSYPl",
        appFilter: "sync-alarm-backend",
        // teamFilter: "your-team-id-on-vercel",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
  },
});
