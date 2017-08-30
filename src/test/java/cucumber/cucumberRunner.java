package cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(features= "features",
	glue={"login.errado"},
	plugin={"html:target/cucumber-html-report"}) //gera relátorio com html
public class cucumberRunner {

}
