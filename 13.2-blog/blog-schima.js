-- Blog Schema
User Collection
user : {
      UserId : ...,
      ProfilePic : ...,
      Name : ....
      email:....
      rating:....
      posts:[postids.....]
}
Post Collection
{
_id : ...
Title : ...
Body:...
Tags:[.....]
PostTime : ...
Reactions:[
    {
      userId:...,
      emoji:...
    }
    ]
Comments : {
            UserId:...
            PostTime : ... ,
            Text : ...
            nLikes : ...
            }
}
}