# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string           not null
#  todoId     :integer          not null
#  done       :boolean          default("false")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Step < ApplicationRecord
  validates :title, :body, :todoId, presence: true
  validates :done, in: [:true, :false]

end
