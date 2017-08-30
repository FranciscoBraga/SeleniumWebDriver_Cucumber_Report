package stepsDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class TesteLogin {
	
	static WebDriver driver;
	
	@Dado("^que usuário possa acessar a tela de login do sistema$")
	public void que_usuário_possa_acessar_a_tela_de_login_do_sistema() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:/programas/selenium/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://aventuragames.com.br/area_usuario/login/logar");
	  
	}

	@Quando("^informar um \"([^\"]*)\" válido$")
	public void informar_um_válido(String email) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(email);
	}

	@Quando("^inserir uma \"([^\"]*)\" válida$")
	public void inserir_uma_válida(String senha) throws Throwable {
		driver.findElement(By.id("senha")).sendKeys(senha);
	}

	@Então("^o sistema deve permitir a autenticação do usuário$")
	public void o_sistema_deve_permitir_a_autenticação_do_usuário() throws Throwable {
	   driver.findElement(By.id("botao")).click();
	}
}
