jQuery(document).ready(function () {
    jQuery("#libraryButton").click(createLibrary);
    jQuery("#uploadButton").click(uploadDocument);
});

function createLibrary() {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();

    var lci = new SP.ListCreationInformation();
    lci.set_title("Project Documents");
    lci.set_templateType(SP.ListTemplateType.documentLibrary);
    var list = web.get_lists().add(lci);

    list.get_fields().addFieldAsXml("<Field Type=\"Number\" DisplayName=\"Year\" Name=\"Year\" Min=\"2000\" Max=\"2100\" Decimals=\"0\" />", true, SP.AddFieldOptions.defaultValue);
    list.get_fields().addFieldAsXml("<Field Type=\"User\" DisplayName=\"Coordinator\" Name=\"Coordinator\" List=\"UserInfo\" ShowField=\"ImnName\" UserSelectionMode=\"PeopleOnly\" UserSelectionScope=\"0\" />", true, SP.AddFieldOptions.defaultValue);

    context.executeQueryAsync(success, fail);

    function success() {
        var message = jQuery("#message");
        message.text("List added");
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function uploadDocument() {
    if (!window.FileReader) {
        alert("This browser does not support the HTML5 File APIs");
        return;
    }

    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var list = web.get_lists().getByTitle("Project Documents");

    var element = document.getElementById("uploadInput");
    var file = element.files[0];
    var parts = element.value.split("\\");
    var fileName = parts[parts.length - 1];

    var reader = new FileReader();
    reader.onload = function (e) {
        success1(e.target.result, fileName);
    }
    reader.onerror = function (e) {
        alert(e.target.error);
    }
    reader.readAsArrayBuffer(file);

    function success1(buffer, fileName) {
        var bytes = new Uint8Array(buffer);
        var content = new SP.Base64EncodedByteArray();
        for (var b = 0; b < bytes.length; b++) {
            content.append(bytes[b]);
        }

        var fci = new SP.FileCreationInformation();
        fci.set_content(content);
        fci.set_overwrite(true);
        fci.set_url(fileName);
        var file = list.get_rootFolder().get_files().add(fci);

        var item = file.get_listItemAllFields();
        item.set_item("Year", new Date().getFullYear());
        item.set_item("Coordinator", web.get_currentUser());
        item.update();

        context.executeQueryAsync(success2, fail);
    }

    function success2() {
        var message = jQuery("#message");
        message.text("Document uploaded");
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}
