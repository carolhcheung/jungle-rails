require 'rails_helper'

RSpec.describe Product, type: :model do
  describe 'Validations' do
      # validates :name, presence: true
      it "No name error" do 
        @category = Category.new(name: "newCategory")
        @product = Product.new(name: nil, price: "10", quantity: "2", category: @category)
        @product.save
        expect(@product.errors.full_messages).to be_present
      end
      # validates :price, presence: true
      it "No price error" do 
        @category = Category.new(name: "newCategory")
        @product = Product.new(name: "newProduct", quantity: "2", category: @category)
        @product.save
        expect(@product.errors.full_messages).to include("Price can\'t be blank")
      end
      # validates :quantity, presence: true
      it "No quantity error" do 
        @category = Category.new(name: "newCategory")
        @product = Product.new(name: "newProduct", price: "10", quantity: nil, category: @category)
        @product.save
        expect(@product.errors.full_messages).to include("Quantity can\'t be blank")
      end
      # validates :category, presence: true
      it "No category error" do 
        @category = Category.new(name: "newCategory")
        @product = Product.new(name: "newProduct", price: "10", quantity: "2", category: nil)
        @product.save
        expect(@product.errors.full_messages).to include("Category can\'t be blank")
      end
  end
end
