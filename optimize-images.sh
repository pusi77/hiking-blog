#!/bin/bash

# Directory containing the posts
POSTS_DIR="public/posts"

# Find all jpeg, jpg, and png images and convert them to webp
find "$POSTS_DIR" -type f \( -iname "*.jpeg" -o -iname "*.jpg" -o -iname "*.png" \) | while read -r img; do
    # Convert image to webp
    cwebp "$img" -o "${img%.*}.webp"
    
    # Check if conversion was successful
    if [ $? -eq 0 ]; then
        # Remove the original image
        rm "$img"
    else
        echo "Failed to convert $img"
    fi
done