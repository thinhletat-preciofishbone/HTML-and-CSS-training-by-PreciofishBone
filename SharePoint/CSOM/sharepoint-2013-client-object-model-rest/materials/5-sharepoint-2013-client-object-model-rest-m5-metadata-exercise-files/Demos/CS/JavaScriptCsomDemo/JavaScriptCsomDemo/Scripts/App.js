jQuery(document).ready(function () {
    jQuery("#termsButton").click(createTerms);
    jQuery("#libraryButton").click(createLibrary);
    jQuery("#uploadButton").click(uploadDocument);
});

function createTerms() {
    var lcid = _spPageContextInfo.currentLanguage;

    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
    var store = session.get_termStores().getByName("Managed Metadata Service");
    var group = store.createGroup("JavaScript", "03F5F03F-CD25-466E-8C2A-E2C22C42ED75");
    var set = group.createTermSet("Projects", "6E5B7101-24A2-49A6-A031-648F389D8819", lcid);
    set.createTerm("Penske", lcid, "E1B08A5A-D815-4F74-91A5-53D730EE93A1");
    set.createTerm("Manhattan", lcid, "A32D4ECD-82C1-46AA-B32D-BCBF688AE29A");
    set.createTerm("Alan Parsons", lcid, "89B38D86-09CC-4A60-980F-24F35FE900ED");
    context.executeQueryAsync(success, fail);

    function success() {
        var message = jQuery("#message");
        message.text("Terms added");
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function createLibrary() {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();

    var lci = new SP.ListCreationInformation();
    lci.set_title("Project Documents");
    lci.set_templateType(SP.ListTemplateType.documentLibrary);
    var list = web.get_lists().add(lci);

    list.get_fields().addFieldAsXml("<Field Type=\"Number\" DisplayName=\"Year\" Name=\"Year\" Min=\"2000\" Max=\"2100\" Decimals=\"0\" />", true, SP.AddFieldOptions.defaultValue);
    list.get_fields().addFieldAsXml("<Field Type=\"User\" DisplayName=\"Coordinator\" Name=\"Coordinator\" List=\"UserInfo\" ShowField=\"ImnName\" UserSelectionMode=\"PeopleOnly\" UserSelectionScope=\"0\" />", true, SP.AddFieldOptions.defaultValue);

    var taxField = list.get_fields().addFieldAsXml("<Field Type=\"TaxonomyFieldType\" DisplayName=\"Project\" Name=\"Project\" ShowField=\"Term1033\" Version=\"1\" />", true, SP.AddFieldOptions.defaultValue);
    var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
    var store = session.get_termStores().getByName("Managed Metadata Service");
    var group = store.get_groups().getByName("JavaScript");
    var set = group.get_termSets().getByName("Projects");

    context.load(taxField);
    context.load(store, "Id");
    context.load(set, "Id");
    context.executeQueryAsync(success1, fail);

    function success1() {
        var taxField2 = context.castTo(taxField, SP.Taxonomy.TaxonomyField);
        taxField2.set_sspId(store.get_id());
        taxField2.set_termSetId(set.get_id());
        taxField2.update();
        context.executeQueryAsync(success2, fail);
    }

    function success2() {
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

    var lcid = _spPageContextInfo.currentLanguage;
    var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
    var store = session.get_termStores().getByName("Managed Metadata Service");
    var group = store.get_groups().getByName("JavaScript");
    var set = group.get_termSets().getByName("Projects");
    var term = set.get_terms().getByName("Alan Parsons");

    context.load(term);
    context.executeQueryAsync(success1, fail);

    function success1() {
        var element = document.getElementById("uploadInput");
        var file = element.files[0];
        var parts = element.value.split("\\");
        var fileName = parts[parts.length - 1];

        var reader = new FileReader();
        reader.onload = function (e) {
            success2(e.target.result, fileName);
        }
        reader.onerror = function (e) {
            alert(e.target.error);
        }
        reader.readAsArrayBuffer(file);
    }

    function success2(buffer, fileName) {
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
        var now = new Date();
        item.set_item("Year", now.getFullYear());
        item.set_item("Coordinator", web.get_currentUser());
        var field = list.get_fields().getByInternalNameOrTitle("Project");
        var taxField = context.castTo(field, SP.Taxonomy.TaxonomyField);
        taxField.setFieldValueByTerm(item, term, lcid);
        item.update();

        context.executeQueryAsync(success3, fail);
    }

    function success3() {
        var message = jQuery("#message");
        message.text("Document uploaded");
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}
