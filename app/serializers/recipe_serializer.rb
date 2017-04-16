class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :instructions
  has_many :ingredients, through: :recipe_ingredients
end
