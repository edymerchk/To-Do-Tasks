require 'spec_helper'

describe "User Authentication" do
  before :each do     
    @user = create(:user)      
  end
  it "should let login a existing user" do
    visit root_path 
    fill_in('Email', with: @user.email)
    fill_in('Password', with: @user.password)
    click_button "Login"
    page.should have_content "Signed in successfully."  
    page.should have_content "Logout"
  end
  it "shoult let logout" do
  	login @user  	
  	visit root_path
  	click_link 'Logout'
  	page.should have_content "Login"

  end
end