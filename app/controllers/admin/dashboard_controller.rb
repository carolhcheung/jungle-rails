class Admin::DashboardController < ApplicationController
  def show
    @products_count = Product.count
    @category_count = Category.count 
    puts @products_count
    puts @category_count
  end

end
