class ItemsController < ApplicationController
    def index
        render json: Item.all
    end

    def show
        item  = Item.find_by(id: params[:id])
        render json: item
    end

    def destroy 
        item  = Item.find_by(id: params[:id])
        render json: item.destroy
    end 
end
