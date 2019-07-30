
    UIkit.util.ready(function () {

        var bar = document.getElementById('js-progressbar-html5');

        var animate = setInterval(function () {

            bar.value = 90;

            if (bar.value >= bar.max) {
                clearInterval(animate);
            }

        }, 1000);

        var bar = document.getElementById('js-progressbar-css3');
        var animate = setInterval(function () {

            bar.value = 80;

            if (bar.value >= bar.max) {
                clearInterval(animate);
            }

        }, 1000);

        var bar = document.getElementById('js-progressbar-js');
        var animate = setInterval(function () {

            bar.value = 70;

            if (bar.value >= bar.max) {
                clearInterval(animate);
            }

        }, 1000);

        var bar = document.getElementById('js-progressbar-vue');
        var animate = setInterval(function () {

            bar.value = 70;

            if (bar.value >= bar.max) {
                clearInterval(animate);
            }

        }, 1000);

        var bar = document.getElementById('js-progressbar-react');
        var animate = setInterval(function () {

            bar.value = 50;

            if (bar.value >= bar.max) {
                clearInterval(animate);
            }

        }, 1000);

        var bar = document.getElementById('js-progressbar-py');
        var animate = setInterval(function () {

            bar.value = 60;

            if (bar.value >= bar.max) {
                clearInterval(animate);
            }

        }, 1000);

        var bar = document.getElementById('js-progressbar-node');
        var animate = setInterval(function () {

            bar.value = 50;

            if (bar.value >= bar.max) {
                clearInterval(animate);
            }

        }, 1000);

        var bar = document.getElementById('js-progressbar-ui');
        var animate = setInterval(function () {

            bar.value = 70;

            if (bar.value >= bar.max) {
                clearInterval(animate);
            }

        }, 1000);

    });
