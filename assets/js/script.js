$(() => {
    const URL = '#';
    const ACTIVE_CLASS = 'active';
    const COUNTER_SECTION_CLASS = 'counter-section';
    const counterSection = $('.' + COUNTER_SECTION_CLASS);
    const $openModalBtn = $('.open-modal-btn');
    const $formModalWindow = $('#formModalWindow');
    const $orderBackCallForm = $('.order-back-call-form');
    const $orderCallBackModal = $('#orderCallBackModal');
    const $successModal = $('#successModal');

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

    $('.phone-field').ruPhoneFormat();

    $openModalBtn.on('click', onOpenModalBtnClick);
    $formModalWindow.on('click', '.close-btn', onCloseModalBtnClick);
    $orderBackCallForm.on('submit', onSubmitForm);
    
    function startCounter() {
        $('.counter').counterUp({
            delay: 10,
            time: 1500     
        });
    }
    function onOpenModalBtnClick() {
        $formModalWindow.addClass(ACTIVE_CLASS);
        $orderCallBackModal.addClass(ACTIVE_CLASS);

        $('body').css('overflow', 'hidden');
    }
    function onCloseModalBtnClick() {
        $formModalWindow.removeClass(ACTIVE_CLASS);
        $successModal.removeClass(ACTIVE_CLASS);
        $orderCallBackModal.removeClass(ACTIVE_CLASS);
        resetForm();

        $('body').css('overflow', 'visible');
    }
    function onSubmitForm(e) {
        e.preventDefault();
        const $phoneField = $(e.target.closest('.order-back-call-form')).find('.phone-field');
        const phone = $phoneField.val();

        if(isValidPhone(phone)) {
            $phoneField.removeClass('invalid');
            submitForm(phone);
        } else {
            $phoneField.addClass('invalid');
        }
    }
    function submitForm(phone) {
        //     fetch(URL, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(phone)
        //     });
        showSuccessModal();
    }
    function isValidPhone(phone) {
        return phone.length === 16;
    }
    function showSuccessModal() {
        $formModalWindow.addClass(ACTIVE_CLASS);
        $orderCallBackModal.removeClass(ACTIVE_CLASS);
        $successModal.addClass(ACTIVE_CLASS);
    }
    function resetForm() {
        $orderBackCallForm.trigger('reset');
    }
});