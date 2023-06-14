package com.milkStgo.datosservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class DatosServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DatosServiceApplication.class, args);
	}

}
