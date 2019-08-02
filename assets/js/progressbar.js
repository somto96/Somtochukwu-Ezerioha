
    UIkit.util.ready(function () {

        var bar = document.getElementById('js-progressbar-html5');

        var animate = setInterval(function () {

            bar.value += 10;

            // if (bar.value >= bar.max) {
            //     clearInterval(animate);
            // }

        }, 1000);

        var bar = document.getElementById('js-progressbar-css3');
        var animate = setInterval(function () {

            bar.value += 10;

            // if (bar.value >= bar.max) {
            //     clearInterval(animate);
            // }

        }, 1000);

        var bar = document.getElementById('js-progressbar-js');
        var animate = setInterval(function () {

            bar.value += 10;

            // if (bar.value >= bar.max) {
            //     clearInterval(animate);
            // }

        }, 1000);

        var bar = document.getElementById('js-progressbar-vue');
        var animate = setInterval(function () {

            bar.value +=10;

            // if (bar.value >= bar.max) {
            //     clearInterval(animate);
            // }

        }, 1000);

        var bar = document.getElementById('js-progressbar-react');
        var animate = setInterval(function () {

            bar.value += 10;

            // if (bar.value >= bar.max) {
            //     clearInterval(animate);
            // }

        }, 1000);

        var bar = document.getElementById('js-progressbar-py');
        var animate = setInterval(function () {

            bar.value += 10;

            if (bar.value >= bar.max) {
                clearInterval(animate);
            }

        }, 1000);

        var bar = document.getElementById('js-progressbar-node');
        var animate = setInterval(function () {

            bar.value += 10;

            // if (bar.value >= bar.max) {
            //     clearInterval(animate);
            // }

        }, 1000);

        var bar = document.getElementById('js-progressbar-ui');
        var animate = setInterval(function () {

            bar.value += 10;

            // if (bar.value >= bar.max) {
            //     clearInterval(animate);
            // }

        }, 1000);

    });
