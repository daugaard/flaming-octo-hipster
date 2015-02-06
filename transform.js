var fs = require('fs');

var _ = require('./bower_components/underscore/underscore-min.js');

var incidents = require('./data/incidents_zip.json');

var by_months = _.groupBy(incidents, function(element) { return element.date; });

console.log( _.max(incidents,function(e) { return e.count; }) );
console.log( _.min(incidents,function(e) { return e.count; }) );

fs.writeFile("./data/incidents_zip_grouped.json", JSON.stringify(by_months), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 