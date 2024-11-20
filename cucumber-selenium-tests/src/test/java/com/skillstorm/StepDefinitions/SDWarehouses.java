package com.skillstorm.StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import com.skillstorm.WebDriverSingleton;
import com.skillstorm.PageObjects.WarehousesPage;
import com.skillstorm.Utilities.Navigator;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SDWarehouses {
    private WebDriver driver;
    private WarehousesPage warehousesPage;
    private Navigator navigator;
    private Actions actions;

    @Before()
    public void setUp() {
        driver = WebDriverSingleton.getDriver();
        navigator = new Navigator(driver);
        warehousesPage = new WarehousesPage(driver);
        actions = new Actions(driver);
    }

    @After()
    public void tearDown() {
        WebDriverSingleton.quitDriver();
    }

    @Given("I am on the Warehouses page")
    public void givenIAmOnTheWarehousesPage() {
        warehousesPage = new WarehousesPage(driver);
        navigator.navigateTo(Navigator.PGNAME_WAREHOUSES);
    }

    @And("I am on the Warehouses Sort dropdown")
    public void andITabToTheSortDropdown(){
        this.warehousesPage.tabTo(actions, driver.findElement(By.id("sort-warehouses")));
    }

    @When("I click on the add warehouse button")
    public void whenIClickOnTheAddWarehouseButton(){
        warehousesPage.clickButton(WarehousesPage.BTN_ADDWAREHOUSE_NAME);
    }

    @When("I select the Sort by dropdown option with text {string}")
    public void whenISelectTheSortByDropdownOption(String selectOption) {
        this.warehousesPage.selectSortBy(selectOption);
    }

    @When("I tab to the Warehouses Sort dropdown")
    public void whenITabToTheSortDropdown(){
        this.warehousesPage.tabTo(actions, driver.findElement(By.id("sort-warehouses")));
    }

    @When("I press the arrow key down one time on the Warehouses Sort dropdown")
    public void whenIPressTheArrowKeyDownOneTimeOnTheWarehousesSortDropdown(){
        this.warehousesPage.pressArrowKeyNTimes(actions, Keys.ARROW_DOWN, 1);
    }

    @Then("I can see the add warehouse form modal")
    public void thenICanSeeTheAddWarehouseFormModal(){
        Assert.assertTrue(driver.findElement(By.id("add-warehouse-form-modal")).isDisplayed());
    }

    @Then("I can see the warehouse list ordered by {string}")
    public void thenIShouldSeeTheOrderedWarehouseList(String selectOption) {
        Assert.assertTrue(warehousesPage.isOrdered(selectOption));
    }

    @Then("I can see the Add Warehouse button")
    public void thenICanSeeTheAddWarehouseButton(){
        Assert.assertTrue(driver.findElement(By.id("add-warehouse-btn")).isDisplayed());
    }

    @Then("the warehouses sort dropdown will be focused")
    public void thenTheWarehousesSortDropdownWillBeFocused() {
        WebElement warehousesSortDropdown = warehousesPage.getWarehousesSortDropdown();
        WebElement focusedElement = driver.switchTo().activeElement();

        Assert.assertEquals(warehousesSortDropdown, focusedElement);
    }

    @Then("I should see the second item in the Warehouses Sort dropdown highlighted")
    public void thenIShouldSeeTheSecondItemInTheSortDropdownHighlighted() {
        WebElement warehousesSortDropdown = warehousesPage.getWarehousesSortDropdown();
        WebElement focusedElement = driver.switchTo().activeElement();

        Assert.assertEquals(warehousesSortDropdown, focusedElement);
    }

    @And("I can see the Sort By dropdown")
    public void thenICanSeeTheSortByDropdown(){
        Assert.assertTrue(driver.findElement(By.id("sort-warehouses")).isDisplayed());
    }

    @And("I can see the Warehouses table")
    public void thenICanSeeTheWarehousesTable(){
        Assert.assertTrue(driver.findElement(By.id("warehouses-table")).isDisplayed());
    }
}
