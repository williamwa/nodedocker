var argv = require('minimist')(process.argv);
var fs = require('fs');

var services = argv['with'];

if(services){
  services = services.split(',');
  buildDockerCompose(services);
}

function buildDockerCompose(services){
  console.log('generate services with', services);

  fs.readFile("./node_modules/nsail/stubs/docker-compose.stub", "utf-8", function(err, data) {

    var template = data;

    var depends = services.map(function(service){
      return "            - " + service;
    }).join("\n");

    if(depends){
      template = template.replace("{{depends}}", "        depends_on:\n" + depends);
    }else{
      template = template.replace("{{depends}}", "");
    }

    var volumes = services.map(function(service){
      return "    nsail" + service + ":\n        driver: local";
    }).join("\n");

    if(volumes){
      template = template.replace("{{volumes}}", "volumes:\n" + volumes);
    }else{
      template = template.replace("{{volumes}}", "");
    }

    var files = services.map(function(service){
      return './node_modules/nsail/stubs/' + service + '.stub';
    });

    fSReadFiles(files, function(err, results){

      template = template.replace('{{services}}', results.join(''));

      fs.writeFile("docker-compose.yaml", template, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written docker-compose.yaml file");
      });
    });

  });
}

function fSReadFiles (paths, cb) {
    var result = [], errors = [], l = paths.length;
    paths.forEach(function (path, k) {

        fs.readFile(path, "utf-8", function (err, data) {
            --l;
            err && (errors[k] = err);
            !err && (result[k] = data);
            // invoke cb if all read
            !l && cb (errors.length? errors : null, result);
        });

    });
}
