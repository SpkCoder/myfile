<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="JSDemo.Login" ResponseEncoding="gb2312"%>
<%
 string strName = System.Web.HttpUtility.UrlDecode(Request["txtName"]);
 string strPass = System.Web.HttpUtility.UrlDecode(Request["txtPass"]);
 bool login = false;
 if (strName == "admin" && strPass == "admin")
 {
  login = true;
 }
 Response.Write(login);
%>