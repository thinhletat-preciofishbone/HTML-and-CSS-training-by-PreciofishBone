<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Demos.aspx.cs" Inherits="JavaScriptFarmDemos.Layouts.JavaScriptFarmDemos.Demos" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink ID="ScriptLink1" Name="sp.js" Localizable="false" LoadAfterUI="true" runat="server" />
    <SharePoint:ScriptLink ID="ScriptLink2" Name="Scripts/jquery-1.8.3.min.js" Localizable="false" LoadAfterUI="false" runat="server" />
    <SharePoint:ScriptLink ID="ScriptLink3" Name="Scripts/jsrender.js" Localizable="false" LoadAfterUI="false" runat="server" />
    <SharePoint:ScriptLink ID="ScriptLink4" Name="Scripts/moment.min.js" Localizable="false" LoadAfterUI="false" runat="server" />
    <SharePoint:ScriptLink ID="ScriptLink5" Name="Scripts/jquery.SPServices-0.7.2.min.js" Localizable="false" LoadAfterUI="false" runat="server" />

    <script id="tasks-template" type="text/x-jsrender">
        {{for #data}}
            Task {{>Title}} is due {{>DueDate}}
            <br/>
        {{/for}}
    </script>

    <script type="text/javascript">
        jQuery(document).ready(function () {
            jQuery("#helloButton").click(helloWorld);
            jQuery("#tasksButton").click(getTasks);
            jQuery("#profileButton").click(getProfileProperties);
            jQuery("#listDataButton").click(listData);
        });

        function helloWorld() {
            var context = SP.ClientContext.get_current();
            var web = context.get_web();
            context.load(web, "Title");
            context.executeQueryAsync(success, fail);

            function success() {
                var message = jQuery("#message");
                message.text("This site is named " + web.get_title());
            }

            function fail(sender, args) {
                alert("Call failed. Error: " +
					args.get_message());
            }
        }

        function getTasks() {
            var days = "5";

            var messageId = SP.UI.Notify.addNotification("Retrieving tasks", true);

            var call = jQuery.ajax({
                url: _spPageContextInfo.webAbsoluteUrl +
                    "/_vti_bin/JavaScriptFarmDemos/TasksService.svc/GetUpcomingTasks/" + days,
                type: "GET",
                cache: false,
                dataType: "json"
            });
            call.done(function (data, textStatus, jqXHR) {
                SP.UI.Notify.removeNotification(messageId);

                var message = jQuery("#message");
                if (data.length == 0) {
                    message.text("There are no tasks due in the next " + days + " days");
                } else {
                    jQuery.each(data, function (index, value) {
                        var mdate = new moment(value.DueDate);
                        value.DueDate = mdate.format("MMMM D");
                    });
                    var template = jQuery("#tasks-template");
                    message.html(template.render(data));
                }
            });
            call.fail(function (jqXHR, textStatus, errorThrown) {
                SP.UI.Notify.removeNotification(messageId);

                var response = JSON.parse(jqXHR.responseText);
                var message = response ? response.error.message.value : textStatus;
                alert("Call failed. Error: " + message);
            });
        }
        function getProfileProperties() {
            var props = {};

            jQuery().SPServices({
                operation: "GetUserProfileByName",
                accountName: jQuery().SPServices.SPGetCurrentUser({
                    fieldName: "Name"
                }),
                async: false,
                completefunc: function (xData, Status) {
                    jQuery(xData.responseXML).SPFilterNode("PropertyData").each(function () {
                        var item = jQuery(this);
                        var name = item.find("Name").text();
                        var value = item.find("Value").text()
                        props[name] = value;
                    });
                }
            });

            var message = jQuery("#message");
            message.text("User profile properties for " + props.PreferredName);
            message.append("<br/>");
            for (var key in props) {
                var value = props[key];
                if (value.length > 0) {
                    message.append(key + ": " + value);
                    message.append("<br/>");
                }
            }
        }

        function listData() {
            var category = "Beverages";
            var call = jQuery.ajax({
                url: _spPageContextInfo.webAbsoluteUrl +
                    "/_vti_bin/ListData.svc/Products()?$select=Title&$filter=UnitsInStock gt 0 and Category/Title eq '" + category + "'",
                type: "GET",
                cache: false,
                dataType: "json"
            });
            call.done(function (data, textStatus, jqXHR) {
                var message = jQuery("#message");
                message.text(category);
                message.append("<br/>");
                jQuery.each(data.d.results, function (index, value) {
                    message.append(value.Title);
                    message.append("<br/>");
                });
            });
            call.fail(function (jqXHR, textStatus, errorThrown) {
                var response = JSON.parse(jqXHR.responseText);
                var message = response ? response.error.message.value : textStatus;
                alert("Call failed. Error: " + message);
            });
        }


    </script>
</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div>
        <p id="message">
            <!-- The following content will be replaced with the user name when you run the app - see App.js -->
            initializing...
        </p>
        <input id="helloButton" type="button" value="Hello World" />
        <br />
        <input id="tasksButton" type="button" value="Get Tasks" />
        <br />
        <input id="profileButton" type="button" value="User Profile" />
        <br />
        <input id="listDataButton" type="button" value="ListData.svc" />
    </div>

</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
JavaScript Farm Solutions Demos
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
JavaScript Farm Solutions Demos
</asp:Content>

