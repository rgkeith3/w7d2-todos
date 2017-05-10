class ChangeStepsTodoIdname < ActiveRecord::Migration[5.0]
  def change
    rename_column :steps, :todoId, :todo_id
  end
end
