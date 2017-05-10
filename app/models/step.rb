# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string           not null
#  todo_id    :integer          not null
#  done       :boolean          default("false")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Step < ApplicationRecord
  validates :title, :body, :todo_id, presence: true
  validates :done, inclusion: { in: [true, false] }

  belongs_to :todo,
    primary_key: :id,
    foreign_key: :todo_id,
    class_name: :Todo
end
