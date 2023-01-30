require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validations' do
    it "No name error" do 
      @user = User.new(name: "newUser")
      @product = Product.new(name: nil, price: "10", quantity: "2", category: @category)
      @product.save
      expect(@product.errors.full_messages).to be_present
    end
  end
end
