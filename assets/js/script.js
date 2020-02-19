const COUNTER_SECTION_CLASS = 'counter-section';

$(document).ready(function() {
    const counterSection = $('.' + COUNTER_SECTION_CLASS);
    if(counterSection.is(':appeared')) {
        startCounter();
    }
    else {
        setTimeout(function() {
            counterSection.appear();
            try {
                $(document.body).on('appear', '.' + COUNTER_SECTION_CLASS, startCounter());
            } catch { }
        }, 500);
    }
});

function startCounter() {
    $(".counter").counterUp({
        delay: 10,
        time: 1500     
    });
}