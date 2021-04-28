jQuery(document).ready(function () {
    jQuery("#libraryButton").click(createLibrary);
    jQuery("#uploadButton").click(uploadDocument);
    jQuery("#permissionsButton").click(checkPermissions);
    jQuery("#profileButton").click(getProfileProperties);
    jQuery("#searchButton").click(search);
});

function createLibrary() {
    var headers = {
        Accept: "application/json;odata=verbose",
        "Content-Type": "application/json;odata=verbose",
        "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
    };

    var call = createList();
    call.done(function (data, textStatus, jqXHR) {
        var call2 = createYearField();
        call2.done(function (data, textStatus, jqXHR) {
            var call3 = createUserField();
            call3.done(function (data, textStatus, jqXHR) {
                var message = jQuery("#message");
                message.text("List added");
            });
            call3.fail(failHandler);
        });
        call2.fail(failHandler);
    });
    call.fail(failHandler);

    function createList() {
        var call = jQuery.ajax({
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists",
            type: "POST",
            data: JSON.stringify({
                "__metadata": { type: "SP.List" },
                BaseTemplate: SP.ListTemplateType.documentLibrary,
                Title: "Project Documents"
            }),
            headers: headers
        });

        return call;
    }

    function createYearField() {
        var call = jQuery.ajax({
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getByTitle('Project Documents')/Fields",
            type: "POST",
            data: JSON.stringify({
                "__metadata": { type: "SP.FieldNumber" },
                FieldTypeKind: SP.FieldType.integer,
                Title: "Year",
                InternalName: "Year",
                MinimumValue: 2000,
                MaximumValue: 2100
            }),
            headers: headers
        });

        return call;
    }

    function createUserField() {
        var call = jQuery.ajax({
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getByTitle('Project Documents')/Fields",
            type: "POST",
            data: JSON.stringify({
                "__metadata": { type: "SP.FieldUser" },
                FieldTypeKind: SP.FieldType.user,
                Title: "Coordinator",
                InternalName: "Coordinator",
                SelectionMode: SP.FieldUserSelectionMode.peopleOnly
            }),
            headers: headers
        });

        return call;
    }
}

function uploadDocument() {
    if (!window.FileReader) {
        alert("This browser does not support the HTML5 File APIs");
        return;
    }

    var call = getDocument();
    call.done(function (buffer, fileName) {
        var call2 = uploadDocument(buffer, fileName);
        call2.done(function (data, textStatus, jqXHR) {
            var call3 = getItem(data.d);
            call3.done(function (data, textStatus, jqXHR) {
                var item = data.d;
                var call4 = getCurrentUser();
                call4.done(function (data, textStatus, jqXHR) {
                    var userId = data.d.CurrentUser.Id;
                    var call5 = updateItemFields(item, userId);
                    call5.done(function (data, textStatus, jqXHR) {
                        var div = jQuery("#message");
                        div.text("Item added");
                    });
                    call5.fail(failHandler);
                });
                call4.fail(failHandler);
            });
            call3.fail(failHandler);
        });
        call2.fail(failHandler);
    });
    call.fail(function (errorMessage) {
        alert(errorMessage);
    });
    function getDocument() {
        var def = new jQuery.Deferred();

        var element = document.getElementById("uploadInput");
        var file = element.files[0];
        var parts = element.value.split("\\");
        var fileName = parts[parts.length - 1];

        var reader = new FileReader();
        reader.onload = function (e) {
            def.resolve(e.target.result, fileName);
        }
        reader.onerror = function (e) {
            def.reject(e.target.error);
        }
        reader.readAsArrayBuffer(file);

        return def.promise();
    }

    function uploadDocument(buffer, fileName) {
        var url = String.format("{0}/_api/Web/Lists/getByTitle('Project Documents')/RootFolder/Files/Add(url='{1}', overwrite=true)",
            _spPageContextInfo.webAbsoluteUrl, fileName);

        var call = jQuery.ajax({
            url: url,
            type: "POST",
            data: buffer,
            processData: false,
            headers: {
                Accept: "application/json;odata=verbose",
                "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
                "Content-Length": buffer.byteLength
            }
        });

        return call;
    }

    function getItem(file) {
        var call = jQuery.ajax({
            url: file.ListItemAllFields.__deferred.uri,
            type: "GET",
            dataType: "json",
            headers: {
                Accept: "application/json;odata=verbose"
            }
        });

        return call;
    }

    function getCurrentUser() {
        var call = jQuery.ajax({
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/?$select=CurrentUser/Id&$expand=CurrentUser/Id",
            type: "GET",
            dataType: "json",
            headers: {
                Accept: "application/json;odata=verbose"
            }
        });

        return call;
    }

    function updateItemFields(item, userId) {
        var now = new Date();
        var call = jQuery.ajax({
            url: _spPageContextInfo.webAbsoluteUrl +
                "/_api/Web/Lists/getByTitle('Project Documents')/Items(" +
                item.Id + ")",
            type: "POST",
            data: JSON.stringify({
                "__metadata": { type: "SP.Data.Project_x0020_DocumentsItem" },
                CoordinatorId: userId,
                Year: now.getFullYear()
            }),
            headers: {
                Accept: "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
                "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
                "IF-MATCH": item.__metadata.etag,
                "X-Http-Method": "MERGE"
            }
        });

        return call;
    }

}

