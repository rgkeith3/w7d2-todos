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

Step.destroy_all
s1 = Step.create(title: "Walk out the door", body: "this is redundant", done: false, todo_id: t2.id)
s2 = Step.create(title: "go to the store", body: "once again", done: false, todo_id: t2.id)

Tag.destroy_all
tag1 = Tag.create(name: "Home")
tag2 = Tag.create(name: "Work")
tag3 = Tag.create(name: "School")
tag4 = Tag.create(name: "Cats")
