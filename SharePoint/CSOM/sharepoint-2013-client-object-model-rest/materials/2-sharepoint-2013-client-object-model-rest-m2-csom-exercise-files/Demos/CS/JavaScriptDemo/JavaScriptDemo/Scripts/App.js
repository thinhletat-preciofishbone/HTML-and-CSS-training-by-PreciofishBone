$(document).ready(function () {
    jQuery("#loadButton").click(loadAndInclude);
    jQuery("#nestedIncludesButton").click(nestedIncludes);
    jQuery("#camlQueriesButton").click(camlQueries);
    jQuery("#dataBindingButton").click(dataBinding);
    jQuery("#createListButton").click(createList);
    jQuery("#batchExceptionButton").click(batchExceptionHandling);
    jQuery("#createItemButton").click(createItem);
    jQuery("#updateItemButton").click(updateItem);
    jQuery("#proxyButton").click(webProxy);
    jQuery("#hostButton").click(callToHostWeb);
});

function loadAndInclude() {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var lists = web.get_lists();
    context.load(web, "Title", "Description");
    context.load(lists, "Include(Title)");
    context.executeQueryAsync(success, fail);

    function success() {
        var message = jQuery("#message");
        message.text(web.get_title());
        var lenum = lists.getEnumerator();
        while (lenum.moveNext()) {
            message.append("<br />");
            message.append(lenum.get_current().get_title());
        }
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function nestedIncludes() {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var lists = web.get_lists();
    context.load(web, "Title", "Description");
    context.load(lists, "Include(Title, Fields.Include(Title))");
    context.executeQueryAsync(success, fail);

    function success() {
        var message = jQuery("#message");
        message.text(web.get_title());
        var lenum = lists.getEnumerator();
        while (lenum.moveNext()) {
            var list = lenum.get_current();
            message.append("<br />");
            message.append(list.get_title());
            var fenum = list.get_fields().getEnumerator();
            var i = 0;
            while (fenum.moveNext()) {
                var field = fenum.get_current();
                message.append("<br />&nbsp;&nbsp;&nbsp;&nbsp;");
                message.append(field.get_title());
                if (i++ > 5) break;
            }
        }
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function camlQueries() {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var list = web.get_lists().getByTitle("Products");
    var query = new SP.CamlQuery();
    query.set_viewXml("<View>" +
                        "<Query>" +
                        "<Where><Eq>" +
                        "<FieldRef Name='Category' " +
                            "LookupId='True' />" +
                        "<Value Type='Lookup'>1</Value>" +
                        "</Eq></Where>" +
                        "</Query>" +
                        "</View>");
    var items = list.getItems(query);
    context.load(web, "Title");
    context.load(items, "Include(ID, Title)");
    context.executeQueryAsync(success, fail);

    function success() {
        var message = jQuery("#message");
        message.text(web.get_title());
        var ienum = items.getEnumerator();
        while (ienum.moveNext()) {
            message.append("<br />");
            message.append(ienum.get_current().get_item("Title"));
        }
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function dataBinding() {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var list = web.get_lists().getByTitle("Products");
    var query = new SP.CamlQuery();
    query.set_viewXml("<View>" +
                      "<Query>" +
                      "<Where><Eq>" +
                      "<FieldRef Name='Category' " +
                          "LookupId='True' />" +
                      "<Value Type='Lookup'>1</Value>" +
                      "</Eq></Where>" +
                      "</Query>" +
                      "<RowLimit>5</RowLimit>" +
                      "</View>");
    var items = list.getItems(query);
    context.load(web, "Title");
    var itemsArray = context.loadQuery(items,
        "Include(Title, UnitsInStock, UnitPrice)");
    context.executeQueryAsync(success, fail);

    function success() {
        var message = jQuery("#message");
        message.text(web.get_title());
        message.append("<br/>");
        var template = jQuery("#products-template");
        message.append(template.render(itemsArray));
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function createList() {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();

    try {
        var lci = new SP.ListCreationInformation();
        lci.set_title("Tasks");
        lci.set_templateType(SP.ListTemplateType.tasks);
        lci.set_quickLaunchOption(SP.QuickLaunchOptions.on);
        var list = web.get_lists().add(lci);

        context.executeQueryAsync(success, fail);
    } catch (ex) {
        alert(ex.message);
    }

    function success() {
        var message = jQuery("#message");
        message.text("List added");
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function batchExceptionHandling() {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var scope = null;

    try {
        var list = null;

        scope = new SP.ExceptionHandlingScope(context);
        var scopeStart = scope.startScope();

        var scopeTry = scope.startTry();
        list = web.get_lists().getByTitle("Tasks");
        context.load(list);
        scopeTry.dispose();

        var scopeCatch = scope.startCatch();
        var lci = new SP.ListCreationInformation();
        lci.set_title("Tasks");
        lci.set_quickLaunchOption(SP.QuickLaunchOptions.on);
        lci.set_templateType(SP.ListTemplateType.tasks);
        list = web.get_lists().add(lci);
        scopeCatch.dispose();

        var scopeFinally = scope.startFinally();
        list = web.get_lists().getByTitle("Tasks");
        context.load(list);
        scopeFinally.dispose();

        scopeStart.dispose();

        context.executeQueryAsync(success, fail);
    } catch (ex) {
        alert(ex.message);
    }

    function success() {
        var message = jQuery("#message");
        var status = scope.get_hasException() ? " created" : " loaded";
        message.text(list.get_title() + status);
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function createItem() {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();

    try {
        var list = web.get_lists().getByTitle("Tasks");

        var ici = new SP.ListItemCreationInformation();
        var item = list.addItem(ici);
        item.set_item("Title", "Sample Task");
        item.set_item("AssignedTo", web.get_currentUser());
        var due = new Date();
        due.setDate(due.getDate() + 7);
        item.set_item("DueDate", due);
        item.update();

        context.executeQueryAsync(success, fail);
    } catch (ex) {
        alert(ex.message);
    }

    function success() {
        var message = jQuery("#message");
        message.text("Item added");
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function updateItem() {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var items = null;

    try {
        var list = web.get_lists().getByTitle("Tasks");
        var query = new SP.CamlQuery();
        query.set_viewXml("<View><RowLimit>1</RowLimit></View>");
        var qitems = list.getItems(query);
        items = context.loadQuery(qitems);
        context.executeQueryAsync(success1, fail);
    } catch (ex) {
        alert(ex.message);
    }

    function success1() {
        if (items.length > 0) {
            var item = items[0];
            item.set_item("Status", "In Progress");
            item.set_item("PercentComplete", 0.10);
            item.update();
        }

        context.executeQueryAsync(success2, fail);
    }

    function success2() {
        var message = jQuery("#message");
        message.text("Item updated");
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function webProxy() {
    var context = SP.ClientContext.get_current();
    var request = new SP.WebRequestInfo();
    request.set_url("http://services.odata.org/Northwind/Northwind.svc/Categories?$format=json");
    request.set_method("GET");
    var response = SP.WebProxy.invoke(context, request);

    context.executeQueryAsync(success, fail);

    function success() {
        if (response.get_statusCode() == 200) {
            var categories = JSON.parse(response.get_body());

            var message = jQuery("#message");
            message.text("Categories in the remote Northwind service:");
            message.append("<br/>");
            jQuery.each(categories.d.results, function (index, value) {
                message.append(value.CategoryName);
                message.append("<br/>");
            });

        } else {
            var errorMessage = response.get_body();
            alert(errorMessage);
        }
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function callToHostWeb() {
    var hostUrl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));

    var context = SP.ClientContext.get_current();
    var hostContext = new SP.AppContextSite(context, hostUrl);
    var web = hostContext.get_web();

    var list = web.get_lists().getByTitle("Categories");
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View />");
    var qitems = list.getItems(camlQuery);

    var items = context.loadQuery(qitems, "Include(Title)");
    context.executeQueryAsync(success, fail);

    function success() {
        var message = jQuery("#message");
        message.text("Categories in the host web list:");
        message.append("<br/>");
        jQuery.each(items, function (index, value) {
            message.append(value.get_item("Title"));
            message.append("<br/>");
        });
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }

    function getQueryStringParameter(paramToRetrieve) {
        var params =
            document.URL.split("?")[1].split("&");
        var strParams = "";
        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split("=");
            if (singleParam[0] == paramToRetrieve)
                return singleParam[1];
        }
    }
}


