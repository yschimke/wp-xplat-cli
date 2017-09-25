var common = require("common");

//const graphAPIUrl = "https://graph.facebook.com/v2.6/";

module.exports = {
  "getAvailableEventFields": function getAvailableEventFields(){
    return [
      "description",
      "end_time",
      "name",
      "place",
      "start_time", 
      "id",
      "rsvp_status",
    ];
  },

  "getEdgeEvents": function getEdgeEvents(url, fields) {
    if (fields.constructor !== Array) {
      fields = this.getAvailableEventFields();
    }    
    let events = [];

    common.__getAllData(common.createGetOptions(url, fields), events)
      .then (function(events) {
        return JSON.parse(events);
      });
  }, 
};