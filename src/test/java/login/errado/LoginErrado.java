package login.errado;

import javax.xml.xpath.XPath;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class LoginErrado {
	
	 WebDriver driver;
	
	@Dado("^para o usúario possa saber se digitou senha ou login errado$")
	public void para_o_usúario_possa_saber_se_digitou_senha_ou_login_errado() throws Throwable {
	 System.setProperty("webdriver.chrome.driver", "D:/programas/selenium/chromedriver.exe");
	 driver = new ChromeDriver();
	 driver.get("http://aventuragames.com.br/area_usuario/login/logar");
	 
	}

	@Quando("^informar um \"([^\"]*)\" inválido$")
	public void informar_um_inválido(String email) throws Throwable {
	 driver.findElement(By.id("email")).sendKeys(email);
	}

	@Quando("^inserir uma \"([^\"]*)\" inválida$")
	public void inserir_uma_inválida(String senha) throws Throwable {
	 driver.findElement(By.id("senha")).sendKeys(senha);
	}

	@Então("^o sistema deve mostrar mensagem de erro$")
	public void o_sistema_deve_mostrar_mensagem_de_erro() throws Throwable {
		driver.findElement(By.id("botao")).click();
	 
		
	
	   
	}



}
