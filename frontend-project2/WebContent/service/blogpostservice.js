app.factory('BlogPostService',function($http){
var blogPostService={}

blogPostService.saveBlog=function(blogPost){
return $http.post("http://localhost:8081/backend_project2/saveblogpost", blogPost)
}
return blogPostService;
})