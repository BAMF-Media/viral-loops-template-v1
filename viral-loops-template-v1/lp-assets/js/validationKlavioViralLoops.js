//=======================================================
// Klaviyo start

KlaviyoSubscribe.attachToForms('#participation_form', {
    hide_form_on_success: true,
    success: function ($form) {
        participate($("#email_first").val());
    }
});

KlaviyoSubscribe.attachToForms('#participation_form_second', {
    hide_form_on_success: true,
    success: function ($form) {
        participate($("#email_second").val());
    }

});
// Klaviyo end
//=======================================================

//=======================================================
// Viral Loops start
// main function VL which capture emails
function participate(email) {
    //submit the participant to Viral Loops
    campaign.identify({
        // firstname: fname,
        email: email
    });
}

//redirect them to thank-you after signup
campaign.addHook("stageChange", function (e) {
    if (e.stage === "postIdentify") {
        location.href = "http://launch.unicornsnot.com/thankyou";
     

    }
});

// if they are already registered, redirect them to the referral page
campaign.$(function () {
    if (this.user && this.user.referralCode) {
        location.href = "http://launch.unicornsnot.com/thankyou";
       
    }
});
// Viral Loops end\
//=======================================================

//=======================================================
// validation forms start
var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,10}$/i;

function submitBtnChecker(form, inputEmail, submitBtn) {
    if (pattern.test($(inputEmail).val())) {
        console.log("trueee");
        $(submitBtn).submit();
    }
    else {
        console.log("error");
        form.addClass("notValid");

    }
}

function validInputs(form, inputEmail, submitBtn) {
    if (pattern.test($(inputEmail).val())) {
        console.log("trueee");
        form.removeClass("notValid")
        form.addClass("valid");

    }
    else {
        console.log("error");
        form.removeClass("valid")
        form.addClass("notValid");
    }
}

function validateForm(form) {

    var inputEmail = form.find('input[type=email]');
    var submitBtn = form.find('button[type=submit]');


    $(submitBtn).click(function () {
        event.preventDefault();
        submitBtnChecker(form, inputEmail, submitBtn);
    });

    inputEmail.keyup(function () {
        validInputs(form, inputEmail, submitBtn);
    });

    inputEmail.blur(function () {
        validInputs(form, inputEmail, submitBtn);
    });

}
validateForm($('#participation_form'));
validateForm($('#participation_form_second'));
// validation forms end
//=======================================================

//=======================================================
// focus input start
$(".email").on("focus", function (event) {
    $(event.target).closest(".send_email").addClass("focused");

});
$(".email").on("blur", function (event) {
    $(event.target).closest(".send_email").removeClass("focused");

    if ($(this).val() != '') {
        $(event.target).closest(".send_email").addClass("focused");
    }
});
// focus input end
//=======================================================
