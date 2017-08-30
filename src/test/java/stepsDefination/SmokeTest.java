package stepsDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {
	
	WebDriver driver;
	

	@Given("^Open chrome  and start application$")
	public void open_chrome_and_start_application() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver", "D:/programas/selenium/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://www.facebook.com");
		
	}
	
	@When("^I enter valid username and valid password$")
	public void i_enter_valid_username_and_valid_password() throws Throwable {
		
		driver.findElement(By.id("email")).sendKeys("icoxico@gmail.com");
		driver.findElement(By.id("pass")).sendKeys("icoxico147");
	    
	}
	
	@Then("^user should be  able to  login  sucessfully$")
	public void user_should_be_able_to_login_sucessfully() throws Throwable {
		
		driver.findElement(By.id("loginbutton")).click();
	    
	}
}
