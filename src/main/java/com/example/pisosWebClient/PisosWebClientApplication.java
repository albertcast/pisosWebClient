package com.example.pisosWebClient;

import java.util.Collections;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class PisosWebClientApplication  {

	@GetMapping("/user")
    public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
		if(principal!= null)
			return Collections.singletonMap("name", principal.getAttribute("name"));
		return null;
    }
	
	
	
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
		.authorizeRequests(a -> a
			.antMatchers("/login.html", "/error", "/webjars/**").permitAll()
			.anyRequest().authenticated()
		)
		.exceptionHandling(e -> e
			.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
		)
		.csrf().disable().cors().and()
		.logout(l -> l
			.logoutSuccessUrl("/login.html")
		)
		.oauth2Login();
        return http.build();
    }
	
	public static void main(String[] args) {
		SpringApplication.run(PisosWebClientApplication.class, args);
	}
}
