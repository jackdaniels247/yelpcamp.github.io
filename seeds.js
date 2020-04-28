var mongoose =require("mongoose");
var Camp=require("./models/campgrounds");
var Comment=require("./models/comments");

var data=[
    {
      name:"lake laky",
      image:"https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e507441722d73d1904ec4_340.jpg",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
        {
      name:"white mountain",
       image:"https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e507441722d73d1904ec4_340.jpg",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
        {
      name:"grand canyon",
      image:"https://pixabay.com/get/52e3d3404a55af14f1dc84609620367d1c3ed9e04e507441722d73d1904ec4_340.png",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
    ];


var seedDB=function(){
    Camp.remove({});
    //   if(err){
    //       console.log(err);
    //   } 
    //   else{
    //       console.log("removed");
    //       data.forEach(function(seed){
    //          Camp.create(seed,function(err,seed){
    //              if(err){
    //                  console.log(err);
    //              }
    //              else{
    //                  console.log("added");
    //                  Comment.create({
    //                     text:"humpty dumpty sat on a wall",
    //                     author:"lucifer"
    //                  },function(err,comment){
    //                      if(err){
    //                          console.log(err);
    //                      }
    //                      else{
    //                          seed.comments.push(comment);
    //                          seed.save();
    //                          console.log("comment added");
                             
    //                      }
    //                  });
    //              }
    //          }) ;
    //       });
    //   }
    // });
};

module.exports=seedDB;

