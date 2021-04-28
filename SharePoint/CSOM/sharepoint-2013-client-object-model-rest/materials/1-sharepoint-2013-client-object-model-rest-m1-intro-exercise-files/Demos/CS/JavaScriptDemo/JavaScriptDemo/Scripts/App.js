$(document).ready(function () {
    jQuery("#loadButton").click(usingLoad);
    jQuery("#loadQueryButton").click(usingLoadQuery);
    jQuery("#restButton").click(restApi);
});

function usingLoad() {
    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var lists = web.get_lists();
    context.load(web);
    context.load(lists);
    context.executeQueryAsync(success, fail);

    function success() {
        var message = jQuery("#message");
        message.text(web.get_title());
        message.append("<br/>");
        message.append(lists.get_count());
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function usingLoadQuery() {
    var context = SP.ClientContext.get_current();
    var lists = context.get_web().get_lists();
    var myLists = context.loadQuery(lists);
    context.executeQueryAsync(success, fail);

    function success() {
        var message = jQuery("#message");
        message.text(myLists.length);
    }

    function fail(sender, args) {
        alert("Call failed. Error: " +
            args.get_message());
    }
}

function restApi() {
    var call = jQuery.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/",
        type: "GET",
        dataType: "json",
        headers: {
            Accept: "application/json;odata=verbose"
        }
    });
    call.done(function (data, textStatus, jqXHR) {
        var message = jQuery("#message");
        message.text(data.d.Title);
    });
    call.fail(function (jqXHR, textStatus, errorThrown) {
        var response = JSON.parse(jqXHR.responseText);
        var message = response ? response.error.message.value : textStatus;
        alert("Call failed. Error: " + message);
    });
}
