package com.tatva.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.tatva.bean.User;

@Repository
public class UserDaoImpli implements IUserDao {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public void insertUser(User user) {
		Session session = this.sessionFactory.getCurrentSession();
		try {
			session.save(user);
		} catch (Exception e) {
		}
	}

	@Override
	public void updateUser(User user) {
		Session session = this.sessionFactory.getCurrentSession();
		try {
			session.update(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void deleteUser(int id) {
		Session session = this.sessionFactory.getCurrentSession();
		User user = (User) session.get(User.class, id);
		if (null != user) {
			session.delete(user);
		}
	}

	@Override
	public List<User> listUsers() {
		Session session = this.sessionFactory.getCurrentSession();
		@SuppressWarnings("unchecked")
		List<User> listUsers = session.createQuery("from User").list();
		return listUsers;
	}

}
