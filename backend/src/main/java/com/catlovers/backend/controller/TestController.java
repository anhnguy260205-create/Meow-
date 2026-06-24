package com.catlovers.backend.controller;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {

    @PersistenceContext
    private EntityManager entityManager;

    @GetMapping("/ping")
    public String ping() {
        return "pong from backend!";
    }

    @GetMapping("/db-check")
    public String dbCheck() {
        try {
            entityManager.createNativeQuery("SELECT 1").getSingleResult();
            return "Connected to Neon database!";
        } catch (Exception e) {
            return "Database connection failed: " + e.getMessage();
        }
    }
}
