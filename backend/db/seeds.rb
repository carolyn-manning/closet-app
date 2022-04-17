User.create(email: "test@test.com", password_digest: "password", first_name:"Carolyn", last_name:"Manning")
item = Item.create(brand:"Gucci", size: "1", color:"black", user_id:1)
Item.create(brand:"Free People", size: "2", color:"blue", user_id:1)
Item.create(brand:"Zara", size: "3", color:"red", user_id:1)
Item.create(brand:"Fendi", size: "4", color:"green", user_id:1)
Item.create(brand:"Prada", size: "5", color:"black", user_id:1)
Item.create(brand:"Patagonia", size: "6", color:"multi", user_id:1)

# item.image.attach(
#     io: File.open("./public/images/dressform.jpeg"),
#     filename: "dressform.jpeg",
#     content_type: "application/jpeg",
# )