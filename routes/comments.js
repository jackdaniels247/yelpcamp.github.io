var express=require("express");
var router=express.Router({mergeParams:true});
var Camp=require("../models/campgrounds");
var Comment=require("../models/comments");
var middleware=require("../middleware");




 router.get("/new", middleware.isloggedin, function(req, res) {
    Camp.findById(req.params.id,function(err,camp){
     if(err){
      console.log(err);
     }
     else{
      res.render("comnew",{camp:camp});
     }
    });
 });
 
 router.post("/",middleware.isloggedin,function(req,res){
    Camp.findById(req.params.id,function(err, camp) {
       if(err){
        console.log(err);
       } 
       else{
        Comment.create(req.body.comment,function(err,comment){
         if(err){
          console.log(err);
          res.redirect("/campgrounds");
         }
         else{
          comment.author.id=req.user._id;
          comment.author.username=req.user.username;
          comment.save();
          camp.comments.push(comment);
          camp.save();
          req.flash("success","Successfully added a Comment!!");
          res.redirect('/campgrounds/'+camp._id);
         }
        });
       }
    });
    
 });
 
 router.get("/:com_id/edit",middleware.checkcomment,function(req,res){
  
   Comment.findById(req.params.com_id,function(err, comment) {
      if(err){
       res.redirect("back");
      }
      else{
      
        res.render("comedit",{camp_id:req.params.id, comment:comment});
      }
   });
 });
 
 router.put("/:com_id",middleware.checkcomment,function(req,res){
  Comment.findByIdAndUpdate(req.params.com_id,req.body.comment,function(err,comment){
   if(err){
    res.redirect("back");
   }
   else{
    req.flash("success","Successfully updated a Comment!!!");
    res.redirect("/campgrounds/"+req.params.id);
   }
  });
 });
 
 router.delete("/:com_id",middleware.checkcomment,function(req,res){
  Comment.findByIdAndRemove(req.params.com_id,function(err,comment){
   if(err){
    res.redirect("back");
   }
   else{
    req.flash("success","Successfully deleted a Comment!!!");
    res.redirect("/campgrounds/"+req.params.id);
   }
  });
 });
 
 module.exports=router;