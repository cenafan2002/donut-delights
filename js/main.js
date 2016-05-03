// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {

    // basic validation form
    $("#email_form").validate({
        rules: {
            "email_1": {
                required: true,
                email: true,
            },
            "email_2": {
                required: true,
                email: true,
                equalTo: "#email_confirm"
            },

            "full_name": {
                required: true

            },
            "address_1": {
                required: true
            },
            "address_2": {
                required: true
            },
            "city": {
                required: true
            },
            "phone": {
                required: true
            }
        },
        "messages": {
            "email_1": {
                required: "Enter some info, please!",
                email: "not valid"
            },

            "full_name": {
                required: "full name, please!",
                name: "Liar!"
            },


            }

