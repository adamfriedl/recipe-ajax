class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :recipe_id
  belongs_to :user
  belongs_to :recipe
end
