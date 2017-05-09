class CreateSteps < ActiveRecord::Migration[5.0]
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :todoId, null: false
      t.boolean :done, default: false

      t.timestamps
    end
  end
end
