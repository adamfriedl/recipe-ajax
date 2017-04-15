class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :instructions
  has_many :recipe_ingredients
end
