class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :instructions, :comments
  has_many :ingredients, through: :recipe_ingredients
end
