const { v4 } = require('uuid');
const {uuid} = require('../crypto-magic');
const Benchmark = require('benchmark');

function uuid4Speedtest() {
    const suite = new Benchmark.Suite({
        onError(event) {
            console.error(event.target.error);
        },
    });

    suite
        .add('uuid.uuidv4()', function () {
            v4();
        })
        .add('uuidv4()', {
            defer: true,
            fn: async function(deferred){
                await uuid.v4();
                deferred.resolve();
            }
        })
        .on("cycle", function(event) {
            console.log(String(event.target));
        })
        .on("complete", function() {
            console.log("Fastest is " + this.filter("fastest").map("name"));
        })
        .run({
            async: true
        });
}

uuid4Speedtest();