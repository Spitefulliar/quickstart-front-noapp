$(document).ready(function(){
  let form = $('#register-form');
  if (form.length) {
    let regBtn = form.find('button[type="submit"]');
    let usernameField = form.find("#username input");
    let fullnameField = form.find("#fullname input");

    // function textFieldValue(textField) {
    //     function value() { return textField.val() }
    //     return textField.asEventStream("keyup").map(value).toProperty(value())
    // }

    let username = Bacon.UI.textFieldValue(usernameField);
    let fullname = Bacon.UI.textFieldValue(fullnameField);

    function and(a,b) { return a && b }
    function nonEmpty(x) { return x.length > 0 }
    function setEnabled(el, x) { return el.attr("disabled", x); }

    let usernameEntered = username.map(nonEmpty)
    let fullnameEntered = fullname.map(nonEmpty)

    let buttonEnabled = usernameEntered.combine(fullnameEntered, and);

    // buttonEnabled.not().onValue(regBtn, "attr", "disabled");
    buttonEnabled.not().assign(setEnabled, regBtn);
  }
});
