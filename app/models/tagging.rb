class Tagging < ApplicationRecord
  validates :tag_id, :todo_id, presence: true
  validates :tag_id, uniqueness: { scope: :todo_id }

  belongs_to :tag
  belongs_to :todo
end
