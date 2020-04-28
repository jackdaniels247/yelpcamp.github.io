var Camp=require("../models/campgrounds");
var Comment=require("../models/comments");

var middlewareobj={};

middlewareobj.isloggedin=function(req, res, next){
  if(req.isAuthenticated()){
   return next();
  }
  else{
      req.flash("error","please login first!!");
   res.redirect("/login");
  }
  
 };
 
 middlewareobj.checkcomment=function(req,res,next){
  
   if(req.isAuthenticated()){
   Comment.findById(req.params.com_id,function(err, comment) {
      if(err){
       res.redirect("back");
      }
      else{
       if(comment.author.id.equals(req.user.id)){
       next();
       }
       else{
        req.flash("error","you do not have the permission to do that!!");
        res.redirect("back");
       }
       
      }
   });
  }
  else{
   res.redirect("back");
  }
  
 };

middlewareobj.checkOwnership=function(req,res,next){
  
  if(req.isAuthenticated()){
   Camp.findById(req.params.id,function(err,camp){
   if(err){
    res.redirect("back");
   }
   else{
    if(camp.author.id.equals(req.user.id)){
     next();
    }
    else{
     req.flash("error","you do not have the permission to do that!!");
     res.redirect("back");
    }
   }  
  
   });
   }else{
    res.redirect("back");
   }
  
  
  
 };
 


module.exports=middlewareobj;