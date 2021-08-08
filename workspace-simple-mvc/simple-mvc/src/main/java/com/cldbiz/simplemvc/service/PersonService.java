package com.cldbiz.simplemvc.service;

import org.springframework.stereotype.Service;

import com.cldbiz.simplemvc.domain.Person;

@Service
public class PersonService {

	public Person getPerson(String firstName, String lastName) {
		return new Person(firstName, lastName);
	}
}
