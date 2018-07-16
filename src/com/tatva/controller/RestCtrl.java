package com.tatva.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.tatva.bean.User;
import com.tatva.service.IUserService;

@Controller
public class RestCtrl {
	
	@Autowired
	private IUserService service;
	
	@RequestMapping(value="/main")
	public ModelAndView loginform() {
		return new ModelAndView("main");
	}

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public ResponseEntity<List<User>> listUsers() {
		List<User> users = service.listUsers();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}

	@RequestMapping(value = "/deleteuser/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<User> deleteUser(@PathVariable("id") int id) {
		service.deleteUser(id);
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/adduser", method = RequestMethod.POST)
	public ResponseEntity<Void> createUser(@RequestBody User user) {
		service.insertUser(user);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "/edituser/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		service.updateUser(user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

}
