# Open the file in read mode
with open('user.txt', 'r') as file:
    # Read the entire file content
    content = file.read()
    print(content)

print("Outter Content is : "+content)
