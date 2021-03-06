class CreateLoans < ActiveRecord::Migration
  def change
    create_table :loans do |t|

      t.references :lendee
      t.float :amount_requested
      t.float :amount_remaining
      t.float :amount_funded, default: 0.0
      t.boolean :funded?, default: false
      t.float :rate
      t.integer :term
      t.date :expiration_date

      t.timestamps
    end
  end
end
