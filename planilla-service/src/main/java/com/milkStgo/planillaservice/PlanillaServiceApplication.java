package com.milkStgo.planillaservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PlanillaServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlanillaServiceApplication.class, args);
	}

}
