# Simple Blog with PHP and MySQL
Create a simple blog using PHP 7+ and MySQL.

The blog will have 2 pages (take a look at the images in the "docs" folder):
1. The main page which displays all posts
2. The post details page which opens once user clicked a certain post on the main page.



#### The following requirements should be take into consideration when planning the database:
1) Each post has the following details:
    * a title
    * the post content
    * an image (could be just the image name)
    * the creation date
    * one or more categories it belongs to

2) Each category can be tagged on one or more posts

Try and answer these questions to get a general idea on how your database will be structured:
- [x] Which tables do I need, what are their names and their collation? 
- [X] Which columns to create in each table?
- [X] For each column: which data type to use, does it have a default value, what are the restrictions to set upon?
- [x] Which column to set as the primary key?
- [x] What are the relations between the tables?



#### The following functionality is required in the blog php file:
1) The blog main page should display a list of all posts by default. Optional: display just the first 10 posts and load more as user moves to the next page or scroll down to the bottom.
2) Three recent posts are displayed on the blog page.
3) User can search for a certain term in post title or content.
4) User can choose to display all posts tagged with a certain category.



