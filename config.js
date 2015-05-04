define(['settings'],
function (Settings) {
  return new Settings({
    //elasticsearch: "http://"+window.location.hostname+":9200",
    datasources: {
      influxdb: {
        type: 'influxdb',
        url: "/influxdb/db/<--DB_NAME-->",
        username: '<--USER-->',
        password: '<--PASS-->',
        default: true
      }
      grafana:{
        type: 'influxdb',
        url: "/influxdb/db/<--GRAFANADB-->",
        username: '<--USER-->',
        password: '<--PASS-->',
        grafanaDB: true
      }
    },
    // default start dashboard
    default_route: '/dashboard/file/default.json',

    // set to false to disable unsaved changes warning
    unsaved_changes_warning: true,

    // set the default timespan for the playlist feature
    // Example: "1m", "1h"
    playlist_timespan: "1m",

    // Add your own custom pannels
    plugins: {
      panels: []
    }
  });
});
