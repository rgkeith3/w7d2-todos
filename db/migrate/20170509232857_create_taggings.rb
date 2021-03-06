class CreateTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :todo_id, null: false

      t.timestamps
    end
    add_index :taggings, :tag_id
    add_index :taggings, :todo_id
    add_index :taggings, [:tag_id, :todo_id], unique: true
  end
end
