class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :instructions, :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients
  has_many :comments
end
