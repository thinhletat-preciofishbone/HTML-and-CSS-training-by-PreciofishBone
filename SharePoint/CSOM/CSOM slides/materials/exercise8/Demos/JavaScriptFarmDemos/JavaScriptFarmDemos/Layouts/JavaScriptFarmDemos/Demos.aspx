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

    <script type="text/javascript">
        jQuery(document).ready(function () {
            jQuery("#helloButton").click(helloWorld);
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

    </script>
</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div>
        <p id="message">
            <!-- The following content will be replaced with the user name when you run the app - see App.js -->
            initializing...
        </p>
        <input id="helloButton" type="button" value="Hello World" />
    </div>

</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
JavaScript Farm Solutions Demos
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
JavaScript Farm Solutions Demos
</asp:Content>

