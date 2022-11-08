window._snapinsSnippetSettingsFile = (function () {

   /* var meta = JSON.parse(sessionStorage.getItem('LSSIndex:SESSION{"namespace":"c"}'));
    var contactFirstName = sessionStorage.getItem(meta.contactFirstName);
    var contactLastName = sessionStorage.getItem(meta.contactLastName);
    var contactEmail = sessionStorage.getItem(meta.contactEmail);*/

    var contactFirstName = sessionStorage.getItem("LSKey[c]contactFirstName");
    var contactLastName = sessionStorage.getItem("LSKey[c]contactLastName");
    var contactEmail = sessionStorage.getItem("LSKey[c]contactEmail");

    embedded_svc.menu.snippetSettingsFile = {
        Chat: {
            settings: {
                prepopulatedPrechatFields: {
                    "Email": contactEmail,
                    "FirstName": contactFirstName,
                    "LastName": contactLastName
                }
            }
        }
    };

})();