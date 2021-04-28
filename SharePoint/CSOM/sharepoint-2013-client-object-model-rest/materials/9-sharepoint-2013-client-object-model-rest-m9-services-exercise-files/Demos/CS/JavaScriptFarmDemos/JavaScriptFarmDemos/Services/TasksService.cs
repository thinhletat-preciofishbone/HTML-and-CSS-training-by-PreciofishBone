using Microsoft.SharePoint;
using Microsoft.SharePoint.Utilities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Threading;

namespace JavaScriptFarmDemos.Services
{
    [DataContract]
    public class TaskInfo
    {
        [DataMember]
        public string Title { get; set; }
        [DataMember]
        public DateTime DueDate { get; set; }

        public TaskInfo(string title, DateTime dueDate)
        {
            this.Title = title;
            this.DueDate = dueDate;
        }
    }

    [ServiceContract]
    public interface ITasksService
    {
        [OperationContract]
        [WebInvoke(Method = "GET",
            UriTemplate = "/GetUpcomingTasks/{days}",
            BodyStyle = WebMessageBodyStyle.Bare,
            ResponseFormat = WebMessageFormat.Json)]
        TaskInfo[] GetUpcomingTasks(string days);
    }

    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class TasksService : ITasksService
    {
        public TaskInfo[] GetUpcomingTasks(string days)
        {
            var web = SPContext.Current.Web;

            var query = new SPSiteDataQuery { RowLimit = 20 };
            query.ViewFields =
                "<FieldRef Name='Title' />" +
                "<FieldRef Name='DueDate' />";
            query.Query =
                "<Where>" +
                "  <And>" +
                "    <Geq>" +
                "      <FieldRef Name='DueDate' />" +
                "      <Value Type='DateTime'><Today /></Value>" +
                "    </Geq>" +
                "    <Leq>" +
                "      <FieldRef Name='DueDate' />" +
                "      <Value Type='DateTime'><Today OffsetDays='" + days + "' /></Value>" +
                "    </Leq>" +
                "  </And>" +
                "</Where>" +
                "<OrderBy>" +
                "  <FieldRef Name='DueDate' />" +
                "</OrderBy>";
            query.Lists =
                "<Lists ServerTemplate='171' />";
            query.Webs =
                "<Webs Scope='SiteCollection' />";

            var tasks = web.GetSiteData(query);

            var results = new List<TaskInfo>();
            foreach (DataRow task in tasks.Rows)
            {
                var title = task["Title"].ToString();
                var dueDate = SPUtility.CreateDateTimeFromISO8601DateTimeString(
                    task["DueDate"].ToString());

                var item = new TaskInfo(title, dueDate);
                results.Add(item);
            }

            Thread.Sleep(3000);
            return results.ToArray();
        }
    }

}



