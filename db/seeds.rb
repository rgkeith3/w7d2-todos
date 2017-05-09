# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all
t1 = Todo.create(title: "Make better things", body: "now", done: false)
t2 = Todo.create(title: "Get some more milk", body: "none of that 2% shit", done: false)
t3 = Todo.create(title: "Learn redux with rails", body: "neeeerd", done: true)