function checkPermissions() {
    var call1 = jQuery.ajax({
        url: _spPageContextInfo.webAbsoluteUrl +
            "/_api/Web/effectiveBasePermissions",
        type: "GET",
        dataType: "json",
        headers: {
            Accept: "application/json;odata=verbose"
        }
    });

    var call2 = jQuery.ajax({
        url: _spPageContextInfo.webAbsoluteUrl +
            "/_api/Web/Lists/getByTitle('Project Documents')/effectiveBasePermissions",
        type: "GET",
        dataType: "json",
        headers: {
            Accept: "application/json;odata=verbose"
        }
    });

call.done(function (data, textStatus, jqXHR) {
    var manageListsPerms = new SP.BasePermissions();
    manageListsPerms.initPropertiesFromJson(
        data.d.EffectiveBasePermissions);
});

    var calls = jQuery.when(call1, call2);
    calls.done(function (callback1, callback2) {
        var manageListsPerms = new SP.BasePermissions();
        manageListsPerms.initPropertiesFromJson(callback1[0].d.EffectiveBasePermissions);
        var addItemsPerms = new SP.BasePermissions();
        addItemsPerms.initPropertiesFromJson(callback2[0].d.EffectiveBasePermissions);

        var manageLists = manageListsPerms.has(SP.PermissionKind.manageLists);
        var addListItems = addItemsPerms.has(SP.PermissionKind.addListItems);

        var message = jQuery("#message");
        message.text("Manage Lists: " + manageLists);
        message.append("<br/>");
        message.append("Add items to Project Documents: " + addListItems);
    });
    calls.fail(failHandler);
}

function getProfileProperties() {
    var call = jQuery.ajax({
        url: _spPageContextInfo.webAbsoluteUrl +
            "/_api/SP.UserProfiles.PeopleManager/GetMyProperties" +
            "?$select=DisplayName,UserProfileProperties",
        type: "GET",
        dataType: "json",
        headers: {
            Accept: "application/json;odata=verbose"
        }
    });
    call.done(function (data, textStatus, jqXHR) {
        var profile = data.d;
        var message = jQuery("#message");
        message.text("User profile properties for " + profile.DisplayName);
        message.append("<br/>");
        var props = profile.UserProfileProperties.results;
        jQuery.each(props, function () {
            if (this.Value.length > 0) {
                message.append(this.Key + ": " + this.Value);
                message.append("<br/>");
            }
        });
    });
    call.fail(failHandler);
}

function search() {
    var queryText = "boxes";

    var call = jQuery.ajax({
        url: _spPageContextInfo.webAbsoluteUrl +
            "/_api/search/query?querytext='" + queryText + "'",
        type: "GET",
        dataType: "json",
        headers: {
            Accept: "application/json;odata=verbose"
        }
    });
    call.done(function (data, textStatus, jqXHR) {
        var message = jQuery("#message");
        message.text("Search results for \"" + queryText + "\"");
        message.append("<br/>");
        var rows = data.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
        jQuery.each(rows, function (index, value) {
            var title = jQuery.grep(value.Cells.results, function (item, index) {
                return item.Key == "Title";
            });
            var path = jQuery.grep(value.Cells.results, function (item, index) {
                return item.Key == "Path";
            });
            message.append(title[0].Value + ": " + path[0].Value);
            message.append("<br/>");
        });
    });
    call.fail(failHandler);
}

function failHandler(jqXHR, textStatus, errorThrown) {
    var response = JSON.parse(jqXHR.responseText);
    var message = response ? response.error.message.value : textStatus;
    alert("Call failed. Error: " + message);
}