class CommentsController < ApplicationController

  def create
    @comment = Comment.create(comment_params)
    render json: @comment, status: 201
  end
  
end
