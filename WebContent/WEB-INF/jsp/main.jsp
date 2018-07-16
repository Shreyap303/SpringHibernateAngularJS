<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
  <head>  
  <title>AngularJS Example</title>  
  <link href="css/bootstrap.min.css" type="text/css" rel="stylesheet"></link>
  <style type="text/css">
  .errorUname , .errorEmail, .error{color:red;}
  </style>
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/angular.min.js"></script>
  <script type="text/javascript" src="js/app.js"></script>
  <!-- <script type="text/javascript" src="js/general.js"></script> -->
  </head>
  
  <body data-ng-app="myApp">
  
      <div class="container" data-ng-controller="UserController">
      
             <h2 align="center">User Registration Form</h2> 
              
                  <form data-ng-submit="submit()" class="form-horizontal" name="form">
                  
                      <input type="hidden" data-ng-model="myForm.id" />
                      
                          <div class="form-group">
                              <label class="col-md-3">User Name</label>
                              <div class="col-md-9">
                                  <input type="text" data-ng-model="myForm.name" name="uname" class="uname form-control" placeholder="Enter your name" required="required" data-ng-minlength="3"/>
                                  <div class="errorUname"></div>
                                  <div class="error" data-ng-show="form.$dirty">
                                      <span data-ng-show="form.uname.$error.required">This is a required field</span>
                                      <span data-ng-show="form.uname.$error.minlength">Minimum length required is 3</span>
                                      <span data-ng-show="form.uname.$invalid">This field is invalid </span>
                                  </div>
                              </div>
                          </div>

                          <div class="form-group">
                              <label class="col-md-3">Email</label>
                              <div class="col-md-9">
                                  <input type="email" data-ng-model="myForm.email" name="email" class="email form-control" placeholder="Enter your Email" required="required"/>
                                  <div class="errorEmail"></div>
                                  <div class="error" data-ng-show="form.$dirty">
                                      <span data-ng-show="form.email.$error.required">This is a required field</span>
                                      <span data-ng-show="form.email.$invalid">This field is invalid </span>
                                  </div>
                              </div>
                          </div>

                          <div class="col-md-offset-3">
                              <input type="submit" value="{{!myForm.id ? 'Add' : 'Update'}}" class="submit btn btn-primary" data-ng-disabled="form.$invalid">
                          </div>
                  </form>
                  
                  <hr>
            
 				<h1 align="center">List Of Users</h1>
                  <table class="table table-bordered table-stripped">
                      <thead>
                          <tr>
                              <th>User Name</th>
                              <th>Email</th>
                              <th>Edit</th>
                              <th>Remove</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr data-ng-repeat="u in users">
                              <td>{{u.name}}</td>
                              <td>{{u.email}}</td>
                              <td>
                              <button type="button" data-ng-click="edit(u)" class="btn btn-success">Edit</button></td>
                              <td>  
                              <button type="button" data-ng-click="remove(u.id)" class="btn btn-danger">Remove</button>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
  </body>
</html>