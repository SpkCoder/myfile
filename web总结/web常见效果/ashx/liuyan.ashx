<%@ WebHandler Language="C#" Class="liuyan" %>

using System;
using System.Web;

public class liuyan : IHttpHandler, System.Web.SessionState.IRequiresSessionState
{
    Great.Model.T_Messages model = new Great.Model.T_Messages();
    Great.BLL.T_Messages bll = new Great.BLL.T_Messages();
    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        string name = context.Request["name"];
        string phone = context.Request["phone"];
        string email = context.Request["email"];
        string content = context.Request["content"];
        string code = context.Request["code"];
        string sessionCode = HttpContext.Current.Session["gif"].ToString();//生成验证

        if (code == "0")
        {
            sessionCode = "0";
        }
        

        if (code != sessionCode)
        {
            context.Response.Write(2);//验证码错误
        }
        else
        {

            model.T_UserName = name;
            model.T_Tel = phone;
            model.T_Email = email;
            model.T_Content = content;
            model.T_Title = name + "的留言";

            int num = bll.Add(model);

            if (num > 0)
            {
                context.Response.Write(1);
            }
            else
            {
                context.Response.Write(0);
            }
        }

    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}