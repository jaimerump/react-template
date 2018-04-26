const metric_fixture = require('./../../test/fixtures/metric.json');
const probability_fixture = require('./../../test/fixtures/probability.json');
const multi_probability_fixture = require('./../../test/fixtures/multi_probability.json');

module.exports = function(server) {

  server.post('/api/metric', (req, res) => {

    res.send(metric_fixture);

  });

  server.post('/api/operation', (req, res) => {

    res.send(probability_fixture);

  });

  server.post('/api/probability', (req, res) => {

    res.send(multi_probability_fixture);

  });

}