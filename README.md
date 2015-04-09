This is a Test!

heroku add:keys


Deploy to Heroku
Next, make some changes to whispering-reef-9923's source code. Save the files and commit the changes to git:

$ git add .
  $ git commit -am "make it better"
Use Git to deploy those changes to whispering-reef-9923.herokuapp.com

$ git push heroku master
Congratulations! You've learned the basic flow for editing and deploying applications to Heroku. For more details on all of the above content, see the Getting Started guide on Dev Center.


git push origin master


git@heroku.com:evening-taiga-7935.git


git remote add heroku git@heroku.com:evening-taiga-7935.git

git remote add github https://github.com/jeffyyang/api_jinlin100.git

heroku run node

heroku run bash

定义环境变量
heroku config:set TIMES=2


app.get('/', function(request, response) {
  var result = ''
  var times = process.env.TIMES || 5  获取环境变量
  for (i=0; i < times; i++)
    result += cool();
  response.send(result);
});


