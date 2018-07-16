package com.tatva.service;

import java.util.List;

import com.tatva.bean.User;

public interface IUserService {

	public void insertUser(User user);

	public void updateUser(User user);

	public void deleteUser(int id);

	public List<User> listUsers();
}

